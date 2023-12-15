var toolsetCommonEs;
toolsetCommonEs = (() => {
  "use strict";
  var e = {
      33: (e, t, r) => {
        function n(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        r.r(t),
          r.d(t, {
            Masonry: () => o,
            fontToHead: () => l,
            styleToHead: () => i,
          });
        const o = (function () {
          function e(t) {
            var r = this;
            if (
              ((function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              t)
            ) {
              (this.CHROME_MAX_NUMBER_ROWS = 1e3),
                (this.CHROME_MAX_ROW_SPAN = 1e3),
                (this.root = t),
                this.resizeAllGridItems();
              var n = Array.from(this.root.querySelectorAll("img")),
                o = n.length,
                i = 0;
              n.forEach(function (e) {
                e.addEventListener("load", function () {
                  ++i === o && r.resizeAllGridItems();
                });
              }),
                window.addEventListener(
                  "resize",
                  this.resizeAllGridItems.bind(this)
                ),
                window.addEventListener(
                  "load",
                  this.resizeAllGridItems.bind(this)
                );
            }
          }
          var t, r;
          return (
            (t = e),
            (r = [
              {
                key: "resizeGridItem",
                value: function (e, t) {
                  var r = e.querySelector(".tb-brick__content");
                  if (r) {
                    var n = window.getComputedStyle(this.root),
                      o = parseInt(n.getPropertyValue("grid-row-gap")),
                      i = Math.ceil(r.getBoundingClientRect().height + o),
                      l = Math.ceil(i / t);
                    e.style.gridRowEnd = "span ".concat(l);
                  }
                },
              },
              {
                key: "getMaxItemsHeight",
                value: function (e) {
                  return e.children.length
                    ? Array.from(e.children).reduce(function (e, t) {
                        return Math.max(
                          e || 0,
                          (t.querySelector(".tb-brick__content") || {})
                            .offsetHeight
                        );
                      })
                    : 0;
                },
              },
              {
                key: "getMultiplier",
                value: function (e) {
                  var t = window
                      .getComputedStyle(e)
                      .gridTemplateColumns.split(" ").length,
                    r = Math.ceil(e.children.length / t),
                    n = this.getMaxItemsHeight(e);
                  if (
                    n > this.CHROME_MAX_ROW_SPAN ||
                    r * n > this.CHROME_MAX_NUMBER_ROWS
                  ) {
                    var o = Math.floor((n * r) / this.CHROME_MAX_ROW_SPAN) + 1;
                    return (e.style.gridAutoRows = "".concat(o, "px")), o;
                  }
                  return (e.style.gridAutoRows = "1px"), 1;
                },
              },
              {
                key: "resizeAllGridItems",
                value: function () {
                  var e = this;
                  if (this.root) {
                    var t = this.getMultiplier(this.root);
                    Array.from(this.root.children).forEach(function (r) {
                      return e.resizeGridItem(r, t);
                    });
                  }
                },
              },
            ]) && n(t.prototype, r),
            e
          );
        })();
        function i() {
          var e = document.getElementById("toolset-blocks-styling");
          e ||
            (document.head.insertAdjacentHTML(
              "beforeend",
              '<style id="toolset-blocks-styling"></style>'
            ),
            (e = document.getElementById("toolset-blocks-styling")));
          var t = document.getElementsByClassName("tces-js-style-encoded"),
            r = t.length ? t[t.length - 1] : null;
          if (e && r) {
            var n = e.innerHTML,
              o = window.atob(r.innerHTML);
            -1 !== n.indexOf(o) ||
              (-1 !== o.indexOf(n)
                ? (e.innerHTML = o)
                : e.appendChild(document.createTextNode(o)));
          }
          for (; t[0]; ) t[0].parentNode.removeChild(t[0]);
          for (
            var i = document.getElementsByClassName("tces-js-style-to-head");
            i[0];

          )
            i[0].parentNode.removeChild(i[0]);
        }
        function l() {
          var e = document.getElementsByClassName("tces-js-font-encoded"),
            t = e.length ? e[e.length - 1] : null;
          if (t) {
            var r =
              "https://fonts.googleapis.com/css?family=" +
              window.atob(t.innerHTML).split("###").join("|");
            if (!document.querySelector("link[href='" + r + "']")) {
              var n = document.createElement("link");
              (n.href = r),
                (n.rel = "stylesheet"),
                document.head.appendChild(n);
            }
          }
          for (; e[0]; ) e[0].parentNode.removeChild(e[0]);
          for (
            var o = document.getElementsByClassName("tces-js-font-to-head");
            o[0];

          )
            o[0].parentNode.removeChild(o[0]);
        }
      },
    },
    t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { exports: {} });
    return e[n](o, o.exports, r), o.exports;
  }
  return (
    (r.d = (e, t) => {
      for (var n in t)
        r.o(t, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (r.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    r(33)
  );
})();
/*!jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license*/ "undefined" ==
  typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
  (function (t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], function (e) {
          return t(e, window);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = t(require("jquery"), window))
      : t(jQuery, window);
  })(function (s, n) {
    "use strict";
    function e(e) {
      return (
        0 <=
        (function (e, t) {
          for (
            var r = /^(\d+)\.(\d+)\.(\d+)/,
              n = r.exec(e) || [],
              o = r.exec(t) || [],
              i = 1;
            i <= 3;
            i++
          ) {
            if (+o[i] < +n[i]) return 1;
            if (+n[i] < +o[i]) return -1;
          }
          return 0;
        })(s.fn.jquery, e)
      );
    }
    (s.migrateVersion = "3.3.2"),
      n.console &&
        n.console.log &&
        ((s && e("3.0.0")) ||
          n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),
        s.migrateWarnings &&
          n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),
        n.console.log(
          "JQMIGRATE: Migrate is installed" +
            (s.migrateMute ? "" : " with logging active") +
            ", version " +
            s.migrateVersion
        ));
    var r = {};
    function u(e) {
      var t = n.console;
      (s.migrateDeduplicateWarnings && r[e]) ||
        ((r[e] = !0),
        s.migrateWarnings.push(e),
        t &&
          t.warn &&
          !s.migrateMute &&
          (t.warn("JQMIGRATE: " + e), s.migrateTrace && t.trace && t.trace()));
    }
    function t(e, t, r, n) {
      Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return u(n), r;
        },
        set: function (e) {
          u(n), (r = e);
        },
      });
    }
    function o(e, t, r, n) {
      e[t] = function () {
        return u(n), r.apply(this, arguments);
      };
    }
    (s.migrateDeduplicateWarnings = !0),
      (s.migrateWarnings = []),
      void 0 === s.migrateTrace && (s.migrateTrace = !0),
      (s.migrateReset = function () {
        (r = {}), (s.migrateWarnings.length = 0);
      }),
      "BackCompat" === n.document.compatMode &&
        u("jQuery is not compatible with Quirks Mode");
    var i,
      a,
      c,
      d = {},
      l = s.fn.init,
      p = s.find,
      f = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
      y = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
      m = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    for (i in ((s.fn.init = function (e) {
      var t = Array.prototype.slice.call(arguments);
      return (
        "string" == typeof e &&
          "#" === e &&
          (u("jQuery( '#' ) is not a valid selector"), (t[0] = [])),
        l.apply(this, t)
      );
    }),
    (s.fn.init.prototype = s.fn),
    (s.find = function (t) {
      var r = Array.prototype.slice.call(arguments);
      if ("string" == typeof t && f.test(t))
        try {
          n.document.querySelector(t);
        } catch (e) {
          t = t.replace(y, function (e, t, r, n) {
            return "[" + t + r + '"' + n + '"]';
          });
          try {
            n.document.querySelector(t),
              u("Attribute selector with '#' must be quoted: " + r[0]),
              (r[0] = t);
          } catch (e) {
            u("Attribute selector with '#' was not fixed: " + r[0]);
          }
        }
      return p.apply(this, r);
    }),
    p))
      Object.prototype.hasOwnProperty.call(p, i) && (s.find[i] = p[i]);
    o(
      s.fn,
      "size",
      function () {
        return this.length;
      },
      "jQuery.fn.size() is deprecated and removed; use the .length property"
    ),
      o(
        s,
        "parseJSON",
        function () {
          return JSON.parse.apply(null, arguments);
        },
        "jQuery.parseJSON is deprecated; use JSON.parse"
      ),
      o(s, "holdReady", s.holdReady, "jQuery.holdReady is deprecated"),
      o(
        s,
        "unique",
        s.uniqueSort,
        "jQuery.unique is deprecated; use jQuery.uniqueSort"
      ),
      t(
        s.expr,
        "filters",
        s.expr.pseudos,
        "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"
      ),
      t(
        s.expr,
        ":",
        s.expr.pseudos,
        "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"
      ),
      e("3.1.1") &&
        o(
          s,
          "trim",
          function (e) {
            return null == e ? "" : (e + "").replace(m, "");
          },
          "jQuery.trim is deprecated; use String.prototype.trim"
        ),
      e("3.2.0") &&
        (o(
          s,
          "nodeName",
          function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          },
          "jQuery.nodeName is deprecated"
        ),
        o(
          s,
          "isArray",
          Array.isArray,
          "jQuery.isArray is deprecated; use Array.isArray"
        )),
      e("3.3.0") &&
        (o(
          s,
          "isNumeric",
          function (e) {
            var t = typeof e;
            return (
              ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
            );
          },
          "jQuery.isNumeric() is deprecated"
        ),
        s.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (e, t) {
            d["[object " + t + "]"] = t.toLowerCase();
          }
        ),
        o(
          s,
          "type",
          function (e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? d[Object.prototype.toString.call(e)] || "object"
              : typeof e;
          },
          "jQuery.type is deprecated"
        ),
        o(
          s,
          "isFunction",
          function (e) {
            return "function" == typeof e;
          },
          "jQuery.isFunction() is deprecated"
        ),
        o(
          s,
          "isWindow",
          function (e) {
            return null != e && e === e.window;
          },
          "jQuery.isWindow() is deprecated"
        )),
      s.ajax &&
        ((a = s.ajax),
        (c = /(=)\?(?=&|$)|\?\?/),
        (s.ajax = function () {
          var e = a.apply(this, arguments);
          return (
            e.promise &&
              (o(
                e,
                "success",
                e.done,
                "jQXHR.success is deprecated and removed"
              ),
              o(e, "error", e.fail, "jQXHR.error is deprecated and removed"),
              o(
                e,
                "complete",
                e.always,
                "jQXHR.complete is deprecated and removed"
              )),
            e
          );
        }),
        e("4.0.0") ||
          s.ajaxPrefilter("+json", function (e) {
            !1 !== e.jsonp &&
              (c.test(e.url) ||
                ("string" == typeof e.data &&
                  0 ===
                    (e.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  c.test(e.data))) &&
              u("JSON-to-JSONP auto-promotion is deprecated");
          }));
    var g = s.fn.removeAttr,
      h = s.fn.toggleClass,
      v = /\S+/g;
    function j(e) {
      return e.replace(/-([a-z])/g, function (e, t) {
        return t.toUpperCase();
      });
    }
    s.fn.removeAttr = function (e) {
      var r = this;
      return (
        s.each(e.match(v), function (e, t) {
          s.expr.match.bool.test(t) &&
            (u("jQuery.fn.removeAttr no longer sets boolean properties: " + t),
            r.prop(t, !1));
        }),
        g.apply(this, arguments)
      );
    };
    var Q,
      b = !(s.fn.toggleClass = function (t) {
        return void 0 !== t && "boolean" != typeof t
          ? h.apply(this, arguments)
          : (u("jQuery.fn.toggleClass( boolean ) is deprecated"),
            this.each(function () {
              var e = (this.getAttribute && this.getAttribute("class")) || "";
              e && s.data(this, "__className__", e),
                this.setAttribute &&
                  this.setAttribute(
                    "class",
                    (!e && !1 !== t && s.data(this, "__className__")) || ""
                  );
            }));
      }),
      w = /^[a-z]/,
      x =
        /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
    s.swap &&
      s.each(["height", "width", "reliableMarginRight"], function (e, t) {
        var r = s.cssHooks[t] && s.cssHooks[t].get;
        r &&
          (s.cssHooks[t].get = function () {
            var e;
            return (b = !0), (e = r.apply(this, arguments)), (b = !1), e;
          });
      }),
      (s.swap = function (e, t, r, n) {
        var o,
          i,
          a = {};
        for (i in (b || u("jQuery.swap() is undocumented and deprecated"), t))
          (a[i] = e.style[i]), (e.style[i] = t[i]);
        for (i in ((o = r.apply(e, n || [])), t)) e.style[i] = a[i];
        return o;
      }),
      e("3.4.0") &&
        "undefined" != typeof Proxy &&
        (s.cssProps = new Proxy(s.cssProps || {}, {
          set: function () {
            return (
              u("JQMIGRATE: jQuery.cssProps is deprecated"),
              Reflect.set.apply(this, arguments)
            );
          },
        })),
      s.cssNumber || (s.cssNumber = {}),
      (Q = s.fn.css),
      (s.fn.css = function (e, t) {
        var r,
          n,
          o = this;
        return e && "object" == typeof e && !Array.isArray(e)
          ? (s.each(e, function (e, t) {
              s.fn.css.call(o, e, t);
            }),
            this)
          : ("number" == typeof t &&
              ((r = j(e)),
              (n = r),
              (w.test(n) && x.test(n[0].toUpperCase() + n.slice(1))) ||
                s.cssNumber[r] ||
                u(
                  'Number-typed values are deprecated for jQuery.fn.css( "' +
                    e +
                    '", value )'
                )),
            Q.apply(this, arguments));
      });
    var A,
      k,
      S,
      M,
      N = s.data;
    (s.data = function (e, t, r) {
      var n, o, i;
      if (t && "object" == typeof t && 2 === arguments.length) {
        for (i in ((n = s.hasData(e) && N.call(this, e)), (o = {}), t))
          i !== j(i)
            ? (u("jQuery.data() always sets/gets camelCased names: " + i),
              (n[i] = t[i]))
            : (o[i] = t[i]);
        return N.call(this, e, o), t;
      }
      return t &&
        "string" == typeof t &&
        t !== j(t) &&
        (n = s.hasData(e) && N.call(this, e)) &&
        t in n
        ? (u("jQuery.data() always sets/gets camelCased names: " + t),
          2 < arguments.length && (n[t] = r),
          n[t])
        : N.apply(this, arguments);
    }),
      s.fx &&
        ((S = s.Tween.prototype.run),
        (M = function (e) {
          return e;
        }),
        (s.Tween.prototype.run = function () {
          1 < s.easing[this.easing].length &&
            (u(
              "'jQuery.easing." +
                this.easing.toString() +
                "' should use only one argument"
            ),
            (s.easing[this.easing] = M)),
            S.apply(this, arguments);
        }),
        (A = s.fx.interval || 13),
        (k = "jQuery.fx.interval is deprecated"),
        n.requestAnimationFrame &&
          Object.defineProperty(s.fx, "interval", {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return n.document.hidden || u(k), A;
            },
            set: function (e) {
              u(k), (A = e);
            },
          }));
    var R = s.fn.load,
      H = s.event.add,
      C = s.event.fix;
    (s.event.props = []),
      (s.event.fixHooks = {}),
      t(
        s.event.props,
        "concat",
        s.event.props.concat,
        "jQuery.event.props.concat() is deprecated and removed"
      ),
      (s.event.fix = function (e) {
        var t,
          r = e.type,
          n = this.fixHooks[r],
          o = s.event.props;
        if (o.length) {
          u("jQuery.event.props are deprecated and removed: " + o.join());
          while (o.length) s.event.addProp(o.pop());
        }
        if (
          n &&
          !n._migrated_ &&
          ((n._migrated_ = !0),
          u("jQuery.event.fixHooks are deprecated and removed: " + r),
          (o = n.props) && o.length)
        )
          while (o.length) s.event.addProp(o.pop());
        return (t = C.call(this, e)), n && n.filter ? n.filter(t, e) : t;
      }),
      (s.event.add = function (e, t) {
        return (
          e === n &&
            "load" === t &&
            "complete" === n.document.readyState &&
            u("jQuery(window).on('load'...) called after load event occurred"),
          H.apply(this, arguments)
        );
      }),
      s.each(["load", "unload", "error"], function (e, t) {
        s.fn[t] = function () {
          var e = Array.prototype.slice.call(arguments, 0);
          return "load" === t && "string" == typeof e[0]
            ? R.apply(this, e)
            : (u("jQuery.fn." + t + "() is deprecated"),
              e.splice(0, 0, t),
              arguments.length
                ? this.on.apply(this, e)
                : (this.triggerHandler.apply(this, e), this));
        };
      }),
      s.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " "
        ),
        function (e, r) {
          s.fn[r] = function (e, t) {
            return (
              u("jQuery.fn." + r + "() event shorthand is deprecated"),
              0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
            );
          };
        }
      ),
      s(function () {
        s(n.document).triggerHandler("ready");
      }),
      (s.event.special.ready = {
        setup: function () {
          this === n.document && u("'ready' event is deprecated");
        },
      }),
      s.fn.extend({
        bind: function (e, t, r) {
          return u("jQuery.fn.bind() is deprecated"), this.on(e, null, t, r);
        },
        unbind: function (e, t) {
          return u("jQuery.fn.unbind() is deprecated"), this.off(e, null, t);
        },
        delegate: function (e, t, r, n) {
          return u("jQuery.fn.delegate() is deprecated"), this.on(t, e, r, n);
        },
        undelegate: function (e, t, r) {
          return (
            u("jQuery.fn.undelegate() is deprecated"),
            1 === arguments.length
              ? this.off(e, "**")
              : this.off(t, e || "**", r)
          );
        },
        hover: function (e, t) {
          return (
            u("jQuery.fn.hover() is deprecated"),
            this.on("mouseenter", e).on("mouseleave", t || e)
          );
        },
      });
    function T(e) {
      var t = n.document.implementation.createHTMLDocument("");
      return (t.body.innerHTML = e), t.body && t.body.innerHTML;
    }
    function P(e) {
      var t = e.replace(O, "<$1></$2>");
      t !== e &&
        T(e) !== T(t) &&
        u("HTML tags must be properly nested and closed: " + e);
    }
    var O =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      q = s.htmlPrefilter;
    (s.UNSAFE_restoreLegacyHtmlPrefilter = function () {
      s.htmlPrefilter = function (e) {
        return P(e), e.replace(O, "<$1></$2>");
      };
    }),
      (s.htmlPrefilter = function (e) {
        return P(e), q(e);
      });
    var D,
      _ = s.fn.offset;
    (s.fn.offset = function () {
      var e = this[0];
      return !e || (e.nodeType && e.getBoundingClientRect)
        ? _.apply(this, arguments)
        : (u("jQuery.fn.offset() requires a valid DOM element"),
          arguments.length ? this : void 0);
    }),
      s.ajax &&
        ((D = s.param),
        (s.param = function (e, t) {
          var r = s.ajaxSettings && s.ajaxSettings.traditional;
          return (
            void 0 === t &&
              r &&
              (u(
                "jQuery.param() no longer uses jQuery.ajaxSettings.traditional"
              ),
              (t = r)),
            D.call(this, e, t)
          );
        }));
    var E,
      F,
      J = s.fn.andSelf || s.fn.addBack;
    return (
      (s.fn.andSelf = function () {
        return (
          u(
            "jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"
          ),
          J.apply(this, arguments)
        );
      }),
      s.Deferred &&
        ((E = s.Deferred),
        (F = [
          [
            "resolve",
            "done",
            s.Callbacks("once memory"),
            s.Callbacks("once memory"),
            "resolved",
          ],
          [
            "reject",
            "fail",
            s.Callbacks("once memory"),
            s.Callbacks("once memory"),
            "rejected",
          ],
          ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")],
        ]),
        (s.Deferred = function (e) {
          var i = E(),
            a = i.promise();
          return (
            (i.pipe = a.pipe =
              function () {
                var o = arguments;
                return (
                  u("deferred.pipe() is deprecated"),
                  s
                    .Deferred(function (n) {
                      s.each(F, function (e, t) {
                        var r = "function" == typeof o[e] && o[e];
                        i[t[1]](function () {
                          var e = r && r.apply(this, arguments);
                          e && "function" == typeof e.promise
                            ? e
                                .promise()
                                .done(n.resolve)
                                .fail(n.reject)
                                .progress(n.notify)
                            : n[t[0] + "With"](
                                this === a ? n.promise() : this,
                                r ? [e] : arguments
                              );
                        });
                      }),
                        (o = null);
                    })
                    .promise()
                );
              }),
            e && e.call(i, i),
            i
          );
        }),
        (s.Deferred.exceptionHook = E.exceptionHook)),
      s
    );
  });
