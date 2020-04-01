/**
 * @license
 * Video.js 7.1.0 <http://videojs.com/>
 * Copyright Brightcove, Inc. <https://www.brightcove.com/>
 * Available under Apache License Version 2.0
 * <https://github.com/videojs/video.js/blob/master/LICENSE>
 *
 * Includes vtt.js <https://github.com/mozilla/vtt.js>
 * Available under Apache License Version 2.0
 * <https://github.com/mozilla/vtt.js/blob/master/LICENSE>
 */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.videojs = e()
}(this, (function() {
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function e(t, e) {
        return t(e = {
            exports: {}
        }, e.exports), e.exports
    }
    var i, r = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {},
        n = {},
        a = Object.freeze({
            default: n
        }),
        s = a && n || a,
        o = void 0 !== t ? t : "undefined" != typeof window ? window : {};
    "undefined" != typeof document ? i = document : (i = o["__GLOBAL_DOCUMENT_CACHE@4"]) || (i = o["__GLOBAL_DOCUMENT_CACHE@4"] = s);
    var u = i,
        l = void 0,
        c = "info",
        h = [],
        d = function(t, e) {
            var i = l.levels[c],
                n = new RegExp("^(" + i + ")$");
            if ("log" !== t && e.unshift(t.toUpperCase() + ":"), h && h.push([].concat(e)), e.unshift("VIDEOJS:"), r.console) {
                var a = r.console[t];
                a || "debug" !== t || (a = r.console.info || r.console.log), a && i && n.test(t) && a[Array.isArray(e) ? "apply" : "call"](r.console, e)
            }
        };
    (l = function() {
        for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        d("log", e)
    }).levels = {
        all: "debug|log|warn|error",
        off: "",
        debug: "debug|log|warn|error",
        info: "log|warn|error",
        warn: "warn|error",
        error: "error",
        DEFAULT: c
    }, l.level = function(t) {
        if ("string" == typeof t) {
            if (!l.levels.hasOwnProperty(t)) throw new Error('"' + t + '" in not a valid log level');
            c = t
        }
        return c
    }, l.history = function() {
        return h ? [].concat(h) : []
    }, l.history.clear = function() {
        h && (h.length = 0)
    }, l.history.disable = function() {
        null !== h && (h.length = 0, h = null)
    }, l.history.enable = function() {
        null === h && (h = [])
    }, l.error = function() {
        for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        return d("error", e)
    }, l.warn = function() {
        for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        return d("warn", e)
    }, l.debug = function() {
        for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        return d("debug", e)
    };
    var p = l;

    function f(t) {
        return t.replace(/\n\r?\s*/g, "")
    }
    var m = function(t) {
            for (var e = "", i = 0; i < arguments.length; i++) e += f(t[i]) + (arguments[i + 1] || "");
            return e
        },
        g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        y = function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        },
        v = function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        },
        _ = function(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        },
        b = function(t, e) {
            return t.raw = e, t
        },
        T = Object.prototype.toString,
        S = function(t) {
            return E(t) ? Object.keys(t) : []
        };

    function k(t, e) {
        S(t).forEach((function(i) {
            return e(t[i], i)
        }))
    }

    function C(t) {
        for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) i[r - 1] = arguments[r];
        return Object.assign ? Object.assign.apply(Object, [t].concat(i)) : (i.forEach((function(e) {
            e && k(e, (function(e, i) {
                t[i] = e
            }))
        })), t)
    }

    function E(t) {
        return !!t && "object" === (void 0 === t ? "undefined" : g(t))
    }

    function w(t) {
        return E(t) && "[object Object]" === T.call(t) && t.constructor === Object
    }

    function A(t, e) {
        if (!t || !e) return "";
        if ("function" == typeof r.getComputedStyle) {
            var i = r.getComputedStyle(t);
            return i ? i[e] : ""
        }
        return ""
    }
    var L = b(["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."], ["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."]);

    function P(t) {
        return "string" == typeof t && /\S/.test(t)
    }

    function O(t) {
        if (/\s/.test(t)) throw new Error("class has illegal whitespace characters")
    }

    function I() {
        return u === r.document
    }

    function x(t) {
        return E(t) && 1 === t.nodeType
    }

    function D() {
        try {
            return r.parent !== r.self
        } catch (t) {
            return !0
        }
    }

    function R(t) {
        return function(e, i) {
            if (!P(e)) return u[t](null);
            P(i) && (i = u.querySelector(i));
            var r = x(i) ? i : u;
            return r[t] && r[t](e)
        }
    }

    function M() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div",
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = arguments[3],
            n = u.createElement(t);
        return Object.getOwnPropertyNames(e).forEach((function(t) {
            var i = e[t]; - 1 !== t.indexOf("aria-") || "role" === t || "type" === t ? (p.warn(m(L, t, i)), n.setAttribute(t, i)) : "textContent" === t ? U(n, i) : n[t] = i
        })), Object.getOwnPropertyNames(i).forEach((function(t) {
            n.setAttribute(t, i[t])
        })), r && et(n, r), n
    }

    function U(t, e) {
        return void 0 === t.textContent ? t.innerText = e : t.textContent = e, t
    }

    function N(t, e) {
        e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
    }

    function B(t, e) {
        return O(e), t.classList ? t.classList.contains(e) : (i = e, new RegExp("(^|\\s)" + i + "($|\\s)")).test(t.className);
        var i
    }

    function j(t, e) {
        return t.classList ? t.classList.add(e) : B(t, e) || (t.className = (t.className + " " + e).trim()), t
    }

    function F(t, e) {
        return t.classList ? t.classList.remove(e) : (O(e), t.className = t.className.split(/\s+/).filter((function(t) {
            return t !== e
        })).join(" ")), t
    }

    function H(t, e, i) {
        var r = B(t, e);
        if ("function" == typeof i && (i = i(t, e)), "boolean" != typeof i && (i = !r), i !== r) return i ? j(t, e) : F(t, e), t
    }

    function V(t, e) {
        Object.getOwnPropertyNames(e).forEach((function(i) {
            var r = e[i];
            null == r || !1 === r ? t.removeAttribute(i) : t.setAttribute(i, !0 === r ? "" : r)
        }))
    }

    function q(t) {
        var e = {},
            i = ",autoplay,controls,playsinline,loop,muted,default,defaultMuted,";
        if (t && t.attributes && t.attributes.length > 0)
            for (var r = t.attributes, n = r.length - 1; n >= 0; n--) {
                var a = r[n].name,
                    s = r[n].value;
                "boolean" != typeof t[a] && -1 === i.indexOf("," + a + ",") || (s = null !== s), e[a] = s
            }
        return e
    }

    function W(t, e) {
        return t.getAttribute(e)
    }

    function z(t, e, i) {
        t.setAttribute(e, i)
    }

    function G(t, e) {
        t.removeAttribute(e)
    }

    function X() {
        u.body.focus(), u.onselectstart = function() {
            return !1
        }
    }

    function Y() {
        u.onselectstart = function() {
            return !0
        }
    }

    function $(t) {
        if (t && t.getBoundingClientRect && t.parentNode) {
            var e = t.getBoundingClientRect(),
                i = {};
            return ["bottom", "height", "left", "right", "top", "width"].forEach((function(t) {
                void 0 !== e[t] && (i[t] = e[t])
            })), i.height || (i.height = parseFloat(A(t, "height"))), i.width || (i.width = parseFloat(A(t, "width"))), i
        }
    }

    function K(t) {
        var e = void 0;
        if (t.getBoundingClientRect && t.parentNode && (e = t.getBoundingClientRect()), !e) return {
            left: 0,
            top: 0
        };
        var i = u.documentElement,
            n = u.body,
            a = i.clientLeft || n.clientLeft || 0,
            s = r.pageXOffset || n.scrollLeft,
            o = e.left + s - a,
            l = i.clientTop || n.clientTop || 0,
            c = r.pageYOffset || n.scrollTop,
            h = e.top + c - l;
        return {
            left: Math.round(o),
            top: Math.round(h)
        }
    }

    function Q(t, e) {
        var i = {},
            r = K(t),
            n = t.offsetWidth,
            a = t.offsetHeight,
            s = r.top,
            o = r.left,
            u = e.pageY,
            l = e.pageX;
        return e.changedTouches && (l = e.changedTouches[0].pageX, u = e.changedTouches[0].pageY), i.y = Math.max(0, Math.min(1, (s - u + a) / a)), i.x = Math.max(0, Math.min(1, (l - o) / n)), i
    }

    function J(t) {
        return E(t) && 3 === t.nodeType
    }

    function Z(t) {
        for (; t.firstChild;) t.removeChild(t.firstChild);
        return t
    }

    function tt(t) {
        return "function" == typeof t && (t = t()), (Array.isArray(t) ? t : [t]).map((function(t) {
            return "function" == typeof t && (t = t()), x(t) || J(t) ? t : "string" == typeof t && /\S/.test(t) ? u.createTextNode(t) : void 0
        })).filter((function(t) {
            return t
        }))
    }

    function et(t, e) {
        return tt(e).forEach((function(e) {
            return t.appendChild(e)
        })), t
    }

    function it(t, e) {
        return et(Z(t), e)
    }

    function rt(t) {
        return void 0 === t.button && void 0 === t.buttons || (0 === t.button && void 0 === t.buttons || 0 === t.button && 1 === t.buttons)
    }
    var nt = R("querySelector"),
        at = R("querySelectorAll"),
        st = Object.freeze({
            isReal: I,
            isEl: x,
            isInFrame: D,
            createEl: M,
            textContent: U,
            prependTo: N,
            hasClass: B,
            addClass: j,
            removeClass: F,
            toggleClass: H,
            setAttributes: V,
            getAttributes: q,
            getAttribute: W,
            setAttribute: z,
            removeAttribute: G,
            blockTextSelection: X,
            unblockTextSelection: Y,
            getBoundingClientRect: $,
            findPosition: K,
            getPointerPosition: Q,
            isTextNode: J,
            emptyEl: Z,
            normalizeContent: tt,
            appendContent: et,
            insertContent: it,
            isSingleLeftClick: rt,
            $: nt,
            $$: at
        }),
        ot = 1;

    function ut() {
        return ot++
    }
    var lt = {},
        ct = "vdata" + (new Date).getTime();

    function ht(t) {
        var e = t[ct];
        return e || (e = t[ct] = ut()), lt[e] || (lt[e] = {}), lt[e]
    }

    function dt(t) {
        var e = t[ct];
        return !!e && !!Object.getOwnPropertyNames(lt[e]).length
    }

    function pt(t) {
        var e = t[ct];
        if (e) {
            delete lt[e];
            try {
                delete t[ct]
            } catch (e) {
                t.removeAttribute ? t.removeAttribute(ct) : t[ct] = null
            }
        }
    }

    function ft(t, e) {
        var i = ht(t);
        0 === i.handlers[e].length && (delete i.handlers[e], t.removeEventListener ? t.removeEventListener(e, i.dispatcher, !1) : t.detachEvent && t.detachEvent("on" + e, i.dispatcher)), Object.getOwnPropertyNames(i.handlers).length <= 0 && (delete i.handlers, delete i.dispatcher, delete i.disabled), 0 === Object.getOwnPropertyNames(i).length && pt(t)
    }

    function mt(t, e, i, r) {
        i.forEach((function(i) {
            t(e, i, r)
        }))
    }

    function gt(t) {
        function e() {
            return !0
        }

        function i() {
            return !1
        }
        if (!t || !t.isPropagationStopped) {
            var n = t || r.event;
            for (var a in t = {}, n) "layerX" !== a && "layerY" !== a && "keyLocation" !== a && "webkitMovementX" !== a && "webkitMovementY" !== a && ("returnValue" === a && n.preventDefault || (t[a] = n[a]));
            if (t.target || (t.target = t.srcElement || u), t.relatedTarget || (t.relatedTarget = t.fromElement === t.target ? t.toElement : t.fromElement), t.preventDefault = function() {
                    n.preventDefault && n.preventDefault(), t.returnValue = !1, n.returnValue = !1, t.defaultPrevented = !0
                }, t.defaultPrevented = !1, t.stopPropagation = function() {
                    n.stopPropagation && n.stopPropagation(), t.cancelBubble = !0, n.cancelBubble = !0, t.isPropagationStopped = e
                }, t.isPropagationStopped = i, t.stopImmediatePropagation = function() {
                    n.stopImmediatePropagation && n.stopImmediatePropagation(), t.isImmediatePropagationStopped = e, t.stopPropagation()
                }, t.isImmediatePropagationStopped = i, null !== t.clientX && void 0 !== t.clientX) {
                var s = u.documentElement,
                    o = u.body;
                t.pageX = t.clientX + (s && s.scrollLeft || o && o.scrollLeft || 0) - (s && s.clientLeft || o && o.clientLeft || 0), t.pageY = t.clientY + (s && s.scrollTop || o && o.scrollTop || 0) - (s && s.clientTop || o && o.clientTop || 0)
            }
            t.which = t.charCode || t.keyCode, null !== t.button && void 0 !== t.button && (t.button = 1 & t.button ? 0 : 4 & t.button ? 1 : 2 & t.button ? 2 : 0)
        }
        return t
    }
    var yt = !1;
    ! function() {
        try {
            var t = Object.defineProperty({}, "passive", {
                get: function() {
                    yt = !0
                }
            });
            r.addEventListener("test", null, t), r.removeEventListener("test", null, t)
        } catch (t) {}
    }();
    var vt = ["touchstart", "touchmove"];

    function _t(t, e, i) {
        if (Array.isArray(e)) return mt(_t, t, e, i);
        var r = ht(t);
        if (r.handlers || (r.handlers = {}), r.handlers[e] || (r.handlers[e] = []), i.guid || (i.guid = ut()), r.handlers[e].push(i), r.dispatcher || (r.disabled = !1, r.dispatcher = function(e, i) {
                if (!r.disabled) {
                    e = gt(e);
                    var n = r.handlers[e.type];
                    if (n)
                        for (var a = n.slice(0), s = 0, o = a.length; s < o && !e.isImmediatePropagationStopped(); s++) try {
                            a[s].call(t, e, i)
                        } catch (t) {
                            p.error(t)
                        }
                }
            }), 1 === r.handlers[e].length)
            if (t.addEventListener) {
                var n = !1;
                yt && vt.indexOf(e) > -1 && (n = {
                    passive: !0
                }), t.addEventListener(e, r.dispatcher, n)
            } else t.attachEvent && t.attachEvent("on" + e, r.dispatcher)
    }

    function bt(t, e, i) {
        if (dt(t)) {
            var r = ht(t);
            if (r.handlers) {
                if (Array.isArray(e)) return mt(bt, t, e, i);
                var n = function(t, e) {
                    r.handlers[e] = [], ft(t, e)
                };
                if (void 0 !== e) {
                    var a = r.handlers[e];
                    if (a)
                        if (i) {
                            if (i.guid)
                                for (var s = 0; s < a.length; s++) a[s].guid === i.guid && a.splice(s--, 1);
                            ft(t, e)
                        } else n(t, e)
                } else
                    for (var o in r.handlers) Object.prototype.hasOwnProperty.call(r.handlers || {}, o) && n(t, o)
            }
        }
    }

    function Tt(t, e, i) {
        var r = dt(t) ? ht(t) : {},
            n = t.parentNode || t.ownerDocument;
        if ("string" == typeof e ? e = {
                type: e,
                target: t
            } : e.target || (e.target = t), e = gt(e), r.dispatcher && r.dispatcher.call(t, e, i), n && !e.isPropagationStopped() && !0 === e.bubbles) Tt.call(null, n, e, i);
        else if (!n && !e.defaultPrevented) {
            var a = ht(e.target);
            e.target[e.type] && (a.disabled = !0, "function" == typeof e.target[e.type] && e.target[e.type](), a.disabled = !1)
        }
        return !e.defaultPrevented
    }

    function St(t, e, i) {
        if (Array.isArray(e)) return mt(St, t, e, i);
        var r = function r() {
            bt(t, e, r), i.apply(this, arguments)
        };
        r.guid = i.guid = i.guid || ut(), _t(t, e, r)
    }
    var kt = Object.freeze({
            fixEvent: gt,
            on: _t,
            off: bt,
            trigger: Tt,
            one: St
        }),
        Ct = !1,
        Et = void 0,
        wt = function() {
            if (I() && !1 !== Et.options.autoSetup) {
                var t = Array.prototype.slice.call(u.getElementsByTagName("video")),
                    e = Array.prototype.slice.call(u.getElementsByTagName("audio")),
                    i = Array.prototype.slice.call(u.getElementsByTagName("video-js")),
                    r = t.concat(e, i);
                if (r && r.length > 0)
                    for (var n = 0, a = r.length; n < a; n++) {
                        var s = r[n];
                        if (!s || !s.getAttribute) {
                            At(1);
                            break
                        }
                        void 0 === s.player && null !== s.getAttribute("data-setup") && Et(s)
                    } else Ct || At(1)
            }
        };

    function At(t, e) {
        e && (Et = e), r.setTimeout(wt, t)
    }
    I() && "complete" === u.readyState ? Ct = !0 : St(r, "load", (function() {
        Ct = !0
    }));
    var Lt = function(t) {
            var e = u.createElement("style");
            return e.className = t, e
        },
        Pt = function(t, e) {
            t.styleSheet ? t.styleSheet.cssText = e : t.textContent = e
        },
        Ot = function(t, e, i) {
            e.guid || (e.guid = ut());
            var r = function() {
                return e.apply(t, arguments)
            };
            return r.guid = i ? i + "_" + e.guid : e.guid, r
        },
        It = function(t, e) {
            var i = Date.now();
            return function() {
                var r = Date.now();
                r - i >= e && (t.apply(void 0, arguments), i = r)
            }
        },
        xt = function() {};
    xt.prototype.allowedEvents_ = {}, xt.prototype.on = function(t, e) {
        var i = this.addEventListener;
        this.addEventListener = function() {}, _t(this, t, e), this.addEventListener = i
    }, xt.prototype.addEventListener = xt.prototype.on, xt.prototype.off = function(t, e) {
        bt(this, t, e)
    }, xt.prototype.removeEventListener = xt.prototype.off, xt.prototype.one = function(t, e) {
        var i = this.addEventListener;
        this.addEventListener = function() {}, St(this, t, e), this.addEventListener = i
    }, xt.prototype.trigger = function(t) {
        var e = t.type || t;
        "string" == typeof t && (t = {
            type: e
        }), t = gt(t), this.allowedEvents_[e] && this["on" + e] && this["on" + e](t), Tt(this, t)
    }, xt.prototype.dispatchEvent = xt.prototype.trigger;
    var Dt = function(t) {
            return t instanceof xt || !!t.eventBusEl_ && ["on", "one", "off", "trigger"].every((function(e) {
                return "function" == typeof t[e]
            }))
        },
        Rt = function(t) {
            return "string" == typeof t && /\S/.test(t) || Array.isArray(t) && !!t.length
        },
        Mt = function(t) {
            if (!t.nodeName && !Dt(t)) throw new Error("Invalid target; must be a DOM node or evented object.")
        },
        Ut = function(t) {
            if (!Rt(t)) throw new Error("Invalid event type; must be a non-empty string or array.")
        },
        Nt = function(t) {
            if ("function" != typeof t) throw new Error("Invalid listener; must be a function.")
        },
        Bt = function(t, e) {
            var i = e.length < 3 || e[0] === t || e[0] === t.eventBusEl_,
                r = void 0,
                n = void 0,
                a = void 0;
            return i ? (r = t.eventBusEl_, e.length >= 3 && e.shift(), n = e[0], a = e[1]) : (r = e[0], n = e[1], a = e[2]), Mt(r), Ut(n), Nt(a), {
                isTargetingSelf: i,
                target: r,
                type: n,
                listener: a = Ot(t, a)
            }
        },
        jt = function(t, e, i, r) {
            Mt(t), t.nodeName ? kt[e](t, i, r) : t[e](i, r)
        },
        Ft = {
            on: function() {
                for (var t = this, e = arguments.length, i = Array(e), r = 0; r < e; r++) i[r] = arguments[r];
                var n = Bt(this, i),
                    a = n.isTargetingSelf,
                    s = n.target,
                    o = n.type,
                    u = n.listener;
                if (jt(s, "on", o, u), !a) {
                    var l = function() {
                        return t.off(s, o, u)
                    };
                    l.guid = u.guid;
                    var c = function() {
                        return t.off("dispose", l)
                    };
                    c.guid = u.guid, jt(this, "on", "dispose", l), jt(s, "on", "dispose", c)
                }
            },
            one: function() {
                for (var t = this, e = arguments.length, i = Array(e), r = 0; r < e; r++) i[r] = arguments[r];
                var n = Bt(this, i),
                    a = n.isTargetingSelf,
                    s = n.target,
                    o = n.type,
                    u = n.listener;
                if (a) jt(s, "one", o, u);
                else {
                    var l = function e() {
                        for (var i = arguments.length, r = Array(i), n = 0; n < i; n++) r[n] = arguments[n];
                        t.off(s, o, e), u.apply(null, r)
                    };
                    l.guid = u.guid, jt(s, "one", o, l)
                }
            },
            off: function(t, e, i) {
                if (!t || Rt(t)) bt(this.eventBusEl_, t, e);
                else {
                    var r = t,
                        n = e;
                    Mt(r), Ut(n), Nt(i), i = Ot(this, i), this.off("dispose", i), r.nodeName ? (bt(r, n, i), bt(r, "dispose", i)) : Dt(r) && (r.off(n, i), r.off("dispose", i))
                }
            },
            trigger: function(t, e) {
                return Tt(this.eventBusEl_, t, e)
            }
        };

    function Ht(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = e.eventBusKey;
        if (i) {
            if (!t[i].nodeName) throw new Error('The eventBusKey "' + i + '" does not refer to an element.');
            t.eventBusEl_ = t[i]
        } else t.eventBusEl_ = M("span", {
            className: "vjs-event-bus"
        });
        return C(t, Ft), t.on("dispose", (function() {
            t.off(), r.setTimeout((function() {
                t.eventBusEl_ = null
            }), 0)
        })), t
    }
    var Vt = {
        state: {},
        setState: function(t) {
            var e = this;
            "function" == typeof t && (t = t());
            var i = void 0;
            return k(t, (function(t, r) {
                e.state[r] !== t && ((i = i || {})[r] = {
                    from: e.state[r],
                    to: t
                }), e.state[r] = t
            })), i && Dt(this) && this.trigger({
                changes: i,
                type: "statechanged"
            }), i
        }
    };

    function qt(t, e) {
        return C(t, Vt), t.state = C({}, t.state, e), "function" == typeof t.handleStateChanged && Dt(t) && t.on("statechanged", t.handleStateChanged), t
    }

    function Wt(t) {
        return "string" != typeof t ? t : t.charAt(0).toUpperCase() + t.slice(1)
    }

    function zt() {
        for (var t = {}, e = arguments.length, i = Array(e), r = 0; r < e; r++) i[r] = arguments[r];
        return i.forEach((function(e) {
            e && k(e, (function(e, i) {
                w(e) ? (w(t[i]) || (t[i] = {}), t[i] = zt(t[i], e)) : t[i] = e
            }))
        })), t
    }
    var Gt = function() {
        function t(e, i, r) {
            if (y(this, t), !e && this.play ? this.player_ = e = this : this.player_ = e, this.options_ = zt({}, this.options_), i = this.options_ = zt(this.options_, i), this.id_ = i.id || i.el && i.el.id, !this.id_) {
                var n = e && e.id && e.id() || "no_player";
                this.id_ = n + "_component_" + ut()
            }
            this.name_ = i.name || null, i.el ? this.el_ = i.el : !1 !== i.createEl && (this.el_ = this.createEl()), !1 !== i.evented && Ht(this, {
                eventBusKey: this.el_ ? "el_" : null
            }), qt(this, this.constructor.defaultState), this.children_ = [], this.childIndex_ = {}, this.childNameIndex_ = {}, !1 !== i.initChildren && this.initChildren(), this.ready(r), !1 !== i.reportTouchActivity && this.enableTouchActivity()
        }
        return t.prototype.dispose = function() {
            if (this.trigger({
                    type: "dispose",
                    bubbles: !1
                }), this.children_)
                for (var t = this.children_.length - 1; t >= 0; t--) this.children_[t].dispose && this.children_[t].dispose();
            this.children_ = null, this.childIndex_ = null, this.childNameIndex_ = null, this.el_ && (this.el_.parentNode && this.el_.parentNode.removeChild(this.el_), pt(this.el_), this.el_ = null), this.player_ = null
        }, t.prototype.player = function() {
            return this.player_
        }, t.prototype.options = function(t) {
            return p.warn("this.options() has been deprecated and will be moved to the constructor in 6.0"), t ? (this.options_ = zt(this.options_, t), this.options_) : this.options_
        }, t.prototype.el = function() {
            return this.el_
        }, t.prototype.createEl = function(t, e, i) {
            return M(t, e, i)
        }, t.prototype.localize = function(t, e) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
                r = this.player_.language && this.player_.language(),
                n = this.player_.languages && this.player_.languages(),
                a = n && n[r],
                s = r && r.split("-")[0],
                o = n && n[s],
                u = i;
            return a && a[t] ? u = a[t] : o && o[t] && (u = o[t]), e && (u = u.replace(/\{(\d+)\}/g, (function(t, i) {
                var r = e[i - 1],
                    n = r;
                return void 0 === r && (n = t), n
            }))), u
        }, t.prototype.contentEl = function() {
            return this.contentEl_ || this.el_
        }, t.prototype.id = function() {
            return this.id_
        }, t.prototype.name = function() {
            return this.name_
        }, t.prototype.children = function() {
            return this.children_
        }, t.prototype.getChildById = function(t) {
            return this.childIndex_[t]
        }, t.prototype.getChild = function(t) {
            if (t) return t = Wt(t), this.childNameIndex_[t]
        }, t.prototype.addChild = function(e) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.children_.length,
                n = void 0,
                a = void 0;
            if ("string" == typeof e) {
                a = Wt(e);
                var s = i.componentClass || a;
                i.name = a;
                var o = t.getComponent(s);
                if (!o) throw new Error("Component " + s + " does not exist");
                if ("function" != typeof o) return null;
                n = new o(this.player_ || this, i)
            } else n = e;
            if (this.children_.splice(r, 0, n), "function" == typeof n.id && (this.childIndex_[n.id()] = n), (a = a || n.name && Wt(n.name())) && (this.childNameIndex_[a] = n), "function" == typeof n.el && n.el()) {
                var u = this.contentEl().children,
                    l = u[r] || null;
                this.contentEl().insertBefore(n.el(), l)
            }
            return n
        }, t.prototype.removeChild = function(t) {
            if ("string" == typeof t && (t = this.getChild(t)), t && this.children_) {
                for (var e = !1, i = this.children_.length - 1; i >= 0; i--)
                    if (this.children_[i] === t) {
                        e = !0, this.children_.splice(i, 1);
                        break
                    }
                if (e) {
                    this.childIndex_[t.id()] = null, this.childNameIndex_[t.name()] = null;
                    var r = t.el();
                    r && r.parentNode === this.contentEl() && this.contentEl().removeChild(t.el())
                }
            }
        }, t.prototype.initChildren = function() {
            var e = this,
                i = this.options_.children;
            if (i) {
                var r = this.options_,
                    n = void 0,
                    a = t.getComponent("Tech");
                (n = Array.isArray(i) ? i : Object.keys(i)).concat(Object.keys(this.options_).filter((function(t) {
                    return !n.some((function(e) {
                        return "string" == typeof e ? t === e : t === e.name
                    }))
                }))).map((function(t) {
                    var r = void 0,
                        n = void 0;
                    return "string" == typeof t ? n = i[r = t] || e.options_[r] || {} : (r = t.name, n = t), {
                        name: r,
                        opts: n
                    }
                })).filter((function(e) {
                    var i = t.getComponent(e.opts.componentClass || Wt(e.name));
                    return i && !a.isTech(i)
                })).forEach((function(t) {
                    var i = t.name,
                        n = t.opts;
                    if (void 0 !== r[i] && (n = r[i]), !1 !== n) {
                        !0 === n && (n = {}), n.playerOptions = e.options_.playerOptions;
                        var a = e.addChild(i, n);
                        a && (e[i] = a)
                    }
                }))
            }
        }, t.prototype.buildCSSClass = function() {
            return ""
        }, t.prototype.ready = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (t) return this.isReady_ ? void(e ? t.call(this) : this.setTimeout(t, 1)) : (this.readyQueue_ = this.readyQueue_ || [], void this.readyQueue_.push(t))
        }, t.prototype.triggerReady = function() {
            this.isReady_ = !0, this.setTimeout((function() {
                var t = this.readyQueue_;
                this.readyQueue_ = [], t && t.length > 0 && t.forEach((function(t) {
                    t.call(this)
                }), this), this.trigger("ready")
            }), 1)
        }, t.prototype.$ = function(t, e) {
            return nt(t, e || this.contentEl())
        }, t.prototype.$$ = function(t, e) {
            return at(t, e || this.contentEl())
        }, t.prototype.hasClass = function(t) {
            return B(this.el_, t)
        }, t.prototype.addClass = function(t) {
            j(this.el_, t)
        }, t.prototype.removeClass = function(t) {
            F(this.el_, t)
        }, t.prototype.toggleClass = function(t, e) {
            H(this.el_, t, e)
        }, t.prototype.show = function() {
            this.removeClass("vjs-hidden")
        }, t.prototype.hide = function() {
            this.addClass("vjs-hidden")
        }, t.prototype.lockShowing = function() {
            this.addClass("vjs-lock-showing")
        }, t.prototype.unlockShowing = function() {
            this.removeClass("vjs-lock-showing")
        }, t.prototype.getAttribute = function(t) {
            return W(this.el_, t)
        }, t.prototype.setAttribute = function(t, e) {
            z(this.el_, t, e)
        }, t.prototype.removeAttribute = function(t) {
            G(this.el_, t)
        }, t.prototype.width = function(t, e) {
            return this.dimension("width", t, e)
        }, t.prototype.height = function(t, e) {
            return this.dimension("height", t, e)
        }, t.prototype.dimensions = function(t, e) {
            this.width(t, !0), this.height(e)
        }, t.prototype.dimension = function(t, e, i) {
            if (void 0 !== e) return null !== e && e == e || (e = 0), -1 !== ("" + e).indexOf("%") || -1 !== ("" + e).indexOf("px") ? this.el_.style[t] = e : this.el_.style[t] = "auto" === e ? "" : e + "px", void(i || this.trigger("componentresize"));
            if (!this.el_) return 0;
            var r = this.el_.style[t],
                n = r.indexOf("px");
            return -1 !== n ? parseInt(r.slice(0, n), 10) : parseInt(this.el_["offset" + Wt(t)], 10)
        }, t.prototype.currentDimension = function(t) {
            var e = 0;
            if ("width" !== t && "height" !== t) throw new Error("currentDimension only accepts width or height value");
            if ("function" == typeof r.getComputedStyle) {
                var i = r.getComputedStyle(this.el_);
                e = i.getPropertyValue(t) || i[t]
            }
            if (0 === (e = parseFloat(e))) {
                var n = "offset" + Wt(t);
                e = this.el_[n]
            }
            return e
        }, t.prototype.currentDimensions = function() {
            return {
                width: this.currentDimension("width"),
                height: this.currentDimension("height")
            }
        }, t.prototype.currentWidth = function() {
            return this.currentDimension("width")
        }, t.prototype.currentHeight = function() {
            return this.currentDimension("height")
        }, t.prototype.focus = function() {
            this.el_.focus()
        }, t.prototype.blur = function() {
            this.el_.blur()
        }, t.prototype.emitTapEvents = function() {
            var t = 0,
                e = null,
                i = void 0;
            this.on("touchstart", (function(r) {
                1 === r.touches.length && (e = {
                    pageX: r.touches[0].pageX,
                    pageY: r.touches[0].pageY
                }, t = (new Date).getTime(), i = !0)
            })), this.on("touchmove", (function(t) {
                if (t.touches.length > 1) i = !1;
                else if (e) {
                    var r = t.touches[0].pageX - e.pageX,
                        n = t.touches[0].pageY - e.pageY;
                    Math.sqrt(r * r + n * n) > 10 && (i = !1)
                }
            }));
            var r = function() {
                i = !1
            };
            this.on("touchleave", r), this.on("touchcancel", r), this.on("touchend", (function(r) {
                (e = null, !0 === i) && ((new Date).getTime() - t < 200 && (r.preventDefault(), this.trigger("tap")))
            }))
        }, t.prototype.enableTouchActivity = function() {
            if (this.player() && this.player().reportUserActivity) {
                var t = Ot(this.player(), this.player().reportUserActivity),
                    e = void 0;
                this.on("touchstart", (function() {
                    t(), this.clearInterval(e), e = this.setInterval(t, 250)
                }));
                var i = function(i) {
                    t(), this.clearInterval(e)
                };
                this.on("touchmove", t), this.on("touchend", i), this.on("touchcancel", i)
            }
        }, t.prototype.setTimeout = function(t, e) {
            var i, n, a = this;
            return t = Ot(this, t), i = r.setTimeout((function() {
                a.off("dispose", n), t()
            }), e), (n = function() {
                return a.clearTimeout(i)
            }).guid = "vjs-timeout-" + i, this.on("dispose", n), i
        }, t.prototype.clearTimeout = function(t) {
            r.clearTimeout(t);
            var e = function() {};
            return e.guid = "vjs-timeout-" + t, this.off("dispose", e), t
        }, t.prototype.setInterval = function(t, e) {
            var i = this;
            t = Ot(this, t);
            var n = r.setInterval(t, e),
                a = function() {
                    return i.clearInterval(n)
                };
            return a.guid = "vjs-interval-" + n, this.on("dispose", a), n
        }, t.prototype.clearInterval = function(t) {
            r.clearInterval(t);
            var e = function() {};
            return e.guid = "vjs-interval-" + t, this.off("dispose", e), t
        }, t.prototype.requestAnimationFrame = function(t) {
            var e, i, n = this;
            return this.supportsRaf_ ? (t = Ot(this, t), e = r.requestAnimationFrame((function() {
                n.off("dispose", i), t()
            })), (i = function() {
                return n.cancelAnimationFrame(e)
            }).guid = "vjs-raf-" + e, this.on("dispose", i), e) : this.setTimeout(t, 1e3 / 60)
        }, t.prototype.cancelAnimationFrame = function(t) {
            if (this.supportsRaf_) {
                r.cancelAnimationFrame(t);
                var e = function() {};
                return e.guid = "vjs-raf-" + t, this.off("dispose", e), t
            }
            return this.clearTimeout(t)
        }, t.registerComponent = function(e, i) {
            if ("string" != typeof e || !e) throw new Error('Illegal component name, "' + e + '"; must be a non-empty string.');
            var r = t.getComponent("Tech"),
                n = r && r.isTech(i),
                a = t === i || t.prototype.isPrototypeOf(i.prototype);
            if (n || !a) {
                var s = void 0;
                throw s = n ? "techs must be registered using Tech.registerTech()" : "must be a Component subclass", new Error('Illegal component, "' + e + '"; ' + s + ".")
            }
            e = Wt(e), t.components_ || (t.components_ = {});
            var o = t.getComponent("Player");
            if ("Player" === e && o && o.players) {
                var u = o.players,
                    l = Object.keys(u);
                if (u && l.length > 0 && l.map((function(t) {
                        return u[t]
                    })).every(Boolean)) throw new Error("Can not register Player component after player has been created.")
            }
            return t.components_[e] = i, i
        }, t.getComponent = function(e) {
            if (e) return e = Wt(e), t.components_ && t.components_[e] ? t.components_[e] : void 0
        }, t
    }();
    Gt.prototype.supportsRaf_ = "function" == typeof r.requestAnimationFrame && "function" == typeof r.cancelAnimationFrame, Gt.registerComponent("Component", Gt);
    var Xt, Yt = r.navigator && r.navigator.userAgent || "",
        $t = /AppleWebKit\/([\d.]+)/i.exec(Yt),
        Kt = $t ? parseFloat($t.pop()) : null,
        Qt = /iPad/i.test(Yt),
        Jt = /iPhone/i.test(Yt) && !Qt,
        Zt = /iPod/i.test(Yt),
        te = Jt || Qt || Zt,
        ee = (Xt = Yt.match(/OS (\d+)_/i)) && Xt[1] ? Xt[1] : null,
        ie = /Android/i.test(Yt),
        re = function() {
            var t = Yt.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
            if (!t) return null;
            var e = t[1] && parseFloat(t[1]),
                i = t[2] && parseFloat(t[2]);
            return e && i ? parseFloat(t[1] + "." + t[2]) : e || null
        }(),
        ne = ie && re < 5 && Kt < 537,
        ae = /Firefox/i.test(Yt),
        se = /Edge/i.test(Yt),
        oe = !se && (/Chrome/i.test(Yt) || /CriOS/i.test(Yt)),
        ue = function() {
            var t = Yt.match(/(Chrome|CriOS)\/(\d+)/);
            return t && t[2] ? parseFloat(t[2]) : null
        }(),
        le = function() {
            var t = /MSIE\s(\d+)\.\d/.exec(Yt),
                e = t && parseFloat(t[1]);
            return !e && /Trident\/7.0/i.test(Yt) && /rv:11.0/.test(Yt) && (e = 11), e
        }(),
        ce = /Safari/i.test(Yt) && !oe && !ie && !se,
        he = (ce || te) && !oe,
        de = I() && ("ontouchstart" in r || r.navigator.maxTouchPoints || r.DocumentTouch && r.document instanceof r.DocumentTouch),
        pe = Object.freeze({
            IS_IPAD: Qt,
            IS_IPHONE: Jt,
            IS_IPOD: Zt,
            IS_IOS: te,
            IOS_VERSION: ee,
            IS_ANDROID: ie,
            ANDROID_VERSION: re,
            IS_NATIVE_ANDROID: ne,
            IS_FIREFOX: ae,
            IS_EDGE: se,
            IS_CHROME: oe,
            CHROME_VERSION: ue,
            IE_VERSION: le,
            IS_SAFARI: ce,
            IS_ANY_SAFARI: he,
            TOUCH_ENABLED: de
        });

    function fe(t, e, i, r) {
        return function(t, e, i) {
            if ("number" != typeof e || e < 0 || e > i) throw new Error("Failed to execute '" + t + "' on 'TimeRanges': The index provided (" + e + ") is non-numeric or out of bounds (0-" + i + ").")
        }(t, r, i.length - 1), i[r][e]
    }

    function me(t) {
        return void 0 === t || 0 === t.length ? {
            length: 0,
            start: function() {
                throw new Error("This TimeRanges object is empty")
            },
            end: function() {
                throw new Error("This TimeRanges object is empty")
            }
        } : {
            length: t.length,
            start: fe.bind(null, "start", 0, t),
            end: fe.bind(null, "end", 1, t)
        }
    }

    function ge(t, e) {
        return Array.isArray(t) ? me(t) : void 0 === t || void 0 === e ? me() : me([
            [t, e]
        ])
    }

    function ye(t, e) {
        var i = 0,
            r = void 0,
            n = void 0;
        if (!e) return 0;
        t && t.length || (t = ge(0, 0));
        for (var a = 0; a < t.length; a++) r = t.start(a), (n = t.end(a)) > e && (n = e), i += n - r;
        return i / e
    }
    for (var ve = {}, _e = [
            ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
            ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
            ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
            ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
            ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
        ], be = _e[0], Te = void 0, Se = 0; Se < _e.length; Se++)
        if (_e[Se][1] in u) {
            Te = _e[Se];
            break
        }
    if (Te)
        for (var ke = 0; ke < Te.length; ke++) ve[be[ke]] = Te[ke];

    function Ce(t) {
        if (t instanceof Ce) return t;
        "number" == typeof t ? this.code = t : "string" == typeof t ? this.message = t : E(t) && ("number" == typeof t.code && (this.code = t.code), C(this, t)), this.message || (this.message = Ce.defaultMessages[this.code] || "")
    }
    Ce.prototype.code = 0, Ce.prototype.message = "", Ce.prototype.status = null, Ce.errorTypes = ["MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"], Ce.defaultMessages = {
        1: "You aborted the media playback",
        2: "A network error caused the media download to fail part-way.",
        3: "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",
        4: "The media could not be loaded, either because the server or network failed or because the format is not supported.",
        5: "The media is encrypted and we do not have the keys to decrypt it."
    };
    for (var Ee = 0; Ee < Ce.errorTypes.length; Ee++) Ce[Ce.errorTypes[Ee]] = Ee, Ce.prototype[Ce.errorTypes[Ee]] = Ee;
    var we = function(t, e) {
        var i, r = null;
        try {
            i = JSON.parse(t, e)
        } catch (t) {
            r = t
        }
        return [r, i]
    };

    function Ae(t) {
        return null != t && "function" == typeof t.then
    }

    function Le(t) {
        Ae(t) && t.then(null, (function(t) {}))
    }
    var Pe = function(t) {
            return ["kind", "label", "language", "id", "inBandMetadataTrackDispatchType", "mode", "src"].reduce((function(e, i, r) {
                return t[i] && (e[i] = t[i]), e
            }), {
                cues: t.cues && Array.prototype.map.call(t.cues, (function(t) {
                    return {
                        startTime: t.startTime,
                        endTime: t.endTime,
                        text: t.text,
                        id: t.id
                    }
                }))
            })
        },
        Oe = function(t) {
            var e = t.$$("track"),
                i = Array.prototype.map.call(e, (function(t) {
                    return t.track
                }));
            return Array.prototype.map.call(e, (function(t) {
                var e = Pe(t.track);
                return t.src && (e.src = t.src), e
            })).concat(Array.prototype.filter.call(t.textTracks(), (function(t) {
                return -1 === i.indexOf(t)
            })).map(Pe))
        },
        Ie = function(t, e) {
            return t.forEach((function(t) {
                var i = e.addRemoteTextTrack(t).track;
                !t.src && t.cues && t.cues.forEach((function(t) {
                    return i.addCue(t)
                }))
            })), e.textTracks()
        },
        xe = function(t) {
            function e(i, r) {
                y(this, e);
                var n = _(this, t.call(this, i, r));
                return n.opened_ = n.hasBeenOpened_ = n.hasBeenFilled_ = !1, n.closeable(!n.options_.uncloseable), n.content(n.options_.content), n.contentEl_ = M("div", {
                    className: "vjs-modal-dialog-content"
                }, {
                    role: "document"
                }), n.descEl_ = M("p", {
                    className: "vjs-modal-dialog-description vjs-control-text",
                    id: n.el().getAttribute("aria-describedby")
                }), U(n.descEl_, n.description()), n.el_.appendChild(n.descEl_), n.el_.appendChild(n.contentEl_), n
            }
            return v(e, t), e.prototype.createEl = function() {
                return t.prototype.createEl.call(this, "div", {
                    className: this.buildCSSClass(),
                    tabIndex: -1
                }, {
                    "aria-describedby": this.id() + "_description",
                    "aria-hidden": "true",
                    "aria-label": this.label(),
                    role: "dialog"
                })
            }, e.prototype.dispose = function() {
                this.contentEl_ = null, this.descEl_ = null, this.previouslyActiveEl_ = null, t.prototype.dispose.call(this)
            }, e.prototype.buildCSSClass = function() {
                return "vjs-modal-dialog vjs-hidden " + t.prototype.buildCSSClass.call(this)
            }, e.prototype.handleKeyPress = function(t) {
                27 === t.which && this.closeable() && this.close()
            }, e.prototype.label = function() {
                return this.localize(this.options_.label || "Modal Window")
            }, e.prototype.description = function() {
                var t = this.options_.description || this.localize("This is a modal window.");
                return this.closeable() && (t += " " + this.localize("This modal can be closed by pressing the Escape key or activating the close button.")), t
            }, e.prototype.open = function() {
                if (!this.opened_) {
                    var t = this.player();
                    this.trigger("beforemodalopen"), this.opened_ = !0, (this.options_.fillAlways || !this.hasBeenOpened_ && !this.hasBeenFilled_) && this.fill(), this.wasPlaying_ = !t.paused(), this.options_.pauseOnOpen && this.wasPlaying_ && t.pause(), this.closeable() && this.on(this.el_.ownerDocument, "keydown", Ot(this, this.handleKeyPress)), this.hadControls_ = t.controls(), t.controls(!1), this.show(), this.conditionalFocus_(), this.el().setAttribute("aria-hidden", "false"), this.trigger("modalopen"), this.hasBeenOpened_ = !0
                }
            }, e.prototype.opened = function(t) {
                return "boolean" == typeof t && this[t ? "open" : "close"](), this.opened_
            }, e.prototype.close = function() {
                if (this.opened_) {
                    var t = this.player();
                    this.trigger("beforemodalclose"), this.opened_ = !1, this.wasPlaying_ && this.options_.pauseOnOpen && t.play(), this.closeable() && this.off(this.el_.ownerDocument, "keydown", Ot(this, this.handleKeyPress)), this.hadControls_ && t.controls(!0), this.hide(), this.el().setAttribute("aria-hidden", "true"), this.trigger("modalclose"), this.conditionalBlur_(), this.options_.temporary && this.dispose()
                }
            }, e.prototype.closeable = function(t) {
                if ("boolean" == typeof t) {
                    var e = this.closeable_ = !!t,
                        i = this.getChild("closeButton");
                    if (e && !i) {
                        var r = this.contentEl_;
                        this.contentEl_ = this.el_, i = this.addChild("closeButton", {
                            controlText: "Close Modal Dialog"
                        }), this.contentEl_ = r, this.on(i, "close", this.close)
                    }!e && i && (this.off(i, "close", this.close), this.removeChild(i), i.dispose())
                }
                return this.closeable_
            }, e.prototype.fill = function() {
                this.fillWith(this.content())
            }, e.prototype.fillWith = function(t) {
                var e = this.contentEl(),
                    i = e.parentNode,
                    r = e.nextSibling;
                this.trigger("beforemodalfill"), this.hasBeenFilled_ = !0, i.removeChild(e), this.empty(), it(e, t), this.trigger("modalfill"), r ? i.insertBefore(e, r) : i.appendChild(e);
                var n = this.getChild("closeButton");
                n && i.appendChild(n.el_)
            }, e.prototype.empty = function() {
                this.trigger("beforemodalempty"), Z(this.contentEl()), this.trigger("modalempty")
            }, e.prototype.content = function(t) {
                return void 0 !== t && (this.content_ = t), this.content_
            }, e.prototype.conditionalFocus_ = function() {
                var t = u.activeElement,
                    e = this.player_.el_;
                this.previouslyActiveEl_ = null, (e.contains(t) || e === t) && (this.previouslyActiveEl_ = t, this.focus(), this.on(u, "keydown", this.handleKeyDown))
            }, e.prototype.conditionalBlur_ = function() {
                this.previouslyActiveEl_ && (this.previouslyActiveEl_.focus(), this.previouslyActiveEl_ = null), this.off(u, "keydown", this.handleKeyDown)
            }, e.prototype.handleKeyDown = function(t) {
                if (9 === t.which) {
                    for (var e = this.focusableEls_(), i = this.el_.querySelector(":focus"), r = void 0, n = 0; n < e.length; n++)
                        if (i === e[n]) {
                            r = n;
                            break
                        }
                    u.activeElement === this.el_ && (r = 0), t.shiftKey && 0 === r ? (e[e.length - 1].focus(), t.preventDefault()) : t.shiftKey || r !== e.length - 1 || (e[0].focus(), t.preventDefault())
                }
            }, e.prototype.focusableEls_ = function() {
                var t = this.el_.querySelectorAll("*");
                return Array.prototype.filter.call(t, (function(t) {
                    return (t instanceof r.HTMLAnchorElement || t instanceof r.HTMLAreaElement) && t.hasAttribute("href") || (t instanceof r.HTMLInputElement || t instanceof r.HTMLSelectElement || t instanceof r.HTMLTextAreaElement || t instanceof r.HTMLButtonElement) && !t.hasAttribute("disabled") || t instanceof r.HTMLIFrameElement || t instanceof r.HTMLObjectElement || t instanceof r.HTMLEmbedElement || t.hasAttribute("tabindex") && -1 !== t.getAttribute("tabindex") || t.hasAttribute("contenteditable")
                }))
            }, e
        }(Gt);
    xe.prototype.options_ = {
        pauseOnOpen: !0,
        temporary: !0
    }, Gt.registerComponent("ModalDialog", xe);
    var De = function(t) {
        function e() {
            var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            y(this, e);
            var r = _(this, t.call(this));
            r.tracks_ = [], Object.defineProperty(r, "length", {
                get: function() {
                    return this.tracks_.length
                }
            });
            for (var n = 0; n < i.length; n++) r.addTrack(i[n]);
            return r
        }
        return v(e, t), e.prototype.addTrack = function(t) {
            var e = this.tracks_.length;
            "" + e in this || Object.defineProperty(this, e, {
                get: function() {
                    return this.tracks_[e]
                }
            }), -1 === this.tracks_.indexOf(t) && (this.tracks_.push(t), this.trigger({
                track: t,
                type: "addtrack"
            }))
        }, e.prototype.removeTrack = function(t) {
            for (var e = void 0, i = 0, r = this.length; i < r; i++)
                if (this[i] === t) {
                    (e = this[i]).off && e.off(), this.tracks_.splice(i, 1);
                    break
                }
            e && this.trigger({
                track: e,
                type: "removetrack"
            })
        }, e.prototype.getTrackById = function(t) {
            for (var e = null, i = 0, r = this.length; i < r; i++) {
                var n = this[i];
                if (n.id === t) {
                    e = n;
                    break
                }
            }
            return e
        }, e
    }(xt);
    for (var Re in De.prototype.allowedEvents_ = {
            change: "change",
            addtrack: "addtrack",
            removetrack: "removetrack"
        }, De.prototype.allowedEvents_) De.prototype["on" + Re] = null;
    var Me = function(t, e) {
            for (var i = 0; i < t.length; i++) Object.keys(t[i]).length && e.id !== t[i].id && (t[i].enabled = !1)
        },
        Ue = function(t) {
            function e() {
                var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                y(this, e);
                for (var r = i.length - 1; r >= 0; r--)
                    if (i[r].enabled) {
                        Me(i, i[r]);
                        break
                    }
                var n = _(this, t.call(this, i));
                return n.changing_ = !1, n
            }
            return v(e, t), e.prototype.addTrack = function(e) {
                var i = this;
                e.enabled && Me(this, e), t.prototype.addTrack.call(this, e), e.addEventListener && e.addEventListener("enabledchange", (function() {
                    i.changing_ || (i.changing_ = !0, Me(i, e), i.changing_ = !1, i.trigger("change"))
                }))
            }, e
        }(De),
        Ne = function(t, e) {
            for (var i = 0; i < t.length; i++) Object.keys(t[i]).length && e.id !== t[i].id && (t[i].selected = !1)
        },
        Be = function(t) {
            function e() {
                var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                y(this, e);
                for (var r = i.length - 1; r >= 0; r--)
                    if (i[r].selected) {
                        Ne(i, i[r]);
                        break
                    }
                var n = _(this, t.call(this, i));
                return n.changing_ = !1, Object.defineProperty(n, "selectedIndex", {
                    get: function() {
                        for (var t = 0; t < this.length; t++)
                            if (this[t].selected) return t;
                        return -1
                    },
                    set: function() {}
                }), n
            }
            return v(e, t), e.prototype.addTrack = function(e) {
                var i = this;
                e.selected && Ne(this, e), t.prototype.addTrack.call(this, e), e.addEventListener && e.addEventListener("selectedchange", (function() {
                    i.changing_ || (i.changing_ = !0, Ne(i, e), i.changing_ = !1, i.trigger("change"))
                }))
            }, e
        }(De),
        je = function(t) {
            function e() {
                return y(this, e), _(this, t.apply(this, arguments))
            }
            return v(e, t), e.prototype.addTrack = function(e) {
                t.prototype.addTrack.call(this, e), e.addEventListener("modechange", Ot(this, (function() {
                    this.trigger("change")
                }))); - 1 === ["metadata", "chapters"].indexOf(e.kind) && e.addEventListener("modechange", Ot(this, (function() {
                    this.trigger("selectedlanguagechange")
                })))
            }, e
        }(De),
        Fe = function() {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                y(this, t), this.trackElements_ = [], Object.defineProperty(this, "length", {
                    get: function() {
                        return this.trackElements_.length
                    }
                });
                for (var i = 0, r = e.length; i < r; i++) this.addTrackElement_(e[i])
            }
            return t.prototype.addTrackElement_ = function(t) {
                var e = this.trackElements_.length;
                "" + e in this || Object.defineProperty(this, e, {
                    get: function() {
                        return this.trackElements_[e]
                    }
                }), -1 === this.trackElements_.indexOf(t) && this.trackElements_.push(t)
            }, t.prototype.getTrackElementByTrack_ = function(t) {
                for (var e = void 0, i = 0, r = this.trackElements_.length; i < r; i++)
                    if (t === this.trackElements_[i].track) {
                        e = this.trackElements_[i];
                        break
                    }
                return e
            }, t.prototype.removeTrackElement_ = function(t) {
                for (var e = 0, i = this.trackElements_.length; e < i; e++)
                    if (t === this.trackElements_[e]) {
                        this.trackElements_.splice(e, 1);
                        break
                    }
            }, t
        }(),
        He = function() {
            function t(e) {
                y(this, t), t.prototype.setCues_.call(this, e), Object.defineProperty(this, "length", {
                    get: function() {
                        return this.length_
                    }
                })
            }
            return t.prototype.setCues_ = function(t) {
                var e = this.length || 0,
                    i = 0,
                    r = t.length;
                this.cues_ = t, this.length_ = t.length;
                var n = function(t) {
                    "" + t in this || Object.defineProperty(this, "" + t, {
                        get: function() {
                            return this.cues_[t]
                        }
                    })
                };
                if (e < r)
                    for (i = e; i < r; i++) n.call(this, i)
            }, t.prototype.getCueById = function(t) {
                for (var e = null, i = 0, r = this.length; i < r; i++) {
                    var n = this[i];
                    if (n.id === t) {
                        e = n;
                        break
                    }
                }
                return e
            }, t
        }(),
        Ve = {
            alternative: "alternative",
            captions: "captions",
            main: "main",
            sign: "sign",
            subtitles: "subtitles",
            commentary: "commentary"
        },
        qe = {
            alternative: "alternative",
            descriptions: "descriptions",
            main: "main",
            "main-desc": "main-desc",
            translation: "translation",
            commentary: "commentary"
        },
        We = {
            subtitles: "subtitles",
            captions: "captions",
            descriptions: "descriptions",
            chapters: "chapters",
            metadata: "metadata"
        },
        ze = {
            disabled: "disabled",
            hidden: "hidden",
            showing: "showing"
        },
        Ge = function(t) {
            function e() {
                var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                y(this, e);
                var r = _(this, t.call(this)),
                    n = {
                        id: i.id || "vjs_track_" + ut(),
                        kind: i.kind || "",
                        label: i.label || "",
                        language: i.language || ""
                    },
                    a = function(t) {
                        Object.defineProperty(r, t, {
                            get: function() {
                                return n[t]
                            },
                            set: function() {}
                        })
                    };
                for (var s in n) a(s);
                return r
            }
            return v(e, t), e
        }(xt),
        Xe = function(t) {
            var e = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"],
                i = u.createElement("a");
            i.href = t;
            var n = "" === i.host && "file:" !== i.protocol,
                a = void 0;
            n && ((a = u.createElement("div")).innerHTML = '<a href="' + t + '"></a>', i = a.firstChild, a.setAttribute("style", "display:none; position:absolute;"), u.body.appendChild(a));
            for (var s = {}, o = 0; o < e.length; o++) s[e[o]] = i[e[o]];
            return "http:" === s.protocol && (s.host = s.host.replace(/:80$/, "")), "https:" === s.protocol && (s.host = s.host.replace(/:443$/, "")), s.protocol || (s.protocol = r.location.protocol), n && u.body.removeChild(a), s
        },
        Ye = function(t) {
            if (!t.match(/^https?:\/\//)) {
                var e = u.createElement("div");
                e.innerHTML = '<a href="' + t + '">x</a>', t = e.firstChild.href
            }
            return t
        },
        $e = function(t) {
            if ("string" == typeof t) {
                var e = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i.exec(t);
                if (e) return e.pop().toLowerCase()
            }
            return ""
        },
        Ke = function(t) {
            var e = r.location,
                i = Xe(t);
            return (":" === i.protocol ? e.protocol : i.protocol) + i.host !== e.protocol + e.host
        },
        Qe = Object.freeze({
            parseUrl: Xe,
            getAbsoluteURL: Ye,
            getFileExtension: $e,
            isCrossOrigin: Ke
        }),
        Je = function(t) {
            var e = Ze.call(t);
            return "[object Function]" === e || "function" == typeof t && "[object RegExp]" !== e || "undefined" != typeof window && (t === window.setTimeout || t === window.alert || t === window.confirm || t === window.prompt)
        },
        Ze = Object.prototype.toString;
    var ti = Object.freeze({
            default: Je,
            __moduleExports: Je
        }),
        ei = e((function(t, e) {
            (e = t.exports = function(t) {
                return t.replace(/^\s*|\s*$/g, "")
            }).left = function(t) {
                return t.replace(/^\s*/, "")
            }, e.right = function(t) {
                return t.replace(/\s*$/, "")
            }
        })),
        ii = ei.left,
        ri = ei.right,
        ni = Object.freeze({
            default: ei,
            __moduleExports: ei,
            left: ii,
            right: ri
        }),
        ai = ti && Je || ti,
        si = function(t, e, i) {
            if (!ai(e)) throw new TypeError("iterator must be a function");
            arguments.length < 3 && (i = this);
            "[object Array]" === oi.call(t) ? li(t, e, i) : "string" == typeof t ? ci(t, e, i) : hi(t, e, i)
        },
        oi = Object.prototype.toString,
        ui = Object.prototype.hasOwnProperty;

    function li(t, e, i) {
        for (var r = 0, n = t.length; r < n; r++) ui.call(t, r) && e.call(i, t[r], r, t)
    }

    function ci(t, e, i) {
        for (var r = 0, n = t.length; r < n; r++) e.call(i, t.charAt(r), r, t)
    }

    function hi(t, e, i) {
        for (var r in t) ui.call(t, r) && e.call(i, t[r], r, t)
    }
    var di = Object.freeze({
            default: si,
            __moduleExports: si
        }),
        pi = ni && ei || ni,
        fi = di && si || di,
        mi = function(t) {
            if (!t) return {};
            var e = {};
            return fi(pi(t).split("\n"), (function(t) {
                var i, r = t.indexOf(":"),
                    n = pi(t.slice(0, r)).toLowerCase(),
                    a = pi(t.slice(r + 1));
                void 0 === e[n] ? e[n] = a : (i = e[n], "[object Array]" === Object.prototype.toString.call(i) ? e[n].push(a) : e[n] = [e[n], a])
            })), e
        },
        gi = Object.freeze({
            default: mi,
            __moduleExports: mi
        }),
        yi = function() {
            for (var t = {}, e = 0; e < arguments.length; e++) {
                var i = arguments[e];
                for (var r in i) vi.call(i, r) && (t[r] = i[r])
            }
            return t
        },
        vi = Object.prototype.hasOwnProperty;
    var _i = Object.freeze({
            default: yi,
            __moduleExports: yi
        }),
        bi = gi && mi || gi,
        Ti = _i && yi || _i,
        Si = Ci;

    function ki(t, e, i) {
        var r = t;
        return ai(e) ? (i = e, "string" == typeof t && (r = {
            uri: t
        })) : r = Ti(e, {
            uri: t
        }), r.callback = i, r
    }

    function Ci(t, e, i) {
        return Ei(e = ki(t, e, i))
    }

    function Ei(t) {
        if (void 0 === t.callback) throw new Error("callback argument missing");
        var e = !1,
            i = function(i, r, n) {
                e || (e = !0, t.callback(i, r, n))
            };

        function r() {
            var t = void 0;
            if (t = u.response ? u.response : u.responseText || function(t) {
                    if ("document" === t.responseType) return t.responseXML;
                    var e = t.responseXML && "parsererror" === t.responseXML.documentElement.nodeName;
                    if ("" === t.responseType && !e) return t.responseXML;
                    return null
                }(u), m) try {
                t = JSON.parse(t)
            } catch (t) {}
            return t
        }

        function n(t) {
            return clearTimeout(l), t instanceof Error || (t = new Error("" + (t || "Unknown XMLHttpRequest Error"))), t.statusCode = 0, i(t, g)
        }

        function a() {
            if (!o) {
                var e;
                clearTimeout(l), e = t.useXDR && void 0 === u.status ? 200 : 1223 === u.status ? 204 : u.status;
                var n = g,
                    a = null;
                return 0 !== e ? (n = {
                    body: r(),
                    statusCode: e,
                    method: h,
                    headers: {},
                    url: c,
                    rawRequest: u
                }, u.getAllResponseHeaders && (n.headers = bi(u.getAllResponseHeaders()))) : a = new Error("Internal XMLHttpRequest Error"), i(a, n, n.body)
            }
        }
        var s, o, u = t.xhr || null;
        u || (u = t.cors || t.useXDR ? new Ci.XDomainRequest : new Ci.XMLHttpRequest);
        var l, c = u.url = t.uri || t.url,
            h = u.method = t.method || "GET",
            d = t.body || t.data,
            p = u.headers = t.headers || {},
            f = !!t.sync,
            m = !1,
            g = {
                body: void 0,
                headers: {},
                statusCode: 0,
                method: h,
                url: c,
                rawRequest: u
            };
        if ("json" in t && !1 !== t.json && (m = !0, p.accept || p.Accept || (p.Accept = "application/json"), "GET" !== h && "HEAD" !== h && (p["content-type"] || p["Content-Type"] || (p["Content-Type"] = "application/json"), d = JSON.stringify(!0 === t.json ? d : t.json))), u.onreadystatechange = function() {
                4 === u.readyState && setTimeout(a, 0)
            }, u.onload = a, u.onerror = n, u.onprogress = function() {}, u.onabort = function() {
                o = !0
            }, u.ontimeout = n, u.open(h, c, !f, t.username, t.password), f || (u.withCredentials = !!t.withCredentials), !f && t.timeout > 0 && (l = setTimeout((function() {
                if (!o) {
                    o = !0, u.abort("timeout");
                    var t = new Error("XMLHttpRequest timeout");
                    t.code = "ETIMEDOUT", n(t)
                }
            }), t.timeout)), u.setRequestHeader)
            for (s in p) p.hasOwnProperty(s) && u.setRequestHeader(s, p[s]);
        else if (t.headers && ! function(t) {
                for (var e in t)
                    if (t.hasOwnProperty(e)) return !1;
                return !0
            }(t.headers)) throw new Error("Headers cannot be set on an XDomainRequest object");
        return "responseType" in t && (u.responseType = t.responseType), "beforeSend" in t && "function" == typeof t.beforeSend && t.beforeSend(u), u.send(d || null), u
    }
    Ci.XMLHttpRequest = r.XMLHttpRequest || function() {}, Ci.XDomainRequest = "withCredentials" in new Ci.XMLHttpRequest ? Ci.XMLHttpRequest : r.XDomainRequest,
        function(t, e) {
            for (var i = 0; i < t.length; i++) e(t[i])
        }(["get", "put", "post", "patch", "head", "delete"], (function(t) {
            Ci["delete" === t ? "del" : t] = function(e, i, r) {
                return (i = ki(e, i, r)).method = t.toUpperCase(), Ei(i)
            }
        }));
    var wi = function(t, e) {
            var i = new r.WebVTT.Parser(r, r.vttjs, r.WebVTT.StringDecoder()),
                n = [];
            i.oncue = function(t) {
                e.addCue(t)
            }, i.onparsingerror = function(t) {
                n.push(t)
            }, i.onflush = function() {
                e.trigger({
                    type: "loadeddata",
                    target: e
                })
            }, i.parse(t), n.length > 0 && (r.console && r.console.groupCollapsed && r.console.groupCollapsed("Text Track parsing errors for " + e.src), n.forEach((function(t) {
                return p.error(t)
            })), r.console && r.console.groupEnd && r.console.groupEnd()), i.flush()
        },
        Ai = function(t, e) {
            var i = {
                    uri: t
                },
                n = Ke(t);
            n && (i.cors = n), Si(i, Ot(this, (function(t, i, n) {
                if (t) return p.error(t, i);
                if (e.loaded_ = !0, "function" != typeof r.WebVTT) {
                    if (e.tech_) {
                        var a = function() {
                            return wi(n, e)
                        };
                        e.tech_.on("vttjsloaded", a), e.tech_.on("vttjserror", (function() {
                            p.error("vttjs failed to load, stopping trying to process " + e.src), e.tech_.off("vttjsloaded", a)
                        }))
                    }
                } else wi(n, e)
            })))
        },
        Li = function(t) {
            function e() {
                var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (y(this, e), !i.tech) throw new Error("A tech was not provided.");
                var r = zt(i, {
                        kind: We[i.kind] || "subtitles",
                        language: i.language || i.srclang || ""
                    }),
                    n = ze[r.mode] || "disabled",
                    a = r.default;
                "metadata" !== r.kind && "chapters" !== r.kind || (n = "hidden");
                var s = _(this, t.call(this, r));
                s.tech_ = r.tech, s.cues_ = [], s.activeCues_ = [];
                var o = new He(s.cues_),
                    u = new He(s.activeCues_),
                    l = !1,
                    c = Ot(s, (function() {
                        this.activeCues, l && (this.trigger("cuechange"), l = !1)
                    }));
                return "disabled" !== n && s.tech_.ready((function() {
                    s.tech_.on("timeupdate", c)
                }), !0), Object.defineProperties(s, {
                    default: {
                        get: function() {
                            return a
                        },
                        set: function() {}
                    },
                    mode: {
                        get: function() {
                            return n
                        },
                        set: function(t) {
                            var e = this;
                            ze[t] && ("showing" === (n = t) && this.tech_.ready((function() {
                                e.tech_.on("timeupdate", c)
                            }), !0), this.trigger("modechange"))
                        }
                    },
                    cues: {
                        get: function() {
                            return this.loaded_ ? o : null
                        },
                        set: function() {}
                    },
                    activeCues: {
                        get: function() {
                            if (!this.loaded_) return null;
                            if (0 === this.cues.length) return u;
                            for (var t = this.tech_.currentTime(), e = [], i = 0, r = this.cues.length; i < r; i++) {
                                var n = this.cues[i];
                                n.startTime <= t && n.endTime >= t ? e.push(n) : n.startTime === n.endTime && n.startTime <= t && n.startTime + .5 >= t && e.push(n)
                            }
                            if (l = !1, e.length !== this.activeCues_.length) l = !0;
                            else
                                for (var a = 0; a < e.length; a++) - 1 === this.activeCues_.indexOf(e[a]) && (l = !0);
                            return this.activeCues_ = e, u.setCues_(this.activeCues_), u
                        },
                        set: function() {}
                    }
                }), r.src ? (s.src = r.src, Ai(r.src, s)) : s.loaded_ = !0, s
            }
            return v(e, t), e.prototype.addCue = function(t) {
                var e = t;
                if (r.vttjs && !(t instanceof r.vttjs.VTTCue)) {
                    for (var i in e = new r.vttjs.VTTCue(t.startTime, t.endTime, t.text), t) i in e || (e[i] = t[i]);
                    e.id = t.id, e.originalCue_ = t
                }
                for (var n = this.tech_.textTracks(), a = 0; a < n.length; a++) n[a] !== this && n[a].removeCue(e);
                this.cues_.push(e), this.cues.setCues_(this.cues_)
            }, e.prototype.removeCue = function(t) {
                for (var e = this.cues_.length; e--;) {
                    var i = this.cues_[e];
                    if (i === t || i.originalCue_ && i.originalCue_ === t) {
                        this.cues_.splice(e, 1), this.cues.setCues_(this.cues_);
                        break
                    }
                }
            }, e
        }(Ge);
    Li.prototype.allowedEvents_ = {
        cuechange: "cuechange"
    };
    var Pi = function(t) {
            function e() {
                var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                y(this, e);
                var r = zt(i, {
                        kind: qe[i.kind] || ""
                    }),
                    n = _(this, t.call(this, r)),
                    a = !1;
                return Object.defineProperty(n, "enabled", {
                    get: function() {
                        return a
                    },
                    set: function(t) {
                        "boolean" == typeof t && t !== a && (a = t, this.trigger("enabledchange"))
                    }
                }), r.enabled && (n.enabled = r.enabled), n.loaded_ = !0, n
            }
            return v(e, t), e
        }(Ge),
        Oi = function(t) {
            function e() {
                var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                y(this, e);
                var r = zt(i, {
                        kind: Ve[i.kind] || ""
                    }),
                    n = _(this, t.call(this, r)),
                    a = !1;
                return Object.defineProperty(n, "selected", {
                    get: function() {
                        return a
                    },
                    set: function(t) {
                        "boolean" == typeof t && t !== a && (a = t, this.trigger("selectedchange"))
                    }
                }), r.selected && (n.selected = r.selected), n
            }
            return v(e, t), e
        }(Ge),
        Ii = function(t) {
            function e() {
                var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                y(this, e);
                var r = _(this, t.call(this)),
                    n = void 0,
                    a = new Li(i);
                return r.kind = a.kind, r.src = a.src, r.srclang = a.language, r.label = a.label, r.default = a.default, Object.defineProperties(r, {
                    readyState: {
                        get: function() {
                            return n
                        }
                    },
                    track: {
                        get: function() {
                            return a
                        }
                    }
                }), n = 0, a.addEventListener("loadeddata", (function() {
                    n = 2, r.trigger({
                        type: "load",
                        target: r
                    })
                })), r
            }
            return v(e, t), e
        }(xt);
    Ii.prototype.allowedEvents_ = {
        load: "load"
    }, Ii.NONE = 0, Ii.LOADING = 1, Ii.LOADED = 2, Ii.ERROR = 3;
    var xi = {
        audio: {
            ListClass: Ue,
            TrackClass: Pi,
            capitalName: "Audio"
        },
        video: {
            ListClass: Be,
            TrackClass: Oi,
            capitalName: "Video"
        },
        text: {
            ListClass: je,
            TrackClass: Li,
            capitalName: "Text"
        }
    };
    Object.keys(xi).forEach((function(t) {
        xi[t].getterName = t + "Tracks", xi[t].privateName = t + "Tracks_"
    }));
    var Di = {
            remoteText: {
                ListClass: je,
                TrackClass: Li,
                capitalName: "RemoteText",
                getterName: "remoteTextTracks",
                privateName: "remoteTextTracks_"
            },
            remoteTextEl: {
                ListClass: Fe,
                TrackClass: Ii,
                capitalName: "RemoteTextTrackEls",
                getterName: "remoteTextTrackEls",
                privateName: "remoteTextTrackEls_"
            }
        },
        Ri = zt(xi, Di);
    Di.names = Object.keys(Di), xi.names = Object.keys(xi), Ri.names = [].concat(Di.names).concat(xi.names);
    var Mi = Object.create || function() {
        function t() {}
        return function(e) {
            if (1 !== arguments.length) throw new Error("Object.create shim only accepts one parameter.");
            return t.prototype = e, new t
        }
    }();

    function Ui(t, e) {
        this.name = "ParsingError", this.code = t.code, this.message = e || t.message
    }

    function Ni(t) {
        function e(t, e, i, r) {
            return 3600 * (0 | t) + 60 * (0 | e) + (0 | i) + (0 | r) / 1e3
        }
        var i = t.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
        return i ? i[3] ? e(i[1], i[2], i[3].replace(":", ""), i[4]) : i[1] > 59 ? e(i[1], i[2], 0, i[4]) : e(0, i[1], i[2], i[4]) : null
    }

    function Bi() {
        this.values = Mi(null)
    }

    function ji(t, e, i, r) {
        var n = r ? t.split(r) : [t];
        for (var a in n)
            if ("string" == typeof n[a]) {
                var s = n[a].split(i);
                if (2 === s.length) e(s[0], s[1])
            }
    }

    function Fi(t, e, i) {
        var r = t;

        function n() {
            var e = Ni(t);
            if (null === e) throw new Ui(Ui.Errors.BadTimeStamp, "Malformed timestamp: " + r);
            return t = t.replace(/^[^\sa-zA-Z-]+/, ""), e
        }

        function a() {
            t = t.replace(/^\s+/, "")
        }
        if (a(), e.startTime = n(), a(), "--\x3e" !== t.substr(0, 3)) throw new Ui(Ui.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '--\x3e'): " + r);
        t = t.substr(3), a(), e.endTime = n(), a(),
            function(t, e) {
                var r = new Bi;
                ji(t, (function(t, e) {
                    switch (t) {
                        case "region":
                            for (var n = i.length - 1; n >= 0; n--)
                                if (i[n].id === e) {
                                    r.set(t, i[n].region);
                                    break
                                }
                            break;
                        case "vertical":
                            r.alt(t, e, ["rl", "lr"]);
                            break;
                        case "line":
                            var a = e.split(","),
                                s = a[0];
                            r.integer(t, s), r.percent(t, s) && r.set("snapToLines", !1), r.alt(t, s, ["auto"]), 2 === a.length && r.alt("lineAlign", a[1], ["start", "middle", "end"]);
                            break;
                        case "position":
                            a = e.split(","), r.percent(t, a[0]), 2 === a.length && r.alt("positionAlign", a[1], ["start", "middle", "end"]);
                            break;
                        case "size":
                            r.percent(t, e);
                            break;
                        case "align":
                            r.alt(t, e, ["start", "middle", "end", "left", "right"])
                    }
                }), /:/, /\s/), e.region = r.get("region", null), e.vertical = r.get("vertical", ""), e.line = r.get("line", "auto"), e.lineAlign = r.get("lineAlign", "start"), e.snapToLines = r.get("snapToLines", !0), e.size = r.get("size", 100), e.align = r.get("align", "middle"), e.position = r.get("position", {
                    start: 0,
                    left: 0,
                    middle: 50,
                    end: 100,
                    right: 100
                }, e.align), e.positionAlign = r.get("positionAlign", {
                    start: "start",
                    left: "start",
                    middle: "middle",
                    end: "end",
                    right: "end"
                }, e.align)
            }(t, e)
    }
    Ui.prototype = Mi(Error.prototype), Ui.prototype.constructor = Ui, Ui.Errors = {
        BadSignature: {
            code: 0,
            message: "Malformed WebVTT signature."
        },
        BadTimeStamp: {
            code: 1,
            message: "Malformed time stamp."
        }
    }, Bi.prototype = {
        set: function(t, e) {
            this.get(t) || "" === e || (this.values[t] = e)
        },
        get: function(t, e, i) {
            return i ? this.has(t) ? this.values[t] : e[i] : this.has(t) ? this.values[t] : e
        },
        has: function(t) {
            return t in this.values
        },
        alt: function(t, e, i) {
            for (var r = 0; r < i.length; ++r)
                if (e === i[r]) {
                    this.set(t, e);
                    break
                }
        },
        integer: function(t, e) {
            /^-?\d+$/.test(e) && this.set(t, parseInt(e, 10))
        },
        percent: function(t, e) {
            return !!(e.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (e = parseFloat(e)) >= 0 && e <= 100) && (this.set(t, e), !0)
        }
    };
    var Hi = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&lrm;": "‎",
            "&rlm;": "‏",
            "&nbsp;": " "
        },
        Vi = {
            c: "span",
            i: "i",
            b: "b",
            u: "u",
            ruby: "ruby",
            rt: "rt",
            v: "span",
            lang: "span"
        },
        qi = {
            v: "title",
            lang: "lang"
        },
        Wi = {
            rt: "ruby"
        };

    function zi(t, e) {
        function i() {
            if (!e) return null;
            var t, i = e.match(/^([^<]*)(<[^>]*>?)?/);
            return t = i[1] ? i[1] : i[2], e = e.substr(t.length), t
        }

        function r(t) {
            return Hi[t]
        }

        function n(t) {
            for (; p = t.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);) t = t.replace(p[0], r);
            return t
        }

        function a(t, e) {
            return !Wi[e.localName] || Wi[e.localName] === t.localName
        }

        function s(e, i) {
            var r = Vi[e];
            if (!r) return null;
            var n = t.document.createElement(r);
            n.localName = r;
            var a = qi[e];
            return a && i && (n[a] = i.trim()), n
        }
        for (var o, u = t.document.createElement("div"), l = u, c = []; null !== (o = i());)
            if ("<" !== o[0]) l.appendChild(t.document.createTextNode(n(o)));
            else {
                if ("/" === o[1]) {
                    c.length && c[c.length - 1] === o.substr(2).replace(">", "") && (c.pop(), l = l.parentNode);
                    continue
                }
                var h, d = Ni(o.substr(1, o.length - 2));
                if (d) {
                    h = t.document.createProcessingInstruction("timestamp", d), l.appendChild(h);
                    continue
                }
                var p = o.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
                if (!p) continue;
                if (!(h = s(p[1], p[3]))) continue;
                if (!a(l, h)) continue;
                p[2] && (h.className = p[2].substr(1).replace(".", " ")), c.push(p[1]), l.appendChild(h), l = h
            }
        return u
    }
    var Gi = [
        [1470, 1470],
        [1472, 1472],
        [1475, 1475],
        [1478, 1478],
        [1488, 1514],
        [1520, 1524],
        [1544, 1544],
        [1547, 1547],
        [1549, 1549],
        [1563, 1563],
        [1566, 1610],
        [1645, 1647],
        [1649, 1749],
        [1765, 1766],
        [1774, 1775],
        [1786, 1805],
        [1807, 1808],
        [1810, 1839],
        [1869, 1957],
        [1969, 1969],
        [1984, 2026],
        [2036, 2037],
        [2042, 2042],
        [2048, 2069],
        [2074, 2074],
        [2084, 2084],
        [2088, 2088],
        [2096, 2110],
        [2112, 2136],
        [2142, 2142],
        [2208, 2208],
        [2210, 2220],
        [8207, 8207],
        [64285, 64285],
        [64287, 64296],
        [64298, 64310],
        [64312, 64316],
        [64318, 64318],
        [64320, 64321],
        [64323, 64324],
        [64326, 64449],
        [64467, 64829],
        [64848, 64911],
        [64914, 64967],
        [65008, 65020],
        [65136, 65140],
        [65142, 65276],
        [67584, 67589],
        [67592, 67592],
        [67594, 67637],
        [67639, 67640],
        [67644, 67644],
        [67647, 67669],
        [67671, 67679],
        [67840, 67867],
        [67872, 67897],
        [67903, 67903],
        [67968, 68023],
        [68030, 68031],
        [68096, 68096],
        [68112, 68115],
        [68117, 68119],
        [68121, 68147],
        [68160, 68167],
        [68176, 68184],
        [68192, 68223],
        [68352, 68405],
        [68416, 68437],
        [68440, 68466],
        [68472, 68479],
        [68608, 68680],
        [126464, 126467],
        [126469, 126495],
        [126497, 126498],
        [126500, 126500],
        [126503, 126503],
        [126505, 126514],
        [126516, 126519],
        [126521, 126521],
        [126523, 126523],
        [126530, 126530],
        [126535, 126535],
        [126537, 126537],
        [126539, 126539],
        [126541, 126543],
        [126545, 126546],
        [126548, 126548],
        [126551, 126551],
        [126553, 126553],
        [126555, 126555],
        [126557, 126557],
        [126559, 126559],
        [126561, 126562],
        [126564, 126564],
        [126567, 126570],
        [126572, 126578],
        [126580, 126583],
        [126585, 126588],
        [126590, 126590],
        [126592, 126601],
        [126603, 126619],
        [126625, 126627],
        [126629, 126633],
        [126635, 126651],
        [1114109, 1114109]
    ];

    function Xi(t) {
        for (var e = 0; e < Gi.length; e++) {
            var i = Gi[e];
            if (t >= i[0] && t <= i[1]) return !0
        }
        return !1
    }

    function Yi(t) {
        var e = [],
            i = "";
        if (!t || !t.childNodes) return "ltr";

        function r(t, e) {
            for (var i = e.childNodes.length - 1; i >= 0; i--) t.push(e.childNodes[i])
        }

        function n(t) {
            if (!t || !t.length) return null;
            var e = t.pop(),
                i = e.textContent || e.innerText;
            if (i) {
                var a = i.match(/^.*(\n|\r)/);
                return a ? (t.length = 0, a[0]) : i
            }
            return "ruby" === e.tagName ? n(t) : e.childNodes ? (r(t, e), n(t)) : void 0
        }
        for (r(e, t); i = n(e);)
            for (var a = 0; a < i.length; a++)
                if (Xi(i.charCodeAt(a))) return "rtl";
        return "ltr"
    }

    function $i() {}

    function Ki(t, e, i) {
        $i.call(this), this.cue = e, this.cueDiv = zi(t, e.text);
        var r = {
            color: "rgba(255, 255, 255, 1)",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            position: "relative",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            display: "inline",
            writingMode: "" === e.vertical ? "horizontal-tb" : "lr" === e.vertical ? "vertical-lr" : "vertical-rl",
            unicodeBidi: "plaintext"
        };
        this.applyStyles(r, this.cueDiv), this.div = t.document.createElement("div"), r = {
            direction: Yi(this.cueDiv),
            writingMode: "" === e.vertical ? "horizontal-tb" : "lr" === e.vertical ? "vertical-lr" : "vertical-rl",
            unicodeBidi: "plaintext",
            textAlign: "middle" === e.align ? "center" : e.align,
            font: i.font,
            whiteSpace: "pre-line",
            position: "absolute"
        }, this.applyStyles(r), this.div.appendChild(this.cueDiv);
        var n = 0;
        switch (e.positionAlign) {
            case "start":
                n = e.position;
                break;
            case "middle":
                n = e.position - e.size / 2;
                break;
            case "end":
                n = e.position - e.size
        }
        "" === e.vertical ? this.applyStyles({
            left: this.formatStyle(n, "%"),
            width: this.formatStyle(e.size, "%")
        }) : this.applyStyles({
            top: this.formatStyle(n, "%"),
            height: this.formatStyle(e.size, "%")
        }), this.move = function(t) {
            this.applyStyles({
                top: this.formatStyle(t.top, "px"),
                bottom: this.formatStyle(t.bottom, "px"),
                left: this.formatStyle(t.left, "px"),
                right: this.formatStyle(t.right, "px"),
                height: this.formatStyle(t.height, "px"),
                width: this.formatStyle(t.width, "px")
            })
        }
    }

    function Qi(t) {
        var e, i, r, n;
        if (t.div) {
            i = t.div.offsetHeight, r = t.div.offsetWidth, n = t.div.offsetTop;
            var a = (a = t.div.childNodes) && (a = a[0]) && a.getClientRects && a.getClientRects();
            t = t.div.getBoundingClientRect(), e = a ? Math.max(a[0] && a[0].height || 0, t.height / a.length) : 0
        }
        this.left = t.left, this.right = t.right, this.top = t.top || n, this.height = t.height || i, this.bottom = t.bottom || n + (t.height || i), this.width = t.width || r, this.lineHeight = void 0 !== e ? e : t.lineHeight
    }

    function Ji(t, e, i, r) {
        var n = new Qi(e),
            a = e.cue,
            s = function(t) {
                if ("number" == typeof t.line && (t.snapToLines || t.line >= 0 && t.line <= 100)) return t.line;
                if (!t.track || !t.track.textTrackList || !t.track.textTrackList.mediaElement) return -1;
                for (var e = t.track, i = e.textTrackList, r = 0, n = 0; n < i.length && i[n] !== e; n++) "showing" === i[n].mode && r++;
                return -1 * ++r
            }(a),
            o = [];
        if (a.snapToLines) {
            var u;
            switch (a.vertical) {
                case "":
                    o = ["+y", "-y"], u = "height";
                    break;
                case "rl":
                    o = ["+x", "-x"], u = "width";
                    break;
                case "lr":
                    o = ["-x", "+x"], u = "width"
            }
            var l = n.lineHeight,
                c = l * Math.round(s),
                h = i[u] + l,
                d = o[0];
            Math.abs(c) > h && (c = c < 0 ? -1 : 1, c *= Math.ceil(h / l) * l), s < 0 && (c += "" === a.vertical ? i.height : i.width, o = o.reverse()), n.move(d, c)
        } else {
            var p = n.lineHeight / i.height * 100;
            switch (a.lineAlign) {
                case "middle":
                    s -= p / 2;
                    break;
                case "end":
                    s -= p
            }
            switch (a.vertical) {
                case "":
                    e.applyStyles({
                        top: e.formatStyle(s, "%")
                    });
                    break;
                case "rl":
                    e.applyStyles({
                        left: e.formatStyle(s, "%")
                    });
                    break;
                case "lr":
                    e.applyStyles({
                        right: e.formatStyle(s, "%")
                    })
            }
            o = ["+y", "-x", "+x", "-y"], n = new Qi(e)
        }
        var f = function(t, e) {
            for (var n, a = new Qi(t), s = 1, o = 0; o < e.length; o++) {
                for (; t.overlapsOppositeAxis(i, e[o]) || t.within(i) && t.overlapsAny(r);) t.move(e[o]);
                if (t.within(i)) return t;
                var u = t.intersectPercentage(i);
                s > u && (n = new Qi(t), s = u), t = new Qi(a)
            }
            return n || a
        }(n, o);
        e.move(f.toCSSCompatValues(i))
    }

    function Zi() {}
    $i.prototype.applyStyles = function(t, e) {
        for (var i in e = e || this.div, t) t.hasOwnProperty(i) && (e.style[i] = t[i])
    }, $i.prototype.formatStyle = function(t, e) {
        return 0 === t ? 0 : t + e
    }, Ki.prototype = Mi($i.prototype), Ki.prototype.constructor = Ki, Qi.prototype.move = function(t, e) {
        switch (e = void 0 !== e ? e : this.lineHeight, t) {
            case "+x":
                this.left += e, this.right += e;
                break;
            case "-x":
                this.left -= e, this.right -= e;
                break;
            case "+y":
                this.top += e, this.bottom += e;
                break;
            case "-y":
                this.top -= e, this.bottom -= e
        }
    }, Qi.prototype.overlaps = function(t) {
        return this.left < t.right && this.right > t.left && this.top < t.bottom && this.bottom > t.top
    }, Qi.prototype.overlapsAny = function(t) {
        for (var e = 0; e < t.length; e++)
            if (this.overlaps(t[e])) return !0;
        return !1
    }, Qi.prototype.within = function(t) {
        return this.top >= t.top && this.bottom <= t.bottom && this.left >= t.left && this.right <= t.right
    }, Qi.prototype.overlapsOppositeAxis = function(t, e) {
        switch (e) {
            case "+x":
                return this.left < t.left;
            case "-x":
                return this.right > t.right;
            case "+y":
                return this.top < t.top;
            case "-y":
                return this.bottom > t.bottom
        }
    }, Qi.prototype.intersectPercentage = function(t) {
        return Math.max(0, Math.min(this.right, t.right) - Math.max(this.left, t.left)) * Math.max(0, Math.min(this.bottom, t.bottom) - Math.max(this.top, t.top)) / (this.height * this.width)
    }, Qi.prototype.toCSSCompatValues = function(t) {
        return {
            top: this.top - t.top,
            bottom: t.bottom - this.bottom,
            left: this.left - t.left,
            right: t.right - this.right,
            height: this.height,
            width: this.width
        }
    }, Qi.getSimpleBoxPosition = function(t) {
        var e = t.div ? t.div.offsetHeight : t.tagName ? t.offsetHeight : 0,
            i = t.div ? t.div.offsetWidth : t.tagName ? t.offsetWidth : 0,
            r = t.div ? t.div.offsetTop : t.tagName ? t.offsetTop : 0;
        return {
            left: (t = t.div ? t.div.getBoundingClientRect() : t.tagName ? t.getBoundingClientRect() : t).left,
            right: t.right,
            top: t.top || r,
            height: t.height || e,
            bottom: t.bottom || r + (t.height || e),
            width: t.width || i
        }
    }, Zi.StringDecoder = function() {
        return {
            decode: function(t) {
                if (!t) return "";
                if ("string" != typeof t) throw new Error("Error - expected string data.");
                return decodeURIComponent(encodeURIComponent(t))
            }
        }
    }, Zi.convertCueToDOMTree = function(t, e) {
        return t && e ? zi(t, e) : null
    };
    Zi.processCues = function(t, e, i) {
        if (!t || !e || !i) return null;
        for (; i.firstChild;) i.removeChild(i.firstChild);
        var r = t.document.createElement("div");
        if (r.style.position = "absolute", r.style.left = "0", r.style.right = "0", r.style.top = "0", r.style.bottom = "0", r.style.margin = "1.5%", i.appendChild(r), function(t) {
                for (var e = 0; e < t.length; e++)
                    if (t[e].hasBeenReset || !t[e].displayState) return !0;
                return !1
            }(e)) {
            var n = [],
                a = Qi.getSimpleBoxPosition(r),
                s = {
                    font: Math.round(.05 * a.height * 100) / 100 + "px sans-serif"
                };
            ! function() {
                for (var i, o, u = 0; u < e.length; u++) o = e[u], i = new Ki(t, o, s), r.appendChild(i.div), Ji(0, i, a, n), o.displayState = i.div, n.push(Qi.getSimpleBoxPosition(i))
            }()
        } else
            for (var o = 0; o < e.length; o++) r.appendChild(e[o].displayState)
    }, Zi.Parser = function(t, e, i) {
        i || (i = e, e = {}), e || (e = {}), this.window = t, this.vttjs = e, this.state = "INITIAL", this.buffer = "", this.decoder = i || new TextDecoder("utf8"), this.regionList = []
    }, Zi.Parser.prototype = {
        reportOrThrowError: function(t) {
            if (!(t instanceof Ui)) throw t;
            this.onparsingerror && this.onparsingerror(t)
        },
        parse: function(t) {
            var e = this;

            function i() {
                for (var t = e.buffer, i = 0; i < t.length && "\r" !== t[i] && "\n" !== t[i];) ++i;
                var r = t.substr(0, i);
                return "\r" === t[i] && ++i, "\n" === t[i] && ++i, e.buffer = t.substr(i), r
            }

            function r(t) {
                t.match(/X-TIMESTAMP-MAP/) ? ji(t, (function(t, i) {
                    switch (t) {
                        case "X-TIMESTAMP-MAP":
                            ! function(t) {
                                var i = new Bi;
                                ji(t, (function(t, e) {
                                    switch (t) {
                                        case "MPEGT":
                                            i.integer(t + "S", e);
                                            break;
                                        case "LOCA":
                                            i.set(t + "L", Ni(e))
                                    }
                                }), /[^\d]:/, /,/), e.ontimestampmap && e.ontimestampmap({
                                    MPEGTS: i.get("MPEGTS"),
                                    LOCAL: i.get("LOCAL")
                                })
                            }(i)
                    }
                }), /=/) : ji(t, (function(t, i) {
                    switch (t) {
                        case "Region":
                            ! function(t) {
                                var i = new Bi;
                                if (ji(t, (function(t, e) {
                                        switch (t) {
                                            case "id":
                                                i.set(t, e);
                                                break;
                                            case "width":
                                                i.percent(t, e);
                                                break;
                                            case "lines":
                                                i.integer(t, e);
                                                break;
                                            case "regionanchor":
                                            case "viewportanchor":
                                                var r = e.split(",");
                                                if (2 !== r.length) break;
                                                var n = new Bi;
                                                if (n.percent("x", r[0]), n.percent("y", r[1]), !n.has("x") || !n.has("y")) break;
                                                i.set(t + "X", n.get("x")), i.set(t + "Y", n.get("y"));
                                                break;
                                            case "scroll":
                                                i.alt(t, e, ["up"])
                                        }
                                    }), /=/, /\s/), i.has("id")) {
                                    var r = new(e.vttjs.VTTRegion || e.window.VTTRegion);
                                    r.width = i.get("width", 100), r.lines = i.get("lines", 3), r.regionAnchorX = i.get("regionanchorX", 0), r.regionAnchorY = i.get("regionanchorY", 100), r.viewportAnchorX = i.get("viewportanchorX", 0), r.viewportAnchorY = i.get("viewportanchorY", 100), r.scroll = i.get("scroll", ""), e.onregion && e.onregion(r), e.regionList.push({
                                        id: i.get("id"),
                                        region: r
                                    })
                                }
                            }(i)
                    }
                }), /:/)
            }
            t && (e.buffer += e.decoder.decode(t, {
                stream: !0
            }));
            try {
                var n;
                if ("INITIAL" === e.state) {
                    if (!/\r\n|\n/.test(e.buffer)) return this;
                    var a = (n = i()).match(/^WEBVTT([ \t].*)?$/);
                    if (!a || !a[0]) throw new Ui(Ui.Errors.BadSignature);
                    e.state = "HEADER"
                }
                for (var s = !1; e.buffer;) {
                    if (!/\r\n|\n/.test(e.buffer)) return this;
                    switch (s ? s = !1 : n = i(), e.state) {
                        case "HEADER":
                            /:/.test(n) ? r(n) : n || (e.state = "ID");
                            continue;
                        case "NOTE":
                            n || (e.state = "ID");
                            continue;
                        case "ID":
                            if (/^NOTE($|[ \t])/.test(n)) {
                                e.state = "NOTE";
                                break
                            }
                            if (!n) continue;
                            if (e.cue = new(e.vttjs.VTTCue || e.window.VTTCue)(0, 0, ""), e.state = "CUE", -1 === n.indexOf("--\x3e")) {
                                e.cue.id = n;
                                continue
                            }
                        case "CUE":
                            try {
                                Fi(n, e.cue, e.regionList)
                            } catch (t) {
                                e.reportOrThrowError(t), e.cue = null, e.state = "BADCUE";
                                continue
                            }
                            e.state = "CUETEXT";
                            continue;
                        case "CUETEXT":
                            var o = -1 !== n.indexOf("--\x3e");
                            if (!n || o && (s = !0)) {
                                e.oncue && e.oncue(e.cue), e.cue = null, e.state = "ID";
                                continue
                            }
                            e.cue.text && (e.cue.text += "\n"), e.cue.text += n;
                            continue;
                        case "BADCUE":
                            n || (e.state = "ID");
                            continue
                    }
                }
            } catch (t) {
                e.reportOrThrowError(t), "CUETEXT" === e.state && e.cue && e.oncue && e.oncue(e.cue), e.cue = null, e.state = "INITIAL" === e.state ? "BADWEBVTT" : "BADCUE"
            }
            return this
        },
        flush: function() {
            try {
                if (this.buffer += this.decoder.decode(), (this.cue || "HEADER" === this.state) && (this.buffer += "\n\n", this.parse()), "INITIAL" === this.state) throw new Ui(Ui.Errors.BadSignature)
            } catch (t) {
                this.reportOrThrowError(t)
            }
            return this.onflush && this.onflush(), this
        }
    };
    var tr = Zi,
        er = Object.freeze({
            default: tr,
            __moduleExports: tr
        }),
        ir = {
            "": 1,
            lr: 1,
            rl: 1
        },
        rr = {
            start: 1,
            middle: 1,
            end: 1,
            left: 1,
            right: 1
        };

    function nr(t) {
        return "string" == typeof t && (!!rr[t.toLowerCase()] && t.toLowerCase())
    }

    function ar(t, e, i) {
        this.hasBeenReset = !1;
        var r = "",
            n = !1,
            a = t,
            s = e,
            o = i,
            u = null,
            l = "",
            c = !0,
            h = "auto",
            d = "start",
            p = 50,
            f = "middle",
            m = 50,
            g = "middle";
        Object.defineProperties(this, {
            id: {
                enumerable: !0,
                get: function() {
                    return r
                },
                set: function(t) {
                    r = "" + t
                }
            },
            pauseOnExit: {
                enumerable: !0,
                get: function() {
                    return n
                },
                set: function(t) {
                    n = !!t
                }
            },
            startTime: {
                enumerable: !0,
                get: function() {
                    return a
                },
                set: function(t) {
                    if ("number" != typeof t) throw new TypeError("Start time must be set to a number.");
                    a = t, this.hasBeenReset = !0
                }
            },
            endTime: {
                enumerable: !0,
                get: function() {
                    return s
                },
                set: function(t) {
                    if ("number" != typeof t) throw new TypeError("End time must be set to a number.");
                    s = t, this.hasBeenReset = !0
                }
            },
            text: {
                enumerable: !0,
                get: function() {
                    return o
                },
                set: function(t) {
                    o = "" + t, this.hasBeenReset = !0
                }
            },
            region: {
                enumerable: !0,
                get: function() {
                    return u
                },
                set: function(t) {
                    u = t, this.hasBeenReset = !0
                }
            },
            vertical: {
                enumerable: !0,
                get: function() {
                    return l
                },
                set: function(t) {
                    var e = function(t) {
                        return "string" == typeof t && (!!ir[t.toLowerCase()] && t.toLowerCase())
                    }(t);
                    if (!1 === e) throw new SyntaxError("An invalid or illegal string was specified.");
                    l = e, this.hasBeenReset = !0
                }
            },
            snapToLines: {
                enumerable: !0,
                get: function() {
                    return c
                },
                set: function(t) {
                    c = !!t, this.hasBeenReset = !0
                }
            },
            line: {
                enumerable: !0,
                get: function() {
                    return h
                },
                set: function(t) {
                    if ("number" != typeof t && "auto" !== t) throw new SyntaxError("An invalid number or illegal string was specified.");
                    h = t, this.hasBeenReset = !0
                }
            },
            lineAlign: {
                enumerable: !0,
                get: function() {
                    return d
                },
                set: function(t) {
                    var e = nr(t);
                    if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                    d = e, this.hasBeenReset = !0
                }
            },
            position: {
                enumerable: !0,
                get: function() {
                    return p
                },
                set: function(t) {
                    if (t < 0 || t > 100) throw new Error("Position must be between 0 and 100.");
                    p = t, this.hasBeenReset = !0
                }
            },
            positionAlign: {
                enumerable: !0,
                get: function() {
                    return f
                },
                set: function(t) {
                    var e = nr(t);
                    if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                    f = e, this.hasBeenReset = !0
                }
            },
            size: {
                enumerable: !0,
                get: function() {
                    return m
                },
                set: function(t) {
                    if (t < 0 || t > 100) throw new Error("Size must be between 0 and 100.");
                    m = t, this.hasBeenReset = !0
                }
            },
            align: {
                enumerable: !0,
                get: function() {
                    return g
                },
                set: function(t) {
                    var e = nr(t);
                    if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                    g = e, this.hasBeenReset = !0
                }
            }
        }), this.displayState = void 0
    }
    ar.prototype.getCueAsHTML = function() {
        return WebVTT.convertCueToDOMTree(window, this.text)
    };
    var sr = ar,
        or = Object.freeze({
            default: sr,
            __moduleExports: sr
        }),
        ur = {
            "": !0,
            up: !0
        };

    function lr(t) {
        return "number" == typeof t && t >= 0 && t <= 100
    }
    var cr = function() {
            var t = 100,
                e = 3,
                i = 0,
                r = 100,
                n = 0,
                a = 100,
                s = "";
            Object.defineProperties(this, {
                width: {
                    enumerable: !0,
                    get: function() {
                        return t
                    },
                    set: function(e) {
                        if (!lr(e)) throw new Error("Width must be between 0 and 100.");
                        t = e
                    }
                },
                lines: {
                    enumerable: !0,
                    get: function() {
                        return e
                    },
                    set: function(t) {
                        if ("number" != typeof t) throw new TypeError("Lines must be set to a number.");
                        e = t
                    }
                },
                regionAnchorY: {
                    enumerable: !0,
                    get: function() {
                        return r
                    },
                    set: function(t) {
                        if (!lr(t)) throw new Error("RegionAnchorX must be between 0 and 100.");
                        r = t
                    }
                },
                regionAnchorX: {
                    enumerable: !0,
                    get: function() {
                        return i
                    },
                    set: function(t) {
                        if (!lr(t)) throw new Error("RegionAnchorY must be between 0 and 100.");
                        i = t
                    }
                },
                viewportAnchorY: {
                    enumerable: !0,
                    get: function() {
                        return a
                    },
                    set: function(t) {
                        if (!lr(t)) throw new Error("ViewportAnchorY must be between 0 and 100.");
                        a = t
                    }
                },
                viewportAnchorX: {
                    enumerable: !0,
                    get: function() {
                        return n
                    },
                    set: function(t) {
                        if (!lr(t)) throw new Error("ViewportAnchorX must be between 0 and 100.");
                        n = t
                    }
                },
                scroll: {
                    enumerable: !0,
                    get: function() {
                        return s
                    },
                    set: function(t) {
                        var e = function(t) {
                            return "string" == typeof t && (!!ur[t.toLowerCase()] && t.toLowerCase())
                        }(t);
                        if (!1 === e) throw new SyntaxError("An invalid or illegal string was specified.");
                        s = e
                    }
                }
            })
        },
        hr = Object.freeze({
            default: cr,
            __moduleExports: cr
        }),
        dr = er && tr || er,
        pr = or && sr || or,
        fr = hr && cr || hr,
        mr = e((function(t) {
            var e = t.exports = {
                WebVTT: dr,
                VTTCue: pr,
                VTTRegion: fr
            };
            r.vttjs = e, r.WebVTT = e.WebVTT;
            var i = e.VTTCue,
                n = e.VTTRegion,
                a = r.VTTCue,
                s = r.VTTRegion;
            e.shim = function() {
                r.VTTCue = i, r.VTTRegion = n
            }, e.restore = function() {
                r.VTTCue = a, r.VTTRegion = s
            }, r.VTTCue || e.shim()
        }));
    mr.WebVTT, mr.VTTCue, mr.VTTRegion;
    var gr = function(t) {
        function e() {
            var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {};
            y(this, e), i.reportTouchActivity = !1;
            var n = _(this, t.call(this, null, i, r));
            return n.hasStarted_ = !1, n.on("playing", (function() {
                this.hasStarted_ = !0
            })), n.on("loadstart", (function() {
                this.hasStarted_ = !1
            })), Ri.names.forEach((function(t) {
                var e = Ri[t];
                i && i[e.getterName] && (n[e.privateName] = i[e.getterName])
            })), n.featuresProgressEvents || n.manualProgressOn(), n.featuresTimeupdateEvents || n.manualTimeUpdatesOn(), ["Text", "Audio", "Video"].forEach((function(t) {
                !1 === i["native" + t + "Tracks"] && (n["featuresNative" + t + "Tracks"] = !1)
            })), !1 === i.nativeCaptions || !1 === i.nativeTextTracks ? n.featuresNativeTextTracks = !1 : !0 !== i.nativeCaptions && !0 !== i.nativeTextTracks || (n.featuresNativeTextTracks = !0), n.featuresNativeTextTracks || n.emulateTextTracks(), n.autoRemoteTextTracks_ = new Ri.text.ListClass, n.initTrackListeners(), i.nativeControlsForTouch || n.emitTapEvents(), n.constructor && (n.name_ = n.constructor.name || "Unknown Tech"), n
        }
        return v(e, t), e.prototype.triggerSourceset = function(t) {
            var e = this;
            this.isReady_ || this.one("ready", (function() {
                return e.setTimeout((function() {
                    return e.triggerSourceset(t)
                }), 1)
            })), this.trigger({
                src: t,
                type: "sourceset"
            })
        }, e.prototype.manualProgressOn = function() {
            this.on("durationchange", this.onDurationChange), this.manualProgress = !0, this.one("ready", this.trackProgress)
        }, e.prototype.manualProgressOff = function() {
            this.manualProgress = !1, this.stopTrackingProgress(), this.off("durationchange", this.onDurationChange)
        }, e.prototype.trackProgress = function(t) {
            this.stopTrackingProgress(), this.progressInterval = this.setInterval(Ot(this, (function() {
                var t = this.bufferedPercent();
                this.bufferedPercent_ !== t && this.trigger("progress"), this.bufferedPercent_ = t, 1 === t && this.stopTrackingProgress()
            })), 500)
        }, e.prototype.onDurationChange = function(t) {
            this.duration_ = this.duration()
        }, e.prototype.buffered = function() {
            return ge(0, 0)
        }, e.prototype.bufferedPercent = function() {
            return ye(this.buffered(), this.duration_)
        }, e.prototype.stopTrackingProgress = function() {
            this.clearInterval(this.progressInterval)
        }, e.prototype.manualTimeUpdatesOn = function() {
            this.manualTimeUpdates = !0, this.on("play", this.trackCurrentTime), this.on("pause", this.stopTrackingCurrentTime)
        }, e.prototype.manualTimeUpdatesOff = function() {
            this.manualTimeUpdates = !1, this.stopTrackingCurrentTime(), this.off("play", this.trackCurrentTime), this.off("pause", this.stopTrackingCurrentTime)
        }, e.prototype.trackCurrentTime = function() {
            this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = this.setInterval((function() {
                this.trigger({
                    type: "timeupdate",
                    target: this,
                    manuallyTriggered: !0
                })
            }), 250)
        }, e.prototype.stopTrackingCurrentTime = function() {
            this.clearInterval(this.currentTimeInterval), this.trigger({
                type: "timeupdate",
                target: this,
                manuallyTriggered: !0
            })
        }, e.prototype.dispose = function() {
            this.clearTracks(xi.names), this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), t.prototype.dispose.call(this)
        }, e.prototype.clearTracks = function(t) {
            var e = this;
            (t = [].concat(t)).forEach((function(t) {
                for (var i = e[t + "Tracks"]() || [], r = i.length; r--;) {
                    var n = i[r];
                    "text" === t && e.removeRemoteTextTrack(n), i.removeTrack(n)
                }
            }))
        }, e.prototype.cleanupAutoTextTracks = function() {
            for (var t = this.autoRemoteTextTracks_ || [], e = t.length; e--;) {
                var i = t[e];
                this.removeRemoteTextTrack(i)
            }
        }, e.prototype.reset = function() {}, e.prototype.error = function(t) {
            return void 0 !== t && (this.error_ = new Ce(t), this.trigger("error")), this.error_
        }, e.prototype.played = function() {
            return this.hasStarted_ ? ge(0, 0) : ge()
        }, e.prototype.setCurrentTime = function() {
            this.manualTimeUpdates && this.trigger({
                type: "timeupdate",
                target: this,
                manuallyTriggered: !0
            })
        }, e.prototype.initTrackListeners = function() {
            var t = this;
            xi.names.forEach((function(e) {
                var i = xi[e],
                    r = function() {
                        t.trigger(e + "trackchange")
                    },
                    n = t[i.getterName]();
                n.addEventListener("removetrack", r), n.addEventListener("addtrack", r), t.on("dispose", (function() {
                    n.removeEventListener("removetrack", r), n.removeEventListener("addtrack", r)
                }))
            }))
        }, e.prototype.addWebVttScript_ = function() {
            var t = this;
            if (!r.WebVTT)
                if (u.body.contains(this.el())) {
                    if (!this.options_["vtt.js"] && w(mr) && Object.keys(mr).length > 0) return void this.trigger("vttjsloaded");
                    var e = u.createElement("script");
                    e.src = this.options_["vtt.js"] || "https://vjs.zencdn.net/vttjs/0.14.1/vtt.min.js", e.onload = function() {
                        t.trigger("vttjsloaded")
                    }, e.onerror = function() {
                        t.trigger("vttjserror")
                    }, this.on("dispose", (function() {
                        e.onload = null, e.onerror = null
                    })), r.WebVTT = !0, this.el().parentNode.appendChild(e)
                } else this.ready(this.addWebVttScript_)
        }, e.prototype.emulateTextTracks = function() {
            var t = this,
                e = this.textTracks(),
                i = this.remoteTextTracks(),
                r = function(t) {
                    return e.addTrack(t.track)
                },
                n = function(t) {
                    return e.removeTrack(t.track)
                };
            i.on("addtrack", r), i.on("removetrack", n), this.addWebVttScript_();
            var a = function() {
                    return t.trigger("texttrackchange")
                },
                s = function() {
                    a();
                    for (var t = 0; t < e.length; t++) {
                        var i = e[t];
                        i.removeEventListener("cuechange", a), "showing" === i.mode && i.addEventListener("cuechange", a)
                    }
                };
            s(), e.addEventListener("change", s), e.addEventListener("addtrack", s), e.addEventListener("removetrack", s), this.on("dispose", (function() {
                i.off("addtrack", r), i.off("removetrack", n), e.removeEventListener("change", s), e.removeEventListener("addtrack", s), e.removeEventListener("removetrack", s);
                for (var t = 0; t < e.length; t++) {
                    e[t].removeEventListener("cuechange", a)
                }
            }))
        }, e.prototype.addTextTrack = function(t, e, i) {
            if (!t) throw new Error("TextTrack kind is required but was not provided");
            return function(t, e, i, r) {
                var n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                    a = t.textTracks();
                n.kind = e, i && (n.label = i), r && (n.language = r), n.tech = t;
                var s = new Ri.text.TrackClass(n);
                return a.addTrack(s), s
            }(this, t, e, i)
        }, e.prototype.createRemoteTextTrack = function(t) {
            var e = zt(t, {
                tech: this
            });
            return new Di.remoteTextEl.TrackClass(e)
        }, e.prototype.addRemoteTextTrack = function() {
            var t = this,
                e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                i = arguments[1],
                r = this.createRemoteTextTrack(e);
            return !0 !== i && !1 !== i && (p.warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'), i = !0), this.remoteTextTrackEls().addTrackElement_(r), this.remoteTextTracks().addTrack(r.track), !0 !== i && this.ready((function() {
                return t.autoRemoteTextTracks_.addTrack(r.track)
            })), r
        }, e.prototype.removeRemoteTextTrack = function(t) {
            var e = this.remoteTextTrackEls().getTrackElementByTrack_(t);
            this.remoteTextTrackEls().removeTrackElement_(e), this.remoteTextTracks().removeTrack(t), this.autoRemoteTextTracks_.removeTrack(t)
        }, e.prototype.getVideoPlaybackQuality = function() {
            return {}
        }, e.prototype.setPoster = function() {}, e.prototype.playsinline = function() {}, e.prototype.setPlaysinline = function() {}, e.prototype.overrideNativeAudioTracks = function() {}, e.prototype.overrideNativeVideoTracks = function() {}, e.prototype.canPlayType = function() {
            return ""
        }, e.canPlayType = function() {
            return ""
        }, e.canPlaySource = function(t, i) {
            return e.canPlayType(t.type)
        }, e.isTech = function(t) {
            return t.prototype instanceof e || t instanceof e || t === e
        }, e.registerTech = function(t, i) {
            if (e.techs_ || (e.techs_ = {}), !e.isTech(i)) throw new Error("Tech " + t + " must be a Tech");
            if (!e.canPlayType) throw new Error("Techs must have a static canPlayType method on them");
            if (!e.canPlaySource) throw new Error("Techs must have a static canPlaySource method on them");
            return t = Wt(t), e.techs_[t] = i, "Tech" !== t && e.defaultTechOrder_.push(t), i
        }, e.getTech = function(t) {
            if (t) return t = Wt(t), e.techs_ && e.techs_[t] ? e.techs_[t] : r && r.videojs && r.videojs[t] ? (p.warn("The " + t + " tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"), r.videojs[t]) : void 0
        }, e
    }(Gt);
    Ri.names.forEach((function(t) {
        var e = Ri[t];
        gr.prototype[e.getterName] = function() {
            return this[e.privateName] = this[e.privateName] || new e.ListClass, this[e.privateName]
        }
    })), gr.prototype.featuresVolumeControl = !0, gr.prototype.featuresMuteControl = !0, gr.prototype.featuresFullscreenResize = !1, gr.prototype.featuresPlaybackRate = !1, gr.prototype.featuresProgressEvents = !1, gr.prototype.featuresSourceset = !1, gr.prototype.featuresTimeupdateEvents = !1, gr.prototype.featuresNativeTextTracks = !1, gr.withSourceHandlers = function(t) {
        t.registerSourceHandler = function(e, i) {
            var r = t.sourceHandlers;
            r || (r = t.sourceHandlers = []), void 0 === i && (i = r.length), r.splice(i, 0, e)
        }, t.canPlayType = function(e) {
            for (var i = t.sourceHandlers || [], r = void 0, n = 0; n < i.length; n++)
                if (r = i[n].canPlayType(e)) return r;
            return ""
        }, t.selectSourceHandler = function(e, i) {
            for (var r = t.sourceHandlers || [], n = 0; n < r.length; n++)
                if (r[n].canHandleSource(e, i)) return r[n];
            return null
        }, t.canPlaySource = function(e, i) {
            var r = t.selectSourceHandler(e, i);
            return r ? r.canHandleSource(e, i) : ""
        };
        ["seekable", "seeking", "duration"].forEach((function(t) {
            var e = this[t];
            "function" == typeof e && (this[t] = function() {
                return this.sourceHandler_ && this.sourceHandler_[t] ? this.sourceHandler_[t].apply(this.sourceHandler_, arguments) : e.apply(this, arguments)
            })
        }), t.prototype), t.prototype.setSource = function(e) {
            var i = t.selectSourceHandler(e, this.options_);
            i || (t.nativeSourceHandler ? i = t.nativeSourceHandler : p.error("No source handler found for the current source.")), this.disposeSourceHandler(), this.off("dispose", this.disposeSourceHandler), i !== t.nativeSourceHandler && (this.currentSource_ = e), this.sourceHandler_ = i.handleSource(e, this, this.options_), this.on("dispose", this.disposeSourceHandler)
        }, t.prototype.disposeSourceHandler = function() {
            this.currentSource_ && (this.clearTracks(["audio", "video"]), this.currentSource_ = null), this.cleanupAutoTextTracks(), this.sourceHandler_ && (this.sourceHandler_.dispose && this.sourceHandler_.dispose(), this.sourceHandler_ = null)
        }
    }, Gt.registerComponent("Tech", gr), gr.registerTech("Tech", gr), gr.defaultTechOrder_ = [];
    var yr = {},
        vr = {},
        _r = {};

    function br(t, e, i) {
        t.setTimeout((function() {
            return function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    r = arguments[2],
                    n = arguments[3],
                    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
                    s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                    o = i[0],
                    u = i.slice(1);
                if ("string" == typeof o) t(e, yr[o], r, n, a, s);
                else if (o) {
                    var l = Ar(n, o);
                    if (!l.setSource) return a.push(l), t(e, u, r, n, a, s);
                    l.setSource(C({}, e), (function(i, o) {
                        if (i) return t(e, u, r, n, a, s);
                        a.push(l), t(o, e.type === o.type ? u : yr[o.type], r, n, a, s)
                    }))
                } else u.length ? t(e, u, r, n, a, s) : s ? r(e, a) : t(e, yr["*"], r, n, a, !0)
            }(e, yr[e.type], i, t)
        }), 1)
    }

    function Tr(t, e, i) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            n = "call" + Wt(i),
            a = t.reduce(Er(n), r),
            s = a === _r,
            o = s ? null : e[i](a);
        return wr(t, i, o, s), o
    }
    var Sr = {
            buffered: 1,
            currentTime: 1,
            duration: 1,
            seekable: 1,
            played: 1,
            paused: 1
        },
        kr = {
            setCurrentTime: 1
        },
        Cr = {
            play: 1,
            pause: 1
        };

    function Er(t) {
        return function(e, i) {
            return e === _r ? _r : i[t] ? i[t](e) : e
        }
    }

    function wr(t, e, i, r) {
        for (var n = t.length - 1; n >= 0; n--) {
            var a = t[n];
            a[e] && a[e](r, i)
        }
    }

    function Ar(t, e) {
        var i = vr[t.id()],
            r = null;
        if (null == i) return r = e(t), vr[t.id()] = [
            [e, r]
        ], r;
        for (var n = 0; n < i.length; n++) {
            var a = i[n],
                s = a[0],
                o = a[1];
            s === e && (r = o)
        }
        return null === r && (r = e(t), i.push([e, r])), r
    }
    var Lr = {
            opus: "video/ogg",
            ogv: "video/ogg",
            mp4: "video/mp4",
            mov: "video/mp4",
            m4v: "video/mp4",
            mkv: "video/x-matroska",
            mp3: "audio/mpeg",
            aac: "audio/aac",
            oga: "audio/ogg",
            m3u8: "application/x-mpegURL"
        },
        Pr = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                e = $e(t),
                i = Lr[e.toLowerCase()];
            return i || ""
        },
        Or = function(t, e) {
            if (!e) return "";
            if (t.cache_.source.src === e && t.cache_.source.type) return t.cache_.source.type;
            var i = t.cache_.sources.filter((function(t) {
                return t.src === e
            }));
            if (i.length) return i[0].type;
            for (var r = t.$$("source"), n = 0; n < r.length; n++) {
                var a = r[n];
                if (a.type && a.src && a.src === e) return a.type
            }
            return Pr(e)
        };

    function Ir(t) {
        var e = Pr(t.src);
        return !t.type && e && (t.type = e), t
    }
    var xr = function(t) {
        function e(i, r, n) {
            y(this, e);
            var a = zt({
                    createEl: !1
                }, r),
                s = _(this, t.call(this, i, a, n));
            if (r.playerOptions.sources && 0 !== r.playerOptions.sources.length) i.src(r.playerOptions.sources);
            else
                for (var o = 0, u = r.playerOptions.techOrder; o < u.length; o++) {
                    var l = Wt(u[o]),
                        c = gr.getTech(l);
                    if (l || (c = Gt.getComponent(l)), c && c.isSupported()) {
                        i.loadTech_(l);
                        break
                    }
                }
            return s
        }
        return v(e, t), e
    }(Gt);
    Gt.registerComponent("MediaLoader", xr);
    var Dr = function(t) {
        function e(i, r) {
            y(this, e);
            var n = _(this, t.call(this, i, r));
            return n.emitTapEvents(), n.enable(), n
        }
        return v(e, t), e.prototype.createEl = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div",
                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            i = C({
                innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
                className: this.buildCSSClass(),
                tabIndex: 0
            }, i), "button" === e && p.error("Creating a ClickableComponent with an HTML element of " + e + " is not supported; use a Button instead."), r = C({
                role: "button"
            }, r), this.tabIndex_ = i.tabIndex;
            var n = t.prototype.createEl.call(this, e, i, r);
            return this.createControlTextEl(n), n
        }, e.prototype.dispose = function() {
            this.controlTextEl_ = null, t.prototype.dispose.call(this)
        }, e.prototype.createControlTextEl = function(t) {
            return this.controlTextEl_ = M("span", {
                className: "vjs-control-text"
            }, {
                "aria-live": "polite"
            }), t && t.appendChild(this.controlTextEl_), this.controlText(this.controlText_, t), this.controlTextEl_
        }, e.prototype.controlText = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.el();
            if (void 0 === t) return this.controlText_ || "Need Text";
            var i = this.localize(t);
            this.controlText_ = t, U(this.controlTextEl_, i), this.nonIconControl || e.setAttribute("title", i)
        }, e.prototype.buildCSSClass = function() {
            return "vjs-control vjs-button " + t.prototype.buildCSSClass.call(this)
        }, e.prototype.enable = function() {
            this.enabled_ || (this.enabled_ = !0, this.removeClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "false"), void 0 !== this.tabIndex_ && this.el_.setAttribute("tabIndex", this.tabIndex_), this.on(["tap", "click"], this.handleClick), this.on("focus", this.handleFocus), this.on("blur", this.handleBlur))
        }, e.prototype.disable = function() {
            this.enabled_ = !1, this.addClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "true"), void 0 !== this.tabIndex_ && this.el_.removeAttribute("tabIndex"), this.off(["tap", "click"], this.handleClick), this.off("focus", this.handleFocus), this.off("blur", this.handleBlur)
        }, e.prototype.handleClick = function(t) {}, e.prototype.handleFocus = function(t) {
            _t(u, "keydown", Ot(this, this.handleKeyPress))
        }, e.prototype.handleKeyPress = function(e) {
            32 === e.which || 13 === e.which ? (e.preventDefault(), this.trigger("click")) : t.prototype.handleKeyPress && t.prototype.handleKeyPress.call(this, e)
        }, e.prototype.handleBlur = function(t) {
            bt(u, "keydown", Ot(this, this.handleKeyPress))
        }, e
    }(Gt);
    Gt.registerComponent("ClickableComponent", Dr);
    var Rr = function(t) {
        function e(i, r) {
            y(this, e);
            var n = _(this, t.call(this, i, r));
            return n.update(), i.on("posterchange", Ot(n, n.update)), n
        }
        return v(e, t), e.prototype.dispose = function() {
            this.player().off("posterchange", this.update), t.prototype.dispose.call(this)
        }, e.prototype.createEl = function() {
            return M("div", {
                className: "vjs-poster",
                tabIndex: -1
            })
        }, e.prototype.update = function(t) {
            var e = this.player().poster();
            this.setSrc(e), e ? this.show() : this.hide()
        }, e.prototype.setSrc = function(t) {
            var e = "";
            t && (e = 'url("' + t + '")'), this.el_.style.backgroundImage = e
        }, e.prototype.handleClick = function(t) {
            this.player_.controls() && (this.player_.paused() ? Le(this.player_.play()) : this.player_.pause())
        }, e
    }(Dr);
    Gt.registerComponent("PosterImage", Rr);
    var Mr = {
        monospace: "monospace",
        sansSerif: "sans-serif",
        serif: "serif",
        monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
        monospaceSerif: '"Courier New", monospace',
        proportionalSansSerif: "sans-serif",
        proportionalSerif: "serif",
        casual: '"Comic Sans MS", Impact, fantasy',
        script: '"Monotype Corsiva", cursive',
        smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif'
    };

    function Ur(t, e) {
        var i = void 0;
        if (4 === t.length) i = t[1] + t[1] + t[2] + t[2] + t[3] + t[3];
        else {
            if (7 !== t.length) throw new Error("Invalid color code provided, " + t + "; must be formatted as e.g. #f0e or #f604e2.");
            i = t.slice(1)
        }
        return "rgba(" + parseInt(i.slice(0, 2), 16) + "," + parseInt(i.slice(2, 4), 16) + "," + parseInt(i.slice(4, 6), 16) + "," + e + ")"
    }

    function Nr(t, e, i) {
        try {
            t.style[e] = i
        } catch (t) {
            return
        }
    }
    var Br = function(t) {
        function e(i, r, n) {
            y(this, e);
            var a = _(this, t.call(this, i, r, n));
            return i.on("loadstart", Ot(a, a.toggleDisplay)), i.on("texttrackchange", Ot(a, a.updateDisplay)), i.on("loadstart", Ot(a, a.preselectTrack)), i.ready(Ot(a, (function() {
                if (i.tech_ && i.tech_.featuresNativeTextTracks) this.hide();
                else {
                    i.on("fullscreenchange", Ot(this, this.updateDisplay));
                    for (var t = this.options_.playerOptions.tracks || [], e = 0; e < t.length; e++) this.player_.addRemoteTextTrack(t[e], !0);
                    this.preselectTrack()
                }
            }))), a
        }
        return v(e, t), e.prototype.preselectTrack = function() {
            for (var t = {
                    captions: 1,
                    subtitles: 1
                }, e = this.player_.textTracks(), i = this.player_.cache_.selectedLanguage, r = void 0, n = void 0, a = void 0, s = 0; s < e.length; s++) {
                var o = e[s];
                i && i.enabled && i.language === o.language ? o.kind === i.kind ? a = o : a || (a = o) : i && !i.enabled ? (a = null, r = null, n = null) : o.default && ("descriptions" !== o.kind || r ? o.kind in t && !n && (n = o) : r = o)
            }
            a ? a.mode = "showing" : n ? n.mode = "showing" : r && (r.mode = "showing")
        }, e.prototype.toggleDisplay = function() {
            this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks ? this.hide() : this.show()
        }, e.prototype.createEl = function() {
            return t.prototype.createEl.call(this, "div", {
                className: "vjs-text-track-display"
            }, {
                "aria-live": "off",
                "aria-atomic": "true"
            })
        }, e.prototype.clearDisplay = function() {
            "function" == typeof r.WebVTT && r.WebVTT.processCues(r, [], this.el_)
        }, e.prototype.updateDisplay = function() {
            var t = this.player_.textTracks();
            this.clearDisplay();
            for (var e = null, i = null, r = t.length; r--;) {
                var n = t[r];
                "showing" === n.mode && ("descriptions" === n.kind ? e = n : i = n)
            }
            i ? ("off" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "off"), this.updateForTrack(i)) : e && ("assertive" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "assertive"), this.updateForTrack(e))
        }, e.prototype.updateForTrack = function(t) {
            if ("function" == typeof r.WebVTT && t.activeCues) {
                for (var e = [], i = 0; i < t.activeCues.length; i++) e.push(t.activeCues[i]);
                if (r.WebVTT.processCues(r, e, this.el_), this.player_.textTrackSettings)
                    for (var n = this.player_.textTrackSettings.getValues(), a = e.length; a--;) {
                        var s = e[a];
                        if (s) {
                            var o = s.displayState;
                            if (n.color && (o.firstChild.style.color = n.color), n.textOpacity && Nr(o.firstChild, "color", Ur(n.color || "#fff", n.textOpacity)), n.backgroundColor && (o.firstChild.style.backgroundColor = n.backgroundColor), n.backgroundOpacity && Nr(o.firstChild, "backgroundColor", Ur(n.backgroundColor || "#000", n.backgroundOpacity)), n.windowColor && (n.windowOpacity ? Nr(o, "backgroundColor", Ur(n.windowColor, n.windowOpacity)) : o.style.backgroundColor = n.windowColor), n.edgeStyle && ("dropshadow" === n.edgeStyle ? o.firstChild.style.textShadow = "2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px #222" : "raised" === n.edgeStyle ? o.firstChild.style.textShadow = "1px 1px #222, 2px 2px #222, 3px 3px #222" : "depressed" === n.edgeStyle ? o.firstChild.style.textShadow = "1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px #222" : "uniform" === n.edgeStyle && (o.firstChild.style.textShadow = "0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px #222")), n.fontPercent && 1 !== n.fontPercent) {
                                var u = r.parseFloat(o.style.fontSize);
                                o.style.fontSize = u * n.fontPercent + "px", o.style.height = "auto", o.style.top = "auto", o.style.bottom = "2px"
                            }
                            n.fontFamily && "default" !== n.fontFamily && ("small-caps" === n.fontFamily ? o.firstChild.style.fontVariant = "small-caps" : o.firstChild.style.fontFamily = Mr[n.fontFamily])
                        }
                    }
            }
        }, e
    }(Gt);
    Gt.registerComponent("TextTrackDisplay", Br);
    var jr = function(t) {
        function e() {
            return y(this, e), _(this, t.apply(this, arguments))
        }
        return v(e, t), e.prototype.createEl = function() {
            var e = this.player_.isAudio(),
                i = this.localize(e ? "Audio Player" : "Video Player"),
                r = M("span", {
                    className: "vjs-control-text",
                    innerHTML: this.localize("{1} is loading.", [i])
                }),
                n = t.prototype.createEl.call(this, "div", {
                    className: "vjs-loading-spinner",
                    dir: "ltr"
                });
            return n.appendChild(r), n
        }, e
    }(Gt);
    Gt.registerComponent("LoadingSpinner", jr);
    var Fr = function(t) {
        function e() {
            return y(this, e), _(this, t.apply(this, arguments))
        }
        return v(e, t), e.prototype.createEl = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            t = "button", e = C({
                innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
                className: this.buildCSSClass()
            }, e), i = C({
                type: "button"
            }, i);
            var r = Gt.prototype.createEl.call(this, t, e, i);
            return this.createControlTextEl(r), r
        }, e.prototype.addChild = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = this.constructor.name;
            return p.warn("Adding an actionable (user controllable) child to a Button (" + i + ") is not supported; use a ClickableComponent instead."), Gt.prototype.addChild.call(this, t, e)
        }, e.prototype.enable = function() {
            t.prototype.enable.call(this), this.el_.removeAttribute("disabled")
        }, e.prototype.disable = function() {
            t.prototype.disable.call(this), this.el_.setAttribute("disabled", "disabled")
        }, e.prototype.handleKeyPress = function(e) {
            32 !== e.which && 13 !== e.which && t.prototype.handleKeyPress.call(this, e)
        }, e
    }(Dr);
    Gt.registerComponent("Button", Fr);
    var Hr = function(t) {
        function e(i, r) {
            y(this, e);
            var n = _(this, t.call(this, i, r));
            return n.mouseused_ = !1, n.on("mousedown", n.handleMouseDown), n
        }
        return v(e, t), e.prototype.buildCSSClass = function() {
            return "vjs-big-play-button"
        }, e.prototype.handleClick = function(t) {
            var e = this.player_.play();
            if (this.mouseused_ && t.clientX && t.clientY) Le(e);
            else {
                var i = this.player_.getChild("controlBar"),
                    r = i && i.getChild("playToggle");
                if (r) {
                    var n = function() {
                        return r.focus()
                    };
                    Ae(e) ? e.then(n, (function() {})) : this.setTimeout(n, 1)
                } else this.player_.focus()
            }
        }, e.prototype.handleKeyPress = function(e) {
            this.mouseused_ = !1, t.prototype.handleKeyPress.call(this, e)
        }, e.prototype.handleMouseDown = function(t) {
            this.mouseused_ = !0
        }, e
    }(Fr);
    Hr.prototype.controlText_ = "Play Video", Gt.registerComponent("BigPlayButton", Hr);
    var Vr = function(t) {
        function e(i, r) {
            y(this, e);
            var n = _(this, t.call(this, i, r));
            return n.controlText(r && r.controlText || n.localize("Close")), n
        }
        return v(e, t), e.prototype.buildCSSClass = function() {
            return "vjs-close-button " + t.prototype.buildCSSClass.call(this)
        }, e.prototype.handleClick = function(t) {
            this.trigger({
                type: "close",
                bubbles: !1
            })
        }, e
    }(Fr);
    Gt.registerComponent("CloseButton", Vr);
    var qr = function(t) {
        function e(i, r) {
            y(this, e);
            var n = _(this, t.call(this, i, r));
            return n.on(i, "play", n.handlePlay), n.on(i, "pause", n.handlePause), n.on(i, "ended", n.handleEnded), n
        }
        return v(e, t), e.prototype.buildCSSClass = function() {
            return "vjs-play-control " + t.prototype.buildCSSClass.call(this)
        }, e.prototype.handleClick = function(t) {
            this.player_.paused() ? this.player_.play() : this.player_.pause()
        }, e.prototype.handleSeeked = function(t) {
            this.removeClass("vjs-ended"), this.player_.paused() ? this.handlePause(t) : this.handlePlay(t)
        }, e.prototype.handlePlay = function(t) {
            this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.controlText("Pause")
        }, e.prototype.handlePause = function(t) {
            this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.controlText("Play")
        }, e.prototype.handleEnded = function(t) {
            this.removeClass("vjs-playing"), this.addClass("vjs-ended"), this.controlText("Replay"), this.one(this.player_, "seeked", this.handleSeeked)
        }, e
    }(Fr);
    qr.prototype.controlText_ = "Play", Gt.registerComponent("PlayToggle", qr);
    var Wr = function(t, e) {
            t = t < 0 ? 0 : t;
            var i = Math.floor(t % 60),
                r = Math.floor(t / 60 % 60),
                n = Math.floor(t / 3600),
                a = Math.floor(e / 60 % 60),
                s = Math.floor(e / 3600);
            return (isNaN(t) || t === 1 / 0) && (n = r = i = "-"), (n = n > 0 || s > 0 ? n + ":" : "") + (r = ((n || a >= 10) && r < 10 ? "0" + r : r) + ":") + (i = i < 10 ? "0" + i : i)
        },
        zr = Wr;

    function Gr(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
        return zr(t, e)
    }
    var Xr = function(t) {
        function e(i, r) {
            y(this, e);
            var n = _(this, t.call(this, i, r));
            return n.throttledUpdateContent = It(Ot(n, n.updateContent), 25), n.on(i, "timeupdate", n.throttledUpdateContent), n
        }
        return v(e, t), e.prototype.createEl = function(e) {
            var i = this.buildCSSClass(),
                r = t.prototype.createEl.call(this, "div", {
                    className: i + " vjs-time-control vjs-control",
                    innerHTML: '<span class="vjs-control-text">' + this.localize(this.labelText_) + " </span>"
                });
            return this.contentEl_ = M("span", {
                className: i + "-display"
            }, {
                "aria-live": "off"
            }), this.updateTextNode_(), r.appendChild(this.contentEl_), r
        }, e.prototype.dispose = function() {
            this.contentEl_ = null, this.textNode_ = null, t.prototype.dispose.call(this)
        }, e.prototype.updateTextNode_ = function() {
            if (this.contentEl_) {
                for (; this.contentEl_.firstChild;) this.contentEl_.removeChild(this.contentEl_.firstChild);
                this.textNode_ = u.createTextNode(this.formattedTime_ || this.formatTime_(0)), this.contentEl_.appendChild(this.textNode_)
            }
        }, e.prototype.formatTime_ = function(t) {
            return Gr(t)
        }, e.prototype.updateFormattedTime_ = function(t) {
            var e = this.formatTime_(t);
            e !== this.formattedTime_ && (this.formattedTime_ = e, this.requestAnimationFrame(this.updateTextNode_))
        }, e.prototype.updateContent = function(t) {}, e
    }(Gt);
    Xr.prototype.labelText_ = "Time", Xr.prototype.controlText_ = "Time", Gt.registerComponent("TimeDisplay", Xr);
    var Yr = function(t) {
        function e(i, r) {
            y(this, e);
            var n = _(this, t.call(this, i, r));
            return n.on(i, "ended", n.handleEnded), n
        }
        return v(e, t), e.prototype.buildCSSClass = function() {
            return "vjs-current-time"
        }, e.prototype.updateContent = function(t) {
            var e = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
            this.updateFormattedTime_(e)
        }, e.prototype.handleEnded = function(t) {
            this.player_.duration() && this.updateFormattedTime_(this.player_.duration())
        }, e
    }(Xr);
    Yr.prototype.labelText_ = "Current Time", Yr.prototype.controlText_ = "Current Time", Gt.registerComponent("CurrentTimeDisplay", Yr);
    var $r = function(t) {
        function e(i, r) {
            y(this, e);
            var n = _(this, t.call(this, i, r));
            return n.on(i, "durationchange", n.updateContent), n.on(i, "loadedmetadata", n.throttledUpdateContent), n
        }
        return v(e, t), e.prototype.buildCSSClass = function() {
            return "vjs-duration"
        }, e.prototype.updateContent = function(t) {
            var e = this.player_.duration();
            e && this.duration_ !== e && (this.duration_ = e, this.updateFormattedTime_(e))
        }, e
    }(Xr);
    $r.prototype.labelText_ = "Duration", $r.prototype.controlText_ = "Duration", Gt.registerComponent("DurationDisplay", $r);
    var Kr = function(t) {
        function e() {
            return y(this, e), _(this, t.apply(this, arguments))
        }
        return v(e, t), e.prototype.createEl = function() {
            return t.prototype.createEl.call(this, "div", {
                className: "vjs-time-control vjs-time-divider",
                innerHTML: "<div><span>/</span></div>"
            })
        }, e
    }(Gt);
    Gt.registerComponent("TimeDivider", Kr);
    var Qr = function(t) {
        function e(i, r) {
            y(this, e);
            var n = _(this, t.call(this, i, r));
            return n.on(i, "durationchange", n.throttledUpdateContent), n.on(i, "ended", n.handleEnded), n
        }
        return v(e, t), e.prototype.buildCSSClass = function() {
            return "vjs-remaining-time"
        }, e.prototype.formatTime_ = function(e) {
            return "-" + t.prototype.formatTime_.call(this, e)
        }, e.prototype.updateContent = function(t) {
            this.player_.duration() && (this.player_.remainingTimeDisplay ? this.updateFormattedTime_(this.player_.remainingTimeDisplay()) : this.updateFormattedTime_(this.player_.remainingTime()))
        }, e.prototype.handleEnded = function(t) {
            this.player_.duration() && this.updateFormattedTime_(0)
        }, e
    }(Xr);
    Qr.prototype.labelText_ = "Remaining Time", Qr.prototype.controlText_ = "Remaining Time", Gt.registerComponent("RemainingTimeDisplay", Qr);
    var Jr = function(t) {
        function e(i, r) {
            y(this, e);
            var n = _(this, t.call(this, i, r));
            return n.updateShowing(), n.on(n.player(), "durationchange", n.updateShowing), n
        }
        return v(e, t), e.prototype.createEl = function() {
            var e = t.prototype.createEl.call(this, "div", {
                className: "vjs-live-control vjs-control"
            });
            return this.contentEl_ = M("div", {
                className: "vjs-live-display",
                innerHTML: '<span class="vjs-control-text">' + this.localize("Stream Type") + " </span>" + this.localize("LIVE")
            }, {
                "aria-live": "off"
            }), e.appendChild(this.contentEl_), e
        }, e.prototype.dispose = function() {
            this.contentEl_ = null, t.prototype.dispose.call(this)
        }, e.prototype.updateShowing = function(t) {
            this.player().duration() === 1 / 0 ? this.show() : this.hide()
        }, e
    }(Gt);
    Gt.registerComponent("LiveDisplay", Jr);
    var Zr = function(t) {
        function e(i, r) {
            y(this, e);
            var n = _(this, t.call(this, i, r));
            return n.bar = n.getChild(n.options_.barName), n.vertical(!!n.options_.vertical), n.enable(), n
        }
        return v(e, t), e.prototype.enabled = function() {
            return this.enabled_
        }, e.prototype.enable = function() {
            this.enabled() || (this.on("mousedown", this.handleMouseDown), this.on("touchstart", this.handleMouseDown), this.on("focus", this.handleFocus), this.on("blur", this.handleBlur), this.on("click", this.handleClick), this.on(this.player_, "controlsvisible", this.update), this.playerEvent && this.on(this.player_, this.playerEvent, this.update), this.removeClass("disabled"), this.setAttribute("tabindex", 0), this.enabled_ = !0)
        }, e.prototype.disable = function() {
            if (this.enabled()) {
                var t = this.bar.el_.ownerDocument;
                this.off("mousedown", this.handleMouseDown), this.off("touchstart", this.handleMouseDown), this.off("focus", this.handleFocus), this.off("blur", this.handleBlur), this.off("click", this.handleClick), this.off(this.player_, "controlsvisible", this.update), this.off(t, "mousemove", this.handleMouseMove), this.off(t, "mouseup", this.handleMouseUp), this.off(t, "touchmove", this.handleMouseMove), this.off(t, "touchend", this.handleMouseUp), this.removeAttribute("tabindex"), this.addClass("disabled"), this.playerEvent && this.off(this.player_, this.playerEvent, this.update), this.enabled_ = !1
            }
        }, e.prototype.createEl = function(e) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return i.className = i.className + " vjs-slider", i = C({
                tabIndex: 0
            }, i), r = C({
                role: "slider",
                "aria-valuenow": 0,
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                tabIndex: 0
            }, r), t.prototype.createEl.call(this, e, i, r)
        }, e.prototype.handleMouseDown = function(t) {
            var e = this.bar.el_.ownerDocument;
            "mousedown" === t.type && t.preventDefault(), "touchstart" !== t.type || oe || t.preventDefault(), X(), this.addClass("vjs-sliding"), this.trigger("slideractive"), this.on(e, "mousemove", this.handleMouseMove), this.on(e, "mouseup", this.handleMouseUp), this.on(e, "touchmove", this.handleMouseMove), this.on(e, "touchend", this.handleMouseUp), this.handleMouseMove(t)
        }, e.prototype.handleMouseMove = function(t) {}, e.prototype.handleMouseUp = function() {
            var t = this.bar.el_.ownerDocument;
            Y(), this.removeClass("vjs-sliding"), this.trigger("sliderinactive"), this.off(t, "mousemove", this.handleMouseMove), this.off(t, "mouseup", this.handleMouseUp), this.off(t, "touchmove", this.handleMouseMove), this.off(t, "touchend", this.handleMouseUp), this.update()
        }, e.prototype.update = function() {
            if (this.el_) {
                var t = this.getPercent(),
                    e = this.bar;
                if (e) {
                    ("number" != typeof t || t != t || t < 0 || t === 1 / 0) && (t = 0);
                    var i = (100 * t).toFixed(2) + "%",
                        r = e.el().style;
                    return this.vertical() ? r.height = i : r.width = i, t
                }
            }
        }, e.prototype.calculateDistance = function(t) {
            var e = Q(this.el_, t);
            return this.vertical() ? e.y : e.x
        }, e.prototype.handleFocus = function() {
            this.on(this.bar.el_.ownerDocument, "keydown", this.handleKeyPress)
        }, e.prototype.handleKeyPress = function(t) {
            37 === t.which || 40 === t.which ? (t.preventDefault(), this.stepBack()) : 38 !== t.which && 39 !== t.which || (t.preventDefault(), this.stepForward())
        }, e.prototype.handleBlur = function() {
            this.off(this.bar.el_.ownerDocument, "keydown", this.handleKeyPress)
        }, e.prototype.handleClick = function(t) {
            t.stopImmediatePropagation(), t.preventDefault()
        }, e.prototype.vertical = function(t) {
            if (void 0 === t) return this.vertical_ || !1;
            this.vertical_ = !!t, this.vertical_ ? this.addClass("vjs-slider-vertical") : this.addClass("vjs-slider-horizontal")
        }, e
    }(Gt);
    Gt.registerComponent("Slider", Zr);
    var tn = function(t) {
        function e(i, r) {
            y(this, e);
            var n = _(this, t.call(this, i, r));
            return n.partEls_ = [], n.on(i, "progress", n.update), n
        }
        return v(e, t), e.prototype.createEl = function() {
            return t.prototype.createEl.call(this, "div", {
                className: "vjs-load-progress",
                innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Loaded") + "</span>: 0%</span>"
            })
        }, e.prototype.dispose = function() {
            this.partEls_ = null, t.prototype.dispose.call(this)
        }, e.prototype.update = function(t) {
            var e = this.player_.buffered(),
                i = this.player_.duration(),
                r = this.player_.bufferedEnd(),
                n = this.partEls_,
                a = function(t, e) {
                    var i = t / e || 0;
                    return 100 * (i >= 1 ? 1 : i) + "%"
                };
            this.el_.style.width = a(r, i);
            for (var s = 0; s < e.length; s++) {
                var o = e.start(s),
                    u = e.end(s),
                    l = n[s];
                l || (l = this.el_.appendChild(M()), n[s] = l), l.style.left = a(o, r), l.style.width = a(u - o, r)
            }
            for (var c = n.length; c > e.length; c--) this.el_.removeChild(n[c - 1]);
            n.length = e.length
        }, e
    }(Gt);
    Gt.registerComponent("LoadProgressBar", tn);
    var en = function(t) {
        function e() {
            return y(this, e), _(this, t.apply(this, arguments))
        }
        return v(e, t), e.prototype.createEl = function() {
            return t.prototype.createEl.call(this, "div", {
                className: "vjs-time-tooltip"
            })
        }, e.prototype.update = function(t, e, i) {
            var r = $(this.el_),
                n = $(this.player_.el()),
                a = t.width * e;
            if (n && r) {
                var s = t.left - n.left + a,
                    o = t.width - a + (n.right - t.right),
                    u = r.width / 2;
                s < u ? u += u - s : o < u && (u = o), u < 0 ? u = 0 : u > r.width && (u = r.width), this.el_.style.right = "-" + u + "px", U(this.el_, i)
            }
        }, e
    }(Gt);
    Gt.registerComponent("TimeTooltip", en);
    var rn = function(t) {
        function e() {
            return y(this, e), _(this, t.apply(this, arguments))
        }
        return v(e, t), e.prototype.createEl = function() {
            return t.prototype.createEl.call(this, "div", {
                className: "vjs-play-progress vjs-slider-bar",
                innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Progress") + "</span>: 0%</span>"
            })
        }, e.prototype.update = function(t, e) {
            var i = this;
            this.rafId_ && this.cancelAnimationFrame(this.rafId_), this.rafId_ = this.requestAnimationFrame((function() {
                var r = Gr(i.player_.scrubbing() ? i.player_.getCache().currentTime : i.player_.currentTime(), i.player_.duration()),
                    n = i.getChild("timeTooltip");
                n && n.update(t, e, r)
            }))
        }, e
    }(Gt);
    rn.prototype.options_ = {
        children: []
    }, te || ie || rn.prototype.options_.children.push("timeTooltip"), Gt.registerComponent("PlayProgressBar", rn);
    var nn = function(t) {
        function e(i, r) {
            y(this, e);
            var n = _(this, t.call(this, i, r));
            return n.update = It(Ot(n, n.update), 25), n
        }
        return v(e, t), e.prototype.createEl = function() {
            return t.prototype.createEl.call(this, "div", {
                className: "vjs-mouse-display"
            })
        }, e.prototype.update = function(t, e) {
            var i = this;
            this.rafId_ && this.cancelAnimationFrame(this.rafId_), this.rafId_ = this.requestAnimationFrame((function() {
                var r = i.player_.duration(),
                    n = Gr(e * r, r);
                i.el_.style.left = t.width * e + "px", i.getChild("timeTooltip").update(t, e, n)
            }))
        }, e
    }(Gt);
    nn.prototype.options_ = {
        children: ["timeTooltip"]
    }, Gt.registerComponent("MouseTimeDisplay", nn);
    var an = function(t) {
        function e(i, r) {
            y(this, e);
            var n = _(this, t.call(this, i, r));
            return n.setEventHandlers_(), n
        }
        return v(e, t), e.prototype.setEventHandlers_ = function() {
            var t = this;
            this.update = It(Ot(this, this.update), 30), this.on(this.player_, "timeupdate", this.update), this.on(this.player_, "ended", this.handleEnded), this.updateInterval = null, this.on(this.player_, ["playing"], (function() {
                t.clearInterval(t.updateInterval), t.updateInterval = t.setInterval((function() {
                    t.requestAnimationFrame((function() {
                        t.update()
                    }))
                }), 30)
            })), this.on(this.player_, ["ended", "pause", "waiting"], (function() {
                t.clearInterval(t.updateInterval)
            })), this.on(this.player_, ["timeupdate", "ended"], this.update)
        }, e.prototype.createEl = function() {
            return t.prototype.createEl.call(this, "div", {
                className: "vjs-progress-holder"
            }, {
                "aria-label": this.localize("Progress Bar")
            })
        }, e.prototype.update_ = function(t, e) {
            var i = this.player_.duration();
            this.el_.setAttribute("aria-valuenow", (100 * e).toFixed(2)), this.el_.setAttribute("aria-valuetext", this.localize("progress bar timing: currentTime={1} duration={2}", [Gr(t, i), Gr(i, i)], "{1} of {2}")), this.bar.update($(this.el_), e)
        }, e.prototype.update = function(e) {
            var i = t.prototype.update.call(this);
            return this.update_(this.getCurrentTime_(), i), i
        }, e.prototype.getCurrentTime_ = function() {
            return this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime()
        }, e.prototype.handleEnded = function(t) {
            this.update_(this.player_.duration(), 1)
        }, e.prototype.getPercent = function() {
            var t = this.getCurrentTime_() / this.player_.duration();
            return t >= 1 ? 1 : t || 0
        }, e.prototype.handleMouseDown = function(e) {
            rt(e) && (e.stopPropagation(), this.player_.scrubbing(!0), this.videoWasPlaying = !this.player_.paused(), this.player_.pause(), t.prototype.handleMouseDown.call(this, e))
        }, e.prototype.handleMouseMove = function(t) {
            if (rt(t)) {
                var e = this.calculateDistance(t) * this.player_.duration();
                e === this.player_.duration() && (e -= .1), this.player_.currentTime(e)
            }
        }, e.prototype.enable = function() {
            t.prototype.enable.call(this);
            var e = this.getChild("mouseTimeDisplay");
            e && e.show()
        }, e.prototype.disable = function() {
            t.prototype.disable.call(this);
            var e = this.getChild("mouseTimeDisplay");
            e && e.hide()
        }, e.prototype.handleMouseUp = function(e) {
            t.prototype.handleMouseUp.call(this, e), e && e.stopPropagation(), this.player_.scrubbing(!1), this.player_.trigger({
                type: "timeupdate",
                target: this,
                manuallyTriggered: !0
            }), this.videoWasPlaying && Le(this.player_.play())
        }, e.prototype.stepForward = function() {
            this.player_.currentTime(this.player_.currentTime() + 5)
        }, e.prototype.stepBack = function() {
            this.player_.currentTime(this.player_.currentTime() - 5)
        }, e.prototype.handleAction = function(t) {
            this.player_.paused() ? this.player_.play() : this.player_.pause()
        }, e.prototype.handleKeyPress = function(e) {
            32 === e.which || 13 === e.which ? (e.preventDefault(), this.handleAction(e)) : t.prototype.handleKeyPress && t.prototype.handleKeyPress.call(this, e)
        }, e
    }(Zr);
    an.prototype.options_ = {
        children: ["loadProgressBar", "playProgressBar"],
        barName: "playProgressBar"
    }, te || ie || an.prototype.options_.children.splice(1, 0, "mouseTimeDisplay"), an.prototype.playerEvent = "timeupdate", Gt.registerComponent("SeekBar", an);
    var sn = function(t) {
        function e(i, r) {
            y(this, e);
            var n = _(this, t.call(this, i, r));
            return n.handleMouseMove = It(Ot(n, n.handleMouseMove), 25), n.throttledHandleMouseSeek = It(Ot(n, n.handleMouseSeek), 25), n.enable(), n
        }
        return v(e, t), e.prototype.createEl = function() {
            return t.prototype.createEl.call(this, "div", {
                className: "vjs-progress-control vjs-control"
            })
        }, e.prototype.handleMouseMove = function(t) {
            var e = this.getChild("seekBar");
            if (e) {
                var i = e.getChild("mouseTimeDisplay"),
                    r = e.el(),
                    n = $(r),
                    a = Q(r, t).x;
                a > 1 ? a = 1 : a < 0 && (a = 0), i && i.update(n, a)
            }
        }, e.prototype.handleMouseSeek = function(t) {
            var e = this.getChild("seekBar");
            e && e.handleMouseMove(t)
        }, e.prototype.enabled = function() {
            return this.enabled_
        }, e.prototype.disable = function() {
            this.children().forEach((function(t) {
                return t.disable && t.disable()
            })), this.enabled() && (this.off(["mousedown", "touchstart"], this.handleMouseDown), this.off(this.el_, "mousemove", this.handleMouseMove), this.handleMouseUp(), this.addClass("disabled"), this.enabled_ = !1)
        }, e.prototype.enable = function() {
            this.children().forEach((function(t) {
                return t.enable && t.enable()
            })), this.enabled() || (this.on(["mousedown", "touchstart"], this.handleMouseDown), this.on(this.el_, "mousemove", this.handleMouseMove), this.removeClass("disabled"), this.enabled_ = !0)
        }, e.prototype.handleMouseDown = function(t) {
            var e = this.el_.ownerDocument,
                i = this.getChild("seekBar");
            i && i.handleMouseDown(t), this.on(e, "mousemove", this.throttledHandleMouseSeek), this.on(e, "touchmove", this.throttledHandleMouseSeek), this.on(e, "mouseup", this.handleMouseUp), this.on(e, "touchend", this.handleMouseUp)
        }, e.prototype.handleMouseUp = function(t) {
            var e = this.el_.ownerDocument,
                i = this.getChild("seekBar");
            i && i.handleMouseUp(t), this.off(e, "mousemove", this.throttledHandleMouseSeek), this.off(e, "touchmove", this.throttledHandleMouseSeek), this.off(e, "mouseup", this.handleMouseUp), this.off(e, "touchend", this.handleMouseUp)
        }, e
    }(Gt);
    sn.prototype.options_ = {
        children: ["seekBar"]
    }, Gt.registerComponent("ProgressControl", sn);
    var on = function(t) {
        function e(i, r) {
            y(this, e);
            var n = _(this, t.call(this, i, r));
            return n.on(i, "fullscreenchange", n.handleFullscreenChange), !1 === u[ve.fullscreenEnabled] && n.disable(), n
        }
        return v(e, t), e.prototype.buildCSSClass = function() {
            return "vjs-fullscreen-control " + t.prototype.buildCSSClass.call(this)
        }, e.prototype.handleFullscreenChange = function(t) {
            this.player_.isFullscreen() ? this.controlText("Non-Fullscreen") : this.controlText("Fullscreen")
        }, e.prototype.handleClick = function(t) {
            this.player_.isFullscreen() ? this.player_.exitFullscreen() : this.player_.requestFullscreen()
        }, e
    }(Fr);
    on.prototype.controlText_ = "Fullscreen", Gt.registerComponent("FullscreenToggle", on);
    var un = function(t, e) {
            e.tech_ && !e.tech_.featuresVolumeControl && t.addClass("vjs-hidden"), t.on(e, "loadstart", (function() {
                e.tech_.featuresVolumeControl ? t.removeClass("vjs-hidden") : t.addClass("vjs-hidden")
            }))
        },
        ln = function(t) {
            function e() {
                return y(this, e), _(this, t.apply(this, arguments))
            }
            return v(e, t), e.prototype.createEl = function() {
                return t.prototype.createEl.call(this, "div", {
                    className: "vjs-volume-level",
                    innerHTML: '<span class="vjs-control-text"></span>'
                })
            }, e
        }(Gt);
    Gt.registerComponent("VolumeLevel", ln);
    var cn = function(t) {
        function e(i, r) {
            y(this, e);
            var n = _(this, t.call(this, i, r));
            return n.on("slideractive", n.updateLastVolume_), n.on(i, "volumechange", n.updateARIAAttributes), i.ready((function() {
                return n.updateARIAAttributes()
            })), n
        }
        return v(e, t), e.prototype.createEl = function() {
            return t.prototype.createEl.call(this, "div", {
                className: "vjs-volume-bar vjs-slider-bar"
            }, {
                "aria-label": this.localize("Volume Level"),
                "aria-live": "polite"
            })
        }, e.prototype.handleMouseDown = function(e) {
            rt(e) && t.prototype.handleMouseDown.call(this, e)
        }, e.prototype.handleMouseMove = function(t) {
            rt(t) && (this.checkMuted(), this.player_.volume(this.calculateDistance(t)))
        }, e.prototype.checkMuted = function() {
            this.player_.muted() && this.player_.muted(!1)
        }, e.prototype.getPercent = function() {
            return this.player_.muted() ? 0 : this.player_.volume()
        }, e.prototype.stepForward = function() {
            this.checkMuted(), this.player_.volume(this.player_.volume() + .1)
        }, e.prototype.stepBack = function() {
            this.checkMuted(), this.player_.volume(this.player_.volume() - .1)
        }, e.prototype.updateARIAAttributes = function(t) {
            var e = this.player_.muted() ? 0 : this.volumeAsPercentage_();
            this.el_.setAttribute("aria-valuenow", e), this.el_.setAttribute("aria-valuetext", e + "%")
        }, e.prototype.volumeAsPercentage_ = function() {
            return Math.round(100 * this.player_.volume())
        }, e.prototype.updateLastVolume_ = function() {
            var t = this,
                e = this.player_.volume();
            this.one("sliderinactive", (function() {
                0 === t.player_.volume() && t.player_.lastVolume_(e)
            }))
        }, e
    }(Zr);
    cn.prototype.options_ = {
        children: ["volumeLevel"],
        barName: "volumeLevel"
    }, cn.prototype.playerEvent = "volumechange", Gt.registerComponent("VolumeBar", cn);
    var hn = function(t) {
        function e(i) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            y(this, e), r.vertical = r.vertical || !1, (void 0 === r.volumeBar || w(r.volumeBar)) && (r.volumeBar = r.volumeBar || {}, r.volumeBar.vertical = r.vertical);
            var n = _(this, t.call(this, i, r));
            return un(n, i), n.throttledHandleMouseMove = It(Ot(n, n.handleMouseMove), 25), n.on("mousedown", n.handleMouseDown), n.on("touchstart", n.handleMouseDown), n.on(n.volumeBar, ["focus", "slideractive"], (function() {
                n.volumeBar.addClass("vjs-slider-active"), n.addClass("vjs-slider-active"), n.trigger("slideractive")
            })), n.on(n.volumeBar, ["blur", "sliderinactive"], (function() {
                n.volumeBar.removeClass("vjs-slider-active"), n.removeClass("vjs-slider-active"), n.trigger("sliderinactive")
            })), n
        }
        return v(e, t), e.prototype.createEl = function() {
            var e = "vjs-volume-horizontal";
            return this.options_.vertical && (e = "vjs-volume-vertical"), t.prototype.createEl.call(this, "div", {
                className: "vjs-volume-control vjs-control " + e
            })
        }, e.prototype.handleMouseDown = function(t) {
            var e = this.el_.ownerDocument;
            this.on(e, "mousemove", this.throttledHandleMouseMove), this.on(e, "touchmove", this.throttledHandleMouseMove), this.on(e, "mouseup", this.handleMouseUp), this.on(e, "touchend", this.handleMouseUp)
        }, e.prototype.handleMouseUp = function(t) {
            var e = this.el_.ownerDocument;
            this.off(e, "mousemove", this.throttledHandleMouseMove), this.off(e, "touchmove", this.throttledHandleMouseMove), this.off(e, "mouseup", this.handleMouseUp), this.off(e, "touchend", this.handleMouseUp)
        }, e.prototype.handleMouseMove = function(t) {
            this.volumeBar.handleMouseMove(t)
        }, e
    }(Gt);
    hn.prototype.options_ = {
        children: ["volumeBar"]
    }, Gt.registerComponent("VolumeControl", hn);
    var dn = function(t) {
        function e(i, r) {
            y(this, e);
            var n = _(this, t.call(this, i, r));
            return function(t, e) {
                e.tech_ && !e.tech_.featuresMuteControl && t.addClass("vjs-hidden"), t.on(e, "loadstart", (function() {
                    e.tech_.featuresMuteControl ? t.removeClass("vjs-hidden") : t.addClass("vjs-hidden")
                }))
            }(n, i), n.on(i, ["loadstart", "volumechange"], n.update), n
        }
        return v(e, t), e.prototype.buildCSSClass = function() {
            return "vjs-mute-control " + t.prototype.buildCSSClass.call(this)
        }, e.prototype.handleClick = function(t) {
            var e = this.player_.volume(),
                i = this.player_.lastVolume_();
            if (0 === e) {
                var r = i < .1 ? .1 : i;
                this.player_.volume(r), this.player_.muted(!1)
            } else this.player_.muted(!this.player_.muted())
        }, e.prototype.update = function(t) {
            this.updateIcon_(), this.updateControlText_()
        }, e.prototype.updateIcon_ = function() {
            var t = this.player_.volume(),
                e = 3;
            te && this.player_.muted(this.player_.tech_.el_.muted), 0 === t || this.player_.muted() ? e = 0 : t < .33 ? e = 1 : t < .67 && (e = 2);
            for (var i = 0; i < 4; i++) F(this.el_, "vjs-vol-" + i);
            j(this.el_, "vjs-vol-" + e)
        }, e.prototype.updateControlText_ = function() {
            var t = this.player_.muted() || 0 === this.player_.volume() ? "Unmute" : "Mute";
            this.controlText() !== t && this.controlText(t)
        }, e
    }(Fr);
    dn.prototype.controlText_ = "Mute", Gt.registerComponent("MuteToggle", dn);
    var pn = function(t) {
        function e(i) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            y(this, e), void 0 !== r.inline ? r.inline = r.inline : r.inline = !0, (void 0 === r.volumeControl || w(r.volumeControl)) && (r.volumeControl = r.volumeControl || {}, r.volumeControl.vertical = !r.inline);
            var n = _(this, t.call(this, i, r));
            return n.on(i, ["loadstart"], n.volumePanelState_), n.on(n.volumeControl, ["slideractive"], n.sliderActive_), n.on(n.volumeControl, ["sliderinactive"], n.sliderInactive_), n
        }
        return v(e, t), e.prototype.sliderActive_ = function() {
            this.addClass("vjs-slider-active")
        }, e.prototype.sliderInactive_ = function() {
            this.removeClass("vjs-slider-active")
        }, e.prototype.volumePanelState_ = function() {
            this.volumeControl.hasClass("vjs-hidden") && this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-hidden"), this.volumeControl.hasClass("vjs-hidden") && !this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-mute-toggle-only")
        }, e.prototype.createEl = function() {
            var e = "vjs-volume-panel-horizontal";
            return this.options_.inline || (e = "vjs-volume-panel-vertical"), t.prototype.createEl.call(this, "div", {
                className: "vjs-volume-panel vjs-control " + e
            })
        }, e
    }(Gt);
    pn.prototype.options_ = {
        children: ["muteToggle", "volumeControl"]
    }, Gt.registerComponent("VolumePanel", pn);
    var fn = function(t) {
        function e(i, r) {
            y(this, e);
            var n = _(this, t.call(this, i, r));
            return r && (n.menuButton_ = r.menuButton), n.focusedChild_ = -1, n.on("keydown", n.handleKeyPress), n
        }
        return v(e, t), e.prototype.addItem = function(t) {
            this.addChild(t), t.on("click", Ot(this, (function(e) {
                this.menuButton_ && (this.menuButton_.unpressButton(), "CaptionSettingsMenuItem" !== t.name() && this.menuButton_.focus())
            })))
        }, e.prototype.createEl = function() {
            var e = this.options_.contentElType || "ul";
            this.contentEl_ = M(e, {
                className: "vjs-menu-content"
            }), this.contentEl_.setAttribute("role", "menu");
            var i = t.prototype.createEl.call(this, "div", {
                append: this.contentEl_,
                className: "vjs-menu"
            });
            return i.appendChild(this.contentEl_), _t(i, "click", (function(t) {
                t.preventDefault(), t.stopImmediatePropagation()
            })), i
        }, e.prototype.dispose = function() {
            this.contentEl_ = null, t.prototype.dispose.call(this)
        }, e.prototype.handleKeyPress = function(t) {
            37 === t.which || 40 === t.which ? (t.preventDefault(), this.stepForward()) : 38 !== t.which && 39 !== t.which || (t.preventDefault(), this.stepBack())
        }, e.prototype.stepForward = function() {
            var t = 0;
            void 0 !== this.focusedChild_ && (t = this.focusedChild_ + 1), this.focus(t)
        }, e.prototype.stepBack = function() {
            var t = 0;
            void 0 !== this.focusedChild_ && (t = this.focusedChild_ - 1), this.focus(t)
        }, e.prototype.focus = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                e = this.children().slice(),
                i = e.length && e[0].className && /vjs-menu-title/.test(e[0].className);
            i && e.shift(), e.length > 0 && (t < 0 ? t = 0 : t >= e.length && (t = e.length - 1), this.focusedChild_ = t, e[t].el_.focus())
        }, e
    }(Gt);
    Gt.registerComponent("Menu", fn);
    var mn = function(t) {
        function e(i) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            y(this, e);
            var n = _(this, t.call(this, i, r));
            n.menuButton_ = new Fr(i, r), n.menuButton_.controlText(n.controlText_), n.menuButton_.el_.setAttribute("aria-haspopup", "true");
            var a = Fr.prototype.buildCSSClass();
            return n.menuButton_.el_.className = n.buildCSSClass() + " " + a, n.menuButton_.removeClass("vjs-control"), n.addChild(n.menuButton_), n.update(), n.enabled_ = !0, n.on(n.menuButton_, "tap", n.handleClick), n.on(n.menuButton_, "click", n.handleClick), n.on(n.menuButton_, "focus", n.handleFocus), n.on(n.menuButton_, "blur", n.handleBlur), n.on("keydown", n.handleSubmenuKeyPress), n
        }
        return v(e, t), e.prototype.update = function() {
            var t = this.createMenu();
            this.menu && (this.menu.dispose(), this.removeChild(this.menu)), this.menu = t, this.addChild(t), this.buttonPressed_ = !1, this.menuButton_.el_.setAttribute("aria-expanded", "false"), this.items && this.items.length <= this.hideThreshold_ ? this.hide() : this.show()
        }, e.prototype.createMenu = function() {
            var t = new fn(this.player_, {
                menuButton: this
            });
            if (this.hideThreshold_ = 0, this.options_.title) {
                var e = M("li", {
                    className: "vjs-menu-title",
                    innerHTML: Wt(this.options_.title),
                    tabIndex: -1
                });
                this.hideThreshold_ += 1, t.children_.unshift(e), N(e, t.contentEl())
            }
            if (this.items = this.createItems(), this.items)
                for (var i = 0; i < this.items.length; i++) t.addItem(this.items[i]);
            return t
        }, e.prototype.createItems = function() {}, e.prototype.createEl = function() {
            return t.prototype.createEl.call(this, "div", {
                className: this.buildWrapperCSSClass()
            }, {})
        }, e.prototype.buildWrapperCSSClass = function() {
            var e = "vjs-menu-button";
            return !0 === this.options_.inline ? e += "-inline" : e += "-popup", "vjs-menu-button " + e + " " + Fr.prototype.buildCSSClass() + " " + t.prototype.buildCSSClass.call(this)
        }, e.prototype.buildCSSClass = function() {
            var e = "vjs-menu-button";
            return !0 === this.options_.inline ? e += "-inline" : e += "-popup", "vjs-menu-button " + e + " " + t.prototype.buildCSSClass.call(this)
        }, e.prototype.controlText = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.menuButton_.el();
            return this.menuButton_.controlText(t, e)
        }, e.prototype.handleClick = function(t) {
            this.one(this.menu.contentEl(), "mouseleave", Ot(this, (function(t) {
                this.unpressButton(), this.el_.blur()
            }))), this.buttonPressed_ ? this.unpressButton() : this.pressButton()
        }, e.prototype.focus = function() {
            this.menuButton_.focus()
        }, e.prototype.blur = function() {
            this.menuButton_.blur()
        }, e.prototype.handleFocus = function() {
            _t(u, "keydown", Ot(this, this.handleKeyPress))
        }, e.prototype.handleBlur = function() {
            bt(u, "keydown", Ot(this, this.handleKeyPress))
        }, e.prototype.handleKeyPress = function(t) {
            27 === t.which || 9 === t.which ? (this.buttonPressed_ && this.unpressButton(), 9 !== t.which && (t.preventDefault(), this.menuButton_.el_.focus())) : 38 !== t.which && 40 !== t.which || this.buttonPressed_ || (this.pressButton(), t.preventDefault())
        }, e.prototype.handleSubmenuKeyPress = function(t) {
            27 !== t.which && 9 !== t.which || (this.buttonPressed_ && this.unpressButton(), 9 !== t.which && (t.preventDefault(), this.menuButton_.el_.focus()))
        }, e.prototype.pressButton = function() {
            if (this.enabled_) {
                if (this.buttonPressed_ = !0, this.menu.lockShowing(), this.menuButton_.el_.setAttribute("aria-expanded", "true"), te && D()) return;
                this.menu.focus()
            }
        }, e.prototype.unpressButton = function() {
            this.enabled_ && (this.buttonPressed_ = !1, this.menu.unlockShowing(), this.menuButton_.el_.setAttribute("aria-expanded", "false"))
        }, e.prototype.disable = function() {
            this.unpressButton(), this.enabled_ = !1, this.addClass("vjs-disabled"), this.menuButton_.disable()
        }, e.prototype.enable = function() {
            this.enabled_ = !0, this.removeClass("vjs-disabled"), this.menuButton_.enable()
        }, e
    }(Gt);
    Gt.registerComponent("MenuButton", mn);
    var gn = function(t) {
        function e(i, r) {
            y(this, e);
            var n = r.tracks,
                a = _(this, t.call(this, i, r));
            if (a.items.length <= 1 && a.hide(), !n) return _(a);
            var s = Ot(a, a.update);
            return n.addEventListener("removetrack", s), n.addEventListener("addtrack", s), a.player_.on("ready", s), a.player_.on("dispose", (function() {
                n.removeEventListener("removetrack", s), n.removeEventListener("addtrack", s)
            })), a
        }
        return v(e, t), e
    }(mn);
    Gt.registerComponent("TrackButton", gn);
    var yn = function(t) {
        function e(i, r) {
            y(this, e);
            var n = _(this, t.call(this, i, r));
            return n.selectable = r.selectable, n.isSelected_ = r.selected || !1, n.multiSelectable = r.multiSelectable, n.selected(n.isSelected_), n.selectable ? n.multiSelectable ? n.el_.setAttribute("role", "menuitemcheckbox") : n.el_.setAttribute("role", "menuitemradio") : n.el_.setAttribute("role", "menuitem"), n
        }
        return v(e, t), e.prototype.createEl = function(e, i, r) {
            return this.nonIconControl = !0, t.prototype.createEl.call(this, "li", C({
                className: "vjs-menu-item",
                innerHTML: '<span class="vjs-menu-item-text">' + this.localize(this.options_.label) + "</span>",
                tabIndex: -1
            }, i), r)
        }, e.prototype.handleClick = function(t) {
            this.selected(!0)
        }, e.prototype.selected = function(t) {
            this.selectable && (t ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-checked", "true"), this.controlText(", selected"), this.isSelected_ = !0) : (this.removeClass("vjs-selected"), this.el_.setAttribute("aria-checked", "false"), this.controlText(""), this.isSelected_ = !1))
        }, e
    }(Dr);
    Gt.registerComponent("MenuItem", yn);
    var vn = function(t) {
        function e(i, n) {
            y(this, e);
            var a = n.track,
                s = i.textTracks();
            n.label = a.label || a.language || "Unknown", n.selected = "showing" === a.mode;
            var o = _(this, t.call(this, i, n));
            o.track = a;
            var l = function() {
                    for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    o.handleTracksChange.apply(o, e)
                },
                c = function() {
                    for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    o.handleSelectedLanguageChange.apply(o, e)
                };
            if (i.on(["loadstart", "texttrackchange"], l), s.addEventListener("change", l), s.addEventListener("selectedlanguagechange", c), o.on("dispose", (function() {
                    i.off(["loadstart", "texttrackchange"], l), s.removeEventListener("change", l), s.removeEventListener("selectedlanguagechange", c)
                })), void 0 === s.onchange) {
                var h = void 0;
                o.on(["tap", "click"], (function() {
                    if ("object" !== g(r.Event)) try {
                        h = new r.Event("change")
                    } catch (t) {}
                    h || (h = u.createEvent("Event")).initEvent("change", !0, !0), s.dispatchEvent(h)
                }))
            }
            return o.handleTracksChange(), o
        }
        return v(e, t), e.prototype.handleClick = function(e) {
            var i = this.track.kind,
                r = this.track.kinds,
                n = this.player_.textTracks();
            if (r || (r = [i]), t.prototype.handleClick.call(this, e), n)
                for (var a = 0; a < n.length; a++) {
                    var s = n[a];
                    s === this.track && r.indexOf(s.kind) > -1 ? "showing" !== s.mode && (s.mode = "showing") : "disabled" !== s.mode && (s.mode = "disabled")
                }
        }, e.prototype.handleTracksChange = function(t) {
            var e = "showing" === this.track.mode;
            e !== this.isSelected_ && this.selected(e)
        }, e.prototype.handleSelectedLanguageChange = function(t) {
            if ("showing" === this.track.mode) {
                var e = this.player_.cache_.selectedLanguage;
                if (e && e.enabled && e.language === this.track.language && e.kind !== this.track.kind) return;
                this.player_.cache_.selectedLanguage = {
                    enabled: !0,
                    language: this.track.language,
                    kind: this.track.kind
                }
            }
        }, e.prototype.dispose = function() {
            this.track = null, t.prototype.dispose.call(this)
        }, e
    }(yn);
    Gt.registerComponent("TextTrackMenuItem", vn);
    var _n = function(t) {
        function e(i, r) {
            return y(this, e), r.track = {
                player: i,
                kind: r.kind,
                kinds: r.kinds,
                default: !1,
                mode: "disabled"
            }, r.kinds || (r.kinds = [r.kind]), r.label ? r.track.label = r.label : r.track.label = r.kinds.join(" and ") + " off", r.selectable = !0, r.multiSelectable = !1, _(this, t.call(this, i, r))
        }
        return v(e, t), e.prototype.handleTracksChange = function(t) {
            for (var e = this.player().textTracks(), i = !0, r = 0, n = e.length; r < n; r++) {
                var a = e[r];
                if (this.options_.kinds.indexOf(a.kind) > -1 && "showing" === a.mode) {
                    i = !1;
                    break
                }
            }
            i !== this.isSelected_ && this.selected(i)
        }, e.prototype.handleSelectedLanguageChange = function(t) {
            for (var e = this.player().textTracks(), i = !0, r = 0, n = e.length; r < n; r++) {
                var a = e[r];
                if (["captions", "descriptions", "subtitles"].indexOf(a.kind) > -1 && "showing" === a.mode) {
                    i = !1;
                    break
                }
            }
            i && (this.player_.cache_.selectedLanguage = {
                enabled: !1
            })
        }, e
    }(vn);
    Gt.registerComponent("OffTextTrackMenuItem", _n);
    var bn = function(t) {
        function e(i) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return y(this, e), r.tracks = i.textTracks(), _(this, t.call(this, i, r))
        }
        return v(e, t), e.prototype.createItems = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vn,
                i = void 0;
            this.label_ && (i = this.label_ + " off"), t.push(new _n(this.player_, {
                kinds: this.kinds_,
                kind: this.kind_,
                label: i
            })), this.hideThreshold_ += 1;
            var r = this.player_.textTracks();
            Array.isArray(this.kinds_) || (this.kinds_ = [this.kind_]);
            for (var n = 0; n < r.length; n++) {
                var a = r[n];
                if (this.kinds_.indexOf(a.kind) > -1) {
                    var s = new e(this.player_, {
                        track: a,
                        selectable: !0,
                        multiSelectable: !1
                    });
                    s.addClass("vjs-" + a.kind + "-menu-item"), t.push(s)
                }
            }
            return t
        }, e
    }(gn);
    Gt.registerComponent("TextTrackButton", bn);
    var Tn = function(t) {
        function e(i, r) {
            y(this, e);
            var n = r.track,
                a = r.cue,
                s = i.currentTime();
            r.selectable = !0, r.multiSelectable = !1, r.label = a.text, r.selected = a.startTime <= s && s < a.endTime;
            var o = _(this, t.call(this, i, r));
            return o.track = n, o.cue = a, n.addEventListener("cuechange", Ot(o, o.update)), o
        }
        return v(e, t), e.prototype.handleClick = function(e) {
            t.prototype.handleClick.call(this), this.player_.currentTime(this.cue.startTime), this.update(this.cue.startTime)
        }, e.prototype.update = function(t) {
            var e = this.cue,
                i = this.player_.currentTime();
            this.selected(e.startTime <= i && i < e.endTime)
        }, e
    }(yn);
    Gt.registerComponent("ChaptersTrackMenuItem", Tn);
    var Sn = function(t) {
        function e(i, r, n) {
            return y(this, e), _(this, t.call(this, i, r, n))
        }
        return v(e, t), e.prototype.buildCSSClass = function() {
            return "vjs-chapters-button " + t.prototype.buildCSSClass.call(this)
        }, e.prototype.buildWrapperCSSClass = function() {
            return "vjs-chapters-button " + t.prototype.buildWrapperCSSClass.call(this)
        }, e.prototype.update = function(e) {
            this.track_ && (!e || "addtrack" !== e.type && "removetrack" !== e.type) || this.setTrack(this.findChaptersTrack()), t.prototype.update.call(this)
        }, e.prototype.setTrack = function(t) {
            if (this.track_ !== t) {
                if (this.updateHandler_ || (this.updateHandler_ = this.update.bind(this)), this.track_) {
                    var e = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                    e && e.removeEventListener("load", this.updateHandler_), this.track_ = null
                }
                if (this.track_ = t, this.track_) {
                    this.track_.mode = "hidden";
                    var i = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                    i && i.addEventListener("load", this.updateHandler_)
                }
            }
        }, e.prototype.findChaptersTrack = function() {
            for (var t = this.player_.textTracks() || [], e = t.length - 1; e >= 0; e--) {
                var i = t[e];
                if (i.kind === this.kind_) return i
            }
        }, e.prototype.getMenuCaption = function() {
            return this.track_ && this.track_.label ? this.track_.label : this.localize(Wt(this.kind_))
        }, e.prototype.createMenu = function() {
            return this.options_.title = this.getMenuCaption(), t.prototype.createMenu.call(this)
        }, e.prototype.createItems = function() {
            var t = [];
            if (!this.track_) return t;
            var e = this.track_.cues;
            if (!e) return t;
            for (var i = 0, r = e.length; i < r; i++) {
                var n = e[i],
                    a = new Tn(this.player_, {
                        track: this.track_,
                        cue: n
                    });
                t.push(a)
            }
            return t
        }, e
    }(bn);
    Sn.prototype.kind_ = "chapters", Sn.prototype.controlText_ = "Chapters", Gt.registerComponent("ChaptersButton", Sn);
    var kn = function(t) {
        function e(i, r, n) {
            y(this, e);
            var a = _(this, t.call(this, i, r, n)),
                s = i.textTracks(),
                o = Ot(a, a.handleTracksChange);
            return s.addEventListener("change", o), a.on("dispose", (function() {
                s.removeEventListener("change", o)
            })), a
        }
        return v(e, t), e.prototype.handleTracksChange = function(t) {
            for (var e = this.player().textTracks(), i = !1, r = 0, n = e.length; r < n; r++) {
                var a = e[r];
                if (a.kind !== this.kind_ && "showing" === a.mode) {
                    i = !0;
                    break
                }
            }
            i ? this.disable() : this.enable()
        }, e.prototype.buildCSSClass = function() {
            return "vjs-descriptions-button " + t.prototype.buildCSSClass.call(this)
        }, e.prototype.buildWrapperCSSClass = function() {
            return "vjs-descriptions-button " + t.prototype.buildWrapperCSSClass.call(this)
        }, e
    }(bn);
    kn.prototype.kind_ = "descriptions", kn.prototype.controlText_ = "Descriptions", Gt.registerComponent("DescriptionsButton", kn);
    var Cn = function(t) {
        function e(i, r, n) {
            return y(this, e), _(this, t.call(this, i, r, n))
        }
        return v(e, t), e.prototype.buildCSSClass = function() {
            return "vjs-subtitles-button " + t.prototype.buildCSSClass.call(this)
        }, e.prototype.buildWrapperCSSClass = function() {
            return "vjs-subtitles-button " + t.prototype.buildWrapperCSSClass.call(this)
        }, e
    }(bn);
    Cn.prototype.kind_ = "subtitles", Cn.prototype.controlText_ = "Subtitles", Gt.registerComponent("SubtitlesButton", Cn);
    var En = function(t) {
        function e(i, r) {
            y(this, e), r.track = {
                player: i,
                kind: r.kind,
                label: r.kind + " settings",
                selectable: !1,
                default: !1,
                mode: "disabled"
            }, r.selectable = !1, r.name = "CaptionSettingsMenuItem";
            var n = _(this, t.call(this, i, r));
            return n.addClass("vjs-texttrack-settings"), n.controlText(", opens " + r.kind + " settings dialog"), n
        }
        return v(e, t), e.prototype.handleClick = function(t) {
            this.player().getChild("textTrackSettings").open()
        }, e
    }(vn);
    Gt.registerComponent("CaptionSettingsMenuItem", En);
    var wn = function(t) {
        function e(i, r, n) {
            return y(this, e), _(this, t.call(this, i, r, n))
        }
        return v(e, t), e.prototype.buildCSSClass = function() {
            return "vjs-captions-button " + t.prototype.buildCSSClass.call(this)
        }, e.prototype.buildWrapperCSSClass = function() {
            return "vjs-captions-button " + t.prototype.buildWrapperCSSClass.call(this)
        }, e.prototype.createItems = function() {
            var e = [];
            return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || !this.player().getChild("textTrackSettings") || (e.push(new En(this.player_, {
                kind: this.kind_
            })), this.hideThreshold_ += 1), t.prototype.createItems.call(this, e)
        }, e
    }(bn);
    wn.prototype.kind_ = "captions", wn.prototype.controlText_ = "Captions", Gt.registerComponent("CaptionsButton", wn);
    var An = function(t) {
        function e() {
            return y(this, e), _(this, t.apply(this, arguments))
        }
        return v(e, t), e.prototype.createEl = function(e, i, r) {
            var n = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
            return "captions" === this.options_.track.kind && (n += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize("Captions") + "</span>\n      "), n += "</span>", t.prototype.createEl.call(this, e, C({
                innerHTML: n
            }, i), r)
        }, e
    }(vn);
    Gt.registerComponent("SubsCapsMenuItem", An);
    var Ln = function(t) {
        function e(i) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            y(this, e);
            var n = _(this, t.call(this, i, r));
            return n.label_ = "subtitles", ["en", "en-us", "en-ca", "fr-ca"].indexOf(n.player_.language_) > -1 && (n.label_ = "captions"), n.menuButton_.controlText(Wt(n.label_)), n
        }
        return v(e, t), e.prototype.buildCSSClass = function() {
            return "vjs-subs-caps-button " + t.prototype.buildCSSClass.call(this)
        }, e.prototype.buildWrapperCSSClass = function() {
            return "vjs-subs-caps-button " + t.prototype.buildWrapperCSSClass.call(this)
        }, e.prototype.createItems = function() {
            var e = [];
            return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || !this.player().getChild("textTrackSettings") || (e.push(new En(this.player_, {
                kind: this.label_
            })), this.hideThreshold_ += 1), e = t.prototype.createItems.call(this, e, An)
        }, e
    }(bn);
    Ln.prototype.kinds_ = ["captions", "subtitles"], Ln.prototype.controlText_ = "Subtitles", Gt.registerComponent("SubsCapsButton", Ln);
    var Pn = function(t) {
        function e(i, r) {
            y(this, e);
            var n = r.track,
                a = i.audioTracks();
            r.label = n.label || n.language || "Unknown", r.selected = n.enabled;
            var s = _(this, t.call(this, i, r));
            s.track = n, s.addClass("vjs-" + n.kind + "-menu-item");
            var o = function() {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                s.handleTracksChange.apply(s, e)
            };
            return a.addEventListener("change", o), s.on("dispose", (function() {
                a.removeEventListener("change", o)
            })), s
        }
        return v(e, t), e.prototype.createEl = function(e, i, r) {
            var n = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
            return "main-desc" === this.options_.track.kind && (n += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize("Descriptions") + "</span>\n      "), n += "</span>", t.prototype.createEl.call(this, e, C({
                innerHTML: n
            }, i), r)
        }, e.prototype.handleClick = function(e) {
            var i = this.player_.audioTracks();
            t.prototype.handleClick.call(this, e);
            for (var r = 0; r < i.length; r++) {
                var n = i[r];
                n.enabled = n === this.track
            }
        }, e.prototype.handleTracksChange = function(t) {
            this.selected(this.track.enabled)
        }, e
    }(yn);
    Gt.registerComponent("AudioTrackMenuItem", Pn);
    var On = function(t) {
        function e(i) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return y(this, e), r.tracks = i.audioTracks(), _(this, t.call(this, i, r))
        }
        return v(e, t), e.prototype.buildCSSClass = function() {
            return "vjs-audio-button " + t.prototype.buildCSSClass.call(this)
        }, e.prototype.buildWrapperCSSClass = function() {
            return "vjs-audio-button " + t.prototype.buildWrapperCSSClass.call(this)
        }, e.prototype.createItems = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            this.hideThreshold_ = 1;
            for (var e = this.player_.audioTracks(), i = 0; i < e.length; i++) {
                var r = e[i];
                t.push(new Pn(this.player_, {
                    track: r,
                    selectable: !0,
                    multiSelectable: !1
                }))
            }
            return t
        }, e
    }(gn);
    On.prototype.controlText_ = "Audio Track", Gt.registerComponent("AudioTrackButton", On);
    var In = function(t) {
        function e(i, r) {
            y(this, e);
            var n = r.rate,
                a = parseFloat(n, 10);
            r.label = n, r.selected = 1 === a, r.selectable = !0, r.multiSelectable = !1;
            var s = _(this, t.call(this, i, r));
            return s.label = n, s.rate = a, s.on(i, "ratechange", s.update), s
        }
        return v(e, t), e.prototype.handleClick = function(e) {
            t.prototype.handleClick.call(this), this.player().playbackRate(this.rate)
        }, e.prototype.update = function(t) {
            this.selected(this.player().playbackRate() === this.rate)
        }, e
    }(yn);
    In.prototype.contentElType = "button", Gt.registerComponent("PlaybackRateMenuItem", In);
    var xn = function(t) {
        function e(i, r) {
            y(this, e);
            var n = _(this, t.call(this, i, r));
            return n.updateVisibility(), n.updateLabel(), n.on(i, "loadstart", n.updateVisibility), n.on(i, "ratechange", n.updateLabel), n
        }
        return v(e, t), e.prototype.createEl = function() {
            var e = t.prototype.createEl.call(this);
            return this.labelEl_ = M("div", {
                className: "vjs-playback-rate-value",
                innerHTML: "1x"
            }), e.appendChild(this.labelEl_), e
        }, e.prototype.dispose = function() {
            this.labelEl_ = null, t.prototype.dispose.call(this)
        }, e.prototype.buildCSSClass = function() {
            return "vjs-playback-rate " + t.prototype.buildCSSClass.call(this)
        }, e.prototype.buildWrapperCSSClass = function() {
            return "vjs-playback-rate " + t.prototype.buildWrapperCSSClass.call(this)
        }, e.prototype.createMenu = function() {
            var t = new fn(this.player()),
                e = this.playbackRates();
            if (e)
                for (var i = e.length - 1; i >= 0; i--) t.addChild(new In(this.player(), {
                    rate: e[i] + "x"
                }));
            return t
        }, e.prototype.updateARIAAttributes = function() {
            this.el().setAttribute("aria-valuenow", this.player().playbackRate())
        }, e.prototype.handleClick = function(t) {
            for (var e = this.player().playbackRate(), i = this.playbackRates(), r = i[0], n = 0; n < i.length; n++)
                if (i[n] > e) {
                    r = i[n];
                    break
                }
            this.player().playbackRate(r)
        }, e.prototype.playbackRates = function() {
            return this.options_.playbackRates || this.options_.playerOptions && this.options_.playerOptions.playbackRates
        }, e.prototype.playbackRateSupported = function() {
            return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && this.playbackRates().length > 0
        }, e.prototype.updateVisibility = function(t) {
            this.playbackRateSupported() ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden")
        }, e.prototype.updateLabel = function(t) {
            this.playbackRateSupported() && (this.labelEl_.innerHTML = this.player().playbackRate() + "x")
        }, e
    }(mn);
    xn.prototype.controlText_ = "Playback Rate", Gt.registerComponent("PlaybackRateMenuButton", xn);
    var Dn = function(t) {
        function e() {
            return y(this, e), _(this, t.apply(this, arguments))
        }
        return v(e, t), e.prototype.buildCSSClass = function() {
            return "vjs-spacer " + t.prototype.buildCSSClass.call(this)
        }, e.prototype.createEl = function() {
            return t.prototype.createEl.call(this, "div", {
                className: this.buildCSSClass()
            })
        }, e
    }(Gt);
    Gt.registerComponent("Spacer", Dn);
    var Rn = function(t) {
        function e() {
            return y(this, e), _(this, t.apply(this, arguments))
        }
        return v(e, t), e.prototype.buildCSSClass = function() {
            return "vjs-custom-control-spacer " + t.prototype.buildCSSClass.call(this)
        }, e.prototype.createEl = function() {
            var e = t.prototype.createEl.call(this, {
                className: this.buildCSSClass()
            });
            return e.innerHTML = " ", e
        }, e
    }(Dn);
    Gt.registerComponent("CustomControlSpacer", Rn);
    var Mn = function(t) {
        function e() {
            return y(this, e), _(this, t.apply(this, arguments))
        }
        return v(e, t), e.prototype.createEl = function() {
            return t.prototype.createEl.call(this, "div", {
                className: "vjs-control-bar",
                dir: "ltr"
            })
        }, e
    }(Gt);
    Mn.prototype.options_ = {
        children: ["playToggle", "volumePanel", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "liveDisplay", "remainingTimeDisplay", "customControlSpacer", "playbackRateMenuButton", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "fullscreenToggle"]
    }, Gt.registerComponent("ControlBar", Mn);
    var Un = function(t) {
        function e(i, r) {
            y(this, e);
            var n = _(this, t.call(this, i, r));
            return n.on(i, "error", n.open), n
        }
        return v(e, t), e.prototype.buildCSSClass = function() {
            return "vjs-error-display " + t.prototype.buildCSSClass.call(this)
        }, e.prototype.content = function() {
            var t = this.player().error();
            return t ? this.localize(t.message) : ""
        }, e
    }(xe);
    Un.prototype.options_ = zt(xe.prototype.options_, {
        pauseOnOpen: !1,
        fillAlways: !0,
        temporary: !1,
        uncloseable: !0
    }), Gt.registerComponent("ErrorDisplay", Un);
    var Nn = ["#000", "Black"],
        Bn = ["#00F", "Blue"],
        jn = ["#0FF", "Cyan"],
        Fn = ["#0F0", "Green"],
        Hn = ["#F0F", "Magenta"],
        Vn = ["#F00", "Red"],
        qn = ["#FFF", "White"],
        Wn = ["#FF0", "Yellow"],
        zn = ["1", "Opaque"],
        Gn = ["0.5", "Semi-Transparent"],
        Xn = ["0", "Transparent"],
        Yn = {
            backgroundColor: {
                selector: ".vjs-bg-color > select",
                id: "captions-background-color-%s",
                label: "Color",
                options: [Nn, qn, Vn, Fn, Bn, Wn, Hn, jn]
            },
            backgroundOpacity: {
                selector: ".vjs-bg-opacity > select",
                id: "captions-background-opacity-%s",
                label: "Transparency",
                options: [zn, Gn, Xn]
            },
            color: {
                selector: ".vjs-fg-color > select",
                id: "captions-foreground-color-%s",
                label: "Color",
                options: [qn, Nn, Vn, Fn, Bn, Wn, Hn, jn]
            },
            edgeStyle: {
                selector: ".vjs-edge-style > select",
                id: "%s",
                label: "Text Edge Style",
                options: [
                    ["none", "None"],
                    ["raised", "Raised"],
                    ["depressed", "Depressed"],
                    ["uniform", "Uniform"],
                    ["dropshadow", "Dropshadow"]
                ]
            },
            fontFamily: {
                selector: ".vjs-font-family > select",
                id: "captions-font-family-%s",
                label: "Font Family",
                options: [
                    ["proportionalSansSerif", "Proportional Sans-Serif"],
                    ["monospaceSansSerif", "Monospace Sans-Serif"],
                    ["proportionalSerif", "Proportional Serif"],
                    ["monospaceSerif", "Monospace Serif"],
                    ["casual", "Casual"],
                    ["script", "Script"],
                    ["small-caps", "Small Caps"]
                ]
            },
            fontPercent: {
                selector: ".vjs-font-percent > select",
                id: "captions-font-size-%s",
                label: "Font Size",
                options: [
                    ["0.50", "50%"],
                    ["0.75", "75%"],
                    ["1.00", "100%"],
                    ["1.25", "125%"],
                    ["1.50", "150%"],
                    ["1.75", "175%"],
                    ["2.00", "200%"],
                    ["3.00", "300%"],
                    ["4.00", "400%"]
                ],
                default: 2,
                parser: function(t) {
                    return "1.00" === t ? null : Number(t)
                }
            },
            textOpacity: {
                selector: ".vjs-text-opacity > select",
                id: "captions-foreground-opacity-%s",
                label: "Transparency",
                options: [zn, Gn]
            },
            windowColor: {
                selector: ".vjs-window-color > select",
                id: "captions-window-color-%s",
                label: "Color"
            },
            windowOpacity: {
                selector: ".vjs-window-opacity > select",
                id: "captions-window-opacity-%s",
                label: "Transparency",
                options: [Xn, Gn, zn]
            }
        };

    function $n(t, e) {
        if (e && (t = e(t)), t && "none" !== t) return t
    }
    Yn.windowColor.options = Yn.backgroundColor.options;
    var Kn = function(t) {
        function e(i, r) {
            y(this, e), r.temporary = !1;
            var n = _(this, t.call(this, i, r));
            return n.updateDisplay = Ot(n, n.updateDisplay), n.fill(), n.hasBeenOpened_ = n.hasBeenFilled_ = !0, n.endDialog = M("p", {
                className: "vjs-control-text",
                textContent: n.localize("End of dialog window.")
            }), n.el().appendChild(n.endDialog), n.setDefaults(), void 0 === r.persistTextTrackSettings && (n.options_.persistTextTrackSettings = n.options_.playerOptions.persistTextTrackSettings), n.on(n.$(".vjs-done-button"), "click", (function() {
                n.saveSettings(), n.close()
            })), n.on(n.$(".vjs-default-button"), "click", (function() {
                n.setDefaults(), n.updateDisplay()
            })), k(Yn, (function(t) {
                n.on(n.$(t.selector), "change", n.updateDisplay)
            })), n.options_.persistTextTrackSettings && n.restoreSettings(), n
        }
        return v(e, t), e.prototype.dispose = function() {
            this.endDialog = null, t.prototype.dispose.call(this)
        }, e.prototype.createElSelect_ = function(t) {
            var e = this,
                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "label",
                n = Yn[t],
                a = n.id.replace("%s", this.id_),
                s = [i, a].join(" ").trim();
            return ["<" + r + ' id="' + a + '" class="' + ("label" === r ? "vjs-label" : "") + '">', this.localize(n.label), "</" + r + ">", '<select aria-labelledby="' + s + '">'].concat(n.options.map((function(t) {
                var i = a + "-" + t[1].replace(/\W+/g, "");
                return ['<option id="' + i + '" value="' + t[0] + '" ', 'aria-labelledby="' + s + " " + i + '">', e.localize(t[1]), "</option>"].join("")
            }))).concat("</select>").join("")
        }, e.prototype.createElFgColor_ = function() {
            var t = "captions-text-legend-" + this.id_;
            return ['<fieldset class="vjs-fg-color vjs-track-setting">', '<legend id="' + t + '">', this.localize("Text"), "</legend>", this.createElSelect_("color", t), '<span class="vjs-text-opacity vjs-opacity">', this.createElSelect_("textOpacity", t), "</span>", "</fieldset>"].join("")
        }, e.prototype.createElBgColor_ = function() {
            var t = "captions-background-" + this.id_;
            return ['<fieldset class="vjs-bg-color vjs-track-setting">', '<legend id="' + t + '">', this.localize("Background"), "</legend>", this.createElSelect_("backgroundColor", t), '<span class="vjs-bg-opacity vjs-opacity">', this.createElSelect_("backgroundOpacity", t), "</span>", "</fieldset>"].join("")
        }, e.prototype.createElWinColor_ = function() {
            var t = "captions-window-" + this.id_;
            return ['<fieldset class="vjs-window-color vjs-track-setting">', '<legend id="' + t + '">', this.localize("Window"), "</legend>", this.createElSelect_("windowColor", t), '<span class="vjs-window-opacity vjs-opacity">', this.createElSelect_("windowOpacity", t), "</span>", "</fieldset>"].join("")
        }, e.prototype.createElColors_ = function() {
            return M("div", {
                className: "vjs-track-settings-colors",
                innerHTML: [this.createElFgColor_(), this.createElBgColor_(), this.createElWinColor_()].join("")
            })
        }, e.prototype.createElFont_ = function() {
            return M("div", {
                className: "vjs-track-settings-font",
                innerHTML: ['<fieldset class="vjs-font-percent vjs-track-setting">', this.createElSelect_("fontPercent", "", "legend"), "</fieldset>", '<fieldset class="vjs-edge-style vjs-track-setting">', this.createElSelect_("edgeStyle", "", "legend"), "</fieldset>", '<fieldset class="vjs-font-family vjs-track-setting">', this.createElSelect_("fontFamily", "", "legend"), "</fieldset>"].join("")
            })
        }, e.prototype.createElControls_ = function() {
            var t = this.localize("restore all settings to the default values");
            return M("div", {
                className: "vjs-track-settings-controls",
                innerHTML: ['<button class="vjs-default-button" title="' + t + '">', this.localize("Reset"), '<span class="vjs-control-text"> ' + t + "</span>", "</button>", '<button class="vjs-done-button">' + this.localize("Done") + "</button>"].join("")
            })
        }, e.prototype.content = function() {
            return [this.createElColors_(), this.createElFont_(), this.createElControls_()]
        }, e.prototype.label = function() {
            return this.localize("Caption Settings Dialog")
        }, e.prototype.description = function() {
            return this.localize("Beginning of dialog window. Escape will cancel and close the window.")
        }, e.prototype.buildCSSClass = function() {
            return t.prototype.buildCSSClass.call(this) + " vjs-text-track-settings"
        }, e.prototype.getValues = function() {
            var t = this;
            return function(t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                return S(t).reduce((function(i, r) {
                    return e(i, t[r], r)
                }), i)
            }(Yn, (function(e, i, r) {
                var n, a, s = (n = t.$(i.selector), a = i.parser, $n(n.options[n.options.selectedIndex].value, a));
                return void 0 !== s && (e[r] = s), e
            }), {})
        }, e.prototype.setValues = function(t) {
            var e = this;
            k(Yn, (function(i, r) {
                ! function(t, e, i) {
                    if (e)
                        for (var r = 0; r < t.options.length; r++)
                            if ($n(t.options[r].value, i) === e) {
                                t.selectedIndex = r;
                                break
                            }
                }(e.$(i.selector), t[r], i.parser)
            }))
        }, e.prototype.setDefaults = function() {
            var t = this;
            k(Yn, (function(e) {
                var i = e.hasOwnProperty("default") ? e.default : 0;
                t.$(e.selector).selectedIndex = i
            }))
        }, e.prototype.restoreSettings = function() {
            var t = void 0;
            try {
                t = JSON.parse(r.localStorage.getItem("vjs-text-track-settings"))
            } catch (t) {
                p.warn(t)
            }
            t && this.setValues(t)
        }, e.prototype.saveSettings = function() {
            if (this.options_.persistTextTrackSettings) {
                var t = this.getValues();
                try {
                    Object.keys(t).length ? r.localStorage.setItem("vjs-text-track-settings", JSON.stringify(t)) : r.localStorage.removeItem("vjs-text-track-settings")
                } catch (t) {
                    p.warn(t)
                }
            }
        }, e.prototype.updateDisplay = function() {
            var t = this.player_.getChild("textTrackDisplay");
            t && t.updateDisplay()
        }, e.prototype.conditionalBlur_ = function() {
            this.previouslyActiveEl_ = null, this.off(u, "keydown", this.handleKeyDown);
            var t = this.player_.controlBar,
                e = t && t.subsCapsButton,
                i = t && t.captionsButton;
            e ? e.focus() : i && i.focus()
        }, e
    }(xe);
    Gt.registerComponent("TextTrackSettings", Kn);
    var Qn = function(t) {
        function e(i, n) {
            y(this, e);
            var a = n.ResizeObserver || r.ResizeObserver;
            null === n.ResizeObserver && (a = !1);
            var s = zt({
                    createEl: !a
                }, n),
                o = _(this, t.call(this, i, s));
            return o.ResizeObserver = n.ResizeObserver || r.ResizeObserver, o.loadListener_ = null, o.resizeObserver_ = null, o.debouncedHandler_ = function(t, e, i) {
                var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r,
                    a = void 0;
                return function() {
                    var r = this,
                        s = arguments,
                        o = function() {
                            a = null, o = null, i || t.apply(r, s)
                        };
                    !a && i && t.apply(r, s), n.clearTimeout(a), a = n.setTimeout(o, e)
                }
            }((function() {
                o.resizeHandler()
            }), 100, !1, i), a ? (o.resizeObserver_ = new o.ResizeObserver(o.debouncedHandler_), o.resizeObserver_.observe(i.el())) : (o.loadListener_ = function() {
                o.el_.contentWindow && _t(o.el_.contentWindow, "resize", o.debouncedHandler_), o.off("load", o.loadListener_)
            }, o.on("load", o.loadListener_)), o
        }
        return v(e, t), e.prototype.createEl = function() {
            return t.prototype.createEl.call(this, "iframe", {
                className: "vjs-resize-manager"
            })
        }, e.prototype.resizeHandler = function() {
            this.player_.trigger("playerresize")
        }, e.prototype.dispose = function() {
            this.resizeObserver_ && (this.player_.el() && this.resizeObserver_.unobserve(this.player_.el()), this.resizeObserver_.disconnect()), this.el_ && this.el_.contentWindow && bt(this.el_.contentWindow, "resize", this.debouncedHandler_), this.loadListener_ && this.off("load", this.loadListener_), this.ResizeObserver = null, this.resizeObserver = null, this.debouncedHandler_ = null, this.loadListener_ = null
        }, e
    }(Gt);
    Gt.registerComponent("ResizeManager", Qn);
    var Jn = function(t) {
            var e = t.el();
            if (e.hasAttribute("src")) return t.triggerSourceset(e.src), !0;
            var i = t.$$("source"),
                r = [],
                n = "";
            if (!i.length) return !1;
            for (var a = 0; a < i.length; a++) {
                var s = i[a].src;
                s && -1 === r.indexOf(s) && r.push(s)
            }
            return !!r.length && (1 === r.length && (n = r[0]), t.triggerSourceset(n), !0)
        },
        Zn = Object.defineProperty({}, "innerHTML", {
            get: function() {
                return this.cloneNode(!0).innerHTML
            },
            set: function(t) {
                var e = u.createElement(this.nodeName.toLowerCase());
                e.innerHTML = t;
                for (var i = u.createDocumentFragment(); e.childNodes.length;) i.appendChild(e.childNodes[0]);
                return this.innerText = "", r.Element.prototype.appendChild.call(this, i), this.innerHTML
            }
        }),
        ta = function(t, e) {
            for (var i = {}, r = 0; r < t.length && !((i = Object.getOwnPropertyDescriptor(t[r], e)) && i.set && i.get); r++);
            return i.enumerable = !0, i.configurable = !0, i
        },
        ea = function(t) {
            var e = t.el();
            if (!e.resetSourceWatch_) {
                var i = {},
                    n = function(t) {
                        return ta([t.el(), r.HTMLMediaElement.prototype, r.Element.prototype, Zn], "innerHTML")
                    }(t),
                    a = function(i) {
                        return function() {
                            for (var r = arguments.length, n = Array(r), a = 0; a < r; a++) n[a] = arguments[a];
                            var s = i.apply(e, n);
                            return Jn(t), s
                        }
                    };
                ["append", "appendChild", "insertAdjacentHTML"].forEach((function(t) {
                    e[t] && (i[t] = e[t], e[t] = a(i[t]))
                })), Object.defineProperty(e, "innerHTML", zt(n, {
                    set: a(n.set)
                })), e.resetSourceWatch_ = function() {
                    e.resetSourceWatch_ = null, Object.keys(i).forEach((function(t) {
                        e[t] = i[t]
                    })), Object.defineProperty(e, "innerHTML", n)
                }, t.one("sourceset", e.resetSourceWatch_)
            }
        },
        ia = Object.defineProperty({}, "src", {
            get: function() {
                return this.hasAttribute("src") ? Ye(r.Element.prototype.getAttribute.call(this, "src")) : ""
            },
            set: function(t) {
                return r.Element.prototype.setAttribute.call(this, "src", t), t
            }
        }),
        ra = function(t) {
            if (t.featuresSourceset) {
                var e = t.el();
                if (!e.resetSourceset_) {
                    var i = function(t) {
                            return ta([t.el(), r.HTMLMediaElement.prototype, ia], "src")
                        }(t),
                        n = e.setAttribute,
                        a = e.load;
                    Object.defineProperty(e, "src", zt(i, {
                        set: function(r) {
                            var n = i.set.call(e, r);
                            return t.triggerSourceset(e.src), n
                        }
                    })), e.setAttribute = function(i, r) {
                        var a = n.call(e, i, r);
                        return /src/i.test(i) && t.triggerSourceset(e.src), a
                    }, e.load = function() {
                        var i = a.call(e);
                        return Jn(t) || (t.triggerSourceset(""), ea(t)), i
                    }, e.currentSrc ? t.triggerSourceset(e.currentSrc) : Jn(t) || ea(t), e.resetSourceset_ = function() {
                        e.resetSourceset_ = null, e.load = a, e.setAttribute = n, Object.defineProperty(e, "src", i), e.resetSourceWatch_ && e.resetSourceWatch_()
                    }
                }
            }
        },
        na = b(["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."], ["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."]),
        aa = function(t) {
            function e(i, r) {
                y(this, e);
                var n = _(this, t.call(this, i, r)),
                    a = i.source,
                    s = !1;
                if (a && (n.el_.currentSrc !== a.src || i.tag && 3 === i.tag.initNetworkState_) ? n.setSource(a) : n.handleLateInit_(n.el_), i.enableSourceset && n.setupSourcesetHandling_(), n.el_.hasChildNodes()) {
                    for (var o = n.el_.childNodes, u = o.length, l = []; u--;) {
                        var c = o[u];
                        "track" === c.nodeName.toLowerCase() && (n.featuresNativeTextTracks ? (n.remoteTextTrackEls().addTrackElement_(c), n.remoteTextTracks().addTrack(c.track), n.textTracks().addTrack(c.track), s || n.el_.hasAttribute("crossorigin") || !Ke(c.src) || (s = !0)) : l.push(c))
                    }
                    for (var h = 0; h < l.length; h++) n.el_.removeChild(l[h])
                }
                return n.proxyNativeTracks_(), n.featuresNativeTextTracks && s && p.warn(m(na)), n.restoreMetadataTracksInIOSNativePlayer_(), (de || Jt || ne) && !0 === i.nativeControlsForTouch && n.setControls(!0), n.proxyWebkitFullscreen_(), n.triggerReady(), n
            }
            return v(e, t), e.prototype.dispose = function() {
                this.el_ && this.el_.resetSourceset_ && this.el_.resetSourceset_(), e.disposeMediaElement(this.el_), this.options_ = null, t.prototype.dispose.call(this)
            }, e.prototype.setupSourcesetHandling_ = function() {
                ra(this)
            }, e.prototype.restoreMetadataTracksInIOSNativePlayer_ = function() {
                var t = this.textTracks(),
                    e = void 0,
                    i = function() {
                        e = [];
                        for (var i = 0; i < t.length; i++) {
                            var r = t[i];
                            "metadata" === r.kind && e.push({
                                track: r,
                                storedMode: r.mode
                            })
                        }
                    };
                i(), t.addEventListener("change", i), this.on("dispose", (function() {
                    return t.removeEventListener("change", i)
                }));
                var r = function i() {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        "disabled" === n.track.mode && n.track.mode !== n.storedMode && (n.track.mode = n.storedMode)
                    }
                    t.removeEventListener("change", i)
                };
                this.on("webkitbeginfullscreen", (function() {
                    t.removeEventListener("change", i), t.removeEventListener("change", r), t.addEventListener("change", r)
                })), this.on("webkitendfullscreen", (function() {
                    t.removeEventListener("change", i), t.addEventListener("change", i), t.removeEventListener("change", r)
                }))
            }, e.prototype.overrideNative_ = function(t, e) {
                var i = this;
                if (e === this["featuresNative" + t + "Tracks"]) {
                    var r = t.toLowerCase();
                    this[r + "TracksListeners_"] && Object.keys(this[r + "TracksListeners_"]).forEach((function(t) {
                        i.el()[r + "Tracks"].removeEventListener(t, i[r + "TracksListeners_"][t])
                    })), this["featuresNative" + t + "Tracks"] = !e, this[r + "TracksListeners_"] = null, this.proxyNativeTracksForType_(r)
                }
            }, e.prototype.overrideNativeAudioTracks = function(t) {
                this.overrideNative_("Audio", t)
            }, e.prototype.overrideNativeVideoTracks = function(t) {
                this.overrideNative_("Video", t)
            }, e.prototype.proxyNativeTracksForType_ = function(t) {
                var e = this,
                    i = xi[t],
                    r = this.el()[i.getterName],
                    n = this[i.getterName]();
                if (this["featuresNative" + i.capitalName + "Tracks"] && r && r.addEventListener) {
                    var a = {
                            change: function(t) {
                                n.trigger({
                                    type: "change",
                                    target: n,
                                    currentTarget: n,
                                    srcElement: n
                                })
                            },
                            addtrack: function(t) {
                                n.addTrack(t.track)
                            },
                            removetrack: function(t) {
                                n.removeTrack(t.track)
                            }
                        },
                        s = function() {
                            for (var t = [], e = 0; e < n.length; e++) {
                                for (var i = !1, a = 0; a < r.length; a++)
                                    if (r[a] === n[e]) {
                                        i = !0;
                                        break
                                    }
                                i || t.push(n[e])
                            }
                            for (; t.length;) n.removeTrack(t.shift())
                        };
                    this[i.getterName + "Listeners_"] = a, Object.keys(a).forEach((function(t) {
                        var i = a[t];
                        r.addEventListener(t, i), e.on("dispose", (function(e) {
                            return r.removeEventListener(t, i)
                        }))
                    })), this.on("loadstart", s), this.on("dispose", (function(t) {
                        return e.off("loadstart", s)
                    }))
                }
            }, e.prototype.proxyNativeTracks_ = function() {
                var t = this;
                xi.names.forEach((function(e) {
                    t.proxyNativeTracksForType_(e)
                }))
            }, e.prototype.createEl = function() {
                var t = this.options_.tag;
                if (!t || !this.options_.playerElIngest && !this.movingMediaElementInDOM) {
                    if (t) {
                        var i = t.cloneNode(!0);
                        t.parentNode && t.parentNode.insertBefore(i, t), e.disposeMediaElement(t), t = i
                    } else {
                        t = u.createElement("video");
                        var r = zt({}, this.options_.tag && q(this.options_.tag));
                        de && !0 === this.options_.nativeControlsForTouch || delete r.controls, V(t, C(r, {
                            id: this.options_.techId,
                            class: "vjs-tech"
                        }))
                    }
                    t.playerId = this.options_.playerId
                }
                void 0 !== this.options_.preload && z(t, "preload", this.options_.preload);
                for (var n = ["loop", "muted", "playsinline", "autoplay"], a = 0; a < n.length; a++) {
                    var s = n[a],
                        o = this.options_[s];
                    void 0 !== o && (o ? z(t, s, s) : G(t, s), t[s] = o)
                }
                return t
            }, e.prototype.handleLateInit_ = function(t) {
                if (0 !== t.networkState && 3 !== t.networkState) {
                    if (0 === t.readyState) {
                        var e = !1,
                            i = function() {
                                e = !0
                            };
                        this.on("loadstart", i);
                        var r = function() {
                            e || this.trigger("loadstart")
                        };
                        return this.on("loadedmetadata", r), void this.ready((function() {
                            this.off("loadstart", i), this.off("loadedmetadata", r), e || this.trigger("loadstart")
                        }))
                    }
                    var n = ["loadstart"];
                    n.push("loadedmetadata"), t.readyState >= 2 && n.push("loadeddata"), t.readyState >= 3 && n.push("canplay"), t.readyState >= 4 && n.push("canplaythrough"), this.ready((function() {
                        n.forEach((function(t) {
                            this.trigger(t)
                        }), this)
                    }))
                }
            }, e.prototype.setCurrentTime = function(t) {
                try {
                    this.el_.currentTime = t
                } catch (t) {
                    p(t, "Video is not ready. (Video.js)")
                }
            }, e.prototype.duration = function() {
                var t = this;
                if (this.el_.duration === 1 / 0 && ie && oe && 0 === this.el_.currentTime) {
                    return this.on("timeupdate", (function e() {
                        t.el_.currentTime > 0 && (t.el_.duration === 1 / 0 && t.trigger("durationchange"), t.off("timeupdate", e))
                    })), NaN
                }
                return this.el_.duration || NaN
            }, e.prototype.width = function() {
                return this.el_.offsetWidth
            }, e.prototype.height = function() {
                return this.el_.offsetHeight
            }, e.prototype.proxyWebkitFullscreen_ = function() {
                var t = this;
                if ("webkitDisplayingFullscreen" in this.el_) {
                    var e = function() {
                            this.trigger("fullscreenchange", {
                                isFullscreen: !1
                            })
                        },
                        i = function() {
                            "webkitPresentationMode" in this.el_ && "picture-in-picture" !== this.el_.webkitPresentationMode && (this.one("webkitendfullscreen", e), this.trigger("fullscreenchange", {
                                isFullscreen: !0
                            }))
                        };
                    this.on("webkitbeginfullscreen", i), this.on("dispose", (function() {
                        t.off("webkitbeginfullscreen", i), t.off("webkitendfullscreen", e)
                    }))
                }
            }, e.prototype.supportsFullScreen = function() {
                if ("function" == typeof this.el_.webkitEnterFullScreen) {
                    var t = r.navigator && r.navigator.userAgent || "";
                    if (/Android/.test(t) || !/Chrome|Mac OS X 10.5/.test(t)) return !0
                }
                return !1
            }, e.prototype.enterFullScreen = function() {
                var t = this.el_;
                t.paused && t.networkState <= t.HAVE_METADATA ? (this.el_.play(), this.setTimeout((function() {
                    t.pause(), t.webkitEnterFullScreen()
                }), 0)) : t.webkitEnterFullScreen()
            }, e.prototype.exitFullScreen = function() {
                this.el_.webkitExitFullScreen()
            }, e.prototype.src = function(t) {
                if (void 0 === t) return this.el_.src;
                this.setSrc(t)
            }, e.prototype.reset = function() {
                e.resetMediaElement(this.el_)
            }, e.prototype.currentSrc = function() {
                return this.currentSource_ ? this.currentSource_.src : this.el_.currentSrc
            }, e.prototype.setControls = function(t) {
                this.el_.controls = !!t
            }, e.prototype.addTextTrack = function(e, i, r) {
                return this.featuresNativeTextTracks ? this.el_.addTextTrack(e, i, r) : t.prototype.addTextTrack.call(this, e, i, r)
            }, e.prototype.createRemoteTextTrack = function(e) {
                if (!this.featuresNativeTextTracks) return t.prototype.createRemoteTextTrack.call(this, e);
                var i = u.createElement("track");
                return e.kind && (i.kind = e.kind), e.label && (i.label = e.label), (e.language || e.srclang) && (i.srclang = e.language || e.srclang), e.default && (i.default = e.default), e.id && (i.id = e.id), e.src && (i.src = e.src), i
            }, e.prototype.addRemoteTextTrack = function(e, i) {
                var r = t.prototype.addRemoteTextTrack.call(this, e, i);
                return this.featuresNativeTextTracks && this.el().appendChild(r), r
            }, e.prototype.removeRemoteTextTrack = function(e) {
                if (t.prototype.removeRemoteTextTrack.call(this, e), this.featuresNativeTextTracks)
                    for (var i = this.$$("track"), r = i.length; r--;) e !== i[r] && e !== i[r].track || this.el().removeChild(i[r])
            }, e.prototype.getVideoPlaybackQuality = function() {
                if ("function" == typeof this.el().getVideoPlaybackQuality) return this.el().getVideoPlaybackQuality();
                var t = {};
                return void 0 !== this.el().webkitDroppedFrameCount && void 0 !== this.el().webkitDecodedFrameCount && (t.droppedVideoFrames = this.el().webkitDroppedFrameCount, t.totalVideoFrames = this.el().webkitDecodedFrameCount), r.performance && "function" == typeof r.performance.now ? t.creationTime = r.performance.now() : r.performance && r.performance.timing && "number" == typeof r.performance.timing.navigationStart && (t.creationTime = r.Date.now() - r.performance.timing.navigationStart), t
            }, e
        }(gr);
    if (I()) {
        aa.TEST_VID = u.createElement("video");
        var sa = u.createElement("track");
        sa.kind = "captions", sa.srclang = "en", sa.label = "English", aa.TEST_VID.appendChild(sa)
    }
    aa.isSupported = function() {
        try {
            aa.TEST_VID.volume = .5
        } catch (t) {
            return !1
        }
        return !(!aa.TEST_VID || !aa.TEST_VID.canPlayType)
    }, aa.canPlayType = function(t) {
        return aa.TEST_VID.canPlayType(t)
    }, aa.canPlaySource = function(t, e) {
        return aa.canPlayType(t.type)
    }, aa.canControlVolume = function() {
        try {
            var t = aa.TEST_VID.volume;
            return aa.TEST_VID.volume = t / 2 + .1, t !== aa.TEST_VID.volume
        } catch (t) {
            return !1
        }
    }, aa.canMuteVolume = function() {
        try {
            var t = aa.TEST_VID.muted;
            return aa.TEST_VID.muted = !t, aa.TEST_VID.muted ? z(aa.TEST_VID, "muted", "muted") : G(aa.TEST_VID, "muted"), t !== aa.TEST_VID.muted
        } catch (t) {
            return !1
        }
    }, aa.canControlPlaybackRate = function() {
        if (ie && oe && ue < 58) return !1;
        try {
            var t = aa.TEST_VID.playbackRate;
            return aa.TEST_VID.playbackRate = t / 2 + .1, t !== aa.TEST_VID.playbackRate
        } catch (t) {
            return !1
        }
    }, aa.canOverrideAttributes = function() {
        try {
            var t = function() {};
            Object.defineProperty(u.createElement("video"), "src", {
                get: t,
                set: t
            }), Object.defineProperty(u.createElement("audio"), "src", {
                get: t,
                set: t
            }), Object.defineProperty(u.createElement("video"), "innerHTML", {
                get: t,
                set: t
            }), Object.defineProperty(u.createElement("audio"), "innerHTML", {
                get: t,
                set: t
            })
        } catch (t) {
            return !1
        }
        return !0
    }, aa.supportsNativeTextTracks = function() {
        return he || te && oe
    }, aa.supportsNativeVideoTracks = function() {
        return !(!aa.TEST_VID || !aa.TEST_VID.videoTracks)
    }, aa.supportsNativeAudioTracks = function() {
        return !(!aa.TEST_VID || !aa.TEST_VID.audioTracks)
    }, aa.Events = ["loadstart", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "durationchange", "timeupdate", "progress", "play", "pause", "ratechange", "resize", "volumechange"], aa.prototype.featuresVolumeControl = aa.canControlVolume(), aa.prototype.featuresMuteControl = aa.canMuteVolume(), aa.prototype.featuresPlaybackRate = aa.canControlPlaybackRate(), aa.prototype.featuresSourceset = aa.canOverrideAttributes(), aa.prototype.movingMediaElementInDOM = !te, aa.prototype.featuresFullscreenResize = !0, aa.prototype.featuresProgressEvents = !0, aa.prototype.featuresTimeupdateEvents = !0, aa.prototype.featuresNativeTextTracks = aa.supportsNativeTextTracks(), aa.prototype.featuresNativeVideoTracks = aa.supportsNativeVideoTracks(), aa.prototype.featuresNativeAudioTracks = aa.supportsNativeAudioTracks();
    var oa = aa.TEST_VID && aa.TEST_VID.constructor.prototype.canPlayType,
        ua = /^application\/(?:x-|vnd\.apple\.)mpegurl/i;
    aa.patchCanPlayType = function() {
        re >= 4 && !ae && !oe && (aa.TEST_VID.constructor.prototype.canPlayType = function(t) {
            return t && ua.test(t) ? "maybe" : oa.call(this, t)
        })
    }, aa.unpatchCanPlayType = function() {
        var t = aa.TEST_VID.constructor.prototype.canPlayType;
        return aa.TEST_VID.constructor.prototype.canPlayType = oa, t
    }, aa.patchCanPlayType(), aa.disposeMediaElement = function(t) {
        if (t) {
            for (t.parentNode && t.parentNode.removeChild(t); t.hasChildNodes();) t.removeChild(t.firstChild);
            t.removeAttribute("src"), "function" == typeof t.load && function() {
                try {
                    t.load()
                } catch (t) {}
            }()
        }
    }, aa.resetMediaElement = function(t) {
        if (t) {
            for (var e = t.querySelectorAll("source"), i = e.length; i--;) t.removeChild(e[i]);
            t.removeAttribute("src"), "function" == typeof t.load && function() {
                try {
                    t.load()
                } catch (t) {}
            }()
        }
    }, ["muted", "defaultMuted", "autoplay", "controls", "loop", "playsinline"].forEach((function(t) {
        aa.prototype[t] = function() {
            return this.el_[t] || this.el_.hasAttribute(t)
        }
    })), ["muted", "defaultMuted", "autoplay", "loop", "playsinline"].forEach((function(t) {
        aa.prototype["set" + Wt(t)] = function(e) {
            this.el_[t] = e, e ? this.el_.setAttribute(t, t) : this.el_.removeAttribute(t)
        }
    })), ["paused", "currentTime", "buffered", "volume", "poster", "preload", "error", "seeking", "seekable", "ended", "playbackRate", "defaultPlaybackRate", "played", "networkState", "readyState", "videoWidth", "videoHeight"].forEach((function(t) {
        aa.prototype[t] = function() {
            return this.el_[t]
        }
    })), ["volume", "src", "poster", "preload", "playbackRate", "defaultPlaybackRate"].forEach((function(t) {
        aa.prototype["set" + Wt(t)] = function(e) {
            this.el_[t] = e
        }
    })), ["pause", "load", "play"].forEach((function(t) {
        aa.prototype[t] = function() {
            return this.el_[t]()
        }
    })), gr.withSourceHandlers(aa), aa.nativeSourceHandler = {}, aa.nativeSourceHandler.canPlayType = function(t) {
        try {
            return aa.TEST_VID.canPlayType(t)
        } catch (t) {
            return ""
        }
    }, aa.nativeSourceHandler.canHandleSource = function(t, e) {
        if (t.type) return aa.nativeSourceHandler.canPlayType(t.type);
        if (t.src) {
            var i = $e(t.src);
            return aa.nativeSourceHandler.canPlayType("video/" + i)
        }
        return ""
    }, aa.nativeSourceHandler.handleSource = function(t, e, i) {
        e.setSrc(t.src)
    }, aa.nativeSourceHandler.dispose = function() {}, aa.registerSourceHandler(aa.nativeSourceHandler), gr.registerTech("Html5", aa);
    var la = b(["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "], ["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "]),
        ca = ["progress", "abort", "suspend", "emptied", "stalled", "loadedmetadata", "loadeddata", "timeupdate", "resize", "volumechange", "texttrackchange"],
        ha = {
            canplay: "CanPlay",
            canplaythrough: "CanPlayThrough",
            playing: "Playing",
            seeked: "Seeked"
        },
        da = function(t) {
            function e(i, r, n) {
                if (y(this, e), i.id = i.id || r.id || "vjs_video_" + ut(), (r = C(e.getTagSettings(i), r)).initChildren = !1, r.createEl = !1, r.evented = !1, r.reportTouchActivity = !1, !r.language)
                    if ("function" == typeof i.closest) {
                        var a = i.closest("[lang]");
                        a && a.getAttribute && (r.language = a.getAttribute("lang"))
                    } else
                        for (var s = i; s && 1 === s.nodeType;) {
                            if (q(s).hasOwnProperty("lang")) {
                                r.language = s.getAttribute("lang");
                                break
                            }
                            s = s.parentNode
                        }
                    var o = _(this, t.call(this, null, r, n));
                if (o.isPosterFromTech_ = !1, o.queuedCallbacks_ = [], o.isReady_ = !1, o.hasStarted_ = !1, o.userActive_ = !1, !o.options_ || !o.options_.techOrder || !o.options_.techOrder.length) throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");
                if (o.tag = i, o.tagAttributes = i && q(i), o.language(o.options_.language), r.languages) {
                    var u = {};
                    Object.getOwnPropertyNames(r.languages).forEach((function(t) {
                        u[t.toLowerCase()] = r.languages[t]
                    })), o.languages_ = u
                } else o.languages_ = e.prototype.options_.languages;
                o.cache_ = {}, o.poster_ = r.poster || "", o.controls_ = !!r.controls, o.cache_.lastVolume = 1, i.controls = !1, i.removeAttribute("controls"), i.hasAttribute("autoplay") ? o.options_.autoplay = !0 : o.autoplay(o.options_.autoplay), o.scrubbing_ = !1, o.el_ = o.createEl(), o.cache_.lastPlaybackRate = o.defaultPlaybackRate(), Ht(o, {
                    eventBusKey: "el_"
                });
                var l = zt(o.options_);
                if (r.plugins) {
                    var c = r.plugins;
                    Object.keys(c).forEach((function(t) {
                        if ("function" != typeof this[t]) throw new Error('plugin "' + t + '" does not exist');
                        this[t](c[t])
                    }), o)
                }
                o.options_.playerOptions = l, o.middleware_ = [], o.initChildren(), o.isAudio("audio" === i.nodeName.toLowerCase()), o.controls() ? o.addClass("vjs-controls-enabled") : o.addClass("vjs-controls-disabled"), o.el_.setAttribute("role", "region"), o.isAudio() ? o.el_.setAttribute("aria-label", o.localize("Audio Player")) : o.el_.setAttribute("aria-label", o.localize("Video Player")), o.isAudio() && o.addClass("vjs-audio"), o.flexNotSupported_() && o.addClass("vjs-no-flex"), te || o.addClass("vjs-workinghover"), e.players[o.id_] = o;
                var h = "7.1.0".split(".")[0];
                return o.addClass("vjs-v" + h), o.userActive(!0), o.reportUserActivity(), o.one("play", o.listenForUserActivity_), o.on("fullscreenchange", o.handleFullscreenChange_), o.on("stageclick", o.handleStageClick_), o.changingSrc_ = !1, o.playWaitingForReady_ = !1, o.playOnLoadstart_ = null, o
            }
            return v(e, t), e.prototype.dispose = function() {
                this.trigger("dispose"), this.off("dispose"), this.styleEl_ && this.styleEl_.parentNode && (this.styleEl_.parentNode.removeChild(this.styleEl_), this.styleEl_ = null), e.players[this.id_] = null, this.tag && this.tag.player && (this.tag.player = null), this.el_ && this.el_.player && (this.el_.player = null), this.tech_ && (this.tech_.dispose(), this.isPosterFromTech_ = !1, this.poster_ = ""), this.playerElIngest_ && (this.playerElIngest_ = null), this.tag && (this.tag = null), vr[this.id()] = null, t.prototype.dispose.call(this)
            }, e.prototype.createEl = function() {
                var e = this.tag,
                    i = void 0,
                    n = this.playerElIngest_ = e.parentNode && e.parentNode.hasAttribute && e.parentNode.hasAttribute("data-vjs-player"),
                    a = "video-js" === this.tag.tagName.toLowerCase();
                n ? i = this.el_ = e.parentNode : a || (i = this.el_ = t.prototype.createEl.call(this, "div"));
                var s = q(e);
                if (a) {
                    for (i = this.el_ = e, e = this.tag = u.createElement("video"); i.children.length;) e.appendChild(i.firstChild);
                    B(i, "video-js") || j(i, "video-js"), i.appendChild(e), n = this.playerElIngest_ = i, Object.keys(i).forEach((function(t) {
                        e[t] = i[t]
                    }))
                }
                if (e.setAttribute("tabindex", "-1"), le && e.setAttribute("role", "application"), e.removeAttribute("width"), e.removeAttribute("height"), Object.getOwnPropertyNames(s).forEach((function(t) {
                        a && "class" === t || i.setAttribute(t, s[t]), a && e.setAttribute(t, s[t])
                    })), e.playerId = e.id, e.id += "_html5_api", e.className = "vjs-tech", e.player = i.player = this, this.addClass("vjs-paused"), !0 !== r.VIDEOJS_NO_DYNAMIC_STYLE) {
                    this.styleEl_ = Lt("vjs-styles-dimensions");
                    var o = nt(".vjs-styles-defaults"),
                        l = nt("head");
                    l.insertBefore(this.styleEl_, o ? o.nextSibling : l.firstChild)
                }
                this.width(this.options_.width), this.height(this.options_.height), this.fluid(this.options_.fluid), this.aspectRatio(this.options_.aspectRatio);
                for (var c = e.getElementsByTagName("a"), h = 0; h < c.length; h++) {
                    var d = c.item(h);
                    j(d, "vjs-hidden"), d.setAttribute("hidden", "hidden")
                }
                return e.initNetworkState_ = e.networkState, e.parentNode && !n && e.parentNode.insertBefore(i, e), N(e, i), this.children_.unshift(e), this.el_.setAttribute("lang", this.language_), this.el_ = i, i
            }, e.prototype.width = function(t) {
                return this.dimension("width", t)
            }, e.prototype.height = function(t) {
                return this.dimension("height", t)
            }, e.prototype.dimension = function(t, e) {
                var i = t + "_";
                if (void 0 === e) return this[i] || 0;
                if ("" === e) return this[i] = void 0, void this.updateStyleEl_();
                var r = parseFloat(e);
                isNaN(r) ? p.error('Improper value "' + e + '" supplied for for ' + t) : (this[i] = r, this.updateStyleEl_())
            }, e.prototype.fluid = function(t) {
                if (void 0 === t) return !!this.fluid_;
                this.fluid_ = !!t, t ? this.addClass("vjs-fluid") : this.removeClass("vjs-fluid"), this.updateStyleEl_()
            }, e.prototype.aspectRatio = function(t) {
                if (void 0 === t) return this.aspectRatio_;
                if (!/^\d+\:\d+$/.test(t)) throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");
                this.aspectRatio_ = t, this.fluid(!0), this.updateStyleEl_()
            }, e.prototype.updateStyleEl_ = function() {
                if (!0 !== r.VIDEOJS_NO_DYNAMIC_STYLE) {
                    var t = void 0,
                        e = void 0,
                        i = void 0,
                        n = (void 0 !== this.aspectRatio_ && "auto" !== this.aspectRatio_ ? this.aspectRatio_ : this.videoWidth() > 0 ? this.videoWidth() + ":" + this.videoHeight() : "16:9").split(":"),
                        a = n[1] / n[0];
                    t = void 0 !== this.width_ ? this.width_ : void 0 !== this.height_ ? this.height_ / a : this.videoWidth() || 300, e = void 0 !== this.height_ ? this.height_ : t * a, i = /^[^a-zA-Z]/.test(this.id()) ? "dimensions-" + this.id() : this.id() + "-dimensions", this.addClass(i), Pt(this.styleEl_, "\n      ." + i + " {\n        width: " + t + "px;\n        height: " + e + "px;\n      }\n\n      ." + i + ".vjs-fluid {\n        padding-top: " + 100 * a + "%;\n      }\n    ")
                } else {
                    var s = "number" == typeof this.width_ ? this.width_ : this.options_.width,
                        o = "number" == typeof this.height_ ? this.height_ : this.options_.height,
                        u = this.tech_ && this.tech_.el();
                    u && (s >= 0 && (u.width = s), o >= 0 && (u.height = o))
                }
            }, e.prototype.loadTech_ = function(t, e) {
                var i = this;
                this.tech_ && this.unloadTech_();
                var r = Wt(t),
                    n = t.charAt(0).toLowerCase() + t.slice(1);
                "Html5" !== r && this.tag && (gr.getTech("Html5").disposeMediaElement(this.tag), this.tag.player = null, this.tag = null), this.techName_ = r, this.isReady_ = !1;
                var a = {
                    source: e,
                    autoplay: "string" != typeof this.autoplay() && this.autoplay(),
                    nativeControlsForTouch: this.options_.nativeControlsForTouch,
                    playerId: this.id(),
                    techId: this.id() + "_" + r + "_api",
                    playsinline: this.options_.playsinline,
                    preload: this.options_.preload,
                    loop: this.options_.loop,
                    muted: this.options_.muted,
                    poster: this.poster(),
                    language: this.language(),
                    playerElIngest: this.playerElIngest_ || !1,
                    "vtt.js": this.options_["vtt.js"],
                    canOverridePoster: !!this.options_.techCanOverridePoster,
                    enableSourceset: this.options_.enableSourceset
                };
                Ri.names.forEach((function(t) {
                    var e = Ri[t];
                    a[e.getterName] = i[e.privateName]
                })), C(a, this.options_[r]), C(a, this.options_[n]), C(a, this.options_[t.toLowerCase()]), this.tag && (a.tag = this.tag), e && e.src === this.cache_.src && this.cache_.currentTime > 0 && (a.startTime = this.cache_.currentTime);
                var s = gr.getTech(t);
                if (!s) throw new Error("No Tech named '" + r + "' exists! '" + r + "' should be registered using videojs.registerTech()'");
                this.tech_ = new s(a), this.tech_.ready(Ot(this, this.handleTechReady_), !0), Ie(this.textTracksJson_ || [], this.tech_), ca.forEach((function(t) {
                    i.on(i.tech_, t, i["handleTech" + Wt(t) + "_"])
                })), Object.keys(ha).forEach((function(t) {
                    i.on(i.tech_, t, (function(e) {
                        0 === i.tech_.playbackRate() && i.tech_.seeking() ? i.queuedCallbacks_.push({
                            callback: i["handleTech" + ha[t] + "_"].bind(i),
                            event: e
                        }) : i["handleTech" + ha[t] + "_"](e)
                    }))
                })), this.on(this.tech_, "loadstart", this.handleTechLoadStart_), this.on(this.tech_, "sourceset", this.handleTechSourceset_), this.on(this.tech_, "waiting", this.handleTechWaiting_), this.on(this.tech_, "ended", this.handleTechEnded_), this.on(this.tech_, "seeking", this.handleTechSeeking_), this.on(this.tech_, "play", this.handleTechPlay_), this.on(this.tech_, "firstplay", this.handleTechFirstPlay_), this.on(this.tech_, "pause", this.handleTechPause_), this.on(this.tech_, "durationchange", this.handleTechDurationChange_), this.on(this.tech_, "fullscreenchange", this.handleTechFullscreenChange_), this.on(this.tech_, "error", this.handleTechError_), this.on(this.tech_, "loadedmetadata", this.updateStyleEl_), this.on(this.tech_, "posterchange", this.handleTechPosterChange_), this.on(this.tech_, "textdata", this.handleTechTextData_), this.on(this.tech_, "ratechange", this.handleTechRateChange_), this.usingNativeControls(this.techGet_("controls")), this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_(), this.tech_.el().parentNode === this.el() || "Html5" === r && this.tag || N(this.tech_.el(), this.el()), this.tag && (this.tag.player = null, this.tag = null)
            }, e.prototype.unloadTech_ = function() {
                var t = this;
                Ri.names.forEach((function(e) {
                    var i = Ri[e];
                    t[i.privateName] = t[i.getterName]()
                })), this.textTracksJson_ = Oe(this.tech_), this.isReady_ = !1, this.tech_.dispose(), this.tech_ = !1, this.isPosterFromTech_ && (this.poster_ = "", this.trigger("posterchange")), this.isPosterFromTech_ = !1
            }, e.prototype.tech = function(t) {
                return void 0 === t && p.warn(m(la)), this.tech_
            }, e.prototype.addTechControlsListeners_ = function() {
                this.removeTechControlsListeners_(), this.on(this.tech_, "mousedown", this.handleTechClick_), this.on(this.tech_, "dblclick", this.handleTechDoubleClick_), this.on(this.tech_, "touchstart", this.handleTechTouchStart_), this.on(this.tech_, "touchmove", this.handleTechTouchMove_), this.on(this.tech_, "touchend", this.handleTechTouchEnd_), this.on(this.tech_, "tap", this.handleTechTap_)
            }, e.prototype.removeTechControlsListeners_ = function() {
                this.off(this.tech_, "tap", this.handleTechTap_), this.off(this.tech_, "touchstart", this.handleTechTouchStart_), this.off(this.tech_, "touchmove", this.handleTechTouchMove_), this.off(this.tech_, "touchend", this.handleTechTouchEnd_), this.off(this.tech_, "mousedown", this.handleTechClick_), this.off(this.tech_, "dblclick", this.handleTechDoubleClick_)
            }, e.prototype.handleTechReady_ = function() {
                this.triggerReady(), this.cache_.volume && this.techCall_("setVolume", this.cache_.volume), this.handleTechPosterChange_(), this.handleTechDurationChange_()
            }, e.prototype.handleTechLoadStart_ = function() {
                this.removeClass("vjs-ended"), this.removeClass("vjs-seeking"), this.error(null), this.paused() ? (this.hasStarted(!1), this.trigger("loadstart")) : (this.trigger("loadstart"), this.trigger("firstplay")), this.manualAutoplay_(this.autoplay())
            }, e.prototype.manualAutoplay_ = function(t) {
                var e = this;
                if (this.tech_ && "string" == typeof t) {
                    var i = function() {
                            var t = e.muted();
                            e.muted(!0);
                            var i = e.play();
                            if (i && i.then && i.catch) return i.catch((function(i) {
                                e.muted(t)
                            }))
                        },
                        r = void 0;
                    if ("any" === t ? (r = this.play()) && r.then && r.catch && r.catch((function() {
                            return i()
                        })) : r = "muted" === t ? i() : this.play(), r && r.then && r.catch) return r.then((function() {
                        e.trigger({
                            type: "autoplay-success",
                            autoplay: t
                        })
                    })).catch((function(i) {
                        e.trigger({
                            type: "autoplay-failure",
                            autoplay: t
                        })
                    }))
                }
            }, e.prototype.updateSourceCaches_ = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    e = t,
                    i = "";
                "string" != typeof e && (e = t.src, i = t.type), this.cache_.source = this.cache_.source || {}, this.cache_.sources = this.cache_.sources || [], e && !i && (i = Or(this, e)), this.cache_.source = zt({}, t, {
                    src: e,
                    type: i
                });
                for (var r = this.cache_.sources.filter((function(t) {
                        return t.src && t.src === e
                    })), n = [], a = this.$$("source"), s = [], o = 0; o < a.length; o++) {
                    var u = q(a[o]);
                    n.push(u), u.src && u.src === e && s.push(u.src)
                }
                s.length && !r.length ? this.cache_.sources = n : r.length || (this.cache_.sources = [this.cache_.source]), this.cache_.src = e
            }, e.prototype.handleTechSourceset_ = function(t) {
                var e = this;
                if (!this.changingSrc_ && (this.updateSourceCaches_(t.src), !t.src)) {
                    this.tech_.one(["sourceset", "loadstart"], (function t(i) {
                        "sourceset" !== i.type && e.updateSourceCaches_(e.techGet_("currentSrc")), e.tech_.off(["sourceset", "loadstart"], t)
                    }))
                }
                this.trigger({
                    src: t.src,
                    type: "sourceset"
                })
            }, e.prototype.hasStarted = function(t) {
                if (void 0 === t) return this.hasStarted_;
                t !== this.hasStarted_ && (this.hasStarted_ = t, this.hasStarted_ ? (this.addClass("vjs-has-started"), this.trigger("firstplay")) : this.removeClass("vjs-has-started"))
            }, e.prototype.handleTechPlay_ = function() {
                this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.hasStarted(!0), this.trigger("play")
            }, e.prototype.handleTechRateChange_ = function() {
                this.tech_.playbackRate() > 0 && 0 === this.cache_.lastPlaybackRate && (this.queuedCallbacks_.forEach((function(t) {
                    return t.callback(t.event)
                })), this.queuedCallbacks_ = []), this.cache_.lastPlaybackRate = this.tech_.playbackRate(), this.trigger("ratechange")
            }, e.prototype.handleTechWaiting_ = function() {
                var t = this;
                this.addClass("vjs-waiting"), this.trigger("waiting"), this.one("timeupdate", (function() {
                    return t.removeClass("vjs-waiting")
                }))
            }, e.prototype.handleTechCanPlay_ = function() {
                this.removeClass("vjs-waiting"), this.trigger("canplay")
            }, e.prototype.handleTechCanPlayThrough_ = function() {
                this.removeClass("vjs-waiting"), this.trigger("canplaythrough")
            }, e.prototype.handleTechPlaying_ = function() {
                this.removeClass("vjs-waiting"), this.trigger("playing")
            }, e.prototype.handleTechSeeking_ = function() {
                this.addClass("vjs-seeking"), this.trigger("seeking")
            }, e.prototype.handleTechSeeked_ = function() {
                this.removeClass("vjs-seeking"), this.trigger("seeked")
            }, e.prototype.handleTechFirstPlay_ = function() {
                this.options_.starttime && (p.warn("Passing the `starttime` option to the player will be deprecated in 6.0"), this.currentTime(this.options_.starttime)), this.addClass("vjs-has-started"), this.trigger("firstplay")
            }, e.prototype.handleTechPause_ = function() {
                this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.trigger("pause")
            }, e.prototype.handleTechEnded_ = function() {
                this.addClass("vjs-ended"), this.options_.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause(), this.trigger("ended")
            }, e.prototype.handleTechDurationChange_ = function() {
                this.duration(this.techGet_("duration"))
            }, e.prototype.handleTechClick_ = function(t) {
                rt(t) && this.controls_ && (this.paused() ? Le(this.play()) : this.pause())
            }, e.prototype.handleTechDoubleClick_ = function(t) {
                this.controls_ && (Array.prototype.some.call(this.$$(".vjs-control-bar, .vjs-modal-dialog"), (function(e) {
                    return e.contains(t.target)
                })) || (this.isFullscreen() ? this.exitFullscreen() : this.requestFullscreen()))
            }, e.prototype.handleTechTap_ = function() {
                this.userActive(!this.userActive())
            }, e.prototype.handleTechTouchStart_ = function() {
                this.userWasActive = this.userActive()
            }, e.prototype.handleTechTouchMove_ = function() {
                this.userWasActive && this.reportUserActivity()
            }, e.prototype.handleTechTouchEnd_ = function(t) {
                t.preventDefault()
            }, e.prototype.handleFullscreenChange_ = function() {
                this.isFullscreen() ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen")
            }, e.prototype.handleStageClick_ = function() {
                this.reportUserActivity()
            }, e.prototype.handleTechFullscreenChange_ = function(t, e) {
                e && this.isFullscreen(e.isFullscreen), this.trigger("fullscreenchange")
            }, e.prototype.handleTechError_ = function() {
                var t = this.tech_.error();
                this.error(t)
            }, e.prototype.handleTechTextData_ = function() {
                var t = null;
                arguments.length > 1 && (t = arguments[1]), this.trigger("textdata", t)
            }, e.prototype.getCache = function() {
                return this.cache_
            }, e.prototype.techCall_ = function(t, e) {
                this.ready((function() {
                    if (t in kr) return function(t, e, i, r) {
                        return e[i](t.reduce(Er(i), r))
                    }(this.middleware_, this.tech_, t, e);
                    if (t in Cr) return Tr(this.middleware_, this.tech_, t, e);
                    try {
                        this.tech_ && this.tech_[t](e)
                    } catch (t) {
                        throw p(t), t
                    }
                }), !0)
            }, e.prototype.techGet_ = function(t) {
                if (this.tech_ && this.tech_.isReady_) {
                    if (t in Sr) return function(t, e, i) {
                        return t.reduceRight(Er(i), e[i]())
                    }(this.middleware_, this.tech_, t);
                    if (t in Cr) return Tr(this.middleware_, this.tech_, t);
                    try {
                        return this.tech_[t]()
                    } catch (e) {
                        if (void 0 === this.tech_[t]) throw p("Video.js: " + t + " method not defined for " + this.techName_ + " playback technology.", e), e;
                        if ("TypeError" === e.name) throw p("Video.js: " + t + " unavailable on " + this.techName_ + " playback technology element.", e), this.tech_.isReady_ = !1, e;
                        throw p(e), e
                    }
                }
            }, e.prototype.play = function() {
                var t = this;
                if (this.playOnLoadstart_ && this.off("loadstart", this.playOnLoadstart_), this.isReady_) {
                    if (!this.changingSrc_ && (this.src() || this.currentSrc())) return this.techGet_("play");
                    this.playOnLoadstart_ = function() {
                        t.playOnLoadstart_ = null, Le(t.play())
                    }, this.one("loadstart", this.playOnLoadstart_)
                } else {
                    if (this.playWaitingForReady_) return;
                    this.playWaitingForReady_ = !0, this.ready((function() {
                        t.playWaitingForReady_ = !1, Le(t.play())
                    }))
                }
            }, e.prototype.pause = function() {
                this.techCall_("pause")
            }, e.prototype.paused = function() {
                return !1 !== this.techGet_("paused")
            }, e.prototype.played = function() {
                return this.techGet_("played") || ge(0, 0)
            }, e.prototype.scrubbing = function(t) {
                if (void 0 === t) return this.scrubbing_;
                this.scrubbing_ = !!t, t ? this.addClass("vjs-scrubbing") : this.removeClass("vjs-scrubbing")
            }, e.prototype.currentTime = function(t) {
                return void 0 !== t ? (t < 0 && (t = 0), void this.techCall_("setCurrentTime", t)) : (this.cache_.currentTime = this.techGet_("currentTime") || 0, this.cache_.currentTime)
            }, e.prototype.duration = function(t) {
                if (void 0 === t) return void 0 !== this.cache_.duration ? this.cache_.duration : NaN;
                (t = parseFloat(t)) < 0 && (t = 1 / 0), t !== this.cache_.duration && (this.cache_.duration = t, t === 1 / 0 ? this.addClass("vjs-live") : this.removeClass("vjs-live"), this.trigger("durationchange"))
            }, e.prototype.remainingTime = function() {
                return this.duration() - this.currentTime()
            }, e.prototype.remainingTimeDisplay = function() {
                return Math.floor(this.duration()) - Math.floor(this.currentTime())
            }, e.prototype.buffered = function() {
                var t = this.techGet_("buffered");
                return t && t.length || (t = ge(0, 0)), t
            }, e.prototype.bufferedPercent = function() {
                return ye(this.buffered(), this.duration())
            }, e.prototype.bufferedEnd = function() {
                var t = this.buffered(),
                    e = this.duration(),
                    i = t.end(t.length - 1);
                return i > e && (i = e), i
            }, e.prototype.volume = function(t) {
                var e = void 0;
                return void 0 !== t ? (e = Math.max(0, Math.min(1, parseFloat(t))), this.cache_.volume = e, this.techCall_("setVolume", e), void(e > 0 && this.lastVolume_(e))) : (e = parseFloat(this.techGet_("volume")), isNaN(e) ? 1 : e)
            }, e.prototype.muted = function(t) {
                if (void 0 === t) return this.techGet_("muted") || !1;
                this.techCall_("setMuted", t)
            }, e.prototype.defaultMuted = function(t) {
                return void 0 !== t ? this.techCall_("setDefaultMuted", t) : this.techGet_("defaultMuted") || !1
            }, e.prototype.lastVolume_ = function(t) {
                if (void 0 === t || 0 === t) return this.cache_.lastVolume;
                this.cache_.lastVolume = t
            }, e.prototype.supportsFullScreen = function() {
                return this.techGet_("supportsFullScreen") || !1
            }, e.prototype.isFullscreen = function(t) {
                if (void 0 === t) return !!this.isFullscreen_;
                this.isFullscreen_ = !!t
            }, e.prototype.requestFullscreen = function() {
                var t = ve;
                this.isFullscreen(!0), t.requestFullscreen ? (_t(u, t.fullscreenchange, Ot(this, (function e(i) {
                    this.isFullscreen(u[t.fullscreenElement]), !1 === this.isFullscreen() && bt(u, t.fullscreenchange, e), this.trigger("fullscreenchange")
                }))), this.el_[t.requestFullscreen]()) : this.tech_.supportsFullScreen() ? this.techCall_("enterFullScreen") : (this.enterFullWindow(), this.trigger("fullscreenchange"))
            }, e.prototype.exitFullscreen = function() {
                var t = ve;
                this.isFullscreen(!1), t.requestFullscreen ? u[t.exitFullscreen]() : this.tech_.supportsFullScreen() ? this.techCall_("exitFullScreen") : (this.exitFullWindow(), this.trigger("fullscreenchange"))
            }, e.prototype.enterFullWindow = function() {
                this.isFullWindow = !0, this.docOrigOverflow = u.documentElement.style.overflow, _t(u, "keydown", Ot(this, this.fullWindowOnEscKey)), u.documentElement.style.overflow = "hidden", j(u.body, "vjs-full-window"), this.trigger("enterFullWindow")
            }, e.prototype.fullWindowOnEscKey = function(t) {
                27 === t.keyCode && (!0 === this.isFullscreen() ? this.exitFullscreen() : this.exitFullWindow())
            }, e.prototype.exitFullWindow = function() {
                this.isFullWindow = !1, bt(u, "keydown", this.fullWindowOnEscKey), u.documentElement.style.overflow = this.docOrigOverflow, F(u.body, "vjs-full-window"), this.trigger("exitFullWindow")
            }, e.prototype.canPlayType = function(t) {
                for (var e = void 0, i = 0, r = this.options_.techOrder; i < r.length; i++) {
                    var n = r[i],
                        a = gr.getTech(n);
                    if (a || (a = Gt.getComponent(n)), a) {
                        if (a.isSupported() && (e = a.canPlayType(t))) return e
                    } else p.error('The "' + n + '" tech is undefined. Skipped browser support check for that tech.')
                }
                return ""
            }, e.prototype.selectSource = function(t) {
                var e, i = this,
                    r = this.options_.techOrder.map((function(t) {
                        return [t, gr.getTech(t)]
                    })).filter((function(t) {
                        var e = t[0],
                            i = t[1];
                        return i ? i.isSupported() : (p.error('The "' + e + '" tech is undefined. Skipped browser support check for that tech.'), !1)
                    })),
                    n = function(t, e, i) {
                        var r = void 0;
                        return t.some((function(t) {
                            return e.some((function(e) {
                                if (r = i(t, e)) return !0
                            }))
                        })), r
                    },
                    a = function(t, e) {
                        var r = t[0];
                        if (t[1].canPlaySource(e, i.options_[r.toLowerCase()])) return {
                            source: e,
                            tech: r
                        }
                    };
                return (this.options_.sourceOrder ? n(t, r, (e = a, function(t, i) {
                    return e(i, t)
                })) : n(r, t, a)) || !1
            }, e.prototype.src = function(t) {
                var e = this;
                if (void 0 === t) return this.cache_.src || "";
                var i = function t(e) {
                    if (Array.isArray(e)) {
                        var i = [];
                        e.forEach((function(e) {
                            e = t(e), Array.isArray(e) ? i = i.concat(e) : E(e) && i.push(e)
                        })), e = i
                    } else e = "string" == typeof e && e.trim() ? [Ir({
                        src: e
                    })] : E(e) && "string" == typeof e.src && e.src && e.src.trim() ? [Ir(e)] : [];
                    return e
                }(t);
                i.length ? (this.changingSrc_ = !0, this.cache_.sources = i, this.updateSourceCaches_(i[0]), br(this, i[0], (function(t, r) {
                    var n, a;
                    if (e.middleware_ = r, e.cache_.sources = i, e.updateSourceCaches_(t), e.src_(t)) return i.length > 1 ? e.src(i.slice(1)) : (e.changingSrc_ = !1, e.setTimeout((function() {
                        this.error({
                            code: 4,
                            message: this.localize(this.options_.notSupportedMessage)
                        })
                    }), 0), void e.triggerReady());
                    n = r, a = e.tech_, n.forEach((function(t) {
                        return t.setTech && t.setTech(a)
                    }))
                }))) : this.setTimeout((function() {
                    this.error({
                        code: 4,
                        message: this.localize(this.options_.notSupportedMessage)
                    })
                }), 0)
            }, e.prototype.src_ = function(t) {
                var e, i, r = this,
                    n = this.selectSource([t]);
                return !n || (e = n.tech, i = this.techName_, Wt(e) !== Wt(i) ? (this.changingSrc_ = !0, this.loadTech_(n.tech, n.source), this.tech_.ready((function() {
                    r.changingSrc_ = !1
                })), !1) : (this.ready((function() {
                    this.tech_.constructor.prototype.hasOwnProperty("setSource") ? this.techCall_("setSource", t) : this.techCall_("src", t.src), this.changingSrc_ = !1
                }), !0), !1))
            }, e.prototype.load = function() {
                this.techCall_("load")
            }, e.prototype.reset = function() {
                this.loadTech_(this.options_.techOrder[0], null), this.techCall_("reset")
            }, e.prototype.currentSources = function() {
                var t = this.currentSource(),
                    e = [];
                return 0 !== Object.keys(t).length && e.push(t), this.cache_.sources || e
            }, e.prototype.currentSource = function() {
                return this.cache_.source || {}
            }, e.prototype.currentSrc = function() {
                return this.currentSource() && this.currentSource().src || ""
            }, e.prototype.currentType = function() {
                return this.currentSource() && this.currentSource().type || ""
            }, e.prototype.preload = function(t) {
                return void 0 !== t ? (this.techCall_("setPreload", t), void(this.options_.preload = t)) : this.techGet_("preload")
            }, e.prototype.autoplay = function(t) {
                if (void 0 === t) return this.options_.autoplay || !1;
                var e = void 0;
                "string" == typeof t && /(any|play|muted)/.test(t) ? (this.options_.autoplay = t, this.manualAutoplay_(t), e = !1) : this.options_.autoplay = !!t, e = e || this.options_.autoplay, this.tech_ && this.techCall_("setAutoplay", e)
            }, e.prototype.playsinline = function(t) {
                return void 0 !== t ? (this.techCall_("setPlaysinline", t), this.options_.playsinline = t, this) : this.techGet_("playsinline")
            }, e.prototype.loop = function(t) {
                return void 0 !== t ? (this.techCall_("setLoop", t), void(this.options_.loop = t)) : this.techGet_("loop")
            }, e.prototype.poster = function(t) {
                if (void 0 === t) return this.poster_;
                t || (t = ""), t !== this.poster_ && (this.poster_ = t, this.techCall_("setPoster", t), this.isPosterFromTech_ = !1, this.trigger("posterchange"))
            }, e.prototype.handleTechPosterChange_ = function() {
                if ((!this.poster_ || this.options_.techCanOverridePoster) && this.tech_ && this.tech_.poster) {
                    var t = this.tech_.poster() || "";
                    t !== this.poster_ && (this.poster_ = t, this.isPosterFromTech_ = !0, this.trigger("posterchange"))
                }
            }, e.prototype.controls = function(t) {
                if (void 0 === t) return !!this.controls_;
                t = !!t, this.controls_ !== t && (this.controls_ = t, this.usingNativeControls() && this.techCall_("setControls", t), this.controls_ ? (this.removeClass("vjs-controls-disabled"), this.addClass("vjs-controls-enabled"), this.trigger("controlsenabled"), this.usingNativeControls() || this.addTechControlsListeners_()) : (this.removeClass("vjs-controls-enabled"), this.addClass("vjs-controls-disabled"), this.trigger("controlsdisabled"), this.usingNativeControls() || this.removeTechControlsListeners_()))
            }, e.prototype.usingNativeControls = function(t) {
                if (void 0 === t) return !!this.usingNativeControls_;
                t = !!t, this.usingNativeControls_ !== t && (this.usingNativeControls_ = t, this.usingNativeControls_ ? (this.addClass("vjs-using-native-controls"), this.trigger("usingnativecontrols")) : (this.removeClass("vjs-using-native-controls"), this.trigger("usingcustomcontrols")))
            }, e.prototype.error = function(t) {
                return void 0 === t ? this.error_ || null : null === t ? (this.error_ = t, this.removeClass("vjs-error"), void(this.errorDisplay && this.errorDisplay.close())) : (this.error_ = new Ce(t), this.addClass("vjs-error"), p.error("(CODE:" + this.error_.code + " " + Ce.errorTypes[this.error_.code] + ")", this.error_.message, this.error_), void this.trigger("error"))
            }, e.prototype.reportUserActivity = function(t) {
                this.userActivity_ = !0
            }, e.prototype.userActive = function(t) {
                if (void 0 === t) return this.userActive_;
                if ((t = !!t) !== this.userActive_) {
                    if (this.userActive_ = t, this.userActive_) return this.userActivity_ = !0, this.removeClass("vjs-user-inactive"), this.addClass("vjs-user-active"), void this.trigger("useractive");
                    this.tech_ && this.tech_.one("mousemove", (function(t) {
                        t.stopPropagation(), t.preventDefault()
                    })), this.userActivity_ = !1, this.removeClass("vjs-user-active"), this.addClass("vjs-user-inactive"), this.trigger("userinactive")
                }
            }, e.prototype.listenForUserActivity_ = function() {
                var t = void 0,
                    e = void 0,
                    i = void 0,
                    r = Ot(this, this.reportUserActivity);
                this.on("mousedown", (function() {
                    r(), this.clearInterval(t), t = this.setInterval(r, 250)
                })), this.on("mousemove", (function(t) {
                    t.screenX === e && t.screenY === i || (e = t.screenX, i = t.screenY, r())
                })), this.on("mouseup", (function(e) {
                    r(), this.clearInterval(t)
                })), this.on("keydown", r), this.on("keyup", r);
                var n = void 0;
                this.setInterval((function() {
                    if (this.userActivity_) {
                        this.userActivity_ = !1, this.userActive(!0), this.clearTimeout(n);
                        var t = this.options_.inactivityTimeout;
                        t <= 0 || (n = this.setTimeout((function() {
                            this.userActivity_ || this.userActive(!1)
                        }), t))
                    }
                }), 250)
            }, e.prototype.playbackRate = function(t) {
                if (void 0 === t) return this.tech_ && this.tech_.featuresPlaybackRate ? this.cache_.lastPlaybackRate || this.techGet_("playbackRate") : 1;
                this.techCall_("setPlaybackRate", t)
            }, e.prototype.defaultPlaybackRate = function(t) {
                return void 0 !== t ? this.techCall_("setDefaultPlaybackRate", t) : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("defaultPlaybackRate") : 1
            }, e.prototype.isAudio = function(t) {
                if (void 0 === t) return !!this.isAudio_;
                this.isAudio_ = !!t
            }, e.prototype.addTextTrack = function(t, e, i) {
                if (this.tech_) return this.tech_.addTextTrack(t, e, i)
            }, e.prototype.addRemoteTextTrack = function(t, e) {
                if (this.tech_) return this.tech_.addRemoteTextTrack(t, e)
            }, e.prototype.removeRemoteTextTrack = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = t.track,
                    i = void 0 === e ? arguments[0] : e;
                if (this.tech_) return this.tech_.removeRemoteTextTrack(i)
            }, e.prototype.getVideoPlaybackQuality = function() {
                return this.techGet_("getVideoPlaybackQuality")
            }, e.prototype.videoWidth = function() {
                return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0
            }, e.prototype.videoHeight = function() {
                return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0
            }, e.prototype.language = function(t) {
                if (void 0 === t) return this.language_;
                this.language_ = String(t).toLowerCase()
            }, e.prototype.languages = function() {
                return zt(e.prototype.options_.languages, this.languages_)
            }, e.prototype.toJSON = function() {
                var t = zt(this.options_),
                    e = t.tracks;
                t.tracks = [];
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    (r = zt(r)).player = void 0, t.tracks[i] = r
                }
                return t
            }, e.prototype.createModal = function(t, e) {
                var i = this;
                (e = e || {}).content = t || "";
                var r = new xe(this, e);
                return this.addChild(r), r.on("dispose", (function() {
                    i.removeChild(r)
                })), r.open(), r
            }, e.getTagSettings = function(t) {
                var e = {
                        sources: [],
                        tracks: []
                    },
                    i = q(t),
                    r = i["data-setup"];
                if (B(t, "vjs-fluid") && (i.fluid = !0), null !== r) {
                    var n = we(r || "{}"),
                        a = n[0],
                        s = n[1];
                    a && p.error(a), C(i, s)
                }
                if (C(e, i), t.hasChildNodes())
                    for (var o = t.childNodes, u = 0, l = o.length; u < l; u++) {
                        var c = o[u],
                            h = c.nodeName.toLowerCase();
                        "source" === h ? e.sources.push(q(c)) : "track" === h && e.tracks.push(q(c))
                    }
                return e
            }, e.prototype.flexNotSupported_ = function() {
                var t = u.createElement("i");
                return !("flexBasis" in t.style || "webkitFlexBasis" in t.style || "mozFlexBasis" in t.style || "msFlexBasis" in t.style || "msFlexOrder" in t.style)
            }, e
        }(Gt);
    Ri.names.forEach((function(t) {
        var e = Ri[t];
        da.prototype[e.getterName] = function() {
            return this.tech_ ? this.tech_[e.getterName]() : (this[e.privateName] = this[e.privateName] || new e.ListClass, this[e.privateName])
        }
    })), da.players = {};
    var pa = r.navigator;
    da.prototype.options_ = {
        techOrder: gr.defaultTechOrder_,
        html5: {},
        flash: {},
        inactivityTimeout: 2e3,
        playbackRates: [],
        children: ["mediaLoader", "posterImage", "textTrackDisplay", "loadingSpinner", "bigPlayButton", "controlBar", "errorDisplay", "textTrackSettings", "resizeManager"],
        language: pa && (pa.languages && pa.languages[0] || pa.userLanguage || pa.language) || "en",
        languages: {},
        notSupportedMessage: "No compatible source was found for this media."
    }, ["ended", "seeking", "seekable", "networkState", "readyState"].forEach((function(t) {
        da.prototype[t] = function() {
            return this.techGet_(t)
        }
    })), ca.forEach((function(t) {
        da.prototype["handleTech" + Wt(t) + "_"] = function() {
            return this.trigger(t)
        }
    })), Gt.registerComponent("Player", da);
    var fa = {},
        ma = function(t) {
            return fa.hasOwnProperty(t)
        },
        ga = function(t) {
            return ma(t) ? fa[t] : void 0
        },
        ya = function(t, e) {
            t.activePlugins_ = t.activePlugins_ || {}, t.activePlugins_[e] = !0
        },
        va = function(t, e, i) {
            var r = (i ? "before" : "") + "pluginsetup";
            t.trigger(r, e), t.trigger(r + ":" + e.name, e)
        },
        _a = function(t, e) {
            return e.prototype.name = t,
                function() {
                    va(this, {
                        name: t,
                        plugin: e,
                        instance: null
                    }, !0);
                    for (var i = arguments.length, r = Array(i), n = 0; n < i; n++) r[n] = arguments[n];
                    var a = new(Function.prototype.bind.apply(e, [null].concat([this].concat(r))));
                    return this[t] = function() {
                        return a
                    }, va(this, a.getEventHash()), a
                }
        },
        ba = function() {
            function t(e) {
                if (y(this, t), this.constructor === t) throw new Error("Plugin must be sub-classed; not directly instantiated.");
                this.player = e, Ht(this), delete this.trigger, qt(this, this.constructor.defaultState), ya(e, this.name), this.dispose = Ot(this, this.dispose), e.on("dispose", this.dispose)
            }
            return t.prototype.version = function() {
                return this.constructor.VERSION
            }, t.prototype.getEventHash = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return t.name = this.name, t.plugin = this.constructor, t.instance = this, t
            }, t.prototype.trigger = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return Tt(this.eventBusEl_, t, this.getEventHash(e))
            }, t.prototype.handleStateChanged = function(t) {}, t.prototype.dispose = function() {
                var t = this.name,
                    e = this.player;
                this.trigger("dispose"), this.off(), e.off("dispose", this.dispose), e.activePlugins_[t] = !1, this.player = this.state = null, e[t] = _a(t, fa[t])
            }, t.isBasic = function(e) {
                var i = "string" == typeof e ? ga(e) : e;
                return "function" == typeof i && !t.prototype.isPrototypeOf(i.prototype)
            }, t.registerPlugin = function(e, i) {
                if ("string" != typeof e) throw new Error('Illegal plugin name, "' + e + '", must be a string, was ' + (void 0 === e ? "undefined" : g(e)) + ".");
                if (ma(e)) p.warn('A plugin named "' + e + '" already exists. You may want to avoid re-registering plugins!');
                else if (da.prototype.hasOwnProperty(e)) throw new Error('Illegal plugin name, "' + e + '", cannot share a name with an existing player method!');
                if ("function" != typeof i) throw new Error('Illegal plugin for "' + e + '", must be a function, was ' + (void 0 === i ? "undefined" : g(i)) + ".");
                return fa[e] = i, "plugin" !== e && (t.isBasic(i) ? da.prototype[e] = function(t, e) {
                    var i = function() {
                        va(this, {
                            name: t,
                            plugin: e,
                            instance: null
                        }, !0);
                        var i = e.apply(this, arguments);
                        return ya(this, t), va(this, {
                            name: t,
                            plugin: e,
                            instance: i
                        }), i
                    };
                    return Object.keys(e).forEach((function(t) {
                        i[t] = e[t]
                    })), i
                }(e, i) : da.prototype[e] = _a(e, i)), i
            }, t.deregisterPlugin = function(t) {
                if ("plugin" === t) throw new Error("Cannot de-register base plugin.");
                ma(t) && (delete fa[t], delete da.prototype[t])
            }, t.getPlugins = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.keys(fa),
                    e = void 0;
                return t.forEach((function(t) {
                    var i = ga(t);
                    i && ((e = e || {})[t] = i)
                })), e
            }, t.getPluginVersion = function(t) {
                var e = ga(t);
                return e && e.VERSION || ""
            }, t
        }();
    ba.getPlugin = ga, ba.BASE_PLUGIN_NAME = "plugin", ba.registerPlugin("plugin", ba), da.prototype.usingPlugin = function(t) {
        return !!this.activePlugins_ && !0 === this.activePlugins_[t]
    }, da.prototype.hasPlugin = function(t) {
        return !!ma(t)
    };
    var Ta = function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : g(e)));
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (t.super_ = e)
        },
        Sa = function(t) {
            return 0 === t.indexOf("#") ? t.slice(1) : t
        };

    function ka(t, e, i) {
        var r = ka.getPlayer(t);
        if (r) return e && p.warn('Player "' + t + '" is already initialised. Options will not be applied.'), i && r.ready(i), r;
        var n = "string" == typeof t ? nt("#" + Sa(t)) : t;
        if (!x(n)) throw new TypeError("The element or ID supplied is not valid. (videojs)");
        u.body.contains(n) || p.warn("The element supplied is not included in the DOM"), e = e || {}, ka.hooks("beforesetup").forEach((function(t) {
            var i = t(n, zt(e));
            E(i) && !Array.isArray(i) ? e = zt(e, i) : p.error("please return an object in beforesetup hooks")
        }));
        var a = Gt.getComponent("Player");
        return r = new a(n, e, i), ka.hooks("setup").forEach((function(t) {
            return t(r)
        })), r
    }
    if (ka.hooks_ = {}, ka.hooks = function(t, e) {
            return ka.hooks_[t] = ka.hooks_[t] || [], e && (ka.hooks_[t] = ka.hooks_[t].concat(e)), ka.hooks_[t]
        }, ka.hook = function(t, e) {
            ka.hooks(t, e)
        }, ka.hookOnce = function(t, e) {
            ka.hooks(t, [].concat(e).map((function(e) {
                return function i() {
                    return ka.removeHook(t, i), e.apply(void 0, arguments)
                }
            })))
        }, ka.removeHook = function(t, e) {
            var i = ka.hooks(t).indexOf(e);
            return !(i <= -1) && (ka.hooks_[t] = ka.hooks_[t].slice(), ka.hooks_[t].splice(i, 1), !0)
        }, !0 !== r.VIDEOJS_NO_DYNAMIC_STYLE && I()) {
        var Ca = nt(".vjs-styles-defaults");
        if (!Ca) {
            Ca = Lt("vjs-styles-defaults");
            var Ea = nt("head");
            Ea && Ea.insertBefore(Ca, Ea.firstChild), Pt(Ca, "\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ")
        }
    }
    At(1, ka), ka.VERSION = "7.1.0", ka.options = da.prototype.options_, ka.getPlayers = function() {
        return da.players
    }, ka.getPlayer = function(t) {
        var e = da.players,
            i = void 0;
        if ("string" == typeof t) {
            var r = Sa(t),
                n = e[r];
            if (n) return n;
            i = nt("#" + r)
        } else i = t;
        if (x(i)) {
            var a = i,
                s = a.player,
                o = a.playerId;
            if (s || e[o]) return s || e[o]
        }
    }, ka.getAllPlayers = function() {
        return Object.keys(da.players).map((function(t) {
            return da.players[t]
        })).filter(Boolean)
    }, ka.players = da.players, ka.getComponent = Gt.getComponent, ka.registerComponent = function(t, e) {
        gr.isTech(e) && p.warn("The " + t + " tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"), Gt.registerComponent.call(Gt, t, e)
    }, ka.getTech = gr.getTech, ka.registerTech = gr.registerTech, ka.use = function(t, e) {
        yr[t] = yr[t] || [], yr[t].push(e)
    }, Object.defineProperty(ka, "middleware", {
        value: {},
        writeable: !1,
        enumerable: !0
    }), Object.defineProperty(ka.middleware, "TERMINATOR", {
        value: _r,
        writeable: !1,
        enumerable: !0
    }), ka.browser = pe, ka.TOUCH_ENABLED = de, ka.extend = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = function() {
                t.apply(this, arguments)
            },
            r = {};
        for (var n in "object" === (void 0 === e ? "undefined" : g(e)) ? (e.constructor !== Object.prototype.constructor && (i = e.constructor), r = e) : "function" == typeof e && (i = e), Ta(i, t), r) r.hasOwnProperty(n) && (i.prototype[n] = r[n]);
        return i
    }, ka.mergeOptions = zt, ka.bind = Ot, ka.registerPlugin = ba.registerPlugin, ka.plugin = function(t, e) {
        return p.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead"), ba.registerPlugin(t, e)
    }, ka.getPlugins = ba.getPlugins, ka.getPlugin = ba.getPlugin, ka.getPluginVersion = ba.getPluginVersion, ka.addLanguage = function(t, e) {
        var i;
        return t = ("" + t).toLowerCase(), ka.options.languages = zt(ka.options.languages, ((i = {})[t] = e, i)), ka.options.languages[t]
    }, ka.log = p, ka.createTimeRange = ka.createTimeRanges = ge, ka.formatTime = Gr, ka.setFormatTime = function(t) {
        zr = t
    }, ka.resetFormatTime = function() {
        zr = Wr
    }, ka.parseUrl = Xe, ka.isCrossOrigin = Ke, ka.EventTarget = xt, ka.on = _t, ka.one = St, ka.off = bt, ka.trigger = Tt, ka.xhr = Si, ka.TextTrack = Li, ka.AudioTrack = Pi, ka.VideoTrack = Oi, ["isEl", "isTextNode", "createEl", "hasClass", "addClass", "removeClass", "toggleClass", "setAttributes", "getAttributes", "emptyEl", "appendContent", "insertContent"].forEach((function(t) {
        ka[t] = function() {
            return p.warn("videojs." + t + "() is deprecated; use videojs.dom." + t + "() instead"), st[t].apply(null, arguments)
        }
    })), ka.computedStyle = A, ka.dom = st, ka.url = Qe;
    var wa = e((function(t, e) {
            var i, r, n, a, s;
            i = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/\;?#]*)?(.*?)??(;.*?)?(\?.*?)?(#.*?)?$/, r = /^([^\/;?#]*)(.*)$/, n = /(?:\/|^)\.(?=\/)/g, a = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g, s = {
                buildAbsoluteURL: function(t, e, i) {
                    if (i = i || {}, t = t.trim(), !(e = e.trim())) {
                        if (!i.alwaysNormalize) return t;
                        var n = s.parseURL(t);
                        if (!n) throw new Error("Error trying to parse base URL.");
                        return n.path = s.normalizePath(n.path), s.buildURLFromParts(n)
                    }
                    var a = s.parseURL(e);
                    if (!a) throw new Error("Error trying to parse relative URL.");
                    if (a.scheme) return i.alwaysNormalize ? (a.path = s.normalizePath(a.path), s.buildURLFromParts(a)) : e;
                    var o = s.parseURL(t);
                    if (!o) throw new Error("Error trying to parse base URL.");
                    if (!o.netLoc && o.path && "/" !== o.path[0]) {
                        var u = r.exec(o.path);
                        o.netLoc = u[1], o.path = u[2]
                    }
                    o.netLoc && !o.path && (o.path = "/");
                    var l = {
                        scheme: o.scheme,
                        netLoc: a.netLoc,
                        path: null,
                        params: a.params,
                        query: a.query,
                        fragment: a.fragment
                    };
                    if (!a.netLoc && (l.netLoc = o.netLoc, "/" !== a.path[0]))
                        if (a.path) {
                            var c = o.path,
                                h = c.substring(0, c.lastIndexOf("/") + 1) + a.path;
                            l.path = s.normalizePath(h)
                        } else l.path = o.path, a.params || (l.params = o.params, a.query || (l.query = o.query));
                    return null === l.path && (l.path = i.alwaysNormalize ? s.normalizePath(a.path) : a.path), s.buildURLFromParts(l)
                },
                parseURL: function(t) {
                    var e = i.exec(t);
                    return e ? {
                        scheme: e[1] || "",
                        netLoc: e[2] || "",
                        path: e[3] || "",
                        params: e[4] || "",
                        query: e[5] || "",
                        fragment: e[6] || ""
                    } : null
                },
                normalizePath: function(t) {
                    for (t = t.split("").reverse().join("").replace(n, ""); t.length !== (t = t.replace(a, "")).length;);
                    return t.split("").reverse().join("")
                },
                buildURLFromParts: function(t) {
                    return t.scheme + t.netLoc + t.path + t.params + t.query + t.fragment
                }
            }, t.exports = s
        })),
        Aa = function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        },
        La = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
            }
            return t
        },
        Pa = function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : g(e)));
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        },
        Oa = function(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" !== (void 0 === e ? "undefined" : g(e)) && "function" != typeof e ? t : e
        },
        Ia = function() {
            function t() {
                Aa(this, t), this.listeners = {}
            }
            return t.prototype.on = function(t, e) {
                this.listeners[t] || (this.listeners[t] = []), this.listeners[t].push(e)
            }, t.prototype.off = function(t, e) {
                if (!this.listeners[t]) return !1;
                var i = this.listeners[t].indexOf(e);
                return this.listeners[t].splice(i, 1), i > -1
            }, t.prototype.trigger = function(t) {
                var e = this.listeners[t],
                    i = void 0,
                    r = void 0,
                    n = void 0;
                if (e)
                    if (2 === arguments.length)
                        for (r = e.length, i = 0; i < r; ++i) e[i].call(this, arguments[1]);
                    else
                        for (n = Array.prototype.slice.call(arguments, 1), r = e.length, i = 0; i < r; ++i) e[i].apply(this, n)
            }, t.prototype.dispose = function() {
                this.listeners = {}
            }, t.prototype.pipe = function(t) {
                this.on("data", (function(e) {
                    t.push(e)
                }))
            }, t
        }(),
        xa = function(t) {
            function e() {
                Aa(this, e);
                var i = Oa(this, t.call(this));
                return i.buffer = "", i
            }
            return Pa(e, t), e.prototype.push = function(t) {
                var e = void 0;
                for (this.buffer += t, e = this.buffer.indexOf("\n"); e > -1; e = this.buffer.indexOf("\n")) this.trigger("data", this.buffer.substring(0, e)), this.buffer = this.buffer.substring(e + 1)
            }, e
        }(Ia),
        Da = function(t) {
            for (var e = t.split(new RegExp('(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))')), i = {}, r = e.length, n = void 0; r--;) "" !== e[r] && ((n = /([^=]*)=(.*)/.exec(e[r]).slice(1))[0] = n[0].replace(/^\s+|\s+$/g, ""), n[1] = n[1].replace(/^\s+|\s+$/g, ""), n[1] = n[1].replace(/^['"](.*)['"]$/g, "$1"), i[n[0]] = n[1]);
            return i
        },
        Ra = function(t) {
            function e() {
                Aa(this, e);
                var i = Oa(this, t.call(this));
                return i.customParsers = [], i
            }
            return Pa(e, t), e.prototype.push = function(t) {
                var e = void 0,
                    i = void 0;
                if (0 !== (t = t.replace(/^[\u0000\s]+|[\u0000\s]+$/g, "")).length)
                    if ("#" === t[0]) {
                        for (var r = 0; r < this.customParsers.length; r++)
                            if (this.customParsers[r].call(this, t)) return;
                        if (0 === t.indexOf("#EXT"))
                            if (t = t.replace("\r", ""), e = /^#EXTM3U/.exec(t)) this.trigger("data", {
                                type: "tag",
                                tagType: "m3u"
                            });
                            else {
                                if (e = /^#EXTINF:?([0-9\.]*)?,?(.*)?$/.exec(t)) return i = {
                                    type: "tag",
                                    tagType: "inf"
                                }, e[1] && (i.duration = parseFloat(e[1])), e[2] && (i.title = e[2]), void this.trigger("data", i);
                                if (e = /^#EXT-X-TARGETDURATION:?([0-9.]*)?/.exec(t)) return i = {
                                    type: "tag",
                                    tagType: "targetduration"
                                }, e[1] && (i.duration = parseInt(e[1], 10)), void this.trigger("data", i);
                                if (e = /^#ZEN-TOTAL-DURATION:?([0-9.]*)?/.exec(t)) return i = {
                                    type: "tag",
                                    tagType: "totalduration"
                                }, e[1] && (i.duration = parseInt(e[1], 10)), void this.trigger("data", i);
                                if (e = /^#EXT-X-VERSION:?([0-9.]*)?/.exec(t)) return i = {
                                    type: "tag",
                                    tagType: "version"
                                }, e[1] && (i.version = parseInt(e[1], 10)), void this.trigger("data", i);
                                if (e = /^#EXT-X-MEDIA-SEQUENCE:?(\-?[0-9.]*)?/.exec(t)) return i = {
                                    type: "tag",
                                    tagType: "media-sequence"
                                }, e[1] && (i.number = parseInt(e[1], 10)), void this.trigger("data", i);
                                if (e = /^#EXT-X-DISCONTINUITY-SEQUENCE:?(\-?[0-9.]*)?/.exec(t)) return i = {
                                    type: "tag",
                                    tagType: "discontinuity-sequence"
                                }, e[1] && (i.number = parseInt(e[1], 10)), void this.trigger("data", i);
                                if (e = /^#EXT-X-PLAYLIST-TYPE:?(.*)?$/.exec(t)) return i = {
                                    type: "tag",
                                    tagType: "playlist-type"
                                }, e[1] && (i.playlistType = e[1]), void this.trigger("data", i);
                                if (e = /^#EXT-X-BYTERANGE:?([0-9.]*)?@?([0-9.]*)?/.exec(t)) return i = {
                                    type: "tag",
                                    tagType: "byterange"
                                }, e[1] && (i.length = parseInt(e[1], 10)), e[2] && (i.offset = parseInt(e[2], 10)), void this.trigger("data", i);
                                if (e = /^#EXT-X-ALLOW-CACHE:?(YES|NO)?/.exec(t)) return i = {
                                    type: "tag",
                                    tagType: "allow-cache"
                                }, e[1] && (i.allowed = !/NO/.test(e[1])), void this.trigger("data", i);
                                if (e = /^#EXT-X-MAP:?(.*)$/.exec(t)) {
                                    if (i = {
                                            type: "tag",
                                            tagType: "map"
                                        }, e[1]) {
                                        var n = Da(e[1]);
                                        if (n.URI && (i.uri = n.URI), n.BYTERANGE) {
                                            var a = n.BYTERANGE.split("@"),
                                                s = a[0],
                                                o = a[1];
                                            i.byterange = {}, s && (i.byterange.length = parseInt(s, 10)), o && (i.byterange.offset = parseInt(o, 10))
                                        }
                                    }
                                    this.trigger("data", i)
                                } else if (e = /^#EXT-X-STREAM-INF:?(.*)$/.exec(t)) {
                                    if (i = {
                                            type: "tag",
                                            tagType: "stream-inf"
                                        }, e[1]) {
                                        if (i.attributes = Da(e[1]), i.attributes.RESOLUTION) {
                                            var u = i.attributes.RESOLUTION.split("x"),
                                                l = {};
                                            u[0] && (l.width = parseInt(u[0], 10)), u[1] && (l.height = parseInt(u[1], 10)), i.attributes.RESOLUTION = l
                                        }
                                        i.attributes.BANDWIDTH && (i.attributes.BANDWIDTH = parseInt(i.attributes.BANDWIDTH, 10)), i.attributes["PROGRAM-ID"] && (i.attributes["PROGRAM-ID"] = parseInt(i.attributes["PROGRAM-ID"], 10))
                                    }
                                    this.trigger("data", i)
                                } else {
                                    if (e = /^#EXT-X-MEDIA:?(.*)$/.exec(t)) return i = {
                                        type: "tag",
                                        tagType: "media"
                                    }, e[1] && (i.attributes = Da(e[1])), void this.trigger("data", i);
                                    if (e = /^#EXT-X-ENDLIST/.exec(t)) this.trigger("data", {
                                        type: "tag",
                                        tagType: "endlist"
                                    });
                                    else if (e = /^#EXT-X-DISCONTINUITY/.exec(t)) this.trigger("data", {
                                        type: "tag",
                                        tagType: "discontinuity"
                                    });
                                    else {
                                        if (e = /^#EXT-X-PROGRAM-DATE-TIME:?(.*)$/.exec(t)) return i = {
                                            type: "tag",
                                            tagType: "program-date-time"
                                        }, e[1] && (i.dateTimeString = e[1], i.dateTimeObject = new Date(e[1])), void this.trigger("data", i);
                                        if (e = /^#EXT-X-KEY:?(.*)$/.exec(t)) return i = {
                                            type: "tag",
                                            tagType: "key"
                                        }, e[1] && (i.attributes = Da(e[1]), i.attributes.IV && ("0x" === i.attributes.IV.substring(0, 2).toLowerCase() && (i.attributes.IV = i.attributes.IV.substring(2)), i.attributes.IV = i.attributes.IV.match(/.{8}/g), i.attributes.IV[0] = parseInt(i.attributes.IV[0], 16), i.attributes.IV[1] = parseInt(i.attributes.IV[1], 16), i.attributes.IV[2] = parseInt(i.attributes.IV[2], 16), i.attributes.IV[3] = parseInt(i.attributes.IV[3], 16), i.attributes.IV = new Uint32Array(i.attributes.IV))), void this.trigger("data", i);
                                        if (e = /^#EXT-X-START:?(.*)$/.exec(t)) return i = {
                                            type: "tag",
                                            tagType: "start"
                                        }, e[1] && (i.attributes = Da(e[1]), i.attributes["TIME-OFFSET"] = parseFloat(i.attributes["TIME-OFFSET"]), i.attributes.PRECISE = /YES/.test(i.attributes.PRECISE)), void this.trigger("data", i);
                                        if (e = /^#EXT-X-CUE-OUT-CONT:?(.*)?$/.exec(t)) return i = {
                                            type: "tag",
                                            tagType: "cue-out-cont"
                                        }, e[1] ? i.data = e[1] : i.data = "", void this.trigger("data", i);
                                        if (e = /^#EXT-X-CUE-OUT:?(.*)?$/.exec(t)) return i = {
                                            type: "tag",
                                            tagType: "cue-out"
                                        }, e[1] ? i.data = e[1] : i.data = "", void this.trigger("data", i);
                                        if (e = /^#EXT-X-CUE-IN:?(.*)?$/.exec(t)) return i = {
                                            type: "tag",
                                            tagType: "cue-in"
                                        }, e[1] ? i.data = e[1] : i.data = "", void this.trigger("data", i);
                                        this.trigger("data", {
                                            type: "tag",
                                            data: t.slice(4)
                                        })
                                    }
                                }
                            } else this.trigger("data", {
                            type: "comment",
                            text: t.slice(1)
                        })
                    } else this.trigger("data", {
                        type: "uri",
                        uri: t
                    })
            }, e.prototype.addParser = function(t) {
                var e = this,
                    i = t.expression,
                    r = t.customType,
                    n = t.dataParser,
                    a = t.segment;
                "function" != typeof n && (n = function(t) {
                    return t
                }), this.customParsers.push((function(t) {
                    if (i.exec(t)) return e.trigger("data", {
                        type: "custom",
                        data: n(t),
                        customType: r,
                        segment: a
                    }), !0
                }))
            }, e
        }(Ia),
        Ma = function(t) {
            function e() {
                Aa(this, e);
                var i = Oa(this, t.call(this));
                i.lineStream = new xa, i.parseStream = new Ra, i.lineStream.pipe(i.parseStream);
                var r = i,
                    n = [],
                    a = {},
                    s = void 0,
                    o = void 0,
                    u = function() {},
                    l = {
                        AUDIO: {},
                        VIDEO: {},
                        "CLOSED-CAPTIONS": {},
                        SUBTITLES: {}
                    },
                    c = 0;
                return i.manifest = {
                    allowCache: !0,
                    discontinuityStarts: [],
                    segments: []
                }, i.parseStream.on("data", (function(t) {
                    var e = void 0,
                        i = void 0;
                    ({
                        tag: function() {
                            ({
                                "allow-cache": function() {
                                    this.manifest.allowCache = t.allowed, "allowed" in t || (this.trigger("info", {
                                        message: "defaulting allowCache to YES"
                                    }), this.manifest.allowCache = !0)
                                },
                                byterange: function() {
                                    var e = {};
                                    "length" in t && (a.byterange = e, e.length = t.length, "offset" in t || (this.trigger("info", {
                                        message: "defaulting offset to zero"
                                    }), t.offset = 0)), "offset" in t && (a.byterange = e, e.offset = t.offset)
                                },
                                endlist: function() {
                                    this.manifest.endList = !0
                                },
                                inf: function() {
                                    "mediaSequence" in this.manifest || (this.manifest.mediaSequence = 0, this.trigger("info", {
                                        message: "defaulting media sequence to zero"
                                    })), "discontinuitySequence" in this.manifest || (this.manifest.discontinuitySequence = 0, this.trigger("info", {
                                        message: "defaulting discontinuity sequence to zero"
                                    })), t.duration > 0 && (a.duration = t.duration), 0 === t.duration && (a.duration = .01, this.trigger("info", {
                                        message: "updating zero segment duration to a small value"
                                    })), this.manifest.segments = n
                                },
                                key: function() {
                                    t.attributes ? "NONE" !== t.attributes.METHOD ? t.attributes.URI ? (t.attributes.METHOD || this.trigger("warn", {
                                        message: "defaulting key method to AES-128"
                                    }), o = {
                                        method: t.attributes.METHOD || "AES-128",
                                        uri: t.attributes.URI
                                    }, void 0 !== t.attributes.IV && (o.iv = t.attributes.IV)) : this.trigger("warn", {
                                        message: "ignoring key declaration without URI"
                                    }) : o = null : this.trigger("warn", {
                                        message: "ignoring key declaration without attribute list"
                                    })
                                },
                                "media-sequence": function() {
                                    isFinite(t.number) ? this.manifest.mediaSequence = t.number : this.trigger("warn", {
                                        message: "ignoring invalid media sequence: " + t.number
                                    })
                                },
                                "discontinuity-sequence": function() {
                                    isFinite(t.number) ? (this.manifest.discontinuitySequence = t.number, c = t.number) : this.trigger("warn", {
                                        message: "ignoring invalid discontinuity sequence: " + t.number
                                    })
                                },
                                "playlist-type": function() {
                                    /VOD|EVENT/.test(t.playlistType) ? this.manifest.playlistType = t.playlistType : this.trigger("warn", {
                                        message: "ignoring unknown playlist type: " + t.playlist
                                    })
                                },
                                map: function() {
                                    s = {}, t.uri && (s.uri = t.uri), t.byterange && (s.byterange = t.byterange)
                                },
                                "stream-inf": function() {
                                    this.manifest.playlists = n, this.manifest.mediaGroups = this.manifest.mediaGroups || l, t.attributes ? (a.attributes || (a.attributes = {}), La(a.attributes, t.attributes)) : this.trigger("warn", {
                                        message: "ignoring empty stream-inf attributes"
                                    })
                                },
                                media: function() {
                                    if (this.manifest.mediaGroups = this.manifest.mediaGroups || l, t.attributes && t.attributes.TYPE && t.attributes["GROUP-ID"] && t.attributes.NAME) {
                                        var r = this.manifest.mediaGroups[t.attributes.TYPE];
                                        r[t.attributes["GROUP-ID"]] = r[t.attributes["GROUP-ID"]] || {}, e = r[t.attributes["GROUP-ID"]], (i = {
                                            default: /yes/i.test(t.attributes.DEFAULT)
                                        }).default ? i.autoselect = !0 : i.autoselect = /yes/i.test(t.attributes.AUTOSELECT), t.attributes.LANGUAGE && (i.language = t.attributes.LANGUAGE), t.attributes.URI && (i.uri = t.attributes.URI), t.attributes["INSTREAM-ID"] && (i.instreamId = t.attributes["INSTREAM-ID"]), t.attributes.CHARACTERISTICS && (i.characteristics = t.attributes.CHARACTERISTICS), t.attributes.FORCED && (i.forced = /yes/i.test(t.attributes.FORCED)), e[t.attributes.NAME] = i
                                    } else this.trigger("warn", {
                                        message: "ignoring incomplete or missing media group"
                                    })
                                },
                                discontinuity: function() {
                                    c += 1, a.discontinuity = !0, this.manifest.discontinuityStarts.push(n.length)
                                },
                                "program-date-time": function() {
                                    void 0 === this.manifest.dateTimeString && (this.manifest.dateTimeString = t.dateTimeString, this.manifest.dateTimeObject = t.dateTimeObject), a.dateTimeString = t.dateTimeString, a.dateTimeObject = t.dateTimeObject
                                },
                                targetduration: function() {
                                    !isFinite(t.duration) || t.duration < 0 ? this.trigger("warn", {
                                        message: "ignoring invalid target duration: " + t.duration
                                    }) : this.manifest.targetDuration = t.duration
                                },
                                totalduration: function() {
                                    !isFinite(t.duration) || t.duration < 0 ? this.trigger("warn", {
                                        message: "ignoring invalid total duration: " + t.duration
                                    }) : this.manifest.totalDuration = t.duration
                                },
                                start: function() {
                                    t.attributes && !isNaN(t.attributes["TIME-OFFSET"]) ? this.manifest.start = {
                                        timeOffset: t.attributes["TIME-OFFSET"],
                                        precise: t.attributes.PRECISE
                                    } : this.trigger("warn", {
                                        message: "ignoring start declaration without appropriate attribute list"
                                    })
                                },
                                "cue-out": function() {
                                    a.cueOut = t.data
                                },
                                "cue-out-cont": function() {
                                    a.cueOutCont = t.data
                                },
                                "cue-in": function() {
                                    a.cueIn = t.data
                                }
                            }[t.tagType] || u).call(r)
                        },
                        uri: function() {
                            a.uri = t.uri, n.push(a), !this.manifest.targetDuration || "duration" in a || (this.trigger("warn", {
                                message: "defaulting segment duration to the target duration"
                            }), a.duration = this.manifest.targetDuration), o && (a.key = o), a.timeline = c, s && (a.map = s), a = {}
                        },
                        comment: function() {},
                        custom: function() {
                            t.segment ? (a.custom = a.custom || {}, a.custom[t.customType] = t.data) : (this.manifest.custom = this.manifest.custom || {}, this.manifest.custom[t.customType] = t.data)
                        }
                    })[t.type].call(r)
                })), i
            }
            return Pa(e, t), e.prototype.push = function(t) {
                this.lineStream.push(t)
            }, e.prototype.end = function() {
                this.lineStream.push("\n")
            }, e.prototype.addParser = function(t) {
                this.parseStream.addParser(t)
            }, e
        }(Ia),
        Ua = function(t) {
            var e, i = t.attributes,
                r = t.segments,
                n = {
                    attributes: (e = {
                        NAME: i.id,
                        BANDWIDTH: i.bandwidth,
                        CODECS: i.codecs
                    }, e["PROGRAM-ID"] = 1, e),
                    uri: "",
                    endList: "static" === (i.type || "static"),
                    timeline: i.periodIndex,
                    resolvedUri: "",
                    targetDuration: i.duration,
                    segments: r,
                    mediaSequence: r.length ? r[0].number : 1
                };
            return i.contentProtection && (n.contentProtection = i.contentProtection), n
        },
        Na = function(t) {
            var e, i = t.attributes,
                r = t.segments,
                n = {
                    attributes: (e = {
                        NAME: i.id,
                        AUDIO: "audio",
                        SUBTITLES: "subs",
                        RESOLUTION: {
                            width: i.width,
                            height: i.height
                        },
                        CODECS: i.codecs,
                        BANDWIDTH: i.bandwidth
                    }, e["PROGRAM-ID"] = 1, e),
                    uri: "",
                    endList: "static" === (i.type || "static"),
                    timeline: i.periodIndex,
                    resolvedUri: "",
                    targetDuration: i.duration,
                    segments: r,
                    mediaSequence: r.length ? r[0].number : 1
                };
            return i.contentProtection && (n.contentProtection = i.contentProtection), n
        },
        Ba = function(t) {
            var e;
            if (!t.length) return {};
            var i = t[0].attributes,
                r = i.sourceDuration,
                n = i.minimumUpdatePeriod,
                a = void 0 === n ? 0 : n,
                s = t.filter((function(t) {
                    var e = t.attributes;
                    return "video/mp4" === e.mimeType || "video" === e.contentType
                })).map(Na),
                o = t.filter((function(t) {
                    var e = t.attributes;
                    return "audio/mp4" === e.mimeType || "audio" === e.contentType
                })),
                u = t.filter((function(t) {
                    var e = t.attributes;
                    return "text/vtt" === e.mimeType || "text" === e.contentType
                })),
                l = {
                    allowCache: !0,
                    discontinuityStarts: [],
                    segments: [],
                    endList: !0,
                    mediaGroups: (e = {
                        AUDIO: {},
                        VIDEO: {}
                    }, e["CLOSED-CAPTIONS"] = {}, e.SUBTITLES = {}, e),
                    uri: "",
                    duration: r,
                    playlists: s,
                    minimumUpdatePeriod: 1e3 * a
                };
            return o.length && (l.mediaGroups.AUDIO.audio = o.reduce((function(t, e) {
                var i = e.attributes.role && e.attributes.role.value || "main",
                    r = e.attributes.lang || "",
                    n = "main";
                return r && (n = e.attributes.lang + " (" + i + ")"), t[n] && t[n].playlists[0].attributes.BANDWIDTH > e.attributes.bandwidth ? t : (t[n] = {
                    language: r,
                    autoselect: !0,
                    default: "main" === i,
                    playlists: [Ua(e)],
                    uri: ""
                }, t)
            }), {})), u.length && (l.mediaGroups.SUBTITLES.subs = function(t) {
                return t.reduce((function(t, e) {
                    var i, r, n, a, s = e.attributes.lang || "text";
                    return t[s] ? t : (t[s] = {
                        language: s,
                        default: !1,
                        autoselect: !1,
                        playlists: [(i = e, n = i.attributes, a = i.segments, void 0 === a && (a = [{
                            uri: n.baseUrl,
                            timeline: n.periodIndex,
                            resolvedUri: n.baseUrl || "",
                            duration: n.sourceDuration,
                            number: 0
                        }], n.duration = n.sourceDuration), {
                            attributes: (r = {
                                NAME: n.id,
                                BANDWIDTH: n.bandwidth
                            }, r["PROGRAM-ID"] = 1, r),
                            uri: "",
                            endList: "static" === (n.type || "static"),
                            timeline: n.periodIndex,
                            resolvedUri: n.baseUrl || "",
                            targetDuration: n.duration,
                            segments: a,
                            mediaSequence: a.length ? a[0].number : 1
                        })],
                        uri: ""
                    }, t)
                }), {})
            }(u)), l
        },
        ja = "function" == typeof Symbol && "symbol" === g(Symbol.iterator) ? function(t) {
            return void 0 === t ? "undefined" : g(t)
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : g(t)
        },
        Fa = function(t) {
            return !!t && "object" === (void 0 === t ? "undefined" : ja(t))
        },
        Ha = function t() {
            for (var e = arguments.length, i = Array(e), r = 0; r < e; r++) i[r] = arguments[r];
            return i.reduce((function(e, i) {
                return Object.keys(i).forEach((function(r) {
                    Array.isArray(e[r]) && Array.isArray(i[r]) ? e[r] = e[r].concat(i[r]) : Fa(e[r]) && Fa(i[r]) ? e[r] = t(e[r], i[r]) : e[r] = i[r]
                })), e
            }), {})
        },
        Va = function(t, e) {
            return /^[a-z]+:/i.test(e) ? e : (/\/\//i.test(t) || (t = wa.buildAbsoluteURL(r.location.href, t)), wa.buildAbsoluteURL(t, e))
        },
        qa = function(t) {
            var e = t.baseUrl,
                i = void 0 === e ? "" : e,
                r = t.source,
                n = void 0 === r ? "" : r,
                a = t.range,
                s = void 0 === a ? "" : a,
                o = {
                    uri: n,
                    resolvedUri: Va(i || "", n)
                };
            if (s) {
                var u = s.split("-"),
                    l = parseInt(u[0], 10),
                    c = parseInt(u[1], 10);
                o.byterange = {
                    length: c - l,
                    offset: l
                }
            }
            return o
        },
        Wa = function(t, e, i) {
            var r = t.NOW,
                n = t.clientOffset,
                a = t.availabilityStartTime,
                s = t.timescale,
                o = void 0 === s ? 1 : s,
                u = t.start,
                l = void 0 === u ? 0 : u,
                c = t.minimumUpdatePeriod,
                h = (r + n) / 1e3 + (void 0 === c ? 0 : c) - (a + l);
            return Math.ceil((h * o - e) / i)
        },
        za = function(t, e) {
            for (var i = t.type, r = void 0 === i ? "static" : i, n = t.minimumUpdatePeriod, a = void 0 === n ? 0 : n, s = t.media, o = void 0 === s ? "" : s, u = t.sourceDuration, l = t.timescale, c = void 0 === l ? 1 : l, h = t.startNumber, d = void 0 === h ? 1 : h, p = t.periodIndex, f = [], m = -1, g = 0; g < e.length; g++) {
                var y = e[g],
                    v = y.d,
                    _ = y.r || 0,
                    b = y.t || 0;
                m < 0 && (m = b), b && b > m && (m = b);
                var T = void 0;
                if (_ < 0) {
                    var S = g + 1;
                    T = S === e.length ? "dynamic" === r && a > 0 && o.indexOf("$Number$") > 0 ? Wa(t, m, v) : (u * c - m) / v : (e[S].t - m) / v
                } else T = _ + 1;
                for (var k = d + f.length + T, C = d + f.length; C < k;) f.push({
                    number: C,
                    duration: v / c,
                    time: m,
                    timeline: p
                }), m += v, C++
            }
            return f
        },
        Ga = function(t) {
            return t.reduce((function(t, e) {
                return t.concat(e)
            }), [])
        },
        Xa = function(t) {
            if (!t.length) return [];
            for (var e = [], i = 0; i < t.length; i++) e.push(t[i]);
            return e
        },
        Ya = {
            static: function(t) {
                var e = t.duration,
                    i = t.timescale,
                    r = void 0 === i ? 1 : i,
                    n = t.sourceDuration;
                return {
                    start: 0,
                    end: Math.ceil(n / (e / r))
                }
            },
            dynamic: function(t) {
                var e = t.NOW,
                    i = t.clientOffset,
                    r = t.availabilityStartTime,
                    n = t.timescale,
                    a = void 0 === n ? 1 : n,
                    s = t.duration,
                    o = t.start,
                    u = void 0 === o ? 0 : o,
                    l = t.minimumUpdatePeriod,
                    c = void 0 === l ? 0 : l,
                    h = t.timeShiftBufferDepth,
                    d = void 0 === h ? 1 / 0 : h,
                    p = (e + i) / 1e3,
                    f = r + u,
                    m = p + c - f,
                    g = Math.ceil(m * a / s),
                    y = Math.floor((p - f - d) * a / s),
                    v = Math.floor((p - f) * a / s);
                return {
                    start: Math.max(0, y),
                    end: Math.min(g, v)
                }
            }
        },
        $a = function(t) {
            var e = t.type,
                i = void 0 === e ? "static" : e,
                r = t.duration,
                n = t.timescale,
                a = void 0 === n ? 1 : n,
                s = t.sourceDuration,
                o = Ya[i](t),
                u = function(t, e) {
                    for (var i = [], r = t; r < e; r++) i.push(r);
                    return i
                }(o.start, o.end).map(function(t) {
                    return function(e, i) {
                        var r = t.duration,
                            n = t.timescale,
                            a = void 0 === n ? 1 : n,
                            s = t.periodIndex,
                            o = t.startNumber;
                        return {
                            number: (void 0 === o ? 1 : o) + e,
                            duration: r / a,
                            timeline: s,
                            time: i * r
                        }
                    }
                }(t));
            if ("static" === i) {
                var l = u.length - 1;
                u[l].duration = s - r / a * l
            }
            return u
        },
        Ka = /\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g,
        Qa = function(t, e) {
            return t.replace(Ka, function(t) {
                return function(e, i, r, n) {
                    if ("$$" === e) return "$";
                    if (void 0 === t[i]) return e;
                    var a = "" + t[i];
                    return "RepresentationID" === i ? a : (n = r ? parseInt(n, 10) : 1, a.length >= n ? a : "" + new Array(n - a.length + 1).join("0") + a)
                }
            }(e))
        },
        Ja = function(t, e) {
            var i = {
                    RepresentationID: t.id,
                    Bandwidth: t.bandwidth || 0
                },
                r = t.initialization,
                n = void 0 === r ? {
                    sourceURL: "",
                    range: ""
                } : r,
                a = qa({
                    baseUrl: t.baseUrl,
                    source: Qa(n.sourceURL, i),
                    range: n.range
                });
            return function(t, e) {
                return t.duration || e ? t.duration ? $a(t) : za(t, e) : [{
                    number: t.startNumber || 1,
                    duration: t.sourceDuration,
                    time: 0,
                    timeline: t.periodIndex
                }]
            }(t, e).map((function(e) {
                i.Number = e.number, i.Time = e.time;
                var r = Qa(t.media || "", i);
                return {
                    uri: r,
                    timeline: e.timeline,
                    duration: e.duration,
                    resolvedUri: Va(t.baseUrl || "", r),
                    map: a,
                    number: e.number
                }
            }))
        },
        Za = "INVALID_NUMBER_OF_PERIOD",
        ts = "DASH_EMPTY_MANIFEST",
        es = "DASH_INVALID_XML",
        is = "NO_BASE_URL",
        rs = "SEGMENT_TIME_UNSPECIFIED",
        ns = "UNSUPPORTED_UTC_TIMING_SCHEME",
        as = function(t, e) {
            var i = t.duration,
                r = t.segmentUrls,
                n = void 0 === r ? [] : r;
            if (!i && !e || i && e) throw new Error(rs);
            var a = n.map((function(e) {
                    return function(t, e) {
                        var i = t.baseUrl,
                            r = t.initialization,
                            n = void 0 === r ? {} : r,
                            a = qa({
                                baseUrl: i,
                                source: n.sourceURL,
                                range: n.range
                            }),
                            s = qa({
                                baseUrl: i,
                                source: e.media,
                                range: e.mediaRange
                            });
                        return s.map = a, s
                    }(t, e)
                })),
                s = void 0;
            return i && (s = $a(t)), e && (s = za(t, e)), s.map((function(t, e) {
                if (a[e]) {
                    var i = a[e];
                    return i.timeline = t.timeline, i.duration = t.duration, i.number = t.number, i
                }
            })).filter((function(t) {
                return t
            }))
        },
        ss = function(t) {
            var e = t.baseUrl,
                i = t.initialization,
                r = void 0 === i ? {} : i,
                n = t.sourceDuration,
                a = t.timescale,
                s = void 0 === a ? 1 : a,
                o = t.indexRange,
                u = void 0 === o ? "" : o,
                l = t.duration;
            if (!e) throw new Error(is);
            var c = qa({
                    baseUrl: e,
                    source: r.sourceURL,
                    range: r.range
                }),
                h = qa({
                    baseUrl: e,
                    source: e,
                    range: u
                });
            if (h.map = c, l) {
                var d = $a(t);
                d.length && (h.duration = d[0].duration, h.timeline = d[0].timeline)
            } else n && (h.duration = n / s, h.timeline = 0);
            return h.number = 0, [h]
        },
        os = function(t) {
            var e = t.attributes,
                i = t.segmentInfo,
                r = void 0,
                n = void 0;
            if (i.template ? (n = Ja, r = Ha(e, i.template)) : i.base ? (n = ss, r = Ha(e, i.base)) : i.list && (n = as, r = Ha(e, i.list)), !n) return {
                attributes: e
            };
            var a = n(r, i.timeline);
            if (r.duration) {
                var s = r,
                    o = s.duration,
                    u = s.timescale,
                    l = void 0 === u ? 1 : u;
                r.duration = o / l
            } else a.length ? r.duration = a.reduce((function(t, e) {
                return Math.max(t, Math.ceil(e.duration))
            }), 0) : r.duration = 0;
            return {
                attributes: r,
                segments: a
            }
        },
        us = function(t, e) {
            return Xa(t.childNodes).filter((function(t) {
                return t.tagName === e
            }))
        },
        ls = function(t) {
            return t.textContent.trim()
        },
        cs = function(t) {
            var e = /P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/.exec(t);
            if (!e) return 0;
            var i = e.slice(1),
                r = i[0],
                n = i[1],
                a = i[2],
                s = i[3],
                o = i[4],
                u = i[5];
            return 31536e3 * parseFloat(r || 0) + 2592e3 * parseFloat(n || 0) + 86400 * parseFloat(a || 0) + 3600 * parseFloat(s || 0) + 60 * parseFloat(o || 0) + parseFloat(u || 0)
        },
        hs = {
            mediaPresentationDuration: function(t) {
                return cs(t)
            },
            availabilityStartTime: function(t) {
                return /^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(e = t) && (e += "Z"), Date.parse(e) / 1e3;
                var e
            },
            minimumUpdatePeriod: function(t) {
                return cs(t)
            },
            timeShiftBufferDepth: function(t) {
                return cs(t)
            },
            start: function(t) {
                return cs(t)
            },
            width: function(t) {
                return parseInt(t, 10)
            },
            height: function(t) {
                return parseInt(t, 10)
            },
            bandwidth: function(t) {
                return parseInt(t, 10)
            },
            startNumber: function(t) {
                return parseInt(t, 10)
            },
            timescale: function(t) {
                return parseInt(t, 10)
            },
            duration: function(t) {
                var e = parseInt(t, 10);
                return isNaN(e) ? cs(t) : e
            },
            d: function(t) {
                return parseInt(t, 10)
            },
            t: function(t) {
                return parseInt(t, 10)
            },
            r: function(t) {
                return parseInt(t, 10)
            },
            DEFAULT: function(t) {
                return t
            }
        },
        ds = function(t) {
            return t && t.attributes ? Xa(t.attributes).reduce((function(t, e) {
                var i = hs[e.name] || hs.DEFAULT;
                return t[e.name] = i(e.value), t
            }), {}) : {}
        };
    var ps, fs, ms = {
            "urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b": "org.w3.clearkey",
            "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": "com.widevine.alpha",
            "urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95": "com.microsoft.playready",
            "urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb": "com.adobe.primetime"
        },
        gs = function(t, e) {
            return e.length ? Ga(t.map((function(t) {
                return e.map((function(e) {
                    return Va(t, ls(e))
                }))
            }))) : t
        },
        ys = function(t) {
            var e = us(t, "SegmentTemplate")[0],
                i = us(t, "SegmentList")[0],
                r = i && us(i, "SegmentURL").map((function(t) {
                    return Ha({
                        tag: "SegmentURL"
                    }, ds(t))
                })),
                n = us(t, "SegmentBase")[0],
                a = i || e,
                s = a && us(a, "SegmentTimeline")[0],
                o = i || n || e,
                u = o && us(o, "Initialization")[0],
                l = e && ds(e);
            l && u ? l.initialization = u && ds(u) : l && l.initialization && (l.initialization = {
                sourceURL: l.initialization
            });
            var c = {
                template: l,
                timeline: s && us(s, "S").map((function(t) {
                    return ds(t)
                })),
                list: i && Ha(ds(i), {
                    segmentUrls: r,
                    initialization: ds(u)
                }),
                base: n && Ha(ds(n), {
                    initialization: ds(u)
                })
            };
            return Object.keys(c).forEach((function(t) {
                c[t] || delete c[t]
            })), c
        },
        vs = function(t) {
            return t.reduce((function(t, e) {
                var i = ds(e),
                    n = ms[i.schemeIdUri];
                if (n) {
                    t[n] = {
                        attributes: i
                    };
                    var a = us(e, "cenc:pssh")[0];
                    if (a) {
                        var s = ls(a),
                            o = s && function(t) {
                                for (var e = r.atob(t), i = new Uint8Array(e.length), n = 0; n < e.length; n++) i[n] = e.charCodeAt(n);
                                return i
                            }(s);
                        t[n].pssh = o
                    }
                }
                return t
            }), {})
        },
        _s = function(t, e, i) {
            return function(r) {
                var n = ds(r),
                    a = gs(e, us(r, "BaseURL")),
                    s = us(r, "Role")[0],
                    o = {
                        role: ds(s)
                    },
                    u = Ha(t, n, o),
                    l = vs(us(r, "ContentProtection"));
                Object.keys(l).length && (u = Ha(u, {
                    contentProtection: l
                }));
                var c = ys(r),
                    h = us(r, "Representation"),
                    d = Ha(i, c);
                return Ga(h.map(function(t, e, i) {
                    return function(r) {
                        var n = us(r, "BaseURL"),
                            a = gs(e, n),
                            s = Ha(t, ds(r)),
                            o = ys(r);
                        return a.map((function(t) {
                            return {
                                segmentInfo: Ha(i, o),
                                attributes: Ha(s, {
                                    baseUrl: t
                                })
                            }
                        }))
                    }
                }(u, a, d)))
            }
        },
        bs = function(t, e) {
            return function(i, r) {
                var n = gs(e, us(i, "BaseURL")),
                    a = ds(i),
                    s = Ha(t, a, {
                        periodIndex: r
                    }),
                    o = us(i, "AdaptationSet"),
                    u = ys(i);
                return Ga(o.map(_s(s, n, u)))
            }
        },
        Ts = function(t) {
            if ("" === t) throw new Error(ts);
            var e = (new r.DOMParser).parseFromString(t, "application/xml"),
                i = e && "MPD" === e.documentElement.tagName ? e.documentElement : null;
            if (!i || i && i.getElementsByTagName("parsererror").length > 0) throw new Error(es);
            return i
        },
        Ss = function(t, e) {
            return Ba(function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = e.manifestUri,
                    r = void 0 === i ? "" : i,
                    n = e.NOW,
                    a = void 0 === n ? Date.now() : n,
                    s = e.clientOffset,
                    o = void 0 === s ? 0 : s,
                    u = us(t, "Period");
                if (1 !== u.length) throw new Error(Za);
                var l = ds(t),
                    c = gs([r], us(t, "BaseURL"));
                return l.sourceDuration = l.mediaPresentationDuration || 0, l.NOW = a, l.clientOffset = o, Ga(u.map(bs(l, c)))
            }(Ts(t), e).map(os))
        },
        ks = function(t) {
            return function(t) {
                var e = us(t, "UTCTiming")[0];
                if (!e) return null;
                var i = ds(e);
                switch (i.schemeIdUri) {
                    case "urn:mpeg:dash:utc:http-head:2014":
                    case "urn:mpeg:dash:utc:http-head:2012":
                        i.method = "HEAD";
                        break;
                    case "urn:mpeg:dash:utc:http-xsdate:2014":
                    case "urn:mpeg:dash:utc:http-iso:2014":
                    case "urn:mpeg:dash:utc:http-xsdate:2012":
                    case "urn:mpeg:dash:utc:http-iso:2012":
                        i.method = "GET";
                        break;
                    case "urn:mpeg:dash:utc:direct:2014":
                    case "urn:mpeg:dash:utc:direct:2012":
                        i.method = "DIRECT", i.value = Date.parse(i.value);
                        break;
                    case "urn:mpeg:dash:utc:http-ntp:2014":
                    case "urn:mpeg:dash:utc:ntp:2014":
                    case "urn:mpeg:dash:utc:sntp:2014":
                    default:
                        throw new Error(ns)
                }
                return i
            }(Ts(t))
        },
        Cs = {
            toUnsigned: function(t) {
                return t >>> 0
            }
        },
        Es = Cs.toUnsigned,
        ws = Object.freeze({
            default: Cs,
            __moduleExports: Cs,
            toUnsigned: Es
        }),
        As = (ws && Cs || ws).toUnsigned;
    ps = function(t, e) {
        var i, r, n, a, s, o = [];
        if (!e.length) return null;
        for (i = 0; i < t.byteLength;) r = As(t[i] << 24 | t[i + 1] << 16 | t[i + 2] << 8 | t[i + 3]), n = fs(t.subarray(i + 4, i + 8)), a = r > 1 ? i + r : t.byteLength, n === e[0] && (1 === e.length ? o.push(t.subarray(i + 8, a)) : (s = ps(t.subarray(i + 8, a), e.slice(1))).length && (o = o.concat(s))), i = a;
        return o
    };
    fs = function(t) {
        var e = "";
        return e += String.fromCharCode(t[0]), e += String.fromCharCode(t[1]), e += String.fromCharCode(t[2]), e += String.fromCharCode(t[3])
    };
    var Ls = function(t) {
            return ps(t, ["moov", "trak"]).reduce((function(t, e) {
                var i, r, n, a, s;
                return (i = ps(e, ["tkhd"])[0]) ? (r = i[0], a = As(i[n = 0 === r ? 12 : 20] << 24 | i[n + 1] << 16 | i[n + 2] << 8 | i[n + 3]), (s = ps(e, ["mdia", "mdhd"])[0]) ? (n = 0 === (r = s[0]) ? 12 : 20, t[a] = As(s[n] << 24 | s[n + 1] << 16 | s[n + 2] << 8 | s[n + 3]), t) : null) : null
            }), {})
        },
        Ps = function(t, e) {
            var i, r, n;
            return i = ps(e, ["moof", "traf"]), r = [].concat.apply([], i.map((function(e) {
                return ps(e, ["tfhd"]).map((function(i) {
                    var r, n;
                    return r = As(i[4] << 24 | i[5] << 16 | i[6] << 8 | i[7]), n = t[r] || 9e4, (ps(e, ["tfdt"]).map((function(t) {
                        var e, i;
                        return e = t[0], i = As(t[4] << 24 | t[5] << 16 | t[6] << 8 | t[7]), 1 === e && (i *= Math.pow(2, 32), i += As(t[8] << 24 | t[9] << 16 | t[10] << 8 | t[11])), i
                    }))[0] || 1 / 0) / n
                }))
            }))), n = Math.min.apply(null, r), isFinite(n) ? n : 0
        },
        Os = {
            H264_STREAM_TYPE: 27,
            ADTS_STREAM_TYPE: 15,
            METADATA_STREAM_TYPE: 21
        },
        Is = Os.H264_STREAM_TYPE,
        xs = Os.ADTS_STREAM_TYPE,
        Ds = Os.METADATA_STREAM_TYPE,
        Rs = Object.freeze({
            default: Os,
            __moduleExports: Os,
            H264_STREAM_TYPE: Is,
            ADTS_STREAM_TYPE: xs,
            METADATA_STREAM_TYPE: Ds
        }),
        Ms = function() {
            this.init = function() {
                var t = {};
                this.on = function(e, i) {
                    t[e] || (t[e] = []), t[e] = t[e].concat(i)
                }, this.off = function(e, i) {
                    var r;
                    return !!t[e] && (r = t[e].indexOf(i), t[e] = t[e].slice(), t[e].splice(r, 1), r > -1)
                }, this.trigger = function(e) {
                    var i, r, n, a;
                    if (i = t[e])
                        if (2 === arguments.length)
                            for (n = i.length, r = 0; r < n; ++r) i[r].call(this, arguments[1]);
                        else {
                            for (a = [], r = arguments.length, r = 1; r < arguments.length; ++r) a.push(arguments[r]);
                            for (n = i.length, r = 0; r < n; ++r) i[r].apply(this, a)
                        }
                }, this.dispose = function() {
                    t = {}
                }
            }
        };
    Ms.prototype.pipe = function(t) {
        return this.on("data", (function(e) {
            t.push(e)
        })), this.on("done", (function(e) {
            t.flush(e)
        })), t
    }, Ms.prototype.push = function(t) {
        this.trigger("data", t)
    }, Ms.prototype.flush = function(t) {
        this.trigger("done", t)
    };
    var Us = Ms,
        Ns = Object.freeze({
            default: Us,
            __moduleExports: Us
        }),
        Bs = function(t, e) {
            var i = 1;
            for (t > e && (i = -1); Math.abs(e - t) > 4294967296;) t += 8589934592 * i;
            return t
        },
        js = function t(e) {
            var i, r;
            t.prototype.init.call(this), this.type_ = e, this.push = function(t) {
                t.type === this.type_ && (void 0 === r && (r = t.dts), t.dts = Bs(t.dts, r), t.pts = Bs(t.pts, r), i = t.dts, this.trigger("data", t))
            }, this.flush = function() {
                r = i, this.trigger("done")
            }, this.discontinuity = function() {
                r = void 0, i = void 0
            }
        };
    js.prototype = new(Ns && Us || Ns);
    var Fs = {
            TimestampRolloverStream: js,
            handleRollover: Bs
        },
        Hs = Fs.TimestampRolloverStream,
        Vs = Fs.handleRollover,
        qs = Object.freeze({
            default: Fs,
            __moduleExports: Fs,
            TimestampRolloverStream: Hs,
            handleRollover: Vs
        }),
        Ws = Rs && Os || Rs,
        zs = function(t) {
            var e = 31 & t[1];
            return e <<= 8, e |= t[2]
        },
        Gs = function(t) {
            return !!(64 & t[1])
        },
        Xs = function(t) {
            var e = 0;
            return (48 & t[3]) >>> 4 > 1 && (e += t[4] + 1), e
        },
        Ys = function(t) {
            switch (t) {
                case 5:
                    return "slice_layer_without_partitioning_rbsp_idr";
                case 6:
                    return "sei_rbsp";
                case 7:
                    return "seq_parameter_set_rbsp";
                case 8:
                    return "pic_parameter_set_rbsp";
                case 9:
                    return "access_unit_delimiter_rbsp";
                default:
                    return null
            }
        },
        $s = {
            parseType: function(t, e) {
                var i = zs(t);
                return 0 === i ? "pat" : i === e ? "pmt" : e ? "pes" : null
            },
            parsePat: function(t) {
                var e = Gs(t),
                    i = 4 + Xs(t);
                return e && (i += t[i] + 1), (31 & t[i + 10]) << 8 | t[i + 11]
            },
            parsePmt: function(t) {
                var e = {},
                    i = Gs(t),
                    r = 4 + Xs(t);
                if (i && (r += t[r] + 1), 1 & t[r + 5]) {
                    var n;
                    n = 3 + ((15 & t[r + 1]) << 8 | t[r + 2]) - 4;
                    for (var a = 12 + ((15 & t[r + 10]) << 8 | t[r + 11]); a < n;) {
                        var s = r + a;
                        e[(31 & t[s + 1]) << 8 | t[s + 2]] = t[s], a += 5 + ((15 & t[s + 3]) << 8 | t[s + 4])
                    }
                    return e
                }
            },
            parsePayloadUnitStartIndicator: Gs,
            parsePesType: function(t, e) {
                switch (e[zs(t)]) {
                    case Ws.H264_STREAM_TYPE:
                        return "video";
                    case Ws.ADTS_STREAM_TYPE:
                        return "audio";
                    case Ws.METADATA_STREAM_TYPE:
                        return "timed-metadata";
                    default:
                        return null
                }
            },
            parsePesTime: function(t) {
                if (!Gs(t)) return null;
                var e = 4 + Xs(t);
                if (e >= t.byteLength) return null;
                var i, r = null;
                return 192 & (i = t[e + 7]) && ((r = {}).pts = (14 & t[e + 9]) << 27 | (255 & t[e + 10]) << 20 | (254 & t[e + 11]) << 12 | (255 & t[e + 12]) << 5 | (254 & t[e + 13]) >>> 3, r.pts *= 4, r.pts += (6 & t[e + 13]) >>> 1, r.dts = r.pts, 64 & i && (r.dts = (14 & t[e + 14]) << 27 | (255 & t[e + 15]) << 20 | (254 & t[e + 16]) << 12 | (255 & t[e + 17]) << 5 | (254 & t[e + 18]) >>> 3, r.dts *= 4, r.dts += (6 & t[e + 18]) >>> 1)), r
            },
            videoPacketContainsKeyFrame: function(t) {
                for (var e = 4 + Xs(t), i = t.subarray(e), r = 0, n = 0, a = !1; n < i.byteLength - 3; n++)
                    if (1 === i[n + 2]) {
                        r = n + 5;
                        break
                    }
                for (; r < i.byteLength;) switch (i[r]) {
                    case 0:
                        if (0 !== i[r - 1]) {
                            r += 2;
                            break
                        }
                        if (0 !== i[r - 2]) {
                            r++;
                            break
                        }
                        n + 3 !== r - 2 && "slice_layer_without_partitioning_rbsp_idr" === Ys(31 & i[n + 3]) && (a = !0);
                        do {
                            r++
                        } while (1 !== i[r] && r < i.length);
                        n = r - 2, r += 3;
                        break;
                    case 1:
                        if (0 !== i[r - 1] || 0 !== i[r - 2]) {
                            r += 3;
                            break
                        }
                        "slice_layer_without_partitioning_rbsp_idr" === Ys(31 & i[n + 3]) && (a = !0), n = r - 2, r += 3;
                        break;
                    default:
                        r += 3
                }
                return i = i.subarray(n), r -= n, n = 0, i && i.byteLength > 3 && "slice_layer_without_partitioning_rbsp_idr" === Ys(31 & i[n + 3]) && (a = !0), a
            }
        },
        Ks = $s.parseType,
        Qs = $s.parsePat,
        Js = $s.parsePmt,
        Zs = $s.parsePayloadUnitStartIndicator,
        to = $s.parsePesType,
        eo = $s.parsePesTime,
        io = $s.videoPacketContainsKeyFrame,
        ro = Object.freeze({
            default: $s,
            __moduleExports: $s,
            parseType: Ks,
            parsePat: Qs,
            parsePmt: Js,
            parsePayloadUnitStartIndicator: Zs,
            parsePesType: to,
            parsePesTime: eo,
            videoPacketContainsKeyFrame: io
        }),
        no = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350],
        ao = function(t) {
            return t[0] << 21 | t[1] << 14 | t[2] << 7 | t[3]
        },
        so = {
            parseId3TagSize: function(t, e) {
                var i = t[e + 6] << 21 | t[e + 7] << 14 | t[e + 8] << 7 | t[e + 9];
                return (16 & t[e + 5]) >> 4 ? i + 20 : i + 10
            },
            parseAdtsSize: function(t, e) {
                var i = (224 & t[e + 5]) >> 5,
                    r = t[e + 4] << 3;
                return 6144 & t[e + 3] | r | i
            },
            parseType: function(t, e) {
                return t[e] === "I".charCodeAt(0) && t[e + 1] === "D".charCodeAt(0) && t[e + 2] === "3".charCodeAt(0) ? "timed-metadata" : !0 & t[e] && 240 == (240 & t[e + 1]) ? "audio" : null
            },
            parseSampleRate: function(t) {
                for (var e = 0; e + 5 < t.length;) {
                    if (255 === t[e] && 240 == (246 & t[e + 1])) return no[(60 & t[e + 2]) >>> 2];
                    e++
                }
                return null
            },
            parseAacTimestamp: function(t) {
                var e, i, r;
                e = 10, 64 & t[5] && (e += 4, e += ao(t.subarray(10, 14)));
                do {
                    if ((i = ao(t.subarray(e + 4, e + 8))) < 1) return null;
                    if ("PRIV" === String.fromCharCode(t[e], t[e + 1], t[e + 2], t[e + 3])) {
                        r = t.subarray(e + 10, e + i + 10);
                        for (var n = 0; n < r.byteLength; n++)
                            if (0 === r[n]) {
                                if ("com.apple.streaming.transportStreamTimestamp" === unescape(function(t, e, i) {
                                        var r, n = "";
                                        for (r = e; r < i; r++) n += "%" + ("00" + t[r].toString(16)).slice(-2);
                                        return n
                                    }(r, 0, n))) {
                                    var a = r.subarray(n + 1),
                                        s = (1 & a[3]) << 30 | a[4] << 22 | a[5] << 14 | a[6] << 6 | a[7] >>> 2;
                                    return s *= 4, s += 3 & a[7]
                                }
                                break
                            }
                    }
                    e += 10, e += i
                } while (e < t.byteLength);
                return null
            }
        },
        oo = so.parseId3TagSize,
        uo = so.parseAdtsSize,
        lo = so.parseType,
        co = so.parseSampleRate,
        ho = so.parseAacTimestamp,
        po = Object.freeze({
            default: so,
            __moduleExports: so,
            parseId3TagSize: oo,
            parseAdtsSize: uo,
            parseType: lo,
            parseSampleRate: co,
            parseAacTimestamp: ho
        }),
        fo = ro && $s || ro,
        mo = po && so || po,
        go = (qs && Fs || qs).handleRollover,
        yo = {};
    yo.ts = fo, yo.aac = mo;
    var vo = function(t, e, i) {
            for (var r, n, a, s, o = 0, u = 188, l = !1; u < t.byteLength;)
                if (71 !== t[o] || 71 !== t[u]) o++, u++;
                else {
                    switch (r = t.subarray(o, u), yo.ts.parseType(r, e.pid)) {
                        case "pes":
                            n = yo.ts.parsePesType(r, e.table), a = yo.ts.parsePayloadUnitStartIndicator(r), "audio" === n && a && (s = yo.ts.parsePesTime(r)) && (s.type = "audio", i.audio.push(s), l = !0)
                    }
                    if (l) break;
                    o += 188, u += 188
                }
            for (o = (u = t.byteLength) - 188, l = !1; o >= 0;)
                if (71 !== t[o] || 71 !== t[u]) o--, u--;
                else {
                    switch (r = t.subarray(o, u), yo.ts.parseType(r, e.pid)) {
                        case "pes":
                            n = yo.ts.parsePesType(r, e.table), a = yo.ts.parsePayloadUnitStartIndicator(r), "audio" === n && a && (s = yo.ts.parsePesTime(r)) && (s.type = "audio", i.audio.push(s), l = !0)
                    }
                    if (l) break;
                    o -= 188, u -= 188
                }
        },
        _o = function(t, e, i) {
            for (var r, n, a, s, o, u, l, c = 0, h = 188, d = !1, p = {
                    data: [],
                    size: 0
                }; h < t.byteLength;)
                if (71 !== t[c] || 71 !== t[h]) c++, h++;
                else {
                    switch (r = t.subarray(c, h), yo.ts.parseType(r, e.pid)) {
                        case "pes":
                            if (n = yo.ts.parsePesType(r, e.table), a = yo.ts.parsePayloadUnitStartIndicator(r), "video" === n && (a && !d && (s = yo.ts.parsePesTime(r)) && (s.type = "video", i.video.push(s), d = !0), !i.firstKeyFrame)) {
                                if (a && 0 !== p.size) {
                                    for (o = new Uint8Array(p.size), u = 0; p.data.length;) l = p.data.shift(), o.set(l, u), u += l.byteLength;
                                    yo.ts.videoPacketContainsKeyFrame(o) && (i.firstKeyFrame = yo.ts.parsePesTime(o), i.firstKeyFrame.type = "video"), p.size = 0
                                }
                                p.data.push(r), p.size += r.byteLength
                            }
                    }
                    if (d && i.firstKeyFrame) break;
                    c += 188, h += 188
                }
            for (c = (h = t.byteLength) - 188, d = !1; c >= 0;)
                if (71 !== t[c] || 71 !== t[h]) c--, h--;
                else {
                    switch (r = t.subarray(c, h), yo.ts.parseType(r, e.pid)) {
                        case "pes":
                            n = yo.ts.parsePesType(r, e.table), a = yo.ts.parsePayloadUnitStartIndicator(r), "video" === n && a && (s = yo.ts.parsePesTime(r)) && (s.type = "video", i.video.push(s), d = !0)
                    }
                    if (d) break;
                    c -= 188, h -= 188
                }
        },
        bo = function(t) {
            var e = {
                    pid: null,
                    table: null
                },
                i = {};
            for (var r in function(t, e) {
                    for (var i, r = 0, n = 188; n < t.byteLength;)
                        if (71 !== t[r] || 71 !== t[n]) r++, n++;
                        else {
                            switch (i = t.subarray(r, n), yo.ts.parseType(i, e.pid)) {
                                case "pat":
                                    e.pid || (e.pid = yo.ts.parsePat(i));
                                    break;
                                case "pmt":
                                    e.table || (e.table = yo.ts.parsePmt(i))
                            }
                            if (e.pid && e.table) return;
                            r += 188, n += 188
                        }
                }(t, e), e.table) {
                if (e.table.hasOwnProperty(r)) switch (e.table[r]) {
                    case Ws.H264_STREAM_TYPE:
                        i.video = [], _o(t, e, i), 0 === i.video.length && delete i.video;
                        break;
                    case Ws.ADTS_STREAM_TYPE:
                        i.audio = [], vo(t, e, i), 0 === i.audio.length && delete i.audio
                }
            }
            return i
        },
        To = function(t, e) {
            var i, r;
            return (r = (i = t)[0] === "I".charCodeAt(0) && i[1] === "D".charCodeAt(0) && i[2] === "3".charCodeAt(0) ? function(t) {
                for (var e, i = !1, r = 0, n = null, a = null, s = 0, o = 0; t.length - o >= 3;) {
                    switch (yo.aac.parseType(t, o)) {
                        case "timed-metadata":
                            if (t.length - o < 10) {
                                i = !0;
                                break
                            }
                            if ((s = yo.aac.parseId3TagSize(t, o)) > t.length) {
                                i = !0;
                                break
                            }
                            null === a && (e = t.subarray(o, o + s), a = yo.aac.parseAacTimestamp(e)), o += s;
                            break;
                        case "audio":
                            if (t.length - o < 7) {
                                i = !0;
                                break
                            }
                            if ((s = yo.aac.parseAdtsSize(t, o)) > t.length) {
                                i = !0;
                                break
                            }
                            null === n && (e = t.subarray(o, o + s), n = yo.aac.parseSampleRate(e)), r++, o += s;
                            break;
                        default:
                            o++
                    }
                    if (i) return null
                }
                if (null === n || null === a) return null;
                var u = 9e4 / n;
                return {
                    audio: [{
                        type: "audio",
                        dts: a,
                        pts: a
                    }, {
                        type: "audio",
                        dts: a + 1024 * r * u,
                        pts: a + 1024 * r * u
                    }]
                }
            }(t) : bo(t)) && (r.audio || r.video) ? (function(t, e) {
                if (t.audio && t.audio.length) {
                    var i = e;
                    void 0 === i && (i = t.audio[0].dts), t.audio.forEach((function(t) {
                        t.dts = go(t.dts, i), t.pts = go(t.pts, i), t.dtsTime = t.dts / 9e4, t.ptsTime = t.pts / 9e4
                    }))
                }
                if (t.video && t.video.length) {
                    var r = e;
                    if (void 0 === r && (r = t.video[0].dts), t.video.forEach((function(t) {
                            t.dts = go(t.dts, r), t.pts = go(t.pts, r), t.dtsTime = t.dts / 9e4, t.ptsTime = t.pts / 9e4
                        })), t.firstKeyFrame) {
                        var n = t.firstKeyFrame;
                        n.dts = go(n.dts, r), n.pts = go(n.pts, r), n.dtsTime = n.dts / 9e4, n.ptsTime = n.dts / 9e4
                    }
                }
            }(r, e), r) : null
        };
    var So = function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        },
        ko = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(),
        Co = null,
        Eo = function() {
            function t(e) {
                So(this, t), Co || (Co = function() {
                    var t = [
                            [
                                [],
                                [],
                                [],
                                [],
                                []
                            ],
                            [
                                [],
                                [],
                                [],
                                [],
                                []
                            ]
                        ],
                        e = t[0],
                        i = t[1],
                        r = e[4],
                        n = i[4],
                        a = void 0,
                        s = void 0,
                        o = void 0,
                        u = [],
                        l = [],
                        c = void 0,
                        h = void 0,
                        d = void 0,
                        p = void 0,
                        f = void 0;
                    for (a = 0; a < 256; a++) l[(u[a] = a << 1 ^ 283 * (a >> 7)) ^ a] = a;
                    for (s = o = 0; !r[s]; s ^= c || 1, o = l[o] || 1)
                        for (d = (d = o ^ o << 1 ^ o << 2 ^ o << 3 ^ o << 4) >> 8 ^ 255 & d ^ 99, r[s] = d, n[d] = s, f = 16843009 * u[h = u[c = u[s]]] ^ 65537 * h ^ 257 * c ^ 16843008 * s, p = 257 * u[d] ^ 16843008 * d, a = 0; a < 4; a++) e[a][s] = p = p << 24 ^ p >>> 8, i[a][d] = f = f << 24 ^ f >>> 8;
                    for (a = 0; a < 5; a++) e[a] = e[a].slice(0), i[a] = i[a].slice(0);
                    return t
                }()), this._tables = [
                    [Co[0][0].slice(), Co[0][1].slice(), Co[0][2].slice(), Co[0][3].slice(), Co[0][4].slice()],
                    [Co[1][0].slice(), Co[1][1].slice(), Co[1][2].slice(), Co[1][3].slice(), Co[1][4].slice()]
                ];
                var i = void 0,
                    r = void 0,
                    n = void 0,
                    a = void 0,
                    s = void 0,
                    o = this._tables[0][4],
                    u = this._tables[1],
                    l = e.length,
                    c = 1;
                if (4 !== l && 6 !== l && 8 !== l) throw new Error("Invalid aes key size");
                for (a = e.slice(0), s = [], this._key = [a, s], i = l; i < 4 * l + 28; i++) n = a[i - 1], (i % l == 0 || 8 === l && i % l == 4) && (n = o[n >>> 24] << 24 ^ o[n >> 16 & 255] << 16 ^ o[n >> 8 & 255] << 8 ^ o[255 & n], i % l == 0 && (n = n << 8 ^ n >>> 24 ^ c << 24, c = c << 1 ^ 283 * (c >> 7))), a[i] = a[i - l] ^ n;
                for (r = 0; i; r++, i--) n = a[3 & r ? i : i - 4], s[r] = i <= 4 || r < 4 ? n : u[0][o[n >>> 24]] ^ u[1][o[n >> 16 & 255]] ^ u[2][o[n >> 8 & 255]] ^ u[3][o[255 & n]]
            }
            return t.prototype.decrypt = function(t, e, i, r, n, a) {
                var s = this._key[1],
                    o = t ^ s[0],
                    u = r ^ s[1],
                    l = i ^ s[2],
                    c = e ^ s[3],
                    h = void 0,
                    d = void 0,
                    p = void 0,
                    f = s.length / 4 - 2,
                    m = void 0,
                    g = 4,
                    y = this._tables[1],
                    v = y[0],
                    _ = y[1],
                    b = y[2],
                    T = y[3],
                    S = y[4];
                for (m = 0; m < f; m++) h = v[o >>> 24] ^ _[u >> 16 & 255] ^ b[l >> 8 & 255] ^ T[255 & c] ^ s[g], d = v[u >>> 24] ^ _[l >> 16 & 255] ^ b[c >> 8 & 255] ^ T[255 & o] ^ s[g + 1], p = v[l >>> 24] ^ _[c >> 16 & 255] ^ b[o >> 8 & 255] ^ T[255 & u] ^ s[g + 2], c = v[c >>> 24] ^ _[o >> 16 & 255] ^ b[u >> 8 & 255] ^ T[255 & l] ^ s[g + 3], g += 4, o = h, u = d, l = p;
                for (m = 0; m < 4; m++) n[(3 & -m) + a] = S[o >>> 24] << 24 ^ S[u >> 16 & 255] << 16 ^ S[l >> 8 & 255] << 8 ^ S[255 & c] ^ s[g++], h = o, o = u, u = l, l = c, c = h
            }, t
        }(),
        wo = function() {
            function t() {
                So(this, t), this.listeners = {}
            }
            return t.prototype.on = function(t, e) {
                this.listeners[t] || (this.listeners[t] = []), this.listeners[t].push(e)
            }, t.prototype.off = function(t, e) {
                if (!this.listeners[t]) return !1;
                var i = this.listeners[t].indexOf(e);
                return this.listeners[t].splice(i, 1), i > -1
            }, t.prototype.trigger = function(t) {
                var e = this.listeners[t];
                if (e)
                    if (2 === arguments.length)
                        for (var i = e.length, r = 0; r < i; ++r) e[r].call(this, arguments[1]);
                    else
                        for (var n = Array.prototype.slice.call(arguments, 1), a = e.length, s = 0; s < a; ++s) e[s].apply(this, n)
            }, t.prototype.dispose = function() {
                this.listeners = {}
            }, t.prototype.pipe = function(t) {
                this.on("data", (function(e) {
                    t.push(e)
                }))
            }, t
        }(),
        Ao = function(t) {
            function e() {
                So(this, e);
                var i = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" !== (void 0 === e ? "undefined" : g(e)) && "function" != typeof e ? t : e
                }(this, t.call(this, wo));
                return i.jobs = [], i.delay = 1, i.timeout_ = null, i
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : g(e)));
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(e, t), e.prototype.processJob_ = function() {
                this.jobs.shift()(), this.jobs.length ? this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay) : this.timeout_ = null
            }, e.prototype.push = function(t) {
                this.jobs.push(t), this.timeout_ || (this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay))
            }, e
        }(wo),
        Lo = function(t) {
            return t << 24 | (65280 & t) << 8 | (16711680 & t) >> 8 | t >>> 24
        },
        Po = function(t, e, i) {
            var r = new Int32Array(t.buffer, t.byteOffset, t.byteLength >> 2),
                n = new Eo(Array.prototype.slice.call(e)),
                a = new Uint8Array(t.byteLength),
                s = new Int32Array(a.buffer),
                o = void 0,
                u = void 0,
                l = void 0,
                c = void 0,
                h = void 0,
                d = void 0,
                p = void 0,
                f = void 0,
                m = void 0;
            for (o = i[0], u = i[1], l = i[2], c = i[3], m = 0; m < r.length; m += 4) h = Lo(r[m]), d = Lo(r[m + 1]), p = Lo(r[m + 2]), f = Lo(r[m + 3]), n.decrypt(h, d, p, f, s, m), s[m] = Lo(s[m] ^ o), s[m + 1] = Lo(s[m + 1] ^ u), s[m + 2] = Lo(s[m + 2] ^ l), s[m + 3] = Lo(s[m + 3] ^ c), o = h, u = d, l = p, c = f;
            return a
        },
        Oo = function() {
            function t(e, i, r, n) {
                So(this, t);
                var a = t.STEP,
                    s = new Int32Array(e.buffer),
                    o = new Uint8Array(e.byteLength),
                    u = 0;
                for (this.asyncStream_ = new Ao, this.asyncStream_.push(this.decryptChunk_(s.subarray(u, u + a), i, r, o)), u = a; u < s.length; u += a) r = new Uint32Array([Lo(s[u - 4]), Lo(s[u - 3]), Lo(s[u - 2]), Lo(s[u - 1])]), this.asyncStream_.push(this.decryptChunk_(s.subarray(u, u + a), i, r, o));
                this.asyncStream_.push((function() {
                    var t;
                    n(null, (t = o).subarray(0, t.byteLength - t[t.byteLength - 1]))
                }))
            }
            return t.prototype.decryptChunk_ = function(t, e, i, r) {
                return function() {
                    var n = Po(t, e, i);
                    r.set(n, t.byteOffset)
                }
            }, ko(t, null, [{
                key: "STEP",
                get: function() {
                    return 32e3
                }
            }]), t
        }(),
        Io = function(t, e) {
            return /^[a-z]+:/i.test(e) ? e : (/\/\//i.test(t) || (t = wa.buildAbsoluteURL(r.location.href, t)), wa.buildAbsoluteURL(t, e))
        },
        xo = function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        },
        Do = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(),
        Ro = function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : g(e)));
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        },
        Mo = function(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" !== (void 0 === e ? "undefined" : g(e)) && "function" != typeof e ? t : e
        },
        Uo = function(t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return function(t, e) {
                var i = [],
                    r = !0,
                    n = !1,
                    a = void 0;
                try {
                    for (var s, o = t[Symbol.iterator](); !(r = (s = o.next()).done) && (i.push(s.value), !e || i.length !== e); r = !0);
                } catch (t) {
                    n = !0, a = t
                } finally {
                    try {
                        !r && o.return && o.return()
                    } finally {
                        if (n) throw a
                    }
                }
                return i
            }(t, e);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        },
        No = ka.mergeOptions,
        Bo = ka.EventTarget,
        jo = ka.log,
        Fo = function(t, e) {
            ["AUDIO", "SUBTITLES"].forEach((function(i) {
                for (var r in t.mediaGroups[i])
                    for (var n in t.mediaGroups[i][r]) {
                        var a = t.mediaGroups[i][r][n];
                        e(a, i, r, n)
                    }
            }))
        },
        Ho = function(t, e) {
            var i = No(t, {}),
                r = i.playlists[e.uri];
            if (!r) return null;
            if (r.segments && e.segments && r.segments.length === e.segments.length && r.mediaSequence === e.mediaSequence) return null;
            var n = No(r, e);
            r.segments && (n.segments = function(t, e, i) {
                var r = e.slice();
                i = i || 0;
                for (var n = Math.min(t.length, e.length + i), a = i; a < n; a++) r[a - i] = No(t[a], r[a - i]);
                return r
            }(r.segments, e.segments, e.mediaSequence - r.mediaSequence)), n.segments.forEach((function(t) {
                ! function(t, e) {
                    t.resolvedUri || (t.resolvedUri = Io(e, t.uri)), t.key && !t.key.resolvedUri && (t.key.resolvedUri = Io(e, t.key.uri)), t.map && !t.map.resolvedUri && (t.map.resolvedUri = Io(e, t.map.uri))
                }(t, n.resolvedUri)
            }));
            for (var a = 0; a < i.playlists.length; a++) i.playlists[a].uri === e.uri && (i.playlists[a] = n);
            return i.playlists[e.uri] = n, i
        },
        Vo = function(t) {
            for (var e = t.playlists.length; e--;) {
                var i = t.playlists[e];
                t.playlists[i.uri] = i, i.resolvedUri = Io(t.uri, i.uri), i.id = e, i.attributes || (i.attributes = {}, jo.warn("Invalid playlist STREAM-INF detected. Missing BANDWIDTH attribute."))
            }
        },
        qo = function(t) {
            Fo(t, (function(e) {
                e.uri && (e.resolvedUri = Io(t.uri, e.uri))
            }))
        },
        Wo = function(t, e) {
            var i = t.segments[t.segments.length - 1];
            return e && i && i.duration ? 1e3 * i.duration : 500 * (t.targetDuration || 10)
        },
        zo = function(t) {
            function e(t, i, r) {
                xo(this, e);
                var n = Mo(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                if (n.srcUrl = t, n.hls_ = i, n.withCredentials = r, !n.srcUrl) throw new Error("A non-empty playlist URL is required");
                return n.state = "HAVE_NOTHING", n.on("mediaupdatetimeout", (function() {
                    "HAVE_METADATA" === n.state && (n.state = "HAVE_CURRENT_METADATA", n.request = n.hls_.xhr({
                        uri: Io(n.master.uri, n.media().uri),
                        withCredentials: n.withCredentials
                    }, (function(t, e) {
                        if (n.request) return t ? n.playlistRequestError(n.request, n.media().uri, "HAVE_METADATA") : void n.haveMetadata(n.request, n.media().uri)
                    })))
                })), n
            }
            return Ro(e, t), Do(e, [{
                key: "playlistRequestError",
                value: function(t, e, i) {
                    this.request = null, i && (this.state = i), this.error = {
                        playlist: this.master.playlists[e],
                        status: t.status,
                        message: "HLS playlist request error at URL: " + e,
                        responseText: t.responseText,
                        code: t.status >= 500 ? 4 : 2
                    }, this.trigger("error")
                }
            }, {
                key: "haveMetadata",
                value: function(t, e) {
                    var i = this;
                    this.request = null, this.state = "HAVE_METADATA";
                    var n = new Ma;
                    n.push(t.responseText), n.end(), n.manifest.uri = e, n.manifest.attributes = n.manifest.attributes || {};
                    var a = Ho(this.master, n.manifest);
                    this.targetDuration = n.manifest.targetDuration, a ? (this.master = a, this.media_ = this.master.playlists[n.manifest.uri]) : this.trigger("playlistunchanged"), this.media().endList || (r.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = r.setTimeout((function() {
                        i.trigger("mediaupdatetimeout")
                    }), Wo(this.media(), !!a))), this.trigger("loadedplaylist")
                }
            }, {
                key: "dispose",
                value: function() {
                    this.stopRequest(), r.clearTimeout(this.mediaUpdateTimeout)
                }
            }, {
                key: "stopRequest",
                value: function() {
                    if (this.request) {
                        var t = this.request;
                        this.request = null, t.onreadystatechange = null, t.abort()
                    }
                }
            }, {
                key: "media",
                value: function(t) {
                    var e = this;
                    if (!t) return this.media_;
                    if ("HAVE_NOTHING" === this.state) throw new Error("Cannot switch media playlist from " + this.state);
                    var i = this.state;
                    if ("string" == typeof t) {
                        if (!this.master.playlists[t]) throw new Error("Unknown playlist URI: " + t);
                        t = this.master.playlists[t]
                    }
                    var r = !this.media_ || t.uri !== this.media_.uri;
                    if (this.master.playlists[t.uri].endList) return this.request && (this.request.onreadystatechange = null, this.request.abort(), this.request = null), this.state = "HAVE_METADATA", this.media_ = t, void(r && (this.trigger("mediachanging"), this.trigger("mediachange")));
                    if (r) {
                        if (this.state = "SWITCHING_MEDIA", this.request) {
                            if (Io(this.master.uri, t.uri) === this.request.url) return;
                            this.request.onreadystatechange = null, this.request.abort(), this.request = null
                        }
                        this.media_ && this.trigger("mediachanging"), this.request = this.hls_.xhr({
                            uri: Io(this.master.uri, t.uri),
                            withCredentials: this.withCredentials
                        }, (function(r, n) {
                            if (e.request) {
                                if (r) return e.playlistRequestError(e.request, t.uri, i);
                                e.haveMetadata(n, t.uri), "HAVE_MASTER" === i ? e.trigger("loadedmetadata") : e.trigger("mediachange")
                            }
                        }))
                    }
                }
            }, {
                key: "pause",
                value: function() {
                    this.stopRequest(), r.clearTimeout(this.mediaUpdateTimeout), "HAVE_NOTHING" === this.state && (this.started = !1), "SWITCHING_MEDIA" === this.state ? this.media_ ? this.state = "HAVE_METADATA" : this.state = "HAVE_MASTER" : "HAVE_CURRENT_METADATA" === this.state && (this.state = "HAVE_METADATA")
                }
            }, {
                key: "load",
                value: function(t) {
                    var e = this;
                    r.clearTimeout(this.mediaUpdateTimeout);
                    var i = this.media();
                    if (t) {
                        var n = i ? i.targetDuration / 2 * 1e3 : 5e3;
                        this.mediaUpdateTimeout = r.setTimeout((function() {
                            return e.load()
                        }), n)
                    } else this.started ? i && !i.endList ? this.trigger("mediaupdatetimeout") : this.trigger("loadedplaylist") : this.start()
                }
            }, {
                key: "start",
                value: function() {
                    var t = this;
                    this.started = !0, this.request = this.hls_.xhr({
                        uri: this.srcUrl,
                        withCredentials: this.withCredentials
                    }, (function(e, i) {
                        if (t.request) {
                            if (t.request = null, e) return t.error = {
                                status: i.status,
                                message: "HLS playlist request error at URL: " + t.srcUrl,
                                responseText: i.responseText,
                                code: 2
                            }, "HAVE_NOTHING" === t.state && (t.started = !1), t.trigger("error");
                            var n = new Ma;
                            return n.push(i.responseText), n.end(), t.state = "HAVE_MASTER", n.manifest.uri = t.srcUrl, n.manifest.playlists ? (t.master = n.manifest, Vo(t.master), qo(t.master), t.trigger("loadedplaylist"), void(t.request || t.media(n.manifest.playlists[0]))) : (t.master = {
                                mediaGroups: {
                                    AUDIO: {},
                                    VIDEO: {},
                                    "CLOSED-CAPTIONS": {},
                                    SUBTITLES: {}
                                },
                                uri: r.location.href,
                                playlists: [{
                                    uri: t.srcUrl,
                                    id: 0
                                }]
                            }, t.master.playlists[t.srcUrl] = t.master.playlists[0], t.master.playlists[0].resolvedUri = t.srcUrl, t.master.playlists[0].attributes = t.master.playlists[0].attributes || {}, t.haveMetadata(i, t.srcUrl), t.trigger("loadedmetadata"))
                        }
                    }))
                }
            }]), e
        }(Bo),
        Go = ka.createTimeRange,
        Xo = function(t, e, i) {
            var r, n;
            return void 0 === e && (e = t.mediaSequence + t.segments.length), e < t.mediaSequence ? 0 : (r = function(t, e) {
                var i = 0,
                    r = e - t.mediaSequence,
                    n = t.segments[r];
                if (n) {
                    if (void 0 !== n.start) return {
                        result: n.start,
                        precise: !0
                    };
                    if (void 0 !== n.end) return {
                        result: n.end - n.duration,
                        precise: !0
                    }
                }
                for (; r--;) {
                    if (void 0 !== (n = t.segments[r]).end) return {
                        result: i + n.end,
                        precise: !0
                    };
                    if (i += n.duration, void 0 !== n.start) return {
                        result: i + n.start,
                        precise: !0
                    }
                }
                return {
                    result: i,
                    precise: !1
                }
            }(t, e)).precise ? r.result : (n = function(t, e) {
                for (var i = 0, r = void 0, n = e - t.mediaSequence; n < t.segments.length; n++) {
                    if (void 0 !== (r = t.segments[n]).start) return {
                        result: r.start - i,
                        precise: !0
                    };
                    if (i += r.duration, void 0 !== r.end) return {
                        result: r.end - i,
                        precise: !0
                    }
                }
                return {
                    result: -1,
                    precise: !1
                }
            }(t, e)).precise ? n.result : r.result + i
        },
        Yo = function(t, e, i) {
            if (!t) return 0;
            if ("number" != typeof i && (i = 0), void 0 === e) {
                if (t.totalDuration) return t.totalDuration;
                if (!t.endList) return r.Infinity
            }
            return Xo(t, e, i)
        },
        $o = function(t, e, i) {
            var r = 0;
            if (e > i) {
                var n = [i, e];
                e = n[0], i = n[1]
            }
            if (e < 0) {
                for (var a = e; a < Math.min(0, i); a++) r += t.targetDuration;
                e = 0
            }
            for (var s = e; s < i; s++) r += t.segments[s].duration;
            return r
        },
        Ko = function(t) {
            if (!t.segments.length) return 0;
            for (var e = t.segments.length - 1, i = t.segments[e].duration || t.targetDuration, r = i + 2 * t.targetDuration; e-- && !((i += t.segments[e].duration) >= r););
            return Math.max(0, e)
        },
        Qo = function(t, e, i) {
            if (!t || !t.segments) return null;
            if (t.endList) return Yo(t);
            if (null === e) return null;
            e = e || 0;
            var r = i ? Ko(t) : t.segments.length;
            return Xo(t, t.mediaSequence + r, e)
        },
        Jo = function(t) {
            return t - Math.floor(t) == 0
        },
        Zo = function(t, e) {
            if (Jo(e)) return e + .1 * t;
            for (var i = e.toString().split(".")[1].length, r = 1; r <= i; r++) {
                var n = Math.pow(10, r),
                    a = e * n;
                if (Jo(a) || r === i) return (a + t) / n
            }
        },
        tu = Zo.bind(null, 1),
        eu = Zo.bind(null, -1),
        iu = function(t) {
            return t.excludeUntil && t.excludeUntil > Date.now()
        },
        ru = function(t) {
            return t.excludeUntil && t.excludeUntil === 1 / 0
        },
        nu = function(t) {
            var e = iu(t);
            return !t.disabled && !e
        },
        au = function(t, e) {
            return e.attributes && e.attributes[t]
        },
        su = function(t, e) {
            if (1 === t.playlists.length) return !0;
            var i = e.attributes.BANDWIDTH || Number.MAX_VALUE;
            return 0 === t.playlists.filter((function(t) {
                return !!nu(t) && (t.attributes.BANDWIDTH || 0) < i
            })).length
        },
        ou = {
            duration: Yo,
            seekable: function(t, e) {
                var i = e || 0,
                    r = Qo(t, e, !0);
                return null === r ? Go() : Go(i, r)
            },
            safeLiveIndex: Ko,
            getMediaInfoForTime: function(t, e, i, r) {
                var n = void 0,
                    a = void 0,
                    s = t.segments.length,
                    o = e - r;
                if (o < 0) {
                    if (i > 0)
                        for (n = i - 1; n >= 0; n--)
                            if (a = t.segments[n], (o += eu(a.duration)) > 0) return {
                                mediaIndex: n,
                                startTime: r - $o(t, i, n)
                            };
                    return {
                        mediaIndex: 0,
                        startTime: e
                    }
                }
                if (i < 0) {
                    for (n = i; n < 0; n++)
                        if ((o -= t.targetDuration) < 0) return {
                            mediaIndex: 0,
                            startTime: e
                        };
                    i = 0
                }
                for (n = i; n < s; n++)
                    if (a = t.segments[n], (o -= tu(a.duration)) < 0) return {
                        mediaIndex: n,
                        startTime: r + $o(t, i, n)
                    };
                return {
                    mediaIndex: s - 1,
                    startTime: e
                }
            },
            isEnabled: nu,
            isDisabled: function(t) {
                return t.disabled
            },
            isBlacklisted: iu,
            isIncompatible: ru,
            playlistEnd: Qo,
            isAes: function(t) {
                for (var e = 0; e < t.segments.length; e++)
                    if (t.segments[e].key) return !0;
                return !1
            },
            isFmp4: function(t) {
                for (var e = 0; e < t.segments.length; e++)
                    if (t.segments[e].map) return !0;
                return !1
            },
            hasAttribute: au,
            estimateSegmentRequestTime: function(t, e, i) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                if (!au("BANDWIDTH", i)) return NaN;
                var n = t * i.attributes.BANDWIDTH;
                return (n - 8 * r) / e
            },
            isLowestEnabledRendition: su
        },
        uu = ka.xhr,
        lu = ka.mergeOptions,
        cu = function() {
            return function t(e, i) {
                e = lu({
                    timeout: 45e3
                }, e);
                var r = t.beforeRequest || ka.Hls.xhr.beforeRequest;
                if (r && "function" == typeof r) {
                    var n = r(e);
                    n && (e = n)
                }
                var a = uu(e, (function(t, e) {
                        var r = a.response;
                        !t && r && (a.responseTime = Date.now(), a.roundTripTime = a.responseTime - a.requestTime, a.bytesReceived = r.byteLength || r.length, a.bandwidth || (a.bandwidth = Math.floor(a.bytesReceived / a.roundTripTime * 8 * 1e3))), e.headers && (a.responseHeaders = e.headers), t && "ETIMEDOUT" === t.code && (a.timedout = !0), t || a.aborted || 200 === e.statusCode || 206 === e.statusCode || 0 === e.statusCode || (t = new Error("XHR Failed with a response of: " + (a && (r || a.responseText)))), i(t, a)
                    })),
                    s = a.abort;
                return a.abort = function() {
                    return a.aborted = !0, s.apply(a, arguments)
                }, a.uri = e.uri, a.requestTime = Date.now(), a
            }
        },
        hu = function(t, e) {
            return t.start(e) + "-" + t.end(e)
        },
        du = function(t, e) {
            var i = t.toString(16);
            return "00".substring(0, 2 - i.length) + i + (e % 2 ? " " : "")
        },
        pu = function(t) {
            return t >= 32 && t < 126 ? String.fromCharCode(t) : "."
        },
        fu = function(t) {
            var e = {};
            return Object.keys(t).forEach((function(i) {
                var r = t[i];
                ArrayBuffer.isView(r) ? e[i] = {
                    bytes: r.buffer,
                    byteOffset: r.byteOffset,
                    byteLength: r.byteLength
                } : e[i] = r
            })), e
        },
        mu = function(t) {
            var e = t.byterange || {
                length: 1 / 0,
                offset: 0
            };
            return [e.length, e.offset, t.resolvedUri].join(",")
        },
        gu = function(t) {
            for (var e = Array.prototype.slice.call(t), i = "", r = 0; r < e.length / 16; r++) i += e.slice(16 * r, 16 * r + 16).map(du).join("") + " " + e.slice(16 * r, 16 * r + 16).map(pu).join("") + "\n";
            return i
        },
        yu = Object.freeze({
            createTransferableMessage: fu,
            initSegmentId: mu,
            hexDump: gu,
            tagDump: function(t) {
                var e = t.bytes;
                return gu(e)
            },
            textRanges: function(t) {
                var e = "",
                    i = void 0;
                for (i = 0; i < t.length; i++) e += hu(t, i) + " ";
                return e
            }
        }),
        vu = function(t, e) {
            var i = [],
                r = void 0;
            if (t && t.length)
                for (r = 0; r < t.length; r++) e(t.start(r), t.end(r)) && i.push([t.start(r), t.end(r)]);
            return ka.createTimeRanges(i)
        },
        _u = function(t, e) {
            return vu(t, (function(t, i) {
                return t - 1 / 30 <= e && i + 1 / 30 >= e
            }))
        },
        bu = function(t, e) {
            return vu(t, (function(t) {
                return t - 1 / 30 >= e
            }))
        },
        Tu = function(t) {
            var e = [];
            if (!t || !t.length) return "";
            for (var i = 0; i < t.length; i++) e.push(t.start(i) + " => " + t.end(i));
            return e.join(", ")
        },
        Su = function(t) {
            for (var e = [], i = 0; i < t.length; i++) e.push({
                start: t.start(i),
                end: t.end(i)
            });
            return e
        },
        ku = function(t, e, i) {
            var r = void 0,
                n = void 0;
            if (i && i.cues)
                for (r = i.cues.length; r--;)(n = i.cues[r]).startTime <= e && n.endTime >= t && i.removeCue(n)
        },
        Cu = function(t) {
            return isNaN(t) || Math.abs(t) === 1 / 0 ? Number.MAX_VALUE : t
        },
        Eu = function(t, e, i) {
            var n = r.WebKitDataCue || r.VTTCue;
            if (e && e.forEach((function(t) {
                    var e = t.stream;
                    this.inbandTextTracks_[e].addCue(new n(t.startTime + this.timestampOffset, t.endTime + this.timestampOffset, t.text))
                }), t), i) {
                var a = Cu(t.mediaSource_.duration);
                if (i.forEach((function(t) {
                        var e = t.cueTime + this.timestampOffset;
                        t.frames.forEach((function(t) {
                            var i = new n(e, e, t.value || t.url || t.data || "");
                            i.frame = t, i.value = t,
                                function(t) {
                                    Object.defineProperties(t.frame, {
                                        id: {
                                            get: function() {
                                                return ka.log.warn("cue.frame.id is deprecated. Use cue.value.key instead."), t.value.key
                                            }
                                        },
                                        value: {
                                            get: function() {
                                                return ka.log.warn("cue.frame.value is deprecated. Use cue.value.data instead."), t.value.data
                                            }
                                        },
                                        privateData: {
                                            get: function() {
                                                return ka.log.warn("cue.frame.privateData is deprecated. Use cue.value.data instead."), t.value.data
                                            }
                                        }
                                    })
                                }(i), this.metadataTrack_.addCue(i)
                        }), this)
                    }), t), t.metadataTrack_ && t.metadataTrack_.cues && t.metadataTrack_.cues.length) {
                    for (var s = t.metadataTrack_.cues, o = [], u = 0; u < s.length; u++) s[u] && o.push(s[u]);
                    var l = o.reduce((function(t, e) {
                            var i = t[e.startTime] || [];
                            return i.push(e), t[e.startTime] = i, t
                        }), {}),
                        c = Object.keys(l).sort((function(t, e) {
                            return Number(t) - Number(e)
                        }));
                    c.forEach((function(t, e) {
                        var i = l[t],
                            r = Number(c[e + 1]) || a;
                        i.forEach((function(t) {
                            t.endTime = r
                        }))
                    }))
                }
            }
        },
        wu = "undefined" != typeof window ? window : {},
        Au = "undefined" == typeof Symbol ? "__target" : Symbol(),
        Lu = wu.BlobBuilder || wu.WebKitBlobBuilder || wu.MozBlobBuilder || wu.MSBlobBuilder,
        Pu = wu.URL || wu.webkitURL || Pu && Pu.msURL,
        Ou = wu.Worker;

    function Iu(t, e) {
        return function(i) {
            var r = this;
            if (!e) return new Ou(t);
            if (Ou && !i) {
                var n = Mu(e.toString().replace(/^function.+?{/, "").slice(0, -1));
                return this[Au] = new Ou(n),
                    function(t, e) {
                        if (!t || !e) return;
                        var i = t.terminate;
                        t.objURL = e, t.terminate = function() {
                            t.objURL && Pu.revokeObjectURL(t.objURL), i.call(t)
                        }
                    }(this[Au], n), this[Au]
            }
            var a = {
                postMessage: function(t) {
                    r.onmessage && setTimeout((function() {
                        r.onmessage({
                            data: t,
                            target: a
                        })
                    }))
                }
            };
            e.call(a), this.postMessage = function(t) {
                setTimeout((function() {
                    a.onmessage({
                        data: t,
                        target: r
                    })
                }))
            }, this.isThisThread = !0
        }
    }
    if (Ou) {
        var xu, Du = Mu("self.onmessage = function () {}"),
            Ru = new Uint8Array(1);
        try {
            (xu = new Ou(Du)).postMessage(Ru, [Ru.buffer])
        } catch (t) {
            Ou = null
        } finally {
            Pu.revokeObjectURL(Du), xu && xu.terminate()
        }
    }

    function Mu(t) {
        try {
            return Pu.createObjectURL(new Blob([t], {
                type: "application/javascript"
            }))
        } catch (i) {
            var e = new Lu;
            return e.append(t), Pu.createObjectURL(e.getBlob(type))
        }
    }
    var Uu = new Iu("./transmuxer-worker.worker.js", (function(t, e) {
            var i = this;
            ! function() {
                var e, r, n, a, s, o, u, l, c, h, d, p, f, m, g, y, v, _, b, T, S, k, C, E, w, A, L, P, O, I, x, D, R, M, U, N, B, j, F, H, V = void 0 !== t ? t : "undefined" != typeof global ? global : void 0 !== i ? i : {},
                    q = void 0 !== t ? t : void 0 !== V ? V : void 0 !== i ? i : {},
                    W = Math.pow(2, 32) - 1;
                ! function() {
                    var t;
                    if (k = {
                            avc1: [],
                            avcC: [],
                            btrt: [],
                            dinf: [],
                            dref: [],
                            esds: [],
                            ftyp: [],
                            hdlr: [],
                            mdat: [],
                            mdhd: [],
                            mdia: [],
                            mfhd: [],
                            minf: [],
                            moof: [],
                            moov: [],
                            mp4a: [],
                            mvex: [],
                            mvhd: [],
                            sdtp: [],
                            smhd: [],
                            stbl: [],
                            stco: [],
                            stsc: [],
                            stsd: [],
                            stsz: [],
                            stts: [],
                            styp: [],
                            tfdt: [],
                            tfhd: [],
                            traf: [],
                            trak: [],
                            trun: [],
                            trex: [],
                            tkhd: [],
                            vmhd: []
                        }, "undefined" != typeof Uint8Array) {
                        for (t in k) k.hasOwnProperty(t) && (k[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]);
                        C = new Uint8Array(["i".charCodeAt(0), "s".charCodeAt(0), "o".charCodeAt(0), "m".charCodeAt(0)]), w = new Uint8Array(["a".charCodeAt(0), "v".charCodeAt(0), "c".charCodeAt(0), "1".charCodeAt(0)]), E = new Uint8Array([0, 0, 0, 1]), A = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]), L = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]), P = {
                            video: A,
                            audio: L
                        }, x = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]), I = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), D = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), R = D, M = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), U = D, O = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])
                    }
                }(), e = function(t) {
                    var e, i, r = [],
                        n = 0;
                    for (e = 1; e < arguments.length; e++) r.push(arguments[e]);
                    for (e = r.length; e--;) n += r[e].byteLength;
                    for (i = new Uint8Array(n + 8), new DataView(i.buffer, i.byteOffset, i.byteLength).setUint32(0, i.byteLength), i.set(t, 4), e = 0, n = 8; e < r.length; e++) i.set(r[e], n), n += r[e].byteLength;
                    return i
                }, r = function() {
                    return e(k.dinf, e(k.dref, x))
                }, n = function(t) {
                    return e(k.esds, new Uint8Array([0, 0, 0, 0, 3, 25, 0, 0, 0, 4, 17, 64, 21, 0, 6, 0, 0, 0, 218, 192, 0, 0, 218, 192, 5, 2, t.audioobjecttype << 3 | t.samplingfrequencyindex >>> 1, t.samplingfrequencyindex << 7 | t.channelcount << 3, 6, 1, 2]))
                }, g = function(t) {
                    return e(k.hdlr, P[t])
                }, m = function(t) {
                    var i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 1, 95, 144, t.duration >>> 24 & 255, t.duration >>> 16 & 255, t.duration >>> 8 & 255, 255 & t.duration, 85, 196, 0, 0]);
                    return t.samplerate && (i[12] = t.samplerate >>> 24 & 255, i[13] = t.samplerate >>> 16 & 255, i[14] = t.samplerate >>> 8 & 255, i[15] = 255 & t.samplerate), e(k.mdhd, i)
                }, f = function(t) {
                    return e(k.mdia, m(t), g(t.type), o(t))
                }, s = function(t) {
                    return e(k.mfhd, new Uint8Array([0, 0, 0, 0, (4278190080 & t) >> 24, (16711680 & t) >> 16, (65280 & t) >> 8, 255 & t]))
                }, o = function(t) {
                    return e(k.minf, "video" === t.type ? e(k.vmhd, O) : e(k.smhd, I), r(), v(t))
                }, u = function(t, i) {
                    for (var r = [], n = i.length; n--;) r[n] = b(i[n]);
                    return e.apply(null, [k.moof, s(t)].concat(r))
                }, l = function(t) {
                    for (var i = t.length, r = []; i--;) r[i] = d(t[i]);
                    return e.apply(null, [k.moov, h(4294967295)].concat(r).concat(c(t)))
                }, c = function(t) {
                    for (var i = t.length, r = []; i--;) r[i] = T(t[i]);
                    return e.apply(null, [k.mvex].concat(r))
                }, h = function(t) {
                    var i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 1, 95, 144, (4278190080 & t) >> 24, (16711680 & t) >> 16, (65280 & t) >> 8, 255 & t, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
                    return e(k.mvhd, i)
                }, y = function(t) {
                    var i, r, n = t.samples || [],
                        a = new Uint8Array(4 + n.length);
                    for (r = 0; r < n.length; r++) i = n[r].flags, a[r + 4] = i.dependsOn << 4 | i.isDependedOn << 2 | i.hasRedundancy;
                    return e(k.sdtp, a)
                }, v = function(t) {
                    return e(k.stbl, _(t), e(k.stts, U), e(k.stsc, R), e(k.stsz, M), e(k.stco, D))
                }, _ = function(t) {
                    return e(k.stsd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]), "video" === t.type ? N(t) : B(t))
                }, N = function(t) {
                    var i, r = t.sps || [],
                        n = t.pps || [],
                        a = [],
                        s = [];
                    for (i = 0; i < r.length; i++) a.push((65280 & r[i].byteLength) >>> 8), a.push(255 & r[i].byteLength), a = a.concat(Array.prototype.slice.call(r[i]));
                    for (i = 0; i < n.length; i++) s.push((65280 & n[i].byteLength) >>> 8), s.push(255 & n[i].byteLength), s = s.concat(Array.prototype.slice.call(n[i]));
                    return e(k.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & t.width) >> 8, 255 & t.width, (65280 & t.height) >> 8, 255 & t.height, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 19, 118, 105, 100, 101, 111, 106, 115, 45, 99, 111, 110, 116, 114, 105, 98, 45, 104, 108, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), e(k.avcC, new Uint8Array([1, t.profileIdc, t.profileCompatibility, t.levelIdc, 255].concat([r.length]).concat(a).concat([n.length]).concat(s))), e(k.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])))
                }, B = function(t) {
                    return e(k.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & t.channelcount) >> 8, 255 & t.channelcount, (65280 & t.samplesize) >> 8, 255 & t.samplesize, 0, 0, 0, 0, (65280 & t.samplerate) >> 8, 255 & t.samplerate, 0, 0]), n(t))
                }, p = function(t) {
                    var i = new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, (4278190080 & t.id) >> 24, (16711680 & t.id) >> 16, (65280 & t.id) >> 8, 255 & t.id, 0, 0, 0, 0, (4278190080 & t.duration) >> 24, (16711680 & t.duration) >> 16, (65280 & t.duration) >> 8, 255 & t.duration, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, (65280 & t.width) >> 8, 255 & t.width, 0, 0, (65280 & t.height) >> 8, 255 & t.height, 0, 0]);
                    return e(k.tkhd, i)
                }, b = function(t) {
                    var i, r, n, a, s, o;
                    return i = e(k.tfhd, new Uint8Array([0, 0, 0, 58, (4278190080 & t.id) >> 24, (16711680 & t.id) >> 16, (65280 & t.id) >> 8, 255 & t.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])), s = Math.floor(t.baseMediaDecodeTime / (W + 1)), o = Math.floor(t.baseMediaDecodeTime % (W + 1)), r = e(k.tfdt, new Uint8Array([1, 0, 0, 0, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s, o >>> 24 & 255, o >>> 16 & 255, o >>> 8 & 255, 255 & o])), 92, "audio" === t.type ? (n = S(t, 92), e(k.traf, i, r, n)) : (a = y(t), n = S(t, a.length + 92), e(k.traf, i, r, n, a))
                }, d = function(t) {
                    return t.duration = t.duration || 4294967295, e(k.trak, p(t), f(t))
                }, T = function(t) {
                    var i = new Uint8Array([0, 0, 0, 0, (4278190080 & t.id) >> 24, (16711680 & t.id) >> 16, (65280 & t.id) >> 8, 255 & t.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]);
                    return "video" !== t.type && (i[i.length - 1] = 0), e(k.trex, i)
                }, H = function(t, e) {
                    var i = 0,
                        r = 0,
                        n = 0,
                        a = 0;
                    return t.length && (void 0 !== t[0].duration && (i = 1), void 0 !== t[0].size && (r = 2), void 0 !== t[0].flags && (n = 4), void 0 !== t[0].compositionTimeOffset && (a = 8)), [0, 0, i | r | n | a, 1, (4278190080 & t.length) >>> 24, (16711680 & t.length) >>> 16, (65280 & t.length) >>> 8, 255 & t.length, (4278190080 & e) >>> 24, (16711680 & e) >>> 16, (65280 & e) >>> 8, 255 & e]
                }, F = function(t, i) {
                    var r, n, a, s;
                    for (i += 20 + 16 * (n = t.samples || []).length, r = H(n, i), s = 0; s < n.length; s++) a = n[s], r = r.concat([(4278190080 & a.duration) >>> 24, (16711680 & a.duration) >>> 16, (65280 & a.duration) >>> 8, 255 & a.duration, (4278190080 & a.size) >>> 24, (16711680 & a.size) >>> 16, (65280 & a.size) >>> 8, 255 & a.size, a.flags.isLeading << 2 | a.flags.dependsOn, a.flags.isDependedOn << 6 | a.flags.hasRedundancy << 4 | a.flags.paddingValue << 1 | a.flags.isNonSyncSample, 61440 & a.flags.degradationPriority, 15 & a.flags.degradationPriority, (4278190080 & a.compositionTimeOffset) >>> 24, (16711680 & a.compositionTimeOffset) >>> 16, (65280 & a.compositionTimeOffset) >>> 8, 255 & a.compositionTimeOffset]);
                    return e(k.trun, new Uint8Array(r))
                }, j = function(t, i) {
                    var r, n, a, s;
                    for (i += 20 + 8 * (n = t.samples || []).length, r = H(n, i), s = 0; s < n.length; s++) a = n[s], r = r.concat([(4278190080 & a.duration) >>> 24, (16711680 & a.duration) >>> 16, (65280 & a.duration) >>> 8, 255 & a.duration, (4278190080 & a.size) >>> 24, (16711680 & a.size) >>> 16, (65280 & a.size) >>> 8, 255 & a.size]);
                    return e(k.trun, new Uint8Array(r))
                }, S = function(t, e) {
                    return "audio" === t.type ? j(t, e) : F(t, e)
                };
                var z = {
                        ftyp: a = function() {
                            return e(k.ftyp, C, E, C, w)
                        },
                        mdat: function(t) {
                            return e(k.mdat, t)
                        },
                        moof: u,
                        moov: l,
                        initSegment: function(t) {
                            var e, i = a(),
                                r = l(t);
                            return (e = new Uint8Array(i.byteLength + r.byteLength)).set(i), e.set(r, i.byteLength), e
                        }
                    },
                    G = function() {
                        this.init = function() {
                            var t = {};
                            this.on = function(e, i) {
                                t[e] || (t[e] = []), t[e] = t[e].concat(i)
                            }, this.off = function(e, i) {
                                var r;
                                return !!t[e] && (r = t[e].indexOf(i), t[e] = t[e].slice(), t[e].splice(r, 1), r > -1)
                            }, this.trigger = function(e) {
                                var i, r, n, a;
                                if (i = t[e])
                                    if (2 === arguments.length)
                                        for (n = i.length, r = 0; r < n; ++r) i[r].call(this, arguments[1]);
                                    else {
                                        for (a = [], r = arguments.length, r = 1; r < arguments.length; ++r) a.push(arguments[r]);
                                        for (n = i.length, r = 0; r < n; ++r) i[r].apply(this, a)
                                    }
                            }, this.dispose = function() {
                                t = {}
                            }
                        }
                    };
                G.prototype.pipe = function(t) {
                    return this.on("data", (function(e) {
                        t.push(e)
                    })), this.on("done", (function(e) {
                        t.flush(e)
                    })), t
                }, G.prototype.push = function(t) {
                    this.trigger("data", t)
                }, G.prototype.flush = function(t) {
                    this.trigger("done", t)
                };
                var X = G,
                    Y = function t() {
                        t.prototype.init.call(this), this.captionPackets_ = [], this.ccStreams_ = [new Z(0, 0), new Z(0, 1), new Z(1, 0), new Z(1, 1)], this.reset(), this.ccStreams_.forEach((function(t) {
                            t.on("data", this.trigger.bind(this, "data")), t.on("done", this.trigger.bind(this, "done"))
                        }), this)
                    };
                (Y.prototype = new X).push = function(t) {
                    var e, i;
                    if ("sei_rbsp" === t.nalUnitType && 4 === (e = function(t) {
                            for (var e = 0, i = {
                                    payloadType: -1,
                                    payloadSize: 0
                                }, r = 0, n = 0; e < t.byteLength && 128 !== t[e];) {
                                for (; 255 === t[e];) r += 255, e++;
                                for (r += t[e++]; 255 === t[e];) n += 255, e++;
                                if (n += t[e++], !i.payload && 4 === r) {
                                    i.payloadType = r, i.payloadSize = n, i.payload = t.subarray(e, e + n);
                                    break
                                }
                                e += n, r = 0, n = 0
                            }
                            return i
                        }(t.escapedRBSP)).payloadType && (i = function(t) {
                            return 181 !== t.payload[0] ? null : 49 != (t.payload[1] << 8 | t.payload[2]) ? null : "GA94" !== String.fromCharCode(t.payload[3], t.payload[4], t.payload[5], t.payload[6]) ? null : 3 !== t.payload[7] ? null : t.payload.subarray(8, t.payload.length - 1)
                        }(e)))
                        if (t.dts < this.latestDts_) this.ignoreNextEqualDts_ = !0;
                        else {
                            if (t.dts === this.latestDts_ && this.ignoreNextEqualDts_) return this.numSameDts_--, void(this.numSameDts_ || (this.ignoreNextEqualDts_ = !1));
                            this.captionPackets_ = this.captionPackets_.concat(function(t, e) {
                                var i, r, n, a, s = [];
                                if (!(64 & e[0])) return s;
                                for (r = 31 & e[0], i = 0; i < r; i++) a = {
                                    type: 3 & e[(n = 3 * i) + 2],
                                    pts: t
                                }, 4 & e[n + 2] && (a.ccData = e[n + 3] << 8 | e[n + 4], s.push(a));
                                return s
                            }(t.pts, i)), this.latestDts_ !== t.dts && (this.numSameDts_ = 0), this.numSameDts_++, this.latestDts_ = t.dts
                        }
                }, Y.prototype.flush = function() {
                    this.captionPackets_.length ? (this.captionPackets_.forEach((function(t, e) {
                        t.presortIndex = e
                    })), this.captionPackets_.sort((function(t, e) {
                        return t.pts === e.pts ? t.presortIndex - e.presortIndex : t.pts - e.pts
                    })), this.captionPackets_.forEach((function(t) {
                        t.type < 2 && this.dispatchCea608Packet(t)
                    }), this), this.captionPackets_.length = 0, this.ccStreams_.forEach((function(t) {
                        t.flush()
                    }), this)) : this.ccStreams_.forEach((function(t) {
                        t.flush()
                    }), this)
                }, Y.prototype.reset = function() {
                    this.latestDts_ = null, this.ignoreNextEqualDts_ = !1, this.numSameDts_ = 0, this.activeCea608Channel_ = [null, null], this.ccStreams_.forEach((function(t) {
                        t.reset()
                    }))
                }, Y.prototype.dispatchCea608Packet = function(t) {
                    this.setsChannel1Active(t) ? this.activeCea608Channel_[t.type] = 0 : this.setsChannel2Active(t) && (this.activeCea608Channel_[t.type] = 1), null !== this.activeCea608Channel_[t.type] && this.ccStreams_[(t.type << 1) + this.activeCea608Channel_[t.type]].push(t)
                }, Y.prototype.setsChannel1Active = function(t) {
                    return 4096 == (30720 & t.ccData)
                }, Y.prototype.setsChannel2Active = function(t) {
                    return 6144 == (30720 & t.ccData)
                };
                var $ = {
                        42: 225,
                        92: 233,
                        94: 237,
                        95: 243,
                        96: 250,
                        123: 231,
                        124: 247,
                        125: 209,
                        126: 241,
                        127: 9608,
                        304: 174,
                        305: 176,
                        306: 189,
                        307: 191,
                        308: 8482,
                        309: 162,
                        310: 163,
                        311: 9834,
                        312: 224,
                        313: 160,
                        314: 232,
                        315: 226,
                        316: 234,
                        317: 238,
                        318: 244,
                        319: 251,
                        544: 193,
                        545: 201,
                        546: 211,
                        547: 218,
                        548: 220,
                        549: 252,
                        550: 8216,
                        551: 161,
                        552: 42,
                        553: 39,
                        554: 8212,
                        555: 169,
                        556: 8480,
                        557: 8226,
                        558: 8220,
                        559: 8221,
                        560: 192,
                        561: 194,
                        562: 199,
                        563: 200,
                        564: 202,
                        565: 203,
                        566: 235,
                        567: 206,
                        568: 207,
                        569: 239,
                        570: 212,
                        571: 217,
                        572: 249,
                        573: 219,
                        574: 171,
                        575: 187,
                        800: 195,
                        801: 227,
                        802: 205,
                        803: 204,
                        804: 236,
                        805: 210,
                        806: 242,
                        807: 213,
                        808: 245,
                        809: 123,
                        810: 125,
                        811: 92,
                        812: 94,
                        813: 95,
                        814: 124,
                        815: 126,
                        816: 196,
                        817: 228,
                        818: 214,
                        819: 246,
                        820: 223,
                        821: 165,
                        822: 164,
                        823: 9474,
                        824: 197,
                        825: 229,
                        826: 216,
                        827: 248,
                        828: 9484,
                        829: 9488,
                        830: 9492,
                        831: 9496
                    },
                    K = function(t) {
                        return null === t ? "" : (t = $[t] || t, String.fromCharCode(t))
                    },
                    Q = [4352, 4384, 4608, 4640, 5376, 5408, 5632, 5664, 5888, 5920, 4096, 4864, 4896, 5120, 5152],
                    J = function() {
                        for (var t = [], e = 15; e--;) t.push("");
                        return t
                    },
                    Z = function t(e, i) {
                        t.prototype.init.call(this), this.field_ = e || 0, this.dataChannel_ = i || 0, this.name_ = "CC" + (1 + (this.field_ << 1 | this.dataChannel_)), this.setConstants(), this.reset(), this.push = function(t) {
                            var e, i, r, n, a;
                            if ((e = 32639 & t.ccData) !== this.lastControlCode_) {
                                if (4096 == (61440 & e) ? this.lastControlCode_ = e : e !== this.PADDING_ && (this.lastControlCode_ = null), r = e >>> 8, n = 255 & e, e !== this.PADDING_)
                                    if (e === this.RESUME_CAPTION_LOADING_) this.mode_ = "popOn";
                                    else if (e === this.END_OF_CAPTION_) this.clearFormatting(t.pts), this.flushDisplayed(t.pts), i = this.displayed_, this.displayed_ = this.nonDisplayed_, this.nonDisplayed_ = i, this.startPts_ = t.pts;
                                else if (e === this.ROLL_UP_2_ROWS_) this.topRow_ = 13, this.mode_ = "rollUp";
                                else if (e === this.ROLL_UP_3_ROWS_) this.topRow_ = 12, this.mode_ = "rollUp";
                                else if (e === this.ROLL_UP_4_ROWS_) this.topRow_ = 11, this.mode_ = "rollUp";
                                else if (e === this.CARRIAGE_RETURN_) this.clearFormatting(t.pts), this.flushDisplayed(t.pts), this.shiftRowsUp_(), this.startPts_ = t.pts;
                                else if (e === this.BACKSPACE_) "popOn" === this.mode_ ? this.nonDisplayed_[14] = this.nonDisplayed_[14].slice(0, -1) : this.displayed_[14] = this.displayed_[14].slice(0, -1);
                                else if (e === this.ERASE_DISPLAYED_MEMORY_) this.flushDisplayed(t.pts), this.displayed_ = J();
                                else if (e === this.ERASE_NON_DISPLAYED_MEMORY_) this.nonDisplayed_ = J();
                                else if (e === this.RESUME_DIRECT_CAPTIONING_) this.mode_ = "paintOn";
                                else if (this.isSpecialCharacter(r, n)) a = K((r = (3 & r) << 8) | n), this[this.mode_](t.pts, a), this.column_++;
                                else if (this.isExtCharacter(r, n)) "popOn" === this.mode_ ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) : this.displayed_[14] = this.displayed_[14].slice(0, -1), a = K((r = (3 & r) << 8) | n), this[this.mode_](t.pts, a), this.column_++;
                                else if (this.isMidRowCode(r, n)) this.clearFormatting(t.pts), this[this.mode_](t.pts, " "), this.column_++, 14 == (14 & n) && this.addFormatting(t.pts, ["i"]), 1 == (1 & n) && this.addFormatting(t.pts, ["u"]);
                                else if (this.isOffsetControlCode(r, n)) this.column_ += 3 & n;
                                else if (this.isPAC(r, n)) {
                                    var s = Q.indexOf(7968 & e);
                                    s !== this.row_ && (this.clearFormatting(t.pts), this.row_ = s), 1 & n && -1 === this.formatting_.indexOf("u") && this.addFormatting(t.pts, ["u"]), 16 == (16 & e) && (this.column_ = 4 * ((14 & e) >> 1)), this.isColorPAC(n) && 14 == (14 & n) && this.addFormatting(t.pts, ["i"])
                                } else this.isNormalChar(r) && (0 === n && (n = null), a = K(r), a += K(n), this[this.mode_](t.pts, a), this.column_ += a.length)
                            } else this.lastControlCode_ = null
                        }
                    };
                Z.prototype = new X, Z.prototype.flushDisplayed = function(t) {
                    var e = this.displayed_.map((function(t) {
                        return t.trim()
                    })).join("\n").replace(/^\n+|\n+$/g, "");
                    e.length && this.trigger("data", {
                        startPts: this.startPts_,
                        endPts: t,
                        text: e,
                        stream: this.name_
                    })
                }, Z.prototype.reset = function() {
                    this.mode_ = "popOn", this.topRow_ = 0, this.startPts_ = 0, this.displayed_ = J(), this.nonDisplayed_ = J(), this.lastControlCode_ = null, this.column_ = 0, this.row_ = 14, this.formatting_ = []
                }, Z.prototype.setConstants = function() {
                    0 === this.dataChannel_ ? (this.BASE_ = 16, this.EXT_ = 17, this.CONTROL_ = (20 | this.field_) << 8, this.OFFSET_ = 23) : 1 === this.dataChannel_ && (this.BASE_ = 24, this.EXT_ = 25, this.CONTROL_ = (28 | this.field_) << 8, this.OFFSET_ = 31), this.PADDING_ = 0, this.RESUME_CAPTION_LOADING_ = 32 | this.CONTROL_, this.END_OF_CAPTION_ = 47 | this.CONTROL_, this.ROLL_UP_2_ROWS_ = 37 | this.CONTROL_, this.ROLL_UP_3_ROWS_ = 38 | this.CONTROL_, this.ROLL_UP_4_ROWS_ = 39 | this.CONTROL_, this.CARRIAGE_RETURN_ = 45 | this.CONTROL_, this.RESUME_DIRECT_CAPTIONING_ = 41 | this.CONTROL_, this.BACKSPACE_ = 33 | this.CONTROL_, this.ERASE_DISPLAYED_MEMORY_ = 44 | this.CONTROL_, this.ERASE_NON_DISPLAYED_MEMORY_ = 46 | this.CONTROL_
                }, Z.prototype.isSpecialCharacter = function(t, e) {
                    return t === this.EXT_ && e >= 48 && e <= 63
                }, Z.prototype.isExtCharacter = function(t, e) {
                    return (t === this.EXT_ + 1 || t === this.EXT_ + 2) && e >= 32 && e <= 63
                }, Z.prototype.isMidRowCode = function(t, e) {
                    return t === this.EXT_ && e >= 32 && e <= 47
                }, Z.prototype.isOffsetControlCode = function(t, e) {
                    return t === this.OFFSET_ && e >= 33 && e <= 35
                }, Z.prototype.isPAC = function(t, e) {
                    return t >= this.BASE_ && t < this.BASE_ + 8 && e >= 64 && e <= 127
                }, Z.prototype.isColorPAC = function(t) {
                    return t >= 64 && t <= 79 || t >= 96 && t <= 127
                }, Z.prototype.isNormalChar = function(t) {
                    return t >= 32 && t <= 127
                }, Z.prototype.addFormatting = function(t, e) {
                    this.formatting_ = this.formatting_.concat(e);
                    var i = e.reduce((function(t, e) {
                        return t + "<" + e + ">"
                    }), "");
                    this[this.mode_](t, i)
                }, Z.prototype.clearFormatting = function(t) {
                    if (this.formatting_.length) {
                        var e = this.formatting_.reverse().reduce((function(t, e) {
                            return t + "</" + e + ">"
                        }), "");
                        this.formatting_ = [], this[this.mode_](t, e)
                    }
                }, Z.prototype.popOn = function(t, e) {
                    var i = this.nonDisplayed_[this.row_];
                    i += e, this.nonDisplayed_[this.row_] = i
                }, Z.prototype.rollUp = function(t, e) {
                    var i = this.displayed_[14];
                    i += e, this.displayed_[14] = i
                }, Z.prototype.shiftRowsUp_ = function() {
                    var t;
                    for (t = 0; t < this.topRow_; t++) this.displayed_[t] = "";
                    for (t = this.topRow_; t < 14; t++) this.displayed_[t] = this.displayed_[t + 1];
                    this.displayed_[14] = ""
                }, Z.prototype.paintOn = function() {};
                var tt = {
                        CaptionStream: Y,
                        Cea608Stream: Z
                    },
                    et = {
                        H264_STREAM_TYPE: 27,
                        ADTS_STREAM_TYPE: 15,
                        METADATA_STREAM_TYPE: 21
                    },
                    it = function(t, e) {
                        var i = 1;
                        for (t > e && (i = -1); Math.abs(e - t) > 4294967296;) t += 8589934592 * i;
                        return t
                    },
                    rt = function t(e) {
                        var i, r;
                        t.prototype.init.call(this), this.type_ = e, this.push = function(t) {
                            t.type === this.type_ && (void 0 === r && (r = t.dts), t.dts = it(t.dts, r), t.pts = it(t.pts, r), i = t.dts, this.trigger("data", t))
                        }, this.flush = function() {
                            r = i, this.trigger("done")
                        }, this.discontinuity = function() {
                            r = void 0, i = void 0
                        }
                    };
                rt.prototype = new X;
                var nt, at = rt,
                    st = function(t, e, i) {
                        var r, n = "";
                        for (r = e; r < i; r++) n += "%" + ("00" + t[r].toString(16)).slice(-2);
                        return n
                    },
                    ot = function(t, e, i) {
                        return decodeURIComponent(st(t, e, i))
                    },
                    ut = function(t) {
                        return t[0] << 21 | t[1] << 14 | t[2] << 7 | t[3]
                    },
                    lt = {
                        TXXX: function(t) {
                            var e;
                            if (3 === t.data[0]) {
                                for (e = 1; e < t.data.length; e++)
                                    if (0 === t.data[e]) {
                                        t.description = ot(t.data, 1, e), t.value = ot(t.data, e + 1, t.data.length).replace(/\0*$/, "");
                                        break
                                    }
                                t.data = t.value
                            }
                        },
                        WXXX: function(t) {
                            var e;
                            if (3 === t.data[0])
                                for (e = 1; e < t.data.length; e++)
                                    if (0 === t.data[e]) {
                                        t.description = ot(t.data, 1, e), t.url = ot(t.data, e + 1, t.data.length);
                                        break
                                    }
                        },
                        PRIV: function(t) {
                            var e, i;
                            for (e = 0; e < t.data.length; e++)
                                if (0 === t.data[e]) {
                                    t.owner = (i = t.data, unescape(st(i, 0, e)));
                                    break
                                }
                            t.privateData = t.data.subarray(e + 1), t.data = t.privateData
                        }
                    };
                (nt = function(t) {
                    var e, i = {
                            debug: !(!t || !t.debug),
                            descriptor: t && t.descriptor
                        },
                        r = 0,
                        n = [],
                        a = 0;
                    if (nt.prototype.init.call(this), this.dispatchType = et.METADATA_STREAM_TYPE.toString(16), i.descriptor)
                        for (e = 0; e < i.descriptor.length; e++) this.dispatchType += ("00" + i.descriptor[e].toString(16)).slice(-2);
                    this.push = function(t) {
                        var e, s, o, u, l;
                        if ("timed-metadata" === t.type)
                            if (t.dataAlignmentIndicator && (a = 0, n.length = 0), 0 === n.length && (t.data.length < 10 || t.data[0] !== "I".charCodeAt(0) || t.data[1] !== "D".charCodeAt(0) || t.data[2] !== "3".charCodeAt(0))) i.debug && console.log("Skipping unrecognized metadata packet");
                            else if (n.push(t), a += t.data.byteLength, 1 === n.length && (r = ut(t.data.subarray(6, 10)), r += 10), !(a < r)) {
                            for (e = {
                                    data: new Uint8Array(r),
                                    frames: [],
                                    pts: n[0].pts,
                                    dts: n[0].dts
                                }, l = 0; l < r;) e.data.set(n[0].data.subarray(0, r - l), l), l += n[0].data.byteLength, a -= n[0].data.byteLength, n.shift();
                            s = 10, 64 & e.data[5] && (s += 4, s += ut(e.data.subarray(10, 14)), r -= ut(e.data.subarray(16, 20)));
                            do {
                                if ((o = ut(e.data.subarray(s + 4, s + 8))) < 1) return console.log("Malformed ID3 frame encountered. Skipping metadata parsing.");
                                if ((u = {
                                        id: String.fromCharCode(e.data[s], e.data[s + 1], e.data[s + 2], e.data[s + 3]),
                                        data: e.data.subarray(s + 10, s + o + 10)
                                    }).key = u.id, lt[u.id] && (lt[u.id](u), "com.apple.streaming.transportStreamTimestamp" === u.owner)) {
                                    var c = u.data,
                                        h = (1 & c[3]) << 30 | c[4] << 22 | c[5] << 14 | c[6] << 6 | c[7] >>> 2;
                                    h *= 4, h += 3 & c[7], u.timeStamp = h, void 0 === e.pts && void 0 === e.dts && (e.pts = u.timeStamp, e.dts = u.timeStamp), this.trigger("timestamp", u)
                                }
                                e.frames.push(u), s += 10, s += o
                            } while (s < r);
                            this.trigger("data", e)
                        }
                    }
                }).prototype = new X;
                var ct, ht, dt, pt = nt,
                    ft = at;
                (ct = function() {
                    var t = new Uint8Array(188),
                        e = 0;
                    ct.prototype.init.call(this), this.push = function(i) {
                        var r, n = 0,
                            a = 188;
                        for (e ? ((r = new Uint8Array(i.byteLength + e)).set(t.subarray(0, e)), r.set(i, e), e = 0) : r = i; a < r.byteLength;) 71 !== r[n] || 71 !== r[a] ? (n++, a++) : (this.trigger("data", r.subarray(n, a)), n += 188, a += 188);
                        n < r.byteLength && (t.set(r.subarray(n), 0), e = r.byteLength - n)
                    }, this.flush = function() {
                        188 === e && 71 === t[0] && (this.trigger("data", t), e = 0), this.trigger("done")
                    }
                }).prototype = new X, (ht = function() {
                    var t, e, i, r;
                    ht.prototype.init.call(this), r = this, this.packetsWaitingForPmt = [], this.programMapTable = void 0, t = function(t, r) {
                        var n = 0;
                        r.payloadUnitStartIndicator && (n += t[n] + 1), "pat" === r.type ? e(t.subarray(n), r) : i(t.subarray(n), r)
                    }, e = function(t, e) {
                        e.section_number = t[7], e.last_section_number = t[8], r.pmtPid = (31 & t[10]) << 8 | t[11], e.pmtPid = r.pmtPid
                    }, i = function(t, e) {
                        var i, n;
                        if (1 & t[5]) {
                            for (r.programMapTable = {
                                    video: null,
                                    audio: null,
                                    "timed-metadata": {}
                                }, i = 3 + ((15 & t[1]) << 8 | t[2]) - 4, n = 12 + ((15 & t[10]) << 8 | t[11]); n < i;) {
                                var a = t[n],
                                    s = (31 & t[n + 1]) << 8 | t[n + 2];
                                a === et.H264_STREAM_TYPE && null === r.programMapTable.video ? r.programMapTable.video = s : a === et.ADTS_STREAM_TYPE && null === r.programMapTable.audio ? r.programMapTable.audio = s : a === et.METADATA_STREAM_TYPE && (r.programMapTable["timed-metadata"][s] = a), n += 5 + ((15 & t[n + 3]) << 8 | t[n + 4])
                            }
                            e.programMapTable = r.programMapTable
                        }
                    }, this.push = function(e) {
                        var i = {},
                            r = 4;
                        if (i.payloadUnitStartIndicator = !!(64 & e[1]), i.pid = 31 & e[1], i.pid <<= 8, i.pid |= e[2], (48 & e[3]) >>> 4 > 1 && (r += e[r] + 1), 0 === i.pid) i.type = "pat", t(e.subarray(r), i), this.trigger("data", i);
                        else if (i.pid === this.pmtPid)
                            for (i.type = "pmt", t(e.subarray(r), i), this.trigger("data", i); this.packetsWaitingForPmt.length;) this.processPes_.apply(this, this.packetsWaitingForPmt.shift());
                        else void 0 === this.programMapTable ? this.packetsWaitingForPmt.push([e, r, i]) : this.processPes_(e, r, i)
                    }, this.processPes_ = function(t, e, i) {
                        i.pid === this.programMapTable.video ? i.streamType = et.H264_STREAM_TYPE : i.pid === this.programMapTable.audio ? i.streamType = et.ADTS_STREAM_TYPE : i.streamType = this.programMapTable["timed-metadata"][i.pid], i.type = "pes", i.data = t.subarray(e), this.trigger("data", i)
                    }
                }).prototype = new X, ht.STREAM_TYPES = {
                    h264: 27,
                    adts: 15
                }, (dt = function() {
                    var t = this,
                        e = {
                            data: [],
                            size: 0
                        },
                        i = {
                            data: [],
                            size: 0
                        },
                        r = {
                            data: [],
                            size: 0
                        },
                        n = function(e, i, r) {
                            var n, a, s = new Uint8Array(e.size),
                                o = {
                                    type: i
                                },
                                u = 0,
                                l = 0;
                            if (e.data.length && !(e.size < 9)) {
                                for (o.trackId = e.data[0].pid, u = 0; u < e.data.length; u++) a = e.data[u], s.set(a.data, l), l += a.data.byteLength;
                                var c, h, d;
                                c = s, (h = o).packetLength = 6 + (c[4] << 8 | c[5]), h.dataAlignmentIndicator = 0 != (4 & c[6]), 192 & (d = c[7]) && (h.pts = (14 & c[9]) << 27 | (255 & c[10]) << 20 | (254 & c[11]) << 12 | (255 & c[12]) << 5 | (254 & c[13]) >>> 3, h.pts *= 4, h.pts += (6 & c[13]) >>> 1, h.dts = h.pts, 64 & d && (h.dts = (14 & c[14]) << 27 | (255 & c[15]) << 20 | (254 & c[16]) << 12 | (255 & c[17]) << 5 | (254 & c[18]) >>> 3, h.dts *= 4, h.dts += (6 & c[18]) >>> 1)), h.data = c.subarray(9 + c[8]), n = "video" === i || o.packetLength <= e.size, (r || n) && (e.size = 0, e.data.length = 0), n && t.trigger("data", o)
                            }
                        };
                    dt.prototype.init.call(this), this.push = function(a) {
                        ({
                            pat: function() {},
                            pes: function() {
                                var t, s;
                                switch (a.streamType) {
                                    case et.H264_STREAM_TYPE:
                                    case et.H264_STREAM_TYPE:
                                        t = e, s = "video";
                                        break;
                                    case et.ADTS_STREAM_TYPE:
                                        t = i, s = "audio";
                                        break;
                                    case et.METADATA_STREAM_TYPE:
                                        t = r, s = "timed-metadata";
                                        break;
                                    default:
                                        return
                                }
                                a.payloadUnitStartIndicator && n(t, s, !0), t.data.push(a), t.size += a.data.byteLength
                            },
                            pmt: function() {
                                var e = {
                                        type: "metadata",
                                        tracks: []
                                    },
                                    i = a.programMapTable;
                                null !== i.video && e.tracks.push({
                                    timelineStartInfo: {
                                        baseMediaDecodeTime: 0
                                    },
                                    id: +i.video,
                                    codec: "avc",
                                    type: "video"
                                }), null !== i.audio && e.tracks.push({
                                    timelineStartInfo: {
                                        baseMediaDecodeTime: 0
                                    },
                                    id: +i.audio,
                                    codec: "adts",
                                    type: "audio"
                                }), t.trigger("data", e)
                            }
                        })[a.type]()
                    }, this.flush = function() {
                        n(e, "video"), n(i, "audio"), n(r, "timed-metadata"), this.trigger("done")
                    }
                }).prototype = new X;
                var mt = {
                    PAT_PID: 0,
                    MP2T_PACKET_LENGTH: 188,
                    TransportPacketStream: ct,
                    TransportParseStream: ht,
                    ElementaryStream: dt,
                    TimestampRolloverStream: ft,
                    CaptionStream: tt.CaptionStream,
                    Cea608Stream: tt.Cea608Stream,
                    MetadataStream: pt
                };
                for (var gt in et) et.hasOwnProperty(gt) && (mt[gt] = et[gt]);
                var yt, vt = mt,
                    _t = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
                (yt = function() {
                    var t;
                    yt.prototype.init.call(this), this.push = function(e) {
                        var i, r, n, a, s, o, u = 0,
                            l = 0;
                        if ("audio" === e.type)
                            for (t ? (a = t, (t = new Uint8Array(a.byteLength + e.data.byteLength)).set(a), t.set(e.data, a.byteLength)) : t = e.data; u + 5 < t.length;)
                                if (255 === t[u] && 240 == (246 & t[u + 1])) {
                                    if (r = 2 * (1 & ~t[u + 1]), i = (3 & t[u + 3]) << 11 | t[u + 4] << 3 | (224 & t[u + 5]) >> 5, o = 9e4 * (s = 1024 * (1 + (3 & t[u + 6]))) / _t[(60 & t[u + 2]) >>> 2], n = u + i, t.byteLength < n) return;
                                    if (this.trigger("data", {
                                            pts: e.pts + l * o,
                                            dts: e.dts + l * o,
                                            sampleCount: s,
                                            audioobjecttype: 1 + (t[u + 2] >>> 6 & 3),
                                            channelcount: (1 & t[u + 2]) << 2 | (192 & t[u + 3]) >>> 6,
                                            samplerate: _t[(60 & t[u + 2]) >>> 2],
                                            samplingfrequencyindex: (60 & t[u + 2]) >>> 2,
                                            samplesize: 16,
                                            data: t.subarray(u + 7 + r, n)
                                        }), t.byteLength === n) return void(t = void 0);
                                    l++, t = t.subarray(n)
                                } else u++
                    }, this.flush = function() {
                        this.trigger("done")
                    }
                }).prototype = new X;
                var bt, Tt, St, kt = yt,
                    Ct = function(t) {
                        var e = t.byteLength,
                            i = 0,
                            r = 0;
                        this.length = function() {
                            return 8 * e
                        }, this.bitsAvailable = function() {
                            return 8 * e + r
                        }, this.loadWord = function() {
                            var n = t.byteLength - e,
                                a = new Uint8Array(4),
                                s = Math.min(4, e);
                            if (0 === s) throw new Error("no bytes available");
                            a.set(t.subarray(n, n + s)), i = new DataView(a.buffer).getUint32(0), r = 8 * s, e -= s
                        }, this.skipBits = function(t) {
                            var n;
                            r > t ? (i <<= t, r -= t) : (t -= r, t -= 8 * (n = Math.floor(t / 8)), e -= n, this.loadWord(), i <<= t, r -= t)
                        }, this.readBits = function(t) {
                            var n = Math.min(r, t),
                                a = i >>> 32 - n;
                            return (r -= n) > 0 ? i <<= n : e > 0 && this.loadWord(), (n = t - n) > 0 ? a << n | this.readBits(n) : a
                        }, this.skipLeadingZeros = function() {
                            var t;
                            for (t = 0; t < r; ++t)
                                if (0 != (i & 2147483648 >>> t)) return i <<= t, r -= t, t;
                            return this.loadWord(), t + this.skipLeadingZeros()
                        }, this.skipUnsignedExpGolomb = function() {
                            this.skipBits(1 + this.skipLeadingZeros())
                        }, this.skipExpGolomb = function() {
                            this.skipBits(1 + this.skipLeadingZeros())
                        }, this.readUnsignedExpGolomb = function() {
                            var t = this.skipLeadingZeros();
                            return this.readBits(t + 1) - 1
                        }, this.readExpGolomb = function() {
                            var t = this.readUnsignedExpGolomb();
                            return 1 & t ? 1 + t >>> 1 : -1 * (t >>> 1)
                        }, this.readBoolean = function() {
                            return 1 === this.readBits(1)
                        }, this.readUnsignedByte = function() {
                            return this.readBits(8)
                        }, this.loadWord()
                    };
                (Tt = function() {
                    var t, e, i = 0;
                    Tt.prototype.init.call(this), this.push = function(r) {
                        var n;
                        for (e ? ((n = new Uint8Array(e.byteLength + r.data.byteLength)).set(e), n.set(r.data, e.byteLength), e = n) : e = r.data; i < e.byteLength - 3; i++)
                            if (1 === e[i + 2]) {
                                t = i + 5;
                                break
                            }
                        for (; t < e.byteLength;) switch (e[t]) {
                            case 0:
                                if (0 !== e[t - 1]) {
                                    t += 2;
                                    break
                                }
                                if (0 !== e[t - 2]) {
                                    t++;
                                    break
                                }
                                i + 3 !== t - 2 && this.trigger("data", e.subarray(i + 3, t - 2));
                                do {
                                    t++
                                } while (1 !== e[t] && t < e.length);
                                i = t - 2, t += 3;
                                break;
                            case 1:
                                if (0 !== e[t - 1] || 0 !== e[t - 2]) {
                                    t += 3;
                                    break
                                }
                                this.trigger("data", e.subarray(i + 3, t - 2)), i = t - 2, t += 3;
                                break;
                            default:
                                t += 3
                        }
                        e = e.subarray(i), t -= i, i = 0
                    }, this.flush = function() {
                        e && e.byteLength > 3 && this.trigger("data", e.subarray(i + 3)), e = null, i = 0, this.trigger("done")
                    }
                }).prototype = new X, St = {
                    100: !0,
                    110: !0,
                    122: !0,
                    244: !0,
                    44: !0,
                    83: !0,
                    86: !0,
                    118: !0,
                    128: !0,
                    138: !0,
                    139: !0,
                    134: !0
                }, (bt = function() {
                    var t, e, i, r, n, a, s, o = new Tt;
                    bt.prototype.init.call(this), t = this, this.push = function(t) {
                        "video" === t.type && (e = t.trackId, i = t.pts, r = t.dts, o.push(t))
                    }, o.on("data", (function(s) {
                        var o = {
                            trackId: e,
                            pts: i,
                            dts: r,
                            data: s
                        };
                        switch (31 & s[0]) {
                            case 5:
                                o.nalUnitType = "slice_layer_without_partitioning_rbsp_idr";
                                break;
                            case 6:
                                o.nalUnitType = "sei_rbsp", o.escapedRBSP = n(s.subarray(1));
                                break;
                            case 7:
                                o.nalUnitType = "seq_parameter_set_rbsp", o.escapedRBSP = n(s.subarray(1)), o.config = a(o.escapedRBSP);
                                break;
                            case 8:
                                o.nalUnitType = "pic_parameter_set_rbsp";
                                break;
                            case 9:
                                o.nalUnitType = "access_unit_delimiter_rbsp"
                        }
                        t.trigger("data", o)
                    })), o.on("done", (function() {
                        t.trigger("done")
                    })), this.flush = function() {
                        o.flush()
                    }, s = function(t, e) {
                        var i, r = 8,
                            n = 8;
                        for (i = 0; i < t; i++) 0 !== n && (n = (r + e.readExpGolomb() + 256) % 256), r = 0 === n ? r : n
                    }, n = function(t) {
                        for (var e, i, r = t.byteLength, n = [], a = 1; a < r - 2;) 0 === t[a] && 0 === t[a + 1] && 3 === t[a + 2] ? (n.push(a + 2), a += 2) : a++;
                        if (0 === n.length) return t;
                        e = r - n.length, i = new Uint8Array(e);
                        var s = 0;
                        for (a = 0; a < e; s++, a++) s === n[0] && (s++, n.shift()), i[a] = t[s];
                        return i
                    }, a = function(t) {
                        var e, i, r, n, a, o, u, l, c, h, d, p, f, m = 0,
                            g = 0,
                            y = 0,
                            v = 0,
                            _ = 1;
                        if (i = (e = new Ct(t)).readUnsignedByte(), n = e.readUnsignedByte(), r = e.readUnsignedByte(), e.skipUnsignedExpGolomb(), St[i] && (3 === (a = e.readUnsignedExpGolomb()) && e.skipBits(1), e.skipUnsignedExpGolomb(), e.skipUnsignedExpGolomb(), e.skipBits(1), e.readBoolean()))
                            for (d = 3 !== a ? 8 : 12, f = 0; f < d; f++) e.readBoolean() && s(f < 6 ? 16 : 64, e);
                        if (e.skipUnsignedExpGolomb(), 0 === (o = e.readUnsignedExpGolomb())) e.readUnsignedExpGolomb();
                        else if (1 === o)
                            for (e.skipBits(1), e.skipExpGolomb(), e.skipExpGolomb(), u = e.readUnsignedExpGolomb(), f = 0; f < u; f++) e.skipExpGolomb();
                        if (e.skipUnsignedExpGolomb(), e.skipBits(1), l = e.readUnsignedExpGolomb(), c = e.readUnsignedExpGolomb(), 0 === (h = e.readBits(1)) && e.skipBits(1), e.skipBits(1), e.readBoolean() && (m = e.readUnsignedExpGolomb(), g = e.readUnsignedExpGolomb(), y = e.readUnsignedExpGolomb(), v = e.readUnsignedExpGolomb()), e.readBoolean() && e.readBoolean()) {
                            switch (e.readUnsignedByte()) {
                                case 1:
                                    p = [1, 1];
                                    break;
                                case 2:
                                    p = [12, 11];
                                    break;
                                case 3:
                                    p = [10, 11];
                                    break;
                                case 4:
                                    p = [16, 11];
                                    break;
                                case 5:
                                    p = [40, 33];
                                    break;
                                case 6:
                                    p = [24, 11];
                                    break;
                                case 7:
                                    p = [20, 11];
                                    break;
                                case 8:
                                    p = [32, 11];
                                    break;
                                case 9:
                                    p = [80, 33];
                                    break;
                                case 10:
                                    p = [18, 11];
                                    break;
                                case 11:
                                    p = [15, 11];
                                    break;
                                case 12:
                                    p = [64, 33];
                                    break;
                                case 13:
                                    p = [160, 99];
                                    break;
                                case 14:
                                    p = [4, 3];
                                    break;
                                case 15:
                                    p = [3, 2];
                                    break;
                                case 16:
                                    p = [2, 1];
                                    break;
                                case 255:
                                    p = [e.readUnsignedByte() << 8 | e.readUnsignedByte(), e.readUnsignedByte() << 8 | e.readUnsignedByte()]
                            }
                            p && (_ = p[0] / p[1])
                        }
                        return {
                            profileIdc: i,
                            levelIdc: r,
                            profileCompatibility: n,
                            width: Math.ceil((16 * (l + 1) - 2 * m - 2 * g) * _),
                            height: (2 - h) * (c + 1) * 16 - 2 * y - 2 * v
                        }
                    }
                }).prototype = new X;
                var Et, wt = {
                    H264Stream: bt,
                    NalByteStream: Tt
                };
                (Et = function() {
                    var t = new Uint8Array,
                        e = 0;
                    Et.prototype.init.call(this), this.setTimestamp = function(t) {
                        e = t
                    }, this.parseId3TagSize = function(t, e) {
                        var i = t[e + 6] << 21 | t[e + 7] << 14 | t[e + 8] << 7 | t[e + 9];
                        return (16 & t[e + 5]) >> 4 ? i + 20 : i + 10
                    }, this.parseAdtsSize = function(t, e) {
                        var i = (224 & t[e + 5]) >> 5,
                            r = t[e + 4] << 3;
                        return 6144 & t[e + 3] | r | i
                    }, this.push = function(i) {
                        var r, n, a, s, o = 0,
                            u = 0;
                        for (t.length ? (s = t.length, (t = new Uint8Array(i.byteLength + s)).set(t.subarray(0, s)), t.set(i, s)) : t = i; t.length - u >= 3;)
                            if (t[u] !== "I".charCodeAt(0) || t[u + 1] !== "D".charCodeAt(0) || t[u + 2] !== "3".charCodeAt(0))
                                if (!0 & t[u] && 240 == (240 & t[u + 1])) {
                                    if (t.length - u < 7) break;
                                    if ((o = this.parseAdtsSize(t, u)) > t.length) break;
                                    a = {
                                        type: "audio",
                                        data: t.subarray(u, u + o),
                                        pts: e,
                                        dts: e
                                    }, this.trigger("data", a), u += o
                                } else u++;
                        else {
                            if (t.length - u < 10) break;
                            if ((o = this.parseId3TagSize(t, u)) > t.length) break;
                            n = {
                                type: "timed-metadata",
                                data: t.subarray(u, u + o)
                            }, this.trigger("data", n), u += o
                        }
                        r = t.length - u, t = r > 0 ? t.subarray(u) : new Uint8Array
                    }
                }).prototype = new X;
                var At, Lt, Pt, Ot, It, xt, Dt, Rt = Et,
                    Mt = [33, 16, 5, 32, 164, 27],
                    Ut = [33, 65, 108, 84, 1, 2, 4, 8, 168, 2, 4, 8, 17, 191, 252],
                    Nt = function(t) {
                        for (var e = []; t--;) e.push(0);
                        return e
                    },
                    Bt = {
                        96e3: [Mt, [227, 64], Nt(154), [56]],
                        88200: [Mt, [231], Nt(170), [56]],
                        64e3: [Mt, [248, 192], Nt(240), [56]],
                        48e3: [Mt, [255, 192], Nt(268), [55, 148, 128], Nt(54), [112]],
                        44100: [Mt, [255, 192], Nt(268), [55, 163, 128], Nt(84), [112]],
                        32e3: [Mt, [255, 192], Nt(268), [55, 234], Nt(226), [112]],
                        24e3: [Mt, [255, 192], Nt(268), [55, 255, 128], Nt(268), [111, 112], Nt(126), [224]],
                        16e3: [Mt, [255, 192], Nt(268), [55, 255, 128], Nt(268), [111, 255], Nt(269), [223, 108], Nt(195), [1, 192]],
                        12e3: [Ut, Nt(268), [3, 127, 248], Nt(268), [6, 255, 240], Nt(268), [13, 255, 224], Nt(268), [27, 253, 128], Nt(259), [56]],
                        11025: [Ut, Nt(268), [3, 127, 248], Nt(268), [6, 255, 240], Nt(268), [13, 255, 224], Nt(268), [27, 255, 192], Nt(268), [55, 175, 128], Nt(108), [112]],
                        8e3: [Ut, Nt(268), [3, 121, 16], Nt(47), [7]]
                    },
                    jt = (At = Bt, Object.keys(At).reduce((function(t, e) {
                        return t[e] = new Uint8Array(At[e].reduce((function(t, e) {
                            return t.concat(e)
                        }), [])), t
                    }), {}));
                xt = function(t, e) {
                    return Lt(It(t, e))
                }, Dt = function(t, e) {
                    return Pt(Ot(t), e)
                };
                Lt = function(t) {
                    return 9e4 * t
                }, Pt = function(t, e) {
                    return t * e
                }, Ot = function(t) {
                    return t / 9e4
                }, It = function(t, e) {
                    return t / e
                };
                var Ft, Ht, Vt, qt, Wt, zt, Gt, Xt, Yt, $t, Kt = xt,
                    Qt = Dt,
                    Jt = wt.H264Stream,
                    Zt = ["audioobjecttype", "channelcount", "samplerate", "samplingfrequencyindex", "samplesize"],
                    te = ["width", "height", "profileIdc", "levelIdc", "profileCompatibility"];
                Wt = function(t) {
                    return t[0] === "I".charCodeAt(0) && t[1] === "D".charCodeAt(0) && t[2] === "3".charCodeAt(0)
                }, Yt = function(t, e) {
                    var i;
                    if (t.length !== e.length) return !1;
                    for (i = 0; i < t.length; i++)
                        if (t[i] !== e[i]) return !1;
                    return !0
                }, $t = function(t) {
                    var e, i = 0;
                    for (e = 0; e < t.length; e++) i += t[e].data.byteLength;
                    return i
                }, (Ht = function(t, e) {
                    var i = [],
                        r = 0,
                        n = 0,
                        a = 0,
                        s = 1 / 0;
                    e = e || {}, Ht.prototype.init.call(this), this.push = function(e) {
                        zt(t, e), t && Zt.forEach((function(i) {
                            t[i] = e[i]
                        })), i.push(e)
                    }, this.setEarliestDts = function(e) {
                        n = e - t.timelineStartInfo.baseMediaDecodeTime
                    }, this.setVideoBaseMediaDecodeTime = function(t) {
                        s = t
                    }, this.setAudioAppendStart = function(t) {
                        a = t
                    }, this.flush = function() {
                        var n, a, s, o;
                        0 !== i.length ? (n = this.trimAdtsFramesByEarliestDts_(i), t.baseMediaDecodeTime = Xt(t, e.keepOriginalTimestamps), this.prefixWithSilence_(t, n), t.samples = this.generateSampleTable_(n), s = z.mdat(this.concatenateFrameData_(n)), i = [], a = z.moof(r, [t]), o = new Uint8Array(a.byteLength + s.byteLength), r++, o.set(a), o.set(s, a.byteLength), Gt(t), this.trigger("data", {
                            track: t,
                            boxes: o
                        }), this.trigger("done", "AudioSegmentStream")) : this.trigger("done", "AudioSegmentStream")
                    }, this.prefixWithSilence_ = function(t, e) {
                        var i, r, n, o, u = 0,
                            l = 0,
                            c = 0;
                        if (e.length && (i = Kt(t.baseMediaDecodeTime, t.samplerate), r = Math.ceil(9e4 / (t.samplerate / 1024)), a && s && (u = i - Math.max(a, s), c = (l = Math.floor(u / r)) * r), !(l < 1 || c > 45e3))) {
                            for ((n = jt[t.samplerate]) || (n = e[0].data), o = 0; o < l; o++) e.splice(o, 0, {
                                data: n
                            });
                            t.baseMediaDecodeTime -= Math.floor(Qt(c, t.samplerate))
                        }
                    }, this.trimAdtsFramesByEarliestDts_ = function(e) {
                        return t.minSegmentDts >= n ? e : (t.minSegmentDts = 1 / 0, e.filter((function(e) {
                            return e.dts >= n && (t.minSegmentDts = Math.min(t.minSegmentDts, e.dts), t.minSegmentPts = t.minSegmentDts, !0)
                        })))
                    }, this.generateSampleTable_ = function(t) {
                        var e, i, r = [];
                        for (e = 0; e < t.length; e++) i = t[e], r.push({
                            size: i.data.byteLength,
                            duration: 1024
                        });
                        return r
                    }, this.concatenateFrameData_ = function(t) {
                        var e, i, r = 0,
                            n = new Uint8Array($t(t));
                        for (e = 0; e < t.length; e++) i = t[e], n.set(i.data, r), r += i.data.byteLength;
                        return n
                    }
                }).prototype = new X, (Ft = function(t, e) {
                    var i, r, n = 0,
                        a = [],
                        s = [];
                    e = e || {}, Ft.prototype.init.call(this), delete t.minPTS, this.gopCache_ = [], this.push = function(e) {
                        zt(t, e), "seq_parameter_set_rbsp" !== e.nalUnitType || i || (i = e.config, t.sps = [e.data], te.forEach((function(e) {
                            t[e] = i[e]
                        }), this)), "pic_parameter_set_rbsp" !== e.nalUnitType || r || (r = e.data, t.pps = [e.data]), a.push(e)
                    }, this.flush = function() {
                        for (var i, r, o, u, l, c; a.length && "access_unit_delimiter_rbsp" !== a[0].nalUnitType;) a.shift();
                        if (0 === a.length) return this.resetStream_(), void this.trigger("done", "VideoSegmentStream");
                        if (i = this.groupNalsIntoFrames_(a), (o = this.groupFramesIntoGops_(i))[0][0].keyFrame || ((r = this.getGopForFusion_(a[0], t)) ? (o.unshift(r), o.byteLength += r.byteLength, o.nalCount += r.nalCount, o.pts = r.pts, o.dts = r.dts, o.duration += r.duration) : o = this.extendFirstKeyFrame_(o)), s.length) {
                            var h;
                            if (!(h = e.alignGopsAtEnd ? this.alignGopsAtEnd_(o) : this.alignGopsAtStart_(o))) return this.gopCache_.unshift({
                                gop: o.pop(),
                                pps: t.pps,
                                sps: t.sps
                            }), this.gopCache_.length = Math.min(6, this.gopCache_.length), a = [], this.resetStream_(), void this.trigger("done", "VideoSegmentStream");
                            Gt(t), o = h
                        }
                        zt(t, o), t.samples = this.generateSampleTable_(o), l = z.mdat(this.concatenateNalData_(o)), t.baseMediaDecodeTime = Xt(t, e.keepOriginalTimestamps), this.trigger("processedGopsInfo", o.map((function(t) {
                            return {
                                pts: t.pts,
                                dts: t.dts,
                                byteLength: t.byteLength
                            }
                        }))), this.gopCache_.unshift({
                            gop: o.pop(),
                            pps: t.pps,
                            sps: t.sps
                        }), this.gopCache_.length = Math.min(6, this.gopCache_.length), a = [], this.trigger("baseMediaDecodeTime", t.baseMediaDecodeTime), this.trigger("timelineStartInfo", t.timelineStartInfo), u = z.moof(n, [t]), c = new Uint8Array(u.byteLength + l.byteLength), n++, c.set(u), c.set(l, u.byteLength), this.trigger("data", {
                            track: t,
                            boxes: c
                        }), this.resetStream_(), this.trigger("done", "VideoSegmentStream")
                    }, this.resetStream_ = function() {
                        Gt(t), i = void 0, r = void 0
                    }, this.getGopForFusion_ = function(e) {
                        var i, r, n, a, s, o = 1 / 0;
                        for (s = 0; s < this.gopCache_.length; s++) n = (a = this.gopCache_[s]).gop, t.pps && Yt(t.pps[0], a.pps[0]) && t.sps && Yt(t.sps[0], a.sps[0]) && (n.dts < t.timelineStartInfo.dts || (i = e.dts - n.dts - n.duration) >= -1e4 && i <= 45e3 && (!r || o > i) && (r = a, o = i));
                        return r ? r.gop : null
                    }, this.extendFirstKeyFrame_ = function(t) {
                        var e;
                        return !t[0][0].keyFrame && t.length > 1 && (e = t.shift(), t.byteLength -= e.byteLength, t.nalCount -= e.nalCount, t[0][0].dts = e.dts, t[0][0].pts = e.pts, t[0][0].duration += e.duration), t
                    }, this.groupNalsIntoFrames_ = function(t) {
                        var e, i, r = [],
                            n = [];
                        for (r.byteLength = 0, e = 0; e < t.length; e++) "access_unit_delimiter_rbsp" === (i = t[e]).nalUnitType ? (r.length && (r.duration = i.dts - r.dts, n.push(r)), (r = [i]).byteLength = i.data.byteLength, r.pts = i.pts, r.dts = i.dts) : ("slice_layer_without_partitioning_rbsp_idr" === i.nalUnitType && (r.keyFrame = !0), r.duration = i.dts - r.dts, r.byteLength += i.data.byteLength, r.push(i));
                        return n.length && (!r.duration || r.duration <= 0) && (r.duration = n[n.length - 1].duration), n.push(r), n
                    }, this.groupFramesIntoGops_ = function(t) {
                        var e, i, r = [],
                            n = [];
                        for (r.byteLength = 0, r.nalCount = 0, r.duration = 0, r.pts = t[0].pts, r.dts = t[0].dts, n.byteLength = 0, n.nalCount = 0, n.duration = 0, n.pts = t[0].pts, n.dts = t[0].dts, e = 0; e < t.length; e++)(i = t[e]).keyFrame ? (r.length && (n.push(r), n.byteLength += r.byteLength, n.nalCount += r.nalCount, n.duration += r.duration), (r = [i]).nalCount = i.length, r.byteLength = i.byteLength, r.pts = i.pts, r.dts = i.dts, r.duration = i.duration) : (r.duration += i.duration, r.nalCount += i.length, r.byteLength += i.byteLength, r.push(i));
                        return n.length && r.duration <= 0 && (r.duration = n[n.length - 1].duration), n.byteLength += r.byteLength, n.nalCount += r.nalCount, n.duration += r.duration, n.push(r), n
                    }, this.generateSampleTable_ = function(t, e) {
                        var i, r, n, a, s, o = e || 0,
                            u = [];
                        for (i = 0; i < t.length; i++)
                            for (a = t[i], r = 0; r < a.length; r++) s = a[r], (n = {
                                size: 0,
                                flags: {
                                    isLeading: 0,
                                    dependsOn: 1,
                                    isDependedOn: 0,
                                    hasRedundancy: 0,
                                    degradationPriority: 0
                                }
                            }).dataOffset = o, n.compositionTimeOffset = s.pts - s.dts, n.duration = s.duration, n.size = 4 * s.length, n.size += s.byteLength, s.keyFrame && (n.flags.dependsOn = 2), o += n.size, u.push(n);
                        return u
                    }, this.concatenateNalData_ = function(t) {
                        var e, i, r, n, a, s, o = 0,
                            u = t.byteLength,
                            l = t.nalCount,
                            c = new Uint8Array(u + 4 * l),
                            h = new DataView(c.buffer);
                        for (e = 0; e < t.length; e++)
                            for (n = t[e], i = 0; i < n.length; i++)
                                for (a = n[i], r = 0; r < a.length; r++) s = a[r], h.setUint32(o, s.data.byteLength), o += 4, c.set(s.data, o), o += s.data.byteLength;
                        return c
                    }, this.alignGopsAtStart_ = function(t) {
                        var e, i, r, n, a, o, u, l;
                        for (a = t.byteLength, o = t.nalCount, u = t.duration, e = i = 0; e < s.length && i < t.length && (r = s[e], n = t[i], r.pts !== n.pts);) n.pts > r.pts ? e++ : (i++, a -= n.byteLength, o -= n.nalCount, u -= n.duration);
                        return 0 === i ? t : i === t.length ? null : ((l = t.slice(i)).byteLength = a, l.duration = u, l.nalCount = o, l.pts = l[0].pts, l.dts = l[0].dts, l)
                    }, this.alignGopsAtEnd_ = function(t) {
                        var e, i, r, n, a, o, u;
                        for (e = s.length - 1, i = t.length - 1, a = null, o = !1; e >= 0 && i >= 0;) {
                            if (r = s[e], n = t[i], r.pts === n.pts) {
                                o = !0;
                                break
                            }
                            r.pts > n.pts ? e-- : (e === s.length - 1 && (a = i), i--)
                        }
                        if (!o && null === a) return null;
                        if (0 === (u = o ? i : a)) return t;
                        var l = t.slice(u),
                            c = l.reduce((function(t, e) {
                                return t.byteLength += e.byteLength, t.duration += e.duration, t.nalCount += e.nalCount, t
                            }), {
                                byteLength: 0,
                                duration: 0,
                                nalCount: 0
                            });
                        return l.byteLength = c.byteLength, l.duration = c.duration, l.nalCount = c.nalCount, l.pts = l[0].pts, l.dts = l[0].dts, l
                    }, this.alignGopsWith = function(t) {
                        s = t
                    }
                }).prototype = new X, zt = function(t, e) {
                    "number" == typeof e.pts && (void 0 === t.timelineStartInfo.pts && (t.timelineStartInfo.pts = e.pts), void 0 === t.minSegmentPts ? t.minSegmentPts = e.pts : t.minSegmentPts = Math.min(t.minSegmentPts, e.pts), void 0 === t.maxSegmentPts ? t.maxSegmentPts = e.pts : t.maxSegmentPts = Math.max(t.maxSegmentPts, e.pts)), "number" == typeof e.dts && (void 0 === t.timelineStartInfo.dts && (t.timelineStartInfo.dts = e.dts), void 0 === t.minSegmentDts ? t.minSegmentDts = e.dts : t.minSegmentDts = Math.min(t.minSegmentDts, e.dts), void 0 === t.maxSegmentDts ? t.maxSegmentDts = e.dts : t.maxSegmentDts = Math.max(t.maxSegmentDts, e.dts))
                }, Gt = function(t) {
                    delete t.minSegmentDts, delete t.maxSegmentDts, delete t.minSegmentPts, delete t.maxSegmentPts
                }, Xt = function(t, e) {
                    var i, r = t.minSegmentDts;
                    return e || (r -= t.timelineStartInfo.dts), i = t.timelineStartInfo.baseMediaDecodeTime, i += r, i = Math.max(0, i), "audio" === t.type && (i *= t.samplerate / 9e4, i = Math.floor(i)), i
                }, (qt = function(t, e) {
                    this.numberOfTracks = 0, this.metadataStream = e, void 0 !== t.remux ? this.remuxTracks = !!t.remux : this.remuxTracks = !0, this.pendingTracks = [], this.videoTrack = null, this.pendingBoxes = [], this.pendingCaptions = [], this.pendingMetadata = [], this.pendingBytes = 0, this.emittedTracks = 0, qt.prototype.init.call(this), this.push = function(t) {
                        return t.text ? this.pendingCaptions.push(t) : t.frames ? this.pendingMetadata.push(t) : (this.pendingTracks.push(t.track), this.pendingBoxes.push(t.boxes), this.pendingBytes += t.boxes.byteLength, "video" === t.track.type && (this.videoTrack = t.track), void("audio" === t.track.type && (this.audioTrack = t.track)))
                    }
                }).prototype = new X, qt.prototype.flush = function(t) {
                    var e, i, r, n, a = 0,
                        s = {
                            captions: [],
                            captionStreams: {},
                            metadata: [],
                            info: {}
                        },
                        o = 0;
                    if (this.pendingTracks.length < this.numberOfTracks) {
                        if ("VideoSegmentStream" !== t && "AudioSegmentStream" !== t) return;
                        if (this.remuxTracks) return;
                        if (0 === this.pendingTracks.length) return this.emittedTracks++, void(this.emittedTracks >= this.numberOfTracks && (this.trigger("done"), this.emittedTracks = 0))
                    }
                    for (this.videoTrack ? (o = this.videoTrack.timelineStartInfo.pts, te.forEach((function(t) {
                            s.info[t] = this.videoTrack[t]
                        }), this)) : this.audioTrack && (o = this.audioTrack.timelineStartInfo.pts, Zt.forEach((function(t) {
                            s.info[t] = this.audioTrack[t]
                        }), this)), 1 === this.pendingTracks.length ? s.type = this.pendingTracks[0].type : s.type = "combined", this.emittedTracks += this.pendingTracks.length, r = z.initSegment(this.pendingTracks), s.initSegment = new Uint8Array(r.byteLength), s.initSegment.set(r), s.data = new Uint8Array(this.pendingBytes), n = 0; n < this.pendingBoxes.length; n++) s.data.set(this.pendingBoxes[n], a), a += this.pendingBoxes[n].byteLength;
                    for (n = 0; n < this.pendingCaptions.length; n++)(e = this.pendingCaptions[n]).startTime = e.startPts - o, e.startTime /= 9e4, e.endTime = e.endPts - o, e.endTime /= 9e4, s.captionStreams[e.stream] = !0, s.captions.push(e);
                    for (n = 0; n < this.pendingMetadata.length; n++)(i = this.pendingMetadata[n]).cueTime = i.pts - o, i.cueTime /= 9e4, s.metadata.push(i);
                    s.metadata.dispatchType = this.metadataStream.dispatchType, this.pendingTracks.length = 0, this.videoTrack = null, this.pendingBoxes.length = 0, this.pendingCaptions.length = 0, this.pendingBytes = 0, this.pendingMetadata.length = 0, this.trigger("data", s), this.emittedTracks >= this.numberOfTracks && (this.trigger("done"), this.emittedTracks = 0)
                }, (Vt = function(t) {
                    var e, i, r = this,
                        n = !0;
                    Vt.prototype.init.call(this), t = t || {}, this.baseMediaDecodeTime = t.baseMediaDecodeTime || 0, this.transmuxPipeline_ = {}, this.setupAacPipeline = function() {
                        var e = {};
                        this.transmuxPipeline_ = e, e.type = "aac", e.metadataStream = new vt.MetadataStream, e.aacStream = new Rt, e.audioTimestampRolloverStream = new vt.TimestampRolloverStream("audio"), e.timedMetadataTimestampRolloverStream = new vt.TimestampRolloverStream("timed-metadata"), e.adtsStream = new kt, e.coalesceStream = new qt(t, e.metadataStream), e.headOfPipeline = e.aacStream, e.aacStream.pipe(e.audioTimestampRolloverStream).pipe(e.adtsStream), e.aacStream.pipe(e.timedMetadataTimestampRolloverStream).pipe(e.metadataStream).pipe(e.coalesceStream), e.metadataStream.on("timestamp", (function(t) {
                            e.aacStream.setTimestamp(t.timeStamp)
                        })), e.aacStream.on("data", (function(n) {
                            "timed-metadata" !== n.type || e.audioSegmentStream || (i = i || {
                                timelineStartInfo: {
                                    baseMediaDecodeTime: r.baseMediaDecodeTime
                                },
                                codec: "adts",
                                type: "audio"
                            }, e.coalesceStream.numberOfTracks++, e.audioSegmentStream = new Ht(i, t), e.adtsStream.pipe(e.audioSegmentStream).pipe(e.coalesceStream))
                        })), e.coalesceStream.on("data", this.trigger.bind(this, "data")), e.coalesceStream.on("done", this.trigger.bind(this, "done"))
                    }, this.setupTsPipeline = function() {
                        var n = {};
                        this.transmuxPipeline_ = n, n.type = "ts", n.metadataStream = new vt.MetadataStream, n.packetStream = new vt.TransportPacketStream, n.parseStream = new vt.TransportParseStream, n.elementaryStream = new vt.ElementaryStream, n.videoTimestampRolloverStream = new vt.TimestampRolloverStream("video"), n.audioTimestampRolloverStream = new vt.TimestampRolloverStream("audio"), n.timedMetadataTimestampRolloverStream = new vt.TimestampRolloverStream("timed-metadata"), n.adtsStream = new kt, n.h264Stream = new Jt, n.captionStream = new vt.CaptionStream, n.coalesceStream = new qt(t, n.metadataStream), n.headOfPipeline = n.packetStream, n.packetStream.pipe(n.parseStream).pipe(n.elementaryStream), n.elementaryStream.pipe(n.videoTimestampRolloverStream).pipe(n.h264Stream), n.elementaryStream.pipe(n.audioTimestampRolloverStream).pipe(n.adtsStream), n.elementaryStream.pipe(n.timedMetadataTimestampRolloverStream).pipe(n.metadataStream).pipe(n.coalesceStream), n.h264Stream.pipe(n.captionStream).pipe(n.coalesceStream), n.elementaryStream.on("data", (function(a) {
                            var s;
                            if ("metadata" === a.type) {
                                for (s = a.tracks.length; s--;) e || "video" !== a.tracks[s].type ? i || "audio" !== a.tracks[s].type || ((i = a.tracks[s]).timelineStartInfo.baseMediaDecodeTime = r.baseMediaDecodeTime) : (e = a.tracks[s]).timelineStartInfo.baseMediaDecodeTime = r.baseMediaDecodeTime;
                                e && !n.videoSegmentStream && (n.coalesceStream.numberOfTracks++, n.videoSegmentStream = new Ft(e, t), n.videoSegmentStream.on("timelineStartInfo", (function(t) {
                                    i && (i.timelineStartInfo = t, n.audioSegmentStream.setEarliestDts(t.dts))
                                })), n.videoSegmentStream.on("processedGopsInfo", r.trigger.bind(r, "gopInfo")), n.videoSegmentStream.on("baseMediaDecodeTime", (function(t) {
                                    i && n.audioSegmentStream.setVideoBaseMediaDecodeTime(t)
                                })), n.h264Stream.pipe(n.videoSegmentStream).pipe(n.coalesceStream)), i && !n.audioSegmentStream && (n.coalesceStream.numberOfTracks++, n.audioSegmentStream = new Ht(i, t), n.adtsStream.pipe(n.audioSegmentStream).pipe(n.coalesceStream))
                            }
                        })), n.coalesceStream.on("data", this.trigger.bind(this, "data")), n.coalesceStream.on("done", this.trigger.bind(this, "done"))
                    }, this.setBaseMediaDecodeTime = function(t) {
                        var r = this.transmuxPipeline_;
                        this.baseMediaDecodeTime = t, i && (i.timelineStartInfo.dts = void 0, i.timelineStartInfo.pts = void 0, Gt(i), i.timelineStartInfo.baseMediaDecodeTime = t, r.audioTimestampRolloverStream && r.audioTimestampRolloverStream.discontinuity()), e && (r.videoSegmentStream && (r.videoSegmentStream.gopCache_ = [], r.videoTimestampRolloverStream.discontinuity()), e.timelineStartInfo.dts = void 0, e.timelineStartInfo.pts = void 0, Gt(e), r.captionStream.reset(), e.timelineStartInfo.baseMediaDecodeTime = t), r.timedMetadataTimestampRolloverStream && r.timedMetadataTimestampRolloverStream.discontinuity()
                    }, this.setAudioAppendStart = function(t) {
                        i && this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(t)
                    }, this.alignGopsWith = function(t) {
                        e && this.transmuxPipeline_.videoSegmentStream && this.transmuxPipeline_.videoSegmentStream.alignGopsWith(t)
                    }, this.push = function(t) {
                        if (n) {
                            var e = Wt(t);
                            e && "aac" !== this.transmuxPipeline_.type ? this.setupAacPipeline() : e || "ts" === this.transmuxPipeline_.type || this.setupTsPipeline(), n = !1
                        }
                        this.transmuxPipeline_.headOfPipeline.push(t)
                    }, this.flush = function() {
                        n = !0, this.transmuxPipeline_.headOfPipeline.flush()
                    }, this.resetCaptions = function() {
                        this.transmuxPipeline_.captionStream && this.transmuxPipeline_.captionStream.reset()
                    }
                }).prototype = new X;
                var ee = {
                        Transmuxer: Vt,
                        VideoSegmentStream: Ft,
                        AudioSegmentStream: Ht,
                        AUDIO_PROPERTIES: Zt,
                        VIDEO_PROPERTIES: te
                    },
                    ie = {
                        generator: z,
                        Transmuxer: ee.Transmuxer,
                        AudioSegmentStream: ee.AudioSegmentStream,
                        VideoSegmentStream: ee.VideoSegmentStream
                    },
                    re = function() {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var r = e[i];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function(e, i, r) {
                            return i && t(e.prototype, i), r && t(e, r), e
                        }
                    }(),
                    ne = function() {
                        function t(e) {
                            ! function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, t), this.options = e || {}, this.init()
                        }
                        return re(t, [{
                            key: "init",
                            value: function() {
                                this.transmuxer && this.transmuxer.dispose(), this.transmuxer = new ie.Transmuxer(this.options),
                                    function(t) {
                                        t.on("data", (function(t) {
                                            var e = t.initSegment;
                                            t.initSegment = {
                                                data: e.buffer,
                                                byteOffset: e.byteOffset,
                                                byteLength: e.byteLength
                                            };
                                            var i = t.data;
                                            t.data = i.buffer, q.postMessage({
                                                action: "data",
                                                segment: t,
                                                byteOffset: i.byteOffset,
                                                byteLength: i.byteLength
                                            }, [t.data])
                                        })), t.captionStream && t.captionStream.on("data", (function(t) {
                                            q.postMessage({
                                                action: "caption",
                                                data: t
                                            })
                                        })), t.on("done", (function(t) {
                                            q.postMessage({
                                                action: "done"
                                            })
                                        })), t.on("gopInfo", (function(t) {
                                            q.postMessage({
                                                action: "gopInfo",
                                                gopInfo: t
                                            })
                                        }))
                                    }(this.transmuxer)
                            }
                        }, {
                            key: "push",
                            value: function(t) {
                                var e = new Uint8Array(t.data, t.byteOffset, t.byteLength);
                                this.transmuxer.push(e)
                            }
                        }, {
                            key: "reset",
                            value: function() {
                                this.init()
                            }
                        }, {
                            key: "setTimestampOffset",
                            value: function(t) {
                                var e = t.timestampOffset || 0;
                                this.transmuxer.setBaseMediaDecodeTime(Math.round(9e4 * e))
                            }
                        }, {
                            key: "setAudioAppendStart",
                            value: function(t) {
                                this.transmuxer.setAudioAppendStart(Math.ceil(9e4 * t.appendStart))
                            }
                        }, {
                            key: "flush",
                            value: function(t) {
                                this.transmuxer.flush()
                            }
                        }, {
                            key: "resetCaptions",
                            value: function() {
                                this.transmuxer.resetCaptions()
                            }
                        }, {
                            key: "alignGopsWith",
                            value: function(t) {
                                this.transmuxer.alignGopsWith(t.gopsToAlignWith.slice())
                            }
                        }]), t
                    }();
                new function(t) {
                    t.onmessage = function(t) {
                        "init" === t.data.action && t.data.options ? this.messageHandlers = new ne(t.data.options) : (this.messageHandlers || (this.messageHandlers = new ne), t.data && t.data.action && "init" !== t.data.action && this.messageHandlers[t.data.action] && this.messageHandlers[t.data.action](t.data))
                    }
                }(i)
            }()
        })),
        Nu = function(t) {
            return /mp4a\.\d+.\d+/i.test(t)
        },
        Bu = function(t) {
            return /avc1\.[\da-f]+/i.test(t)
        },
        ju = function(t) {
            return t.map((function(t) {
                return t.replace(/avc1\.(\d+)\.(\d+)/i, (function(t, e, i) {
                    return "avc1." + ("00" + Number(e).toString(16)).slice(-2) + "00" + ("00" + Number(i).toString(16)).slice(-2)
                }))
            }))
        },
        Fu = function(t, e, i) {
            if (!e || !t.length) return [];
            var r = Math.ceil(9e4 * (e.currentTime() - i + 3)),
                n = void 0;
            for (n = 0; n < t.length && !(t[n].pts > r); n++);
            return t.slice(n)
        },
        Hu = function(t) {
            function e(t, i) {
                xo(this, e);
                var r = Mo(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, ka.EventTarget));
                r.timestampOffset_ = 0, r.pendingBuffers_ = [], r.bufferUpdating_ = !1, r.mediaSource_ = t, r.codecs_ = i, r.audioCodec_ = null, r.videoCodec_ = null, r.audioDisabled_ = !1, r.appendAudioInitSegment_ = !0, r.gopBuffer_ = [], r.timeMapping_ = 0, r.safeAppend_ = ka.browser.IE_VERSION >= 11;
                var n = {
                    remux: !1,
                    alignGopsAtEnd: r.safeAppend_
                };
                return r.codecs_.forEach((function(t) {
                    Nu(t) ? r.audioCodec_ = t : Bu(t) && (r.videoCodec_ = t)
                })), r.transmuxer_ = new Uu, r.transmuxer_.postMessage({
                    action: "init",
                    options: n
                }), r.transmuxer_.onmessage = function(t) {
                    return "data" === t.data.action ? r.data_(t) : "done" === t.data.action ? r.done_(t) : "gopInfo" === t.data.action ? r.appendGopInfo_(t) : void 0
                }, Object.defineProperty(r, "timestampOffset", {
                    get: function() {
                        return this.timestampOffset_
                    },
                    set: function(t) {
                        "number" == typeof t && t >= 0 && (this.timestampOffset_ = t, this.appendAudioInitSegment_ = !0, this.gopBuffer_.length = 0, this.timeMapping_ = 0, this.transmuxer_.postMessage({
                            action: "setTimestampOffset",
                            timestampOffset: t
                        }))
                    }
                }), Object.defineProperty(r, "appendWindowStart", {
                    get: function() {
                        return (this.videoBuffer_ || this.audioBuffer_).appendWindowStart
                    },
                    set: function(t) {
                        this.videoBuffer_ && (this.videoBuffer_.appendWindowStart = t), this.audioBuffer_ && (this.audioBuffer_.appendWindowStart = t)
                    }
                }), Object.defineProperty(r, "updating", {
                    get: function() {
                        return !!(this.bufferUpdating_ || !this.audioDisabled_ && this.audioBuffer_ && this.audioBuffer_.updating || this.videoBuffer_ && this.videoBuffer_.updating)
                    }
                }), Object.defineProperty(r, "buffered", {
                    get: function() {
                        var t = null,
                            e = null,
                            i = 0,
                            r = [],
                            n = [];
                        if (!this.videoBuffer_ && !this.audioBuffer_) return ka.createTimeRange();
                        if (!this.videoBuffer_) return this.audioBuffer_.buffered;
                        if (!this.audioBuffer_) return this.videoBuffer_.buffered;
                        if (this.audioDisabled_) return this.videoBuffer_.buffered;
                        if (0 === this.videoBuffer_.buffered.length && 0 === this.audioBuffer_.buffered.length) return ka.createTimeRange();
                        for (var a = this.videoBuffer_.buffered, s = this.audioBuffer_.buffered, o = a.length; o--;) r.push({
                            time: a.start(o),
                            type: "start"
                        }), r.push({
                            time: a.end(o),
                            type: "end"
                        });
                        for (o = s.length; o--;) r.push({
                            time: s.start(o),
                            type: "start"
                        }), r.push({
                            time: s.end(o),
                            type: "end"
                        });
                        for (r.sort((function(t, e) {
                                return t.time - e.time
                            })), o = 0; o < r.length; o++) "start" === r[o].type ? 2 === ++i && (t = r[o].time) : "end" === r[o].type && 1 === --i && (e = r[o].time), null !== t && null !== e && (n.push([t, e]), t = null, e = null);
                        return ka.createTimeRanges(n)
                    }
                }), r
            }
            return Ro(e, t), Do(e, [{
                key: "data_",
                value: function(t) {
                    var e = t.data.segment;
                    e.data = new Uint8Array(e.data, t.data.byteOffset, t.data.byteLength), e.initSegment = new Uint8Array(e.initSegment.data, e.initSegment.byteOffset, e.initSegment.byteLength),
                        function(t, e, i) {
                            var r = e.player_;
                            if (i.captions && i.captions.length)
                                for (var n in t.inbandTextTracks_ || (t.inbandTextTracks_ = {}), i.captionStreams)
                                    if (!t.inbandTextTracks_[n]) {
                                        r.tech_.trigger({
                                            type: "usage",
                                            name: "hls-608"
                                        });
                                        var a = r.textTracks().getTrackById(n);
                                        t.inbandTextTracks_[n] = a || r.addRemoteTextTrack({
                                            kind: "captions",
                                            id: n,
                                            label: n
                                        }, !1).track
                                    }
                            i.metadata && i.metadata.length && !t.metadataTrack_ && (t.metadataTrack_ = r.addRemoteTextTrack({
                                kind: "metadata",
                                label: "Timed Metadata"
                            }, !1).track, t.metadataTrack_.inBandMetadataTrackDispatchType = i.metadata.dispatchType)
                        }(this, this.mediaSource_, e), this.pendingBuffers_.push(e)
                }
            }, {
                key: "done_",
                value: function(t) {
                    "closed" !== this.mediaSource_.readyState ? this.processPendingSegments_() : this.pendingBuffers_.length = 0
                }
            }, {
                key: "createRealSourceBuffers_",
                value: function() {
                    var t = this,
                        e = ["audio", "video"];
                    e.forEach((function(i) {
                        if (t[i + "Codec_"] && !t[i + "Buffer_"]) {
                            var r = null;
                            if (t.mediaSource_[i + "Buffer_"])(r = t.mediaSource_[i + "Buffer_"]).updating = !1;
                            else {
                                var n = i + '/mp4;codecs="' + t[i + "Codec_"] + '"';
                                r = function(t, e) {
                                    var i = t.addSourceBuffer(e),
                                        r = Object.create(null);
                                    r.updating = !1, r.realBuffer_ = i;
                                    var n = function(t) {
                                        "function" == typeof i[t] ? r[t] = function() {
                                            return i[t].apply(i, arguments)
                                        } : void 0 === r[t] && Object.defineProperty(r, t, {
                                            get: function() {
                                                return i[t]
                                            },
                                            set: function(e) {
                                                return i[t] = e
                                            }
                                        })
                                    };
                                    for (var a in i) n(a);
                                    return r
                                }(t.mediaSource_.nativeMediaSource_, n), t.mediaSource_[i + "Buffer_"] = r
                            }
                            t[i + "Buffer_"] = r, ["update", "updatestart", "updateend"].forEach((function(n) {
                                r.addEventListener(n, (function() {
                                    if ("audio" !== i || !t.audioDisabled_) return "updateend" === n && (t[i + "Buffer_"].updating = !1), e.every((function(e) {
                                        return !("audio" !== e || !t.audioDisabled_) || (i === e || !t[e + "Buffer_"] || !t[e + "Buffer_"].updating)
                                    })) ? t.trigger(n) : void 0
                                }))
                            }))
                        }
                    }))
                }
            }, {
                key: "appendBuffer",
                value: function(t) {
                    if (this.bufferUpdating_ = !0, this.audioBuffer_ && this.audioBuffer_.buffered.length) {
                        var e = this.audioBuffer_.buffered;
                        this.transmuxer_.postMessage({
                            action: "setAudioAppendStart",
                            appendStart: e.end(e.length - 1)
                        })
                    }
                    this.videoBuffer_ && this.transmuxer_.postMessage({
                        action: "alignGopsWith",
                        gopsToAlignWith: Fu(this.gopBuffer_, this.mediaSource_.player_, this.timeMapping_)
                    }), this.transmuxer_.postMessage({
                        action: "push",
                        data: t.buffer,
                        byteOffset: t.byteOffset,
                        byteLength: t.byteLength
                    }, [t.buffer]), this.transmuxer_.postMessage({
                        action: "flush"
                    })
                }
            }, {
                key: "appendGopInfo_",
                value: function(t) {
                    this.gopBuffer_ = function(t, e, i) {
                        if (!e.length) return t;
                        if (i) return e.slice();
                        for (var r = e[0].pts, n = 0; n < t.length && !(t[n].pts >= r); n++);
                        return t.slice(0, n).concat(e)
                    }(this.gopBuffer_, t.data.gopInfo, this.safeAppend_)
                }
            }, {
                key: "remove",
                value: function(t, e) {
                    if (this.videoBuffer_ && (this.videoBuffer_.updating = !0, this.videoBuffer_.remove(t, e), this.gopBuffer_ = function(t, e, i, r) {
                            for (var n = Math.ceil(9e4 * (e - r)), a = Math.ceil(9e4 * (i - r)), s = t.slice(), o = t.length; o-- && !(t[o].pts <= a););
                            if (-1 === o) return s;
                            for (var u = o + 1; u-- && !(t[u].pts <= n););
                            return u = Math.max(u, 0), s.splice(u, o - u + 1), s
                        }(this.gopBuffer_, t, e, this.timeMapping_)), !this.audioDisabled_ && this.audioBuffer_ && (this.audioBuffer_.updating = !0, this.audioBuffer_.remove(t, e)), ku(t, e, this.metadataTrack_), this.inbandTextTracks_)
                        for (var i in this.inbandTextTracks_) ku(t, e, this.inbandTextTracks_[i])
                }
            }, {
                key: "processPendingSegments_",
                value: function() {
                    var t = {
                        video: {
                            segments: [],
                            bytes: 0
                        },
                        audio: {
                            segments: [],
                            bytes: 0
                        },
                        captions: [],
                        metadata: []
                    };
                    t = this.pendingBuffers_.reduce((function(t, e) {
                        var i = e.type,
                            r = e.data,
                            n = e.initSegment;
                        return t[i].segments.push(r), t[i].bytes += r.byteLength, t[i].initSegment = n, e.captions && (t.captions = t.captions.concat(e.captions)), e.info && (t[i].info = e.info), e.metadata && (t.metadata = t.metadata.concat(e.metadata)), t
                    }), t), this.videoBuffer_ || this.audioBuffer_ || (0 === t.video.bytes && (this.videoCodec_ = null), 0 === t.audio.bytes && (this.audioCodec_ = null), this.createRealSourceBuffers_()), t.audio.info && this.mediaSource_.trigger({
                        type: "audioinfo",
                        info: t.audio.info
                    }), t.video.info && this.mediaSource_.trigger({
                        type: "videoinfo",
                        info: t.video.info
                    }), this.appendAudioInitSegment_ && (!this.audioDisabled_ && this.audioBuffer_ && (t.audio.segments.unshift(t.audio.initSegment), t.audio.bytes += t.audio.initSegment.byteLength), this.appendAudioInitSegment_ = !1);
                    var e = !1;
                    this.videoBuffer_ && t.video.bytes ? (t.video.segments.unshift(t.video.initSegment), t.video.bytes += t.video.initSegment.byteLength, this.concatAndAppendSegments_(t.video, this.videoBuffer_), Eu(this, t.captions, t.metadata)) : !this.videoBuffer_ || !this.audioDisabled_ && this.audioBuffer_ || (e = !0), !this.audioDisabled_ && this.audioBuffer_ && this.concatAndAppendSegments_(t.audio, this.audioBuffer_), this.pendingBuffers_.length = 0, e && this.trigger("updateend"), this.bufferUpdating_ = !1
                }
            }, {
                key: "concatAndAppendSegments_",
                value: function(t, e) {
                    var i = 0,
                        r = void 0;
                    if (t.bytes) {
                        r = new Uint8Array(t.bytes), t.segments.forEach((function(t) {
                            r.set(t, i), i += t.byteLength
                        }));
                        try {
                            e.updating = !0, e.appendBuffer(r)
                        } catch (t) {
                            this.mediaSource_.player_ && this.mediaSource_.player_.error({
                                code: -3,
                                type: "APPEND_BUFFER_ERR",
                                message: t.message,
                                originalError: t
                            })
                        }
                    }
                }
            }, {
                key: "abort",
                value: function() {
                    this.videoBuffer_ && this.videoBuffer_.abort(), !this.audioDisabled_ && this.audioBuffer_ && this.audioBuffer_.abort(), this.transmuxer_ && this.transmuxer_.postMessage({
                        action: "reset"
                    }), this.pendingBuffers_.length = 0, this.bufferUpdating_ = !1
                }
            }]), e
        }(ka.EventTarget),
        Vu = function(t) {
            function e() {
                xo(this, e);
                var t = Mo(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this)),
                    i = void 0;
                for (i in t.nativeMediaSource_ = new r.MediaSource, t.nativeMediaSource_) i in e.prototype || "function" != typeof t.nativeMediaSource_[i] || (t[i] = t.nativeMediaSource_[i].bind(t.nativeMediaSource_));
                return t.duration_ = NaN, Object.defineProperty(t, "duration", {
                    get: function() {
                        return this.duration_ === 1 / 0 ? this.duration_ : this.nativeMediaSource_.duration
                    },
                    set: function(t) {
                        this.duration_ = t, t === 1 / 0 || (this.nativeMediaSource_.duration = t)
                    }
                }), Object.defineProperty(t, "seekable", {
                    get: function() {
                        return this.duration_ === 1 / 0 ? ka.createTimeRanges([
                            [0, this.nativeMediaSource_.duration]
                        ]) : this.nativeMediaSource_.seekable
                    }
                }), Object.defineProperty(t, "readyState", {
                    get: function() {
                        return this.nativeMediaSource_.readyState
                    }
                }), Object.defineProperty(t, "activeSourceBuffers", {
                    get: function() {
                        return this.activeSourceBuffers_
                    }
                }), t.sourceBuffers = [], t.activeSourceBuffers_ = [], t.updateActiveSourceBuffers_ = function() {
                    if (t.activeSourceBuffers_.length = 0, 1 === t.sourceBuffers.length) {
                        var e = t.sourceBuffers[0];
                        return e.appendAudioInitSegment_ = !0, e.audioDisabled_ = !e.audioCodec_, void t.activeSourceBuffers_.push(e)
                    }
                    for (var i = !1, r = !0, n = 0; n < t.player_.audioTracks().length; n++) {
                        var a = t.player_.audioTracks()[n];
                        if (a.enabled && "main" !== a.kind) {
                            i = !0, r = !1;
                            break
                        }
                    }
                    t.sourceBuffers.forEach((function(e, n) {
                        if (e.appendAudioInitSegment_ = !0, e.videoCodec_ && e.audioCodec_) e.audioDisabled_ = i;
                        else if (e.videoCodec_ && !e.audioCodec_) e.audioDisabled_ = !0, r = !1;
                        else if (!e.videoCodec_ && e.audioCodec_ && (e.audioDisabled_ = n ? r : !r, e.audioDisabled_)) return;
                        t.activeSourceBuffers_.push(e)
                    }))
                }, t.onPlayerMediachange_ = function() {
                    t.sourceBuffers.forEach((function(t) {
                        t.appendAudioInitSegment_ = !0
                    }))
                }, t.onHlsReset_ = function() {
                    t.sourceBuffers.forEach((function(t) {
                        t.transmuxer_ && t.transmuxer_.postMessage({
                            action: "resetCaptions"
                        })
                    }))
                }, t.onHlsSegmentTimeMapping_ = function(e) {
                    t.sourceBuffers.forEach((function(t) {
                        return t.timeMapping_ = e.mapping
                    }))
                }, ["sourceopen", "sourceclose", "sourceended"].forEach((function(t) {
                    this.nativeMediaSource_.addEventListener(t, this.trigger.bind(this))
                }), t), t.on("sourceopen", (function(e) {
                    var i = u.querySelector('[src="' + t.url_ + '"]');
                    i && (t.player_ = ka(i.parentNode), t.player_.tech_.on("hls-reset", t.onHlsReset_), t.player_.tech_.on("hls-segment-time-mapping", t.onHlsSegmentTimeMapping_), t.player_.audioTracks && t.player_.audioTracks() && (t.player_.audioTracks().on("change", t.updateActiveSourceBuffers_), t.player_.audioTracks().on("addtrack", t.updateActiveSourceBuffers_), t.player_.audioTracks().on("removetrack", t.updateActiveSourceBuffers_)), t.player_.on("mediachange", t.onPlayerMediachange_))
                })), t.on("sourceended", (function(e) {
                    for (var i = Cu(t.duration), r = 0; r < t.sourceBuffers.length; r++) {
                        var n = t.sourceBuffers[r],
                            a = n.metadataTrack_ && n.metadataTrack_.cues;
                        a && a.length && (a[a.length - 1].endTime = i)
                    }
                })), t.on("sourceclose", (function(t) {
                    this.sourceBuffers.forEach((function(t) {
                        t.transmuxer_ && t.transmuxer_.terminate()
                    })), this.sourceBuffers.length = 0, this.player_ && (this.player_.audioTracks && this.player_.audioTracks() && (this.player_.audioTracks().off("change", this.updateActiveSourceBuffers_), this.player_.audioTracks().off("addtrack", this.updateActiveSourceBuffers_), this.player_.audioTracks().off("removetrack", this.updateActiveSourceBuffers_)), this.player_.el_ && (this.player_.off("mediachange", this.onPlayerMediachange_), this.player_.tech_.off("hls-reset", this.onHlsReset_), this.player_.tech_.off("hls-segment-time-mapping", this.onHlsSegmentTimeMapping_)))
                })), t
            }
            return Ro(e, t), Do(e, [{
                key: "addSeekableRange_",
                value: function(t, e) {
                    var i = void 0;
                    if (this.duration !== 1 / 0) throw (i = new Error("MediaSource.addSeekableRange() can only be invoked when the duration is Infinity")).name = "InvalidStateError", i.code = 11, i;
                    (e > this.nativeMediaSource_.duration || isNaN(this.nativeMediaSource_.duration)) && (this.nativeMediaSource_.duration = e)
                }
            }, {
                key: "addSourceBuffer",
                value: function(t) {
                    var e = void 0,
                        i = function(t) {
                            var e = {
                                    type: "",
                                    parameters: {}
                                },
                                i = t.trim().split(";");
                            return e.type = i.shift().trim(), i.forEach((function(t) {
                                var i = t.trim().split("=");
                                if (i.length > 1) {
                                    var r = i[0].replace(/"/g, "").trim(),
                                        n = i[1].replace(/"/g, "").trim();
                                    e.parameters[r] = n
                                }
                            })), e
                        }(t);
                    if (/^(video|audio)\/mp2t$/i.test(i.type)) {
                        var r = [];
                        i.parameters && i.parameters.codecs && (r = i.parameters.codecs.split(","), r = (r = ju(r)).filter((function(t) {
                            return Nu(t) || Bu(t)
                        }))), 0 === r.length && (r = ["avc1.4d400d", "mp4a.40.2"]), e = new Hu(this, r), 0 !== this.sourceBuffers.length && (this.sourceBuffers[0].createRealSourceBuffers_(), e.createRealSourceBuffers_(), this.sourceBuffers[0].audioDisabled_ = !0)
                    } else e = this.nativeMediaSource_.addSourceBuffer(t);
                    return this.sourceBuffers.push(e), e
                }
            }]), e
        }(ka.EventTarget),
        qu = 0;
    ka.mediaSources = {};
    var Wu = function(t, e) {
            var i = ka.mediaSources[t];
            if (!i) throw new Error("Media Source not found (Video.js)");
            i.trigger({
                type: "sourceopen",
                swfId: e
            })
        },
        zu = function() {
            return !!r.MediaSource && !!r.MediaSource.isTypeSupported && r.MediaSource.isTypeSupported('video/mp4;codecs="avc1.4d400d,mp4a.40.2"')
        },
        Gu = function() {
            if (this.MediaSource = {
                    open: Wu,
                    supportsNativeMediaSources: zu
                }, zu()) return new Vu;
            throw new Error("Cannot use create a virtual MediaSource for this video")
        };
    Gu.open = Wu, Gu.supportsNativeMediaSources = zu;
    var Xu = {
        createObjectURL: function(t) {
            var e = void 0;
            return t instanceof Vu ? (e = r.URL.createObjectURL(t.nativeMediaSource_), t.url_ = e, e) : t instanceof Vu ? (e = "blob:vjs-media-source/" + qu, qu++, ka.mediaSources[e] = t, e) : (e = r.URL.createObjectURL(t), t.url_ = e, e)
        }
    };
    ka.MediaSource = Gu, ka.URL = Xu;
    var Yu = ka.EventTarget,
        $u = ka.mergeOptions,
        Ku = function(t, e) {
            for (var i = $u(t, {
                    duration: e.duration,
                    minimumUpdatePeriod: e.minimumUpdatePeriod
                }), r = 0; r < e.playlists.length; r++) {
                var n = Ho(i, e.playlists[r]);
                n && (i = n)
            }
            return Fo(e, (function(t, e, r, n) {
                if (t.playlists && t.playlists.length) {
                    var a = t.playlists[0].uri,
                        s = Ho(i, t.playlists[0]);
                    s && ((i = s).mediaGroups[e][r][n].playlists[0] = i.playlists[a])
                }
            })), i
        },
        Qu = function(t) {
            function e(t, i, n, a) {
                xo(this, e);
                var s = Mo(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                if (s.hls_ = i, s.withCredentials = n, !t) throw new Error("A non-empty playlist URL or playlist is required");
                return s.on("minimumUpdatePeriod", (function() {
                    s.refreshXml_()
                })), s.on("mediaupdatetimeout", (function() {
                    s.refreshMedia_()
                })), "string" == typeof t ? (s.srcUrl = t, s.state = "HAVE_NOTHING", Mo(s)) : (s.masterPlaylistLoader_ = a, s.state = "HAVE_METADATA", s.started = !0, s.media(t), r.setTimeout((function() {
                    s.trigger("loadedmetadata")
                }), 0), s)
            }
            return Ro(e, t), Do(e, [{
                key: "dispose",
                value: function() {
                    this.stopRequest(), r.clearTimeout(this.mediaUpdateTimeout)
                }
            }, {
                key: "stopRequest",
                value: function() {
                    if (this.request) {
                        var t = this.request;
                        this.request = null, t.onreadystatechange = null, t.abort()
                    }
                }
            }, {
                key: "media",
                value: function(t) {
                    if (!t) return this.media_;
                    if ("HAVE_NOTHING" === this.state) throw new Error("Cannot switch media playlist from " + this.state);
                    var e = this.state;
                    if ("string" == typeof t) {
                        if (!this.master.playlists[t]) throw new Error("Unknown playlist URI: " + t);
                        t = this.master.playlists[t]
                    }
                    var i = !this.media_ || t.uri !== this.media_.uri;
                    this.state = "HAVE_METADATA", i && (this.media_ && this.trigger("mediachanging"), this.media_ = t, this.refreshMedia_(), "HAVE_MASTER" !== e && this.trigger("mediachange"))
                }
            }, {
                key: "pause",
                value: function() {
                    this.stopRequest(), "HAVE_NOTHING" === this.state && (this.started = !1)
                }
            }, {
                key: "load",
                value: function() {
                    this.started ? this.trigger("loadedplaylist") : this.start()
                }
            }, {
                key: "parseMasterXml",
                value: function() {
                    var t = Ss(this.masterXml_, {
                        manifestUri: this.srcUrl,
                        clientOffset: this.clientOffset_
                    });
                    t.uri = this.srcUrl;
                    for (var e = 0; e < t.playlists.length; e++) {
                        var i = "placeholder-uri-" + e;
                        t.playlists[e].uri = i, t.playlists[i] = t.playlists[e]
                    }
                    return Fo(t, (function(e, i, r, n) {
                        if (e.playlists && e.playlists.length) {
                            var a = "placeholder-uri-" + i + "-" + r + "-" + n;
                            e.playlists[0].uri = a, t.playlists[a] = e.playlists[0]
                        }
                    })), Vo(t), qo(t), t
                }
            }, {
                key: "start",
                value: function() {
                    var t = this;
                    this.started = !0, this.request = this.hls_.xhr({
                        uri: this.srcUrl,
                        withCredentials: this.withCredentials
                    }, (function(e, i) {
                        if (t.request) {
                            if (t.request = null, e) return t.error = {
                                status: i.status,
                                message: "DASH playlist request error at URL: " + t.srcUrl,
                                responseText: i.responseText,
                                code: 2
                            }, "HAVE_NOTHING" === t.state && (t.started = !1), t.trigger("error");
                            t.masterXml_ = i.responseText, i.responseHeaders && i.responseHeaders.date ? t.masterLoaded_ = Date.parse(i.responseHeaders.date) : t.masterLoaded_ = Date.now(), t.syncClientServerClock_(t.onClientServerClockSync_.bind(t))
                        }
                    }))
                }
            }, {
                key: "syncClientServerClock_",
                value: function(t) {
                    var e = this,
                        i = ks(this.masterXml_);
                    return null === i ? (this.clientOffset_ = this.masterLoaded_ - Date.now(), t()) : "DIRECT" === i.method ? (this.clientOffset_ = i.value - Date.now(), t()) : void(this.request = this.hls_.xhr({
                        uri: Io(this.srcUrl, i.value),
                        method: i.method,
                        withCredentials: this.withCredentials
                    }, (function(r, n) {
                        if (e.request) {
                            if (r) return e.clientOffset_ = e.masterLoaded_ - Date.now(), t();
                            var a = void 0;
                            a = "HEAD" === i.method ? n.responseHeaders && n.responseHeaders.date ? Date.parse(n.responseHeaders.date) : e.masterLoaded_ : Date.parse(n.responseText), e.clientOffset_ = a - Date.now(), t()
                        }
                    })))
                }
            }, {
                key: "onClientServerClockSync_",
                value: function() {
                    var t = this;
                    this.master = this.parseMasterXml(), this.state = "HAVE_MASTER", this.trigger("loadedplaylist"), this.media_ || this.media(this.master.playlists[0]), r.setTimeout((function() {
                        t.trigger("loadedmetadata")
                    }), 0), this.master.minimumUpdatePeriod && r.setTimeout((function() {
                        t.trigger("minimumUpdatePeriod")
                    }), this.master.minimumUpdatePeriod)
                }
            }, {
                key: "refreshXml_",
                value: function() {
                    var t = this;
                    this.request = this.hls_.xhr({
                        uri: this.srcUrl,
                        withCredentials: this.withCredentials
                    }, (function(e, i) {
                        if (t.request) {
                            if (t.request = null, e) return t.error = {
                                status: i.status,
                                message: "DASH playlist request error at URL: " + t.srcUrl,
                                responseText: i.responseText,
                                code: 2
                            }, "HAVE_NOTHING" === t.state && (t.started = !1), t.trigger("error");
                            t.masterXml_ = i.responseText;
                            var n = t.parseMasterXml();
                            t.master = Ku(t.master, n), r.setTimeout((function() {
                                t.trigger("minimumUpdatePeriod")
                            }), t.master.minimumUpdatePeriod)
                        }
                    }))
                }
            }, {
                key: "refreshMedia_",
                value: function() {
                    var t = this,
                        e = void 0,
                        i = void 0;
                    this.masterPlaylistLoader_ ? (e = this.masterPlaylistLoader_.master, i = this.masterPlaylistLoader_.parseMasterXml()) : (e = this.master, i = this.parseMasterXml());
                    var n = Ku(e, i);
                    n ? (this.masterPlaylistLoader_ ? this.masterPlaylistLoader_.master = n : this.master = n, this.media_ = n.playlists[this.media_.uri]) : this.trigger("playlistunchanged"), this.media().endList || (this.mediaUpdateTimeout = r.setTimeout((function() {
                        t.trigger("mediaupdatetimeout")
                    }), Wo(this.media(), !!n))), this.trigger("loadedplaylist")
                }
            }]), e
        }(Yu),
        Ju = function(t) {
            return ka.log.debug ? ka.log.debug.bind(ka, "VHS:", t + " >") : function() {}
        };

    function Zu() {}
    var tl = function() {
            function t(e, i, r, n) {
                xo(this, t), this.callbacks_ = [], this.pendingCallback_ = null, this.timestampOffset_ = 0, this.mediaSource = e, this.processedAppend_ = !1, this.type_ = r, this.mimeType_ = i, this.logger_ = Ju("SourceUpdater[" + r + "][" + i + "]"), "closed" === e.readyState ? e.addEventListener("sourceopen", this.createSourceBuffer_.bind(this, i, n)) : this.createSourceBuffer_(i, n)
            }
            return Do(t, [{
                key: "createSourceBuffer_",
                value: function(t, e) {
                    var i = this;
                    this.sourceBuffer_ = this.mediaSource.addSourceBuffer(t), this.logger_("created SourceBuffer"), e && (e.trigger("sourcebufferadded"), this.mediaSource.sourceBuffers.length < 2) ? e.on("sourcebufferadded", (function() {
                        i.start_()
                    })) : this.start_()
                }
            }, {
                key: "start_",
                value: function() {
                    var t = this;
                    this.started_ = !0, this.onUpdateendCallback_ = function() {
                        var e = t.pendingCallback_;
                        t.pendingCallback_ = null, t.logger_("buffered [" + Tu(t.buffered()) + "]"), e && e(), t.runCallback_()
                    }, this.sourceBuffer_.addEventListener("updateend", this.onUpdateendCallback_), this.runCallback_()
                }
            }, {
                key: "abort",
                value: function(t) {
                    var e = this;
                    this.processedAppend_ && this.queueCallback_((function() {
                        e.sourceBuffer_.abort()
                    }), t)
                }
            }, {
                key: "appendBuffer",
                value: function(t, e) {
                    var i = this;
                    this.processedAppend_ = !0, this.queueCallback_((function() {
                        i.sourceBuffer_.appendBuffer(t)
                    }), e)
                }
            }, {
                key: "buffered",
                value: function() {
                    return this.sourceBuffer_ ? this.sourceBuffer_.buffered : ka.createTimeRanges()
                }
            }, {
                key: "remove",
                value: function(t, e) {
                    var i = this;
                    this.processedAppend_ && this.queueCallback_((function() {
                        i.logger_("remove [" + t + " => " + e + "]"), i.sourceBuffer_.remove(t, e)
                    }), Zu)
                }
            }, {
                key: "updating",
                value: function() {
                    return !this.sourceBuffer_ || this.sourceBuffer_.updating || this.pendingCallback_
                }
            }, {
                key: "timestampOffset",
                value: function(t) {
                    var e = this;
                    return void 0 !== t && (this.queueCallback_((function() {
                        e.sourceBuffer_.timestampOffset = t
                    })), this.timestampOffset_ = t), this.timestampOffset_
                }
            }, {
                key: "queueCallback_",
                value: function(t, e) {
                    this.callbacks_.push([t.bind(this), e]), this.runCallback_()
                }
            }, {
                key: "runCallback_",
                value: function() {
                    var t = void 0;
                    !this.updating() && this.callbacks_.length && this.started_ && (t = this.callbacks_.shift(), this.pendingCallback_ = t[1], t[0]())
                }
            }, {
                key: "dispose",
                value: function() {
                    this.sourceBuffer_.removeEventListener("updateend", this.onUpdateendCallback_), this.sourceBuffer_ && "open" === this.mediaSource.readyState && this.sourceBuffer_.abort()
                }
            }]), t
        }(),
        el = {
            GOAL_BUFFER_LENGTH: 30,
            MAX_GOAL_BUFFER_LENGTH: 60,
            GOAL_BUFFER_LENGTH_RATE: 1,
            BANDWIDTH_VARIANCE: 1.2,
            BUFFER_LOW_WATER_LINE: 0,
            MAX_BUFFER_LOW_WATER_LINE: 30,
            BUFFER_LOW_WATER_LINE_RATE: 1
        },
        il = 2,
        rl = -101,
        nl = -102,
        al = function(t) {
            var e, i, r = {};
            return t.byterange && (r.Range = (e = t.byterange, i = e.offset + e.length - 1, "bytes=" + e.offset + "-" + i)), r
        },
        sl = function(t) {
            t.forEach((function(t) {
                t.abort()
            }))
        },
        ol = function(t, e) {
            return e.timedout ? {
                status: e.status,
                message: "HLS request timed-out at URL: " + e.uri,
                code: rl,
                xhr: e
            } : e.aborted ? {
                status: e.status,
                message: "HLS request aborted at URL: " + e.uri,
                code: nl,
                xhr: e
            } : t ? {
                status: e.status,
                message: "HLS request errored at URL: " + e.uri,
                code: il,
                xhr: e
            } : null
        },
        ul = function(t, e, i) {
            var r = [],
                n = 0;
            return function(a, s) {
                if (a && (sl(t), r.push(a)), (n += 1) === t.length) {
                    if (s.endOfAllRequests = Date.now(), r.length > 0) {
                        var o = function(t) {
                            return t.reduce((function(t, e) {
                                return e.code > t.code ? e : t
                            }))
                        }(r);
                        return i(o, s)
                    }
                    return s.encryptedBytes ? function(t, e, i) {
                        t.addEventListener("message", (function r(n) {
                            if (n.data.source === e.requestId) {
                                t.removeEventListener("message", r);
                                var a = n.data.decrypted;
                                return e.bytes = new Uint8Array(a.bytes, a.byteOffset, a.byteLength), i(null, e)
                            }
                        })), t.postMessage(fu({
                            source: e.requestId,
                            encrypted: e.encryptedBytes,
                            key: e.key.bytes,
                            iv: e.key.iv
                        }), [e.encryptedBytes.buffer, e.key.bytes.buffer])
                    }(e, s, i) : i(null, s)
                }
            }
        },
        ll = function(t, e) {
            return function(i) {
                var r, n, a;
                return t.stats = ka.mergeOptions(t.stats, (n = (r = i).target, (a = {
                    bandwidth: 1 / 0,
                    bytesReceived: 0,
                    roundTripTime: Date.now() - n.requestTime || 0
                }).bytesReceived = r.loaded, a.bandwidth = Math.floor(a.bytesReceived / a.roundTripTime * 8 * 1e3), a)), !t.stats.firstBytesReceivedAt && t.stats.bytesReceived && (t.stats.firstBytesReceivedAt = Date.now()), e(i, t)
            }
        },
        cl = function(t, e, i, r, n, a) {
            var s = [],
                o = ul(s, i, a);
            if (r.key) {
                var u = t(ka.mergeOptions(e, {
                    uri: r.key.resolvedUri,
                    responseType: "arraybuffer"
                }), function(t, e) {
                    return function(i, r) {
                        var n = r.response,
                            a = ol(i, r);
                        if (a) return e(a, t);
                        if (16 !== n.byteLength) return e({
                            status: r.status,
                            message: "Invalid HLS key at URL: " + r.uri,
                            code: il,
                            xhr: r
                        }, t);
                        var s = new DataView(n);
                        return t.key.bytes = new Uint32Array([s.getUint32(0), s.getUint32(4), s.getUint32(8), s.getUint32(12)]), e(null, t)
                    }
                }(r, o));
                s.push(u)
            }
            if (r.map && !r.map.bytes) {
                var l = t(ka.mergeOptions(e, {
                    uri: r.map.resolvedUri,
                    responseType: "arraybuffer",
                    headers: al(r.map)
                }), function(t, e) {
                    return function(i, r) {
                        var n = r.response,
                            a = ol(i, r);
                        return a ? e(a, t) : 0 === n.byteLength ? e({
                            status: r.status,
                            message: "Empty HLS segment content at URL: " + r.uri,
                            code: il,
                            xhr: r
                        }, t) : (t.map.bytes = new Uint8Array(r.response), e(null, t))
                    }
                }(r, o));
                s.push(l)
            }
            var c = t(ka.mergeOptions(e, {
                uri: r.resolvedUri,
                responseType: "arraybuffer",
                headers: al(r)
            }), function(t, e) {
                return function(i, r) {
                    var n = r.response,
                        a = ol(i, r);
                    return a ? e(a, t) : 0 === n.byteLength ? e({
                        status: r.status,
                        message: "Empty HLS segment content at URL: " + r.uri,
                        code: il,
                        xhr: r
                    }, t) : (t.stats = function(t) {
                        return {
                            bandwidth: t.bandwidth,
                            bytesReceived: t.bytesReceived || 0,
                            roundTripTime: t.roundTripTime || 0
                        }
                    }(r), t.key ? t.encryptedBytes = new Uint8Array(r.response) : t.bytes = new Uint8Array(r.response), e(null, t))
                }
            }(r, o));
            return c.addEventListener("progress", ll(r, n)), s.push(c),
                function() {
                    return sl(s)
                }
        },
        hl = {
            videoCodec: "avc1",
            videoObjectTypeIndicator: ".4d400d",
            audioProfile: "2"
        },
        dl = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                e = {
                    codecCount: 0
                },
                i = void 0;
            return e.codecCount = t.split(",").length, e.codecCount = e.codecCount || 2, (i = /(^|\s|,)+(avc[13])([^ ,]*)/i.exec(t)) && (e.videoCodec = i[2], e.videoObjectTypeIndicator = i[3]), e.audioProfile = /(^|\s|,)+mp4a.[0-9A-Fa-f]+\.([0-9A-Fa-f]+)/i.exec(t), e.audioProfile = e.audioProfile && e.audioProfile[2], e
        },
        pl = function(t, e, i) {
            return t + "/" + e + '; codecs="' + i.filter((function(t) {
                return !!t
            })).join(", ") + '"'
        },
        fl = function(t, e) {
            var i = function(t) {
                    return t.segments && t.segments.length && t.segments[0].map ? "mp4" : "mp2t"
                }(e),
                r = function(t) {
                    var e = t.attributes || {};
                    return e.CODECS ? dl(e.CODECS) : hl
                }(e),
                n = e.attributes || {},
                a = !0,
                s = !1;
            if (!e) return [];
            if (t.mediaGroups.AUDIO && n.AUDIO) {
                var o = t.mediaGroups.AUDIO[n.AUDIO];
                if (o)
                    for (var u in s = !0, a = !1, o)
                        if (!o[u].uri && !o[u].playlists) {
                            a = !0;
                            break
                        }
            }
            s && !r.audioProfile && (a || (r.audioProfile = function(t, e) {
                if (!t.mediaGroups.AUDIO || !e) return null;
                var i = t.mediaGroups.AUDIO[e];
                if (!i) return null;
                for (var r in i) {
                    var n = i[r];
                    if (n.default && n.playlists) return dl(n.playlists[0].attributes.CODECS).audioProfile
                }
                return null
            }(t, n.AUDIO)), r.audioProfile || (ka.log.warn("Multiple audio tracks present but no audio codec string is specified. Attempting to use the default audio codec (mp4a.40.2)"), r.audioProfile = hl.audioProfile));
            var l = {};
            r.videoCodec && (l.video = "" + r.videoCodec + r.videoObjectTypeIndicator), r.audioProfile && (l.audio = "mp4a.40." + r.audioProfile);
            var c = pl("audio", i, [l.audio]),
                h = pl("video", i, [l.video]),
                d = pl("video", i, [l.video, l.audio]);
            return s ? !a && l.video ? [h, c] : a || l.video ? [d, c] : [c, c] : l.video ? [d] : [c]
        },
        ml = function(t, e) {
            var i;
            return t && (i = r.getComputedStyle(t)) ? i[e] : ""
        },
        gl = function(t, e) {
            var i = t.slice();
            t.sort((function(t, r) {
                var n = e(t, r);
                return 0 === n ? i.indexOf(t) - i.indexOf(r) : n
            }))
        },
        yl = function(t, e) {
            var i = void 0,
                n = void 0;
            return t.attributes.BANDWIDTH && (i = t.attributes.BANDWIDTH), i = i || r.Number.MAX_VALUE, e.attributes.BANDWIDTH && (n = e.attributes.BANDWIDTH), i - (n = n || r.Number.MAX_VALUE)
        },
        vl = function(t, e, i) {
            if (!t || !e) return !1;
            var r = i === t.segments.length;
            return t.endList && "open" === e.readyState && r
        },
        _l = function(t) {
            return "number" == typeof t && isFinite(t)
        },
        bl = function(t) {
            function e(t) {
                xo(this, e);
                var i = Mo(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                if (!t) throw new TypeError("Initialization settings are required");
                if ("function" != typeof t.currentTime) throw new TypeError("No currentTime getter specified");
                if (!t.mediaSource) throw new TypeError("No MediaSource specified");
                return i.bandwidth = t.bandwidth, i.throughput = {
                    rate: 0,
                    count: 0
                }, i.roundTrip = NaN, i.resetStats_(), i.mediaIndex = null, i.hasPlayed_ = t.hasPlayed, i.currentTime_ = t.currentTime, i.seekable_ = t.seekable, i.seeking_ = t.seeking, i.duration_ = t.duration, i.mediaSource_ = t.mediaSource, i.hls_ = t.hls, i.loaderType_ = t.loaderType, i.startingMedia_ = void 0, i.segmentMetadataTrack_ = t.segmentMetadataTrack, i.goalBufferLength_ = t.goalBufferLength, i.sourceType_ = t.sourceType, i.state_ = "INIT", i.checkBufferTimeout_ = null, i.error_ = void 0, i.currentTimeline_ = -1, i.pendingSegment_ = null, i.mimeType_ = null, i.sourceUpdater_ = null, i.xhrOptions_ = null, i.activeInitSegmentId_ = null, i.initSegments_ = {}, i.decrypter_ = t.decrypter, i.syncController_ = t.syncController, i.syncPoint_ = {
                    segmentIndex: 0,
                    time: 0
                }, i.syncController_.on("syncinfoupdate", (function() {
                    return i.trigger("syncinfoupdate")
                })), i.mediaSource_.addEventListener("sourceopen", (function() {
                    return i.ended_ = !1
                })), i.fetchAtBuffer_ = !1, i.logger_ = Ju("SegmentLoader[" + i.loaderType_ + "]"), Object.defineProperty(i, "state", {
                    get: function() {
                        return this.state_
                    },
                    set: function(t) {
                        t !== this.state_ && (this.logger_(this.state_ + " -> " + t), this.state_ = t)
                    }
                }), i
            }
            return Ro(e, t), Do(e, [{
                key: "resetStats_",
                value: function() {
                    this.mediaBytesTransferred = 0, this.mediaRequests = 0, this.mediaRequestsAborted = 0, this.mediaRequestsTimedout = 0, this.mediaRequestsErrored = 0, this.mediaTransferDuration = 0, this.mediaSecondsLoaded = 0
                }
            }, {
                key: "dispose",
                value: function() {
                    this.state = "DISPOSED", this.pause(), this.abort_(), this.sourceUpdater_ && this.sourceUpdater_.dispose(), this.resetStats_()
                }
            }, {
                key: "abort",
                value: function() {
                    "WAITING" === this.state ? (this.abort_(), this.state = "READY", this.paused() || this.monitorBuffer_()) : this.pendingSegment_ && (this.pendingSegment_ = null)
                }
            }, {
                key: "abort_",
                value: function() {
                    this.pendingSegment_ && this.pendingSegment_.abortRequests(), this.pendingSegment_ = null
                }
            }, {
                key: "error",
                value: function(t) {
                    return void 0 !== t && (this.error_ = t), this.pendingSegment_ = null, this.error_
                }
            }, {
                key: "endOfStream",
                value: function() {
                    this.ended_ = !0, this.pause(), this.trigger("ended")
                }
            }, {
                key: "buffered_",
                value: function() {
                    return this.sourceUpdater_ ? this.sourceUpdater_.buffered() : ka.createTimeRanges()
                }
            }, {
                key: "initSegment",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (!t) return null;
                    var i = mu(t),
                        r = this.initSegments_[i];
                    return e && !r && t.bytes && (this.initSegments_[i] = r = {
                        resolvedUri: t.resolvedUri,
                        byterange: t.byterange,
                        bytes: t.bytes
                    }), r || t
                }
            }, {
                key: "couldBeginLoading_",
                value: function() {
                    return this.playlist_ && (this.sourceUpdater_ || this.mimeType_ && "INIT" === this.state) && !this.paused()
                }
            }, {
                key: "load",
                value: function() {
                    if (this.monitorBuffer_(), this.playlist_) {
                        if (this.syncController_.setDateTimeMapping(this.playlist_), "INIT" === this.state && this.couldBeginLoading_()) return this.init_();
                        !this.couldBeginLoading_() || "READY" !== this.state && "INIT" !== this.state || (this.state = "READY")
                    }
                }
            }, {
                key: "init_",
                value: function() {
                    return this.state = "READY", this.sourceUpdater_ = new tl(this.mediaSource_, this.mimeType_, this.loaderType_, this.sourceBufferEmitter_), this.resetEverything(), this.monitorBuffer_()
                }
            }, {
                key: "playlist",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (t) {
                        var i = this.playlist_,
                            r = this.pendingSegment_;
                        this.playlist_ = t, this.xhrOptions_ = e, this.hasPlayed_() || (t.syncInfo = {
                            mediaSequence: t.mediaSequence,
                            time: 0
                        });
                        var n = i ? i.id : null;
                        if (this.logger_("playlist update [" + n + " => " + t.id + "]"), this.trigger("syncinfoupdate"), "INIT" === this.state && this.couldBeginLoading_()) return this.init_();
                        if (i && i.uri === t.uri) {
                            var a = t.mediaSequence - i.mediaSequence;
                            this.logger_("live window shift [" + a + "]"), null !== this.mediaIndex && (this.mediaIndex -= a), r && (r.mediaIndex -= a, r.mediaIndex >= 0 && (r.segment = t.segments[r.mediaIndex])), this.syncController_.saveExpiredSegmentInfo(i, t)
                        } else null !== this.mediaIndex && this.resyncLoader()
                    }
                }
            }, {
                key: "pause",
                value: function() {
                    this.checkBufferTimeout_ && (r.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = null)
                }
            }, {
                key: "paused",
                value: function() {
                    return null === this.checkBufferTimeout_
                }
            }, {
                key: "mimeType",
                value: function(t, e) {
                    this.mimeType_ || (this.mimeType_ = t, this.sourceBufferEmitter_ = e, "INIT" === this.state && this.couldBeginLoading_() && this.init_())
                }
            }, {
                key: "resetEverything",
                value: function() {
                    this.ended_ = !1, this.resetLoader(), this.remove(0, this.duration_()), this.trigger("reseteverything")
                }
            }, {
                key: "resetLoader",
                value: function() {
                    this.fetchAtBuffer_ = !1, this.resyncLoader()
                }
            }, {
                key: "resyncLoader",
                value: function() {
                    this.mediaIndex = null, this.syncPoint_ = null, this.abort()
                }
            }, {
                key: "remove",
                value: function(t, e) {
                    this.sourceUpdater_ && this.sourceUpdater_.remove(t, e), ku(t, e, this.segmentMetadataTrack_)
                }
            }, {
                key: "monitorBuffer_",
                value: function() {
                    this.checkBufferTimeout_ && r.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = r.setTimeout(this.monitorBufferTick_.bind(this), 1)
                }
            }, {
                key: "monitorBufferTick_",
                value: function() {
                    "READY" === this.state && this.fillBuffer_(), this.checkBufferTimeout_ && r.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = r.setTimeout(this.monitorBufferTick_.bind(this), 500)
                }
            }, {
                key: "fillBuffer_",
                value: function() {
                    if (!this.sourceUpdater_.updating()) {
                        this.syncPoint_ || (this.syncPoint_ = this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_()));
                        var t = this.checkBuffer_(this.buffered_(), this.playlist_, this.mediaIndex, this.hasPlayed_(), this.currentTime_(), this.syncPoint_);
                        if (t) vl(this.playlist_, this.mediaSource_, t.mediaIndex) ? this.endOfStream() : (t.mediaIndex !== this.playlist_.segments.length - 1 || "ended" !== this.mediaSource_.readyState || this.seeking_()) && ((t.timeline !== this.currentTimeline_ || null !== t.startOfSegment && t.startOfSegment < this.sourceUpdater_.timestampOffset()) && (this.syncController_.reset(), t.timestampOffset = t.startOfSegment), this.loadSegment_(t))
                    }
                }
            }, {
                key: "checkBuffer_",
                value: function(t, e, i, r, n, a) {
                    var s = 0,
                        o = void 0;
                    t.length && (s = t.end(t.length - 1));
                    var u = Math.max(0, s - n);
                    if (!e.segments.length) return null;
                    if (u >= this.goalBufferLength_()) return null;
                    if (!r && u >= 1) return null;
                    if (null === a) return i = this.getSyncSegmentCandidate_(e), this.generateSegmentInfo_(e, i, null, !0);
                    if (null !== i) {
                        var l = e.segments[i];
                        return o = l && l.end ? l.end : s, this.generateSegmentInfo_(e, i + 1, o, !1)
                    }
                    if (this.fetchAtBuffer_) {
                        var c = ou.getMediaInfoForTime(e, s, a.segmentIndex, a.time);
                        i = c.mediaIndex, o = c.startTime
                    } else {
                        var h = ou.getMediaInfoForTime(e, n, a.segmentIndex, a.time);
                        i = h.mediaIndex, o = h.startTime
                    }
                    return this.generateSegmentInfo_(e, i, o, !1)
                }
            }, {
                key: "getSyncSegmentCandidate_",
                value: function(t) {
                    var e = this;
                    if (-1 === this.currentTimeline_) return 0;
                    var i = t.segments.map((function(t, e) {
                        return {
                            timeline: t.timeline,
                            segmentIndex: e
                        }
                    })).filter((function(t) {
                        return t.timeline === e.currentTimeline_
                    }));
                    return i.length ? i[Math.min(i.length - 1, 1)].segmentIndex : Math.max(t.segments.length - 1, 0)
                }
            }, {
                key: "generateSegmentInfo_",
                value: function(t, e, i, r) {
                    if (e < 0 || e >= t.segments.length) return null;
                    var n = t.segments[e];
                    return {
                        requestId: "segment-loader-" + Math.random(),
                        uri: n.resolvedUri,
                        mediaIndex: e,
                        isSyncRequest: r,
                        startOfSegment: i,
                        playlist: t,
                        bytes: null,
                        encryptedBytes: null,
                        timestampOffset: null,
                        timeline: n.timeline,
                        duration: n.duration,
                        segment: n
                    }
                }
            }, {
                key: "abortRequestEarly_",
                value: function(t) {
                    if (this.hls_.tech_.paused() || !this.xhrOptions_.timeout || !this.playlist_.attributes.BANDWIDTH) return !1;
                    if (Date.now() - (t.firstBytesReceivedAt || Date.now()) < 1e3) return !1;
                    var e = this.currentTime_(),
                        i = t.bandwidth,
                        r = this.pendingSegment_.duration,
                        n = ou.estimateSegmentRequestTime(r, i, this.playlist_, t.bytesReceived),
                        a = function(t, e) {
                            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                                r = t.length ? t.end(t.length - 1) : 0;
                            return (r - e) / i
                        }(this.buffered_(), e, this.hls_.tech_.playbackRate()) - 1;
                    if (n <= a) return !1;
                    var s = function(t) {
                        var e = t.master,
                            i = t.currentTime,
                            r = t.bandwidth,
                            n = t.duration,
                            a = t.segmentDuration,
                            s = t.timeUntilRebuffer,
                            o = t.currentTimeline,
                            u = t.syncController,
                            l = e.playlists.filter((function(t) {
                                return !ou.isIncompatible(t)
                            })),
                            c = l.filter(ou.isEnabled);
                        c.length || (c = l.filter((function(t) {
                            return !ou.isDisabled(t)
                        })));
                        var h = c.filter(ou.hasAttribute.bind(null, "BANDWIDTH")).map((function(t) {
                                var e = u.getSyncPoint(t, n, o, i) ? 1 : 2;
                                return {
                                    playlist: t,
                                    rebufferingImpact: ou.estimateSegmentRequestTime(a, r, t) * e - s
                                }
                            })),
                            d = h.filter((function(t) {
                                return t.rebufferingImpact <= 0
                            }));
                        return gl(d, (function(t, e) {
                            return yl(e.playlist, t.playlist)
                        })), d.length ? d[0] : (gl(h, (function(t, e) {
                            return t.rebufferingImpact - e.rebufferingImpact
                        })), h[0] || null)
                    }({
                        master: this.hls_.playlists.master,
                        currentTime: e,
                        bandwidth: i,
                        duration: this.duration_(),
                        segmentDuration: r,
                        timeUntilRebuffer: a,
                        currentTimeline: this.currentTimeline_,
                        syncController: this.syncController_
                    });
                    if (s) {
                        var o = n - a - s.rebufferingImpact,
                            u = .5;
                        return a <= 1 / 30 && (u = 1), !s.playlist || s.playlist.uri === this.playlist_.uri || o < u ? !1 : (this.bandwidth = s.playlist.attributes.BANDWIDTH * el.BANDWIDTH_VARIANCE + 1, this.abort(), this.trigger("earlyabort"), !0)
                    }
                }
            }, {
                key: "handleProgress_",
                value: function(t, e) {
                    this.pendingSegment_ && e.requestId === this.pendingSegment_.requestId && !this.abortRequestEarly_(e.stats) && this.trigger("progress")
                }
            }, {
                key: "loadSegment_",
                value: function(t) {
                    this.state = "WAITING", this.pendingSegment_ = t, this.trimBackBuffer_(t), t.abortRequests = cl(this.hls_.xhr, this.xhrOptions_, this.decrypter_, this.createSimplifiedSegmentObj_(t), this.handleProgress_.bind(this), this.segmentRequestFinished_.bind(this))
                }
            }, {
                key: "trimBackBuffer_",
                value: function(t) {
                    var e = function(t, e, i) {
                        var r = void 0;
                        return r = t.length && t.start(0) > 0 && t.start(0) < e ? t.start(0) : e - 30, Math.min(r, e - i)
                    }(this.seekable_(), this.currentTime_(), this.playlist_.targetDuration || 10);
                    e > 0 && this.remove(0, e)
                }
            }, {
                key: "createSimplifiedSegmentObj_",
                value: function(t) {
                    var e = t.segment,
                        i = {
                            resolvedUri: e.resolvedUri,
                            byterange: e.byterange,
                            requestId: t.requestId
                        };
                    if (e.key) {
                        var r = e.key.iv || new Uint32Array([0, 0, 0, t.mediaIndex + t.playlist.mediaSequence]);
                        i.key = {
                            resolvedUri: e.key.resolvedUri,
                            iv: r
                        }
                    }
                    return e.map && (i.map = this.initSegment(e.map)), i
                }
            }, {
                key: "segmentRequestFinished_",
                value: function(t, e) {
                    if (this.mediaRequests += 1, e.stats && (this.mediaBytesTransferred += e.stats.bytesReceived, this.mediaTransferDuration += e.stats.roundTripTime), this.pendingSegment_) {
                        if (e.requestId === this.pendingSegment_.requestId) {
                            if (t) return this.pendingSegment_ = null, this.state = "READY", t.code === nl ? void(this.mediaRequestsAborted += 1) : (this.pause(), t.code === rl ? (this.mediaRequestsTimedout += 1, this.bandwidth = 1, this.roundTrip = NaN, void this.trigger("bandwidthupdate")) : (this.mediaRequestsErrored += 1, this.error(t), void this.trigger("error")));
                            this.bandwidth = e.stats.bandwidth, this.roundTrip = e.stats.roundTripTime, e.map && (e.map = this.initSegment(e.map, !0)), this.processSegmentResponse_(e)
                        }
                    } else this.mediaRequestsAborted += 1
                }
            }, {
                key: "processSegmentResponse_",
                value: function(t) {
                    var e = this.pendingSegment_;
                    e.bytes = t.bytes, t.map && (e.segment.map.bytes = t.map.bytes), e.endOfAllRequests = t.endOfAllRequests, this.handleSegment_()
                }
            }, {
                key: "handleSegment_",
                value: function() {
                    var t = this;
                    if (this.pendingSegment_) {
                        var e = this.pendingSegment_,
                            i = e.segment,
                            r = this.syncController_.probeSegmentInfo(e);
                        void 0 === this.startingMedia_ && r && (r.containsAudio || r.containsVideo) && (this.startingMedia_ = {
                            containsAudio: r.containsAudio,
                            containsVideo: r.containsVideo
                        });
                        var n, a, s, o = (n = this.loaderType_, a = this.startingMedia_, s = r, "main" === n && a && s ? s.containsAudio || s.containsVideo ? a.containsVideo && !s.containsVideo ? "Only audio found in segment when we expected video. We can't switch to audio only from a stream that had video. To get rid of this message, please add codec information to the manifest." : !a.containsVideo && s.containsVideo ? "Video found in segment when we expected only audio. We can't switch to a stream with video from an audio only stream. To get rid of this message, please add codec information to the manifest." : null : "Neither audio nor video found in segment." : null);
                        if (o) return this.error({
                            message: o,
                            blacklistDuration: 1 / 0
                        }), void this.trigger("error");
                        if (e.isSyncRequest) return this.trigger("syncinfoupdate"), this.pendingSegment_ = null, void(this.state = "READY");
                        null !== e.timestampOffset && e.timestampOffset !== this.sourceUpdater_.timestampOffset() && (this.sourceUpdater_.timestampOffset(e.timestampOffset), this.trigger("timestampoffset"));
                        var u = this.syncController_.mappingForTimeline(e.timeline);
                        if (null !== u && this.trigger({
                                type: "segmenttimemapping",
                                mapping: u
                            }), this.state = "APPENDING", i.map) {
                            var l = mu(i.map);
                            if (!this.activeInitSegmentId_ || this.activeInitSegmentId_ !== l) {
                                var c = this.initSegment(i.map);
                                this.sourceUpdater_.appendBuffer(c.bytes, (function() {
                                    t.activeInitSegmentId_ = l
                                }))
                            }
                        }
                        e.byteLength = e.bytes.byteLength, "number" == typeof i.start && "number" == typeof i.end ? this.mediaSecondsLoaded += i.end - i.start : this.mediaSecondsLoaded += i.duration, this.logger_(function(t) {
                            var e = t.segment,
                                i = e.start,
                                r = e.end,
                                n = t.playlist,
                                a = n.mediaSequence,
                                s = n.id,
                                o = n.segments,
                                u = void 0 === o ? [] : o,
                                l = t.mediaIndex,
                                c = t.timeline;
                            return ["appending [" + l + "] of [" + a + ", " + (a + u.length) + "] from playlist [" + s + "]", "[" + i + " => " + r + "] in timeline [" + c + "]"].join(" ")
                        }(e)), this.sourceUpdater_.appendBuffer(e.bytes, this.handleUpdateEnd_.bind(this))
                    } else this.state = "READY"
                }
            }, {
                key: "handleUpdateEnd_",
                value: function() {
                    if (!this.pendingSegment_) return this.state = "READY", void(this.paused() || this.monitorBuffer_());
                    var t = this.pendingSegment_,
                        e = t.segment,
                        i = null !== this.mediaIndex;
                    (this.pendingSegment_ = null, this.recordThroughput_(t), this.addSegmentMetadataCue_(t), this.state = "READY", this.mediaIndex = t.mediaIndex, this.fetchAtBuffer_ = !0, this.currentTimeline_ = t.timeline, this.trigger("syncinfoupdate"), e.end && this.currentTime_() - e.end > 3 * t.playlist.targetDuration) ? this.resetEverything(): (i && this.trigger("bandwidthupdate"), this.trigger("progress"), vl(t.playlist, this.mediaSource_, t.mediaIndex + 1) && this.endOfStream(), this.paused() || this.monitorBuffer_())
                }
            }, {
                key: "recordThroughput_",
                value: function(t) {
                    var e = this.throughput.rate,
                        i = Date.now() - t.endOfAllRequests + 1,
                        r = Math.floor(t.byteLength / i * 8 * 1e3);
                    this.throughput.rate += (r - e) / ++this.throughput.count
                }
            }, {
                key: "addSegmentMetadataCue_",
                value: function(t) {
                    if (this.segmentMetadataTrack_) {
                        var e = t.segment,
                            i = e.start,
                            n = e.end;
                        if (_l(i) && _l(n)) {
                            ku(i, n, this.segmentMetadataTrack_);
                            var a = r.WebKitDataCue || r.VTTCue,
                                s = {
                                    bandwidth: t.playlist.attributes.BANDWIDTH,
                                    resolution: t.playlist.attributes.RESOLUTION,
                                    codecs: t.playlist.attributes.CODECS,
                                    byteLength: t.byteLength,
                                    uri: t.uri,
                                    timeline: t.timeline,
                                    playlist: t.playlist.uri,
                                    start: i,
                                    end: n
                                },
                                o = new a(i, n, JSON.stringify(s));
                            o.value = s, this.segmentMetadataTrack_.addCue(o)
                        }
                    }
                }
            }]), e
        }(ka.EventTarget),
        Tl = new Uint8Array("\n\n".split("").map((function(t) {
            return t.charCodeAt(0)
        }))),
        Sl = function(t) {
            return String.fromCharCode.apply(null, t)
        },
        kl = function(t) {
            function e(t) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                xo(this, e);
                var r = Mo(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i));
                return r.mediaSource_ = null, r.subtitlesTrack_ = null, r
            }
            return Ro(e, t), Do(e, [{
                key: "buffered_",
                value: function() {
                    if (!this.subtitlesTrack_ || !this.subtitlesTrack_.cues.length) return ka.createTimeRanges();
                    var t = this.subtitlesTrack_.cues,
                        e = t[0].startTime,
                        i = t[t.length - 1].startTime;
                    return ka.createTimeRanges([
                        [e, i]
                    ])
                }
            }, {
                key: "initSegment",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (!t) return null;
                    var i = mu(t),
                        r = this.initSegments_[i];
                    if (e && !r && t.bytes) {
                        var n = Tl.byteLength + t.bytes.byteLength,
                            a = new Uint8Array(n);
                        a.set(t.bytes), a.set(Tl, t.bytes.byteLength), this.initSegments_[i] = r = {
                            resolvedUri: t.resolvedUri,
                            byterange: t.byterange,
                            bytes: a
                        }
                    }
                    return r || t
                }
            }, {
                key: "couldBeginLoading_",
                value: function() {
                    return this.playlist_ && this.subtitlesTrack_ && !this.paused()
                }
            }, {
                key: "init_",
                value: function() {
                    return this.state = "READY", this.resetEverything(), this.monitorBuffer_()
                }
            }, {
                key: "track",
                value: function(t) {
                    return void 0 === t ? this.subtitlesTrack_ : (this.subtitlesTrack_ = t, "INIT" === this.state && this.couldBeginLoading_() && this.init_(), this.subtitlesTrack_)
                }
            }, {
                key: "remove",
                value: function(t, e) {
                    ku(t, e, this.subtitlesTrack_)
                }
            }, {
                key: "fillBuffer_",
                value: function() {
                    var t = this;
                    this.syncPoint_ || (this.syncPoint_ = this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_()));
                    var e = this.checkBuffer_(this.buffered_(), this.playlist_, this.mediaIndex, this.hasPlayed_(), this.currentTime_(), this.syncPoint_);
                    if (e = this.skipEmptySegments_(e)) {
                        if (null === this.syncController_.timestampOffsetForTimeline(e.timeline)) {
                            return this.syncController_.one("timestampoffset", (function() {
                                t.state = "READY", t.paused() || t.monitorBuffer_()
                            })), void(this.state = "WAITING_ON_TIMELINE")
                        }
                        this.loadSegment_(e)
                    }
                }
            }, {
                key: "skipEmptySegments_",
                value: function(t) {
                    for (; t && t.segment.empty;) t = this.generateSegmentInfo_(t.playlist, t.mediaIndex + 1, t.startOfSegment + t.duration, t.isSyncRequest);
                    return t
                }
            }, {
                key: "handleSegment_",
                value: function() {
                    var t = this;
                    if (this.pendingSegment_ && this.subtitlesTrack_) {
                        this.state = "APPENDING";
                        var e = this.pendingSegment_,
                            i = e.segment;
                        if ("function" != typeof r.WebVTT && this.subtitlesTrack_ && this.subtitlesTrack_.tech_) {
                            var n = function() {
                                t.handleSegment_()
                            };
                            return this.state = "WAITING_ON_VTTJS", this.subtitlesTrack_.tech_.one("vttjsloaded", n), void this.subtitlesTrack_.tech_.one("vttjserror", (function() {
                                t.subtitlesTrack_.tech_.off("vttjsloaded", n), t.error({
                                    message: "Error loading vtt.js"
                                }), t.state = "READY", t.pause(), t.trigger("error")
                            }))
                        }
                        i.requested = !0;
                        try {
                            this.parseVTTCues_(e)
                        } catch (t) {
                            return this.error({
                                message: t.message
                            }), this.state = "READY", this.pause(), this.trigger("error")
                        }
                        if (this.updateTimeMapping_(e, this.syncController_.timelines[e.timeline], this.playlist_), e.isSyncRequest) return this.trigger("syncinfoupdate"), this.pendingSegment_ = null, void(this.state = "READY");
                        e.byteLength = e.bytes.byteLength, this.mediaSecondsLoaded += i.duration, e.cues.length && this.remove(e.cues[0].endTime, e.cues[e.cues.length - 1].endTime), e.cues.forEach((function(e) {
                            t.subtitlesTrack_.addCue(e)
                        })), this.handleUpdateEnd_()
                    } else this.state = "READY"
                }
            }, {
                key: "parseVTTCues_",
                value: function(t) {
                    var e = void 0,
                        i = !1;
                    "function" == typeof r.TextDecoder ? e = new r.TextDecoder("utf8") : (e = r.WebVTT.StringDecoder(), i = !0);
                    var n = new r.WebVTT.Parser(r, r.vttjs, e);
                    if (t.cues = [], t.timestampmap = {
                            MPEGTS: 0,
                            LOCAL: 0
                        }, n.oncue = t.cues.push.bind(t.cues), n.ontimestampmap = function(e) {
                            return t.timestampmap = e
                        }, n.onparsingerror = function(t) {
                            ka.log.warn("Error encountered when parsing cues: " + t.message)
                        }, t.segment.map) {
                        var a = t.segment.map.bytes;
                        i && (a = Sl(a)), n.parse(a)
                    }
                    var s = t.bytes;
                    i && (s = Sl(s)), n.parse(s), n.flush()
                }
            }, {
                key: "updateTimeMapping_",
                value: function(t, e, i) {
                    var r = t.segment;
                    if (e)
                        if (t.cues.length) {
                            var n = t.timestampmap,
                                a = n.MPEGTS / 9e4 - n.LOCAL + e.mapping;
                            if (t.cues.forEach((function(t) {
                                    t.startTime += a, t.endTime += a
                                })), !i.syncInfo) {
                                var s = t.cues[0].startTime,
                                    o = t.cues[t.cues.length - 1].startTime;
                                i.syncInfo = {
                                    mediaSequence: i.mediaSequence + t.mediaIndex,
                                    time: Math.min(s, o - r.duration)
                                }
                            }
                        } else r.empty = !0
                }
            }]), e
        }(bl),
        Cl = function(t, e) {
            for (var i = t.cues, r = 0; r < i.length; r++) {
                var n = i[r];
                if (e >= n.adStartTime && e <= n.adEndTime) return n
            }
            return null
        },
        El = To,
        wl = [{
            name: "VOD",
            run: function(t, e, i, r, n) {
                if (i !== 1 / 0) {
                    return {
                        time: 0,
                        segmentIndex: 0
                    }
                }
                return null
            }
        }, {
            name: "ProgramDateTime",
            run: function(t, e, i, r, n) {
                if (!t.datetimeToDisplayTime) return null;
                var a = e.segments || [],
                    s = null,
                    o = null;
                n = n || 0;
                for (var u = 0; u < a.length; u++) {
                    var l = a[u];
                    if (l.dateTimeObject) {
                        var c = l.dateTimeObject.getTime() / 1e3 + t.datetimeToDisplayTime,
                            h = Math.abs(n - c);
                        if (null !== o && o < h) break;
                        o = h, s = {
                            time: c,
                            segmentIndex: u
                        }
                    }
                }
                return s
            }
        }, {
            name: "Segment",
            run: function(t, e, i, r, n) {
                var a = e.segments || [],
                    s = null,
                    o = null;
                n = n || 0;
                for (var u = 0; u < a.length; u++) {
                    var l = a[u];
                    if (l.timeline === r && void 0 !== l.start) {
                        var c = Math.abs(n - l.start);
                        if (null !== o && o < c) break;
                        (!s || null === o || o >= c) && (o = c, s = {
                            time: l.start,
                            segmentIndex: u
                        })
                    }
                }
                return s
            }
        }, {
            name: "Discontinuity",
            run: function(t, e, i, r, n) {
                var a = null;
                if (n = n || 0, e.discontinuityStarts && e.discontinuityStarts.length)
                    for (var s = null, o = 0; o < e.discontinuityStarts.length; o++) {
                        var u = e.discontinuityStarts[o],
                            l = e.discontinuitySequence + o + 1,
                            c = t.discontinuities[l];
                        if (c) {
                            var h = Math.abs(n - c.time);
                            if (null !== s && s < h) break;
                            (!a || null === s || s >= h) && (s = h, a = {
                                time: c.time,
                                segmentIndex: u
                            })
                        }
                    }
                return a
            }
        }, {
            name: "Playlist",
            run: function(t, e, i, r, n) {
                return e.syncInfo ? {
                    time: e.syncInfo.time,
                    segmentIndex: e.syncInfo.mediaSequence - e.mediaSequence
                } : null
            }
        }],
        Al = function(t) {
            function e() {
                xo(this, e);
                var t = Mo(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return t.inspectCache_ = void 0, t.timelines = [], t.discontinuities = [], t.datetimeToDisplayTime = null, t.logger_ = Ju("SyncController"), t
            }
            return Ro(e, t), Do(e, [{
                key: "getSyncPoint",
                value: function(t, e, i, r) {
                    var n = this.runStrategies_(t, e, i, r);
                    return n.length ? this.selectSyncPoint_(n, {
                        key: "time",
                        value: r
                    }) : null
                }
            }, {
                key: "getExpiredTime",
                value: function(t, e) {
                    if (!t || !t.segments) return null;
                    var i = this.runStrategies_(t, e, t.discontinuitySequence, 0);
                    if (!i.length) return null;
                    var r = this.selectSyncPoint_(i, {
                        key: "segmentIndex",
                        value: 0
                    });
                    return r.segmentIndex > 0 && (r.time *= -1), Math.abs(r.time + $o(t, r.segmentIndex, 0))
                }
            }, {
                key: "runStrategies_",
                value: function(t, e, i, r) {
                    for (var n = [], a = 0; a < wl.length; a++) {
                        var s = wl[a],
                            o = s.run(this, t, e, i, r);
                        o && (o.strategy = s.name, n.push({
                            strategy: s.name,
                            syncPoint: o
                        }))
                    }
                    return n
                }
            }, {
                key: "selectSyncPoint_",
                value: function(t, e) {
                    for (var i = t[0].syncPoint, r = Math.abs(t[0].syncPoint[e.key] - e.value), n = t[0].strategy, a = 1; a < t.length; a++) {
                        var s = Math.abs(t[a].syncPoint[e.key] - e.value);
                        s < r && (r = s, i = t[a].syncPoint, n = t[a].strategy)
                    }
                    return this.logger_("syncPoint for [" + e.key + ": " + e.value + "] chosen with strategy [" + n + "]: [time:" + i.time + ", segmentIndex:" + i.segmentIndex + "]"), i
                }
            }, {
                key: "saveExpiredSegmentInfo",
                value: function(t, e) {
                    for (var i = e.mediaSequence - t.mediaSequence - 1; i >= 0; i--) {
                        var r = t.segments[i];
                        if (r && void 0 !== r.start) {
                            e.syncInfo = {
                                mediaSequence: t.mediaSequence + i,
                                time: r.start
                            }, this.logger_("playlist refresh sync: [time:" + e.syncInfo.time + ", mediaSequence: " + e.syncInfo.mediaSequence + "]"), this.trigger("syncinfoupdate");
                            break
                        }
                    }
                }
            }, {
                key: "setDateTimeMapping",
                value: function(t) {
                    if (!this.datetimeToDisplayTime && t.segments && t.segments.length && t.segments[0].dateTimeObject) {
                        var e = t.segments[0].dateTimeObject.getTime() / 1e3;
                        this.datetimeToDisplayTime = -e
                    }
                }
            }, {
                key: "reset",
                value: function() {
                    this.inspectCache_ = void 0
                }
            }, {
                key: "probeSegmentInfo",
                value: function(t) {
                    var e = t.segment,
                        i = t.playlist,
                        r = void 0;
                    return (r = e.map ? this.probeMp4Segment_(t) : this.probeTsSegment_(t)) && this.calculateSegmentTimeMapping_(t, r) && (this.saveDiscontinuitySyncInfo_(t), i.syncInfo || (i.syncInfo = {
                        mediaSequence: i.mediaSequence + t.mediaIndex,
                        time: e.start
                    })), r
                }
            }, {
                key: "probeMp4Segment_",
                value: function(t) {
                    var e = t.segment,
                        i = Ls(e.map.bytes),
                        r = Ps(i, t.bytes);
                    return null !== t.timestampOffset && (t.timestampOffset -= r), {
                        start: r,
                        end: r + e.duration
                    }
                }
            }, {
                key: "probeTsSegment_",
                value: function(t) {
                    var e = El(t.bytes, this.inspectCache_),
                        i = void 0,
                        r = void 0;
                    return e ? (e.video && 2 === e.video.length ? (this.inspectCache_ = e.video[1].dts, i = e.video[0].dtsTime, r = e.video[1].dtsTime) : e.audio && 2 === e.audio.length && (this.inspectCache_ = e.audio[1].dts, i = e.audio[0].dtsTime, r = e.audio[1].dtsTime), {
                        start: i,
                        end: r,
                        containsVideo: e.video && 2 === e.video.length,
                        containsAudio: e.audio && 2 === e.audio.length
                    }) : null
                }
            }, {
                key: "timestampOffsetForTimeline",
                value: function(t) {
                    return void 0 === this.timelines[t] ? null : this.timelines[t].time
                }
            }, {
                key: "mappingForTimeline",
                value: function(t) {
                    return void 0 === this.timelines[t] ? null : this.timelines[t].mapping
                }
            }, {
                key: "calculateSegmentTimeMapping_",
                value: function(t, e) {
                    var i = t.segment,
                        r = this.timelines[t.timeline];
                    if (null !== t.timestampOffset) r = {
                        time: t.startOfSegment,
                        mapping: t.startOfSegment - e.start
                    }, this.timelines[t.timeline] = r, this.trigger("timestampoffset"), this.logger_("time mapping for timeline " + t.timeline + ": [time: " + r.time + "] [mapping: " + r.mapping + "]"), i.start = t.startOfSegment, i.end = e.end + r.mapping;
                    else {
                        if (!r) return !1;
                        i.start = e.start + r.mapping, i.end = e.end + r.mapping
                    }
                    return !0
                }
            }, {
                key: "saveDiscontinuitySyncInfo_",
                value: function(t) {
                    var e = t.playlist,
                        i = t.segment;
                    if (i.discontinuity) this.discontinuities[i.timeline] = {
                        time: i.start,
                        accuracy: 0
                    };
                    else if (e.discontinuityStarts && e.discontinuityStarts.length)
                        for (var r = 0; r < e.discontinuityStarts.length; r++) {
                            var n = e.discontinuityStarts[r],
                                a = e.discontinuitySequence + r + 1,
                                s = n - t.mediaIndex,
                                o = Math.abs(s);
                            if (!this.discontinuities[a] || this.discontinuities[a].accuracy > o) {
                                var u = void 0;
                                u = s < 0 ? i.start - $o(e, t.mediaIndex, n) : i.end + $o(e, t.mediaIndex + 1, n), this.discontinuities[a] = {
                                    time: u,
                                    accuracy: o
                                }
                            }
                        }
                }
            }]), e
        }(ka.EventTarget),
        Ll = new Iu("./decrypter-worker.worker.js", (function(t, e) {
            var i = this;
            ! function() {
                var e = void 0 !== t ? t : "undefined" != typeof global ? global : void 0 !== i ? i : {},
                    r = void 0 !== t ? t : void 0 !== e ? e : void 0 !== i ? i : {};
                var n = function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    },
                    a = function() {
                        function t(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var r = e[i];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function(e, i, r) {
                            return i && t(e.prototype, i), r && t(e, r), e
                        }
                    }(),
                    s = null,
                    o = function() {
                        function t(e) {
                            n(this, t), s || (s = function() {
                                var t = [
                                        [
                                            [],
                                            [],
                                            [],
                                            [],
                                            []
                                        ],
                                        [
                                            [],
                                            [],
                                            [],
                                            [],
                                            []
                                        ]
                                    ],
                                    e = t[0],
                                    i = t[1],
                                    r = e[4],
                                    n = i[4],
                                    a = void 0,
                                    s = void 0,
                                    o = void 0,
                                    u = [],
                                    l = [],
                                    c = void 0,
                                    h = void 0,
                                    d = void 0,
                                    p = void 0,
                                    f = void 0;
                                for (a = 0; a < 256; a++) l[(u[a] = a << 1 ^ 283 * (a >> 7)) ^ a] = a;
                                for (s = o = 0; !r[s]; s ^= c || 1, o = l[o] || 1)
                                    for (d = (d = o ^ o << 1 ^ o << 2 ^ o << 3 ^ o << 4) >> 8 ^ 255 & d ^ 99, r[s] = d, n[d] = s, f = 16843009 * u[h = u[c = u[s]]] ^ 65537 * h ^ 257 * c ^ 16843008 * s, p = 257 * u[d] ^ 16843008 * d, a = 0; a < 4; a++) e[a][s] = p = p << 24 ^ p >>> 8, i[a][d] = f = f << 24 ^ f >>> 8;
                                for (a = 0; a < 5; a++) e[a] = e[a].slice(0), i[a] = i[a].slice(0);
                                return t
                            }()), this._tables = [
                                [s[0][0].slice(), s[0][1].slice(), s[0][2].slice(), s[0][3].slice(), s[0][4].slice()],
                                [s[1][0].slice(), s[1][1].slice(), s[1][2].slice(), s[1][3].slice(), s[1][4].slice()]
                            ];
                            var i = void 0,
                                r = void 0,
                                a = void 0,
                                o = void 0,
                                u = void 0,
                                l = this._tables[0][4],
                                c = this._tables[1],
                                h = e.length,
                                d = 1;
                            if (4 !== h && 6 !== h && 8 !== h) throw new Error("Invalid aes key size");
                            for (o = e.slice(0), u = [], this._key = [o, u], i = h; i < 4 * h + 28; i++) a = o[i - 1], (i % h == 0 || 8 === h && i % h == 4) && (a = l[a >>> 24] << 24 ^ l[a >> 16 & 255] << 16 ^ l[a >> 8 & 255] << 8 ^ l[255 & a], i % h == 0 && (a = a << 8 ^ a >>> 24 ^ d << 24, d = d << 1 ^ 283 * (d >> 7))), o[i] = o[i - h] ^ a;
                            for (r = 0; i; r++, i--) a = o[3 & r ? i : i - 4], u[r] = i <= 4 || r < 4 ? a : c[0][l[a >>> 24]] ^ c[1][l[a >> 16 & 255]] ^ c[2][l[a >> 8 & 255]] ^ c[3][l[255 & a]]
                        }
                        return t.prototype.decrypt = function(t, e, i, r, n, a) {
                            var s = this._key[1],
                                o = t ^ s[0],
                                u = r ^ s[1],
                                l = i ^ s[2],
                                c = e ^ s[3],
                                h = void 0,
                                d = void 0,
                                p = void 0,
                                f = s.length / 4 - 2,
                                m = void 0,
                                g = 4,
                                y = this._tables[1],
                                v = y[0],
                                _ = y[1],
                                b = y[2],
                                T = y[3],
                                S = y[4];
                            for (m = 0; m < f; m++) h = v[o >>> 24] ^ _[u >> 16 & 255] ^ b[l >> 8 & 255] ^ T[255 & c] ^ s[g], d = v[u >>> 24] ^ _[l >> 16 & 255] ^ b[c >> 8 & 255] ^ T[255 & o] ^ s[g + 1], p = v[l >>> 24] ^ _[c >> 16 & 255] ^ b[o >> 8 & 255] ^ T[255 & u] ^ s[g + 2], c = v[c >>> 24] ^ _[o >> 16 & 255] ^ b[u >> 8 & 255] ^ T[255 & l] ^ s[g + 3], g += 4, o = h, u = d, l = p;
                            for (m = 0; m < 4; m++) n[(3 & -m) + a] = S[o >>> 24] << 24 ^ S[u >> 16 & 255] << 16 ^ S[l >> 8 & 255] << 8 ^ S[255 & c] ^ s[g++], h = o, o = u, u = l, l = c, c = h
                        }, t
                    }(),
                    u = function() {
                        function t() {
                            n(this, t), this.listeners = {}
                        }
                        return t.prototype.on = function(t, e) {
                            this.listeners[t] || (this.listeners[t] = []), this.listeners[t].push(e)
                        }, t.prototype.off = function(t, e) {
                            if (!this.listeners[t]) return !1;
                            var i = this.listeners[t].indexOf(e);
                            return this.listeners[t].splice(i, 1), i > -1
                        }, t.prototype.trigger = function(t) {
                            var e = this.listeners[t];
                            if (e)
                                if (2 === arguments.length)
                                    for (var i = e.length, r = 0; r < i; ++r) e[r].call(this, arguments[1]);
                                else
                                    for (var n = Array.prototype.slice.call(arguments, 1), a = e.length, s = 0; s < a; ++s) e[s].apply(this, n)
                        }, t.prototype.dispose = function() {
                            this.listeners = {}
                        }, t.prototype.pipe = function(t) {
                            this.on("data", (function(e) {
                                t.push(e)
                            }))
                        }, t
                    }(),
                    l = function(t) {
                        function e() {
                            n(this, e);
                            var i = function(t, e) {
                                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !e || "object" !== (void 0 === e ? "undefined" : g(e)) && "function" != typeof e ? t : e
                            }(this, t.call(this, u));
                            return i.jobs = [], i.delay = 1, i.timeout_ = null, i
                        }
                        return function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : g(e)));
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                        }(e, t), e.prototype.processJob_ = function() {
                            this.jobs.shift()(), this.jobs.length ? this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay) : this.timeout_ = null
                        }, e.prototype.push = function(t) {
                            this.jobs.push(t), this.timeout_ || (this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay))
                        }, e
                    }(u),
                    c = function(t) {
                        return t << 24 | (65280 & t) << 8 | (16711680 & t) >> 8 | t >>> 24
                    },
                    h = function() {
                        function t(e, i, r, a) {
                            n(this, t);
                            var s = t.STEP,
                                o = new Int32Array(e.buffer),
                                u = new Uint8Array(e.byteLength),
                                h = 0;
                            for (this.asyncStream_ = new l, this.asyncStream_.push(this.decryptChunk_(o.subarray(h, h + s), i, r, u)), h = s; h < o.length; h += s) r = new Uint32Array([c(o[h - 4]), c(o[h - 3]), c(o[h - 2]), c(o[h - 1])]), this.asyncStream_.push(this.decryptChunk_(o.subarray(h, h + s), i, r, u));
                            this.asyncStream_.push((function() {
                                var t;
                                a(null, (t = u).subarray(0, t.byteLength - t[t.byteLength - 1]))
                            }))
                        }
                        return t.prototype.decryptChunk_ = function(t, e, i, r) {
                            return function() {
                                var n = function(t, e, i) {
                                    var r = new Int32Array(t.buffer, t.byteOffset, t.byteLength >> 2),
                                        n = new o(Array.prototype.slice.call(e)),
                                        a = new Uint8Array(t.byteLength),
                                        s = new Int32Array(a.buffer),
                                        u = void 0,
                                        l = void 0,
                                        h = void 0,
                                        d = void 0,
                                        p = void 0,
                                        f = void 0,
                                        m = void 0,
                                        g = void 0,
                                        y = void 0;
                                    for (u = i[0], l = i[1], h = i[2], d = i[3], y = 0; y < r.length; y += 4) p = c(r[y]), f = c(r[y + 1]), m = c(r[y + 2]), g = c(r[y + 3]), n.decrypt(p, f, m, g, s, y), s[y] = c(s[y] ^ u), s[y + 1] = c(s[y + 1] ^ l), s[y + 2] = c(s[y + 2] ^ h), s[y + 3] = c(s[y + 3] ^ d), u = p, l = f, h = m, d = g;
                                    return a
                                }(t, e, i);
                                r.set(n, t.byteOffset)
                            }
                        }, a(t, null, [{
                            key: "STEP",
                            get: function() {
                                return 32e3
                            }
                        }]), t
                    }();
                new function(t) {
                    t.onmessage = function(t) {
                        var e = t.data,
                            i = new Uint8Array(e.encrypted.bytes, e.encrypted.byteOffset, e.encrypted.byteLength),
                            n = new Uint32Array(e.key.bytes, e.key.byteOffset, e.key.byteLength / 4),
                            a = new Uint32Array(e.iv.bytes, e.iv.byteOffset, e.iv.byteLength / 4);
                        new h(i, n, a, (function(t, i) {
                            var n, a;
                            r.postMessage((n = {
                                source: e.source,
                                decrypted: i
                            }, a = {}, Object.keys(n).forEach((function(t) {
                                var e = n[t];
                                ArrayBuffer.isView(e) ? a[t] = {
                                    bytes: e.buffer,
                                    byteOffset: e.byteOffset,
                                    byteLength: e.byteLength
                                } : a[t] = e
                            })), a), [i.buffer])
                        }))
                    }
                }(i)
            }()
        })),
        Pl = function(t) {
            var e = t.default ? "main" : "alternative";
            return t.characteristics && t.characteristics.indexOf("public.accessibility.describes-video") >= 0 && (e = "main-desc"), e
        },
        Ol = function(t, e) {
            t.abort(), t.pause(), e && e.activePlaylistLoader && (e.activePlaylistLoader.pause(), e.activePlaylistLoader = null)
        },
        Il = function(t, e) {
            e.activePlaylistLoader = t, t.load()
        },
        xl = {
            AUDIO: function(t, e) {
                return function() {
                    var i = e.segmentLoaders[t],
                        r = e.mediaTypes[t],
                        n = e.blacklistCurrentPlaylist;
                    Ol(i, r);
                    var a = r.activeTrack(),
                        s = r.activeGroup(),
                        o = (s.filter((function(t) {
                            return t.default
                        }))[0] || s[0]).id,
                        u = r.tracks[o];
                    if (a !== u) {
                        for (var l in ka.log.warn("Problem encountered loading the alternate audio track.Switching back to default."), r.tracks) r.tracks[l].enabled = r.tracks[l] === u;
                        r.onTrackChanged()
                    } else n({
                        message: "Problem encountered loading the default audio track."
                    })
                }
            },
            SUBTITLES: function(t, e) {
                return function() {
                    var i = e.segmentLoaders[t],
                        r = e.mediaTypes[t];
                    ka.log.warn("Problem encountered loading the subtitle track.Disabling subtitle track."), Ol(i, r);
                    var n = r.activeTrack();
                    n && (n.mode = "disabled"), r.onTrackChanged()
                }
            }
        },
        Dl = {
            AUDIO: function(t, e, i) {
                if (e) {
                    var r = i.tech,
                        n = i.requestOptions,
                        a = i.segmentLoaders[t];
                    e.on("loadedmetadata", (function() {
                        var t = e.media();
                        a.playlist(t, n), (!r.paused() || t.endList && "none" !== r.preload()) && a.load()
                    })), e.on("loadedplaylist", (function() {
                        a.playlist(e.media(), n), r.paused() || a.load()
                    })), e.on("error", xl[t](t, i))
                }
            },
            SUBTITLES: function(t, e, i) {
                var r = i.tech,
                    n = i.requestOptions,
                    a = i.segmentLoaders[t],
                    s = i.mediaTypes[t];
                e.on("loadedmetadata", (function() {
                    var t = e.media();
                    a.playlist(t, n), a.track(s.activeTrack()), (!r.paused() || t.endList && "none" !== r.preload()) && a.load()
                })), e.on("loadedplaylist", (function() {
                    a.playlist(e.media(), n), r.paused() || a.load()
                })), e.on("error", xl[t](t, i))
            }
        },
        Rl = function(t, e) {
            return function(i) {
                return i.attributes[t] === e
            }
        },
        Ml = function(t) {
            return function(e) {
                return e.resolvedUri === t
            }
        },
        Ul = {
            AUDIO: function(t, e) {
                var i = e.hls,
                    r = e.sourceType,
                    n = e.segmentLoaders[t],
                    a = e.requestOptions.withCredentials,
                    s = e.master,
                    o = s.mediaGroups,
                    u = s.playlists,
                    l = e.mediaTypes[t],
                    c = l.groups,
                    h = l.tracks,
                    d = e.masterPlaylistLoader;
                for (var p in o[t] && 0 !== Object.keys(o[t]).length || (o[t] = {
                        main: {
                            default: {
                                default: !0
                            }
                        }
                    }), o[t]) {
                    c[p] || (c[p] = []);
                    var f = u.filter(Rl(t, p));
                    for (var m in o[t][p]) {
                        var g = o[t][p][m];
                        f.filter(Ml(g.resolvedUri)).length && delete g.resolvedUri;
                        var y = void 0;
                        if (y = g.resolvedUri ? new zo(g.resolvedUri, i, a) : g.playlists && "dash" === r ? new Qu(g.playlists[0], i, a, d) : null, g = ka.mergeOptions({
                                id: m,
                                playlistLoader: y
                            }, g), Dl[t](t, g.playlistLoader, e), c[p].push(g), void 0 === h[m]) {
                            var v = new ka.AudioTrack({
                                id: m,
                                kind: Pl(g),
                                enabled: !1,
                                language: g.language,
                                default: g.default,
                                label: m
                            });
                            h[m] = v
                        }
                    }
                }
                n.on("error", xl[t](t, e))
            },
            SUBTITLES: function(t, e) {
                var i = e.tech,
                    r = e.hls,
                    n = e.sourceType,
                    a = e.segmentLoaders[t],
                    s = e.requestOptions.withCredentials,
                    o = e.master.mediaGroups,
                    u = e.mediaTypes[t],
                    l = u.groups,
                    c = u.tracks,
                    h = e.masterPlaylistLoader;
                for (var d in o[t])
                    for (var p in l[d] || (l[d] = []), o[t][d])
                        if (!o[t][d][p].forced) {
                            var f = o[t][d][p],
                                m = void 0;
                            if ("hls" === n ? m = new zo(f.resolvedUri, r, s) : "dash" === n && (m = new Qu(f.playlists[0], r, s, h)), f = ka.mergeOptions({
                                    id: p,
                                    playlistLoader: m
                                }, f), Dl[t](t, f.playlistLoader, e), l[d].push(f), void 0 === c[p]) {
                                var g = i.addRemoteTextTrack({
                                    id: p,
                                    kind: "subtitles",
                                    enabled: !1,
                                    language: f.language,
                                    label: p
                                }, !1).track;
                                c[p] = g
                            }
                        }
                a.on("error", xl[t](t, e))
            },
            "CLOSED-CAPTIONS": function(t, e) {
                var i = e.tech,
                    r = e.master.mediaGroups,
                    n = e.mediaTypes[t],
                    a = n.groups,
                    s = n.tracks;
                for (var o in r[t])
                    for (var u in a[o] || (a[o] = []), r[t][o]) {
                        var l = r[t][o][u];
                        if (l.instreamId.match(/CC\d/) && (a[o].push(ka.mergeOptions({
                                id: u
                            }, l)), void 0 === s[u])) {
                            var c = i.addRemoteTextTrack({
                                id: l.instreamId,
                                kind: "captions",
                                enabled: !1,
                                language: l.language,
                                label: u
                            }, !1).track;
                            s[u] = c
                        }
                    }
            }
        },
        Nl = {
            AUDIO: function(t, e) {
                return function() {
                    var i = e.mediaTypes[t].tracks;
                    for (var r in i)
                        if (i[r].enabled) return i[r];
                    return null
                }
            },
            SUBTITLES: function(t, e) {
                return function() {
                    var i = e.mediaTypes[t].tracks;
                    for (var r in i)
                        if ("showing" === i[r].mode) return i[r];
                    return null
                }
            }
        },
        Bl = function(t) {
            ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach((function(e) {
                Ul[e](e, t)
            }));
            var e = t.mediaTypes,
                i = t.masterPlaylistLoader,
                r = t.tech,
                n = t.hls;
            ["AUDIO", "SUBTITLES"].forEach((function(i) {
                e[i].activeGroup = function(t, e) {
                    return function(i) {
                        var r = e.masterPlaylistLoader,
                            n = e.mediaTypes[t].groups,
                            a = r.media();
                        if (!a) return null;
                        var s = null;
                        return a.attributes[t] && (s = n[a.attributes[t]]), s = s || n.main, void 0 === i ? s : null === i ? null : s.filter((function(t) {
                            return t.id === i.id
                        }))[0] || null
                    }
                }(i, t), e[i].activeTrack = Nl[i](i, t), e[i].onGroupChanged = function(t, e) {
                    return function() {
                        var i = e.segmentLoaders,
                            r = i[t],
                            n = i.main,
                            a = e.mediaTypes[t],
                            s = a.activeTrack(),
                            o = a.activeGroup(s),
                            u = a.activePlaylistLoader;
                        Ol(r, a), o && (o.playlistLoader ? (r.resyncLoader(), Il(o.playlistLoader, a)) : u && n.resetEverything())
                    }
                }(i, t), e[i].onTrackChanged = function(t, e) {
                    return function() {
                        var i = e.segmentLoaders,
                            r = i[t],
                            n = i.main,
                            a = e.mediaTypes[t],
                            s = a.activeTrack(),
                            o = a.activeGroup(s),
                            u = a.activePlaylistLoader;
                        Ol(r, a), o && (o.playlistLoader ? u !== o.playlistLoader ? (r.track && r.track(s), r.resetEverything(), Il(o.playlistLoader, a)) : Il(o.playlistLoader, a) : n.resetEverything())
                    }
                }(i, t)
            }));
            var a = e.AUDIO.activeGroup(),
                s = (a.filter((function(t) {
                    return t.default
                }))[0] || a[0]).id;
            e.AUDIO.tracks[s].enabled = !0, e.AUDIO.onTrackChanged(), i.on("mediachange", (function() {
                ["AUDIO", "SUBTITLES"].forEach((function(t) {
                    return e[t].onGroupChanged()
                }))
            }));
            var o = function() {
                e.AUDIO.onTrackChanged(), r.trigger({
                    type: "usage",
                    name: "hls-audio-change"
                })
            };
            for (var u in r.audioTracks().addEventListener("change", o), r.remoteTextTracks().addEventListener("change", e.SUBTITLES.onTrackChanged), n.on("dispose", (function() {
                    r.audioTracks().removeEventListener("change", o), r.remoteTextTracks().removeEventListener("change", e.SUBTITLES.onTrackChanged)
                })), r.clearTracks("audio"), e.AUDIO.tracks) r.audioTracks().addTrack(e.AUDIO.tracks[u])
        },
        jl = void 0,
        Fl = ["mediaRequests", "mediaRequestsAborted", "mediaRequestsTimedout", "mediaRequestsErrored", "mediaTransferDuration", "mediaBytesTransferred"],
        Hl = function(t) {
            return this.audioSegmentLoader_[t] + this.mainSegmentLoader_[t]
        },
        Vl = function(t) {
            function e(t) {
                xo(this, e);
                var i, r = Mo(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this)),
                    n = t.url,
                    a = t.withCredentials,
                    s = t.tech,
                    o = t.bandwidth,
                    u = t.externHls,
                    l = t.useCueTags,
                    c = t.blacklistDuration,
                    h = t.enableLowInitialPlaylist,
                    d = t.sourceType;
                if (!n) throw new Error("A non-empty playlist URL is required");
                jl = u, r.withCredentials = a, r.tech_ = s, r.hls_ = s.hls, r.sourceType_ = d, r.useCueTags_ = l, r.blacklistDuration = c, r.enableLowInitialPlaylist = h, r.useCueTags_ && (r.cueTagsTrack_ = r.tech_.addTextTrack("metadata", "ad-cues"), r.cueTagsTrack_.inBandMetadataTrackDispatchType = ""), r.requestOptions_ = {
                    withCredentials: r.withCredentials,
                    timeout: null
                }, r.mediaTypes_ = (i = {}, ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach((function(t) {
                    i[t] = {
                        groups: {},
                        tracks: {},
                        activePlaylistLoader: null,
                        activeGroup: Zu,
                        activeTrack: Zu,
                        onGroupChanged: Zu,
                        onTrackChanged: Zu
                    }
                })), i), r.mediaSource = new ka.MediaSource, r.mediaSource.addEventListener("sourceopen", r.handleSourceOpen_.bind(r)), r.seekable_ = ka.createTimeRanges(), r.hasPlayed_ = function() {
                    return !1
                }, r.syncController_ = new Al(t), r.segmentMetadataTrack_ = s.addRemoteTextTrack({
                    kind: "metadata",
                    label: "segment-metadata"
                }, !1).track, r.decrypter_ = new Ll;
                var p = {
                    hls: r.hls_,
                    mediaSource: r.mediaSource,
                    currentTime: r.tech_.currentTime.bind(r.tech_),
                    seekable: function() {
                        return r.seekable()
                    },
                    seeking: function() {
                        return r.tech_.seeking()
                    },
                    duration: function() {
                        return r.mediaSource.duration
                    },
                    hasPlayed: function() {
                        return r.hasPlayed_()
                    },
                    goalBufferLength: function() {
                        return r.goalBufferLength()
                    },
                    bandwidth: o,
                    syncController: r.syncController_,
                    decrypter: r.decrypter_,
                    sourceType: r.sourceType_
                };
                return r.masterPlaylistLoader_ = "dash" === r.sourceType_ ? new Qu(n, r.hls_, r.withCredentials) : new zo(n, r.hls_, r.withCredentials), r.setupMasterPlaylistLoaderListeners_(), r.mainSegmentLoader_ = new bl(ka.mergeOptions(p, {
                    segmentMetadataTrack: r.segmentMetadataTrack_,
                    loaderType: "main"
                }), t), r.audioSegmentLoader_ = new bl(ka.mergeOptions(p, {
                    loaderType: "audio"
                }), t), r.subtitleSegmentLoader_ = new kl(ka.mergeOptions(p, {
                    loaderType: "vtt"
                }), t), r.setupSegmentLoaderListeners_(), Fl.forEach((function(t) {
                    r[t + "_"] = Hl.bind(r, t)
                })), r.logger_ = Ju("MPC"), r.masterPlaylistLoader_.load(), r
            }
            return Ro(e, t), Do(e, [{
                key: "setupMasterPlaylistLoaderListeners_",
                value: function() {
                    var t = this;
                    this.masterPlaylistLoader_.on("loadedmetadata", (function() {
                        var e = t.masterPlaylistLoader_.media(),
                            i = 1.5 * t.masterPlaylistLoader_.targetDuration * 1e3;
                        su(t.masterPlaylistLoader_.master, t.masterPlaylistLoader_.media()) ? t.requestOptions_.timeout = 0 : t.requestOptions_.timeout = i, e.endList && "none" !== t.tech_.preload() && (t.mainSegmentLoader_.playlist(e, t.requestOptions_), t.mainSegmentLoader_.load()), Bl({
                            sourceType: t.sourceType_,
                            segmentLoaders: {
                                AUDIO: t.audioSegmentLoader_,
                                SUBTITLES: t.subtitleSegmentLoader_,
                                main: t.mainSegmentLoader_
                            },
                            tech: t.tech_,
                            requestOptions: t.requestOptions_,
                            masterPlaylistLoader: t.masterPlaylistLoader_,
                            hls: t.hls_,
                            master: t.master(),
                            mediaTypes: t.mediaTypes_,
                            blacklistCurrentPlaylist: t.blacklistCurrentPlaylist.bind(t)
                        }), t.triggerPresenceUsage_(t.master(), e);
                        try {
                            t.setupSourceBuffers_()
                        } catch (e) {
                            return ka.log.warn("Failed to create SourceBuffers", e), t.mediaSource.endOfStream("decode")
                        }
                        t.setupFirstPlay(), t.trigger("selectedinitialmedia")
                    })), this.masterPlaylistLoader_.on("loadedplaylist", (function() {
                        var e = t.masterPlaylistLoader_.media();
                        if (!e) {
                            t.excludeUnsupportedVariants_();
                            var i = void 0;
                            return t.enableLowInitialPlaylist && (i = t.selectInitialPlaylist()), i || (i = t.selectPlaylist()), t.initialMedia_ = i, void t.masterPlaylistLoader_.media(t.initialMedia_)
                        }
                        if (t.useCueTags_ && t.updateAdCues_(e), t.mainSegmentLoader_.playlist(e, t.requestOptions_), t.updateDuration(), t.tech_.paused() || t.mainSegmentLoader_.load(), !e.endList) {
                            var r = function() {
                                var e = t.seekable();
                                0 !== e.length && t.mediaSource.addSeekableRange_(e.start(0), e.end(0))
                            };
                            if (t.duration() !== 1 / 0) {
                                t.tech_.one("durationchange", (function e() {
                                    t.duration() === 1 / 0 ? r() : t.tech_.one("durationchange", e)
                                }))
                            } else r()
                        }
                    })), this.masterPlaylistLoader_.on("error", (function() {
                        t.blacklistCurrentPlaylist(t.masterPlaylistLoader_.error)
                    })), this.masterPlaylistLoader_.on("mediachanging", (function() {
                        t.mainSegmentLoader_.abort(), t.mainSegmentLoader_.pause()
                    })), this.masterPlaylistLoader_.on("mediachange", (function() {
                        var e = t.masterPlaylistLoader_.media(),
                            i = 1.5 * t.masterPlaylistLoader_.targetDuration * 1e3;
                        su(t.masterPlaylistLoader_.master, t.masterPlaylistLoader_.media()) ? t.requestOptions_.timeout = 0 : t.requestOptions_.timeout = i, t.mainSegmentLoader_.playlist(e, t.requestOptions_), t.mainSegmentLoader_.load(), t.tech_.trigger({
                            type: "mediachange",
                            bubbles: !0
                        })
                    })), this.masterPlaylistLoader_.on("playlistunchanged", (function() {
                        var e = t.masterPlaylistLoader_.media();
                        t.stuckAtPlaylistEnd_(e) && (t.blacklistCurrentPlaylist({
                            message: "Playlist no longer updating."
                        }), t.tech_.trigger("playliststuck"))
                    })), this.masterPlaylistLoader_.on("renditiondisabled", (function() {
                        t.tech_.trigger({
                            type: "usage",
                            name: "hls-rendition-disabled"
                        })
                    })), this.masterPlaylistLoader_.on("renditionenabled", (function() {
                        t.tech_.trigger({
                            type: "usage",
                            name: "hls-rendition-enabled"
                        })
                    }))
                }
            }, {
                key: "triggerPresenceUsage_",
                value: function(t, e) {
                    var i = t.mediaGroups || {},
                        r = !0,
                        n = Object.keys(i.AUDIO);
                    for (var a in i.AUDIO)
                        for (var s in i.AUDIO[a]) {
                            i.AUDIO[a][s].uri || (r = !1)
                        }
                    r && this.tech_.trigger({
                        type: "usage",
                        name: "hls-demuxed"
                    }), Object.keys(i.SUBTITLES).length && this.tech_.trigger({
                        type: "usage",
                        name: "hls-webvtt"
                    }), jl.Playlist.isAes(e) && this.tech_.trigger({
                        type: "usage",
                        name: "hls-aes"
                    }), jl.Playlist.isFmp4(e) && this.tech_.trigger({
                        type: "usage",
                        name: "hls-fmp4"
                    }), n.length && Object.keys(i.AUDIO[n[0]]).length > 1 && this.tech_.trigger({
                        type: "usage",
                        name: "hls-alternate-audio"
                    }), this.useCueTags_ && this.tech_.trigger({
                        type: "usage",
                        name: "hls-playlist-cue-tags"
                    })
                }
            }, {
                key: "setupSegmentLoaderListeners_",
                value: function() {
                    var t = this;
                    this.mainSegmentLoader_.on("bandwidthupdate", (function() {
                        var e = t.selectPlaylist(),
                            i = t.masterPlaylistLoader_.media(),
                            r = t.tech_.buffered(),
                            n = r.length ? r.end(r.length - 1) - t.tech_.currentTime() : 0,
                            a = t.bufferLowWaterLine();
                        (!i.endList || t.duration() < el.MAX_BUFFER_LOW_WATER_LINE || e.attributes.BANDWIDTH < i.attributes.BANDWIDTH || n >= a) && t.masterPlaylistLoader_.media(e), t.tech_.trigger("bandwidthupdate")
                    })), this.mainSegmentLoader_.on("progress", (function() {
                        t.trigger("progress")
                    })), this.mainSegmentLoader_.on("error", (function() {
                        t.blacklistCurrentPlaylist(t.mainSegmentLoader_.error())
                    })), this.mainSegmentLoader_.on("syncinfoupdate", (function() {
                        t.onSyncInfoUpdate_()
                    })), this.mainSegmentLoader_.on("timestampoffset", (function() {
                        t.tech_.trigger({
                            type: "usage",
                            name: "hls-timestamp-offset"
                        })
                    })), this.audioSegmentLoader_.on("syncinfoupdate", (function() {
                        t.onSyncInfoUpdate_()
                    })), this.mainSegmentLoader_.on("ended", (function() {
                        t.onEndOfStream()
                    })), this.mainSegmentLoader_.on("earlyabort", (function() {
                        t.blacklistCurrentPlaylist({
                            message: "Aborted early because there isn't enough bandwidth to complete the request without rebuffering."
                        }, 120)
                    })), this.mainSegmentLoader_.on("reseteverything", (function() {
                        t.tech_.trigger("hls-reset")
                    })), this.mainSegmentLoader_.on("segmenttimemapping", (function(e) {
                        t.tech_.trigger({
                            type: "hls-segment-time-mapping",
                            mapping: e.mapping
                        })
                    })), this.audioSegmentLoader_.on("ended", (function() {
                        t.onEndOfStream()
                    }))
                }
            }, {
                key: "mediaSecondsLoaded_",
                value: function() {
                    return Math.max(this.audioSegmentLoader_.mediaSecondsLoaded + this.mainSegmentLoader_.mediaSecondsLoaded)
                }
            }, {
                key: "load",
                value: function() {
                    this.mainSegmentLoader_.load(), this.mediaTypes_.AUDIO.activePlaylistLoader && this.audioSegmentLoader_.load(), this.mediaTypes_.SUBTITLES.activePlaylistLoader && this.subtitleSegmentLoader_.load()
                }
            }, {
                key: "fastQualityChange_",
                value: function() {
                    var t = this.selectPlaylist();
                    t !== this.masterPlaylistLoader_.media() && (this.masterPlaylistLoader_.media(t), this.mainSegmentLoader_.resetLoader())
                }
            }, {
                key: "play",
                value: function() {
                    if (!this.setupFirstPlay()) {
                        this.tech_.ended() && this.tech_.setCurrentTime(0), this.hasPlayed_() && this.load();
                        var t = this.tech_.seekable();
                        return this.tech_.duration() === 1 / 0 && this.tech_.currentTime() < t.start(0) ? this.tech_.setCurrentTime(t.end(t.length - 1)) : void 0
                    }
                }
            }, {
                key: "setupFirstPlay",
                value: function() {
                    var t = this,
                        e = this.masterPlaylistLoader_.media();
                    if (!e || this.tech_.paused() || this.hasPlayed_()) return !1;
                    if (!e.endList) {
                        var i = this.seekable();
                        if (!i.length) return !1;
                        if (ka.browser.IE_VERSION && 0 === this.tech_.readyState()) return this.tech_.one("loadedmetadata", (function() {
                            t.trigger("firstplay"), t.tech_.setCurrentTime(i.end(0)), t.hasPlayed_ = function() {
                                return !0
                            }
                        })), !1;
                        this.trigger("firstplay"), this.tech_.setCurrentTime(i.end(0))
                    }
                    return this.hasPlayed_ = function() {
                        return !0
                    }, this.load(), !0
                }
            }, {
                key: "handleSourceOpen_",
                value: function() {
                    try {
                        this.setupSourceBuffers_()
                    } catch (t) {
                        return ka.log.warn("Failed to create Source Buffers", t), this.mediaSource.endOfStream("decode")
                    }
                    if (this.tech_.autoplay()) {
                        var t = this.tech_.play();
                        void 0 !== t && "function" == typeof t.then && t.then(null, (function(t) {}))
                    }
                    this.trigger("sourceopen")
                }
            }, {
                key: "onEndOfStream",
                value: function() {
                    var t = this.mainSegmentLoader_.ended_;
                    this.mediaTypes_.AUDIO.activePlaylistLoader && (t = !this.mainSegmentLoader_.startingMedia_ || this.mainSegmentLoader_.startingMedia_.containsVideo ? t && this.audioSegmentLoader_.ended_ : this.audioSegmentLoader_.ended_), t && this.mediaSource.endOfStream()
                }
            }, {
                key: "stuckAtPlaylistEnd_",
                value: function(t) {
                    if (!this.seekable().length) return !1;
                    var e = this.syncController_.getExpiredTime(t, this.mediaSource.duration);
                    if (null === e) return !1;
                    var i = jl.Playlist.playlistEnd(t, e),
                        r = this.tech_.currentTime(),
                        n = this.tech_.buffered();
                    if (!n.length) return i - r <= .1;
                    var a = n.end(n.length - 1);
                    return a - r <= .1 && i - a <= .1
                }
            }, {
                key: "blacklistCurrentPlaylist",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = arguments[1],
                        i = void 0,
                        r = void 0;
                    if (i = t.playlist || this.masterPlaylistLoader_.media(), e = e || t.blacklistDuration || this.blacklistDuration, !i) {
                        this.error = t;
                        try {
                            return this.mediaSource.endOfStream("network")
                        } catch (t) {
                            return this.trigger("error")
                        }
                    }
                    var n = 1 === this.masterPlaylistLoader_.master.playlists.filter(nu).length;
                    return n ? (ka.log.warn("Problem encountered with the current HLS playlist. Trying again since it is the final playlist."), this.tech_.trigger("retryplaylist"), this.masterPlaylistLoader_.load(n)) : (i.excludeUntil = Date.now() + 1e3 * e, this.tech_.trigger("blacklistplaylist"), this.tech_.trigger({
                        type: "usage",
                        name: "hls-rendition-blacklisted"
                    }), r = this.selectPlaylist(), ka.log.warn("Problem encountered with the current HLS playlist." + (t.message ? " " + t.message : "") + " Switching to another playlist."), this.masterPlaylistLoader_.media(r))
                }
            }, {
                key: "pauseLoading",
                value: function() {
                    this.mainSegmentLoader_.pause(), this.mediaTypes_.AUDIO.activePlaylistLoader && this.audioSegmentLoader_.pause(), this.mediaTypes_.SUBTITLES.activePlaylistLoader && this.subtitleSegmentLoader_.pause()
                }
            }, {
                key: "setCurrentTime",
                value: function(t) {
                    var e = _u(this.tech_.buffered(), t);
                    return this.masterPlaylistLoader_ && this.masterPlaylistLoader_.media() && this.masterPlaylistLoader_.media().segments ? e && e.length ? t : (this.mainSegmentLoader_.resetEverything(), this.mainSegmentLoader_.abort(), this.mediaTypes_.AUDIO.activePlaylistLoader && (this.audioSegmentLoader_.resetEverything(), this.audioSegmentLoader_.abort()), this.mediaTypes_.SUBTITLES.activePlaylistLoader && (this.subtitleSegmentLoader_.resetEverything(), this.subtitleSegmentLoader_.abort()), void this.load()) : 0
                }
            }, {
                key: "duration",
                value: function() {
                    return this.masterPlaylistLoader_ ? this.mediaSource ? this.mediaSource.duration : jl.Playlist.duration(this.masterPlaylistLoader_.media()) : 0
                }
            }, {
                key: "seekable",
                value: function() {
                    return this.seekable_
                }
            }, {
                key: "onSyncInfoUpdate_",
                value: function() {
                    var t = void 0,
                        e = void 0;
                    if (this.masterPlaylistLoader_) {
                        var i = this.masterPlaylistLoader_.media();
                        if (i) {
                            var r = this.syncController_.getExpiredTime(i, this.mediaSource.duration);
                            if (null !== r && 0 !== (t = jl.Playlist.seekable(i, r)).length) {
                                if (this.mediaTypes_.AUDIO.activePlaylistLoader) {
                                    if (i = this.mediaTypes_.AUDIO.activePlaylistLoader.media(), null === (r = this.syncController_.getExpiredTime(i, this.mediaSource.duration))) return;
                                    if (0 === (e = jl.Playlist.seekable(i, r)).length) return
                                }
                                e ? e.start(0) > t.end(0) || t.start(0) > e.end(0) ? this.seekable_ = t : this.seekable_ = ka.createTimeRanges([
                                    [e.start(0) > t.start(0) ? e.start(0) : t.start(0), e.end(0) < t.end(0) ? e.end(0) : t.end(0)]
                                ]) : this.seekable_ = t, this.logger_("seekable updated [" + Tu(this.seekable_) + "]"), this.tech_.trigger("seekablechanged")
                            }
                        }
                    }
                }
            }, {
                key: "updateDuration",
                value: function() {
                    var t = this,
                        e = this.mediaSource.duration,
                        i = jl.Playlist.duration(this.masterPlaylistLoader_.media()),
                        r = this.tech_.buffered(),
                        n = function e() {
                            t.mediaSource.duration = i, t.tech_.trigger("durationchange"), t.mediaSource.removeEventListener("sourceopen", e)
                        };
                    r.length > 0 && (i = Math.max(i, r.end(r.length - 1))), e !== i && ("open" !== this.mediaSource.readyState ? this.mediaSource.addEventListener("sourceopen", n) : n())
                }
            }, {
                key: "dispose",
                value: function() {
                    var t = this;
                    this.decrypter_.terminate(), this.masterPlaylistLoader_.dispose(), this.mainSegmentLoader_.dispose(), ["AUDIO", "SUBTITLES"].forEach((function(e) {
                        var i = t.mediaTypes_[e].groups;
                        for (var r in i) i[r].forEach((function(t) {
                            t.playlistLoader && t.playlistLoader.dispose()
                        }))
                    })), this.audioSegmentLoader_.dispose(), this.subtitleSegmentLoader_.dispose()
                }
            }, {
                key: "master",
                value: function() {
                    return this.masterPlaylistLoader_.master
                }
            }, {
                key: "media",
                value: function() {
                    return this.masterPlaylistLoader_.media() || this.initialMedia_
                }
            }, {
                key: "setupSourceBuffers_",
                value: function() {
                    var t, e = this.masterPlaylistLoader_.media();
                    if (e && "open" === this.mediaSource.readyState) {
                        if ((t = fl(this.masterPlaylistLoader_.master, e)).length < 1) return this.error = "No compatible SourceBuffer configuration for the variant stream:" + e.resolvedUri, this.mediaSource.endOfStream("decode");
                        this.configureLoaderMimeTypes_(t), this.excludeIncompatibleVariants_(e)
                    }
                }
            }, {
                key: "configureLoaderMimeTypes_",
                value: function(t) {
                    var e = t.length > 1 && -1 === t[0].indexOf(",") && t[0] !== t[1] ? new ka.EventTarget : null;
                    this.mainSegmentLoader_.mimeType(t[0], e), t[1] && this.audioSegmentLoader_.mimeType(t[1], e)
                }
            }, {
                key: "excludeUnsupportedVariants_",
                value: function() {
                    this.master().playlists.forEach((function(t) {
                        var e;
                        t.attributes.CODECS && r.MediaSource && r.MediaSource.isTypeSupported && !r.MediaSource.isTypeSupported('video/mp4; codecs="' + (e = t.attributes.CODECS, e.replace(/avc1\.(\d+)\.(\d+)/i, (function(t) {
                            return ju([t])[0]
                        }))) + '"') && (t.excludeUntil = 1 / 0)
                    }))
                }
            }, {
                key: "excludeIncompatibleVariants_",
                value: function(t) {
                    var e = 2,
                        i = null,
                        r = void 0;
                    t.attributes.CODECS && (r = dl(t.attributes.CODECS), i = r.videoCodec, e = r.codecCount), this.master().playlists.forEach((function(t) {
                        var r = {
                            codecCount: 2,
                            videoCodec: null
                        };
                        t.attributes.CODECS && (r = dl(t.attributes.CODECS)), r.codecCount !== e && (t.excludeUntil = 1 / 0), r.videoCodec !== i && (t.excludeUntil = 1 / 0)
                    }))
                }
            }, {
                key: "updateAdCues_",
                value: function(t) {
                    var e = 0,
                        i = this.seekable();
                    i.length && (e = i.start(0)),
                        function(t, e) {
                            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            if (t.segments)
                                for (var n = i, a = void 0, s = 0; s < t.segments.length; s++) {
                                    var o = t.segments[s];
                                    if (a || (a = Cl(e, n + o.duration / 2)), a) {
                                        if ("cueIn" in o) {
                                            a.endTime = n, a.adEndTime = n, n += o.duration, a = null;
                                            continue
                                        }
                                        if (n < a.endTime) {
                                            n += o.duration;
                                            continue
                                        }
                                        a.endTime += o.duration
                                    } else if ("cueOut" in o && ((a = new r.VTTCue(n, n + o.duration, o.cueOut)).adStartTime = n, a.adEndTime = n + parseFloat(o.cueOut), e.addCue(a)), "cueOutCont" in o) {
                                        var u = void 0,
                                            l = void 0,
                                            c = o.cueOutCont.split("/").map(parseFloat),
                                            h = Uo(c, 2);
                                        u = h[0], l = h[1], (a = new r.VTTCue(n, n + o.duration, "")).adStartTime = n - u, a.adEndTime = a.adStartTime + l, e.addCue(a)
                                    }
                                    n += o.duration
                                }
                        }(t, this.cueTagsTrack_, e)
                }
            }, {
                key: "goalBufferLength",
                value: function() {
                    var t = this.tech_.currentTime(),
                        e = el.GOAL_BUFFER_LENGTH,
                        i = el.GOAL_BUFFER_LENGTH_RATE,
                        r = Math.max(e, el.MAX_GOAL_BUFFER_LENGTH);
                    return Math.min(e + t * i, r)
                }
            }, {
                key: "bufferLowWaterLine",
                value: function() {
                    var t = this.tech_.currentTime(),
                        e = el.BUFFER_LOW_WATER_LINE,
                        i = el.BUFFER_LOW_WATER_LINE_RATE,
                        r = Math.max(e, el.MAX_BUFFER_LOW_WATER_LINE);
                    return Math.min(e + t * i, r)
                }
            }]), e
        }(ka.EventTarget),
        ql = function t(e, i, r) {
            xo(this, t);
            var n, a, s, o = e.masterPlaylistController_.fastQualityChange_.bind(e.masterPlaylistController_);
            if (i.attributes.RESOLUTION) {
                var u = i.attributes.RESOLUTION;
                this.width = u.width, this.height = u.height
            }
            this.bandwidth = i.attributes.BANDWIDTH, this.id = r, this.enabled = (n = e.playlists, a = i.uri, s = o, function(t) {
                var e = n.master.playlists[a],
                    i = ru(e),
                    r = nu(e);
                return void 0 === t ? r : (t ? delete e.disabled : e.disabled = !0, t === r || i || (s(), t ? n.trigger("renditionenabled") : n.trigger("renditiondisabled")), t)
            })
        },
        Wl = ["seeking", "seeked", "pause", "playing", "error"],
        zl = function() {
            function t(e) {
                var i = this;
                xo(this, t), this.tech_ = e.tech, this.seekable = e.seekable, this.consecutiveUpdates = 0, this.lastRecordedTime = null, this.timer_ = null, this.checkCurrentTimeTimeout_ = null, this.logger_ = Ju("PlaybackWatcher"), this.logger_("initialize");
                var n = function() {
                        return i.monitorCurrentTime_()
                    },
                    a = function() {
                        return i.techWaiting_()
                    },
                    s = function() {
                        return i.cancelTimer_()
                    },
                    o = function() {
                        return i.fixesBadSeeks_()
                    };
                this.tech_.on("seekablechanged", o), this.tech_.on("waiting", a), this.tech_.on(Wl, s), this.tech_.on("canplay", n), this.dispose = function() {
                    i.logger_("dispose"), i.tech_.off("seekablechanged", o), i.tech_.off("waiting", a), i.tech_.off(Wl, s), i.tech_.off("canplay", n), i.checkCurrentTimeTimeout_ && r.clearTimeout(i.checkCurrentTimeTimeout_), i.cancelTimer_()
                }
            }
            return Do(t, [{
                key: "monitorCurrentTime_",
                value: function() {
                    this.checkCurrentTime_(), this.checkCurrentTimeTimeout_ && r.clearTimeout(this.checkCurrentTimeTimeout_), this.checkCurrentTimeTimeout_ = r.setTimeout(this.monitorCurrentTime_.bind(this), 250)
                }
            }, {
                key: "checkCurrentTime_",
                value: function() {
                    if (this.tech_.seeking() && this.fixesBadSeeks_()) return this.consecutiveUpdates = 0, void(this.lastRecordedTime = this.tech_.currentTime());
                    if (!this.tech_.paused() && !this.tech_.seeking()) {
                        var t = this.tech_.currentTime(),
                            e = this.tech_.buffered();
                        if (this.lastRecordedTime === t && (!e.length || t + .1 >= e.end(e.length - 1))) return this.techWaiting_();
                        this.consecutiveUpdates >= 5 && t === this.lastRecordedTime ? (this.consecutiveUpdates++, this.waiting_()) : t === this.lastRecordedTime ? this.consecutiveUpdates++ : (this.consecutiveUpdates = 0, this.lastRecordedTime = t)
                    }
                }
            }, {
                key: "cancelTimer_",
                value: function() {
                    this.consecutiveUpdates = 0, this.timer_ && (this.logger_("cancelTimer_"), clearTimeout(this.timer_)), this.timer_ = null
                }
            }, {
                key: "fixesBadSeeks_",
                value: function() {
                    var t = this.tech_.seeking(),
                        e = this.seekable(),
                        i = this.tech_.currentTime(),
                        r = void 0;
                    t && this.afterSeekableWindow_(e, i) && (r = e.end(e.length - 1));
                    t && this.beforeSeekableWindow_(e, i) && (r = e.start(0) + .1);
                    return void 0 !== r && (this.logger_("Trying to seek outside of seekable at time " + i + " with seekable range " + Tu(e) + ". Seeking to " + r + "."), this.tech_.setCurrentTime(r), !0)
                }
            }, {
                key: "waiting_",
                value: function() {
                    if (!this.techWaiting_()) {
                        var t = this.tech_.currentTime(),
                            e = this.tech_.buffered(),
                            i = _u(e, t);
                        return i.length && t + 3 <= i.end(0) ? (this.cancelTimer_(), this.tech_.setCurrentTime(t), this.logger_("Stopped at " + t + " while inside a buffered region [" + i.start(0) + " -> " + i.end(0) + "]. Attempting to resume playback by seeking to the current time."), void this.tech_.trigger({
                            type: "usage",
                            name: "hls-unknown-waiting"
                        })) : void 0
                    }
                }
            }, {
                key: "techWaiting_",
                value: function() {
                    var t = this.seekable(),
                        e = this.tech_.currentTime();
                    if (this.tech_.seeking() && this.fixesBadSeeks_()) return !0;
                    if (this.tech_.seeking() || null !== this.timer_) return !0;
                    if (this.beforeSeekableWindow_(t, e)) {
                        var i = t.end(t.length - 1);
                        return this.logger_("Fell out of live window at time " + e + ". Seeking to live point (seekable end) " + i), this.cancelTimer_(), this.tech_.setCurrentTime(i), this.tech_.trigger({
                            type: "usage",
                            name: "hls-live-resync"
                        }), !0
                    }
                    var r = this.tech_.buffered(),
                        n = bu(r, e);
                    if (this.videoUnderflow_(n, r, e)) return this.cancelTimer_(), this.tech_.setCurrentTime(e), this.tech_.trigger({
                        type: "usage",
                        name: "hls-video-underflow"
                    }), !0;
                    if (n.length > 0) {
                        var a = n.start(0) - e;
                        return this.logger_("Stopped at " + e + ", setting timer for " + a + ", seeking to " + n.start(0)), this.timer_ = setTimeout(this.skipTheGap_.bind(this), 1e3 * a, e), !0
                    }
                    return !1
                }
            }, {
                key: "afterSeekableWindow_",
                value: function(t, e) {
                    return !!t.length && e > t.end(t.length - 1) + .1
                }
            }, {
                key: "beforeSeekableWindow_",
                value: function(t, e) {
                    return !!(t.length && t.start(0) > 0 && e < t.start(0) - .1)
                }
            }, {
                key: "videoUnderflow_",
                value: function(t, e, i) {
                    if (0 === t.length) {
                        var r = this.gapFromVideoUnderflow_(e, i);
                        if (r) return this.logger_("Encountered a gap in video from " + r.start + " to " + r.end + ". Seeking to current time " + i), !0
                    }
                    return !1
                }
            }, {
                key: "skipTheGap_",
                value: function(t) {
                    var e = this.tech_.buffered(),
                        i = this.tech_.currentTime(),
                        r = bu(e, i);
                    this.cancelTimer_(), 0 !== r.length && i === t && (this.logger_("skipTheGap_:", "currentTime:", i, "scheduled currentTime:", t, "nextRange start:", r.start(0)), this.tech_.setCurrentTime(r.start(0) + 1 / 30), this.tech_.trigger({
                        type: "usage",
                        name: "hls-gap-skip"
                    }))
                }
            }, {
                key: "gapFromVideoUnderflow_",
                value: function(t, e) {
                    for (var i = function(t) {
                            if (t.length < 2) return ka.createTimeRanges();
                            for (var e = [], i = 1; i < t.length; i++) {
                                var r = t.end(i - 1),
                                    n = t.start(i);
                                e.push([r, n])
                            }
                            return ka.createTimeRanges(e)
                        }(t), r = 0; r < i.length; r++) {
                        var n = i.start(r),
                            a = i.end(r);
                        if (e - n < 4 && e - n > 2) return {
                            start: n,
                            end: a
                        }
                    }
                    return null
                }
            }]), t
        }(),
        Gl = {
            errorInterval: 30,
            getSource: function(t) {
                return t(this.tech({
                    IWillNotUseThisInPlugins: !0
                }).currentSource_)
            }
        },
        Xl = function(t) {
            ! function t(e, i) {
                var r = 0,
                    n = 0,
                    a = ka.mergeOptions(Gl, i);
                e.ready((function() {
                    e.trigger({
                        type: "usage",
                        name: "hls-error-reload-initialized"
                    })
                }));
                var s = function() {
                        n && e.currentTime(n)
                    },
                    o = function(t) {
                        null != t && (n = e.duration() !== 1 / 0 && e.currentTime() || 0, e.one("loadedmetadata", s), e.src(t), e.trigger({
                            type: "usage",
                            name: "hls-error-reload"
                        }), e.play())
                    },
                    u = function() {
                        if (Date.now() - r < 1e3 * a.errorInterval) e.trigger({
                            type: "usage",
                            name: "hls-error-reload-canceled"
                        });
                        else {
                            if (a.getSource && "function" == typeof a.getSource) return r = Date.now(), a.getSource.call(e, o);
                            ka.log.error("ERROR: reloadSourceOnError - The option getSource must be a function!")
                        }
                    },
                    l = function t() {
                        e.off("loadedmetadata", s), e.off("error", u), e.off("dispose", t)
                    };
                e.on("error", u), e.on("dispose", l), e.reloadSourceOnError = function(i) {
                    l(), t(e, i)
                }
            }(this, t)
        },
        Yl = {
            PlaylistLoader: zo,
            Playlist: ou,
            Decrypter: Oo,
            AsyncStream: Ao,
            decrypt: Po,
            utils: yu,
            STANDARD_PLAYLIST_SELECTOR: function() {
                return function(t, e, i, n) {
                    var a = t.playlists.map((function(t) {
                        var e, i;
                        return e = t.attributes.RESOLUTION && t.attributes.RESOLUTION.width, i = t.attributes.RESOLUTION && t.attributes.RESOLUTION.height, {
                            bandwidth: t.attributes.BANDWIDTH || r.Number.MAX_VALUE,
                            width: e,
                            height: i,
                            playlist: t
                        }
                    }));
                    gl(a, (function(t, e) {
                        return t.bandwidth - e.bandwidth
                    }));
                    var s = (a = a.filter((function(t) {
                        return !ou.isIncompatible(t.playlist)
                    }))).filter((function(t) {
                        return ou.isEnabled(t.playlist)
                    }));
                    s.length || (s = a.filter((function(t) {
                        return !ou.isDisabled(t.playlist)
                    })));
                    var o = s.filter((function(t) {
                            return t.bandwidth * el.BANDWIDTH_VARIANCE < e
                        })),
                        u = o[o.length - 1],
                        l = o.filter((function(t) {
                            return t.bandwidth === u.bandwidth
                        }))[0],
                        c = o.filter((function(t) {
                            return t.width && t.height
                        }));
                    gl(c, (function(t, e) {
                        return t.width - e.width
                    }));
                    var h = c.filter((function(t) {
                        return t.width === i && t.height === n
                    }));
                    u = h[h.length - 1];
                    var d = h.filter((function(t) {
                            return t.bandwidth === u.bandwidth
                        }))[0],
                        p = void 0,
                        f = void 0,
                        m = void 0;
                    d || (f = (p = c.filter((function(t) {
                        return t.width > i || t.height > n
                    }))).filter((function(t) {
                        return t.width === p[0].width && t.height === p[0].height
                    })), u = f[f.length - 1], m = f.filter((function(t) {
                        return t.bandwidth === u.bandwidth
                    }))[0]);
                    var g = m || d || l || s[0] || a[0];
                    return g ? g.playlist : null
                }(this.playlists.master, this.systemBandwidth, parseInt(ml(this.tech_.el(), "width"), 10), parseInt(ml(this.tech_.el(), "height"), 10))
            },
            INITIAL_PLAYLIST_SELECTOR: function() {
                var t = this.playlists.master.playlists.filter(ou.isEnabled);
                return gl(t, (function(t, e) {
                    return yl(t, e)
                })), t.filter((function(t) {
                    return dl(t.attributes.CODECS).videoCodec
                }))[0] || null
            },
            comparePlaylistBandwidth: yl,
            comparePlaylistResolution: function(t, e) {
                var i = void 0,
                    n = void 0;
                return t.attributes.RESOLUTION && t.attributes.RESOLUTION.width && (i = t.attributes.RESOLUTION.width), i = i || r.Number.MAX_VALUE, e.attributes.RESOLUTION && e.attributes.RESOLUTION.width && (n = e.attributes.RESOLUTION.width), i === (n = n || r.Number.MAX_VALUE) && t.attributes.BANDWIDTH && e.attributes.BANDWIDTH ? t.attributes.BANDWIDTH - e.attributes.BANDWIDTH : i - n
            },
            xhr: cu()
        };
    ["GOAL_BUFFER_LENGTH", "MAX_GOAL_BUFFER_LENGTH", "GOAL_BUFFER_LENGTH_RATE", "BUFFER_LOW_WATER_LINE", "MAX_BUFFER_LOW_WATER_LINE", "BUFFER_LOW_WATER_LINE_RATE", "BANDWIDTH_VARIANCE"].forEach((function(t) {
        Object.defineProperty(Yl, t, {
            get: function() {
                return ka.log.warn("using Hls." + t + " is UNSAFE be sure you know what you are doing"), el[t]
            },
            set: function(e) {
                ka.log.warn("using Hls." + t + " is UNSAFE be sure you know what you are doing"), "number" != typeof e || e < 0 ? ka.log.warn("value of Hls." + t + " must be greater than or equal to 0") : el[t] = e
            }
        })
    }));
    var $l = function(t) {
            if (/^(audio|video|application)\/(x-|vnd\.apple\.)?mpegurl/i.test(t)) return "hls";
            return /^application\/dash\+xml/i.test(t) ? "dash" : null
        },
        Kl = function(t, e) {
            for (var i = e.media(), r = -1, n = 0; n < t.length; n++)
                if (t[n].id === i.uri) {
                    r = n;
                    break
                }
            t.selectedIndex_ = r, t.trigger({
                selectedIndex: r,
                type: "change"
            })
        };
    Yl.canPlaySource = function() {
        return ka.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")
    };
    var Ql = function(t) {
        if ("dash" === t.options_.sourceType) {
            var e = ka.players[t.tech_.options_.playerId];
            if (e.eme) {
                var i = function(t, e, i) {
                    if (!t) return t;
                    var r = {};
                    for (var n in t) r[n] = {
                        audioContentType: 'audio/mp4; codecs="' + i.attributes.CODECS + '"',
                        videoContentType: 'video/mp4; codecs="' + e.attributes.CODECS + '"'
                    }, e.contentProtection && e.contentProtection[n] && e.contentProtection[n].pssh && (r[n].pssh = e.contentProtection[n].pssh), "string" == typeof t[n] && (r[n].url = t[n]);
                    return ka.mergeOptions(t, r)
                }(t.source_.keySystems, t.playlists.media(), t.masterPlaylistController_.mediaTypes_.AUDIO.activePlaylistLoader.media());
                i && (e.currentSource().keySystems = i)
            }
        }
    };
    Yl.supportsNativeHls = function() {
        var t = u.createElement("video");
        if (!ka.getTech("Html5").isSupported()) return !1;
        return ["application/vnd.apple.mpegurl", "audio/mpegurl", "audio/x-mpegurl", "application/x-mpegurl", "video/x-mpegurl", "video/mpegurl", "application/mpegurl"].some((function(e) {
            return /maybe|probably/i.test(t.canPlayType(e))
        }))
    }(), Yl.supportsNativeDash = !!ka.getTech("Html5").isSupported() && /maybe|probably/i.test(u.createElement("video").canPlayType("application/dash+xml")), Yl.supportsTypeNatively = function(t) {
        return "hls" === t ? Yl.supportsNativeHls : "dash" === t && Yl.supportsNativeDash
    }, Yl.isSupported = function() {
        return ka.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")
    };
    var Jl = function(t) {
            function e(t, i, r) {
                xo(this, e);
                var n = Mo(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, i, r.hls));
                if (i.options_ && i.options_.playerId) {
                    var a = ka(i.options_.playerId);
                    a.hasOwnProperty("hls") || Object.defineProperty(a, "hls", {
                        get: function() {
                            return ka.log.warn("player.hls is deprecated. Use player.tech_.hls instead."), i.trigger({
                                type: "usage",
                                name: "hls-player-access"
                            }), n
                        }
                    }), a.vhs = n, a.dash = n
                }
                if (n.tech_ = i, n.source_ = t, n.stats = {}, n.ignoreNextSeekingEvent_ = !1, n.setOptions_(), n.options_.overrideNative && i.overrideNativeAudioTracks && i.overrideNativeVideoTracks) i.overrideNativeAudioTracks(!0), i.overrideNativeVideoTracks(!0);
                else if (n.options_.overrideNative && (i.featuresNativeVideoTracks || i.featuresNativeAudioTracks)) throw new Error("Overriding native HLS requires emulated tracks. See https://git.io/vMpjB");
                return n.on(u, ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"], (function(t) {
                    var e = u.fullscreenElement || u.webkitFullscreenElement || u.mozFullScreenElement || u.msFullscreenElement;
                    e && e.contains(n.tech_.el()) && n.masterPlaylistController_.fastQualityChange_()
                })), n.on(n.tech_, "seeking", (function() {
                    this.ignoreNextSeekingEvent_ ? this.ignoreNextSeekingEvent_ = !1 : this.setCurrentTime(this.tech_.currentTime())
                })), n.on(n.tech_, "error", (function() {
                    this.masterPlaylistController_ && this.masterPlaylistController_.pauseLoading()
                })), n.on(n.tech_, "play", n.play), n
            }
            return Ro(e, t), Do(e, [{
                key: "setOptions_",
                value: function() {
                    var t = this;
                    this.options_.withCredentials = this.options_.withCredentials || !1, "number" != typeof this.options_.blacklistDuration && (this.options_.blacklistDuration = 300), "number" != typeof this.options_.bandwidth && (this.options_.bandwidth = 4194304), this.options_.enableLowInitialPlaylist = this.options_.enableLowInitialPlaylist && 4194304 === this.options_.bandwidth, ["withCredentials", "bandwidth"].forEach((function(e) {
                        void 0 !== t.source_[e] && (t.options_[e] = t.source_[e])
                    })), this.bandwidth = this.options_.bandwidth
                }
            }, {
                key: "src",
                value: function(t, e) {
                    var i = this;
                    t && (this.setOptions_(), this.options_.url = this.source_.src, this.options_.tech = this.tech_, this.options_.externHls = Yl, this.options_.sourceType = $l(e), this.masterPlaylistController_ = new Vl(this.options_), this.playbackWatcher_ = new zl(ka.mergeOptions(this.options_, {
                        seekable: function() {
                            return i.seekable()
                        }
                    })), this.masterPlaylistController_.on("error", (function() {
                        ka.players[i.tech_.options_.playerId].error(i.masterPlaylistController_.error)
                    })), this.masterPlaylistController_.selectPlaylist = this.selectPlaylist ? this.selectPlaylist.bind(this) : Yl.STANDARD_PLAYLIST_SELECTOR.bind(this), this.masterPlaylistController_.selectInitialPlaylist = Yl.INITIAL_PLAYLIST_SELECTOR.bind(this), this.playlists = this.masterPlaylistController_.masterPlaylistLoader_, this.mediaSource = this.masterPlaylistController_.mediaSource, Object.defineProperties(this, {
                        selectPlaylist: {
                            get: function() {
                                return this.masterPlaylistController_.selectPlaylist
                            },
                            set: function(t) {
                                this.masterPlaylistController_.selectPlaylist = t.bind(this)
                            }
                        },
                        throughput: {
                            get: function() {
                                return this.masterPlaylistController_.mainSegmentLoader_.throughput.rate
                            },
                            set: function(t) {
                                this.masterPlaylistController_.mainSegmentLoader_.throughput.rate = t, this.masterPlaylistController_.mainSegmentLoader_.throughput.count = 1
                            }
                        },
                        bandwidth: {
                            get: function() {
                                return this.masterPlaylistController_.mainSegmentLoader_.bandwidth
                            },
                            set: function(t) {
                                this.masterPlaylistController_.mainSegmentLoader_.bandwidth = t, this.masterPlaylistController_.mainSegmentLoader_.throughput = {
                                    rate: 0,
                                    count: 0
                                }
                            }
                        },
                        systemBandwidth: {
                            get: function() {
                                var t = 1 / (this.bandwidth || 1),
                                    e = void 0;
                                return e = this.throughput > 0 ? 1 / this.throughput : 0, Math.floor(1 / (t + e))
                            },
                            set: function() {
                                ka.log.error('The "systemBandwidth" property is read-only')
                            }
                        }
                    }), Object.defineProperties(this.stats, {
                        bandwidth: {
                            get: function() {
                                return i.bandwidth || 0
                            },
                            enumerable: !0
                        },
                        mediaRequests: {
                            get: function() {
                                return i.masterPlaylistController_.mediaRequests_() || 0
                            },
                            enumerable: !0
                        },
                        mediaRequestsAborted: {
                            get: function() {
                                return i.masterPlaylistController_.mediaRequestsAborted_() || 0
                            },
                            enumerable: !0
                        },
                        mediaRequestsTimedout: {
                            get: function() {
                                return i.masterPlaylistController_.mediaRequestsTimedout_() || 0
                            },
                            enumerable: !0
                        },
                        mediaRequestsErrored: {
                            get: function() {
                                return i.masterPlaylistController_.mediaRequestsErrored_() || 0
                            },
                            enumerable: !0
                        },
                        mediaTransferDuration: {
                            get: function() {
                                return i.masterPlaylistController_.mediaTransferDuration_() || 0
                            },
                            enumerable: !0
                        },
                        mediaBytesTransferred: {
                            get: function() {
                                return i.masterPlaylistController_.mediaBytesTransferred_() || 0
                            },
                            enumerable: !0
                        },
                        mediaSecondsLoaded: {
                            get: function() {
                                return i.masterPlaylistController_.mediaSecondsLoaded_() || 0
                            },
                            enumerable: !0
                        },
                        buffered: {
                            get: function() {
                                return Su(i.tech_.buffered())
                            },
                            enumerable: !0
                        },
                        currentTime: {
                            get: function() {
                                return i.tech_.currentTime()
                            },
                            enumerable: !0
                        },
                        currentSource: {
                            get: function() {
                                return i.tech_.currentSource_
                            },
                            enumerable: !0
                        },
                        currentTech: {
                            get: function() {
                                return i.tech_.name_
                            },
                            enumerable: !0
                        },
                        duration: {
                            get: function() {
                                return i.tech_.duration()
                            },
                            enumerable: !0
                        },
                        master: {
                            get: function() {
                                return i.playlists.master
                            },
                            enumerable: !0
                        },
                        playerDimensions: {
                            get: function() {
                                return i.tech_.currentDimensions()
                            },
                            enumerable: !0
                        },
                        seekable: {
                            get: function() {
                                return Su(i.tech_.seekable())
                            },
                            enumerable: !0
                        },
                        timestamp: {
                            get: function() {
                                return Date.now()
                            },
                            enumerable: !0
                        },
                        videoPlaybackQuality: {
                            get: function() {
                                return i.tech_.getVideoPlaybackQuality()
                            },
                            enumerable: !0
                        }
                    }), this.tech_.one("canplay", this.masterPlaylistController_.setupFirstPlay.bind(this.masterPlaylistController_)), this.masterPlaylistController_.on("selectedinitialmedia", (function() {
                        var t, e;
                        e = (t = i).playlists, t.representations = function() {
                            return e.master.playlists.filter((function(t) {
                                return !ru(t)
                            })).map((function(e, i) {
                                return new ql(t, e, e.uri)
                            }))
                        }, Ql(i)
                    })), this.on(this.masterPlaylistController_, "progress", (function() {
                        this.tech_.trigger("progress")
                    })), this.on(this.masterPlaylistController_, "firstplay", (function() {
                        this.ignoreNextSeekingEvent_ = !0
                    })), this.tech_.ready((function() {
                        return i.setupQualityLevels_()
                    })), this.tech_.el() && this.tech_.src(ka.URL.createObjectURL(this.masterPlaylistController_.mediaSource)))
                }
            }, {
                key: "setupQualityLevels_",
                value: function() {
                    var t = this,
                        e = ka.players[this.tech_.options_.playerId];
                    e && e.qualityLevels && (this.qualityLevels_ = e.qualityLevels(), this.masterPlaylistController_.on("selectedinitialmedia", (function() {
                        var e, i;
                        e = t.qualityLevels_, (i = t).representations().forEach((function(t) {
                            e.addQualityLevel(t)
                        })), Kl(e, i.playlists)
                    })), this.playlists.on("mediachange", (function() {
                        Kl(t.qualityLevels_, t.playlists)
                    })))
                }
            }, {
                key: "play",
                value: function() {
                    this.masterPlaylistController_.play()
                }
            }, {
                key: "setCurrentTime",
                value: function(t) {
                    this.masterPlaylistController_.setCurrentTime(t)
                }
            }, {
                key: "duration",
                value: function() {
                    return this.masterPlaylistController_.duration()
                }
            }, {
                key: "seekable",
                value: function() {
                    return this.masterPlaylistController_.seekable()
                }
            }, {
                key: "dispose",
                value: function() {
                    this.playbackWatcher_ && this.playbackWatcher_.dispose(), this.masterPlaylistController_ && this.masterPlaylistController_.dispose(), this.qualityLevels_ && this.qualityLevels_.dispose(),
                        function t(e, i, r) {
                            null === e && (e = Function.prototype);
                            var n = Object.getOwnPropertyDescriptor(e, i);
                            if (void 0 === n) {
                                var a = Object.getPrototypeOf(e);
                                return null === a ? void 0 : t(a, i, r)
                            }
                            if ("value" in n) return n.value;
                            var s = n.get;
                            return void 0 !== s ? s.call(r) : void 0
                        }(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "dispose", this).call(this)
                }
            }]), e
        }(ka.getComponent("Component")),
        Zl = {
            name: "videojs-http-streaming",
            VERSION: "1.1.0",
            canHandleSource: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = ka.mergeOptions(ka.options, e);
                return Zl.canPlayType(t.type, i)
            },
            handleSource: function(t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = ka.mergeOptions(ka.options, i);
                return e.hls = new Jl(t, e, r), e.hls.xhr = cu(), e.hls.src(t.src, t.type), e.hls
            },
            canPlayType: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = ka.mergeOptions(ka.options, e),
                    r = i.hls.overrideNative,
                    n = $l(t),
                    a = n && (!Yl.supportsTypeNatively(n) || r);
                return a ? "maybe" : ""
            }
        };
    return void 0 !== ka.MediaSource && void 0 !== ka.URL || (ka.MediaSource = Gu, ka.URL = Xu), Gu.supportsNativeMediaSources() && ka.getTech("Html5").registerSourceHandler(Zl, 0), ka.HlsHandler = Jl, ka.HlsSourceHandler = Zl, ka.Hls = Yl, ka.use || ka.registerComponent("Hls", Yl), ka.options.hls = ka.options.hls || {}, ka.registerPlugin ? ka.registerPlugin("reloadSourceOnError", Xl) : ka.plugin("reloadSourceOnError", Xl), ka
})),
function() {
    var t, e;
    t = window, (e = t && t.videojs) && (e.CDN_VERSION = "7.1.0")
}();
