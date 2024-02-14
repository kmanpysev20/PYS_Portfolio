$(document).ready(() => {
  appFadeIn();
  fullPage();
});

// 전체 앱 fadein [s]
function appFadeIn() {
  $(".app").fadeIn(1000);
}
// 전체 앱 fadein [e]

// scroll event [s]
let sectionIds = {};
$(".cont-scroll").each(function () {
  let $this = $(this);
  sectionIds[$this.attr("id")] = $this.first().offset().top - 401;
});

$(window).scroll(function () {
  let scrolled = $(this).scrollTop();

  function scrollTop() {
      if (scrolled >= 1) {
        $(".scroll-top").css('display','flex');
      } else {
        $(".scroll-top").css('display', 'none');
      }
  }
  function headerScroll() {
      if (scrolled <= 1) {
        $(".main-header").fadeIn("slow").addClass('is-active');
      } else {
        $(".main-header").fadeOut("slow");
      }
  }

    $(".cont-scroll").each(function () {
        let $this = $(this);

        if (scrolled >= $this.first().offset().top - 450) {
        $(".cont-scroll").removeClass("is-active");
        $this.addClass("is-active");
        } else {
        $(".cont-scroll").removeClass("is-active");
        }
    });

    $(".bg-scroll").each(function () {
      let $this = $(this);

      if (scrolled >= $this.first().offset().top - 800) {
        $(".bg-scroll").removeClass("is-active");
        $this.addClass("is-active");
      } else {
        $(".bg-scroll").removeClass("is-active");
      }
    });
    scrollTop();
    headerScroll();
});


// Scroll Top [s]
$(function scrollTop() {
  $(".scroll-top").on("click", function () {
    $('html').animate({scrollTop : 0}, 'slow')
  });
});
//Scroll Top [e]

// mouse move [s]
$(function mouseMove() {
    $(".bg-box").on("mousemove", function (e) {
        const width = $(window).width();
        const height = $(window).height();

        const moveX = (e.pageX - width / 2) / width;
        const moveY = (e.pageY - height / 2) / height;

        const backMoveX = -moveX * 100;
        const backMoveY = -moveY * 0;

        $(".bg-ex").css({
        transform: `translate(${backMoveX}px, ${backMoveY}px)`,
        });
    });
});
// mouse move [e]

// fullpage [s]
$(function fullPage() {
    $("#fullpage").fullpage({
      scrollingSpeed: 1000,
      anchors: ["firstPage", "secondPage", "tridPage"],
      navigation: true,
      navigationPosition: "right",
      // responsiveWidth: 713,
      // onLeave: function (anchorLink, index) {
      //   if (index === 1) {
      //     $(".scroll-top").addClass('is-active').css("top", "50%");
      //     let anClass = `fpsec${index}`;
      //     $(".cont-wrap")
      //       .removeClass("fpsec1 fpsec2 fpsec3 fpsec4")
      //       .addClass(`${anClass}`);
      //   } else if (index === 2) {
      //     $(".scroll-top").addClass("is-active").css("top", "150%");
      //     let anClass = `fpsec${index}`;
      //     $(".cont-wrap")
      //       .removeClass("fpsec1 fpsec2 fpsec3 fpsec4")
      //       .addClass(`${anClass}`);
      //   } else if (index === 3) {
      //     $(".scroll-top").addClass("is-active").css("top", "250%");
      //     $(".main-footer").removeClass("is-active").fadeOut("slow");
      //     let anClass = `fpsec${index}`;
      //     $(".cont-wrap")
      //       .removeClass("fpsec1 fpsec2 fpsec3 fpsec4")
      //       .addClass(`${anClass}`);
      //   } else if (index === 4) {
      //     $(".scroll-top").addClass('is-active').css("top", "350%");
      //     $(".main-footer").addClass("is-active").fadeIn("slow");
      //     let anClass = `fqsec${index}`;
      //     $(".cont-wrap")
      //       .removeClass("fpsec1 fpsec2 fpsec3 fpsec4")
      //       .addClass(`${anClass}`);
      //   }
      // },
    });    
    6
})
// fullpage [e]

// click event [s]
$(function logo() {
    $(".header-logo").on("click", function () {
      $(".mo-menu").removeClass("is-active");
    });
})

$(function menuWrapClick() {
  $('.menu-wrap > .menu-btn').on("click", function () {
    $('.menu-wrap').addClass('is-open');
    $(".mo-menu").addClass("is-active");
    $("body").addClass("is-rock");
  });
  $(".mo-menu > .menu-list > .menu-btn").on("click", function () {
    $("body").removeClass("is-rock");
    $(".mo-menu").removeClass("is-active");
    $(".menu-wrap").removeClass("is-open");
   });
  $(".close-btn").on("click", function () {
    $(".menu-wrap").removeClass("is-open");
    $(".mo-menu").removeClass("is-active");
    $("body").removeClass("is-rock");
  });
});

$(function navClick() {
  $("a[href='#firstPage']").on('click', function() {
    $('.main-footer').removeClass('is-active');
  });
})

$(function CareerClick() {
  $(".career-btn").on('click', function() {
    $(this).toggleClass('is-open');
    $(this).next('.txt').toggleClass('is-open');
  });
})

// click event [e]

// mo-header event [s]
function moHeader() {
    let ww = $(window).width();
    if(ww > 713) {
        $('.mo-menu').removeClass('is-active');
    }
}
$(window).resize(function() {
   moHeader();
});
// mo-header event [e]