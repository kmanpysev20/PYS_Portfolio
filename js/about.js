(function () {
    function r(e, n, t) {
      function o(i, f) {
        if (!n[i]) {
          if (!e[i]) {
            var c = "function" == typeof require && require;
            if (!f && c) return c(i, !0);
            if (u) return u(i, !0);
            var a = new Error("Cannot find module '" + i + "'");
            throw ((a.code = "MODULE_NOT_FOUND"), a);
          }
          var p = (n[i] = { exports: {} });
          e[i][0].call(
            p.exports,
            function (r) {
              var n = e[i][1][r];
              return o(n || r);
            },
            p,
            p.exports,
            r,
            e,
            n,
            t
          );
        }
        return n[i].exports;
      }
      for (
        var u = "function" == typeof require && require, i = 0;
        i < t.length;
        i++
      )
        o(t[i]);
      return o;
    }
    return r;
  })()(
    {
      1: [
        function (require, module, exports) {
          "use strict";
          !(function () {
            for (
              var t = document.querySelectorAll(".step"),
                e = document.querySelectorAll(".graphic-item"),
                i = e[0],
                a = 0;
              a < t.length;
              a++
            )
              (t[a].dataset.index = a), (e[a].dataset.index = a);
            window.addEventListener("scroll", function () {
              for (var a, n, o = 0; o < t.length; o++)
                (n = (a = t[o]).getBoundingClientRect()).top >
                  0.1 * window.innerHeight &&
                  n.top < 0.8 * window.innerHeight &&
                  (i.classList.remove("visible"),
                  (i = e[a.dataset.index]).dataset.action,
                  i.classList.add("visible"));
            });
            var n = new Swiper(".abslider", {
                loop: !0,
                autoplay: { delay: 2500, disableOnInteraction: !1 },
                pagination: { el: ".swiper-pagination" },
              }),
              o = document.querySelector(".swiper-btn"),
              s = !0;
            o.addEventListener("click", function (t) {
              (s = !s)
                ? (t.target.classList.remove("stop"), n.autoplay.start())
                : (t.target.classList.add("stop"), n.autoplay.stop());
            });
          })();
        },
        {},
      ],
    },
    {},
    [1]
  );
  