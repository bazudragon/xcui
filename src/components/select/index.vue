<template>
    <div tabindex="0"
         :class="getWrapCls"
         @focus="activate()"
         @blur="showSearch ? false : deactivate()"
         @keydown.enter.stop.prevent.self="enterSearchValue()">
        <div class="xcui-select-selection">
            <div class="xcui-select-selection-rendered"
                 @mousedown.stop="toggle()">
                <input
                    type="text"
                    name="search"
                    v-el:search
                    autocomplete="off"
                    class="xcui-select-search-input"
                    v-if="showSearch"
                    v-model="searchValue"
                    @focus.prevent="activate()"
                    @blur.prevent="deactivate()"
                    @keyup.down="keyNext()"
                    @keyup.up="keyPrev()"
                    @keydown.enter.stop.prevent.self="enterSearchValue()"
                    @change.prevent.stop=""
                    :placeholder="placeholder">
                <span
                    class="xcui-select-selection-text"
                    v-if="!showSearch"
                    v-text="currentOptionLabel || placeholder">
                </span>
                <i class="glyphicon xcui-select-arrow"
                   @mousedown.prevent.stop="toggle()"
                   :class="{'glyphicon-triangle-bottom':(!isOpen),'glyphicon-triangle-top':(isOpen)}"></i>
            </div>
        </div>
        <div class="xcui-select-menu-dropdown"
             v-show="(isOpen && filteredOptions.length>0) || (isOpen && multiple)">
            <ul
                v-el:list
                aria-activedescendant
                class="xcui-select-menu">
                <li class="xcui-select-menu-item"
                    v-if="multipleMaxShow">
                    最多可选{{multipleMax}}项!
                </li>
                <li class="xcui-select-menu-item"
                    v-if="filteredOptions.length<1 && searchEmptyText"
                    v-text="searchEmptyText">
                </li>
                <template
                          v-for="item in filteredOptions">
                    <li class="xcui-select-menu-item"
                        v-if="!optgroup"
                        tabindex="1"
                        :class="{'xcui-select-menu-item-selected': isSelected(item), 'xcui-select-menu-item-key': $index === selectIndex,'disabled': item.disable}"
                        @mouseenter.prevent.stop.self="indexSet($index)"
                        @mousedown.prevent="select(item)">
                        <span v-text="getOptionLabel(item)"></span>
                    </li>
                </template>
                <template
                    v-for="item in filteredOptions">
                    <li class="xcui-select-menu-group" v-if="optgroup">
                        <div class="xcui-select-menu-group-title">{{item.name}}</div>
                        <ul>
                            <template v-for="option in item.options">
                                <li class="xcui-select-menu-group-item"
                                    :class="{'xcui-select-menu-group-item-selected': isSelected(option,$parent.$index,$index), 'disabled': option.disable}"
                                    @mousedown.prevent.stop.self="optgroupSelect($parent.$index,$index,option)">
                                    <span v-text="getOptionLabel(option)"></span>
                                </li>
                            </template>
                        </ul>
                    </li>
                </template>
            </ul>
        </div>
    </div>