!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 162));
})({
  162: function (e, t, n) {
    "use strict";
    n.r(t);
    n(163);
    document.addEventListener("DOMContentLoaded", function () {
      var e = function () {
        document.querySelectorAll(".tb-masonry").forEach(function (e) {
          e.querySelector(".tb-brick") && new window.toolsetCommonEs.Masonry(e);
        });
      };
      e();
      window.jQuery &&
        (jQuery(document).on("js_event_wpv_pagination_completed", e),
        jQuery(document).on(
          "js_event_wpv_parametric_search_form_updated",
          function () {
            setTimeout(e, 300);
          }
        ),
        jQuery(document).on(
          "js_event_wpv_parametric_search_form_updated_without_data",
          function () {
            setTimeout(e, 300);
          }
        ),
        jQuery(document).on(
          "js_event_wpv_parametric_search_started",
          function (e, t) {
            jQuery(".js-wpv-custom-search-loading-overlay").show();
          }
        ),
        jQuery(document).on(
          "js_event_wpv_parametric_search_results_updated",
          function (e, t) {
            jQuery(".js-wpv-custom-search-loading-overlay").hide();
          }
        ));
    });
  },
  163: function (e, t, n) {},
});
!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 175));
})({
  175: function (e, t) {
    var n = document.querySelectorAll(".coblocks-animate"),
      r = new IntersectionObserver(
        function (e) {
          e.forEach(function (e) {
            e.isIntersecting &&
              (e.target.classList.add(e.target.dataset.coblocksAnimation),
              r.unobserve(e.target));
          });
        },
        { threshold: [0.15] }
      );
    n.forEach(function (e) {
      r.observe(e);
    });
  },
});
(function ($) {
  "use strict";
  if (typeof wpcf7 === "undefined" || wpcf7 === null) {
    return;
  }
  wpcf7 = $.extend({ cached: 0, inputs: [] }, wpcf7);
  $(function () {
    wpcf7.supportHtml5 = (function () {
      var features = {};
      var input = document.createElement("input");
      features.placeholder = "placeholder" in input;
      var inputTypes = ["email", "url", "tel", "number", "range", "date"];
      $.each(inputTypes, function (index, value) {
        input.setAttribute("type", value);
        features[value] = input.type !== "text";
      });
      return features;
    })();
    $("div.wpcf7 > form").each(function () {
      var $form = $(this);
      wpcf7.initForm($form);
      if (wpcf7.cached) {
        wpcf7.refill($form);
      }
    });
  });
  wpcf7.getId = function (form) {
    return parseInt($('input[name="_wpcf7"]', form).val(), 10);
  };
  wpcf7.initForm = function (form) {
    var $form = $(form);
    wpcf7.setStatus($form, "init");
    $form.submit(function (event) {
      if (!wpcf7.supportHtml5.placeholder) {
        $("[placeholder].placeheld", $form).each(function (i, n) {
          $(n).val("").removeClass("placeheld");
        });
      }
      if (typeof window.FormData === "function") {
        wpcf7.submit($form);
        event.preventDefault();
      }
    });
    $(".wpcf7-submit", $form).after('<span class="ajax-loader"></span>');
    wpcf7.toggleSubmit($form);
    $form.on("click", ".wpcf7-acceptance", function () {
      wpcf7.toggleSubmit($form);
    });
    $(".wpcf7-exclusive-checkbox", $form).on(
      "click",
      "input:checkbox",
      function () {
        var name = $(this).attr("name");
        $form
          .find('input:checkbox[name="' + name + '"]')
          .not(this)
          .prop("checked", false);
      }
    );
    $(".wpcf7-list-item.has-free-text", $form).each(function () {
      var $freetext = $(":input.wpcf7-free-text", this);
      var $wrap = $(this).closest(".wpcf7-form-control");
      if ($(":checkbox, :radio", this).is(":checked")) {
        $freetext.prop("disabled", false);
      } else {
        $freetext.prop("disabled", true);
      }
      $wrap.on("change", ":checkbox, :radio", function () {
        var $cb = $(".has-free-text", $wrap).find(":checkbox, :radio");
        if ($cb.is(":checked")) {
          $freetext.prop("disabled", false).focus();
        } else {
          $freetext.prop("disabled", true);
        }
      });
    });
    if (!wpcf7.supportHtml5.placeholder) {
      $("[placeholder]", $form).each(function () {
        $(this).val($(this).attr("placeholder"));
        $(this).addClass("placeheld");
        $(this).focus(function () {
          if ($(this).hasClass("placeheld")) {
            $(this).val("").removeClass("placeheld");
          }
        });
        $(this).blur(function () {
          if ("" === $(this).val()) {
            $(this).val($(this).attr("placeholder"));
            $(this).addClass("placeheld");
          }
        });
      });
    }
    if (wpcf7.jqueryUi && !wpcf7.supportHtml5.date) {
      $form.find('input.wpcf7-date[type="date"]').each(function () {
        $(this).datepicker({
          dateFormat: "yy-mm-dd",
          minDate: new Date($(this).attr("min")),
          maxDate: new Date($(this).attr("max")),
        });
      });
    }
    if (wpcf7.jqueryUi && !wpcf7.supportHtml5.number) {
      $form.find('input.wpcf7-number[type="number"]').each(function () {
        $(this).spinner({
          min: $(this).attr("min"),
          max: $(this).attr("max"),
          step: $(this).attr("step"),
        });
      });
    }
    wpcf7.resetCounter($form);
    $form.on("change", ".wpcf7-validates-as-url", function () {
      var val = $.trim($(this).val());
      if (
        val &&
        !val.match(/^[a-z][a-z0-9.+-]*:/i) &&
        -1 !== val.indexOf(".")
      ) {
        val = val.replace(/^\/+/, "");
        val = "http://" + val;
      }
      $(this).val(val);
    });
  };
  wpcf7.submit = function (form) {
    if (typeof window.FormData !== "function") {
      return;
    }
    var $form = $(form);
    $(".ajax-loader", $form).addClass("is-active");
    wpcf7.clearResponse($form);
    var formData = new FormData($form.get(0));
    var detail = {
      id: $form.closest("div.wpcf7").attr("id"),
      status: "init",
      inputs: [],
      formData: formData,
    };
    $.each($form.serializeArray(), function (i, field) {
      if ("_wpcf7" == field.name) {
        detail.contactFormId = field.value;
      } else if ("_wpcf7_version" == field.name) {
        detail.pluginVersion = field.value;
      } else if ("_wpcf7_locale" == field.name) {
        detail.contactFormLocale = field.value;
      } else if ("_wpcf7_unit_tag" == field.name) {
        detail.unitTag = field.value;
      } else if ("_wpcf7_container_post" == field.name) {
        detail.containerPostId = field.value;
      } else if (field.name.match(/^_/)) {
      } else {
        detail.inputs.push(field);
      }
    });
    wpcf7.triggerEvent($form.closest("div.wpcf7"), "beforesubmit", detail);
    var ajaxSuccess = function (data, status, xhr, $form) {
      detail.id = $(data.into).attr("id");
      detail.status = data.status;
      detail.apiResponse = data;
      switch (data.status) {
        case "init":
          wpcf7.setStatus($form, "init");
          break;
        case "validation_failed":
          $.each(data.invalid_fields, function (i, n) {
            $(n.into, $form).each(function () {
              wpcf7.notValidTip(this, n.message);
              $(".wpcf7-form-control", this).addClass("wpcf7-not-valid");
              $(".wpcf7-form-control", this).attr(
                "aria-describedby",
                n.error_id
              );
              $("[aria-invalid]", this).attr("aria-invalid", "true");
            });
          });
          wpcf7.setStatus($form, "invalid");
          wpcf7.triggerEvent(data.into, "invalid", detail);
          break;
        case "acceptance_missing":
          wpcf7.setStatus($form, "unaccepted");
          wpcf7.triggerEvent(data.into, "unaccepted", detail);
          break;
        case "spam":
          wpcf7.setStatus($form, "spam");
          wpcf7.triggerEvent(data.into, "spam", detail);
          break;
        case "aborted":
          wpcf7.setStatus($form, "aborted");
          wpcf7.triggerEvent(data.into, "aborted", detail);
          break;
        case "mail_sent":
          wpcf7.setStatus($form, "sent");
          wpcf7.triggerEvent(data.into, "mailsent", detail);
          break;
        case "mail_failed":
          wpcf7.setStatus($form, "failed");
          wpcf7.triggerEvent(data.into, "mailfailed", detail);
          break;
        default:
          wpcf7.setStatus(
            $form,
            "custom-" + data.status.replace(/[^0-9a-z]+/i, "-")
          );
      }
      wpcf7.refill($form, data);
      wpcf7.triggerEvent(data.into, "submit", detail);
      if ("mail_sent" == data.status) {
        $form.each(function () {
          this.reset();
        });
        wpcf7.toggleSubmit($form);
        wpcf7.resetCounter($form);
      }
      if (!wpcf7.supportHtml5.placeholder) {
        $form.find("[placeholder].placeheld").each(function (i, n) {
          $(n).val($(n).attr("placeholder"));
        });
      }
      $(".wpcf7-response-output", $form)
        .html("")
        .append(data.message)
        .slideDown("fast");
      $(".screen-reader-response", $form.closest(".wpcf7")).each(function () {
        var $response = $(this);
        $('[role="status"]', $response).html(data.message);
        if (data.invalid_fields) {
          $.each(data.invalid_fields, function (i, n) {
            if (n.idref) {
              var $li = $("<li></li>").append(
                $("<a></a>")
                  .attr("href", "#" + n.idref)
                  .append(n.message)
              );
            } else {
              var $li = $("<li></li>").append(n.message);
            }
            $li.attr("id", n.error_id);
            $("ul", $response).append($li);
          });
        }
      });
      if (data.posted_data_hash) {
        $form
          .find('input[name="_wpcf7_posted_data_hash"]')
          .first()
          .val(data.posted_data_hash);
      }
    };
    $.ajax({
      type: "POST",
      url: wpcf7.apiSettings.getRoute(
        "/contact-forms/" + wpcf7.getId($form) + "/feedback"
      ),
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false,
    })
      .done(function (data, status, xhr) {
        ajaxSuccess(data, status, xhr, $form);
        $(".ajax-loader", $form).removeClass("is-active");
      })
      .fail(function (xhr, status, error) {
        var $e = $('<div class="ajax-error"></div>').text(error.message);
        $form.after($e);
      });
  };
  wpcf7.triggerEvent = function (target, name, detail) {
    var event = new CustomEvent("wpcf7" + name, {
      bubbles: true,
      detail: detail,
    });
    $(target).get(0).dispatchEvent(event);
  };
  wpcf7.setStatus = function (form, status) {
    var $form = $(form);
    var prevStatus = $form.attr("data-status");
    $form.data("status", status);
    $form.addClass(status);
    $form.attr("data-status", status);
    if (prevStatus && prevStatus !== status) {
      $form.removeClass(prevStatus);
    }
  };
  wpcf7.toggleSubmit = function (form, state) {
    var $form = $(form);
    var $submit = $("input:submit", $form);
    if (typeof state !== "undefined") {
      $submit.prop("disabled", !state);
      return;
    }
    if ($form.hasClass("wpcf7-acceptance-as-validation")) {
      return;
    }
    $submit.prop("disabled", false);
    $(".wpcf7-acceptance", $form).each(function () {
      var $span = $(this);
      var $input = $("input:checkbox", $span);
      if (!$span.hasClass("optional")) {
        if (
          ($span.hasClass("invert") && $input.is(":checked")) ||
          (!$span.hasClass("invert") && !$input.is(":checked"))
        ) {
          $submit.prop("disabled", true);
          return false;
        }
      }
    });
  };
  wpcf7.resetCounter = function (form) {
    var $form = $(form);
    $(".wpcf7-character-count", $form).each(function () {
      var $count = $(this);
      var name = $count.attr("data-target-name");
      var down = $count.hasClass("down");
      var starting = parseInt($count.attr("data-starting-value"), 10);
      var maximum = parseInt($count.attr("data-maximum-value"), 10);
      var minimum = parseInt($count.attr("data-minimum-value"), 10);
      var updateCount = function (target) {
        var $target = $(target);
        var length = $target.val().length;
        var count = down ? starting - length : length;
        $count.attr("data-current-value", count);
        $count.text(count);
        if (maximum && maximum < length) {
          $count.addClass("too-long");
        } else {
          $count.removeClass("too-long");
        }
        if (minimum && length < minimum) {
          $count.addClass("too-short");
        } else {
          $count.removeClass("too-short");
        }
      };
      $(':input[name="' + name + '"]', $form).each(function () {
        updateCount(this);
        $(this).keyup(function () {
          updateCount(this);
        });
      });
    });
  };
  wpcf7.notValidTip = function (target, message) {
    var $target = $(target);
    $(".wpcf7-not-valid-tip", $target).remove();
    $("<span></span>")
      .attr({ class: "wpcf7-not-valid-tip", "aria-hidden": "true" })
      .text(message)
      .appendTo($target);
    if ($target.is(".use-floating-validation-tip *")) {
      var fadeOut = function (target) {
        $(target)
          .not(":hidden")
          .animate({ opacity: 0 }, "fast", function () {
            $(this).css({ "z-index": -100 });
          });
      };
      $target.on("mouseover", ".wpcf7-not-valid-tip", function () {
        fadeOut(this);
      });
      $target.on("focus", ":input", function () {
        fadeOut($(".wpcf7-not-valid-tip", $target));
      });
    }
  };
  wpcf7.refill = function (form, data) {
    var $form = $(form);
    var refillCaptcha = function ($form, items) {
      $.each(items, function (i, n) {
        $form.find(':input[name="' + i + '"]').val("");
        $form.find("img.wpcf7-captcha-" + i).attr("src", n);
        var match = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
        $form
          .find('input:hidden[name="_wpcf7_captcha_challenge_' + i + '"]')
          .attr("value", match[1]);
      });
    };
    var refillQuiz = function ($form, items) {
      $.each(items, function (i, n) {
        $form.find(':input[name="' + i + '"]').val("");
        $form
          .find(':input[name="' + i + '"]')
          .siblings("span.wpcf7-quiz-label")
          .text(n[0]);
        $form
          .find('input:hidden[name="_wpcf7_quiz_answer_' + i + '"]')
          .attr("value", n[1]);
      });
    };
    if (typeof data === "undefined") {
      $.ajax({
        type: "GET",
        url: wpcf7.apiSettings.getRoute(
          "/contact-forms/" + wpcf7.getId($form) + "/refill"
        ),
        beforeSend: function (xhr) {
          var nonce = $form.find(':input[name="_wpnonce"]').val();
          if (nonce) {
            xhr.setRequestHeader("X-WP-Nonce", nonce);
          }
        },
        dataType: "json",
      }).done(function (data, status, xhr) {
        if (data.captcha) {
          refillCaptcha($form, data.captcha);
        }
        if (data.quiz) {
          refillQuiz($form, data.quiz);
        }
      });
    } else {
      if (data.captcha) {
        refillCaptcha($form, data.captcha);
      }
      if (data.quiz) {
        refillQuiz($form, data.quiz);
      }
    }
  };
  wpcf7.clearResponse = function (form) {
    var $form = $(form);
    $form.siblings(".screen-reader-response").each(function () {
      $('[role="status"]', this).html("");
      $("ul", this).html("");
    });
    $(".wpcf7-not-valid-tip", $form).remove();
    $("[aria-invalid]", $form).attr("aria-invalid", "false");
    $(".wpcf7-form-control", $form).removeClass("wpcf7-not-valid");
    $(".wpcf7-response-output", $form).hide().empty();
  };
  wpcf7.apiSettings.getRoute = function (path) {
    var url = wpcf7.apiSettings.root;
    url = url.replace(
      wpcf7.apiSettings.namespace,
      wpcf7.apiSettings.namespace + path
    );
    return url;
  };
})(jQuery);
(function () {
  if (typeof window.CustomEvent === "function") return false;
  function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(
      event,
      params.bubbles,
      params.cancelable,
      params.detail
    );
    return evt;
  }
  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent;
})();
(function () {
  document.addEventListener("DOMContentLoaded", function (event) {
    wpcf7_recaptcha.execute = function (action) {
      grecaptcha
        .execute(wpcf7_recaptcha.sitekey, { action: action })
        .then(function (token) {
          var event = new CustomEvent("wpcf7grecaptchaexecuted", {
            detail: { action: action, token: token },
          });
          document.dispatchEvent(event);
        });
    };
    wpcf7_recaptcha.execute_on_homepage = function () {
      wpcf7_recaptcha.execute(wpcf7_recaptcha.actions["homepage"]);
    };
    wpcf7_recaptcha.execute_on_contactform = function () {
      wpcf7_recaptcha.execute(wpcf7_recaptcha.actions["contactform"]);
    };
    grecaptcha.ready(wpcf7_recaptcha.execute_on_homepage);
    document.addEventListener("change", wpcf7_recaptcha.execute_on_contactform);
    document.addEventListener(
      "wpcf7submit",
      wpcf7_recaptcha.execute_on_homepage
    );
  });
  document.addEventListener("wpcf7grecaptchaexecuted", function (event) {
    var fields = document.querySelectorAll(
      "form.wpcf7-form input[name='_wpcf7_recaptcha_response']"
    );
    for (var i = 0; i < fields.length; i++) {
      var field = fields[i];
      field.setAttribute("value", event.detail.token);
    }
  });
})();
function addVideoAskScript() {
  const videoAsk = document.createElement("script");
  videoAsk.setAttribute("src", "https://www.videoask.com/embed/embed.js");
  document.head.appendChild(videoAsk);
}
async function OICountdownTimer() {
  try {
    let response = await fetch(
      "https://tour.outsourceaccelerator.com/api/sessions"
    );
    let data = await response.json();
    let countDownDate = new Date(data[0].startDate);
    let oi_countdown = document.querySelectorAll(".js-oi-counter");
    let startCountDown = setInterval(function () {
      const now = new Date().getTime();
      const timeleft = countDownDate - now;
      const findTimeString = () => {
        let minutes = String(
          Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60))
        );
        let seconds = String(Math.floor((timeleft % (1000 * 60)) / 1000));
        if (minutes.length === 1) {
          minutes = "0" + minutes;
        }
        if (seconds.length === 1) {
          seconds = "0" + seconds;
        }
        return minutes + seconds;
      };
      let time = findTimeString();
      oi_countdown.forEach((count, index) => {
        count.innerHTML = time.charAt(index);
      });
      if (timeleft < 0) {
        clearInterval(startCountDown);
        document.getElementById("js-oi-banner").remove();
      }
    }, 1000);
  } catch (err) {
    console.log(err);
  }
}
async function OIBanner() {
  let oi_countdown_container = document.getElementById("js-oi-banner");
  if (oi_countdown_container) {
    let response = await fetch(
      "https://tour.outsourceaccelerator.com/api/popup-video"
    );
    let data = await response.json();
    if (data.enablePopupVideo) {
      oi_countdown_container.classList.add("lg:block");
      document
        .getElementById("header")
        .style.setProperty("border-bottom", "none", "important");
      window.addEventListener("load", () => {
        if (window.innerWidth > 450) {
          let oaLiveTourSession = sessionStorage.getItem("OA_SHOW_LIVE_TOUR");
          if (!oaLiveTourSession) {
            const callbacks = {
              onCloseModal: function () {
                sessionStorage.setItem("OA_SHOW_LIVE_TOUR", true);
              },
            };
            window.videoask.loadModal(
              {
                kind: "widget",
                url: "https://www.videoask.com/ff0pbskpa",
                options: {
                  widgetType: "VideoThumbnailWindowTall",
                  text: "Join the Live Session!",
                  backgroundColor: "#F807FF",
                  position: "bottom-right",
                  dismissible: true,
                },
              },
              callbacks
            );
          }
        }
      });
      OICountdownTimer();
    } else {
      oi_countdown_container.style.display = "hidden";
      sessionStorage.removeItem("OA_SHOW_LIVE_TOUR");
    }
  }
}
function OIMeet() {
  fetch("https://meet.outsourceaccelerator.com/be/api/popup-video", {
    method: "GET",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const oi_countdown_container = document.getElementById("js-oi-banner2");
      if (data.enablePopupVideo) {
        oi_countdown_container.classList.add("lg:block");
        document
          .getElementById("header")
          .style.setProperty("border-bottom", "none", "important");
        window.addEventListener("load", () => {
          if (window.innerWidth > 450) {
            let oaMeetSession = sessionStorage.getItem("OA_SHOW_MEET");
            if (!oaMeetSession) {
              const callbacks = {
                onCloseModal: function () {
                  sessionStorage.setItem("OA_SHOW_MEET", true);
                },
              };
              window.videoask.loadModal(
                {
                  kind: "widget",
                  url: "https://www.videoask.com/fc00oocue",
                  options: {
                    widgetType: "VideoThumbnailWindowTall",
                    text: "Join the Live Session!",
                    backgroundColor: "#F807FF",
                    position: "bottom-right",
                    dismissible: true,
                  },
                },
                callbacks
              );
            }
          }
        });
      } else {
        oi_countdown_container.style.display = "hidden";
        sessionStorage.removeItem("OA_SHOW_MEET");
      }
    })
    .catch((error) => console.warn(error));
}
async function OIRedirect() {
  document.getElementById("js-oi-cta").onclick = function () {
    ga("send", "event", "Outsource Insights", "click", "Banner - Learn more");
    location.href = "https://tour.outsourceaccelerator.com/";
  };
}
async function OIRedirect2() {
  document.getElementById("js-oi-cta2").onclick = function () {
    ga("send", "event", "Outsource Insights", "click", "Banner - Join now");
    location.href = "https://meet.outsourceaccelerator.com/";
  };
}
function _oaScrolls() {
  var headerEl = document.getElementsByClassName("oa-js-header")[0];
  var prevScrollpos = window.pageYOffset;
  var onlyOnce = true;
  function _activeSection() {
    var revealPoint = 10;
    var revealElement = document.getElementsByTagName("section");
    for (var i = 0; i < revealElement.length; i++) {
      var windowHeight = window.innerHeight;
      var revealTop = revealElement[i].getBoundingClientRect().top;
      if (revealTop < windowHeight - revealPoint) {
        revealElement[i].classList.add("active");
      } else {
        revealElement[i].classList.remove("active");
      }
    }
  }
  function _oaHeader() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos && currentScrollPos < 1) {
      headerEl.style.top = "0";
      headerEl.classList.add("py-4");
      headerEl.classList.remove("bg-white", "shadow-md");
    } else if (prevScrollpos > currentScrollPos && currentScrollPos > 1) {
      headerEl.style.top = "0";
      headerEl.classList.add("bg-white", "shadow-md");
    } else {
      headerEl.style.top = "-92px";
    }
    prevScrollpos = currentScrollPos;
  }
  function _scrollReveal() {
    var revealPoint = 10;
    var revealElement = document.querySelectorAll(".oa-js-reveal");
    for (var i = 0; i < revealElement.length; i++) {
      _animate(i);
    }
    function _animate(i) {
      setTimeout(function () {
        var windowHeight = window.innerHeight;
        var revealTop = revealElement[i].getBoundingClientRect().top;
        if (revealTop < windowHeight - revealPoint) {
          revealElement[i].classList.add("active");
          setTimeout(function () {
            _counterSection();
          }, 500);
        }
      }, 10 * i);
    }
  }
  function _counterSection() {
    var section = document.getElementsByTagName("section");
    for (var i = 0; i < section.length; i++) {
      if (
        section[i].classList.contains("active") &&
        section[i].id == "oa-section-counter" &&
        onlyOnce
      ) {
        _counterAnimate(section[i].querySelectorAll(".oa-js-count"));
        onlyOnce = false;
      }
    }
  }
  function _counterAnimate(sections_counters) {
    if (sections_counters) {
      for (var x = 0; x < sections_counters.length; x++) {
        var sections_counters_value =
          sections_counters[x].getAttribute("count-value");
        var d = sections_counters_value;
        var s = d + "";
        s = s.replace(".", "");
        s = parseInt(s);
        _animateValue(sections_counters[x], 0, s, 3000);
      }
    }
  }
  function _animateValue(sections_counters, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : +1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = sections_counters;
    var timer = setInterval(function () {
      current += increment;
      obj.innerHTML = current;
      if (current == end) {
        clearInterval(timer);
        if (sections_counters.classList.contains("oa-js-dot")) {
          sections_counters.innerHTML = end
            .toString()
            .replace(/\B(?=(\d{1})+(?!\d))/g, ".");
        }
      }
    }, stepTime);
  }
  _counterSection();
  _scrollReveal();
  _activeSection();
  window.onscroll = function () {
    _oaHeader();
    _scrollReveal();
    _activeSection();
  };
}
function _oaSectionChart() {
  const isMobile = _isOnMobile();
  if (isMobile) {
    let select = document.getElementById("oa-chart-select");
    select.addEventListener("change", (e) => {
      manageSalaryValue(parseInt(e.target.value), "ph");
      manageSalaryValue(parseInt(e.target.value), "uk");
      manageSalaryValue(parseInt(e.target.value), "au");
      manageSalaryValue(parseInt(e.target.value), "us");
      manageChart(parseInt(e.target.value), "ph");
      manageChart(parseInt(e.target.value), "uk");
      manageChart(parseInt(e.target.value), "au");
      manageChart(parseInt(e.target.value), "us");
    });
  }
  function manageSalaryValue(value, countryCode) {
    for (let i = 1; i < 8; i++) {
      let salary = document.querySelector(
        ".oa-chart-" + countryCode + "-prices span:nth-child(" + i + ")"
      );
      salary.classList.add("hidden");
    }
    let new_salary = document.querySelector(
      ".oa-chart-" + countryCode + "-prices span:nth-child(" + (value + 1) + ")"
    );
    new_salary.classList.toggle("hidden");
  }
  function manageChart(value, countryCode) {
    let charts = document.querySelectorAll(
      ".oa-chart-" + countryCode + "-chart"
    );
    let new_chart = charts[value];
    for (let i = 0; i < 7; i++) {
      charts[i].classList.add("hidden");
    }
    new_chart.classList.toggle("hidden");
  }
}
function _progressBar() {
  var pb = document.getElementsByClassName("oa-js-progress-bar");
  var pb_parent = document.getElementsByClassName("oa-js-bar-holder");
  for (var i = 0; i < pb.length; i++) {
    var pb_width = pb[i].getAttribute("pb-width");
    pb[i].style.minWidth = "calc(" + pb_width + "% + 1.3125rem)";
  }
  for (var i = 0; i < pb_parent.length; i++) {
    pb_parent[i].classList.add("w-full", "overflow-visible");
  }
}
function _tabChart() {
  var chart_links = document.getElementsByClassName("oa-js-chart-links");
  var selected_content_wo_f_child = document.querySelectorAll(
    ".oa-js-progress-bar:not(:first-child)"
  );
  for (var i = 0; i < chart_links.length; i++) {
    chart_links[i].onmouseover = function () {
      var cc_link = this.getAttribute("country-code");
      var un_selected_content = document.querySelectorAll(
        '.oa-js-progress-bar:not([country-code="' + cc_link + '"])'
      );
      var selected_content = document.querySelectorAll(
        '.oa-js-progress-bar[country-code="' + cc_link + '"]'
      );
      for (var j = 0; j < selected_content.length; j++) {
        selected_content[j].classList.add(
          "shadow-lg",
          "z-50",
          "absolute",
          "left-0"
        );
      }
      for (var j = 0; j < un_selected_content.length; j++) {
        un_selected_content[j].classList.add("opacity-0");
      }
      for (var j = 0; j < selected_content_wo_f_child.length; j++) {
        selected_content_wo_f_child[j].classList.remove("pl-7", "-ml-7");
      }
    };
    chart_links[i].onmouseout = function () {
      var selected_content = document.querySelectorAll(".oa-js-progress-bar");
      for (var j = 0; j < selected_content.length; j++) {
        selected_content[j].classList.remove(
          "shadow-lg",
          "z-50",
          "opacity-0",
          "absolute",
          "left-0"
        );
      }
      for (var j = 0; j < selected_content_wo_f_child.length; j++) {
        selected_content_wo_f_child[j].classList.add("pl-7", "-ml-7");
      }
    };
  }
}
function _tabServices(url) {
  window.location.href = url;
}
function _accordionService(evt, slug_code) {
  var tabcontent = document.getElementsByClassName(
    "oa-js-marketing-service-content"
  );
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.add("h-0", "opacity-0");
    tabcontent[i].classList.remove("h-full", "opacity-1");
  }
  var tablinks = document.getElementsByClassName(
    "oa-js-marketing-service-links"
  );
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(
      " active bg-oa-french-pass",
      " bg-oa-athens-gray-light"
    );
    var accordion_icon = tablinks[i].querySelector(".js-rotate");
    accordion_icon.className = accordion_icon.className.replace(
      " rotate-90",
      " "
    );
  }
  var showed_tabcontent = document.querySelector(
    "[slug-code='" + slug_code + "']"
  );
  showed_tabcontent.classList.add("h-full", "opacity-1");
  showed_tabcontent.classList.remove("h-0", "opacity-0");
  evt.currentTarget.classList.add("active", "bg-oa-french-pass");
  evt.currentTarget.classList.remove("bg-oa-athens-gray-light");
  evt.currentTarget.querySelector(".js-rotate").classList.add("rotate-90");
}
function _quoteStaff(elem) {
  var js_staff = document.getElementsByClassName("oa-js-staff");
  for (i = 0; i < js_staff.length; i++) {
    js_staff[i].classList.remove(
      "bg-oa-light-blue",
      "text-white",
      "border-oa-light-blue"
    );
    js_staff[i].classList.add("text-oa-light-blue", "border-gray-200");
  }
  elem.classList.add("bg-oa-light-blue", "text-white", "border-oa-light-blue");
  elem.classList.remove("text-oa-light-blue", "border-gray-200");
}
function _sectionHeroAnimate() {
  var js_hero_btns = document.querySelectorAll(".oa-js-hero-btn");
  var section_hero = document.querySelector(".section-hero");
  var windowWidth = window.innerWidth / 5;
  var windowHeight = window.innerHeight / 5;
  var mdUp = window.matchMedia("(min-width: 768px)");
  if (section_hero) {
    section_hero.addEventListener("mousemove", (e) => {
      for (var i = 0; i < js_hero_btns.length; i++) {
        var mouseX = e.clientX / windowWidth;
        var mouseY = e.clientY / windowHeight;
        if (mdUp.matches) {
          if (i == 1) {
            mouseX = mouseX + 22;
            mouseY = mouseX / 2;
            js_hero_btns[1].style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
          }
          js_hero_btns[0].style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
          js_hero_btns[2].style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
        } else {
          js_hero_btns[0].style.transform = "none";
          js_hero_btns[1].style.transform = "translate3d(0, -50%, 0)";
          js_hero_btns[2].style.transform = "none";
        }
      }
    });
  }
}
function _videoModal() {
  const body = document.querySelector(".page");
  const button = document.querySelector(".oa-js-modal-button");
  const overlay = document.querySelector(".oa-js-modal-overlay");
  const close_modal = document.querySelector(".oa-js-close-modal");
  button.addEventListener("click", function () {
    playVideoFunction();
    toggleModal();
  });
  overlay.addEventListener("click", function () {
    stopVideoFunction();
    toggleModal();
  });
  close_modal.addEventListener("click", function () {
    stopVideoFunction();
    toggleModal();
  });
  function toggleModal() {
    const modal = document.querySelector(".oa-js-modal-wrapper");
    modal.classList.toggle("opacity-0");
    body.classList.toggle("overflow-hidden");
    modal.classList.toggle("pointer-events-none");
  }
  function playVideoFunction() {
    var ysrc = document.getElementById("oa-js-video").src;
    var newsrc = ysrc.replace("&autoplay=0", "&autoplay=1");
    document.getElementById("oa-js-video").src = newsrc;
  }
  function stopVideoFunction() {
    var ysrc = document.getElementById("oa-js-video").src;
    var newsrc = ysrc.replace("&autoplay=1", "&autoplay=0");
    document.getElementById("oa-js-video").src = newsrc;
  }
}
function _swiper() {
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 4,
    loop: true,
    spaceBetween: 64,
    pagination: { el: ".swiper-pagination" },
    navigation: { nextEl: ".oa-button-next", prevEl: ".oa-button-prev" },
    breakpoints: {
      1279: {
        slidesPerView: 3,
        spaceBetween: 42,
        autoplay: { delay: 1000, disableOnInteraction: true },
      },
      1023: { slidesPerView: 2, spaceBetween: 32 },
      767: { slidesPerView: 1, spaceBetween: 0 },
    },
  });
}
function _preLoadPlugins() {
  var sections = document.getElementsByTagName("section");
  for (var i = 0; i < sections.length; i++) {
    if (sections[i].id == "oa-section-staff") {
      sections[i].classList.remove("opacity-0");
      sections[i].classList.add("opacity-1");
    } else if (sections[i].id == "oa-section-chart") {
      sections[i].classList.remove("opacity-0");
      sections[i].classList.add("opacity-1");
    }
  }
}
function _isOnMobile() {
  return window.matchMedia("(max-width: 600px)").matches;
}
function _mobile() {
  const isMobile = _isOnMobile();
  manageAccordions();
  function manageAccordions() {
    if (isMobile) {
      const accordionsInput = document.querySelectorAll(
        ".oa-section-accordion input"
      );
      const accordionsContent = document.querySelectorAll(
        ".oa-section-accordion-contents"
      );
      const accordionsSVG = document.querySelectorAll(
        ".oa-section-accordion svg:nth-of-type(2)"
      );
      for (let i = 0; i < accordionsInput.length; i++) {
        accordionsInput[i].addEventListener("click", function () {
          accordionsContent[i].classList.toggle("hidden");
          accordionsSVG[i].classList.toggle("active-arrow");
        });
      }
    }
  }
}
_oaScrolls();
_oaSectionChart();
_sectionHeroAnimate();
_tabChart();
_progressBar();
_videoModal();
_swiper();
_mobile();
addVideoAskScript();
OIBanner();
OIRedirect();
OIRedirect2();
OIMeet();
/*! jQuery UI - v1.12.1 - 2020-09-25
 * http://jqueryui.com
 * Includes: data.js, disable-selection.js, escape-selector.js, focusable.js, form-reset-mixin.js, form.js, ie.js, jquery-1-7.js, keycode.js, labels.js, plugin.js, position.js, safe-active-element.js, safe-blur.js, scroll-parent.js, tabbable.js, unique-id.js, version.js, widget.js
 * Copyright jQuery Foundation and other contributors; Licensed */ !(function (
  t
) {
  "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery);
})(function (x) {
  var t, e, n, W, C, o, s, r, l, a, i, h;
  function E(t, e, i) {
    return [
      parseFloat(t[0]) * (a.test(t[0]) ? e / 100 : 1),
      parseFloat(t[1]) * (a.test(t[1]) ? i / 100 : 1),
    ];
  }
  function H(t, e) {
    return parseInt(x.css(t, e), 10) || 0;
  }
  (x.ui = x.ui || {}),
    (x.ui.version = "1.12.1"),
    /*!
     * jQuery UI :data 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */ x.extend(x.expr[":"], {
      data: x.expr.createPseudo
        ? x.expr.createPseudo(function (e) {
            return function (t) {
              return !!x.data(t, e);
            };
          })
        : function (t, e, i) {
            return !!x.data(t, i[3]);
          },
    }),
    /*!
     * jQuery UI Disable Selection 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */ x.fn.extend({
      disableSelection:
        ((t =
          "onselectstart" in document.createElement("div")
            ? "selectstart"
            : "mousedown"),
        function () {
          return this.on(t + ".ui-disableSelection", function (t) {
            t.preventDefault();
          });
        }),
      enableSelection: function () {
        return this.off(".ui-disableSelection");
      },
    }),
    (x.ui.escapeSelector =
      ((e = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g),
      function (t) {
        return t.replace(e, "\\$1");
      })),
    /*!
     * jQuery UI Focusable 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */ (x.ui.focusable = function (t, e) {
      var i,
        n,
        o,
        s,
        r = t.nodeName.toLowerCase();
      return "area" === r
        ? ((n = (i = t.parentNode).name),
          !(!t.href || !n || "map" !== i.nodeName.toLowerCase()) &&
            0 < (n = x("img[usemap='#" + n + "']")).length &&
            n.is(":visible"))
        : (/^(input|select|textarea|button|object)$/.test(r)
            ? (o = !t.disabled) &&
              (s = x(t).closest("fieldset")[0]) &&
              (o = !s.disabled)
            : (o = ("a" === r && t.href) || e),
          o &&
            x(t).is(":visible") &&
            (function (t) {
              var e = t.css("visibility");
              for (; "inherit" === e; )
                (t = t.parent()), (e = t.css("visibility"));
              return "hidden" !== e;
            })(x(t)));
    }),
    x.extend(x.expr[":"], {
      focusable: function (t) {
        return x.ui.focusable(t, null != x.attr(t, "tabindex"));
      },
    }),
    (x.fn.form = function () {
      return "string" == typeof this[0].form
        ? this.closest("form")
        : x(this[0].form);
    }),
    /*!
     * jQuery UI Form Reset Mixin 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */ (x.ui.formResetMixin = {
      _formResetHandler: function () {
        var e = x(this);
        setTimeout(function () {
          var t = e.data("ui-form-reset-instances");
          x.each(t, function () {
            this.refresh();
          });
        });
      },
      _bindFormResetHandler: function () {
        var t;
        (this.form = this.element.form()),
          this.form.length &&
            ((t = this.form.data("ui-form-reset-instances") || []).length ||
              this.form.on("reset.ui-form-reset", this._formResetHandler),
            t.push(this),
            this.form.data("ui-form-reset-instances", t));
      },
      _unbindFormResetHandler: function () {
        var t;
        this.form.length &&
          ((t = this.form.data("ui-form-reset-instances")).splice(
            x.inArray(this, t),
            1
          ),
          t.length
            ? this.form.data("ui-form-reset-instances", t)
            : this.form
                .removeData("ui-form-reset-instances")
                .off("reset.ui-form-reset"));
      },
    }),
    (x.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())),
    /*!
     * jQuery UI Support for jQuery core 1.7.x 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     */ "1.7" === x.fn.jquery.substring(0, 3) &&
      (x.each(["Width", "Height"], function (t, i) {
        var o = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
          n = i.toLowerCase(),
          s = {
            innerWidth: x.fn.innerWidth,
            innerHeight: x.fn.innerHeight,
            outerWidth: x.fn.outerWidth,
            outerHeight: x.fn.outerHeight,
          };
        function r(t, e, i, n) {
          return (
            x.each(o, function () {
              (e -= parseFloat(x.css(t, "padding" + this)) || 0),
                i &&
                  (e -= parseFloat(x.css(t, "border" + this + "Width")) || 0),
                n && (e -= parseFloat(x.css(t, "margin" + this)) || 0);
            }),
            e
          );
        }
        (x.fn["inner" + i] = function (t) {
          return void 0 === t
            ? s["inner" + i].call(this)
            : this.each(function () {
                x(this).css(n, r(this, t) + "px");
              });
        }),
          (x.fn["outer" + i] = function (t, e) {
            return "number" != typeof t
              ? s["outer" + i].call(this, t)
              : this.each(function () {
                  x(this).css(n, r(this, t, !0, e) + "px");
                });
          });
      }),
      (x.fn.addBack = function (t) {
        return this.add(
          null == t ? this.prevObject : this.prevObject.filter(t)
        );
      })),
    /*!
     * jQuery UI Keycode 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */ (x.ui.keyCode = {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38,
    }),
    /*!
     * jQuery UI Labels 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */ (x.fn.labels = function () {
      var t, e, i;
      return this[0].labels && this[0].labels.length
        ? this.pushStack(this[0].labels)
        : ((e = this.eq(0).parents("label")),
          (t = this.attr("id")) &&
            ((i = (i = this.eq(0).parents().last()).add(
              (i.length ? i : this).siblings()
            )),
            (t = "label[for='" + x.ui.escapeSelector(t) + "']"),
            (e = e.add(i.find(t).addBack(t)))),
          this.pushStack(e));
    }),
    (x.ui.plugin = {
      add: function (t, e, i) {
        var n,
          o = x.ui[t].prototype;
        for (n in i)
          (o.plugins[n] = o.plugins[n] || []), o.plugins[n].push([e, i[n]]);
      },
      call: function (t, e, i, n) {
        var o,
          s = t.plugins[e];
        if (
          s &&
          (n ||
            (t.element[0].parentNode &&
              11 !== t.element[0].parentNode.nodeType))
        )
          for (o = 0; o < s.length; o++)
            t.options[s[o][0]] && s[o][1].apply(t.element, i);
      },
    }),
    /*!
     * jQuery UI Position 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/position/
     */ (W = Math.max),
    (C = Math.abs),
    (o = /left|center|right/),
    (s = /top|center|bottom/),
    (r = /[\+\-]\d+(\.[\d]+)?%?/),
    (l = /^\w+/),
    (a = /%$/),
    (i = x.fn.position),
    (x.position = {
      scrollbarWidth: function () {
        if (void 0 !== n) return n;
        var t,
          e = x(
            "<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"
          ),
          i = e.children()[0];
        return (
          x("body").append(e),
          (t = i.offsetWidth),
          e.css("overflow", "scroll"),
          t === (i = i.offsetWidth) && (i = e[0].clientWidth),
          e.remove(),
          (n = t - i)
        );
      },
      getScrollInfo: function (t) {
        var e = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
          i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
          e =
            "scroll" === e ||
            ("auto" === e && t.width < t.element[0].scrollWidth);
        return {
          width:
            "scroll" === i ||
            ("auto" === i && t.height < t.element[0].scrollHeight)
              ? x.position.scrollbarWidth()
              : 0,
          height: e ? x.position.scrollbarWidth() : 0,
        };
      },
      getWithinInfo: function (t) {
        var e = x(t || window),
          i = x.isWindow(e[0]),
          n = !!e[0] && 9 === e[0].nodeType;
        return {
          element: e,
          isWindow: i,
          isDocument: n,
          offset: !i && !n ? x(t).offset() : { left: 0, top: 0 },
          scrollLeft: e.scrollLeft(),
          scrollTop: e.scrollTop(),
          width: e.outerWidth(),
          height: e.outerHeight(),
        };
      },
    }),
    (x.fn.position = function (f) {
      if (!f || !f.of) return i.apply(this, arguments);
      f = x.extend({}, f);
      var u,
        d,
        p,
        g,
        m,
        t,
        v = x(f.of),
        b = x.position.getWithinInfo(f.within),
        w = x.position.getScrollInfo(b),
        y = (f.collision || "flip").split(" "),
        _ = {},
        e =
          9 === (t = (e = v)[0]).nodeType
            ? {
                width: e.width(),
                height: e.height(),
                offset: { top: 0, left: 0 },
              }
            : x.isWindow(t)
            ? {
                width: e.width(),
                height: e.height(),
                offset: { top: e.scrollTop(), left: e.scrollLeft() },
              }
            : t.preventDefault
            ? { width: 0, height: 0, offset: { top: t.pageY, left: t.pageX } }
            : {
                width: e.outerWidth(),
                height: e.outerHeight(),
                offset: e.offset(),
              };
      return (
        v[0].preventDefault && (f.at = "left top"),
        (d = e.width),
        (p = e.height),
        (m = x.extend({}, (g = e.offset))),
        x.each(["my", "at"], function () {
          var t,
            e,
            i = (f[this] || "").split(" ");
          ((i =
            1 === i.length
              ? o.test(i[0])
                ? i.concat(["center"])
                : s.test(i[0])
                ? ["center"].concat(i)
                : ["center", "center"]
              : i)[0] = o.test(i[0]) ? i[0] : "center"),
            (i[1] = s.test(i[1]) ? i[1] : "center"),
            (t = r.exec(i[0])),
            (e = r.exec(i[1])),
            (_[this] = [t ? t[0] : 0, e ? e[0] : 0]),
            (f[this] = [l.exec(i[0])[0], l.exec(i[1])[0]]);
        }),
        1 === y.length && (y[1] = y[0]),
        "right" === f.at[0]
          ? (m.left += d)
          : "center" === f.at[0] && (m.left += d / 2),
        "bottom" === f.at[1]
          ? (m.top += p)
          : "center" === f.at[1] && (m.top += p / 2),
        (u = E(_.at, d, p)),
        (m.left += u[0]),
        (m.top += u[1]),
        this.each(function () {
          var i,
            t,
            r = x(this),
            l = r.outerWidth(),
            a = r.outerHeight(),
            e = H(this, "marginLeft"),
            n = H(this, "marginTop"),
            o = l + e + H(this, "marginRight") + w.width,
            s = a + n + H(this, "marginBottom") + w.height,
            h = x.extend({}, m),
            c = E(_.my, r.outerWidth(), r.outerHeight());
          "right" === f.my[0]
            ? (h.left -= l)
            : "center" === f.my[0] && (h.left -= l / 2),
            "bottom" === f.my[1]
              ? (h.top -= a)
              : "center" === f.my[1] && (h.top -= a / 2),
            (h.left += c[0]),
            (h.top += c[1]),
            (i = { marginLeft: e, marginTop: n }),
            x.each(["left", "top"], function (t, e) {
              x.ui.position[y[t]] &&
                x.ui.position[y[t]][e](h, {
                  targetWidth: d,
                  targetHeight: p,
                  elemWidth: l,
                  elemHeight: a,
                  collisionPosition: i,
                  collisionWidth: o,
                  collisionHeight: s,
                  offset: [u[0] + c[0], u[1] + c[1]],
                  my: f.my,
                  at: f.at,
                  within: b,
                  elem: r,
                });
            }),
            f.using &&
              (t = function (t) {
                var e = g.left - h.left,
                  i = e + d - l,
                  n = g.top - h.top,
                  o = n + p - a,
                  s = {
                    target: {
                      element: v,
                      left: g.left,
                      top: g.top,
                      width: d,
                      height: p,
                    },
                    element: {
                      element: r,
                      left: h.left,
                      top: h.top,
                      width: l,
                      height: a,
                    },
                    horizontal: i < 0 ? "left" : 0 < e ? "right" : "center",
                    vertical: o < 0 ? "top" : 0 < n ? "bottom" : "middle",
                  };
                d < l && C(e + i) < d && (s.horizontal = "center"),
                  p < a && C(n + o) < p && (s.vertical = "middle"),
                  W(C(e), C(i)) > W(C(n), C(o))
                    ? (s.important = "horizontal")
                    : (s.important = "vertical"),
                  f.using.call(this, t, s);
              }),
            r.offset(x.extend(h, { using: t }));
        })
      );
    }),
    (x.ui.position = {
      fit: {
        left: function (t, e) {
          var i = e.within,
            n = i.isWindow ? i.scrollLeft : i.offset.left,
            o = i.width,
            s = t.left - e.collisionPosition.marginLeft,
            r = n - s,
            l = s + e.collisionWidth - o - n;
          e.collisionWidth > o
            ? 0 < r && l <= 0
              ? ((i = t.left + r + e.collisionWidth - o - n), (t.left += r - i))
              : (t.left =
                  !(0 < l && r <= 0) && l < r ? n + o - e.collisionWidth : n)
            : 0 < r
            ? (t.left += r)
            : 0 < l
            ? (t.left -= l)
            : (t.left = W(t.left - s, t.left));
        },
        top: function (t, e) {
          var i = e.within,
            n = i.isWindow ? i.scrollTop : i.offset.top,
            o = e.within.height,
            s = t.top - e.collisionPosition.marginTop,
            r = n - s,
            l = s + e.collisionHeight - o - n;
          e.collisionHeight > o
            ? 0 < r && l <= 0
              ? ((i = t.top + r + e.collisionHeight - o - n), (t.top += r - i))
              : (t.top =
                  !(0 < l && r <= 0) && l < r ? n + o - e.collisionHeight : n)
            : 0 < r
            ? (t.top += r)
            : 0 < l
            ? (t.top -= l)
            : (t.top = W(t.top - s, t.top));
        },
      },
      flip: {
        left: function (t, e) {
          var i = e.within,
            n = i.offset.left + i.scrollLeft,
            o = i.width,
            s = i.isWindow ? i.scrollLeft : i.offset.left,
            r = t.left - e.collisionPosition.marginLeft,
            l = r - s,
            a = r + e.collisionWidth - o - s,
            h =
              "left" === e.my[0]
                ? -e.elemWidth
                : "right" === e.my[0]
                ? e.elemWidth
                : 0,
            i =
              "left" === e.at[0]
                ? e.targetWidth
                : "right" === e.at[0]
                ? -e.targetWidth
                : 0,
            r = -2 * e.offset[0];
          l < 0
            ? ((n = t.left + h + i + r + e.collisionWidth - o - n) < 0 ||
                n < C(l)) &&
              (t.left += h + i + r)
            : 0 < a &&
              (0 <
                (s = t.left - e.collisionPosition.marginLeft + h + i + r - s) ||
                C(s) < a) &&
              (t.left += h + i + r);
        },
        top: function (t, e) {
          var i = e.within,
            n = i.offset.top + i.scrollTop,
            o = i.height,
            s = i.isWindow ? i.scrollTop : i.offset.top,
            r = t.top - e.collisionPosition.marginTop,
            l = r - s,
            a = r + e.collisionHeight - o - s,
            h =
              "top" === e.my[1]
                ? -e.elemHeight
                : "bottom" === e.my[1]
                ? e.elemHeight
                : 0,
            i =
              "top" === e.at[1]
                ? e.targetHeight
                : "bottom" === e.at[1]
                ? -e.targetHeight
                : 0,
            r = -2 * e.offset[1];
          l < 0
            ? ((n = t.top + h + i + r + e.collisionHeight - o - n) < 0 ||
                n < C(l)) &&
              (t.top += h + i + r)
            : 0 < a &&
              (0 <
                (s = t.top - e.collisionPosition.marginTop + h + i + r - s) ||
                C(s) < a) &&
              (t.top += h + i + r);
        },
      },
      flipfit: {
        left: function () {
          x.ui.position.flip.left.apply(this, arguments),
            x.ui.position.fit.left.apply(this, arguments);
        },
        top: function () {
          x.ui.position.flip.top.apply(this, arguments),
            x.ui.position.fit.top.apply(this, arguments);
        },
      },
    }),
    (x.ui.safeActiveElement = function (e) {
      var i;
      try {
        i = e.activeElement;
      } catch (t) {
        i = e.body;
      }
      return (i = !(i = i || e.body).nodeName ? e.body : i);
    }),
    (x.ui.safeBlur = function (t) {
      t && "body" !== t.nodeName.toLowerCase() && x(t).trigger("blur");
    }),
    /*!
     * jQuery UI Scroll Parent 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */ (x.fn.scrollParent = function (t) {
      var e = this.css("position"),
        i = "absolute" === e,
        n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
        t = this.parents()
          .filter(function () {
            var t = x(this);
            return (
              (!i || "static" !== t.css("position")) &&
              n.test(
                t.css("overflow") + t.css("overflow-y") + t.css("overflow-x")
              )
            );
          })
          .eq(0);
      return "fixed" !== e && t.length
        ? t
        : x(this[0].ownerDocument || document);
    }),
    /*!
     * jQuery UI Tabbable 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */ x.extend(x.expr[":"], {
      tabbable: function (t) {
        var e = x.attr(t, "tabindex"),
          i = null != e;
        return (!i || 0 <= e) && x.ui.focusable(t, i);
      },
    }),
    /*!
     * jQuery UI Unique ID 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */ x.fn.extend({
      uniqueId:
        ((h = 0),
        function () {
          return this.each(function () {
            this.id || (this.id = "ui-id-" + ++h);
          });
        }),
      removeUniqueId: function () {
        return this.each(function () {
          /^ui-id-\d+$/.test(this.id) && x(this).removeAttr("id");
        });
      },
    });
  /*!
   * jQuery UI Widget 1.12.1
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   */ var c,
    f = 0,
    u = Array.prototype.slice;
  (x.cleanData =
    ((c = x.cleanData),
    function (t) {
      for (var e, i, n = 0; null != (i = t[n]); n++)
        try {
          (e = x._data(i, "events")) &&
            e.remove &&
            x(i).triggerHandler("remove");
        } catch (t) {}
      c(t);
    })),
    (x.widget = function (t, i, e) {
      var n,
        o,
        s,
        r = {},
        l = t.split(".")[0],
        a = l + "-" + (t = t.split(".")[1]);
      return (
        e || ((e = i), (i = x.Widget)),
        x.isArray(e) && (e = x.extend.apply(null, [{}].concat(e))),
        (x.expr[":"][a.toLowerCase()] = function (t) {
          return !!x.data(t, a);
        }),
        (x[l] = x[l] || {}),
        (n = x[l][t]),
        (o = x[l][t] =
          function (t, e) {
            if (!this._createWidget) return new o(t, e);
            arguments.length && this._createWidget(t, e);
          }),
        x.extend(o, n, {
          version: e.version,
          _proto: x.extend({}, e),
          _childConstructors: [],
        }),
        ((s = new i()).options = x.widget.extend({}, s.options)),
        x.each(e, function (e, n) {
          function o() {
            return i.prototype[e].apply(this, arguments);
          }
          function s(t) {
            return i.prototype[e].apply(this, t);
          }
          x.isFunction(n)
            ? (r[e] = function () {
                var t,
                  e = this._super,
                  i = this._superApply;
                return (
                  (this._super = o),
                  (this._superApply = s),
                  (t = n.apply(this, arguments)),
                  (this._super = e),
                  (this._superApply = i),
                  t
                );
              })
            : (r[e] = n);
        }),
        (o.prototype = x.widget.extend(
          s,
          { widgetEventPrefix: (n && s.widgetEventPrefix) || t },
          r,
          { constructor: o, namespace: l, widgetName: t, widgetFullName: a }
        )),
        n
          ? (x.each(n._childConstructors, function (t, e) {
              var i = e.prototype;
              x.widget(i.namespace + "." + i.widgetName, o, e._proto);
            }),
            delete n._childConstructors)
          : i._childConstructors.push(o),
        x.widget.bridge(t, o),
        o
      );
    }),
    (x.widget.extend = function (t) {
      for (var e, i, n = u.call(arguments, 1), o = 0, s = n.length; o < s; o++)
        for (e in n[o])
          (i = n[o][e]),
            n[o].hasOwnProperty(e) &&
              void 0 !== i &&
              (x.isPlainObject(i)
                ? (t[e] = x.isPlainObject(t[e])
                    ? x.widget.extend({}, t[e], i)
                    : x.widget.extend({}, i))
                : (t[e] = i));
      return t;
    }),
    (x.widget.bridge = function (s, e) {
      var r = e.prototype.widgetFullName || s;
      x.fn[s] = function (i) {
        var t = "string" == typeof i,
          n = u.call(arguments, 1),
          o = this;
        return (
          t
            ? this.length || "instance" !== i
              ? this.each(function () {
                  var t,
                    e = x.data(this, r);
                  return "instance" === i
                    ? ((o = e), !1)
                    : e
                    ? x.isFunction(e[i]) && "_" !== i.charAt(0)
                      ? (t = e[i].apply(e, n)) !== e && void 0 !== t
                        ? ((o = t && t.jquery ? o.pushStack(t.get()) : t), !1)
                        : void 0
                      : x.error(
                          "no such method '" +
                            i +
                            "' for " +
                            s +
                            " widget instance"
                        )
                    : x.error(
                        "cannot call methods on " +
                          s +
                          " prior to initialization; attempted to call method '" +
                          i +
                          "'"
                      );
                })
              : (o = void 0)
            : (n.length && (i = x.widget.extend.apply(null, [i].concat(n))),
              this.each(function () {
                var t = x.data(this, r);
                t
                  ? (t.option(i || {}), t._init && t._init())
                  : x.data(this, r, new e(i, this));
              })),
          o
        );
      };
    }),
    (x.Widget = function () {}),
    (x.Widget._childConstructors = []),
    (x.Widget.prototype = {
      widgetName: "widget",
      widgetEventPrefix: "",
      defaultElement: "<div>",
      options: { classes: {}, disabled: !1, create: null },
      _createWidget: function (t, e) {
        (e = x(e || this.defaultElement || this)[0]),
          (this.element = x(e)),
          (this.uuid = f++),
          (this.eventNamespace = "." + this.widgetName + this.uuid),
          (this.bindings = x()),
          (this.hoverable = x()),
          (this.focusable = x()),
          (this.classesElementLookup = {}),
          e !== this &&
            (x.data(e, this.widgetFullName, this),
            this._on(!0, this.element, {
              remove: function (t) {
                t.target === e && this.destroy();
              },
            }),
            (this.document = x(e.style ? e.ownerDocument : e.document || e)),
            (this.window = x(
              this.document[0].defaultView || this.document[0].parentWindow
            ))),
          (this.options = x.widget.extend(
            {},
            this.options,
            this._getCreateOptions(),
            t
          )),
          this._create(),
          this.options.disabled &&
            this._setOptionDisabled(this.options.disabled),
          this._trigger("create", null, this._getCreateEventData()),
          this._init();
      },
      _getCreateOptions: function () {
        return {};
      },
      _getCreateEventData: x.noop,
      _create: x.noop,
      _init: x.noop,
      destroy: function () {
        var i = this;
        this._destroy(),
          x.each(this.classesElementLookup, function (t, e) {
            i._removeClass(e, t);
          }),
          this.element.off(this.eventNamespace).removeData(this.widgetFullName),
          this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
          this.bindings.off(this.eventNamespace);
      },
      _destroy: x.noop,
      widget: function () {
        return this.element;
      },
      option: function (t, e) {
        var i,
          n,
          o,
          s = t;
        if (0 === arguments.length) return x.widget.extend({}, this.options);
        if ("string" == typeof t)
          if (((s = {}), (t = (i = t.split(".")).shift()), i.length)) {
            for (
              n = s[t] = x.widget.extend({}, this.options[t]), o = 0;
              o < i.length - 1;
              o++
            )
              (n[i[o]] = n[i[o]] || {}), (n = n[i[o]]);
            if (((t = i.pop()), 1 === arguments.length))
              return void 0 === n[t] ? null : n[t];
            n[t] = e;
          } else {
            if (1 === arguments.length)
              return void 0 === this.options[t] ? null : this.options[t];
            s[t] = e;
          }
        return this._setOptions(s), this;
      },
      _setOptions: function (t) {
        for (var e in t) this._setOption(e, t[e]);
        return this;
      },
      _setOption: function (t, e) {
        return (
          "classes" === t && this._setOptionClasses(e),
          (this.options[t] = e),
          "disabled" === t && this._setOptionDisabled(e),
          this
        );
      },
      _setOptionClasses: function (t) {
        var e, i, n;
        for (e in t)
          (n = this.classesElementLookup[e]),
            t[e] !== this.options.classes[e] &&
              n &&
              n.length &&
              ((i = x(n.get())),
              this._removeClass(n, e),
              i.addClass(
                this._classes({ element: i, keys: e, classes: t, add: !0 })
              ));
      },
      _setOptionDisabled: function (t) {
        this._toggleClass(
          this.widget(),
          this.widgetFullName + "-disabled",
          null,
          !!t
        ),
          t &&
            (this._removeClass(this.hoverable, null, "ui-state-hover"),
            this._removeClass(this.focusable, null, "ui-state-focus"));
      },
      enable: function () {
        return this._setOptions({ disabled: !1 });
      },
      disable: function () {
        return this._setOptions({ disabled: !0 });
      },
      _classes: function (o) {
        var s = [],
          r = this;
        function t(t, e) {
          for (var i, n = 0; n < t.length; n++)
            (i = r.classesElementLookup[t[n]] || x()),
              (i = o.add
                ? x(x.unique(i.get().concat(o.element.get())))
                : x(i.not(o.element).get())),
              (r.classesElementLookup[t[n]] = i),
              s.push(t[n]),
              e && o.classes[t[n]] && s.push(o.classes[t[n]]);
        }
        return (
          (o = x.extend(
            { element: this.element, classes: this.options.classes || {} },
            o
          )),
          this._on(o.element, { remove: "_untrackClassesElement" }),
          o.keys && t(o.keys.match(/\S+/g) || [], !0),
          o.extra && t(o.extra.match(/\S+/g) || []),
          s.join(" ")
        );
      },
      _untrackClassesElement: function (i) {
        var n = this;
        x.each(n.classesElementLookup, function (t, e) {
          -1 !== x.inArray(i.target, e) &&
            (n.classesElementLookup[t] = x(e.not(i.target).get()));
        });
      },
      _removeClass: function (t, e, i) {
        return this._toggleClass(t, e, i, !1);
      },
      _addClass: function (t, e, i) {
        return this._toggleClass(t, e, i, !0);
      },
      _toggleClass: function (t, e, i, n) {
        var o = "string" == typeof t || null === t,
          i = {
            extra: o ? e : i,
            keys: o ? t : e,
            element: o ? this.element : t,
            add: (n = "boolean" == typeof n ? n : i),
          };
        return i.element.toggleClass(this._classes(i), n), this;
      },
      _on: function (o, s, t) {
        var r,
          l = this;
        "boolean" != typeof o && ((t = s), (s = o), (o = !1)),
          t
            ? ((s = r = x(s)), (this.bindings = this.bindings.add(s)))
            : ((t = s), (s = this.element), (r = this.widget())),
          x.each(t, function (t, e) {
            function i() {
              if (
                o ||
                (!0 !== l.options.disabled &&
                  !x(this).hasClass("ui-state-disabled"))
              )
                return ("string" == typeof e ? l[e] : e).apply(l, arguments);
            }
            "string" != typeof e &&
              (i.guid = e.guid = e.guid || i.guid || x.guid++);
            var n = t.match(/^([\w:-]*)\s*(.*)$/),
              t = n[1] + l.eventNamespace,
              n = n[2];
            n ? r.on(t, n, i) : s.on(t, i);
          });
      },
      _off: function (t, e) {
        (e =
          (e || "").split(" ").join(this.eventNamespace + " ") +
          this.eventNamespace),
          t.off(e).off(e),
          (this.bindings = x(this.bindings.not(t).get())),
          (this.focusable = x(this.focusable.not(t).get())),
          (this.hoverable = x(this.hoverable.not(t).get()));
      },
      _delay: function (t, e) {
        var i = this;
        return setTimeout(function () {
          return ("string" == typeof t ? i[t] : t).apply(i, arguments);
        }, e || 0);
      },
      _hoverable: function (t) {
        (this.hoverable = this.hoverable.add(t)),
          this._on(t, {
            mouseenter: function (t) {
              this._addClass(x(t.currentTarget), null, "ui-state-hover");
            },
            mouseleave: function (t) {
              this._removeClass(x(t.currentTarget), null, "ui-state-hover");
            },
          });
      },
      _focusable: function (t) {
        (this.focusable = this.focusable.add(t)),
          this._on(t, {
            focusin: function (t) {
              this._addClass(x(t.currentTarget), null, "ui-state-focus");
            },
            focusout: function (t) {
              this._removeClass(x(t.currentTarget), null, "ui-state-focus");
            },
          });
      },
      _trigger: function (t, e, i) {
        var n,
          o,
          s = this.options[t];
        if (
          ((i = i || {}),
          ((e = x.Event(e)).type = (
            t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t
          ).toLowerCase()),
          (e.target = this.element[0]),
          (o = e.originalEvent))
        )
          for (n in o) n in e || (e[n] = o[n]);
        return (
          this.element.trigger(e, i),
          !(
            (x.isFunction(s) &&
              !1 === s.apply(this.element[0], [e].concat(i))) ||
            e.isDefaultPrevented()
          )
        );
      },
    }),
    x.each({ show: "fadeIn", hide: "fadeOut" }, function (s, r) {
      x.Widget.prototype["_" + s] = function (e, t, i) {
        var n = (t = "string" == typeof t ? { effect: t } : t)
            ? (!0 !== t && "number" != typeof t && t.effect) || r
            : s,
          o = !x.isEmptyObject(
            (t = "number" == typeof (t = t || {}) ? { duration: t } : t)
          );
        (t.complete = i),
          t.delay && e.delay(t.delay),
          o && x.effects && x.effects.effect[n]
            ? e[s](t)
            : n !== s && e[n]
            ? e[n](t.duration, t.easing, i)
            : e.queue(function (t) {
                x(this)[s](), i && i.call(e[0]), t();
              });
      };
    });
});
/*!
 * jQuery UI Datepicker 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ !(function (e) {
  "function" == typeof define && define.amd
    ? define(["jquery", "./core"], e)
    : e(jQuery);
})(function (M) {
  var r;
  function e() {
    (this._curInst = null),
      (this._keyEvent = !1),
      (this._disabledInputs = []),
      (this._datepickerShowing = !1),
      (this._inDialog = !1),
      (this._mainDivId = "ui-datepicker-div"),
      (this._inlineClass = "ui-datepicker-inline"),
      (this._appendClass = "ui-datepicker-append"),
      (this._triggerClass = "ui-datepicker-trigger"),
      (this._dialogClass = "ui-datepicker-dialog"),
      (this._disableClass = "ui-datepicker-disabled"),
      (this._unselectableClass = "ui-datepicker-unselectable"),
      (this._currentClass = "ui-datepicker-current-day"),
      (this._dayOverClass = "ui-datepicker-days-cell-over"),
      (this.regional = []),
      (this.regional[""] = {
        closeText: "Done",
        prevText: "Prev",
        nextText: "Next",
        currentText: "Today",
        monthNames: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        monthNamesShort: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        dayNames: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        weekHeader: "Wk",
        dateFormat: "mm/dd/yy",
        firstDay: 0,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: "",
      }),
      (this._defaults = {
        showOn: "focus",
        showAnim: "fadeIn",
        showOptions: {},
        defaultDate: null,
        appendText: "",
        buttonText: "...",
        buttonImage: "",
        buttonImageOnly: !1,
        hideIfNoPrevNext: !1,
        navigationAsDateFormat: !1,
        gotoCurrent: !1,
        changeMonth: !1,
        changeYear: !1,
        yearRange: "c-10:c+10",
        showOtherMonths: !1,
        selectOtherMonths: !1,
        showWeek: !1,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: "+10",
        minDate: null,
        maxDate: null,
        duration: "fast",
        beforeShowDay: null,
        beforeShow: null,
        onSelect: null,
        onChangeMonthYear: null,
        onClose: null,
        numberOfMonths: 1,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        altField: "",
        altFormat: "",
        constrainInput: !0,
        showButtonPanel: !1,
        autoSize: !1,
        disabled: !1,
      }),
      M.extend(this._defaults, this.regional[""]),
      (this.regional.en = M.extend(!0, {}, this.regional[""])),
      (this.regional["en-US"] = M.extend(!0, {}, this.regional.en)),
      (this.dpDiv = a(
        M(
          "<div id='" +
            this._mainDivId +
            "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
        )
      ));
  }
  function a(e) {
    var t =
      "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
    return e
      .on("mouseout", t, function () {
        M(this).removeClass("ui-state-hover"),
          -1 !== this.className.indexOf("ui-datepicker-prev") &&
            M(this).removeClass("ui-datepicker-prev-hover"),
          -1 !== this.className.indexOf("ui-datepicker-next") &&
            M(this).removeClass("ui-datepicker-next-hover");
      })
      .on("mouseover", t, n);
  }
  function n() {
    M.datepicker._isDisabledDatepicker(
      (r.inline ? r.dpDiv.parent() : r.input)[0]
    ) ||
      (M(this)
        .parents(".ui-datepicker-calendar")
        .find("a")
        .removeClass("ui-state-hover"),
      M(this).addClass("ui-state-hover"),
      -1 !== this.className.indexOf("ui-datepicker-prev") &&
        M(this).addClass("ui-datepicker-prev-hover"),
      -1 !== this.className.indexOf("ui-datepicker-next") &&
        M(this).addClass("ui-datepicker-next-hover"));
  }
  function o(e, t) {
    for (var a in (M.extend(e, t), t)) null == t[a] && (e[a] = t[a]);
    return e;
  }
  return (
    M.extend(M.ui, { datepicker: { version: "1.12.1" } }),
    M.extend(e.prototype, {
      markerClassName: "hasDatepicker",
      maxRows: 4,
      _widgetDatepicker: function () {
        return this.dpDiv;
      },
      setDefaults: function (e) {
        return o(this._defaults, e || {}), this;
      },
      _attachDatepicker: function (e, t) {
        var a,
          i = e.nodeName.toLowerCase(),
          s = "div" === i || "span" === i;
        e.id || ((this.uuid += 1), (e.id = "dp" + this.uuid)),
          ((a = this._newInst(M(e), s)).settings = M.extend({}, t || {})),
          "input" === i
            ? this._connectDatepicker(e, a)
            : s && this._inlineDatepicker(e, a);
      },
      _newInst: function (e, t) {
        return {
          id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
          input: e,
          selectedDay: 0,
          selectedMonth: 0,
          selectedYear: 0,
          drawMonth: 0,
          drawYear: 0,
          inline: t,
          dpDiv: t
            ? a(
                M(
                  "<div class='" +
                    this._inlineClass +
                    " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
                )
              )
            : this.dpDiv,
        };
      },
      _connectDatepicker: function (e, t) {
        var a = M(e);
        (t.append = M([])),
          (t.trigger = M([])),
          a.hasClass(this.markerClassName) ||
            (this._attachments(a, t),
            a
              .addClass(this.markerClassName)
              .on("keydown", this._doKeyDown)
              .on("keypress", this._doKeyPress)
              .on("keyup", this._doKeyUp),
            this._autoSize(t),
            M.data(e, "datepicker", t),
            t.settings.disabled && this._disableDatepicker(e));
      },
      _attachments: function (e, t) {
        var a,
          i = this._get(t, "appendText"),
          s = this._get(t, "isRTL");
        t.append && t.append.remove(),
          i &&
            ((t.append = M(
              "<span class='" + this._appendClass + "'>" + i + "</span>"
            )),
            e[s ? "before" : "after"](t.append)),
          e.off("focus", this._showDatepicker),
          t.trigger && t.trigger.remove(),
          ("focus" !== (a = this._get(t, "showOn")) && "both" !== a) ||
            e.on("focus", this._showDatepicker),
          ("button" !== a && "both" !== a) ||
            ((i = this._get(t, "buttonText")),
            (a = this._get(t, "buttonImage")),
            (t.trigger = M(
              this._get(t, "buttonImageOnly")
                ? M("<img/>")
                    .addClass(this._triggerClass)
                    .attr({ src: a, alt: i, title: i })
                : M("<button type='button'></button>")
                    .addClass(this._triggerClass)
                    .html(
                      a ? M("<img/>").attr({ src: a, alt: i, title: i }) : i
                    )
            )),
            e[s ? "before" : "after"](t.trigger),
            t.trigger.on("click", function () {
              return (
                M.datepicker._datepickerShowing &&
                M.datepicker._lastInput === e[0]
                  ? M.datepicker._hideDatepicker()
                  : (M.datepicker._datepickerShowing &&
                      M.datepicker._lastInput !== e[0] &&
                      M.datepicker._hideDatepicker(),
                    M.datepicker._showDatepicker(e[0])),
                !1
              );
            }));
      },
      _autoSize: function (e) {
        var t, a, i, s, r, n;
        this._get(e, "autoSize") &&
          !e.inline &&
          ((r = new Date(2009, 11, 20)),
          (n = this._get(e, "dateFormat")).match(/[DM]/) &&
            (r.setMonth(
              (t = function (e) {
                for (s = i = a = 0; s < e.length; s++)
                  e[s].length > a && ((a = e[s].length), (i = s));
                return i;
              })(this._get(e, n.match(/MM/) ? "monthNames" : "monthNamesShort"))
            ),
            r.setDate(
              t(this._get(e, n.match(/DD/) ? "dayNames" : "dayNamesShort")) +
                20 -
                r.getDay()
            )),
          e.input.attr("size", this._formatDate(e, r).length));
      },
      _inlineDatepicker: function (e, t) {
        var a = M(e);
        a.hasClass(this.markerClassName) ||
          (a.addClass(this.markerClassName).append(t.dpDiv),
          M.data(e, "datepicker", t),
          this._setDate(t, this._getDefaultDate(t), !0),
          this._updateDatepicker(t),
          this._updateAlternate(t),
          t.settings.disabled && this._disableDatepicker(e),
          t.dpDiv.css("display", "block"));
      },
      _dialogDatepicker: function (e, t, a, i, s) {
        var r,
          n = this._dialogInst;
        return (
          n ||
            ((this.uuid += 1),
            (r = "dp" + this.uuid),
            (this._dialogInput = M(
              "<input type='text' id='" +
                r +
                "' style='position: absolute; top: -100px; width: 0px;'/>"
            )),
            this._dialogInput.on("keydown", this._doKeyDown),
            M("body").append(this._dialogInput),
            ((n = this._dialogInst =
              this._newInst(this._dialogInput, !1)).settings = {}),
            M.data(this._dialogInput[0], "datepicker", n)),
          o(n.settings, i || {}),
          (t = t && t.constructor === Date ? this._formatDate(n, t) : t),
          this._dialogInput.val(t),
          (this._pos = s ? (s.length ? s : [s.pageX, s.pageY]) : null),
          this._pos ||
            ((r = document.documentElement.clientWidth),
            (i = document.documentElement.clientHeight),
            (t =
              document.documentElement.scrollLeft || document.body.scrollLeft),
            (s = document.documentElement.scrollTop || document.body.scrollTop),
            (this._pos = [r / 2 - 100 + t, i / 2 - 150 + s])),
          this._dialogInput
            .css("left", this._pos[0] + 20 + "px")
            .css("top", this._pos[1] + "px"),
          (n.settings.onSelect = a),
          (this._inDialog = !0),
          this.dpDiv.addClass(this._dialogClass),
          this._showDatepicker(this._dialogInput[0]),
          M.blockUI && M.blockUI(this.dpDiv),
          M.data(this._dialogInput[0], "datepicker", n),
          this
        );
      },
      _destroyDatepicker: function (e) {
        var t,
          a = M(e),
          i = M.data(e, "datepicker");
        a.hasClass(this.markerClassName) &&
          ((t = e.nodeName.toLowerCase()),
          M.removeData(e, "datepicker"),
          "input" === t
            ? (i.append.remove(),
              i.trigger.remove(),
              a
                .removeClass(this.markerClassName)
                .off("focus", this._showDatepicker)
                .off("keydown", this._doKeyDown)
                .off("keypress", this._doKeyPress)
                .off("keyup", this._doKeyUp))
            : ("div" !== t && "span" !== t) ||
              a.removeClass(this.markerClassName).empty(),
          r === i && (r = null));
      },
      _enableDatepicker: function (t) {
        var e,
          a = M(t),
          i = M.data(t, "datepicker");
        a.hasClass(this.markerClassName) &&
          ("input" === (e = t.nodeName.toLowerCase())
            ? ((t.disabled = !1),
              i.trigger
                .filter("button")
                .each(function () {
                  this.disabled = !1;
                })
                .end()
                .filter("img")
                .css({ opacity: "1.0", cursor: "" }))
            : ("div" !== e && "span" !== e) ||
              ((a = a.children("." + this._inlineClass))
                .children()
                .removeClass("ui-state-disabled"),
              a
                .find("select.ui-datepicker-month, select.ui-datepicker-year")
                .prop("disabled", !1)),
          (this._disabledInputs = M.map(this._disabledInputs, function (e) {
            return e === t ? null : e;
          })));
      },
      _disableDatepicker: function (t) {
        var e,
          a = M(t),
          i = M.data(t, "datepicker");
        a.hasClass(this.markerClassName) &&
          ("input" === (e = t.nodeName.toLowerCase())
            ? ((t.disabled = !0),
              i.trigger
                .filter("button")
                .each(function () {
                  this.disabled = !0;
                })
                .end()
                .filter("img")
                .css({ opacity: "0.5", cursor: "default" }))
            : ("div" !== e && "span" !== e) ||
              ((a = a.children("." + this._inlineClass))
                .children()
                .addClass("ui-state-disabled"),
              a
                .find("select.ui-datepicker-month, select.ui-datepicker-year")
                .prop("disabled", !0)),
          (this._disabledInputs = M.map(this._disabledInputs, function (e) {
            return e === t ? null : e;
          })),
          (this._disabledInputs[this._disabledInputs.length] = t));
      },
      _isDisabledDatepicker: function (e) {
        if (!e) return !1;
        for (var t = 0; t < this._disabledInputs.length; t++)
          if (this._disabledInputs[t] === e) return !0;
        return !1;
      },
      _getInst: function (e) {
        try {
          return M.data(e, "datepicker");
        } catch (e) {
          throw "Missing instance data for this datepicker";
        }
      },
      _optionDatepicker: function (e, t, a) {
        var i,
          s,
          r,
          n,
          d = this._getInst(e);
        if (2 === arguments.length && "string" == typeof t)
          return "defaults" === t
            ? M.extend({}, M.datepicker._defaults)
            : d
            ? "all" === t
              ? M.extend({}, d.settings)
              : this._get(d, t)
            : null;
        (i = t || {}),
          "string" == typeof t && ((i = {})[t] = a),
          d &&
            (this._curInst === d && this._hideDatepicker(),
            (s = this._getDateDatepicker(e, !0)),
            (r = this._getMinMaxDate(d, "min")),
            (n = this._getMinMaxDate(d, "max")),
            o(d.settings, i),
            null !== r &&
              void 0 !== i.dateFormat &&
              void 0 === i.minDate &&
              (d.settings.minDate = this._formatDate(d, r)),
            null !== n &&
              void 0 !== i.dateFormat &&
              void 0 === i.maxDate &&
              (d.settings.maxDate = this._formatDate(d, n)),
            "disabled" in i &&
              (i.disabled
                ? this._disableDatepicker(e)
                : this._enableDatepicker(e)),
            this._attachments(M(e), d),
            this._autoSize(d),
            this._setDate(d, s),
            this._updateAlternate(d),
            this._updateDatepicker(d));
      },
      _changeDatepicker: function (e, t, a) {
        this._optionDatepicker(e, t, a);
      },
      _refreshDatepicker: function (e) {
        e = this._getInst(e);
        e && this._updateDatepicker(e);
      },
      _setDateDatepicker: function (e, t) {
        e = this._getInst(e);
        e &&
          (this._setDate(e, t),
          this._updateDatepicker(e),
          this._updateAlternate(e));
      },
      _getDateDatepicker: function (e, t) {
        e = this._getInst(e);
        return (
          e && !e.inline && this._setDateFromField(e, t),
          e ? this._getDate(e) : null
        );
      },
      _doKeyDown: function (e) {
        var t,
          a,
          i = M.datepicker._getInst(e.target),
          s = !0,
          r = i.dpDiv.is(".ui-datepicker-rtl");
        if (((i._keyEvent = !0), M.datepicker._datepickerShowing))
          switch (e.keyCode) {
            case 9:
              M.datepicker._hideDatepicker(), (s = !1);
              break;
            case 13:
              return (
                (a = M(
                  "td." +
                    M.datepicker._dayOverClass +
                    ":not(." +
                    M.datepicker._currentClass +
                    ")",
                  i.dpDiv
                ))[0] &&
                  M.datepicker._selectDay(
                    e.target,
                    i.selectedMonth,
                    i.selectedYear,
                    a[0]
                  ),
                (t = M.datepicker._get(i, "onSelect"))
                  ? ((a = M.datepicker._formatDate(i)),
                    t.apply(i.input ? i.input[0] : null, [a, i]))
                  : M.datepicker._hideDatepicker(),
                !1
              );
            case 27:
              M.datepicker._hideDatepicker();
              break;
            case 33:
              M.datepicker._adjustDate(
                e.target,
                e.ctrlKey
                  ? -M.datepicker._get(i, "stepBigMonths")
                  : -M.datepicker._get(i, "stepMonths"),
                "M"
              );
              break;
            case 34:
              M.datepicker._adjustDate(
                e.target,
                e.ctrlKey
                  ? +M.datepicker._get(i, "stepBigMonths")
                  : +M.datepicker._get(i, "stepMonths"),
                "M"
              );
              break;
            case 35:
              (e.ctrlKey || e.metaKey) && M.datepicker._clearDate(e.target),
                (s = e.ctrlKey || e.metaKey);
              break;
            case 36:
              (e.ctrlKey || e.metaKey) && M.datepicker._gotoToday(e.target),
                (s = e.ctrlKey || e.metaKey);
              break;
            case 37:
              (e.ctrlKey || e.metaKey) &&
                M.datepicker._adjustDate(e.target, r ? 1 : -1, "D"),
                (s = e.ctrlKey || e.metaKey),
                e.originalEvent.altKey &&
                  M.datepicker._adjustDate(
                    e.target,
                    e.ctrlKey
                      ? -M.datepicker._get(i, "stepBigMonths")
                      : -M.datepicker._get(i, "stepMonths"),
                    "M"
                  );
              break;
            case 38:
              (e.ctrlKey || e.metaKey) &&
                M.datepicker._adjustDate(e.target, -7, "D"),
                (s = e.ctrlKey || e.metaKey);
              break;
            case 39:
              (e.ctrlKey || e.metaKey) &&
                M.datepicker._adjustDate(e.target, r ? -1 : 1, "D"),
                (s = e.ctrlKey || e.metaKey),
                e.originalEvent.altKey &&
                  M.datepicker._adjustDate(
                    e.target,
                    e.ctrlKey
                      ? +M.datepicker._get(i, "stepBigMonths")
                      : +M.datepicker._get(i, "stepMonths"),
                    "M"
                  );
              break;
            case 40:
              (e.ctrlKey || e.metaKey) &&
                M.datepicker._adjustDate(e.target, 7, "D"),
                (s = e.ctrlKey || e.metaKey);
              break;
            default:
              s = !1;
          }
        else
          36 === e.keyCode && e.ctrlKey
            ? M.datepicker._showDatepicker(this)
            : (s = !1);
        s && (e.preventDefault(), e.stopPropagation());
      },
      _doKeyPress: function (e) {
        var t,
          a = M.datepicker._getInst(e.target);
        if (M.datepicker._get(a, "constrainInput"))
          return (
            (t = M.datepicker._possibleChars(
              M.datepicker._get(a, "dateFormat")
            )),
            (a = String.fromCharCode(
              null == e.charCode ? e.keyCode : e.charCode
            )),
            e.ctrlKey || e.metaKey || a < " " || !t || -1 < t.indexOf(a)
          );
      },
      _doKeyUp: function (e) {
        e = M.datepicker._getInst(e.target);
        if (e.input.val() !== e.lastVal)
          try {
            M.datepicker.parseDate(
              M.datepicker._get(e, "dateFormat"),
              e.input ? e.input.val() : null,
              M.datepicker._getFormatConfig(e)
            ) &&
              (M.datepicker._setDateFromField(e),
              M.datepicker._updateAlternate(e),
              M.datepicker._updateDatepicker(e));
          } catch (e) {}
        return !0;
      },
      _showDatepicker: function (e) {
        var t, a, i, s;
        "input" !== (e = e.target || e).nodeName.toLowerCase() &&
          (e = M("input", e.parentNode)[0]),
          M.datepicker._isDisabledDatepicker(e) ||
            M.datepicker._lastInput === e ||
            ((s = M.datepicker._getInst(e)),
            M.datepicker._curInst &&
              M.datepicker._curInst !== s &&
              (M.datepicker._curInst.dpDiv.stop(!0, !0),
              s &&
                M.datepicker._datepickerShowing &&
                M.datepicker._hideDatepicker(M.datepicker._curInst.input[0])),
            !1 !==
              (a = (i = M.datepicker._get(s, "beforeShow"))
                ? i.apply(e, [e, s])
                : {}) &&
              (o(s.settings, a),
              (s.lastVal = null),
              (M.datepicker._lastInput = e),
              M.datepicker._setDateFromField(s),
              M.datepicker._inDialog && (e.value = ""),
              M.datepicker._pos ||
                ((M.datepicker._pos = M.datepicker._findPos(e)),
                (M.datepicker._pos[1] += e.offsetHeight)),
              (t = !1),
              M(e)
                .parents()
                .each(function () {
                  return !(t |= "fixed" === M(this).css("position"));
                }),
              (i = { left: M.datepicker._pos[0], top: M.datepicker._pos[1] }),
              (M.datepicker._pos = null),
              s.dpDiv.empty(),
              s.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px",
              }),
              M.datepicker._updateDatepicker(s),
              (i = M.datepicker._checkOffset(s, i, t)),
              s.dpDiv.css({
                position:
                  M.datepicker._inDialog && M.blockUI
                    ? "static"
                    : t
                    ? "fixed"
                    : "absolute",
                display: "none",
                left: i.left + "px",
                top: i.top + "px",
              }),
              s.inline ||
                ((a = M.datepicker._get(s, "showAnim")),
                (i = M.datepicker._get(s, "duration")),
                s.dpDiv.css(
                  "z-index",
                  (function (e) {
                    for (var t, a; e.length && e[0] !== document; ) {
                      if (
                        ((t = e.css("position")),
                        ("absolute" === t ||
                          "relative" === t ||
                          "fixed" === t) &&
                          ((a = parseInt(e.css("zIndex"), 10)),
                          !isNaN(a) && 0 !== a))
                      )
                        return a;
                      e = e.parent();
                    }
                    return 0;
                  })(M(e)) + 1
                ),
                (M.datepicker._datepickerShowing = !0),
                M.effects && M.effects.effect[a]
                  ? s.dpDiv.show(a, M.datepicker._get(s, "showOptions"), i)
                  : s.dpDiv[a || "show"](a ? i : null),
                M.datepicker._shouldFocusInput(s) && s.input.trigger("focus"),
                (M.datepicker._curInst = s))));
      },
      _updateDatepicker: function (e) {
        (this.maxRows = 4),
          (r = e).dpDiv.empty().append(this._generateHTML(e)),
          this._attachHandlers(e);
        var t,
          a = this._getNumberOfMonths(e),
          i = a[1],
          s = e.dpDiv.find("." + this._dayOverClass + " a");
        0 < s.length && n.apply(s.get(0)),
          e.dpDiv
            .removeClass(
              "ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4"
            )
            .width(""),
          1 < i &&
            e.dpDiv
              .addClass("ui-datepicker-multi-" + i)
              .css("width", 17 * i + "em"),
          e.dpDiv[(1 !== a[0] || 1 !== a[1] ? "add" : "remove") + "Class"](
            "ui-datepicker-multi"
          ),
          e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"](
            "ui-datepicker-rtl"
          ),
          e === M.datepicker._curInst &&
            M.datepicker._datepickerShowing &&
            M.datepicker._shouldFocusInput(e) &&
            e.input.trigger("focus"),
          e.yearshtml &&
            ((t = e.yearshtml),
            setTimeout(function () {
              t === e.yearshtml &&
                e.yearshtml &&
                e.dpDiv
                  .find("select.ui-datepicker-year:first")
                  .replaceWith(e.yearshtml),
                (t = e.yearshtml = null);
            }, 0));
      },
      _shouldFocusInput: function (e) {
        return (
          e.input &&
          e.input.is(":visible") &&
          !e.input.is(":disabled") &&
          !e.input.is(":focus")
        );
      },
      _checkOffset: function (e, t, a) {
        var i = e.dpDiv.outerWidth(),
          s = e.dpDiv.outerHeight(),
          r = e.input ? e.input.outerWidth() : 0,
          n = e.input ? e.input.outerHeight() : 0,
          d =
            document.documentElement.clientWidth +
            (a ? 0 : M(document).scrollLeft()),
          o =
            document.documentElement.clientHeight +
            (a ? 0 : M(document).scrollTop());
        return (
          (t.left -= this._get(e, "isRTL") ? i - r : 0),
          (t.left -=
            a && t.left === e.input.offset().left
              ? M(document).scrollLeft()
              : 0),
          (t.top -=
            a && t.top === e.input.offset().top + n
              ? M(document).scrollTop()
              : 0),
          (t.left -= Math.min(
            t.left,
            t.left + i > d && i < d ? Math.abs(t.left + i - d) : 0
          )),
          (t.top -= Math.min(
            t.top,
            t.top + s > o && s < o ? Math.abs(s + n) : 0
          )),
          t
        );
      },
      _findPos: function (e) {
        for (
          var t = this._getInst(e), a = this._get(t, "isRTL");
          e &&
          ("hidden" === e.type || 1 !== e.nodeType || M.expr.filters.hidden(e));

        )
          e = e[a ? "previousSibling" : "nextSibling"];
        return [(t = M(e).offset()).left, t.top];
      },
      _hideDatepicker: function (e) {
        var t,
          a,
          i = this._curInst;
        !i ||
          (e && i !== M.data(e, "datepicker")) ||
          (this._datepickerShowing &&
            ((t = this._get(i, "showAnim")),
            (a = this._get(i, "duration")),
            (e = function () {
              M.datepicker._tidyDialog(i);
            }),
            M.effects && (M.effects.effect[t] || M.effects[t])
              ? i.dpDiv.hide(t, M.datepicker._get(i, "showOptions"), a, e)
              : i.dpDiv[
                  "slideDown" === t
                    ? "slideUp"
                    : "fadeIn" === t
                    ? "fadeOut"
                    : "hide"
                ](t ? a : null, e),
            t || e(),
            (this._datepickerShowing = !1),
            (e = this._get(i, "onClose")) &&
              e.apply(i.input ? i.input[0] : null, [
                i.input ? i.input.val() : "",
                i,
              ]),
            (this._lastInput = null),
            this._inDialog &&
              (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px",
              }),
              M.blockUI && (M.unblockUI(), M("body").append(this.dpDiv))),
            (this._inDialog = !1)));
      },
      _tidyDialog: function (e) {
        e.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
      },
      _checkExternalClick: function (e) {
        var t;
        M.datepicker._curInst &&
          ((t = M(e.target)),
          (e = M.datepicker._getInst(t[0])),
          ((t[0].id === M.datepicker._mainDivId ||
            0 !== t.parents("#" + M.datepicker._mainDivId).length ||
            t.hasClass(M.datepicker.markerClassName) ||
            t.closest("." + M.datepicker._triggerClass).length ||
            !M.datepicker._datepickerShowing ||
            (M.datepicker._inDialog && M.blockUI)) &&
            (!t.hasClass(M.datepicker.markerClassName) ||
              M.datepicker._curInst === e)) ||
            M.datepicker._hideDatepicker());
      },
      _adjustDate: function (e, t, a) {
        var i = M(e),
          e = this._getInst(i[0]);
        this._isDisabledDatepicker(i[0]) ||
          (this._adjustInstDate(
            e,
            t + ("M" === a ? this._get(e, "showCurrentAtPos") : 0),
            a
          ),
          this._updateDatepicker(e));
      },
      _gotoToday: function (e) {
        var t = M(e),
          a = this._getInst(t[0]);
        this._get(a, "gotoCurrent") && a.currentDay
          ? ((a.selectedDay = a.currentDay),
            (a.drawMonth = a.selectedMonth = a.currentMonth),
            (a.drawYear = a.selectedYear = a.currentYear))
          : ((e = new Date()),
            (a.selectedDay = e.getDate()),
            (a.drawMonth = a.selectedMonth = e.getMonth()),
            (a.drawYear = a.selectedYear = e.getFullYear())),
          this._notifyChange(a),
          this._adjustDate(t);
      },
      _selectMonthYear: function (e, t, a) {
        var i = M(e),
          e = this._getInst(i[0]);
        (e["selected" + ("M" === a ? "Month" : "Year")] = e[
          "draw" + ("M" === a ? "Month" : "Year")
        ] =
          parseInt(t.options[t.selectedIndex].value, 10)),
          this._notifyChange(e),
          this._adjustDate(i);
      },
      _selectDay: function (e, t, a, i) {
        var s = M(e);
        M(i).hasClass(this._unselectableClass) ||
          this._isDisabledDatepicker(s[0]) ||
          (((s = this._getInst(s[0])).selectedDay = s.currentDay =
            M("a", i).html()),
          (s.selectedMonth = s.currentMonth = t),
          (s.selectedYear = s.currentYear = a),
          this._selectDate(
            e,
            this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear)
          ));
      },
      _clearDate: function (e) {
        e = M(e);
        this._selectDate(e, "");
      },
      _selectDate: function (e, t) {
        var a = M(e),
          e = this._getInst(a[0]);
        (t = null != t ? t : this._formatDate(e)),
          e.input && e.input.val(t),
          this._updateAlternate(e),
          (a = this._get(e, "onSelect"))
            ? a.apply(e.input ? e.input[0] : null, [t, e])
            : e.input && e.input.trigger("change"),
          e.inline
            ? this._updateDatepicker(e)
            : (this._hideDatepicker(),
              (this._lastInput = e.input[0]),
              "object" != typeof e.input[0] && e.input.trigger("focus"),
              (this._lastInput = null));
      },
      _updateAlternate: function (e) {
        var t,
          a,
          i = this._get(e, "altField");
        i &&
          ((t = this._get(e, "altFormat") || this._get(e, "dateFormat")),
          (a = this._getDate(e)),
          (e = this.formatDate(t, a, this._getFormatConfig(e))),
          M(i).val(e));
      },
      noWeekends: function (e) {
        e = e.getDay();
        return [0 < e && e < 6, ""];
      },
      iso8601Week: function (e) {
        var t = new Date(e.getTime());
        return (
          t.setDate(t.getDate() + 4 - (t.getDay() || 7)),
          (e = t.getTime()),
          t.setMonth(0),
          t.setDate(1),
          Math.floor(Math.round((e - t) / 864e5) / 7) + 1
        );
      },
      parseDate: function (t, s, e) {
        if (null == t || null == s) throw "Invalid arguments";
        if ("" === (s = "object" == typeof s ? s.toString() : s + ""))
          return null;
        function r(e) {
          return (e = v + 1 < t.length && t.charAt(v + 1) === e) && v++, e;
        }
        function a(e) {
          var t = r(e),
            t =
              "@" === e
                ? 14
                : "!" === e
                ? 20
                : "y" === e && t
                ? 4
                : "o" === e
                ? 3
                : 2,
            t = new RegExp("^\\d{" + ("y" === e ? t : 1) + "," + t + "}");
          if (!(t = s.substring(l).match(t)))
            throw "Missing number at position " + l;
          return (l += t[0].length), parseInt(t[0], 10);
        }
        function i(e, t, a) {
          var i = -1,
            t = M.map(r(e) ? a : t, function (e, t) {
              return [[t, e]];
            }).sort(function (e, t) {
              return -(e[1].length - t[1].length);
            });
          if (
            (M.each(t, function (e, t) {
              var a = t[1];
              if (s.substr(l, a.length).toLowerCase() === a.toLowerCase())
                return (i = t[0]), (l += a.length), !1;
            }),
            -1 !== i)
          )
            return i + 1;
          throw "Unknown name at position " + l;
        }
        function n() {
          if (s.charAt(l) !== t.charAt(v))
            throw "Unexpected literal at position " + l;
          l++;
        }
        for (
          var d,
            o,
            c,
            l = 0,
            h =
              (e ? e.shortYearCutoff : null) || this._defaults.shortYearCutoff,
            h =
              "string" != typeof h
                ? h
                : (new Date().getFullYear() % 100) + parseInt(h, 10),
            u = (e ? e.dayNamesShort : null) || this._defaults.dayNamesShort,
            p = (e ? e.dayNames : null) || this._defaults.dayNames,
            g =
              (e ? e.monthNamesShort : null) || this._defaults.monthNamesShort,
            _ = (e ? e.monthNames : null) || this._defaults.monthNames,
            f = -1,
            k = -1,
            D = -1,
            m = -1,
            y = !1,
            v = 0;
          v < t.length;
          v++
        )
          if (y) "'" !== t.charAt(v) || r("'") ? n() : (y = !1);
          else
            switch (t.charAt(v)) {
              case "d":
                D = a("d");
                break;
              case "D":
                i("D", u, p);
                break;
              case "o":
                m = a("o");
                break;
              case "m":
                k = a("m");
                break;
              case "M":
                k = i("M", g, _);
                break;
              case "y":
                f = a("y");
                break;
              case "@":
                (f = (c = new Date(a("@"))).getFullYear()),
                  (k = c.getMonth() + 1),
                  (D = c.getDate());
                break;
              case "!":
                (f = (c = new Date(
                  (a("!") - this._ticksTo1970) / 1e4
                )).getFullYear()),
                  (k = c.getMonth() + 1),
                  (D = c.getDate());
                break;
              case "'":
                r("'") ? n() : (y = !0);
                break;
              default:
                n();
            }
        if (l < s.length && ((o = s.substr(l)), !/^\s+/.test(o)))
          throw "Extra/unparsed characters found in date: " + o;
        if (
          (-1 === f
            ? (f = new Date().getFullYear())
            : f < 100 &&
              (f +=
                new Date().getFullYear() -
                (new Date().getFullYear() % 100) +
                (f <= h ? 0 : -100)),
          -1 < m)
        )
          for (k = 1, D = m; ; ) {
            if (D <= (d = this._getDaysInMonth(f, k - 1))) break;
            k++, (D -= d);
          }
        if (
          (c = this._daylightSavingAdjust(
            new Date(f, k - 1, D)
          )).getFullYear() !== f ||
          c.getMonth() + 1 !== k ||
          c.getDate() !== D
        )
          throw "Invalid date";
        return c;
      },
      ATOM: "yy-mm-dd",
      COOKIE: "D, dd M yy",
      ISO_8601: "yy-mm-dd",
      RFC_822: "D, d M y",
      RFC_850: "DD, dd-M-y",
      RFC_1036: "D, d M y",
      RFC_1123: "D, d M yy",
      RFC_2822: "D, d M yy",
      RSS: "D, d M y",
      TICKS: "!",
      TIMESTAMP: "@",
      W3C: "yy-mm-dd",
      _ticksTo1970:
        24 *
        (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) *
        60 *
        60 *
        1e7,
      formatDate: function (t, e, a) {
        if (!e) return "";
        function s(e) {
          return (e = n + 1 < t.length && t.charAt(n + 1) === e) && n++, e;
        }
        function i(e, t, a) {
          var i = "" + t;
          if (s(e)) for (; i.length < a; ) i = "0" + i;
          return i;
        }
        function r(e, t, a, i) {
          return (s(e) ? i : a)[t];
        }
        var n,
          d = (a ? a.dayNamesShort : null) || this._defaults.dayNamesShort,
          o = (a ? a.dayNames : null) || this._defaults.dayNames,
          c = (a ? a.monthNamesShort : null) || this._defaults.monthNamesShort,
          l = (a ? a.monthNames : null) || this._defaults.monthNames,
          h = "",
          u = !1;
        if (e)
          for (n = 0; n < t.length; n++)
            if (u)
              "'" !== t.charAt(n) || s("'") ? (h += t.charAt(n)) : (u = !1);
            else
              switch (t.charAt(n)) {
                case "d":
                  h += i("d", e.getDate(), 2);
                  break;
                case "D":
                  h += r("D", e.getDay(), d, o);
                  break;
                case "o":
                  h += i(
                    "o",
                    Math.round(
                      (new Date(
                        e.getFullYear(),
                        e.getMonth(),
                        e.getDate()
                      ).getTime() -
                        new Date(e.getFullYear(), 0, 0).getTime()) /
                        864e5
                    ),
                    3
                  );
                  break;
                case "m":
                  h += i("m", e.getMonth() + 1, 2);
                  break;
                case "M":
                  h += r("M", e.getMonth(), c, l);
                  break;
                case "y":
                  h += s("y")
                    ? e.getFullYear()
                    : (e.getFullYear() % 100 < 10 ? "0" : "") +
                      (e.getFullYear() % 100);
                  break;
                case "@":
                  h += e.getTime();
                  break;
                case "!":
                  h += 1e4 * e.getTime() + this._ticksTo1970;
                  break;
                case "'":
                  s("'") ? (h += "'") : (u = !0);
                  break;
                default:
                  h += t.charAt(n);
              }
        return h;
      },
      _possibleChars: function (t) {
        function e(e) {
          return (e = s + 1 < t.length && t.charAt(s + 1) === e) && s++, e;
        }
        for (var a = "", i = !1, s = 0; s < t.length; s++)
          if (i) "'" !== t.charAt(s) || e("'") ? (a += t.charAt(s)) : (i = !1);
          else
            switch (t.charAt(s)) {
              case "d":
              case "m":
              case "y":
              case "@":
                a += "0123456789";
                break;
              case "D":
              case "M":
                return null;
              case "'":
                e("'") ? (a += "'") : (i = !0);
                break;
              default:
                a += t.charAt(s);
            }
        return a;
      },
      _get: function (e, t) {
        return (void 0 !== e.settings[t] ? e.settings : this._defaults)[t];
      },
      _setDateFromField: function (e, t) {
        if (e.input.val() !== e.lastVal) {
          var a = this._get(e, "dateFormat"),
            i = (e.lastVal = e.input ? e.input.val() : null),
            s = this._getDefaultDate(e),
            r = s,
            n = this._getFormatConfig(e);
          try {
            r = this.parseDate(a, i, n) || s;
          } catch (e) {
            i = t ? "" : i;
          }
          (e.selectedDay = r.getDate()),
            (e.drawMonth = e.selectedMonth = r.getMonth()),
            (e.drawYear = e.selectedYear = r.getFullYear()),
            (e.currentDay = i ? r.getDate() : 0),
            (e.currentMonth = i ? r.getMonth() : 0),
            (e.currentYear = i ? r.getFullYear() : 0),
            this._adjustInstDate(e);
        }
      },
      _getDefaultDate: function (e) {
        return this._restrictMinMax(
          e,
          this._determineDate(e, this._get(e, "defaultDate"), new Date())
        );
      },
      _determineDate: function (d, e, t) {
        var a,
          i,
          e =
            null == e || "" === e
              ? t
              : "string" == typeof e
              ? (function (e) {
                  try {
                    return M.datepicker.parseDate(
                      M.datepicker._get(d, "dateFormat"),
                      e,
                      M.datepicker._getFormatConfig(d)
                    );
                  } catch (e) {}
                  for (
                    var t =
                        (e.toLowerCase().match(/^c/)
                          ? M.datepicker._getDate(d)
                          : null) || new Date(),
                      a = t.getFullYear(),
                      i = t.getMonth(),
                      s = t.getDate(),
                      r = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                      n = r.exec(e);
                    n;

                  ) {
                    switch (n[2] || "d") {
                      case "d":
                      case "D":
                        s += parseInt(n[1], 10);
                        break;
                      case "w":
                      case "W":
                        s += 7 * parseInt(n[1], 10);
                        break;
                      case "m":
                      case "M":
                        (i += parseInt(n[1], 10)),
                          (s = Math.min(s, M.datepicker._getDaysInMonth(a, i)));
                        break;
                      case "y":
                      case "Y":
                        (a += parseInt(n[1], 10)),
                          (s = Math.min(s, M.datepicker._getDaysInMonth(a, i)));
                    }
                    n = r.exec(e);
                  }
                  return new Date(a, i, s);
                })(e)
              : "number" == typeof e
              ? isNaN(e)
                ? t
                : ((a = e), (i = new Date()).setDate(i.getDate() + a), i)
              : new Date(e.getTime());
        return (
          (e = e && "Invalid Date" === e.toString() ? t : e) &&
            (e.setHours(0),
            e.setMinutes(0),
            e.setSeconds(0),
            e.setMilliseconds(0)),
          this._daylightSavingAdjust(e)
        );
      },
      _daylightSavingAdjust: function (e) {
        return e
          ? (e.setHours(12 < e.getHours() ? e.getHours() + 2 : 0), e)
          : null;
      },
      _setDate: function (e, t, a) {
        var i = !t,
          s = e.selectedMonth,
          r = e.selectedYear,
          t = this._restrictMinMax(e, this._determineDate(e, t, new Date()));
        (e.selectedDay = e.currentDay = t.getDate()),
          (e.drawMonth = e.selectedMonth = e.currentMonth = t.getMonth()),
          (e.drawYear = e.selectedYear = e.currentYear = t.getFullYear()),
          (s === e.selectedMonth && r === e.selectedYear) ||
            a ||
            this._notifyChange(e),
          this._adjustInstDate(e),
          e.input && e.input.val(i ? "" : this._formatDate(e));
      },
      _getDate: function (e) {
        return !e.currentYear || (e.input && "" === e.input.val())
          ? null
          : this._daylightSavingAdjust(
              new Date(e.currentYear, e.currentMonth, e.currentDay)
            );
      },
      _attachHandlers: function (e) {
        var t = this._get(e, "stepMonths"),
          a = "#" + e.id.replace(/\\\\/g, "\\");
        e.dpDiv.find("[data-handler]").map(function () {
          var e = {
            prev: function () {
              M.datepicker._adjustDate(a, -t, "M");
            },
            next: function () {
              M.datepicker._adjustDate(a, +t, "M");
            },
            hide: function () {
              M.datepicker._hideDatepicker();
            },
            today: function () {
              M.datepicker._gotoToday(a);
            },
            selectDay: function () {
              return (
                M.datepicker._selectDay(
                  a,
                  +this.getAttribute("data-month"),
                  +this.getAttribute("data-year"),
                  this
                ),
                !1
              );
            },
            selectMonth: function () {
              return M.datepicker._selectMonthYear(a, this, "M"), !1;
            },
            selectYear: function () {
              return M.datepicker._selectMonthYear(a, this, "Y"), !1;
            },
          };
          M(this).on(
            this.getAttribute("data-event"),
            e[this.getAttribute("data-handler")]
          );
        });
      },
      _generateHTML: function (e) {
        var t,
          a,
          i,
          s,
          r,
          n,
          d,
          o,
          c,
          l,
          h,
          u,
          p,
          g,
          _,
          f,
          k,
          D,
          m,
          y,
          v,
          M,
          b,
          w,
          C,
          I,
          x,
          Y,
          S,
          F,
          N,
          T,
          A = new Date(),
          K = this._daylightSavingAdjust(
            new Date(A.getFullYear(), A.getMonth(), A.getDate())
          ),
          j = this._get(e, "isRTL"),
          O = this._get(e, "showButtonPanel"),
          R = this._get(e, "hideIfNoPrevNext"),
          L = this._get(e, "navigationAsDateFormat"),
          W = this._getNumberOfMonths(e),
          E = this._get(e, "showCurrentAtPos"),
          A = this._get(e, "stepMonths"),
          H = 1 !== W[0] || 1 !== W[1],
          P = this._daylightSavingAdjust(
            e.currentDay
              ? new Date(e.currentYear, e.currentMonth, e.currentDay)
              : new Date(9999, 9, 9)
          ),
          U = this._getMinMaxDate(e, "min"),
          z = this._getMinMaxDate(e, "max"),
          B = e.drawMonth - E,
          J = e.drawYear;
        if ((B < 0 && ((B += 12), J--), z))
          for (
            t = this._daylightSavingAdjust(
              new Date(
                z.getFullYear(),
                z.getMonth() - W[0] * W[1] + 1,
                z.getDate()
              )
            ),
              t = U && t < U ? U : t;
            this._daylightSavingAdjust(new Date(J, B, 1)) > t;

          )
            --B < 0 && ((B = 11), J--);
        for (
          e.drawMonth = B,
            e.drawYear = J,
            E = this._get(e, "prevText"),
            E = L
              ? this.formatDate(
                  E,
                  this._daylightSavingAdjust(new Date(J, B - A, 1)),
                  this._getFormatConfig(e)
                )
              : E,
            a = this._canAdjustMonth(e, -1, J, B)
              ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" +
                E +
                "'><span class='ui-icon ui-icon-circle-triangle-" +
                (j ? "e" : "w") +
                "'>" +
                E +
                "</span></a>"
              : R
              ? ""
              : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" +
                E +
                "'><span class='ui-icon ui-icon-circle-triangle-" +
                (j ? "e" : "w") +
                "'>" +
                E +
                "</span></a>",
            E = this._get(e, "nextText"),
            E = L
              ? this.formatDate(
                  E,
                  this._daylightSavingAdjust(new Date(J, B + A, 1)),
                  this._getFormatConfig(e)
                )
              : E,
            i = this._canAdjustMonth(e, 1, J, B)
              ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" +
                E +
                "'><span class='ui-icon ui-icon-circle-triangle-" +
                (j ? "w" : "e") +
                "'>" +
                E +
                "</span></a>"
              : R
              ? ""
              : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" +
                E +
                "'><span class='ui-icon ui-icon-circle-triangle-" +
                (j ? "w" : "e") +
                "'>" +
                E +
                "</span></a>",
            R = this._get(e, "currentText"),
            E = this._get(e, "gotoCurrent") && e.currentDay ? P : K,
            R = L ? this.formatDate(R, E, this._getFormatConfig(e)) : R,
            L = e.inline
              ? ""
              : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
                this._get(e, "closeText") +
                "</button>",
            L = O
              ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" +
                (j ? L : "") +
                (this._isInRange(e, E)
                  ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" +
                    R +
                    "</button>"
                  : "") +
                (j ? "" : L) +
                "</div>"
              : "",
            s = parseInt(this._get(e, "firstDay"), 10),
            s = isNaN(s) ? 0 : s,
            r = this._get(e, "showWeek"),
            n = this._get(e, "dayNames"),
            d = this._get(e, "dayNamesMin"),
            o = this._get(e, "monthNames"),
            c = this._get(e, "monthNamesShort"),
            l = this._get(e, "beforeShowDay"),
            h = this._get(e, "showOtherMonths"),
            u = this._get(e, "selectOtherMonths"),
            p = this._getDefaultDate(e),
            g = "",
            f = 0;
          f < W[0];
          f++
        ) {
          for (k = "", this.maxRows = 4, D = 0; D < W[1]; D++) {
            if (
              ((m = this._daylightSavingAdjust(new Date(J, B, e.selectedDay))),
              (y = " ui-corner-all"),
              (v = ""),
              H)
            ) {
              if (((v += "<div class='ui-datepicker-group"), 1 < W[1]))
                switch (D) {
                  case 0:
                    (v += " ui-datepicker-group-first"),
                      (y = " ui-corner-" + (j ? "right" : "left"));
                    break;
                  case W[1] - 1:
                    (v += " ui-datepicker-group-last"),
                      (y = " ui-corner-" + (j ? "left" : "right"));
                    break;
                  default:
                    (v += " ui-datepicker-group-middle"), (y = "");
                }
              v += "'>";
            }
            for (
              v +=
                "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" +
                y +
                "'>" +
                (/all|left/.test(y) && 0 === f ? (j ? i : a) : "") +
                (/all|right/.test(y) && 0 === f ? (j ? a : i) : "") +
                this._generateMonthYearHeader(
                  e,
                  B,
                  J,
                  U,
                  z,
                  0 < f || 0 < D,
                  o,
                  c
                ) +
                "</div><table class='ui-datepicker-calendar'><thead><tr>",
                M = r
                  ? "<th class='ui-datepicker-week-col'>" +
                    this._get(e, "weekHeader") +
                    "</th>"
                  : "",
                _ = 0;
              _ < 7;
              _++
            )
              M +=
                "<th scope='col'" +
                (5 <= (_ + s + 6) % 7
                  ? " class='ui-datepicker-week-end'"
                  : "") +
                "><span title='" +
                n[(b = (_ + s) % 7)] +
                "'>" +
                d[b] +
                "</span></th>";
            for (
              v += M + "</tr></thead><tbody>",
                C = this._getDaysInMonth(J, B),
                J === e.selectedYear &&
                  B === e.selectedMonth &&
                  (e.selectedDay = Math.min(e.selectedDay, C)),
                w = (this._getFirstDayOfMonth(J, B) - s + 7) % 7,
                C = Math.ceil((w + C) / 7),
                I = H && this.maxRows > C ? this.maxRows : C,
                this.maxRows = I,
                x = this._daylightSavingAdjust(new Date(J, B, 1 - w)),
                Y = 0;
              Y < I;
              Y++
            ) {
              for (
                v += "<tr>",
                  S = r
                    ? "<td class='ui-datepicker-week-col'>" +
                      this._get(e, "calculateWeek")(x) +
                      "</td>"
                    : "",
                  _ = 0;
                _ < 7;
                _++
              )
                (F = l ? l.apply(e.input ? e.input[0] : null, [x]) : [!0, ""]),
                  (T =
                    ((N = x.getMonth() !== B) && !u) ||
                    !F[0] ||
                    (U && x < U) ||
                    (z && z < x)),
                  (S +=
                    "<td class='" +
                    (5 <= (_ + s + 6) % 7 ? " ui-datepicker-week-end" : "") +
                    (N ? " ui-datepicker-other-month" : "") +
                    ((x.getTime() === m.getTime() &&
                      B === e.selectedMonth &&
                      e._keyEvent) ||
                    (p.getTime() === x.getTime() && p.getTime() === m.getTime())
                      ? " " + this._dayOverClass
                      : "") +
                    (T
                      ? " " + this._unselectableClass + " ui-state-disabled"
                      : "") +
                    (N && !h
                      ? ""
                      : " " +
                        F[1] +
                        (x.getTime() === P.getTime()
                          ? " " + this._currentClass
                          : "") +
                        (x.getTime() === K.getTime()
                          ? " ui-datepicker-today"
                          : "")) +
                    "'" +
                    ((N && !h) || !F[2]
                      ? ""
                      : " title='" + F[2].replace(/'/g, "&#39;") + "'") +
                    (T
                      ? ""
                      : " data-handler='selectDay' data-event='click' data-month='" +
                        x.getMonth() +
                        "' data-year='" +
                        x.getFullYear() +
                        "'") +
                    ">" +
                    (N && !h
                      ? "&#xa0;"
                      : T
                      ? "<span class='ui-state-default'>" +
                        x.getDate() +
                        "</span>"
                      : "<a class='ui-state-default" +
                        (x.getTime() === K.getTime()
                          ? " ui-state-highlight"
                          : "") +
                        (x.getTime() === P.getTime()
                          ? " ui-state-active"
                          : "") +
                        (N ? " ui-priority-secondary" : "") +
                        "' href='#'>" +
                        x.getDate() +
                        "</a>") +
                    "</td>"),
                  x.setDate(x.getDate() + 1),
                  (x = this._daylightSavingAdjust(x));
              v += S + "</tr>";
            }
            11 < ++B && ((B = 0), J++),
              (k += v +=
                "</tbody></table>" +
                (H
                  ? "</div>" +
                    (0 < W[0] && D === W[1] - 1
                      ? "<div class='ui-datepicker-row-break'></div>"
                      : "")
                  : ""));
          }
          g += k;
        }
        return (g += L), (e._keyEvent = !1), g;
      },
      _generateMonthYearHeader: function (e, t, a, i, s, r, n, d) {
        var o,
          c,
          l,
          h,
          u,
          p,
          g,
          _ = this._get(e, "changeMonth"),
          f = this._get(e, "changeYear"),
          k = this._get(e, "showMonthAfterYear"),
          D = "<div class='ui-datepicker-title'>",
          m = "";
        if (r || !_)
          m += "<span class='ui-datepicker-month'>" + n[t] + "</span>";
        else {
          for (
            o = i && i.getFullYear() === a,
              c = s && s.getFullYear() === a,
              m +=
                "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",
              l = 0;
            l < 12;
            l++
          )
            (!o || l >= i.getMonth()) &&
              (!c || l <= s.getMonth()) &&
              (m +=
                "<option value='" +
                l +
                "'" +
                (l === t ? " selected='selected'" : "") +
                ">" +
                d[l] +
                "</option>");
          m += "</select>";
        }
        if ((k || (D += m + (!r && _ && f ? "" : "&#xa0;")), !e.yearshtml))
          if (((e.yearshtml = ""), r || !f))
            D += "<span class='ui-datepicker-year'>" + a + "</span>";
          else {
            for (
              h = this._get(e, "yearRange").split(":"),
                u = new Date().getFullYear(),
                p = (n = function (e) {
                  e = e.match(/c[+\-].*/)
                    ? a + parseInt(e.substring(1), 10)
                    : e.match(/[+\-].*/)
                    ? u + parseInt(e, 10)
                    : parseInt(e, 10);
                  return isNaN(e) ? u : e;
                })(h[0]),
                g = Math.max(p, n(h[1] || "")),
                p = i ? Math.max(p, i.getFullYear()) : p,
                g = s ? Math.min(g, s.getFullYear()) : g,
                e.yearshtml +=
                  "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
              p <= g;
              p++
            )
              e.yearshtml +=
                "<option value='" +
                p +
                "'" +
                (p === a ? " selected='selected'" : "") +
                ">" +
                p +
                "</option>";
            (e.yearshtml += "</select>"),
              (D += e.yearshtml),
              (e.yearshtml = null);
          }
        return (
          (D += this._get(e, "yearSuffix")),
          k && (D += (!r && _ && f ? "" : "&#xa0;") + m),
          (D += "</div>")
        );
      },
      _adjustInstDate: function (e, t, a) {
        var i = e.selectedYear + ("Y" === a ? t : 0),
          s = e.selectedMonth + ("M" === a ? t : 0),
          t =
            Math.min(e.selectedDay, this._getDaysInMonth(i, s)) +
            ("D" === a ? t : 0),
          t = this._restrictMinMax(
            e,
            this._daylightSavingAdjust(new Date(i, s, t))
          );
        (e.selectedDay = t.getDate()),
          (e.drawMonth = e.selectedMonth = t.getMonth()),
          (e.drawYear = e.selectedYear = t.getFullYear()),
          ("M" !== a && "Y" !== a) || this._notifyChange(e);
      },
      _restrictMinMax: function (e, t) {
        var a = this._getMinMaxDate(e, "min"),
          e = this._getMinMaxDate(e, "max"),
          t = a && t < a ? a : t;
        return e && e < t ? e : t;
      },
      _notifyChange: function (e) {
        var t = this._get(e, "onChangeMonthYear");
        t &&
          t.apply(e.input ? e.input[0] : null, [
            e.selectedYear,
            e.selectedMonth + 1,
            e,
          ]);
      },
      _getNumberOfMonths: function (e) {
        e = this._get(e, "numberOfMonths");
        return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e;
      },
      _getMinMaxDate: function (e, t) {
        return this._determineDate(e, this._get(e, t + "Date"), null);
      },
      _getDaysInMonth: function (e, t) {
        return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate();
      },
      _getFirstDayOfMonth: function (e, t) {
        return new Date(e, t, 1).getDay();
      },
      _canAdjustMonth: function (e, t, a, i) {
        var s = this._getNumberOfMonths(e),
          s = this._daylightSavingAdjust(
            new Date(a, i + (t < 0 ? t : s[0] * s[1]), 1)
          );
        return (
          t < 0 &&
            s.setDate(this._getDaysInMonth(s.getFullYear(), s.getMonth())),
          this._isInRange(e, s)
        );
      },
      _isInRange: function (e, t) {
        var a = this._getMinMaxDate(e, "min"),
          i = this._getMinMaxDate(e, "max"),
          s = null,
          r = null,
          n = this._get(e, "yearRange");
        return (
          n &&
            ((e = n.split(":")),
            (n = new Date().getFullYear()),
            (s = parseInt(e[0], 10)),
            (r = parseInt(e[1], 10)),
            e[0].match(/[+\-].*/) && (s += n),
            e[1].match(/[+\-].*/) && (r += n)),
          (!a || t.getTime() >= a.getTime()) &&
            (!i || t.getTime() <= i.getTime()) &&
            (!s || t.getFullYear() >= s) &&
            (!r || t.getFullYear() <= r)
        );
      },
      _getFormatConfig: function (e) {
        var t = this._get(e, "shortYearCutoff");
        return {
          shortYearCutoff: (t =
            "string" != typeof t
              ? t
              : (new Date().getFullYear() % 100) + parseInt(t, 10)),
          dayNamesShort: this._get(e, "dayNamesShort"),
          dayNames: this._get(e, "dayNames"),
          monthNamesShort: this._get(e, "monthNamesShort"),
          monthNames: this._get(e, "monthNames"),
        };
      },
      _formatDate: function (e, t, a, i) {
        t ||
          ((e.currentDay = e.selectedDay),
          (e.currentMonth = e.selectedMonth),
          (e.currentYear = e.selectedYear));
        t = t
          ? "object" == typeof t
            ? t
            : this._daylightSavingAdjust(new Date(i, a, t))
          : this._daylightSavingAdjust(
              new Date(e.currentYear, e.currentMonth, e.currentDay)
            );
        return this.formatDate(
          this._get(e, "dateFormat"),
          t,
          this._getFormatConfig(e)
        );
      },
    }),
    (M.fn.datepicker = function (e) {
      if (!this.length) return this;
      M.datepicker.initialized ||
        (M(document).on("mousedown", M.datepicker._checkExternalClick),
        (M.datepicker.initialized = !0)),
        0 === M("#" + M.datepicker._mainDivId).length &&
          M("body").append(M.datepicker.dpDiv);
      var t = Array.prototype.slice.call(arguments, 1);
      return ("string" == typeof e &&
        ("isDisabled" === e || "getDate" === e || "widget" === e)) ||
        ("option" === e &&
          2 === arguments.length &&
          "string" == typeof arguments[1])
        ? M.datepicker["_" + e + "Datepicker"].apply(
            M.datepicker,
            [this[0]].concat(t)
          )
        : this.each(function () {
            "string" == typeof e
              ? M.datepicker["_" + e + "Datepicker"].apply(
                  M.datepicker,
                  [this].concat(t)
                )
              : M.datepicker._attachDatepicker(this, e);
          });
    }),
    (M.datepicker = new e()),
    (M.datepicker.initialized = !1),
    (M.datepicker.uuid = new Date().getTime()),
    (M.datepicker.version = "1.12.1"),
    M.datepicker
  );
});
/*!This file is auto-generated*/ !function () {
  function t() {}
  var n = this,
    r = n._,
    e = Array.prototype,
    o = Object.prototype,
    u = Function.prototype,
    i = e.push,
    c = e.slice,
    l = o.toString,
    a = o.hasOwnProperty,
    f = Array.isArray,
    s = Object.keys,
    p = u.bind,
    h = Object.create,
    v = function (n) {
      return n instanceof v
        ? n
        : this instanceof v
        ? void (this._wrapped = n)
        : new v(n);
    };
  "undefined" != typeof exports
    ? ((exports =
        "undefined" != typeof module && module.exports
          ? (module.exports = v)
          : exports)._ = v)
    : (n._ = v),
    (v.VERSION = "1.8.3");
  var y = function (u, i, n) {
      if (void 0 === i) return u;
      switch (null == n ? 3 : n) {
        case 1:
          return function (n) {
            return u.call(i, n);
          };
        case 2:
          return function (n, t) {
            return u.call(i, n, t);
          };
        case 3:
          return function (n, t, r) {
            return u.call(i, n, t, r);
          };
        case 4:
          return function (n, t, r, e) {
            return u.call(i, n, t, r, e);
          };
      }
      return function () {
        return u.apply(i, arguments);
      };
    },
    d = function (n, t, r) {
      return null == n
        ? v.identity
        : v.isFunction(n)
        ? y(n, t, r)
        : v.isObject(n)
        ? v.matcher(n)
        : v.property(n);
    };
  v.iteratee = function (n, t) {
    return d(n, t, 1 / 0);
  };
  function g(n) {
    return v.isObject(n)
      ? h
        ? h(n)
        : ((t.prototype = n), (n = new t()), (t.prototype = null), n)
      : {};
  }
  var m = function (c, f) {
      return function (n) {
        var t = arguments.length;
        if (t < 2 || null == n) return n;
        for (var r = 1; r < t; r++)
          for (
            var e = arguments[r], u = c(e), i = u.length, o = 0;
            o < i;
            o++
          ) {
            var a = u[o];
            (f && void 0 !== n[a]) || (n[a] = e[a]);
          }
        return n;
      };
    },
    b = function (t) {
      return function (n) {
        return null == n ? void 0 : n[t];
      };
    },
    x = Math.pow(2, 53) - 1,
    _ = b("length"),
    j = function (n) {
      n = _(n);
      return "number" == typeof n && 0 <= n && n <= x;
    };
  function w(a) {
    return function (n, t, r, e) {
      t = y(t, e, 4);
      var u = !j(n) && v.keys(n),
        i = (u || n).length,
        o = 0 < a ? 0 : i - 1;
      return (
        arguments.length < 3 && ((r = n[u ? u[o] : o]), (o += a)),
        (function (n, t, r, e, u, i) {
          for (; 0 <= u && u < i; u += a) {
            var o = e ? e[u] : u;
            r = t(r, n[o], o, n);
          }
          return r;
        })(n, t, r, u, o, i)
      );
    };
  }
  (v.each = v.forEach =
    function (n, t, r) {
      if (((t = y(t, r)), j(n)))
        for (u = 0, i = n.length; u < i; u++) t(n[u], u, n);
      else
        for (var e = v.keys(n), u = 0, i = e.length; u < i; u++)
          t(n[e[u]], e[u], n);
      return n;
    }),
    (v.map = v.collect =
      function (n, t, r) {
        t = d(t, r);
        for (
          var e = !j(n) && v.keys(n), u = (e || n).length, i = Array(u), o = 0;
          o < u;
          o++
        ) {
          var a = e ? e[o] : o;
          i[o] = t(n[a], a, n);
        }
        return i;
      }),
    (v.reduce = v.foldl = v.inject = w(1)),
    (v.reduceRight = v.foldr = w(-1)),
    (v.find = v.detect =
      function (n, t, r) {
        r = j(n) ? v.findIndex(n, t, r) : v.findKey(n, t, r);
        if (void 0 !== r && -1 !== r) return n[r];
      }),
    (v.filter = v.select =
      function (n, e, t) {
        var u = [];
        return (
          (e = d(e, t)),
          v.each(n, function (n, t, r) {
            e(n, t, r) && u.push(n);
          }),
          u
        );
      }),
    (v.reject = function (n, t, r) {
      return v.filter(n, v.negate(d(t)), r);
    }),
    (v.every = v.all =
      function (n, t, r) {
        t = d(t, r);
        for (
          var e = !j(n) && v.keys(n), u = (e || n).length, i = 0;
          i < u;
          i++
        ) {
          var o = e ? e[i] : i;
          if (!t(n[o], o, n)) return !1;
        }
        return !0;
      }),
    (v.some = v.any =
      function (n, t, r) {
        t = d(t, r);
        for (
          var e = !j(n) && v.keys(n), u = (e || n).length, i = 0;
          i < u;
          i++
        ) {
          var o = e ? e[i] : i;
          if (t(n[o], o, n)) return !0;
        }
        return !1;
      }),
    (v.contains =
      v.includes =
      v.include =
        function (n, t, r, e) {
          return (
            j(n) || (n = v.values(n)),
            0 <= v.indexOf(n, t, (r = "number" != typeof r || e ? 0 : r))
          );
        }),
    (v.invoke = function (n, r) {
      var e = c.call(arguments, 2),
        u = v.isFunction(r);
      return v.map(n, function (n) {
        var t = u ? r : n[r];
        return null == t ? t : t.apply(n, e);
      });
    }),
    (v.pluck = function (n, t) {
      return v.map(n, v.property(t));
    }),
    (v.where = function (n, t) {
      return v.filter(n, v.matcher(t));
    }),
    (v.findWhere = function (n, t) {
      return v.find(n, v.matcher(t));
    }),
    (v.max = function (n, e, t) {
      var r,
        u,
        i = -1 / 0,
        o = -1 / 0;
      if (null == e && null != n)
        for (var a = 0, c = (n = j(n) ? n : v.values(n)).length; a < c; a++)
          (r = n[a]), i < r && (i = r);
      else
        (e = d(e, t)),
          v.each(n, function (n, t, r) {
            (u = e(n, t, r)),
              (o < u || (u === -1 / 0 && i === -1 / 0)) && ((i = n), (o = u));
          });
      return i;
    }),
    (v.min = function (n, e, t) {
      var r,
        u,
        i = 1 / 0,
        o = 1 / 0;
      if (null == e && null != n)
        for (var a = 0, c = (n = j(n) ? n : v.values(n)).length; a < c; a++)
          (r = n[a]) < i && (i = r);
      else
        (e = d(e, t)),
          v.each(n, function (n, t, r) {
            ((u = e(n, t, r)) < o || (u === 1 / 0 && i === 1 / 0)) &&
              ((i = n), (o = u));
          });
      return i;
    }),
    (v.shuffle = function (n) {
      for (
        var t, r = j(n) ? n : v.values(n), e = r.length, u = Array(e), i = 0;
        i < e;
        i++
      )
        (t = v.random(0, i)) !== i && (u[i] = u[t]), (u[t] = r[i]);
      return u;
    }),
    (v.sample = function (n, t, r) {
      return null == t || r
        ? (n = !j(n) ? v.values(n) : n)[v.random(n.length - 1)]
        : v.shuffle(n).slice(0, Math.max(0, t));
    }),
    (v.sortBy = function (n, e, t) {
      return (
        (e = d(e, t)),
        v.pluck(
          v
            .map(n, function (n, t, r) {
              return { value: n, index: t, criteria: e(n, t, r) };
            })
            .sort(function (n, t) {
              var r = n.criteria,
                e = t.criteria;
              if (r !== e) {
                if (e < r || void 0 === r) return 1;
                if (r < e || void 0 === e) return -1;
              }
              return n.index - t.index;
            }),
          "value"
        )
      );
    });
  u = function (i) {
    return function (r, e, n) {
      var u = {};
      return (
        (e = d(e, n)),
        v.each(r, function (n, t) {
          t = e(n, t, r);
          i(u, n, t);
        }),
        u
      );
    };
  };
  (v.groupBy = u(function (n, t, r) {
    v.has(n, r) ? n[r].push(t) : (n[r] = [t]);
  })),
    (v.indexBy = u(function (n, t, r) {
      n[r] = t;
    })),
    (v.countBy = u(function (n, t, r) {
      v.has(n, r) ? n[r]++ : (n[r] = 1);
    })),
    (v.toArray = function (n) {
      return n
        ? v.isArray(n)
          ? c.call(n)
          : j(n)
          ? v.map(n, v.identity)
          : v.values(n)
        : [];
    }),
    (v.size = function (n) {
      return null == n ? 0 : (j(n) ? n : v.keys(n)).length;
    }),
    (v.partition = function (n, e, t) {
      e = d(e, t);
      var u = [],
        i = [];
      return (
        v.each(n, function (n, t, r) {
          (e(n, t, r) ? u : i).push(n);
        }),
        [u, i]
      );
    }),
    (v.first =
      v.head =
      v.take =
        function (n, t, r) {
          if (null != n)
            return null == t || r ? n[0] : v.initial(n, n.length - t);
        }),
    (v.initial = function (n, t, r) {
      return c.call(n, 0, Math.max(0, n.length - (null == t || r ? 1 : t)));
    }),
    (v.last = function (n, t, r) {
      if (null != n)
        return null == t || r
          ? n[n.length - 1]
          : v.rest(n, Math.max(0, n.length - t));
    }),
    (v.rest =
      v.tail =
      v.drop =
        function (n, t, r) {
          return c.call(n, null == t || r ? 1 : t);
        }),
    (v.compact = function (n) {
      return v.filter(n, v.identity);
    });
  var A = function (n, t, r, e) {
    for (var u = [], i = 0, o = e || 0, a = _(n); o < a; o++) {
      var c = n[o];
      if (j(c) && (v.isArray(c) || v.isArguments(c))) {
        var f = 0,
          l = (c = !t ? A(c, t, r) : c).length;
        for (u.length += l; f < l; ) u[i++] = c[f++];
      } else r || (u[i++] = c);
    }
    return u;
  };
  function O(i) {
    return function (n, t, r) {
      t = d(t, r);
      for (var e = _(n), u = 0 < i ? 0 : e - 1; 0 <= u && u < e; u += i)
        if (t(n[u], u, n)) return u;
      return -1;
    };
  }
  function k(i, o, a) {
    return function (n, t, r) {
      var e = 0,
        u = _(n);
      if ("number" == typeof r)
        0 < i
          ? (e = 0 <= r ? r : Math.max(r + u, e))
          : (u = 0 <= r ? Math.min(r + 1, u) : r + u + 1);
      else if (a && r && u) return n[(r = a(n, t))] === t ? r : -1;
      if (t != t) return 0 <= (r = o(c.call(n, e, u), v.isNaN)) ? r + e : -1;
      for (r = 0 < i ? e : u - 1; 0 <= r && r < u; r += i)
        if (n[r] === t) return r;
      return -1;
    };
  }
  (v.flatten = function (n, t) {
    return A(n, t, !1);
  }),
    (v.without = function (n) {
      return v.difference(n, c.call(arguments, 1));
    }),
    (v.uniq = v.unique =
      function (n, t, r, e) {
        v.isBoolean(t) || ((e = r), (r = t), (t = !1)),
          null != r && (r = d(r, e));
        for (var u = [], i = [], o = 0, a = _(n); o < a; o++) {
          var c = n[o],
            f = r ? r(c, o, n) : c;
          t
            ? ((o && i === f) || u.push(c), (i = f))
            : r
            ? v.contains(i, f) || (i.push(f), u.push(c))
            : v.contains(u, c) || u.push(c);
        }
        return u;
      }),
    (v.union = function () {
      return v.uniq(A(arguments, !0, !0));
    }),
    (v.intersection = function (n) {
      for (var t = [], r = arguments.length, e = 0, u = _(n); e < u; e++) {
        var i = n[e];
        if (!v.contains(t, i)) {
          for (var o = 1; o < r && v.contains(arguments[o], i); o++);
          o === r && t.push(i);
        }
      }
      return t;
    }),
    (v.difference = function (n) {
      var t = A(arguments, !0, !0, 1);
      return v.filter(n, function (n) {
        return !v.contains(t, n);
      });
    }),
    (v.zip = function () {
      return v.unzip(arguments);
    }),
    (v.unzip = function (n) {
      for (
        var t = (n && v.max(n, _).length) || 0, r = Array(t), e = 0;
        e < t;
        e++
      )
        r[e] = v.pluck(n, e);
      return r;
    }),
    (v.object = function (n, t) {
      for (var r = {}, e = 0, u = _(n); e < u; e++)
        t ? (r[n[e]] = t[e]) : (r[n[e][0]] = n[e][1]);
      return r;
    }),
    (v.findIndex = O(1)),
    (v.findLastIndex = O(-1)),
    (v.sortedIndex = function (n, t, r, e) {
      for (var u = (r = d(r, e, 1))(t), i = 0, o = _(n); i < o; ) {
        var a = Math.floor((i + o) / 2);
        r(n[a]) < u ? (i = a + 1) : (o = a);
      }
      return i;
    }),
    (v.indexOf = k(1, v.findIndex, v.sortedIndex)),
    (v.lastIndexOf = k(-1, v.findLastIndex)),
    (v.range = function (n, t, r) {
      null == t && ((t = n || 0), (n = 0)), (r = r || 1);
      for (
        var e = Math.max(Math.ceil((t - n) / r), 0), u = Array(e), i = 0;
        i < e;
        i++, n += r
      )
        u[i] = n;
      return u;
    });
  function F(n, t, r, e, u) {
    return e instanceof t
      ? ((r = g(n.prototype)), (u = n.apply(r, u)), v.isObject(u) ? u : r)
      : n.apply(r, u);
  }
  (v.bind = function (n, t) {
    if (p && n.bind === p) return p.apply(n, c.call(arguments, 1));
    if (!v.isFunction(n))
      throw new TypeError("Bind must be called on a function");
    var r = c.call(arguments, 2),
      e = function () {
        return F(n, e, t, this, r.concat(c.call(arguments)));
      };
    return e;
  }),
    (v.partial = function (u) {
      var i = c.call(arguments, 1),
        o = function () {
          for (var n = 0, t = i.length, r = Array(t), e = 0; e < t; e++)
            r[e] = i[e] === v ? arguments[n++] : i[e];
          for (; n < arguments.length; ) r.push(arguments[n++]);
          return F(u, o, this, this, r);
        };
      return o;
    }),
    (v.bindAll = function (n) {
      var t,
        r,
        e = arguments.length;
      if (e <= 1) throw new Error("bindAll must be passed function names");
      for (t = 1; t < e; t++) n[(r = arguments[t])] = v.bind(n[r], n);
      return n;
    }),
    (v.memoize = function (e, u) {
      var i = function (n) {
        var t = i.cache,
          r = "" + (u ? u.apply(this, arguments) : n);
        return v.has(t, r) || (t[r] = e.apply(this, arguments)), t[r];
      };
      return (i.cache = {}), i;
    }),
    (v.delay = function (n, t) {
      var r = c.call(arguments, 2);
      return setTimeout(function () {
        return n.apply(null, r);
      }, t);
    }),
    (v.defer = v.partial(v.delay, v, 1)),
    (v.throttle = function (r, e, u) {
      var i,
        o,
        a,
        c = null,
        f = 0;
      u = u || {};
      function l() {
        (f = !1 === u.leading ? 0 : v.now()),
          (c = null),
          (a = r.apply(i, o)),
          c || (i = o = null);
      }
      return function () {
        var n = v.now();
        f || !1 !== u.leading || (f = n);
        var t = e - (n - f);
        return (
          (i = this),
          (o = arguments),
          t <= 0 || e < t
            ? (c && (clearTimeout(c), (c = null)),
              (f = n),
              (a = r.apply(i, o)),
              c || (i = o = null))
            : c || !1 === u.trailing || (c = setTimeout(l, t)),
          a
        );
      };
    }),
    (v.debounce = function (t, r, e) {
      var u,
        i,
        o,
        a,
        c,
        f = function () {
          var n = v.now() - a;
          n < r && 0 <= n
            ? (u = setTimeout(f, r - n))
            : ((u = null), e || ((c = t.apply(o, i)), u || (o = i = null)));
        };
      return function () {
        (o = this), (i = arguments), (a = v.now());
        var n = e && !u;
        return (
          (u = u || setTimeout(f, r)),
          n && ((c = t.apply(o, i)), (o = i = null)),
          c
        );
      };
    }),
    (v.wrap = function (n, t) {
      return v.partial(t, n);
    }),
    (v.negate = function (n) {
      return function () {
        return !n.apply(this, arguments);
      };
    }),
    (v.compose = function () {
      var r = arguments,
        e = r.length - 1;
      return function () {
        for (var n = e, t = r[e].apply(this, arguments); n--; )
          t = r[n].call(this, t);
        return t;
      };
    }),
    (v.after = function (n, t) {
      return function () {
        if (--n < 1) return t.apply(this, arguments);
      };
    }),
    (v.before = function (n, t) {
      var r;
      return function () {
        return (
          0 < --n && (r = t.apply(this, arguments)), n <= 1 && (t = null), r
        );
      };
    }),
    (v.once = v.partial(v.before, 2));
  var S = !{ toString: null }.propertyIsEnumerable("toString"),
    E = [
      "valueOf",
      "isPrototypeOf",
      "toString",
      "propertyIsEnumerable",
      "hasOwnProperty",
      "toLocaleString",
    ];
  function M(n, t) {
    var r = E.length,
      e = n.constructor,
      u = (v.isFunction(e) && e.prototype) || o,
      i = "constructor";
    for (v.has(n, i) && !v.contains(t, i) && t.push(i); r--; )
      (i = E[r]) in n && n[i] !== u[i] && !v.contains(t, i) && t.push(i);
  }
  (v.keys = function (n) {
    if (!v.isObject(n)) return [];
    if (s) return s(n);
    var t,
      r = [];
    for (t in n) v.has(n, t) && r.push(t);
    return S && M(n, r), r;
  }),
    (v.allKeys = function (n) {
      if (!v.isObject(n)) return [];
      var t,
        r = [];
      for (t in n) r.push(t);
      return S && M(n, r), r;
    }),
    (v.values = function (n) {
      for (var t = v.keys(n), r = t.length, e = Array(r), u = 0; u < r; u++)
        e[u] = n[t[u]];
      return e;
    }),
    (v.mapObject = function (n, t, r) {
      t = d(t, r);
      for (var e, u = v.keys(n), i = u.length, o = {}, a = 0; a < i; a++)
        o[(e = u[a])] = t(n[e], e, n);
      return o;
    }),
    (v.pairs = function (n) {
      for (var t = v.keys(n), r = t.length, e = Array(r), u = 0; u < r; u++)
        e[u] = [t[u], n[t[u]]];
      return e;
    }),
    (v.invert = function (n) {
      for (var t = {}, r = v.keys(n), e = 0, u = r.length; e < u; e++)
        t[n[r[e]]] = r[e];
      return t;
    }),
    (v.functions = v.methods =
      function (n) {
        var t,
          r = [];
        for (t in n) v.isFunction(n[t]) && r.push(t);
        return r.sort();
      }),
    (v.extend = m(v.allKeys)),
    (v.extendOwn = v.assign = m(v.keys)),
    (v.findKey = function (n, t, r) {
      t = d(t, r);
      for (var e, u = v.keys(n), i = 0, o = u.length; i < o; i++)
        if (t(n[(e = u[i])], e, n)) return e;
    }),
    (v.pick = function (n, t, r) {
      var e,
        u,
        i = {},
        o = n;
      if (null == o) return i;
      v.isFunction(t)
        ? ((u = v.allKeys(o)), (e = y(t, r)))
        : ((u = A(arguments, !1, !1, 1)),
          (e = function (n, t, r) {
            return t in r;
          }),
          (o = Object(o)));
      for (var a = 0, c = u.length; a < c; a++) {
        var f = u[a],
          l = o[f];
        e(l, f, o) && (i[f] = l);
      }
      return i;
    }),
    (v.omit = function (n, t, r) {
      var e;
      return (
        (t = v.isFunction(t)
          ? v.negate(t)
          : ((e = v.map(A(arguments, !1, !1, 1), String)),
            function (n, t) {
              return !v.contains(e, t);
            })),
        v.pick(n, t, r)
      );
    }),
    (v.defaults = m(v.allKeys, !0)),
    (v.create = function (n, t) {
      n = g(n);
      return t && v.extendOwn(n, t), n;
    }),
    (v.clone = function (n) {
      return v.isObject(n) ? (v.isArray(n) ? n.slice() : v.extend({}, n)) : n;
    }),
    (v.tap = function (n, t) {
      return t(n), n;
    }),
    (v.isMatch = function (n, t) {
      var r = v.keys(t),
        e = r.length;
      if (null == n) return !e;
      for (var u = Object(n), i = 0; i < e; i++) {
        var o = r[i];
        if (t[o] !== u[o] || !(o in u)) return !1;
      }
      return !0;
    });
  var I = function (n, t, r, e) {
    if (n === t) return 0 !== n || 1 / n == 1 / t;
    if (null == n || null == t) return n === t;
    n instanceof v && (n = n._wrapped), t instanceof v && (t = t._wrapped);
    var u = l.call(n);
    if (u !== l.call(t)) return !1;
    switch (u) {
      case "[object RegExp]":
      case "[object String]":
        return "" + n == "" + t;
      case "[object Number]":
        return +n != +n ? +t != +t : 0 == +n ? 1 / +n == 1 / t : +n == +t;
      case "[object Date]":
      case "[object Boolean]":
        return +n == +t;
    }
    var i = "[object Array]" === u;
    if (!i) {
      if ("object" != typeof n || "object" != typeof t) return !1;
      var o = n.constructor,
        u = t.constructor;
      if (
        o !== u &&
        !(
          v.isFunction(o) &&
          o instanceof o &&
          v.isFunction(u) &&
          u instanceof u
        ) &&
        "constructor" in n &&
        "constructor" in t
      )
        return !1;
    }
    e = e || [];
    for (var a = (r = r || []).length; a--; ) if (r[a] === n) return e[a] === t;
    if ((r.push(n), e.push(t), i)) {
      if ((a = n.length) !== t.length) return !1;
      for (; a--; ) if (!I(n[a], t[a], r, e)) return !1;
    } else {
      var c,
        f = v.keys(n),
        a = f.length;
      if (v.keys(t).length !== a) return !1;
      for (; a--; )
        if (((c = f[a]), !v.has(t, c) || !I(n[c], t[c], r, e))) return !1;
    }
    return r.pop(), e.pop(), !0;
  };
  (v.isEqual = function (n, t) {
    return I(n, t);
  }),
    (v.isEmpty = function (n) {
      return (
        null == n ||
        (j(n) && (v.isArray(n) || v.isString(n) || v.isArguments(n))
          ? 0 === n.length
          : 0 === v.keys(n).length)
      );
    }),
    (v.isElement = function (n) {
      return !(!n || 1 !== n.nodeType);
    }),
    (v.isArray =
      f ||
      function (n) {
        return "[object Array]" === l.call(n);
      }),
    (v.isObject = function (n) {
      var t = typeof n;
      return "function" == t || ("object" == t && !!n);
    }),
    v.each(
      ["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"],
      function (t) {
        v["is" + t] = function (n) {
          return l.call(n) === "[object " + t + "]";
        };
      }
    ),
    v.isArguments(arguments) ||
      (v.isArguments = function (n) {
        return v.has(n, "callee");
      }),
    "function" != typeof /./ &&
      "object" != typeof Int8Array &&
      (v.isFunction = function (n) {
        return "function" == typeof n || !1;
      }),
    (v.isFinite = function (n) {
      return isFinite(n) && !isNaN(parseFloat(n));
    }),
    (v.isNaN = function (n) {
      return v.isNumber(n) && n !== +n;
    }),
    (v.isBoolean = function (n) {
      return !0 === n || !1 === n || "[object Boolean]" === l.call(n);
    }),
    (v.isNull = function (n) {
      return null === n;
    }),
    (v.isUndefined = function (n) {
      return void 0 === n;
    }),
    (v.has = function (n, t) {
      return null != n && a.call(n, t);
    }),
    (v.noConflict = function () {
      return (n._ = r), this;
    }),
    (v.identity = function (n) {
      return n;
    }),
    (v.constant = function (n) {
      return function () {
        return n;
      };
    }),
    (v.noop = function () {}),
    (v.property = b),
    (v.propertyOf = function (t) {
      return null == t
        ? function () {}
        : function (n) {
            return t[n];
          };
    }),
    (v.matcher = v.matches =
      function (t) {
        return (
          (t = v.extendOwn({}, t)),
          function (n) {
            return v.isMatch(n, t);
          }
        );
      }),
    (v.times = function (n, t, r) {
      var e = Array(Math.max(0, n));
      t = y(t, r, 1);
      for (var u = 0; u < n; u++) e[u] = t(u);
      return e;
    }),
    (v.random = function (n, t) {
      return (
        null == t && ((t = n), (n = 0)),
        n + Math.floor(Math.random() * (t - n + 1))
      );
    }),
    (v.now =
      Date.now ||
      function () {
        return new Date().getTime();
      });
  (m = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;",
  }),
    (f = v.invert(m)),
    (b = function (t) {
      function r(n) {
        return t[n];
      }
      var n = "(?:" + v.keys(t).join("|") + ")",
        e = RegExp(n),
        u = RegExp(n, "g");
      return function (n) {
        return e.test((n = null == n ? "" : "" + n)) ? n.replace(u, r) : n;
      };
    });
  (v.escape = b(m)),
    (v.unescape = b(f)),
    (v.result = function (n, t, r) {
      t = null == n ? void 0 : n[t];
      return v.isFunction((t = void 0 === t ? r : t)) ? t.call(n) : t;
    });
  var N = 0;
  (v.uniqueId = function (n) {
    var t = ++N + "";
    return n ? n + t : t;
  }),
    (v.templateSettings = {
      evaluate: /<%([\s\S]+?)%>/g,
      interpolate: /<%=([\s\S]+?)%>/g,
      escape: /<%-([\s\S]+?)%>/g,
    });
  function B(n) {
    return "\\" + R[n];
  }
  var T = /(.)^/,
    R = {
      "'": "'",
      "\\": "\\",
      "\r": "r",
      "\n": "n",
      "\u2028": "u2028",
      "\u2029": "u2029",
    },
    q = /\\|'|\r|\n|\u2028|\u2029/g;
  (v.template = function (i, n, t) {
    n = v.defaults({}, (n = !n && t ? t : n), v.templateSettings);
    var t = RegExp(
        [
          (n.escape || T).source,
          (n.interpolate || T).source,
          (n.evaluate || T).source,
        ].join("|") + "|$",
        "g"
      ),
      o = 0,
      a = "__p+='";
    i.replace(t, function (n, t, r, e, u) {
      return (
        (a += i.slice(o, u).replace(q, B)),
        (o = u + n.length),
        t
          ? (a += "'+\n((__t=(" + t + "))==null?'':_.escape(__t))+\n'")
          : r
          ? (a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'")
          : e && (a += "';\n" + e + "\n__p+='"),
        n
      );
    }),
      (a += "';\n"),
      (a =
        "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
        (a = !n.variable ? "with(obj||{}){\n" + a + "}\n" : a) +
        "return __p;\n");
    try {
      var r = new Function(n.variable || "obj", "_", a);
    } catch (n) {
      throw ((n.source = a), n);
    }
    (t = function (n) {
      return r.call(this, n, v);
    }),
      (n = n.variable || "obj");
    return (t.source = "function(" + n + "){\n" + a + "}"), t;
  }),
    (v.chain = function (n) {
      n = v(n);
      return (n._chain = !0), n;
    });
  function K(n, t) {
    return n._chain ? v(t).chain() : t;
  }
  (v.mixin = function (r) {
    v.each(v.functions(r), function (n) {
      var t = (v[n] = r[n]);
      v.prototype[n] = function () {
        var n = [this._wrapped];
        return i.apply(n, arguments), K(this, t.apply(v, n));
      };
    });
  }),
    v.mixin(v),
    v.each(
      ["pop", "push", "reverse", "shift", "sort", "splice", "unshift"],
      function (t) {
        var r = e[t];
        v.prototype[t] = function () {
          var n = this._wrapped;
          return (
            r.apply(n, arguments),
            ("shift" !== t && "splice" !== t) || 0 !== n.length || delete n[0],
            K(this, n)
          );
        };
      }
    ),
    v.each(["concat", "join", "slice"], function (n) {
      var t = e[n];
      v.prototype[n] = function () {
        return K(this, t.apply(this._wrapped, arguments));
      };
    }),
    (v.prototype.value = function () {
      return this._wrapped;
    }),
    (v.prototype.valueOf = v.prototype.toJSON = v.prototype.value),
    (v.prototype.toString = function () {
      return "" + this._wrapped;
    }),
    "function" == typeof define &&
      define.amd &&
      define("underscore", [], function () {
        return v;
      });
}.call(this);
!(function (a) {
  (a.suggest = function (b, c) {
    function d() {
      var a = o.offset();
      p.css({ top: a.top + b.offsetHeight + "px", left: a.left + "px" });
    }
    function e(a) {
      if (
        (/27$|38$|40$/.test(a.keyCode) && p.is(":visible")) ||
        (/^13$|^9$/.test(a.keyCode) && k())
      )
        switch (
          (a.preventDefault && a.preventDefault(),
          a.stopPropagation && a.stopPropagation(),
          (a.cancelBubble = !0),
          (a.returnValue = !1),
          a.keyCode)
        ) {
          case 38:
            n();
            break;
          case 40:
            m();
            break;
          case 9:
          case 13:
            l();
            break;
          case 27:
            p.hide();
        }
      else
        o.val().length != r &&
          (q && clearTimeout(q),
          (q = setTimeout(f, c.delay)),
          (r = o.val().length));
    }
    function f() {
      var b,
        d,
        e = a.trim(o.val());
      c.multiple &&
        ((b = e.lastIndexOf(c.multipleSep)),
        -1 != b && (e = a.trim(e.substr(b + c.multipleSep.length)))),
        e.length >= c.minchars
          ? ((cached = g(e)),
            cached
              ? i(cached.items)
              : a.get(c.source, { q: e }, function (a) {
                  p.hide(), (d = j(a, e)), i(d), h(e, d, a.length);
                }))
          : p.hide();
    }
    function g(a) {
      var b;
      for (b = 0; b < s.length; b++)
        if (s[b].q == a) return s.unshift(s.splice(b, 1)[0]), s[0];
      return !1;
    }
    function h(a, b, d) {
      for (var e; s.length && t + d > c.maxCacheSize; )
        (e = s.pop()), (t -= e.size);
      s.push({ q: a, size: d, items: b }), (t += d);
    }
    function i(b) {
      var e,
        f = "";
      if (b) {
        if (!b.length) return void p.hide();
        for (d(), e = 0; e < b.length; e++) f += "<li>" + b[e] + "</li>";
        p.html(f).show(),
          p
            .children("li")
            .mouseover(function () {
              p.children("li").removeClass(c.selectClass),
                a(this).addClass(c.selectClass);
            })
            .click(function (a) {
              a.preventDefault(), a.stopPropagation(), l();
            });
      }
    }
    function j(b, d) {
      var e,
        f,
        g = [],
        h = b.split(c.delimiter);
      for (e = 0; e < h.length; e++)
        (f = a.trim(h[e])),
          f &&
            ((f = f.replace(new RegExp(d, "ig"), function (a) {
              return '<span class="' + c.matchClass + '">' + a + "</span>";
            })),
            (g[g.length] = f));
      return g;
    }
    function k() {
      var a;
      return p.is(":visible")
        ? ((a = p.children("li." + c.selectClass)), a.length || (a = !1), a)
        : !1;
    }
    function l() {
      ($currentResult = k()),
        $currentResult &&
          (c.multiple
            ? (-1 != o.val().indexOf(c.multipleSep)
                ? ($currentVal =
                    o
                      .val()
                      .substr(
                        0,
                        o.val().lastIndexOf(c.multipleSep) +
                          c.multipleSep.length
                      ) + " ")
                : ($currentVal = ""),
              o.val($currentVal + $currentResult.text() + c.multipleSep + " "),
              o.focus())
            : o.val($currentResult.text()),
          p.hide(),
          o.trigger("change"),
          c.onSelect && c.onSelect.apply(o[0]));
    }
    function m() {
      ($currentResult = k()),
        $currentResult
          ? $currentResult
              .removeClass(c.selectClass)
              .next()
              .addClass(c.selectClass)
          : p.children("li:first-child").addClass(c.selectClass);
    }
    function n() {
      var a = k();
      a
        ? a.removeClass(c.selectClass).prev().addClass(c.selectClass)
        : p.children("li:last-child").addClass(c.selectClass);
    }
    var o, p, q, r, s, t;
    (o = a(b).attr("autocomplete", "off")),
      (p = a("<ul/>")),
      (q = !1),
      (r = 0),
      (s = []),
      (t = 0),
      p.addClass(c.resultsClass).appendTo("body"),
      d(),
      a(window).on("load", d).on("resize", d),
      o.blur(function () {
        setTimeout(function () {
          p.hide();
        }, 200);
      }),
      o.keydown(e);
  }),
    (a.fn.suggest = function (b, c) {
      return b
        ? ((c = c || {}),
          (c.multiple = c.multiple || !1),
          (c.multipleSep = c.multipleSep || ","),
          (c.source = b),
          (c.delay = c.delay || 100),
          (c.resultsClass = c.resultsClass || "ac_results"),
          (c.selectClass = c.selectClass || "ac_over"),
          (c.matchClass = c.matchClass || "ac_match"),
          (c.minchars = c.minchars || 2),
          (c.delimiter = c.delimiter || "\n"),
          (c.onSelect = c.onSelect || !1),
          (c.maxCacheSize = c.maxCacheSize || 65536),
          this.each(function () {
            new a.suggest(this, c);
          }),
          this)
        : void 0;
    });
})(jQuery);
var toolsetForms = toolsetForms || {};
var wptCallbacks = {};
wptCallbacks.validationInit = jQuery.Callbacks("unique");
wptCallbacks.addRepetitive = jQuery.Callbacks("unique");
wptCallbacks.removeRepetitive = jQuery.Callbacks("unique");
wptCallbacks.conditionalCheck = jQuery.Callbacks("unique");
wptCallbacks.reset = jQuery.Callbacks("unique");
jQuery(function () {
  if (typeof wptValidation !== "undefined") {
    wptCallbacks.validationInit.add(function () {
      wptValidation.init();
    });
  }
  if (typeof wptCond !== "undefined") {
    wptCond.init();
  } else {
    wptCallbacks.validationInit.fire();
  }
});
jQuery(document).on("cred_form_ready", function (event, event_data) {
  jQuery(".cred-taxonomy", jQuery("form.is_submitted")).each(function () {
    var $parent = jQuery(this);
    setTimeout(function () {
      jQuery("input.wpt-taxonomy-add-new", $parent).click();
    }, 50);
  });
});
var wptFilters = {};
function add_filter(name, callback, priority, args_num) {
  var args = _.defaults(arguments, ["", "", 10, 2]);
  if (typeof wptFilters[name] === "undefined") wptFilters[name] = {};
  if (typeof wptFilters[name][args[2]] === "undefined")
    wptFilters[name][args[2]] = [];
  wptFilters[name][args[2]].push([callback, args[3]]);
}
function apply_filters(name, val) {
  if (typeof wptFilters[name] === "undefined") return val;
  var args = _.rest(_.toArray(arguments));
  _.each(wptFilters[name], function (funcs, priority) {
    _.each(funcs, function ($callback) {
      var _args = args.slice(0, $callback[1]);
      args[0] = $callback[0].apply(null, _args);
    });
  });
  return args[0];
}
function add_action(name, callback, priority, args_num) {
  add_filter.apply(null, arguments);
}
function do_action(name) {
  if (typeof wptFilters[name] === "undefined") return false;
  var args = _.rest(_.toArray(arguments));
  _.each(wptFilters[name], function (funcs, priority) {
    _.each(funcs, function ($callback) {
      var _args = args.slice(0, $callback[1]);
      $callback[0].apply(null, _args);
    });
  });
  return true;
}
function showHideMostPopularButton(taxonomy, form) {
  var $button = jQuery('[name="sh_' + taxonomy + '"]', form);
  var $taxonomy_box = jQuery(".shmpt-" + taxonomy, form);
  var $tag_list = $taxonomy_box.find(".js-wpt-taxonomy-popular-add");
  if (!$button.hasClass("js-wpt-taxonomy-popular-show-hide")) return true;
  if ($tag_list.length > 0) {
    $button.show();
    return true;
  } else {
    $button.hide();
    return false;
  }
}
jQuery(document).off("click", ".js-wpt-taxonomy-popular-show-hide", null);
jQuery(document).off("click", ".js-wpt-taxonomy-popular-add", null);
jQuery(document).off("click", ".js-wpt-taxonomy-add-new", null);
jQuery(document).off("keypress", ".js-wpt-new-taxonomy-title", null);
jQuery(document).on("click", ".js-wpt-taxonomy-popular-show-hide", function () {
  showHideMostPopularTaxonomy(this);
});
function showHideMostPopularTaxonomy(el) {
  var data_type_output = jQuery(el).data("output");
  var taxonomy = jQuery(el).data("taxonomy");
  var form = jQuery(el).closest("form");
  jQuery(".shmpt-" + taxonomy, form).toggle();
  if (data_type_output == "bootstrap") {
    var curr = jQuery(el).text();
    if (curr == jQuery(el).data("show-popular-text")) {
      jQuery(el).text(jQuery(el).data("hide-popular-text"), form);
      jQuery(el)
        .addClass("btn-cancel")
        .addClass("dashicons-dismiss")
        .removeClass("dashicons-plus-alt");
    } else {
      jQuery(el).text(jQuery(el).data("show-popular-text"), form);
      jQuery(el)
        .removeClass("btn-cancel")
        .removeClass("dashicons-dismiss")
        .addClass("dashicons-plus-alt");
    }
  } else {
    var curr = jQuery(el).val();
    if (curr == jQuery(el).data("show-popular-text")) {
      jQuery(el)
        .val(jQuery(el).data("hide-popular-text"), form)
        .addClass("btn-cancel");
    } else {
      jQuery(el)
        .val(jQuery(el).data("show-popular-text"), form)
        .removeClass("btn-cancel");
    }
  }
}
jQuery(document).on("click", ".js-wpt-taxonomy-popular-add", function () {
  var $thiz = jQuery(this);
  var taxonomy = $thiz.data("taxonomy");
  var slug = $thiz.data("slug");
  var _name = $thiz.data("name");
  setTaxonomyFromPopular(_name, taxonomy, this);
  return false;
});
function setTaxonomyFromPopular(slug, taxonomy, $el) {
  var $form = jQuery($el).closest("form");
  var tmp_tax = String(slug);
  if (typeof tmp_tax === "undefined" || tmp_tax.trim() == "") return;
  var tax = jQuery("input[name=" + taxonomy + "]", $form).val();
  var arr = String(tax).split(",");
  if (jQuery.inArray(tmp_tax, arr) !== -1) return;
  var toadd = tax == "" ? tmp_tax : tax + "," + tmp_tax;
  jQuery("input[name=" + taxonomy + "]", $form).val(toadd);
  updateTaxonomies(taxonomy, $form);
}
function addTaxonomy(slug, taxonomy, $el) {
  var $form = jQuery($el).closest("form");
  var curr = jQuery("input[name=tmp_" + taxonomy + "]", $form)
    .val()
    .trim();
  if ("" == curr) {
    jQuery("input[name=tmp_" + taxonomy + "]", $form).val(slug);
    setTaxonomy(taxonomy, $el);
  } else {
    if (curr.indexOf(slug) == -1) {
      jQuery("input[name=tmp_" + taxonomy + "]", $form).val(curr + "," + slug);
      setTaxonomy(taxonomy, $el);
    }
  }
  jQuery("input[name=tmp_" + taxonomy + "]", $form).val("");
}
jQuery(document).on("click", ".js-wpt-taxonomy-add-new", function () {
  var $thiz = jQuery(this),
    taxonomy = $thiz.data("taxonomy");
  setTaxonomy(taxonomy, this);
});
jQuery(document).on("keypress", ".js-wpt-new-taxonomy-title", function (e) {
  if ("Enter" === e.key) {
    e.preventDefault();
    var $thiz = jQuery(this),
      taxonomy = $thiz.data("taxonomy"),
      taxtype = $thiz.data("taxtype");
    if (taxtype == "hierarchical") {
      toolsetForms.cred_tax.add_taxonomy(taxonomy, this);
    } else {
      setTaxonomy(taxonomy, this);
    }
  }
});
function setTaxonomy(taxonomy, $el) {
  var $form = jQuery($el).closest("form");
  var tmp_tax = jQuery("input[name=tmp_" + taxonomy + "]", $form).val();
  var rex =
    /<\/?(a|abbr|acronym|address|applet|area|article|aside|audio|b|base|basefont|bdi|bdo|bgsound|big|blink|blockquote|body|br|button|canvas|caption|center|cite|code|col|colgroup|data|datalist|dd|del|details|dfn|dir|div|dl|dt|em|embed|fieldset|figcaption|figure|font|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hgroup|hr|html|i|iframe|img|input|ins|isindex|kbd|keygen|label|legend|li|link|listing|main|map|mark|marquee|menu|menuitem|meta|meter|nav|nobr|noframes|noscript|object|ol|optgroup|option|output|p|param|plaintext|pre|progress|q|rp|rt|ruby|s|samp|script|section|select|small|source|spacer|span|strike|strong|style|sub|summary|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|track|tt|u|ul|var|video|wbr|xmp)\b[^<>]*>/gi;
  tmp_tax = _.escape(tmp_tax.replace(rex, "")).trim();
  if (tmp_tax.trim() == "") {
    return;
  }
  var tax = jQuery("input[name=" + taxonomy + "]", $form).val();
  var arr = tax.split(",");
  if (jQuery.inArray(tmp_tax, arr) !== -1) return;
  var toadd = tax == "" ? tmp_tax : tax + "," + tmp_tax;
  jQuery("input[name=" + taxonomy + "]", $form).val(toadd);
  jQuery("input[name=tmp_" + taxonomy + "]", $form).val("");
  updateTaxonomies(taxonomy, $form);
}
function updateTaxonomies(taxonomy, $form) {
  var $taxonomies_selector = jQuery("input[name=" + taxonomy + "]", $form);
  var taxonomies = $taxonomies_selector.val();
  jQuery("div.tagchecklist-" + taxonomy, $form).html("");
  if (!taxonomies || (taxonomies && taxonomies.trim() == "")) {
    return;
  }
  var toshow = taxonomies.split(",");
  var str = "";
  for (var i = 0; i < toshow.length; i++) {
    var sh = toshow[i].trim();
    if ($taxonomies_selector.data("output") == "bootstrap") {
      str +=
        "<a class='label label-default dashicons-before dashicons-no' data-wpcf-i='" +
        i +
        "' id='post_tag-check-num-" +
        i +
        "'>" +
        sh +
        "</a> ";
    } else {
      str +=
        "<span><a href=\"#\" class='ntdelbutton' data-wpcf-i='" +
        i +
        "' id='post_tag-check-num-" +
        i +
        "'>X</a>&nbsp;" +
        sh +
        "</span>";
    }
  }
  jQuery("div.tagchecklist-" + taxonomy, $form).html(str);
  jQuery("div.tagchecklist-" + taxonomy + " a", $form).on("click", function () {
    jQuery("input[name=" + taxonomy + "]", $form).val("");
    var del = jQuery(this).data("wpcf-i");
    var values = "";
    for (i = 0; i < toshow.length; i++) {
      if (del == i) {
        continue;
      }
      if (values) {
        values += ",";
      }
      values += toshow[i];
    }
    jQuery("input[name=" + taxonomy + "]", $form).val(values);
    updateTaxonomies(taxonomy, $form);
    return false;
  });
}
function initTaxonomies(values, taxonomy, url, fieldId) {
  var $form = jQuery("#" + fieldId.replace(/_field_\d+$/, "")).closest("form");
  jQuery("div.tagchecklist-" + taxonomy, $form).html(values);
  jQuery("input[name=" + taxonomy + "]", $form).val(values);
  updateTaxonomies(taxonomy, $form);
  jQuery("input[name=tmp_" + taxonomy + "]", $form).suggest(
    wptoolset_taxonomy_settings.ajaxurl +
      "?action=wpt_suggest_taxonomy_term&taxonomy=" +
      taxonomy,
    {
      resultsClass: "wpt-suggest-taxonomy-term",
      selectClass: "wpt-suggest-taxonomy-term-select",
    }
  );
  if (jQuery("input[name=tmp_" + taxonomy + "]", $form).val() !== "") {
    jQuery("input[name='new_tax_button_" + taxonomy + "']", $form).trigger(
      "click"
    );
  }
}
toolsetForms.CRED_taxonomy = function () {
  var self = this;
  self.init = function () {
    self._new_taxonomy = new Array();
    jQuery(self._document_ready);
  };
  self._document_ready = function () {
    self._initialize_taxonomy_buttons();
    self._initialize_hierachical();
  };
  self._initialize_hierachical = function () {
    jQuery(".js-wpt-hierarchical-taxonomy-add-new-container").each(function () {
      var $addNewContainer = jQuery(this),
        $form = $addNewContainer.closest("form"),
        $taxonomy = $addNewContainer.data("taxonomy"),
        $addNewShowHide = jQuery(
          '.js-wpt-hierarchical-taxonomy-add-new-show-hide[data-taxonomy="' +
            $taxonomy +
            '"]',
          $form
        ),
        $placeholder = jQuery(
          '.js-taxonomy-hierarchical-button-placeholder[data-taxonomy="' +
            $taxonomy +
            '"]',
          $form
        );
      if ($placeholder.length > 0) {
        $addNewShowHide.insertAfter($placeholder).show();
        $placeholder.replaceWith($addNewContainer);
        self._fill_parent_drop_down($form);
      } else {
        $addNewContainer.remove();
        $addNewShowHide.remove();
      }
    });
  };
  self._fill_parent_drop_down = function ($form) {
    jQuery("select.js-taxonomy-parent", $form).each(function () {
      var $select = jQuery(this);
      jQuery(this)
        .find("option")
        .each(function () {
          if (jQuery(this).val() != "-1") {
            jQuery(this).remove();
          }
        });
      var taxonomy = jQuery(this).data("taxonomy");
      jQuery('input[name="' + taxonomy + '[]"]', $form).each(function () {
        var id = jQuery(this).attr("id");
        var label = jQuery(this).data("value");
        var level = jQuery(this).closest("ul").data("level");
        var prefix = "";
        if (level) {
          prefix = "\xA0\xA0" + Array(level).join("\xA0\xA0");
        }
        $select.append(
          '<option value="' +
            jQuery(this).val() +
            '">' +
            prefix +
            label +
            "</option>"
        );
      });
      jQuery('select[name="' + taxonomy + '[]"]', $form)
        .find("option")
        .each(function () {
          var id = jQuery(this).val();
          var text = jQuery(this).text();
          $select.append('<option value="' + id + '">' + text + "</option>");
        });
    });
  };
  self._initialize_taxonomy_buttons = function () {
    jQuery(".js-taxonomy-button-placeholder").each(function () {
      var $placeholder = jQuery(this);
      var label = jQuery(this).attr("data-label");
      var taxonomy = jQuery(this).data("taxonomy");
      var form = jQuery(this).closest("form");
      var $buttons = jQuery('[name="sh_' + taxonomy + '"]', form);
      var selectors = [];
      if ($buttons.length) {
        $buttons.each(function () {
          var $button = jQuery(this, form);
          if (label) {
            $button.val(label);
          }
          $placeholder.replaceWith($button);
          if ($button.hasClass("js-wpt-taxonomy-popular-show-hide")) {
            if (showHideMostPopularButton(taxonomy, form)) {
              $button.show();
            }
          } else {
            $button.show();
          }
          selectors.push($button.data("after-selector"));
        });
      }
    });
  };
  self.add_new_show_hide = function (taxonomy, $button) {
    var $form = jQuery($button).closest("form");
    var $add_wrap = jQuery(
      ".js-wpt-hierarchical-taxonomy-add-new-" + taxonomy,
      $form
    );
    if ($add_wrap.is(":visible")) {
      $add_wrap.hide();
    } else {
      $add_wrap.show();
    }
    self.hide_parent_button_if_no_terms(taxonomy, $button);
  };
  self.add_taxonomy_controls_bindings = function () {
    jQuery(".js-wpt-hierarchical-taxonomy-add-new").on("click", function () {
      var $thiz = jQuery(this),
        taxonomy = $thiz.data("taxonomy");
      self.add_taxonomy(taxonomy, this);
    });
    jQuery(".js-wpt-hierarchical-taxonomy-add-new-show-hide").on(
      "click",
      function () {
        var $button = jQuery(this),
          $taxonomy = $button.data("taxonomy"),
          $output = $button.data("output");
        if ($output == "bootstrap") {
          if ($button.text() == $button.data("close")) {
            $button
              .html($button.data("open"))
              .removeClass("dashicons-dismiss")
              .addClass("dashicons-plus-alt");
          } else {
            $button
              .html($button.data("close"))
              .removeClass("dashicons-plus-alt")
              .addClass("dashicons-dismiss");
          }
        } else {
          if ($button.val() == $button.data("close")) {
            $button.val($button.data("open")).removeClass("btn-cancel");
          } else {
            $button.val($button.data("close")).addClass("btn-cancel");
          }
        }
        self.add_new_show_hide($taxonomy, this);
      }
    );
  };
  self.terms_exist = function (taxonomy, $button) {
    var form = jQuery($button).closest("form");
    var build_what = jQuery($button).data("build_what"),
      parent = jQuery('[name="new_tax_select_' + taxonomy + '"]', form).val();
    if (build_what === "checkboxes") {
      var first_checkbox = jQuery(
        'input[name="' + taxonomy + '[]"][data-parent="' + parent + '"]:first',
        form
      );
      return first_checkbox.length > 0;
    } else {
      var first_option = jQuery('select[name="' + taxonomy + '[]"]', form).find(
        'option[data-parent="' + parent + '"]:first'
      );
      return first_option.length > 0;
    }
  };
  self.hide_parent_button_if_no_terms = function (taxonomy, $button) {
    var $form = jQuery($button).closest("form");
    var number_of_options = [];
    jQuery('[name="new_tax_select_' + taxonomy + '"] option', $form).each(
      function () {
        number_of_options++;
      }
    );
    if (number_of_options > 1) {
      jQuery('[name="new_tax_select_' + taxonomy + '"]', $form).prop(
        "disabled",
        false
      );
    } else {
      jQuery('[name="new_tax_select_' + taxonomy + '"]', $form).prop(
        "disabled",
        true
      );
    }
  };
  self.add_taxonomy = function (taxonomy, $button) {
    var $form = jQuery($button).closest("form");
    var dataTypeOutput = jQuery($button).data("output");
    var isBootstrap = "bootstrap" === dataTypeOutput;
    var new_taxonomy = jQuery(
      '[name="new_tax_text_' + taxonomy + '"]',
      $form
    ).val();
    var build_what = jQuery($button).data("build_what");
    new_taxonomy = new_taxonomy.trim();
    if (new_taxonomy === "") {
      return;
    }
    var exists = false;
    jQuery('input[name="' + taxonomy + '[]"]').each(function () {
      var id = jQuery(this).attr("id");
      var label = jQuery(this).data("value");
      if (new_taxonomy === label) {
        exists = true;
        self._flash_it(jQuery(this).parent("label"));
      }
    });
    jQuery('select[name="' + taxonomy + '[]"]', $form)
      .find("option")
      .each(function () {
        if (new_taxonomy === jQuery(this).text()) {
          exists = true;
          self._flash_it(jQuery(this));
        }
      });
    if (exists) {
      jQuery('[name="new_tax_text_' + taxonomy + '"]', $form).val("");
      return;
    }
    var parent = jQuery(
        '[name="new_tax_select_' + taxonomy + '"]',
        $form
      ).val(),
      add_position = null,
      add_before = true,
      $div_fields_wrap = jQuery(
        'div[data-item_name="taxonomyhierarchical-' + taxonomy + '"]',
        $form
      ),
      level = 0;
    if (build_what === "checkboxes") {
      jQuery(
        'div[data-item_name="taxonomyhierarchical-' +
          taxonomy +
          '"] li input[type=checkbox]',
        $form
      ).each(function () {
        if (this.value == parent || this.value == new_taxonomy) {
          $div_fields_wrap = jQuery(this).parent();
        }
      });
      var new_checkbox = "";
      if (isBootstrap) {
        new_checkbox =
          '<li class="checkbox"><label class="wpt-form-label wpt-form-checkbox-label"><input data-parent="' +
          parent +
          '" class="wpt-form-checkbox form-checkbox checkbox" type="checkbox" name="' +
          taxonomy +
          '[]" data-value="' +
          new_taxonomy +
          '" checked="checked" value="' +
          new_taxonomy +
          '"></input>' +
          new_taxonomy +
          "</label></li>";
      } else {
        new_checkbox =
          '<li><input data-parent="' +
          parent +
          '" class="wpt-form-checkbox form-checkbox checkbox" type="checkbox" name="' +
          taxonomy +
          '[]" checked="checked" value="' +
          new_taxonomy +
          '"></input><label class="wpt-form-label wpt-form-checkbox-label">' +
          new_taxonomy +
          "</label></li>";
      }
      var $first_checkbox = jQuery(
        'input[name="' + taxonomy + '[]"][data-parent="' + parent + '"]:first',
        $form
      );
      if ($first_checkbox.length == 0) {
        level = jQuery(
          'input[name="' + taxonomy + '[]"][value="' + parent + '"]',
          $form
        )
          .closest("ul")
          .data("level");
        level++;
        new_checkbox =
          '<ul class="wpt-form-set-children" data-level="' +
          level +
          '">' +
          new_checkbox +
          "</ul>";
        if (isBootstrap) {
          jQuery(new_checkbox).insertAfter($div_fields_wrap);
        } else {
          jQuery(new_checkbox).appendTo($div_fields_wrap);
        }
      } else {
        add_position = $first_checkbox.closest("li");
        jQuery(new_checkbox).insertBefore(add_position);
      }
      jQuery('[name="new_tax_select_' + taxonomy + '"]', $form).show();
    } else if (build_what === "select") {
      jQuery('select[name="' + taxonomy + '[]"]', $form).show();
      var label = "";
      var indent = "";
      var $first_option = jQuery(
        'select[name="' + taxonomy + '[]"]',
        $form
      ).find('option[data-parent="' + parent + '"]:first', $form);
      if ($first_option.length == 0) {
        $first_option = jQuery('select[name="' + taxonomy + '[]"]', $form).find(
          'option[value="' + parent + '"]:first',
          $form
        );
        add_before = false;
        label = $first_option.text();
        for (var i = 0; i < label.length; i++) {
          if (label[i] == "\xA0") {
            indent += "\xA0";
          } else {
            break;
          }
        }
        indent += "\xA0";
        indent += "\xA0";
        add_position = jQuery('select[name="' + taxonomy + '[]"]', $form);
      } else {
        add_position = $first_option;
        label = $first_option.text();
        for (var i = 0; i < label.length; i++) {
          if (label[i] == "\xA0") {
            indent += "\xA0";
          } else {
            break;
          }
        }
      }
      if (add_position) {
        var new_option =
          '<option value="' +
          new_taxonomy +
          '" selected>' +
          indent +
          new_taxonomy +
          "</option>";
        if (add_before) {
          jQuery(new_option).insertBefore(add_position);
        } else {
          jQuery(new_option).appendTo(add_position);
        }
      }
      jQuery('[name="new_tax_select_' + taxonomy + '"]', $form).show();
    }
    self._update_hierachy(taxonomy, new_taxonomy, $form);
    jQuery('[name="new_tax_text_' + taxonomy + '"]', $form).val("");
    self._fill_parent_drop_down($form);
  };
  self._update_hierachy = function (taxonomy, new_taxonomy, $form) {
    var $new_taxonomy_input = jQuery(
      'input[name="' + taxonomy + '_hierarchy"]',
      $form
    );
    if ($new_taxonomy_input.length <= 0) {
      jQuery(
        '<input name="' +
          taxonomy +
          '_hierarchy" style="display:none" type="hidden">'
      ).insertAfter(jQuery('[name="new_tax_text_' + taxonomy + '"]', $form));
      $new_taxonomy_input = jQuery(
        'input[name="' + taxonomy + '_hierarchy"]',
        $form
      );
    }
    if (typeof self._new_taxonomy[taxonomy] === "undefined") {
      self._new_taxonomy[taxonomy] = new Array();
    }
    var parent = jQuery(
      '[name="new_tax_select_' + taxonomy + '"]',
      $form
    ).val();
    self._new_taxonomy[taxonomy].push(parent + "," + new_taxonomy);
    var value = "";
    for (var i = 0; i < self._new_taxonomy[taxonomy].length; i++) {
      value += "{" + self._new_taxonomy[taxonomy][i] + "}";
    }
    value = $new_taxonomy_input.val() + value;
    $new_taxonomy_input.val(value);
  };
  self._flash_it = function ($element) {
    $element.fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
  };
  self.init();
  setTimeout(self.add_taxonomy_controls_bindings, 300);
};
toolsetForms.cred_tax = new toolsetForms.CRED_taxonomy();
jQuery(function () {
  var keyStop = {
    Backspace: ":not(input:text, textarea,  input:file, input:password)",
    Enter: "input:text, input:password",
    end: null,
  };
  jQuery(document).on("keydown", function (event) {
    var $thiz_selector = keyStop[event.key],
      $thiz_target = jQuery(event.target);
    if (
      $thiz_target.closest("form.cred-form").length &&
      $thiz_selector !== undefined &&
      $thiz_target.is($thiz_selector)
    ) {
      event.preventDefault();
    }
    return true;
  });
});
var wptDate = (function ($) {
  var _tempConditions,
    _tempField,
    is_datepicker_style_loaded = false;
  function init(parent, options) {
    if (typeof $.fn.datepicker === "function") {
      $("input.js-wpt-date", $(parent)).each(function (index) {
        if (!$(this).hasClass("hasDatepicker")) {
          if ($(this).attr("id").indexOf("cred_form") != -1) {
            if (
              typeof options !== "undefined" &&
              options.hasOwnProperty("source") &&
              options.source == "cred_form_ready_init"
            ) {
              wptDate.add($(this));
            }
          } else {
            wptDate.add($(this));
          }
        } else {
          wptDate.maybeLoadDatepickerStyle();
        }
      });
    }
    $(document).on("click", ".js-wpt-date-clear", function () {
      var thiz = $(this),
        thiz_close,
        el,
        el_aux,
        el_select;
      if (thiz.closest(".js-wpt-field-item").length > 0) {
        thiz_close = thiz.closest(".js-wpt-field-item");
        el_aux = thiz_close.find(".js-wpt-date-auxiliar");
        el = thiz_close.find(".js-wpt-date");
        el_select = thiz_close.find("select");
      } else if (thiz.closest(".wpt-repctl").length > 0) {
        thiz_close = thiz.closest(".wpt-repctl");
        el_aux = thiz_close.find(".js-wpt-date-auxiliar");
        el = thiz_close.find(".js-wpt-date");
        el_select = thiz_close.find("select");
      } else if (thiz.closest(".js-wpt-field-items").length > 0) {
        thiz_close = thiz.closest(".js-wpt-field-items");
        el_aux = thiz_close.find(".js-wpt-date-auxiliar");
        el = thiz_close.find(".js-wpt-date");
        el_select = thiz_close.find("select");
      } else {
        el_aux = thiz.closest(".js-wpt-field-items");
        el = thiz.closest(".js-wpt-date");
        el_select = thiz.closest("select");
      }
      el_aux.val("").trigger("change").trigger("wptDateSelect");
      el.val("");
      el_select.val("0");
      thiz.hide();
    });
  }
  function add(el) {
    if (el.hasClass("js-wpv-date-readonly")) {
      if (!el.hasClass("js-wpv-date-readonly-added")) {
        el.addClass("js-wpv-date-readonly-added").after(
          '<img src="' +
            wptDateData.readonly_image +
            '" alt="' +
            wptDateData.readonly +
            '" title="' +
            wptDateData.readonly +
            '" class="ui-datepicker-readonly" />'
        );
      }
      return;
    }
    var rand_number = 1 + Math.floor(Math.random() * 150),
      old_id = el.attr("id");
    el.attr("id", old_id + "-" + rand_number);
    wptDate.maybeLoadDatepickerStyle();
    return el.datepicker({
      onSelect: function (dateText, inst) {
        var el_close, el_aux, el_clear;
        el.val("");
        if (el.closest(".js-wpt-field-item").length > 0) {
          el_close = el.closest(".js-wpt-field-item");
          el_aux = el_close.find(".js-wpt-date-auxiliar");
          el_clear = el_close.find(".js-wpt-date-clear");
        } else if (el.closest(".wpt-repctl").length > 0) {
          el_close = el.closest(".wpt-repctl");
          el_aux = el_close.find(".js-wpt-date-auxiliar");
          el_clear = el_close.find(".js-wpt-date-clear");
        } else if (el.closest(".js-wpt-field-items").length > 0) {
          el_close = el.closest(".js-wpt-field-items");
          el_aux = el_close.find(".js-wpt-date-auxiliar");
          el_clear = el_close.find(".js-wpt-date-clear");
        } else {
          el_aux = el.closest(".js-wpt-field-items");
          el_clear = el.closest(".js-wpt-date-clear");
        }
        var data = "date=" + dateText;
        data += "&date-format=" + wptDateData.dateFormatPhp;
        data += "&action=wpt_localize_extended_date";
        $.post(wptDateData.ajaxurl, data, function (response) {
          if (typeof response === "string" || response instanceof String) {
            response = window.JSON.parse(response);
          }
          if (el_aux.length > 0) {
            el_aux.val(response["timestamp"]).trigger("wptDateSelect");
          }
          el.val(response["display"]);
          el_clear.css("display", "inline-block");
          el.prev("small.wpt-form-error").remove();
        });
      },
      showOn: "both",
      buttonImage: wptDateData.buttonImage,
      buttonImageOnly: true,
      buttonText: wptDateData.buttonText,
      dateFormat: "ddmmyy",
      changeMonth: true,
      changeYear: true,
      yearRange: wptDateData.yearMin + ":" + wptDateData.yearMax,
      beforeShow: function (input) {},
    });
  }
  function ajaxConditional(formID, conditions, field) {
    _tempConditions = conditions;
    _tempField = field;
    wptCallbacks.conditionalCheck.add(wptDate.ajaxCheck);
  }
  function ajaxCheck(formID) {
    wptCallbacks.conditionalCheck.remove(wptDate.ajaxCheck);
    wptCond.ajaxCheck(formID, _tempField, _tempConditions);
  }
  function ignoreConditional(val) {
    if ("" == val) {
      return "__ignore_negative";
    }
    return val;
  }
  function bindConditionalChange($trigger, func, formID) {
    $trigger.on("wptDateSelect", func);
    return false;
  }
  function triggerAjax(func) {
    if ($(this).val().length >= wptDateData.dateFormatPhp.length) func();
  }
  function maybeLoadDatepickerStyle() {
    if (!is_datepicker_style_loaded) {
      if (document.getElementById("js-toolset-datepicker-style")) {
        is_datepicker_style_loaded = true;
      } else {
        var head = document.getElementsByTagName("head")[0],
          link = document.createElement("link");
        link.id = "js-toolset-datepicker-style";
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = wptDateData.datepicker_style_url;
        link.media = "all";
        head.appendChild(link);
        is_datepicker_style_loaded = true;
      }
    }
  }
  return {
    init: init,
    add: add,
    ajaxConditional: ajaxConditional,
    ajaxCheck: ajaxCheck,
    ignoreConditional: ignoreConditional,
    bindConditionalChange: bindConditionalChange,
    triggerAjax: triggerAjax,
    maybeLoadDatepickerStyle: maybeLoadDatepickerStyle,
  };
})(jQuery);
jQuery(function () {
  wptDate.init("body");
});
jQuery(document).on("cred_form_ready", function (evt, form_data) {
  wptDate.init("#" + form_data.form_id, { source: "cred_form_ready_init" });
});
if ("undefined" != typeof wptCallbacks) {
  wptCallbacks.reset.add(function (parent) {
    wptDate.init(parent);
  });
  wptCallbacks.addRepetitive.add(wptDate.init);
}
if ("function" == typeof add_filter) {
  add_filter("conditional_value_date", wptDate.ignoreConditional, 10, 1);
}
if ("function" == typeof add_action) {
  add_action(
    "conditional_trigger_bind_date",
    wptDate.bindConditionalChange,
    10,
    3
  );
}
/*!This file is auto-generated*/ !(function (d, l) {
  "use strict";
  var e = !1,
    n = !1;
  if (l.querySelector) if (d.addEventListener) e = !0;
  if (((d.wp = d.wp || {}), !d.wp.receiveEmbedMessage))
    if (
      ((d.wp.receiveEmbedMessage = function (e) {
        var t = e.data;
        if (t)
          if (t.secret || t.message || t.value)
            if (!/[^a-zA-Z0-9]/.test(t.secret)) {
              for (
                var r,
                  i,
                  a,
                  s = l.querySelectorAll(
                    'iframe[data-secret="' + t.secret + '"]'
                  ),
                  n = l.querySelectorAll(
                    'blockquote[data-secret="' + t.secret + '"]'
                  ),
                  o = new RegExp("^https?:$", "i"),
                  c = 0;
                c < n.length;
                c++
              )
                n[c].style.display = "none";
              for (c = 0; c < s.length; c++)
                if (((r = s[c]), e.source === r.contentWindow)) {
                  if ((r.removeAttribute("style"), "height" === t.message)) {
                    if (1e3 < (a = parseInt(t.value, 10))) a = 1e3;
                    else if (~~a < 200) a = 200;
                    r.height = a;
                  }
                  if ("link" === t.message)
                    if (
                      ((i = l.createElement("a")),
                      (a = l.createElement("a")),
                      (i.href = r.getAttribute("src")),
                      (a.href = t.value),
                      o.test(a.protocol))
                    )
                      if (a.host === i.host)
                        if (l.activeElement === r)
                          d.top.location.href = t.value;
                }
            }
      }),
      e)
    )
      d.addEventListener("message", d.wp.receiveEmbedMessage, !1),
        l.addEventListener("DOMContentLoaded", t, !1),
        d.addEventListener("load", t, !1);
  function t() {
    if (!n) {
      n = !0;
      for (
        var e,
          t,
          r = -1 !== navigator.appVersion.indexOf("MSIE 10"),
          i = !!navigator.userAgent.match(/Trident.*rv:11\./),
          a = l.querySelectorAll("iframe.wp-embedded-content"),
          s = 0;
        s < a.length;
        s++
      ) {
        if (!(e = a[s]).getAttribute("data-secret"))
          (t = Math.random().toString(36).substr(2, 10)),
            (e.src += "#?secret=" + t),
            e.setAttribute("data-secret", t);
        if (r || i)
          (t = e.cloneNode(!0)).removeAttribute("security"),
            e.parentNode.replaceChild(t, e);
      }
    }
  }
})(window, document);
!(function (t, n) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = n())
    : "function" == typeof define && define.amd
    ? define(n)
    : ((t = t || self).LazyLoad = n());
})(this, function () {
  "use strict";
  function t() {
    return (t =
      Object.assign ||
      function (t) {
        for (var n = 1; n < arguments.length; n++) {
          var e = arguments[n];
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        }
        return t;
      }).apply(this, arguments);
  }
  var n = "undefined" != typeof window,
    e =
      (n && !("onscroll" in window)) ||
      ("undefined" != typeof navigator &&
        /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
    i = n && "IntersectionObserver" in window,
    a = n && "classList" in document.createElement("p"),
    o = n && window.devicePixelRatio > 1,
    r = {
      elements_selector: "IMG",
      container: e || n ? document : null,
      threshold: 300,
      thresholds: null,
      data_src: "src",
      data_srcset: "srcset",
      data_sizes: "sizes",
      data_bg: "bg",
      data_bg_hidpi: "bg-hidpi",
      data_bg_multi: "bg-multi",
      data_bg_multi_hidpi: "bg-multi-hidpi",
      data_poster: "poster",
      class_applied: "applied",
      class_loading: "loading",
      class_loaded: "loaded",
      class_error: "error",
      unobserve_completed: !0,
      unobserve_entered: !1,
      cancel_on_exit: !1,
      callback_enter: null,
      callback_exit: null,
      callback_applied: null,
      callback_loading: null,
      callback_loaded: null,
      callback_error: null,
      callback_finish: null,
      callback_cancel: null,
      use_native: !1,
    },
    c = function (n) {
      return t({}, r, n);
    },
    l = function (t, n) {
      var e,
        i = new t(n);
      try {
        e = new CustomEvent("LazyLoad::Initialized", {
          detail: { instance: i },
        });
      } catch (t) {
        (e = document.createEvent("CustomEvent")).initCustomEvent(
          "LazyLoad::Initialized",
          !1,
          !1,
          { instance: i }
        );
      }
      window.dispatchEvent(e);
    },
    s = function (t, n) {
      return t.getAttribute("data-" + n);
    },
    u = function (t, n, e) {
      var i = "data-" + n;
      null !== e ? t.setAttribute(i, e) : t.removeAttribute(i);
    },
    d = function (t) {
      return s(t, "ll-status");
    },
    f = function (t, n) {
      return u(t, "ll-status", n);
    },
    _ = function (t) {
      return f(t, null);
    },
    g = function (t) {
      return null === d(t);
    },
    v = function (t) {
      return "native" === d(t);
    },
    b = function (t, n, e, i) {
      t && (void 0 === i ? (void 0 === e ? t(n) : t(n, e)) : t(n, e, i));
    },
    p = function (t, n) {
      a ? t.classList.add(n) : (t.className += (t.className ? " " : "") + n);
    },
    h = function (t, n) {
      a
        ? t.classList.remove(n)
        : (t.className = t.className
            .replace(new RegExp("(^|\\s+)" + n + "(\\s+|$)"), " ")
            .replace(/^\s+/, "")
            .replace(/\s+$/, ""));
    },
    m = function (t) {
      return t.llTempImage;
    },
    E = function (t, n) {
      if (n) {
        var e = n._observer;
        e && e.unobserve(t);
      }
    },
    I = function (t, n) {
      t && (t.loadingCount += n);
    },
    A = function (t, n) {
      t && (t.toLoadCount = n);
    },
    L = function (t) {
      for (var n, e = [], i = 0; (n = t.children[i]); i += 1)
        "SOURCE" === n.tagName && e.push(n);
      return e;
    },
    y = function (t, n, e) {
      e && t.setAttribute(n, e);
    },
    w = function (t, n) {
      t.removeAttribute(n);
    },
    k = function (t) {
      return !!t.llOriginalAttrs;
    },
    z = function (t) {
      if (!k(t)) {
        var n = {};
        (n.src = t.getAttribute("src")),
          (n.srcset = t.getAttribute("srcset")),
          (n.sizes = t.getAttribute("sizes")),
          (t.llOriginalAttrs = n);
      }
    },
    O = function (t) {
      if (k(t)) {
        var n = t.llOriginalAttrs;
        y(t, "src", n.src), y(t, "srcset", n.srcset), y(t, "sizes", n.sizes);
      }
    },
    C = function (t, n) {
      y(t, "sizes", s(t, n.data_sizes)),
        y(t, "srcset", s(t, n.data_srcset)),
        y(t, "src", s(t, n.data_src));
    },
    M = function (t) {
      w(t, "src"), w(t, "srcset"), w(t, "sizes");
    },
    N = function (t, n) {
      var e = t.parentNode;
      e && "PICTURE" === e.tagName && L(e).forEach(n);
    },
    x = function (t, n) {
      L(t).forEach(n);
    },
    R = {
      IMG: function (t, n) {
        N(t, function (t) {
          z(t), C(t, n);
        }),
          z(t),
          C(t, n);
      },
      IFRAME: function (t, n) {
        y(t, "src", s(t, n.data_src));
      },
      VIDEO: function (t, n) {
        x(t, function (t) {
          y(t, "src", s(t, n.data_src));
        }),
          y(t, "poster", s(t, n.data_poster)),
          y(t, "src", s(t, n.data_src)),
          t.load();
      },
    },
    G = function (t, n) {
      var e = R[t.tagName];
      e && e(t, n);
    },
    T = function (t, n, e) {
      I(e, 1),
        p(t, n.class_loading),
        f(t, "loading"),
        b(n.callback_loading, t, e);
    },
    D = {
      IMG: function (t, n) {
        u(t, n.data_src, null),
          u(t, n.data_srcset, null),
          u(t, n.data_sizes, null),
          N(t, function (t) {
            u(t, n.data_srcset, null), u(t, n.data_sizes, null);
          });
      },
      IFRAME: function (t, n) {
        u(t, n.data_src, null);
      },
      VIDEO: function (t, n) {
        u(t, n.data_src, null),
          u(t, n.data_poster, null),
          x(t, function (t) {
            u(t, n.data_src, null);
          });
      },
    },
    F = function (t, n) {
      u(t, n.data_bg_multi, null), u(t, n.data_bg_multi_hidpi, null);
    },
    V = function (t, n) {
      var e = D[t.tagName];
      e
        ? e(t, n)
        : (function (t, n) {
            u(t, n.data_bg, null), u(t, n.data_bg_hidpi, null);
          })(t, n);
    },
    j = ["IMG", "IFRAME", "VIDEO"],
    P = function (t, n) {
      !n ||
        (function (t) {
          return t.loadingCount > 0;
        })(n) ||
        (function (t) {
          return t.toLoadCount > 0;
        })(n) ||
        b(t.callback_finish, n);
    },
    S = function (t, n, e) {
      t.addEventListener(n, e), (t.llEvLisnrs[n] = e);
    },
    U = function (t, n, e) {
      t.removeEventListener(n, e);
    },
    $ = function (t) {
      return !!t.llEvLisnrs;
    },
    q = function (t) {
      if ($(t)) {
        var n = t.llEvLisnrs;
        for (var e in n) {
          var i = n[e];
          U(t, e, i);
        }
        delete t.llEvLisnrs;
      }
    },
    H = function (t, n, e) {
      !(function (t) {
        delete t.llTempImage;
      })(t),
        I(e, -1),
        (function (t) {
          t && (t.toLoadCount -= 1);
        })(e),
        h(t, n.class_loading),
        n.unobserve_completed && E(t, e);
    },
    B = function (t, n, e) {
      var i = m(t) || t;
      $(i) ||
        (function (t, n, e) {
          $(t) || (t.llEvLisnrs = {});
          var i = "VIDEO" === t.tagName ? "loadeddata" : "load";
          S(t, i, n), S(t, "error", e);
        })(
          i,
          function (a) {
            !(function (t, n, e, i) {
              var a = v(n);
              H(n, e, i),
                p(n, e.class_loaded),
                f(n, "loaded"),
                V(n, e),
                b(e.callback_loaded, n, i),
                a || P(e, i);
            })(0, t, n, e),
              q(i);
          },
          function (a) {
            !(function (t, n, e, i) {
              var a = v(n);
              H(n, e, i),
                p(n, e.class_error),
                f(n, "error"),
                b(e.callback_error, n, i),
                a || P(e, i);
            })(0, t, n, e),
              q(i);
          }
        );
    },
    J = function (t, n, e) {
      !(function (t) {
        t.llTempImage = document.createElement("IMG");
      })(t),
        B(t, n, e),
        (function (t, n, e) {
          var i = s(t, n.data_bg),
            a = s(t, n.data_bg_hidpi),
            r = o && a ? a : i;
          r &&
            ((t.style.backgroundImage = 'url("'.concat(r, '")')),
            m(t).setAttribute("src", r),
            T(t, n, e));
        })(t, n, e),
        (function (t, n, e) {
          var i = s(t, n.data_bg_multi),
            a = s(t, n.data_bg_multi_hidpi),
            r = o && a ? a : i;
          r &&
            ((t.style.backgroundImage = r),
            (function (t, n, e) {
              p(t, n.class_applied),
                f(t, "applied"),
                F(t, n),
                n.unobserve_completed && E(t, n),
                b(n.callback_applied, t, e);
            })(t, n, e));
        })(t, n, e);
    },
    K = function (t, n, e) {
      !(function (t) {
        return j.indexOf(t.tagName) > -1;
      })(t)
        ? J(t, n, e)
        : (function (t, n, e) {
            B(t, n, e), G(t, n), T(t, n, e);
          })(t, n, e);
    },
    Q = ["IMG", "IFRAME"],
    W = function (t) {
      return t.use_native && "loading" in HTMLImageElement.prototype;
    },
    X = function (t, n, e) {
      t.forEach(function (t) {
        return (function (t) {
          return t.isIntersecting || t.intersectionRatio > 0;
        })(t)
          ? (function (t, n, e, i) {
              b(e.callback_enter, t, n, i),
                (function (t, n, e) {
                  n.unobserve_entered && E(t, e);
                })(t, e, i),
                (function (t) {
                  return !g(t);
                })(t) || K(t, e, i);
            })(t.target, t, n, e)
          : (function (t, n, e, i) {
              g(t) ||
                ((function (t, n, e, i) {
                  e.cancel_on_exit &&
                    (function (t) {
                      return "loading" === d(t);
                    })(t) &&
                    "IMG" === t.tagName &&
                    (q(t),
                    (function (t) {
                      N(t, function (t) {
                        M(t);
                      }),
                        M(t);
                    })(t),
                    (function (t) {
                      N(t, function (t) {
                        O(t);
                      }),
                        O(t);
                    })(t),
                    h(t, e.class_loading),
                    I(i, -1),
                    _(t),
                    b(e.callback_cancel, t, n, i));
                })(t, n, e, i),
                b(e.callback_exit, t, n, i));
            })(t.target, t, n, e);
      });
    },
    Y = function (t) {
      return Array.prototype.slice.call(t);
    },
    Z = function (t) {
      return t.container.querySelectorAll(t.elements_selector);
    },
    tt = function (t) {
      return (function (t) {
        return "error" === d(t);
      })(t);
    },
    nt = function (t, n) {
      return (function (t) {
        return Y(t).filter(g);
      })(t || Z(n));
    },
    et = function (t, e) {
      var a = c(t);
      (this._settings = a),
        (this.loadingCount = 0),
        (function (t, n) {
          i &&
            !W(t) &&
            (n._observer = new IntersectionObserver(
              function (e) {
                X(e, t, n);
              },
              (function (t) {
                return {
                  root: t.container === document ? null : t.container,
                  rootMargin: t.thresholds || t.threshold + "px",
                };
              })(t)
            ));
        })(a, this),
        (function (t, e) {
          n &&
            window.addEventListener("online", function () {
              !(function (t, n) {
                var e;
                ((e = Z(t)), Y(e).filter(tt)).forEach(function (n) {
                  h(n, t.class_error), _(n);
                }),
                  n.update();
              })(t, e);
            });
        })(a, this),
        this.update(e);
    };
  return (
    (et.prototype = {
      update: function (t) {
        var n,
          a,
          o = this._settings,
          r = nt(t, o);
        A(this, r.length),
          !e && i
            ? W(o)
              ? (function (t, n, e) {
                  t.forEach(function (t) {
                    -1 !== Q.indexOf(t.tagName) &&
                      (t.setAttribute("loading", "lazy"),
                      (function (t, n, e) {
                        B(t, n, e), G(t, n), V(t, n), f(t, "native");
                      })(t, n, e));
                  }),
                    A(e, 0);
                })(r, o, this)
              : ((a = r),
                (function (t) {
                  t.disconnect();
                })((n = this._observer)),
                (function (t, n) {
                  n.forEach(function (n) {
                    t.observe(n);
                  });
                })(n, a))
            : this.loadAll(r);
      },
      destroy: function () {
        this._observer && this._observer.disconnect(),
          Z(this._settings).forEach(function (t) {
            delete t.llOriginalAttrs;
          }),
          delete this._observer,
          delete this._settings,
          delete this.loadingCount,
          delete this.toLoadCount;
      },
      loadAll: function (t) {
        var n = this,
          e = this._settings;
        nt(t, e).forEach(function (t) {
          K(t, e, n);
        });
      },
    }),
    (et.load = function (t, n) {
      var e = c(n);
      K(t, e);
    }),
    (et.resetStatus = function (t) {
      _(t);
    }),
    n &&
      (function (t, n) {
        if (n)
          if (n.length) for (var e, i = 0; (e = n[i]); i += 1) l(t, e);
          else l(t, n);
      })(et, window.lazyLoadOptions),
    et
  );
});
