/*
 jQWidgets v4.5.0 (2017-Jan)
 Copyright (c) 2011-2017 jQWidgets.
 License: http://jqwidgets.com/license/
 */
!function (a, b) {
    function c(a) {
        var b = ga[a] = {};
        return S.each(a.split(V), function (a, c) {
            b[c] = !0
        }), b
    }

    function d(a, c, d) {
        if (d === b && 1 === a.nodeType) {
            var e = "data-" + c.replace(ia, "-$1").toLowerCase();
            if (d = a.getAttribute(e), "string" == typeof d) {
                try {
                    d = "true" === d || "false" !== d && ("null" === d ? null : +d + "" === d ? +d : ha.test(d) ? S.parseJSON(d) : d)
                } catch (a) {
                }
                S.data(a, c, d)
            } else d = b
        }
        return d
    }

    function e(a) {
        var b;
        for (b in a)if (("data" !== b || !S.isEmptyObject(a[b])) && "toJSON" !== b)return !1;
        return !0
    }

    function f() {
        return !1
    }

    function g() {
        return !0
    }

    function h(a) {
        return !a || !a.parentNode || 11 === a.parentNode.nodeType
    }

    function i(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }

    function j(a, b, c) {
        if (b = b || 0, S.isFunction(b))return S.grep(a, function (a, d) {
            var e = !!b.call(a, d, a);
            return e === c
        });
        if (b.nodeType)return S.grep(a, function (a, d) {
            return a === b === c
        });
        if ("string" == typeof b) {
            var d = S.grep(a, function (a) {
                return 1 === a.nodeType
            });
            if (Aa.test(b))return S.filter(b, d, !c);
            b = S.filter(b, d)
        }
        return S.grep(a, function (a, d) {
            return S.inArray(a, b) >= 0 === c
        })
    }

    function k(a) {
        var b = Da.split("|"), c = a.createDocumentFragment();
        if (c.createElement)for (; b.length;)c.createElement(b.pop());
        return c
    }

    function l(a, b) {
        return a.getElementsByTagName(b)[0] || a.appendChild(a.ownerDocument.createElement(b))
    }

    function m(a, b) {
        if (1 === b.nodeType && S.hasData(a)) {
            var c, d, e, f = S._data(a), g = S._data(b, f), h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)for (d = 0, e = h[c].length; d < e; d++)S.event.add(b, c, h[c][d])
            }
            g.data && (g.data = S.extend({}, g.data))
        }
    }

    function n(a, b) {
        var c;
        1 === b.nodeType && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), S.support.html5Clone && a.innerHTML && !S.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Na.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.selected = a.defaultSelected : "input" === c || "textarea" === c ? b.defaultValue = a.defaultValue : "script" === c && b.text !== a.text && (b.text = a.text), b.removeAttribute(S.expando))
    }

    function o(a) {
        return "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName("*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll("*") : []
    }

    function p(a) {
        Na.test(a.type) && (a.defaultChecked = a.checked)
    }

    function q(a, b) {
        if (b in a)return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = hb.length; e--;)if (b = hb[e] + c, b in a)return b;
        return d
    }

    function r(a, b) {
        return a = b || a, "none" === S.css(a, "display") || !S.contains(a.ownerDocument, a)
    }

    function s(a, b) {
        for (var c, d, e = [], f = 0, g = a.length; f < g; f++)c = a[f], c.style && (e[f] = S._data(c, "olddisplay"), b ? (e[f] || "none" !== c.style.display || (c.style.display = ""), "" === c.style.display && r(c) && (e[f] = S._data(c, "olddisplay", w(c.nodeName)))) : (d = Ua(c, "display"), e[f] || "none" === d || S._data(c, "olddisplay", d)));
        for (f = 0; f < g; f++)c = a[f], c.style && (b && "none" !== c.style.display && "" !== c.style.display || (c.style.display = b ? e[f] || "" : "none"));
        return a
    }

    function t(a, b, c) {
        var d = ab.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function u(a, b, c, d) {
        for (var e = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, f = 0; e < 4; e += 2)"margin" === c && (f += S.css(a, c + gb[e], !0)), d ? ("content" === c && (f -= parseFloat(Ua(a, "padding" + gb[e])) || 0), "margin" !== c && (f -= parseFloat(Ua(a, "border" + gb[e] + "Width")) || 0)) : (f += parseFloat(Ua(a, "padding" + gb[e])) || 0, "padding" !== c && (f += parseFloat(Ua(a, "border" + gb[e] + "Width")) || 0));
        return f
    }

    function v(a, b, c) {
        var d = "width" === b ? a.offsetWidth : a.offsetHeight, e = !0,
            f = S.support.boxSizing && "border-box" === S.css(a, "boxSizing");
        if (d <= 0 || null == d) {
            if (d = Ua(a, b), (d < 0 || null == d) && (d = a.style[b]), bb.test(d))return d;
            e = f && (S.support.boxSizingReliable || d === a.style[b]), d = parseFloat(d) || 0
        }
        return d + u(a, b, c || (f ? "border" : "content"), e) + "px"
    }

    function w(a) {
        if (db[a])return db[a];
        var b = S("<" + a + ">").appendTo(I.body), c = b.css("display");
        return b.remove(), "none" !== c && "" !== c || (Va = I.body.appendChild(Va || S.extend(I.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            })), Wa && Va.createElement || (Wa = (Va.contentWindow || Va.contentDocument).document, Wa.write("<!doctype html><html><body>"), Wa.close()), b = Wa.body.appendChild(Wa.createElement(a)), c = Ua(b, "display"), I.body.removeChild(Va)), db[a] = c, c
    }

    function x(a, b, c, d) {
        var e;
        if (S.isArray(b)) S.each(b, function (b, e) {
            c || kb.test(a) ? d(a, e) : x(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        }); else if (c || "object" !== S.type(b)) d(a, b); else for (e in b)x(a + "[" + e + "]", b[e], c, d)
    }

    function y() {
        return setTimeout(function () {
            ob = b
        }, 0), ob = S.now()
    }

    function z(a, b) {
        S.each(b, function (b, c) {
            for (var d = (ub[b] || []).concat(ub["*"]), e = 0, f = d.length; e < f; e++)if (d[e].call(a, b, c))return
        })
    }

    function A(a, b, c) {
        var d, e = 0, f = tb.length, g = S.Deferred().always(function () {
            delete h.elem
        }), h = function () {
            for (var b = ob || y(), c = Math.max(0, i.startTime + i.duration - b), d = c / i.duration || 0, e = 1 - d, f = 0, h = i.tweens.length; f < h; f++)i.tweens[f].run(e);
            return g.notifyWith(a, [i, e, c]), e < 1 && h ? c : (g.resolveWith(a, [i]), !1)
        }, i = g.promise({
            elem: a,
            props: S.extend({}, b),
            opts: S.extend(!0, {specialEasing: {}}, c),
            originalProperties: b,
            originalOptions: c,
            startTime: ob || y(),
            duration: c.duration,
            tweens: [],
            createTween: function (b, c, d) {
                var e = S.Tween(a, i.opts, b, c, i.opts.specialEasing[b] || i.opts.easing);
                return i.tweens.push(e), e
            },
            stop: function (b) {
                for (var c = 0, d = b ? i.tweens.length : 0; c < d; c++)i.tweens[c].run(1);
                return b ? g.resolveWith(a, [i, b]) : g.rejectWith(a, [i, b]), this
            }
        }), j = i.props;
        for (B(j, i.opts.specialEasing); e < f; e++)if (d = tb[e].call(i, a, j, i.opts))return d;
        return z(i, j), S.isFunction(i.opts.start) && i.opts.start.call(a, i), S.fx.timer(S.extend(h, {
            anim: i,
            queue: i.opts.queue,
            elem: a
        })), i.progress(i.opts.progress).done(i.opts.done, i.opts.complete).fail(i.opts.fail).always(i.opts.always)
    }

    function B(a, b) {
        var c, d, e, f, g;
        for (c in a)if (d = S.camelCase(c), e = b[d], f = a[c], S.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = S.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f)c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }

    function C(a, b, c) {
        var d, e, f, g, h, i, j, k, l, m = this, n = a.style, o = {}, p = [], q = a.nodeType && r(a);
        c.queue || (k = S._queueHooks(a, "fx"), null == k.unqueued && (k.unqueued = 0, l = k.empty.fire, k.empty.fire = function () {
            k.unqueued || l()
        }), k.unqueued++, m.always(function () {
            m.always(function () {
                k.unqueued--, S.queue(a, "fx").length || k.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], "inline" === S.css(a, "display") && "none" === S.css(a, "float") && (S.support.inlineBlockNeedsLayout && "inline" !== w(a.nodeName) ? n.zoom = 1 : n.display = "inline-block")), c.overflow && (n.overflow = "hidden", S.support.shrinkWrapBlocks || m.done(function () {
            n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
        }));
        for (d in b)if (f = b[d], qb.exec(f)) {
            if (delete b[d], i = i || "toggle" === f, f === (q ? "hide" : "show"))continue;
            p.push(d)
        }
        if (g = p.length) {
            h = S._data(a, "fxshow") || S._data(a, "fxshow", {}), "hidden" in h && (q = h.hidden), i && (h.hidden = !q), q ? S(a).show() : m.done(function () {
                S(a).hide()
            }), m.done(function () {
                var b;
                S.removeData(a, "fxshow", !0);
                for (b in o)S.style(a, b, o[b])
            });
            for (d = 0; d < g; d++)e = p[d], j = m.createTween(e, q ? h[e] : 0), o[e] = h[e] || S.style(a, e), e in h || (h[e] = j.start, q && (j.end = j.start, j.start = "width" === e || "height" === e ? 1 : 0))
        }
    }

    function D(a, b, c, d, e) {
        return new D.prototype.init(a, b, c, d, e)
    }

    function E(a, b) {
        var c, d = {height: a}, e = 0;
        for (b = b ? 1 : 0; e < 4; e += 2 - b)c = gb[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function F(a) {
        return S.isWindow(a) ? a : 9 === a.nodeType && (a.defaultView || a.parentWindow)
    }

    var G, H, I = a.document, J = (a.location, a.navigator), K = a.JQX, L = a.$, M = Array.prototype.push,
        N = Array.prototype.slice, O = Array.prototype.indexOf, P = Object.prototype.toString,
        Q = Object.prototype.hasOwnProperty, R = String.prototype.trim, S = function (a, b) {
            return new S.fn.init(a, b, G)
        }, T = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, U = /\S/, V = /\s+/,
        W = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, X = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        Y = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Z = /^[\],:{}\s]*$/, $ = /(?:^|:|,)(?:\s*\[)+/g,
        _ = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        aa = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, ba = /^-ms-/, ca = /-([\da-z])/gi,
        da = function (a, b) {
            return (b + "").toUpperCase()
        }, ea = function () {
            I.addEventListener ? (I.removeEventListener("DOMContentLoaded", ea, !1), S.ready()) : "complete" === I.readyState && (I.detachEvent("onreadystatechange", ea), S.ready())
        }, fa = {};
    S.fn = S.prototype = {
        constructor: S, init: function (a, c, d) {
            var e, f, g;
            if (!a)return this;
            if (a.nodeType)return this.context = this[0] = a, this.length = 1, this;
            if ("string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : X.exec(a), !e || !e[1] && c)return !c || c.jqx ? (c || d).find(a) : this.constructor(c).find(a);
                if (e[1])return c = c instanceof S ? c[0] : c, g = c && c.nodeType ? c.ownerDocument || c : I, a = S.parseHTML(e[1], g, !0), Y.test(e[1]) && S.isPlainObject(c) && this.attr.call(a, c, !0), S.merge(this, a);
                if (f = I.getElementById(e[2]), f && f.parentNode) {
                    if (f.id !== e[2])return d.find(a);
                    this.length = 1, this[0] = f
                }
                return this.context = I, this.selector = a, this
            }
            return S.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), S.makeArray(a, this))
        }, selector: "", jqx: "4.5.0", length: 0, size: function () {
            return this.length
        }, toArray: function () {
            return N.call(this)
        }, get: function (a) {
            return null == a ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
        }, pushStack: function (a, b, c) {
            var d = S.merge(this.constructor(), a);
            return d.prevObject = this, d.context = this.context, "find" === b ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"), d
        }, each: function (a, b) {
            return S.each(this, a, b)
        }, ready: function (a) {
            return S.ready.promise().done(a), this
        }, eq: function (a) {
            return a = +a, a === -1 ? this.slice(a) : this.slice(a, a + 1)
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, slice: function () {
            return this.pushStack(N.apply(this, arguments), "slice", N.call(arguments).join(","))
        }, map: function (a) {
            return this.pushStack(S.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: M, sort: [].sort, splice: [].splice
    }, S.fn.init.prototype = S.fn, S.extend = S.fn.extend = function () {
        var a, c, d, e, f, g, h = arguments[0] || {}, i = 1, j = arguments.length, k = !1;
        for ("boolean" == typeof h && (k = h, h = arguments[1] || {}, i = 2), "object" == typeof h || S.isFunction(h) || (h = {}), j === i && (h = this, --i); i < j; i++)if (null != (a = arguments[i]))for (c in a)d = h[c], e = a[c], h !== e && (k && e && (S.isPlainObject(e) || (f = S.isArray(e))) ? (f ? (f = !1, g = d && S.isArray(d) ? d : []) : g = d && S.isPlainObject(d) ? d : {}, h[c] = S.extend(k, g, e)) : e !== b && (h[c] = e));
        return h
    }, S.extend({
        noConflict: function (b) {
            return a.$ === S && (a.$ = L), b && a.JQX === S && (a.JQX = K), S
        }, isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? S.readyWait++ : S.ready(!0)
        }, ready: function (a) {
            if (a === !0 ? !--S.readyWait : !S.isReady) {
                if (!I.body)return setTimeout(S.ready, 1);
                S.isReady = !0, a !== !0 && --S.readyWait > 0 || (H.resolveWith(I, [S]), S.fn.trigger && S(I).trigger("ready").off("ready"))
            }
        }, isFunction: function (a) {
            return "function" === S.type(a)
        }, isArray: Array.isArray || function (a) {
            return "array" === S.type(a)
        }, isWindow: function (a) {
            return null != a && a == a.window
        }, isNumeric: function (a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        }, type: function (a) {
            return null == a ? String(a) : fa[P.call(a)] || "object"
        }, isPlainObject: function (a) {
            if (!a || "object" !== S.type(a) || a.nodeType || S.isWindow(a))return !1;
            try {
                if (a.constructor && !Q.call(a, "constructor") && !Q.call(a.constructor.prototype, "isPrototypeOf"))return !1
            } catch (a) {
                return !1
            }
            var c;
            for (c in a);
            return c === b || Q.call(a, c)
        }, isEmptyObject: function (a) {
            var b;
            for (b in a)return !1;
            return !0
        }, error: function (a) {
            throw new Error(a)
        }, parseHTML: function (a, b, c) {
            var d;
            return a && "string" == typeof a ? ("boolean" == typeof b && (c = b, b = 0), b = b || I, (d = Y.exec(a)) ? [b.createElement(d[1])] : (d = S.buildFragment([a], b, c ? null : []), S.merge([], (d.cacheable ? S.clone(d.fragment) : d.fragment).childNodes))) : null
        }, parseJSON: function (b) {
            return b && "string" == typeof b ? (b = S.trim(b), a.JSON && a.JSON.parse ? a.JSON.parse(b) : Z.test(b.replace(_, "@").replace(aa, "]").replace($, "")) ? new Function("return " + b)() : void S.error("Invalid JSON: " + b)) : null
        }, parseXML: function (c) {
            var d, e;
            if (!c || "string" != typeof c)return null;
            try {
                a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
            } catch (a) {
                d = b
            }
            return d && d.documentElement && !d.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + c), d
        }, noop: function () {
        }, globalEval: function (b) {
            b && U.test(b) && (a.execScript || function (b) {
                a.eval.call(a, b)
            })(b)
        }, camelCase: function (a) {
            return a.replace(ba, "ms-").replace(ca, da)
        }, nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        }, each: function (a, c, d) {
            var e, f = 0, g = a.length, h = g === b || S.isFunction(a);
            if (d)if (h) {
                for (e in a)if (c.apply(a[e], d) === !1)break
            } else for (; f < g && c.apply(a[f++], d) !== !1;); else if (h) {
                for (e in a)if (c.call(a[e], e, a[e]) === !1)break
            } else for (; f < g && c.call(a[f], f, a[f++]) !== !1;);
            return a
        }, trim: R && !R.call("\ufeff ") ? function (a) {
            return null == a ? "" : R.call(a)
        } : function (a) {
            return null == a ? "" : (a + "").replace(W, "")
        }, makeArray: function (a, b) {
            var c, d = b || [];
            return null != a && (c = S.type(a), null == a.length || "string" === c || "function" === c || "regexp" === c || S.isWindow(a) ? M.call(d, a) : S.merge(d, a)), d
        }, inArray: function (a, b, c) {
            var d;
            if (b) {
                if (O)return O.call(b, a, c);
                for (d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0; c < d; c++)if (c in b && b[c] === a)return c
            }
            return -1
        }, merge: function (a, c) {
            var d = c.length, e = a.length, f = 0;
            if ("number" == typeof d)for (; f < d; f++)a[e++] = c[f]; else for (; c[f] !== b;)a[e++] = c[f++];
            return a.length = e, a
        }, grep: function (a, b, c) {
            var d, e = [], f = 0, g = a.length;
            for (c = !!c; f < g; f++)d = !!b(a[f], f), c !== d && e.push(a[f]);
            return e
        }, map: function (a, c, d) {
            var e, f, g = [], h = 0, i = a.length,
                j = a instanceof S || i !== b && "number" == typeof i && (i > 0 && a[0] && a[i - 1] || 0 === i || S.isArray(a));
            if (j)for (; h < i; h++)e = c(a[h], h, d), null != e && (g[g.length] = e); else for (f in a)e = c(a[f], f, d), null != e && (g[g.length] = e);
            return g.concat.apply([], g)
        }, guid: 1, proxy: function (a, c) {
            var d, e, f;
            return "string" == typeof c && (d = a[c], c = a, a = d), S.isFunction(a) ? (e = N.call(arguments, 2), f = function () {
                return a.apply(c, e.concat(N.call(arguments)))
            }, f.guid = a.guid = a.guid || S.guid++, f) : b
        }, access: function (a, c, d, e, f, g, h) {
            var i, j = null == d, k = 0, l = a.length;
            if (d && "object" == typeof d) {
                for (k in d)S.access(a, c, k, d[k], 1, g, e);
                f = 1
            } else if (e !== b) {
                if (i = h === b && S.isFunction(e), j && (i ? (i = c, c = function (a, b, c) {
                        return i.call(S(a), c)
                    }) : (c.call(a, e), c = null)), c)for (; k < l; k++)c(a[k], d, i ? e.call(a[k], k, c(a[k], d)) : e, h);
                f = 1
            }
            return f ? a : j ? c.call(a) : l ? c(a[0], d) : g
        }, now: function () {
            return (new Date).getTime()
        }
    }), S.ready.promise = function (b) {
        if (!H)if (H = S.Deferred(), "complete" === I.readyState) setTimeout(S.ready, 1); else if (I.addEventListener) I.addEventListener("DOMContentLoaded", ea, !1), a.addEventListener("load", S.ready, !1); else {
            I.attachEvent("onreadystatechange", ea), a.attachEvent("onload", S.ready);
            var c = !1;
            try {
                c = null == a.frameElement && I.documentElement
            } catch (a) {
            }
            c && c.doScroll && !function a() {
                if (!S.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (b) {
                        return setTimeout(a, 50)
                    }
                    S.ready()
                }
            }()
        }
        return H.promise(b)
    }, S.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
        fa["[object " + b + "]"] = b.toLowerCase()
    }), G = S(I);
    var ga = {};
    S.Callbacks = function (a) {
        a = "string" == typeof a ? ga[a] || c(a) : S.extend({}, a);
        var d, e, f, g, h, i, j = [], k = !a.once && [], l = function (b) {
            for (d = a.memory && b, e = !0, i = g || 0, g = 0, h = j.length, f = !0; j && i < h; i++)if (j[i].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                d = !1;
                break
            }
            f = !1, j && (k ? k.length && l(k.shift()) : d ? j = [] : m.disable())
        }, m = {
            add: function () {
                if (j) {
                    var b = j.length;
                    !function b(c) {
                        S.each(c, function (c, d) {
                            var e = S.type(d);
                            "function" === e ? a.unique && m.has(d) || j.push(d) : d && d.length && "string" !== e && b(d)
                        })
                    }(arguments), f ? h = j.length : d && (g = b, l(d))
                }
                return this
            }, remove: function () {
                return j && S.each(arguments, function (a, b) {
                    for (var c; (c = S.inArray(b, j, c)) > -1;)j.splice(c, 1), f && (c <= h && h--, c <= i && i--)
                }), this
            }, has: function (a) {
                return S.inArray(a, j) > -1
            }, empty: function () {
                return j = [], this
            }, disable: function () {
                return j = k = d = b, this
            }, disabled: function () {
                return !j
            }, lock: function () {
                return k = b, d || m.disable(), this
            }, locked: function () {
                return !k
            }, fireWith: function (a, b) {
                return b = b || [], b = [a, b.slice ? b.slice() : b], !j || e && !k || (f ? k.push(b) : l(b)), this
            }, fire: function () {
                return m.fireWith(this, arguments), this
            }, fired: function () {
                return !!e
            }
        };
        return m
    }, S.extend({
        Deferred: function (a) {
            var b = [["resolve", "done", S.Callbacks("once memory"), "resolved"], ["reject", "fail", S.Callbacks("once memory"), "rejected"], ["notify", "progress", S.Callbacks("memory")]],
                c = "pending", d = {
                    state: function () {
                        return c
                    }, always: function () {
                        return e.done(arguments).fail(arguments), this
                    }, then: function () {
                        var a = arguments;
                        return S.Deferred(function (c) {
                            S.each(b, function (b, d) {
                                var f = d[0], g = a[b];
                                e[d[1]](S.isFunction(g) ? function () {
                                    var a = g.apply(this, arguments);
                                    a && S.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f + "With"](this === e ? c : this, [a])
                                } : c[f])
                            }), a = null
                        }).promise()
                    }, promise: function (a) {
                        return null != a ? S.extend(a, d) : d
                    }
                }, e = {};
            return d.pipe = d.then, S.each(b, function (a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = g.fire, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        }, when: function (a) {
            var b, c, d, e = 0, f = N.call(arguments), g = f.length,
                h = 1 !== g || a && S.isFunction(a.promise) ? g : 0, i = 1 === h ? a : S.Deferred(),
                j = function (a, c, d) {
                    return function (e) {
                        c[a] = this, d[a] = arguments.length > 1 ? N.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                };
            if (g > 1)for (b = new Array(g), c = new Array(g), d = new Array(g); e < g; e++)f[e] && S.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }
    }), S.support = function () {
        var b, c, d, e, f, g, h, i, j, k, l, m = I.createElement("div");
        if (m.setAttribute("className", "t"), m.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = m.getElementsByTagName("*"), d = m.getElementsByTagName("a")[0], !c || !d || !c.length)return {};
        e = I.createElement("select"), f = e.appendChild(I.createElement("option")), g = m.getElementsByTagName("input")[0], d.style.cssText = "top:1px;float:left;opacity:.5", b = {
            leadingWhitespace: 3 === m.firstChild.nodeType,
            tbody: !m.getElementsByTagName("tbody").length,
            htmlSerialize: !!m.getElementsByTagName("link").length,
            style: /top/.test(d.getAttribute("style")),
            hrefNormalized: "/a" === d.getAttribute("href"),
            opacity: /^0.5/.test(d.style.opacity),
            cssFloat: !!d.style.cssFloat,
            checkOn: "on" === g.value,
            optSelected: f.selected,
            getSetAttribute: "t" !== m.className,
            enctype: !!I.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== I.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === I.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, g.checked = !0, b.noCloneChecked = g.cloneNode(!0).checked, e.disabled = !0, b.optDisabled = !f.disabled;
        try {
            delete m.test
        } catch (a) {
            b.deleteExpando = !1
        }
        if (!m.addEventListener && m.attachEvent && m.fireEvent && (m.attachEvent("onclick", l = function () {
                b.noCloneEvent = !1
            }), m.cloneNode(!0).fireEvent("onclick"), m.detachEvent("onclick", l)), g = I.createElement("input"), g.value = "t", g.setAttribute("type", "radio"), b.radioValue = "t" === g.value, g.setAttribute("checked", "checked"), g.setAttribute("name", "t"), m.appendChild(g), h = I.createDocumentFragment(), h.appendChild(m.lastChild), b.checkClone = h.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = g.checked, h.removeChild(g), h.appendChild(m), m.attachEvent)for (j in{
            submit: !0,
            change: !0,
            focusin: !0
        })i = "on" + j, k = i in m, k || (m.setAttribute(i, "return;"), k = "function" == typeof m[i]), b[j + "Bubbles"] = k;
        return S(function () {
            var c, d, e, f, g = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                h = I.getElementsByTagName("body")[0];
            h && (c = I.createElement("div"), c.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", h.insertBefore(c, h.firstChild), d = I.createElement("div"), c.appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = d.getElementsByTagName("td"), e[0].style.cssText = "padding:0;margin:0;border:0;display:none", k = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", b.reliableHiddenOffsets = k && 0 === e[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", b.boxSizing = 4 === d.offsetWidth, b.doesNotIncludeMarginInBodyOffset = 1 !== h.offsetTop, a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(d, null) || {}).top, b.boxSizingReliable = "4px" === (a.getComputedStyle(d, null) || {width: "4px"}).width, f = I.createElement("div"), f.style.cssText = d.style.cssText = g, f.style.marginRight = f.style.width = "0", d.style.width = "1px", d.appendChild(f), b.reliableMarginRight = !parseFloat((a.getComputedStyle(f, null) || {}).marginRight)), "undefined" != typeof d.style.zoom && (d.innerHTML = "", d.style.cssText = g + "width:1px;padding:1px;display:inline;zoom:1", b.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.style.overflow = "visible", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", b.shrinkWrapBlocks = 3 !== d.offsetWidth, c.style.zoom = 1), h.removeChild(c), c = d = e = f = null)
        }), h.removeChild(m), c = d = e = f = g = h = m = null, b
    }();
    var ha = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, ia = /([A-Z])/g;
    S.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "JQX" + (S.fn.jqx + Math.random()).replace(/\D/g, ""),
        noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0},
        hasData: function (a) {
            return a = a.nodeType ? S.cache[a[S.expando]] : a[S.expando], !!a && !e(a)
        },
        data: function (a, c, d, e) {
            if (S.acceptData(a)) {
                var f, g, h = S.expando, i = "string" == typeof c, j = a.nodeType, k = j ? S.cache : a,
                    l = j ? a[h] : a[h] && h;
                if (l && k[l] && (e || k[l].data) || !i || d !== b)return l || (j ? a[h] = l = S.deletedIds.pop() || S.guid++ : l = h), k[l] || (k[l] = {}, j || (k[l].toJSON = S.noop)), "object" != typeof c && "function" != typeof c || (e ? k[l] = S.extend(k[l], c) : k[l].data = S.extend(k[l].data, c)), f = k[l], e || (f.data || (f.data = {}), f = f.data), d !== b && (f[S.camelCase(c)] = d), i ? (g = f[c], null == g && (g = f[S.camelCase(c)])) : g = f, g
            }
        },
        removeData: function (a, b, c) {
            if (S.acceptData(a)) {
                var d, f, g, h = a.nodeType, i = h ? S.cache : a, j = h ? a[S.expando] : S.expando;
                if (i[j]) {
                    if (b && (d = c ? i[j] : i[j].data)) {
                        S.isArray(b) || (b in d ? b = [b] : (b = S.camelCase(b), b = b in d ? [b] : b.split(" ")));
                        for (f = 0, g = b.length; f < g; f++)delete d[b[f]];
                        if (!(c ? e : S.isEmptyObject)(d))return
                    }
                    (c || (delete i[j].data, e(i[j]))) && (h ? S.cleanData([a], !0) : S.support.deleteExpando || i != i.window ? delete i[j] : i[j] = null)
                }
            }
        },
        _data: function (a, b, c) {
            return S.data(a, b, c, !0)
        },
        acceptData: function (a) {
            var b = a.nodeName && S.noData[a.nodeName.toLowerCase()];
            return !b || b !== !0 && a.getAttribute("classid") === b
        }
    }), S.fn.extend({
        data: function (a, c) {
            var e, f, g, h, i, j = this[0], k = 0, l = null;
            if (a === b) {
                if (this.length && (l = S.data(j), 1 === j.nodeType && !S._data(j, "parsedAttrs"))) {
                    for (g = j.attributes, i = g.length; k < i; k++)h = g[k].name, h.indexOf("data-") || (h = S.camelCase(h.substring(5)), d(j, h, l[h]));
                    S._data(j, "parsedAttrs", !0)
                }
                return l
            }
            return "object" == typeof a ? this.each(function () {
                S.data(this, a)
            }) : (e = a.split(".", 2), e[1] = e[1] ? "." + e[1] : "", f = e[1] + "!", S.access(this, function (c) {
                return c === b ? (l = this.triggerHandler("getData" + f, [e[0]]), l === b && j && (l = S.data(j, a), l = d(j, a, l)), l === b && e[1] ? this.data(e[0]) : l) : (e[1] = c, void this.each(function () {
                    var b = S(this);
                    b.triggerHandler("setData" + f, e), S.data(this, a, c), b.triggerHandler("changeData" + f, e)
                }))
            }, null, c, arguments.length > 1, null, !1))
        }, removeData: function (a) {
            return this.each(function () {
                S.removeData(this, a)
            })
        }
    }), S.extend({
        queue: function (a, b, c) {
            var d;
            if (a)return b = (b || "fx") + "queue", d = S._data(a, b), c && (!d || S.isArray(c) ? d = S._data(a, b, S.makeArray(c)) : d.push(c)), d || []
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = S.queue(a, b), d = c.length, e = c.shift(), f = S._queueHooks(a, b), g = function () {
                S.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        }, _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return S._data(a, c) || S._data(a, c, {
                    empty: S.Callbacks("once memory").add(function () {
                        S.removeData(a, b + "queue", !0), S.removeData(a, c, !0)
                    })
                })
        }
    }), S.fn.extend({
        queue: function (a, c) {
            var d = 2;
            return "string" != typeof a && (c = a, a = "fx", d--), arguments.length < d ? S.queue(this[0], a) : c === b ? this : this.each(function () {
                var b = S.queue(this, a, c);
                S._queueHooks(this, a), "fx" === a && "inprogress" !== b[0] && S.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                S.dequeue(this, a)
            })
        }, delay: function (a, b) {
            return a = S.fx ? S.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
                var d = setTimeout(b, a);
                c.stop = function () {
                    clearTimeout(d)
                }
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, c) {
            var d, e = 1, f = S.Deferred(), g = this, h = this.length, i = function () {
                --e || f.resolveWith(g, [g])
            };
            for ("string" != typeof a && (c = a, a = b), a = a || "fx"; h--;)d = S._data(g[h], a + "queueHooks"), d && d.empty && (e++, d.empty.add(i));
            return i(), f.promise(c)
        }
    });
    var ja, ka, la = /[\t\r\n]/g, ma = /\r/g, na = /^(?:button|input)$/i,
        oa = /^(?:button|input|object|select|textarea)$/i, pa = /^a(?:rea|)$/i,
        qa = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        ra = S.support.getSetAttribute;
    S.fn.extend({
        attr: function (a, b) {
            return S.access(this, S.attr, a, b, arguments.length > 1)
        }, removeAttr: function (a) {
            return this.each(function () {
                S.removeAttr(this, a)
            })
        }, prop: function (a, b) {
            return S.access(this, S.prop, a, b, arguments.length > 1)
        }, removeProp: function (a) {
            return a = S.propFix[a] || a, this.each(function () {
                try {
                    this[a] = b, delete this[a]
                } catch (a) {
                }
            })
        }, addClass: function (a) {
            var b, c, d, e, f, g, h;
            if (S.isFunction(a))return this.each(function (b) {
                S(this).addClass(a.call(this, b, this.className))
            });
            if (a && "string" == typeof a)for (b = a.split(V), c = 0, d = this.length; c < d; c++)if (e = this[c], 1 === e.nodeType)if (e.className || 1 !== b.length) {
                for (f = " " + e.className + " ", g = 0, h = b.length; g < h; g++)f.indexOf(" " + b[g] + " ") < 0 && (f += b[g] + " ");
                e.className = S.trim(f)
            } else e.className = a;
            return this
        }, removeClass: function (a) {
            var c, d, e, f, g, h, i;
            if (S.isFunction(a))return this.each(function (b) {
                S(this).removeClass(a.call(this, b, this.className))
            });
            if (a && "string" == typeof a || a === b)for (c = (a || "").split(V), h = 0, i = this.length; h < i; h++)if (e = this[h], 1 === e.nodeType && e.className) {
                for (d = (" " + e.className + " ").replace(la, " "), f = 0, g = c.length; f < g; f++)for (; d.indexOf(" " + c[f] + " ") >= 0;)d = d.replace(" " + c[f] + " ", " ");
                e.className = a ? S.trim(d) : ""
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a, d = "boolean" == typeof b;
            return S.isFunction(a) ? this.each(function (c) {
                S(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function () {
                if ("string" === c)for (var e, f = 0, g = S(this), h = b, i = a.split(V); e = i[f++];)h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e); else"undefined" !== c && "boolean" !== c || (this.className && S._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : S._data(this, "__className__") || "")
            })
        }, hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; c < d; c++)if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(la, " ").indexOf(b) >= 0)return !0;
            return !1
        }, val: function (a) {
            var c, d, e, f = this[0];
            {
                if (arguments.length)return e = S.isFunction(a), this.each(function (d) {
                    var f, g = S(this);
                    1 === this.nodeType && (f = e ? a.call(this, d, g.val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : S.isArray(f) && (f = S.map(f, function (a) {
                            return null == a ? "" : a + ""
                        })), c = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()], c && "set" in c && c.set(this, f, "value") !== b || (this.value = f))
                });
                if (f)return c = S.valHooks[f.type] || S.valHooks[f.nodeName.toLowerCase()], c && "get" in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, "string" == typeof d ? d.replace(ma, "") : null == d ? "" : d)
            }
        }
    }), S.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            }, select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || e < 0, g = f ? null : [], h = f ? e + 1 : d.length, i = e < 0 ? h : f ? e : 0; i < h; i++)if (c = d[i], (c.selected || i === e) && (S.support.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !S.nodeName(c.parentNode, "optgroup"))) {
                        if (b = S(c).val(), f)return b;
                        g.push(b)
                    }
                    return g
                }, set: function (a, b) {
                    var c = S.makeArray(b);
                    return S(a).find("option").each(function () {
                        this.selected = S.inArray(S(this).val(), c) >= 0
                    }), c.length || (a.selectedIndex = -1), c
                }
            }
        },
        attrFn: {},
        attr: function (a, c, d, e) {
            var f, g, h, i = a.nodeType;
            if (a && 3 !== i && 8 !== i && 2 !== i)return e && S.isFunction(S.fn[c]) ? S(a)[c](d) : "undefined" == typeof a.getAttribute ? S.prop(a, c, d) : (h = 1 !== i || !S.isXMLDoc(a), h && (c = c.toLowerCase(), g = S.attrHooks[c] || (qa.test(c) ? ka : ja)), d !== b ? null === d ? void S.removeAttr(a, c) : g && "set" in g && h && (f = g.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""), d) : g && "get" in g && h && null !== (f = g.get(a, c)) ? f : (f = a.getAttribute(c), null === f ? b : f))
        },
        removeAttr: function (a, b) {
            var c, d, e, f, g = 0;
            if (b && 1 === a.nodeType)for (d = b.split(V); g < d.length; g++)e = d[g], e && (c = S.propFix[e] || e, f = qa.test(e), f || S.attr(a, e, ""), a.removeAttribute(ra ? e : c), f && c in a && (a[c] = !1))
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (na.test(a.nodeName) && a.parentNode) S.error("type property can't be changed"); else if (!S.support.radioValue && "radio" === b && S.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }, value: {
                get: function (a, b) {
                    return ja && S.nodeName(a, "button") ? ja.get(a, b) : b in a ? a.value : null
                }, set: function (a, b, c) {
                    return ja && S.nodeName(a, "button") ? ja.set(a, b, c) : void(a.value = b)
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            for: "htmlFor",
            class: "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (a, c, d) {
            var e, f, g, h = a.nodeType;
            if (a && 3 !== h && 8 !== h && 2 !== h)return g = 1 !== h || !S.isXMLDoc(a), g && (c = S.propFix[c] || c, f = S.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c]
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : oa.test(a.nodeName) || pa.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }), ka = {
        get: function (a, c) {
            var d, e = S.prop(a, c);
            return e === !0 || "boolean" != typeof e && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        }, set: function (a, b, c) {
            var d;
            return b === !1 ? S.removeAttr(a, c) : (d = S.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())), c
        }
    }, S.support.enctype || (S.propFix.enctype = "encoding");
    var sa = /^([^\.]*|)(?:\.(.+)|)$/, ta = /(?:^|\s)hover(\.\S+|)\b/, ua = /^key/, va = /^(?:mouse|contextmenu)|click/,
        wa = /^(?:focusinfocus|focusoutblur)$/, xa = function (a) {
            return S.event.special.hover ? a : a.replace(ta, "mouseenter$1 mouseleave$1")
        };
    S.event = {
        add: function (a, c, d, e, f) {
            var g, h, i, j, k, l, m, n, o, p, q;
            if (3 !== a.nodeType && 8 !== a.nodeType && c && d && (g = S._data(a))) {
                for (d.handler && (o = d, d = o.handler, f = o.selector), d.guid || (d.guid = S.guid++), i = g.events, i || (g.events = i = {}), h = g.handle, h || (g.handle = h = function (a) {
                    return "undefined" == typeof S || a && S.event.triggered === a.type ? b : S.event.dispatch.apply(h.elem, arguments)
                }, h.elem = a), c = S.trim(xa(c)).split(" "), j = 0; j < c.length; j++)k = sa.exec(c[j]) || [], l = k[1], m = (k[2] || "").split(".").sort(), q = S.event.special[l] || {}, l = (f ? q.delegateType : q.bindType) || l, q = S.event.special[l] || {}, n = S.extend({
                    type: l,
                    origType: k[1],
                    data: e,
                    handler: d,
                    guid: d.guid,
                    selector: f,
                    needsContext: f && S.expr.match.needsContext.test(f),
                    namespace: m.join(".")
                }, o), p = i[l], p || (p = i[l] = [], p.delegateCount = 0, q.setup && q.setup.call(a, e, m, h) !== !1 || (a.addEventListener ? a.addEventListener(l, h, !1) : a.attachEvent && a.attachEvent("on" + l, h))), q.add && (q.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)), f ? p.splice(p.delegateCount++, 0, n) : p.push(n), S.event.global[l] = !0;
                a = null
            }
        },
        global: {},
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = S.hasData(a) && S._data(a);
            if (q && (m = q.events)) {
                for (b = S.trim(xa(b || "")).split(" "), f = 0; f < b.length; f++)if (g = sa.exec(b[f]) || [], h = i = g[1], j = g[2], h) {
                    for (n = S.event.special[h] || {}, h = (d ? n.delegateType : n.bindType) || h, o = m[h] || [], k = o.length, j = j ? new RegExp("(^|\\.)" + j.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, l = 0; l < o.length; l++)p = o[l], !e && i !== p.origType || c && c.guid !== p.guid || j && !j.test(p.namespace) || d && d !== p.selector && ("**" !== d || !p.selector) || (o.splice(l--, 1), p.selector && o.delegateCount--, n.remove && n.remove.call(a, p));
                    0 === o.length && k !== o.length && (n.teardown && n.teardown.call(a, j, q.handle) !== !1 || S.removeEvent(a, h, q.handle), delete m[h])
                } else for (h in m)S.event.remove(a, h + b[f], c, d, !0);
                S.isEmptyObject(m) && (delete q.handle, S.removeData(a, "events", !0))
            }
        },
        customEvent: {getData: !0, setData: !0, changeData: !0},
        trigger: function (c, d, e, f) {
            if (!e || 3 !== e.nodeType && 8 !== e.nodeType) {
                var g, h, i, j, k, l, m, n, o, p, q = c.type || c, r = [];
                if (!wa.test(q + S.event.triggered) && (q.indexOf("!") >= 0 && (q = q.slice(0, -1), h = !0), q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), e && !S.event.customEvent[q] || S.event.global[q]))if (c = "object" == typeof c ? c[S.expando] ? c : new S.Event(q, c) : new S.Event(q), c.type = q, c.isTrigger = !0, c.exclusive = h, c.namespace = r.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, l = q.indexOf(":") < 0 ? "on" + q : "", e) {
                    if (c.result = b, c.target || (c.target = e), d = null != d ? S.makeArray(d) : [], d.unshift(c), m = S.event.special[q] || {}, !m.trigger || m.trigger.apply(e, d) !== !1) {
                        if (o = [[e, m.bindType || q]], !f && !m.noBubble && !S.isWindow(e)) {
                            for (p = m.delegateType || q, j = wa.test(p + q) ? e : e.parentNode, k = e; j; j = j.parentNode)o.push([j, p]), k = j;
                            k === (e.ownerDocument || I) && o.push([k.defaultView || k.parentWindow || a, p])
                        }
                        for (i = 0; i < o.length && !c.isPropagationStopped(); i++)j = o[i][0], c.type = o[i][1], n = (S._data(j, "events") || {})[c.type] && S._data(j, "handle"), n && n.apply(j, d), n = l && j[l], n && S.acceptData(j) && n.apply && n.apply(j, d) === !1 && c.preventDefault();
                        return c.type = q, f || c.isDefaultPrevented() || m._default && m._default.apply(e.ownerDocument, d) !== !1 || "click" === q && S.nodeName(e, "a") || !S.acceptData(e) || l && e[q] && ("focus" !== q && "blur" !== q || 0 !== c.target.offsetWidth) && !S.isWindow(e) && (k = e[l], k && (e[l] = null), S.event.triggered = q, e[q](), S.event.triggered = b, k && (e[l] = k)), c.result
                    }
                } else {
                    g = S.cache;
                    for (i in g)g[i].events && g[i].events[q] && S.event.trigger(c, d, g[i].handle.elem, !0)
                }
            }
        },
        dispatch: function (c) {
            c = S.event.fix(c || a.event);
            var d, e, f, g, h, i, j, k, l, m = (S._data(this, "events") || {})[c.type] || [], n = m.delegateCount,
                o = N.call(arguments), p = !c.exclusive && !c.namespace, q = S.event.special[c.type] || {}, r = [];
            if (o[0] = c, c.delegateTarget = this, !q.preDispatch || q.preDispatch.call(this, c) !== !1) {
                if (n && (!c.button || "click" !== c.type))for (f = c.target; f != this; f = f.parentNode || this)if (f.disabled !== !0 || "click" !== c.type) {
                    for (h = {}, j = [], d = 0; d < n; d++)k = m[d], l = k.selector, h[l] === b && (h[l] = k.needsContext ? S(l, this).index(f) >= 0 : S.find(l, this, null, [f]).length), h[l] && j.push(k);
                    j.length && r.push({elem: f, matches: j})
                }
                for (m.length > n && r.push({
                    elem: this,
                    matches: m.slice(n)
                }), d = 0; d < r.length && !c.isPropagationStopped(); d++)for (i = r[d], c.currentTarget = i.elem, e = 0; e < i.matches.length && !c.isImmediatePropagationStopped(); e++)k = i.matches[e], (p || !c.namespace && !k.namespace || c.namespace_re && c.namespace_re.test(k.namespace)) && (c.data = k.data, c.handleObj = k, g = ((S.event.special[k.origType] || {}).handle || k.handler).apply(i.elem, o), g !== b && (c.result = g, g === !1 && (c.preventDefault(), c.stopPropagation())));
                return q.postDispatch && q.postDispatch.call(this, c), c.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, c) {
                var d, e, f, g = c.button, h = c.fromElement;
                return null == a.pageX && null != c.clientX && (d = a.target.ownerDocument || I, e = d.documentElement, f = d.body, a.pageX = c.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = c.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement : h), a.which || g === b || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        fix: function (a) {
            if (a[S.expando])return a;
            var b, c, d = a, e = S.event.fixHooks[a.type] || {}, f = e.props ? this.props.concat(e.props) : this.props;
            for (a = S.Event(d), b = f.length; b;)c = f[--b], a[c] = d[c];
            return a.target || (a.target = d.srcElement || I), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, e.filter ? e.filter(a, d) : a
        },
        special: {
            load: {noBubble: !0},
            focus: {delegateType: "focusin"},
            blur: {delegateType: "focusout"},
            beforeunload: {
                setup: function (a, b, c) {
                    S.isWindow(this) && (this.onbeforeunload = c)
                }, teardown: function (a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = S.extend(new S.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
            d ? S.event.trigger(e, null, b) : S.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, S.event.handle = S.event.dispatch, S.removeEvent = I.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        var d = "on" + b;
        a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c))
    }, S.Event = function (a, b) {
        return this instanceof S.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? g : f) : this.type = a, b && S.extend(this, b), this.timeStamp = a && a.timeStamp || S.now(), void(this[S.expando] = !0)) : new S.Event(a, b)
    }, S.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = g;
            var a = this.originalEvent;
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        }, stopPropagation: function () {
            this.isPropagationStopped = g;
            var a = this.originalEvent;
            a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        }, stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = g, this.stopPropagation()
        }, isDefaultPrevented: f, isPropagationStopped: f, isImmediatePropagationStopped: f
    }, S.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (a, b) {
        S.event.special[a] = {
            delegateType: b, bindType: b, handle: function (a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                f.selector;
                return e && (e === d || S.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), S.fn.extend({
        on: function (a, c, d, e, g) {
            var h, i;
            if ("object" == typeof a) {
                "string" != typeof c && (d = d || c, c = b);
                for (i in a)this.on(i, c, d, a[i], g);
                return this
            }
            if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1) e = f; else if (!e)return this;
            return 1 === g && (h = e, e = function (a) {
                return S().off(a), h.apply(this, arguments)
            }, e.guid = h.guid || (h.guid = S.guid++)), this.each(function () {
                S.event.add(this, a, e, d, c)
            })
        }, off: function (a, c, d) {
            var e, g;
            if (a && a.preventDefault && a.handleObj)return e = a.handleObj, S(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
            if ("object" == typeof a) {
                for (g in a)this.off(g, c, a[g]);
                return this
            }
            return c !== !1 && "function" != typeof c || (d = c, c = b), d === !1 && (d = f), this.each(function () {
                S.event.remove(this, a, d, c)
            })
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }, trigger: function (a, b) {
            return this.each(function () {
                S.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            if (this[0])return S.event.trigger(a, b, this[0], !0)
        }, toggle: function (a) {
            var b = arguments, c = a.guid || S.guid++, d = 0, e = function (c) {
                var e = (S._data(this, "lastToggle" + a.guid) || 0) % d;
                return S._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault(), b[e].apply(this, arguments) || !1
            };
            for (e.guid = c; d < b.length;)b[d++].guid = c;
            return this.click(e)
        }, hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), S.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        S.fn[b] = function (a, c) {
            return null == c && (c = a, a = null), arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }, ua.test(b) && (S.event.fixHooks[b] = S.event.keyHooks), va.test(b) && (S.event.fixHooks[b] = S.event.mouseHooks)
    }), function (a, b) {
        function c(a, b, c, d) {
            c = c || [], b = b || F;
            var e, f, g, h, i = b.nodeType;
            if (!a || "string" != typeof a)return c;
            if (1 !== i && 9 !== i)return [];
            if (g = v(b), !g && !d && (e = ca.exec(a)))if (h = e[1]) {
                if (9 === i) {
                    if (f = b.getElementById(h), !f || !f.parentNode)return c;
                    if (f.id === h)return c.push(f), c
                } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(h)) && w(b, f) && f.id === h)return c.push(f), c
            } else {
                if (e[2])return K.apply(c, L.call(b.getElementsByTagName(a), 0)), c;
                if ((h = e[3]) && ma && b.getElementsByClassName)return K.apply(c, L.call(b.getElementsByClassName(h), 0)), c
            }
            return p(a.replace($, "$1"), b, c, d, g)
        }

        function d(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function e(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function f(a) {
            return N(function (b) {
                return b = +b, N(function (c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;)c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function g(a, b, c) {
            if (a === b)return c;
            for (var d = a.nextSibling; d;) {
                if (d === b)return -1;
                d = d.nextSibling
            }
            return 1
        }

        function h(a, b) {
            var d, e, f, g, h, i, j, k = Q[D][a + " "];
            if (k)return b ? 0 : k.slice(0);
            for (h = a, i = [], j = t.preFilter; h;) {
                d && !(e = _.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = aa.exec(h)) && (f.push(d = new E(e.shift())), h = h.slice(d.length), d.type = e[0].replace($, " "));
                for (g in t.filter)!(e = ha[g].exec(h)) || j[g] && !(e = j[g](e)) || (f.push(d = new E(e.shift())), h = h.slice(d.length), d.type = g, d.matches = e);
                if (!d)break
            }
            return b ? h.length : h ? c.error(a) : Q(a, i).slice(0)
        }

        function i(a, b, c) {
            var d = b.dir, e = c && "parentNode" === b.dir, f = I++;
            return b.first ? function (b, c, f) {
                for (; b = b[d];)if (e || 1 === b.nodeType)return a(b, c, f)
            } : function (b, c, g) {
                if (g) {
                    for (; b = b[d];)if ((e || 1 === b.nodeType) && a(b, c, g))return b
                } else for (var h, i = H + " " + f + " ", j = i + r; b = b[d];)if (e || 1 === b.nodeType) {
                    if ((h = b[D]) === j)return b.sizset;
                    if ("string" == typeof h && 0 === h.indexOf(i)) {
                        if (b.sizset)return b
                    } else {
                        if (b[D] = j, a(b, c, g))return b.sizset = !0, b;
                        b.sizset = !1
                    }
                }
            }
        }

        function j(a) {
            return a.length > 1 ? function (b, c, d) {
                for (var e = a.length; e--;)if (!a[e](b, c, d))return !1;
                return !0
            } : a[0]
        }

        function k(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function l(a, b, c, d, e, f) {
            return d && !d[D] && (d = l(d)), e && !e[D] && (e = l(e, f)), N(function (f, g, h, i) {
                var j, l, m, n = [], p = [], q = g.length, r = f || o(b || "*", h.nodeType ? [h] : h, []),
                    s = !a || !f && b ? r : k(r, n, a, h, i), t = c ? e || (f ? a : q || d) ? [] : g : s;
                if (c && c(s, t, h, i), d)for (j = k(t, p), d(j, [], h, i), l = j.length; l--;)(m = j[l]) && (t[p[l]] = !(s[p[l]] = m));
                if (f) {
                    if (e || a) {
                        if (e) {
                            for (j = [], l = t.length; l--;)(m = t[l]) && j.push(s[l] = m);
                            e(null, t = [], j, i)
                        }
                        for (l = t.length; l--;)(m = t[l]) && (j = e ? M.call(f, m) : n[l]) > -1 && (f[j] = !(g[j] = m))
                    }
                } else t = k(t === g ? t.splice(q, t.length) : t), e ? e(null, g, t, i) : K.apply(g, t)
            })
        }

        function m(a) {
            for (var b, c, d, e = a.length, f = t.relative[a[0].type], g = f || t.relative[" "], h = f ? 1 : 0, k = i(function (a) {
                return a === b
            }, g, !0), n = i(function (a) {
                return M.call(b, a) > -1
            }, g, !0), o = [function (a, c, d) {
                return !f && (d || c !== A) || ((b = c).nodeType ? k(a, c, d) : n(a, c, d))
            }]; h < e; h++)if (c = t.relative[a[h].type]) o = [i(j(o), c)]; else {
                if (c = t.filter[a[h].type].apply(null, a[h].matches), c[D]) {
                    for (d = ++h; d < e && !t.relative[a[d].type]; d++);
                    return l(h > 1 && j(o), h > 1 && a.slice(0, h - 1).join("").replace($, "$1"), c, h < d && m(a.slice(h, d)), d < e && m(a = a.slice(d)), d < e && a.join(""))
                }
                o.push(c)
            }
            return j(o)
        }

        function n(a, b) {
            var d = b.length > 0, e = a.length > 0, f = function (g, h, i, j, l) {
                var m, n, o, p = [], q = 0, s = "0", u = g && [], v = null != l, w = A,
                    x = g || e && t.find.TAG("*", l && h.parentNode || h), y = H += null == w ? 1 : Math.E;
                for (v && (A = h !== F && h, r = f.el); null != (m = x[s]); s++) {
                    if (e && m) {
                        for (n = 0; o = a[n]; n++)if (o(m, h, i)) {
                            j.push(m);
                            break
                        }
                        v && (H = y, r = ++f.el)
                    }
                    d && ((m = !o && m) && q--, g && u.push(m))
                }
                if (q += s, d && s !== q) {
                    for (n = 0; o = b[n]; n++)o(u, p, h, i);
                    if (g) {
                        if (q > 0)for (; s--;)u[s] || p[s] || (p[s] = J.call(j));
                        p = k(p)
                    }
                    K.apply(j, p), v && !g && p.length > 0 && q + b.length > 1 && c.uniqueSort(j)
                }
                return v && (H = y, A = w), u
            };
            return f.el = 0, d ? N(f) : f
        }

        function o(a, b, d) {
            for (var e = 0, f = b.length; e < f; e++)c(a, b[e], d);
            return d
        }

        function p(a, b, c, d, e) {
            var f, g, i, j, k, l = h(a);
            l.length;
            if (!d && 1 === l.length) {
                if (g = l[0] = l[0].slice(0), g.length > 2 && "ID" === (i = g[0]).type && 9 === b.nodeType && !e && t.relative[g[1].type]) {
                    if (b = t.find.ID(i.matches[0].replace(ga, ""), b, e)[0], !b)return c;
                    a = a.slice(g.shift().length)
                }
                for (f = ha.POS.test(a) ? -1 : g.length - 1; f >= 0 && (i = g[f], !t.relative[j = i.type]); f--)if ((k = t.find[j]) && (d = k(i.matches[0].replace(ga, ""), da.test(g[0].type) && b.parentNode || b, e))) {
                    if (g.splice(f, 1), a = d.length && g.join(""), !a)return K.apply(c, L.call(d, 0)), c;
                    break
                }
            }
            return x(a, l)(d, b, e, c, da.test(a)), c
        }

        function q() {
        }

        var r, s, t, u, v, w, x, y, z, A, B = !0, C = "undefined", D = ("sizcache" + Math.random()).replace(".", ""),
            E = String, F = a.document, G = F.documentElement, H = 0, I = 0, J = [].pop, K = [].push, L = [].slice,
            M = [].indexOf || function (a) {
                    for (var b = 0, c = this.length; b < c; b++)if (this[b] === a)return b;
                    return -1
                }, N = function (a, b) {
                return a[D] = null == b || b, a
            }, O = function () {
                var a = {}, b = [];
                return N(function (c, d) {
                    return b.push(c) > t.cacheLength && delete a[b.shift()], a[c + " "] = d
                }, a)
            }, P = O(), Q = O(), R = O(), T = "[\\x20\\t\\r\\n\\f]", U = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
            V = U.replace("w", "w#"), W = "([*^$|!~]?=)",
            X = "\\[" + T + "*(" + U + ")" + T + "*(?:" + W + T + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + V + ")|)|)" + T + "*\\]",
            Y = ":(" + U + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + X + ")|[^:]|\\\\.)*|.*))\\)|)",
            Z = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + T + "*((?:-\\d)?\\d*)" + T + "*\\)|)(?=[^-]|$)",
            $ = new RegExp("^" + T + "+|((?:^|[^\\\\])(?:\\\\.)*)" + T + "+$", "g"),
            _ = new RegExp("^" + T + "*," + T + "*"), aa = new RegExp("^" + T + "*([\\x20\\t\\r\\n\\f>+~])" + T + "*"),
            ba = new RegExp(Y), ca = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, da = /[\x20\t\r\n\f]*[+~]/, ea = /h\d/i,
            fa = /input|select|textarea|button/i, ga = /\\(?!\\)/g, ha = {
                ID: new RegExp("^#(" + U + ")"),
                CLASS: new RegExp("^\\.(" + U + ")"),
                NAME: new RegExp("^\\[name=['\"]?(" + U + ")['\"]?\\]"),
                TAG: new RegExp("^(" + U.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + X),
                PSEUDO: new RegExp("^" + Y),
                POS: new RegExp(Z, "i"),
                CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + T + "*(even|odd|(([+-]|)(\\d*)n|)" + T + "*(?:([+-]|)" + T + "*(\\d+)|))" + T + "*\\)|)", "i"),
                needsContext: new RegExp("^" + T + "*[>+~]|" + Z, "i")
            }, ia = function (a) {
                var b = F.createElement("div");
                try {
                    return a(b)
                } catch (a) {
                    return !1
                } finally {
                    b = null
                }
            }, ja = ia(function (a) {
                return a.appendChild(F.createComment("")), !a.getElementsByTagName("*").length
            }), ka = ia(function (a) {
                return a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute !== C && "#" === a.firstChild.getAttribute("href")
            }), la = ia(function (a) {
                a.innerHTML = "<select></select>";
                var b = typeof a.lastChild.getAttribute("multiple");
                return "boolean" !== b && "string" !== b
            }), ma = ia(function (a) {
                return a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !(!a.getElementsByClassName || !a.getElementsByClassName("e").length) && (a.lastChild.className = "e", 2 === a.getElementsByClassName("e").length)
            }), na = ia(function (a) {
                a.id = D + 0, a.innerHTML = "<a name='" + D + "'></a><div name='" + D + "'></div>", G.insertBefore(a, G.firstChild);
                var b = F.getElementsByName && F.getElementsByName(D).length === 2 + F.getElementsByName(D + 0).length;
                return s = !F.getElementById(D), G.removeChild(a), b
            });
        try {
            L.call(G.childNodes, 0)[0].nodeType
        } catch (a) {
            L = function (a) {
                for (var b, c = []; b = this[a]; a++)c.push(b);
                return c
            }
        }
        c.matches = function (a, b) {
            return c(a, null, null, b)
        }, c.matchesSelector = function (a, b) {
            return c(b, null, null, [a]).length > 0
        }, u = c.getText = function (a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent)return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)c += u(a)
                } else if (3 === e || 4 === e)return a.nodeValue
            } else for (; b = a[d]; d++)c += u(b);
            return c
        }, v = c.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName
        }, w = c.contains = G.contains ? function (a, b) {
            var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
            return a === d || !!(d && 1 === d.nodeType && c.contains && c.contains(d))
        } : G.compareDocumentPosition ? function (a, b) {
            return b && !!(16 & a.compareDocumentPosition(b))
        } : function (a, b) {
            for (; b = b.parentNode;)if (b === a)return !0;
            return !1
        }, c.attr = function (a, b) {
            var c, d = v(a);
            return d || (b = b.toLowerCase()), (c = t.attrHandle[b]) ? c(a) : d || la ? a.getAttribute(b) : (c = a.getAttributeNode(b), c ? "boolean" == typeof a[b] ? a[b] ? b : null : c.specified ? c.value : null : null)
        }, t = c.selectors = {
            cacheLength: 50,
            createPseudo: N,
            match: ha,
            attrHandle: ka ? {} : {
                href: function (a) {
                    return a.getAttribute("href", 2)
                }, type: function (a) {
                    return a.getAttribute("type")
                }
            },
            find: {
                ID: s ? function (a, b, c) {
                    if (typeof b.getElementById !== C && !c) {
                        var d = b.getElementById(a);
                        return d && d.parentNode ? [d] : []
                    }
                } : function (a, c, d) {
                    if (typeof c.getElementById !== C && !d) {
                        var e = c.getElementById(a);
                        return e ? e.id === a || typeof e.getAttributeNode !== C && e.getAttributeNode("id").value === a ? [e] : b : []
                    }
                }, TAG: ja ? function (a, b) {
                    if (typeof b.getElementsByTagName !== C)return b.getElementsByTagName(a)
                } : function (a, b) {
                    var c = b.getElementsByTagName(a);
                    if ("*" === a) {
                        for (var d, e = [], f = 0; d = c[f]; f++)1 === d.nodeType && e.push(d);
                        return e
                    }
                    return c
                }, NAME: na && function (a, b) {
                    if (typeof b.getElementsByName !== C)return b.getElementsByName(name)
                }, CLASS: ma && function (a, b, c) {
                    if (typeof b.getElementsByClassName !== C && !c)return b.getElementsByClassName(a)
                }
            },
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(ga, ""), a[3] = (a[4] || a[5] || "").replace(ga, ""), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                }, CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1] ? (a[2] || c.error(a[0]), a[3] = +(a[3] ? a[4] + (a[5] || 1) : 2 * ("even" === a[2] || "odd" === a[2])), a[4] = +(a[6] + a[7] || "odd" === a[2])) : a[2] && c.error(a[0]), a
                }, PSEUDO: function (a) {
                    var b, c;
                    return ha.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[3] : (b = a[4]) && (ba.test(b) && (c = h(b, !0)) && (c = b.indexOf(")", b.length - c) - b.length) && (b = b.slice(0, c), a[0] = a[0].slice(0, c)), a[2] = b), a.slice(0, 3))
                }
            },
            filter: {
                ID: s ? function (a) {
                    return a = a.replace(ga, ""), function (b) {
                        return b.getAttribute("id") === a
                    }
                } : function (a) {
                    return a = a.replace(ga, ""), function (b) {
                        var c = typeof b.getAttributeNode !== C && b.getAttributeNode("id");
                        return c && c.value === a
                    }
                }, TAG: function (a) {
                    return "*" === a ? function () {
                        return !0
                    } : (a = a.replace(ga, "").toLowerCase(), function (b) {
                        return b.nodeName && b.nodeName.toLowerCase() === a
                    })
                }, CLASS: function (a) {
                    var b = P[D][a + " "];
                    return b || (b = new RegExp("(^|" + T + ")" + a + "(" + T + "|$)")) && P(a, function (a) {
                            return b.test(a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
                        })
                }, ATTR: function (a, b, d) {
                    return function (e, f) {
                        var g = c.attr(e, a);
                        return null == g ? "!=" === b : !b || (g += "", "=" === b ? g === d : "!=" === b ? g !== d : "^=" === b ? d && 0 === g.indexOf(d) : "*=" === b ? d && g.indexOf(d) > -1 : "$=" === b ? d && g.substr(g.length - d.length) === d : "~=" === b ? (" " + g + " ").indexOf(d) > -1 : "|=" === b && (g === d || g.substr(0, d.length + 1) === d + "-"))
                    }
                }, CHILD: function (a, b, c, d) {
                    return "nth" === a ? function (a) {
                        var b, e, f = a.parentNode;
                        if (1 === c && 0 === d)return !0;
                        if (f)for (e = 0, b = f.firstChild; b && (1 !== b.nodeType || (e++, a !== b)); b = b.nextSibling);
                        return e -= d, e === c || e % c === 0 && e / c >= 0
                    } : function (b) {
                        var c = b;
                        switch (a) {
                            case"only":
                            case"first":
                                for (; c = c.previousSibling;)if (1 === c.nodeType)return !1;
                                if ("first" === a)return !0;
                                c = b;
                            case"last":
                                for (; c = c.nextSibling;)if (1 === c.nodeType)return !1;
                                return !0
                        }
                    }
                }, PSEUDO: function (a, b) {
                    var d, e = t.pseudos[a] || t.setFilters[a.toLowerCase()] || c.error("unsupported pseudo: " + a);
                    return e[D] ? e(b) : e.length > 1 ? (d = [a, a, "", b], t.setFilters.hasOwnProperty(a.toLowerCase()) ? N(function (a, c) {
                        for (var d, f = e(a, b), g = f.length; g--;)d = M.call(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function (a) {
                        return e(a, 0, d)
                    }) : e
                }
            },
            pseudos: {
                not: N(function (a) {
                    var b = [], c = [], d = x(a.replace($, "$1"));
                    return d[D] ? N(function (a, b, c, e) {
                        for (var f, g = d(a, null, e, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop()
                    }
                }),
                has: N(function (a) {
                    return function (b) {
                        return c(a, b).length > 0
                    }
                }),
                contains: N(function (a) {
                    return function (b) {
                        return (b.textContent || b.innerText || u(b)).indexOf(a) > -1
                    }
                }),
                enabled: function (a) {
                    return a.disabled === !1
                },
                disabled: function (a) {
                    return a.disabled === !0
                },
                checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                parent: function (a) {
                    return !t.pseudos.empty(a)
                },
                empty: function (a) {
                    var b;
                    for (a = a.firstChild; a;) {
                        if (a.nodeName > "@" || 3 === (b = a.nodeType) || 4 === b)return !1;
                        a = a.nextSibling
                    }
                    return !0
                },
                header: function (a) {
                    return ea.test(a.nodeName)
                },
                text: function (a) {
                    var b, c;
                    return "input" === a.nodeName.toLowerCase() && "text" === (b = a.type) && (null == (c = a.getAttribute("type")) || c.toLowerCase() === b)
                },
                radio: d("radio"),
                checkbox: d("checkbox"),
                file: d("file"),
                password: d("password"),
                image: d("image"),
                submit: e("submit"),
                reset: e("reset"),
                button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                input: function (a) {
                    return fa.test(a.nodeName)
                },
                focus: function (a) {
                    var b = a.ownerDocument;
                    return a === b.activeElement && (!b.hasFocus || b.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                active: function (a) {
                    return a === a.ownerDocument.activeElement
                },
                first: f(function () {
                    return [0]
                }),
                last: f(function (a, b) {
                    return [b - 1]
                }),
                eq: f(function (a, b, c) {
                    return [c < 0 ? c + b : c]
                }),
                even: f(function (a, b) {
                    for (var c = 0; c < b; c += 2)a.push(c);
                    return a
                }),
                odd: f(function (a, b) {
                    for (var c = 1; c < b; c += 2)a.push(c);
                    return a
                }),
                lt: f(function (a, b, c) {
                    for (var d = c < 0 ? c + b : c; --d >= 0;)a.push(d);
                    return a
                }),
                gt: f(function (a, b, c) {
                    for (var d = c < 0 ? c + b : c; ++d < b;)a.push(d);
                    return a
                })
            }
        }, y = G.compareDocumentPosition ? function (a, b) {
            return a === b ? (z = !0, 0) : (a.compareDocumentPosition && b.compareDocumentPosition ? 4 & a.compareDocumentPosition(b) : a.compareDocumentPosition) ? -1 : 1
        } : function (a, b) {
            if (a === b)return z = !0, 0;
            if (a.sourceIndex && b.sourceIndex)return a.sourceIndex - b.sourceIndex;
            var c, d, e = [], f = [], h = a.parentNode, i = b.parentNode, j = h;
            if (h === i)return g(a, b);
            if (!h)return -1;
            if (!i)return 1;
            for (; j;)e.unshift(j), j = j.parentNode;
            for (j = i; j;)f.unshift(j), j = j.parentNode;
            c = e.length, d = f.length;
            for (var k = 0; k < c && k < d; k++)if (e[k] !== f[k])return g(e[k], f[k]);
            return k === c ? g(a, f[k], -1) : g(e[k], b, 1)
        }, [0, 0].sort(y), B = !z, c.uniqueSort = function (a) {
            var b, c = [], d = 1, e = 0;
            if (z = B, a.sort(y), z) {
                for (; b = a[d]; d++)b === a[d - 1] && (e = c.push(d));
                for (; e--;)a.splice(c[e], 1)
            }
            return a
        }, c.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, x = c.compile = function (a, b) {
            var c, d = [], e = [], f = R[D][a + " "];
            if (!f) {
                for (b || (b = h(a)), c = b.length; c--;)f = m(b[c]), f[D] ? d.push(f) : e.push(f);
                f = R(a, n(e, d))
            }
            return f
        }, F.querySelectorAll && !function () {
            var a, b = p, d = /'|\\/g, e = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, f = [":focus"],
                g = [":active"],
                i = G.matchesSelector || G.mozMatchesSelector || G.webkitMatchesSelector || G.oMatchesSelector || G.msMatchesSelector;
            ia(function (a) {
                a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || f.push("\\[" + T + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), a.querySelectorAll(":checked").length || f.push(":checked")
            }), ia(function (a) {
                a.innerHTML = "<p test=''></p>", a.querySelectorAll("[test^='']").length && f.push("[*^$]=" + T + "*(?:\"\"|'')"), a.innerHTML = "<input type='hidden'/>", a.querySelectorAll(":enabled").length || f.push(":enabled", ":disabled")
            }), f = new RegExp(f.join("|")), p = function (a, c, e, g, i) {
                if (!g && !i && !f.test(a)) {
                    var j, k, l = !0, m = D, n = c, o = 9 === c.nodeType && a;
                    if (1 === c.nodeType && "object" !== c.nodeName.toLowerCase()) {
                        for (j = h(a), (l = c.getAttribute("id")) ? m = l.replace(d, "\\$&") : c.setAttribute("id", m), m = "[id='" + m + "'] ", k = j.length; k--;)j[k] = m + j[k].join("");
                        n = da.test(a) && c.parentNode || c, o = j.join(",")
                    }
                    if (o)try {
                        return K.apply(e, L.call(n.querySelectorAll(o), 0)), e
                    } catch (a) {
                    } finally {
                        l || c.removeAttribute("id")
                    }
                }
                return b(a, c, e, g, i)
            }, i && (ia(function (b) {
                a = i.call(b, "div");
                try {
                    i.call(b, "[test!='']:sizzle"), g.push("!=", Y)
                } catch (a) {
                }
            }), g = new RegExp(g.join("|")), c.matchesSelector = function (b, d) {
                if (d = d.replace(e, "='$1']"), !v(b) && !g.test(d) && !f.test(d))try {
                    var h = i.call(b, d);
                    if (h || a || b.document && 11 !== b.document.nodeType)return h
                } catch (a) {
                }
                return c(d, null, null, [b]).length > 0
            })
        }(), t.pseudos.nth = t.pseudos.eq, t.filters = q.prototype = t.pseudos, t.setFilters = new q, c.attr = S.attr, S.find = c, S.expr = c.selectors, S.expr[":"] = S.expr.pseudos, S.unique = c.uniqueSort, S.text = c.getText, S.isXMLDoc = c.isXML, S.contains = c.contains
    }(a);
    var ya = /Until$/, za = /^(?:parents|prev(?:Until|All))/, Aa = /^.[^:#\[\.,]*$/, Ba = S.expr.match.needsContext,
        Ca = {children: !0, contents: !0, next: !0, prev: !0};
    S.fn.extend({
        find: function (a) {
            var b, c, d, e, f, g, h = this;
            if ("string" != typeof a)return S(a).filter(function () {
                for (b = 0, c = h.length; b < c; b++)if (S.contains(h[b], this))return !0
            });
            for (g = this.pushStack("", "find", a), b = 0, c = this.length; b < c; b++)if (d = g.length, S.find(a, this[b], g), b > 0)for (e = d; e < g.length; e++)for (f = 0; f < d; f++)if (g[f] === g[e]) {
                g.splice(e--, 1);
                break
            }
            return g
        }, has: function (a) {
            var b, c = S(a, this), d = c.length;
            return this.filter(function () {
                for (b = 0; b < d; b++)if (S.contains(this, c[b]))return !0
            })
        }, not: function (a) {
            return this.pushStack(j(this, a, !1), "not", a)
        }, filter: function (a) {
            return this.pushStack(j(this, a, !0), "filter", a)
        }, is: function (a) {
            return !!a && ("string" == typeof a ? Ba.test(a) ? S(a, this.context).index(this[0]) >= 0 : S.filter(a, this).length > 0 : this.filter(a).length > 0)
        }, closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = Ba.test(a) || "string" != typeof a ? S(a, b || this.context) : 0; d < e; d++)for (c = this[d]; c && c.ownerDocument && c !== b && 11 !== c.nodeType;) {
                if (g ? g.index(c) > -1 : S.find.matchesSelector(c, a)) {
                    f.push(c);
                    break
                }
                c = c.parentNode
            }
            return f = f.length > 1 ? S.unique(f) : f, this.pushStack(f, "closest", a)
        }, index: function (a) {
            return a ? "string" == typeof a ? S.inArray(this[0], S(a)) : S.inArray(a.jqx ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        }, add: function (a, b) {
            var c = "string" == typeof a ? S(a, b) : S.makeArray(a && a.nodeType ? [a] : a), d = S.merge(this.get(), c);
            return this.pushStack(h(c[0]) || h(d[0]) ? d : S.unique(d))
        }, addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), S.fn.andSelf = S.fn.addBack, S.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        }, parents: function (a) {
            return S.dir(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return S.dir(a, "parentNode", c)
        }, next: function (a) {
            return i(a, "nextSibling")
        }, prev: function (a) {
            return i(a, "previousSibling")
        }, nextAll: function (a) {
            return S.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return S.dir(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return S.dir(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return S.dir(a, "previousSibling", c)
        }, siblings: function (a) {
            return S.sibling((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return S.sibling(a.firstChild)
        }, contents: function (a) {
            return S.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : S.merge([], a.childNodes)
        }
    }, function (a, b) {
        S.fn[a] = function (c, d) {
            var e = S.map(this, b, c);
            return ya.test(a) || (d = c), d && "string" == typeof d && (e = S.filter(d, e)), e = this.length > 1 && !Ca[a] ? S.unique(e) : e, this.length > 1 && za.test(a) && (e = e.reverse()), this.pushStack(e, a, N.call(arguments).join(","))
        }
    }), S.extend({
        filter: function (a, b, c) {
            return c && (a = ":not(" + a + ")"), 1 === b.length ? S.find.matchesSelector(b[0], a) ? [b[0]] : [] : S.find.matches(a, b)
        }, dir: function (a, c, d) {
            for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !S(f).is(d));)1 === f.nodeType && e.push(f), f = f[c];
            return e
        }, sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    var Da = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Ea = / JQX\d+="(?:null|\d+)"/g, Fa = /^\s+/,
        Ga = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Ha = /<([\w:]+)/,
        Ia = /<tbody/i, Ja = /<|&#?\w+;/, Ka = /<(?:script|style|link)/i, La = /<(?:script|object|embed|option|style)/i,
        Ma = new RegExp("<(?:" + Da + ")[\\s/>]", "i"), Na = /^(?:checkbox|radio)$/,
        Oa = /checked\s*(?:[^=]|=\s*.checked.)/i, Pa = /\/(java|ecma)script/i,
        Qa = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g, Ra = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        }, Sa = k(I), Ta = Sa.appendChild(I.createElement("div"));
    Ra.optgroup = Ra.option, Ra.tbody = Ra.tfoot = Ra.colgroup = Ra.caption = Ra.thead, Ra.th = Ra.td, S.support.htmlSerialize || (Ra._default = [1, "X<div>", "</div>"]), S.fn.extend({
        text: function (a) {
            return S.access(this, function (a) {
                return a === b ? S.text(this) : this.empty().append((this[0] && this[0].ownerDocument || I).createTextNode(a))
            }, null, a, arguments.length)
        }, wrapAll: function (a) {
            if (S.isFunction(a))return this.each(function (b) {
                S(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = S(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;)a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        }, wrapInner: function (a) {
            return S.isFunction(a) ? this.each(function (b) {
                S(this).wrapInner(a.call(this, b))
            }) : this.each(function () {
                var b = S(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = S.isFunction(a);
            return this.each(function (c) {
                S(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                S.nodeName(this, "body") || S(this).replaceWith(this.childNodes)
            }).end()
        }, append: function () {
            return this.domManip(arguments, !0, function (a) {
                1 !== this.nodeType && 11 !== this.nodeType || this.appendChild(a)
            })
        }, prepend: function () {
            return this.domManip(arguments, !0, function (a) {
                1 !== this.nodeType && 11 !== this.nodeType || this.insertBefore(a, this.firstChild)
            })
        }, before: function () {
            if (!h(this[0]))return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {
                var a = S.clean(arguments);
                return this.pushStack(S.merge(a, this), "before", this.selector)
            }
        }, after: function () {
            if (!h(this[0]))return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = S.clean(arguments);
                return this.pushStack(S.merge(this, a), "after", this.selector)
            }
        }, remove: function (a, b) {
            for (var c, d = 0; null != (c = this[d]); d++)a && !S.filter(a, [c]).length || (b || 1 !== c.nodeType || (S.cleanData(c.getElementsByTagName("*")), S.cleanData([c])), c.parentNode && c.parentNode.removeChild(c));
            return this
        }, empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++)for (1 === a.nodeType && S.cleanData(a.getElementsByTagName("*")); a.firstChild;)a.removeChild(a.firstChild);
            return this
        }, clone: function (a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function () {
                return S.clone(this, a, b)
            })
        }, html: function (a) {
            return S.access(this, function (a) {
                var c = this[0] || {}, d = 0, e = this.length;
                if (a === b)return 1 === c.nodeType ? c.innerHTML.replace(Ea, "") : b;
                if ("string" == typeof a && !Ka.test(a) && (S.support.htmlSerialize || !Ma.test(a)) && (S.support.leadingWhitespace || !Fa.test(a)) && !Ra[(Ha.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Ga, "<$1></$2>");
                    try {
                        for (; d < e; d++)c = this[d] || {}, 1 === c.nodeType && (S.cleanData(c.getElementsByTagName("*")), c.innerHTML = a);
                        c = 0
                    } catch (a) {
                    }
                }
                c && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function (a) {
            return h(this[0]) ? this.length ? this.pushStack(S(S.isFunction(a) ? a() : a), "replaceWith", a) : this : S.isFunction(a) ? this.each(function (b) {
                var c = S(this), d = c.html();
                c.replaceWith(a.call(this, b, d))
            }) : ("string" != typeof a && (a = S(a).detach()), this.each(function () {
                var b = this.nextSibling, c = this.parentNode;
                S(this).remove(), b ? S(b).before(a) : S(c).append(a)
            }))
        }, detach: function (a) {
            return this.remove(a, !0)
        }, domManip: function (a, c, d) {
            a = [].concat.apply([], a);
            var e, f, g, h, i = 0, j = a[0], k = [], m = this.length;
            if (!S.support.checkClone && m > 1 && "string" == typeof j && Oa.test(j))return this.each(function () {
                S(this).domManip(a, c, d)
            });
            if (S.isFunction(j))return this.each(function (e) {
                var f = S(this);
                a[0] = j.call(this, e, c ? f.html() : b), f.domManip(a, c, d)
            });
            if (this[0]) {
                if (e = S.buildFragment(a, this, k), g = e.fragment, f = g.firstChild, 1 === g.childNodes.length && (g = f), f)for (c = c && S.nodeName(f, "tr"), h = e.cacheable || m - 1; i < m; i++)d.call(c && S.nodeName(this[i], "table") ? l(this[i], "tbody") : this[i], i === h ? g : S.clone(g, !0, !0));
                g = f = null, k.length && S.each(k, function (a, b) {
                    b.src ? S.ajax ? S.ajax({
                        url: b.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        throws: !0
                    }) : S.error("no ajax") : S.globalEval((b.text || b.textContent || b.innerHTML || "").replace(Qa, "")), b.parentNode && b.parentNode.removeChild(b)
                })
            }
            return this
        }
    }), S.buildFragment = function (a, c, d) {
        var e, f, g, h = a[0];
        return c = c || I, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, !(1 === a.length && "string" == typeof h && h.length < 512 && c === I && "<" === h.charAt(0)) || La.test(h) || !S.support.checkClone && Oa.test(h) || !S.support.html5Clone && Ma.test(h) || (f = !0, e = S.fragments[h], g = e !== b), e || (e = c.createDocumentFragment(), S.clean(a, c, e, d), f && (S.fragments[h] = g && e)), {
            fragment: e, cacheable: f
        }
    }, S.fragments = {}, S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        S.fn[a] = function (c) {
            var d, e = 0, f = [], g = S(c), h = g.length, i = 1 === this.length && this[0].parentNode;
            if ((null == i || i && 11 === i.nodeType && 1 === i.childNodes.length) && 1 === h)return g[b](this[0]), this;
            for (; e < h; e++)d = (e > 0 ? this.clone(!0) : this).get(), S(g[e])[b](d), f = f.concat(d);
            return this.pushStack(f, a, g.selector)
        }
    }), S.extend({
        clone: function (a, b, c) {
            var d, e, f, g;
            if (S.support.html5Clone || S.isXMLDoc(a) || !Ma.test("<" + a.nodeName + ">") ? g = a.cloneNode(!0) : (Ta.innerHTML = a.outerHTML, Ta.removeChild(g = Ta.firstChild)), !(S.support.noCloneEvent && S.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || S.isXMLDoc(a)))for (n(a, g), d = o(a), e = o(g), f = 0; d[f]; ++f)e[f] && n(d[f], e[f]);
            if (b && (m(a, g), c))for (d = o(a), e = o(g), f = 0; d[f]; ++f)m(d[f], e[f]);
            return d = e = null, g
        }, clean: function (a, b, c, d) {
            var e, f, g, h, i, j, l, m, n, o, q, r = b === I && Sa, s = [];
            for (b && "undefined" != typeof b.createDocumentFragment || (b = I), e = 0; null != (g = a[e]); e++)if ("number" == typeof g && (g += ""), g) {
                if ("string" == typeof g)if (Ja.test(g)) {
                    for (r = r || k(b), l = b.createElement("div"), r.appendChild(l), g = g.replace(Ga, "<$1></$2>"), h = (Ha.exec(g) || ["", ""])[1].toLowerCase(), i = Ra[h] || Ra._default, j = i[0], l.innerHTML = i[1] + g + i[2]; j--;)l = l.lastChild;
                    if (!S.support.tbody)for (m = Ia.test(g), n = "table" !== h || m ? "<table>" !== i[1] || m ? [] : l.childNodes : l.firstChild && l.firstChild.childNodes, f = n.length - 1; f >= 0; --f)S.nodeName(n[f], "tbody") && !n[f].childNodes.length && n[f].parentNode.removeChild(n[f]);
                    !S.support.leadingWhitespace && Fa.test(g) && l.insertBefore(b.createTextNode(Fa.exec(g)[0]), l.firstChild), g = l.childNodes, l.parentNode.removeChild(l)
                } else g = b.createTextNode(g);
                g.nodeType ? s.push(g) : S.merge(s, g)
            }
            if (l && (g = l = r = null), !S.support.appendChecked)for (e = 0; null != (g = s[e]); e++)S.nodeName(g, "input") ? p(g) : "undefined" != typeof g.getElementsByTagName && S.grep(g.getElementsByTagName("input"), p);
            if (c)for (o = function (a) {
                if (!a.type || Pa.test(a.type))return d ? d.push(a.parentNode ? a.parentNode.removeChild(a) : a) : c.appendChild(a)
            }, e = 0; null != (g = s[e]); e++)S.nodeName(g, "script") && o(g) || (c.appendChild(g), "undefined" != typeof g.getElementsByTagName && (q = S.grep(S.merge([], g.getElementsByTagName("script")), o), s.splice.apply(s, [e + 1, 0].concat(q)), e += q.length));
            return s
        }, cleanData: function (a, b) {
            for (var c, d, e, f, g = 0, h = S.expando, i = S.cache, j = S.support.deleteExpando, k = S.event.special; null != (e = a[g]); g++)if ((b || S.acceptData(e)) && (d = e[h], c = d && i[d])) {
                if (c.events)for (f in c.events)k[f] ? S.event.remove(e, f) : S.removeEvent(e, f, c.handle);
                i[d] && (delete i[d], j ? delete e[h] : e.removeAttribute ? e.removeAttribute(h) : e[h] = null, S.deletedIds.push(d))
            }
        }
    }), function () {
        var a, b;
        S.uaMatch = function (a) {
            a = a.toLowerCase();
            var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
            return {browser: b[1] || "", version: b[2] || "0"}
        }, a = S.uaMatch(J.userAgent), b = {}, a.browser && (b[a.browser] = !0, b.version = a.version), b.chrome ? b.webkit = !0 : b.webkit && (b.safari = !0), S.browser = b, S.sub = function () {
            function a(b, c) {
                return new a.fn.init(b, c)
            }

            S.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function (c, d) {
                return d && d instanceof S && !(d instanceof a) && (d = a(d)), S.fn.init.call(this, c, d, b)
            }, a.fn.init.prototype = a.fn;
            var b = a(I);
            return a
        }
    }();
    var Ua, Va, Wa, Xa = /alpha\([^)]*\)/i, Ya = /opacity=([^)]*)/, Za = /^(top|right|bottom|left)$/,
        $a = /^(none|table(?!-c[ea]).+)/, _a = /^margin/, ab = new RegExp("^(" + T + ")(.*)$", "i"),
        bb = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"), cb = new RegExp("^([-+])=(" + T + ")", "i"),
        db = {BODY: "block"}, eb = {position: "absolute", visibility: "hidden", display: "block"},
        fb = {letterSpacing: 0, fontWeight: 400}, gb = ["Top", "Right", "Bottom", "Left"],
        hb = ["Webkit", "O", "Moz", "ms"], ib = S.fn.toggle;
    S.fn.extend({
        css: function (a, c) {
            return S.access(this, function (a, c, d) {
                return d !== b ? S.style(a, c, d) : S.css(a, c)
            }, a, c, arguments.length > 1)
        }, show: function () {
            return s(this, !0)
        }, hide: function () {
            return s(this)
        }, toggle: function (a, b) {
            var c = "boolean" == typeof a;
            return S.isFunction(a) && S.isFunction(b) ? ib.apply(this, arguments) : this.each(function () {
                (c ? a : r(this)) ? S(this).show() : S(this).hide()
            })
        }
    }), S.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = Ua(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {float: S.support.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (a, c, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, h, i = S.camelCase(c), j = a.style;
                if (c = S.cssProps[i] || (S.cssProps[i] = q(j, i)), h = S.cssHooks[c] || S.cssHooks[i], d === b)return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c];
                if (g = typeof d, "string" === g && (f = cb.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(S.css(a, c)), g = "number"), !(null == d || "number" === g && isNaN(d) || ("number" !== g || S.cssNumber[i] || (d += "px"), h && "set" in h && (d = h.set(a, d, e)) === b)))try {
                    j[c] = d
                } catch (a) {
                }
            }
        },
        css: function (a, c, d, e) {
            var f, g, h, i = S.camelCase(c);
            return c = S.cssProps[i] || (S.cssProps[i] = q(a.style, i)), h = S.cssHooks[c] || S.cssHooks[i], h && "get" in h && (f = h.get(a, !0, e)), f === b && (f = Ua(a, c)), "normal" === f && c in fb && (f = fb[c]), d || e !== b ? (g = parseFloat(f), d || S.isNumeric(g) ? g || 0 : f) : f
        },
        swap: function (a, b, c) {
            var d, e, f = {};
            for (e in b)f[e] = a.style[e], a.style[e] = b[e];
            d = c.call(a);
            for (e in b)a.style[e] = f[e];
            return d
        }
    }), a.getComputedStyle ? Ua = function (b, c) {
        var d, e, f, g, h = a.getComputedStyle(b, null), i = b.style;
        return h && (d = h.getPropertyValue(c) || h[c], "" !== d || S.contains(b.ownerDocument, b) || (d = S.style(b, c)), bb.test(d) && _a.test(c) && (e = i.width, f = i.minWidth, g = i.maxWidth, i.minWidth = i.maxWidth = i.width = d, d = h.width, i.width = e, i.minWidth = f, i.maxWidth = g)), d
    } : I.documentElement.currentStyle && (Ua = function (a, b) {
            var c, d, e = a.currentStyle && a.currentStyle[b], f = a.style;
            return null == e && f && f[b] && (e = f[b]), bb.test(e) && !Za.test(b) && (c = f.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), f.left = "fontSize" === b ? "1em" : e, e = f.pixelLeft + "px", f.left = c, d && (a.runtimeStyle.left = d)), "" === e ? "auto" : e
        }), S.each(["height", "width"], function (a, b) {
        S.cssHooks[b] = {
            get: function (a, c, d) {
                if (c)return 0 === a.offsetWidth && $a.test(Ua(a, "display")) ? S.swap(a, eb, function () {
                    return v(a, b, d)
                }) : v(a, b, d)
            }, set: function (a, c, d) {
                return t(a, c, d ? u(a, b, d, S.support.boxSizing && "border-box" === S.css(a, "boxSizing")) : 0)
            }
        }
    }), S.support.opacity || (S.cssHooks.opacity = {
        get: function (a, b) {
            return Ya.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        }, set: function (a, b) {
            var c = a.style, d = a.currentStyle, e = S.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, b >= 1 && "" === S.trim(f.replace(Xa, "")) && c.removeAttribute && (c.removeAttribute("filter"), d && !d.filter) || (c.filter = Xa.test(f) ? f.replace(Xa, e) : f + " " + e)
        }
    }), S(function () {
        S.support.reliableMarginRight || (S.cssHooks.marginRight = {
            get: function (a, b) {
                return S.swap(a, {display: "inline-block"}, function () {
                    if (b)return Ua(a, "marginRight")
                })
            }
        }), !S.support.pixelPosition && S.fn.position && S.each(["top", "left"], function (a, b) {
            S.cssHooks[b] = {
                get: function (a, c) {
                    if (c) {
                        var d = Ua(a, b);
                        return bb.test(d) ? S(a).position()[b] + "px" : d
                    }
                }
            }
        })
    }), S.expr && S.expr.filters && (S.expr.filters.hidden = function (a) {
        return 0 === a.offsetWidth && 0 === a.offsetHeight || !S.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || Ua(a, "display"))
    }, S.expr.filters.visible = function (a) {
        return !S.expr.filters.hidden(a)
    }), S.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        S.cssHooks[a + b] = {
            expand: function (c) {
                var d, e = "string" == typeof c ? c.split(" ") : [c], f = {};
                for (d = 0; d < 4; d++)f[a + gb[d] + b] = e[d] || e[d - 2] || e[0];
                return f
            }
        }, _a.test(a) || (S.cssHooks[a + b].set = t)
    });
    var jb = /%20/g, kb = /\[\]$/, lb = /\r?\n/g,
        mb = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        nb = /^(?:select|textarea)/i;
    S.fn.extend({
        serialize: function () {
            return S.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                return this.elements ? S.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || nb.test(this.nodeName) || mb.test(this.type))
            }).map(function (a, b) {
                var c = S(this).val();
                return null == c ? null : S.isArray(c) ? S.map(c, function (a, c) {
                    return {name: b.name, value: a.replace(lb, "\r\n")}
                }) : {name: b.name, value: c.replace(lb, "\r\n")}
            }).get()
        }
    }), S.param = function (a, c) {
        var d, e = [], f = function (a, b) {
            b = S.isFunction(b) ? b() : null == b ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (c === b && (c = S.ajaxSettings && S.ajaxSettings.traditional), S.isArray(a) || a.jqx && !S.isPlainObject(a)) S.each(a, function () {
            f(this.name, this.value)
        }); else for (d in a)x(d, a[d], c, f);
        return e.join("&").replace(jb, "+")
    }, S.support.ajax && S.ajaxTransport(function (c) {
        if (!c.crossDomain || S.support.cors) {
            var d;
            return {
                send: function (e, f) {
                    var g, h, i = c.xhr();
                    if (c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async), c.xhrFields)for (h in c.xhrFields)i[h] = c.xhrFields[h];
                    c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), c.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (h in e)i.setRequestHeader(h, e[h])
                    } catch (a) {
                    }
                    i.send(c.hasContent && c.data || null), d = function (a, e) {
                        var h, j, k, l, m;
                        try {
                            if (d && (e || 4 === i.readyState))if (d = b, g && (i.onreadystatechange = S.noop, xhrOnUnloadAbort && delete xhrCallbacks[g]), e) 4 !== i.readyState && i.abort(); else {
                                h = i.status, k = i.getAllResponseHeaders(), l = {}, m = i.responseXML, m && m.documentElement && (l.xml = m);
                                try {
                                    l.text = i.responseText
                                } catch (a) {
                                }
                                try {
                                    j = i.statusText
                                } catch (a) {
                                    j = ""
                                }
                                h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = l.text ? 200 : 404
                            }
                        } catch (a) {
                            e || f(-1, a)
                        }
                        l && f(h, j, l, k)
                    }, c.async ? 4 === i.readyState ? setTimeout(d, 0) : (g = ++xhrId, xhrOnUnloadAbort && (xhrCallbacks || (xhrCallbacks = {}, S(a).unload(xhrOnUnloadAbort)), xhrCallbacks[g] = d), i.onreadystatechange = d) : d()
                }, abort: function () {
                    d && d(0, 1)
                }
            }
        }
    });
    var ob, pb, qb = /^(?:toggle|show|hide)$/, rb = new RegExp("^(?:([-+])=|)(" + T + ")([a-z%]*)$", "i"),
        sb = /queueHooks$/, tb = [C], ub = {
            "*": [function (a, b) {
                var c, d, e = this.createTween(a, b), f = rb.exec(b), g = e.cur(), h = +g || 0, i = 1, j = 20;
                if (f) {
                    if (c = +f[2], d = f[3] || (S.cssNumber[a] ? "" : "px"), "px" !== d && h) {
                        h = S.css(e.elem, a, !0) || c || 1;
                        do i = i || ".5", h /= i, S.style(e.elem, a, h + d); while (i !== (i = e.cur() / g) && 1 !== i && --j)
                    }
                    e.unit = d, e.start = h, e.end = f[1] ? h + (f[1] + 1) * c : c
                }
                return e
            }]
        };
    S.Animation = S.extend(A, {
        tweener: function (a, b) {
            S.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; d < e; d++)c = a[d], ub[c] = ub[c] || [], ub[c].unshift(b)
        }, prefilter: function (a, b) {
            b ? tb.unshift(a) : tb.push(a)
        }
    }), S.Tween = D, D.prototype = {
        constructor: D, init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (S.cssNumber[c] ? "" : "px")
        }, cur: function () {
            var a = D.propHooks[this.prop];
            return a && a.get ? a.get(this) : D.propHooks._default.get(this)
        }, run: function (a) {
            var b, c = D.propHooks[this.prop];
            return this.options.duration ? this.pos = b = S.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : D.propHooks._default.set(this), this
        }
    }, D.prototype.init.prototype = D.prototype, D.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = S.css(a.elem, a.prop, !1, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            }, set: function (a) {
                S.fx.step[a.prop] ? S.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[S.cssProps[a.prop]] || S.cssHooks[a.prop]) ? S.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, D.propHooks.scrollTop = D.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, S.each(["toggle", "show", "hide"], function (a, b) {
        var c = S.fn[b];
        S.fn[b] = function (d, e, f) {
            return null == d || "boolean" == typeof d || !a && S.isFunction(d) && S.isFunction(e) ? c.apply(this, arguments) : this.animate(E(b, !0), d, e, f)
        }
    }), S.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(r).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function (a, b, c, d) {
            var e = S.isEmptyObject(a), f = S.speed(b, c, d), g = function () {
                var b = A(this, S.extend({}, a), f);
                e && b.stop(!0)
            };
            return e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        }, stop: function (a, c, d) {
            var e = function (a) {
                var b = a.stop;
                delete a.stop, b(d)
            };
            return "string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0, c = null != a && a + "queueHooks", f = S.timers, g = S._data(this);
                if (c) g[c] && g[c].stop && e(g[c]); else for (c in g)g[c] && g[c].stop && sb.test(c) && e(g[c]);
                for (c = f.length; c--;)f[c].elem !== this || null != a && f[c].queue !== a || (f[c].anim.stop(d), b = !1, f.splice(c, 1));
                !b && d || S.dequeue(this, a)
            })
        }
    }), S.each({
        slideDown: E("show"),
        slideUp: E("hide"),
        slideToggle: E("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        S.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), S.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? S.extend({}, a) : {
            complete: c || !c && b || S.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !S.isFunction(b) && b
        };
        return d.duration = S.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in S.fx.speeds ? S.fx.speeds[d.duration] : S.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            S.isFunction(d.old) && d.old.call(this), d.queue && S.dequeue(this, d.queue)
        }, d
    }, S.easing = {
        linear: function (a) {
            return a
        }, swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, S.timers = [], S.fx = D.prototype.init, S.fx.tick = function () {
        var a, c = S.timers, d = 0;
        for (ob = S.now(); d < c.length; d++)a = c[d], a() || c[d] !== a || c.splice(d--, 1);
        c.length || S.fx.stop(), ob = b
    }, S.fx.timer = function (a) {
        a() && S.timers.push(a) && !pb && (pb = setInterval(S.fx.tick, S.fx.interval))
    }, S.fx.interval = 13, S.fx.stop = function () {
        clearInterval(pb), pb = null
    }, S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, S.fx.step = {}, S.expr && S.expr.filters && (S.expr.filters.animated = function (a) {
        return S.grep(S.timers, function (b) {
            return a === b.elem
        }).length
    });
    var vb = /^(?:body|html)$/i;
    S.fn.offset = function (a) {
        if (arguments.length)return a === b ? this : this.each(function (b) {
            S.offset.setOffset(this, a, b)
        });
        var c, d, e, f, g, h, i, j = {top: 0, left: 0}, k = this[0], l = k && k.ownerDocument;
        if (l)return (d = l.body) === k ? S.offset.bodyOffset(k) : (c = l.documentElement, S.contains(c, k) ? ("undefined" != typeof k.getBoundingClientRect && (j = k.getBoundingClientRect()), e = F(l), f = c.clientTop || d.clientTop || 0, g = c.clientLeft || d.clientLeft || 0, h = e.pageYOffset || c.scrollTop, i = e.pageXOffset || c.scrollLeft, {
            top: j.top + h - f,
            left: j.left + i - g
        }) : j)
    }, S.offset = {
        bodyOffset: function (a) {
            var b = a.offsetTop, c = a.offsetLeft;
            return S.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(S.css(a, "marginTop")) || 0, c += parseFloat(S.css(a, "marginLeft")) || 0), {
                top: b,
                left: c
            }
        }, setOffset: function (a, b, c) {
            var d = S.css(a, "position");
            "static" === d && (a.style.position = "relative");
            var e, f, g = S(a), h = g.offset(), i = S.css(a, "top"), j = S.css(a, "left"),
                k = ("absolute" === d || "fixed" === d) && S.inArray("auto", [i, j]) > -1, l = {}, m = {};
            k ? (m = g.position(), e = m.top, f = m.left) : (e = parseFloat(i) || 0, f = parseFloat(j) || 0), S.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (l.top = b.top - h.top + e), null != b.left && (l.left = b.left - h.left + f), "using" in b ? b.using.call(a, l) : g.css(l)
        }
    }, S.fn.extend({
        isRendered: function () {
            var a = this[0];
            return null != a.parentNode && 0 !== a.offsetWidth && 0 !== a.offsetHeight
        }, getSizeFromStyle: function () {
            var b, c = null, d = null, e = this, f = this[0];
            return e.element.style.width && (c = f.style.width), e.element.style.height && (d = f.style.height), b = a.getComputedStyle ? getComputedStyle(f, null) : f.currentStyle, b && (b.width && (c = b.width), b.height && (d = b.height)), "0px" === c && (c = 0), "0px" === d && (d = 0), null === c && (c = 0), null === d && (d = 0), {
                width: c,
                height: d
            }
        }, initAnimate: function () {
        }, sizeStyleChanged: function (a) {
            var b, c = this, d = function (a) {
                var d = b;
                a && a[0] && "style" === a[0].attributeName && "attributes" === a[0].type && (d.element.offsetWidth === d.offsetWidth && d.element.offsetHeight === d.offsetHeight || (d.offsetWidth = d.element.offsetWidth, d.offsetHeight = d.element.offsetHeight, c.isRendered() && d.callback()))
            };
            b = {
                element: c[0],
                offsetWidth: c[0].offsetWidth,
                offsetHeight: c[0].offsetHeight,
                callback: a
            }, c.elementStyleObserver || (c.elementStyleObserver = new MutationObserver(d), c.elementStyleObserver.observe(c[0], {
                attributes: !0,
                childList: !1,
                characterData: !1
            }))
        }, position: function () {
            if (this[0]) {
                var a = this[0], b = this.offsetParent(), c = this.offset(),
                    d = vb.test(b[0].nodeName) ? {top: 0, left: 0} : b.offset();
                return c.top -= parseFloat(S.css(a, "marginTop")) || 0, c.left -= parseFloat(S.css(a, "marginLeft")) || 0, d.top += parseFloat(S.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(S.css(b[0], "borderLeftWidth")) || 0, {
                    top: c.top - d.top,
                    left: c.left - d.left
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent || I.body; a && !vb.test(a.nodeName) && "static" === S.css(a, "position");)a = a.offsetParent;
                return a || I.body
            })
        }
    }), S.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, c) {
        var d = /Y/.test(c);
        S.fn[a] = function (e) {
            return S.access(this, function (a, e, f) {
                var g = F(a);
                return f === b ? g ? c in g ? g[c] : g.document.documentElement[e] : a[e] : void(g ? g.scrollTo(d ? S(g).scrollLeft() : f, d ? f : S(g).scrollTop()) : a[e] = f)
            }, a, e, arguments.length, null)
        }
    }), S.each({Height: "height", Width: "width"}, function (a, c) {
        S.each({padding: "inner" + a, content: c, "": "outer" + a}, function (d, e) {
            S.fn[e] = function (e, f) {
                var g = arguments.length && (d || "boolean" != typeof e),
                    h = d || (e === !0 || f === !0 ? "margin" : "border");
                return S.access(this, function (c, d, e) {
                    var f;
                    return S.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? S.css(c, d, e, h) : S.style(c, d, e, h)
                }, c, g ? e : b, g, null)
            }
        })
    }), a.JQX = a.jqxHelper = S, "function" == typeof define && define.amd && define.amd.JQX && define("jqx", [], function () {
        return S
    })
}(window), function (a) {
    a.jQuery || a.$ || (a.$ = a.minQuery = a.JQX)
}(window);
var jqxBaseFramework = window.minQuery || window.jQuery;
!function (a) {
    a.jqx = a.jqx || {}, jqwidgets = {
        createInstance: function (b, c, d) {
            if ("jqxDataAdapter" == c) {
                var e = d[0], f = d[1] || {};
                return new a.jqx.dataAdapter(e, f)
            }
            return a(b)[c](d || {}), a(b)[c]("getInstance")
        }
    }, a.jqx.define = function (a, b, c) {
        a[b] = function () {
            this.baseType && (this.base = new a[this.baseType], this.base.defineInstance()), this.defineInstance(), this.metaInfo()
        }, a[b].prototype.defineInstance = function () {
        }, a[b].prototype.metaInfo = function () {
        }, a[b].prototype.base = null, a[b].prototype.baseType = void 0, c && a[c] && (a[b].prototype.baseType = c)
    }, a.jqx.invoke = function (b, c) {
        if (0 != c.length) {
            for (var d = typeof c == Array || c.length > 0 ? c[0] : c, e = typeof c == Array || c.length > 1 ? Array.prototype.slice.call(c, 1) : a({}).toArray(); void 0 == b[d] && null != b.base;) {
                if (void 0 != b[d] && a.isFunction(b[d]))return b[d].apply(b, e);
                if ("string" == typeof d) {
                    var f = d.toLowerCase();
                    if (void 0 != b[f] && a.isFunction(b[f]))return b[f].apply(b, e)
                }
                b = b.base
            }
            if (void 0 != b[d] && a.isFunction(b[d]))return b[d].apply(b, e);
            if ("string" == typeof d) {
                var f = d.toLowerCase();
                if (void 0 != b[f] && a.isFunction(b[f]))return b[f].apply(b, e)
            }
        }
    }, a.jqx.hasProperty = function (a, b) {
        if ("object" == typeof b)for (var c in b) {
            for (var d = a; d;) {
                if (d.hasOwnProperty(c))return !0;
                if (d.hasOwnProperty(c.toLowerCase()))return !0;
                d = d.base
            }
            return !1
        } else for (; a;) {
            if (a.hasOwnProperty(b))return !0;
            if (a.hasOwnProperty(b.toLowerCase()))return !0;
            a = a.base
        }
        return !1
    }, a.jqx.hasFunction = function (b, c) {
        if (0 == c.length)return !1;
        if (void 0 == b)return !1;
        var d = typeof c == Array || c.length > 0 ? c[0] : c;
        for (typeof c == Array || c.length > 1 ? Array.prototype.slice.call(c, 1) : {}; void 0 == b[d] && null != b.base;) {
            if (b[d] && a.isFunction(b[d]))return !0;
            if ("string" == typeof d) {
                var e = d.toLowerCase();
                if (b[e] && a.isFunction(b[e]))return !0
            }
            b = b.base
        }
        if (b[d] && a.isFunction(b[d]))return !0;
        if ("string" == typeof d) {
            var e = d.toLowerCase();
            if (b[e] && a.isFunction(b[e]))return !0
        }
        return !1
    }, a.jqx.isPropertySetter = function (b, c) {
        return 1 == c.length && "object" == typeof c[0] || 2 == c.length && "string" == typeof c[0] && !a.jqx.hasFunction(b, c)
    }, a.jqx.validatePropertySetter = function (b, c, d) {
        if (!a.jqx.propertySetterValidation)return !0;
        if (1 == c.length && "object" == typeof c[0]) {
            for (var e in c[0]) {
                for (var f = b; !f.hasOwnProperty(e) && f.base;)f = f.base;
                if (!f || !f.hasOwnProperty(e)) {
                    if (!d) {
                        var g = f.hasOwnProperty(e.toString().toLowerCase());
                        if (g)return !0;
                        throw"Invalid property: " + e
                    }
                    return !1
                }
            }
            return !0
        }
        if (2 != c.length) {
            if (!d)throw"Invalid property: " + c.length >= 0 ? c[0] : "";
            return !1
        }
        for (; !b.hasOwnProperty(c[0]) && b.base;)b = b.base;
        if (!b || !b.hasOwnProperty(c[0])) {
            if (!d)throw"Invalid property: " + c[0];
            return !1
        }
        return !0
    }, Object.keys || (Object.keys = function () {
        "use strict";
        var a = Object.prototype.hasOwnProperty, b = !{toString: null}.propertyIsEnumerable("toString"),
            c = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
            d = c.length;
        return function (e) {
            if ("object" != typeof e && ("function" != typeof e || null === e))throw new TypeError("Object.keys called on non-object");
            var f, g, h = [];
            for (f in e)a.call(e, f) && h.push(f);
            if (b)for (g = 0; g < d; g++)a.call(e, c[g]) && h.push(c[g]);
            return h
        }
    }()), a.jqx.set = function (b, c) {
        var d = 0;
        if (1 == c.length && "object" == typeof c[0]) {
            if (b.isInitialized && Object.keys && Object.keys(c[0]).length > 1) {
                var e = b.base ? b.base.element : b.element, f = a.data(e, b.widgetName).initArgs;
                if (f && JSON && JSON.stringify && c[0] && f[0])try {
                    if (JSON.stringify(c[0]) == JSON.stringify(f[0])) {
                        var g = !0;
                        if (a.each(c[0], function (a, c) {
                                if (b[a] != c)return g = !1, !1
                            }), g)return
                    }
                } catch (a) {
                }
                b.batchUpdate = c[0];
                var h = {}, i = {};
                a.each(c[0], function (a, c) {
                    for (var e = b; !e.hasOwnProperty(a) && null != e.base;)e = e.base;
                    e.hasOwnProperty(a) ? b[a] != c && (h[a] = b[a], i[a] = c, d++) : e.hasOwnProperty(a.toLowerCase()) && b[a.toLowerCase()] != c && (h[a.toLowerCase()] = b[a.toLowerCase()], i[a.toLowerCase()] = c, d++)
                }), d < 2 && (b.batchUpdate = null)
            }
            a.each(c[0], function (c, d) {
                for (var e = b; !e.hasOwnProperty(c) && null != e.base;)e = e.base;
                if (e.hasOwnProperty(c)) a.jqx.setvalueraiseevent(e, c, d); else if (e.hasOwnProperty(c.toLowerCase())) a.jqx.setvalueraiseevent(e, c.toLowerCase(), d); else if (a.jqx.propertySetterValidation)throw"jqxCore: invalid property '" + c + "'"
            }), null != b.batchUpdate && (b.batchUpdate = null, b.propertiesChangedHandler && d > 1 && b.propertiesChangedHandler(b, h, i))
        } else if (2 == c.length) {
            for (; !b.hasOwnProperty(c[0]) && b.base;)b = b.base;
            if (b.hasOwnProperty(c[0])) a.jqx.setvalueraiseevent(b, c[0], c[1]); else if (b.hasOwnProperty(c[0].toLowerCase())) a.jqx.setvalueraiseevent(b, c[0].toLowerCase(), c[1]); else if (a.jqx.propertySetterValidation)throw"jqxCore: invalid property '" + c[0] + "'"
        }
    }, a.jqx.setvalueraiseevent = function (a, b, c) {
        var d = a[b];
        a[b] = c, a.isInitialized && (void 0 != a.propertyChangedHandler && a.propertyChangedHandler(a, b, d, c), void 0 != a.propertyChangeMap && void 0 != a.propertyChangeMap[b] && a.propertyChangeMap[b](a, b, d, c))
    }, a.jqx.get = function (a, b) {
        if (void 0 != b && null != b) {
            if (a.propertyMap) {
                var c = a.propertyMap(b);
                if (null != c)return c
            }
            if (a.hasOwnProperty(b))return a[b];
            if (a.hasOwnProperty(b.toLowerCase()))return a[b.toLowerCase()];
            var d = void 0;
            if (typeof b == Array) {
                if (1 != b.length)return;
                d = b[0]
            } else"string" == typeof b && (d = b);
            for (; !a.hasOwnProperty(d) && a.base;)a = a.base;
            return a ? a[d] : void 0
        }
    }, a.jqx.serialize = function (b) {
        var c = "";
        if (a.isArray(b)) {
            c = "[";
            for (var d = 0; d < b.length; d++)d > 0 && (c += ", "), c += a.jqx.serialize(b[d]);
            c += "]"
        } else if ("object" == typeof b) {
            c = "{";
            var e = 0;
            for (var d in b)e++ > 0 && (c += ", "), c += d + ": " + a.jqx.serialize(b[d]);
            c += "}"
        } else c = b.toString();
        return c
    }, a.jqx.propertySetterValidation = !0, a.jqx.jqxWidgetProxy = function (b, c, d) {
        var e = (a(c), a.data(c, b));
        if (void 0 != e) {
            var f = e.instance;
            if (a.jqx.hasFunction(f, d))return a.jqx.invoke(f, d);
            if (a.jqx.isPropertySetter(f, d)) {
                if (a.jqx.validatePropertySetter(f, d))return void a.jqx.set(f, d)
            } else {
                if ("object" == typeof d && 0 == d.length)return;
                if ("object" == typeof d && 1 == d.length && a.jqx.hasProperty(f, d[0]))return a.jqx.get(f, d[0]);
                if ("string" == typeof d && a.jqx.hasProperty(f, d[0]))return a.jqx.get(f, d)
            }
            throw"jqxCore: Invalid parameter '" + a.jqx.serialize(d) + "' does not exist."
        }
    }, a.jqx.applyWidget = function (b, c, d, e) {
        var f = !1;
        try {
            f = void 0 != window.MSApp
        } catch (a) {
        }
        var g = a(b);
        e ? (e.host = g, e.element = b) : e = new a.jqx["_" + c], "" == b.id && (b.id = a.jqx.utilities.createId());
        var h = {host: g, element: b, instance: e, initArgs: d};
        e.widgetName = c, a.data(b, c, h), a.data(b, "jqxWidget", h.instance);
        for (var i = new Array, e = h.instance; e;)e.isInitialized = !1, i.push(e), e = e.base;
        i.reverse(), i[0].theme = a.jqx.theme || "", a.jqx.jqxWidgetProxy(c, b, d);
        for (var j in i)e = i[j], 0 == j && (e.host = g, e.element = b, e.WinJS = f), void 0 != e && (e.definedInstance && e.definedInstance(), null != e.createInstance && (f ? MSApp.execUnsafeLocalFunction(function () {
            e.createInstance(d)
        }) : e.createInstance(d)));
        for (var j in i)void 0 != i[j] && (i[j].isInitialized = !0);
        f ? MSApp.execUnsafeLocalFunction(function () {
            h.instance.refresh(!0)
        }) : h.instance.refresh(!0)
    }, a.jqx.jqxWidget = function (b, c, d) {
        var e = !1;
        try {
            jqxArgs = Array.prototype.slice.call(d, 0)
        } catch (a) {
            jqxArgs = ""
        }
        try {
            e = void 0 != window.MSApp
        } catch (a) {
        }
        var f = b, g = "";
        c && (g = "_" + c), a.jqx.define(a.jqx, "_" + f, g);
        var h = new Array;
        if (!window[f]) {
            var i = function (b) {
                if (null == b)return "";
                var c = a.type(b);
                switch (c) {
                    case"string":
                    case"number":
                    case"date":
                    case"boolean":
                    case"bool":
                        return null === b ? "" : b.toString()
                }
                var d = "";
                return a.each(b, function (b, c) {
                    var e = c;
                    b > 0 && (d += ", "), d += "[";
                    var f = 0;
                    if ("object" == a.type(e))for (var g in e)f > 0 && (d += ", "), d += "{" + g + ":" + e[g] + "}", f++; else f > 0 && (d += ", "), d += "{" + b + ":" + e + "}", f++;
                    d += "]"
                }), d
            };
            jqwidgets[f] = window[f] = function (b, c) {
                var d = [];
                c || (c = {}), d.push(c);
                var e = b;
                if ("object" === a.type(e) && b[0] ? (e = b[0].id, "" === e && (e = b[0].id = a.jqx.utilities.createId())) : "object" === a.type(b) && b && b.nodeName && (e = b.id, "" === e && (e = b.id = a.jqx.utilities.createId())), window.jqxWidgets && window.jqxWidgets[e]) {
                    if (c && a.each(window.jqxWidgets[e], function (b) {
                            var d = a(this.element).data();
                            d && d.jqxWidget && a(this.element)[f](c)
                        }), 1 == window.jqxWidgets[e].length) {
                        var g = a(window.jqxWidgets[e][0].widgetInstance.element).data();
                        if (g && g.jqxWidget)return window.jqxWidgets[e][0]
                    }
                    var g = a(window.jqxWidgets[e][0].widgetInstance.element).data();
                    if (g && g.jqxWidget)return window.jqxWidgets[e]
                }
                var j = a(b);
                0 === j.length && (j = a("<div></div>"), "jqxInput" !== f && "jqxPasswordInput" !== f && "jqxMaskedInput" !== f || (j = a("<input/>")), "jqxTextArea" === f && (j = a("<textarea></textarea>")), "jqxButton" !== f && "jqxRepeatButton" !== f && "jqxToggleButton" !== f || (j = a("<button/>")), "jqxSplitter" === f && (j = a("<div><div>Panel 1</div><div>Panel 2</div></div>")), "jqxTabs" === f && (j = a("<div><ul><li>Tab 1</li><li>Tab 2</li></ul><div>Content 1</div><div>Content 2</div></div>")), "jqxRibbon" === f && (j = a("<div><ul><li>Tab 1</li><li>Tab 2</li></ul><div><div>Content 1</div><div>Content 2</div></div></div>")), "jqxDocking" === f && (j = a("<div><div><div><div>Title 1</div><div>Content 1</div></div></div></div>")), "jqxWindow" === f && (j = a("<div><div>Title 1</div><div>Content 1</div></div>")));
                var k = [];
                return a.each(j, function (b) {
                    var c = j[b];
                    if (a.jqx.applyWidget(c, f, d, void 0), !h[f]) {
                        var g = a.data(c, "jqxWidget"), l = a.jqx["_" + f].prototype.defineInstance(), m = {};
                        a.jqx["_" + f].prototype.metaInfo && (m = a.jqx["_" + f].prototype.metaInfo()), "jqxDockingLayout" == f && (l = a.extend(l, a.jqx._jqxLayout.prototype.defineInstance())), "jqxToggleButton" != f && "jqxRepeatButton" != f || (l = a.extend(l, a.jqx._jqxButton.prototype.defineInstance())), "jqxTreeGrid" == f && (l = a.extend(l, a.jqx._jqxDataTable.prototype.defineInstance()));
                        var n = function (b) {
                            var c = a.data(b, "jqxWidget");
                            this.widgetInstance = c;
                            var d = a.extend(this, c);
                            d.on = d.addEventListener = function (a, b) {
                                d.addHandler(d.base ? d.base.host : d.host, a, b)
                            }, d.off = d.removeEventListener = function (a) {
                                d.removeHandler(d.base ? d.base.host : d.host, a)
                            };
                            for (var e in c)"function" == a.type(c[e]) && (d[e] = a.proxy(c[e], c));
                            return d
                        };
                        h[f] = n, a.each(l, function (b, c) {
                            Object.defineProperty(n.prototype, b, {
                                get: function () {
                                    return this.widgetInstance ? this.widgetInstance[b] : c
                                }, set: function (c) {
                                    if (this.widgetInstance && (this.widgetInstance[b] != c || "width" === b || "height" === b)) {
                                        var d = this.widgetInstance[b], e = c, g = a.type(d), h = a.type(e), j = !1;
                                        if (g == h && "source" !== b && "width" !== b && "height" !== b || (j = !0), j || i(d) != i(e)) {
                                            var k = {};
                                            k[b] = c, this.widgetInstance.host ? this.widgetInstance.host[f](k) : this.widgetInstance.base.host[f](k), this.widgetInstance[b] = c, this.widgetInstance.propertyUpdated && this.widgetInstance.propertyUpdated(b, d, c)
                                        }
                                    }
                                }
                            })
                        })
                    }
                    var g = new h[f](c);
                    k.push(g), window.jqxWidgets || (window.jqxWidgets = new Array), window.jqxWidgets[e] || (window.jqxWidgets[e] = new Array), window.jqxWidgets[e].push(g)
                }), 1 === k.length ? k[0] : k
            }
        }
        a.fn[f] = function () {
            var b = Array.prototype.slice.call(arguments, 0);
            if (0 == b.length || 1 == b.length && "object" == typeof b[0]) {
                if (0 == this.length)throw this.selector ? new Error("Invalid Selector - " + this.selector + "! Please, check whether the used ID or CSS Class name is correct.") : new Error("Invalid Selector! Please, check whether the used ID or CSS Class name is correct.");
                return this.each(function () {
                    var c = (a(this), this), d = a.data(c, f);
                    null == d ? a.jqx.applyWidget(c, f, b, void 0) : a.jqx.jqxWidgetProxy(f, this, b)
                })
            }
            if (0 == this.length)throw this.selector ? new Error("Invalid Selector - " + this.selector + "! Please, check whether the used ID or CSS Class name is correct.") : new Error("Invalid Selector! Please, check whether the used ID or CSS Class name is correct.");
            var c = null, d = 0;
            return this.each(function () {
                var e = a.jqx.jqxWidgetProxy(f, this, b);
                if (0 == d) c = e, d++; else {
                    if (1 == d) {
                        var g = [];
                        g.push(c), c = g
                    }
                    c.push(e)
                }
            }), c
        };
        try {
            a.extend(a.jqx["_" + f].prototype, Array.prototype.slice.call(d, 0)[0])
        } catch (a) {
        }
        a.extend(a.jqx["_" + f].prototype, {
            toThemeProperty: function (b, c) {
                return a.jqx.toThemeProperty(this, b, c)
            }
        }), a.jqx["_" + f].prototype.refresh = function () {
            this.base && this.base.refresh(!0)
        }, a.jqx["_" + f].prototype.createInstance = function () {
        }, a.jqx["_" + f].prototype.addEventHandler = function (a, b) {
            this.host.bind(a, b)
        }, a.jqx["_" + f].prototype.removeEventHandler = function (a, b) {
            this.host.unbind(a)
        }, a.jqx["_" + f].prototype.applyTo = function (b, c) {
            if (!(c instanceof Array)) {
                var d = [];
                d.push(c), c = d
            }
            a.jqx.applyWidget(b, f, c, this)
        }, a.jqx["_" + f].prototype.getInstance = function () {
            return this
        }, a.jqx["_" + f].prototype.propertyChangeMap = {}, a.jqx["_" + f].prototype.addHandler = function (b, c, d, e) {
            a.jqx.addHandler(a(b), c, d, e)
        }, a.jqx["_" + f].prototype.removeHandler = function (b, c, d) {
            a.jqx.removeHandler(a(b), c, d)
        }, a.jqx["_" + f].prototype.setOptions = function () {
            if (this.host && this.host.length && 1 == this.host.length)return a.jqx.jqxWidgetProxy(f, this.host[0], arguments)
        }
    }, a.jqx.toThemeProperty = function (a, b, c) {
        if ("" == a.theme)return b;
        for (var d = b.split(" "), e = "", f = 0; f < d.length; f++) {
            f > 0 && (e += " ");
            var g = d[f];
            e += null != c && c ? g + "-" + a.theme : g + " " + g + "-" + a.theme
        }
        return e
    }, a.jqx.addHandler = function (b, c, d, e) {
        for (var f = c.split(" "), g = 0; g < f.length; g++) {
            var h = f[g];
            if (window.addEventListener)switch (h) {
                case"mousewheel":
                    a.jqx.browser.mozilla ? b[0].addEventListener("DOMMouseScroll", d, !1) : b[0].addEventListener("mousewheel", d, !1);
                    continue;
                case"mousemove":
                    if (!e) {
                        b[0].addEventListener("mousemove", d, !1);
                        continue
                    }
            }
            void 0 == e || null == e ? b.on ? b.on(h, d) : b.bind(h, d) : b.on ? b.on(h, e, d) : b.bind(h, e, d)
        }
    }, a.jqx.removeHandler = function (b, c, d) {
        if (!c)return void(b.off ? b.off() : b.unbind());
        for (var e = c.split(" "), f = 0; f < e.length; f++) {
            var g = e[f];
            if (window.removeEventListener)switch (g) {
                case"mousewheel":
                    a.jqx.browser.mozilla ? b[0].removeEventListener("DOMMouseScroll", d, !1) : b[0].removeEventListener("mousewheel", d, !1);
                    continue;
                case"mousemove":
                    if (d) {
                        b[0].removeEventListener("mousemove", d, !1);
                        continue
                    }
            }
            void 0 != g ? void 0 == d ? b.off ? b.off(g) : b.unbind(g) : b.off ? b.off(g, d) : b.unbind(g, d) : b.off ? b.off() : b.unbind()
        }
    }, a.jqx.theme = a.jqx.theme || "", a.jqx.scrollAnimation = a.jqx.scrollAnimation || !1, a.jqx.resizeDelay = a.jqx.resizeDelay || 10, a.jqx.ready = function () {
        a(window).trigger("jqxReady")
    }, a.jqx.init = function () {
        a.each(arguments[0], function (b, c) {
            "theme" == b && (a.jqx.theme = c), "scrollBarSize" == b && (a.jqx.utilities.scrollBarSize = c), "touchScrollBarSize" == b && (a.jqx.utilities.touchScrollBarSize = c), "scrollBarButtonsVisibility" == b && (a.jqx.utilities.scrollBarButtonsVisibility = c)
        })
    }, a.jqx.utilities = a.jqx.utilities || {}, a.extend(a.jqx.utilities, {
        scrollBarSize: 15, touchScrollBarSize: 0, scrollBarButtonsVisibility: "visible", createId: function () {
            var a = function () {
                return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
            };
            return "jqxWidget" + a() + a()
        }, setTheme: function (b, c, d) {
            if ("undefined" != typeof d && d[0].className.split) {
                for (var e = d[0].className.split(" "), f = [], g = [], h = d.children(), i = 0; i < e.length; i += 1)e[i].indexOf(b) >= 0 && (b.length > 0 ? (f.push(e[i]),
                    g.push(e[i].replace(b, c))) : g.push(e[i].replace("-" + c, "") + "-" + c));
                this._removeOldClasses(f, d), this._addNewClasses(g, d);
                for (var i = 0; i < h.length; i += 1)this.setTheme(b, c, a(h[i]))
            }
        }, _removeOldClasses: function (a, b) {
            for (var c = 0; c < a.length; c += 1)b.removeClass(a[c])
        }, _addNewClasses: function (a, b) {
            for (var c = 0; c < a.length; c += 1)b.addClass(a[c])
        }, getOffset: function (b) {
            var c = a.jqx.mobile.getLeftPos(b[0]), d = a.jqx.mobile.getTopPos(b[0]);
            return {top: d, left: c}
        }, resize: function (b, c, d, e) {
            void 0 === e && (e = !0);
            var f = -1, g = this, h = function (a) {
                if (!g.hiddenWidgets)return -1;
                for (var b = -1, c = 0; c < g.hiddenWidgets.length; c++)if (a.id) {
                    if (g.hiddenWidgets[c].id == a.id) {
                        b = c;
                        break
                    }
                } else if (g.hiddenWidgets[c].id == a[0].id) {
                    b = c;
                    break
                }
                return b
            };
            if (this.resizeHandlers) {
                for (var i = 0; i < this.resizeHandlers.length; i++)if (b.id) {
                    if (this.resizeHandlers[i].id == b.id) {
                        f = i;
                        break
                    }
                } else if (this.resizeHandlers[i].id == b[0].id) {
                    f = i;
                    break
                }
                if (d === !0) {
                    if (f != -1 && this.resizeHandlers.splice(f, 1), 0 == this.resizeHandlers.length) {
                        var j = a(window);
                        j.off ? (j.off("resize.jqx"), j.off("orientationchange.jqx"), j.off("orientationchanged.jqx")) : (j.unbind("resize.jqx"), j.unbind("orientationchange.jqx"), j.unbind("orientationchanged.jqx")), this.resizeHandlers = null
                    }
                    var k = h(b);
                    return void(k != -1 && this.hiddenWidgets && this.hiddenWidgets.splice(k, 1))
                }
            } else if (d === !0) {
                var k = h(b);
                return void(k != -1 && this.hiddenWidgets && this.hiddenWidgets.splice(k, 1))
            }
            var g = this, l = function (b, c) {
                if (g.resizeHandlers) {
                    var d = function (a) {
                        for (var b = -1, c = a.parentNode; c;)b++, c = c.parentNode;
                        return b
                    }, e = function (a, b) {
                        if (!a.widget || !b.widget)return 0;
                        var c = d(a.widget[0]), e = d(b.widget[0]);
                        try {
                            if (c < e)return -1;
                            if (c > e)return 1
                        } catch (a) {
                        }
                        return 0
                    }, f = function (b) {
                        if (g.hiddenWidgets.length > 0) {
                            g.hiddenWidgets.sort(e);
                            var d = function () {
                                for (var b = !1, d = new Array, e = 0; e < g.hiddenWidgets.length; e++) {
                                    var f = g.hiddenWidgets[e];
                                    a.jqx.isHidden(f.widget) ? (b = !0, d.push(f)) : f.callback && f.callback(c)
                                }
                                g.hiddenWidgets = d, b || clearInterval(g.__resizeInterval)
                            };
                            if (0 == b)return d(), void(g.__resizeInterval && clearInterval(g.__resizeInterval));
                            g.__resizeInterval && clearInterval(g.__resizeInterval), g.__resizeInterval = setInterval(function () {
                                d()
                            }, 100)
                        }
                    };
                    g.hiddenWidgets && g.hiddenWidgets.length > 0 && f(!1), g.hiddenWidgets = new Array, g.resizeHandlers.sort(e);
                    for (var i = 0; i < g.resizeHandlers.length; i++) {
                        var j = g.resizeHandlers[i], k = j.widget, l = j.data;
                        if (l && l.jqxWidget) {
                            var m = l.jqxWidget.width, n = l.jqxWidget.height;
                            l.jqxWidget.base && (void 0 == m && (m = l.jqxWidget.base.width), void 0 == n && (n = l.jqxWidget.base.height)), void 0 === m && void 0 === n && (m = l.jqxWidget.element.style.width, n = l.jqxWidget.element.style.height);
                            var o = !1;
                            if (null != m && m.toString().indexOf("%") != -1 && (o = !0), null != n && n.toString().indexOf("%") != -1 && (o = !0), a.jqx.isHidden(k)) h(k) === -1 && (o || b === !0) && j.data.nestedWidget !== !0 && g.hiddenWidgets.push(j); else if (void 0 === b || b !== !0) {
                                if (o) {
                                    if (j.callback(c), g.watchedElementData)for (var p = 0; p < g.watchedElementData.length; p++)if (g.watchedElementData[p].element == l.jqxWidget.element) {
                                        g.watchedElementData[p].offsetWidth = l.jqxWidget.element.offsetWidth, g.watchedElementData[p].offsetHeight = l.jqxWidget.element.offsetHeight;
                                        break
                                    }
                                    g.hiddenWidgets.indexOf(j) >= 0 && g.hiddenWidgets.splice(g.hiddenWidgets.indexOf(j), 1)
                                }
                                if (l.jqxWidget.element) {
                                    var q = l.jqxWidget.element.className;
                                    if ((q.indexOf("dropdownlist") >= 0 || q.indexOf("datetimeinput") >= 0 || q.indexOf("combobox") >= 0 || q.indexOf("menu") >= 0) && l.jqxWidget.isOpened) {
                                        var r = l.jqxWidget.isOpened();
                                        if (r) {
                                            if (c && "resize" == c && a.jqx.mobile.isTouchDevice())continue;
                                            l.jqxWidget.close()
                                        }
                                    }
                                }
                            }
                        }
                    }
                    f()
                }
            };
            if (!this.resizeHandlers) {
                this.resizeHandlers = new Array;
                var j = a(window);
                j.on ? (this._resizeTimer = null, this._initResize = null, j.on("resize.jqx", function (b) {
                    void 0 != g._resizeTimer && clearTimeout(g._resizeTimer), g._initResize ? g._resizeTimer = setTimeout(function () {
                        l(null, "resize")
                    }, a.jqx.resizeDelay) : (g._initResize = !0, l(null, "resize"))
                }), j.on("orientationchange.jqx", function (a) {
                    l(null, "orientationchange")
                }), j.on("orientationchanged.jqx", function (a) {
                    l(null, "orientationchange")
                })) : (j.bind("resize.jqx", function (a) {
                    l(null, "orientationchange")
                }), j.bind("orientationchange.jqx", function (a) {
                    l(null, "orientationchange")
                }), j.bind("orientationchanged.jqx", function (a) {
                    l(null, "orientationchange")
                }))
            }
            var m = b.data();
            e && f === -1 && this.resizeHandlers.push({id: b[0].id, widget: b, callback: c, data: m});
            try {
                var n = m.jqxWidget.width, o = m.jqxWidget.height;
                m.jqxWidget.base && (void 0 == n && (n = m.jqxWidget.base.width), void 0 == o && (o = m.jqxWidget.base.height)), void 0 === n && void 0 === o && (n = m.jqxWidget.element.style.width, o = m.jqxWidget.element.style.height);
                var p = !1;
                if (null != n && n.toString().indexOf("%") != -1 && (p = !0), null != o && o.toString().indexOf("%") != -1 && (p = !0), p) {
                    this.watchedElementData || (this.watchedElementData = []);
                    var g = this, q = function (b) {
                        g.watchedElementData.forEach && g.watchedElementData.forEach(function (b) {
                            b.element.offsetWidth === b.offsetWidth && b.element.offsetHeight === b.offsetHeight || (b.offsetWidth = b.element.offsetWidth, b.offsetHeight = b.element.offsetHeight, b.timer && clearTimeout(b.timer), b.timer = setTimeout(function () {
                                a.jqx.isHidden(a(b.element)) ? b.timer = setInterval(function () {
                                    a.jqx.isHidden(a(b.element)) || (clearInterval(b.timer), b.callback())
                                }, 100) : b.callback()
                            }))
                        })
                    };
                    g.watchedElementData.push({
                        element: b[0],
                        offsetWidth: b[0].offsetWidth,
                        offsetHeight: b[0].offsetHeight,
                        callback: c
                    }), g.observer || (g.observer = new MutationObserver(q), g.observer.observe(document.body, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0
                    }))
                }
            } catch (a) {
            }
            a.jqx.isHidden(b) && e === !0 && l(!0), a.jqx.resize = function () {
                l(null, "resize")
            }
        }, parseJSON: function (b) {
            if (!b || "string" != typeof b)return null;
            var c = /^[\],:{}\s]*$/, d = /(?:^|:|,)(?:\s*\[)+/g, e = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
                f = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g;
            if (b = a.trim(b), window.JSON && window.JSON.parse)return window.JSON.parse(b);
            if (c.test(b.replace(e, "@").replace(f, "]").replace(d, "")))return new Function("return " + b)();
            throw new Error("Invalid JSON: " + b)
        }, html: function (b, c) {
            if (!a(b).on)return a(b).html(c);
            try {
                return a.access(b, function (c) {
                    var d = b[0] || {}, e = 0, f = b.length;
                    if (void 0 === c)return 1 === d.nodeType ? d.innerHTML.replace(rinlinejQuery, "") : void 0;
                    var g = /<(?:script|style|link)/i,
                        h = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
                        i = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, j = /<([\w:]+)/,
                        k = new RegExp("<(?:" + h + ")[\\s/>]", "i"), l = /^\s+/, m = {
                            option: [1, "<select multiple='multiple'>", "</select>"],
                            legend: [1, "<fieldset>", "</fieldset>"],
                            thead: [1, "<table>", "</table>"],
                            tr: [2, "<table><tbody>", "</tbody></table>"],
                            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                            area: [1, "<map>", "</map>"],
                            _default: [0, "", ""]
                        };
                    if ("string" == typeof c && !g.test(c) && (a.support.htmlSerialize || !k.test(c)) && (a.support.leadingWhitespace || !l.test(c)) && !m[(j.exec(c) || ["", ""])[1].toLowerCase()]) {
                        c = c.replace(i, "<$1></$2>");
                        try {
                            for (; e < f; e++)d = this[e] || {}, 1 === d.nodeType && (a.cleanData(d.getElementsByTagName("*")), d.innerHTML = c);
                            d = 0
                        } catch (a) {
                        }
                    }
                    d && b.empty().append(c)
                }, null, c, arguments.length)
            } catch (d) {
                return a(b).html(c)
            }
        }, hasTransform: function (b) {
            var c = "";
            if (c = b.css("transform"), "" == c || "none" == c) {
                if (c = b.parents().css("transform"), "" != c && "none" != c)return "" != c && "none" != c;
                var d = a.jqx.utilities.getBrowser();
                "msie" == d.browser ? (c = b.css("-ms-transform"), "" != c && "none" != c || (c = b.parents().css("-ms-transform"))) : "chrome" == d.browser ? (c = b.css("-webkit-transform"), "" != c && "none" != c || (c = b.parents().css("-webkit-transform"))) : "opera" == d.browser ? (c = b.css("-o-transform"), "" != c && "none" != c || (c = b.parents().css("-o-transform"))) : "mozilla" == d.browser && (c = b.css("-moz-transform"), "" != c && "none" != c || (c = b.parents().css("-moz-transform")))
            }
            return "" != c && "none" != c || (c = a(document.body).css("transform")), "" != c && "none" != c && null != c
        }, getBrowser: function () {
            var a = navigator.userAgent.toLowerCase(),
                b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [],
                c = {browser: b[1] || "", version: b[2] || "0"};
            return a.indexOf("rv:11.0") >= 0 && a.indexOf(".net4.0c") >= 0 && (c.browser = "msie", c.version = "11", b[1] = "msie"), a.indexOf("edge") >= 0 && (c.browser = "msie", c.version = "12", b[1] = "msie"), c[b[1]] = b[1], c
        }
    }), a.jqx.browser = a.jqx.utilities.getBrowser(), a.jqx.isHidden = function (a) {
        if (!a || !a[0])return !1;
        var b = a[0].offsetWidth, c = a[0].offsetHeight;
        return 0 === b || 0 === c
    }, a.jqx.ariaEnabled = !0, a.jqx.aria = function (b, c, d) {
        if (a.jqx.ariaEnabled)if (void 0 == c) a.each(b.aria, function (c, d) {
            var e = b.base ? b.base.host.attr(c) : b.host.attr(c);
            if (void 0 == e || a.isFunction(e)) {
                var e = b[d.name];
                a.isFunction(e) && (e = b[d.name]()), void 0 == e && (e = "");
                try {
                    b.base ? b.base.host.attr(c, e.toString()) : b.host.attr(c, e.toString())
                } catch (a) {
                }
            } else {
                var f = e;
                switch (d.type) {
                    case"number":
                        f = new Number(e), isNaN(f) && (f = e);
                        break;
                    case"boolean":
                        f = "true" == e;
                        break;
                    case"date":
                        f = new Date(e), ("Invalid Date" == f || isNaN(f)) && (f = e)
                }
                b[d.name] = f
            }
        }); else try {
            b.host ? b.base ? b.base.host ? b.base.host.attr(c, d.toString()) : b.attr(c, d.toString()) : b.host ? b.element.setAttribute ? b.element.setAttribute(c, d.toString()) : b.host.attr(c, d.toString()) : b.attr(c, d.toString()) : b.setAttribute && b.setAttribute(c, d.toString())
        } catch (a) {
        }
    }, Array.prototype.indexOf || (Array.prototype.indexOf = function (a) {
        var b = this.length, c = Number(arguments[1]) || 0;
        for (c = c < 0 ? Math.ceil(c) : Math.floor(c), c < 0 && (c += b); c < b; c++)if (c in this && this[c] === a)return c;
        return -1
    }), a.jqx.mobile = a.jqx.mobile || {}, a.jqx.position = function (b) {
        var c = parseInt(b.pageX), d = parseInt(b.pageY);
        if (a.jqx.mobile.isTouchDevice()) {
            var e = a.jqx.mobile.getTouches(b), f = e[0];
            c = parseInt(f.pageX), d = parseInt(f.pageY)
        }
        return {left: c, top: d}
    }, a.extend(a.jqx.mobile, {
        _touchListener: function (a, b) {
            var c = function (a, b) {
                var c = document.createEvent("MouseEvents");
                return c.initMouseEvent(a, b.bubbles, b.cancelable, b.view, b.detail, b.screenX, b.screenY, b.clientX, b.clientY, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, b.relatedTarget), c._pageX = b.pageX, c._pageY = b.pageY, c
            }, d = {mousedown: "touchstart", mouseup: "touchend", mousemove: "touchmove"}, e = c(d[a.type], a);
            a.target.dispatchEvent(e);
            var f = a.target["on" + d[a.type]];
            "function" == typeof f && f(a)
        }, setMobileSimulator: function (b, c) {
            if (!this.isTouchDevice()) {
                this.simulatetouches = !0, 0 == c && (this.simulatetouches = !1);
                var d = {mousedown: "touchstart", mouseup: "touchend", mousemove: "touchmove"}, e = this;
                if (window.addEventListener) {
                    var f = function () {
                        for (var a in d)b.addEventListener && (b.removeEventListener(a, e._touchListener), b.addEventListener(a, e._touchListener, !1))
                    };
                    a.jqx.browser.msie, f()
                }
            }
        }, isTouchDevice: function () {
            if (void 0 != this.touchDevice)return this.touchDevice;
            var a = "Browser CodeName: " + navigator.appCodeName;
            if (a += "Browser Name: " + navigator.appName, a += "Browser Version: " + navigator.appVersion, a += "Platform: " + navigator.platform, a += "User-agent header: " + navigator.userAgent, a.indexOf("Android") != -1)return !0;
            if (a.indexOf("IEMobile") != -1)return !0;
            if (a.indexOf("Windows Phone") != -1)return !0;
            if (a.indexOf("WPDesktop") != -1)return !0;
            if (a.indexOf("ZuneWP7") != -1)return !0;
            if (a.indexOf("BlackBerry") != -1 && a.indexOf("Mobile Safari") != -1)return !0;
            if (a.indexOf("ipod") != -1)return !0;
            if (a.indexOf("nokia") != -1 || a.indexOf("Nokia") != -1)return !0;
            if (a.indexOf("Chrome/17") != -1)return !1;
            if (a.indexOf("CrOS") != -1)return !1;
            if (a.indexOf("Opera") != -1 && a.indexOf("Mobi") == -1 && a.indexOf("Mini") == -1 && a.indexOf("Platform: Win") != -1)return !1;
            if (a.indexOf("Opera") != -1 && a.indexOf("Mobi") != -1 && a.indexOf("Opera Mobi") != -1)return !0;
            var b = {
                ios: "i(?:Pad|Phone|Pod)(?:.*)CPU(?: iPhone)? OS ",
                android: "(Android |HTC_|Silk/)",
                blackberry: "BlackBerry(?:.*)Version/",
                rimTablet: "RIM Tablet OS ",
                webos: "(?:webOS|hpwOS)/",
                bada: "Bada/"
            };
            try {
                if (void 0 != this.touchDevice)return this.touchDevice;
                this.touchDevice = !1;
                for (i in b)if (b.hasOwnProperty(i) && (prefix = b[i], match = a.match(new RegExp("(?:" + prefix + ")([^\\s;]+)")), match))return "blackberry" == i.toString() ? (this.touchDevice = !1, !1) : (this.touchDevice = !0, !0);
                var c = navigator.userAgent;
                if (navigator.platform.toLowerCase().indexOf("win") != -1) {
                    if (c.indexOf("Windows Phone") >= 0 || c.indexOf("WPDesktop") >= 0 || c.indexOf("IEMobile") >= 0 || c.indexOf("ZuneWP7") >= 0)return this.touchDevice = !0, !0;
                    if (c.indexOf("Touch") >= 0) {
                        var d = "MSPointerDown" in window || "pointerdown" in window;
                        return d ? (this.touchDevice = !0, !0) : c.indexOf("ARM") >= 0 ? (this.touchDevice = !0, !0) : (this.touchDevice = !1, !1)
                    }
                }
                return navigator.platform.toLowerCase().indexOf("win") != -1 ? (this.touchDevice = !1, !1) : (("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch) && (this.touchDevice = !0), this.touchDevice)
            } catch (a) {
                return this.touchDevice = !1, !1
            }
        }, getLeftPos: function (a) {
            for (var b = a.offsetLeft; null != (a = a.offsetParent);)"HTML" != a.tagName && (b += a.offsetLeft, document.all && (b += a.clientLeft));
            return b
        }, getTopPos: function (b) {
            for (var c = b.offsetTop, d = a(b).coord(); null != (b = b.offsetParent);)"HTML" != b.tagName && (c += b.offsetTop - b.scrollTop, document.all && (c += b.clientTop));
            var e = navigator.userAgent.toLowerCase(),
                f = (e.indexOf("windows phone") != -1 || e.indexOf("WPDesktop") != -1 || e.indexOf("ZuneWP7") != -1 || e.indexOf("msie 9") != -1 || e.indexOf("msie 11") != -1 || e.indexOf("msie 10") != -1) && e.indexOf("touch") != -1;
            return f ? d.top : this.isSafariMobileBrowser() ? this.isSafari4MobileBrowser() && this.isIPadSafariMobileBrowser() ? c : e.indexOf("version/7") != -1 ? d.top : (e.indexOf("version/6") == -1 && e.indexOf("version/5") == -1 || (c += a(window).scrollTop()), /(Android.*Chrome\/[.0-9]* (!?Mobile))/.exec(navigator.userAgent) ? c + a(window).scrollTop() : /(Android.*Chrome\/[.0-9]* Mobile)/.exec(navigator.userAgent) ? c + a(window).scrollTop() : d.top) : c
        }, isChromeMobileBrowser: function () {
            var a = navigator.userAgent.toLowerCase(), b = a.indexOf("android") != -1;
            return b
        }, isOperaMiniMobileBrowser: function () {
            var a = navigator.userAgent.toLowerCase(),
                b = a.indexOf("opera mini") != -1 || a.indexOf("opera mobi") != -1;
            return b
        }, isOperaMiniBrowser: function () {
            var a = navigator.userAgent.toLowerCase(), b = a.indexOf("opera mini") != -1;
            return b
        }, isNewSafariMobileBrowser: function () {
            var a = navigator.userAgent.toLowerCase(),
                b = a.indexOf("ipad") != -1 || a.indexOf("iphone") != -1 || a.indexOf("ipod") != -1;
            return b = b && a.indexOf("version/5") != -1
        }, isSafari4MobileBrowser: function () {
            var a = navigator.userAgent.toLowerCase(),
                b = a.indexOf("ipad") != -1 || a.indexOf("iphone") != -1 || a.indexOf("ipod") != -1;
            return b = b && a.indexOf("version/4") != -1
        }, isWindowsPhone: function () {
            var a = navigator.userAgent.toLowerCase(),
                b = a.indexOf("windows phone") != -1 || a.indexOf("WPDesktop") != -1 || a.indexOf("ZuneWP7") != -1 || a.indexOf("msie 9") != -1 || a.indexOf("msie 11") != -1 || a.indexOf("msie 10") != -1 && a.indexOf("touch") != -1;
            return b
        }, isSafariMobileBrowser: function () {
            var a = navigator.userAgent.toLowerCase();
            if (/(Android.*Chrome\/[.0-9]* (!?Mobile))/.exec(navigator.userAgent))return !0;
            if (/(Android.*Chrome\/[.0-9]* Mobile)/.exec(navigator.userAgent))return !0;
            var b = a.indexOf("ipad") != -1 || a.indexOf("iphone") != -1 || a.indexOf("ipod") != -1 || a.indexOf("mobile safari") != -1;
            return b
        }, isIPadSafariMobileBrowser: function () {
            var a = navigator.userAgent.toLowerCase(), b = a.indexOf("ipad") != -1;
            return b
        }, isMobileBrowser: function () {
            var a = navigator.userAgent.toLowerCase(),
                b = a.indexOf("ipad") != -1 || a.indexOf("iphone") != -1 || a.indexOf("android") != -1;
            return b
        }, getTouches: function (a) {
            if (a.originalEvent) {
                if (a.originalEvent.touches && a.originalEvent.touches.length)return a.originalEvent.touches;
                if (a.originalEvent.changedTouches && a.originalEvent.changedTouches.length)return a.originalEvent.changedTouches
            }
            return a.touches || (a.touches = new Array, a.touches[0] = void 0 != a.originalEvent ? a.originalEvent : a, void 0 != a.originalEvent && a.pageX && (a.touches[0] = a), "mousemove" == a.type && (a.touches[0] = a)), a.touches
        }, getTouchEventName: function (a) {
            if (!this.isWindowsPhone())return a;
            var b = navigator.userAgent.toLowerCase();
            if (b.indexOf("windows phone 7") != -1) {
                if (a.toLowerCase().indexOf("start") != -1)return "MSPointerDown";
                if (a.toLowerCase().indexOf("move") != -1)return "MSPointerMove";
                if (a.toLowerCase().indexOf("end") != -1)return "MSPointerUp"
            }
            return a.toLowerCase().indexOf("start") != -1 ? "pointerdown" : a.toLowerCase().indexOf("move") != -1 ? "pointermove" : a.toLowerCase().indexOf("end") != -1 ? "pointerup" : void 0
        }, dispatchMouseEvent: function (a, b, c) {
            if (!this.simulatetouches) {
                var d = document.createEvent("MouseEvent");
                d.initMouseEvent(a, !0, !0, b.view, 1, b.screenX, b.screenY, b.clientX, b.clientY, !1, !1, !1, !1, 0, null), null != c && c.dispatchEvent(d)
            }
        }, getRootNode: function (a) {
            for (; 1 !== a.nodeType;)a = a.parentNode;
            return a
        }, setTouchScroll: function (a, b) {
            this.enableScrolling || (this.enableScrolling = []), this.enableScrolling[b] = a
        }, touchScroll: function (b, c, d, e, f, g) {
            function h(a) {
                if (a.targetTouches && a.targetTouches.length >= 1)return a.targetTouches[0].clientY;
                if (a.originalEvent && void 0 !== a.originalEvent.clientY)return a.originalEvent.clientY;
                var b = l.getTouches(a);
                return b[0].clientY
            }

            function i(a) {
                if (a.targetTouches && a.targetTouches.length >= 1)return a.targetTouches[0].clientX;
                if (a.originalEvent && void 0 !== a.originalEvent.clientX)return a.originalEvent.clientX;
                var b = l.getTouches(a);
                return b[0].clientX
            }

            function j() {
                var a, b;
                H && (a = Date.now() - F, b = -H * Math.exp(-a / L), b > .5 || b < -.5 ? (R(I + b, event), requestAnimationFrame(j)) : (R(I), g.fadeOut("fast")))
            }

            function k() {
                var a, b;
                H && (a = Date.now() - F, b = -H * Math.exp(-a / L), b > .5 || b < -.5 ? (S(J + b), requestAnimationFrame(k)) : (S(J), f.fadeOut("fast")))
            }

            if (null != b) {
                var l = this, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
                this.scrolling || (this.scrolling = []), this.scrolling[e] = !1;
                var s = !1, t = a(b), u = ["select", "input", "textarea"], v = 0, w = 0;
                this.enableScrolling || (this.enableScrolling = []), this.enableScrolling[e] = !0;
                var x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, e = e,
                    M = this.getTouchEventName("touchstart") + ".touchScroll",
                    N = this.getTouchEventName("touchend") + ".touchScroll",
                    O = this.getTouchEventName("touchmove") + ".touchScroll";
                z = c, y = 0, A = 0, xoffset = 0, initialOffset = 0, initialXOffset = 0, x = f.jqxScrollBar("max"), L = 325;
                var P = function () {
                    var a, b, c, d;
                    a = Date.now(), b = a - F, F = a, c = A - E, xdelta = xoffset - xframe, E = A, xframe = xoffset, C = !0, d = 1e3 * c / (1 + b), xv = 1e3 * xdelta / (1 + b), D = .8 * d + .2 * D, xjqxAnimations = .8 * xv + .2 * xjqxAnimations
                }, Q = !1, v = function (b) {
                    function c(a) {
                        Q = !1, C = !0, B = h(a), K = i(a), D = H = xjqxAnimations = 0, E = A, xframe = xoffset, F = Date.now(), clearInterval(G), G = setInterval(P, 100), initialOffset = A, initialXOffset = xoffset, A > 0 && A < z && "hidden" != g[0].style.visibility
                    }

                    if (!l.enableScrolling[e])return !0;
                    if (a.inArray(b.target.tagName.toLowerCase(), u) === -1) {
                        A = g.jqxScrollBar("value"), xoffset = f.jqxScrollBar("value");
                        var d = l.getTouches(b), j = d[0];
                        return 1 == d.length && l.dispatchMouseEvent("mousedown", j, l.getRootNode(j.target)), x = f.jqxScrollBar("max"), z = g.jqxScrollBar("max"), c(b), s = !1, n = j.pageY, q = j.pageX, l.simulatetouches && void 0 != j._pageY && (n = j._pageY, q = j._pageX), l.scrolling[e] = !0, m = 0, p = 0, !0
                    }
                };
                t.on ? t.on(M, v) : t.bind(M, v);
                var R = function (a, b) {
                    return A = a > z ? z : a < y ? y : a, d(null, a, 0, 0, b), a > z ? "max" : a < y ? "min" : "value"
                }, S = function (a, b) {
                    return xoffset = a > x ? x : a < y ? y : a, d(a, null, 0, 0, b), a > x ? "max" : a < y ? "min" : "value"
                }, T = function (a) {
                    function b(a) {
                        var b, c, d;
                        if (C) {
                            b = h(a), d = i(a), c = B - b, xdelta = K - d;
                            var e = "value";
                            if (c > 2 || c < -2)return B = b, e = R(A + c, a), P(), "min" == e && 0 === initialOffset || ("max" == e && initialOffset === z || (!v || (a.preventDefault(), a.stopPropagation(), Q = !0, !1)));
                            if (xdelta > 2 || xdelta < -2)return K = d, e = S(xoffset + xdelta, a), P(), "min" == e && 0 === initialXOffset || ("max" == e && initialXOffset === x || (!u || (Q = !0, a.preventDefault(), a.stopPropagation(), !1)));
                            a.preventDefault()
                        }
                    }

                    if (!l.enableScrolling[e])return !0;
                    if (!l.scrolling[e])return !0;
                    Q && (a.preventDefault(), a.stopPropagation());
                    var c = l.getTouches(a);
                    if (c.length > 1)return !0;
                    var d = c[0].pageY, j = c[0].pageX;
                    l.simulatetouches && void 0 != c[0]._pageY && (d = c[0]._pageY, j = c[0]._pageX);
                    var k = d - n, t = j - q;
                    w = d, touchHorizontalEnd = j, o = k - m, r = t - p, s = !0, m = k, p = t;
                    var u = null == f || "hidden" != f[0].style.visibility,
                        v = null == g || "hidden" != g[0].style.visibility;
                    (u || v) && (u || v) && b(a)
                };
                t.on ? t.on(O, T) : t.bind(O, T);
                var U = function (a) {
                    if (!l.enableScrolling[e])return !0;
                    var b = l.getTouches(a)[0];
                    if (!l.scrolling[e])return !0;
                    if (C = !1, clearInterval(G), D > 10 || D < -10 ? (H = .8 * D, I = Math.round(A + H), F = Date.now(), requestAnimationFrame(j), g.fadeIn(100)) : xjqxAnimations > 10 || xjqxAnimations < -10 ? (H = .8 * xjqxAnimations, J = Math.round(xoffset + H), F = Date.now(), requestAnimationFrame(k), f.fadeIn(100)) : (f.fadeOut(100), g.fadeOut(100)), l.scrolling[e] = !1, !s) {
                        var b = l.getTouches(a)[0], c = l.getRootNode(b.target);
                        return l.dispatchMouseEvent("mouseup", b, c), l.dispatchMouseEvent("click", b, c), !0
                    }
                    l.dispatchMouseEvent("mouseup", b, a.target)
                };
                if (this.simulatetouches) {
                    var V = (void 0 != a(window).on || a(window).bind, function (a) {
                        try {
                            U(a)
                        } catch (a) {
                        }
                        l.scrolling[e] = !1
                    });
                    if (void 0 != a(window).on ? a(document).on("mouseup.touchScroll", V) : a(document).bind("mouseup.touchScroll", V), window.frameElement && null != window.top) {
                        var W = function (a) {
                            try {
                                U(a)
                            } catch (a) {
                            }
                            l.scrolling[e] = !1
                        };
                        window.top.document && (a(window.top.document).on ? a(window.top.document).on("mouseup", W) : a(window.top.document).bind("mouseup", W))
                    }
                    var X = (void 0 != a(document).on || a(document).bind, function (a) {
                        if (!l.scrolling[e])return !0;
                        l.scrolling[e] = !1;
                        var b = l.getTouches(a)[0], c = l.getRootNode(b.target);
                        l.dispatchMouseEvent("mouseup", b, c), l.dispatchMouseEvent("click", b, c)
                    });
                    void 0 != a(document).on ? a(document).on("touchend", X) : a(document).bind("touchend", X)
                }
                t.on && (t.on("dragstart", function (a) {
                    a.preventDefault()
                }), t.on("selectstart", function (a) {
                    a.preventDefault()
                })), t.on ? t.on(N + " touchcancel.touchScroll", U) : t.bind(N + " touchcancel.touchScroll", U)
            }
        }
    }), a.jqx.cookie = a.jqx.cookie || {}, a.extend(a.jqx.cookie, {
        cookie: function (b, c, d) {
            if (arguments.length > 1 && "[object Object]" !== String(c)) {
                if (d = a.extend({}, d), null !== c && void 0 !== c || (d.expires = -1), "number" == typeof d.expires) {
                    var e = d.expires, f = d.expires = new Date;
                    f.setDate(f.getDate() + e)
                }
                return c = String(c), document.cookie = [encodeURIComponent(b), "=", d.raw ? c : encodeURIComponent(c), d.expires ? "; expires=" + d.expires.toUTCString() : "", d.path ? "; path=" + d.path : "", d.domain ? "; domain=" + d.domain : "", d.secure ? "; secure" : ""].join("")
            }
            d = c || {};
            var g, h = d.raw ? function (a) {
                return a
            } : decodeURIComponent;
            return (g = new RegExp("(?:^|; )" + encodeURIComponent(b) + "=([^;]*)").exec(document.cookie)) ? h(g[1]) : null
        }
    }), a.jqx.string = a.jqx.string || {}, a.extend(a.jqx.string, {
        replace: function (a, b, c) {
            if (b === c)return this;
            for (var d = a, e = d.indexOf(b); e != -1;)d = d.replace(b, c), e = d.indexOf(b);
            return d
        }, contains: function (a, b) {
            return null != a && null != b && a.indexOf(b) != -1
        }, containsIgnoreCase: function (a, b) {
            return null != a && null != b && a.toString().toUpperCase().indexOf(b.toString().toUpperCase()) != -1
        }, equals: function (a, b) {
            return null != a && null != b && (a = this.normalize(a), b.length == a.length && a.slice(0, b.length) == b)
        }, equalsIgnoreCase: function (a, b) {
            return null != a && null != b && (a = this.normalize(a), b.length == a.length && a.toUpperCase().slice(0, b.length) == b.toUpperCase())
        }, startsWith: function (a, b) {
            return null != a && null != b && a.slice(0, b.length) == b
        }, startsWithIgnoreCase: function (a, b) {
            return null != a && null != b && a.toUpperCase().slice(0, b.length) == b.toUpperCase()
        }, normalize: function (a) {
            return 65279 == a.charCodeAt(a.length - 1) && (a = a.substring(0, a.length - 1)), a
        }, endsWith: function (a, b) {
            return null != a && null != b && (a = this.normalize(a), a.slice(-b.length) == b)
        }, endsWithIgnoreCase: function (a, b) {
            return null != a && null != b && (a = this.normalize(a), a.toUpperCase().slice(-b.length) == b.toUpperCase())
        }
    }), a.extend(a.easing, {
        easeOutBack: function (a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
        }, easeInQuad: function (a, b, c, d, e) {
            return d * (b /= e) * b + c
        }, easeInOutCirc: function (a, b, c, d, e) {
            return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
        }, easeInOutSine: function (a, b, c, d, e) {
            return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
        }, easeInCubic: function (a, b, c, d, e) {
            return d * (b /= e) * b * b + c
        }, easeOutCubic: function (a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b + 1) + c
        }, easeInOutCubic: function (a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
        }, easeInSine: function (a, b, c, d, e) {
            return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
        }, easeOutSine: function (a, b, c, d, e) {
            return d * Math.sin(b / e * (Math.PI / 2)) + c
        }, easeInOutSine: function (a, b, c, d, e) {
            return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
        }
    })
}(jqxBaseFramework), function (a) {
    a.event && a.event.special && a.extend(a.event.special, {
        close: {noBubble: !0},
        open: {noBubble: !0},
        cellclick: {noBubble: !0},
        rowclick: {noBubble: !0},
        tabclick: {noBubble: !0},
        selected: {noBubble: !0},
        expanded: {noBubble: !0},
        collapsed: {noBubble: !0},
        valuechanged: {noBubble: !0},
        expandedItem: {noBubble: !0},
        collapsedItem: {noBubble: !0},
        expandingItem: {noBubble: !0},
        collapsingItem: {noBubble: !0}
    }), a.fn.extend && a.fn.extend({
        ischildof: function (b) {
            if (!a(this).parents) {
                var c = b.element.contains(this.element);
                return c
            }
            for (var d = a(this).parents().get(), e = 0; e < d.length; e++)if ("string" != typeof b) {
                var f = d[e];
                if (void 0 !== b && f == b[0])return !0
            } else if (void 0 !== b && a(d[e]).is(b))return !0;
            return !1
        }
    }), a.fn.jqxProxy = function () {
        var b = a(this).data().jqxWidget, c = Array.prototype.slice.call(arguments, 0), d = b.element;
        return d || (d = b.base.element), a.jqx.jqxWidgetProxy(b.widgetName, d, c)
    };
    var b = this.originalVal = a.fn.val;
    a.fn.val = function (c) {
        if ("undefined" == typeof c) {
            if (a(this).hasClass("jqx-widget")) {
                var d = a(this).data().jqxWidget;
                if (d && d.val)return d.val()
            }
            if (this[0] && this[0].tagName.toLowerCase().indexOf("angular") >= 0) {
                var d = a(this).find(".jqx-widget").data().jqxWidget;
                if (d && d.val)return d.val()
            }
            return b.call(this)
        }
        if (a(this).hasClass("jqx-widget")) {
            var d = a(this).data().jqxWidget;
            if (d && d.val)return 2 != arguments.length ? d.val(c) : d.val(c, arguments[1])
        }
        if (this[0] && this[0].tagName.toLowerCase().indexOf("angular") >= 0) {
            var d = a(this).find(".jqx-widget").data().jqxWidget;
            if (d && d.val)return 2 != arguments.length ? d.val(c) : d.val(c, arguments[1])
        }
        return b.call(this, c)
    }, a.fn.modal && a.fn.modal.Constructor && (a.fn.modal.Constructor.prototype.enforceFocus = function () {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (b) {
            if (this.$element[0] !== b.target && !this.$element.has(b.target).length) {
                if (a(b.target).parents().hasClass("jqx-popup"))return !0;
                this.$element.trigger("focus")
            }
        }, this))
    }), a.fn.coord = function (b) {
        var c, d, e = {top: 0, left: 0}, f = this[0], g = f && f.ownerDocument;
        if (g) {
            if (c = g.documentElement, !a.contains(c, f))return e;
            void 0 !== typeof f.getBoundingClientRect && (e = f.getBoundingClientRect());
            var h = function (b) {
                return a.isWindow(b) ? b : 9 === b.nodeType && (b.defaultView || b.parentWindow)
            };
            d = h(g);
            var i = 0, j = 0, k = navigator.userAgent.toLowerCase(),
                l = k.indexOf("ipad") != -1 || k.indexOf("iphone") != -1;
            if (l && (i = 2), 1 == b && "static" != document.body.style.position && "" != document.body.style.position) {
                var m = a(document.body).coord();
                i = -m.left, j = -m.top
            }
            return {
                top: j + e.top + (d.pageYOffset || c.scrollTop) - (c.clientTop || 0),
                left: i + e.left + (d.pageXOffset || c.scrollLeft) - (c.clientLeft || 0)
            }
        }
    }
}(jqxBaseFramework);

