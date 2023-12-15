(function ensightenInit() {
  var ensightenOptions = {
    client: "choozle",
    clientId: 923,
    publishPath: "15678",
    bootstrapVersion: "v6_20201029",
    isPublic: 0,
    serverComponentLocation:
      "nexus.ensighten.com/choozle/15678/serverComponent.php",
    staticJavascriptPath: "nexus.ensighten.com/choozle/15678/code/",
    ns: "Bootstrapper",
    nexus: "nexus.ensighten.com",
    scUseCacheBuster: "true",
    enableTagAuditBeacon: "false",
    enablePagePerfBeacon: "false",
    registryNs: "ensBootstraps",
    generatedOn: "Mon Nov 29 19:31:38 GMT 2021",
    beaconSamplingSeedValue: 11,
    dataLayerName: "ensDataLayer",
  };
  if (!window[ensightenOptions.ns]) {
    window[ensightenOptions.registryNs] ||
      (window[ensightenOptions.registryNs] = {});
    window[ensightenOptions.registryNs][ensightenOptions.ns] = window[
      ensightenOptions.ns
    ] = (function (h) {
      function n(a) {
        this.name = "DependencyNotAvailableException";
        this.message = "Dependency with id " + a + "is missing";
      }
      function p(a) {
        this.name = "BeaconException";
        this.message = "There was an error durring beacon initialization";
        a = a || {};
        this.lineNumber = a.lineNumber || a.line;
        this.fileName = a.fileName;
      }
      function q() {
        for (var a = d.dataDefinitionIds.length, b = !0, e = 0; e < a; e++) {
          var f = d.dataDefinitions[d.dataDefinitionIds[e]];
          if (!f || null == f.endRegistration) {
            b = !1;
            break;
          }
        }
        b && d.callOnDataDefintionComplete();
      }
      var c = {},
        d = {};
      d.ensightenOptions = ensightenOptions;
      d.scDataObj = {};
      c.version = "1.26.0";
      c.getDynamicDomain = function () {
        for (
          var a = null,
            b = document.getElementsByTagName("script"),
            e = h.client + "/" + h.publishPath + "/Bootstrap.js",
            f = h.client + "/Bootstrap.js",
            g = 0;
          g < b.length;
          g++
        )
          if (
            -1 < b[g].src.indexOf(e) ||
            ("prod" == h.publishPath && -1 < b[g].src.indexOf(f))
          ) {
            a = b[g];
            break;
          }
        return a
          ? ((b = document.createElement("a")),
            (b.href = a.getAttribute("src")),
            b.hostname)
          : "";
      };
      ensightenOptions.nexus = c.nexus =
        ensightenOptions.nexus || c.getDynamicDomain() || "nexus.ensighten.com";
      c.rand = -1;
      c.currSec = new Date().getSeconds();
      c.options = {
        interval: h.interval || 100,
        erLoc: h.errorLocation || c.nexus + "/error/e.gif",
        scLoc:
          h.serverComponentLocation ||
          c.nexus + "/" + h.client + "/serverComponent.php",
        sjPath: h.staticJavascriptPath || c.nexus + "/" + h.client + "/code/",
        alLoc: h.alertLocation || c.nexus + "/alerts/a.gif",
        publishPath: h.publishPath,
        isPublic: h.isPublic,
        client: h.client,
        clientId: h.clientId,
        enableTagAuditBeacon: h.enableTagAuditBeacon,
        beaconSamplingSeedValue: h.beaconSamplingSeedValue || -1,
        dataLayerName: h.dataLayerName || "ensDataLayer",
      };
      c.ruleList = [];
      c.allDeploymentIds = [];
      c.runDeploymentIds = [];
      c.runRuleIds = [];
      c.exceptionList = [];
      c.ensightenVariables = {};
      c.appIdWhitelist = [];
      c.appIdBlacklist = [];
      window[c.options.dataLayerName] &&
        window[c.options.dataLayerName][0] &&
        (window[c.options.dataLayerName][0]["ens.whitelist"] &&
          (c.appIdWhitelist =
            window[c.options.dataLayerName][0]["ens.whitelist"]),
        window[c.options.dataLayerName][0]["ens.blacklist"] &&
          (c.appIdBlacklist =
            window[c.options.dataLayerName][0]["ens.blacklist"]));
      c.canRuleRunByAppId = function (a) {
        return a
          ? (a && !a.appId) ||
            (a && -1 == a.appId) ||
            (0 == c.appIdWhitelist.length && 0 == c.appIdBlacklist.length)
            ? !0
            : 0 < c.appIdWhitelist.length && 0 == c.appIdBlacklist.length
            ? -1 == c.appIdWhitelist.indexOf(a.appId)
              ? !1
              : !0
            : 0 == c.appIdWhitelist.length && 0 < c.appIdBlacklist.length
            ? -1 == c.appIdBlacklist.indexOf(a.appId)
              ? !0
              : !1
            : 0 < c.appIdWhitelist.length &&
              0 < c.appIdBlacklist.length &&
              -1 == c.appIdBlacklist.indexOf(a.appId) &&
              -1 != c.appIdWhitelist.indexOf(a.appId)
            ? !0
            : !1
          : !1;
      };
      c.test = function (a) {
        if (
          c.canRuleRunByAppId(a) &&
          !(
            a.executionData.hasRun ||
            (a.executionData.runTime && 0 < a.executionData.runTime.length)
          )
        ) {
          for (var b = 0; b < a.dependencies.length; b++)
            if (!1 === a.dependencies[b]()) return;
          a.execute();
        }
      };
      n.prototype = Error();
      n.prototype || (n.prototype = {});
      n.prototype.constructor = n;
      c.DependencyNotAvailableException = n;
      p.prototype = Error();
      p.prototype || (p.prototype = {});
      p.prototype.constructor = p;
      c.BeaconException = p;
      c.checkForInvalidDependencies = function (a, b, e, f) {
        for (a = 0; a < e.length; a++)
          if ("DEPENDENCYNEVERAVAILABLE" === e[a])
            return (
              (d.currentRuleId = this.id),
              (d.currentDeploymentId = this.deploymentId),
              d.reportException(new c.DependencyNotAvailableException(f[a])),
              b && -1 !== b && c.allDeploymentIds.push(b),
              !0
            );
        return !1;
      };
      d.currentRuleId = -1;
      d.currentDeploymentId = -1;
      d.reportedErrors = [];
      d.reportedAlerts = [];
      d.AF = [];
      d._serverTime = "";
      d._clientIP = "";
      d.sampleBeacon = function () {
        var a = !1;
        try {
          var b = (c.currSec || 0) % 20,
            e = c.options.beaconSamplingSeedValue;
          -1 === e ? (a = !0) : 0 !== b && 0 === e % b && (a = !0);
        } catch (f) {}
        return a;
      };
      d.getServerComponent = function (a) {
        d.callOnGetServerComponent();
        var b =
          window.location.protocol +
          "//" +
          ("/" == c.options.scLoc.charAt(0) ? c.getDynamicDomain() : "") +
          c.options.scLoc;
        d.insertScript(b, !1, a || !0);
      };
      d.setVariable = function (a, b) {
        c.ensightenVariables[a] = b;
      };
      d.getVariable = function (a) {
        return a in c.ensightenVariables ? c.ensightenVariables[a] : null;
      };
      d.testAll = function () {
        for (var a = 0; a < c.ruleList.length; a++) c.test(c.ruleList[a]);
      };
      d.executionState = {
        DOMParsed: !1,
        DOMLoaded: !1,
        dataDefinitionComplete: !1,
        conditionalRules: !1,
        readyForServerComponent: !1,
      };
      d.reportException = function (a) {
        a.timestamp = new Date().getTime();
        c.exceptionList.push(a);
        a =
          window.location.protocol +
          "//" +
          c.options.erLoc +
          "?msg=" +
          encodeURIComponent(a.message || "") +
          "&lnn=" +
          encodeURIComponent(a.lineNumber || a.line || -1) +
          "&fn=" +
          encodeURIComponent(a.fileName || "") +
          "&cid=" +
          encodeURIComponent(c.options.clientId || -1) +
          "&client=" +
          encodeURIComponent(c.options.client || "") +
          "&publishPath=" +
          encodeURIComponent(c.options.publishPath || "") +
          "&rid=" +
          encodeURIComponent(d.currentRuleId || -1) +
          "&did=" +
          encodeURIComponent(d.currentDeploymentId || -1) +
          "&errorName=" +
          encodeURIComponent(a.name || "");
        a = d.imageRequest(a);
        a.timestamp = new Date().getTime();
        this.reportedErrors.push(a);
      };
      d.Rule = function (a) {
        this.execute = function () {
          this.executionData.runTime.push(new Date());
          d.currentRuleId = this.id;
          d.currentDeploymentId = this.deploymentId;
          try {
            this.code();
          } catch (b) {
            window[ensightenOptions.ns].reportException(b);
          } finally {
            (this.executionData.hasRun = !0),
              -1 !== this.deploymentId &&
                (c.runDeploymentIds.push(this.deploymentId),
                c.runRuleIds.push(this.id)),
              d.testAll();
          }
        };
        this.id = a.id;
        this.deploymentId = a.deploymentId;
        this.dependencies = a.dependencies || [];
        this.code = a.code;
        this.appId = a.appId;
        this.executionData = { hasRun: !1, runTime: [] };
      };
      d.registerRule = function (a) {
        if (d.getRule(a.id) && -1 !== a.id) return !1;
        c.ruleList.push(a);
        -1 !== a.deploymentId && c.allDeploymentIds.push(a.deploymentId);
        d.testAll();
        return !0;
      };
      d.getRule = function (a) {
        for (var b = 0; b < c.ruleList.length; b++)
          if (c.ruleList[b].id === a) return c.ruleList[b];
        return !1;
      };
      d.getRuleList = function () {
        return c.ruleList;
      };
      d.clearRuleList = function () {
        c.ruleList = [];
      };
      d.getAllDeploymentIds = function () {
        return c.allDeploymentIds;
      };
      d.getRunRuleIds = function () {
        return c.runRuleIds;
      };
      d.getRunDeploymentIds = function () {
        return c.runDeploymentIds;
      };
      d.hasRuleRun = function (a) {
        return (a = d.getRule(a)) ? a.executionData.hasRun : !1;
      };
      c.toTwoChar = function (a) {
        return (2 === a.toString().length ? "" : "0") + a;
      };
      d.Alert = function (a) {
        var b = new Date();
        b =
          b.getFullYear() +
          "-" +
          c.toTwoChar(b.getMonth()) +
          "-" +
          c.toTwoChar(b.getDate()) +
          " " +
          c.toTwoChar(b.getHours()) +
          ":" +
          c.toTwoChar(b.getMinutes()) +
          ":" +
          c.toTwoChar(b.getSeconds());
        this.severity = a.severity || 1;
        this.subject = a.subject || "";
        this.type = a.type || 1;
        this.ruleId = a.ruleId || -1;
        this.severity = encodeURIComponent(this.severity);
        this.date = encodeURIComponent(b);
        this.subject = encodeURIComponent(this.subject);
        this.type = encodeURIComponent(this.type);
      };
      d.generateAlert = function (a) {
        a = d.imageRequest(
          window.location.protocol +
            "//" +
            c.options.alLoc +
            "?d=" +
            a.date +
            "&su=" +
            a.subject +
            "&se=" +
            a.severity +
            "&t=" +
            a.type +
            "&cid=" +
            c.options.clientId +
            "&client=" +
            c.options.client +
            "&publishPath=" +
            c.options.publishPath +
            "&rid=" +
            d.currentRuleId +
            "&did=" +
            d.currentDeploymentId
        );
        a.timestamp = new Date().getTime();
        this.reportedAlerts.push(a);
      };
      d.imageRequest = function (a) {
        var b = new Image(0, 0);
        b.src = a;
        return b;
      };
      d.insertScript = function (a, b, e) {
        var f = document.getElementsByTagName("script"),
          g;
        if (void 0 !== b ? b : 1)
          for (g = 0; g < f.length; g++)
            if (
              f[g].src === a &&
              f[g].readyState &&
              /loaded|complete/.test(f[g].readyState)
            )
              return;
        if (e) {
          e = 1 == e && "object" == typeof d.scDataObj ? d.scDataObj : e;
          c.rand = Math.random() * ("1E" + (10 * Math.random()).toFixed(0));
          b = window.location.href;
          "object" === typeof e &&
            e.PageID &&
            ((b = e.PageID), delete e.PageID);
          if ("object" === typeof e)
            for (g in e) {
              g = ~b.indexOf("#") ? b.slice(b.indexOf("#"), b.length) : "";
              b = b.slice(0, g.length ? b.length - g.length : b.length);
              b += ~b.indexOf("?") ? "&" : "?";
              for (k in e) b += k + "=" + e[k] + "&";
              b = b.slice(0, -1) + g;
              break;
            }
          a = a + "?namespace=" + (ensightenOptions.ns + "&");
          a += "staticJsPath=" + ensightenOptions.staticJavascriptPath + "&";
          a += "publishedOn=" + ensightenOptions.generatedOn + "&";
          a +=
            "ClientID=" +
            encodeURIComponent(c.options.clientId) +
            "&PageID=" +
            encodeURIComponent(b) +
            ("/" == c.options.scLoc.charAt(0)
              ? "&custDomain=" + c.getDynamicDomain()
              : "");
        }
        (function (l, m, r) {
          var t = m.head || m.getElementsByTagName("head");
          setTimeout(function () {
            if ("item" in t) {
              if (!t[0]) {
                setTimeout(arguments.callee, 25);
                return;
              }
              t = t[0];
            }
            var u = m.createElement("script");
            u.src = r;
            u.onload = u.onerror = function () {
              this.addEventListener && (this.readyState = "loaded");
            };
            t.insertBefore(u, t.firstChild);
          }, 0);
        })(window, document, a);
      };
      d.loadScriptCallback = function (a, b, e) {
        var f = document.getElementsByTagName("script"),
          g = f[0];
        if (e)
          for (e = 0; e < f.length; e++)
            if (
              f[e].src === a &&
              f[e].readyState &&
              /loaded|complete/.test(f[e].readyState)
            )
              try {
                b();
              } catch (l) {
                window[ensightenOptions.ns].reportException(l);
              } finally {
                return;
              }
        f = document.createElement("script");
        f.type = "text/javascript";
        f.async = !0;
        f.src = a;
        f.onerror = function () {
          this.addEventListener && (this.readyState = "loaded");
        };
        f.onload = f.onreadystatechange = function () {
          if (
            !this.readyState ||
            "complete" === this.readyState ||
            "loaded" === this.readyState
          ) {
            this.onload = this.onreadystatechange = null;
            this.addEventListener && (this.readyState = "loaded");
            try {
              b.call(this);
            } catch (l) {
              window[ensightenOptions.ns].reportException(l);
            }
          }
        };
        g.parentNode.insertBefore(f, g);
      };
      d.insertPageFiles = function (a) {
        var b = 0,
          e = 0,
          f = function () {
            e == a.length - 1 &&
              window[ensightenOptions.ns].callOnPageSpecificCompletion();
            e++;
          };
        for (b = 0; b < a.length; ++b)
          window[ensightenOptions.ns].loadScriptCallback(a[b], f);
      };
      d.unobtrusiveAddEvent = function (a, b, e) {
        try {
          var f = a[b] ? a[b] : function () {};
          a[b] = function () {
            e.apply(this, arguments);
            return f.apply(this, arguments);
          };
        } catch (g) {
          window[ensightenOptions.ns].reportException(g);
        }
      };
      d.anonymous = function (a, b) {
        return function () {
          try {
            (d.currentRuleId = b ? b : "anonymous"), a();
          } catch (e) {
            window[ensightenOptions.ns].reportException(e);
          }
        };
      };
      d.setCurrentRuleId = function (a) {
        d.currentRuleId = a;
      };
      d.setCurrentDeploymentId = function (a) {
        d.currentDeploymentId = a;
      };
      c.bind = function (a, b, e, f, g) {
        if ("function" === typeof a)
          a = new d.Rule({
            id: b || -1,
            deploymentId: e || -1,
            appId: f || -1,
            dependencies:
              "immediate" == g
                ? []
                : [
                    function () {
                      return window[ensightenOptions.ns].executionState[g];
                    },
                  ],
            code: a,
          });
        else if ("object" !== typeof a) return !1;
        d.registerRule(a);
      };
      d.bindImmediate = function (a, b, e, f) {
        c.bind(a, b, e, f, "immediate");
      };
      d.bindDOMParsed = function (a, b, e, f) {
        c.bind(a, b, e, f, "DOMParsed");
      };
      d.bindDOMLoaded = function (a, b, e, f) {
        c.bind(a, b, e, f, "DOMLoaded");
      };
      d.bindPageSpecificCompletion = function (a, b, e, f) {
        c.bind(a, b, e, f, "conditionalRules");
      };
      d.bindOnGetServerComponent = function (a, b, e, f) {
        c.bind(a, b, e, f, "readyForServerComponent");
      };
      d.bindDataDefinitionComplete = function (a, b, e, f) {
        c.bind(a, b, e, f, "dataDefinitionComplete");
      };
      d.checkHasRun = function (a) {
        if (0 === a.length) return !0;
        for (var b, e = 0; e < a.length; ++e)
          if (
            ((b = d.getRule(parseInt(a[e], 10))), !b || !b.executionData.hasRun)
          )
            return !1;
        return !0;
      };
      c.bindDependency = function (a, b, e, f, g, l, m) {
        var r = [];
        if (!c.checkForInvalidDependencies(b, f, e, g)) {
          "immediate" == !m &&
            r.push(function () {
              return window[ensightenOptions.ns].executionState[m];
            });
          r.push(function () {
            return window[ensightenOptions.ns].checkHasRun(e);
          });
          if ("function" === typeof a)
            a = new d.Rule({
              id: b || -1,
              deploymentId: f || -1,
              appId: l || -1,
              dependencies: r,
              code: a,
            });
          else if ("object" !== typeof a) return !1;
          d.registerRule(a);
        }
      };
      d.bindDependencyImmediate = function (a, b, e, f, g, l) {
        c.bindDependency(a, b, e, f, g, l, "immediate");
      };
      d.bindDependencyDOMLoaded = function (a, b, e, f, g, l) {
        c.bindDependency(a, b, e, f, g, l, "DOMLoaded");
      };
      d.bindDependencyDOMParsed = function (a, b, e, f, g, l) {
        c.bindDependency(a, b, e, f, g, l, "DOMParsed");
      };
      d.bindDependencyPageSpecificCompletion = function (a, b, e, f, g, l) {
        c.bindDependency(a, b, e, f, g, l, "conditionalRules");
      };
      d.bindDependencyOnGetServerComponent = function (a, b, e, f, g, l) {
        c.bindDependency(a, b, e, f, g, l, "readyForServerComponent");
      };
      d.bindDependencyDataDefinitionComplete = function (a, b, e, f, g, l) {
        c.bindDependency(a, b, e, f, g, l, "dataDefinitionComplete");
      };
      d.dataDefintionIds = [];
      d.dataDefinitions = [];
      d.pageSpecificDataDefinitionsSet = !1;
      d.setPageSpecificDataDefinitionIds = function (a) {
        for (var b = a ? a.length : 0, e = 0; e < b; e++) {
          var f = a[e];
          if (Array.prototype.indexOf)
            -1 == d.dataDefinitionIds.indexOf(f) && d.dataDefinitionIds.push(f);
          else {
            for (var g = !1, l = d.dataDefinitionIds.length, m = 0; m < l; m++)
              if (d.dataDefinitionIds[m] === f) {
                g = !0;
                break;
              }
            g || d.dataDefinitionIds.push(f);
          }
        }
        d.pageSpecificDataDefinitionsSet = !0;
        q();
      };
      d.DataDefinition = function (a, b) {
        this.id = a;
        this.registrationFn = b;
        this.endRegistrationTime = this.startRegistrationTime = null;
        this.startRegistration = function () {
          this.startRegistrationTime = new Date();
        };
        this.endRegistration = function () {
          this.endRegistrationTime = new Date();
        };
      };
      d.registerDataDefinition = function (a, b) {
        var e = d.dataDefinitions[b];
        e || ((e = new d.DataDefinition(b, a)), (d.dataDefinitions[b] = e));
        e.startRegistrationTime ||
          (e.startRegistration(), e.registrationFn(), e.endRegistration());
        d.pageSpecificDataDefinitionsSet && q();
      };
      d.callOnDataDefintionComplete = function () {
        d.executionState.dataDefinitionComplete = !0;
        d.testAll();
      };
      d.callOnDOMParsed = function () {
        window[ensightenOptions.ns].executionState.DOMParsed = !0;
        window[ensightenOptions.ns].testAll();
      };
      d.callOnDOMLoaded = function () {
        window[ensightenOptions.ns].executionState.DOMParsed = !0;
        window[ensightenOptions.ns].executionState.DOMLoaded = !0;
        window[ensightenOptions.ns].testAll();
      };
      d.callOnPageSpecificCompletion = function () {
        for (
          var a = document.getElementsByTagName("script"), b = 0, e = a.length;
          b < e;
          b++
        )
          if (
            a[b].src &&
            a[b].src.match(/\.ensighten\.com\/(.+?)\/code\/.*/i) &&
            "loaded" != a[b].readyState &&
            "complete" != a[b].readyState
          ) {
            setTimeout(
              window[ensightenOptions.ns].callOnPageSpecificCompletion,
              50
            );
            return;
          }
        setTimeout(function () {
          window[ensightenOptions.ns].executionState.conditionalRules = !0;
          window[ensightenOptions.ns].testAll();
        }, 1);
      };
      d.callOnGetServerComponent = function () {
        window[ensightenOptions.ns].executionState.readyForServerComponent = !0;
        window[ensightenOptions.ns].testAll();
      };
      d.hasDOMParsed = function () {
        return window[ensightenOptions.ns].executionState.DOMParsed;
      };
      d.hasDOMLoaded = function () {
        return window[ensightenOptions.ns].executionState.DOMLoaded;
      };
      d.hasPageSpecificCompletion = function () {
        return window[ensightenOptions.ns].executionState.conditionalRules;
      };
      var v = function () {
        var a = [],
          b = !1,
          e = !1;
        return {
          add: function (f) {
            b && !e ? f() : "function" == typeof f && (a[a.length] = f);
          },
          exec: function () {
            e = !0;
            do {
              var f = a;
              a = [];
              b = !0;
              for (var g = 0; g < f.length; g++)
                try {
                  f[g].call(window);
                } catch (l) {
                  window[ensightenOptions.ns].reportException(l);
                }
            } while (0 < a.length);
            e = !1;
          },
          haveRun: function () {
            return b;
          },
        };
      };
      d.new_fArray = function () {
        return v();
      };
      c.timer = null;
      (function () {
        function a(f, g) {
          return function () {
            f.apply(g, arguments);
          };
        }
        window.console || (window.console = {});
        var b = window.console;
        if (!b.log)
          if (window.log4javascript) {
            var e = log4javascript.getDefaultLogger();
            b.log = a(e.info, e);
            b.debug = a(e.debug, e);
            b.info = a(e.info, e);
            b.warn = a(e.warn, e);
            b.error = a(e.error, e);
          } else b.log = function () {};
        b.debug || (b.debug = b.log);
        b.info || (b.info = b.log);
        b.warn || (b.warn = b.log);
        b.error || (b.error = b.log);
      })();
      document.addEventListener
        ? (-1 < navigator.userAgent.indexOf("AppleWebKit/")
            ? (c.timer = window.setInterval(function () {
                /loaded|interactive|complete/.test(document.readyState) &&
                  (clearInterval(c.timer), d.callOnDOMParsed());
              }, 50))
            : document.addEventListener(
                "DOMContentLoaded",
                d.callOnDOMParsed,
                !1
              ),
          window.addEventListener("load", d.callOnDOMLoaded, !1))
        : (setTimeout(function () {
            var a = window.document;
            (function () {
              try {
                if (!document.body) throw "continue";
                a.documentElement.doScroll("left");
              } catch (b) {
                setTimeout(arguments.callee, 15);
                return;
              }
              window[ensightenOptions.ns].callOnDOMParsed();
            })();
          }, 1),
          window.attachEvent("onload", function () {
            window[ensightenOptions.ns].callOnDOMLoaded();
          }));
      document.readyState &&
        "complete" === document.readyState &&
        ((d.executionState.DOMParsed = !0), (d.executionState.DOMLoaded = !0));
      "true" === c.options.enableTagAuditBeacon &&
        d.sampleBeacon() &&
        window.setTimeout(function () {
          if (
            window[ensightenOptions.ns] &&
            !window[ensightenOptions.ns].mobilePlatform
          )
            try {
              for (var a = [], b, e, f, g, l = 0; l < c.ruleList.length; ++l)
                (e = c.ruleList[l]),
                  (f = e.executionData.hasRun ? "1" : "0"),
                  (g =
                    e.deploymentId.toString() +
                    "|" +
                    e.id.toString() +
                    "|" +
                    f),
                  a.push(g);
              b = "[" + a.join(";") + "]";
              var m =
                window.location.protocol +
                "//" +
                c.nexus +
                "/" +
                encodeURIComponent(h.client) +
                "/" +
                encodeURIComponent(h.publishPath) +
                "/TagAuditBeacon.rnc?cid=" +
                encodeURIComponent(h.clientId) +
                "&data=" +
                b +
                "&idx=0&r=" +
                c.rand;
              d.imageRequest(m);
            } catch (r) {
              (d.currentRuleId = -1),
                (d.currentDeploymentId = -1),
                (a = new c.BeaconException(r)),
                window[ensightenOptions.ns].reportException(a);
            }
        }, 3e3);
      window.setInterval(d.testAll, c.options.interval);
      return d;
    })(ensightenOptions);
    "true" === ensightenOptions.enablePagePerfBeacon &&
      window[ensightenOptions.ns] &&
      window[ensightenOptions.ns].sampleBeacon() &&
      window[ensightenOptions.ns].bindDOMParsed(function () {
        if (!window[ensightenOptions.ns].mobilePlatform) {
          var h = window.performance;
          if (h) {
            h = h.timing || {};
            var n = h.navigationStart || 0,
              p = {
                connectEnd: "ce",
                connectStart: "cs",
                domComplete: "dc",
                domContentLoadedEventEnd: "dclee",
                domContentLoadedEventStart: "dcles",
                domInteractive: "di",
                domLoading: "dl",
                domainLookupEnd: "dle",
                domainLookupStart: "dls",
                fetchStart: "fs",
                loadEventEnd: "lee",
                loadEventStart: "les",
                redirectEnd: "rede",
                redirectStart: "reds",
                requestStart: "reqs",
                responseStart: "resps",
                responseEnd: "respe",
                secureConnectionStart: "scs",
                unloadEventStart: "ues",
                unloadEventEnd: "uee",
              };
            var q = "&ns=" + encodeURIComponent(h.navigationStart);
            for (var c in p)
              if (void 0 !== h[c]) {
                var d = h[c] - n;
                q += "&" + p[c] + "=" + (0 < d ? encodeURIComponent(d) : 0);
              } else q += "&" + p[c] + "=-1";
            window[ensightenOptions.ns].timing = q;
            c = ensightenOptions.nexus || "nexus.ensighten.com";
            h = ensightenOptions.staticJavascriptPath || "";
            q = h.indexOf("/", 0);
            n = h.indexOf("/code/");
            h = h.substring(q, n) + "/perf.rnc";
            h +=
              "?cid=" +
              encodeURIComponent(ensightenOptions.clientId) +
              window[ensightenOptions.ns].timing;
            window[ensightenOptions.ns].imageRequest("//" + c + h);
          }
        }
      });

    window[ensightenOptions.ns].ensEvent ||
      ((window[ensightenOptions.ns].ensEvent = (function (p, u) {
        var k = {
          queue: {},
          pollQueue: {},
          pushTrigger: function (a, c) {
            if ("[object Array]" === Object.prototype.toString.call(a)) {
              for (var g = 0; g < a.length; g++) k.pushTrigger(a[g], c);
              return !0;
            }
            if ("string" != typeof a) return !1;
            this.queue[a] = this.queue[a] || { fn: [] };
            "function" == typeof c && this.queue[a].fn.push(c);
            return !0;
          },
          callTrigger: function (a, c, g) {
            if ("string" != typeof a) return !1;
            a = k.queue[a];
            if (
              "object" == typeof a &&
              a.fn &&
              a.fn.length &&
              ((0 != a.fireOnFirstSet && c == u) ||
                (c != u && 0 != a.fireOnUpdate))
            )
              for (c = 0; c < a.fn.length; c++)
                try {
                  a.fn[c].call(this);
                } catch (n) {
                  p[ensightenOptions.ns].reportException(n);
                }
          },
          setPollOptions: function (a, c, g) {
            this.queue[a] = this.queue[a] || { fn: [] };
            this.queue[a].fireOnFirstSet = c;
            this.queue[a].fireOnUpdate = g;
          },
          callPoll: function (a, c, g, p, r) {
            if ("string" == typeof a && c && c.length && !(1 > c.length)) {
              for (var n = 0; n < c.length; n++) k.setPollOptions(c[n], p, r);
              k.pushWatch(a, c, g);
            }
          },
          pushWatch: function (a, c, g) {
            this.pollQueue[a] ||
              (this.pollQueue[a] = {
                previousVal: u,
                eventArr: [],
                valueFn: g,
              });
            this.pollQueue[a].eventArr = this.pollQueue[a].eventArr.concat(c);
            this.pollQueue[a].valueFn = g;
          },
          globalWatch: function () {
            setInterval(function () {
              for (var a in k.pollQueue) {
                var c = k.pollQueue[a],
                  g = c.valueFn(a);
                if (c.previousVal !== g && null !== g && "" !== g) {
                  for (var n = 0; n < c.eventArr.length; n++)
                    k.callTrigger.call(p, c.eventArr[n], c.previousVal, g);
                  k.pollQueue[a].previousVal = g;
                }
              }
            }, 500);
          },
        };
        k.globalWatch();
        return {
          add: function (a, c) {
            return k.pushTrigger(a, c);
          },
          get: function (a) {
            return k.queue[a];
          },
          trigger: function (a, c) {
            return k.callTrigger.call(c || p, a);
          },
          poll: function (a, c, g, n, r) {
            r = r || p[ensightenOptions.ns].data.resolve;
            return k.callPoll(a, c, r, g, n);
          },
        };
      })(window)),
      (function (p, u, k) {
        u[p] = k();
      })("qwery", window[ensightenOptions.ns], function () {
        function p() {
          this.c = {};
        }
        function u(b) {
          return H.g(b) || H.s(b, "(^|\\s+)" + b + "(\\s+|$)", 1);
        }
        function k(b, d) {
          for (var e = 0, f = b.length; e < f; e++) d(b[e]);
        }
        function a(b) {
          for (var d = [], e = 0, f = b.length; e < f; ++e)
            l(b[e]) ? (d = d.concat(b[e])) : (d[d.length] = b[e]);
          return d;
        }
        function c(b) {
          for (var d = 0, e = b.length, f = []; d < e; d++) f[d] = b[d];
          return f;
        }
        function g(b) {
          for (; (b = b.previousSibling) && 1 != b.nodeType; );
          return b;
        }
        function n(b, d, e, f, a, h, l, c, g, k, y) {
          var I, B, m;
          if (
            1 !== this.nodeType ||
            (d &&
              "*" !== d &&
              this.tagName &&
              this.tagName.toLowerCase() !== d) ||
            (e && (I = e.match(Q)) && I[1] !== this.id)
          )
            return !1;
          if (e && (m = e.match(R)))
            for (b = m.length; b--; )
              if (!u(m[b].slice(1)).test(this.className)) return !1;
          if (g && v.pseudos[g] && !v.pseudos[g](this, y)) return !1;
          if (f && !l)
            for (B in ((g = this.attributes), g))
              if (
                Object.prototype.hasOwnProperty.call(g, B) &&
                (g[B].name || B) == a
              )
                return this;
          return f && !x(h, S(this, a) || "", l) ? !1 : this;
        }
        function r(b) {
          return J.g(b) || J.s(b, b.replace(T, "\\$1"));
        }
        function x(b, d, e) {
          switch (b) {
            case "=":
              return d == e;
            case "^=":
              return d.match(w.g("^=" + e) || w.s("^=" + e, "^" + r(e), 1));
            case "$=":
              return d.match(w.g("$=" + e) || w.s("$=" + e, r(e) + "$", 1));
            case "*=":
              return d.match(w.g(e) || w.s(e, r(e), 1));
            case "~=":
              return d.match(
                w.g("~=" + e) ||
                  w.s("~=" + e, "(?:^|\\s+)" + r(e) + "(?:\\s+|$)", 1)
              );
            case "|=":
              return d.match(
                w.g("|=" + e) || w.s("|=" + e, "^" + r(e) + "(-|$)", 1)
              );
          }
          return 0;
        }
        function q(b, d) {
          var e = [],
            f = [],
            a,
            h,
            l = d,
            c = C.g(b) || C.s(b, b.split(K)),
            g = b.match(L);
          if (!c.length) return e;
          var m = (c = c.slice(0)).pop();
          c.length && (a = c[c.length - 1].match(M)) && (l = N(d, a[1]));
          if (!l) return e;
          var y = m.match(E);
          var v =
            l !== d && 9 !== l.nodeType && g && /^[+~]$/.test(g[g.length - 1])
              ? (function (b) {
                  for (; (l = l.nextSibling); )
                    1 == l.nodeType &&
                      (y[1] ? y[1] == l.tagName.toLowerCase() : 1) &&
                      (b[b.length] = l);
                  return b;
                })([])
              : l.getElementsByTagName(y[1] || "*");
          a = 0;
          for (m = v.length; a < m; a++)
            if ((h = n.apply(v[a], y))) e[e.length] = h;
          if (!c.length) return e;
          k(e, function (b) {
            t(b, c, g) && (f[f.length] = b);
          });
          return f;
        }
        function t(b, d, e, a) {
          function l(b, a, c) {
            for (; (c = U[e[a]](c, b)); )
              if (f(c) && n.apply(c, d[a].match(E)))
                if (a) {
                  if ((h = l(c, a - 1, c))) return h;
                } else return c;
          }
          var h;
          return (h = l(b, d.length - 1, b)) && (!a || z(h, a));
        }
        function f(b, d) {
          return (
            b && "object" === typeof b && (d = b.nodeType) && (1 == d || 9 == d)
          );
        }
        function h(b) {
          var d = [],
            e;
          var f = 0;
          a: for (; f < b.length; ++f) {
            for (e = 0; e < d.length; ++e) if (d[e] == b[f]) continue a;
            d[d.length] = b[f];
          }
          return d;
        }
        function l(b) {
          return "object" === typeof b && isFinite(b.length);
        }
        function N(b, d, e) {
          return 9 === b.nodeType
            ? b.getElementById(d)
            : b.ownerDocument &&
                (((e = b.ownerDocument.getElementById(d)) && z(e, b) && e) ||
                  (!z(b, b.ownerDocument) && F('[id="' + d + '"]', b)[0]));
        }
        function v(b, d) {
          var e, h;
          var g = d
            ? "string" == typeof d
              ? v(d)[0]
              : !d.nodeType && l(d)
              ? d[0]
              : d
            : m;
          if (!g || !b) return [];
          if (b === window || f(b))
            return !d || (b !== window && f(g) && z(b, g)) ? [b] : [];
          if (b && l(b)) return a(b);
          if ((e = b.match(V))) {
            if (e[1]) return (h = N(g, e[1])) ? [h] : [];
            if (e[2]) return c(g.getElementsByTagName(e[2]));
            if (W && e[3]) return c(g.getElementsByClassName(e[3]));
          }
          return F(b, g);
        }
        function y(b, d) {
          return function (e) {
            var f, a;
            O.test(e)
              ? 9 !== b.nodeType &&
                ((a = f = b.getAttribute("id")) ||
                  b.setAttribute("id", (a = "__qwerymeupscotty")),
                d(b.parentNode || b, '[id="' + a + '"]' + e, !0),
                f || b.removeAttribute("id"))
              : e.length && d(b, e, !1);
          };
        }
        var m = document,
          D = m.documentElement,
          F,
          Q = /#([\w\-]+)/,
          R = /\.[\w\-]+/g,
          M = /^#([\w\-]+)$/,
          X = /^([\w]+)?\.([\w\-]+)$/,
          O = /(^|,)\s*[>~+]/,
          Y = /^\s+|\s*([,\s\+~>]|$)\s*/g,
          A = /[\s>\+~]/,
          P = /(?![\s\w\-\/\?&=:\.\(\)!,@#%<>\{\}\$\*\^'"]*\]|[\s\w\+\-]*\))/,
          T = /([.*+?\^=!:${}()|\[\]\/\\])/g,
          V = new RegExp(
            M.source + "|" + /^([\w\-]+)$/.source + "|" + /^\.([\w\-]+)$/.source
          ),
          L = new RegExp("(" + A.source + ")" + P.source, "g"),
          K = new RegExp(A.source + P.source),
          E = new RegExp(
            /^(\*|[a-z0-9]+)?(?:([\.#]+[\w\-\.#]+)?)/.source +
              "(" +
              /\[([\w\-]+)(?:([\|\^\$\*~]?=)['"]?([ \w\-\/\?&=:\.\(\)!,@#%<>\{\}\$\*\^]+)["']?)?\]/
                .source +
              ")?(" +
              /:([\w\-]+)(\(['"]?([^()]+)['"]?\))?/.source +
              ")?"
          ),
          U = {
            " ": function (b) {
              return b && b !== D && b.parentNode;
            },
            ">": function (b, d) {
              return b && b.parentNode == d.parentNode && b.parentNode;
            },
            "~": function (b) {
              return b && b.previousSibling;
            },
            "+": function (b, d, e, f) {
              return b ? (e = g(b)) && (f = g(d)) && e == f && e : !1;
            },
          };
        p.prototype = {
          g: function (b) {
            return this.c[b] || void 0;
          },
          s: function (b, d, e) {
            d = e ? new RegExp(d) : d;
            return (this.c[b] = d);
          },
        };
        var H = new p(),
          J = new p(),
          w = new p(),
          C = new p(),
          z =
            "compareDocumentPosition" in D
              ? function (b, d) {
                  return 16 == (d.compareDocumentPosition(b) & 16);
                }
              : "contains" in D
              ? function (b, d) {
                  d = 9 === d.nodeType || d == window ? D : d;
                  return d !== b && d.contains(b);
                }
              : function (b, d) {
                  for (; (b = b.parentNode); ) if (b === d) return 1;
                  return 0;
                },
          S = (function () {
            var b = m.createElement("p");
            return ((b.innerHTML = '<a href="#x">x</a>'),
            "#x" != b.firstChild.getAttribute("href"))
              ? function (b, e) {
                  return "class" === e
                    ? b.className
                    : "href" === e || "src" === e
                    ? b.getAttribute(e, 2)
                    : b.getAttribute(e);
                }
              : function (b, e) {
                  return b.getAttribute(e);
                };
          })(),
          W = !!m.getElementsByClassName,
          Z = m.querySelector && m.querySelectorAll,
          aa = function (b, d) {
            var e = [],
              f,
              a;
            try {
              if (9 === d.nodeType || !O.test(b))
                return c(d.querySelectorAll(b));
              k(
                (f = b.split(",")),
                y(d, function (b, d) {
                  a = b.querySelectorAll(d);
                  1 == a.length
                    ? (e[e.length] = a.item(0))
                    : a.length && (e = e.concat(c(a)));
                })
              );
              return 1 < f.length && 1 < e.length ? h(e) : e;
            } catch (ba) {}
            return G(b, d);
          },
          G = function (b, d) {
            var e = [],
              f,
              a;
            b = b.replace(Y, "$1");
            if ((f = b.match(X))) {
              var l = u(f[2]);
              f = d.getElementsByTagName(f[1] || "*");
              var c = 0;
              for (a = f.length; c < a; c++)
                l.test(f[c].className) && (e[e.length] = f[c]);
              return e;
            }
            k(
              (f = b.split(",")),
              y(d, function (b, f, h) {
                l = q(f, b);
                c = 0;
                for (a = l.length; c < a; c++)
                  if (9 === b.nodeType || h || z(l[c], d)) e[e.length] = l[c];
              })
            );
            return 1 < f.length && 1 < e.length ? h(e) : e;
          };
        A = function (b) {
          "undefined" !== typeof b.useNativeQSA &&
            (F = b.useNativeQSA ? (Z ? aa : G) : G);
        };
        A({ useNativeQSA: !0 });
        v.configure = A;
        v.uniq = h;
        v.is = function (b, d, e) {
          if (f(d)) return b == d;
          if (l(d)) return !!~a(d).indexOf(b);
          for (var c = d.split(","), h; (d = c.pop()); )
            if (
              ((h = C.g(d) || C.s(d, d.split(K))),
              (d = d.match(L)),
              (h = h.slice(0)),
              n.apply(b, h.pop().match(E)) && (!h.length || t(b, h, d, e)))
            )
              return !0;
          return !1;
        };
        v.pseudos = {};
        return v;
      }),
      (function () {
        function p(f, a, c) {
          n || (n = window[ensightenOptions.ns].qwery);
          var h = n;
          if ((h = h.call(c, a, c)) && 0 < h.length) {
            if ("_root" == a) f = c;
            else if (f === c) f = void 0;
            else {
              b: {
                for (var l = h.length, g = 0; g < l; g++)
                  if (f === h[g]) {
                    h = !0;
                    break b;
                  }
                h = !1;
              }
              h ||
                (f.parentNode
                  ? (r++, (f = p(f.parentNode, a, c)))
                  : (f = void 0));
            }
            return f;
          }
          return !1;
        }
        function u(f, a, c, g) {
          q[f.id] || (q[f.id] = {});
          q[f.id][a] || (q[f.id][a] = {});
          q[f.id][a][c] || (q[f.id][a][c] = []);
          q[f.id][a][c].push(g);
        }
        function k(f, a, c, g) {
          if (g || c)
            if (g)
              for (var h = 0; h < q[f.id][a][c].length; h++) {
                if (q[f.id][a][c][h] === g) {
                  q[f.id][a][c].pop(h, 1);
                  break;
                }
              }
            else delete q[f.id][a][c];
          else q[f.id][a] = {};
        }
        function a(a, c, l) {
          if (q[a][l]) {
            var f = c.target || c.srcElement,
              h,
              k,
              m = {},
              n = (k = 0);
            r = 0;
            for (h in q[a][l])
              q[a][l].hasOwnProperty(h) &&
                (k = p(f, h, t[a].element)) &&
                g.matchesEvent(l, t[a].element, k, "_root" == h, c) &&
                (r++, (q[a][l][h].match = k), (m[r] = q[a][l][h]));
            c.stopPropagation = function () {
              c.cancelBubble = !0;
            };
            for (k = 0; k <= r; k++)
              if (m[k])
                for (n = 0; n < m[k].length; n++) {
                  if (!1 === m[k][n].call(m[k].match, c)) {
                    g.cancel(c);
                    return;
                  }
                  if (c.cancelBubble) return;
                }
          }
        }
        function c(c, h, l, n) {
          function f(c) {
            return function (f) {
              a(p, f, c);
            };
          }
          c instanceof Array || (c = [c]);
          l || "function" != typeof h || ((l = h), (h = "_root"));
          var p = this.id,
            m;
          for (m = 0; m < c.length; m++)
            (q[p] && q[p][c[m]]) || g.addEvent(this, c[m], f(c[m])),
              n ? k(this, c[m], h, l) : u(this, c[m], h, l);
          return this;
        }
        function g(a, c, l, k) {
          if (
            ("string" == typeof a && "function" == typeof c) ||
            "string" == typeof c
          )
            g(document).on(a, c, l, k || !1);
          if (!(this instanceof g)) {
            for (var f in t) if (t[f].element === a) return t[f];
            x++;
            t[x] = new g(a, x);
            t[x]._on = t[x].on;
            t[x].on = function (a, c, f, g) {
              var h = "function" == typeof c ? c : f;
              if ("function" == typeof c ? f : g)
                (a = [a]),
                  "string" == typeof c && a.push(c),
                  a.push(
                    (function (a) {
                      return function (c) {
                        c.defaultPrevented ||
                          window[ensightenOptions.ns].Delegate.load(this);
                        if (this.nodeName && "a" != this.nodeName.toLowerCase())
                          return a.call(this);
                        "undefined" != typeof c.preventDefault
                          ? c.preventDefault()
                          : (c.returnValue = !1);
                        a.call(this);
                      };
                    })(h)
                  ),
                  this._on.apply(this, a);
              else return this._on.call(this, a, c, f);
            };
            return t[x];
          }
          this.element = a;
          this.id = c;
        }
        var n,
          r = 0,
          x = 0,
          q = {},
          t = {};
        g.prototype.on = function (a, g, l) {
          return c.call(this, a, g, l);
        };
        g.prototype.off = function (a, g, l) {
          return c.call(this, a, g, l, !0);
        };
        g.cancel = function (a) {
          a.preventDefault();
          a.stopPropagation();
        };
        g.addEvent = function (a, c, g) {
          a.element.addEventListener(c, g, "blur" == c || "focus" == c);
        };
        g.matchesEvent = function () {
          return !0;
        };
        g.load = function (a) {
          setTimeout(
            (function (a, c) {
              var f = a.getAttribute("target") || "_self";
              return function () {
                if (a.nodeName && "a" == a.nodeName.toLowerCase()) {
                  if (c && /^javascript\s*:/.test(c))
                    return new Function(unescape(c)).call(window);
                  c && window.open(c, f);
                }
              };
            })(a, a.href || ""),
            750
          );
        };
        window[ensightenOptions.ns].Delegate = g;
      })(),
      (function (p) {
        var u = p.addEvent;
        p.addEvent = function (k, a, c) {
          if (k.element.addEventListener) return u(k, a, c);
          "focus" == a && (a = "focusin");
          "blur" == a && (a = "focusout");
          k.element.attachEvent("on" + a, c);
        };
        p.cancel = function (k) {
          k.preventDefault && k.preventDefault();
          k.stopPropagation && k.stopPropagation();
          k.returnValue = !1;
          k.cancelBubble = !0;
        };
      })(window[ensightenOptions.ns].Delegate),
      (window[ensightenOptions.ns].on = window[ensightenOptions.ns].Delegate));
    Bootstrapper.dataDefinitionIds = [];
    Bootstrapper.getServerComponent(
      Bootstrapper.getExtraParams ? Bootstrapper.getExtraParams() : undefined
    );
  }
})();
