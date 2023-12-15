// first-js
function expand(param) {
  param.style.display = param.style.display == "none" ? "block" : "none";
}
function read_toggle(id, more, less) {
  el = document.getElementById("readlink" + id);
  el.innerHTML = el.innerHTML == more ? less : more;
  expand(document.getElementById("read" + id));
}

// second-js
jQuery(document).ready(function (jQuery) {
  jQuery.datepicker.setDefaults({
    closeText: "Close",
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
    nextText: "Next",
    prevText: "Previous",
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
    dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
    dateFormat: "MM d, yy",
    firstDay: 1,
    isRTL: false,
  });
});

// third-js
window.lazyLoadOptions = {
  elements_selector:
    "img[data-lazy-src],.rocket-lazyload,iframe[data-lazy-src]",
  data_src: "lazy-src",
  data_srcset: "lazy-srcset",
  data_sizes: "lazy-sizes",
  class_loading: "lazyloading",
  class_loaded: "lazyloaded",
  threshold: 300,
  callback_loaded: function (element) {
    if (
      element.tagName === "IFRAME" &&
      element.dataset.rocketLazyload == "fitvidscompatible"
    ) {
      if (element.classList.contains("lazyloaded")) {
        if (typeof window.jQuery != "undefined") {
          if (jQuery.fn.fitVids) {
            jQuery(element).parent().fitVids();
          }
        }
      }
    }
  },
};
window.addEventListener(
  "LazyLoad::Initialized",
  function (e) {
    var lazyLoadInstance = e.detail.instance;

    if (window.MutationObserver) {
      var observer = new MutationObserver(function (mutations) {
        var image_count = 0;
        var iframe_count = 0;
        var rocketlazy_count = 0;

        mutations.forEach(function (mutation) {
          for (i = 0; i < mutation.addedNodes.length; i++) {
            if (
              typeof mutation.addedNodes[i].getElementsByTagName !== "function"
            ) {
              return;
            }

            if (
              typeof mutation.addedNodes[i].getElementsByClassName !==
              "function"
            ) {
              return;
            }

            images = mutation.addedNodes[i].getElementsByTagName("img");
            is_image = mutation.addedNodes[i].tagName == "IMG";
            iframes = mutation.addedNodes[i].getElementsByTagName("iframe");
            is_iframe = mutation.addedNodes[i].tagName == "IFRAME";
            rocket_lazy =
              mutation.addedNodes[i].getElementsByClassName("rocket-lazyload");

            image_count += images.length;
            iframe_count += iframes.length;
            rocketlazy_count += rocket_lazy.length;

            if (is_image) {
              image_count += 1;
            }

            if (is_iframe) {
              iframe_count += 1;
            }
          }
        });

        if (image_count > 0 || iframe_count > 0 || rocketlazy_count > 0) {
          lazyLoadInstance.update();
        }
      });

      var b = document.getElementsByTagName("body")[0];
      var config = { childList: true, subtree: true };

      observer.observe(b, config);
    }
  },
  false
);

// fourth js
function lazyLoadThumb(e) {
  var t =
      '<img loading="lazy" data-lazy-src="https://i.ytimg.com/vi/ID/hqdefault.jpg" alt="" width="480" height="360"><noscript><img src="https://i.ytimg.com/vi/ID/hqdefault.jpg" alt="" width="480" height="360"></noscript>',
    a = '<div class="play"></div>';
  return t.replace("ID", e) + a;
}
function lazyLoadYoutubeIframe() {
  var e = document.createElement("iframe"),
    t = "ID?autoplay=1";
  t += 0 === this.dataset.query.length ? "" : "&" + this.dataset.query;
  e.setAttribute("src", t.replace("ID", this.dataset.src)),
    e.setAttribute("frameborder", "0"),
    e.setAttribute("allowfullscreen", "1"),
    e.setAttribute(
      "allow",
      "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    ),
    this.parentNode.replaceChild(e, this);
}
document.addEventListener("DOMContentLoaded", function () {
  var e,
    t,
    a = document.getElementsByClassName("rll-youtube-player");
  for (t = 0; t < a.length; t++)
    (e = document.createElement("div")),
      e.setAttribute("data-id", a[t].dataset.id),
      e.setAttribute("data-query", a[t].dataset.query),
      e.setAttribute("data-src", a[t].dataset.src),
      (e.innerHTML = lazyLoadThumb(a[t].dataset.id)),
      (e.onclick = lazyLoadYoutubeIframe),
      a[t].appendChild(e);
});

// fifth js
var oa_quote_btn = document.querySelectorAll('[optin-trigger="quote"]');
var oa_toolkit_btn = document.querySelectorAll('[optin-trigger="toolkit"]');
var oa_booking_btn = document.querySelectorAll('[optin-trigger="booking"]');

if (oa_quote_btn) {
  for (var i = 0; i < oa_quote_btn.length; i++) {
    oa_quote_btn[i].classList.add("oa_quote_btn");
  }
}
if (oa_toolkit_btn) {
  for (var i = 0; i < oa_toolkit_btn.length; i++) {
    oa_toolkit_btn[i].classList.add("oa_toolkit_btn");
  }
}
if (oa_booking_btn) {
  for (var i = 0; i < oa_booking_btn.length; i++) {
    oa_booking_btn[i].classList.add("oa_booking_btn");
  }
}