</template>
<script>
    import clone from '../../utils/clone';
    import fuzzysearch from 'fuzzysearch';
    export default {
        name: 'xcui-select',
        props: {
            // 自定义css类名
            className: {
                type: String
            },
            // 默认选中值
            selected: [String, Array],
            // 选择框默认文字
            placeholder: {
                type: String
            },
            // 禁用select
            disabled: {
                type: Boolean,
                default: false
            },
            // 显示搜索框
            showSearch: {
                type: Boolean,
                default: false
            },
            // 搜索模式下选择以后清空搜索内容
            clearOnSelect: {
                type: Boolean,
                default: false
            },
            // 列表空提示
            searchEmptyText: {
                type: String,
                default: ''
            },
            // 分组模式
            optgroup: {
                type: Boolean,
                default: false
            },
            // 定制label
            customLabel: {
                type: Function
            },
            // 数据源
            options: {
                type: Array
            },
            // 多选
            multiple: {
                type: Boolean,
                default: false
            },
            multipleMax: {
                type: Number,
                default: 0
            },
            // label默认选择字段
            label: {
                type: String,
                default: ''
            },
            // 选择后关闭list
            closeAfterSelect: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                searchValue: '',
                isOpen: false,
                selectIndex: 0,
                value: this.selected ? clone(this.selected) : this.multiple ? [] : null
            };
        },
        methods: {
            activate() {
                if (this.isOpen || this.disabled) {
                    return;
                }
                this.isOpen = true;
                if (this.showSearch) {
                    if (this.clearOnSelect) {
                        this.searchValue = '';
                        this.options = [];
                    }
                    this.$els.search.focus();
                }
                else {
                    this.$el.focus();
                }
            },
            deactivate() {
                if (!this.isOpen) {
                    return;
                }
                if (this.showSearch) {
                    this.$els.search.blur();
                    this.adjustSearch();
                }
                this.isOpen = false;
            },
            toggle(key) {
                if (!this.isOpen) {
                    this.activate();
                }
                else {
                    this.deactivate();
                }
            },
            getOptionLabel(option) {
                if (option !== null && typeof option === 'object') {
                    if (this.customLabel) {
                        return this.customLabel(option);
                    }
                    else if (this.label && option[this.label]) {
                        return option[this.label];
                    }
                    return option.label;
                }
                return option;
            },
            optgroupSelect(parentIndex, index, option) {
                if (this.selectIndex === (parentIndex + '-' + index)
                    && this.value === option) {
                    return;
                }
                this.value = option;
                this.selectIndex = (parentIndex + '-' + index);
                this.$emit('change', clone(this.value), parentIndex, index);
                this.$emit('select', clone(this.value), parentIndex, index);
                this.closeAfterSelect && this.deactivate();
            },
            select(option) {
                const isSelected = this.isSelected(option);
                if (!option || option.disable) {
                    return;
                }
                if (this.multiple) {
                    let optionValue = option;
                    if (typeof option === 'object') {
                        optionValue = option[this.label] || option.label;
                    }
                    if (isSelected) {
                        this.removeOption(option);
                    }
                    else {
                        if ((this.multipleMax > this.value.length) || !this.multipleMax) {
                            if (typeof option === 'object') {
                                this.value.push(option);
                            }
                            else {
                                this.value.push(optionValue);
                            }
                        }
                    }
                }
                else {
                    if (isSelected) {
                        return;
                    }
                    this.value = isSelected ? null : option;
                }
                this.$emit('change', clone(this.value));
                this.$emit('select', clone(this.value));
                this.closeAfterSelect && this.deactivate();
            },
            /**
             *  判断是否已选
             * @param option
             * @param groupIndex 分组index, optgroup模式下必传
             * @param index  value index, optgroup模式下必传
             * @returns {boolean}
             */
            isSelected(option, groupIndex, index) {
                let me = this;
                if (!this.value) {
                    return false;
                }
                if (this.optgroup) {
                    return this.selectIndex === groupIndex + '-' + index;
                }
                if (this.multiple) {
                    if (typeof option === 'object') {
                        let value = option.label;
                        if (this.label && option[this.label]) {
                            value = option[this.label];
                        }
                        let isMatched = false;
                        let valueLen = this.value.length;
                        for (let i = 0; i < valueLen; i++) {
                            if (typeof this.value[i] === 'string') {
                                // if string mean defaultValue set
                                if (value === this.value[i]) {
                                    isMatched = true;
                                    this.value[i] = option;
                                }
                            }
                        }
                        return this.value.indexOf(option) > -1 || isMatched;
                    }
                    return this.value.indexOf(option) > -1;
                }
                if (this.showSearch) {
                    if (typeof option === 'object') {
                        return this.searchValue === option[me.label];
                    }
                    return this.searchValue === option;
                }
                if (this.value === option && !option.disable) {
                    return true;
                }
                return false;
            },
            removeOption(option) {
                if (this.value.length === 0) {
                    return;
                }
                if (typeof option === 'object') {
                    if (this.value.indexOf(option) !== -1) {
                        this.value.splice(this.value.indexOf(option), 1);
                    }
                }
                this.value.$remove(option);
                this.$emit('remove', clone(option));
            },
            indexSet(parentIndex, index) {
                if (this.optgroup) {
                    this.selectIndex = parentIndex + '-' + index;
                    return;
                }
                this.selectIndex = index;
            },
            // key actions
            enterSearchValue() {
                if (this.filteredOptions.length > 0) {
                    this.select(this.filteredOptions[this.selectIndex]);
                }
                this.resetSelectIndex();
            },
            keyNext() {
                let filterLen = this.filteredOptions.length;
                if (this.selectIndex < filterLen - 1) {
                    this.selectIndex++;
                }
                this.resetSearchScrollTop();
            },
            keyPrev() {
                if (this.selectIndex > 0) {
                    this.selectIndex--;
                }
                this.resetSearchScrollTop();
            },
            resetSearchScrollTop() {
                let index = this.selectIndex;
                let scrollTop = this.$els.list.scrollTop;
                let {itemHeight, listHeight} = this.getDropDownHeight;
                let listViewLen = Math.floor(listHeight / itemHeight);
                let indexPos = index * itemHeight;
                if (scrollTop <= (indexPos - listViewLen * itemHeight)) {
                    this.$els.list.scrollTop = indexPos - ((listViewLen - 1) * itemHeight);
                }
                if (scrollTop >= indexPos) {
                    this.$els.list.scrollTop = indexPos;
                }
            },
            resetSelectIndex() {
                this.selectIndex = 0;
                this.closeAfterSelect && this.deactivate();
            },
            adjustSearch() {
                if (!this.showSearch) {
                    return;
                }
                this.searchValue = this.value ? this.currentOptionLabel : '';
            },
            reset() {
                this.selected = '';
                this.value = null;
            }
        },
        computed: {
            getWrapCls() {
                let me = this;
                let cls = ['xcui-select'];
                if (this.disabled) {
                    cls.push('disabled');
                }
                if (this.isOpen) {
                    cls.push('xcui-select-open');
                }
                if (this.className) {
                    cls.push(me.className);
                }
                return cls.join(' ');
            },
            filteredOptions() {
                let value = this.searchValue;
                let me = this;
                if (this.showSearch && this.options.length) {
                    return this.options.filter(function (item) {
                        if (typeof item !== 'string') {
                            return fuzzysearch(value, item[me.label || 'label']);
                        }
                        return fuzzysearch(value, item);
                    });
                }
                return this.options || [];
            },
            currentOptionLabel() {
                if (!this.value) {
                    return this.placeholder;
                }
                if (this.multiple) {
                    return this.value.map(k => {
                        if (typeof k !== 'object') {
                            return k;
                        }
                        let label = this.label || 'label';
                        return k[label];
                    }).join(',');
                }
                if (typeof this.value === 'string') {
                    return this.value;
                }
                else if (this.label) {
                    return this.value[this.label];
                }
                return this.value.label || '';
            },
            getDropDownHeight() {
                let list = this.$els.list;
                let item = list.children[0] || null;
                let itemHeight = item.currentStyle ? item.currentStyle.height : getComputedStyle(item, false).height;
                let listHeight = list.currentStyle ? list.currentStyle.height : getComputedStyle(list, false).height;
                return {
                    listHeight: listHeight.replace('px', ''),
                    itemHeight: itemHeight.replace('px', '')
                };
            },
            optgroupDefaultIndex() {
                let me = this;
                let selected = this.selected;
                let indexs = [];
                if (!this.options) {
                    return indexs;
                }
                this.options.forEach((item, index) => {
                    item.options && item.options.forEach((subItem, subIndex) => {
                        if (typeof subItem === 'string' && selected === subItem) {
                            indexs = [index, subIndex];
                            return;
                        }
                        if (subItem[me.label] && subItem[me.label] === selected) {
                            if (subItem[me.label].disable) {
                                return;
                            }
                            indexs = [index, subIndex];
                            return;
                        }
                    });
                });
                return indexs;
            },
            multipleMaxShow() {
                if (!this.multiple) {
                    return false;
                }
                return this.multiple
                    && this.multipleMax !== 0
                    && this.value
                    && this.multipleMax === this.value.length;
            }
        },
        watch: {
            'options'() {
                if (this.showSearch) {
                    return;
                }
                this.reset();
            },
            'filteredOptions'() {
                // 过滤数组发生变更
                let filterLen = this.filteredOptions.length;
                if (this.selectIndex >= filterLen) {
                    this.selectIndex = filterLen > 0 ? filterLen - 1 : 0;
                }
            },
            'searchValue'(oldVal, newVal) {
                if (this.searchValue !== this.currentOptionLabel) {
                    this.$emit('search-change', this.searchValue);
                }
            },
            'selected'() {
                if (this.optgroup) {
                    this.value = this.selected;
                    let indexs = this.optgroupDefaultIndex;
                    this.selectIndex = indexs.join('-');
                }
                else {
                    this.value = this.selected;
                }
            }
        }
    };
