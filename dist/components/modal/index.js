(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object") module.exports = factory(); else if (typeof define === "function" && define.amd) define([], factory); else {
        var a = factory();
        for (var i in a) (typeof exports === "object" ? exports : root)[i] = a[i];
    }
})(this, function() {
    return function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                exports: {},
                id: moduleId,
                loaded: false
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.loaded = true;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.p = "";
        return __webpack_require__(0);
    }([ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(41);
    }, function(module, exports) {
        var global = module.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
        if (typeof __g == "number") __g = global;
    }, function(module, exports) {
        var hasOwnProperty = {}.hasOwnProperty;
        module.exports = function(it, key) {
            return hasOwnProperty.call(it, key);
        };
    }, function(module, exports, __webpack_require__) {
        var IObject = __webpack_require__(56), defined = __webpack_require__(15);
        module.exports = function(it) {
            return IObject(defined(it));
        };
    }, function(module, exports, __webpack_require__) {
        module.exports = !__webpack_require__(9)(function() {
            return Object.defineProperty({}, "a", {
                get: function() {
                    return 7;
                }
            }).a != 7;
        });
    }, function(module, exports, __webpack_require__) {
        var dP = __webpack_require__(6), createDesc = __webpack_require__(13);
        module.exports = __webpack_require__(4) ? function(object, key, value) {
            return dP.f(object, key, createDesc(1, value));
        } : function(object, key, value) {
            object[key] = value;
            return object;
        };
    }, function(module, exports, __webpack_require__) {
        var anObject = __webpack_require__(11), IE8_DOM_DEFINE = __webpack_require__(30), toPrimitive = __webpack_require__(25), dP = Object.defineProperty;
        exports.f = __webpack_require__(4) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
            anObject(O);
            P = toPrimitive(P, true);
            anObject(Attributes);
            if (IE8_DOM_DEFINE) try {
                return dP(O, P, Attributes);
            } catch (e) {}
            if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported!");
            if ("value" in Attributes) O[P] = Attributes.value;
            return O;
        };
    }, function(module, exports, __webpack_require__) {
        var store = __webpack_require__(23)("wks"), uid = __webpack_require__(14), Symbol = __webpack_require__(1).Symbol, USE_SYMBOL = typeof Symbol == "function";
        var $exports = module.exports = function(name) {
            return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)("Symbol." + name));
        };
        $exports.store = store;
    }, function(module, exports) {
        var core = module.exports = {
            version: "2.4.0"
        };
        if (typeof __e == "number") __e = core;
    }, function(module, exports) {
        module.exports = function(exec) {
            try {
                return !!exec();
            } catch (e) {
                return true;
            }
        };
    }, function(module, exports, __webpack_require__) {
        var $keys = __webpack_require__(35), enumBugKeys = __webpack_require__(16);
        module.exports = Object.keys || function keys(O) {
            return $keys(O, enumBugKeys);
        };
    }, function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(12);
        module.exports = function(it) {
            if (!isObject(it)) throw TypeError(it + " is not an object!");
            return it;
        };
    }, function(module, exports) {
        module.exports = function(it) {
            return typeof it === "object" ? it !== null : typeof it === "function";
        };
    }, function(module, exports) {
        module.exports = function(bitmap, value) {
            return {
                enumerable: !(bitmap & 1),
                configurable: !(bitmap & 2),
                writable: !(bitmap & 4),
                value: value
            };
        };
    }, function(module, exports) {
        var id = 0, px = Math.random();
        module.exports = function(key) {
            return "Symbol(".concat(key === undefined ? "" : key, ")_", (++id + px).toString(36));
        };
    }, function(module, exports) {
        module.exports = function(it) {
            if (it == undefined) throw TypeError("Can't call method on  " + it);
            return it;
        };
    }, function(module, exports) {
        module.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    }, function(module, exports, __webpack_require__) {
        var global = __webpack_require__(1), core = __webpack_require__(8), ctx = __webpack_require__(53), hide = __webpack_require__(5), PROTOTYPE = "prototype";
        var $export = function(type, name, source) {
            var IS_FORCED = type & $export.F, IS_GLOBAL = type & $export.G, IS_STATIC = type & $export.S, IS_PROTO = type & $export.P, IS_BIND = type & $export.B, IS_WRAP = type & $export.W, exports = IS_GLOBAL ? core : core[name] || (core[name] = {}), expProto = exports[PROTOTYPE], target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE], key, own, out;
            if (IS_GLOBAL) source = name;
            for (key in source) {
                own = !IS_FORCED && target && target[key] !== undefined;
                if (own && key in exports) continue;
                out = own ? target[key] : source[key];
                exports[key] = IS_GLOBAL && typeof target[key] != "function" ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? function(C) {
                    var F = function(a, b, c) {
                        if (this instanceof C) {
                            switch (arguments.length) {
                              case 0:
                                return new C();

                              case 1:
                                return new C(a);

                              case 2:
                                return new C(a, b);
                            }
                            return new C(a, b, c);
                        }
                        return C.apply(this, arguments);
                    };
                    F[PROTOTYPE] = C[PROTOTYPE];
                    return F;
                }(out) : IS_PROTO && typeof out == "function" ? ctx(Function.call, out) : out;
                if (IS_PROTO) {
                    (exports.virtual || (exports.virtual = {}))[key] = out;
                    if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
                }
            }
        };
        $export.F = 1;
        $export.G = 2;
        $export.S = 4;
        $export.P = 8;
        $export.B = 16;
        $export.W = 32;
        $export.U = 64;
        $export.R = 128;
        module.exports = $export;
    }, function(module, exports) {
        module.exports = {};
    }, function(module, exports) {
        module.exports = true;
    }, function(module, exports) {
        exports.f = {}.propertyIsEnumerable;
    }, function(module, exports, __webpack_require__) {
        var def = __webpack_require__(6).f, has = __webpack_require__(2), TAG = __webpack_require__(7)("toStringTag");
        module.exports = function(it, tag, stat) {
            if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
                configurable: true,
                value: tag
            });
        };
    }, function(module, exports, __webpack_require__) {
        var shared = __webpack_require__(23)("keys"), uid = __webpack_require__(14);
        module.exports = function(key) {
            return shared[key] || (shared[key] = uid(key));
        };
    }, function(module, exports, __webpack_require__) {
        var global = __webpack_require__(1), SHARED = "__core-js_shared__", store = global[SHARED] || (global[SHARED] = {});
        module.exports = function(key) {
            return store[key] || (store[key] = {});
        };
    }, function(module, exports) {
        var ceil = Math.ceil, floor = Math.floor;
        module.exports = function(it) {
            return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
        };
    }, function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(12);
        module.exports = function(it, S) {
            if (!isObject(it)) return it;
            var fn, val;
            if (S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it))) return val;
            if (typeof (fn = it.valueOf) == "function" && !isObject(val = fn.call(it))) return val;
            if (!S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it))) return val;
            throw TypeError("Can't convert object to primitive value");
        };
    }, function(module, exports, __webpack_require__) {
        var global = __webpack_require__(1), core = __webpack_require__(8), LIBRARY = __webpack_require__(19), wksExt = __webpack_require__(27), defineProperty = __webpack_require__(6).f;
        module.exports = function(name) {
            var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
            if (name.charAt(0) != "_" && !(name in $Symbol)) defineProperty($Symbol, name, {
                value: wksExt.f(name)
            });
        };
    }, function(module, exports, __webpack_require__) {
        exports.f = __webpack_require__(7);
    }, function(module, exports) {
        var toString = {}.toString;
        module.exports = function(it) {
            return toString.call(it).slice(8, -1);
        };
    }, function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(12), document = __webpack_require__(1).document, is = isObject(document) && isObject(document.createElement);
        module.exports = function(it) {
            return is ? document.createElement(it) : {};
        };
    }, function(module, exports, __webpack_require__) {
        module.exports = !__webpack_require__(4) && !__webpack_require__(9)(function() {
            return Object.defineProperty(__webpack_require__(29)("div"), "a", {
                get: function() {
                    return 7;
                }
            }).a != 7;
        });
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var LIBRARY = __webpack_require__(19), $export = __webpack_require__(17), redefine = __webpack_require__(36), hide = __webpack_require__(5), has = __webpack_require__(2), Iterators = __webpack_require__(18), $iterCreate = __webpack_require__(58), setToStringTag = __webpack_require__(21), getPrototypeOf = __webpack_require__(65), ITERATOR = __webpack_require__(7)("iterator"), BUGGY = !([].keys && "next" in [].keys()), FF_ITERATOR = "@@iterator", KEYS = "keys", VALUES = "values";
        var returnThis = function() {
            return this;
        };
        module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
            $iterCreate(Constructor, NAME, next);
            var getMethod = function(kind) {
                if (!BUGGY && kind in proto) return proto[kind];
                switch (kind) {
                  case KEYS:
                    return function keys() {
                        return new Constructor(this, kind);
                    };

                  case VALUES:
                    return function values() {
                        return new Constructor(this, kind);
                    };
                }
                return function entries() {
                    return new Constructor(this, kind);
                };
            };
            var TAG = NAME + " Iterator", DEF_VALUES = DEFAULT == VALUES, VALUES_BUG = false, proto = Base.prototype, $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT], $default = $native || getMethod(DEFAULT), $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod("entries") : undefined, $anyNative = NAME == "Array" ? proto.entries || $native : $native, methods, key, IteratorPrototype;
            if ($anyNative) {
                IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
                if (IteratorPrototype !== Object.prototype) {
                    setToStringTag(IteratorPrototype, TAG, true);
                    if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
                }
            }
            if (DEF_VALUES && $native && $native.name !== VALUES) {
                VALUES_BUG = true;
                $default = function values() {
                    return $native.call(this);
                };
            }
            if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
                hide(proto, ITERATOR, $default);
            }
            Iterators[NAME] = $default;
            Iterators[TAG] = returnThis;
            if (DEFAULT) {
                methods = {
                    values: DEF_VALUES ? $default : getMethod(VALUES),
                    keys: IS_SET ? $default : getMethod(KEYS),
                    entries: $entries
                };
                if (FORCED) for (key in methods) {
                    if (!(key in proto)) redefine(proto, key, methods[key]);
                } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
            }
            return methods;
        };
    }, function(module, exports, __webpack_require__) {
        var anObject = __webpack_require__(11), dPs = __webpack_require__(62), enumBugKeys = __webpack_require__(16), IE_PROTO = __webpack_require__(22)("IE_PROTO"), Empty = function() {}, PROTOTYPE = "prototype";
        var createDict = function() {
            var iframe = __webpack_require__(29)("iframe"), i = enumBugKeys.length, lt = "<", gt = ">", iframeDocument;
            iframe.style.display = "none";
            __webpack_require__(55).appendChild(iframe);
            iframe.src = "javascript:";
            iframeDocument = iframe.contentWindow.document;
            iframeDocument.open();
            iframeDocument.write(lt + "script" + gt + "document.F=Object" + lt + "/script" + gt);
            iframeDocument.close();
            createDict = iframeDocument.F;
            while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
            return createDict();
        };
        module.exports = Object.create || function create(O, Properties) {
            var result;
            if (O !== null) {
                Empty[PROTOTYPE] = anObject(O);
                result = new Empty();
                Empty[PROTOTYPE] = null;
                result[IE_PROTO] = O;
            } else result = createDict();
            return Properties === undefined ? result : dPs(result, Properties);
        };
    }, function(module, exports, __webpack_require__) {
        var $keys = __webpack_require__(35), hiddenKeys = __webpack_require__(16).concat("length", "prototype");
        exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
            return $keys(O, hiddenKeys);
        };
    }, function(module, exports) {
        exports.f = Object.getOwnPropertySymbols;
    }, function(module, exports, __webpack_require__) {
        var has = __webpack_require__(2), toIObject = __webpack_require__(3), arrayIndexOf = __webpack_require__(52)(false), IE_PROTO = __webpack_require__(22)("IE_PROTO");
        module.exports = function(object, names) {
            var O = toIObject(object), i = 0, result = [], key;
            for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
            while (names.length > i) if (has(O, key = names[i++])) {
                ~arrayIndexOf(result, key) || result.push(key);
            }
            return result;
        };
    }, function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(5);
    }, function(module, exports, __webpack_require__) {
        var defined = __webpack_require__(15);
        module.exports = function(it) {
            return Object(defined(it));
        };
    }, function(module, exports, __webpack_require__) {
        var __vue_script__, __vue_template__;
        __webpack_require__(78);
        __vue_script__ = __webpack_require__(40);
        __vue_template__ = __webpack_require__(79);
        module.exports = __vue_script__ || {};
        if (module.exports.__esModule) module.exports = module.exports.default;
        if (__vue_template__) {
            (typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
        }
    }, function(module, exports, __webpack_require__) {
        (function(global) {
            /*!
	 * Vue.js v1.0.26
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
            "use strict";
            function set(obj, key, val) {
                if (hasOwn(obj, key)) {
                    obj[key] = val;
                    return;
                }
                if (obj._isVue) {
                    set(obj._data, key, val);
                    return;
                }
                var ob = obj.__ob__;
                if (!ob) {
                    obj[key] = val;
                    return;
                }
                ob.convert(key, val);
                ob.dep.notify();
                if (ob.vms) {
                    var i = ob.vms.length;
                    while (i--) {
                        var vm = ob.vms[i];
                        vm._proxy(key);
                        vm._digest();
                    }
                }
                return val;
            }
            function del(obj, key) {
                if (!hasOwn(obj, key)) {
                    return;
                }
                delete obj[key];
                var ob = obj.__ob__;
                if (!ob) {
                    if (obj._isVue) {
                        delete obj._data[key];
                        obj._digest();
                    }
                    return;
                }
                ob.dep.notify();
                if (ob.vms) {
                    var i = ob.vms.length;
                    while (i--) {
                        var vm = ob.vms[i];
                        vm._unproxy(key);
                        vm._digest();
                    }
                }
            }
            var hasOwnProperty = Object.prototype.hasOwnProperty;
            function hasOwn(obj, key) {
                return hasOwnProperty.call(obj, key);
            }
            var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;
            function isLiteral(exp) {
                return literalValueRE.test(exp);
            }
            function isReserved(str) {
                var c = (str + "").charCodeAt(0);
                return c === 36 || c === 95;
            }
            function _toString(value) {
                return value == null ? "" : value.toString();
            }
            function toNumber(value) {
                if (typeof value !== "string") {
                    return value;
                } else {
                    var parsed = Number(value);
                    return isNaN(parsed) ? value : parsed;
                }
            }
            function toBoolean(value) {
                return value === "true" ? true : value === "false" ? false : value;
            }
            function stripQuotes(str) {
                var a = str.charCodeAt(0);
                var b = str.charCodeAt(str.length - 1);
                return a === b && (a === 34 || a === 39) ? str.slice(1, -1) : str;
            }
            var camelizeRE = /-(\w)/g;
            function camelize(str) {
                return str.replace(camelizeRE, toUpper);
            }
            function toUpper(_, c) {
                return c ? c.toUpperCase() : "";
            }
            var hyphenateRE = /([a-z\d])([A-Z])/g;
            function hyphenate(str) {
                return str.replace(hyphenateRE, "$1-$2").toLowerCase();
            }
            var classifyRE = /(?:^|[-_\/])(\w)/g;
            function classify(str) {
                return str.replace(classifyRE, toUpper);
            }
            function bind(fn, ctx) {
                return function(a) {
                    var l = arguments.length;
                    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
                };
            }
            function toArray(list, start) {
                start = start || 0;
                var i = list.length - start;
                var ret = new Array(i);
                while (i--) {
                    ret[i] = list[i + start];
                }
                return ret;
            }
            function extend(to, from) {
                var keys = Object.keys(from);
                var i = keys.length;
                while (i--) {
                    to[keys[i]] = from[keys[i]];
                }
                return to;
            }
            function isObject(obj) {
                return obj !== null && typeof obj === "object";
            }
            var toString = Object.prototype.toString;
            var OBJECT_STRING = "[object Object]";
            function isPlainObject(obj) {
                return toString.call(obj) === OBJECT_STRING;
            }
            var isArray = Array.isArray;
            function def(obj, key, val, enumerable) {
                Object.defineProperty(obj, key, {
                    value: val,
                    enumerable: !!enumerable,
                    writable: true,
                    configurable: true
                });
            }
            function _debounce(func, wait) {
                var timeout, args, context, timestamp, result;
                var later = function later() {
                    var last = Date.now() - timestamp;
                    if (last < wait && last >= 0) {
                        timeout = setTimeout(later, wait - last);
                    } else {
                        timeout = null;
                        result = func.apply(context, args);
                        if (!timeout) context = args = null;
                    }
                };
                return function() {
                    context = this;
                    args = arguments;
                    timestamp = Date.now();
                    if (!timeout) {
                        timeout = setTimeout(later, wait);
                    }
                    return result;
                };
            }
            function indexOf(arr, obj) {
                var i = arr.length;
                while (i--) {
                    if (arr[i] === obj) return i;
                }
                return -1;
            }
            function cancellable(fn) {
                var cb = function cb() {
                    if (!cb.cancelled) {
                        return fn.apply(this, arguments);
                    }
                };
                cb.cancel = function() {
                    cb.cancelled = true;
                };
                return cb;
            }
            function looseEqual(a, b) {
                return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
            }
            var hasProto = "__proto__" in {};
            var inBrowser = typeof window !== "undefined" && Object.prototype.toString.call(window) !== "[object Object]";
            var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
            var UA = inBrowser && window.navigator.userAgent.toLowerCase();
            var isIE = UA && UA.indexOf("trident") > 0;
            var isIE9 = UA && UA.indexOf("msie 9.0") > 0;
            var isAndroid = UA && UA.indexOf("android") > 0;
            var isIos = UA && /(iphone|ipad|ipod|ios)/i.test(UA);
            var iosVersionMatch = isIos && UA.match(/os ([\d_]+)/);
            var iosVersion = iosVersionMatch && iosVersionMatch[1].split("_");
            var hasMutationObserverBug = iosVersion && Number(iosVersion[0]) >= 9 && Number(iosVersion[1]) >= 3 && !window.indexedDB;
            var transitionProp = undefined;
            var transitionEndEvent = undefined;
            var animationProp = undefined;
            var animationEndEvent = undefined;
            if (inBrowser && !isIE9) {
                var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
                var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
                transitionProp = isWebkitTrans ? "WebkitTransition" : "transition";
                transitionEndEvent = isWebkitTrans ? "webkitTransitionEnd" : "transitionend";
                animationProp = isWebkitAnim ? "WebkitAnimation" : "animation";
                animationEndEvent = isWebkitAnim ? "webkitAnimationEnd" : "animationend";
            }
            var nextTick = function() {
                var callbacks = [];
                var pending = false;
                var timerFunc;
                function nextTickHandler() {
                    pending = false;
                    var copies = callbacks.slice(0);
                    callbacks = [];
                    for (var i = 0; i < copies.length; i++) {
                        copies[i]();
                    }
                }
                if (typeof MutationObserver !== "undefined" && !hasMutationObserverBug) {
                    var counter = 1;
                    var observer = new MutationObserver(nextTickHandler);
                    var textNode = document.createTextNode(counter);
                    observer.observe(textNode, {
                        characterData: true
                    });
                    timerFunc = function() {
                        counter = (counter + 1) % 2;
                        textNode.data = counter;
                    };
                } else {
                    var context = inBrowser ? window : typeof global !== "undefined" ? global : {};
                    timerFunc = context.setImmediate || setTimeout;
                }
                return function(cb, ctx) {
                    var func = ctx ? function() {
                        cb.call(ctx);
                    } : cb;
                    callbacks.push(func);
                    if (pending) return;
                    pending = true;
                    timerFunc(nextTickHandler, 0);
                };
            }();
            var _Set = undefined;
            if (typeof Set !== "undefined" && Set.toString().match(/native code/)) {
                _Set = Set;
            } else {
                _Set = function() {
                    this.set = Object.create(null);
                };
                _Set.prototype.has = function(key) {
                    return this.set[key] !== undefined;
                };
                _Set.prototype.add = function(key) {
                    this.set[key] = 1;
                };
                _Set.prototype.clear = function() {
                    this.set = Object.create(null);
                };
            }
            function Cache(limit) {
                this.size = 0;
                this.limit = limit;
                this.head = this.tail = undefined;
                this._keymap = Object.create(null);
            }
            var p = Cache.prototype;
            p.put = function(key, value) {
                var removed;
                var entry = this.get(key, true);
                if (!entry) {
                    if (this.size === this.limit) {
                        removed = this.shift();
                    }
                    entry = {
                        key: key
                    };
                    this._keymap[key] = entry;
                    if (this.tail) {
                        this.tail.newer = entry;
                        entry.older = this.tail;
                    } else {
                        this.head = entry;
                    }
                    this.tail = entry;
                    this.size++;
                }
                entry.value = value;
                return removed;
            };
            p.shift = function() {
                var entry = this.head;
                if (entry) {
                    this.head = this.head.newer;
                    this.head.older = undefined;
                    entry.newer = entry.older = undefined;
                    this._keymap[entry.key] = undefined;
                    this.size--;
                }
                return entry;
            };
            p.get = function(key, returnEntry) {
                var entry = this._keymap[key];
                if (entry === undefined) return;
                if (entry === this.tail) {
                    return returnEntry ? entry : entry.value;
                }
                if (entry.newer) {
                    if (entry === this.head) {
                        this.head = entry.newer;
                    }
                    entry.newer.older = entry.older;
                }
                if (entry.older) {
                    entry.older.newer = entry.newer;
                }
                entry.newer = undefined;
                entry.older = this.tail;
                if (this.tail) {
                    this.tail.newer = entry;
                }
                this.tail = entry;
                return returnEntry ? entry : entry.value;
            };
            var cache$1 = new Cache(1e3);
            var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g;
            var reservedArgRE = /^in$|^-?\d+/;
            var str;
            var dir;
            var c;
            var prev;
            var i;
            var l;
            var lastFilterIndex;
            var inSingle;
            var inDouble;
            var curly;
            var square;
            var paren;
            function pushFilter() {
                var exp = str.slice(lastFilterIndex, i).trim();
                var filter;
                if (exp) {
                    filter = {};
                    var tokens = exp.match(filterTokenRE);
                    filter.name = tokens[0];
                    if (tokens.length > 1) {
                        filter.args = tokens.slice(1).map(processFilterArg);
                    }
                }
                if (filter) {
                    (dir.filters = dir.filters || []).push(filter);
                }
                lastFilterIndex = i + 1;
            }
            function processFilterArg(arg) {
                if (reservedArgRE.test(arg)) {
                    return {
                        value: toNumber(arg),
                        dynamic: false
                    };
                } else {
                    var stripped = stripQuotes(arg);
                    var dynamic = stripped === arg;
                    return {
                        value: dynamic ? arg : stripped,
                        dynamic: dynamic
                    };
                }
            }
            function parseDirective(s) {
                var hit = cache$1.get(s);
                if (hit) {
                    return hit;
                }
                str = s;
                inSingle = inDouble = false;
                curly = square = paren = 0;
                lastFilterIndex = 0;
                dir = {};
                for (i = 0, l = str.length; i < l; i++) {
                    prev = c;
                    c = str.charCodeAt(i);
                    if (inSingle) {
                        if (c === 39 && prev !== 92) inSingle = !inSingle;
                    } else if (inDouble) {
                        if (c === 34 && prev !== 92) inDouble = !inDouble;
                    } else if (c === 124 && str.charCodeAt(i + 1) !== 124 && str.charCodeAt(i - 1) !== 124) {
                        if (dir.expression == null) {
                            lastFilterIndex = i + 1;
                            dir.expression = str.slice(0, i).trim();
                        } else {
                            pushFilter();
                        }
                    } else {
                        switch (c) {
                          case 34:
                            inDouble = true;
                            break;

                          case 39:
                            inSingle = true;
                            break;

                          case 40:
                            paren++;
                            break;

                          case 41:
                            paren--;
                            break;

                          case 91:
                            square++;
                            break;

                          case 93:
                            square--;
                            break;

                          case 123:
                            curly++;
                            break;

                          case 125:
                            curly--;
                            break;
                        }
                    }
                }
                if (dir.expression == null) {
                    dir.expression = str.slice(0, i).trim();
                } else if (lastFilterIndex !== 0) {
                    pushFilter();
                }
                cache$1.put(s, dir);
                return dir;
            }
            var directive = Object.freeze({
                parseDirective: parseDirective
            });
            var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
            var cache = undefined;
            var tagRE = undefined;
            var htmlRE = undefined;
            function escapeRegex(str) {
                return str.replace(regexEscapeRE, "\\$&");
            }
            function compileRegex() {
                var open = escapeRegex(config.delimiters[0]);
                var close = escapeRegex(config.delimiters[1]);
                var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
                var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
                tagRE = new RegExp(unsafeOpen + "((?:.|\\n)+?)" + unsafeClose + "|" + open + "((?:.|\\n)+?)" + close, "g");
                htmlRE = new RegExp("^" + unsafeOpen + "((?:.|\\n)+?)" + unsafeClose + "$");
                cache = new Cache(1e3);
            }
            function parseText(text) {
                if (!cache) {
                    compileRegex();
                }
                var hit = cache.get(text);
                if (hit) {
                    return hit;
                }
                if (!tagRE.test(text)) {
                    return null;
                }
                var tokens = [];
                var lastIndex = tagRE.lastIndex = 0;
                var match, index, html, value, first, oneTime;
                while (match = tagRE.exec(text)) {
                    index = match.index;
                    if (index > lastIndex) {
                        tokens.push({
                            value: text.slice(lastIndex, index)
                        });
                    }
                    html = htmlRE.test(match[0]);
                    value = html ? match[1] : match[2];
                    first = value.charCodeAt(0);
                    oneTime = first === 42;
                    value = oneTime ? value.slice(1) : value;
                    tokens.push({
                        tag: true,
                        value: value.trim(),
                        html: html,
                        oneTime: oneTime
                    });
                    lastIndex = index + match[0].length;
                }
                if (lastIndex < text.length) {
                    tokens.push({
                        value: text.slice(lastIndex)
                    });
                }
                cache.put(text, tokens);
                return tokens;
            }
            function tokensToExp(tokens, vm) {
                if (tokens.length > 1) {
                    return tokens.map(function(token) {
                        return formatToken(token, vm);
                    }).join("+");
                } else {
                    return formatToken(tokens[0], vm, true);
                }
            }
            function formatToken(token, vm, single) {
                return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
            }
            var filterRE = /[^|]\|[^|]/;
            function inlineFilters(exp, single) {
                if (!filterRE.test(exp)) {
                    return single ? exp : "(" + exp + ")";
                } else {
                    var dir = parseDirective(exp);
                    if (!dir.filters) {
                        return "(" + exp + ")";
                    } else {
                        return "this._applyFilters(" + dir.expression + ",null," + JSON.stringify(dir.filters) + ",false)";
                    }
                }
            }
            var text = Object.freeze({
                compileRegex: compileRegex,
                parseText: parseText,
                tokensToExp: tokensToExp
            });
            var delimiters = [ "{{", "}}" ];
            var unsafeDelimiters = [ "{{{", "}}}" ];
            var config = Object.defineProperties({
                debug: false,
                silent: false,
                async: true,
                warnExpressionErrors: true,
                devtools: "production" !== "production",
                _delimitersChanged: true,
                _assetTypes: [ "component", "directive", "elementDirective", "filter", "transition", "partial" ],
                _propBindingModes: {
                    ONE_WAY: 0,
                    TWO_WAY: 1,
                    ONE_TIME: 2
                },
                _maxUpdateCount: 100
            }, {
                delimiters: {
                    get: function get() {
                        return delimiters;
                    },
                    set: function set(val) {
                        delimiters = val;
                        compileRegex();
                    },
                    configurable: true,
                    enumerable: true
                },
                unsafeDelimiters: {
                    get: function get() {
                        return unsafeDelimiters;
                    },
                    set: function set(val) {
                        unsafeDelimiters = val;
                        compileRegex();
                    },
                    configurable: true,
                    enumerable: true
                }
            });
            var warn = undefined;
            var formatComponentName = undefined;
            if (false) {
                (function() {
                    var hasConsole = typeof console !== "undefined";
                    warn = function(msg, vm) {
                        if (hasConsole && !config.silent) {
                            console.error("[Vue warn]: " + msg + (vm ? formatComponentName(vm) : ""));
                        }
                    };
                    formatComponentName = function(vm) {
                        var name = vm._isVue ? vm.$options.name : vm.name;
                        return name ? " (found in component: <" + hyphenate(name) + ">)" : "";
                    };
                })();
            }
            function appendWithTransition(el, target, vm, cb) {
                applyTransition(el, 1, function() {
                    target.appendChild(el);
                }, vm, cb);
            }
            function beforeWithTransition(el, target, vm, cb) {
                applyTransition(el, 1, function() {
                    before(el, target);
                }, vm, cb);
            }
            function removeWithTransition(el, vm, cb) {
                applyTransition(el, -1, function() {
                    remove(el);
                }, vm, cb);
            }
            function applyTransition(el, direction, op, vm, cb) {
                var transition = el.__v_trans;
                if (!transition || !transition.hooks && !transitionEndEvent || !vm._isCompiled || vm.$parent && !vm.$parent._isCompiled) {
                    op();
                    if (cb) cb();
                    return;
                }
                var action = direction > 0 ? "enter" : "leave";
                transition[action](op, cb);
            }
            var transition = Object.freeze({
                appendWithTransition: appendWithTransition,
                beforeWithTransition: beforeWithTransition,
                removeWithTransition: removeWithTransition,
                applyTransition: applyTransition
            });
            function query(el) {
                if (typeof el === "string") {
                    var selector = el;
                    el = document.querySelector(el);
                    if (!el) {
                        "production" !== "production" && warn("Cannot find element: " + selector);
                    }
                }
                return el;
            }
            function inDoc(node) {
                if (!node) return false;
                var doc = node.ownerDocument.documentElement;
                var parent = node.parentNode;
                return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
            }
            function getAttr(node, _attr) {
                var val = node.getAttribute(_attr);
                if (val !== null) {
                    node.removeAttribute(_attr);
                }
                return val;
            }
            function getBindAttr(node, name) {
                var val = getAttr(node, ":" + name);
                if (val === null) {
                    val = getAttr(node, "v-bind:" + name);
                }
                return val;
            }
            function hasBindAttr(node, name) {
                return node.hasAttribute(name) || node.hasAttribute(":" + name) || node.hasAttribute("v-bind:" + name);
            }
            function before(el, target) {
                target.parentNode.insertBefore(el, target);
            }
            function after(el, target) {
                if (target.nextSibling) {
                    before(el, target.nextSibling);
                } else {
                    target.parentNode.appendChild(el);
                }
            }
            function remove(el) {
                el.parentNode.removeChild(el);
            }
            function prepend(el, target) {
                if (target.firstChild) {
                    before(el, target.firstChild);
                } else {
                    target.appendChild(el);
                }
            }
            function replace(target, el) {
                var parent = target.parentNode;
                if (parent) {
                    parent.replaceChild(el, target);
                }
            }
            function on(el, event, cb, useCapture) {
                el.addEventListener(event, cb, useCapture);
            }
            function off(el, event, cb) {
                el.removeEventListener(event, cb);
            }
            function getClass(el) {
                var classname = el.className;
                if (typeof classname === "object") {
                    classname = classname.baseVal || "";
                }
                return classname;
            }
            function setClass(el, cls) {
                if (isIE9 && !/svg$/.test(el.namespaceURI)) {
                    el.className = cls;
                } else {
                    el.setAttribute("class", cls);
                }
            }
            function addClass(el, cls) {
                if (el.classList) {
                    el.classList.add(cls);
                } else {
                    var cur = " " + getClass(el) + " ";
                    if (cur.indexOf(" " + cls + " ") < 0) {
                        setClass(el, (cur + cls).trim());
                    }
                }
            }
            function removeClass(el, cls) {
                if (el.classList) {
                    el.classList.remove(cls);
                } else {
                    var cur = " " + getClass(el) + " ";
                    var tar = " " + cls + " ";
                    while (cur.indexOf(tar) >= 0) {
                        cur = cur.replace(tar, " ");
                    }
                    setClass(el, cur.trim());
                }
                if (!el.className) {
                    el.removeAttribute("class");
                }
            }
            function extractContent(el, asFragment) {
                var child;
                var rawContent;
                if (isTemplate(el) && isFragment(el.content)) {
                    el = el.content;
                }
                if (el.hasChildNodes()) {
                    trimNode(el);
                    rawContent = asFragment ? document.createDocumentFragment() : document.createElement("div");
                    while (child = el.firstChild) {
                        rawContent.appendChild(child);
                    }
                }
                return rawContent;
            }
            function trimNode(node) {
                var child;
                while (child = node.firstChild, isTrimmable(child)) {
                    node.removeChild(child);
                }
                while (child = node.lastChild, isTrimmable(child)) {
                    node.removeChild(child);
                }
            }
            function isTrimmable(node) {
                return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
            }
            function isTemplate(el) {
                return el.tagName && el.tagName.toLowerCase() === "template";
            }
            function createAnchor(content, persist) {
                var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? " " : "");
                anchor.__v_anchor = true;
                return anchor;
            }
            var refRE = /^v-ref:/;
            function findRef(node) {
                if (node.hasAttributes()) {
                    var attrs = node.attributes;
                    for (var i = 0, l = attrs.length; i < l; i++) {
                        var name = attrs[i].name;
                        if (refRE.test(name)) {
                            return camelize(name.replace(refRE, ""));
                        }
                    }
                }
            }
            function mapNodeRange(node, end, op) {
                var next;
                while (node !== end) {
                    next = node.nextSibling;
                    op(node);
                    node = next;
                }
                op(end);
            }
            function removeNodeRange(start, end, vm, frag, cb) {
                var done = false;
                var removed = 0;
                var nodes = [];
                mapNodeRange(start, end, function(node) {
                    if (node === end) done = true;
                    nodes.push(node);
                    removeWithTransition(node, vm, onRemoved);
                });
                function onRemoved() {
                    removed++;
                    if (done && removed >= nodes.length) {
                        for (var i = 0; i < nodes.length; i++) {
                            frag.appendChild(nodes[i]);
                        }
                        cb && cb();
                    }
                }
            }
            function isFragment(node) {
                return node && node.nodeType === 11;
            }
            function getOuterHTML(el) {
                if (el.outerHTML) {
                    return el.outerHTML;
                } else {
                    var container = document.createElement("div");
                    container.appendChild(el.cloneNode(true));
                    return container.innerHTML;
                }
            }
            var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;
            var reservedTagRE = /^(slot|partial|component)$/i;
            var isUnknownElement = undefined;
            if (false) {
                isUnknownElement = function(el, tag) {
                    if (tag.indexOf("-") > -1) {
                        return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
                    } else {
                        return /HTMLUnknownElement/.test(el.toString()) && !/^(data|time|rtc|rb|details|dialog|summary)$/.test(tag);
                    }
                };
            }
            function checkComponentAttr(el, options) {
                var tag = el.tagName.toLowerCase();
                var hasAttrs = el.hasAttributes();
                if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
                    if (resolveAsset(options, "components", tag)) {
                        return {
                            id: tag
                        };
                    } else {
                        var is = hasAttrs && getIsBinding(el, options);
                        if (is) {
                            return is;
                        } else if (false) {
                            var expectedTag = options._componentNameMap && options._componentNameMap[tag];
                            if (expectedTag) {
                                warn("Unknown custom element: <" + tag + "> - " + "did you mean <" + expectedTag + ">? " + "HTML is case-insensitive, remember to use kebab-case in templates.");
                            } else if (isUnknownElement(el, tag)) {
                                warn("Unknown custom element: <" + tag + "> - did you " + "register the component correctly? For recursive components, " + 'make sure to provide the "name" option.');
                            }
                        }
                    }
                } else if (hasAttrs) {
                    return getIsBinding(el, options);
                }
            }
            function getIsBinding(el, options) {
                var exp = el.getAttribute("is");
                if (exp != null) {
                    if (resolveAsset(options, "components", exp)) {
                        el.removeAttribute("is");
                        return {
                            id: exp
                        };
                    }
                } else {
                    exp = getBindAttr(el, "is");
                    if (exp != null) {
                        return {
                            id: exp,
                            dynamic: true
                        };
                    }
                }
            }
            var strats = config.optionMergeStrategies = Object.create(null);
            function mergeData(to, from) {
                var key, toVal, fromVal;
                for (key in from) {
                    toVal = to[key];
                    fromVal = from[key];
                    if (!hasOwn(to, key)) {
                        set(to, key, fromVal);
                    } else if (isObject(toVal) && isObject(fromVal)) {
                        mergeData(toVal, fromVal);
                    }
                }
                return to;
            }
            strats.data = function(parentVal, childVal, vm) {
                if (!vm) {
                    if (!childVal) {
                        return parentVal;
                    }
                    if (typeof childVal !== "function") {
                        "production" !== "production" && warn('The "data" option should be a function ' + "that returns a per-instance value in component " + "definitions.", vm);
                        return parentVal;
                    }
                    if (!parentVal) {
                        return childVal;
                    }
                    return function mergedDataFn() {
                        return mergeData(childVal.call(this), parentVal.call(this));
                    };
                } else if (parentVal || childVal) {
                    return function mergedInstanceDataFn() {
                        var instanceData = typeof childVal === "function" ? childVal.call(vm) : childVal;
                        var defaultData = typeof parentVal === "function" ? parentVal.call(vm) : undefined;
                        if (instanceData) {
                            return mergeData(instanceData, defaultData);
                        } else {
                            return defaultData;
                        }
                    };
                }
            };
            strats.el = function(parentVal, childVal, vm) {
                if (!vm && childVal && typeof childVal !== "function") {
                    "production" !== "production" && warn('The "el" option should be a function ' + "that returns a per-instance value in component " + "definitions.", vm);
                    return;
                }
                var ret = childVal || parentVal;
                return vm && typeof ret === "function" ? ret.call(vm) : ret;
            };
            strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function(parentVal, childVal) {
                return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [ childVal ] : parentVal;
            };
            function mergeAssets(parentVal, childVal) {
                var res = Object.create(parentVal || null);
                return childVal ? extend(res, guardArrayAssets(childVal)) : res;
            }
            config._assetTypes.forEach(function(type) {
                strats[type + "s"] = mergeAssets;
            });
            strats.watch = strats.events = function(parentVal, childVal) {
                if (!childVal) return parentVal;
                if (!parentVal) return childVal;
                var ret = {};
                extend(ret, parentVal);
                for (var key in childVal) {
                    var parent = ret[key];
                    var child = childVal[key];
                    if (parent && !isArray(parent)) {
                        parent = [ parent ];
                    }
                    ret[key] = parent ? parent.concat(child) : [ child ];
                }
                return ret;
            };
            strats.props = strats.methods = strats.computed = function(parentVal, childVal) {
                if (!childVal) return parentVal;
                if (!parentVal) return childVal;
                var ret = Object.create(null);
                extend(ret, parentVal);
                extend(ret, childVal);
                return ret;
            };
            var defaultStrat = function defaultStrat(parentVal, childVal) {
                return childVal === undefined ? parentVal : childVal;
            };
            function guardComponents(options) {
                if (options.components) {
                    var components = options.components = guardArrayAssets(options.components);
                    var ids = Object.keys(components);
                    var def;
                    if (false) {
                        var map = options._componentNameMap = {};
                    }
                    for (var i = 0, l = ids.length; i < l; i++) {
                        var key = ids[i];
                        if (commonTagRE.test(key) || reservedTagRE.test(key)) {
                            "production" !== "production" && warn("Do not use built-in or reserved HTML elements as component " + "id: " + key);
                            continue;
                        }
                        if (false) {
                            map[key.replace(/-/g, "").toLowerCase()] = hyphenate(key);
                        }
                        def = components[key];
                        if (isPlainObject(def)) {
                            components[key] = Vue.extend(def);
                        }
                    }
                }
            }
            function guardProps(options) {
                var props = options.props;
                var i, val;
                if (isArray(props)) {
                    options.props = {};
                    i = props.length;
                    while (i--) {
                        val = props[i];
                        if (typeof val === "string") {
                            options.props[val] = null;
                        } else if (val.name) {
                            options.props[val.name] = val;
                        }
                    }
                } else if (isPlainObject(props)) {
                    var keys = Object.keys(props);
                    i = keys.length;
                    while (i--) {
                        val = props[keys[i]];
                        if (typeof val === "function") {
                            props[keys[i]] = {
                                type: val
                            };
                        }
                    }
                }
            }
            function guardArrayAssets(assets) {
                if (isArray(assets)) {
                    var res = {};
                    var i = assets.length;
                    var asset;
                    while (i--) {
                        asset = assets[i];
                        var id = typeof asset === "function" ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
                        if (!id) {
                            "production" !== "production" && warn('Array-syntax assets must provide a "name" or "id" field.');
                        } else {
                            res[id] = asset;
                        }
                    }
                    return res;
                }
                return assets;
            }
            function mergeOptions(parent, child, vm) {
                guardComponents(child);
                guardProps(child);
                if (false) {
                    if (child.propsData && !vm) {
                        warn("propsData can only be used as an instantiation option.");
                    }
                }
                var options = {};
                var key;
                if (child["extends"]) {
                    parent = typeof child["extends"] === "function" ? mergeOptions(parent, child["extends"].options, vm) : mergeOptions(parent, child["extends"], vm);
                }
                if (child.mixins) {
                    for (var i = 0, l = child.mixins.length; i < l; i++) {
                        var mixin = child.mixins[i];
                        var mixinOptions = mixin.prototype instanceof Vue ? mixin.options : mixin;
                        parent = mergeOptions(parent, mixinOptions, vm);
                    }
                }
                for (key in parent) {
                    mergeField(key);
                }
                for (key in child) {
                    if (!hasOwn(parent, key)) {
                        mergeField(key);
                    }
                }
                function mergeField(key) {
                    var strat = strats[key] || defaultStrat;
                    options[key] = strat(parent[key], child[key], vm, key);
                }
                return options;
            }
            function resolveAsset(options, type, id, warnMissing) {
                if (typeof id !== "string") {
                    return;
                }
                var assets = options[type];
                var camelizedId;
                var res = assets[id] || assets[camelizedId = camelize(id)] || assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
                if (false) {
                    warn("Failed to resolve " + type.slice(0, -1) + ": " + id, options);
                }
                return res;
            }
            var uid$1 = 0;
            function Dep() {
                this.id = uid$1++;
                this.subs = [];
            }
            Dep.target = null;
            Dep.prototype.addSub = function(sub) {
                this.subs.push(sub);
            };
            Dep.prototype.removeSub = function(sub) {
                this.subs.$remove(sub);
            };
            Dep.prototype.depend = function() {
                Dep.target.addDep(this);
            };
            Dep.prototype.notify = function() {
                var subs = toArray(this.subs);
                for (var i = 0, l = subs.length; i < l; i++) {
                    subs[i].update();
                }
            };
            var arrayProto = Array.prototype;
            var arrayMethods = Object.create(arrayProto);
            [ "push", "pop", "shift", "unshift", "splice", "sort", "reverse" ].forEach(function(method) {
                var original = arrayProto[method];
                def(arrayMethods, method, function mutator() {
                    var i = arguments.length;
                    var args = new Array(i);
                    while (i--) {
                        args[i] = arguments[i];
                    }
                    var result = original.apply(this, args);
                    var ob = this.__ob__;
                    var inserted;
                    switch (method) {
                      case "push":
                        inserted = args;
                        break;

                      case "unshift":
                        inserted = args;
                        break;

                      case "splice":
                        inserted = args.slice(2);
                        break;
                    }
                    if (inserted) ob.observeArray(inserted);
                    ob.dep.notify();
                    return result;
                });
            });
            def(arrayProto, "$set", function $set(index, val) {
                if (index >= this.length) {
                    this.length = Number(index) + 1;
                }
                return this.splice(index, 1, val)[0];
            });
            def(arrayProto, "$remove", function $remove(item) {
                if (!this.length) return;
                var index = indexOf(this, item);
                if (index > -1) {
                    return this.splice(index, 1);
                }
            });
            var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
            var shouldConvert = true;
            function withoutConversion(fn) {
                shouldConvert = false;
                fn();
                shouldConvert = true;
            }
            function Observer(value) {
                this.value = value;
                this.dep = new Dep();
                def(value, "__ob__", this);
                if (isArray(value)) {
                    var augment = hasProto ? protoAugment : copyAugment;
                    augment(value, arrayMethods, arrayKeys);
                    this.observeArray(value);
                } else {
                    this.walk(value);
                }
            }
            Observer.prototype.walk = function(obj) {
                var keys = Object.keys(obj);
                for (var i = 0, l = keys.length; i < l; i++) {
                    this.convert(keys[i], obj[keys[i]]);
                }
            };
            Observer.prototype.observeArray = function(items) {
                for (var i = 0, l = items.length; i < l; i++) {
                    observe(items[i]);
                }
            };
            Observer.prototype.convert = function(key, val) {
                defineReactive(this.value, key, val);
            };
            Observer.prototype.addVm = function(vm) {
                (this.vms || (this.vms = [])).push(vm);
            };
            Observer.prototype.removeVm = function(vm) {
                this.vms.$remove(vm);
            };
            function protoAugment(target, src) {
                target.__proto__ = src;
            }
            function copyAugment(target, src, keys) {
                for (var i = 0, l = keys.length; i < l; i++) {
                    var key = keys[i];
                    def(target, key, src[key]);
                }
            }
            function observe(value, vm) {
                if (!value || typeof value !== "object") {
                    return;
                }
                var ob;
                if (hasOwn(value, "__ob__") && value.__ob__ instanceof Observer) {
                    ob = value.__ob__;
                } else if (shouldConvert && (isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
                    ob = new Observer(value);
                }
                if (ob && vm) {
                    ob.addVm(vm);
                }
                return ob;
            }
            function defineReactive(obj, key, val) {
                var dep = new Dep();
                var property = Object.getOwnPropertyDescriptor(obj, key);
                if (property && property.configurable === false) {
                    return;
                }
                var getter = property && property.get;
                var setter = property && property.set;
                var childOb = observe(val);
                Object.defineProperty(obj, key, {
                    enumerable: true,
                    configurable: true,
                    get: function reactiveGetter() {
                        var value = getter ? getter.call(obj) : val;
                        if (Dep.target) {
                            dep.depend();
                            if (childOb) {
                                childOb.dep.depend();
                            }
                            if (isArray(value)) {
                                for (var e, i = 0, l = value.length; i < l; i++) {
                                    e = value[i];
                                    e && e.__ob__ && e.__ob__.dep.depend();
                                }
                            }
                        }
                        return value;
                    },
                    set: function reactiveSetter(newVal) {
                        var value = getter ? getter.call(obj) : val;
                        if (newVal === value) {
                            return;
                        }
                        if (setter) {
                            setter.call(obj, newVal);
                        } else {
                            val = newVal;
                        }
                        childOb = observe(newVal);
                        dep.notify();
                    }
                });
            }
            var util = Object.freeze({
                defineReactive: defineReactive,
                set: set,
                del: del,
                hasOwn: hasOwn,
                isLiteral: isLiteral,
                isReserved: isReserved,
                _toString: _toString,
                toNumber: toNumber,
                toBoolean: toBoolean,
                stripQuotes: stripQuotes,
                camelize: camelize,
                hyphenate: hyphenate,
                classify: classify,
                bind: bind,
                toArray: toArray,
                extend: extend,
                isObject: isObject,
                isPlainObject: isPlainObject,
                def: def,
                debounce: _debounce,
                indexOf: indexOf,
                cancellable: cancellable,
                looseEqual: looseEqual,
                isArray: isArray,
                hasProto: hasProto,
                inBrowser: inBrowser,
                devtools: devtools,
                isIE: isIE,
                isIE9: isIE9,
                isAndroid: isAndroid,
                isIos: isIos,
                iosVersionMatch: iosVersionMatch,
                iosVersion: iosVersion,
                hasMutationObserverBug: hasMutationObserverBug,
                get transitionProp() {
                    return transitionProp;
                },
                get transitionEndEvent() {
                    return transitionEndEvent;
                },
                get animationProp() {
                    return animationProp;
                },
                get animationEndEvent() {
                    return animationEndEvent;
                },
                nextTick: nextTick,
                get _Set() {
                    return _Set;
                },
                query: query,
                inDoc: inDoc,
                getAttr: getAttr,
                getBindAttr: getBindAttr,
                hasBindAttr: hasBindAttr,
                before: before,
                after: after,
                remove: remove,
                prepend: prepend,
                replace: replace,
                on: on,
                off: off,
                setClass: setClass,
                addClass: addClass,
                removeClass: removeClass,
                extractContent: extractContent,
                trimNode: trimNode,
                isTemplate: isTemplate,
                createAnchor: createAnchor,
                findRef: findRef,
                mapNodeRange: mapNodeRange,
                removeNodeRange: removeNodeRange,
                isFragment: isFragment,
                getOuterHTML: getOuterHTML,
                mergeOptions: mergeOptions,
                resolveAsset: resolveAsset,
                checkComponentAttr: checkComponentAttr,
                commonTagRE: commonTagRE,
                reservedTagRE: reservedTagRE,
                get warn() {
                    return warn;
                }
            });
            var uid = 0;
            function initMixin(Vue) {
                Vue.prototype._init = function(options) {
                    options = options || {};
                    this.$el = null;
                    this.$parent = options.parent;
                    this.$root = this.$parent ? this.$parent.$root : this;
                    this.$children = [];
                    this.$refs = {};
                    this.$els = {};
                    this._watchers = [];
                    this._directives = [];
                    this._uid = uid++;
                    this._isVue = true;
                    this._events = {};
                    this._eventsCount = {};
                    this._isFragment = false;
                    this._fragment = this._fragmentStart = this._fragmentEnd = null;
                    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
                    this._unlinkFn = null;
                    this._context = options._context || this.$parent;
                    this._scope = options._scope;
                    this._frag = options._frag;
                    if (this._frag) {
                        this._frag.children.push(this);
                    }
                    if (this.$parent) {
                        this.$parent.$children.push(this);
                    }
                    options = this.$options = mergeOptions(this.constructor.options, options, this);
                    this._updateRef();
                    this._data = {};
                    this._callHook("init");
                    this._initState();
                    this._initEvents();
                    this._callHook("created");
                    if (options.el) {
                        this.$mount(options.el);
                    }
                };
            }
            var pathCache = new Cache(1e3);
            var APPEND = 0;
            var PUSH = 1;
            var INC_SUB_PATH_DEPTH = 2;
            var PUSH_SUB_PATH = 3;
            var BEFORE_PATH = 0;
            var IN_PATH = 1;
            var BEFORE_IDENT = 2;
            var IN_IDENT = 3;
            var IN_SUB_PATH = 4;
            var IN_SINGLE_QUOTE = 5;
            var IN_DOUBLE_QUOTE = 6;
            var AFTER_PATH = 7;
            var ERROR = 8;
            var pathStateMachine = [];
            pathStateMachine[BEFORE_PATH] = {
                ws: [ BEFORE_PATH ],
                ident: [ IN_IDENT, APPEND ],
                "[": [ IN_SUB_PATH ],
                eof: [ AFTER_PATH ]
            };
            pathStateMachine[IN_PATH] = {
                ws: [ IN_PATH ],
                ".": [ BEFORE_IDENT ],
                "[": [ IN_SUB_PATH ],
                eof: [ AFTER_PATH ]
            };
            pathStateMachine[BEFORE_IDENT] = {
                ws: [ BEFORE_IDENT ],
                ident: [ IN_IDENT, APPEND ]
            };
            pathStateMachine[IN_IDENT] = {
                ident: [ IN_IDENT, APPEND ],
                "0": [ IN_IDENT, APPEND ],
                number: [ IN_IDENT, APPEND ],
                ws: [ IN_PATH, PUSH ],
                ".": [ BEFORE_IDENT, PUSH ],
                "[": [ IN_SUB_PATH, PUSH ],
                eof: [ AFTER_PATH, PUSH ]
            };
            pathStateMachine[IN_SUB_PATH] = {
                "'": [ IN_SINGLE_QUOTE, APPEND ],
                '"': [ IN_DOUBLE_QUOTE, APPEND ],
                "[": [ IN_SUB_PATH, INC_SUB_PATH_DEPTH ],
                "]": [ IN_PATH, PUSH_SUB_PATH ],
                eof: ERROR,
                "else": [ IN_SUB_PATH, APPEND ]
            };
            pathStateMachine[IN_SINGLE_QUOTE] = {
                "'": [ IN_SUB_PATH, APPEND ],
                eof: ERROR,
                "else": [ IN_SINGLE_QUOTE, APPEND ]
            };
            pathStateMachine[IN_DOUBLE_QUOTE] = {
                '"': [ IN_SUB_PATH, APPEND ],
                eof: ERROR,
                "else": [ IN_DOUBLE_QUOTE, APPEND ]
            };
            function getPathCharType(ch) {
                if (ch === undefined) {
                    return "eof";
                }
                var code = ch.charCodeAt(0);
                switch (code) {
                  case 91:
                  case 93:
                  case 46:
                  case 34:
                  case 39:
                  case 48:
                    return ch;

                  case 95:
                  case 36:
                    return "ident";

                  case 32:
                  case 9:
                  case 10:
                  case 13:
                  case 160:
                  case 65279:
                  case 8232:
                  case 8233:
                    return "ws";
                }
                if (code >= 97 && code <= 122 || code >= 65 && code <= 90) {
                    return "ident";
                }
                if (code >= 49 && code <= 57) {
                    return "number";
                }
                return "else";
            }
            function formatSubPath(path) {
                var trimmed = path.trim();
                if (path.charAt(0) === "0" && isNaN(path)) {
                    return false;
                }
                return isLiteral(trimmed) ? stripQuotes(trimmed) : "*" + trimmed;
            }
            function parse(path) {
                var keys = [];
                var index = -1;
                var mode = BEFORE_PATH;
                var subPathDepth = 0;
                var c, newChar, key, type, transition, action, typeMap;
                var actions = [];
                actions[PUSH] = function() {
                    if (key !== undefined) {
                        keys.push(key);
                        key = undefined;
                    }
                };
                actions[APPEND] = function() {
                    if (key === undefined) {
                        key = newChar;
                    } else {
                        key += newChar;
                    }
                };
                actions[INC_SUB_PATH_DEPTH] = function() {
                    actions[APPEND]();
                    subPathDepth++;
                };
                actions[PUSH_SUB_PATH] = function() {
                    if (subPathDepth > 0) {
                        subPathDepth--;
                        mode = IN_SUB_PATH;
                        actions[APPEND]();
                    } else {
                        subPathDepth = 0;
                        key = formatSubPath(key);
                        if (key === false) {
                            return false;
                        } else {
                            actions[PUSH]();
                        }
                    }
                };
                function maybeUnescapeQuote() {
                    var nextChar = path[index + 1];
                    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
                        index++;
                        newChar = "\\" + nextChar;
                        actions[APPEND]();
                        return true;
                    }
                }
                while (mode != null) {
                    index++;
                    c = path[index];
                    if (c === "\\" && maybeUnescapeQuote()) {
                        continue;
                    }
                    type = getPathCharType(c);
                    typeMap = pathStateMachine[mode];
                    transition = typeMap[type] || typeMap["else"] || ERROR;
                    if (transition === ERROR) {
                        return;
                    }
                    mode = transition[0];
                    action = actions[transition[1]];
                    if (action) {
                        newChar = transition[2];
                        newChar = newChar === undefined ? c : newChar;
                        if (action() === false) {
                            return;
                        }
                    }
                    if (mode === AFTER_PATH) {
                        keys.raw = path;
                        return keys;
                    }
                }
            }
            function parsePath(path) {
                var hit = pathCache.get(path);
                if (!hit) {
                    hit = parse(path);
                    if (hit) {
                        pathCache.put(path, hit);
                    }
                }
                return hit;
            }
            function getPath(obj, path) {
                return parseExpression(path).get(obj);
            }
            var warnNonExistent;
            if (false) {
                warnNonExistent = function(path, vm) {
                    warn('You are setting a non-existent path "' + path.raw + '" ' + "on a vm instance. Consider pre-initializing the property " + 'with the "data" option for more reliable reactivity ' + "and better performance.", vm);
                };
            }
            function setPath(obj, path, val) {
                var original = obj;
                if (typeof path === "string") {
                    path = parse(path);
                }
                if (!path || !isObject(obj)) {
                    return false;
                }
                var last, key;
                for (var i = 0, l = path.length; i < l; i++) {
                    last = obj;
                    key = path[i];
                    if (key.charAt(0) === "*") {
                        key = parseExpression(key.slice(1)).get.call(original, original);
                    }
                    if (i < l - 1) {
                        obj = obj[key];
                        if (!isObject(obj)) {
                            obj = {};
                            if (false) {
                                warnNonExistent(path, last);
                            }
                            set(last, key, obj);
                        }
                    } else {
                        if (isArray(obj)) {
                            obj.$set(key, val);
                        } else if (key in obj) {
                            obj[key] = val;
                        } else {
                            if (false) {
                                warnNonExistent(path, obj);
                            }
                            set(obj, key, val);
                        }
                    }
                }
                return true;
            }
            var path = Object.freeze({
                parsePath: parsePath,
                getPath: getPath,
                setPath: setPath
            });
            var expressionCache = new Cache(1e3);
            var allowedKeywords = "Math,Date,this,true,false,null,undefined,Infinity,NaN," + "isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI," + "encodeURIComponent,parseInt,parseFloat";
            var allowedKeywordsRE = new RegExp("^(" + allowedKeywords.replace(/,/g, "\\b|") + "\\b)");
            var improperKeywords = "break,case,class,catch,const,continue,debugger,default," + "delete,do,else,export,extends,finally,for,function,if," + "import,in,instanceof,let,return,super,switch,throw,try," + "var,while,with,yield,enum,await,implements,package," + "protected,static,interface,private,public";
            var improperKeywordsRE = new RegExp("^(" + improperKeywords.replace(/,/g, "\\b|") + "\\b)");
            var wsRE = /\s/g;
            var newlineRE = /\n/g;
            var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
            var restoreRE = /"(\d+)"/g;
            var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
            var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
            var literalValueRE$1 = /^(?:true|false|null|undefined|Infinity|NaN)$/;
            function noop() {}
            var saved = [];
            function save(str, isString) {
                var i = saved.length;
                saved[i] = isString ? str.replace(newlineRE, "\\n") : str;
                return '"' + i + '"';
            }
            function rewrite(raw) {
                var c = raw.charAt(0);
                var path = raw.slice(1);
                if (allowedKeywordsRE.test(path)) {
                    return raw;
                } else {
                    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
                    return c + "scope." + path;
                }
            }
            function restore(str, i) {
                return saved[i];
            }
            function compileGetter(exp) {
                if (improperKeywordsRE.test(exp)) {
                    "production" !== "production" && warn("Avoid using reserved keywords in expression: " + exp);
                }
                saved.length = 0;
                var body = exp.replace(saveRE, save).replace(wsRE, "");
                body = (" " + body).replace(identRE, rewrite).replace(restoreRE, restore);
                return makeGetterFn(body);
            }
            function makeGetterFn(body) {
                try {
                    return new Function("scope", "return " + body + ";");
                } catch (e) {
                    if (false) {
                        if (e.toString().match(/unsafe-eval|CSP/)) {
                            warn("It seems you are using the default build of Vue.js in an environment " + "with Content Security Policy that prohibits unsafe-eval. " + "Use the CSP-compliant build instead: " + "http://vuejs.org/guide/installation.html#CSP-compliant-build");
                        } else {
                            warn("Invalid expression. " + "Generated function body: " + body);
                        }
                    }
                    return noop;
                }
            }
            function compileSetter(exp) {
                var path = parsePath(exp);
                if (path) {
                    return function(scope, val) {
                        setPath(scope, path, val);
                    };
                } else {
                    "production" !== "production" && warn("Invalid setter expression: " + exp);
                }
            }
            function parseExpression(exp, needSet) {
                exp = exp.trim();
                var hit = expressionCache.get(exp);
                if (hit) {
                    if (needSet && !hit.set) {
                        hit.set = compileSetter(hit.exp);
                    }
                    return hit;
                }
                var res = {
                    exp: exp
                };
                res.get = isSimplePath(exp) && exp.indexOf("[") < 0 ? makeGetterFn("scope." + exp) : compileGetter(exp);
                if (needSet) {
                    res.set = compileSetter(exp);
                }
                expressionCache.put(exp, res);
                return res;
            }
            function isSimplePath(exp) {
                return pathTestRE.test(exp) && !literalValueRE$1.test(exp) && exp.slice(0, 5) !== "Math.";
            }
            var expression = Object.freeze({
                parseExpression: parseExpression,
                isSimplePath: isSimplePath
            });
            var queue = [];
            var userQueue = [];
            var has = {};
            var circular = {};
            var waiting = false;
            function resetBatcherState() {
                queue.length = 0;
                userQueue.length = 0;
                has = {};
                circular = {};
                waiting = false;
            }
            function flushBatcherQueue() {
                var _again = true;
                _function: while (_again) {
                    _again = false;
                    runBatcherQueue(queue);
                    runBatcherQueue(userQueue);
                    if (queue.length) {
                        _again = true;
                        continue _function;
                    }
                    if (devtools && config.devtools) {
                        devtools.emit("flush");
                    }
                    resetBatcherState();
                }
            }
            function runBatcherQueue(queue) {
                for (var i = 0; i < queue.length; i++) {
                    var watcher = queue[i];
                    var id = watcher.id;
                    has[id] = null;
                    watcher.run();
                    if (false) {
                        circular[id] = (circular[id] || 0) + 1;
                        if (circular[id] > config._maxUpdateCount) {
                            warn("You may have an infinite update loop for watcher " + 'with expression "' + watcher.expression + '"', watcher.vm);
                            break;
                        }
                    }
                }
                queue.length = 0;
            }
            function pushWatcher(watcher) {
                var id = watcher.id;
                if (has[id] == null) {
                    var q = watcher.user ? userQueue : queue;
                    has[id] = q.length;
                    q.push(watcher);
                    if (!waiting) {
                        waiting = true;
                        nextTick(flushBatcherQueue);
                    }
                }
            }
            var uid$2 = 0;
            function Watcher(vm, expOrFn, cb, options) {
                if (options) {
                    extend(this, options);
                }
                var isFn = typeof expOrFn === "function";
                this.vm = vm;
                vm._watchers.push(this);
                this.expression = expOrFn;
                this.cb = cb;
                this.id = ++uid$2;
                this.active = true;
                this.dirty = this.lazy;
                this.deps = [];
                this.newDeps = [];
                this.depIds = new _Set();
                this.newDepIds = new _Set();
                this.prevError = null;
                if (isFn) {
                    this.getter = expOrFn;
                    this.setter = undefined;
                } else {
                    var res = parseExpression(expOrFn, this.twoWay);
                    this.getter = res.get;
                    this.setter = res.set;
                }
                this.value = this.lazy ? undefined : this.get();
                this.queued = this.shallow = false;
            }
            Watcher.prototype.get = function() {
                this.beforeGet();
                var scope = this.scope || this.vm;
                var value;
                try {
                    value = this.getter.call(scope, scope);
                } catch (e) {
                    if (false) {
                        warn("Error when evaluating expression " + '"' + this.expression + '": ' + e.toString(), this.vm);
                    }
                }
                if (this.deep) {
                    traverse(value);
                }
                if (this.preProcess) {
                    value = this.preProcess(value);
                }
                if (this.filters) {
                    value = scope._applyFilters(value, null, this.filters, false);
                }
                if (this.postProcess) {
                    value = this.postProcess(value);
                }
                this.afterGet();
                return value;
            };
            Watcher.prototype.set = function(value) {
                var scope = this.scope || this.vm;
                if (this.filters) {
                    value = scope._applyFilters(value, this.value, this.filters, true);
                }
                try {
                    this.setter.call(scope, scope, value);
                } catch (e) {
                    if (false) {
                        warn("Error when evaluating setter " + '"' + this.expression + '": ' + e.toString(), this.vm);
                    }
                }
                var forContext = scope.$forContext;
                if (forContext && forContext.alias === this.expression) {
                    if (forContext.filters) {
                        "production" !== "production" && warn("It seems you are using two-way binding on " + "a v-for alias (" + this.expression + "), and the " + "v-for has filters. This will not work properly. " + "Either remove the filters or use an array of " + "objects and bind to object properties instead.", this.vm);
                        return;
                    }
                    forContext._withLock(function() {
                        if (scope.$key) {
                            forContext.rawValue[scope.$key] = value;
                        } else {
                            forContext.rawValue.$set(scope.$index, value);
                        }
                    });
                }
            };
            Watcher.prototype.beforeGet = function() {
                Dep.target = this;
            };
            Watcher.prototype.addDep = function(dep) {
                var id = dep.id;
                if (!this.newDepIds.has(id)) {
                    this.newDepIds.add(id);
                    this.newDeps.push(dep);
                    if (!this.depIds.has(id)) {
                        dep.addSub(this);
                    }
                }
            };
            Watcher.prototype.afterGet = function() {
                Dep.target = null;
                var i = this.deps.length;
                while (i--) {
                    var dep = this.deps[i];
                    if (!this.newDepIds.has(dep.id)) {
                        dep.removeSub(this);
                    }
                }
                var tmp = this.depIds;
                this.depIds = this.newDepIds;
                this.newDepIds = tmp;
                this.newDepIds.clear();
                tmp = this.deps;
                this.deps = this.newDeps;
                this.newDeps = tmp;
                this.newDeps.length = 0;
            };
            Watcher.prototype.update = function(shallow) {
                if (this.lazy) {
                    this.dirty = true;
                } else if (this.sync || !config.async) {
                    this.run();
                } else {
                    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
                    this.queued = true;
                    if (false) {
                        this.prevError = new Error("[vue] async stack trace");
                    }
                    pushWatcher(this);
                }
            };
            Watcher.prototype.run = function() {
                if (this.active) {
                    var value = this.get();
                    if (value !== this.value || (isObject(value) || this.deep) && !this.shallow) {
                        var oldValue = this.value;
                        this.value = value;
                        var prevError = this.prevError;
                        if (false) {
                            this.prevError = null;
                            try {
                                this.cb.call(this.vm, value, oldValue);
                            } catch (e) {
                                nextTick(function() {
                                    throw prevError;
                                }, 0);
                                throw e;
                            }
                        } else {
                            this.cb.call(this.vm, value, oldValue);
                        }
                    }
                    this.queued = this.shallow = false;
                }
            };
            Watcher.prototype.evaluate = function() {
                var current = Dep.target;
                this.value = this.get();
                this.dirty = false;
                Dep.target = current;
            };
            Watcher.prototype.depend = function() {
                var i = this.deps.length;
                while (i--) {
                    this.deps[i].depend();
                }
            };
            Watcher.prototype.teardown = function() {
                if (this.active) {
                    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
                        this.vm._watchers.$remove(this);
                    }
                    var i = this.deps.length;
                    while (i--) {
                        this.deps[i].removeSub(this);
                    }
                    this.active = false;
                    this.vm = this.cb = this.value = null;
                }
            };
            var seenObjects = new _Set();
            function traverse(val, seen) {
                var i = undefined, keys = undefined;
                if (!seen) {
                    seen = seenObjects;
                    seen.clear();
                }
                var isA = isArray(val);
                var isO = isObject(val);
                if ((isA || isO) && Object.isExtensible(val)) {
                    if (val.__ob__) {
                        var depId = val.__ob__.dep.id;
                        if (seen.has(depId)) {
                            return;
                        } else {
                            seen.add(depId);
                        }
                    }
                    if (isA) {
                        i = val.length;
                        while (i--) traverse(val[i], seen);
                    } else if (isO) {
                        keys = Object.keys(val);
                        i = keys.length;
                        while (i--) traverse(val[keys[i]], seen);
                    }
                }
            }
            var text$1 = {
                bind: function bind() {
                    this.attr = this.el.nodeType === 3 ? "data" : "textContent";
                },
                update: function update(value) {
                    this.el[this.attr] = _toString(value);
                }
            };
            var templateCache = new Cache(1e3);
            var idSelectorCache = new Cache(1e3);
            var map = {
                efault: [ 0, "", "" ],
                legend: [ 1, "<fieldset>", "</fieldset>" ],
                tr: [ 2, "<table><tbody>", "</tbody></table>" ],
                col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ]
            };
            map.td = map.th = [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ];
            map.option = map.optgroup = [ 1, '<select multiple="multiple">', "</select>" ];
            map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [ 1, "<table>", "</table>" ];
            map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [ 1, "<svg " + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', "</svg>" ];
            function isRealTemplate(node) {
                return isTemplate(node) && isFragment(node.content);
            }
            var tagRE$1 = /<([\w:-]+)/;
            var entityRE = /&#?\w+?;/;
            var commentRE = /<!--/;
            function stringToFragment(templateString, raw) {
                var cacheKey = raw ? templateString : templateString.trim();
                var hit = templateCache.get(cacheKey);
                if (hit) {
                    return hit;
                }
                var frag = document.createDocumentFragment();
                var tagMatch = templateString.match(tagRE$1);
                var entityMatch = entityRE.test(templateString);
                var commentMatch = commentRE.test(templateString);
                if (!tagMatch && !entityMatch && !commentMatch) {
                    frag.appendChild(document.createTextNode(templateString));
                } else {
                    var tag = tagMatch && tagMatch[1];
                    var wrap = map[tag] || map.efault;
                    var depth = wrap[0];
                    var prefix = wrap[1];
                    var suffix = wrap[2];
                    var node = document.createElement("div");
                    node.innerHTML = prefix + templateString + suffix;
                    while (depth--) {
                        node = node.lastChild;
                    }
                    var child;
                    while (child = node.firstChild) {
                        frag.appendChild(child);
                    }
                }
                if (!raw) {
                    trimNode(frag);
                }
                templateCache.put(cacheKey, frag);
                return frag;
            }
            function nodeToFragment(node) {
                if (isRealTemplate(node)) {
                    return stringToFragment(node.innerHTML);
                }
                if (node.tagName === "SCRIPT") {
                    return stringToFragment(node.textContent);
                }
                var clonedNode = cloneNode(node);
                var frag = document.createDocumentFragment();
                var child;
                while (child = clonedNode.firstChild) {
                    frag.appendChild(child);
                }
                trimNode(frag);
                return frag;
            }
            var hasBrokenTemplate = function() {
                if (inBrowser) {
                    var a = document.createElement("div");
                    a.innerHTML = "<template>1</template>";
                    return !a.cloneNode(true).firstChild.innerHTML;
                } else {
                    return false;
                }
            }();
            var hasTextareaCloneBug = function() {
                if (inBrowser) {
                    var t = document.createElement("textarea");
                    t.placeholder = "t";
                    return t.cloneNode(true).value === "t";
                } else {
                    return false;
                }
            }();
            function cloneNode(node) {
                if (!node.querySelectorAll) {
                    return node.cloneNode();
                }
                var res = node.cloneNode(true);
                var i, original, cloned;
                if (hasBrokenTemplate) {
                    var tempClone = res;
                    if (isRealTemplate(node)) {
                        node = node.content;
                        tempClone = res.content;
                    }
                    original = node.querySelectorAll("template");
                    if (original.length) {
                        cloned = tempClone.querySelectorAll("template");
                        i = cloned.length;
                        while (i--) {
                            cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
                        }
                    }
                }
                if (hasTextareaCloneBug) {
                    if (node.tagName === "TEXTAREA") {
                        res.value = node.value;
                    } else {
                        original = node.querySelectorAll("textarea");
                        if (original.length) {
                            cloned = res.querySelectorAll("textarea");
                            i = cloned.length;
                            while (i--) {
                                cloned[i].value = original[i].value;
                            }
                        }
                    }
                }
                return res;
            }
            function parseTemplate(template, shouldClone, raw) {
                var node, frag;
                if (isFragment(template)) {
                    trimNode(template);
                    return shouldClone ? cloneNode(template) : template;
                }
                if (typeof template === "string") {
                    if (!raw && template.charAt(0) === "#") {
                        frag = idSelectorCache.get(template);
                        if (!frag) {
                            node = document.getElementById(template.slice(1));
                            if (node) {
                                frag = nodeToFragment(node);
                                idSelectorCache.put(template, frag);
                            }
                        }
                    } else {
                        frag = stringToFragment(template, raw);
                    }
                } else if (template.nodeType) {
                    frag = nodeToFragment(template);
                }
                return frag && shouldClone ? cloneNode(frag) : frag;
            }
            var template = Object.freeze({
                cloneNode: cloneNode,
                parseTemplate: parseTemplate
            });
            var html = {
                bind: function bind() {
                    if (this.el.nodeType === 8) {
                        this.nodes = [];
                        this.anchor = createAnchor("v-html");
                        replace(this.el, this.anchor);
                    }
                },
                update: function update(value) {
                    value = _toString(value);
                    if (this.nodes) {
                        this.swap(value);
                    } else {
                        this.el.innerHTML = value;
                    }
                },
                swap: function swap(value) {
                    var i = this.nodes.length;
                    while (i--) {
                        remove(this.nodes[i]);
                    }
                    var frag = parseTemplate(value, true, true);
                    this.nodes = toArray(frag.childNodes);
                    before(frag, this.anchor);
                }
            };
            function Fragment(linker, vm, frag, host, scope, parentFrag) {
                this.children = [];
                this.childFrags = [];
                this.vm = vm;
                this.scope = scope;
                this.inserted = false;
                this.parentFrag = parentFrag;
                if (parentFrag) {
                    parentFrag.childFrags.push(this);
                }
                this.unlink = linker(vm, frag, host, scope, this);
                var single = this.single = frag.childNodes.length === 1 && !frag.childNodes[0].__v_anchor;
                if (single) {
                    this.node = frag.childNodes[0];
                    this.before = singleBefore;
                    this.remove = singleRemove;
                } else {
                    this.node = createAnchor("fragment-start");
                    this.end = createAnchor("fragment-end");
                    this.frag = frag;
                    prepend(this.node, frag);
                    frag.appendChild(this.end);
                    this.before = multiBefore;
                    this.remove = multiRemove;
                }
                this.node.__v_frag = this;
            }
            Fragment.prototype.callHook = function(hook) {
                var i, l;
                for (i = 0, l = this.childFrags.length; i < l; i++) {
                    this.childFrags[i].callHook(hook);
                }
                for (i = 0, l = this.children.length; i < l; i++) {
                    hook(this.children[i]);
                }
            };
            function singleBefore(target, withTransition) {
                this.inserted = true;
                var method = withTransition !== false ? beforeWithTransition : before;
                method(this.node, target, this.vm);
                if (inDoc(this.node)) {
                    this.callHook(attach);
                }
            }
            function singleRemove() {
                this.inserted = false;
                var shouldCallRemove = inDoc(this.node);
                var self = this;
                this.beforeRemove();
                removeWithTransition(this.node, this.vm, function() {
                    if (shouldCallRemove) {
                        self.callHook(detach);
                    }
                    self.destroy();
                });
            }
            function multiBefore(target, withTransition) {
                this.inserted = true;
                var vm = this.vm;
                var method = withTransition !== false ? beforeWithTransition : before;
                mapNodeRange(this.node, this.end, function(node) {
                    method(node, target, vm);
                });
                if (inDoc(this.node)) {
                    this.callHook(attach);
                }
            }
            function multiRemove() {
                this.inserted = false;
                var self = this;
                var shouldCallRemove = inDoc(this.node);
                this.beforeRemove();
                removeNodeRange(this.node, this.end, this.vm, this.frag, function() {
                    if (shouldCallRemove) {
                        self.callHook(detach);
                    }
                    self.destroy();
                });
            }
            Fragment.prototype.beforeRemove = function() {
                var i, l;
                for (i = 0, l = this.childFrags.length; i < l; i++) {
                    this.childFrags[i].beforeRemove(false);
                }
                for (i = 0, l = this.children.length; i < l; i++) {
                    this.children[i].$destroy(false, true);
                }
                var dirs = this.unlink.dirs;
                for (i = 0, l = dirs.length; i < l; i++) {
                    dirs[i]._watcher && dirs[i]._watcher.teardown();
                }
            };
            Fragment.prototype.destroy = function() {
                if (this.parentFrag) {
                    this.parentFrag.childFrags.$remove(this);
                }
                this.node.__v_frag = null;
                this.unlink();
            };
            function attach(child) {
                if (!child._isAttached && inDoc(child.$el)) {
                    child._callHook("attached");
                }
            }
            function detach(child) {
                if (child._isAttached && !inDoc(child.$el)) {
                    child._callHook("detached");
                }
            }
            var linkerCache = new Cache(5e3);
            function FragmentFactory(vm, el) {
                this.vm = vm;
                var template;
                var isString = typeof el === "string";
                if (isString || isTemplate(el) && !el.hasAttribute("v-if")) {
                    template = parseTemplate(el, true);
                } else {
                    template = document.createDocumentFragment();
                    template.appendChild(el);
                }
                this.template = template;
                var linker;
                var cid = vm.constructor.cid;
                if (cid > 0) {
                    var cacheId = cid + (isString ? el : getOuterHTML(el));
                    linker = linkerCache.get(cacheId);
                    if (!linker) {
                        linker = compile(template, vm.$options, true);
                        linkerCache.put(cacheId, linker);
                    }
                } else {
                    linker = compile(template, vm.$options, true);
                }
                this.linker = linker;
            }
            FragmentFactory.prototype.create = function(host, scope, parentFrag) {
                var frag = cloneNode(this.template);
                return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
            };
            var ON = 700;
            var MODEL = 800;
            var BIND = 850;
            var TRANSITION = 1100;
            var EL = 1500;
            var COMPONENT = 1500;
            var PARTIAL = 1750;
            var IF = 2100;
            var FOR = 2200;
            var SLOT = 2300;
            var uid$3 = 0;
            var vFor = {
                priority: FOR,
                terminal: true,
                params: [ "track-by", "stagger", "enter-stagger", "leave-stagger" ],
                bind: function bind() {
                    var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
                    if (inMatch) {
                        var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
                        if (itMatch) {
                            this.iterator = itMatch[1].trim();
                            this.alias = itMatch[2].trim();
                        } else {
                            this.alias = inMatch[1].trim();
                        }
                        this.expression = inMatch[2];
                    }
                    if (!this.alias) {
                        "production" !== "production" && warn('Invalid v-for expression "' + this.descriptor.raw + '": ' + "alias is required.", this.vm);
                        return;
                    }
                    this.id = "__v-for__" + ++uid$3;
                    var tag = this.el.tagName;
                    this.isOption = (tag === "OPTION" || tag === "OPTGROUP") && this.el.parentNode.tagName === "SELECT";
                    this.start = createAnchor("v-for-start");
                    this.end = createAnchor("v-for-end");
                    replace(this.el, this.end);
                    before(this.start, this.end);
                    this.cache = Object.create(null);
                    this.factory = new FragmentFactory(this.vm, this.el);
                },
                update: function update(data) {
                    this.diff(data);
                    this.updateRef();
                    this.updateModel();
                },
                diff: function diff(data) {
                    var item = data[0];
                    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, "$key") && hasOwn(item, "$value");
                    var trackByKey = this.params.trackBy;
                    var oldFrags = this.frags;
                    var frags = this.frags = new Array(data.length);
                    var alias = this.alias;
                    var iterator = this.iterator;
                    var start = this.start;
                    var end = this.end;
                    var inDocument = inDoc(start);
                    var init = !oldFrags;
                    var i, l, frag, key, value, primitive;
                    for (i = 0, l = data.length; i < l; i++) {
                        item = data[i];
                        key = convertedFromObject ? item.$key : null;
                        value = convertedFromObject ? item.$value : item;
                        primitive = !isObject(value);
                        frag = !init && this.getCachedFrag(value, i, key);
                        if (frag) {
                            frag.reused = true;
                            frag.scope.$index = i;
                            if (key) {
                                frag.scope.$key = key;
                            }
                            if (iterator) {
                                frag.scope[iterator] = key !== null ? key : i;
                            }
                            if (trackByKey || convertedFromObject || primitive) {
                                withoutConversion(function() {
                                    frag.scope[alias] = value;
                                });
                            }
                        } else {
                            frag = this.create(value, alias, i, key);
                            frag.fresh = !init;
                        }
                        frags[i] = frag;
                        if (init) {
                            frag.before(end);
                        }
                    }
                    if (init) {
                        return;
                    }
                    var removalIndex = 0;
                    var totalRemoved = oldFrags.length - frags.length;
                    this.vm._vForRemoving = true;
                    for (i = 0, l = oldFrags.length; i < l; i++) {
                        frag = oldFrags[i];
                        if (!frag.reused) {
                            this.deleteCachedFrag(frag);
                            this.remove(frag, removalIndex++, totalRemoved, inDocument);
                        }
                    }
                    this.vm._vForRemoving = false;
                    if (removalIndex) {
                        this.vm._watchers = this.vm._watchers.filter(function(w) {
                            return w.active;
                        });
                    }
                    var targetPrev, prevEl, currentPrev;
                    var insertionIndex = 0;
                    for (i = 0, l = frags.length; i < l; i++) {
                        frag = frags[i];
                        targetPrev = frags[i - 1];
                        prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
                        if (frag.reused && !frag.staggerCb) {
                            currentPrev = findPrevFrag(frag, start, this.id);
                            if (currentPrev !== targetPrev && (!currentPrev || findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
                                this.move(frag, prevEl);
                            }
                        } else {
                            this.insert(frag, insertionIndex++, prevEl, inDocument);
                        }
                        frag.reused = frag.fresh = false;
                    }
                },
                create: function create(value, alias, index, key) {
                    var host = this._host;
                    var parentScope = this._scope || this.vm;
                    var scope = Object.create(parentScope);
                    scope.$refs = Object.create(parentScope.$refs);
                    scope.$els = Object.create(parentScope.$els);
                    scope.$parent = parentScope;
                    scope.$forContext = this;
                    withoutConversion(function() {
                        defineReactive(scope, alias, value);
                    });
                    defineReactive(scope, "$index", index);
                    if (key) {
                        defineReactive(scope, "$key", key);
                    } else if (scope.$key) {
                        def(scope, "$key", null);
                    }
                    if (this.iterator) {
                        defineReactive(scope, this.iterator, key !== null ? key : index);
                    }
                    var frag = this.factory.create(host, scope, this._frag);
                    frag.forId = this.id;
                    this.cacheFrag(value, frag, index, key);
                    return frag;
                },
                updateRef: function updateRef() {
                    var ref = this.descriptor.ref;
                    if (!ref) return;
                    var hash = (this._scope || this.vm).$refs;
                    var refs;
                    if (!this.fromObject) {
                        refs = this.frags.map(findVmFromFrag);
                    } else {
                        refs = {};
                        this.frags.forEach(function(frag) {
                            refs[frag.scope.$key] = findVmFromFrag(frag);
                        });
                    }
                    hash[ref] = refs;
                },
                updateModel: function updateModel() {
                    if (this.isOption) {
                        var parent = this.start.parentNode;
                        var model = parent && parent.__v_model;
                        if (model) {
                            model.forceUpdate();
                        }
                    }
                },
                insert: function insert(frag, index, prevEl, inDocument) {
                    if (frag.staggerCb) {
                        frag.staggerCb.cancel();
                        frag.staggerCb = null;
                    }
                    var staggerAmount = this.getStagger(frag, index, null, "enter");
                    if (inDocument && staggerAmount) {
                        var anchor = frag.staggerAnchor;
                        if (!anchor) {
                            anchor = frag.staggerAnchor = createAnchor("stagger-anchor");
                            anchor.__v_frag = frag;
                        }
                        after(anchor, prevEl);
                        var op = frag.staggerCb = cancellable(function() {
                            frag.staggerCb = null;
                            frag.before(anchor);
                            remove(anchor);
                        });
                        setTimeout(op, staggerAmount);
                    } else {
                        var target = prevEl.nextSibling;
                        if (!target) {
                            after(this.end, prevEl);
                            target = this.end;
                        }
                        frag.before(target);
                    }
                },
                remove: function remove(frag, index, total, inDocument) {
                    if (frag.staggerCb) {
                        frag.staggerCb.cancel();
                        frag.staggerCb = null;
                        return;
                    }
                    var staggerAmount = this.getStagger(frag, index, total, "leave");
                    if (inDocument && staggerAmount) {
                        var op = frag.staggerCb = cancellable(function() {
                            frag.staggerCb = null;
                            frag.remove();
                        });
                        setTimeout(op, staggerAmount);
                    } else {
                        frag.remove();
                    }
                },
                move: function move(frag, prevEl) {
                    if (!prevEl.nextSibling) {
                        this.end.parentNode.appendChild(this.end);
                    }
                    frag.before(prevEl.nextSibling, false);
                },
                cacheFrag: function cacheFrag(value, frag, index, key) {
                    var trackByKey = this.params.trackBy;
                    var cache = this.cache;
                    var primitive = !isObject(value);
                    var id;
                    if (key || trackByKey || primitive) {
                        id = getTrackByKey(index, key, value, trackByKey);
                        if (!cache[id]) {
                            cache[id] = frag;
                        } else if (trackByKey !== "$index") {
                            "production" !== "production" && this.warnDuplicate(value);
                        }
                    } else {
                        id = this.id;
                        if (hasOwn(value, id)) {
                            if (value[id] === null) {
                                value[id] = frag;
                            } else {
                                "production" !== "production" && this.warnDuplicate(value);
                            }
                        } else if (Object.isExtensible(value)) {
                            def(value, id, frag);
                        } else if (false) {
                            warn("Frozen v-for objects cannot be automatically tracked, make sure to " + "provide a track-by key.");
                        }
                    }
                    frag.raw = value;
                },
                getCachedFrag: function getCachedFrag(value, index, key) {
                    var trackByKey = this.params.trackBy;
                    var primitive = !isObject(value);
                    var frag;
                    if (key || trackByKey || primitive) {
                        var id = getTrackByKey(index, key, value, trackByKey);
                        frag = this.cache[id];
                    } else {
                        frag = value[this.id];
                    }
                    if (frag && (frag.reused || frag.fresh)) {
                        "production" !== "production" && this.warnDuplicate(value);
                    }
                    return frag;
                },
                deleteCachedFrag: function deleteCachedFrag(frag) {
                    var value = frag.raw;
                    var trackByKey = this.params.trackBy;
                    var scope = frag.scope;
                    var index = scope.$index;
                    var key = hasOwn(scope, "$key") && scope.$key;
                    var primitive = !isObject(value);
                    if (trackByKey || key || primitive) {
                        var id = getTrackByKey(index, key, value, trackByKey);
                        this.cache[id] = null;
                    } else {
                        value[this.id] = null;
                        frag.raw = null;
                    }
                },
                getStagger: function getStagger(frag, index, total, type) {
                    type = type + "Stagger";
                    var trans = frag.node.__v_trans;
                    var hooks = trans && trans.hooks;
                    var hook = hooks && (hooks[type] || hooks.stagger);
                    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
                },
                _preProcess: function _preProcess(value) {
                    this.rawValue = value;
                    return value;
                },
                _postProcess: function _postProcess(value) {
                    if (isArray(value)) {
                        return value;
                    } else if (isPlainObject(value)) {
                        var keys = Object.keys(value);
                        var i = keys.length;
                        var res = new Array(i);
                        var key;
                        while (i--) {
                            key = keys[i];
                            res[i] = {
                                $key: key,
                                $value: value[key]
                            };
                        }
                        return res;
                    } else {
                        if (typeof value === "number" && !isNaN(value)) {
                            value = range(value);
                        }
                        return value || [];
                    }
                },
                unbind: function unbind() {
                    if (this.descriptor.ref) {
                        (this._scope || this.vm).$refs[this.descriptor.ref] = null;
                    }
                    if (this.frags) {
                        var i = this.frags.length;
                        var frag;
                        while (i--) {
                            frag = this.frags[i];
                            this.deleteCachedFrag(frag);
                            frag.destroy();
                        }
                    }
                }
            };
            function findPrevFrag(frag, anchor, id) {
                var el = frag.node.previousSibling;
                if (!el) return;
                frag = el.__v_frag;
                while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
                    el = el.previousSibling;
                    if (!el) return;
                    frag = el.__v_frag;
                }
                return frag;
            }
            function findVmFromFrag(frag) {
                var node = frag.node;
                if (frag.end) {
                    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
                        node = node.nextSibling;
                    }
                }
                return node.__vue__;
            }
            function range(n) {
                var i = -1;
                var ret = new Array(Math.floor(n));
                while (++i < n) {
                    ret[i] = i;
                }
                return ret;
            }
            function getTrackByKey(index, key, value, trackByKey) {
                return trackByKey ? trackByKey === "$index" ? index : trackByKey.charAt(0).match(/\w/) ? getPath(value, trackByKey) : value[trackByKey] : key || value;
            }
            if (false) {
                vFor.warnDuplicate = function(value) {
                    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + "you are expecting duplicate values.", this.vm);
                };
            }
            var vIf = {
                priority: IF,
                terminal: true,
                bind: function bind() {
                    var el = this.el;
                    if (!el.__vue__) {
                        var next = el.nextElementSibling;
                        if (next && getAttr(next, "v-else") !== null) {
                            remove(next);
                            this.elseEl = next;
                        }
                        this.anchor = createAnchor("v-if");
                        replace(el, this.anchor);
                    } else {
                        "production" !== "production" && warn('v-if="' + this.expression + '" cannot be ' + "used on an instance root element.", this.vm);
                        this.invalid = true;
                    }
                },
                update: function update(value) {
                    if (this.invalid) return;
                    if (value) {
                        if (!this.frag) {
                            this.insert();
                        }
                    } else {
                        this.remove();
                    }
                },
                insert: function insert() {
                    if (this.elseFrag) {
                        this.elseFrag.remove();
                        this.elseFrag = null;
                    }
                    if (!this.factory) {
                        this.factory = new FragmentFactory(this.vm, this.el);
                    }
                    this.frag = this.factory.create(this._host, this._scope, this._frag);
                    this.frag.before(this.anchor);
                },
                remove: function remove() {
                    if (this.frag) {
                        this.frag.remove();
                        this.frag = null;
                    }
                    if (this.elseEl && !this.elseFrag) {
                        if (!this.elseFactory) {
                            this.elseFactory = new FragmentFactory(this.elseEl._context || this.vm, this.elseEl);
                        }
                        this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
                        this.elseFrag.before(this.anchor);
                    }
                },
                unbind: function unbind() {
                    if (this.frag) {
                        this.frag.destroy();
                    }
                    if (this.elseFrag) {
                        this.elseFrag.destroy();
                    }
                }
            };
            var show = {
                bind: function bind() {
                    var next = this.el.nextElementSibling;
                    if (next && getAttr(next, "v-else") !== null) {
                        this.elseEl = next;
                    }
                },
                update: function update(value) {
                    this.apply(this.el, value);
                    if (this.elseEl) {
                        this.apply(this.elseEl, !value);
                    }
                },
                apply: function apply(el, value) {
                    if (inDoc(el)) {
                        applyTransition(el, value ? 1 : -1, toggle, this.vm);
                    } else {
                        toggle();
                    }
                    function toggle() {
                        el.style.display = value ? "" : "none";
                    }
                }
            };
            var text$2 = {
                bind: function bind() {
                    var self = this;
                    var el = this.el;
                    var isRange = el.type === "range";
                    var lazy = this.params.lazy;
                    var number = this.params.number;
                    var debounce = this.params.debounce;
                    var composing = false;
                    if (!isAndroid && !isRange) {
                        this.on("compositionstart", function() {
                            composing = true;
                        });
                        this.on("compositionend", function() {
                            composing = false;
                            if (!lazy) {
                                self.listener();
                            }
                        });
                    }
                    this.focused = false;
                    if (!isRange && !lazy) {
                        this.on("focus", function() {
                            self.focused = true;
                        });
                        this.on("blur", function() {
                            self.focused = false;
                            if (!self._frag || self._frag.inserted) {
                                self.rawListener();
                            }
                        });
                    }
                    this.listener = this.rawListener = function() {
                        if (composing || !self._bound) {
                            return;
                        }
                        var val = number || isRange ? toNumber(el.value) : el.value;
                        self.set(val);
                        nextTick(function() {
                            if (self._bound && !self.focused) {
                                self.update(self._watcher.value);
                            }
                        });
                    };
                    if (debounce) {
                        this.listener = _debounce(this.listener, debounce);
                    }
                    this.hasjQuery = typeof jQuery === "function";
                    if (this.hasjQuery) {
                        var method = jQuery.fn.on ? "on" : "bind";
                        jQuery(el)[method]("change", this.rawListener);
                        if (!lazy) {
                            jQuery(el)[method]("input", this.listener);
                        }
                    } else {
                        this.on("change", this.rawListener);
                        if (!lazy) {
                            this.on("input", this.listener);
                        }
                    }
                    if (!lazy && isIE9) {
                        this.on("cut", function() {
                            nextTick(self.listener);
                        });
                        this.on("keyup", function(e) {
                            if (e.keyCode === 46 || e.keyCode === 8) {
                                self.listener();
                            }
                        });
                    }
                    if (el.hasAttribute("value") || el.tagName === "TEXTAREA" && el.value.trim()) {
                        this.afterBind = this.listener;
                    }
                },
                update: function update(value) {
                    value = _toString(value);
                    if (value !== this.el.value) this.el.value = value;
                },
                unbind: function unbind() {
                    var el = this.el;
                    if (this.hasjQuery) {
                        var method = jQuery.fn.off ? "off" : "unbind";
                        jQuery(el)[method]("change", this.listener);
                        jQuery(el)[method]("input", this.listener);
                    }
                }
            };
            var radio = {
                bind: function bind() {
                    var self = this;
                    var el = this.el;
                    this.getValue = function() {
                        if (el.hasOwnProperty("_value")) {
                            return el._value;
                        }
                        var val = el.value;
                        if (self.params.number) {
                            val = toNumber(val);
                        }
                        return val;
                    };
                    this.listener = function() {
                        self.set(self.getValue());
                    };
                    this.on("change", this.listener);
                    if (el.hasAttribute("checked")) {
                        this.afterBind = this.listener;
                    }
                },
                update: function update(value) {
                    this.el.checked = looseEqual(value, this.getValue());
                }
            };
            var select = {
                bind: function bind() {
                    var _this = this;
                    var self = this;
                    var el = this.el;
                    this.forceUpdate = function() {
                        if (self._watcher) {
                            self.update(self._watcher.get());
                        }
                    };
                    var multiple = this.multiple = el.hasAttribute("multiple");
                    this.listener = function() {
                        var value = getValue(el, multiple);
                        value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
                        self.set(value);
                    };
                    this.on("change", this.listener);
                    var initValue = getValue(el, multiple, true);
                    if (multiple && initValue.length || !multiple && initValue !== null) {
                        this.afterBind = this.listener;
                    }
                    this.vm.$on("hook:attached", function() {
                        nextTick(_this.forceUpdate);
                    });
                    if (!inDoc(el)) {
                        nextTick(this.forceUpdate);
                    }
                },
                update: function update(value) {
                    var el = this.el;
                    el.selectedIndex = -1;
                    var multi = this.multiple && isArray(value);
                    var options = el.options;
                    var i = options.length;
                    var op, val;
                    while (i--) {
                        op = options[i];
                        val = op.hasOwnProperty("_value") ? op._value : op.value;
                        op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
                    }
                },
                unbind: function unbind() {
                    this.vm.$off("hook:attached", this.forceUpdate);
                }
            };
            function getValue(el, multi, init) {
                var res = multi ? [] : null;
                var op, val, selected;
                for (var i = 0, l = el.options.length; i < l; i++) {
                    op = el.options[i];
                    selected = init ? op.hasAttribute("selected") : op.selected;
                    if (selected) {
                        val = op.hasOwnProperty("_value") ? op._value : op.value;
                        if (multi) {
                            res.push(val);
                        } else {
                            return val;
                        }
                    }
                }
                return res;
            }
            function indexOf$1(arr, val) {
                var i = arr.length;
                while (i--) {
                    if (looseEqual(arr[i], val)) {
                        return i;
                    }
                }
                return -1;
            }
            var checkbox = {
                bind: function bind() {
                    var self = this;
                    var el = this.el;
                    this.getValue = function() {
                        return el.hasOwnProperty("_value") ? el._value : self.params.number ? toNumber(el.value) : el.value;
                    };
                    function getBooleanValue() {
                        var val = el.checked;
                        if (val && el.hasOwnProperty("_trueValue")) {
                            return el._trueValue;
                        }
                        if (!val && el.hasOwnProperty("_falseValue")) {
                            return el._falseValue;
                        }
                        return val;
                    }
                    this.listener = function() {
                        var model = self._watcher.value;
                        if (isArray(model)) {
                            var val = self.getValue();
                            if (el.checked) {
                                if (indexOf(model, val) < 0) {
                                    model.push(val);
                                }
                            } else {
                                model.$remove(val);
                            }
                        } else {
                            self.set(getBooleanValue());
                        }
                    };
                    this.on("change", this.listener);
                    if (el.hasAttribute("checked")) {
                        this.afterBind = this.listener;
                    }
                },
                update: function update(value) {
                    var el = this.el;
                    if (isArray(value)) {
                        el.checked = indexOf(value, this.getValue()) > -1;
                    } else {
                        if (el.hasOwnProperty("_trueValue")) {
                            el.checked = looseEqual(value, el._trueValue);
                        } else {
                            el.checked = !!value;
                        }
                    }
                }
            };
            var handlers = {
                text: text$2,
                radio: radio,
                select: select,
                checkbox: checkbox
            };
            var model = {
                priority: MODEL,
                twoWay: true,
                handlers: handlers,
                params: [ "lazy", "number", "debounce" ],
                bind: function bind() {
                    this.checkFilters();
                    if (this.hasRead && !this.hasWrite) {
                        "production" !== "production" && warn("It seems you are using a read-only filter with " + 'v-model="' + this.descriptor.raw + '". ' + "You might want to use a two-way filter to ensure correct behavior.", this.vm);
                    }
                    var el = this.el;
                    var tag = el.tagName;
                    var handler;
                    if (tag === "INPUT") {
                        handler = handlers[el.type] || handlers.text;
                    } else if (tag === "SELECT") {
                        handler = handlers.select;
                    } else if (tag === "TEXTAREA") {
                        handler = handlers.text;
                    } else {
                        "production" !== "production" && warn("v-model does not support element type: " + tag, this.vm);
                        return;
                    }
                    el.__v_model = this;
                    handler.bind.call(this);
                    this.update = handler.update;
                    this._unbind = handler.unbind;
                },
                checkFilters: function checkFilters() {
                    var filters = this.filters;
                    if (!filters) return;
                    var i = filters.length;
                    while (i--) {
                        var filter = resolveAsset(this.vm.$options, "filters", filters[i].name);
                        if (typeof filter === "function" || filter.read) {
                            this.hasRead = true;
                        }
                        if (filter.write) {
                            this.hasWrite = true;
                        }
                    }
                },
                unbind: function unbind() {
                    this.el.__v_model = null;
                    this._unbind && this._unbind();
                }
            };
            var keyCodes = {
                esc: 27,
                tab: 9,
                enter: 13,
                space: 32,
                "delete": [ 8, 46 ],
                up: 38,
                left: 37,
                right: 39,
                down: 40
            };
            function keyFilter(handler, keys) {
                var codes = keys.map(function(key) {
                    var charCode = key.charCodeAt(0);
                    if (charCode > 47 && charCode < 58) {
                        return parseInt(key, 10);
                    }
                    if (key.length === 1) {
                        charCode = key.toUpperCase().charCodeAt(0);
                        if (charCode > 64 && charCode < 91) {
                            return charCode;
                        }
                    }
                    return keyCodes[key];
                });
                codes = [].concat.apply([], codes);
                return function keyHandler(e) {
                    if (codes.indexOf(e.keyCode) > -1) {
                        return handler.call(this, e);
                    }
                };
            }
            function stopFilter(handler) {
                return function stopHandler(e) {
                    e.stopPropagation();
                    return handler.call(this, e);
                };
            }
            function preventFilter(handler) {
                return function preventHandler(e) {
                    e.preventDefault();
                    return handler.call(this, e);
                };
            }
            function selfFilter(handler) {
                return function selfHandler(e) {
                    if (e.target === e.currentTarget) {
                        return handler.call(this, e);
                    }
                };
            }
            var on$1 = {
                priority: ON,
                acceptStatement: true,
                keyCodes: keyCodes,
                bind: function bind() {
                    if (this.el.tagName === "IFRAME" && this.arg !== "load") {
                        var self = this;
                        this.iframeBind = function() {
                            on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
                        };
                        this.on("load", this.iframeBind);
                    }
                },
                update: function update(handler) {
                    if (!this.descriptor.raw) {
                        handler = function() {};
                    }
                    if (typeof handler !== "function") {
                        "production" !== "production" && warn("v-on:" + this.arg + '="' + this.expression + '" expects a function value, ' + "got " + handler, this.vm);
                        return;
                    }
                    if (this.modifiers.stop) {
                        handler = stopFilter(handler);
                    }
                    if (this.modifiers.prevent) {
                        handler = preventFilter(handler);
                    }
                    if (this.modifiers.self) {
                        handler = selfFilter(handler);
                    }
                    var keys = Object.keys(this.modifiers).filter(function(key) {
                        return key !== "stop" && key !== "prevent" && key !== "self" && key !== "capture";
                    });
                    if (keys.length) {
                        handler = keyFilter(handler, keys);
                    }
                    this.reset();
                    this.handler = handler;
                    if (this.iframeBind) {
                        this.iframeBind();
                    } else {
                        on(this.el, this.arg, this.handler, this.modifiers.capture);
                    }
                },
                reset: function reset() {
                    var el = this.iframeBind ? this.el.contentWindow : this.el;
                    if (this.handler) {
                        off(el, this.arg, this.handler);
                    }
                },
                unbind: function unbind() {
                    this.reset();
                }
            };
            var prefixes = [ "-webkit-", "-moz-", "-ms-" ];
            var camelPrefixes = [ "Webkit", "Moz", "ms" ];
            var importantRE = /!important;?$/;
            var propCache = Object.create(null);
            var testEl = null;
            var style = {
                deep: true,
                update: function update(value) {
                    if (typeof value === "string") {
                        this.el.style.cssText = value;
                    } else if (isArray(value)) {
                        this.handleObject(value.reduce(extend, {}));
                    } else {
                        this.handleObject(value || {});
                    }
                },
                handleObject: function handleObject(value) {
                    var cache = this.cache || (this.cache = {});
                    var name, val;
                    for (name in cache) {
                        if (!(name in value)) {
                            this.handleSingle(name, null);
                            delete cache[name];
                        }
                    }
                    for (name in value) {
                        val = value[name];
                        if (val !== cache[name]) {
                            cache[name] = val;
                            this.handleSingle(name, val);
                        }
                    }
                },
                handleSingle: function handleSingle(prop, value) {
                    prop = normalize(prop);
                    if (!prop) return;
                    if (value != null) value += "";
                    if (value) {
                        var isImportant = importantRE.test(value) ? "important" : "";
                        if (isImportant) {
                            if (false) {
                                warn("It's probably a bad idea to use !important with inline rules. " + "This feature will be deprecated in a future version of Vue.");
                            }
                            value = value.replace(importantRE, "").trim();
                            this.el.style.setProperty(prop.kebab, value, isImportant);
                        } else {
                            this.el.style[prop.camel] = value;
                        }
                    } else {
                        this.el.style[prop.camel] = "";
                    }
                }
            };
            function normalize(prop) {
                if (propCache[prop]) {
                    return propCache[prop];
                }
                var res = prefix(prop);
                propCache[prop] = propCache[res] = res;
                return res;
            }
            function prefix(prop) {
                prop = hyphenate(prop);
                var camel = camelize(prop);
                var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
                if (!testEl) {
                    testEl = document.createElement("div");
                }
                var i = prefixes.length;
                var prefixed;
                if (camel !== "filter" && camel in testEl.style) {
                    return {
                        kebab: prop,
                        camel: camel
                    };
                }
                while (i--) {
                    prefixed = camelPrefixes[i] + upper;
                    if (prefixed in testEl.style) {
                        return {
                            kebab: prefixes[i] + prop,
                            camel: prefixed
                        };
                    }
                }
            }
            var xlinkNS = "http://www.w3.org/1999/xlink";
            var xlinkRE = /^xlink:/;
            var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
            var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
            var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;
            var modelProps = {
                value: "_value",
                "true-value": "_trueValue",
                "false-value": "_falseValue"
            };
            var bind$1 = {
                priority: BIND,
                bind: function bind() {
                    var attr = this.arg;
                    var tag = this.el.tagName;
                    if (!attr) {
                        this.deep = true;
                    }
                    var descriptor = this.descriptor;
                    var tokens = descriptor.interp;
                    if (tokens) {
                        if (descriptor.hasOneTime) {
                            this.expression = tokensToExp(tokens, this._scope || this.vm);
                        }
                        if (disallowedInterpAttrRE.test(attr) || attr === "name" && (tag === "PARTIAL" || tag === "SLOT")) {
                            "production" !== "production" && warn(attr + '="' + descriptor.raw + '": ' + "attribute interpolation is not allowed in Vue.js " + "directives and special attributes.", this.vm);
                            this.el.removeAttribute(attr);
                            this.invalid = true;
                        }
                        if (false) {
                            var raw = attr + '="' + descriptor.raw + '": ';
                            if (attr === "src") {
                                warn(raw + 'interpolation in "src" attribute will cause ' + "a 404 request. Use v-bind:src instead.", this.vm);
                            }
                            if (attr === "style") {
                                warn(raw + 'interpolation in "style" attribute will cause ' + "the attribute to be discarded in Internet Explorer. " + "Use v-bind:style instead.", this.vm);
                            }
                        }
                    }
                },
                update: function update(value) {
                    if (this.invalid) {
                        return;
                    }
                    var attr = this.arg;
                    if (this.arg) {
                        this.handleSingle(attr, value);
                    } else {
                        this.handleObject(value || {});
                    }
                },
                handleObject: style.handleObject,
                handleSingle: function handleSingle(attr, value) {
                    var el = this.el;
                    var interp = this.descriptor.interp;
                    if (this.modifiers.camel) {
                        attr = camelize(attr);
                    }
                    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
                        var attrValue = attr === "value" ? value == null ? "" : value : value;
                        if (el[attr] !== attrValue) {
                            el[attr] = attrValue;
                        }
                    }
                    var modelProp = modelProps[attr];
                    if (!interp && modelProp) {
                        el[modelProp] = value;
                        var model = el.__v_model;
                        if (model) {
                            model.listener();
                        }
                    }
                    if (attr === "value" && el.tagName === "TEXTAREA") {
                        el.removeAttribute(attr);
                        return;
                    }
                    if (enumeratedAttrRE.test(attr)) {
                        el.setAttribute(attr, value ? "true" : "false");
                    } else if (value != null && value !== false) {
                        if (attr === "class") {
                            if (el.__v_trans) {
                                value += " " + el.__v_trans.id + "-transition";
                            }
                            setClass(el, value);
                        } else if (xlinkRE.test(attr)) {
                            el.setAttributeNS(xlinkNS, attr, value === true ? "" : value);
                        } else {
                            el.setAttribute(attr, value === true ? "" : value);
                        }
                    } else {
                        el.removeAttribute(attr);
                    }
                }
            };
            var el = {
                priority: EL,
                bind: function bind() {
                    if (!this.arg) {
                        return;
                    }
                    var id = this.id = camelize(this.arg);
                    var refs = (this._scope || this.vm).$els;
                    if (hasOwn(refs, id)) {
                        refs[id] = this.el;
                    } else {
                        defineReactive(refs, id, this.el);
                    }
                },
                unbind: function unbind() {
                    var refs = (this._scope || this.vm).$els;
                    if (refs[this.id] === this.el) {
                        refs[this.id] = null;
                    }
                }
            };
            var ref = {
                bind: function bind() {
                    "production" !== "production" && warn("v-ref:" + this.arg + " must be used on a child " + "component. Found on <" + this.el.tagName.toLowerCase() + ">.", this.vm);
                }
            };
            var cloak = {
                bind: function bind() {
                    var el = this.el;
                    this.vm.$once("pre-hook:compiled", function() {
                        el.removeAttribute("v-cloak");
                    });
                }
            };
            var directives = {
                text: text$1,
                html: html,
                "for": vFor,
                "if": vIf,
                show: show,
                model: model,
                on: on$1,
                bind: bind$1,
                el: el,
                ref: ref,
                cloak: cloak
            };
            var vClass = {
                deep: true,
                update: function update(value) {
                    if (!value) {
                        this.cleanup();
                    } else if (typeof value === "string") {
                        this.setClass(value.trim().split(/\s+/));
                    } else {
                        this.setClass(normalize$1(value));
                    }
                },
                setClass: function setClass(value) {
                    this.cleanup(value);
                    for (var i = 0, l = value.length; i < l; i++) {
                        var val = value[i];
                        if (val) {
                            apply(this.el, val, addClass);
                        }
                    }
                    this.prevKeys = value;
                },
                cleanup: function cleanup(value) {
                    var prevKeys = this.prevKeys;
                    if (!prevKeys) return;
                    var i = prevKeys.length;
                    while (i--) {
                        var key = prevKeys[i];
                        if (!value || value.indexOf(key) < 0) {
                            apply(this.el, key, removeClass);
                        }
                    }
                }
            };
            function normalize$1(value) {
                var res = [];
                if (isArray(value)) {
                    for (var i = 0, l = value.length; i < l; i++) {
                        var _key = value[i];
                        if (_key) {
                            if (typeof _key === "string") {
                                res.push(_key);
                            } else {
                                for (var k in _key) {
                                    if (_key[k]) res.push(k);
                                }
                            }
                        }
                    }
                } else if (isObject(value)) {
                    for (var key in value) {
                        if (value[key]) res.push(key);
                    }
                }
                return res;
            }
            function apply(el, key, fn) {
                key = key.trim();
                if (key.indexOf(" ") === -1) {
                    fn(el, key);
                    return;
                }
                var keys = key.split(/\s+/);
                for (var i = 0, l = keys.length; i < l; i++) {
                    fn(el, keys[i]);
                }
            }
            var component = {
                priority: COMPONENT,
                params: [ "keep-alive", "transition-mode", "inline-template" ],
                bind: function bind() {
                    if (!this.el.__vue__) {
                        this.keepAlive = this.params.keepAlive;
                        if (this.keepAlive) {
                            this.cache = {};
                        }
                        if (this.params.inlineTemplate) {
                            this.inlineTemplate = extractContent(this.el, true);
                        }
                        this.pendingComponentCb = this.Component = null;
                        this.pendingRemovals = 0;
                        this.pendingRemovalCb = null;
                        this.anchor = createAnchor("v-component");
                        replace(this.el, this.anchor);
                        this.el.removeAttribute("is");
                        this.el.removeAttribute(":is");
                        if (this.descriptor.ref) {
                            this.el.removeAttribute("v-ref:" + hyphenate(this.descriptor.ref));
                        }
                        if (this.literal) {
                            this.setComponent(this.expression);
                        }
                    } else {
                        "production" !== "production" && warn('cannot mount component "' + this.expression + '" ' + "on already mounted element: " + this.el);
                    }
                },
                update: function update(value) {
                    if (!this.literal) {
                        this.setComponent(value);
                    }
                },
                setComponent: function setComponent(value, cb) {
                    this.invalidatePending();
                    if (!value) {
                        this.unbuild(true);
                        this.remove(this.childVM, cb);
                        this.childVM = null;
                    } else {
                        var self = this;
                        this.resolveComponent(value, function() {
                            self.mountComponent(cb);
                        });
                    }
                },
                resolveComponent: function resolveComponent(value, cb) {
                    var self = this;
                    this.pendingComponentCb = cancellable(function(Component) {
                        self.ComponentName = Component.options.name || (typeof value === "string" ? value : null);
                        self.Component = Component;
                        cb();
                    });
                    this.vm._resolveComponent(value, this.pendingComponentCb);
                },
                mountComponent: function mountComponent(cb) {
                    this.unbuild(true);
                    var self = this;
                    var activateHooks = this.Component.options.activate;
                    var cached = this.getCached();
                    var newComponent = this.build();
                    if (activateHooks && !cached) {
                        this.waitingFor = newComponent;
                        callActivateHooks(activateHooks, newComponent, function() {
                            if (self.waitingFor !== newComponent) {
                                return;
                            }
                            self.waitingFor = null;
                            self.transition(newComponent, cb);
                        });
                    } else {
                        if (cached) {
                            newComponent._updateRef();
                        }
                        this.transition(newComponent, cb);
                    }
                },
                invalidatePending: function invalidatePending() {
                    if (this.pendingComponentCb) {
                        this.pendingComponentCb.cancel();
                        this.pendingComponentCb = null;
                    }
                },
                build: function build(extraOptions) {
                    var cached = this.getCached();
                    if (cached) {
                        return cached;
                    }
                    if (this.Component) {
                        var options = {
                            name: this.ComponentName,
                            el: cloneNode(this.el),
                            template: this.inlineTemplate,
                            parent: this._host || this.vm,
                            _linkerCachable: !this.inlineTemplate,
                            _ref: this.descriptor.ref,
                            _asComponent: true,
                            _isRouterView: this._isRouterView,
                            _context: this.vm,
                            _scope: this._scope,
                            _frag: this._frag
                        };
                        if (extraOptions) {
                            extend(options, extraOptions);
                        }
                        var child = new this.Component(options);
                        if (this.keepAlive) {
                            this.cache[this.Component.cid] = child;
                        }
                        if (false) {
                            warn("Transitions will not work on a fragment instance. " + "Template: " + child.$options.template, child);
                        }
                        return child;
                    }
                },
                getCached: function getCached() {
                    return this.keepAlive && this.cache[this.Component.cid];
                },
                unbuild: function unbuild(defer) {
                    if (this.waitingFor) {
                        if (!this.keepAlive) {
                            this.waitingFor.$destroy();
                        }
                        this.waitingFor = null;
                    }
                    var child = this.childVM;
                    if (!child || this.keepAlive) {
                        if (child) {
                            child._inactive = true;
                            child._updateRef(true);
                        }
                        return;
                    }
                    child.$destroy(false, defer);
                },
                remove: function remove(child, cb) {
                    var keepAlive = this.keepAlive;
                    if (child) {
                        this.pendingRemovals++;
                        this.pendingRemovalCb = cb;
                        var self = this;
                        child.$remove(function() {
                            self.pendingRemovals--;
                            if (!keepAlive) child._cleanup();
                            if (!self.pendingRemovals && self.pendingRemovalCb) {
                                self.pendingRemovalCb();
                                self.pendingRemovalCb = null;
                            }
                        });
                    } else if (cb) {
                        cb();
                    }
                },
                transition: function transition(target, cb) {
                    var self = this;
                    var current = this.childVM;
                    if (current) current._inactive = true;
                    target._inactive = false;
                    this.childVM = target;
                    switch (self.params.transitionMode) {
                      case "in-out":
                        target.$before(self.anchor, function() {
                            self.remove(current, cb);
                        });
                        break;

                      case "out-in":
                        self.remove(current, function() {
                            target.$before(self.anchor, cb);
                        });
                        break;

                      default:
                        self.remove(current);
                        target.$before(self.anchor, cb);
                    }
                },
                unbind: function unbind() {
                    this.invalidatePending();
                    this.unbuild();
                    if (this.cache) {
                        for (var key in this.cache) {
                            this.cache[key].$destroy();
                        }
                        this.cache = null;
                    }
                }
            };
            function callActivateHooks(hooks, vm, cb) {
                var total = hooks.length;
                var called = 0;
                hooks[0].call(vm, next);
                function next() {
                    if (++called >= total) {
                        cb();
                    } else {
                        hooks[called].call(vm, next);
                    }
                }
            }
            var propBindingModes = config._propBindingModes;
            var empty = {};
            var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
            var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;
            function compileProps(el, propOptions, vm) {
                var props = [];
                var names = Object.keys(propOptions);
                var i = names.length;
                var options, name, attr, value, path, parsed, prop;
                while (i--) {
                    name = names[i];
                    options = propOptions[name] || empty;
                    if (false) {
                        warn("Do not use $data as prop.", vm);
                        continue;
                    }
                    path = camelize(name);
                    if (!identRE$1.test(path)) {
                        "production" !== "production" && warn('Invalid prop key: "' + name + '". Prop keys ' + "must be valid identifiers.", vm);
                        continue;
                    }
                    prop = {
                        name: name,
                        path: path,
                        options: options,
                        mode: propBindingModes.ONE_WAY,
                        raw: null
                    };
                    attr = hyphenate(name);
                    if ((value = getBindAttr(el, attr)) === null) {
                        if ((value = getBindAttr(el, attr + ".sync")) !== null) {
                            prop.mode = propBindingModes.TWO_WAY;
                        } else if ((value = getBindAttr(el, attr + ".once")) !== null) {
                            prop.mode = propBindingModes.ONE_TIME;
                        }
                    }
                    if (value !== null) {
                        prop.raw = value;
                        parsed = parseDirective(value);
                        value = parsed.expression;
                        prop.filters = parsed.filters;
                        if (isLiteral(value) && !parsed.filters) {
                            prop.optimizedLiteral = true;
                        } else {
                            prop.dynamic = true;
                            if (false) {
                                prop.mode = propBindingModes.ONE_WAY;
                                warn("Cannot bind two-way prop with non-settable " + "parent path: " + value, vm);
                            }
                        }
                        prop.parentPath = value;
                        if (false) {
                            warn('Prop "' + name + '" expects a two-way binding type.', vm);
                        }
                    } else if ((value = getAttr(el, attr)) !== null) {
                        prop.raw = value;
                    } else if (false) {
                        var lowerCaseName = path.toLowerCase();
                        value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(":" + lowerCaseName) || el.getAttribute("v-bind:" + lowerCaseName) || el.getAttribute(":" + lowerCaseName + ".once") || el.getAttribute("v-bind:" + lowerCaseName + ".once") || el.getAttribute(":" + lowerCaseName + ".sync") || el.getAttribute("v-bind:" + lowerCaseName + ".sync"));
                        if (value) {
                            warn("Possible usage error for prop `" + lowerCaseName + "` - " + "did you mean `" + attr + "`? HTML is case-insensitive, remember to use " + "kebab-case for props in templates.", vm);
                        } else if (options.required) {
                            warn("Missing required prop: " + name, vm);
                        }
                    }
                    props.push(prop);
                }
                return makePropsLinkFn(props);
            }
            function makePropsLinkFn(props) {
                return function propsLinkFn(vm, scope) {
                    vm._props = {};
                    var inlineProps = vm.$options.propsData;
                    var i = props.length;
                    var prop, path, options, value, raw;
                    while (i--) {
                        prop = props[i];
                        raw = prop.raw;
                        path = prop.path;
                        options = prop.options;
                        vm._props[path] = prop;
                        if (inlineProps && hasOwn(inlineProps, path)) {
                            initProp(vm, prop, inlineProps[path]);
                        }
                        if (raw === null) {
                            initProp(vm, prop, undefined);
                        } else if (prop.dynamic) {
                            if (prop.mode === propBindingModes.ONE_TIME) {
                                value = (scope || vm._context || vm).$get(prop.parentPath);
                                initProp(vm, prop, value);
                            } else {
                                if (vm._context) {
                                    vm._bindDir({
                                        name: "prop",
                                        def: propDef,
                                        prop: prop
                                    }, null, null, scope);
                                } else {
                                    initProp(vm, prop, vm.$get(prop.parentPath));
                                }
                            }
                        } else if (prop.optimizedLiteral) {
                            var stripped = stripQuotes(raw);
                            value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
                            initProp(vm, prop, value);
                        } else {
                            value = options.type === Boolean && (raw === "" || raw === hyphenate(prop.name)) ? true : raw;
                            initProp(vm, prop, value);
                        }
                    }
                };
            }
            function processPropValue(vm, prop, rawValue, fn) {
                var isSimple = prop.dynamic && isSimplePath(prop.parentPath);
                var value = rawValue;
                if (value === undefined) {
                    value = getPropDefaultValue(vm, prop);
                }
                value = coerceProp(prop, value, vm);
                var coerced = value !== rawValue;
                if (!assertProp(prop, value, vm)) {
                    value = undefined;
                }
                if (isSimple && !coerced) {
                    withoutConversion(function() {
                        fn(value);
                    });
                } else {
                    fn(value);
                }
            }
            function initProp(vm, prop, value) {
                processPropValue(vm, prop, value, function(value) {
                    defineReactive(vm, prop.path, value);
                });
            }
            function updateProp(vm, prop, value) {
                processPropValue(vm, prop, value, function(value) {
                    vm[prop.path] = value;
                });
            }
            function getPropDefaultValue(vm, prop) {
                var options = prop.options;
                if (!hasOwn(options, "default")) {
                    return options.type === Boolean ? false : undefined;
                }
                var def = options["default"];
                if (isObject(def)) {
                    "production" !== "production" && warn('Invalid default value for prop "' + prop.name + '": ' + "Props with type Object/Array must use a factory function " + "to return the default value.", vm);
                }
                return typeof def === "function" && options.type !== Function ? def.call(vm) : def;
            }
            function assertProp(prop, value, vm) {
                if (!prop.options.required && (prop.raw === null || value == null)) {
                    return true;
                }
                var options = prop.options;
                var type = options.type;
                var valid = !type;
                var expectedTypes = [];
                if (type) {
                    if (!isArray(type)) {
                        type = [ type ];
                    }
                    for (var i = 0; i < type.length && !valid; i++) {
                        var assertedType = assertType(value, type[i]);
                        expectedTypes.push(assertedType.expectedType);
                        valid = assertedType.valid;
                    }
                }
                if (!valid) {
                    if (false) {
                        warn('Invalid prop: type check failed for prop "' + prop.name + '".' + " Expected " + expectedTypes.map(formatType).join(", ") + ", got " + formatValue(value) + ".", vm);
                    }
                    return false;
                }
                var validator = options.validator;
                if (validator) {
                    if (!validator(value)) {
                        "production" !== "production" && warn('Invalid prop: custom validator check failed for prop "' + prop.name + '".', vm);
                        return false;
                    }
                }
                return true;
            }
            function coerceProp(prop, value, vm) {
                var coerce = prop.options.coerce;
                if (!coerce) {
                    return value;
                }
                if (typeof coerce === "function") {
                    return coerce(value);
                } else {
                    "production" !== "production" && warn('Invalid coerce for prop "' + prop.name + '": expected function, got ' + typeof coerce + ".", vm);
                    return value;
                }
            }
            function assertType(value, type) {
                var valid;
                var expectedType;
                if (type === String) {
                    expectedType = "string";
                    valid = typeof value === expectedType;
                } else if (type === Number) {
                    expectedType = "number";
                    valid = typeof value === expectedType;
                } else if (type === Boolean) {
                    expectedType = "boolean";
                    valid = typeof value === expectedType;
                } else if (type === Function) {
                    expectedType = "function";
                    valid = typeof value === expectedType;
                } else if (type === Object) {
                    expectedType = "object";
                    valid = isPlainObject(value);
                } else if (type === Array) {
                    expectedType = "array";
                    valid = isArray(value);
                } else {
                    valid = value instanceof type;
                }
                return {
                    valid: valid,
                    expectedType: expectedType
                };
            }
            function formatType(type) {
                return type ? type.charAt(0).toUpperCase() + type.slice(1) : "custom type";
            }
            function formatValue(val) {
                return Object.prototype.toString.call(val).slice(8, -1);
            }
            var bindingModes = config._propBindingModes;
            var propDef = {
                bind: function bind() {
                    var child = this.vm;
                    var parent = child._context;
                    var prop = this.descriptor.prop;
                    var childKey = prop.path;
                    var parentKey = prop.parentPath;
                    var twoWay = prop.mode === bindingModes.TWO_WAY;
                    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function(val) {
                        updateProp(child, prop, val);
                    }, {
                        twoWay: twoWay,
                        filters: prop.filters,
                        scope: this._scope
                    });
                    initProp(child, prop, parentWatcher.value);
                    if (twoWay) {
                        var self = this;
                        child.$once("pre-hook:created", function() {
                            self.childWatcher = new Watcher(child, childKey, function(val) {
                                parentWatcher.set(val);
                            }, {
                                sync: true
                            });
                        });
                    }
                },
                unbind: function unbind() {
                    this.parentWatcher.teardown();
                    if (this.childWatcher) {
                        this.childWatcher.teardown();
                    }
                }
            };
            var queue$1 = [];
            var queued = false;
            function pushJob(job) {
                queue$1.push(job);
                if (!queued) {
                    queued = true;
                    nextTick(flush);
                }
            }
            function flush() {
                var f = document.documentElement.offsetHeight;
                for (var i = 0; i < queue$1.length; i++) {
                    queue$1[i]();
                }
                queue$1 = [];
                queued = false;
                return f;
            }
            var TYPE_TRANSITION = "transition";
            var TYPE_ANIMATION = "animation";
            var transDurationProp = transitionProp + "Duration";
            var animDurationProp = animationProp + "Duration";
            var raf = inBrowser && window.requestAnimationFrame;
            var waitForTransitionStart = raf ? function(fn) {
                raf(function() {
                    raf(fn);
                });
            } : function(fn) {
                setTimeout(fn, 50);
            };
            function Transition(el, id, hooks, vm) {
                this.id = id;
                this.el = el;
                this.enterClass = hooks && hooks.enterClass || id + "-enter";
                this.leaveClass = hooks && hooks.leaveClass || id + "-leave";
                this.hooks = hooks;
                this.vm = vm;
                this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
                this.justEntered = false;
                this.entered = this.left = false;
                this.typeCache = {};
                this.type = hooks && hooks.type;
                if (false) {
                    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
                        warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type, vm);
                    }
                }
                var self = this;
                [ "enterNextTick", "enterDone", "leaveNextTick", "leaveDone" ].forEach(function(m) {
                    self[m] = bind(self[m], self);
                });
            }
            var p$1 = Transition.prototype;
            p$1.enter = function(op, cb) {
                this.cancelPending();
                this.callHook("beforeEnter");
                this.cb = cb;
                addClass(this.el, this.enterClass);
                op();
                this.entered = false;
                this.callHookWithCb("enter");
                if (this.entered) {
                    return;
                }
                this.cancel = this.hooks && this.hooks.enterCancelled;
                pushJob(this.enterNextTick);
            };
            p$1.enterNextTick = function() {
                var _this = this;
                this.justEntered = true;
                waitForTransitionStart(function() {
                    _this.justEntered = false;
                });
                var enterDone = this.enterDone;
                var type = this.getCssTransitionType(this.enterClass);
                if (!this.pendingJsCb) {
                    if (type === TYPE_TRANSITION) {
                        removeClass(this.el, this.enterClass);
                        this.setupCssCb(transitionEndEvent, enterDone);
                    } else if (type === TYPE_ANIMATION) {
                        this.setupCssCb(animationEndEvent, enterDone);
                    } else {
                        enterDone();
                    }
                } else if (type === TYPE_TRANSITION) {
                    removeClass(this.el, this.enterClass);
                }
            };
            p$1.enterDone = function() {
                this.entered = true;
                this.cancel = this.pendingJsCb = null;
                removeClass(this.el, this.enterClass);
                this.callHook("afterEnter");
                if (this.cb) this.cb();
            };
            p$1.leave = function(op, cb) {
                this.cancelPending();
                this.callHook("beforeLeave");
                this.op = op;
                this.cb = cb;
                addClass(this.el, this.leaveClass);
                this.left = false;
                this.callHookWithCb("leave");
                if (this.left) {
                    return;
                }
                this.cancel = this.hooks && this.hooks.leaveCancelled;
                if (this.op && !this.pendingJsCb) {
                    if (this.justEntered) {
                        this.leaveDone();
                    } else {
                        pushJob(this.leaveNextTick);
                    }
                }
            };
            p$1.leaveNextTick = function() {
                var type = this.getCssTransitionType(this.leaveClass);
                if (type) {
                    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
                    this.setupCssCb(event, this.leaveDone);
                } else {
                    this.leaveDone();
                }
            };
            p$1.leaveDone = function() {
                this.left = true;
                this.cancel = this.pendingJsCb = null;
                this.op();
                removeClass(this.el, this.leaveClass);
                this.callHook("afterLeave");
                if (this.cb) this.cb();
                this.op = null;
            };
            p$1.cancelPending = function() {
                this.op = this.cb = null;
                var hasPending = false;
                if (this.pendingCssCb) {
                    hasPending = true;
                    off(this.el, this.pendingCssEvent, this.pendingCssCb);
                    this.pendingCssEvent = this.pendingCssCb = null;
                }
                if (this.pendingJsCb) {
                    hasPending = true;
                    this.pendingJsCb.cancel();
                    this.pendingJsCb = null;
                }
                if (hasPending) {
                    removeClass(this.el, this.enterClass);
                    removeClass(this.el, this.leaveClass);
                }
                if (this.cancel) {
                    this.cancel.call(this.vm, this.el);
                    this.cancel = null;
                }
            };
            p$1.callHook = function(type) {
                if (this.hooks && this.hooks[type]) {
                    this.hooks[type].call(this.vm, this.el);
                }
            };
            p$1.callHookWithCb = function(type) {
                var hook = this.hooks && this.hooks[type];
                if (hook) {
                    if (hook.length > 1) {
                        this.pendingJsCb = cancellable(this[type + "Done"]);
                    }
                    hook.call(this.vm, this.el, this.pendingJsCb);
                }
            };
            p$1.getCssTransitionType = function(className) {
                if (!transitionEndEvent || document.hidden || this.hooks && this.hooks.css === false || isHidden(this.el)) {
                    return;
                }
                var type = this.type || this.typeCache[className];
                if (type) return type;
                var inlineStyles = this.el.style;
                var computedStyles = window.getComputedStyle(this.el);
                var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
                if (transDuration && transDuration !== "0s") {
                    type = TYPE_TRANSITION;
                } else {
                    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
                    if (animDuration && animDuration !== "0s") {
                        type = TYPE_ANIMATION;
                    }
                }
                if (type) {
                    this.typeCache[className] = type;
                }
                return type;
            };
            p$1.setupCssCb = function(event, cb) {
                this.pendingCssEvent = event;
                var self = this;
                var el = this.el;
                var onEnd = this.pendingCssCb = function(e) {
                    if (e.target === el) {
                        off(el, event, onEnd);
                        self.pendingCssEvent = self.pendingCssCb = null;
                        if (!self.pendingJsCb && cb) {
                            cb();
                        }
                    }
                };
                on(el, event, onEnd);
            };
            function isHidden(el) {
                if (/svg$/.test(el.namespaceURI)) {
                    var rect = el.getBoundingClientRect();
                    return !(rect.width || rect.height);
                } else {
                    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
                }
            }
            var transition$1 = {
                priority: TRANSITION,
                update: function update(id, oldId) {
                    var el = this.el;
                    var hooks = resolveAsset(this.vm.$options, "transitions", id);
                    id = id || "v";
                    oldId = oldId || "v";
                    el.__v_trans = new Transition(el, id, hooks, this.vm);
                    removeClass(el, oldId + "-transition");
                    addClass(el, id + "-transition");
                }
            };
            var internalDirectives = {
                style: style,
                "class": vClass,
                component: component,
                prop: propDef,
                transition: transition$1
            };
            var bindRE = /^v-bind:|^:/;
            var onRE = /^v-on:|^@/;
            var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
            var modifierRE = /\.[^\.]+/g;
            var transitionRE = /^(v-bind:|:)?transition$/;
            var DEFAULT_PRIORITY = 1e3;
            var DEFAULT_TERMINAL_PRIORITY = 2e3;
            function compile(el, options, partial) {
                var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
                var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && !isScript(el) && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;
                return function compositeLinkFn(vm, el, host, scope, frag) {
                    var childNodes = toArray(el.childNodes);
                    var dirs = linkAndCapture(function compositeLinkCapturer() {
                        if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
                        if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
                    }, vm);
                    return makeUnlinkFn(vm, dirs);
                };
            }
            function linkAndCapture(linker, vm) {
                if (true) {
                    vm._directives = [];
                }
                var originalDirCount = vm._directives.length;
                linker();
                var dirs = vm._directives.slice(originalDirCount);
                dirs.sort(directiveComparator);
                for (var i = 0, l = dirs.length; i < l; i++) {
                    dirs[i]._bind();
                }
                return dirs;
            }
            function directiveComparator(a, b) {
                a = a.descriptor.def.priority || DEFAULT_PRIORITY;
                b = b.descriptor.def.priority || DEFAULT_PRIORITY;
                return a > b ? -1 : a === b ? 0 : 1;
            }
            function makeUnlinkFn(vm, dirs, context, contextDirs) {
                function unlink(destroying) {
                    teardownDirs(vm, dirs, destroying);
                    if (context && contextDirs) {
                        teardownDirs(context, contextDirs);
                    }
                }
                unlink.dirs = dirs;
                return unlink;
            }
            function teardownDirs(vm, dirs, destroying) {
                var i = dirs.length;
                while (i--) {
                    dirs[i]._teardown();
                    if (false) {
                        vm._directives.$remove(dirs[i]);
                    }
                }
            }
            function compileAndLinkProps(vm, el, props, scope) {
                var propsLinkFn = compileProps(el, props, vm);
                var propDirs = linkAndCapture(function() {
                    propsLinkFn(vm, scope);
                }, vm);
                return makeUnlinkFn(vm, propDirs);
            }
            function compileRoot(el, options, contextOptions) {
                var containerAttrs = options._containerAttrs;
                var replacerAttrs = options._replacerAttrs;
                var contextLinkFn, replacerLinkFn;
                if (el.nodeType !== 11) {
                    if (options._asComponent) {
                        if (containerAttrs && contextOptions) {
                            contextLinkFn = compileDirectives(containerAttrs, contextOptions);
                        }
                        if (replacerAttrs) {
                            replacerLinkFn = compileDirectives(replacerAttrs, options);
                        }
                    } else {
                        replacerLinkFn = compileDirectives(el.attributes, options);
                    }
                } else if (false) {
                    var names = containerAttrs.filter(function(attr) {
                        return attr.name.indexOf("_v-") < 0 && !onRE.test(attr.name) && attr.name !== "slot";
                    }).map(function(attr) {
                        return '"' + attr.name + '"';
                    });
                    if (names.length) {
                        var plural = names.length > 1;
                        warn("Attribute" + (plural ? "s " : " ") + names.join(", ") + (plural ? " are" : " is") + " ignored on component " + "<" + options.el.tagName.toLowerCase() + "> because " + "the component is a fragment instance: " + "http://vuejs.org/guide/components.html#Fragment-Instance");
                    }
                }
                options._containerAttrs = options._replacerAttrs = null;
                return function rootLinkFn(vm, el, scope) {
                    var context = vm._context;
                    var contextDirs;
                    if (context && contextLinkFn) {
                        contextDirs = linkAndCapture(function() {
                            contextLinkFn(context, el, null, scope);
                        }, context);
                    }
                    var selfDirs = linkAndCapture(function() {
                        if (replacerLinkFn) replacerLinkFn(vm, el);
                    }, vm);
                    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
                };
            }
            function compileNode(node, options) {
                var type = node.nodeType;
                if (type === 1 && !isScript(node)) {
                    return compileElement(node, options);
                } else if (type === 3 && node.data.trim()) {
                    return compileTextNode(node, options);
                } else {
                    return null;
                }
            }
            function compileElement(el, options) {
                if (el.tagName === "TEXTAREA") {
                    var tokens = parseText(el.value);
                    if (tokens) {
                        el.setAttribute(":value", tokensToExp(tokens));
                        el.value = "";
                    }
                }
                var linkFn;
                var hasAttrs = el.hasAttributes();
                var attrs = hasAttrs && toArray(el.attributes);
                if (hasAttrs) {
                    linkFn = checkTerminalDirectives(el, attrs, options);
                }
                if (!linkFn) {
                    linkFn = checkElementDirectives(el, options);
                }
                if (!linkFn) {
                    linkFn = checkComponent(el, options);
                }
                if (!linkFn && hasAttrs) {
                    linkFn = compileDirectives(attrs, options);
                }
                return linkFn;
            }
            function compileTextNode(node, options) {
                if (node._skip) {
                    return removeText;
                }
                var tokens = parseText(node.wholeText);
                if (!tokens) {
                    return null;
                }
                var next = node.nextSibling;
                while (next && next.nodeType === 3) {
                    next._skip = true;
                    next = next.nextSibling;
                }
                var frag = document.createDocumentFragment();
                var el, token;
                for (var i = 0, l = tokens.length; i < l; i++) {
                    token = tokens[i];
                    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
                    frag.appendChild(el);
                }
                return makeTextNodeLinkFn(tokens, frag, options);
            }
            function removeText(vm, node) {
                remove(node);
            }
            function processTextToken(token, options) {
                var el;
                if (token.oneTime) {
                    el = document.createTextNode(token.value);
                } else {
                    if (token.html) {
                        el = document.createComment("v-html");
                        setTokenType("html");
                    } else {
                        el = document.createTextNode(" ");
                        setTokenType("text");
                    }
                }
                function setTokenType(type) {
                    if (token.descriptor) return;
                    var parsed = parseDirective(token.value);
                    token.descriptor = {
                        name: type,
                        def: directives[type],
                        expression: parsed.expression,
                        filters: parsed.filters
                    };
                }
                return el;
            }
            function makeTextNodeLinkFn(tokens, frag) {
                return function textNodeLinkFn(vm, el, host, scope) {
                    var fragClone = frag.cloneNode(true);
                    var childNodes = toArray(fragClone.childNodes);
                    var token, value, node;
                    for (var i = 0, l = tokens.length; i < l; i++) {
                        token = tokens[i];
                        value = token.value;
                        if (token.tag) {
                            node = childNodes[i];
                            if (token.oneTime) {
                                value = (scope || vm).$eval(value);
                                if (token.html) {
                                    replace(node, parseTemplate(value, true));
                                } else {
                                    node.data = _toString(value);
                                }
                            } else {
                                vm._bindDir(token.descriptor, node, host, scope);
                            }
                        }
                    }
                    replace(el, fragClone);
                };
            }
            function compileNodeList(nodeList, options) {
                var linkFns = [];
                var nodeLinkFn, childLinkFn, node;
                for (var i = 0, l = nodeList.length; i < l; i++) {
                    node = nodeList[i];
                    nodeLinkFn = compileNode(node, options);
                    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== "SCRIPT" && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
                    linkFns.push(nodeLinkFn, childLinkFn);
                }
                return linkFns.length ? makeChildLinkFn(linkFns) : null;
            }
            function makeChildLinkFn(linkFns) {
                return function childLinkFn(vm, nodes, host, scope, frag) {
                    var node, nodeLinkFn, childrenLinkFn;
                    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
                        node = nodes[n];
                        nodeLinkFn = linkFns[i++];
                        childrenLinkFn = linkFns[i++];
                        var childNodes = toArray(node.childNodes);
                        if (nodeLinkFn) {
                            nodeLinkFn(vm, node, host, scope, frag);
                        }
                        if (childrenLinkFn) {
                            childrenLinkFn(vm, childNodes, host, scope, frag);
                        }
                    }
                };
            }
            function checkElementDirectives(el, options) {
                var tag = el.tagName.toLowerCase();
                if (commonTagRE.test(tag)) {
                    return;
                }
                var def = resolveAsset(options, "elementDirectives", tag);
                if (def) {
                    return makeTerminalNodeLinkFn(el, tag, "", options, def);
                }
            }
            function checkComponent(el, options) {
                var component = checkComponentAttr(el, options);
                if (component) {
                    var ref = findRef(el);
                    var descriptor = {
                        name: "component",
                        ref: ref,
                        expression: component.id,
                        def: internalDirectives.component,
                        modifiers: {
                            literal: !component.dynamic
                        }
                    };
                    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
                        if (ref) {
                            defineReactive((scope || vm).$refs, ref, null);
                        }
                        vm._bindDir(descriptor, el, host, scope, frag);
                    };
                    componentLinkFn.terminal = true;
                    return componentLinkFn;
                }
            }
            function checkTerminalDirectives(el, attrs, options) {
                if (getAttr(el, "v-pre") !== null) {
                    return skip;
                }
                if (el.hasAttribute("v-else")) {
                    var prev = el.previousElementSibling;
                    if (prev && prev.hasAttribute("v-if")) {
                        return skip;
                    }
                }
                var attr, name, value, modifiers, matched, dirName, rawName, arg, def, termDef;
                for (var i = 0, j = attrs.length; i < j; i++) {
                    attr = attrs[i];
                    name = attr.name.replace(modifierRE, "");
                    if (matched = name.match(dirAttrRE)) {
                        def = resolveAsset(options, "directives", matched[1]);
                        if (def && def.terminal) {
                            if (!termDef || (def.priority || DEFAULT_TERMINAL_PRIORITY) > termDef.priority) {
                                termDef = def;
                                rawName = attr.name;
                                modifiers = parseModifiers(attr.name);
                                value = attr.value;
                                dirName = matched[1];
                                arg = matched[2];
                            }
                        }
                    }
                }
                if (termDef) {
                    return makeTerminalNodeLinkFn(el, dirName, value, options, termDef, rawName, arg, modifiers);
                }
            }
            function skip() {}
            skip.terminal = true;
            function makeTerminalNodeLinkFn(el, dirName, value, options, def, rawName, arg, modifiers) {
                var parsed = parseDirective(value);
                var descriptor = {
                    name: dirName,
                    arg: arg,
                    expression: parsed.expression,
                    filters: parsed.filters,
                    raw: value,
                    attr: rawName,
                    modifiers: modifiers,
                    def: def
                };
                if (dirName === "for" || dirName === "router-view") {
                    descriptor.ref = findRef(el);
                }
                var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
                    if (descriptor.ref) {
                        defineReactive((scope || vm).$refs, descriptor.ref, null);
                    }
                    vm._bindDir(descriptor, el, host, scope, frag);
                };
                fn.terminal = true;
                return fn;
            }
            function compileDirectives(attrs, options) {
                var i = attrs.length;
                var dirs = [];
                var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
                while (i--) {
                    attr = attrs[i];
                    name = rawName = attr.name;
                    value = rawValue = attr.value;
                    tokens = parseText(value);
                    arg = null;
                    modifiers = parseModifiers(name);
                    name = name.replace(modifierRE, "");
                    if (tokens) {
                        value = tokensToExp(tokens);
                        arg = name;
                        pushDir("bind", directives.bind, tokens);
                        if (false) {
                            if (name === "class" && Array.prototype.some.call(attrs, function(attr) {
                                return attr.name === ":class" || attr.name === "v-bind:class";
                            })) {
                                warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.', options);
                            }
                        }
                    } else if (transitionRE.test(name)) {
                        modifiers.literal = !bindRE.test(name);
                        pushDir("transition", internalDirectives.transition);
                    } else if (onRE.test(name)) {
                        arg = name.replace(onRE, "");
                        pushDir("on", directives.on);
                    } else if (bindRE.test(name)) {
                        dirName = name.replace(bindRE, "");
                        if (dirName === "style" || dirName === "class") {
                            pushDir(dirName, internalDirectives[dirName]);
                        } else {
                            arg = dirName;
                            pushDir("bind", directives.bind);
                        }
                    } else if (matched = name.match(dirAttrRE)) {
                        dirName = matched[1];
                        arg = matched[2];
                        if (dirName === "else") {
                            continue;
                        }
                        dirDef = resolveAsset(options, "directives", dirName, true);
                        if (dirDef) {
                            pushDir(dirName, dirDef);
                        }
                    }
                }
                function pushDir(dirName, def, interpTokens) {
                    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
                    var parsed = !hasOneTimeToken && parseDirective(value);
                    dirs.push({
                        name: dirName,
                        attr: rawName,
                        raw: rawValue,
                        def: def,
                        arg: arg,
                        modifiers: modifiers,
                        expression: parsed && parsed.expression,
                        filters: parsed && parsed.filters,
                        interp: interpTokens,
                        hasOneTime: hasOneTimeToken
                    });
                }
                if (dirs.length) {
                    return makeNodeLinkFn(dirs);
                }
            }
            function parseModifiers(name) {
                var res = Object.create(null);
                var match = name.match(modifierRE);
                if (match) {
                    var i = match.length;
                    while (i--) {
                        res[match[i].slice(1)] = true;
                    }
                }
                return res;
            }
            function makeNodeLinkFn(directives) {
                return function nodeLinkFn(vm, el, host, scope, frag) {
                    var i = directives.length;
                    while (i--) {
                        vm._bindDir(directives[i], el, host, scope, frag);
                    }
                };
            }
            function hasOneTime(tokens) {
                var i = tokens.length;
                while (i--) {
                    if (tokens[i].oneTime) return true;
                }
            }
            function isScript(el) {
                return el.tagName === "SCRIPT" && (!el.hasAttribute("type") || el.getAttribute("type") === "text/javascript");
            }
            var specialCharRE = /[^\w\-:\.]/;
            function transclude(el, options) {
                if (options) {
                    options._containerAttrs = extractAttrs(el);
                }
                if (isTemplate(el)) {
                    el = parseTemplate(el);
                }
                if (options) {
                    if (options._asComponent && !options.template) {
                        options.template = "<slot></slot>";
                    }
                    if (options.template) {
                        options._content = extractContent(el);
                        el = transcludeTemplate(el, options);
                    }
                }
                if (isFragment(el)) {
                    prepend(createAnchor("v-start", true), el);
                    el.appendChild(createAnchor("v-end", true));
                }
                return el;
            }
            function transcludeTemplate(el, options) {
                var template = options.template;
                var frag = parseTemplate(template, true);
                if (frag) {
                    var replacer = frag.firstChild;
                    var tag = replacer.tagName && replacer.tagName.toLowerCase();
                    if (options.replace) {
                        if (el === document.body) {
                            "production" !== "production" && warn("You are mounting an instance with a template to " + "<body>. This will replace <body> entirely. You " + "should probably use `replace: false` here.");
                        }
                        if (frag.childNodes.length > 1 || replacer.nodeType !== 1 || tag === "component" || resolveAsset(options, "components", tag) || hasBindAttr(replacer, "is") || resolveAsset(options, "elementDirectives", tag) || replacer.hasAttribute("v-for") || replacer.hasAttribute("v-if")) {
                            return frag;
                        } else {
                            options._replacerAttrs = extractAttrs(replacer);
                            mergeAttrs(el, replacer);
                            return replacer;
                        }
                    } else {
                        el.appendChild(frag);
                        return el;
                    }
                } else {
                    "production" !== "production" && warn("Invalid template option: " + template);
                }
            }
            function extractAttrs(el) {
                if (el.nodeType === 1 && el.hasAttributes()) {
                    return toArray(el.attributes);
                }
            }
            function mergeAttrs(from, to) {
                var attrs = from.attributes;
                var i = attrs.length;
                var name, value;
                while (i--) {
                    name = attrs[i].name;
                    value = attrs[i].value;
                    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
                        to.setAttribute(name, value);
                    } else if (name === "class" && !parseText(value) && (value = value.trim())) {
                        value.split(/\s+/).forEach(function(cls) {
                            addClass(to, cls);
                        });
                    }
                }
            }
            function resolveSlots(vm, content) {
                if (!content) {
                    return;
                }
                var contents = vm._slotContents = Object.create(null);
                var el, name;
                for (var i = 0, l = content.children.length; i < l; i++) {
                    el = content.children[i];
                    if (name = el.getAttribute("slot")) {
                        (contents[name] || (contents[name] = [])).push(el);
                    }
                    if (false) {
                        warn('The "slot" attribute must be static.', vm.$parent);
                    }
                }
                for (name in contents) {
                    contents[name] = extractFragment(contents[name], content);
                }
                if (content.hasChildNodes()) {
                    var nodes = content.childNodes;
                    if (nodes.length === 1 && nodes[0].nodeType === 3 && !nodes[0].data.trim()) {
                        return;
                    }
                    contents["default"] = extractFragment(content.childNodes, content);
                }
            }
            function extractFragment(nodes, parent) {
                var frag = document.createDocumentFragment();
                nodes = toArray(nodes);
                for (var i = 0, l = nodes.length; i < l; i++) {
                    var node = nodes[i];
                    if (isTemplate(node) && !node.hasAttribute("v-if") && !node.hasAttribute("v-for")) {
                        parent.removeChild(node);
                        node = parseTemplate(node, true);
                    }
                    frag.appendChild(node);
                }
                return frag;
            }
            var compiler = Object.freeze({
                compile: compile,
                compileAndLinkProps: compileAndLinkProps,
                compileRoot: compileRoot,
                transclude: transclude,
                resolveSlots: resolveSlots
            });
            function stateMixin(Vue) {
                Object.defineProperty(Vue.prototype, "$data", {
                    get: function get() {
                        return this._data;
                    },
                    set: function set(newData) {
                        if (newData !== this._data) {
                            this._setData(newData);
                        }
                    }
                });
                Vue.prototype._initState = function() {
                    this._initProps();
                    this._initMeta();
                    this._initMethods();
                    this._initData();
                    this._initComputed();
                };
                Vue.prototype._initProps = function() {
                    var options = this.$options;
                    var el = options.el;
                    var props = options.props;
                    if (props && !el) {
                        "production" !== "production" && warn("Props will not be compiled if no `el` option is " + "provided at instantiation.", this);
                    }
                    el = options.el = query(el);
                    this._propsUnlinkFn = el && el.nodeType === 1 && props ? compileAndLinkProps(this, el, props, this._scope) : null;
                };
                Vue.prototype._initData = function() {
                    var dataFn = this.$options.data;
                    var data = this._data = dataFn ? dataFn() : {};
                    if (!isPlainObject(data)) {
                        data = {};
                        "production" !== "production" && warn("data functions should return an object.", this);
                    }
                    var props = this._props;
                    var keys = Object.keys(data);
                    var i, key;
                    i = keys.length;
                    while (i--) {
                        key = keys[i];
                        if (!props || !hasOwn(props, key)) {
                            this._proxy(key);
                        } else if (false) {
                            warn('Data field "' + key + '" is already defined ' + 'as a prop. To provide default value for a prop, use the "default" ' + "prop option; if you want to pass prop values to an instantiation " + 'call, use the "propsData" option.', this);
                        }
                    }
                    observe(data, this);
                };
                Vue.prototype._setData = function(newData) {
                    newData = newData || {};
                    var oldData = this._data;
                    this._data = newData;
                    var keys, key, i;
                    keys = Object.keys(oldData);
                    i = keys.length;
                    while (i--) {
                        key = keys[i];
                        if (!(key in newData)) {
                            this._unproxy(key);
                        }
                    }
                    keys = Object.keys(newData);
                    i = keys.length;
                    while (i--) {
                        key = keys[i];
                        if (!hasOwn(this, key)) {
                            this._proxy(key);
                        }
                    }
                    oldData.__ob__.removeVm(this);
                    observe(newData, this);
                    this._digest();
                };
                Vue.prototype._proxy = function(key) {
                    if (!isReserved(key)) {
                        var self = this;
                        Object.defineProperty(self, key, {
                            configurable: true,
                            enumerable: true,
                            get: function proxyGetter() {
                                return self._data[key];
                            },
                            set: function proxySetter(val) {
                                self._data[key] = val;
                            }
                        });
                    }
                };
                Vue.prototype._unproxy = function(key) {
                    if (!isReserved(key)) {
                        delete this[key];
                    }
                };
                Vue.prototype._digest = function() {
                    for (var i = 0, l = this._watchers.length; i < l; i++) {
                        this._watchers[i].update(true);
                    }
                };
                function noop() {}
                Vue.prototype._initComputed = function() {
                    var computed = this.$options.computed;
                    if (computed) {
                        for (var key in computed) {
                            var userDef = computed[key];
                            var def = {
                                enumerable: true,
                                configurable: true
                            };
                            if (typeof userDef === "function") {
                                def.get = makeComputedGetter(userDef, this);
                                def.set = noop;
                            } else {
                                def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
                                def.set = userDef.set ? bind(userDef.set, this) : noop;
                            }
                            Object.defineProperty(this, key, def);
                        }
                    }
                };
                function makeComputedGetter(getter, owner) {
                    var watcher = new Watcher(owner, getter, null, {
                        lazy: true
                    });
                    return function computedGetter() {
                        if (watcher.dirty) {
                            watcher.evaluate();
                        }
                        if (Dep.target) {
                            watcher.depend();
                        }
                        return watcher.value;
                    };
                }
                Vue.prototype._initMethods = function() {
                    var methods = this.$options.methods;
                    if (methods) {
                        for (var key in methods) {
                            this[key] = bind(methods[key], this);
                        }
                    }
                };
                Vue.prototype._initMeta = function() {
                    var metas = this.$options._meta;
                    if (metas) {
                        for (var key in metas) {
                            defineReactive(this, key, metas[key]);
                        }
                    }
                };
            }
            var eventRE = /^v-on:|^@/;
            function eventsMixin(Vue) {
                Vue.prototype._initEvents = function() {
                    var options = this.$options;
                    if (options._asComponent) {
                        registerComponentEvents(this, options.el);
                    }
                    registerCallbacks(this, "$on", options.events);
                    registerCallbacks(this, "$watch", options.watch);
                };
                function registerComponentEvents(vm, el) {
                    var attrs = el.attributes;
                    var name, value, handler;
                    for (var i = 0, l = attrs.length; i < l; i++) {
                        name = attrs[i].name;
                        if (eventRE.test(name)) {
                            name = name.replace(eventRE, "");
                            value = attrs[i].value;
                            if (isSimplePath(value)) {
                                value += ".apply(this, $arguments)";
                            }
                            handler = (vm._scope || vm._context).$eval(value, true);
                            handler._fromParent = true;
                            vm.$on(name.replace(eventRE), handler);
                        }
                    }
                }
                function registerCallbacks(vm, action, hash) {
                    if (!hash) return;
                    var handlers, key, i, j;
                    for (key in hash) {
                        handlers = hash[key];
                        if (isArray(handlers)) {
                            for (i = 0, j = handlers.length; i < j; i++) {
                                register(vm, action, key, handlers[i]);
                            }
                        } else {
                            register(vm, action, key, handlers);
                        }
                    }
                }
                function register(vm, action, key, handler, options) {
                    var type = typeof handler;
                    if (type === "function") {
                        vm[action](key, handler, options);
                    } else if (type === "string") {
                        var methods = vm.$options.methods;
                        var method = methods && methods[handler];
                        if (method) {
                            vm[action](key, method, options);
                        } else {
                            "production" !== "production" && warn('Unknown method: "' + handler + '" when ' + "registering callback for " + action + ': "' + key + '".', vm);
                        }
                    } else if (handler && type === "object") {
                        register(vm, action, key, handler.handler, handler);
                    }
                }
                Vue.prototype._initDOMHooks = function() {
                    this.$on("hook:attached", onAttached);
                    this.$on("hook:detached", onDetached);
                };
                function onAttached() {
                    if (!this._isAttached) {
                        this._isAttached = true;
                        this.$children.forEach(callAttach);
                    }
                }
                function callAttach(child) {
                    if (!child._isAttached && inDoc(child.$el)) {
                        child._callHook("attached");
                    }
                }
                function onDetached() {
                    if (this._isAttached) {
                        this._isAttached = false;
                        this.$children.forEach(callDetach);
                    }
                }
                function callDetach(child) {
                    if (child._isAttached && !inDoc(child.$el)) {
                        child._callHook("detached");
                    }
                }
                Vue.prototype._callHook = function(hook) {
                    this.$emit("pre-hook:" + hook);
                    var handlers = this.$options[hook];
                    if (handlers) {
                        for (var i = 0, j = handlers.length; i < j; i++) {
                            handlers[i].call(this);
                        }
                    }
                    this.$emit("hook:" + hook);
                };
            }
            function noop$1() {}
            function Directive(descriptor, vm, el, host, scope, frag) {
                this.vm = vm;
                this.el = el;
                this.descriptor = descriptor;
                this.name = descriptor.name;
                this.expression = descriptor.expression;
                this.arg = descriptor.arg;
                this.modifiers = descriptor.modifiers;
                this.filters = descriptor.filters;
                this.literal = this.modifiers && this.modifiers.literal;
                this._locked = false;
                this._bound = false;
                this._listeners = null;
                this._host = host;
                this._scope = scope;
                this._frag = frag;
                if (false) {
                    this.el._vue_directives = this.el._vue_directives || [];
                    this.el._vue_directives.push(this);
                }
            }
            Directive.prototype._bind = function() {
                var name = this.name;
                var descriptor = this.descriptor;
                if ((name !== "cloak" || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
                    var attr = descriptor.attr || "v-" + name;
                    this.el.removeAttribute(attr);
                }
                var def = descriptor.def;
                if (typeof def === "function") {
                    this.update = def;
                } else {
                    extend(this, def);
                }
                this._setupParams();
                if (this.bind) {
                    this.bind();
                }
                this._bound = true;
                if (this.literal) {
                    this.update && this.update(descriptor.raw);
                } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
                    var dir = this;
                    if (this.update) {
                        this._update = function(val, oldVal) {
                            if (!dir._locked) {
                                dir.update(val, oldVal);
                            }
                        };
                    } else {
                        this._update = noop$1;
                    }
                    var preProcess = this._preProcess ? bind(this._preProcess, this) : null;
                    var postProcess = this._postProcess ? bind(this._postProcess, this) : null;
                    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, {
                        filters: this.filters,
                        twoWay: this.twoWay,
                        deep: this.deep,
                        preProcess: preProcess,
                        postProcess: postProcess,
                        scope: this._scope
                    });
                    if (this.afterBind) {
                        this.afterBind();
                    } else if (this.update) {
                        this.update(watcher.value);
                    }
                }
            };
            Directive.prototype._setupParams = function() {
                if (!this.params) {
                    return;
                }
                var params = this.params;
                this.params = Object.create(null);
                var i = params.length;
                var key, val, mappedKey;
                while (i--) {
                    key = hyphenate(params[i]);
                    mappedKey = camelize(key);
                    val = getBindAttr(this.el, key);
                    if (val != null) {
                        this._setupParamWatcher(mappedKey, val);
                    } else {
                        val = getAttr(this.el, key);
                        if (val != null) {
                            this.params[mappedKey] = val === "" ? true : val;
                        }
                    }
                }
            };
            Directive.prototype._setupParamWatcher = function(key, expression) {
                var self = this;
                var called = false;
                var unwatch = (this._scope || this.vm).$watch(expression, function(val, oldVal) {
                    self.params[key] = val;
                    if (called) {
                        var cb = self.paramWatchers && self.paramWatchers[key];
                        if (cb) {
                            cb.call(self, val, oldVal);
                        }
                    } else {
                        called = true;
                    }
                }, {
                    immediate: true,
                    user: false
                });
                (this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
            };
            Directive.prototype._checkStatement = function() {
                var expression = this.expression;
                if (expression && this.acceptStatement && !isSimplePath(expression)) {
                    var fn = parseExpression(expression).get;
                    var scope = this._scope || this.vm;
                    var handler = function handler(e) {
                        scope.$event = e;
                        fn.call(scope, scope);
                        scope.$event = null;
                    };
                    if (this.filters) {
                        handler = scope._applyFilters(handler, null, this.filters);
                    }
                    this.update(handler);
                    return true;
                }
            };
            Directive.prototype.set = function(value) {
                if (this.twoWay) {
                    this._withLock(function() {
                        this._watcher.set(value);
                    });
                } else if (false) {
                    warn("Directive.set() can only be used inside twoWay" + "directives.");
                }
            };
            Directive.prototype._withLock = function(fn) {
                var self = this;
                self._locked = true;
                fn.call(self);
                nextTick(function() {
                    self._locked = false;
                });
            };
            Directive.prototype.on = function(event, handler, useCapture) {
                on(this.el, event, handler, useCapture);
                (this._listeners || (this._listeners = [])).push([ event, handler ]);
            };
            Directive.prototype._teardown = function() {
                if (this._bound) {
                    this._bound = false;
                    if (this.unbind) {
                        this.unbind();
                    }
                    if (this._watcher) {
                        this._watcher.teardown();
                    }
                    var listeners = this._listeners;
                    var i;
                    if (listeners) {
                        i = listeners.length;
                        while (i--) {
                            off(this.el, listeners[i][0], listeners[i][1]);
                        }
                    }
                    var unwatchFns = this._paramUnwatchFns;
                    if (unwatchFns) {
                        i = unwatchFns.length;
                        while (i--) {
                            unwatchFns[i]();
                        }
                    }
                    if (false) {
                        this.el._vue_directives.$remove(this);
                    }
                    this.vm = this.el = this._watcher = this._listeners = null;
                }
            };
            function lifecycleMixin(Vue) {
                Vue.prototype._updateRef = function(remove) {
                    var ref = this.$options._ref;
                    if (ref) {
                        var refs = (this._scope || this._context).$refs;
                        if (remove) {
                            if (refs[ref] === this) {
                                refs[ref] = null;
                            }
                        } else {
                            refs[ref] = this;
                        }
                    }
                };
                Vue.prototype._compile = function(el) {
                    var options = this.$options;
                    var original = el;
                    el = transclude(el, options);
                    this._initElement(el);
                    if (el.nodeType === 1 && getAttr(el, "v-pre") !== null) {
                        return;
                    }
                    var contextOptions = this._context && this._context.$options;
                    var rootLinker = compileRoot(el, options, contextOptions);
                    resolveSlots(this, options._content);
                    var contentLinkFn;
                    var ctor = this.constructor;
                    if (options._linkerCachable) {
                        contentLinkFn = ctor.linker;
                        if (!contentLinkFn) {
                            contentLinkFn = ctor.linker = compile(el, options);
                        }
                    }
                    var rootUnlinkFn = rootLinker(this, el, this._scope);
                    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);
                    this._unlinkFn = function() {
                        rootUnlinkFn();
                        contentUnlinkFn(true);
                    };
                    if (options.replace) {
                        replace(original, el);
                    }
                    this._isCompiled = true;
                    this._callHook("compiled");
                };
                Vue.prototype._initElement = function(el) {
                    if (isFragment(el)) {
                        this._isFragment = true;
                        this.$el = this._fragmentStart = el.firstChild;
                        this._fragmentEnd = el.lastChild;
                        if (this._fragmentStart.nodeType === 3) {
                            this._fragmentStart.data = this._fragmentEnd.data = "";
                        }
                        this._fragment = el;
                    } else {
                        this.$el = el;
                    }
                    this.$el.__vue__ = this;
                    this._callHook("beforeCompile");
                };
                Vue.prototype._bindDir = function(descriptor, node, host, scope, frag) {
                    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
                };
                Vue.prototype._destroy = function(remove, deferCleanup) {
                    if (this._isBeingDestroyed) {
                        if (!deferCleanup) {
                            this._cleanup();
                        }
                        return;
                    }
                    var destroyReady;
                    var pendingRemoval;
                    var self = this;
                    var cleanupIfPossible = function cleanupIfPossible() {
                        if (destroyReady && !pendingRemoval && !deferCleanup) {
                            self._cleanup();
                        }
                    };
                    if (remove && this.$el) {
                        pendingRemoval = true;
                        this.$remove(function() {
                            pendingRemoval = false;
                            cleanupIfPossible();
                        });
                    }
                    this._callHook("beforeDestroy");
                    this._isBeingDestroyed = true;
                    var i;
                    var parent = this.$parent;
                    if (parent && !parent._isBeingDestroyed) {
                        parent.$children.$remove(this);
                        this._updateRef(true);
                    }
                    i = this.$children.length;
                    while (i--) {
                        this.$children[i].$destroy();
                    }
                    if (this._propsUnlinkFn) {
                        this._propsUnlinkFn();
                    }
                    if (this._unlinkFn) {
                        this._unlinkFn();
                    }
                    i = this._watchers.length;
                    while (i--) {
                        this._watchers[i].teardown();
                    }
                    if (this.$el) {
                        this.$el.__vue__ = null;
                    }
                    destroyReady = true;
                    cleanupIfPossible();
                };
                Vue.prototype._cleanup = function() {
                    if (this._isDestroyed) {
                        return;
                    }
                    if (this._frag) {
                        this._frag.children.$remove(this);
                    }
                    if (this._data && this._data.__ob__) {
                        this._data.__ob__.removeVm(this);
                    }
                    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
                    this._isDestroyed = true;
                    this._callHook("destroyed");
                    this.$off();
                };
            }
            function miscMixin(Vue) {
                Vue.prototype._applyFilters = function(value, oldValue, filters, write) {
                    var filter, fn, args, arg, offset, i, l, j, k;
                    for (i = 0, l = filters.length; i < l; i++) {
                        filter = filters[write ? l - i - 1 : i];
                        fn = resolveAsset(this.$options, "filters", filter.name, true);
                        if (!fn) continue;
                        fn = write ? fn.write : fn.read || fn;
                        if (typeof fn !== "function") continue;
                        args = write ? [ value, oldValue ] : [ value ];
                        offset = write ? 2 : 1;
                        if (filter.args) {
                            for (j = 0, k = filter.args.length; j < k; j++) {
                                arg = filter.args[j];
                                args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
                            }
                        }
                        value = fn.apply(this, args);
                    }
                    return value;
                };
                Vue.prototype._resolveComponent = function(value, cb) {
                    var factory;
                    if (typeof value === "function") {
                        factory = value;
                    } else {
                        factory = resolveAsset(this.$options, "components", value, true);
                    }
                    if (!factory) {
                        return;
                    }
                    if (!factory.options) {
                        if (factory.resolved) {
                            cb(factory.resolved);
                        } else if (factory.requested) {
                            factory.pendingCallbacks.push(cb);
                        } else {
                            factory.requested = true;
                            var cbs = factory.pendingCallbacks = [ cb ];
                            factory.call(this, function resolve(res) {
                                if (isPlainObject(res)) {
                                    res = Vue.extend(res);
                                }
                                factory.resolved = res;
                                for (var i = 0, l = cbs.length; i < l; i++) {
                                    cbs[i](res);
                                }
                            }, function reject(reason) {
                                "production" !== "production" && warn("Failed to resolve async component" + (typeof value === "string" ? ": " + value : "") + ". " + (reason ? "\nReason: " + reason : ""));
                            });
                        }
                    } else {
                        cb(factory);
                    }
                };
            }
            var filterRE$1 = /[^|]\|[^|]/;
            function dataAPI(Vue) {
                Vue.prototype.$get = function(exp, asStatement) {
                    var res = parseExpression(exp);
                    if (res) {
                        if (asStatement) {
                            var self = this;
                            return function statementHandler() {
                                self.$arguments = toArray(arguments);
                                var result = res.get.call(self, self);
                                self.$arguments = null;
                                return result;
                            };
                        } else {
                            try {
                                return res.get.call(this, this);
                            } catch (e) {}
                        }
                    }
                };
                Vue.prototype.$set = function(exp, val) {
                    var res = parseExpression(exp, true);
                    if (res && res.set) {
                        res.set.call(this, this, val);
                    }
                };
                Vue.prototype.$delete = function(key) {
                    del(this._data, key);
                };
                Vue.prototype.$watch = function(expOrFn, cb, options) {
                    var vm = this;
                    var parsed;
                    if (typeof expOrFn === "string") {
                        parsed = parseDirective(expOrFn);
                        expOrFn = parsed.expression;
                    }
                    var watcher = new Watcher(vm, expOrFn, cb, {
                        deep: options && options.deep,
                        sync: options && options.sync,
                        filters: parsed && parsed.filters,
                        user: !options || options.user !== false
                    });
                    if (options && options.immediate) {
                        cb.call(vm, watcher.value);
                    }
                    return function unwatchFn() {
                        watcher.teardown();
                    };
                };
                Vue.prototype.$eval = function(text, asStatement) {
                    if (filterRE$1.test(text)) {
                        var dir = parseDirective(text);
                        var val = this.$get(dir.expression, asStatement);
                        return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
                    } else {
                        return this.$get(text, asStatement);
                    }
                };
                Vue.prototype.$interpolate = function(text) {
                    var tokens = parseText(text);
                    var vm = this;
                    if (tokens) {
                        if (tokens.length === 1) {
                            return vm.$eval(tokens[0].value) + "";
                        } else {
                            return tokens.map(function(token) {
                                return token.tag ? vm.$eval(token.value) : token.value;
                            }).join("");
                        }
                    } else {
                        return text;
                    }
                };
                Vue.prototype.$log = function(path) {
                    var data = path ? getPath(this._data, path) : this._data;
                    if (data) {
                        data = clean(data);
                    }
                    if (!path) {
                        var key;
                        for (key in this.$options.computed) {
                            data[key] = clean(this[key]);
                        }
                        if (this._props) {
                            for (key in this._props) {
                                data[key] = clean(this[key]);
                            }
                        }
                    }
                    console.log(data);
                };
                function clean(obj) {
                    return JSON.parse(JSON.stringify(obj));
                }
            }
            function domAPI(Vue) {
                Vue.prototype.$nextTick = function(fn) {
                    nextTick(fn, this);
                };
                Vue.prototype.$appendTo = function(target, cb, withTransition) {
                    return insert(this, target, cb, withTransition, append, appendWithTransition);
                };
                Vue.prototype.$prependTo = function(target, cb, withTransition) {
                    target = query(target);
                    if (target.hasChildNodes()) {
                        this.$before(target.firstChild, cb, withTransition);
                    } else {
                        this.$appendTo(target, cb, withTransition);
                    }
                    return this;
                };
                Vue.prototype.$before = function(target, cb, withTransition) {
                    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
                };
                Vue.prototype.$after = function(target, cb, withTransition) {
                    target = query(target);
                    if (target.nextSibling) {
                        this.$before(target.nextSibling, cb, withTransition);
                    } else {
                        this.$appendTo(target.parentNode, cb, withTransition);
                    }
                    return this;
                };
                Vue.prototype.$remove = function(cb, withTransition) {
                    if (!this.$el.parentNode) {
                        return cb && cb();
                    }
                    var inDocument = this._isAttached && inDoc(this.$el);
                    if (!inDocument) withTransition = false;
                    var self = this;
                    var realCb = function realCb() {
                        if (inDocument) self._callHook("detached");
                        if (cb) cb();
                    };
                    if (this._isFragment) {
                        removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
                    } else {
                        var op = withTransition === false ? removeWithCb : removeWithTransition;
                        op(this.$el, this, realCb);
                    }
                    return this;
                };
                function insert(vm, target, cb, withTransition, op1, op2) {
                    target = query(target);
                    var targetIsDetached = !inDoc(target);
                    var op = withTransition === false || targetIsDetached ? op1 : op2;
                    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
                    if (vm._isFragment) {
                        mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function(node) {
                            op(node, target, vm);
                        });
                        cb && cb();
                    } else {
                        op(vm.$el, target, vm, cb);
                    }
                    if (shouldCallHook) {
                        vm._callHook("attached");
                    }
                    return vm;
                }
                function query(el) {
                    return typeof el === "string" ? document.querySelector(el) : el;
                }
                function append(el, target, vm, cb) {
                    target.appendChild(el);
                    if (cb) cb();
                }
                function beforeWithCb(el, target, vm, cb) {
                    before(el, target);
                    if (cb) cb();
                }
                function removeWithCb(el, vm, cb) {
                    remove(el);
                    if (cb) cb();
                }
            }
            function eventsAPI(Vue) {
                Vue.prototype.$on = function(event, fn) {
                    (this._events[event] || (this._events[event] = [])).push(fn);
                    modifyListenerCount(this, event, 1);
                    return this;
                };
                Vue.prototype.$once = function(event, fn) {
                    var self = this;
                    function on() {
                        self.$off(event, on);
                        fn.apply(this, arguments);
                    }
                    on.fn = fn;
                    this.$on(event, on);
                    return this;
                };
                Vue.prototype.$off = function(event, fn) {
                    var cbs;
                    if (!arguments.length) {
                        if (this.$parent) {
                            for (event in this._events) {
                                cbs = this._events[event];
                                if (cbs) {
                                    modifyListenerCount(this, event, -cbs.length);
                                }
                            }
                        }
                        this._events = {};
                        return this;
                    }
                    cbs = this._events[event];
                    if (!cbs) {
                        return this;
                    }
                    if (arguments.length === 1) {
                        modifyListenerCount(this, event, -cbs.length);
                        this._events[event] = null;
                        return this;
                    }
                    var cb;
                    var i = cbs.length;
                    while (i--) {
                        cb = cbs[i];
                        if (cb === fn || cb.fn === fn) {
                            modifyListenerCount(this, event, -1);
                            cbs.splice(i, 1);
                            break;
                        }
                    }
                    return this;
                };
                Vue.prototype.$emit = function(event) {
                    var isSource = typeof event === "string";
                    event = isSource ? event : event.name;
                    var cbs = this._events[event];
                    var shouldPropagate = isSource || !cbs;
                    if (cbs) {
                        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
                        var hasParentCbs = isSource && cbs.some(function(cb) {
                            return cb._fromParent;
                        });
                        if (hasParentCbs) {
                            shouldPropagate = false;
                        }
                        var args = toArray(arguments, 1);
                        for (var i = 0, l = cbs.length; i < l; i++) {
                            var cb = cbs[i];
                            var res = cb.apply(this, args);
                            if (res === true && (!hasParentCbs || cb._fromParent)) {
                                shouldPropagate = true;
                            }
                        }
                    }
                    return shouldPropagate;
                };
                Vue.prototype.$broadcast = function(event) {
                    var isSource = typeof event === "string";
                    event = isSource ? event : event.name;
                    if (!this._eventsCount[event]) return;
                    var children = this.$children;
                    var args = toArray(arguments);
                    if (isSource) {
                        args[0] = {
                            name: event,
                            source: this
                        };
                    }
                    for (var i = 0, l = children.length; i < l; i++) {
                        var child = children[i];
                        var shouldPropagate = child.$emit.apply(child, args);
                        if (shouldPropagate) {
                            child.$broadcast.apply(child, args);
                        }
                    }
                    return this;
                };
                Vue.prototype.$dispatch = function(event) {
                    var shouldPropagate = this.$emit.apply(this, arguments);
                    if (!shouldPropagate) return;
                    var parent = this.$parent;
                    var args = toArray(arguments);
                    args[0] = {
                        name: event,
                        source: this
                    };
                    while (parent) {
                        shouldPropagate = parent.$emit.apply(parent, args);
                        parent = shouldPropagate ? parent.$parent : null;
                    }
                    return this;
                };
                var hookRE = /^hook:/;
                function modifyListenerCount(vm, event, count) {
                    var parent = vm.$parent;
                    if (!parent || !count || hookRE.test(event)) return;
                    while (parent) {
                        parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
                        parent = parent.$parent;
                    }
                }
            }
            function lifecycleAPI(Vue) {
                Vue.prototype.$mount = function(el) {
                    if (this._isCompiled) {
                        "production" !== "production" && warn("$mount() should be called only once.", this);
                        return;
                    }
                    el = query(el);
                    if (!el) {
                        el = document.createElement("div");
                    }
                    this._compile(el);
                    this._initDOMHooks();
                    if (inDoc(this.$el)) {
                        this._callHook("attached");
                        ready.call(this);
                    } else {
                        this.$once("hook:attached", ready);
                    }
                    return this;
                };
                function ready() {
                    this._isAttached = true;
                    this._isReady = true;
                    this._callHook("ready");
                }
                Vue.prototype.$destroy = function(remove, deferCleanup) {
                    this._destroy(remove, deferCleanup);
                };
                Vue.prototype.$compile = function(el, host, scope, frag) {
                    return compile(el, this.$options, true)(this, el, host, scope, frag);
                };
            }
            function Vue(options) {
                this._init(options);
            }
            initMixin(Vue);
            stateMixin(Vue);
            eventsMixin(Vue);
            lifecycleMixin(Vue);
            miscMixin(Vue);
            dataAPI(Vue);
            domAPI(Vue);
            eventsAPI(Vue);
            lifecycleAPI(Vue);
            var slot = {
                priority: SLOT,
                params: [ "name" ],
                bind: function bind() {
                    var name = this.params.name || "default";
                    var content = this.vm._slotContents && this.vm._slotContents[name];
                    if (!content || !content.hasChildNodes()) {
                        this.fallback();
                    } else {
                        this.compile(content.cloneNode(true), this.vm._context, this.vm);
                    }
                },
                compile: function compile(content, context, host) {
                    if (content && context) {
                        if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute("v-if")) {
                            var elseBlock = document.createElement("template");
                            elseBlock.setAttribute("v-else", "");
                            elseBlock.innerHTML = this.el.innerHTML;
                            elseBlock._context = this.vm;
                            content.appendChild(elseBlock);
                        }
                        var scope = host ? host._scope : this._scope;
                        this.unlink = context.$compile(content, host, scope, this._frag);
                    }
                    if (content) {
                        replace(this.el, content);
                    } else {
                        remove(this.el);
                    }
                },
                fallback: function fallback() {
                    this.compile(extractContent(this.el, true), this.vm);
                },
                unbind: function unbind() {
                    if (this.unlink) {
                        this.unlink();
                    }
                }
            };
            var partial = {
                priority: PARTIAL,
                params: [ "name" ],
                paramWatchers: {
                    name: function name(value) {
                        vIf.remove.call(this);
                        if (value) {
                            this.insert(value);
                        }
                    }
                },
                bind: function bind() {
                    this.anchor = createAnchor("v-partial");
                    replace(this.el, this.anchor);
                    this.insert(this.params.name);
                },
                insert: function insert(id) {
                    var partial = resolveAsset(this.vm.$options, "partials", id, true);
                    if (partial) {
                        this.factory = new FragmentFactory(this.vm, partial);
                        vIf.insert.call(this);
                    }
                },
                unbind: function unbind() {
                    if (this.frag) {
                        this.frag.destroy();
                    }
                }
            };
            var elementDirectives = {
                slot: slot,
                partial: partial
            };
            var convertArray = vFor._postProcess;
            function limitBy(arr, n, offset) {
                offset = offset ? parseInt(offset, 10) : 0;
                n = toNumber(n);
                return typeof n === "number" ? arr.slice(offset, offset + n) : arr;
            }
            function filterBy(arr, search, delimiter) {
                arr = convertArray(arr);
                if (search == null) {
                    return arr;
                }
                if (typeof search === "function") {
                    return arr.filter(search);
                }
                search = ("" + search).toLowerCase();
                var n = delimiter === "in" ? 3 : 2;
                var keys = Array.prototype.concat.apply([], toArray(arguments, n));
                var res = [];
                var item, key, val, j;
                for (var i = 0, l = arr.length; i < l; i++) {
                    item = arr[i];
                    val = item && item.$value || item;
                    j = keys.length;
                    if (j) {
                        while (j--) {
                            key = keys[j];
                            if (key === "$key" && contains(item.$key, search) || contains(getPath(val, key), search)) {
                                res.push(item);
                                break;
                            }
                        }
                    } else if (contains(item, search)) {
                        res.push(item);
                    }
                }
                return res;
            }
            function orderBy(arr) {
                var comparator = null;
                var sortKeys = undefined;
                arr = convertArray(arr);
                var args = toArray(arguments, 1);
                var order = args[args.length - 1];
                if (typeof order === "number") {
                    order = order < 0 ? -1 : 1;
                    args = args.length > 1 ? args.slice(0, -1) : args;
                } else {
                    order = 1;
                }
                var firstArg = args[0];
                if (!firstArg) {
                    return arr;
                } else if (typeof firstArg === "function") {
                    comparator = function(a, b) {
                        return firstArg(a, b) * order;
                    };
                } else {
                    sortKeys = Array.prototype.concat.apply([], args);
                    comparator = function(a, b, i) {
                        i = i || 0;
                        return i >= sortKeys.length - 1 ? baseCompare(a, b, i) : baseCompare(a, b, i) || comparator(a, b, i + 1);
                    };
                }
                function baseCompare(a, b, sortKeyIndex) {
                    var sortKey = sortKeys[sortKeyIndex];
                    if (sortKey) {
                        if (sortKey !== "$key") {
                            if (isObject(a) && "$value" in a) a = a.$value;
                            if (isObject(b) && "$value" in b) b = b.$value;
                        }
                        a = isObject(a) ? getPath(a, sortKey) : a;
                        b = isObject(b) ? getPath(b, sortKey) : b;
                    }
                    return a === b ? 0 : a > b ? order : -order;
                }
                return arr.slice().sort(comparator);
            }
            function contains(val, search) {
                var i;
                if (isPlainObject(val)) {
                    var keys = Object.keys(val);
                    i = keys.length;
                    while (i--) {
                        if (contains(val[keys[i]], search)) {
                            return true;
                        }
                    }
                } else if (isArray(val)) {
                    i = val.length;
                    while (i--) {
                        if (contains(val[i], search)) {
                            return true;
                        }
                    }
                } else if (val != null) {
                    return val.toString().toLowerCase().indexOf(search) > -1;
                }
            }
            var digitsRE = /(\d{3})(?=\d)/g;
            var filters = {
                orderBy: orderBy,
                filterBy: filterBy,
                limitBy: limitBy,
                json: {
                    read: function read(value, indent) {
                        return typeof value === "string" ? value : JSON.stringify(value, null, arguments.length > 1 ? indent : 2);
                    },
                    write: function write(value) {
                        try {
                            return JSON.parse(value);
                        } catch (e) {
                            return value;
                        }
                    }
                },
                capitalize: function capitalize(value) {
                    if (!value && value !== 0) return "";
                    value = value.toString();
                    return value.charAt(0).toUpperCase() + value.slice(1);
                },
                uppercase: function uppercase(value) {
                    return value || value === 0 ? value.toString().toUpperCase() : "";
                },
                lowercase: function lowercase(value) {
                    return value || value === 0 ? value.toString().toLowerCase() : "";
                },
                currency: function currency(value, _currency, decimals) {
                    value = parseFloat(value);
                    if (!isFinite(value) || !value && value !== 0) return "";
                    _currency = _currency != null ? _currency : "$";
                    decimals = decimals != null ? decimals : 2;
                    var stringified = Math.abs(value).toFixed(decimals);
                    var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
                    var i = _int.length % 3;
                    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? "," : "") : "";
                    var _float = decimals ? stringified.slice(-1 - decimals) : "";
                    var sign = value < 0 ? "-" : "";
                    return sign + _currency + head + _int.slice(i).replace(digitsRE, "$1,") + _float;
                },
                pluralize: function pluralize(value) {
                    var args = toArray(arguments, 1);
                    var length = args.length;
                    if (length > 1) {
                        var index = value % 10 - 1;
                        return index in args ? args[index] : args[length - 1];
                    } else {
                        return args[0] + (value === 1 ? "" : "s");
                    }
                },
                debounce: function debounce(handler, delay) {
                    if (!handler) return;
                    if (!delay) {
                        delay = 300;
                    }
                    return _debounce(handler, delay);
                }
            };
            function installGlobalAPI(Vue) {
                Vue.options = {
                    directives: directives,
                    elementDirectives: elementDirectives,
                    filters: filters,
                    transitions: {},
                    components: {},
                    partials: {},
                    replace: true
                };
                Vue.util = util;
                Vue.config = config;
                Vue.set = set;
                Vue["delete"] = del;
                Vue.nextTick = nextTick;
                Vue.compiler = compiler;
                Vue.FragmentFactory = FragmentFactory;
                Vue.internalDirectives = internalDirectives;
                Vue.parsers = {
                    path: path,
                    text: text,
                    template: template,
                    directive: directive,
                    expression: expression
                };
                Vue.cid = 0;
                var cid = 1;
                Vue.extend = function(extendOptions) {
                    extendOptions = extendOptions || {};
                    var Super = this;
                    var isFirstExtend = Super.cid === 0;
                    if (isFirstExtend && extendOptions._Ctor) {
                        return extendOptions._Ctor;
                    }
                    var name = extendOptions.name || Super.options.name;
                    if (false) {
                        if (!/^[a-zA-Z][\w-]*$/.test(name)) {
                            warn('Invalid component name: "' + name + '". Component names ' + "can only contain alphanumeric characaters and the hyphen.");
                            name = null;
                        }
                    }
                    var Sub = createClass(name || "VueComponent");
                    Sub.prototype = Object.create(Super.prototype);
                    Sub.prototype.constructor = Sub;
                    Sub.cid = cid++;
                    Sub.options = mergeOptions(Super.options, extendOptions);
                    Sub["super"] = Super;
                    Sub.extend = Super.extend;
                    config._assetTypes.forEach(function(type) {
                        Sub[type] = Super[type];
                    });
                    if (name) {
                        Sub.options.components[name] = Sub;
                    }
                    if (isFirstExtend) {
                        extendOptions._Ctor = Sub;
                    }
                    return Sub;
                };
                function createClass(name) {
                    return new Function("return function " + classify(name) + " (options) { this._init(options) }")();
                }
                Vue.use = function(plugin) {
                    if (plugin.installed) {
                        return;
                    }
                    var args = toArray(arguments, 1);
                    args.unshift(this);
                    if (typeof plugin.install === "function") {
                        plugin.install.apply(plugin, args);
                    } else {
                        plugin.apply(null, args);
                    }
                    plugin.installed = true;
                    return this;
                };
                Vue.mixin = function(mixin) {
                    Vue.options = mergeOptions(Vue.options, mixin);
                };
                config._assetTypes.forEach(function(type) {
                    Vue[type] = function(id, definition) {
                        if (!definition) {
                            return this.options[type + "s"][id];
                        } else {
                            if (false) {
                                if (type === "component" && (commonTagRE.test(id) || reservedTagRE.test(id))) {
                                    warn("Do not use built-in or reserved HTML elements as component " + "id: " + id);
                                }
                            }
                            if (type === "component" && isPlainObject(definition)) {
                                if (!definition.name) {
                                    definition.name = id;
                                }
                                definition = Vue.extend(definition);
                            }
                            this.options[type + "s"][id] = definition;
                            return definition;
                        }
                    };
                });
                extend(Vue.transition, transition);
            }
            installGlobalAPI(Vue);
            Vue.version = "1.0.26";
            setTimeout(function() {
                if (config.devtools) {
                    if (devtools) {
                        devtools.emit("init", Vue);
                    } else if (false) {
                        console.log("Download the Vue Devtools for a better development experience:\n" + "https://github.com/vuejs/vue-devtools");
                    }
                }
            }, 0);
            module.exports = Vue;
        }).call(exports, function() {
            return this;
        }());
    }, function(module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = {
            name: "xcui-modal",
            props: {
                title: {
                    type: String,
                    "default": "提示"
                },
                show: {
                    type: Boolean,
                    "default": false
                },
                style: {
                    type: Object
                },
                contentStyle: {
                    type: Object
                },
                size: {
                    type: String,
                    "default": "middle"
                },
                className: {
                    type: String,
                    "default": ""
                },
                showHeader: {
                    type: Boolean,
                    "default": true
                },
                showFooter: {
                    type: Boolean,
                    "default": true
                },
                showCloseButton: {
                    type: Boolean,
                    "default": true
                },
                showOkButton: {
                    type: Boolean,
                    "default": true
                },
                showCancelButton: {
                    type: Boolean,
                    "default": true
                },
                maskClosable: {
                    type: Boolean,
                    "default": true
                },
                scrollable: {
                    type: Boolean,
                    "default": false
                },
                okText: {
                    type: String,
                    "default": "确定"
                },
                cancelText: {
                    type: String,
                    "default": "取消"
                },
                onOk: {
                    type: Function,
                    "default": function _default() {}
                },
                onCancel: {
                    type: Function,
                    "default": function _default() {}
                }
            },
            watch: {
                show: function show(val) {
                    if (this.scrollable) {
                        return;
                    }
                    if (val) {
                        document.body.style.overflow = "hidden";
                    } else {
                        document.body.style.overflow = "auto";
                    }
                }
            },
            computed: {
                sizeClass: function sizeClass() {
                    return "xcui-modal-size-" + this.size;
                }
            },
            methods: {
                close: function close(e) {
                    this.show = false;
                },
                maskClose: function maskClose() {
                    if (this.maskClosable) {
                        this.cancel();
                    }
                },
                ok: function ok() {
                    var noClose = typeof this.onOk === "function" && this.onOk();
                    if (!noClose) {
                        this.close();
                    }
                },
                cancel: function cancel() {
                    var noClose = typeof this.onCancel === "function" && this.onCancel();
                    if (!noClose) {
                        this.close();
                    }
                }
            }
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _vue = __webpack_require__(39);
        var _vue2 = _interopRequireDefault(_vue);
        var _install = __webpack_require__(42);
        var _install2 = _interopRequireDefault(_install);
        var _modal = __webpack_require__(38);
        var _modal2 = _interopRequireDefault(_modal);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        _vue2.default.use(_install2.default);
        window.Vue = _vue2.default;
        exports.default = _modal2.default;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _typeof2 = __webpack_require__(46);
        var _typeof3 = _interopRequireDefault(_typeof2);
        var _keys = __webpack_require__(43);
        var _keys2 = _interopRequireDefault(_keys);
        var _vue = __webpack_require__(39);
        var _vue2 = _interopRequireDefault(_vue);
        var _modal = __webpack_require__(38);
        var _modal2 = _interopRequireDefault(_modal);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        var modalInstance = void 0;
        var newModalInstance = function newModalInstance() {
            var camelcaseToHyphen = function camelcaseToHyphen(str) {
                return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
            };
            var isEmptyObject = function isEmptyObject(obj) {
                return !(0, _keys2.default)(obj).length;
            };
            var PROPERTIES = [ "title", "style", "contentStyle", "size", "className", "showFooter", "showHeader", "showCloseButton", "showOkButton", "showCancelButton", "maskClosable", "scrollable", "okText", "cancelText", "onOk", "onCancel" ];
            var div = document.createElement("div");
            var propsString = PROPERTIES.reduce(function(preValue, curValue) {
                return preValue + " :" + camelcaseToHyphen(curValue) + '="' + curValue + '"';
            }, "");
            div.innerHTML = "\n        <Modal" + propsString + ' :show.sync="show">\n            <template v-if="!isRawHTML">\n                {{content}}\n            </template>\n            <div v-else>\n                {{{content}}}\n            </div>\n        </Modal>\n    ';
            document.body.appendChild(div);
            var modalVM = new _vue2.default({
                el: div,
                components: {
                    Modal: _modal2.default
                },
                data: function data() {
                    return {
                        show: false,
                        content: "",
                        isRawHTML: false,
                        title: "提示",
                        style: {},
                        contentStyle: {},
                        size: "middle",
                        className: "",
                        showFooter: true,
                        showHeader: true,
                        showCloseButton: true,
                        showOkButton: true,
                        showCancelButton: true,
                        maskClosable: true,
                        scrollable: false,
                        okText: "确定",
                        cancelText: "取消",
                        onOk: function onOk() {},
                        onCancel: function onCancel() {}
                    };
                }
            });
            return {
                show: function show(props) {
                    props = !props || isEmptyObject(props) ? {} : props;
                    modalVM.content = props.content ? props.content : "";
                    (0, _keys2.default)(props).forEach(function(propKey) {
                        modalVM[propKey] = props[propKey];
                    });
                    modalVM.show = true;
                },
                remove: function remove() {
                    modalVM.show = false;
                },
                _chooseContentMode: function _chooseContentMode(isRawHTML) {
                    modalVM.isRawHTML = !!isRawHTML;
                }
            };
        };
        var getModalInstance = function getModalInstance(isRawHTML) {
            modalInstance = modalInstance || newModalInstance();
            modalInstance._chooseContentMode(isRawHTML);
            return modalInstance;
        };
        var ModalPlugin = {};
        ModalPlugin.install = function(Vue, options) {
            var modalFunc = {
                show: function show(options, isRawHTML) {
                    var instance = getModalInstance(isRawHTML);
                    instance.show(options);
                },
                close: function close() {
                    if (!modalInstance) {
                        return false;
                    }
                    var instance = getModalInstance();
                    instance.remove();
                }
            };
            Vue.$Modal = modalFunc;
            Vue.$confirm = function(title, content, onOk, onCancel, isRawHTML) {
                var options = {};
                var type = isRawHTML;
                if ((typeof title === "undefined" ? "undefined" : (0, _typeof3.default)(title)) === "object") {
                    options = title;
                    type = content;
                } else {
                    options.title = title;
                    options.content = content;
                    options.onOk = onOk;
                    options.onCancel = onCancel;
                }
                modalFunc.show(options, type);
            };
            Vue.$alert = function(content, onOk) {
                var options = {
                    showHeader: false,
                    showCancelButton: false,
                    size: "small",
                    maskClosable: false
                };
                options.content = content;
                options.onOk = onOk;
                modalFunc.show(options);
            };
        };
        exports.default = ModalPlugin;
    }, function(module, exports, __webpack_require__) {
        module.exports = {
            "default": __webpack_require__(47),
            __esModule: true
        };
    }, function(module, exports, __webpack_require__) {
        module.exports = {
            "default": __webpack_require__(48),
            __esModule: true
        };
    }, function(module, exports, __webpack_require__) {
        module.exports = {
            "default": __webpack_require__(49),
            __esModule: true
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        var _iterator = __webpack_require__(45);
        var _iterator2 = _interopRequireDefault(_iterator);
        var _symbol = __webpack_require__(44);
        var _symbol2 = _interopRequireDefault(_symbol);
        var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj;
        };
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function(obj) {
            return typeof obj === "undefined" ? "undefined" : _typeof(obj);
        } : function(obj) {
            return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
        };
    }, function(module, exports, __webpack_require__) {
        __webpack_require__(71);
        module.exports = __webpack_require__(8).Object.keys;
    }, function(module, exports, __webpack_require__) {
        __webpack_require__(74);
        __webpack_require__(72);
        __webpack_require__(75);
        __webpack_require__(76);
        module.exports = __webpack_require__(8).Symbol;
    }, function(module, exports, __webpack_require__) {
        __webpack_require__(73);
        __webpack_require__(77);
        module.exports = __webpack_require__(27).f("iterator");
    }, function(module, exports) {
        module.exports = function(it) {
            if (typeof it != "function") throw TypeError(it + " is not a function!");
            return it;
        };
    }, function(module, exports) {
        module.exports = function() {};
    }, function(module, exports, __webpack_require__) {
        var toIObject = __webpack_require__(3), toLength = __webpack_require__(69), toIndex = __webpack_require__(68);
        module.exports = function(IS_INCLUDES) {
            return function($this, el, fromIndex) {
                var O = toIObject($this), length = toLength(O.length), index = toIndex(fromIndex, length), value;
                if (IS_INCLUDES && el != el) while (length > index) {
                    value = O[index++];
                    if (value != value) return true;
                } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
                    if (O[index] === el) return IS_INCLUDES || index || 0;
                }
                return !IS_INCLUDES && -1;
            };
        };
    }, function(module, exports, __webpack_require__) {
        var aFunction = __webpack_require__(50);
        module.exports = function(fn, that, length) {
            aFunction(fn);
            if (that === undefined) return fn;
            switch (length) {
              case 1:
                return function(a) {
                    return fn.call(that, a);
                };

              case 2:
                return function(a, b) {
                    return fn.call(that, a, b);
                };

              case 3:
                return function(a, b, c) {
                    return fn.call(that, a, b, c);
                };
            }
            return function() {
                return fn.apply(that, arguments);
            };
        };
    }, function(module, exports, __webpack_require__) {
        var getKeys = __webpack_require__(10), gOPS = __webpack_require__(34), pIE = __webpack_require__(20);
        module.exports = function(it) {
            var result = getKeys(it), getSymbols = gOPS.f;
            if (getSymbols) {
                var symbols = getSymbols(it), isEnum = pIE.f, i = 0, key;
                while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
            }
            return result;
        };
    }, function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(1).document && document.documentElement;
    }, function(module, exports, __webpack_require__) {
        var cof = __webpack_require__(28);
        module.exports = Object("z").propertyIsEnumerable(0) ? Object : function(it) {
            return cof(it) == "String" ? it.split("") : Object(it);
        };
    }, function(module, exports, __webpack_require__) {
        var cof = __webpack_require__(28);
        module.exports = Array.isArray || function isArray(arg) {
            return cof(arg) == "Array";
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var create = __webpack_require__(32), descriptor = __webpack_require__(13), setToStringTag = __webpack_require__(21), IteratorPrototype = {};
        __webpack_require__(5)(IteratorPrototype, __webpack_require__(7)("iterator"), function() {
            return this;
        });
        module.exports = function(Constructor, NAME, next) {
            Constructor.prototype = create(IteratorPrototype, {
                next: descriptor(1, next)
            });
            setToStringTag(Constructor, NAME + " Iterator");
        };
    }, function(module, exports) {
        module.exports = function(done, value) {
            return {
                value: value,
                done: !!done
            };
        };
    }, function(module, exports, __webpack_require__) {
        var getKeys = __webpack_require__(10), toIObject = __webpack_require__(3);
        module.exports = function(object, el) {
            var O = toIObject(object), keys = getKeys(O), length = keys.length, index = 0, key;
            while (length > index) if (O[key = keys[index++]] === el) return key;
        };
    }, function(module, exports, __webpack_require__) {
        var META = __webpack_require__(14)("meta"), isObject = __webpack_require__(12), has = __webpack_require__(2), setDesc = __webpack_require__(6).f, id = 0;
        var isExtensible = Object.isExtensible || function() {
            return true;
        };
        var FREEZE = !__webpack_require__(9)(function() {
            return isExtensible(Object.preventExtensions({}));
        });
        var setMeta = function(it) {
            setDesc(it, META, {
                value: {
                    i: "O" + ++id,
                    w: {}
                }
            });
        };
        var fastKey = function(it, create) {
            if (!isObject(it)) return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
            if (!has(it, META)) {
                if (!isExtensible(it)) return "F";
                if (!create) return "E";
                setMeta(it);
            }
            return it[META].i;
        };
        var getWeak = function(it, create) {
            if (!has(it, META)) {
                if (!isExtensible(it)) return true;
                if (!create) return false;
                setMeta(it);
            }
            return it[META].w;
        };
        var onFreeze = function(it) {
            if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
            return it;
        };
        var meta = module.exports = {
            KEY: META,
            NEED: false,
            fastKey: fastKey,
            getWeak: getWeak,
            onFreeze: onFreeze
        };
    }, function(module, exports, __webpack_require__) {
        var dP = __webpack_require__(6), anObject = __webpack_require__(11), getKeys = __webpack_require__(10);
        module.exports = __webpack_require__(4) ? Object.defineProperties : function defineProperties(O, Properties) {
            anObject(O);
            var keys = getKeys(Properties), length = keys.length, i = 0, P;
            while (length > i) dP.f(O, P = keys[i++], Properties[P]);
            return O;
        };
    }, function(module, exports, __webpack_require__) {
        var pIE = __webpack_require__(20), createDesc = __webpack_require__(13), toIObject = __webpack_require__(3), toPrimitive = __webpack_require__(25), has = __webpack_require__(2), IE8_DOM_DEFINE = __webpack_require__(30), gOPD = Object.getOwnPropertyDescriptor;
        exports.f = __webpack_require__(4) ? gOPD : function getOwnPropertyDescriptor(O, P) {
            O = toIObject(O);
            P = toPrimitive(P, true);
            if (IE8_DOM_DEFINE) try {
                return gOPD(O, P);
            } catch (e) {}
            if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
        };
    }, function(module, exports, __webpack_require__) {
        var toIObject = __webpack_require__(3), gOPN = __webpack_require__(33).f, toString = {}.toString;
        var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        var getWindowNames = function(it) {
            try {
                return gOPN(it);
            } catch (e) {
                return windowNames.slice();
            }
        };
        module.exports.f = function getOwnPropertyNames(it) {
            return windowNames && toString.call(it) == "[object Window]" ? getWindowNames(it) : gOPN(toIObject(it));
        };
    }, function(module, exports, __webpack_require__) {
        var has = __webpack_require__(2), toObject = __webpack_require__(37), IE_PROTO = __webpack_require__(22)("IE_PROTO"), ObjectProto = Object.prototype;
        module.exports = Object.getPrototypeOf || function(O) {
            O = toObject(O);
            if (has(O, IE_PROTO)) return O[IE_PROTO];
            if (typeof O.constructor == "function" && O instanceof O.constructor) {
                return O.constructor.prototype;
            }
            return O instanceof Object ? ObjectProto : null;
        };
    }, function(module, exports, __webpack_require__) {
        var $export = __webpack_require__(17), core = __webpack_require__(8), fails = __webpack_require__(9);
        module.exports = function(KEY, exec) {
            var fn = (core.Object || {})[KEY] || Object[KEY], exp = {};
            exp[KEY] = exec(fn);
            $export($export.S + $export.F * fails(function() {
                fn(1);
            }), "Object", exp);
        };
    }, function(module, exports, __webpack_require__) {
        var toInteger = __webpack_require__(24), defined = __webpack_require__(15);
        module.exports = function(TO_STRING) {
            return function(that, pos) {
                var s = String(defined(that)), i = toInteger(pos), l = s.length, a, b;
                if (i < 0 || i >= l) return TO_STRING ? "" : undefined;
                a = s.charCodeAt(i);
                return a < 55296 || a > 56319 || i + 1 === l || (b = s.charCodeAt(i + 1)) < 56320 || b > 57343 ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 55296 << 10) + (b - 56320) + 65536;
            };
        };
    }, function(module, exports, __webpack_require__) {
        var toInteger = __webpack_require__(24), max = Math.max, min = Math.min;
        module.exports = function(index, length) {
            index = toInteger(index);
            return index < 0 ? max(index + length, 0) : min(index, length);
        };
    }, function(module, exports, __webpack_require__) {
        var toInteger = __webpack_require__(24), min = Math.min;
        module.exports = function(it) {
            return it > 0 ? min(toInteger(it), 9007199254740991) : 0;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var addToUnscopables = __webpack_require__(51), step = __webpack_require__(59), Iterators = __webpack_require__(18), toIObject = __webpack_require__(3);
        module.exports = __webpack_require__(31)(Array, "Array", function(iterated, kind) {
            this._t = toIObject(iterated);
            this._i = 0;
            this._k = kind;
        }, function() {
            var O = this._t, kind = this._k, index = this._i++;
            if (!O || index >= O.length) {
                this._t = undefined;
                return step(1);
            }
            if (kind == "keys") return step(0, index);
            if (kind == "values") return step(0, O[index]);
            return step(0, [ index, O[index] ]);
        }, "values");
        Iterators.Arguments = Iterators.Array;
        addToUnscopables("keys");
        addToUnscopables("values");
        addToUnscopables("entries");
    }, function(module, exports, __webpack_require__) {
        var toObject = __webpack_require__(37), $keys = __webpack_require__(10);
        __webpack_require__(66)("keys", function() {
            return function keys(it) {
                return $keys(toObject(it));
            };
        });
    }, function(module, exports) {}, function(module, exports, __webpack_require__) {
        "use strict";
        var $at = __webpack_require__(67)(true);
        __webpack_require__(31)(String, "String", function(iterated) {
            this._t = String(iterated);
            this._i = 0;
        }, function() {
            var O = this._t, index = this._i, point;
            if (index >= O.length) return {
                value: undefined,
                done: true
            };
            point = $at(O, index);
            this._i += point.length;
            return {
                value: point,
                done: false
            };
        });
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var global = __webpack_require__(1), has = __webpack_require__(2), DESCRIPTORS = __webpack_require__(4), $export = __webpack_require__(17), redefine = __webpack_require__(36), META = __webpack_require__(61).KEY, $fails = __webpack_require__(9), shared = __webpack_require__(23), setToStringTag = __webpack_require__(21), uid = __webpack_require__(14), wks = __webpack_require__(7), wksExt = __webpack_require__(27), wksDefine = __webpack_require__(26), keyOf = __webpack_require__(60), enumKeys = __webpack_require__(54), isArray = __webpack_require__(57), anObject = __webpack_require__(11), toIObject = __webpack_require__(3), toPrimitive = __webpack_require__(25), createDesc = __webpack_require__(13), _create = __webpack_require__(32), gOPNExt = __webpack_require__(64), $GOPD = __webpack_require__(63), $DP = __webpack_require__(6), $keys = __webpack_require__(10), gOPD = $GOPD.f, dP = $DP.f, gOPN = gOPNExt.f, $Symbol = global.Symbol, $JSON = global.JSON, _stringify = $JSON && $JSON.stringify, PROTOTYPE = "prototype", HIDDEN = wks("_hidden"), TO_PRIMITIVE = wks("toPrimitive"), isEnum = {}.propertyIsEnumerable, SymbolRegistry = shared("symbol-registry"), AllSymbols = shared("symbols"), OPSymbols = shared("op-symbols"), ObjectProto = Object[PROTOTYPE], USE_NATIVE = typeof $Symbol == "function", QObject = global.QObject;
        var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
        var setSymbolDesc = DESCRIPTORS && $fails(function() {
            return _create(dP({}, "a", {
                get: function() {
                    return dP(this, "a", {
                        value: 7
                    }).a;
                }
            })).a != 7;
        }) ? function(it, key, D) {
            var protoDesc = gOPD(ObjectProto, key);
            if (protoDesc) delete ObjectProto[key];
            dP(it, key, D);
            if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
        } : dP;
        var wrap = function(tag) {
            var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
            sym._k = tag;
            return sym;
        };
        var isSymbol = USE_NATIVE && typeof $Symbol.iterator == "symbol" ? function(it) {
            return typeof it == "symbol";
        } : function(it) {
            return it instanceof $Symbol;
        };
        var $defineProperty = function defineProperty(it, key, D) {
            if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
            anObject(it);
            key = toPrimitive(key, true);
            anObject(D);
            if (has(AllSymbols, key)) {
                if (!D.enumerable) {
                    if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
                    it[HIDDEN][key] = true;
                } else {
                    if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
                    D = _create(D, {
                        enumerable: createDesc(0, false)
                    });
                }
                return setSymbolDesc(it, key, D);
            }
            return dP(it, key, D);
        };
        var $defineProperties = function defineProperties(it, P) {
            anObject(it);
            var keys = enumKeys(P = toIObject(P)), i = 0, l = keys.length, key;
            while (l > i) $defineProperty(it, key = keys[i++], P[key]);
            return it;
        };
        var $create = function create(it, P) {
            return P === undefined ? _create(it) : $defineProperties(_create(it), P);
        };
        var $propertyIsEnumerable = function propertyIsEnumerable(key) {
            var E = isEnum.call(this, key = toPrimitive(key, true));
            if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
            return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
        };
        var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
            it = toIObject(it);
            key = toPrimitive(key, true);
            if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
            var D = gOPD(it, key);
            if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
            return D;
        };
        var $getOwnPropertyNames = function getOwnPropertyNames(it) {
            var names = gOPN(toIObject(it)), result = [], i = 0, key;
            while (names.length > i) {
                if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
            }
            return result;
        };
        var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
            var IS_OP = it === ObjectProto, names = gOPN(IS_OP ? OPSymbols : toIObject(it)), result = [], i = 0, key;
            while (names.length > i) {
                if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
            }
            return result;
        };
        if (!USE_NATIVE) {
            $Symbol = function Symbol() {
                if (this instanceof $Symbol) throw TypeError("Symbol is not a constructor!");
                var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
                var $set = function(value) {
                    if (this === ObjectProto) $set.call(OPSymbols, value);
                    if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
                    setSymbolDesc(this, tag, createDesc(1, value));
                };
                if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, {
                    configurable: true,
                    set: $set
                });
                return wrap(tag);
            };
            redefine($Symbol[PROTOTYPE], "toString", function toString() {
                return this._k;
            });
            $GOPD.f = $getOwnPropertyDescriptor;
            $DP.f = $defineProperty;
            __webpack_require__(33).f = gOPNExt.f = $getOwnPropertyNames;
            __webpack_require__(20).f = $propertyIsEnumerable;
            __webpack_require__(34).f = $getOwnPropertySymbols;
            if (DESCRIPTORS && !__webpack_require__(19)) {
                redefine(ObjectProto, "propertyIsEnumerable", $propertyIsEnumerable, true);
            }
            wksExt.f = function(name) {
                return wrap(wks(name));
            };
        }
        $export($export.G + $export.W + $export.F * !USE_NATIVE, {
            Symbol: $Symbol
        });
        for (var symbols = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), i = 0; symbols.length > i; ) wks(symbols[i++]);
        for (var symbols = $keys(wks.store), i = 0; symbols.length > i; ) wksDefine(symbols[i++]);
        $export($export.S + $export.F * !USE_NATIVE, "Symbol", {
            "for": function(key) {
                return has(SymbolRegistry, key += "") ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
            },
            keyFor: function keyFor(key) {
                if (isSymbol(key)) return keyOf(SymbolRegistry, key);
                throw TypeError(key + " is not a symbol!");
            },
            useSetter: function() {
                setter = true;
            },
            useSimple: function() {
                setter = false;
            }
        });
        $export($export.S + $export.F * !USE_NATIVE, "Object", {
            create: $create,
            defineProperty: $defineProperty,
            defineProperties: $defineProperties,
            getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
            getOwnPropertyNames: $getOwnPropertyNames,
            getOwnPropertySymbols: $getOwnPropertySymbols
        });
        $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function() {
            var S = $Symbol();
            return _stringify([ S ]) != "[null]" || _stringify({
                a: S
            }) != "{}" || _stringify(Object(S)) != "{}";
        })), "JSON", {
            stringify: function stringify(it) {
                if (it === undefined || isSymbol(it)) return;
                var args = [ it ], i = 1, replacer, $replacer;
                while (arguments.length > i) args.push(arguments[i++]);
                replacer = args[1];
                if (typeof replacer == "function") $replacer = replacer;
                if ($replacer || !isArray(replacer)) replacer = function(key, value) {
                    if ($replacer) value = $replacer.call(this, key, value);
                    if (!isSymbol(value)) return value;
                };
                args[1] = replacer;
                return _stringify.apply($JSON, args);
            }
        });
        $Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(5)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
        setToStringTag($Symbol, "Symbol");
        setToStringTag(Math, "Math", true);
        setToStringTag(global.JSON, "JSON", true);
    }, function(module, exports, __webpack_require__) {
        __webpack_require__(26)("asyncIterator");
    }, function(module, exports, __webpack_require__) {
        __webpack_require__(26)("observable");
    }, function(module, exports, __webpack_require__) {
        __webpack_require__(70);
        var global = __webpack_require__(1), hide = __webpack_require__(5), Iterators = __webpack_require__(18), TO_STRING_TAG = __webpack_require__(7)("toStringTag");
        for (var collections = [ "NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList" ], i = 0; i < 5; i++) {
            var NAME = collections[i], Collection = global[NAME], proto = Collection && Collection.prototype;
            if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
            Iterators[NAME] = Iterators.Array;
        }
    }, function(module, exports) {}, function(module, exports) {
        module.exports = ' <div class=xcui-modal-wrapper v-show=show> <div class=xcui-modal-mask @click=maskClose v-el:modal-mask></div> <div class=xcui-modal tabindex=-1 @keydown.esc=cancel :style=style :class=[sizeClass,className]> <div class=xcui-modal-header v-if=showHeader> <slot name=header> <span class=xcui-modal-title>{{title}}</span> </slot> <slot name=close> <i class="xcui-modal-header-close glyphicon glyphicon-remove" @click=cancel v-if=showCloseButton></i> </slot> </div> <div class=xcui-modal-body :style=contentStyle> <slot></slot> </div> <div class=xcui-modal-footer v-if=showFooter> <slot name=footer> <button type=button name=button v-if=showOkButton @click=ok class="btn xcui-modal-btn btn-primary">{{okText}}</button> <button type=button name=button v-if=showCancelButton @click=cancel class="btn xcui-modal-cancel-btn btn-default">{{cancelText}}</button> </slot> </div> </div> </div> ';
    } ]);
});

