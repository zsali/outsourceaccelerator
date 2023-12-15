/*! For license information please see main.js.LICENSE.txt */
(() => {
  "use strict";
  var e,
    t = {
      362: (e, t, o) => {
        function a(e) {
          return (
            (a =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            a(e)
          );
        }
        function n() {
          var t;
          (t = function (e) {
            return (function () {
              for (
                var t = [
                    ["Afghanistan (‫افغانستان‬‎)", "af", "93"],
                    ["Albania (Shqipëri)", "al", "355"],
                    ["Algeria (‫الجزائر‬‎)", "dz", "213"],
                    ["American Samoa", "as", "1", 5, ["684"]],
                    ["Andorra", "ad", "376"],
                    ["Angola", "ao", "244"],
                    ["Anguilla", "ai", "1", 6, ["264"]],
                    ["Antigua and Barbuda", "ag", "1", 7, ["268"]],
                    ["Argentina", "ar", "54"],
                    ["Armenia (Հայաստան)", "am", "374"],
                    ["Aruba", "aw", "297"],
                    ["Australia", "au", "61", 0],
                    ["Austria (Österreich)", "at", "43"],
                    ["Azerbaijan (Azərbaycan)", "az", "994"],
                    ["Bahamas", "bs", "1", 8, ["242"]],
                    ["Bahrain (‫البحرين‬‎)", "bh", "973"],
                    ["Bangladesh (বাংলাদেশ)", "bd", "880"],
                    ["Barbados", "bb", "1", 9, ["246"]],
                    ["Belarus (Беларусь)", "by", "375"],
                    ["Belgium (België)", "be", "32"],
                    ["Belize", "bz", "501"],
                    ["Benin (Bénin)", "bj", "229"],
                    ["Bermuda", "bm", "1", 10, ["441"]],
                    ["Bhutan (འབྲུག)", "bt", "975"],
                    ["Bolivia", "bo", "591"],
                    [
                      "Bosnia and Herzegovina (Босна и Херцеговина)",
                      "ba",
                      "387",
                    ],
                    ["Botswana", "bw", "267"],
                    ["Brazil (Brasil)", "br", "55"],
                    ["British Indian Ocean Territory", "io", "246"],
                    ["British Virgin Islands", "vg", "1", 11, ["284"]],
                    ["Brunei", "bn", "673"],
                    ["Bulgaria (България)", "bg", "359"],
                    ["Burkina Faso", "bf", "226"],
                    ["Burundi (Uburundi)", "bi", "257"],
                    ["Cambodia (កម្ពុជា)", "kh", "855"],
                    ["Cameroon (Cameroun)", "cm", "237"],
                    [
                      "Canada",
                      "ca",
                      "1",
                      1,
                      [
                        "204",
                        "226",
                        "236",
                        "249",
                        "250",
                        "289",
                        "306",
                        "343",
                        "365",
                        "387",
                        "403",
                        "416",
                        "418",
                        "431",
                        "437",
                        "438",
                        "450",
                        "506",
                        "514",
                        "519",
                        "548",
                        "579",
                        "581",
                        "587",
                        "604",
                        "613",
                        "639",
                        "647",
                        "672",
                        "705",
                        "709",
                        "742",
                        "778",
                        "780",
                        "782",
                        "807",
                        "819",
                        "825",
                        "867",
                        "873",
                        "902",
                        "905",
                      ],
                    ],
                    ["Cape Verde (Kabu Verdi)", "cv", "238"],
                    ["Caribbean Netherlands", "bq", "599", 1, ["3", "4", "7"]],
                    ["Cayman Islands", "ky", "1", 12, ["345"]],
                    [
                      "Central African Republic (République centrafricaine)",
                      "cf",
                      "236",
                    ],
                    ["Chad (Tchad)", "td", "235"],
                    ["Chile", "cl", "56"],
                    ["China (中国)", "cn", "86"],
                    ["Christmas Island", "cx", "61", 2],
                    ["Cocos (Keeling) Islands", "cc", "61", 1],
                    ["Colombia", "co", "57"],
                    ["Comoros (‫جزر القمر‬‎)", "km", "269"],
                    [
                      "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)",
                      "cd",
                      "243",
                    ],
                    ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"],
                    ["Cook Islands", "ck", "682"],
                    ["Costa Rica", "cr", "506"],
                    ["Côte d’Ivoire", "ci", "225"],
                    ["Croatia (Hrvatska)", "hr", "385"],
                    ["Cuba", "cu", "53"],
                    ["Curaçao", "cw", "599", 0],
                    ["Cyprus (Κύπρος)", "cy", "357"],
                    ["Czech Republic (Česká republika)", "cz", "420"],
                    ["Denmark (Danmark)", "dk", "45"],
                    ["Djibouti", "dj", "253"],
                    ["Dominica", "dm", "1", 13, ["767"]],
                    [
                      "Dominican Republic (República Dominicana)",
                      "do",
                      "1",
                      2,
                      ["809", "829", "849"],
                    ],
                    ["Ecuador", "ec", "593"],
                    ["Egypt (‫مصر‬‎)", "eg", "20"],
                    ["El Salvador", "sv", "503"],
                    ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"],
                    ["Eritrea", "er", "291"],
                    ["Estonia (Eesti)", "ee", "372"],
                    ["Ethiopia", "et", "251"],
                    ["Falkland Islands (Islas Malvinas)", "fk", "500"],
                    ["Faroe Islands (Føroyar)", "fo", "298"],
                    ["Fiji", "fj", "679"],
                    ["Finland (Suomi)", "fi", "358", 0],
                    ["France", "fr", "33"],
                    ["French Guiana (Guyane française)", "gf", "594"],
                    ["French Polynesia (Polynésie française)", "pf", "689"],
                    ["Gabon", "ga", "241"],
                    ["Gambia", "gm", "220"],
                    ["Georgia (საქართველო)", "ge", "995"],
                    ["Germany (Deutschland)", "de", "49"],
                    ["Ghana (Gaana)", "gh", "233"],
                    ["Gibraltar", "gi", "350"],
                    ["Greece (Ελλάδα)", "gr", "30"],
                    ["Greenland (Kalaallit Nunaat)", "gl", "299"],
                    ["Grenada", "gd", "1", 14, ["473"]],
                    ["Guadeloupe", "gp", "590", 0],
                    ["Guam", "gu", "1", 15, ["671"]],
                    ["Guatemala", "gt", "502"],
                    [
                      "Guernsey",
                      "gg",
                      "44",
                      1,
                      ["1481", "7781", "7839", "7911"],
                    ],
                    ["Guinea (Guinée)", "gn", "224"],
                    ["Guinea-Bissau (Guiné Bissau)", "gw", "245"],
                    ["Guyana", "gy", "592"],
                    ["Haiti", "ht", "509"],
                    ["Honduras", "hn", "504"],
                    ["Hong Kong (香港)", "hk", "852"],
                    ["Hungary (Magyarország)", "hu", "36"],
                    ["Iceland (Ísland)", "is", "354"],
                    ["India (भारत)", "in", "91"],
                    ["Indonesia", "id", "62"],
                    ["Iran (‫ایران‬‎)", "ir", "98"],
                    ["Iraq (‫العراق‬‎)", "iq", "964"],
                    ["Ireland", "ie", "353"],
                    [
                      "Isle of Man",
                      "im",
                      "44",
                      2,
                      ["1624", "74576", "7524", "7924", "7624"],
                    ],
                    ["Israel (‫ישראל‬‎)", "il", "972"],
                    ["Italy (Italia)", "it", "39", 0],
                    ["Jamaica", "jm", "1", 4, ["876", "658"]],
                    ["Japan (日本)", "jp", "81"],
                    [
                      "Jersey",
                      "je",
                      "44",
                      3,
                      ["1534", "7509", "7700", "7797", "7829", "7937"],
                    ],
                    ["Jordan (‫الأردن‬‎)", "jo", "962"],
                    ["Kazakhstan (Казахстан)", "kz", "7", 1, ["33", "7"]],
                    ["Kenya", "ke", "254"],
                    ["Kiribati", "ki", "686"],
                    ["Kosovo", "xk", "383"],
                    ["Kuwait (‫الكويت‬‎)", "kw", "965"],
                    ["Kyrgyzstan (Кыргызстан)", "kg", "996"],
                    ["Laos (ລາວ)", "la", "856"],
                    ["Latvia (Latvija)", "lv", "371"],
                    ["Lebanon (‫لبنان‬‎)", "lb", "961"],
                    ["Lesotho", "ls", "266"],
                    ["Liberia", "lr", "231"],
                    ["Libya (‫ليبيا‬‎)", "ly", "218"],
                    ["Liechtenstein", "li", "423"],
                    ["Lithuania (Lietuva)", "lt", "370"],
                    ["Luxembourg", "lu", "352"],
                    ["Macau (澳門)", "mo", "853"],
                    ["Macedonia (FYROM) (Македонија)", "mk", "389"],
                    ["Madagascar (Madagasikara)", "mg", "261"],
                    ["Malawi", "mw", "265"],
                    ["Malaysia", "my", "60"],
                    ["Maldives", "mv", "960"],
                    ["Mali", "ml", "223"],
                    ["Malta", "mt", "356"],
                    ["Marshall Islands", "mh", "692"],
                    ["Martinique", "mq", "596"],
                    ["Mauritania (‫موريتانيا‬‎)", "mr", "222"],
                    ["Mauritius (Moris)", "mu", "230"],
                    ["Mayotte", "yt", "262", 1, ["269", "639"]],
                    ["Mexico (México)", "mx", "52"],
                    ["Micronesia", "fm", "691"],
                    ["Moldova (Republica Moldova)", "md", "373"],
                    ["Monaco", "mc", "377"],
                    ["Mongolia (Монгол)", "mn", "976"],
                    ["Montenegro (Crna Gora)", "me", "382"],
                    ["Montserrat", "ms", "1", 16, ["664"]],
                    ["Morocco (‫المغرب‬‎)", "ma", "212", 0],
                    ["Mozambique (Moçambique)", "mz", "258"],
                    ["Myanmar (Burma) (မြန်မာ)", "mm", "95"],
                    ["Namibia (Namibië)", "na", "264"],
                    ["Nauru", "nr", "674"],
                    ["Nepal (नेपाल)", "np", "977"],
                    ["Netherlands (Nederland)", "nl", "31"],
                    ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"],
                    ["New Zealand", "nz", "64"],
                    ["Nicaragua", "ni", "505"],
                    ["Niger (Nijar)", "ne", "227"],
                    ["Nigeria", "ng", "234"],
                    ["Niue", "nu", "683"],
                    ["Norfolk Island", "nf", "672"],
                    ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"],
                    ["Northern Mariana Islands", "mp", "1", 17, ["670"]],
                    ["Norway (Norge)", "no", "47", 0],
                    ["Oman (‫عُمان‬‎)", "om", "968"],
                    ["Pakistan (‫پاکستان‬‎)", "pk", "92"],
                    ["Palau", "pw", "680"],
                    ["Palestine (‫فلسطين‬‎)", "ps", "970"],
                    ["Panama (Panamá)", "pa", "507"],
                    ["Papua New Guinea", "pg", "675"],
                    ["Paraguay", "py", "595"],
                    ["Peru (Perú)", "pe", "51"],
                    ["Philippines", "ph", "63"],
                    ["Poland (Polska)", "pl", "48"],
                    ["Portugal", "pt", "351"],
                    ["Puerto Rico", "pr", "1", 3, ["787", "939"]],
                    ["Qatar (‫قطر‬‎)", "qa", "974"],
                    ["Réunion (La Réunion)", "re", "262", 0],
                    ["Romania (România)", "ro", "40"],
                    ["Russia (Россия)", "ru", "7", 0],
                    ["Rwanda", "rw", "250"],
                    ["Saint Barthélemy", "bl", "590", 1],
                    ["Saint Helena", "sh", "290"],
                    ["Saint Kitts and Nevis", "kn", "1", 18, ["869"]],
                    ["Saint Lucia", "lc", "1", 19, ["758"]],
                    [
                      "Saint Martin (Saint-Martin (partie française))",
                      "mf",
                      "590",
                      2,
                    ],
                    [
                      "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)",
                      "pm",
                      "508",
                    ],
                    [
                      "Saint Vincent and the Grenadines",
                      "vc",
                      "1",
                      20,
                      ["784"],
                    ],
                    ["Samoa", "ws", "685"],
                    ["San Marino", "sm", "378"],
                    [
                      "São Tomé and Príncipe (São Tomé e Príncipe)",
                      "st",
                      "239",
                    ],
                    ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"],
                    ["Senegal (Sénégal)", "sn", "221"],
                    ["Serbia (Србија)", "rs", "381"],
                    ["Seychelles", "sc", "248"],
                    ["Sierra Leone", "sl", "232"],
                    ["Singapore", "sg", "65"],
                    ["Sint Maarten", "sx", "1", 21, ["721"]],
                    ["Slovakia (Slovensko)", "sk", "421"],
                    ["Slovenia (Slovenija)", "si", "386"],
                    ["Solomon Islands", "sb", "677"],
                    ["Somalia (Soomaaliya)", "so", "252"],
                    ["South Africa", "za", "27"],
                    ["South Korea (대한민국)", "kr", "82"],
                    ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"],
                    ["Spain (España)", "es", "34"],
                    ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"],
                    ["Sudan (‫السودان‬‎)", "sd", "249"],
                    ["Suriname", "sr", "597"],
                    ["Svalbard and Jan Mayen", "sj", "47", 1, ["79"]],
                    ["Swaziland", "sz", "268"],
                    ["Sweden (Sverige)", "se", "46"],
                    ["Switzerland (Schweiz)", "ch", "41"],
                    ["Syria (‫سوريا‬‎)", "sy", "963"],
                    ["Taiwan (台灣)", "tw", "886"],
                    ["Tajikistan", "tj", "992"],
                    ["Tanzania", "tz", "255"],
                    ["Thailand (ไทย)", "th", "66"],
                    ["Timor-Leste", "tl", "670"],
                    ["Togo", "tg", "228"],
                    ["Tokelau", "tk", "690"],
                    ["Tonga", "to", "676"],
                    ["Trinidad and Tobago", "tt", "1", 22, ["868"]],
                    ["Tunisia (‫تونس‬‎)", "tn", "216"],
                    ["Turkey (Türkiye)", "tr", "90"],
                    ["Turkmenistan", "tm", "993"],
                    ["Turks and Caicos Islands", "tc", "1", 23, ["649"]],
                    ["Tuvalu", "tv", "688"],
                    ["U.S. Virgin Islands", "vi", "1", 24, ["340"]],
                    ["Uganda", "ug", "256"],
                    ["Ukraine (Україна)", "ua", "380"],
                    [
                      "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)",
                      "ae",
                      "971",
                    ],
                    ["United Kingdom", "gb", "44", 0],
                    ["United States", "us", "1", 0],
                    ["Uruguay", "uy", "598"],
                    ["Uzbekistan (Oʻzbekiston)", "uz", "998"],
                    ["Vanuatu", "vu", "678"],
                    [
                      "Vatican City (Città del Vaticano)",
                      "va",
                      "39",
                      1,
                      ["06698"],
                    ],
                    ["Venezuela", "ve", "58"],
                    ["Vietnam (Việt Nam)", "vn", "84"],
                    ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"],
                    [
                      "Western Sahara (‫الصحراء الغربية‬‎)",
                      "eh",
                      "212",
                      1,
                      ["5288", "5289"],
                    ],
                    ["Yemen (‫اليمن‬‎)", "ye", "967"],
                    ["Zambia", "zm", "260"],
                    ["Zimbabwe", "zw", "263"],
                    ["Åland Islands", "ax", "358", 1, ["18"]],
                  ],
                  o = 0;
                o < t.length;
                o++
              ) {
                var n = t[o];
                t[o] = {
                  name: n[0],
                  iso2: n[1],
                  dialCode: n[2],
                  priority: n[3] || 0,
                  areaCodes: n[4] || null,
                };
              }
              function i(e, t) {
                for (var o = 0; o < t.length; o++) {
                  var a = t[o];
                  (a.enumerable = a.enumerable || !1),
                    (a.configurable = !0),
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a);
                }
              }
              var s = {
                getInstance: function (e) {
                  var t = e.getAttribute("data-intl-tel-input-id");
                  return window.intlTelInputGlobals.instances[t];
                },
                instances: {},
              };
              "object" ===
                ("undefined" == typeof window ? "undefined" : a(window)) &&
                (window.intlTelInputGlobals = s);
              var r = 0,
                l = {
                  allowDropdown: !0,
                  autoHideDialCode: !0,
                  autoPlaceholder: "polite",
                  customContainer: "",
                  customPlaceholder: null,
                  dropdownContainer: null,
                  excludeCountries: [],
                  formatOnDisplay: !0,
                  geoIpLookup: null,
                  hiddenInput: "",
                  initialCountry: "",
                  localizedCountries: null,
                  nationalMode: !0,
                  onlyCountries: [],
                  placeholderNumberType: "MOBILE",
                  preferredCountries: ["us", "gb", "au", "ca", "ph", "in"],
                  separateDialCode: !0,
                  utilsScript: "",
                },
                c = [
                  "800",
                  "822",
                  "833",
                  "844",
                  "855",
                  "866",
                  "877",
                  "880",
                  "881",
                  "882",
                  "883",
                  "884",
                  "885",
                  "886",
                  "887",
                  "888",
                  "889",
                ];
              "object" ===
                ("undefined" == typeof window ? "undefined" : a(window)) &&
                window.addEventListener("load", function () {
                  window.intlTelInputGlobals.windowLoaded = !0;
                });
              var u = function (e, t) {
                  for (var o = Object.keys(e), a = 0; a < o.length; a++)
                    t(o[a], e[o[a]]);
                },
                d = function (e) {
                  u(window.intlTelInputGlobals.instances, function (t) {
                    window.intlTelInputGlobals.instances[t][e]();
                  });
                },
                p = (function () {
                  function o(e, t) {
                    var a = this;
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, o),
                      (this.id = r++),
                      (this.telInput = e),
                      (this.activeItem = null),
                      (this.highlightedItem = null);
                    var n = t || {};
                    (this.options = {}),
                      u(l, function (e, t) {
                        a.options[e] = n.hasOwnProperty(e) ? n[e] : t;
                      }),
                      (this.hadInitialPlaceholder = Boolean(
                        e.getAttribute("placeholder")
                      ));
                  }
                  var a, n, s;
                  return (
                    (a = o),
                    (n = [
                      {
                        key: "_init",
                        value: function () {
                          var e = this;
                          if (
                            (this.options.nationalMode &&
                              (this.options.autoHideDialCode = !1),
                            this.options.separateDialCode &&
                              (this.options.autoHideDialCode =
                                this.options.nationalMode =
                                  !1),
                            (this.isMobile =
                              /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                                navigator.userAgent
                              )),
                            this.isMobile &&
                              (document.body.classList.add("iti-mobile"),
                              this.options.dropdownContainer ||
                                (this.options.dropdownContainer =
                                  document.body)),
                            "undefined" != typeof Promise)
                          ) {
                            var t = new Promise(function (t, o) {
                                (e.resolveAutoCountryPromise = t),
                                  (e.rejectAutoCountryPromise = o);
                              }),
                              o = new Promise(function (t, o) {
                                (e.resolveUtilsScriptPromise = t),
                                  (e.rejectUtilsScriptPromise = o);
                              });
                            this.promise = Promise.all([t, o]);
                          } else
                            (this.resolveAutoCountryPromise =
                              this.rejectAutoCountryPromise =
                                function () {}),
                              (this.resolveUtilsScriptPromise =
                                this.rejectUtilsScriptPromise =
                                  function () {});
                          (this.selectedCountryData = {}),
                            this._processCountryData(),
                            this._generateMarkup(),
                            this._setInitialState(),
                            this._initListeners(),
                            this._initRequests();
                        },
                      },
                      {
                        key: "_processCountryData",
                        value: function () {
                          this._processAllCountries(),
                            this._processCountryCodes(),
                            this._processPreferredCountries(),
                            this.options.localizedCountries &&
                              this._translateCountriesByLocale(),
                            (this.options.onlyCountries.length ||
                              this.options.localizedCountries) &&
                              this.countries.sort(this._countryNameSort);
                        },
                      },
                      {
                        key: "_addCountryCode",
                        value: function (t, o, a) {
                          o.length > this.dialCodeMaxLen &&
                            (this.dialCodeMaxLen = o.length),
                            this.countryCodes.hasOwnProperty(o) ||
                              (this.countryCodes[o] = []);
                          for (var n = 0; n < this.countryCodes[o].length; n++)
                            if (this.countryCodes[o][n] === t) return;
                          var i = a !== e ? a : this.countryCodes[o].length;
                          this.countryCodes[o][i] = t;
                        },
                      },
                      {
                        key: "_processAllCountries",
                        value: function () {
                          if (this.options.onlyCountries.length) {
                            var e = this.options.onlyCountries.map(function (
                              e
                            ) {
                              return e.toLowerCase();
                            });
                            this.countries = t.filter(function (t) {
                              return e.indexOf(t.iso2) > -1;
                            });
                          } else if (this.options.excludeCountries.length) {
                            var o = this.options.excludeCountries.map(function (
                              e
                            ) {
                              return e.toLowerCase();
                            });
                            this.countries = t.filter(function (e) {
                              return -1 === o.indexOf(e.iso2);
                            });
                          } else this.countries = t;
                        },
                      },
                      {
                        key: "_translateCountriesByLocale",
                        value: function () {
                          for (var e = 0; e < this.countries.length; e++) {
                            var t = this.countries[e].iso2.toLowerCase();
                            this.options.localizedCountries.hasOwnProperty(t) &&
                              (this.countries[e].name =
                                this.options.localizedCountries[t]);
                          }
                        },
                      },
                      {
                        key: "_countryNameSort",
                        value: function (e, t) {
                          return e.name.localeCompare(t.name);
                        },
                      },
                      {
                        key: "_processCountryCodes",
                        value: function () {
                          (this.dialCodeMaxLen = 0), (this.countryCodes = {});
                          for (var e = 0; e < this.countries.length; e++) {
                            var t = this.countries[e];
                            this._addCountryCode(
                              t.iso2,
                              t.dialCode,
                              t.priority
                            );
                          }
                          for (var o = 0; o < this.countries.length; o++) {
                            var a = this.countries[o];
                            if (a.areaCodes)
                              for (
                                var n = this.countryCodes[a.dialCode][0], i = 0;
                                i < a.areaCodes.length;
                                i++
                              ) {
                                for (
                                  var s = a.areaCodes[i], r = 1;
                                  r < s.length;
                                  r++
                                ) {
                                  var l = a.dialCode + s.substr(0, r);
                                  this._addCountryCode(n, l),
                                    this._addCountryCode(a.iso2, l);
                                }
                                this._addCountryCode(a.iso2, a.dialCode + s);
                              }
                          }
                        },
                      },
                      {
                        key: "_processPreferredCountries",
                        value: function () {
                          this.preferredCountries = [];
                          for (
                            var e = 0;
                            e < this.options.preferredCountries.length;
                            e++
                          ) {
                            var t =
                                this.options.preferredCountries[
                                  e
                                ].toLowerCase(),
                              o = this._getCountryData(t, !1, !0);
                            o && this.preferredCountries.push(o);
                          }
                        },
                      },
                      {
                        key: "_createEl",
                        value: function (e, t, o) {
                          var a = document.createElement(e);
                          return (
                            t &&
                              u(t, function (e, t) {
                                return a.setAttribute(e, t);
                              }),
                            o && o.appendChild(a),
                            a
                          );
                        },
                      },
                      {
                        key: "_generateMarkup",
                        value: function () {
                          this.telInput.hasAttribute("autocomplete") ||
                            (this.telInput.form &&
                              this.telInput.form.hasAttribute(
                                "autocomplete"
                              )) ||
                            this.telInput.setAttribute("autocomplete", "off");
                          var e = "iti";
                          this.options.allowDropdown &&
                            (e += " iti--allow-dropdown"),
                            this.options.separateDialCode &&
                              (e += " iti--separate-dial-code"),
                            this.options.customContainer &&
                              ((e += " "), (e += this.options.customContainer));
                          var t = this._createEl("div", { class: e });
                          if (
                            (this.telInput.parentNode.insertBefore(
                              t,
                              this.telInput
                            ),
                            (this.flagsContainer = this._createEl(
                              "div",
                              { class: "iti__flag-container" },
                              t
                            )),
                            t.appendChild(this.telInput),
                            (this.selectedFlag = this._createEl(
                              "div",
                              {
                                class: "iti__selected-flag",
                                role: "combobox",
                                "aria-owns": "iti-".concat(
                                  this.id,
                                  "__country-listbox"
                                ),
                                "aria-expanded": "false",
                              },
                              this.flagsContainer
                            )),
                            (this.selectedFlagInner = this._createEl(
                              "div",
                              { class: "iti__flag" },
                              this.selectedFlag
                            )),
                            this.options.separateDialCode &&
                              (this.selectedDialCode = this._createEl(
                                "div",
                                {
                                  class: "iti__selected-dial-code",
                                  style: "font-size: 14px;",
                                },
                                this.selectedFlag
                              )),
                            this.options.allowDropdown &&
                              (this.selectedFlag.setAttribute("tabindex", "0"),
                              (this.dropdownArrow = this._createEl(
                                "div",
                                { class: "iti__arrow" },
                                this.selectedFlag
                              )),
                              (this.countryList = this._createEl("ul", {
                                class: "iti__country-list iti__hide",
                                id: "iti-".concat(this.id, "__country-listbox"),
                                role: "listbox",
                              })),
                              this.preferredCountries.length &&
                                (this._appendListItems(
                                  this.preferredCountries,
                                  "iti__preferred",
                                  !0
                                ),
                                this._createEl(
                                  "li",
                                  {
                                    class: "iti__divider",
                                    role: "separator",
                                    "aria-disabled": "true",
                                  },
                                  this.countryList
                                )),
                              this._appendListItems(
                                this.countries,
                                "iti__standard"
                              ),
                              this.options.dropdownContainer
                                ? ((this.dropdown = this._createEl("div", {
                                    class: "iti iti--container",
                                  })),
                                  this.dropdown.appendChild(this.countryList))
                                : this.flagsContainer.appendChild(
                                    this.countryList
                                  )),
                            this.options.hiddenInput)
                          ) {
                            var o = this.options.hiddenInput,
                              a = this.telInput.getAttribute("name");
                            if (a) {
                              var n = a.lastIndexOf("[");
                              -1 !== n &&
                                (o = ""
                                  .concat(a.substr(0, n), "[")
                                  .concat(o, "]"));
                            }
                            (this.hiddenInput = this._createEl("input", {
                              type: "hidden",
                              name: o,
                            })),
                              t.appendChild(this.hiddenInput);
                          }
                        },
                      },
                      {
                        key: "_appendListItems",
                        value: function (e, t, o) {
                          for (var a = "", n = 0; n < e.length; n++) {
                            var i = e[n],
                              s = o ? "-preferred" : "";
                            (a += "<li class='iti__country "
                              .concat(t, "' tabIndex='-1' id='iti-")
                              .concat(this.id, "__item-")
                              .concat(i.iso2)
                              .concat(s, "' role='option' data-dial-code='")
                              .concat(i.dialCode, "' data-country-code='")
                              .concat(i.iso2, "'>")),
                              (a +=
                                "<div class='iti__flag-box'><div class='iti__flag iti__".concat(
                                  i.iso2,
                                  "'></div></div>"
                                )),
                              (a +=
                                "<span class='iti__country-name' style='text-transform: uppercase;'>".concat(
                                  i.iso2,
                                  "</span>"
                                )),
                              (a += "<span class='iti__dial-code'>+".concat(
                                i.dialCode,
                                "</span>"
                              )),
                              (a += "</li>");
                          }
                          this.countryList.insertAdjacentHTML("beforeend", a);
                        },
                      },
                      {
                        key: "_setInitialState",
                        value: function () {
                          var e = this.telInput.value,
                            t = this._getDialCode(e),
                            o = this._isRegionlessNanp(e),
                            a = this.options,
                            n = a.initialCountry,
                            i = a.nationalMode,
                            s = a.autoHideDialCode,
                            r = a.separateDialCode;
                          t && !o
                            ? this._updateFlagFromNumber(e)
                            : "auto" !== n &&
                              (n
                                ? this._setFlag(n.toLowerCase())
                                : t && o
                                ? this._setFlag("us")
                                : ((this.defaultCountry = this
                                    .preferredCountries.length
                                    ? this.preferredCountries[0].iso2
                                    : this.countries[0].iso2),
                                  e || this._setFlag(this.defaultCountry)),
                              e ||
                                i ||
                                s ||
                                r ||
                                (this.telInput.value = "+".concat(
                                  this.selectedCountryData.dialCode
                                ))),
                            e && this._updateValFromNumber(e);
                        },
                      },
                      {
                        key: "_initListeners",
                        value: function () {
                          this._initKeyListeners(),
                            this.options.autoHideDialCode &&
                              this._initBlurListeners(),
                            this.options.allowDropdown &&
                              this._initDropdownListeners(),
                            this.hiddenInput && this._initHiddenInputListener();
                        },
                      },
                      {
                        key: "_initHiddenInputListener",
                        value: function () {
                          var e = this;
                          (this._handleHiddenInputSubmit = function () {
                            e.hiddenInput.value = e.getNumber();
                          }),
                            this.telInput.form &&
                              this.telInput.form.addEventListener(
                                "submit",
                                this._handleHiddenInputSubmit
                              );
                        },
                      },
                      {
                        key: "_getClosestLabel",
                        value: function () {
                          for (
                            var e = this.telInput;
                            e && "LABEL" !== e.tagName;

                          )
                            e = e.parentNode;
                          return e;
                        },
                      },
                      {
                        key: "_initDropdownListeners",
                        value: function () {
                          var e = this;
                          this._handleLabelClick = function (t) {
                            e.countryList.classList.contains("iti__hide")
                              ? e.telInput.focus()
                              : t.preventDefault();
                          };
                          var t = this._getClosestLabel();
                          t &&
                            t.addEventListener("click", this._handleLabelClick),
                            (this._handleClickSelectedFlag = function () {
                              !e.countryList.classList.contains("iti__hide") ||
                                e.telInput.disabled ||
                                e.telInput.readOnly ||
                                e._showDropdown();
                            }),
                            this.selectedFlag.addEventListener(
                              "click",
                              this._handleClickSelectedFlag
                            ),
                            (this._handleFlagsContainerKeydown = function (t) {
                              e.countryList.classList.contains("iti__hide") &&
                                -1 !==
                                  [
                                    "ArrowUp",
                                    "Up",
                                    "ArrowDown",
                                    "Down",
                                    " ",
                                    "Enter",
                                  ].indexOf(t.key) &&
                                (t.preventDefault(),
                                t.stopPropagation(),
                                e._showDropdown()),
                                "Tab" === t.key && e._closeDropdown();
                            }),
                            this.flagsContainer.addEventListener(
                              "keydown",
                              this._handleFlagsContainerKeydown
                            );
                        },
                      },
                      {
                        key: "_initRequests",
                        value: function () {
                          var e = this;
                          this.options.utilsScript && !window.intlTelInputUtils
                            ? window.intlTelInputGlobals.windowLoaded
                              ? window.intlTelInputGlobals.loadUtils(
                                  this.options.utilsScript
                                )
                              : window.addEventListener("load", function () {
                                  window.intlTelInputGlobals.loadUtils(
                                    e.options.utilsScript
                                  );
                                })
                            : this.resolveUtilsScriptPromise(),
                            "auto" === this.options.initialCountry
                              ? this._loadAutoCountry()
                              : this.resolveAutoCountryPromise();
                        },
                      },
                      {
                        key: "_loadAutoCountry",
                        value: function () {
                          window.intlTelInputGlobals.autoCountry
                            ? this.handleAutoCountry()
                            : window.intlTelInputGlobals
                                .startedLoadingAutoCountry ||
                              ((window.intlTelInputGlobals.startedLoadingAutoCountry =
                                !0),
                              "function" == typeof this.options.geoIpLookup &&
                                this.options.geoIpLookup(
                                  function (e) {
                                    (window.intlTelInputGlobals.autoCountry =
                                      e.toLowerCase()),
                                      setTimeout(function () {
                                        return d("handleAutoCountry");
                                      });
                                  },
                                  function () {
                                    return d("rejectAutoCountryPromise");
                                  }
                                ));
                        },
                      },
                      {
                        key: "_initKeyListeners",
                        value: function () {
                          var e = this;
                          (this._handleKeyupEvent = function () {
                            e._updateFlagFromNumber(e.telInput.value) &&
                              e._triggerCountryChange();
                          }),
                            this.telInput.addEventListener(
                              "keyup",
                              this._handleKeyupEvent
                            ),
                            (this._handleClipboardEvent = function () {
                              setTimeout(e._handleKeyupEvent);
                            }),
                            this.telInput.addEventListener(
                              "cut",
                              this._handleClipboardEvent
                            ),
                            this.telInput.addEventListener(
                              "paste",
                              this._handleClipboardEvent
                            );
                        },
                      },
                      {
                        key: "_cap",
                        value: function (e) {
                          var t = this.telInput.getAttribute("maxlength");
                          return t && e.length > t ? e.substr(0, t) : e;
                        },
                      },
                      {
                        key: "_initBlurListeners",
                        value: function () {
                          var e = this;
                          (this._handleSubmitOrBlurEvent = function () {
                            e._removeEmptyDialCode();
                          }),
                            this.telInput.form &&
                              this.telInput.form.addEventListener(
                                "submit",
                                this._handleSubmitOrBlurEvent
                              ),
                            this.telInput.addEventListener(
                              "blur",
                              this._handleSubmitOrBlurEvent
                            );
                        },
                      },
                      {
                        key: "_removeEmptyDialCode",
                        value: function () {
                          if ("+" === this.telInput.value.charAt(0)) {
                            var e = this._getNumeric(this.telInput.value);
                            (e && this.selectedCountryData.dialCode !== e) ||
                              (this.telInput.value = "");
                          }
                        },
                      },
                      {
                        key: "_getNumeric",
                        value: function (e) {
                          return e.replace(/\D/g, "");
                        },
                      },
                      {
                        key: "_trigger",
                        value: function (e) {
                          var t = document.createEvent("Event");
                          t.initEvent(e, !0, !0),
                            this.telInput.dispatchEvent(t);
                        },
                      },
                      {
                        key: "_showDropdown",
                        value: function () {
                          this.countryList.classList.remove("iti__hide"),
                            this.selectedFlag.setAttribute(
                              "aria-expanded",
                              "true"
                            ),
                            this._setDropdownPosition(),
                            this.activeItem &&
                              (this._highlightListItem(this.activeItem, !1),
                              this._scrollTo(this.activeItem, !0)),
                            this._bindDropdownListeners(),
                            this.dropdownArrow.classList.add("iti__arrow--up"),
                            this._trigger("open:countrydropdown");
                        },
                      },
                      {
                        key: "_toggleClass",
                        value: function (e, t, o) {
                          o && !e.classList.contains(t)
                            ? e.classList.add(t)
                            : !o &&
                              e.classList.contains(t) &&
                              e.classList.remove(t);
                        },
                      },
                      {
                        key: "_setDropdownPosition",
                        value: function () {
                          var e = this;
                          if (
                            (this.options.dropdownContainer &&
                              this.options.dropdownContainer.appendChild(
                                this.dropdown
                              ),
                            !this.isMobile)
                          ) {
                            var t = this.telInput.getBoundingClientRect(),
                              o =
                                window.pageYOffset ||
                                document.documentElement.scrollTop,
                              a = t.top + o,
                              n = this.countryList.offsetHeight,
                              i =
                                a + this.telInput.offsetHeight + n <
                                o + window.innerHeight,
                              s = a - n > o;
                            if (
                              (this._toggleClass(
                                this.countryList,
                                "iti__country-list--dropup",
                                !i && s
                              ),
                              this.options.dropdownContainer)
                            ) {
                              var r = !i && s ? 0 : this.telInput.offsetHeight;
                              (this.dropdown.style.top = "".concat(
                                a + r,
                                "px"
                              )),
                                (this.dropdown.style.left = "".concat(
                                  t.left + document.body.scrollLeft,
                                  "px"
                                )),
                                (this._handleWindowScroll = function () {
                                  return e._closeDropdown();
                                }),
                                window.addEventListener(
                                  "scroll",
                                  this._handleWindowScroll
                                );
                            }
                          }
                        },
                      },
                      {
                        key: "_getClosestListItem",
                        value: function (e) {
                          for (
                            var t = e;
                            t &&
                            t !== this.countryList &&
                            !t.classList.contains("iti__country");

                          )
                            t = t.parentNode;
                          return t === this.countryList ? null : t;
                        },
                      },
                      {
                        key: "_bindDropdownListeners",
                        value: function () {
                          var e = this;
                          (this._handleMouseoverCountryList = function (t) {
                            var o = e._getClosestListItem(t.target);
                            o && e._highlightListItem(o, !1);
                          }),
                            this.countryList.addEventListener(
                              "mouseover",
                              this._handleMouseoverCountryList
                            ),
                            (this._handleClickCountryList = function (t) {
                              var o = e._getClosestListItem(t.target);
                              o && e._selectListItem(o);
                            }),
                            this.countryList.addEventListener(
                              "click",
                              this._handleClickCountryList
                            );
                          var t = !0;
                          (this._handleClickOffToClose = function () {
                            t || e._closeDropdown(), (t = !1);
                          }),
                            document.documentElement.addEventListener(
                              "click",
                              this._handleClickOffToClose
                            );
                          var o = "",
                            a = null;
                          (this._handleKeydownOnDropdown = function (t) {
                            t.preventDefault(),
                              "ArrowUp" === t.key ||
                              "Up" === t.key ||
                              "ArrowDown" === t.key ||
                              "Down" === t.key
                                ? e._handleUpDownKey(t.key)
                                : "Enter" === t.key
                                ? e._handleEnterKey()
                                : "Escape" === t.key
                                ? e._closeDropdown()
                                : /^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(t.key) &&
                                  (a && clearTimeout(a),
                                  (o += t.key.toLowerCase()),
                                  e._searchForCountry(o),
                                  (a = setTimeout(function () {
                                    o = "";
                                  }, 1e3)));
                          }),
                            document.addEventListener(
                              "keydown",
                              this._handleKeydownOnDropdown
                            );
                        },
                      },
                      {
                        key: "_handleUpDownKey",
                        value: function (e) {
                          var t =
                            "ArrowUp" === e || "Up" === e
                              ? this.highlightedItem.previousElementSibling
                              : this.highlightedItem.nextElementSibling;
                          t &&
                            (t.classList.contains("iti__divider") &&
                              (t =
                                "ArrowUp" === e || "Up" === e
                                  ? t.previousElementSibling
                                  : t.nextElementSibling),
                            this._highlightListItem(t, !0));
                        },
                      },
                      {
                        key: "_handleEnterKey",
                        value: function () {
                          this.highlightedItem &&
                            this._selectListItem(this.highlightedItem);
                        },
                      },
                      {
                        key: "_searchForCountry",
                        value: function (e) {
                          for (var t = 0; t < this.countries.length; t++)
                            if (this._startsWith(this.countries[t].name, e)) {
                              var o = this.countryList.querySelector(
                                "#iti-"
                                  .concat(this.id, "__item-")
                                  .concat(this.countries[t].iso2)
                              );
                              this._highlightListItem(o, !1),
                                this._scrollTo(o, !0);
                              break;
                            }
                        },
                      },
                      {
                        key: "_startsWith",
                        value: function (e, t) {
                          return e.substr(0, t.length).toLowerCase() === t;
                        },
                      },
                      {
                        key: "_updateValFromNumber",
                        value: function (e) {
                          var t = e;
                          if (
                            this.options.formatOnDisplay &&
                            window.intlTelInputUtils &&
                            this.selectedCountryData
                          ) {
                            var o =
                                !this.options.separateDialCode &&
                                (this.options.nationalMode ||
                                  "+" !== t.charAt(0)),
                              a = intlTelInputUtils.numberFormat,
                              n = a.NATIONAL,
                              i = a.INTERNATIONAL,
                              s = o ? n : i;
                            t = intlTelInputUtils.formatNumber(
                              t,
                              this.selectedCountryData.iso2,
                              s
                            );
                          }
                          (t = this._beforeSetNumber(t)),
                            (this.telInput.value = t);
                        },
                      },
                      {
                        key: "_updateFlagFromNumber",
                        value: function (e) {
                          var t = e,
                            o = this.selectedCountryData.dialCode,
                            a = "1" === o;
                          t &&
                            this.options.nationalMode &&
                            a &&
                            "+" !== t.charAt(0) &&
                            ("1" !== t.charAt(0) && (t = "1".concat(t)),
                            (t = "+".concat(t))),
                            this.options.separateDialCode &&
                              o &&
                              "+" !== t.charAt(0) &&
                              (t = "+".concat(o).concat(t));
                          var n = this._getDialCode(t),
                            i = this._getNumeric(t),
                            s = null;
                          if (n) {
                            var r = this.countryCodes[this._getNumeric(n)],
                              l =
                                -1 !==
                                  r.indexOf(this.selectedCountryData.iso2) &&
                                i.length <= n.length - 1;
                            if (
                              !(("1" === o && this._isRegionlessNanp(i)) || l)
                            )
                              for (var c = 0; c < r.length; c++)
                                if (r[c]) {
                                  s = r[c];
                                  break;
                                }
                          } else
                            "+" === t.charAt(0) && i.length
                              ? (s = "")
                              : (t && "+" !== t) || (s = this.defaultCountry);
                          return null !== s && this._setFlag(s);
                        },
                      },
                      {
                        key: "_isRegionlessNanp",
                        value: function (e) {
                          var t = this._getNumeric(e);
                          if ("1" === t.charAt(0)) {
                            var o = t.substr(1, 3);
                            return -1 !== c.indexOf(o);
                          }
                          return !1;
                        },
                      },
                      {
                        key: "_highlightListItem",
                        value: function (e, t) {
                          var o = this.highlightedItem;
                          o && o.classList.remove("iti__highlight"),
                            (this.highlightedItem = e),
                            this.highlightedItem.classList.add(
                              "iti__highlight"
                            ),
                            t && this.highlightedItem.focus();
                        },
                      },
                      {
                        key: "_getCountryData",
                        value: function (e, o, a) {
                          for (
                            var n = o ? t : this.countries, i = 0;
                            i < n.length;
                            i++
                          )
                            if (n[i].iso2 === e) return n[i];
                          if (a) return null;
                          throw new Error(
                            "No country data for '".concat(e, "'")
                          );
                        },
                      },
                      {
                        key: "_setFlag",
                        value: function (e) {
                          var t = this.selectedCountryData.iso2
                            ? this.selectedCountryData
                            : {};
                          (this.selectedCountryData = e
                            ? this._getCountryData(e, !1, !1)
                            : {}),
                            this.selectedCountryData.iso2 &&
                              (this.defaultCountry =
                                this.selectedCountryData.iso2),
                            this.selectedFlagInner.setAttribute(
                              "class",
                              "iti__flag iti__".concat(e)
                            );
                          var o = e
                            ? ""
                                .concat(this.selectedCountryData.name, ": +")
                                .concat(this.selectedCountryData.dialCode)
                            : "Unknown";
                          if (
                            (this.selectedFlag.setAttribute("title", o),
                            this.options.separateDialCode)
                          ) {
                            var a = this.selectedCountryData.dialCode
                              ? "+".concat(this.selectedCountryData.dialCode)
                              : "";
                            (this.selectedDialCode.innerHTML = a),
                              this.selectedFlag.offsetWidth ||
                                this._getHiddenSelectedFlagWidth(),
                              (this.telInput.style.paddingLeft = "".concat(
                                "85px"
                              ));
                          }
                          if (
                            (this._updatePlaceholder(),
                            this.options.allowDropdown)
                          ) {
                            var n = this.activeItem;
                            if (
                              (n &&
                                (n.classList.remove("iti__active"),
                                n.setAttribute("aria-selected", "false")),
                              e)
                            ) {
                              var i =
                                this.countryList.querySelector(
                                  "#iti-"
                                    .concat(this.id, "__item-")
                                    .concat(e, "-preferred")
                                ) ||
                                this.countryList.querySelector(
                                  "#iti-".concat(this.id, "__item-").concat(e)
                                );
                              i.setAttribute("aria-selected", "true"),
                                i.classList.add("iti__active"),
                                (this.activeItem = i),
                                this.selectedFlag.setAttribute(
                                  "aria-activedescendant",
                                  i.getAttribute("id")
                                );
                            }
                          }
                          return t.iso2 !== e;
                        },
                      },
                      {
                        key: "_getHiddenSelectedFlagWidth",
                        value: function () {
                          var e = this.telInput.parentNode.cloneNode();
                          (e.style.visibility = "hidden"),
                            document.body.appendChild(e);
                          var t = this.selectedFlag.cloneNode(!0);
                          e.appendChild(t);
                          var o = t.offsetWidth;
                          return e.parentNode.removeChild(e), o;
                        },
                      },
                      {
                        key: "_updatePlaceholder",
                        value: function () {
                          var e =
                            "aggressive" === this.options.autoPlaceholder ||
                            (!this.hadInitialPlaceholder &&
                              "polite" === this.options.autoPlaceholder);
                          if (window.intlTelInputUtils && e) {
                            var t =
                                intlTelInputUtils.numberType[
                                  this.options.placeholderNumberType
                                ],
                              o = this.selectedCountryData.iso2
                                ? intlTelInputUtils.getExampleNumber(
                                    this.selectedCountryData.iso2,
                                    this.options.nationalMode,
                                    t
                                  )
                                : "";
                            (o = this._beforeSetNumber(o)),
                              "function" ==
                                typeof this.options.customPlaceholder &&
                                (o = this.options.customPlaceholder(
                                  o,
                                  this.selectedCountryData
                                )),
                              this.telInput.setAttribute("placeholder", o);
                          }
                        },
                      },
                      {
                        key: "_selectListItem",
                        value: function (e) {
                          var t = this._setFlag(
                            e.getAttribute("data-country-code")
                          );
                          this._closeDropdown(),
                            this._updateDialCode(
                              e.getAttribute("data-dial-code"),
                              !0
                            ),
                            this.telInput.focus();
                          var o = this.telInput.value.length;
                          this.telInput.setSelectionRange(o, o),
                            t && this._triggerCountryChange();
                        },
                      },
                      {
                        key: "_closeDropdown",
                        value: function () {
                          this.countryList.classList.add("iti__hide"),
                            this.selectedFlag.setAttribute(
                              "aria-expanded",
                              "false"
                            ),
                            this.dropdownArrow.classList.remove(
                              "iti__arrow--up"
                            ),
                            document.removeEventListener(
                              "keydown",
                              this._handleKeydownOnDropdown
                            ),
                            document.documentElement.removeEventListener(
                              "click",
                              this._handleClickOffToClose
                            ),
                            this.countryList.removeEventListener(
                              "mouseover",
                              this._handleMouseoverCountryList
                            ),
                            this.countryList.removeEventListener(
                              "click",
                              this._handleClickCountryList
                            ),
                            this.options.dropdownContainer &&
                              (this.isMobile ||
                                window.removeEventListener(
                                  "scroll",
                                  this._handleWindowScroll
                                ),
                              this.dropdown.parentNode &&
                                this.dropdown.parentNode.removeChild(
                                  this.dropdown
                                )),
                            this._trigger("close:countrydropdown");
                        },
                      },
                      {
                        key: "_scrollTo",
                        value: function (e, t) {
                          var o = this.countryList,
                            a =
                              window.pageYOffset ||
                              document.documentElement.scrollTop,
                            n = o.offsetHeight,
                            i = o.getBoundingClientRect().top + a,
                            s = i + n,
                            r = e.offsetHeight,
                            l = e.getBoundingClientRect().top + a,
                            c = l + r,
                            u = l - i + o.scrollTop,
                            d = n / 2 - r / 2;
                          if (l < i) t && (u -= d), (o.scrollTop = u);
                          else if (c > s) {
                            t && (u += d);
                            var p = n - r;
                            o.scrollTop = u - p;
                          }
                        },
                      },
                      {
                        key: "_updateDialCode",
                        value: function (e, t) {
                          var o,
                            a = this.telInput.value,
                            n = "+".concat(e);
                          if ("+" === a.charAt(0)) {
                            var i = this._getDialCode(a);
                            o = i ? a.replace(i, n) : n;
                          } else {
                            if (
                              this.options.nationalMode ||
                              this.options.separateDialCode
                            )
                              return;
                            if (a) o = n + a;
                            else {
                              if (!t && this.options.autoHideDialCode) return;
                              o = n;
                            }
                          }
                          this.telInput.value = o;
                        },
                      },
                      {
                        key: "_getDialCode",
                        value: function (e) {
                          var t = "";
                          if ("+" === e.charAt(0))
                            for (var o = "", a = 0; a < e.length; a++) {
                              var n = e.charAt(a);
                              if (
                                !isNaN(parseInt(n, 10)) &&
                                ((o += n),
                                this.countryCodes[o] &&
                                  (t = e.substr(0, a + 1)),
                                o.length === this.dialCodeMaxLen)
                              )
                                break;
                            }
                          return t;
                        },
                      },
                      {
                        key: "_getFullNumber",
                        value: function () {
                          var e = this.telInput.value.trim(),
                            t = this.selectedCountryData.dialCode,
                            o = this._getNumeric(e);
                          return (
                            (this.options.separateDialCode &&
                            "+" !== e.charAt(0) &&
                            t &&
                            o
                              ? "+".concat(t)
                              : "") + e
                          );
                        },
                      },
                      {
                        key: "_beforeSetNumber",
                        value: function (e) {
                          var t = e;
                          if (this.options.separateDialCode) {
                            var o = this._getDialCode(t);
                            if (o) {
                              var a =
                                " " ===
                                  t[
                                    (o = "+".concat(
                                      this.selectedCountryData.dialCode
                                    )).length
                                  ] || "-" === t[o.length]
                                  ? o.length + 1
                                  : o.length;
                              t = t.substr(a);
                            }
                          }
                          return this._cap(t);
                        },
                      },
                      {
                        key: "_triggerCountryChange",
                        value: function () {
                          this._trigger("countrychange");
                        },
                      },
                      {
                        key: "handleAutoCountry",
                        value: function () {
                          "auto" === this.options.initialCountry &&
                            ((this.defaultCountry =
                              window.intlTelInputGlobals.autoCountry),
                            this.telInput.value ||
                              this.setCountry(this.defaultCountry),
                            this.resolveAutoCountryPromise());
                        },
                      },
                      {
                        key: "handleUtils",
                        value: function () {
                          window.intlTelInputUtils &&
                            (this.telInput.value &&
                              this._updateValFromNumber(this.telInput.value),
                            this._updatePlaceholder()),
                            this.resolveUtilsScriptPromise();
                        },
                      },
                      {
                        key: "destroy",
                        value: function () {
                          var e = this.telInput.form;
                          if (this.options.allowDropdown) {
                            this._closeDropdown(),
                              this.selectedFlag.removeEventListener(
                                "click",
                                this._handleClickSelectedFlag
                              ),
                              this.flagsContainer.removeEventListener(
                                "keydown",
                                this._handleFlagsContainerKeydown
                              );
                            var t = this._getClosestLabel();
                            t &&
                              t.removeEventListener(
                                "click",
                                this._handleLabelClick
                              );
                          }
                          this.hiddenInput &&
                            e &&
                            e.removeEventListener(
                              "submit",
                              this._handleHiddenInputSubmit
                            ),
                            this.options.autoHideDialCode &&
                              (e &&
                                e.removeEventListener(
                                  "submit",
                                  this._handleSubmitOrBlurEvent
                                ),
                              this.telInput.removeEventListener(
                                "blur",
                                this._handleSubmitOrBlurEvent
                              )),
                            this.telInput.removeEventListener(
                              "keyup",
                              this._handleKeyupEvent
                            ),
                            this.telInput.removeEventListener(
                              "cut",
                              this._handleClipboardEvent
                            ),
                            this.telInput.removeEventListener(
                              "paste",
                              this._handleClipboardEvent
                            ),
                            this.telInput.removeAttribute(
                              "data-intl-tel-input-id"
                            );
                          var o = this.telInput.parentNode;
                          o.parentNode.insertBefore(this.telInput, o),
                            o.parentNode.removeChild(o),
                            delete window.intlTelInputGlobals.instances[
                              this.id
                            ];
                        },
                      },
                      {
                        key: "getExtension",
                        value: function () {
                          return window.intlTelInputUtils
                            ? intlTelInputUtils.getExtension(
                                this._getFullNumber(),
                                this.selectedCountryData.iso2
                              )
                            : "";
                        },
                      },
                      {
                        key: "getNumber",
                        value: function (e) {
                          if (window.intlTelInputUtils) {
                            var t = this.selectedCountryData.iso2;
                            return intlTelInputUtils.formatNumber(
                              this._getFullNumber(),
                              t,
                              e
                            );
                          }
                          return "";
                        },
                      },
                      {
                        key: "getNumberType",
                        value: function () {
                          return window.intlTelInputUtils
                            ? intlTelInputUtils.getNumberType(
                                this._getFullNumber(),
                                this.selectedCountryData.iso2
                              )
                            : -99;
                        },
                      },
                      {
                        key: "getSelectedCountryData",
                        value: function () {
                          return this.selectedCountryData;
                        },
                      },
                      {
                        key: "getValidationError",
                        value: function () {
                          if (window.intlTelInputUtils) {
                            var e = this.selectedCountryData.iso2;
                            return intlTelInputUtils.getValidationError(
                              this._getFullNumber(),
                              e
                            );
                          }
                          return -99;
                        },
                      },
                      {
                        key: "isValidNumber",
                        value: function () {
                          var e = this._getFullNumber().trim(),
                            t = this.options.nationalMode
                              ? this.selectedCountryData.iso2
                              : "";
                          return window.intlTelInputUtils
                            ? intlTelInputUtils.isValidNumber(e, t)
                            : null;
                        },
                      },
                      {
                        key: "setCountry",
                        value: function (e) {
                          var t = e.toLowerCase();
                          this.selectedFlagInner.classList.contains(
                            "iti__".concat(t)
                          ) ||
                            (this._setFlag(t),
                            this._updateDialCode(
                              this.selectedCountryData.dialCode,
                              !1
                            ),
                            this._triggerCountryChange());
                        },
                      },
                      {
                        key: "setNumber",
                        value: function (e) {
                          var t = this._updateFlagFromNumber(e);
                          this._updateValFromNumber(e),
                            t && this._triggerCountryChange();
                        },
                      },
                      {
                        key: "setPlaceholderNumberType",
                        value: function (e) {
                          (this.options.placeholderNumberType = e),
                            this._updatePlaceholder();
                        },
                      },
                    ]),
                    n && i(a.prototype, n),
                    s && i(a, s),
                    o
                  );
                })();
              s.getCountryData = function () {
                return t;
              };
              var m = function (e, t, o) {
                var a = document.createElement("script");
                (a.onload = function () {
                  d("handleUtils"), t && t();
                }),
                  (a.onerror = function () {
                    d("rejectUtilsScriptPromise"), o && o();
                  }),
                  (a.className = "iti-load-utils"),
                  (a.async = !0),
                  (a.src = e),
                  document.body.appendChild(a);
              };
              return (
                (s.loadUtils = function (e) {
                  if (
                    !window.intlTelInputUtils &&
                    !window.intlTelInputGlobals.startedLoadingUtilsScript
                  ) {
                    if (
                      ((window.intlTelInputGlobals.startedLoadingUtilsScript =
                        !0),
                      "undefined" != typeof Promise)
                    )
                      return new Promise(function (t, o) {
                        return m(e, t, o);
                      });
                    m(e);
                  }
                  return null;
                }),
                (s.defaults = l),
                (s.version = "17.0.0"),
                function (e, t) {
                  var o = new p(e, t);
                  return (
                    o._init(),
                    e.setAttribute("data-intl-tel-input-id", o.id),
                    (window.intlTelInputGlobals.instances[o.id] = o),
                    o
                  );
                }
              );
            })();
          }),
            "object" === a(e) && e.exports
              ? (e.exports = t())
              : (window.intlTelInput = t());
        }
        o.d(t, { Z: () => n }), (e = o.hmd(e));
      },
      288: (e, t, o) => {
        function a(e, t, o) {
          var a = document.createElement(e);
          for (var n in t)
            if (n && t.hasOwnProperty(n)) {
              var i = t[n];
              !0 === i
                ? a.setAttribute(n, n)
                : !1 !== i && null != i && a.setAttribute(n, i.toString());
            }
          for (var s = 2; s < arguments.length; s++) {
            var r = arguments[s];
            a.appendChild(
              null == r.nodeType ? document.createTextNode(r.toString()) : r
            );
          }
          return a;
        }
        function n(e) {
          var t = a;
          return t(
            "form",
            { id: "js-".concat(e, "-form"), action: "", class: "" },
            t(
              "h3",
              { class: "oa-".concat(e, "__heading") },
              "toolkit" == e
                ? "Get the free toolkit now"
                : "booking" == e
                ? "Start your outsourcing journey. Book a call with our outsourcing expert now."
                : "quote" == e || "quote-enterprise" == e
                ? "Great! Whom should we send it to?"
                : ""
            ),
            t(
              "div",
              { id: "js-get-".concat(e), class: "oa-input__wrapper" },
              t(
                "div",
                { class: "oa-input__holder oa-field__holder" },
                t("label", null, "First name"),
                t(
                  "div",
                  { class: "oa-input__validation" },
                  t("input", {
                    type: "text",
                    class: "oa-field",
                    minlength: "2",
                    maxLength: "15",
                    name: "first_name",
                    required: "true",
                    autocomplete: "on",
                    placeholder: "Your first name",
                    value:
                      "null" !=
                        sessionStorage.getItem("OA_POPUP_FIELD_FNAME") &&
                      "undefined" !=
                        sessionStorage.getItem("OA_POPUP_FIELD_FNAME") &&
                      null != sessionStorage.getItem("OA_POPUP_FIELD_FNAME") &&
                      null != sessionStorage.getItem("OA_POPUP_FIELD_FNAME")
                        ? sessionStorage.getItem("OA_POPUP_FIELD_FNAME")
                        : "",
                  }),
                  t("img", {
                    src: "".concat(
                      "https://opt.outsourceaccelerator.com",
                      "/img/icons/valid-field.png"
                    ),
                    class: "oa-popup__valid--input",
                    loading: "lazy",
                  }),
                  t("img", {
                    src: "".concat(
                      "https://opt.outsourceaccelerator.com",
                      "/img/icons/invalid-field.png"
                    ),
                    class: "oa-popup__invalid--input",
                    loading: "lazy",
                  })
                )
              ),
              t(
                "div",
                { class: "oa-input__holder oa-field__holder" },
                t("label", null, "Last name"),
                t(
                  "div",
                  { class: "oa-input__validation" },
                  t("input", {
                    type: "text",
                    class: "oa-field",
                    minlength: "2",
                    maxLength: "20",
                    name: "last_name",
                    required: "true",
                    placeholder: "Your last name",
                    value:
                      "null" !=
                        sessionStorage.getItem("OA_POPUP_FIELD_LNAME") &&
                      "undefined" !=
                        sessionStorage.getItem("OA_POPUP_FIELD_LNAME") &&
                      null != sessionStorage.getItem("OA_POPUP_FIELD_LNAME") &&
                      null != sessionStorage.getItem("OA_POPUP_FIELD_LNAME")
                        ? sessionStorage.getItem("OA_POPUP_FIELD_LNAME")
                        : "",
                  }),
                  t("img", {
                    src: "".concat(
                      "https://opt.outsourceaccelerator.com",
                      "/img/icons/valid-field.png"
                    ),
                    class: "oa-popup__valid--input",
                    loading: "lazy",
                  }),
                  t("img", {
                    src: "".concat(
                      "https://opt.outsourceaccelerator.com",
                      "/img/icons/invalid-field.png"
                    ),
                    class: "oa-popup__invalid--input",
                    loading: "lazy",
                  })
                )
              ),
              t(
                "div",
                { class: "oa-input__holder oa-field__holder" },
                t(
                  "span",
                  { class: "oa-popup__tooltip--email" },
                  "Please use your business/company email"
                ),
                t(
                  "span",
                  { class: "oa-popup__tooltip--email-error" },
                  "Oops! You entered an invalid email address."
                ),
                t("label", null, "Email address"),
                t(
                  "div",
                  { class: "oa-input__validation" },
                  t("input", {
                    type: "email",
                    class: "oa-field",
                    name: "email",
                    maxLength: "50",
                    required: "true",
                    placeholder: "Your business email",
                    value:
                      "null" !=
                        sessionStorage.getItem("OA_POPUP_FIELD_EMAIL") &&
                      "undefined" !=
                        sessionStorage.getItem("OA_POPUP_FIELD_EMAIL") &&
                      null != sessionStorage.getItem("OA_POPUP_FIELD_EMAIL") &&
                      null != sessionStorage.getItem("OA_POPUP_FIELD_EMAIL")
                        ? sessionStorage.getItem("OA_POPUP_FIELD_EMAIL")
                        : "",
                  }),
                  t("img", {
                    src: "".concat(
                      "https://opt.outsourceaccelerator.com",
                      "/img/icons/valid-field.png"
                    ),
                    class: "oa-popup__valid--input",
                    loading: "lazy",
                  }),
                  t("img", {
                    src: "".concat(
                      "https://opt.outsourceaccelerator.com",
                      "/img/icons/invalid-field.png"
                    ),
                    class: "oa-popup__invalid--input",
                    loading: "lazy",
                  })
                )
              ),
              t(
                "div",
                { class: "oa-input__holder oa-field__holder" },
                t("label", null, "Phone number"),
                t(
                  "div",
                  { class: "oa-input__validation" },
                  t("input", {
                    type: "tel",
                    id: "oaphone",
                    class: "oa-field",
                    required: "true",
                  }),
                  t("img", {
                    src: "".concat(
                      "https://opt.outsourceaccelerator.com",
                      "/img/icons/valid-field.png"
                    ),
                    class: "oa-popup__valid--input",
                    loading: "lazy",
                  }),
                  t("img", {
                    src: "".concat(
                      "https://opt.outsourceaccelerator.com",
                      "/img/icons/invalid-field.png"
                    ),
                    class: "oa-popup__invalid--input",
                    loading: "lazy",
                  })
                )
              ),
              t(
                "div",
                { style: "display: none;" },
                t("label", null, "Anipat"),
                t("input", {
                  type: "text",
                  id: "anipat",
                  name: "anipat",
                  value: "",
                })
              ),
              t(
                "div",
                { style: "display: none" },
                t("input", {
                  type: "hidden",
                  id: "user_agent",
                  name: "user_agent",
                  value: navigator.userAgent,
                }),
                t("input", {
                  type: "hidden",
                  id: "user_timezone",
                  name: "user_timezone",
                  value: Intl.DateTimeFormat().resolvedOptions().timeZone,
                }),
                t("input", {
                  type: "hidden",
                  id: "user_landing",
                  name: "user_landing",
                  value: window.location.href,
                }),
                t("input", {
                  type: "hidden",
                  id: "user_referrer",
                  name: "user_referrer",
                  value: document.referrer,
                })
              ),
              t(
                "div",
                null,
                t(
                  "div",
                  { class: "oa-consent-checkbox__holder" },
                  t(
                    "label",
                    null,
                    "toolkit" == e || "booking" == e
                      ? "By submitting this, I agree to receive emails about an outsourcing firm that matches my requirements. This firm will contact me regarding their pricing and services. OA will share your information with this partner firm only."
                      : "By submitting this, I agree to receive emails about 3 outsourcing firms that matches my requirements. These firms will contact me regarding their pricing and services. OA will share your information with these 3 partner firms only."
                  )
                ),
                "toolkit" == e || "booking" == e
                  ? t(
                      "button",
                      {
                        type: "button",
                        class: "oa-btn__primary",
                        id: "js-validate-form-btn",
                      },
                      "toolkit" == e
                        ? "Get the free toolkit now"
                        : "booking" == e
                        ? "Submit"
                        : ""
                    )
                  : "",
                t("div", {
                  id: "js-form-error-container",
                  style:
                    "font-size: 12px; text-align: center; margin-top: 8px; color: red;",
                })
              )
            )
          );
        }
        function i(e) {
          var t = a,
            o = localStorage.getItem("OA_POPUP_ASSIGNED_UPSELL");
          return (
            null == o &&
              ((o = (function () {
                if (Math.random() < 0.1) {
                  var e = [1, 3];
                  return e[Math.floor(Math.random() * e.length)];
                }
                var t = [5, 7, 8];
                return t[Math.floor(Math.random() * t.length)];
              })()),
              localStorage.setItem("OA_POPUP_ASSIGNED_UPSELL", o)),
            t(
              "div",
              { class: "oa-upsell", id: "js-upsell-popup" },
              t(
                "div",
                {
                  class: "oa-upsell__close-btn oa-popup__close-btn",
                  id: "js-upsell-close-btn",
                },
                t(
                  "div",
                  {
                    class: "oa-upsell__close-btn--item hide cursor-pointer",
                    style: "flex-basis: 5%",
                    id: "js-checkout-PrevButton",
                  },
                  t("img", {
                    src: "".concat(
                      "https://opt.outsourceaccelerator.com",
                      "/img/icons/backIcon.png"
                    ),
                    class: "oa-popup__prev-icon",
                    loading: "lazy",
                  }),
                  t(
                    "button",
                    { type: "button", class: "oa-popup__back-btn" },
                    "Back"
                  )
                ),
                t(
                  "div",
                  {
                    class: "oa-upsell__close-btn--item",
                    style: "flex-basis: 100%; text-align: center",
                  },
                  t(
                    "p",
                    { class: "oa-upsell__close-btn-text" },
                    1 == o
                      ? "Get OA White-Glove Service"
                      : 2 == o
                      ? "Get OA White-Glove Service, PLUS…"
                      : 3 == o || 4 == o
                      ? "Outsource Accelerator Express Lane, PLUS…"
                      : 5 == o
                      ? "Get an OA Concierge Call"
                      : 6 == o
                      ? "Get an OA Concierge Call, PLUS…"
                      : 7 == o
                      ? "Outsourcing expert available NOW"
                      : 8 == o || 9 == o
                      ? "Outsource Accelerator Cash-Back Offer!"
                      : ""
                  )
                )
              ),
              t(
                "div",
                {
                  class: "oa-upsell__col--one step-2",
                  id: "js-".concat(e, "-intro-step-two"),
                },
                t(
                  "div",
                  { class: "oa-upsell__header" },
                  3 != o || 4 != o
                    ? t("img", {
                        src: "".concat(
                          "https://opt.outsourceaccelerator.com",
                          "/img/oa-assist.svg"
                        ),
                        class: "oa-upsell__star",
                        width: "65",
                        height: "65",
                        loading: "lazy",
                      })
                    : "",
                  3 == o || 4 == o
                    ? t("img", {
                        src: "".concat(
                          "https://opt.outsourceaccelerator.com",
                          "/img/oa-express.svg"
                        ),
                        class: "oa-upsell__star",
                        width: "65",
                        height: "65",
                        loading: "lazy",
                      })
                    : "",
                  t(
                    "h2",
                    { class: "oa-upsell__title" },
                    1 == o || 2 == o
                      ? "Source Consult Extra"
                      : 3 == o || 4 == o || 8 == o || 9 == o
                      ? "Are you serious?"
                      : 5 == o || 6 == o
                      ? "OA Concierge"
                      : 7 == o
                      ? "Want to have a call right now?"
                      : ""
                  ),
                  t(
                    "p",
                    { class: "oa-upsell__subheading" },
                    1 == o || 2 == o || 5 == o || 6 == o
                      ? "Outsource right, the first time."
                      : 3 == o || 4 == o
                      ? "Are you seriously looking? Or just browsing?"
                      : 7 == o
                      ? "One of our Outsourcing Advisors is available right now."
                      : 8 == o || 9 == o
                      ? "Are you seriously looking? We have a great offer for you!"
                      : ""
                  )
                ),
                t(
                  "div",
                  { class: "oa-upsell__body" },
                  1 == o || 2 == o
                    ? t(
                        "h3",
                        { class: "oa-upsell__price" },
                        "ONLY ",
                        t("span", { class: "oa-upsell__price-currency" }, "US"),
                        "$29"
                      )
                    : 3 == o || 4 == o
                    ? t(
                        "h3",
                        { class: "oa-upsell__red-text" },
                        "Get in the Express Lane"
                      )
                    : 5 == o || 6 == o
                    ? t(
                        "h3",
                        { class: "oa-upsell__red-text" },
                        "Available next 48 hours ONLY"
                      )
                    : 7 == o
                    ? t(
                        "h3",
                        { class: "oa-upsell__blue-text" },
                        "Available: Now"
                      )
                    : 8 == o || 9 == o
                    ? t(
                        "h3",
                        {
                          class:
                            "oa-upsell__red-text js-btn-collapse-2 deactivate-pointers",
                        },
                        "Get $450 cashback!"
                      )
                    : "",
                  7 == o
                    ? t(
                        "p",
                        { class: "oa-upsell__zoom-text" },
                        "Would you like to jump on a Zoom call?"
                      )
                    : "",
                  o < 7
                    ? t(
                        "div",
                        {
                          class:
                            "oa-upsell__heading js-btn-collapse-2 deactivate-pointers",
                        },
                        "What you'll get:"
                      )
                    : "",
                  7 == o
                    ? t(
                        "div",
                        {
                          class:
                            "oa-upsell__heading js-btn-collapse-2 deactivate-pointers",
                        },
                        " Suggested topics: "
                      )
                    : "",
                  t(
                    "ul",
                    { class: "oa-upsell__lists js-body-step-2" },
                    o < 7
                      ? t(
                          "div",
                          null,
                          t("li", null, "40 minute independent consultation"),
                          t(
                            "li",
                            null,
                            "Understand outsourcing; tailored to your needs"
                          ),
                          t("li", null, "Understand pricing, avoid mistakes"),
                          t(
                            "li",
                            null,
                            t("span", null, "FREE "),
                            "Salaries guide and breakdown"
                          ),
                          t(
                            "li",
                            null,
                            t("span", null, "FREE "),
                            "business outsourcing analysis"
                          )
                        )
                      : "",
                    7 == o
                      ? t(
                          "div",
                          null,
                          t("li", null, "Your outsourcing needs"),
                          t("li", null, "Understanding your business"),
                          t("li", null, "Likely costs and salaries"),
                          t("li", null, "Explore different options")
                        )
                      : "",
                    1 == o || 2 == o
                      ? t(
                          "li",
                          null,
                          t("span", null, "100% money-back if unsatisfied")
                        )
                      : "",
                    3 == o || 4 == o || 5 == o || 6 == o
                      ? t("li", null, "Obligation-free")
                      : "",
                    8 == o || 9 == o
                      ? t(
                          "ul",
                          { class: "oa-upsell__lists-2" },
                          t(
                            "li",
                            null,
                            "Book 3 FREE expert phone consultations",
                            t(
                              "ul",
                              { class: "oa-upsell__sublist" },
                              t(
                                "li",
                                null,
                                "40 minute independent consultation"
                              ),
                              t(
                                "li",
                                null,
                                "Understand outsourcing; tailored to your needs"
                              ),
                              t(
                                "li",
                                null,
                                "Understand pricing, avoid mistakes"
                              )
                            )
                          ),
                          t("li", null, "Start outsourcing within 6-weeks"),
                          t("li", null, "Claim your $450 cashback")
                        )
                      : "",
                    2 == o || 4 == o || 6 == o || 9 == o
                      ? t(
                          "div",
                          { class: "oa-upsell__plus" },
                          t("h3", { class: "oa-upsell__heading-2" }, "PLUS"),
                          t(
                            "div",
                            { class: "oa-upsell__plus-lists" },
                            t(
                              "ul",
                              null,
                              t(
                                "li",
                                null,
                                t(
                                  "p",
                                  null,
                                  "TimeDoctor 3-month ",
                                  t("span", null, "FREE"),
                                  " trial ($199)"
                                )
                              ),
                              t("li", null, "Remote-worker productivity suite")
                            ),
                            t("img", {
                              src: "".concat(
                                "https://opt.outsourceaccelerator.com",
                                "/img/time-doctor.svg"
                              ),
                              className: "oa-upsell__time-doctor",
                              width: "44",
                              height: "44",
                              loading: "lazy",
                            })
                          )
                        )
                      : "",
                    3 == o || 4 == o
                      ? t(
                          "div",
                          { class: "oa-upsell__red-banner" },
                          "Serious inquiries only"
                        )
                      : "",
                    5 == o || 6 == o || 7 == o
                      ? t(
                          "div",
                          { class: "oa-upsell__banner" },
                          t("span", null, "FREE!"),
                          " Zero obligation."
                        )
                      : "",
                    8 == o || 9 == o
                      ? t(
                          "div",
                          { class: "oa-upsell__pink-banner" },
                          "ONLY $10"
                        )
                      : ""
                  )
                )
              ),
              t(
                "div",
                { class: "oa-upsell__col--two js-".concat(e, "-form-col") },
                t(
                  "div",
                  {
                    class: "oa-upsell__body step-2",
                    id: "js-".concat(e, "-form-step-two"),
                  },
                  t(
                    "div",
                    { class: "oa-upsell__btns" },
                    t(
                      "button",
                      {
                        class: "oa-btn__primary oa-popup__btn--yes",
                        id: "js-upsell-true-".concat(o),
                      },
                      1 == o || 2 == o
                        ? "Yes, get consult extra - $29"
                        : 3 == o || 4 == o
                        ? "Yes, get EXPRESS"
                        : 5 == o || 6 == o || 8 == o || 9 == o
                        ? "Yes, let’s go"
                        : 7 == o
                        ? "Yes, let’s talk"
                        : ""
                    ),
                    t(
                      "button",
                      {
                        class: "oa-btn__secondary oa-popup__btn--no block",
                        id: "js-upsell-false",
                      },
                      "No thanks, just",
                      "toolkit" == e
                        ? " give me the free toolkit"
                        : "booking" == e
                        ? " book me the free call"
                        : " give me the free quote"
                    )
                  ),
                  t(
                    "div",
                    { class: "oa-upsell__img" },
                    t("img", {
                      src: "".concat(
                        "https://opt.outsourceaccelerator.com",
                        "/img/point.png"
                      ),
                      class: "oa-upsell__point-img",
                      loading: "lazy",
                    })
                  )
                )
              )
            )
          );
        }
        function s(e) {
          var t = a;
          return t(
            "div",
            { class: "oa-upsell", id: "js-upsell-expert-popup" },
            t(
              "div",
              {
                class: "oa-upsell__close-btn oa-popup__close-btn",
                id: "js-upsell-close-btn",
              },
              t(
                "div",
                {
                  class: "oa-upsell__close-btn--item hide cursor-pointer",
                  style: "flex-basis: 5%",
                  id: "js-checkout-PrevButton",
                },
                t("img", {
                  src: "".concat(
                    "https://opt.outsourceaccelerator.com",
                    "/img/icons/backIcon.png"
                  ),
                  class: "oa-popup__prev-icon",
                  loading: "lazy",
                }),
                t(
                  "button",
                  { type: "button", class: "oa-popup__back-btn" },
                  "Back"
                )
              ),
              t(
                "div",
                {
                  class: "oa-upsell__close-btn--item",
                  style: "flex-basis: 100%; text-align: center",
                },
                t(
                  "p",
                  { class: "oa-upsell__close-btn-text" },
                  "Ooops! Our advisor just took another call... Instead, we can offer:"
                )
              )
            ),
            t(
              "div",
              {
                class: "oa-upsell__col--one step-2",
                id: "js-".concat(e, "-expert-intro-step-two"),
              },
              t(
                "div",
                { class: "oa-upsell__header" },
                t("img", {
                  src: "".concat(
                    "https://opt.outsourceaccelerator.com",
                    "/img/oa-assist.svg"
                  ),
                  class: "oa-upsell__star",
                  width: "65",
                  height: "65",
                  loading: "lazy",
                }),
                t("h2", { class: "oa-upsell__title" }, "'OA Concierge'"),
                t(
                  "p",
                  { class: "oa-upsell__subheading" },
                  "'Outsource right, the first time.'"
                )
              ),
              t(
                "div",
                { class: "oa-upsell__body" },
                t(
                  "h3",
                  { class: "oa-upsell__red-text" },
                  "Available next 48 hours ONLY"
                ),
                t(
                  "button",
                  { class: "oa-upsell__heading js-btn-collapse" },
                  " What you'll get: "
                ),
                t(
                  "ul",
                  { class: "oa-upsell__lists js-body-step-2" },
                  t(
                    "div",
                    null,
                    t("li", null, "40 minute independent consultation"),
                    t(
                      "li",
                      null,
                      "Understand outsourcing; tailored to your needs"
                    ),
                    t("li", null, "Understand pricing, avoid mistakes"),
                    t(
                      "li",
                      null,
                      t("span", null, "FREE "),
                      "Salaries guide and breakdown"
                    ),
                    t(
                      "li",
                      null,
                      t("span", null, "FREE "),
                      "business outsourcing analysis"
                    )
                  ),
                  t("li", null, "Obligation-free"),
                  t(
                    "div",
                    { class: "oa-upsell__plus", style: "display: none;" },
                    t("h3", { class: "oa-upsell__heading-2" }, "PLUS"),
                    t(
                      "div",
                      { class: "oa-upsell__plus-lists" },
                      t(
                        "ul",
                        null,
                        t(
                          "li",
                          null,
                          t(
                            "p",
                            null,
                            "TimeDoctor 3-month ",
                            t("span", null, "FREE"),
                            " trial ($199)"
                          )
                        ),
                        t("li", null, "Remote-worker productivity suite")
                      ),
                      t("img", {
                        src: "".concat(
                          "https://opt.outsourceaccelerator.com",
                          "/img/time-doctor.svg"
                        ),
                        className: "oa-upsell__time-doctor",
                        width: "44",
                        height: "44",
                        loading: "lazy",
                      })
                    )
                  ),
                  t(
                    "div",
                    { class: "oa-upsell__banner" },
                    t("span", null, "FREE!"),
                    " Zero obligation."
                  )
                )
              )
            ),
            t(
              "div",
              { class: "oa-upsell__col--two js-".concat(e, "-form-col") },
              t(
                "div",
                {
                  class: "oa-upsell__body step-2",
                  id: "js-".concat(e, "-expert-form-step-two"),
                },
                t(
                  "div",
                  { class: "oa-upsell__btns" },
                  t(
                    "button",
                    {
                      class: "oa-btn__primary oa-popup__btn--yes",
                      id: "js-upsell-true-6",
                    },
                    "Yes, let’s go"
                  ),
                  t(
                    "button",
                    {
                      class: "oa-btn__secondary oa-popup__btn--no block",
                      id: "js-upsell-false-2",
                    },
                    "No thanks, just",
                    "toolkit" == e
                      ? " give me the free toolkit"
                      : "booking" == e
                      ? " book me the free call"
                      : " give me the free quote"
                  )
                ),
                t(
                  "div",
                  { class: "oa-upsell__img" },
                  t("img", {
                    src: "".concat(
                      "https://opt.outsourceaccelerator.com",
                      "/img/point.png"
                    ),
                    class: "oa-upsell__point-img",
                    loading: "lazy",
                  })
                )
              )
            )
          );
        }
        function r() {
          return a(
            "div",
            { id: "js-toolkit-popup" },
            (function () {
              var e = a;
              return e(
                "div",
                { class: "oa-toolkit__step-1", id: "js-toolkit-step-one" },
                e(
                  "div",
                  {
                    class: "oa-toolkit__col--one",
                    id: "js-toolkit-intro-step-one",
                  },
                  e(
                    "div",
                    { class: "oa-toolkit__header" },
                    e(
                      "h2",
                      { class: "oa-toolkit__title" },
                      "Your free guide to smarter outsourcing"
                    ),
                    e("img", {
                      src: "".concat(
                        "https://opt.outsourceaccelerator.com",
                        "/img/free_star.png"
                      ),
                      class: "oa-toolkit__star",
                      height: "65",
                    })
                  ),
                  e(
                    "div",
                    { class: "oa-toolkit__body" },
                    e(
                      "button",
                      { class: "oa-toolkit__heading js-btn-collapse" },
                      "Delivered straight to your inbox!"
                    ),
                    e(
                      "ul",
                      { class: "oa-toolkit__lists js-body-step-1" },
                      e(
                        "li",
                        null,
                        "The Strong Future of Outsourcing: White Paper"
                      ),
                      e("li", null, "COVID-19 Business Recovery Plan"),
                      e("li", null, "Top 10 Outsourcing Cities: Guide"),
                      e("li", null, "Outsourcing Savings Calculator & Report"),
                      e(
                        "li",
                        null,
                        e("strong", null, "BONUS!"),
                        " Discovery call with a business ",
                        e("br", null),
                        "consultant ($29 Value)"
                      )
                    )
                  ),
                  e("img", {
                    src: "".concat(
                      "https://opt.outsourceaccelerator.com",
                      "/img/toolkit.png"
                    ),
                    class: "oa-toolkit__img nice",
                  })
                ),
                e(
                  "div",
                  {
                    class: "oa-toolkit__col--two",
                    id: "js-toolkit-form-step-one",
                  },
                  e("div", { class: "oa-toolkit__body" }, n("toolkit"))
                )
              );
            })(),
            i("toolkit"),
            s("toolkit")
          );
        }
        function l() {
          return a(
            "div",
            { id: "js-booking-popup" },
            (function () {
              var e = a;
              return e(
                "div",
                { class: "oa-booking__step-1", id: "js-booking-step-one" },
                e(
                  "div",
                  {
                    class: "oa-booking__col--one",
                    id: "js-booking-intro-step-one",
                  },
                  e(
                    "div",
                    { class: "oa-booking__header" },
                    e("img", {
                      src: "".concat(
                        "https://opt.outsourceaccelerator.com",
                        "/img/free_star.png"
                      ),
                      class: "oa-booking__star",
                      height: "65",
                    }),
                    e(
                      "h2",
                      { class: "oa-booking__title" },
                      "Talk to our outsourcing experts for free"
                    )
                  ),
                  e(
                    "div",
                    { class: "oa-booking__body" },
                    e(
                      "button",
                      { class: "oa-booking__heading js-btn-collapse" },
                      "Let’s talk about the following – and more:"
                    ),
                    e(
                      "ul",
                      { class: "oa-booking__lists js-body-step-1" },
                      e("li", null, "Why you should outsource"),
                      e("li", null, "Reasons to outsource to the Philippines"),
                      e(
                        "li",
                        null,
                        "Costly misconceptions and mistakes to avoid when choosing a BPO provider"
                      ),
                      e("li", null, "Value and price: The critical difference"),
                      e(
                        "li",
                        null,
                        "Building efficient and proactive remote teams"
                      ),
                      e(
                        "li",
                        null,
                        "Leveraging outsourcing to outcompete competitors"
                      )
                    )
                  ),
                  e("img", {
                    class: "oa-booking__img",
                    src: "".concat(
                      "https://opt.outsourceaccelerator.com",
                      "/img/book-a-call.png"
                    ),
                  })
                ),
                e(
                  "div",
                  {
                    class: "oa-booking__col--two",
                    id: "js-booking-form-step-one",
                  },
                  e("div", { class: "oa-booking__body" }, n("booking"))
                )
              );
            })(),
            i("booking"),
            s("booking")
          );
        }
        function c() {
          var e = a;
          return e(
            "div",
            {
              class:
                "oa-quote__cols-holder oa-quote__steps js-quote-cols-holder",
              id: "js-quote-primary",
            },
            e(
              "div",
              { class: "oa-quote__col--one" },
              e(
                "div",
                { class: "oa-quote__holder--one" },
                e(
                  "div",
                  {
                    class:
                      "oa-quote__header oa-quote___intro--wrapper js-quote-intro-wrapper",
                  },
                  e(
                    "div",
                    { class: "oa-quote__head" },
                    e(
                      "div",
                      { class: "oa-quote__head-text" },
                      e(
                        "h2",
                        { class: "oa-quote__title" },
                        "Get 3 free quotes"
                      ),
                      e(
                        "h3",
                        { class: "oa-quote__save-cost" },
                        "Save 70% on employment costs, leverage world-class offshore staff, drive quality and growth. Connect to the top outsourcing suppliers."
                      )
                    ),
                    e("img", {
                      src: "".concat(
                        "https://opt.outsourceaccelerator.com",
                        "/img/icons/oa-badge.png"
                      ),
                      class: "oa-quote__badge",
                      alt: "OA-Badge-Icon",
                    })
                  ),
                  e(
                    "ul",
                    { class: "oa-quote__taglines" },
                    e(
                      "li",
                      { class: "oa-quote__tags" },
                      e("img", {
                        src: "".concat(
                          "https://opt.outsourceaccelerator.com",
                          "/img/icons/check-pink.svg"
                        ),
                        class: "oa-quote__tag-icon",
                        alt: "Check Icon",
                      }),
                      e("span", { class: "oa-quote__tag-text" }, "3,000 firms")
                    ),
                    e(
                      "li",
                      { class: "oa-quote__tags" },
                      e("img", {
                        src: "".concat(
                          "https://opt.outsourceaccelerator.com",
                          "/img/icons/check-pink.svg"
                        ),
                        class: "oa-quote__tag-icon",
                        alt: "Check Icon",
                      }),
                      e("span", { class: "oa-quote__tag-text" }, "Simple")
                    ),
                    e(
                      "li",
                      { class: "oa-quote__tags" },
                      e("img", {
                        src: "".concat(
                          "https://opt.outsourceaccelerator.com",
                          "/img/icons/check-pink.svg"
                        ),
                        class: "oa-quote__tag-icon",
                        alt: "Check Icon",
                      }),
                      e("span", { class: "oa-quote__tag-text" }, "Transparent")
                    )
                  )
                ),
                e("img", {
                  src: "".concat(
                    "https://opt.outsourceaccelerator.com",
                    "/img/quote/quote-cover.png"
                  ),
                  class: "oa-quote__cover",
                  alt: "Quote-Cover-Image",
                }),
                e(
                  "div",
                  { class: "oa-quote__icon-badges oa-quote__icon--desktop" },
                  e(
                    "div",
                    { class: "oa-quote__icons group" },
                    e("img", {
                      src: "".concat(
                        "https://opt.outsourceaccelerator.com",
                        "/img/icons/badge-forbes.png"
                      ),
                      class: "oa-quote__badge-forbes",
                      alt: "Forbes-Badge",
                    }),
                    e(
                      "div",
                      {
                        class:
                          "oa-quote__badge-tooltip oa-quote__tooltip--forbes hidden group-hover:flex",
                      },
                      e(
                        "p",
                        { class: "oa-quote__tooltip-text" },
                        "“The best ways to free up your time involve regulating better workplace productivity and finding different strategies to efficiently get work done. With that said, here are several steps you can take.”"
                      ),
                      e(
                        "span",
                        { class: "oa-quote__tooltip-author" },
                        e("span", null, "Derek Gallimore, "),
                        "Forbes"
                      )
                    )
                  ),
                  e(
                    "div",
                    { class: "oa-quote__icons group" },
                    e("img", {
                      src: "".concat(
                        "https://opt.outsourceaccelerator.com",
                        "/img/icons/badge-harvard-review.png"
                      ),
                      class: "oa-quote__badge-harvard",
                      alt: "Harvard-Badge",
                    }),
                    e(
                      "div",
                      {
                        class:
                          "oa-quote__badge-tooltip oa-quote__tooltip--harvard hidden group-hover:flex",
                      },
                      e(
                        "p",
                        { class: "oa-quote__tooltip-text" },
                        "“While companies internally are not always set up to deliver a seamless CX, the CX industry itself is becoming more demanding, as well. Derek Gallimore, founder and CEO of Outsource Accelerator, an outsourcing marketplace and advisory firm based in Manila, has witnessed the rising complexity of the customer service industry firsthand.”"
                      ),
                      e(
                        "span",
                        { class: "oa-quote__tooltip-author" },
                        e("span", null),
                        "Harvard Business Review"
                      )
                    )
                  ),
                  e(
                    "div",
                    { class: "oa-quote__icons group" },
                    e("img", {
                      src: "".concat(
                        "https://opt.outsourceaccelerator.com",
                        "/img/icons/badge-asia-pacific.png"
                      ),
                      class: "oa-quote__badge-pacific",
                      alt: "Asia-Pacific-Badge",
                    }),
                    e(
                      "div",
                      {
                        class:
                          "oa-quote__badge-tooltip oa-quote__tooltip--pacific hidden group-hover:flex",
                      },
                      e(
                        "p",
                        { class: "oa-quote__tooltip-text" },
                        "“The Great Resignation is unavoidable, and it is still happening as employees continue to look for job opportunities with greater working conditions. From The Great Resignation to The Great Talent Reshuffle — the key here is to retain employees.”"
                      ),
                      e(
                        "span",
                        { class: "oa-quote__tooltip-author" },
                        e("span", null, "Derek Gallimore, "),
                        "Entrepreneur"
                      )
                    )
                  ),
                  e(
                    "div",
                    { class: "oa-quote__icons group" },
                    e("img", {
                      src: "".concat(
                        "https://opt.outsourceaccelerator.com",
                        "/img/icons/badge-california-journal.png"
                      ),
                      class: "oa-quote__badge-california",
                      alt: "California-Journal-Badge",
                    }),
                    e(
                      "div",
                      {
                        class:
                          "oa-quote__badge-tooltip oa-quote__tooltip--california hidden group-hover:flex",
                      },
                      e(
                        "p",
                        { class: "oa-quote__tooltip-text" },
                        "“Despite being used for decades, outsourcing is still often looked down upon or misunderstood but Derek Gallimore sees it creating a seismic shift of how and where companies employ their workers.”"
                      ),
                      e(
                        "span",
                        { class: "oa-quote__tooltip-author" },
                        e("span", null, "Susan Belknapp, "),
                        "California Business Journal"
                      )
                    )
                  )
                ),
                e(
                  "div",
                  { class: "oa-quote__icon-badges oa-quote__icon--mobile" },
                  e("img", {
                    src: "".concat(
                      "https://opt.outsourceaccelerator.com",
                      "/img/icons/badge-forbes-white.png"
                    ),
                    class: "oa-quote__badge-forbes",
                    alt: "Forbes-Badge",
                  }),
                  e("img", {
                    src: "".concat(
                      "https://opt.outsourceaccelerator.com",
                      "/img/icons/badge-harvard-review-white.png"
                    ),
                    class: "oa-quote__badge-harvard",
                    alt: "Harvard-Badge",
                  }),
                  e("img", {
                    src: "".concat(
                      "https://opt.outsourceaccelerator.com",
                      "/img/icons/badge-asia-pacific-white.png"
                    ),
                    class: "oa-quote__badge-pacific",
                    alt: "Asia-Pacific-Badge",
                  }),
                  e("img", {
                    src: "".concat(
                      "https://opt.outsourceaccelerator.com",
                      "/img/icons/badge-california-journal-white.png"
                    ),
                    class: "oa-quote__badge-california",
                    alt: "California-Journal-Badge",
                  })
                ),
                e(
                  "div",
                  { class: "oa-quote__client-value" },
                  e(
                    "span",
                    { class: "oa-quote__client-text" },
                    "We’ve helped 18,000+ businesses like yours in the last 12 months!"
                  ),
                  e(
                    "ul",
                    { class: "oa-quote__value-details" },
                    e(
                      "li",
                      { class: "oa-quote__business-info" },
                      e("span", { class: "oa-quote__value" }, "18k"),
                      e("span", { class: "oa-quote__label" }, "businesses")
                    ),
                    e(
                      "li",
                      { class: "oa-quote__business-info" },
                      e("span", { class: "oa-quote__value" }, "36k"),
                      e("span", { class: "oa-quote__label" }, "full-time staff")
                    ),
                    e(
                      "li",
                      { class: "oa-quote__business-info" },
                      e("span", { class: "oa-quote__value" }, "42"),
                      e("span", { class: "oa-quote__label" }, "sectors")
                    ),
                    e(
                      "li",
                      { class: "oa-quote__business-info" },
                      e("span", { class: "oa-quote__value" }, "$1.1bn"),
                      e("span", { class: "oa-quote__label" }, "value")
                    )
                  )
                )
              ),
              e("img", {
                src: "".concat(
                  "https://opt.outsourceaccelerator.com",
                  "/img/ellipsis.png"
                ),
                class: "oa-quote__ellipsis",
                alt: "Ellipsis-Image",
              })
            ),
            e(
              "div",
              { class: "oa-quote__col--two js-quote-form-col" },
              e(
                "div",
                {
                  class: "oa-quote__enterprise-banner",
                  id: "js-enterprise-banner-visible",
                },
                e(
                  "span",
                  { class: "oa-quote__enterprise-text" },
                  "Enterprise?"
                ),
                e(
                  "button",
                  {
                    class: "oa-quote__enterprise-btn js-switch-enterprise-btn",
                  },
                  "Use OA QuotePro"
                )
              ),
              e(
                "div",
                { class: "oa-quote__col-body", id: "quote-container-hide" },
                e(
                  "div",
                  { class: "oa-quote__prog-bar-holder js-oa-prog-bar-wrapper" },
                  e(
                    "div",
                    { class: "oa-quote__prog-bar" },
                    e("div", {
                      class: "oa-quote__prog-indicator js-prog-indicator",
                    })
                  )
                ),
                e(
                  "div",
                  { class: "oa-quote__body js-quote-form-wrapper" },
                  e(
                    "form",
                    { id: "js-quote-form" },
                    (function () {
                      var e = a;
                      return e(
                        "div",
                        { class: "oa-quote__tab", style: "display: block;" },
                        e(
                          "h2",
                          { class: "oa-quote__heading" },
                          "Let’s get started"
                        ),
                        e(
                          "h3",
                          { class: "oa-quote__subheading" },
                          "How many staff do you need to outsource?"
                        ),
                        e(
                          "div",
                          { class: "oa-radio__btns" },
                          e("input", {
                            type: "radio",
                            id: "1-2-roles",
                            name: "quote_staff",
                            value: "1-2 roles",
                            required: "",
                          }),
                          " ",
                          e(
                            "label",
                            { for: "1-2-roles", class: "oa-radio__option" },
                            "1-2 staff"
                          ),
                          e("input", {
                            type: "radio",
                            id: "3-10-roles",
                            name: "quote_staff",
                            value: "3-10 roles",
                          }),
                          " ",
                          e(
                            "label",
                            { for: "3-10-roles", class: "oa-radio__option" },
                            "3-10 staff"
                          ),
                          e("input", {
                            type: "radio",
                            id: "11-20-roles",
                            name: "quote_staff",
                            value: "11-20 roles",
                          }),
                          " ",
                          e(
                            "label",
                            { for: "11-20-roles", class: "oa-radio__option" },
                            "11-20 staff"
                          ),
                          e("input", {
                            type: "radio",
                            id: "21-50-roles",
                            name: "quote_staff",
                            value: "21-50 roles",
                          }),
                          " ",
                          e(
                            "label",
                            { for: "21-50-roles", class: "oa-radio__option" },
                            "21-50 staff"
                          ),
                          e("input", {
                            type: "radio",
                            id: "50-roles",
                            name: "quote_staff",
                            value: "50+ roles",
                          }),
                          " ",
                          e(
                            "label",
                            { for: "50-roles", class: "oa-radio__option" },
                            "50+ staff"
                          ),
                          e("input", {
                            type: "radio",
                            id: "other-roles",
                            name: "quote_staff",
                            value: "other",
                          }),
                          " ",
                          e(
                            "label",
                            { for: "other-roles", class: "oa-radio__option" },
                            "Other staff"
                          )
                        )
                      );
                    })(),
                    (function () {
                      var e = a;
                      return e(
                        "div",
                        { class: "oa-quote__tab inactive" },
                        e(
                          "h2",
                          { class: "oa-quote__heading" },
                          "Let’s get to know each other"
                        ),
                        e(
                          "h3",
                          { class: "oa-quote__subheading" },
                          "How big is your company?"
                        ),
                        e(
                          "div",
                          { class: "oa-radio__btns" },
                          e("input", {
                            type: "radio",
                            id: "1-2-emp",
                            name: "quote_company_size",
                            value: "1-2 emp",
                          }),
                          " ",
                          e(
                            "label",
                            { for: "1-2-emp", class: "oa-radio__option" },
                            "1-2 staff"
                          ),
                          e("input", {
                            type: "radio",
                            id: "3-10-emp",
                            name: "quote_company_size",
                            value: "3-10 emp",
                          }),
                          " ",
                          e(
                            "label",
                            { for: "3-10-emp", class: "oa-radio__option" },
                            "3-10 staff"
                          ),
                          e("input", {
                            type: "radio",
                            id: "11-20-emp",
                            name: "quote_company_size",
                            value: "11-20 emp",
                          }),
                          " ",
                          e(
                            "label",
                            { for: "11-20-emp", class: "oa-radio__option" },
                            "11-20 staff"
                          ),
                          e("input", {
                            type: "radio",
                            id: "21-50-emp",
                            name: "quote_company_size",
                            value: "21-50 emp",
                          }),
                          " ",
                          e(
                            "label",
                            { for: "21-50-emp", class: "oa-radio__option" },
                            "21-50 staff"
                          ),
                          e("input", {
                            type: "radio",
                            id: "50-100-emp",
                            name: "quote_company_size",
                            value: "50-100 emp",
                          }),
                          " ",
                          e(
                            "label",
                            { for: "50-100-emp", class: "oa-radio__option" },
                            "50-100 staff"
                          ),
                          e("input", {
                            type: "radio",
                            id: "other-emp",
                            name: "quote_company_size",
                            value: "100+ emp",
                          }),
                          " ",
                          e(
                            "label",
                            { for: "other-emp", class: "oa-radio__option" },
                            "100+ staff"
                          )
                        ),
                        e(
                          "h3",
                          { class: "oa-quote__subheading pt-3" },
                          "What sector is your business in?"
                        ),
                        e(
                          "div",
                          { class: "oa-quote__dropdown" },
                          e(
                            "select",
                            { id: "js-quote-sector", name: "quote_sector" },
                            e(
                              "option",
                              {
                                disabled: "disabled",
                                selected: "selected",
                                value: "",
                              },
                              "Select sector..."
                            ),
                            e(
                              "option",
                              { value: "advertising-and-pr" },
                              "Advertising & PR"
                            ),
                            e(
                              "option",
                              { value: "construction-renovation" },
                              "Construction Renovation"
                            ),
                            e(
                              "option",
                              { value: "digital-marketing" },
                              "Digital Marketing"
                            ),
                            e("option", { value: "ecommerce" }, "Ecommerce"),
                            e("option", { value: "education" }, "Education"),
                            e("option", { value: "energy" }, "Energy"),
                            e(
                              "option",
                              { value: "entertainment" },
                              "Entertainment"
                            ),
                            e(
                              "option",
                              { value: "financial-services" },
                              "Financial Services"
                            ),
                            e(
                              "option",
                              { value: "food-beverage" },
                              "Food & Beverage"
                            ),
                            e(
                              "option",
                              { value: "game-dev-support" },
                              "Game Dev & Support"
                            ),
                            e("option", { value: "government" }, "Government"),
                            e(
                              "option",
                              { value: "hardware-tech-it" },
                              "Hardware Tech/IT"
                            ),
                            e("option", { value: "health-care" }, "Healthcare"),
                            e(
                              "option",
                              { value: "hospitality" },
                              "Hospitality"
                            ),
                            e("option", { value: "legal" }, "Legal"),
                            e(
                              "option",
                              { value: "manufacturing" },
                              "Manufacturing"
                            ),
                            e(
                              "option",
                              { value: "media-publishing" },
                              "Media Publishing"
                            ),
                            e("option", { value: "non-profit" }, "Non Profit"),
                            e(
                              "option",
                              { value: "pharmaceutical" },
                              "Pharmaceutical"
                            ),
                            e(
                              "option",
                              { value: "public-utilities" },
                              "Public Utilities"
                            ),
                            e(
                              "option",
                              { value: "real-estate" },
                              "Real Estate"
                            ),
                            e(
                              "option",
                              { value: "recruiting-staffing" },
                              "Recruiting Staffing"
                            ),
                            e("option", { value: "retail" }, "Retail"),
                            e(
                              "option",
                              { value: "software-tech-it" },
                              "Software Tech/IT"
                            ),
                            e("option", { value: "telecoms" }, "Telecoms"),
                            e(
                              "option",
                              { value: "transportation" },
                              "Transportation"
                            ),
                            e("option", { value: "travel" }, "Travel"),
                            e("option", { value: "other" }, "Other sector")
                          )
                        )
                      );
                    })(),
                    (function () {
                      var e = a;
                      return e(
                        "div",
                        { class: "oa-quote__tab inactive" },
                        e(
                          "h2",
                          { class: "oa-quote__heading" },
                          "About your needs"
                        ),
                        e(
                          "div",
                          { class: "oa-quote__textareas" },
                          e(
                            "div",
                            { class: "oa-field__holder" },
                            e(
                              "label",
                              null,
                              "What roles are you looking to outsource?"
                            ),
                            e("textarea", {
                              id: "js-quote-role-to-outsource",
                              required: "true",
                              name: "quote_role_to_outsource",
                              rows: "2",
                              placeholder:
                                "E.g., customer support, graphic design, etc.",
                            })
                          ),
                          e(
                            "div",
                            { class: "oa-field__holder" },
                            e(
                              "label",
                              null,
                              "What’s one question you want to be answered?"
                            ),
                            e("textarea", {
                              id: "js-quote-key-question",
                              name: "quote_key_question",
                              rows: "3",
                              placeholder:
                                "E.g. I need staff that can work on our timezone..",
                            })
                          ),
                          e(
                            "div",
                            {
                              class: "oa-field__holder",
                              style: "margin-bottom: 0;",
                            },
                            e(
                              "label",
                              null,
                              "Anything else you’d like to discuss?"
                            ),
                            e("textarea", {
                              id: "js-quote-comment",
                              name: "quote_comment",
                              rows: "4",
                              style: "max-height: 4rem !important;",
                            })
                          )
                        )
                      );
                    })(),
                    a("div", { class: "oa-quote__tab inactive" }, n("quote")),
                    (function () {
                      var e = a;
                      return e(
                        "div",
                        { class: "oa-quote__tab inactive" },
                        e(
                          "div",
                          { class: "oa-quote__btns" },
                          e("h3", null, "Select your preferred service"),
                          e(
                            "a",
                            { class: "oa-btn__primary oa-popup__btn--yes" },
                            "Yes, get Source Consult Extra - $29"
                          ),
                          e(
                            "a",
                            { class: "oa-btn__secondary oa-popup__btn--no" },
                            "No thanks, just give me the free quote"
                          )
                        )
                      );
                    })(),
                    e(
                      "div",
                      { class: "oa-quote__btn--wrapper" },
                      e(
                        "button",
                        {
                          type: "button",
                          class: "oa-quote__btn--next-step",
                          id: "js-quote-nextBtn",
                        },
                        "Let's start"
                      ),
                      e(
                        "button",
                        {
                          type: "button",
                          class: "oa-quote__btn--prev-step",
                          id: "js-quote-PrevButton",
                        },
                        e("p", null, "Back")
                      )
                    )
                  ),
                  e(
                    "div",
                    { class: "oa-quote__expect--two js-expect-quote-link" },
                    "Enterprise? ",
                    e(
                      "button",
                      {
                        class: "oa-quote__link-quote js-switch-enterprise-btn",
                      },
                      "Use OA QuotePRO"
                    )
                  )
                )
              )
            )
          );
        }
        function u() {
          var e = a;
          return e(
            "div",
            { class: "oa-enterprise__cols-holder js-enterprise-cols-holder" },
            e(
              "div",
              { class: "oa-enterprise__screen--one" },
              e(
                "div",
                {
                  class: "oa-enterprise__left-body oa-enterprise__step--one",
                  id: "js-left-tab",
                },
                e(
                  "div",
                  { class: "oa-enterprise__header" },
                  e(
                    "div",
                    { class: "oa-enterprise__head" },
                    e(
                      "div",
                      { class: "oa-enterprise__head-text" },
                      e(
                        "h2",
                        { class: "oa-enterprise__title" },
                        "Exclusive OA Assistance for Enterprise"
                      ),
                      e(
                        "span",
                        { class: "oa-enterprise__span-title" },
                        "Offshore staffing solutions for enterprise."
                      )
                    )
                  ),
                  e("img", {
                    src: "".concat(
                      "https://opt.outsourceaccelerator.com",
                      "/img/icons/oa-badge-2.png"
                    ),
                    class: "oa-enterprise__badge",
                    alt: "Enterprise Badge",
                  })
                ),
                e(
                  "div",
                  { class: "oa-enterprise__subheading" },
                  e(
                    "div",
                    { class: "oa-enterprise__head--tags" },
                    e(
                      "ul",
                      null,
                      e(
                        "li",
                        null,
                        e("img", {
                          src: "".concat(
                            "https://opt.outsourceaccelerator.com",
                            "/img/icons/enterprise-check.svg"
                          ),
                          class: "oa-enterprise__check-icon",
                          alt: "Check Icon",
                        }),
                        e("span", null, "Independent")
                      ),
                      e(
                        "li",
                        null,
                        e("img", {
                          src: "".concat(
                            "https://opt.outsourceaccelerator.com",
                            "/img/icons/enterprise-check.svg"
                          ),
                          class: "oa-enterprise__check-icon",
                          alt: "Check Icon",
                        }),
                        e("span", null, "Trusted")
                      ),
                      e(
                        "li",
                        null,
                        e("img", {
                          src: "".concat(
                            "https://opt.outsourceaccelerator.com",
                            "/img/icons/enterprise-check.svg"
                          ),
                          class: "oa-enterprise__check-icon",
                          alt: "Check Icon",
                        }),
                        e("span", null, "Transparent")
                      )
                    )
                  ),
                  e(
                    "span",
                    { class: "oa-enterprise__sub-text" },
                    "Offshore staffing solutions for enterprise. Independent expertise, advice & implementation."
                  )
                ),
                e(
                  "div",
                  { class: "oa-enterprise__features" },
                  e(
                    "ul",
                    null,
                    e(
                      "div",
                      { class: "oa-enterprise__feature-one" },
                      e("li", null, "200+ Firms, Global Reach"),
                      e("li", null, "Offshore, Nearshore, Onshore"),
                      e("li", null, "Managed RFP & Tender (RFT)"),
                      e("li", null, "Assisted Procurement Processes"),
                      e("li", null, "Vendor Management"),
                      e("li", null, "Build-Operate-Transfer")
                    ),
                    e(
                      "div",
                      {
                        class: "oa-enterprise__feature-two",
                        id: "enterprise-features-content",
                      },
                      e("li", null, "Captive & Shared Services"),
                      e("li", null, "Challenger-Competitor"),
                      e("li", null, "Multi-site, Multi-vendor"),
                      e("li", null, "Managed Solutions")
                    ),
                    e(
                      "span",
                      {
                        class:
                          "oa-enterprise__btn-features load-features-content",
                      },
                      "Load more"
                    )
                  )
                ),
                e(
                  "div",
                  {
                    class:
                      "oa-enterprise__note visible-content load-more-features-content",
                  },
                  "For enterprise and large teams only."
                ),
                e(
                  "div",
                  {
                    class:
                      "oa-enterprise__client-value visible-content load-more-features-content",
                  },
                  e(
                    "span",
                    { class: "oa-enterprise__client-text" },
                    "We’ve helped 18,000+ businesses like yours in the last 12 months!"
                  ),
                  e(
                    "ul",
                    { class: "oa-enterprise__value-details" },
                    e(
                      "li",
                      { class: "oa-enterprise__business-info" },
                      e("span", { class: "oa-enterprise__value" }, "18k"),
                      e("span", { class: "oa-enterprise__label" }, "businesses")
                    ),
                    e(
                      "li",
                      { class: "oa-enterprise__business-info" },
                      e("span", { class: "oa-enterprise__value" }, "36k"),
                      e(
                        "span",
                        { class: "oa-enterprise__label" },
                        "full-time staff"
                      )
                    ),
                    e(
                      "li",
                      { class: "oa-enterprise__business-info" },
                      e("span", { class: "oa-enterprise__value" }, "42"),
                      e("span", { class: "oa-enterprise__label" }, "sectors")
                    ),
                    e(
                      "li",
                      { class: "oa-enterprise__business-info" },
                      e("span", { class: "oa-enterprise__value" }, "$1.1bn"),
                      e("span", { class: "oa-enterprise__label" }, "value")
                    )
                  ),
                  e(
                    "div",
                    { class: "oa-enterprise__icon-badges" },
                    e("img", {
                      src: "".concat(
                        "https://opt.outsourceaccelerator.com",
                        "/img/icons/badge-forbes-white.png"
                      ),
                      class:
                        "oa-enterprise__badge-forbes oa-enterprise__company-badge",
                      alt: "Forbes-Badge",
                    }),
                    e("img", {
                      src: "".concat(
                        "https://opt.outsourceaccelerator.com",
                        "/img/icons/badge-harvard-review-white.png"
                      ),
                      class:
                        "oa-enterprise__badge-harvard oa-enterprise__company-badge",
                      alt: "Harvard-Badge",
                    }),
                    e("img", {
                      src: "".concat(
                        "https://opt.outsourceaccelerator.com",
                        "/img/icons/badge-asia-pacific-white.png"
                      ),
                      class:
                        "oa-enterprise__badge-pacific oa-enterprise__company-badge",
                      alt: "Asia-Pacific-Badge",
                    }),
                    e("img", {
                      src: "".concat(
                        "https://opt.outsourceaccelerator.com",
                        "/img/icons/badge-california-journal-white.png"
                      ),
                      class:
                        "oa-enterprise__badge-california oa-enterprise__company-badge",
                      alt: "California-Journal-Badge",
                    })
                  )
                )
              )
            ),
            e(
              "div",
              { class: "oa-enterprise__screen--two" },
              e(
                "div",
                { class: "oa-enterprise__right-body" },
                e(
                  "div",
                  { class: "oa-enterprise__prog-bar-holder" },
                  e(
                    "div",
                    { class: "oa-enterprise__prog-bar" },
                    e("div", { class: "oa-enterprise__prog-indicator" })
                  )
                ),
                e(
                  "div",
                  { class: "oa-enterprise__right-content step-one" },
                  e(
                    "form",
                    {
                      class: "oa-enterprise__form",
                      id: "js-quote-enterprise-form",
                    },
                    (function () {
                      var e = a;
                      return e(
                        "div",
                        {
                          class:
                            "oa-enterprise__tab oa-enterprise__tab--one active",
                        },
                        e(
                          "div",
                          { class: "oa-enterprise__head-wrapper" },
                          e(
                            "h2",
                            { class: "oa-enterprise__right-heading" },
                            "For enterprise & large teams only"
                          ),
                          e(
                            "h3",
                            { class: "oa-enterprise__right-subheading" },
                            "Only takes ",
                            e("span", null, "1-min"),
                            " to complete the form"
                          ),
                          e(
                            "div",
                            {
                              type: "button",
                              class: "oa-enterprise__btn-next-step",
                              id: "js-enterprise-stepOneBtn",
                            },
                            "Get started"
                          )
                        ),
                        e(
                          "div",
                          { class: "oa-enterprise__back-step" },
                          "Not an enterprise? ",
                          e(
                            "button",
                            {
                              type: "button",
                              class:
                                "oa-enterprise__back-to-quote js-switch-quote-btn",
                            },
                            "Go to standard quote"
                          )
                        ),
                        e(
                          "div",
                          { class: "oa-enterprise__client-value" },
                          e(
                            "span",
                            { class: "oa-enterprise__client-text" },
                            "We’ve helped 18,000+ businesses like yours in the last 12 months!"
                          ),
                          e(
                            "ul",
                            { class: "oa-enterprise__value-details" },
                            e(
                              "li",
                              { class: "oa-enterprise__business-info" },
                              e(
                                "span",
                                { class: "oa-enterprise__value" },
                                "18k"
                              ),
                              e(
                                "span",
                                { class: "oa-enterprise__label" },
                                "businesses"
                              )
                            ),
                            e(
                              "li",
                              { class: "oa-enterprise__business-info" },
                              e(
                                "span",
                                { class: "oa-enterprise__value" },
                                "36k"
                              ),
                              e(
                                "span",
                                { class: "oa-enterprise__label" },
                                "full-time staff"
                              )
                            ),
                            e(
                              "li",
                              { class: "oa-enterprise__business-info" },
                              e(
                                "span",
                                { class: "oa-enterprise__value" },
                                "42"
                              ),
                              e(
                                "span",
                                { class: "oa-enterprise__label" },
                                "sectors"
                              )
                            ),
                            e(
                              "li",
                              { class: "oa-enterprise__business-info" },
                              e(
                                "span",
                                { class: "oa-enterprise__value" },
                                "$1.1bn"
                              ),
                              e(
                                "span",
                                { class: "oa-enterprise__label" },
                                "value"
                              )
                            )
                          ),
                          e(
                            "div",
                            { class: "oa-enterprise__icon-badges" },
                            e("img", {
                              src: "".concat(
                                "https://opt.outsourceaccelerator.com",
                                "/img/icons/badge-forbes.png"
                              ),
                              class:
                                "oa-enterprise__badge-forbes oa-enterprise__company-badge",
                              alt: "Forbes-Badge",
                            }),
                            e("img", {
                              src: "".concat(
                                "https://opt.outsourceaccelerator.com",
                                "/img/icons/badge-harvard-review.png"
                              ),
                              class:
                                "oa-enterprise__badge-harvard oa-enterprise__company-badge",
                              alt: "Harvard-Badge",
                            }),
                            e("img", {
                              src: "".concat(
                                "https://opt.outsourceaccelerator.com",
                                "/img/icons/badge-asia-pacific.png"
                              ),
                              class:
                                "oa-enterprise__badge-pacific oa-enterprise__company-badge",
                              alt: "Asia-Pacific-Badge",
                            }),
                            e("img", {
                              src: "".concat(
                                "https://opt.outsourceaccelerator.com",
                                "/img/icons/badge-california-journal.png"
                              ),
                              class:
                                "oa-enterprise__badge-california oa-enterprise__company-badge",
                              alt: "California-Journal-Badge",
                            })
                          )
                        )
                      );
                    })(),
                    (function () {
                      var e = a;
                      return e(
                        "div",
                        {
                          class:
                            "oa-enterprise__tab oa-enterprise__tab--two inactive",
                        },
                        e(
                          "div",
                          { class: "oa-enterprise__step-two-wrapper" },
                          e(
                            "h2",
                            { class: "oa-enterprise__heading-step-two" },
                            "Before we start"
                          ),
                          e(
                            "div",
                            { class: "oa-enterprise__features-step-two" },
                            e(
                              "ul",
                              null,
                              e("li", null, "Answer 5 questions (1 min)"),
                              e("li", null, "Book 20-min consult"),
                              e(
                                "li",
                                null,
                                "Attend Free & Obligation-Free Consult"
                              )
                            )
                          ),
                          e(
                            "span",
                            { class: "oa-enterprise__get-features" },
                            "You will get:"
                          ),
                          e(
                            "div",
                            { class: "oa-enterprise__features-step-two" },
                            e(
                              "ul",
                              null,
                              e("li", null, "Needs Analysis & Report"),
                              e(
                                "li",
                                null,
                                "Salary Guidance & Indicative Pricing"
                              ),
                              e("li", null, "Process Map")
                            )
                          )
                        )
                      );
                    })(),
                    (function () {
                      var e = a;
                      return e(
                        "div",
                        { class: "oa-enterprise__tab inactive" },
                        e(
                          "h2",
                          { class: "oa-enterprise__heading-step-two" },
                          "Let’s get started"
                        ),
                        e(
                          "h3",
                          { class: "oa-enterprise__step-subheading" },
                          "How many staff do you need to outsource?"
                        ),
                        e(
                          "div",
                          { class: "oa-enterprise__radio-btns" },
                          e("input", {
                            type: "radio",
                            id: "20-50-roles",
                            name: "quote_staff",
                            value: "20-50 roles",
                          }),
                          " ",
                          e(
                            "label",
                            { for: "20-50-roles", class: "oa-radio__option" },
                            "20-50 staff"
                          ),
                          e("input", {
                            type: "radio",
                            id: "51-100-roles",
                            name: "quote_staff",
                            value: "51-100 roles",
                          }),
                          " ",
                          e(
                            "label",
                            { for: "51-100-roles", class: "oa-radio__option" },
                            "51-100 staff"
                          ),
                          e("input", {
                            type: "radio",
                            id: "101-200-roles",
                            name: "quote_staff",
                            value: "101-200 roles",
                          }),
                          " ",
                          e(
                            "label",
                            { for: "101-200-roles", class: "oa-radio__option" },
                            "101-200 staff"
                          ),
                          e("input", {
                            type: "radio",
                            id: "201-roles",
                            name: "quote_staff",
                            value: "201+ roles",
                          }),
                          " ",
                          e(
                            "label",
                            { for: "201-roles", class: "oa-radio__option" },
                            "201+ staff"
                          ),
                          e("input", {
                            type: "radio",
                            id: "other-roles",
                            name: "quote_staff",
                            value: "other",
                          }),
                          " ",
                          e(
                            "label",
                            { for: "other-roles", class: "oa-radio__option" },
                            "Other staff"
                          )
                        )
                      );
                    })(),
                    (function () {
                      var e = a;
                      return e(
                        "div",
                        { class: "oa-enterprise__tab inactive" },
                        e(
                          "h2",
                          { class: "oa-enterprise__heading-step-two" },
                          "Let’s get to know each other"
                        ),
                        e(
                          "h3",
                          { class: "oa-enterprise__step-subheading" },
                          "How big is your company?"
                        ),
                        e(
                          "div",
                          { class: "oa-enterprise__radio-btns" },
                          e("input", {
                            type: "radio",
                            id: "50-100-emp",
                            name: "quote_company_size",
                            value: "50-100 emp",
                          }),
                          " ",
                          e(
                            "label",
                            { for: "50-100-emp", class: "oa-radio__option" },
                            "50-100 staff"
                          ),
                          e("input", {
                            type: "radio",
                            id: "101-250-emp",
                            name: "quote_company_size",
                            value: "101-250 emp",
                          }),
                          " ",
                          e(
                            "label",
                            { for: "101-250-emp", class: "oa-radio__option" },
                            "101-250 staff"
                          ),
                          e("input", {
                            type: "radio",
                            id: "251-1000-emp",
                            name: "quote_company_size",
                            value: "251-1,000 emp",
                          }),
                          " ",
                          e(
                            "label",
                            { for: "251-1000-emp", class: "oa-radio__option" },
                            "251-1,000 staff"
                          ),
                          e("input", {
                            type: "radio",
                            id: "1001-5000-emp",
                            name: "quote_company_size",
                            value: "1,001-5,000 emp",
                          }),
                          " ",
                          e(
                            "label",
                            { for: "1001-5000-emp", class: "oa-radio__option" },
                            "1,001-5,000 staff"
                          ),
                          e("input", {
                            type: "radio",
                            id: "5001-10000-emp",
                            name: "quote_company_size",
                            value: "5,001-10,000 emp",
                          }),
                          " ",
                          e(
                            "label",
                            {
                              for: "5001-10000-emp",
                              class: "oa-radio__option",
                            },
                            "5,001-10,000 staff"
                          ),
                          e("input", {
                            type: "radio",
                            id: "10001-emp",
                            name: "quote_company_size",
                            value: "10,001+ emp",
                          }),
                          " ",
                          e(
                            "label",
                            { for: "10001-emp", class: "oa-radio__option" },
                            "10,001+ staff"
                          )
                        ),
                        e(
                          "h3",
                          { class: "oa-enterprise__step-subheading" },
                          "What sector is your business in?"
                        ),
                        e(
                          "div",
                          { class: "oa-enterprise__dropdown" },
                          e(
                            "select",
                            { id: "js-quote-sector", name: "quote_sector" },
                            e(
                              "option",
                              {
                                disabled: "disabled",
                                selected: "selected",
                                value: "",
                              },
                              "Select sector..."
                            ),
                            e(
                              "option",
                              { value: "advertising-and-pr" },
                              "Advertising & PR"
                            ),
                            e(
                              "option",
                              { value: "construction-renovation" },
                              "Construction Renovation"
                            ),
                            e(
                              "option",
                              { value: "digital-marketing" },
                              "Digital Marketing"
                            ),
                            e("option", { value: "ecommerce" }, "Ecommerce"),
                            e("option", { value: "education" }, "Education"),
                            e("option", { value: "energy" }, "Energy"),
                            e(
                              "option",
                              { value: "entertainment" },
                              "Entertainment"
                            ),
                            e(
                              "option",
                              { value: "financial-services" },
                              "Financial Services"
                            ),
                            e(
                              "option",
                              { value: "food-beverage" },
                              "Food & Beverage"
                            ),
                            e(
                              "option",
                              { value: "game-dev-support" },
                              "Game Dev & Support"
                            ),
                            e("option", { value: "government" }, "Government"),
                            e(
                              "option",
                              { value: "hardware-tech-it" },
                              "Hardware Tech/IT"
                            ),
                            e("option", { value: "health-care" }, "Healthcare"),
                            e(
                              "option",
                              { value: "hospitality" },
                              "Hospitality"
                            ),
                            e("option", { value: "legal" }, "Legal"),
                            e(
                              "option",
                              { value: "manufacturing" },
                              "Manufacturing"
                            ),
                            e(
                              "option",
                              { value: "media-publishing" },
                              "Media Publishing"
                            ),
                            e("option", { value: "non-profit" }, "Non Profit"),
                            e(
                              "option",
                              { value: "pharmaceutical" },
                              "Pharmaceutical"
                            ),
                            e(
                              "option",
                              { value: "public-utilities" },
                              "Public Utilities"
                            ),
                            e(
                              "option",
                              { value: "real-estate" },
                              "Real Estate"
                            ),
                            e(
                              "option",
                              { value: "recruiting-staffing" },
                              "Recruiting Staffing"
                            ),
                            e("option", { value: "retail" }, "Retail"),
                            e(
                              "option",
                              { value: "software-tech-it" },
                              "Software Tech/IT"
                            ),
                            e("option", { value: "telecoms" }, "Telecoms"),
                            e(
                              "option",
                              { value: "transportation" },
                              "Transportation"
                            ),
                            e("option", { value: "travel" }, "Travel"),
                            e("option", { value: "other" }, "Other sector")
                          )
                        )
                      );
                    })(),
                    (function () {
                      var e = a;
                      return e(
                        "div",
                        { class: "oa-enterprise__tab inactive" },
                        e(
                          "h2",
                          { class: "oa-enterprise__heading-step-two" },
                          "About your needs"
                        ),
                        e(
                          "div",
                          { class: "oa-enterprise__textareas" },
                          e(
                            "div",
                            { class: "oa-field__holder" },
                            e(
                              "label",
                              null,
                              "What roles are you looking to outsource?"
                            ),
                            e("textarea", {
                              id: "js-quote-role-to-outsource",
                              required: "true",
                              name: "quote_role_to_outsource",
                              rows: "2",
                              placeholder:
                                "E.g., customer support, graphic design, etc.",
                            })
                          ),
                          e(
                            "div",
                            { class: "oa-field__holder" },
                            e(
                              "label",
                              null,
                              "What’s one question you want to be answered?"
                            ),
                            e("textarea", {
                              id: "js-quote-key-question",
                              name: "quote_key_question",
                              rows: "3",
                              placeholder:
                                "E.g. I need staff that can work on our timezone..",
                            })
                          ),
                          e(
                            "div",
                            {
                              class: "oa-field__holder",
                              style: "margin-bottom: 0;",
                            },
                            e(
                              "label",
                              null,
                              "Please provide general comments to help specify your requirements (optional)"
                            ),
                            e("textarea", {
                              id: "js-quote-comment",
                              name: "quote_comment",
                              rows: "4",
                              style: "max-height: 4rem !important;",
                            })
                          )
                        )
                      );
                    })(),
                    a(
                      "div",
                      { class: "oa-enterprise__tab inactive" },
                      n("quote-enterprise")
                    ),
                    e(
                      "div",
                      { class: "oa-enterprise__btn--wrapper" },
                      e(
                        "button",
                        {
                          type: "button",
                          class: "oa-enterprise__btn-next-step",
                          id: "js-enterprise-nextBtn",
                        },
                        "Let's go"
                      ),
                      e(
                        "button",
                        {
                          type: "button",
                          class: "oa-enterprise__btn--prev-step",
                          id: "js-enterprise-PrevButton",
                        },
                        e("span", null, "Back")
                      )
                    )
                  ),
                  e(
                    "div",
                    { class: "oa-enterprise__for-enterprise" },
                    e(
                      "div",
                      { class: "oa-enterprise__for-step-two" },
                      "For enterprise & large teams only"
                    ),
                    e(
                      "div",
                      { class: "oa-enterprise__back-step-quote" },
                      "Not an enterprise? ",
                      e(
                        "button",
                        {
                          type: "button",
                          class:
                            "oa-enterprise__back-to-quote js-switch-quote-btn",
                        },
                        "Go to standard quote"
                      )
                    )
                  )
                ),
                e(
                  "div",
                  { class: "oa-enterprise__back-quote" },
                  "Not an enterprise? ",
                  e(
                    "button",
                    {
                      type: "button",
                      class: "oa-enterprise__back-to-quote js-switch-quote-btn",
                    },
                    "Go to standard quote"
                  )
                )
              )
            )
          );
        }
        function d(e, t, o) {
          document.cookie = e + "=" + t + "; expires=" + o + "; path=/";
        }
        function p() {
          return [
            sessionStorage.getItem("OA_POPUP_CLIENT_IP"),
            localStorage.getItem("fb_paid_source_url"),
            localStorage.getItem("li_paid_source_url"),
            localStorage.getItem("programmatic_paid_source_url"),
            localStorage.getItem("gclid_paid_source_url"),
            localStorage.getItem("gbraid_paid_source_url"),
            localStorage.getItem("wbraid_paid_source_url"),
            localStorage.getItem("msclkid_paid_source_url"),
            localStorage.getItem("OA_POPUP_ASSIGNED_UPSELL"),
          ];
        }
        function m() {
          var e = new Date(),
            t = e.getFullYear() + 1;
          return e.setFullYear(t), e;
        }
        function h(e) {
          var t = m(),
            o = 6,
            a = document.getElementsByClassName("js-counter")[0],
            n = document.getElementsByClassName("js-seconds")[0],
            i = document.getElementById("js-popup-overlay"),
            s = document.getElementById("js-primary_close-btn");
          if (a) {
            (a.textContent = "7"),
              i.classList.add("pointer-events-none"),
              s.classList.add("pointer-events-none");
            var r = setInterval(function () {
              if (((a.textContent = o), --o < 1)) {
                (n.textContent = "second"),
                  clearInterval(r),
                  d("OA_POPUP_RETURNING_CLIENT", e.email, t.toUTCString());
                var l =
                  "".concat(
                    "https://client.outsourceaccelerator.com",
                    "/authwall?em="
                  ) +
                  e.email +
                  "&tp=" +
                  e.temp_pass +
                  "&act=" +
                  e.triggered_popup;
                (window.location.href = l),
                  i.classList.remove("pointer-events-none"),
                  s.classList.remove("pointer-events-none");
              }
            }, 1e3);
          }
        }
        function v(e, t, o, a, n, i, s, r, l, c) {
          var u = {
            event_name: e,
            from_popup_name: t,
            drip_email: o,
            drip_number_with_code: a,
            drip_name: n,
            drip_lname: i,
            client_ip: s,
            client_user_agent: r,
            event_source_url: l,
            event_time: c,
          };
          console.log(u), console.log("Event fbconversionsapi: " + e);
          var d = {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(u),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers": "*",
            },
          };
          fetch(
            "".concat(
              "https://opt.outsourceaccelerator.com",
              "/fbconversionsapi"
            ),
            d
          )
            .then(function (e) {
              if (!(e.status >= 200 && e.status <= 299))
                throw Error(e.statusText);
              console.log("Success fbconversionsapi - " + e.json());
            })
            .catch(function (e) {
              console.log("Error fbconversionsapi - " + e);
            });
        }
        function _(e) {
          return (
            (_ =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            _(e)
          );
        }
        function g() {
          g = function () {
            return e;
          };
          var e = {},
            t = Object.prototype,
            o = t.hasOwnProperty,
            a = "function" == typeof Symbol ? Symbol : {},
            n = a.iterator || "@@iterator",
            i = a.asyncIterator || "@@asyncIterator",
            s = a.toStringTag || "@@toStringTag";
          function r(e, t, o) {
            return (
              Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            r({}, "");
          } catch (e) {
            r = function (e, t, o) {
              return (e[t] = o);
            };
          }
          function l(e, t, o, a) {
            var n = t && t.prototype instanceof d ? t : d,
              i = Object.create(n.prototype),
              s = new I(a || []);
            return (
              (i._invoke = (function (e, t, o) {
                var a = "suspendedStart";
                return function (n, i) {
                  if ("executing" === a)
                    throw new Error("Generator is already running");
                  if ("completed" === a) {
                    if ("throw" === n) throw i;
                    return P();
                  }
                  for (o.method = n, o.arg = i; ; ) {
                    var s = o.delegate;
                    if (s) {
                      var r = L(s, o);
                      if (r) {
                        if (r === u) continue;
                        return r;
                      }
                    }
                    if ("next" === o.method) o.sent = o._sent = o.arg;
                    else if ("throw" === o.method) {
                      if ("suspendedStart" === a)
                        throw ((a = "completed"), o.arg);
                      o.dispatchException(o.arg);
                    } else "return" === o.method && o.abrupt("return", o.arg);
                    a = "executing";
                    var l = c(e, t, o);
                    if ("normal" === l.type) {
                      if (
                        ((a = o.done ? "completed" : "suspendedYield"),
                        l.arg === u)
                      )
                        continue;
                      return { value: l.arg, done: o.done };
                    }
                    "throw" === l.type &&
                      ((a = "completed"),
                      (o.method = "throw"),
                      (o.arg = l.arg));
                  }
                };
              })(e, o, s)),
              i
            );
          }
          function c(e, t, o) {
            try {
              return { type: "normal", arg: e.call(t, o) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          e.wrap = l;
          var u = {};
          function d() {}
          function p() {}
          function m() {}
          var h = {};
          r(h, n, function () {
            return this;
          });
          var v = Object.getPrototypeOf,
            f = v && v(v(C([])));
          f && f !== t && o.call(f, n) && (h = f);
          var y = (m.prototype = d.prototype = Object.create(h));
          function b(e) {
            ["next", "throw", "return"].forEach(function (t) {
              r(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function w(e, t) {
            function a(n, i, s, r) {
              var l = c(e[n], e, i);
              if ("throw" !== l.type) {
                var u = l.arg,
                  d = u.value;
                return d && "object" == _(d) && o.call(d, "__await")
                  ? t.resolve(d.__await).then(
                      function (e) {
                        a("next", e, s, r);
                      },
                      function (e) {
                        a("throw", e, s, r);
                      }
                    )
                  : t.resolve(d).then(
                      function (e) {
                        (u.value = e), s(u);
                      },
                      function (e) {
                        return a("throw", e, s, r);
                      }
                    );
              }
              r(l.arg);
            }
            var n;
            this._invoke = function (e, o) {
              function i() {
                return new t(function (t, n) {
                  a(e, o, t, n);
                });
              }
              return (n = n ? n.then(i, i) : i());
            };
          }
          function L(e, t) {
            var o = e.iterator[t.method];
            if (void 0 === o) {
              if (((t.delegate = null), "throw" === t.method)) {
                if (
                  e.iterator.return &&
                  ((t.method = "return"),
                  (t.arg = void 0),
                  L(e, t),
                  "throw" === t.method)
                )
                  return u;
                (t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return u;
            }
            var a = c(o, e.iterator, t.arg);
            if ("throw" === a.type)
              return (
                (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), u
              );
            var n = a.arg;
            return n
              ? n.done
                ? ((t[e.resultName] = n.value),
                  (t.next = e.nextLoc),
                  "return" !== t.method &&
                    ((t.method = "next"), (t.arg = void 0)),
                  (t.delegate = null),
                  u)
                : n
              : ((t.method = "throw"),
                (t.arg = new TypeError("iterator result is not an object")),
                (t.delegate = null),
                u);
          }
          function E(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function k(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function I(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(E, this),
              this.reset(!0);
          }
          function C(e) {
            if (e) {
              var t = e[n];
              if (t) return t.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var a = -1,
                  i = function t() {
                    for (; ++a < e.length; )
                      if (o.call(e, a))
                        return (t.value = e[a]), (t.done = !1), t;
                    return (t.value = void 0), (t.done = !0), t;
                  };
                return (i.next = i);
              }
            }
            return { next: P };
          }
          function P() {
            return { value: void 0, done: !0 };
          }
          return (
            (p.prototype = m),
            r(y, "constructor", m),
            r(m, "constructor", p),
            (p.displayName = r(m, s, "GeneratorFunction")),
            (e.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === p || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (e.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, m)
                  : ((e.__proto__ = m), r(e, s, "GeneratorFunction")),
                (e.prototype = Object.create(y)),
                e
              );
            }),
            (e.awrap = function (e) {
              return { __await: e };
            }),
            b(w.prototype),
            r(w.prototype, i, function () {
              return this;
            }),
            (e.AsyncIterator = w),
            (e.async = function (t, o, a, n, i) {
              void 0 === i && (i = Promise);
              var s = new w(l(t, o, a, n), i);
              return e.isGeneratorFunction(o)
                ? s
                : s.next().then(function (e) {
                    return e.done ? e.value : s.next();
                  });
            }),
            b(y),
            r(y, s, "Generator"),
            r(y, n, function () {
              return this;
            }),
            r(y, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (e) {
              var t = [];
              for (var o in e) t.push(o);
              return (
                t.reverse(),
                function o() {
                  for (; t.length; ) {
                    var a = t.pop();
                    if (a in e) return (o.value = a), (o.done = !1), o;
                  }
                  return (o.done = !0), o;
                }
              );
            }),
            (e.values = C),
            (I.prototype = {
              constructor: I,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = void 0),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = void 0),
                  this.tryEntries.forEach(k),
                  !e)
                )
                  for (var t in this)
                    "t" === t.charAt(0) &&
                      o.call(this, t) &&
                      !isNaN(+t.slice(1)) &&
                      (this[t] = void 0);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var t = this;
                function a(o, a) {
                  return (
                    (s.type = "throw"),
                    (s.arg = e),
                    (t.next = o),
                    a && ((t.method = "next"), (t.arg = void 0)),
                    !!a
                  );
                }
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var i = this.tryEntries[n],
                    s = i.completion;
                  if ("root" === i.tryLoc) return a("end");
                  if (i.tryLoc <= this.prev) {
                    var r = o.call(i, "catchLoc"),
                      l = o.call(i, "finallyLoc");
                    if (r && l) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    } else if (r) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                    } else {
                      if (!l)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                  var n = this.tryEntries[a];
                  if (
                    n.tryLoc <= this.prev &&
                    o.call(n, "finallyLoc") &&
                    this.prev < n.finallyLoc
                  ) {
                    var i = n;
                    break;
                  }
                }
                i &&
                  ("break" === e || "continue" === e) &&
                  i.tryLoc <= t &&
                  t <= i.finallyLoc &&
                  (i = null);
                var s = i ? i.completion : {};
                return (
                  (s.type = e),
                  (s.arg = t),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), u)
                    : this.complete(s)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  u
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var o = this.tryEntries[t];
                  if (o.finallyLoc === e)
                    return this.complete(o.completion, o.afterLoc), k(o), u;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var o = this.tryEntries[t];
                  if (o.tryLoc === e) {
                    var a = o.completion;
                    if ("throw" === a.type) {
                      var n = a.arg;
                      k(o);
                    }
                    return n;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, t, o) {
                return (
                  (this.delegate = {
                    iterator: C(e),
                    resultName: t,
                    nextLoc: o,
                  }),
                  "next" === this.method && (this.arg = void 0),
                  u
                );
              },
            }),
            e
          );
        }
        function f(e, t, o, a, n, i, s) {
          try {
            var r = e[i](s),
              l = r.value;
          } catch (e) {
            return void o(e);
          }
          r.done ? t(l) : Promise.resolve(l).then(a, n);
        }
        function y(e) {
          return function () {
            var t = this,
              o = arguments;
            return new Promise(function (a, n) {
              var i = e.apply(t, o);
              function s(e) {
                f(i, a, n, s, r, "next", e);
              }
              function r(e) {
                f(i, a, n, s, r, "throw", e);
              }
              s(void 0);
            });
          };
        }
        function b(e, t) {
          if (e) {
            (void 0 !== e.temp_pass && null !== e.temp_pass) ||
              (e.temp_pass = Math.random().toString(36).slice(2));
            for (
              var o = p(),
                a = [
                  "client_ip",
                  "fb_paid_source_url",
                  "li_paid_source_url",
                  "programmatic_paid_source_url",
                  "gclid_paid_source_url",
                  "gbraid_paid_source_url",
                  "wbraid_paid_source_url",
                  "msclkid_paid_source_url",
                  "lead_upsell",
                ],
                n = 0;
              n < a.length;
              n++
            )
              e[a[n]] = o[n];
            "quote-enterprise" == e.triggered_popup && (e.lead_upsell = null),
              (function (e, t) {
                w.apply(this, arguments);
              })(e, t);
          }
        }
        function w() {
          return (w = y(
            g().mark(function e(t, o) {
              var a, n, i, s, r, l, c, u;
              return g().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        console.log(t),
                        console.log(o),
                        (a = document.getElementById("js-popup-overlay")),
                        (n = document.getElementById("js-primary_close-btn")),
                        (i = document.getElementsByClassName(
                          "oa-popup__content-wrapper"
                        )[0]),
                        (s = document.getElementById(
                          "js-form-error-container"
                        )),
                        (r = m()),
                        i && i.classList.add("oa_popup-busy"),
                        (e.next = 10),
                        fetch(
                          "".concat(
                            "https://opt.outsourceaccelerator.com",
                            "/popup-webhook"
                          ),
                          {
                            method: "POST",
                            mode: "cors",
                            body: JSON.stringify(t),
                            headers: {
                              "Content-type": "application/json; charset=UTF-8",
                              "Access-Control-Allow-Origin": "*",
                              "Access-Control-Allow-Headers": "*",
                            },
                          }
                        )
                      );
                    case 10:
                      return (
                        (l = e.sent),
                        i && i.classList.remove("oa_popup-busy"),
                        (e.next = 14),
                        l.json()
                      );
                    case 14:
                      if (
                        ((c = e.sent),
                        console.log(c.status_code),
                        200 != c.status_code)
                      ) {
                        e.next = 40;
                        break;
                      }
                      (e.t0 = o),
                        (e.next =
                          "save" === e.t0
                            ? 20
                            : "save-upsell-consult" === e.t0
                            ? 23
                            : "save-upsell-express" === e.t0
                            ? 26
                            : "save-upsell-cashback" === e.t0
                            ? 28
                            : "save-upsell-concierge" === e.t0
                            ? 31
                            : 34);
                      break;
                    case 20:
                      return (
                        "quote-enterprise" == t.triggered_popup
                          ? me({
                              popup_to_display: "enterprise-thankyou",
                              active_popup: "quote-enterprise",
                            })
                          : ("quote" != t.triggered_popup &&
                              (document.getElementById(
                                "js-".concat(t.triggered_popup, "-step-one")
                              ).style.display = "none"),
                            (document.getElementById(
                              "js-".concat(t.triggered_popup, "-form-step-two")
                            ).style.display = "grid"),
                            document
                              .getElementById(
                                "js-".concat(
                                  t.triggered_popup,
                                  "-intro-step-two"
                                )
                              )
                              .classList.add("slide"),
                            (document.getElementById(
                              "js-upsell-popup"
                            ).style.display = "inline-grid"),
                            a && a.classList.add("pointer-events-none"),
                            n && n.classList.add("pointer-events-none")),
                        k(t) || L(t),
                        e.abrupt("break", 38)
                      );
                    case 23:
                      return (
                        me({ popup_to_display: "upsell-consult" }),
                        k(t) || E(t),
                        e.abrupt("break", 38)
                      );
                    case 26:
                      return (
                        me({ popup_to_display: "upsell-express" }),
                        e.abrupt("break", 38)
                      );
                    case 28:
                      return (
                        me({ popup_to_display: "upsell-cashback" }),
                        h(t),
                        e.abrupt("break", 38)
                      );
                    case 31:
                      return (
                        me({ popup_to_display: "upsell-concierge" }),
                        h(t),
                        e.abrupt("break", 38)
                      );
                    case 34:
                      return (
                        d(
                          "OA_POPUP_RETURNING_CLIENT",
                          t.email,
                          r.toUTCString()
                        ),
                        (u =
                          "".concat(
                            "https://client.outsourceaccelerator.com",
                            "/authwall?em="
                          ) +
                          t.email +
                          "&tp=" +
                          t.temp_pass +
                          "&act=" +
                          t.triggered_popup),
                        (window.location.href = u),
                        e.abrupt("break", 38)
                      );
                    case 38:
                      e.next = 41;
                      break;
                    case 40:
                      204 == c.status_code
                        ? "save-enterprise" == t.triggered_popup
                          ? me({
                              popup_to_display: "enterprise-thankyou",
                              active_popup: "quote-enterprise",
                            })
                          : (d(
                              "OA_POPUP_RETURNING_CLIENT",
                              t.email,
                              r.toUTCString()
                            ),
                            (window.location.href = "".concat(
                              "https://client.outsourceaccelerator.com",
                              "/dashboard"
                            )))
                        : ((s.style.display = "block"),
                          (s.innerHTML =
                            "An error has occurred please try again."),
                          setTimeout(function () {
                            (s.style.display = "block"), (s.innerHTML = "");
                          }, 4e3));
                    case 41:
                      i && i.classList.remove("oa_popup-busy");
                    case 42:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        function L(e) {
          var t,
            o,
            a = Math.floor(new Date() / 1e3);
          null === sessionStorage.getItem("OA-CONVERSION-RECORDED") &&
            ((t = e.triggered_popup),
            (o = a),
            console.log("TrackConversionEvent - " + t + o),
            ("quote" != t && "quote-enterprise" != t) ||
              (ga("send", "event", "POPUP", "conversion", "Get 3 quotes"),
              fbq(
                "track",
                "Lead",
                { currency: "USD", value: 45 },
                { eventID: "Lead" + o }
              ),
              gtag("event", "conversion", {
                send_to: "AW-851243907/0HhrCOmP5OABEIPn85UD",
              }),
              twq("event", "tw-offd4-ofni9", {}),
              (window.uetq = window.uetq || []),
              window.uetq.push({ ec: "Form", ea: "Quote", el: "Quote", ev: 1 }),
              window.lintrk("track", { conversion_id: 4657244 })),
            "toolkit" == t &&
              (ga("send", "event", "POPUP", "conversion", "Toolkit"),
              fbq(
                "track",
                "Lead",
                { currency: "USD", value: 20 },
                { eventID: "Lead" + o }
              ),
              gtag("event", "conversion", {
                send_to: "AW-851243907/RzjTCNfw_uABEIPn85UD",
              }),
              twq("event", "tw-offd4-ofni5", {}),
              (window.uetq = window.uetq || []),
              window.uetq.push({
                ec: "Form",
                ea: "Toolkit",
                el: "Toolkit",
                ev: 1,
              }),
              window.lintrk("track", { conversion_id: 4657260 })),
            "booking" == t &&
              (ga("send", "event", "POPUP", "conversion", "Book a call"),
              fbq(
                "track",
                "Lead",
                { currency: "USD", value: 30 },
                { eventID: "Lead" + o }
              ),
              gtag("event", "conversion", {
                send_to: "AW-851243907/Fuc8CLiN_-ABEIPn85UD",
              }),
              twq("event", "tw-offd4-ofni7", {}),
              (window.uetq = window.uetq || []),
              window.uetq.push({ ec: "Form", ea: "Call", el: "Call", ev: 1 }),
              window.lintrk("track", { conversion_id: 4657252 })),
            v(
              "Lead",
              e.triggered_popup,
              e.email,
              e.phone_number_with_code,
              e.first_name,
              e.last_name,
              e.client_ip,
              e.user_agent,
              e.landing_url,
              a
            ),
            sessionStorage.setItem("OA-CONVERSION-RECORDED", "1"));
        }
        function E(e) {
          var t,
            o,
            a = Math.floor(new Date() / 1e3);
          null === sessionStorage.getItem("OA-PURCHASE-RECORDED") &&
            ((t = e.triggered_popup),
            (o = a),
            console.log("TrackPurchaseEvent - " + t + o),
            fbq(
              "track",
              "Purchase",
              { currency: "USD", value: 100 },
              { eventID: "Purchase" + o }
            ),
            v(
              "Purchase",
              e.triggered_popup,
              e.email,
              e.phone_number_with_code,
              e.first_name,
              e.last_name,
              e.client_ip,
              e.user_agent,
              e.landing_url,
              a
            ),
            sessionStorage.setItem("OA-PURCHASE-RECORDED", "1"));
        }
        function k(e) {
          var t = e.email.indexOf("@");
          if (-1 !== t) {
            if (
              [
                "gufum.com",
                "exelica.com",
                "armyspy.com",
                "in2reach.com",
                "bugfoo.com",
                "mailinator.com",
                "bozzcello.com",
                "bozztirex.us",
                "bozztirex.co",
                "bozztirex.com",
                "mdriveku.my.id",
                "bozzti.us",
                "bozzt.us",
                "bozza.us",
                "bozz.com",
                "outsourceaccelerator.com",
              ].includes(e.email.slice(t + 1))
            )
              return !0;
          }
          return "" != e.anipat;
        }
        function I(e, t) {
          if (e) {
            for (
              var o = p(),
                a = [
                  "client_ip",
                  "fb_paid_source_url",
                  "li_paid_source_url",
                  "programmatic_paid_source_url",
                  "gclid_paid_source_url",
                  "gbraid_paid_source_url",
                  "wbraid_paid_source_url",
                  "msclkid_paid_source_url",
                  "lead_upsell",
                ],
                n = 0;
              n < a.length;
              n++
            )
              e[a[n]] = o[n];
            if ("optin" == t)
              e.drip_tags = ["OPTIN-UPSELL".concat(e.lead_upsell)];
            else
              switch (e.triggered_popup) {
                case "quote":
                  e.drip_tags = ["QUOTE ENTRY", "submit quote form"];
                  break;
                case "quote-enterprise":
                  e.drip_tags = ["QUOTE ENTRY", "submit quote enterprise form"];
                  break;
                case "booking":
                  e.drip_tags = ["submit book form"];
                  break;
                case "toolkit":
                  e.drip_tags = ["submit toolkit form"];
              }
            !(function (e) {
              fetch(
                "".concat("https://opt.outsourceaccelerator.com", "/drip"),
                {
                  method: "POST",
                  mode: "cors",
                  body: JSON.stringify(e),
                  headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "*",
                  },
                }
              )
                .then(function (e) {
                  if (e.status >= 200 && e.status <= 299) return e.json();
                  throw Error(e.statusText);
                })
                .then(function (e) {
                  console.log(e);
                })
                .catch(function (e) {});
            })(e);
          }
        }
        function C(e) {
          e && (e.lead_upsell_optin = 0);
          var t = document.getElementById("js-upsell-false"),
            o = document.getElementById("js-upsell-false-2");
          t.addEventListener("click", function (o) {
            (t.innerHTML =
              ' \n                <svg className="oa-preloader" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" \n                    style="\n                        width: 1.25rem !important;\n                        height: 1.25rem !important;\n                        animation: spin 1s linear infinite !important;\n                        color: #003bb3 !important;\n                        margin-right: 0.75rem !important;\n                        margin-left: -0.25rem !important;\n                    "\n                >\n                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\n                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\n                </svg>\n                Please wait...\n            '),
              b(e);
          }),
            o.addEventListener("click", function (t) {
              (o.innerHTML =
                ' \n                <svg className="oa-preloader" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" \n                    style="\n                        width: 1.25rem !important;\n                        height: 1.25rem !important;\n                        animation: spin 1s linear infinite !important;\n                        color: #003bb3 !important;\n                        margin-right: 0.75rem !important;\n                        margin-left: -0.25rem !important;\n                    "\n                >\n                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\n                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\n                </svg>\n                Please wait...\n            '),
                b(e);
            }),
            document
              .querySelector(".is-blacked-out")
              .addEventListener("click", function () {
                b(e);
              }),
            document
              .getElementsByClassName("js-popup-close-btn")[0]
              .addEventListener("click", function () {
                b(e);
              });
        }
        function P(e, t) {
          switch ((e && (e.lead_upsell_optin = 1), t)) {
            case "UPSELL-1":
            case "UPSELL-2":
              console.log(t), b(e, "save-upsell-consult"), I(e, "optin");
              break;
            case "UPSELL-3":
            case "UPSELL-4":
              console.log(t), b(e, "save-upsell-express"), I(e, "optin");
              break;
            case "UPSELL-5":
            case "UPSELL-6":
              console.log(t), b(e, "save-upsell-concierge"), I(e, "optin");
              break;
            case "UPSELL-7":
              console.log(t), b(e, "save-upsell-expert"), I(e, "optin");
              break;
            case "UPSELL-8":
            case "UPSELL-9":
              console.log(t), b(e, "save-upsell-cashback"), I(e, "optin");
          }
        }
        function O(e) {
          return (
            (O =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            O(e)
          );
        }
        function S() {
          S = function () {
            return e;
          };
          var e = {},
            t = Object.prototype,
            o = t.hasOwnProperty,
            a = "function" == typeof Symbol ? Symbol : {},
            n = a.iterator || "@@iterator",
            i = a.asyncIterator || "@@asyncIterator",
            s = a.toStringTag || "@@toStringTag";
          function r(e, t, o) {
            return (
              Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            r({}, "");
          } catch (e) {
            r = function (e, t, o) {
              return (e[t] = o);
            };
          }
          function l(e, t, o, a) {
            var n = t && t.prototype instanceof d ? t : d,
              i = Object.create(n.prototype),
              s = new E(a || []);
            return (
              (i._invoke = (function (e, t, o) {
                var a = "suspendedStart";
                return function (n, i) {
                  if ("executing" === a)
                    throw new Error("Generator is already running");
                  if ("completed" === a) {
                    if ("throw" === n) throw i;
                    return I();
                  }
                  for (o.method = n, o.arg = i; ; ) {
                    var s = o.delegate;
                    if (s) {
                      var r = b(s, o);
                      if (r) {
                        if (r === u) continue;
                        return r;
                      }
                    }
                    if ("next" === o.method) o.sent = o._sent = o.arg;
                    else if ("throw" === o.method) {
                      if ("suspendedStart" === a)
                        throw ((a = "completed"), o.arg);
                      o.dispatchException(o.arg);
                    } else "return" === o.method && o.abrupt("return", o.arg);
                    a = "executing";
                    var l = c(e, t, o);
                    if ("normal" === l.type) {
                      if (
                        ((a = o.done ? "completed" : "suspendedYield"),
                        l.arg === u)
                      )
                        continue;
                      return { value: l.arg, done: o.done };
                    }
                    "throw" === l.type &&
                      ((a = "completed"),
                      (o.method = "throw"),
                      (o.arg = l.arg));
                  }
                };
              })(e, o, s)),
              i
            );
          }
          function c(e, t, o) {
            try {
              return { type: "normal", arg: e.call(t, o) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          e.wrap = l;
          var u = {};
          function d() {}
          function p() {}
          function m() {}
          var h = {};
          r(h, n, function () {
            return this;
          });
          var v = Object.getPrototypeOf,
            _ = v && v(v(k([])));
          _ && _ !== t && o.call(_, n) && (h = _);
          var g = (m.prototype = d.prototype = Object.create(h));
          function f(e) {
            ["next", "throw", "return"].forEach(function (t) {
              r(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function y(e, t) {
            function a(n, i, s, r) {
              var l = c(e[n], e, i);
              if ("throw" !== l.type) {
                var u = l.arg,
                  d = u.value;
                return d && "object" == O(d) && o.call(d, "__await")
                  ? t.resolve(d.__await).then(
                      function (e) {
                        a("next", e, s, r);
                      },
                      function (e) {
                        a("throw", e, s, r);
                      }
                    )
                  : t.resolve(d).then(
                      function (e) {
                        (u.value = e), s(u);
                      },
                      function (e) {
                        return a("throw", e, s, r);
                      }
                    );
              }
              r(l.arg);
            }
            var n;
            this._invoke = function (e, o) {
              function i() {
                return new t(function (t, n) {
                  a(e, o, t, n);
                });
              }
              return (n = n ? n.then(i, i) : i());
            };
          }
          function b(e, t) {
            var o = e.iterator[t.method];
            if (void 0 === o) {
              if (((t.delegate = null), "throw" === t.method)) {
                if (
                  e.iterator.return &&
                  ((t.method = "return"),
                  (t.arg = void 0),
                  b(e, t),
                  "throw" === t.method)
                )
                  return u;
                (t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return u;
            }
            var a = c(o, e.iterator, t.arg);
            if ("throw" === a.type)
              return (
                (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), u
              );
            var n = a.arg;
            return n
              ? n.done
                ? ((t[e.resultName] = n.value),
                  (t.next = e.nextLoc),
                  "return" !== t.method &&
                    ((t.method = "next"), (t.arg = void 0)),
                  (t.delegate = null),
                  u)
                : n
              : ((t.method = "throw"),
                (t.arg = new TypeError("iterator result is not an object")),
                (t.delegate = null),
                u);
          }
          function w(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function L(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function E(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(w, this),
              this.reset(!0);
          }
          function k(e) {
            if (e) {
              var t = e[n];
              if (t) return t.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var a = -1,
                  i = function t() {
                    for (; ++a < e.length; )
                      if (o.call(e, a))
                        return (t.value = e[a]), (t.done = !1), t;
                    return (t.value = void 0), (t.done = !0), t;
                  };
                return (i.next = i);
              }
            }
            return { next: I };
          }
          function I() {
            return { value: void 0, done: !0 };
          }
          return (
            (p.prototype = m),
            r(g, "constructor", m),
            r(m, "constructor", p),
            (p.displayName = r(m, s, "GeneratorFunction")),
            (e.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === p || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (e.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, m)
                  : ((e.__proto__ = m), r(e, s, "GeneratorFunction")),
                (e.prototype = Object.create(g)),
                e
              );
            }),
            (e.awrap = function (e) {
              return { __await: e };
            }),
            f(y.prototype),
            r(y.prototype, i, function () {
              return this;
            }),
            (e.AsyncIterator = y),
            (e.async = function (t, o, a, n, i) {
              void 0 === i && (i = Promise);
              var s = new y(l(t, o, a, n), i);
              return e.isGeneratorFunction(o)
                ? s
                : s.next().then(function (e) {
                    return e.done ? e.value : s.next();
                  });
            }),
            f(g),
            r(g, s, "Generator"),
            r(g, n, function () {
              return this;
            }),
            r(g, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (e) {
              var t = [];
              for (var o in e) t.push(o);
              return (
                t.reverse(),
                function o() {
                  for (; t.length; ) {
                    var a = t.pop();
                    if (a in e) return (o.value = a), (o.done = !1), o;
                  }
                  return (o.done = !0), o;
                }
              );
            }),
            (e.values = k),
            (E.prototype = {
              constructor: E,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = void 0),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = void 0),
                  this.tryEntries.forEach(L),
                  !e)
                )
                  for (var t in this)
                    "t" === t.charAt(0) &&
                      o.call(this, t) &&
                      !isNaN(+t.slice(1)) &&
                      (this[t] = void 0);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var t = this;
                function a(o, a) {
                  return (
                    (s.type = "throw"),
                    (s.arg = e),
                    (t.next = o),
                    a && ((t.method = "next"), (t.arg = void 0)),
                    !!a
                  );
                }
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var i = this.tryEntries[n],
                    s = i.completion;
                  if ("root" === i.tryLoc) return a("end");
                  if (i.tryLoc <= this.prev) {
                    var r = o.call(i, "catchLoc"),
                      l = o.call(i, "finallyLoc");
                    if (r && l) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    } else if (r) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                    } else {
                      if (!l)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                  var n = this.tryEntries[a];
                  if (
                    n.tryLoc <= this.prev &&
                    o.call(n, "finallyLoc") &&
                    this.prev < n.finallyLoc
                  ) {
                    var i = n;
                    break;
                  }
                }
                i &&
                  ("break" === e || "continue" === e) &&
                  i.tryLoc <= t &&
                  t <= i.finallyLoc &&
                  (i = null);
                var s = i ? i.completion : {};
                return (
                  (s.type = e),
                  (s.arg = t),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), u)
                    : this.complete(s)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  u
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var o = this.tryEntries[t];
                  if (o.finallyLoc === e)
                    return this.complete(o.completion, o.afterLoc), L(o), u;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var o = this.tryEntries[t];
                  if (o.tryLoc === e) {
                    var a = o.completion;
                    if ("throw" === a.type) {
                      var n = a.arg;
                      L(o);
                    }
                    return n;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, t, o) {
                return (
                  (this.delegate = {
                    iterator: k(e),
                    resultName: t,
                    nextLoc: o,
                  }),
                  "next" === this.method && (this.arg = void 0),
                  u
                );
              },
            }),
            e
          );
        }
        function j(e, t, o, a, n, i, s) {
          try {
            var r = e[i](s),
              l = r.value;
          } catch (e) {
            return void o(e);
          }
          r.done ? t(l) : Promise.resolve(l).then(a, n);
        }
        function x(e, t, o) {
          var a = Stripe(
              "pk_live_51NclCvJ9HTb3aB3HnaWhEyKZzdFqqPRhptgiQGzKXwyJ2UhScXRwFueb6PGuArjGCHrrp1Nz4NjzOtw1kFhFHlk500oyFEDmEB"
            ),
            n = a
              .elements()
              .create("card", { style: { base: { color: "#32325d" } } });
          n.mount("#js-stripe-card-element"),
            n.addEventListener("change", function (e) {
              var t = e.error,
                o = document.getElementById("js-stripe-card-errors");
              o.textContent = t ? t.message : "";
            }),
            document.getElementById("js-stripe-payment-form").addEventListener(
              "submit",
              (function () {
                var i,
                  s =
                    ((i = S().mark(function i(s) {
                      var r, l, c, u, d, p, m, h, v, _, g, f;
                      return S().wrap(
                        function (i) {
                          for (;;)
                            switch ((i.prev = i.next)) {
                              case 0:
                                if (
                                  (s.preventDefault(),
                                  (r = document.getElementById(
                                    "js-".concat(e.triggered_popup, "-form")
                                  )),
                                  (l = r.querySelector.bind(r)),
                                  (c = l('input[name="email"]').value),
                                  (u =
                                    l('input[name="first_name"]').value +
                                    " " +
                                    l('input[name="last_name"]').value),
                                  (d = document.querySelector("#status")),
                                  (p = t),
                                  (m = document.getElementById("oa_buy_now")),
                                  (h =
                                    document.getElementsByClassName(
                                      "is--visible"
                                    )[0]),
                                  m.classList.add("oa-popup__btn--busy"),
                                  h.classList.add("oa_busy-oa_popupOverlay"),
                                  isNaN(Number(p)))
                                ) {
                                  i.next = 26;
                                  break;
                                }
                                return (
                                  (i.prev = 12),
                                  (v = { amount: p, upsell_type: o }),
                                  (i.next = 16),
                                  fetch(
                                    "".concat(
                                      "https://opt.outsourceaccelerator.com",
                                      "/charge"
                                    ),
                                    {
                                      method: "POST",
                                      headers: {
                                        "Content-Type": "application/json",
                                        "Access-Control-Allow-Origin": "*",
                                      },
                                      body: JSON.stringify(v),
                                    }
                                  )
                                );
                              case 16:
                                return (_ = i.sent), (i.next = 19), _.json();
                              case 19:
                                (g = i.sent),
                                  (f = g.clientSecret),
                                  a
                                    .confirmCardPayment(f, {
                                      payment_method: {
                                        card: n,
                                        billing_details: { email: c, name: u },
                                      },
                                      receipt_email: c,
                                    })
                                    .then(function (t) {
                                      t.error
                                        ? ((d.innerText = t.error.message),
                                          d.classList.add("alert-danger"),
                                          m.classList.remove(
                                            "oa-popup__btn--busy"
                                          ),
                                          h.classList.remove(
                                            "oa_busy-oa_popupOverlay"
                                          ))
                                        : "succeeded" === t.paymentIntent.status
                                        ? ((d.innerText =
                                            "Transaction was successfull."),
                                          d.classList.add("alert-success"),
                                          document
                                            .getElementById(
                                              "js-popups-container"
                                            )
                                            .remove(),
                                          P(e, o),
                                          h.classList.remove(
                                            "oa_busy-oa_popupOverlay"
                                          ))
                                        : ((d.innerText =
                                            t.paymentIntent.status),
                                          d.classList.add("alert-danger"),
                                          m.classList.remove(
                                            "oa-popup__btn--busy"
                                          ),
                                          h.classList.remove(
                                            "oa_busy-oa_popupOverlay"
                                          ));
                                    }),
                                  (i.next = 26);
                                break;
                              case 24:
                                (i.prev = 24), (i.t0 = i.catch(12));
                              case 26:
                              case "end":
                                return i.stop();
                            }
                        },
                        i,
                        null,
                        [[12, 24]]
                      );
                    })),
                    function () {
                      var e = this,
                        t = arguments;
                      return new Promise(function (o, a) {
                        var n = i.apply(e, t);
                        function s(e) {
                          j(n, o, a, s, r, "next", e);
                        }
                        function r(e) {
                          j(n, o, a, s, r, "throw", e);
                        }
                        s(void 0);
                      });
                    });
                return function (e) {
                  return s.apply(this, arguments);
                };
              })()
            );
        }
        function A(e, t, o) {
          var n = a,
            i = document.getElementById("js-checkout-PrevButton"),
            s = document.getElementById("js-previous-btn");
          s && s.classList.add("hide"), i.classList.remove("hide");
          var r = document.getElementsByClassName(
              "js-".concat(e.triggered_popup, "-form-col")
            )["quote" == e.triggered_popup ? 1 : 0],
            l = document.getElementById(
              "js-".concat(e.triggered_popup, "-form-step-two")
            );
          l.classList.add("hide"),
            r.appendChild(
              n(
                "div",
                { class: "oa-stripe__checkout step-3" },
                n(
                  "div",
                  { class: "oa-stripe__card-img" },
                  n("img", {
                    src: "".concat(
                      "https://opt.outsourceaccelerator.com",
                      "/img/card.png"
                    ),
                    alt: "Checkout",
                    loading: "lazy",
                  })
                ),
                n(
                  "div",
                  { class: "oa-stripe__body" },
                  n(
                    "label",
                    { class: "oa-stripe__title" },
                    "Credit or debit card"
                  ),
                  n(
                    "div",
                    { class: "oa-stripe__card-types" },
                    n("img", {
                      src: "".concat(
                        "https://opt.outsourceaccelerator.com",
                        "/img/outsource-accelerator-credit-card-150x21.png"
                      ),
                      alt: "Accepted Cards",
                      style: "margin: 0 auto",
                      loading: "lazy",
                    })
                  )
                ),
                n(
                  "form",
                  {
                    id: "js-stripe-payment-form",
                    class: "oa-stripe__payment-form",
                  },
                  n(
                    "div",
                    { class: "oa-stripe__payment" },
                    n("div", {
                      id: "js-stripe-card-element",
                      class: "oa-stripe__input",
                    }),
                    n(
                      "div",
                      { class: "oa-stripe__card-errors--container" },
                      n("div", {
                        class: "oa-stripe__card-errors",
                        id: "js-stripe-card-errors",
                        role: "alert",
                        style: "display: none;",
                      }),
                      n("div", {
                        class: "alert oa-stripe__card-errors",
                        id: "status",
                      })
                    )
                  ),
                  n(
                    "button",
                    {
                      class: "oa-btn__primary oa-stripe__btn",
                      id: "oa_buy_now",
                    },
                    "BUY NOW - $",
                    t
                  ),
                  n(
                    "small",
                    { class: "oa-stripe__text " },
                    "Secure checkout powered by",
                    " ",
                    n(
                      "a",
                      {
                        href: "https://stripe.com/",
                        target: "_blank",
                        rel: "nofollow",
                        style: "display: initial; font-size: 12px; padding: 0;",
                      },
                      "Stripe"
                    ),
                    "."
                  )
                )
              )
            ),
            x(e, t, o),
            document
              .getElementById("js-stripe-payment-form")
              .addEventListener("keyup", function (e) {
                13 === e.keyCode &&
                  document.getElementById("oa_buy_now").click();
              }),
            i.addEventListener("click", function () {
              var t = document.getElementsByClassName("js-body-step-2")[0],
                o = document.getElementsByClassName("js-btn-collapse-2")[0];
              t &&
                (t.classList.remove("active-collapsible"),
                t.removeAttribute("style")),
                o &&
                  (o.classList.add("deactivate-pointers"),
                  o.classList.remove("active-collapsible"),
                  o.classList.remove(
                    "oa-".concat(e.triggered_popup, "__heading--active")
                  )),
                s && s.classList.remove("hide"),
                i.classList.add("hide"),
                l.classList.remove("hide"),
                document
                  .querySelectorAll(".oa-stripe__checkout")
                  .forEach(function (e) {
                    return e.parentNode.removeChild(e);
                  });
            });
        }
        function B(e) {
          var t = document.getElementById("js-upsell-true-1");
          t &&
            t.addEventListener("click", function (t) {
              var o = document.getElementsByClassName("js-body-step-2")[0],
                a = document.getElementsByClassName("js-btn-collapse-2")[0];
              o && o.classList.add("active-collapsible"),
                a &&
                  (a.classList.add("active-collapsible"),
                  a.classList.remove("deactivate-pointers"),
                  a.classList.remove(
                    "oa-".concat(e.triggered_popup, "__heading--active")
                  )),
                A(e, "29", "UPSELL-1");
            });
          var o = document.getElementById("js-upsell-true-2");
          o &&
            o.addEventListener("click", function (t) {
              var o = document.getElementsByClassName("js-body-step-2")[0],
                a = document.getElementsByClassName("js-btn-collapse-2")[0];
              o && o.classList.add("active-collapsible"),
                a &&
                  (a.classList.add("active-collapsible"),
                  a.classList.remove("deactivate-pointers"),
                  a.classList.remove(
                    "oa-".concat(e.triggered_popup, "__heading--active")
                  )),
                A(e, "29", "UPSELL-2");
            });
          var a = document.getElementById("js-upsell-true-3");
          a &&
            a.addEventListener("click", function (t) {
              P(e, "UPSELL-3");
            });
          var n = document.getElementById("js-upsell-true-4");
          n &&
            n.addEventListener("click", function (t) {
              P(e, "UPSELL-4");
            });
          var i = document.getElementById("js-upsell-true-5");
          i &&
            i.addEventListener("click", function (t) {
              P(e, "UPSELL-5");
              var o = document.getElementById("js-popup-overlay"),
                a = document.getElementById("js-primary_close-btn");
              o && o.classList.add("pointer-events-none"),
                a && a.classList.add("pointer-events-none");
            });
          var s = document.getElementById("js-upsell-true-6");
          s &&
            s.addEventListener("click", function (t) {
              P(e, "UPSELL-6");
              var o = document.getElementById("js-popup-overlay"),
                a = document.getElementById("js-primary_close-btn");
              o && o.classList.add("pointer-events-none"),
                a && a.classList.add("pointer-events-none");
            });
          var r = document.getElementById("js-upsell-true-7");
          r &&
            r.addEventListener("click", function (t) {
              ("booking" != e.triggered_popup &&
                "toolkit" != e.triggered_popup) ||
                (document.getElementById(
                  "js-".concat(e.triggered_popup, "-step-one")
                ).style.display = "none"),
                (document.getElementById("js-upsell-popup").style.display =
                  "none"),
                (document.getElementById(
                  "js-".concat(e.triggered_popup, "-expert-form-step-two")
                ).style.display = "grid"),
                document
                  .getElementById(
                    "js-".concat(e.triggered_popup, "-expert-intro-step-two")
                  )
                  .classList.add("slide"),
                (document.getElementById(
                  "js-upsell-expert-popup"
                ).style.display = "inline-grid"),
                document
                  .getElementById("js-upsell-false-2")
                  .classList.add("upsell-false-2-active");
            });
          var l = document.getElementById("js-upsell-true-8");
          l &&
            l.addEventListener("click", function (t) {
              var o = document.getElementsByClassName("js-body-step-2")[0],
                a = document.getElementsByClassName("js-btn-collapse-2")[0];
              o && o.classList.add("active-collapsible"),
                a &&
                  (a.classList.add("active-collapsible"),
                  a.classList.remove("deactivate-pointers"),
                  a.classList.remove(
                    "oa-".concat(e.triggered_popup, "__heading--active")
                  )),
                A(e, "10", "UPSELL-8");
            });
          var c = document.getElementById("js-upsell-true-9");
          c &&
            c.addEventListener("click", function (t) {
              var o = document.getElementsByClassName("js-body-step-2")[0],
                a = document.getElementsByClassName("js-btn-collapse-2")[0];
              o && o.classList.add("active-collapsible"),
                a &&
                  (a.classList.add("active-collapsible"),
                  a.classList.remove("deactivate-pointers"),
                  a.classList.remove(
                    "oa-".concat(e.triggered_popup, "__heading--active")
                  )),
                A(e, "10", "UPSELL-9");
            });
        }
        function N(e) {
          return (
            (N =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            N(e)
          );
        }
        function q() {
          q = function () {
            return e;
          };
          var e = {},
            t = Object.prototype,
            o = t.hasOwnProperty,
            a = "function" == typeof Symbol ? Symbol : {},
            n = a.iterator || "@@iterator",
            i = a.asyncIterator || "@@asyncIterator",
            s = a.toStringTag || "@@toStringTag";
          function r(e, t, o) {
            return (
              Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            r({}, "");
          } catch (e) {
            r = function (e, t, o) {
              return (e[t] = o);
            };
          }
          function l(e, t, o, a) {
            var n = t && t.prototype instanceof d ? t : d,
              i = Object.create(n.prototype),
              s = new E(a || []);
            return (
              (i._invoke = (function (e, t, o) {
                var a = "suspendedStart";
                return function (n, i) {
                  if ("executing" === a)
                    throw new Error("Generator is already running");
                  if ("completed" === a) {
                    if ("throw" === n) throw i;
                    return I();
                  }
                  for (o.method = n, o.arg = i; ; ) {
                    var s = o.delegate;
                    if (s) {
                      var r = b(s, o);
                      if (r) {
                        if (r === u) continue;
                        return r;
                      }
                    }
                    if ("next" === o.method) o.sent = o._sent = o.arg;
                    else if ("throw" === o.method) {
                      if ("suspendedStart" === a)
                        throw ((a = "completed"), o.arg);
                      o.dispatchException(o.arg);
                    } else "return" === o.method && o.abrupt("return", o.arg);
                    a = "executing";
                    var l = c(e, t, o);
                    if ("normal" === l.type) {
                      if (
                        ((a = o.done ? "completed" : "suspendedYield"),
                        l.arg === u)
                      )
                        continue;
                      return { value: l.arg, done: o.done };
                    }
                    "throw" === l.type &&
                      ((a = "completed"),
                      (o.method = "throw"),
                      (o.arg = l.arg));
                  }
                };
              })(e, o, s)),
              i
            );
          }
          function c(e, t, o) {
            try {
              return { type: "normal", arg: e.call(t, o) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          e.wrap = l;
          var u = {};
          function d() {}
          function p() {}
          function m() {}
          var h = {};
          r(h, n, function () {
            return this;
          });
          var v = Object.getPrototypeOf,
            _ = v && v(v(k([])));
          _ && _ !== t && o.call(_, n) && (h = _);
          var g = (m.prototype = d.prototype = Object.create(h));
          function f(e) {
            ["next", "throw", "return"].forEach(function (t) {
              r(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function y(e, t) {
            function a(n, i, s, r) {
              var l = c(e[n], e, i);
              if ("throw" !== l.type) {
                var u = l.arg,
                  d = u.value;
                return d && "object" == N(d) && o.call(d, "__await")
                  ? t.resolve(d.__await).then(
                      function (e) {
                        a("next", e, s, r);
                      },
                      function (e) {
                        a("throw", e, s, r);
                      }
                    )
                  : t.resolve(d).then(
                      function (e) {
                        (u.value = e), s(u);
                      },
                      function (e) {
                        return a("throw", e, s, r);
                      }
                    );
              }
              r(l.arg);
            }
            var n;
            this._invoke = function (e, o) {
              function i() {
                return new t(function (t, n) {
                  a(e, o, t, n);
                });
              }
              return (n = n ? n.then(i, i) : i());
            };
          }
          function b(e, t) {
            var o = e.iterator[t.method];
            if (void 0 === o) {
              if (((t.delegate = null), "throw" === t.method)) {
                if (
                  e.iterator.return &&
                  ((t.method = "return"),
                  (t.arg = void 0),
                  b(e, t),
                  "throw" === t.method)
                )
                  return u;
                (t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return u;
            }
            var a = c(o, e.iterator, t.arg);
            if ("throw" === a.type)
              return (
                (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), u
              );
            var n = a.arg;
            return n
              ? n.done
                ? ((t[e.resultName] = n.value),
                  (t.next = e.nextLoc),
                  "return" !== t.method &&
                    ((t.method = "next"), (t.arg = void 0)),
                  (t.delegate = null),
                  u)
                : n
              : ((t.method = "throw"),
                (t.arg = new TypeError("iterator result is not an object")),
                (t.delegate = null),
                u);
          }
          function w(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function L(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function E(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(w, this),
              this.reset(!0);
          }
          function k(e) {
            if (e) {
              var t = e[n];
              if (t) return t.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var a = -1,
                  i = function t() {
                    for (; ++a < e.length; )
                      if (o.call(e, a))
                        return (t.value = e[a]), (t.done = !1), t;
                    return (t.value = void 0), (t.done = !0), t;
                  };
                return (i.next = i);
              }
            }
            return { next: I };
          }
          function I() {
            return { value: void 0, done: !0 };
          }
          return (
            (p.prototype = m),
            r(g, "constructor", m),
            r(m, "constructor", p),
            (p.displayName = r(m, s, "GeneratorFunction")),
            (e.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === p || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (e.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, m)
                  : ((e.__proto__ = m), r(e, s, "GeneratorFunction")),
                (e.prototype = Object.create(g)),
                e
              );
            }),
            (e.awrap = function (e) {
              return { __await: e };
            }),
            f(y.prototype),
            r(y.prototype, i, function () {
              return this;
            }),
            (e.AsyncIterator = y),
            (e.async = function (t, o, a, n, i) {
              void 0 === i && (i = Promise);
              var s = new y(l(t, o, a, n), i);
              return e.isGeneratorFunction(o)
                ? s
                : s.next().then(function (e) {
                    return e.done ? e.value : s.next();
                  });
            }),
            f(g),
            r(g, s, "Generator"),
            r(g, n, function () {
              return this;
            }),
            r(g, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (e) {
              var t = [];
              for (var o in e) t.push(o);
              return (
                t.reverse(),
                function o() {
                  for (; t.length; ) {
                    var a = t.pop();
                    if (a in e) return (o.value = a), (o.done = !1), o;
                  }
                  return (o.done = !0), o;
                }
              );
            }),
            (e.values = k),
            (E.prototype = {
              constructor: E,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = void 0),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = void 0),
                  this.tryEntries.forEach(L),
                  !e)
                )
                  for (var t in this)
                    "t" === t.charAt(0) &&
                      o.call(this, t) &&
                      !isNaN(+t.slice(1)) &&
                      (this[t] = void 0);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var t = this;
                function a(o, a) {
                  return (
                    (s.type = "throw"),
                    (s.arg = e),
                    (t.next = o),
                    a && ((t.method = "next"), (t.arg = void 0)),
                    !!a
                  );
                }
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var i = this.tryEntries[n],
                    s = i.completion;
                  if ("root" === i.tryLoc) return a("end");
                  if (i.tryLoc <= this.prev) {
                    var r = o.call(i, "catchLoc"),
                      l = o.call(i, "finallyLoc");
                    if (r && l) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    } else if (r) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                    } else {
                      if (!l)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                  var n = this.tryEntries[a];
                  if (
                    n.tryLoc <= this.prev &&
                    o.call(n, "finallyLoc") &&
                    this.prev < n.finallyLoc
                  ) {
                    var i = n;
                    break;
                  }
                }
                i &&
                  ("break" === e || "continue" === e) &&
                  i.tryLoc <= t &&
                  t <= i.finallyLoc &&
                  (i = null);
                var s = i ? i.completion : {};
                return (
                  (s.type = e),
                  (s.arg = t),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), u)
                    : this.complete(s)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  u
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var o = this.tryEntries[t];
                  if (o.finallyLoc === e)
                    return this.complete(o.completion, o.afterLoc), L(o), u;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var o = this.tryEntries[t];
                  if (o.tryLoc === e) {
                    var a = o.completion;
                    if ("throw" === a.type) {
                      var n = a.arg;
                      L(o);
                    }
                    return n;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, t, o) {
                return (
                  (this.delegate = {
                    iterator: k(e),
                    resultName: t,
                    nextLoc: o,
                  }),
                  "next" === this.method && (this.arg = void 0),
                  u
                );
              },
            }),
            e
          );
        }
        function T(e, t, o, a, n, i, s) {
          try {
            var r = e[i](s),
              l = r.value;
          } catch (e) {
            return void o(e);
          }
          r.done ? t(l) : Promise.resolve(l).then(a, n);
        }
        function U(e) {
          return function () {
            var t = this,
              o = arguments;
            return new Promise(function (a, n) {
              var i = e.apply(t, o);
              function s(e) {
                T(i, a, n, s, r, "next", e);
              }
              function r(e) {
                T(i, a, n, s, r, "throw", e);
              }
              s(void 0);
            });
          };
        }
        function D(e) {
          return F.apply(this, arguments);
        }
        function F() {
          return (F = U(
            q().mark(function e(t) {
              return q().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      b(t, "save"), I(t), B(t), C(t);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        function R(e) {
          var t = e.querySelector.bind(e),
            o = t('input[name="first_name"]').value,
            a = t('input[name="last_name"]').value,
            n = t('input[name="email"]').value,
            i = t('input[id="oaphone"]').value;
          sessionStorage.setItem("OA_POPUP_FIELD_FNAME", o),
            sessionStorage.setItem("OA_POPUP_FIELD_LNAME", a),
            sessionStorage.setItem("OA_POPUP_FIELD_EMAIL", n),
            sessionStorage.setItem("OA_POPUP_FIELD_PHONE", i);
        }
        function M(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return z(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return z(e, t);
              var o = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === o && e.constructor && (o = e.constructor.name);
              if ("Map" === o || "Set" === o) return Array.from(e);
              if (
                "Arguments" === o ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
              )
                return z(e, t);
            })(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function z(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var o = 0, a = new Array(t); o < t; o++) a[o] = e[o];
          return a;
        }
        function G(e, t) {
          var o,
            a,
            n,
            i =
              ((n = "quote"),
              (a = "triggered_popup") in (o = {})
                ? Object.defineProperty(o, a, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (o[a] = n),
              o);
          (i.anipat = document.getElementById("anipat").value),
            (i.user_agent = document.getElementById("user_agent").value),
            (i.user_timezone = document.getElementById("user_timezone").value),
            (i.user_landing = document.getElementById("user_landing").value),
            (i.user_referrer = document.getElementById("user_referrer").value);
          var s =
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            r = /^[A-Za-z]/;
          if ("true" === localStorage.getItem("OA_POPUP_RESET_QUOTE_FORM"))
            t = 0;
          var l,
            c,
            u,
            d = document.getElementById("js-quote-form"),
            p = !0,
            m = 0;
          switch (((l = document.getElementsByClassName("oa-quote__tab")), t)) {
            case 0:
              localStorage.removeItem("OA_POPUP_RESET_QUOTE_FORM"),
                (c = M(l[t].getElementsByTagName("input"))).forEach(function (
                  e
                ) {
                  1 == e.checked
                    ? ((m += 1), (i[e.name] = e.value))
                    : e.classList.add("invalid");
                });
              break;
            case 1:
              c = M(l[t].getElementsByTagName("input"));
              var h = l[t].getElementsByTagName("select")[0],
                v = !1;
              c.forEach(function (e) {
                e.classList.remove("invalid"),
                  1 == e.checked && "" != h.value
                    ? ((m += 1), (i[e.name] = e.value), (i[h.name] = h.value))
                    : e.checked
                    ? (e.classList.remove("invalid"),
                      (v = !0),
                      h.classList.add("invalid"))
                    : "" != h.value
                    ? (h.classList.remove("invalid"),
                      e.classList.add("invalid"))
                    : (h.classList.add("invalid"),
                      1 == v
                        ? c.forEach(function (e) {
                            0 == e.checked && e.classList.remove("invalid");
                          })
                        : e.classList.add("invalid"));
              });
              break;
            case 2:
              "" != (c = l[t].getElementsByTagName("textarea"))[0].value
                ? ((m += 1),
                  (i[c[0].name] = c[0].value),
                  0 != c[1].value.length && (i[c[1].name] = c[1].value),
                  0 != c[2].value.length && (i[c[2].name] = c[2].value),
                  c[0].classList.remove("invalid"))
                : c[0].classList.add("invalid");
              break;
            case 3:
              c = l[t].getElementsByClassName("oa-field");
              var _ = l[t].getElementsByClassName("oa-field__holder");
              for (u = 0; u < c.length; u++)
                "" != c[u].value
                  ? ((m += 1),
                    c[u].classList.remove("invalid"),
                    c[u].classList.remove("valid"))
                  : (_[u].classList.add("invalid-field"),
                    _[u].classList.remove("valid-field"),
                    c[u].classList.add("invalid"),
                    c[u].classList.remove("valid"));
              var g = function (e, t) {
                var o;
                (o = 2 == t ? s : r),
                  e.value.match(o)
                    ? (_[t].classList.remove("invalid-field"),
                      _[t].classList.contains("valid-field")
                        ? _[t].classList.remove("valid-field")
                        : _[t].classList.add("valid-field"),
                      e.classList.remove("invalid"),
                      e.classList.add("valid"),
                      (i[e.name] = e.value))
                    : (e.classList.add("invalid"),
                      e.classList.remove("valid"),
                      (m -= 1));
              };
              g(c[0], 0), g(c[1], 1), g(c[2], 2);
              if (e.isValidNumber())
                document.getElementById("js-phone-error-msg") &&
                  document.getElementById("js-phone-error-msg").remove(),
                  _[3].classList.remove("invalid-field"),
                  _[3].classList.contains("valid-field")
                    ? _[3].classList.remove("valid-field")
                    : _[3].classList.add("valid-field"),
                  c[3].classList.remove("invalid"),
                  c[3].classList.add("valid"),
                  (i.phone_number_with_code =
                    d.querySelector.bind(d)(".iti__selected-dial-code")
                      .textContent + c[3].value);
              else {
                c[3].classList.add("invalid"),
                  c[3].classList.remove("valid"),
                  _[3].classList.add("invalid-field"),
                  _[3].classList.remove("valid-field");
                var f = e.getValidationError();
                document.getElementById("js-phone-error-msg") &&
                  document.getElementById("js-phone-error-msg").remove(),
                  document
                    .getElementsByClassName("iti--allow-dropdown")[0]
                    .appendChild(
                      React.createElement(
                        "span",
                        {
                          class: "oa-popup__phone-error-msg",
                          id: "js-phone-error-msg",
                        },
                        [
                          "Invalid",
                          "Invalid country code",
                          "Too short",
                          "Too long",
                          "Invalid",
                        ][f]
                      )
                    ),
                  (m -= 1);
              }
          }
          3 == t
            ? 4 != m
              ? (p = !1)
              : ((i.quote_staff = document.querySelector(
                  'input[name="quote_staff"]:checked'
                ).value),
                (i.quote_company_size = document.querySelector(
                  'input[name="quote_company_size"]:checked'
                ).value),
                (i.quote_sector =
                  document.getElementById("js-quote-sector").value),
                (i.quote_role_to_outsource = document.getElementById(
                  "js-quote-role-to-outsource"
                ).value),
                (i.quote_key_question = document.getElementById(
                  "js-quote-key-question"
                ).value),
                (i.quote_comment =
                  document.getElementById("js-quote-comment").value),
                D(i))
            : 0 == m && (p = !1);
          return p && t < 4 && R(d), p;
        }
        function H(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return Y(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return Y(e, t);
              var o = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === o && e.constructor && (o = e.constructor.name);
              if ("Map" === o || "Set" === o) return Array.from(e);
              if (
                "Arguments" === o ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
              )
                return Y(e, t);
            })(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function Y(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var o = 0, a = new Array(t); o < t; o++) a[o] = e[o];
          return a;
        }
        var W = 0,
          K = a;
        function V(e) {
          var t,
            o,
            a = document.getElementsByClassName("oa-quote__tab"),
            n = document.getElementById("js-enterprise-banner-visible"),
            i = document.getElementsByClassName("js-expect-quote-link")[0],
            s = document.getElementById("quote-container-hide"),
            r = document.getElementById("js-popup-overlay"),
            l = document.getElementById("js-primary_close-btn");
          if (a[e]) {
            (a[e].style.display = "block"),
              (a[e].className = a[e].className.replace("inactive", "active"));
            var c = document.getElementById("js-quote-nextBtn"),
              u = document.getElementsByClassName("js-quote-intro-wrapper");
            if (0 == e)
              (document.getElementById("js-quote-PrevButton").style.display =
                "none"),
                (n.style.display = "flex"),
                i.classList.remove("active"),
                u[0].classList.remove("hide"),
                u[0].classList.add("slide");
            else if (3 == e)
              (n.style.display = "none"),
                i.classList.remove("active"),
                (c.innerHTML = "Submit");
            else if (4 == e) {
              var d = document.getElementsByClassName(
                  "js-quote-form-wrapper"
                )[0],
                p = document.getElementsByClassName("js-quote-cols-holder")[0],
                m = document.getElementsByClassName("oa-quote__col--one")[0],
                h = document.getElementById("js-upsell-popup"),
                v = document.getElementsByClassName("js-quote-form-col")[0];
              r.classList.add("pointer-events-none"),
                l.classList.add("pointer-events-none"),
                (n.style.display = "none"),
                i.classList.add("active"),
                (s.style.display = "none"),
                v.appendChild(
                  K(
                    "div",
                    {
                      class: "js-quote-form-wrapper",
                      id: "oa_gif-progress",
                      style:
                        "padding: 1.75rem; display: flex; align-items: center;",
                    },
                    K(
                      "center",
                      null,
                      K("img", {
                        src: "".concat(
                          "https://opt.outsourceaccelerator.com",
                          "/img/gif-bg.png"
                        ),
                        class: "min-h-[218px] h-auto",
                        width: "200",
                        loading: "lazy",
                      }),
                      K(
                        "div",
                        { class: "w-full lg:w-4/6 pt-4" },
                        K(
                          "h2",
                          {
                            style:
                              "font-size: 1.875rem; font-weight: 600; color: #fff;",
                          },
                          "Please wait while we find the best outsourcing partner for you..."
                        ),
                        K(
                          "p",
                          {
                            class: "font-soll font-light text-sm pt-3",
                            style: "color: #fff;",
                          },
                          "You’re one step closer to achieving your business goals."
                        )
                      )
                    ),
                    K(
                      "div",
                      { class: "oa_partners" },
                      K("img", {
                        class: "gif-partners",
                        src: "".concat(
                          "https://opt.outsourceaccelerator.com",
                          "/img/partners/1.png"
                        ),
                        style: "left: 0",
                        loading: "lazy",
                      })
                    )
                  )
                ),
                d.classList.add("hide"),
                m.classList.add("hide"),
                p.classList.remove("oa-quote__steps"),
                p.classList.add("grid"),
                p.classList.add("grid-cols-1"),
                v.classList.add("padding-none"),
                setTimeout(function () {
                  var e = document.getElementsByClassName("oa_partners")[0];
                  document.getElementsByClassName("gif-partners")[0].remove(),
                    e.appendChild(
                      K("img", {
                        class: "gif-partners",
                        src: "".concat(
                          "https://opt.outsourceaccelerator.com",
                          "/img/partners/2.png"
                        ),
                        style: "right: 0",
                        loading: "lazy",
                      })
                    );
                }, 700),
                setTimeout(function () {
                  var e = document.getElementsByClassName("oa_partners")[0];
                  document.getElementsByClassName("gif-partners")[0].remove(),
                    e.appendChild(
                      K("img", {
                        class: "gif-partners",
                        src: "".concat(
                          "https://opt.outsourceaccelerator.com",
                          "/img/partners/3.png"
                        ),
                        style: "left: 178px",
                        loading: "lazy",
                      })
                    );
                }, 1400),
                setTimeout(function () {
                  var e = document.getElementsByClassName("oa_partners")[0];
                  document.getElementsByClassName("gif-partners")[0].remove(),
                    e.appendChild(
                      K("img", {
                        class: "gif-partners",
                        src: "".concat(
                          "https://opt.outsourceaccelerator.com",
                          "/img/partners/4.png"
                        ),
                        style: "right: 192px",
                        loading: "lazy",
                      })
                    );
                }, 2100),
                setTimeout(function () {
                  var e = document.getElementsByClassName("oa_partners")[0];
                  document.getElementsByClassName("gif-partners")[0].remove(),
                    e.appendChild(
                      K("img", {
                        class: "gif-partners",
                        src: "".concat(
                          "https://opt.outsourceaccelerator.com",
                          "/img/partners/5.png"
                        ),
                        style: "left: 350px",
                        loading: "lazy",
                      })
                    );
                }, 3e3),
                setTimeout(function () {
                  var e = document.getElementsByClassName("oa_partners")[0];
                  document.getElementsByClassName("gif-partners")[0].remove(),
                    e.appendChild(
                      K("img", {
                        class: "gif-partners",
                        src: "".concat(
                          "https://opt.outsourceaccelerator.com",
                          "/img/partners/6.png"
                        ),
                        style: "right: 53px",
                        loading: "lazy",
                      })
                    );
                }, 4e3),
                setTimeout(function () {
                  document.getElementById("oa_gif-progress").remove(),
                    v.classList.remove("padding-none"),
                    d.classList.remove("hide"),
                    m.classList.remove("hide"),
                    p.classList.add("oa-quote__steps"),
                    p.classList.remove("grid"),
                    p.classList.remove("grid-cols-1"),
                    p.classList.add("hide"),
                    h.classList.remove("hide"),
                    (h.style.display = "grid"),
                    (document.getElementById(
                      "js-quote-form-step-two"
                    ).style.display = "block");
                }, 4e3),
                (c.style.display = "none"),
                document
                  .querySelector(".oa-popup__quote .js-oa-prog-bar-wrapper")
                  .remove();
            } else
              i.classList.add("active"),
                (n.style.display = "flex"),
                (document.getElementById("js-quote-PrevButton").style.display =
                  "inline"),
                (c.innerHTML = "Next"),
                (c.style.display = "flex"),
                u[0].classList.add("slide");
            e < 4 &&
              ((t = e),
              (o = document.getElementsByClassName("js-prog-indicator")[0]) &&
                (0 == t
                  ? (setTimeout(function () {
                      o && o.classList.add("step-one");
                    }, 100),
                    o.classList.remove("step-two"))
                  : 1 == t
                  ? (o.classList.add("step-two"),
                    o.classList.remove("step-three"))
                  : 2 == t
                  ? (o.classList.add("step-three"),
                    o.classList.remove("step-four"))
                  : 3 == t && o.classList.add("step-four")));
          }
        }
        function Q(e, t) {
          var o = document.getElementsByClassName("oa-quote__tab");
          if ("true" === localStorage.getItem("OA_POPUP_RESET_QUOTE_FORM"))
            W = 0;
          if (1 == e && !G(t, W)) return !1;
          (o[W].style.display = "none"),
            (o[W].className = o[W].className.replace("active", "inactive"));
          for (
            var a = o[(W += e)].getElementsByTagName("input"),
              n = o[W].getElementsByTagName("select"),
              i = 0;
            i < a.length;
            i++
          )
            a[i].classList.remove("invalid");
          for (var s = 0; s < n.length; s++) n[s].classList.remove("invalid");
          W >= o.length && document.getElementById("js-quote-form").submit(),
            V(W);
        }
        function Z() {
          var e = H(
            document.getElementsByClassName("js-switch-enterprise-btn")
          );
          e &&
            e.forEach(function (e) {
              e.addEventListener("click", function () {
                localStorage.setItem("OA_POPUP_RESET_QUOTE_FORM", "true"),
                  document.getElementById("js-popups-container").remove(),
                  me({ popup_to_display: "quote-enterprise" }),
                  $();
              });
            });
        }
        function $() {
          var e = H(document.getElementsByClassName("js-switch-quote-btn"));
          e &&
            e.forEach(function (e) {
              e.addEventListener("click", function () {
                localStorage.setItem("OA_POPUP_RESET_QUOTE_FORM", "true"),
                  document.getElementById("js-popups-container").remove(),
                  me({ popup_to_display: "quote" }),
                  Z();
              });
            });
        }
        function J(e) {
          for (
            var t = e + "=", o = document.cookie.split(";"), a = 0;
            a < o.length;
            a++
          ) {
            for (var n = o[a]; " " == n.charAt(0); )
              n = n.substring(1, n.length);
            if (0 == n.indexOf(t)) return n.substring(t.length, n.length);
          }
          return null;
        }
        function X(e) {
          return (
            (X =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            X(e)
          );
        }
        function ee() {
          ee = function () {
            return e;
          };
          var e = {},
            t = Object.prototype,
            o = t.hasOwnProperty,
            a = "function" == typeof Symbol ? Symbol : {},
            n = a.iterator || "@@iterator",
            i = a.asyncIterator || "@@asyncIterator",
            s = a.toStringTag || "@@toStringTag";
          function r(e, t, o) {
            return (
              Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            r({}, "");
          } catch (e) {
            r = function (e, t, o) {
              return (e[t] = o);
            };
          }
          function l(e, t, o, a) {
            var n = t && t.prototype instanceof d ? t : d,
              i = Object.create(n.prototype),
              s = new E(a || []);
            return (
              (i._invoke = (function (e, t, o) {
                var a = "suspendedStart";
                return function (n, i) {
                  if ("executing" === a)
                    throw new Error("Generator is already running");
                  if ("completed" === a) {
                    if ("throw" === n) throw i;
                    return I();
                  }
                  for (o.method = n, o.arg = i; ; ) {
                    var s = o.delegate;
                    if (s) {
                      var r = b(s, o);
                      if (r) {
                        if (r === u) continue;
                        return r;
                      }
                    }
                    if ("next" === o.method) o.sent = o._sent = o.arg;
                    else if ("throw" === o.method) {
                      if ("suspendedStart" === a)
                        throw ((a = "completed"), o.arg);
                      o.dispatchException(o.arg);
                    } else "return" === o.method && o.abrupt("return", o.arg);
                    a = "executing";
                    var l = c(e, t, o);
                    if ("normal" === l.type) {
                      if (
                        ((a = o.done ? "completed" : "suspendedYield"),
                        l.arg === u)
                      )
                        continue;
                      return { value: l.arg, done: o.done };
                    }
                    "throw" === l.type &&
                      ((a = "completed"),
                      (o.method = "throw"),
                      (o.arg = l.arg));
                  }
                };
              })(e, o, s)),
              i
            );
          }
          function c(e, t, o) {
            try {
              return { type: "normal", arg: e.call(t, o) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          e.wrap = l;
          var u = {};
          function d() {}
          function p() {}
          function m() {}
          var h = {};
          r(h, n, function () {
            return this;
          });
          var v = Object.getPrototypeOf,
            _ = v && v(v(k([])));
          _ && _ !== t && o.call(_, n) && (h = _);
          var g = (m.prototype = d.prototype = Object.create(h));
          function f(e) {
            ["next", "throw", "return"].forEach(function (t) {
              r(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function y(e, t) {
            function a(n, i, s, r) {
              var l = c(e[n], e, i);
              if ("throw" !== l.type) {
                var u = l.arg,
                  d = u.value;
                return d && "object" == X(d) && o.call(d, "__await")
                  ? t.resolve(d.__await).then(
                      function (e) {
                        a("next", e, s, r);
                      },
                      function (e) {
                        a("throw", e, s, r);
                      }
                    )
                  : t.resolve(d).then(
                      function (e) {
                        (u.value = e), s(u);
                      },
                      function (e) {
                        return a("throw", e, s, r);
                      }
                    );
              }
              r(l.arg);
            }
            var n;
            this._invoke = function (e, o) {
              function i() {
                return new t(function (t, n) {
                  a(e, o, t, n);
                });
              }
              return (n = n ? n.then(i, i) : i());
            };
          }
          function b(e, t) {
            var o = e.iterator[t.method];
            if (void 0 === o) {
              if (((t.delegate = null), "throw" === t.method)) {
                if (
                  e.iterator.return &&
                  ((t.method = "return"),
                  (t.arg = void 0),
                  b(e, t),
                  "throw" === t.method)
                )
                  return u;
                (t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return u;
            }
            var a = c(o, e.iterator, t.arg);
            if ("throw" === a.type)
              return (
                (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), u
              );
            var n = a.arg;
            return n
              ? n.done
                ? ((t[e.resultName] = n.value),
                  (t.next = e.nextLoc),
                  "return" !== t.method &&
                    ((t.method = "next"), (t.arg = void 0)),
                  (t.delegate = null),
                  u)
                : n
              : ((t.method = "throw"),
                (t.arg = new TypeError("iterator result is not an object")),
                (t.delegate = null),
                u);
          }
          function w(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function L(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function E(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(w, this),
              this.reset(!0);
          }
          function k(e) {
            if (e) {
              var t = e[n];
              if (t) return t.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var a = -1,
                  i = function t() {
                    for (; ++a < e.length; )
                      if (o.call(e, a))
                        return (t.value = e[a]), (t.done = !1), t;
                    return (t.value = void 0), (t.done = !0), t;
                  };
                return (i.next = i);
              }
            }
            return { next: I };
          }
          function I() {
            return { value: void 0, done: !0 };
          }
          return (
            (p.prototype = m),
            r(g, "constructor", m),
            r(m, "constructor", p),
            (p.displayName = r(m, s, "GeneratorFunction")),
            (e.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === p || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (e.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, m)
                  : ((e.__proto__ = m), r(e, s, "GeneratorFunction")),
                (e.prototype = Object.create(g)),
                e
              );
            }),
            (e.awrap = function (e) {
              return { __await: e };
            }),
            f(y.prototype),
            r(y.prototype, i, function () {
              return this;
            }),
            (e.AsyncIterator = y),
            (e.async = function (t, o, a, n, i) {
              void 0 === i && (i = Promise);
              var s = new y(l(t, o, a, n), i);
              return e.isGeneratorFunction(o)
                ? s
                : s.next().then(function (e) {
                    return e.done ? e.value : s.next();
                  });
            }),
            f(g),
            r(g, s, "Generator"),
            r(g, n, function () {
              return this;
            }),
            r(g, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (e) {
              var t = [];
              for (var o in e) t.push(o);
              return (
                t.reverse(),
                function o() {
                  for (; t.length; ) {
                    var a = t.pop();
                    if (a in e) return (o.value = a), (o.done = !1), o;
                  }
                  return (o.done = !0), o;
                }
              );
            }),
            (e.values = k),
            (E.prototype = {
              constructor: E,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = void 0),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = void 0),
                  this.tryEntries.forEach(L),
                  !e)
                )
                  for (var t in this)
                    "t" === t.charAt(0) &&
                      o.call(this, t) &&
                      !isNaN(+t.slice(1)) &&
                      (this[t] = void 0);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var t = this;
                function a(o, a) {
                  return (
                    (s.type = "throw"),
                    (s.arg = e),
                    (t.next = o),
                    a && ((t.method = "next"), (t.arg = void 0)),
                    !!a
                  );
                }
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var i = this.tryEntries[n],
                    s = i.completion;
                  if ("root" === i.tryLoc) return a("end");
                  if (i.tryLoc <= this.prev) {
                    var r = o.call(i, "catchLoc"),
                      l = o.call(i, "finallyLoc");
                    if (r && l) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    } else if (r) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                    } else {
                      if (!l)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                  var n = this.tryEntries[a];
                  if (
                    n.tryLoc <= this.prev &&
                    o.call(n, "finallyLoc") &&
                    this.prev < n.finallyLoc
                  ) {
                    var i = n;
                    break;
                  }
                }
                i &&
                  ("break" === e || "continue" === e) &&
                  i.tryLoc <= t &&
                  t <= i.finallyLoc &&
                  (i = null);
                var s = i ? i.completion : {};
                return (
                  (s.type = e),
                  (s.arg = t),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), u)
                    : this.complete(s)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  u
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var o = this.tryEntries[t];
                  if (o.finallyLoc === e)
                    return this.complete(o.completion, o.afterLoc), L(o), u;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var o = this.tryEntries[t];
                  if (o.tryLoc === e) {
                    var a = o.completion;
                    if ("throw" === a.type) {
                      var n = a.arg;
                      L(o);
                    }
                    return n;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, t, o) {
                return (
                  (this.delegate = {
                    iterator: k(e),
                    resultName: t,
                    nextLoc: o,
                  }),
                  "next" === this.method && (this.arg = void 0),
                  u
                );
              },
            }),
            e
          );
        }
        function te(e, t, o, a, n, i, s) {
          try {
            var r = e[i](s),
              l = r.value;
          } catch (e) {
            return void o(e);
          }
          r.done ? t(l) : Promise.resolve(l).then(a, n);
        }
        function oe(e, t) {
          var o = a,
            n = document.getElementById("js-".concat(e, "-form"));
          ("toolkit" != e && "booking" != e && "rospa" != e && "prospa" != e) ||
            (n &&
              (document.getElementById("js-validate-form-btn").addEventListener(
                "click",
                (function () {
                  var a,
                    i =
                      ((a = ee().mark(function a(i) {
                        var s, r, l, c, u, d, p, m, h, v, _, g, f, y, b;
                        return ee().wrap(
                          function (a) {
                            for (;;)
                              switch ((a.prev = a.next)) {
                                case 0:
                                  (s =
                                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
                                    (r = /^[A-Za-textAreaElement]/),
                                    ((l = {}).triggered_popup = e),
                                    (l.anipat =
                                      document.getElementById("anipat").value),
                                    (l.user_agent =
                                      document.getElementById(
                                        "user_agent"
                                      ).value),
                                    (l.user_timezone =
                                      document.getElementById(
                                        "user_timezone"
                                      ).value),
                                    (l.user_landing =
                                      document.getElementById(
                                        "user_landing"
                                      ).value),
                                    (l.user_referrer =
                                      document.getElementById(
                                        "user_referrer"
                                      ).value),
                                    (c = 0),
                                    (u =
                                      document.getElementsByClassName(
                                        "oa-field__holder"
                                      )),
                                    (d = n.getElementsByClassName("oa-field")),
                                    (p = 0);
                                case 13:
                                  if (!(p < d.length)) {
                                    a.next = 81;
                                    break;
                                  }
                                  if (!d[p].getAttribute("required")) {
                                    a.next = 78;
                                    break;
                                  }
                                  if ("" == d[p].value) {
                                    a.next = 34;
                                    break;
                                  }
                                  (c += 1),
                                    d[p].classList.remove("invalid"),
                                    d[p].classList.remove("valid"),
                                    u[p].classList.remove("invalid-field"),
                                    u[p].classList.remove("valid-field"),
                                    (a.t0 = d[p].getAttribute("type")),
                                    (a.next =
                                      "text" === a.t0
                                        ? 24
                                        : "email" === a.t0
                                        ? 26
                                        : "tel" === a.t0
                                        ? 28
                                        : "radio" === a.t0
                                        ? 31
                                        : 32);
                                  break;
                                case 24:
                                  return (
                                    d[p].value.match(r) && d[p].value.length > 1
                                      ? (d[p].classList.remove("invalid"),
                                        d[p].classList.add("valid"),
                                        u[p].classList.remove("invalid-field"),
                                        u[p].classList.contains("valid-field")
                                          ? u[p].classList.remove("valid-field")
                                          : u[p].classList.add("valid-field"),
                                        (l[d[p].name] = d[p].value))
                                      : (u[p].classList.add("invalid-field"),
                                        u[p].classList.remove("valid-field"),
                                        d[p].classList.add("invalid"),
                                        d[p].classList.remove("valid"),
                                        (c -= 1)),
                                    a.abrupt("break", 32)
                                  );
                                case 26:
                                  return (
                                    d[p].value.match(s)
                                      ? (d[p].classList.remove("invalid"),
                                        d[p].classList.add("valid"),
                                        u[p].classList.remove("invalid-field"),
                                        u[p].classList.contains("valid-field")
                                          ? u[p].classList.remove("valid-field")
                                          : u[p].classList.add("valid-field"),
                                        (l[d[p].name] = d[p].value))
                                      : (u[p].classList.add("invalid-field"),
                                        u[p].classList.remove("valid-field"),
                                        d[p].classList.add("invalid"),
                                        d[p].classList.remove("valid"),
                                        (c -= 1)),
                                    a.abrupt("break", 32)
                                  );
                                case 28:
                                  return (
                                    (m = [
                                      "Invalid",
                                      "Invalid country code",
                                      "Too short",
                                      "Too long",
                                      "Invalid",
                                    ]),
                                    t.isValidNumber()
                                      ? (document.getElementById(
                                          "js-phone-error-msg"
                                        ) &&
                                          document
                                            .getElementById(
                                              "js-phone-error-msg"
                                            )
                                            .remove(),
                                        d[p].classList.remove("invalid"),
                                        d[p].classList.add("valid"),
                                        u[p].classList.remove("invalid-field"),
                                        u[p].classList.contains("valid-field")
                                          ? u[p].classList.remove("valid-field")
                                          : u[p].classList.add("valid-field"),
                                        (l.phone_number_with_code =
                                          n.querySelector.bind(n)(
                                            ".iti__selected-dial-code"
                                          ).textContent + d[p].value))
                                      : (u[p].classList.add("invalid-field"),
                                        u[p].classList.remove("valid-field"),
                                        d[p].classList.add("invalid"),
                                        d[p].classList.remove("valid"),
                                        (h = t.getValidationError()),
                                        document.getElementById(
                                          "js-phone-error-msg"
                                        ) &&
                                          document
                                            .getElementById(
                                              "js-phone-error-msg"
                                            )
                                            .remove(),
                                        document
                                          .getElementsByClassName(
                                            "iti--allow-dropdown"
                                          )[0]
                                          .appendChild(
                                            o(
                                              "span",
                                              {
                                                class:
                                                  "oa-popup__phone-error-msg",
                                                id: "js-phone-error-msg",
                                              },
                                              m[h]
                                            )
                                          ),
                                        (c -= 1)),
                                    a.abrupt("break", 32)
                                  );
                                case 31:
                                  1 == d[p].checked
                                    ? (d[p].classList.remove("invalid"),
                                      d[p].classList.add("valid"),
                                      (l[d[p].name] = d[p].value))
                                    : (d[p].classList.add("invalid"),
                                      d[p].classList.remove("valid"),
                                      (c -= 1));
                                case 32:
                                  a.next = 38;
                                  break;
                                case 34:
                                  u[p].classList.add("invalid-field"),
                                    u[p].classList.remove("valid-field"),
                                    d[p].classList.add("invalid"),
                                    d[p].classList.remove("valid");
                                case 38:
                                  if (c != d.length) {
                                    a.next = 78;
                                    break;
                                  }
                                  l.email,
                                    (a.t1 = e),
                                    (a.next =
                                      "prospa" === a.t1 || "rospa" === a.t1
                                        ? 43
                                        : "toolkit" === a.t1 ||
                                          "booking" === a.t1
                                        ? 61
                                        : 78);
                                  break;
                                case 43:
                                  a.next = 59;
                                  break;
                                case 49:
                                  "valid" == (_ = a.sent).result.result ||
                                  "unknown" == _.result.result ||
                                  "catchall" == _.result.result
                                    ? I(n, e)
                                    : (function () {
                                        u[0].classList.add("invalid-field"),
                                          u[0].classList.remove("valid-field"),
                                          d[0].classList.add("invalid"),
                                          d[0].classList.remove("valid"),
                                          (c -= 1);
                                        var e = document.getElementsByClassName(
                                          "oa-popup__tooltip--email-error"
                                        )[0];
                                        e &&
                                          (e.classList.add("active"),
                                          setTimeout(function () {
                                            e.classList.remove("active");
                                          }, 3e3)),
                                          v &&
                                            ((v.disabled = !1),
                                            (v.innerHTML = "Submit"));
                                      })(),
                                    (a.next = 56);
                                  break;
                                case 53:
                                  (a.prev = 53),
                                    (a.t2 = a.catch(44)),
                                    console.error(a.t2);
                                case 56:
                                  return a.abrupt("break", 78);
                                case 59:
                                  return I(n, e), a.abrupt("break", 78);
                                case 61:
                                  a.next = 76;
                                  break;
                                case 67:
                                  "valid" == (f = a.sent).result.result ||
                                  "unknown" == f.result.result ||
                                  "catchall" == f.result.result
                                    ? (D(l), R(n))
                                    : (function () {
                                        u[2].classList.add("invalid-field"),
                                          u[2].classList.remove("valid-field"),
                                          d[2].classList.add("invalid"),
                                          d[2].classList.remove("valid"),
                                          (c -= 1);
                                        var e = document.getElementsByClassName(
                                          "oa-popup__tooltip--email-error"
                                        )[0];
                                        e &&
                                          (e.classList.add("active"),
                                          setTimeout(function () {
                                            e.classList.remove("active");
                                          }, 5e3)),
                                          g &&
                                            ((g.disabled = !1),
                                            (g.innerHTML = "Submit"));
                                      })(),
                                    (a.next = 74);
                                  break;
                                case 71:
                                  (a.prev = 71),
                                    (a.t3 = a.catch(62)),
                                    console.error(a.t3);
                                case 74:
                                  a.next = 78;
                                  break;
                                case 76:
                                  D(l), R(n);
                                case 78:
                                  p++, (a.next = 13);
                                  break;
                                case 81:
                                  for (
                                    y = document.getElementsByTagName("select"),
                                      b = 0;
                                    b < y.length;
                                    b++
                                  )
                                    "" != y[b].value
                                      ? (y[b].classList.remove("invalid"),
                                        y[b].classList.add("valid"))
                                      : y[b].classList.add("invalid");
                                case 83:
                                case "end":
                                  return a.stop();
                              }
                          },
                          a,
                          null,
                          [
                            [44, 53],
                            [62, 71],
                          ]
                        );
                      })),
                      function () {
                        var e = this,
                          t = arguments;
                        return new Promise(function (o, n) {
                          var i = a.apply(e, t);
                          function s(e) {
                            te(i, o, n, s, r, "next", e);
                          }
                          function r(e) {
                            te(i, o, n, s, r, "throw", e);
                          }
                          s(void 0);
                        });
                      });
                  return function (e) {
                    return i.apply(this, arguments);
                  };
                })()
              ),
              n.addEventListener("keyup", function (e) {
                13 === e.keyCode &&
                  document.getElementById("js-validate-form-btn").click();
              })));
        }
        function ae(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return ne(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return ne(e, t);
              var o = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === o && e.constructor && (o = e.constructor.name);
              if ("Map" === o || "Set" === o) return Array.from(e);
              if (
                "Arguments" === o ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
              )
                return ne(e, t);
            })(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function ne(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var o = 0, a = new Array(t); o < t; o++) a[o] = e[o];
          return a;
        }
        function ie(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return se(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return se(e, t);
              var o = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === o && e.constructor && (o = e.constructor.name);
              if ("Map" === o || "Set" === o) return Array.from(e);
              if (
                "Arguments" === o ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
              )
                return se(e, t);
            })(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function se(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var o = 0, a = new Array(t); o < t; o++) a[o] = e[o];
          return a;
        }
        function re(e, t) {
          var o,
            a,
            n,
            i =
              ((n = "quote-enterprise"),
              (a = "triggered_popup") in (o = {})
                ? Object.defineProperty(o, a, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (o[a] = n),
              o);
          (i.anipat = document.getElementById("anipat").value),
            (i.user_agent = document.getElementById("user_agent").value),
            (i.user_timezone = document.getElementById("user_timezone").value),
            (i.user_landing = document.getElementById("user_landing").value),
            (i.user_referrer = document.getElementById("user_referrer").value);
          var s =
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            r = /^[A-Za-z]/;
          if ("true" === localStorage.getItem("OA_POPUP_RESET_QUOTE_FORM"))
            t = 0;
          var l,
            c,
            u,
            d = document.getElementById("js-quote-enterprise-form"),
            p = !0,
            m = 0;
          switch (
            ((l = document.getElementsByClassName("oa-enterprise__tab")), t)
          ) {
            case 0:
              localStorage.removeItem("OA_POPUP_RESET_QUOTE_FORM"), (m += 1);
              break;
            case 1:
              m += 1;
              break;
            case 2:
              (c = ie(l[t].getElementsByTagName("input"))).forEach(function (
                e
              ) {
                1 == e.checked
                  ? ((m += 1), (i[e.name] = e.value))
                  : e.classList.add("invalid");
              });
              break;
            case 3:
              c = ie(l[t].getElementsByTagName("input"));
              var h = l[t].getElementsByTagName("select")[0],
                v = !1;
              c.forEach(function (e) {
                e.classList.remove("invalid"),
                  1 == e.checked && "" != h.value
                    ? ((m += 1), (i[e.name] = e.value), (i[h.name] = h.value))
                    : e.checked
                    ? (e.classList.remove("invalid"),
                      (v = !0),
                      h.classList.add("invalid"))
                    : "" != h.value
                    ? (h.classList.remove("invalid"),
                      e.classList.add("invalid"))
                    : (h.classList.add("invalid"),
                      1 == v
                        ? c.forEach(function (e) {
                            0 == e.checked && e.classList.remove("invalid");
                          })
                        : e.classList.add("invalid"));
              });
              break;
            case 4:
              "" != (c = l[t].getElementsByTagName("textarea"))[0].value
                ? ((m += 1),
                  (i[c[0].name] = c[0].value),
                  0 != c[1].value.length && (i[c[1].name] = c[1].value),
                  c[0].classList.remove("invalid"))
                : c[0].classList.add("invalid");
              break;
            case 5:
              c = l[t].getElementsByClassName("oa-field");
              var _ = l[t].getElementsByClassName("oa-field__holder");
              for (u = 0; u < c.length; u++)
                "" != c[u].value
                  ? ((m += 1),
                    c[u].classList.remove("invalid"),
                    c[u].classList.remove("valid"))
                  : (_[u].classList.add("invalid-field"),
                    _[u].classList.remove("valid-field"),
                    c[u].classList.add("invalid"),
                    c[u].classList.remove("valid"));
              var g = function (e, t) {
                var o;
                (o = 2 == t ? s : r),
                  e.value.match(o)
                    ? (_[t].classList.remove("invalid-field"),
                      _[t].classList.contains("valid-field")
                        ? _[t].classList.remove("valid-field")
                        : _[t].classList.add("valid-field"),
                      e.classList.remove("invalid"),
                      e.classList.add("valid"),
                      (i[e.name] = e.value))
                    : (e.classList.add("invalid"),
                      e.classList.remove("valid"),
                      (m -= 1));
              };
              g(c[0], 0), g(c[1], 1), g(c[2], 2);
              if (e.isValidNumber())
                document.getElementById("js-phone-error-msg") &&
                  document.getElementById("js-phone-error-msg").remove(),
                  _[3].classList.remove("invalid-field"),
                  _[3].classList.contains("valid-field")
                    ? _[3].classList.remove("valid-field")
                    : _[3].classList.add("valid-field"),
                  c[3].classList.remove("invalid"),
                  c[3].classList.add("valid"),
                  (i.phone_number_with_code =
                    d.querySelector.bind(d)(".iti__selected-dial-code")
                      .textContent + c[3].value);
              else {
                c[3].classList.add("invalid"),
                  c[3].classList.remove("valid"),
                  _[3].classList.add("invalid-field"),
                  _[3].classList.remove("valid-field");
                var f = e.getValidationError();
                document.getElementById("js-phone-error-msg") &&
                  document.getElementById("js-phone-error-msg").remove(),
                  document
                    .getElementsByClassName("iti--allow-dropdown")[0]
                    .appendChild(
                      React.createElement(
                        "span",
                        {
                          class: "oa-popup__phone-error-msg",
                          id: "js-phone-error-msg",
                        },
                        [
                          "Invalid",
                          "Invalid country code",
                          "Too short",
                          "Too long",
                          "Invalid",
                        ][f]
                      )
                    ),
                  (m -= 1);
              }
          }
          5 == t
            ? 4 != m
              ? (p = !1)
              : ((i.quote_staff = document.querySelector(
                  'input[name="quote_staff"]:checked'
                ).value),
                (i.quote_company_size = document.querySelector(
                  'input[name="quote_company_size"]:checked'
                ).value),
                (i.quote_sector =
                  document.getElementById("js-quote-sector").value),
                (i.quote_role_to_outsource = document.getElementById(
                  "js-quote-role-to-outsource"
                ).value),
                (i.quote_key_question = document.getElementById(
                  "js-quote-key-question"
                ).value),
                (i.quote_comment =
                  document.getElementById("js-quote-comment").value),
                b(i, "save"),
                I(i))
            : 0 == m && (p = !1);
          return p && t < 6 && R(d), p;
        }
        var le = 0;
        function ce(e) {
          var t,
            o,
            a = document.getElementsByClassName("oa-enterprise__tab");
          if (a[e]) {
            a[e].className = a[e].className.replace("inactive", "active");
            var n = document.getElementById("js-left-tab"),
              i = document.getElementById("js-enterprise-nextBtn"),
              s = document.getElementsByClassName(
                "oa-enterprise__right-content"
              )[0],
              r = document.getElementsByClassName(
                "oa-enterprise__btn--wrapper"
              )[0],
              l = document.getElementsByClassName(
                "oa-enterprise__for-enterprise"
              )[0],
              c = document.getElementsByClassName(
                "oa-enterprise__prog-bar-holder"
              )[0],
              u = document.getElementsByClassName(
                "oa-enterprise__back-quote"
              )[0];
            0 == e
              ? (n.classList.remove("oa-enterprise__step--two"),
                n.classList.add("oa-enterprise__step--one"),
                r.classList.remove("active-wrapper"),
                s.classList.add("step-one"),
                l.classList.remove("active-step-two"),
                u.classList.remove("active-tab"))
              : 1 == e
              ? (localStorage.removeItem("OA_POPUP_RESET_QUOTE_FORM"),
                c.classList.remove("active-prog-bar"),
                n.classList.remove("oa-enterprise__step--one"),
                n.classList.add("oa-enterprise__step--two"),
                r.classList.add("active-wrapper"),
                s.classList.remove("step-one"),
                l.classList.add("active-step-two"),
                u.classList.remove("active-tab"),
                (i.innerHTML = "Let's go"))
              : 2 == e
              ? (l.classList.remove("active-step-two"),
                u.classList.add("active-tab"),
                c.classList.add("active-prog-bar"))
              : 4 == e
              ? u.classList.remove("active-tab")
              : 5 == e
              ? ((i.innerHTML = "Submit"), u.classList.remove("active-tab"))
              : ((i.innerHTML = "Continue"), u.classList.add("active-tab")),
              e < 6 &&
                ((t = e),
                (o = document.getElementsByClassName(
                  "oa-enterprise__prog-indicator"
                )[0]) &&
                  (0 == t || 1 == t
                    ? o.classList.remove("step-one")
                    : 2 == t
                    ? (setTimeout(function () {
                        o && o.classList.add("step-one");
                      }, 100),
                      o.classList.remove("step-two"))
                    : 3 == t
                    ? (o.classList.add("step-two"),
                      o.classList.remove("step-three"))
                    : 4 == t
                    ? (o.classList.add("step-three"),
                      o.classList.remove("step-four"))
                    : 5 == t && o.classList.add("step-four")));
          }
        }
        function ue(e, t) {
          var o = document.getElementsByClassName("oa-enterprise__tab");
          if ("true" === localStorage.getItem("OA_POPUP_RESET_QUOTE_FORM"))
            le = 0;
          if (1 == e && !re(t, le)) return !1;
          (le += e) >= 0 &&
            le < o.length &&
            (o[le - e].classList.remove("active"),
            o[le - e].classList.add("inactive"),
            o[le].classList.remove("inactive"),
            o[le].classList.add("active"));
          for (
            var a = o[le].getElementsByTagName("input"),
              n = o[le].getElementsByTagName("select"),
              i = 0;
            i < a.length;
            i++
          )
            a[i].classList.remove("invalid");
          for (var s = 0; s < n.length; s++) n[s].classList.remove("invalid");
          le >= o.length &&
            document.getElementById("js-quote-enterprise-form").submit(),
            ce(le);
        }
        function de(e) {
          var t,
            o = sessionStorage.getItem("OA_POPUP_FROM_BAD_COUNTRY"),
            n = localStorage.getItem("ClientDashAccountScreen");
          !o &&
            !n &&
            ((t = document.getElementById("js-".concat(e, "-popup"))),
            document.getElementsByClassName("oa-field__holder")[0] &&
              (function () {
                for (
                  var e = t.getElementsByTagName("input"),
                    o = t.getElementsByTagName("textarea"),
                    a = function (t) {
                      e[t].matches('[type="email"]') &&
                        (e[t].addEventListener("focus", function (e) {
                          e.target.parentNode.classList.add("focused");
                        }),
                        e[t].addEventListener("blur", function (o) {
                          o.target.parentNode.classList.remove("focused"),
                            0 != o.target.value.length
                              ? (!e[t].matches('[type="email"]') ||
                                  e[t].matches('[type="tel"]') ||
                                  o.target.parentNode.classList.remove("open"),
                                o.target.parentNode.classList.add("filled"))
                              : o.target.parentNode.classList.remove("filled");
                        }));
                    },
                    n = 0;
                  n < e.length;
                  n++
                )
                  a(n);
                for (var i = 0; i < o.length; i++)
                  o[i].addEventListener("focus", function (e) {
                    e.target.parentNode.classList.add("focused");
                  }),
                    o[i].addEventListener("blur", function (e) {
                      e.target.parentNode.classList.remove("focused"),
                        0 != e.target.value.length
                          ? e.target.parentNode.classList.add("filled")
                          : e.target.parentNode.classList.remove("filled");
                    });
              })());
          var i = (function () {
            var e = document.getElementById("oaphone");
            if (e) {
              e.addEventListener("keyup", function (e) {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              });
              var t = document.querySelector("#oaphone");
              return window.intlTelInput(t, {
                initialCountry: "auto",
                utilsScript: "".concat(
                  "https://opt.outsourceaccelerator.com",
                  "/libs/intlTellInput/utils.js"
                ),
                geoIpLookup: function (e) {
                  fetch("https://geolocation-db.com/json/p", {
                    cache: "reload",
                  })
                    .then(function (e) {
                      if (e.ok) return e.json();
                      throw new Error("Failed: " + e.status);
                    })
                    .then(function (t) {
                      e(t.country_code);
                    })
                    .catch(function (t) {
                      e("fr");
                    });
                },
              });
            }
          })();
          !(function (e, t) {
            var o, n, i;
            [
              "toolkit",
              "booking",
              "prospa",
              "rospa",
              "quote",
              "quote-enterprise",
            ].includes(e) &&
              (function () {
                var s = a,
                  r = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  l = /^[A-Za-textAreaElement]/,
                  c = document.getElementById("js-".concat(e, "-form"));
                "quote" == e
                  ? ((o = document.getElementById("js-get-quote")),
                    (n = o.getElementsByTagName("input")),
                    (i = o.getElementsByClassName("oa-field__holder")))
                  : "quote-enterprise" == e
                  ? ((o = document.getElementById("js-get-quote-enterprise")),
                    (n = o.getElementsByTagName("input")),
                    (i = o.getElementsByClassName("oa-field__holder")))
                  : ((n = c.getElementsByTagName("input")),
                    (i = document.getElementsByClassName("oa-field__holder")));
                for (
                  var u = function (e) {
                      n[e].addEventListener("input", function (o) {
                        if (n[e].getAttribute("required"))
                          if ("" != n[e].value)
                            switch (
                              (n[e].classList.remove("invalid"),
                              n[e].classList.remove("valid"),
                              i[e].classList.remove("invalid-field"),
                              i[e].classList.remove("valid-field"),
                              n[e].getAttribute("type"))
                            ) {
                              case "text":
                                n[e].value.match(l) && n[e].value.length > 1
                                  ? (n[e].classList.remove("invalid"),
                                    n[e].classList.add("valid"),
                                    i[e].classList.remove("invalid-field"),
                                    i[e].classList.contains("valid-field")
                                      ? i[e].classList.remove("valid-field")
                                      : i[e].classList.add("valid-field"))
                                  : (i[e].classList.add("invalid-field"),
                                    i[e].classList.remove("valid-field"),
                                    n[e].classList.add("invalid"),
                                    n[e].classList.remove("valid"));
                                break;
                              case "email":
                                n[e].value.match(r)
                                  ? (n[e].classList.remove("invalid"),
                                    n[e].classList.add("valid"),
                                    i[e].classList.remove("invalid-field"),
                                    i[e].classList.contains("valid-field")
                                      ? i[e].classList.remove("valid-field")
                                      : i[e].classList.add("valid-field"))
                                  : (i[e].classList.add("invalid-field"),
                                    i[e].classList.remove("valid-field"),
                                    n[e].classList.add("invalid"),
                                    n[e].classList.remove("valid"));
                                break;
                              case "tel":
                                if (t.isValidNumber())
                                  document.getElementById(
                                    "js-phone-error-msg"
                                  ) &&
                                    document
                                      .getElementById("js-phone-error-msg")
                                      .remove(),
                                    n[e].classList.remove("invalid"),
                                    n[e].classList.add("valid"),
                                    i[e].classList.remove("invalid-field"),
                                    i[e].classList.contains("valid-field")
                                      ? i[e].classList.remove("valid-field")
                                      : i[e].classList.add("valid-field");
                                else {
                                  i[e].classList.add("invalid-field"),
                                    i[e].classList.remove("valid-field"),
                                    n[e].classList.add("invalid"),
                                    n[e].classList.remove("valid");
                                  var a = t.getValidationError();
                                  document.getElementById(
                                    "js-phone-error-msg"
                                  ) &&
                                    document
                                      .getElementById("js-phone-error-msg")
                                      .remove(),
                                    document
                                      .getElementsByClassName(
                                        "iti--allow-dropdown"
                                      )[0]
                                      .appendChild(
                                        s(
                                          "span",
                                          {
                                            class: "oa-popup__phone-error-msg",
                                            id: "js-phone-error-msg",
                                          },
                                          [
                                            "Invalid",
                                            "Invalid country code",
                                            "Too short",
                                            "Too long",
                                            "Invalid",
                                          ][a]
                                        )
                                      );
                                }
                            }
                          else
                            i[e].classList.add("invalid-field"),
                              i[e].classList.remove("valid-field"),
                              n[e].classList.add("invalid"),
                              n[e].classList.remove("valid");
                      });
                    },
                    d = 0;
                  d < n.length;
                  d++
                )
                  u(d);
              })();
          })(e, i),
            oe(e, i),
            (function (e) {
              var t = document.getElementById("js-quote-PrevButton");
              t &&
                t.addEventListener("click", function (t) {
                  Q(-1, e);
                });
              var o = document.getElementById("js-quote-form"),
                a = document.getElementById("js-quote-nextBtn");
              a &&
                a.addEventListener("click", function (t) {
                  Q(1, e);
                }),
                o &&
                  o.addEventListener("keyup", function (t) {
                    13 === t.keyCode && Q(1, e);
                  }),
                V(0);
            })(i),
            (function (e) {
              var t = document.getElementById("js-enterprise-PrevButton");
              t &&
                t.addEventListener("click", function (t) {
                  ue(-1, e);
                });
              var o = document.getElementById("js-quote-enterprise-form"),
                a = document.getElementById("js-enterprise-nextBtn"),
                n = document.getElementById("js-enterprise-stepOneBtn");
              a &&
                a.addEventListener("click", function (t) {
                  ue(1, e);
                }),
                n &&
                  n.addEventListener("click", function (t) {
                    ue(1, e);
                  }),
                o &&
                  o.addEventListener("keyup", function (t) {
                    13 === t.keyCode && ue(1, e);
                  }),
                ce(0);
            })(i),
            Z(),
            $(),
            (function (e) {
              var t = document.getElementsByClassName("js-btn-collapse"),
                o = document.getElementsByClassName("js-btn-collapse-2"),
                a = window.matchMedia("(max-width: 767px)");
              if (
                ("prospa" != e &&
                  "rospa" != e &&
                  (function () {
                    var n = document.getElementsByClassName("js-body-step-1"),
                      i = document.getElementsByClassName("js-body-step-2");
                    if (t)
                      for (var s = 0; s < t.length; s++)
                        t[s].addEventListener("click", function (t) {
                          for (var o = 0; o < n.length; o++)
                            n[o] &&
                              ("block" == n[o].style.display
                                ? (t.target.classList.remove(
                                    "oa-".concat(e, "__heading--active")
                                  ),
                                  (n[o].style.display = "none"))
                                : (t.target.classList.add(
                                    "oa-".concat(e, "__heading--active")
                                  ),
                                  (n[o].style.display = "block")));
                        });
                    if (o)
                      for (var r = 0; r < o.length; r++)
                        o[r].addEventListener("click", function (t) {
                          for (var o = 0; o < i.length; o++)
                            i[o] &&
                              ("block" == i[o].style.display
                                ? (t.target.classList.remove(
                                    "oa-".concat(e, "__heading--active")
                                  ),
                                  (i[o].style.display = "none"))
                                : (t.target.classList.add(
                                    "oa-".concat(e, "__heading--active")
                                  ),
                                  (i[o].style.display = "block")));
                        });
                    var l = function (e) {
                      if (e.matches) {
                        for (var a = 0; a < t.length; a++)
                          t[a].classList.remove("pointer-events-none");
                        for (var s = 0; s < o.length; s++)
                          o[s].classList.remove("pointer-events-none");
                      } else {
                        [n, i].forEach(function (e) {
                          for (var t = 0; t < e.length; t++)
                            e[t] &&
                              "none" == e[t].style.display &&
                              e[t].removeAttribute("style");
                        });
                        for (var r = 0; r < t.length; r++)
                          t[r].classList.add("pointer-events-none");
                        for (var l = 0; l < o.length; l++)
                          o[l].classList.add("pointer-events-none");
                      }
                    };
                    a.addEventListener("change", l), l(a);
                  })(),
                ("thankyou" != e && "rospa" != e && "prospa" != e) ||
                  (function () {
                    var e = document.getElementsByClassName("js-body-step-1");
                    if (t)
                      for (var o = 0; o < t.length; o++)
                        t[o].addEventListener("click", function (t) {
                          for (var o = 0; o < e.length; o++)
                            "block" === e[o].style.display
                              ? ((e[o].style.display = "none"),
                                t.target.classList.remove(
                                  "oa-rospa__learn-more--active"
                                ))
                              : ((e[o].style.display = "block"),
                                t.target.classList.add(
                                  "oa-rospa__learn-more--active"
                                ));
                        });
                    var n = function (t) {
                      if (!t.matches)
                        for (var o = 0; o < e.length; o++)
                          e[o] &&
                            "none" === e[o].style.display &&
                            e[o].removeAttribute("style");
                    };
                    a.addEventListener("change", n), n(a);
                  })(),
                "quote-enterprise" == e)
              ) {
                var n = document.getElementsByClassName(
                    "load-features-content"
                  )[0],
                  i = document.getElementById("enterprise-features-content"),
                  s = ae(
                    document.getElementsByClassName(
                      "load-more-features-content"
                    )
                  );
                n &&
                  n.addEventListener("click", function () {
                    n.classList.toggle("active"),
                      i.classList.toggle("load-more"),
                      s.forEach(function (e) {
                        e.classList.toggle("visible-content");
                      }),
                      "Load more" == n.textContent
                        ? (n.textContent = "Load less")
                        : (n.textContent = "Load more");
                  });
                var r = function (e) {
                  e.matches
                    ? ((n.textContent = "Load more"),
                      n.classList.remove("active"),
                      s.forEach(function (e) {
                        e.classList.remove("visible-content");
                      }))
                    : ((n.textContent = "Load more"),
                      n.classList.remove("active"),
                      i.classList.remove("load-more"),
                      s.forEach(function (e) {
                        e.classList.add("visible-content");
                      }));
                };
                a.addEventListener("change", r), r(a);
              }
            })(e),
            (function () {
              var e = document.getElementById("js-quote-btn-services"),
                t = document.getElementById("js-booking-btn-services"),
                o = document.getElementById("js-toolkit-btn-services");
              e &&
                e.addEventListener("click", function () {
                  localStorage.setItem("OA_POPUP_RESET_QUOTE_FORM", "true"),
                    a("quote");
                }),
                t &&
                  t.addEventListener("click", function () {
                    a("booking");
                  }),
                o &&
                  o.addEventListener("click", function () {
                    a("toolkit");
                  });
              var a = function (e) {
                J("OA_POPUP_RETURNING_CLIENT")
                  ? (document.getElementById("js-popups-container").remove(),
                    me({ popup_to_display: "signinscreen", active_popup: e }))
                  : (document.getElementById("js-popups-container").remove(),
                    me({ popup_to_display: e }));
              };
            })(),
            (function () {
              var e = sessionStorage.getItem("OA_POPUP_ACTIVE"),
                t = sessionStorage.getItem("OA_POPUP_FROM_BAD_COUNTRY"),
                o = document.getElementById("js-proceed-to-popup-btn"),
                a = document.getElementById("js-open-rospa-btn"),
                n = document.getElementById("js-open-partner-btn");
              o &&
                o.addEventListener("click", function () {
                  "toolkit" == e || "toolkit" == t
                    ? (i("toolkit"),
                      sessionStorage.removeItem("OA_POPUP_FROM_BAD_COUNTRY"))
                    : "booking" == e || "booking" == t
                    ? (i("booking"),
                      sessionStorage.removeItem("OA_POPUP_FROM_BAD_COUNTRY"))
                    : "quote" == e || "quote" == t
                    ? (i("quote"),
                      localStorage.setItem("OA_POPUP_RESET_QUOTE_FORM", "true"),
                      sessionStorage.removeItem("OA_POPUP_FROM_BAD_COUNTRY"))
                    : (i("quote-enterprise"),
                      localStorage.setItem("OA_POPUP_RESET_QUOTE_FORM", "true"),
                      sessionStorage.removeItem("OA_POPUP_FROM_BAD_COUNTRY"));
                });
              var i = function (e) {
                J("OA_POPUP_RETURNING_CLIENT")
                  ? (document.getElementById("js-popups-container").remove(),
                    me({ popup_to_display: e, active_popup: e }))
                  : (document.getElementById("js-popups-container").remove(),
                    me({ popup_to_display: e }));
              };
              a &&
                a.addEventListener("click", function () {
                  document.getElementById("js-popups-container").remove(),
                    me({ popup_to_display: "rospa" });
                }),
                n &&
                  n.addEventListener("click", function () {
                    window.open(
                      "https://www.outsourceaccelerator.com/sign-up/",
                      "_blank"
                    );
                  });
            })();
        }
        function pe(e) {
          var t = a;
          return t(
            "div",
            {
              class:
                "oa-popup oa-popup__prospa is--visible oa-popup__container shadow",
              id: "js-".concat(e, "-popup"),
            },
            t(
              "div",
              { class: "oa-rospa" },
              t(
                "div",
                { class: "oa-rospa__col--one" },
                t(
                  "div",
                  { class: "oa-rospa__header" },
                  t(
                    "h3",
                    { class: "oa-rospa__heading" },
                    "prospa" == e
                      ? "Join Philippine Remote & Offshore Staffing Professionals Association (PROSPA) "
                      : "Join Remote & Offshore Staffing Professionals Association (ROSPA)"
                  )
                ),
                t(
                  "div",
                  { class: "oa-rospa__body js-body-step-1" },
                  t(
                    "ul",
                    { class: "oa-rospa__lists" },
                    t("li", null, "Fast-track outsource employment blueprint"),
                    t(
                      "ul",
                      { class: "oa-rospa__sublists" },
                      t(
                        "li",
                        null,
                        "Step-by-step guide to getting a full-time job"
                      ),
                      t(
                        "li",
                        null,
                        "Detailed list of job sites to use and process to follow to get that dream job"
                      ),
                      t(
                        "li",
                        null,
                        "Optimising your public profile, network, CV and credentials"
                      ),
                      t(
                        "li",
                        null,
                        "See how you can earn ",
                        "prospa" == e ? "PHP150k" : "$3,000",
                        "/mo"
                      )
                    ),
                    t(
                      "li",
                      null,
                      "prospa" == e ? "PROSPA" : "ROSPA",
                      " membership and mentor group access"
                    ),
                    t(
                      "li",
                      null,
                      "Access to the Outsource Accelerator platform"
                    ),
                    t(
                      "ul",
                      { class: "oa-rospa__sublists" },
                      t("li", null, "Promoting PH outsourcing the world"),
                      t(
                        "li",
                        null,
                        "Prioritised access to OA jobs, OJT, internships and opportunies"
                      ),
                      t("li", null, "Full benefits of full-time employment")
                    )
                  ),
                  "prospa" == e
                    ? t(
                        "div",
                        { class: "oa-rospa__link" },
                        t(
                          "a",
                          {
                            href: "https://www.outsourceaccelerator.com/prospa/",
                            target: "_blank",
                          },
                          t("p", null, "Read more about PROSPA membership"),
                          t("img", {
                            src: "".concat(
                              "https://opt.outsourceaccelerator.com",
                              "/img/icons/ArrowRight.png"
                            ),
                            class: "oa-rospa__arrow-icon",
                          })
                        )
                      )
                    : ""
                ),
                t(
                  "button",
                  { class: "oa-rospa__learn-more js-btn-collapse" },
                  "Learn more"
                )
              ),
              t(
                "div",
                { class: "oa-rospa__col--two" },
                t(
                  "div",
                  { class: "oa-rospa__body" },
                  (function (e) {
                    var t = a;
                    return t(
                      "form",
                      {
                        id: "js-".concat(e, "-form"),
                        action: "",
                        class: "js-get-rospa",
                      },
                      "prospa" == e
                        ? t("img", {
                            src: "".concat(
                              "https://opt.outsourceaccelerator.com",
                              "/img/rospa.png"
                            ),
                            class: "oa-prospa__form--img",
                            loading: "lazy",
                          })
                        : "",
                      t(
                        "h2",
                        {
                          class: "oa-rospa__heading ".concat(
                            "prospa" == e && "md:text-left text-center"
                          ),
                        },
                        "prospa" == e
                          ? "Get Your 48 hour free trial"
                          : "rospa" == e
                          ? "Join the leading outsourcing professionals group"
                          : ""
                      ),
                      t(
                        "div",
                        { id: "js-get-rospa", class: "oa-input__wrapper" },
                        t(
                          "div",
                          { class: "oa-rospa__form--wrapper" },
                          t(
                            "div",
                            { class: "oa-input__holder oa-field__holder" },
                            t(
                              "span",
                              { class: "oa-popup__tooltip--email" },
                              "Please use your business/company email"
                            ),
                            t(
                              "span",
                              { class: "oa-popup__tooltip--email-error" },
                              "Oops! You entered an invalid email address."
                            ),
                            t("label", null, "Email address"),
                            t(
                              "div",
                              { class: "oa-input__validation" },
                              t("input", {
                                type: "email",
                                class: "oa-field",
                                name: "email",
                                required: "true",
                                placeholder: "Your business email",
                                value:
                                  "null" !=
                                    localStorage.getItem(
                                      "OA_POPUP_FIELD_EMAIL"
                                    ) &&
                                  "undefined" !=
                                    localStorage.getItem(
                                      "OA_POPUP_FIELD_EMAIL"
                                    ) &&
                                  null !=
                                    localStorage.getItem(
                                      "OA_POPUP_FIELD_EMAIL"
                                    ) &&
                                  null !=
                                    localStorage.getItem("OA_POPUP_FIELD_EMAIL")
                                    ? localStorage.getItem(
                                        "OA_POPUP_FIELD_EMAIL"
                                      )
                                    : "",
                              }),
                              t("img", {
                                src: "".concat(
                                  "https://opt.outsourceaccelerator.com",
                                  "/img/icons/valid-field.png"
                                ),
                                class: "oa-popup__valid--input",
                                loading: "lazy",
                              }),
                              t("img", {
                                src: "".concat(
                                  "https://opt.outsourceaccelerator.com",
                                  "/img/icons/invalid-field.png"
                                ),
                                class: "oa-popup__invalid--input",
                                loading: "lazy",
                              })
                            )
                          ),
                          t(
                            "div",
                            { class: "oa-input__holder oa-field__holder" },
                            t("label", { class: "mt-5" }, "Phone Number"),
                            t(
                              "div",
                              { class: "oa-input__validation" },
                              t("input", {
                                type: "tel",
                                id: "oaphone",
                                class: "oa-field",
                                required: "true",
                              }),
                              t("img", {
                                src: "".concat(
                                  "https://opt.outsourceaccelerator.com",
                                  "/img/icons/valid-field.png"
                                ),
                                class: "oa-popup__valid--input",
                                loading: "lazy",
                              }),
                              t("img", {
                                src: "".concat(
                                  "https://opt.outsourceaccelerator.com",
                                  "/img/icons/invalid-field.png"
                                ),
                                class: "oa-popup__invalid--input",
                                loading: "lazy",
                              })
                            )
                          ),
                          t(
                            "div",
                            { style: "display: none;" },
                            t("label", null, "Anipat"),
                            t("input", {
                              type: "text",
                              id: "anipat",
                              name: "anipat",
                              value: "",
                            })
                          ),
                          t(
                            "div",
                            { style: "display: none" },
                            t("input", {
                              type: "hidden",
                              id: "user_agent",
                              name: "user_agent",
                              value: navigator.userAgent,
                            }),
                            t("input", {
                              type: "hidden",
                              id: "user_timezone",
                              name: "user_timezone",
                              value:
                                Intl.DateTimeFormat().resolvedOptions()
                                  .timeZone,
                            }),
                            t("input", {
                              type: "hidden",
                              id: "user_landing",
                              name: "user_landing",
                              value: window.location.href,
                            }),
                            t("input", {
                              type: "hidden",
                              id: "user_referrer",
                              name: "user_referrer",
                              value: document.referrer,
                            })
                          ),
                          t(
                            "button",
                            {
                              type: "button",
                              class: "oa-btn__primary",
                              id: "js-validate-form-btn",
                            },
                            "prospa" == e
                              ? "Get your 48 hour free trial now"
                              : "rospa" == e
                              ? "Submit"
                              : ""
                          )
                        )
                      )
                    );
                  })(e)
                )
              )
            )
          );
        }
        function me(e) {
          var t = e.popup_to_display,
            o = e.active_popup,
            n = a,
            d = document.getElementsByTagName("body")[0];
          d && (d.style.overflow = "hidden");
          var p,
            m = document.getElementById("js-popups-container");
          m && m.remove(),
            d.appendChild(
              n(
                "div",
                {
                  class: "oa-popups__container oa-popups__".concat(
                    t,
                    "-container"
                  ),
                  id: "js-popups-container",
                },
                n("div", {
                  class: "oa-popup-overlay__holder is-blacked-out",
                  id: "js-popup-overlay",
                }),
                n(
                  "div",
                  { class: "oa-popup__content-wrapper animate-popup" },
                  n(
                    "span",
                    {
                      class: "oa-popup__close-popup js-popup-close-btn",
                      id: "js-primary_close-btn",
                    },
                    n("img", {
                      src: "".concat(
                        "https://opt.outsourceaccelerator.com",
                        "/img/icons/exit-icon.svg"
                      ),
                      class: "oa-popup__exit--white",
                      alt: "Exit Icon",
                      loading: "lazy",
                    }),
                    n("img", {
                      src: "".concat(
                        "https://opt.outsourceaccelerator.com",
                        "/img/icons/exit-icon-black.svg"
                      ),
                      class: "oa-popup__exit--black",
                      alt: "Exit Icon",
                      loading: "lazy",
                    })
                  ),
                  n(
                    "div",
                    {
                      class: "oa-popup oa-popup__".concat(
                        t,
                        " is--visible oa-popup__container md:shadow"
                      ),
                      id: "js-popup-wrapper",
                    },
                    "toolkit" == t
                      ? r()
                      : "booking" == t
                      ? l()
                      : "quote" == t
                      ? a(
                          "div",
                          { id: "js-quote-popup" },
                          c(),
                          i("quote"),
                          s("quote")
                        )
                      : "quote-enterprise" == t
                      ? a("div", { id: "js-quote-enterprise-popup" }, u())
                      : "upsell-consult" == t
                      ? (function () {
                          var e = a;
                          return e(
                            "div",
                            {
                              class:
                                "oa-popup oa-thankyou-popup js-thankyou-popup is--visible oa-popup__container shadow",
                              id: "js-thankyou-popup",
                            },
                            e(
                              "div",
                              { class: "oa-thankyou" },
                              e(
                                "div",
                                { class: "oa-thankyou__col--one" },
                                e(
                                  "div",
                                  { class: "oa-thankyou__img--wrapper" },
                                  e(
                                    "div",
                                    { class: "oa-thankyou__img--holder" },
                                    e("img", {
                                      src: "".concat(
                                        "https://opt.outsourceaccelerator.com",
                                        "/img/icons/success.png"
                                      ),
                                      alt: "Success",
                                      loading: "lazy",
                                    })
                                  )
                                ),
                                e(
                                  "div",
                                  { class: "oa-thankyou__body" },
                                  e(
                                    "h2",
                                    { class: "oa-thankyou__heading" },
                                    "Woohoo! Thank you for your payment."
                                  ),
                                  e(
                                    "h4",
                                    { class: "oa-thankyou__subheading" },
                                    "We look forward to seeing how we can help you with your outsourcing journey."
                                  )
                                ),
                                e(
                                  "div",
                                  { class: "oa-thankyou__btns--wrapper pt-14" },
                                  e(
                                    "div",
                                    { class: "oa-thankyou__btns" },
                                    e("p", null, "Need our help?"),
                                    e(
                                      "span",
                                      null,
                                      "Email us at info@outsourceaccelerator.com"
                                    )
                                  )
                                )
                              ),
                              e(
                                "div",
                                { class: "oa-thankyou__col--two" },
                                e(
                                  "div",
                                  { class: "oa-thankyou__body" },
                                  e(
                                    "h3",
                                    { class: "oa-thankyou__heading" },
                                    "Ready to ",
                                    e("span", null, "start?")
                                  ),
                                  e(
                                    "h4",
                                    { class: "oa-thankyou__subheading" },
                                    "Book your call now"
                                  ),
                                  e(
                                    "p",
                                    { class: "oa-thankyou__text" },
                                    "If you’re not ready to pick a time yet, don’t worry, we’ll send instructions to the email you provided."
                                  ),
                                  e(
                                    "div",
                                    { class: "oa-thankyou__btns" },
                                    e(
                                      "button",
                                      {
                                        class:
                                          "oa-btn__primary oa_btn-book-now",
                                        onclick:
                                          "location.href = 'https://outsourceacceleratormeet.as.me/meet-jet';",
                                      },
                                      "BOOK A TIME NOW"
                                    ),
                                    e(
                                      "button",
                                      {
                                        class:
                                          "oa_btn-close oa-btn__secondary mt-3",
                                        id: "js-thankyou-close",
                                      },
                                      "No thanks, I'll do it later"
                                    )
                                  )
                                ),
                                e(
                                  "div",
                                  { class: "oa-thankyou__links" },
                                  e("p", null, "Need our help?"),
                                  e(
                                    "span",
                                    null,
                                    "Email us at info@outsourceaccelerator.com"
                                  )
                                )
                              )
                            )
                          );
                        })()
                      : "upsell-cashback" == t
                      ? (function () {
                          var e = a;
                          return e(
                            "div",
                            {
                              class:
                                "oa-popup oa-thankyou-cashback-popup js-thankyou-popup is--visible oa-popup__container shadow",
                              id: "js-thankyou-popup",
                            },
                            e(
                              "div",
                              { class: "oa-thankyou-cashback" },
                              e(
                                "div",
                                { class: "oa-thankyou-cashback__col--one" },
                                e(
                                  "div",
                                  {
                                    class: "oa-thankyou-cashback__img--wrapper",
                                  },
                                  e(
                                    "div",
                                    {
                                      class:
                                        "oa-thankyou-cashback__img--holder",
                                    },
                                    e("img", {
                                      src: "".concat(
                                        "https://opt.outsourceaccelerator.com",
                                        "/img/icons/success.png"
                                      ),
                                      alt: "Success",
                                      loading: "lazy",
                                    })
                                  )
                                ),
                                e(
                                  "div",
                                  { class: "oa-thankyou-cashback__body" },
                                  e(
                                    "h2",
                                    { class: "oa-thankyou-cashback__heading" },
                                    "Woohoo! Thank you for your payment."
                                  ),
                                  e(
                                    "h4",
                                    {
                                      class: "oa-thankyou-cashback__subheading",
                                    },
                                    "We look forward to seeing how we can help you with your outsourcing journey."
                                  ),
                                  e(
                                    "p",
                                    { class: "oa-thankyou-cashback__text" },
                                    "Complete the verification and book 3 book 3 FREE expert phone consultations in the outsourcing dashboard to claim the cashback."
                                  ),
                                  e(
                                    "p",
                                    { class: "oa-thankyou-cashback__text" },
                                    "You will be redirected in ",
                                    e("span", { class: "js-counter" }),
                                    " ",
                                    e(
                                      "span",
                                      { class: "js-seconds" },
                                      "seconds"
                                    ),
                                    "."
                                  )
                                )
                              )
                            )
                          );
                        })()
                      : "upsell-express" == t
                      ? (function () {
                          var e = a;
                          return e(
                            "div",
                            {
                              class:
                                "oa-popup oa-thankyou-popup js-thankyou-popup is--visible oa-popup__container shadow",
                              id: "js-thankyou-popup",
                            },
                            e(
                              "div",
                              { class: "oa-thankyou" },
                              e(
                                "div",
                                { class: "oa-thankyou__col--one" },
                                e(
                                  "div",
                                  { class: "oa-thankyou__img--wrapper" },
                                  e(
                                    "div",
                                    { class: "oa-thankyou__img--holder" },
                                    e("img", {
                                      src: "".concat(
                                        "https://opt.outsourceaccelerator.com",
                                        "/img/icons/success.png"
                                      ),
                                      alt: "Success",
                                      loading: "lazy",
                                    })
                                  )
                                ),
                                e(
                                  "div",
                                  { class: "oa-thankyou__body" },
                                  e(
                                    "h2",
                                    { class: "oa-thankyou__heading" },
                                    "Congratulations!"
                                  ),
                                  e(
                                    "h4",
                                    { class: "oa-thankyou__subheading" },
                                    "One of our experts will get in touch with you. We look forward to seeing how we can help you with your outsourcing journey."
                                  )
                                ),
                                e(
                                  "div",
                                  { class: "oa-thankyou__btns--wrapper pt-14" },
                                  e(
                                    "div",
                                    { class: "oa-thankyou__btns" },
                                    e("p", null, "Can't wait?"),
                                    e(
                                      "span",
                                      null,
                                      "Email us at info@outsourceaccelerator.com"
                                    )
                                  )
                                )
                              ),
                              e(
                                "div",
                                { class: "oa-thankyou__col--two" },
                                e(
                                  "div",
                                  { class: "oa-thankyou__body" },
                                  e(
                                    "h3",
                                    { class: "oa-thankyou__heading" },
                                    "Ready to ",
                                    e("span", null, "start?")
                                  ),
                                  e(
                                    "h4",
                                    { class: "oa-thankyou__subheading" },
                                    "Book your call now"
                                  ),
                                  e(
                                    "p",
                                    { class: "oa-thankyou__text" },
                                    "If you’re not ready to pick a time yet, don’t worry, we’ll contact you shortly."
                                  ),
                                  e(
                                    "div",
                                    { class: "oa-thankyou__btns" },
                                    e(
                                      "button",
                                      {
                                        class:
                                          "oa-btn__primary oa_btn-book-now",
                                        onclick:
                                          "location.href = 'https://outsourceacceleratormeet.as.me/meet-jet';",
                                      },
                                      "BOOK A TIME NOW"
                                    ),
                                    e(
                                      "button",
                                      {
                                        class:
                                          "oa_btn-close oa-btn__secondary mt-3",
                                        id: "js-thankyou-close",
                                      },
                                      "No thanks, just contact me"
                                    )
                                  )
                                )
                              )
                            )
                          );
                        })()
                      : "upsell-concierge" == t
                      ? (function () {
                          var e = a;
                          return e(
                            "div",
                            {
                              class:
                                "oa-popup oa-thankyou-concierge-popup js-thankyou-popup is--visible oa-popup__container shadow",
                              id: "js-thankyou-popup",
                            },
                            e(
                              "div",
                              { class: "oa-thankyou-concierge" },
                              e(
                                "div",
                                { class: "oa-thankyou-concierge__col--one" },
                                e(
                                  "div",
                                  {
                                    class:
                                      "oa-thankyou-concierge__img--wrapper",
                                  },
                                  e(
                                    "div",
                                    {
                                      class:
                                        "oa-thankyou-concierge__img--holder",
                                    },
                                    e("img", {
                                      src: "".concat(
                                        "https://opt.outsourceaccelerator.com",
                                        "/img/icons/success.png"
                                      ),
                                      alt: "Success",
                                      loading: "lazy",
                                    })
                                  )
                                ),
                                e(
                                  "div",
                                  { class: "oa-thankyou-concierge__body" },
                                  e(
                                    "h2",
                                    { class: "oa-thankyou-concierge__heading" },
                                    "Congratulations!"
                                  ),
                                  e(
                                    "h4",
                                    {
                                      class:
                                        "oa-thankyou-concierge__subheading",
                                    },
                                    "One of our experts will get in touch with you. We look forward to seeing how we can help you with your outsourcing journey."
                                  ),
                                  e(
                                    "p",
                                    { class: "oa-thankyou-concierge__text" },
                                    "In the meantime, explore your all-in-one outsourcing dashboard."
                                  ),
                                  e(
                                    "p",
                                    { class: "oa-thankyou-concierge__text" },
                                    "You will be redirected in ",
                                    e("span", { class: "js-counter" }),
                                    " ",
                                    e(
                                      "span",
                                      { class: "js-seconds" },
                                      "seconds"
                                    ),
                                    "."
                                  )
                                )
                              )
                            )
                          );
                        })()
                      : "upsell-expert" == t
                      ? s(o)
                      : "enterprise-thankyou" == t
                      ? (function () {
                          var e = a;
                          return e(
                            "div",
                            {
                              class:
                                "oa-popup oa-thankyou-enterprise-popup js-thankyou-popup is--visible oa-popup__container shadow",
                              id: "js-thankyou-popup",
                            },
                            e(
                              "div",
                              { class: "oa-thankyou-enterprise" },
                              e(
                                "div",
                                { class: "oa-thankyou-enterprise__col--one" },
                                e(
                                  "div",
                                  {
                                    class:
                                      "oa-thankyou-enterprise__img--wrapper",
                                  },
                                  e(
                                    "div",
                                    {
                                      class:
                                        "oa-thankyou-enterprise__img--holder",
                                    },
                                    e("img", {
                                      src: "".concat(
                                        "https://opt.outsourceaccelerator.com",
                                        "/img/icons/success-black-white.png"
                                      ),
                                      alt: "Success",
                                      loading: "lazy",
                                    })
                                  )
                                ),
                                e(
                                  "div",
                                  { class: "oa-thankyou-enterprise__body" },
                                  e(
                                    "h2",
                                    {
                                      class: "oa-thankyou-enterprise__heading",
                                    },
                                    "Congratulations!"
                                  ),
                                  e(
                                    "h4",
                                    {
                                      class:
                                        "oa-thankyou-enterprise__subheading",
                                    },
                                    "One of our experts will get in touch with you. We look forward to seeing how we can help you with your outsourcing journey."
                                  )
                                ),
                                e(
                                  "div",
                                  {
                                    class:
                                      "oa-thankyou-enterprise__btns--wrapper pt-14",
                                  },
                                  e(
                                    "div",
                                    { class: "oa-thankyou-enterprise__btns" },
                                    e("p", null, "Can't wait?"),
                                    e(
                                      "span",
                                      null,
                                      "Email us at info@outsourceaccelerator.com"
                                    )
                                  )
                                )
                              ),
                              e(
                                "div",
                                { class: "oa-thankyou-enterprise__col--two" },
                                e(
                                  "div",
                                  { class: "oa-thankyou-enterprise__body" },
                                  e(
                                    "h3",
                                    {
                                      class: "oa-thankyou-enterprise__heading",
                                    },
                                    "Ready to ",
                                    e("span", null, "start?")
                                  ),
                                  e(
                                    "h4",
                                    {
                                      class:
                                        "oa-thankyou-enterprise__subheading",
                                    },
                                    "Book your call now"
                                  ),
                                  e(
                                    "p",
                                    { class: "oa-thankyou-enterprise__text" },
                                    "If you’re not ready to pick a time yet, don’t worry, we’ll contact you shortly."
                                  ),
                                  e(
                                    "div",
                                    { class: "oa-thankyou-enterprise__btns" },
                                    e(
                                      "button",
                                      {
                                        class:
                                          "oa-btn__primary oa_btn-book-now",
                                        onclick:
                                          "location.href = 'https://outsourceacceleratormeet.as.me/meet-jet';",
                                      },
                                      "BOOK A TIME NOW"
                                    ),
                                    e(
                                      "button",
                                      {
                                        class:
                                          "oa_btn-close oa-btn__secondary mt-3",
                                        id: "js-thankyou-close",
                                      },
                                      "No thanks, just contact me"
                                    )
                                  )
                                )
                              )
                            )
                          );
                        })()
                      : "rospa" == t
                      ? pe("rospa")
                      : "prospa" == t
                      ? pe("prospa")
                      : "services" == t
                      ? (function () {
                          var e = a;
                          return e(
                            "div",
                            {
                              class: "oa-services__content",
                              id: "js-services-popup",
                            },
                            e(
                              "div",
                              {
                                class: "oa-services__header",
                                id: "js-upsell-close-btn",
                              },
                              e(
                                "div",
                                { class: "oa-services__header-item" },
                                e(
                                  "p",
                                  { class: "oa-services__header-text" },
                                  "OA: Millions of professionals, thousands of firms, one ",
                                  e("span", null, "marketplace.")
                                )
                              )
                            ),
                            e(
                              "div",
                              { class: "oa-services__container" },
                              e(
                                "div",
                                { class: "oa-services__left-content" },
                                e(
                                  "div",
                                  { class: "oa-services__left-img" },
                                  e("img", {
                                    src: "".concat(
                                      "https://opt.outsourceaccelerator.com",
                                      "/img/purple-boy.png"
                                    ),
                                    class: "oa-services__img",
                                  })
                                ),
                                e(
                                  "div",
                                  { class: "oa-services__left-text" },
                                  e(
                                    "label",
                                    null,
                                    e("span", null, "Outsource"),
                                    " the right way the first time."
                                  ),
                                  e(
                                    "p",
                                    null,
                                    "Access ",
                                    e("span", null, "outsourcing expertise"),
                                    " now. Takes just two minutes."
                                  )
                                )
                              ),
                              e(
                                "div",
                                { class: "oa-services__right-content" },
                                e(
                                  "div",
                                  {
                                    class: "oa-services__main-btn",
                                    id: "js-quote-btn-services",
                                  },
                                  "Get 3 FREE Quotes"
                                ),
                                e(
                                  "div",
                                  {
                                    class: "oa-services__main-btn",
                                    id: "js-booking-btn-services",
                                  },
                                  "Book a Call with Our Experts"
                                ),
                                e(
                                  "div",
                                  {
                                    class: "oa-services__main-btn",
                                    id: "js-toolkit-btn-services",
                                  },
                                  "Download Outsourcing Toolkit"
                                ),
                                e(
                                  "div",
                                  {
                                    class:
                                      "oa-services__close-btn js-popup-close-btn",
                                  },
                                  "Close"
                                )
                              )
                            )
                          );
                        })()
                      : "badcountryscreen" == t
                      ? (function (e) {
                          var t = a;
                          return t(
                            "div",
                            {
                              class:
                                "oa-popup oa-popup__rospa oa-popup__rospa--initial-screen is--visible oa-popup__container shadow",
                              id: "js-other-countries-popup",
                            },
                            t(
                              "div",
                              { class: "oa-rospa__other-countries" },
                              t(
                                "div",
                                { class: "oa-rospa__body" },
                                t(
                                  "div",
                                  { class: "oa-rospa__subheading" },
                                  t(
                                    "h3",
                                    null,
                                    "We noticed that you are located in",
                                    " ",
                                    "IN" ==
                                      sessionStorage.getItem(
                                        "OA_POPUP_COUNTRY_CODE"
                                      )
                                      ? "India"
                                      : "BD" ==
                                        sessionStorage.getItem(
                                          "OA_POPUP_COUNTRY_CODE"
                                        )
                                      ? "Bangladesh"
                                      : "PK" ==
                                        sessionStorage.getItem(
                                          "OA_POPUP_COUNTRY_CODE"
                                        )
                                      ? "Pakistan"
                                      : "IQ" ==
                                        sessionStorage.getItem(
                                          "OA_POPUP_COUNTRY_CODE"
                                        )
                                      ? "Iraq"
                                      : "LK" ==
                                        sessionStorage.getItem(
                                          "OA_POPUP_COUNTRY_CODE"
                                        )
                                      ? "Sri Lanka"
                                      : "IR" ==
                                          sessionStorage.getItem(
                                            "OA_POPUP_COUNTRY_CODE"
                                          ) && "Iran",
                                    ".."
                                  )
                                ),
                                t(
                                  "div",
                                  { class: "oa-rospa__heading" },
                                  t("h2", null, "Welcome!")
                                ),
                                t(
                                  "p",
                                  { class: "oa-rospa__text" },
                                  "Our ",
                                  e,
                                  " is intended for clients of outsourcing only. How can we help you today?"
                                ),
                                t(
                                  "div",
                                  { class: "oa-rospa__btns--wrapper" },
                                  t(
                                    "div",
                                    { class: "oa-rospa__btns--holder" },
                                    t(
                                      "div",
                                      { class: "oa-rospa__btn--services" },
                                      t(
                                        "div",
                                        { class: "oa-rospa__col--one" },
                                        t("img", {
                                          src: "".concat(
                                            "https://opt.outsourceaccelerator.com",
                                            "/img/icons/services.png"
                                          ),
                                          class: "oa-rospa__btn--icon",
                                        }),
                                        t(
                                          "p",
                                          { class: "oa-rospa__btn--text" },
                                          " I am a client looking for an outsourcing partner "
                                        )
                                      ),
                                      t(
                                        "div",
                                        { class: "oa-rospa__col--two" },
                                        t(
                                          "button",
                                          {
                                            class: "oa-rospa__btn",
                                            id: "js-proceed-to-popup-btn",
                                          },
                                          "Proceed"
                                        )
                                      )
                                    ),
                                    t(
                                      "div",
                                      { class: "oa-rospa__btn--rospa" },
                                      t(
                                        "div",
                                        { class: "oa-rospa__col--one" },
                                        t("img", {
                                          src: "".concat(
                                            "https://opt.outsourceaccelerator.com",
                                            "/img/icons/rospa.png"
                                          ),
                                          class: "oa-rospa__btn--icon",
                                        }),
                                        t(
                                          "p",
                                          { class: "oa-rospa__btn--text" },
                                          " I am a professional looking for work "
                                        )
                                      ),
                                      t(
                                        "div",
                                        { class: "oa-rospa__col--two" },
                                        t(
                                          "button",
                                          {
                                            class: "oa-rospa__btn",
                                            id: "js-open-rospa-btn",
                                          },
                                          "Check out ROSPA"
                                        )
                                      )
                                    ),
                                    t(
                                      "div",
                                      { class: "oa-rospa__btn--partner" },
                                      t(
                                        "div",
                                        { class: "oa-rospa__col--one" },
                                        t("img", {
                                          src: "".concat(
                                            "https://opt.outsourceaccelerator.com",
                                            "/img/icons/partners.png"
                                          ),
                                          class: "oa-rospa__btn--icon",
                                        }),
                                        t(
                                          "p",
                                          { class: "oa-rospa__btn--text" },
                                          " You're an established outsourcing company looking for clients "
                                        )
                                      ),
                                      t(
                                        "div",
                                        { class: "oa-rospa__col--two" },
                                        t(
                                          "button",
                                          {
                                            class: "oa-rospa__btn",
                                            id: "js-open-partner-btn",
                                          },
                                          "Partner with us"
                                        )
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          );
                        })(
                          "quote" == o
                            ? "free call"
                            : "booking" == o
                            ? "consultation call"
                            : "toolkit"
                        )
                      : "signinscreen" == t &&
                        (function (e) {
                          var t = a;
                          return t(
                            "div",
                            {
                              class:
                                "oa-popup oa-popup__dashboard-login is--visible oa-popup__container shadow",
                              id: "js-client-dash-login-popup",
                            },
                            t(
                              "div",
                              { class: "oa-client-dash" },
                              t(
                                "div",
                                { class: "oa-client-dash__col--one" },
                                t("img", {
                                  src: "".concat(
                                    "https://opt.outsourceaccelerator.com",
                                    "/img/oa-logo-blue.png"
                                  ),
                                  class: "oa-client-dash__logo",
                                }),
                                t(
                                  "h2",
                                  { class: "oa-client-dash__title" },
                                  "Sign in to your dashboard"
                                ),
                                t(
                                  "a",
                                  {
                                    href: "".concat(
                                      "https://client.outsourceaccelerator.com",
                                      "/dashboard"
                                    ),
                                    class: "oa-client-dash__login-btn",
                                  },
                                  "Sign in"
                                ),
                                "" != e
                                  ? t(
                                      "button",
                                      {
                                        type: "button",
                                        class: "oa-client-dash__login-proceed",
                                      },
                                      "No, proceed to ",
                                      t(
                                        "span",
                                        { id: "js-proceed-to-popup-btn" },
                                        e
                                      )
                                    )
                                  : ""
                              ),
                              t(
                                "div",
                                { class: "oa-client-dash__col--two" },
                                t("img", {
                                  src: "".concat(
                                    "https://opt.outsourceaccelerator.com",
                                    "/img/client-dash-img.png"
                                  ),
                                  class: "oa-client-dash__img",
                                })
                              )
                            )
                          );
                        })(
                          "toolkit" == o
                            ? "download toolkit form"
                            : "booking" == o
                            ? "book a call form"
                            : "quote" == o
                            ? "get 3 free quotes form"
                            : "quote-enterprise" == o
                            ? "quote enterprise form"
                            : ""
                        )
                  )
                )
              )
            ),
            (function () {
              if (!document.getElementById("stripejs")) {
                var e = document.createElement("script");
                (e.type = "text/javascript"),
                  (e.src = "https://js.stripe.com/v3/"),
                  (e.id = "stripejs"),
                  document.body.appendChild(e);
              }
            })(),
            h(),
            de(t),
            (function () {
              for (
                var e = document.getElementsByTagName("html")[0],
                  t = document.getElementsByClassName(
                    "oa-popup__content-wrapper"
                  ),
                  o = document.getElementById("js-popups-container"),
                  a = document.getElementById("js-popup-overlay"),
                  n = 0;
                n < t.length;
                n++
              )
                !(function (n) {
                  var i = t[n].querySelectorAll(
                    ".js-popup-close-btn, #js-upsell-popup-close, #js-thankyou-close"
                  );
                  i &&
                    i.forEach(function (i) {
                      i.addEventListener("click", function () {
                        t[n].classList.remove(
                          "is--visible",
                          "oa-popup__container",
                          "shadow"
                        ),
                          a.classList.remove("is-blacked-out"),
                          (document.getElementsByTagName(
                            "body"
                          )[0].style.overflow = "auto"),
                          o.remove(),
                          localStorage.removeItem("OA_POPUP_RESET_QUOTE_FORM"),
                          sessionStorage.removeItem("OA_POPUP_ACTIVE"),
                          e.classList.remove("oa-pop--active");
                      });
                    }),
                    window.addEventListener("hashchange", function (i) {
                      t[n] &&
                        t[n].classList.remove(
                          "is--visible",
                          "oa-popup__container",
                          "shadow"
                        ),
                        a.classList.remove("is-blacked-out"),
                        (document.getElementsByTagName(
                          "body"
                        )[0].style.overflow = "auto"),
                        o.remove(),
                        localStorage.removeItem("OA_POPUP_RESET_QUOTE_FORM"),
                        sessionStorage.removeItem("OA_POPUP_ACTIVE"),
                        e.classList.remove("oa-pop--active");
                    }),
                    a.addEventListener("click", function () {
                      t[n] &&
                        t[n].classList.remove(
                          "is--visible",
                          "oa-popup__container",
                          "shadow"
                        ),
                        a.classList.remove("is-blacked-out"),
                        (document.getElementsByTagName(
                          "body"
                        )[0].style.overflow = "auto"),
                        o.remove(),
                        localStorage.removeItem("OA_POPUP_RESET_QUOTE_FORM"),
                        sessionStorage.removeItem("OA_POPUP_ACTIVE"),
                        e.classList.remove("oa-pop--active");
                    });
                })(n);
            })(),
            (function (e) {
              console.log("trackview: " + e),
                "quote-enterprise" == e &&
                  ga("send", "event", "POPUP", "view", "Quote enterprise"),
                "quote" == e &&
                  ga("send", "event", "POPUP", "view", "Get 3 quotes"),
                "toolkit" == e &&
                  ga("send", "event", "POPUP", "view", "Toolkit"),
                "booking" == e &&
                  ga("send", "event", "POPUP", "view", "Book a call"),
                "services" == e &&
                  ga("send", "event", "POPUP", "view", "Services"),
                "rospa" == e && ga("send", "event", "POPUP", "view", "Rospa"),
                "prospa" == e && ga("send", "event", "POPUP", "view", "Prospa"),
                "signinscreen" == e &&
                  ga("send", "event", "POPUP", "view", "Sign in screen"),
                "badcountryscreen" == e &&
                  ga("send", "event", "POPUP", "view", "Bad country screen");
            })(t),
            (p = document.getElementsByClassName("animate-popup")[0]) &&
              (p.classList.remove("slideUp"),
              setTimeout(function () {
                p.classList.add("slideUp");
              }, 1));
        }
        var he,
          ve,
          _e,
          ge,
          fe,
          ye,
          be,
          we,
          Le,
          Ee,
          ke,
          Ie,
          Ce,
          Pe,
          Oe,
          Se,
          je,
          xe,
          Ae,
          Be,
          Ne = o(362);
        function qe(e) {
          return (
            (qe =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            qe(e)
          );
        }
        function Te() {
          Te = function () {
            return e;
          };
          var e = {},
            t = Object.prototype,
            o = t.hasOwnProperty,
            a = "function" == typeof Symbol ? Symbol : {},
            n = a.iterator || "@@iterator",
            i = a.asyncIterator || "@@asyncIterator",
            s = a.toStringTag || "@@toStringTag";
          function r(e, t, o) {
            return (
              Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            r({}, "");
          } catch (e) {
            r = function (e, t, o) {
              return (e[t] = o);
            };
          }
          function l(e, t, o, a) {
            var n = t && t.prototype instanceof d ? t : d,
              i = Object.create(n.prototype),
              s = new E(a || []);
            return (
              (i._invoke = (function (e, t, o) {
                var a = "suspendedStart";
                return function (n, i) {
                  if ("executing" === a)
                    throw new Error("Generator is already running");
                  if ("completed" === a) {
                    if ("throw" === n) throw i;
                    return I();
                  }
                  for (o.method = n, o.arg = i; ; ) {
                    var s = o.delegate;
                    if (s) {
                      var r = b(s, o);
                      if (r) {
                        if (r === u) continue;
                        return r;
                      }
                    }
                    if ("next" === o.method) o.sent = o._sent = o.arg;
                    else if ("throw" === o.method) {
                      if ("suspendedStart" === a)
                        throw ((a = "completed"), o.arg);
                      o.dispatchException(o.arg);
                    } else "return" === o.method && o.abrupt("return", o.arg);
                    a = "executing";
                    var l = c(e, t, o);
                    if ("normal" === l.type) {
                      if (
                        ((a = o.done ? "completed" : "suspendedYield"),
                        l.arg === u)
                      )
                        continue;
                      return { value: l.arg, done: o.done };
                    }
                    "throw" === l.type &&
                      ((a = "completed"),
                      (o.method = "throw"),
                      (o.arg = l.arg));
                  }
                };
              })(e, o, s)),
              i
            );
          }
          function c(e, t, o) {
            try {
              return { type: "normal", arg: e.call(t, o) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          e.wrap = l;
          var u = {};
          function d() {}
          function p() {}
          function m() {}
          var h = {};
          r(h, n, function () {
            return this;
          });
          var v = Object.getPrototypeOf,
            _ = v && v(v(k([])));
          _ && _ !== t && o.call(_, n) && (h = _);
          var g = (m.prototype = d.prototype = Object.create(h));
          function f(e) {
            ["next", "throw", "return"].forEach(function (t) {
              r(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function y(e, t) {
            function a(n, i, s, r) {
              var l = c(e[n], e, i);
              if ("throw" !== l.type) {
                var u = l.arg,
                  d = u.value;
                return d && "object" == qe(d) && o.call(d, "__await")
                  ? t.resolve(d.__await).then(
                      function (e) {
                        a("next", e, s, r);
                      },
                      function (e) {
                        a("throw", e, s, r);
                      }
                    )
                  : t.resolve(d).then(
                      function (e) {
                        (u.value = e), s(u);
                      },
                      function (e) {
                        return a("throw", e, s, r);
                      }
                    );
              }
              r(l.arg);
            }
            var n;
            this._invoke = function (e, o) {
              function i() {
                return new t(function (t, n) {
                  a(e, o, t, n);
                });
              }
              return (n = n ? n.then(i, i) : i());
            };
          }
          function b(e, t) {
            var o = e.iterator[t.method];
            if (void 0 === o) {
              if (((t.delegate = null), "throw" === t.method)) {
                if (
                  e.iterator.return &&
                  ((t.method = "return"),
                  (t.arg = void 0),
                  b(e, t),
                  "throw" === t.method)
                )
                  return u;
                (t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return u;
            }
            var a = c(o, e.iterator, t.arg);
            if ("throw" === a.type)
              return (
                (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), u
              );
            var n = a.arg;
            return n
              ? n.done
                ? ((t[e.resultName] = n.value),
                  (t.next = e.nextLoc),
                  "return" !== t.method &&
                    ((t.method = "next"), (t.arg = void 0)),
                  (t.delegate = null),
                  u)
                : n
              : ((t.method = "throw"),
                (t.arg = new TypeError("iterator result is not an object")),
                (t.delegate = null),
                u);
          }
          function w(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function L(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function E(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(w, this),
              this.reset(!0);
          }
          function k(e) {
            if (e) {
              var t = e[n];
              if (t) return t.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var a = -1,
                  i = function t() {
                    for (; ++a < e.length; )
                      if (o.call(e, a))
                        return (t.value = e[a]), (t.done = !1), t;
                    return (t.value = void 0), (t.done = !0), t;
                  };
                return (i.next = i);
              }
            }
            return { next: I };
          }
          function I() {
            return { value: void 0, done: !0 };
          }
          return (
            (p.prototype = m),
            r(g, "constructor", m),
            r(m, "constructor", p),
            (p.displayName = r(m, s, "GeneratorFunction")),
            (e.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === p || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (e.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, m)
                  : ((e.__proto__ = m), r(e, s, "GeneratorFunction")),
                (e.prototype = Object.create(g)),
                e
              );
            }),
            (e.awrap = function (e) {
              return { __await: e };
            }),
            f(y.prototype),
            r(y.prototype, i, function () {
              return this;
            }),
            (e.AsyncIterator = y),
            (e.async = function (t, o, a, n, i) {
              void 0 === i && (i = Promise);
              var s = new y(l(t, o, a, n), i);
              return e.isGeneratorFunction(o)
                ? s
                : s.next().then(function (e) {
                    return e.done ? e.value : s.next();
                  });
            }),
            f(g),
            r(g, s, "Generator"),
            r(g, n, function () {
              return this;
            }),
            r(g, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (e) {
              var t = [];
              for (var o in e) t.push(o);
              return (
                t.reverse(),
                function o() {
                  for (; t.length; ) {
                    var a = t.pop();
                    if (a in e) return (o.value = a), (o.done = !1), o;
                  }
                  return (o.done = !0), o;
                }
              );
            }),
            (e.values = k),
            (E.prototype = {
              constructor: E,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = void 0),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = void 0),
                  this.tryEntries.forEach(L),
                  !e)
                )
                  for (var t in this)
                    "t" === t.charAt(0) &&
                      o.call(this, t) &&
                      !isNaN(+t.slice(1)) &&
                      (this[t] = void 0);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var t = this;
                function a(o, a) {
                  return (
                    (s.type = "throw"),
                    (s.arg = e),
                    (t.next = o),
                    a && ((t.method = "next"), (t.arg = void 0)),
                    !!a
                  );
                }
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var i = this.tryEntries[n],
                    s = i.completion;
                  if ("root" === i.tryLoc) return a("end");
                  if (i.tryLoc <= this.prev) {
                    var r = o.call(i, "catchLoc"),
                      l = o.call(i, "finallyLoc");
                    if (r && l) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    } else if (r) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                    } else {
                      if (!l)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                  var n = this.tryEntries[a];
                  if (
                    n.tryLoc <= this.prev &&
                    o.call(n, "finallyLoc") &&
                    this.prev < n.finallyLoc
                  ) {
                    var i = n;
                    break;
                  }
                }
                i &&
                  ("break" === e || "continue" === e) &&
                  i.tryLoc <= t &&
                  t <= i.finallyLoc &&
                  (i = null);
                var s = i ? i.completion : {};
                return (
                  (s.type = e),
                  (s.arg = t),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), u)
                    : this.complete(s)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  u
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var o = this.tryEntries[t];
                  if (o.finallyLoc === e)
                    return this.complete(o.completion, o.afterLoc), L(o), u;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var o = this.tryEntries[t];
                  if (o.tryLoc === e) {
                    var a = o.completion;
                    if ("throw" === a.type) {
                      var n = a.arg;
                      L(o);
                    }
                    return n;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, t, o) {
                return (
                  (this.delegate = {
                    iterator: k(e),
                    resultName: t,
                    nextLoc: o,
                  }),
                  "next" === this.method && (this.arg = void 0),
                  u
                );
              },
            }),
            e
          );
        }
        function Ue(e, t, o, a, n, i, s) {
          try {
            var r = e[i](s),
              l = r.value;
          } catch (e) {
            return void o(e);
          }
          r.done ? t(l) : Promise.resolve(l).then(a, n);
        }
        function De(e) {
          var t = RegExp("[?&]" + e + "=([^&]*)").exec(window.location.search);
          return t && decodeURIComponent(t[1].replace(/\+/g, " "));
        }
        (ve = ["IN", "BD", "PK", "IQ", "LK", "IR"]),
          (_e = document.getElementsByTagName("html")[0]),
          (ge = document.querySelectorAll('[optin-trigger="toolkit"]')),
          (fe = document.querySelectorAll('[optin-trigger="quote"]')),
          (ye = document.querySelectorAll(
            '[optin-trigger="quote-enterprise"]'
          )),
          (be = document.querySelectorAll('[optin-trigger="booking"]')),
          (we = document.querySelectorAll('[optin-trigger="rospa"]')),
          (Le = document.querySelectorAll('[optin-trigger="prospa"]')),
          (Ee = document.querySelectorAll('[optin-trigger="services"]')),
          (ke = document.querySelectorAll(
            '[optin-trigger="client-dash-login"]'
          )),
          (Ie = function (e) {
            if (e)
              for (
                var t = function (t) {
                    var o = e[0].getAttribute("optin-trigger");
                    e[t].addEventListener("click", function (t) {
                      _e.classList.add("oa-pop--active"),
                        (e != fe && e != ye) ||
                          localStorage.setItem(
                            "OA_POPUP_RESET_QUOTE_FORM",
                            "true"
                          ),
                        J("OA_POPUP_RETURNING_CLIENT") || e == ke
                          ? (sessionStorage.setItem(
                              "OA_POPUP_ACTIVE",
                              "".concat(o)
                            ),
                            me({
                              popup_to_display: "signinscreen",
                              active_popup: "".concat(o),
                            }))
                          : ve.includes(
                              sessionStorage.getItem("OA_POPUP_COUNTRY_CODE")
                            )
                          ? (sessionStorage.setItem(
                              "OA_POPUP_FROM_BAD_COUNTRY",
                              "".concat(o)
                            ),
                            me({
                              popup_to_display: "badcountryscreen",
                              active_popup: "".concat(o),
                            }))
                          : me({ popup_to_display: "".concat(o) }),
                        document.activeElement.blur();
                    });
                  },
                  o = 0;
                o < e.length;
                o++
              )
                t(o);
          })(ge),
          Ie(fe),
          Ie(ye),
          Ie(be),
          Ie(Ee),
          Ie(we),
          Ie(Le),
          Ie(ke),
          "true" != J("OA_POPUP_SHOWN_TIMED_POPUP") &&
            ((he = m()),
            ["IN", "BD", "PK", "IQ", "LK", "IR"].includes(
              sessionStorage.getItem("OA_POPUP_COUNTRY_CODE")
            ) ||
              setTimeout(function () {
                document
                  .getElementsByTagName("html")[0]
                  .classList.add("oa-pop--active"),
                  document.getElementById("js-popups-container") ||
                    (me({ popup_to_display: "services" }),
                    document.activeElement.blur(),
                    d("OA_POPUP_SHOWN_TIMED_POPUP", "true", he.toUTCString()));
              }, 3e4)),
          (0, Ne.Z)(),
          (Ce = document.getElementsByTagName("head")[0]),
          ((Pe = document.createElement("link")).type = "text/css"),
          (Pe.rel = "stylesheet"),
          Ce.insertBefore(Pe, Ce.firstChild),
          (Pe.href = "".concat(
            "https://opt.outsourceaccelerator.com",
            "/dist/app.css"
          )),
          (Oe = (function () {
            var e,
              t =
                ((e = Te().mark(function e() {
                  var t;
                  return Te().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            fetch("https://geolocation-db.com/json/p").then(
                              function (e) {
                                return e.json();
                              }
                            )
                          );
                        case 2:
                          (t = e.sent),
                            sessionStorage.setItem(
                              "OA_POPUP_CLIENT_IP",
                              t.IPv4
                            ),
                            sessionStorage.setItem(
                              "OA_POPUP_COUNTRY_CODE",
                              t.country_code
                            );
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })),
                function () {
                  var t = this,
                    o = arguments;
                  return new Promise(function (a, n) {
                    var i = e.apply(t, o);
                    function s(e) {
                      Ue(i, a, n, s, r, "next", e);
                    }
                    function r(e) {
                      Ue(i, a, n, s, r, "throw", e);
                    }
                    s(void 0);
                  });
                });
            return function () {
              return t.apply(this, arguments);
            };
          })()),
          Oe(),
          (Se = De("utm_source")),
          (je = De("gclid")),
          (xe = De("gbraid")),
          (Ae = De("wbraid")),
          (Be = De("msclkid")),
          "facebook" == Se &&
            localStorage.setItem("fb_paid_source_url", window.location.href),
          "linkedin" == Se &&
            localStorage.setItem("li_paid_source_url", window.location.href),
          "programmatic" == Se &&
            localStorage.setItem(
              "programmatic_paid_source_url",
              window.location.href
            ),
          je &&
            localStorage.setItem("gclid_paid_source_url", window.location.href),
          xe &&
            localStorage.setItem(
              "gbraid_paid_source_url",
              window.location.href
            ),
          Ae &&
            localStorage.setItem(
              "wbraid_paid_source_url",
              window.location.href
            ),
          Be &&
            localStorage.setItem(
              "msclkid_paid_source_url",
              window.location.href
            );
      },
      823: () => {},
    },
    o = {};
  function a(e) {
    var n = o[e];
    if (void 0 !== n) return n.exports;
    var i = (o[e] = { id: e, loaded: !1, exports: {} });
    return t[e](i, i.exports, a), (i.loaded = !0), i.exports;
  }
  (a.m = t),
    (e = []),
    (a.O = (t, o, n, i) => {
      if (!o) {
        var s = 1 / 0;
        for (u = 0; u < e.length; u++) {
          for (var [o, n, i] = e[u], r = !0, l = 0; l < o.length; l++)
            (!1 & i || s >= i) && Object.keys(a.O).every((e) => a.O[e](o[l]))
              ? o.splice(l--, 1)
              : ((r = !1), i < s && (s = i));
          if (r) {
            e.splice(u--, 1);
            var c = n();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      i = i || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
      e[u] = [o, n, i];
    }),
    (a.d = (e, t) => {
      for (var o in t)
        a.o(t, o) &&
          !a.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (a.hmd = (e) => (
      (e = Object.create(e)).children || (e.children = []),
      Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
          throw new Error(
            "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
              e.id
          );
        },
      }),
      e
    )),
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = { 489: 0, 952: 0 };
      a.O.j = (t) => 0 === e[t];
      var t = (t, o) => {
          var n,
            i,
            [s, r, l] = o,
            c = 0;
          if (s.some((t) => 0 !== e[t])) {
            for (n in r) a.o(r, n) && (a.m[n] = r[n]);
            if (l) var u = l(a);
          }
          for (t && t(o); c < s.length; c++)
            (i = s[c]), a.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return a.O(u);
        },
        o = (self.webpackChunkOApopups = self.webpackChunkOApopups || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })(),
    a.O(void 0, [952], () => a(288));
  var n = a.O(void 0, [952], () => a(823));
  n = a.O(n);
})();