</script>
<style lang="less">
    @select-prefix: xcui-select;
    .@{select-prefix} {
        display: inline-block;
        box-sizing: content-box;
        position: relative;
        vertical-align: middle;
        color: #666;
        font-size: 14px;
        z-index: 10;
        width:100%;
        &-open {
            .xcui-select-selection {
                border-color: #66afe9 !important;
                outline: 0;
                box-shadow: 0 0 0 2px #2db7f533;
            }
        }
        &.disabled {
            .xcui-select-selection {
                color: #ccc;
                background: #f7f7f7;
                cursor: not-allowed;
            }
        }
        &-selection {
            outline: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            box-sizing: border-box;
            display: block;
            background-color: #fff;
            border-radius: 4px;
            border: 1px solid #ccc;
            padding: 2px 6px;
            -webkit-transition: all .3s cubic-bezier(.645, .045, .355, 1);
            transition: all .3s cubic-bezier(.645, .045, .355, 1);
            &-rendered {
                height: 26px;
                display: block;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                /*padding-left: 8px;*/
                padding-right: 24px;
                line-height: 26px;
            }
            &-text {
                display: block;
                font-size: 14px;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
        }
        &-menu-dropdown {
            background-color: #fff;
            //border: 1px solid #d9d9d9;
            /*box-shadow: 0 1px 6px #63636333;*/
            border-radius: 4px;
            box-sizing: border-box;
            z-index: 1050;
            /*left: -9999px;*/
            /*top: -9999px;*/
            position: absolute;
            top: 100%;
            width: 100%;
            margin-top: 2px;
            outline: none;
            overflow:hidden;
            font-size: 12px;
            max-height: 200px;
            border: 1px solid rgba(0,0,0,.15);
            box-shadow: 0 6px 12px rgba(0,0,0,.175);
            z-index: 1;
        }
        &-menu ,&-menu-group{
            outline: none;
            margin-bottom: 0;
            padding-left: 0;
            list-style: none;
            max-height: 200px;
            overflow:auto;
            &-item {
                position: relative;
                display: block;
                padding: 7px 15px;
                font-weight: 400;
                color: #262626;
                cursor: pointer;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                -webkit-transition: background .3s ease;
                transition: background .3s ease;
                &-select {
                    font-weight: 500;
                    color: #666;
                    background-color: #f7f7f7;
                }
                &.disabled {
                    color: #ccc !important;
                    cursor: not-allowed !important;
                }
                &-selected {
                    background-color: #337ab7;
                    font-weight: 700;
                    color: #fff;
                    &:after {
                        font-family: 'Glyphicons Halflings';
                        content: "\e013";
                        position: absolute;
                        right: 6px;;
                        top: 6px;
                        font-size: 12px;
                    }
                    &:hover {
                        background-color: #f7f7f7;
                        font-weight: 700;
                        color: #666;
                    }
                }
                &:hover {
                    background-color: #f5f5f5;
                }
                &-partial {
                    background: red;
                }
                &-key {
                    background-color: #f5f5f5;
                }
            }
        }
        &-menu-group{
            &-title{
                color: #999;
                line-height: 1.5;
                padding: 8px 12px;
            }
            &-item{
                padding-left:20px;
                &-selected {
                    background-color: #337ab7;
                    font-weight: 700;
                    color: #fff;
                    &:after {
                        font-family: 'Glyphicons Halflings';
                        content: "\e013";
                        position: absolute;
                        right: 6px;;
                        top: 6px;
                        font-size: 12px;
                    }
                    &:hover {
                        background-color: #f7f7f7;
                        font-weight: 700;
                        color: #666;
                    }
                }
            }
            >ul{
                margin:0;
                padding:0;
            }
        }
        &-search-input {
            width: 100%;
            border: 0;
            font-size: 100%;
            height: 100%;
            outline: 0;
            border-radius: 6px;
        }
        .glyphicon {
            font-size: 12px;
        }
        .xcui-select-arrow {
            position: absolute;
            right: 10px;
            top: 10px;
            color: #ccc;
        }

        > ul > li > a {
            padding: 0;
            background-color: #fff;
        }
    }
</style>
