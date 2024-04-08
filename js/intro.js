// intro_scrollTrigger [s]
$(function () {
  $(".visual .tit").fadeIn(2000);

  gsap.registerPlugin(ScrollTrigger);

  // 01.visual
  const visual = gsap.timeline();
  visual.to(
    ".visual img",
    { scale: 0.4, ease: "none", duration: "10", opactity: "0.3" },
    1
  );

  ScrollTrigger.create({
    animation: visual,
    trigger: ".visual",
    start: "top top",
    end: "bottom top",
    scrub: 1,
  });

  // gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".visual",
  //       start: "top top",
  //       end: "bottom top",
  //       scrub: 1,
  //       // markers: true,
  //     },
  //   })
  // .to(".visual img", { scale: 0.4, ease: 'none' , duration: "10", opactity : '0.3' },1);

  // 02. imgBox
  gsap.utils.toArray(".imgBox").forEach(function (imgBox) {
    gsap.timeline({
      scrollTrigger: {
        trigger: imgBox,
        start: "50% 100%",
        toggleClass: { targets: imgBox, className: "active" },
        scrub: 1,
        // markers: true,
      },
    });
  });

  // 03. infoProject > testBox
  gsap.utils.toArray(".infoProject .textBox").forEach(function (textBox) {
    gsap.timeline({
      scrollTrigger: {
        trigger: textBox,
        start: "50% 80%",
        end: "100% 0%",
        toggleClass: { targets: textBox, className: "active" },
        scrub: 1,
        // markers: true,
      },
    });
  });

  // 04. final > textBox
  const final = gsap.timeline();
  final
    .fromTo(".final .t1", { autoAlpha: 1, duration: 1, y: -500, rotation: 0}, { autoAlpha: 1, duration: 1, y: '-50%', rotation: 360},"+=1")
    .fromTo(".final .t2", { autoAlpha: 0, duration: 1}, { autoAlpha: 1, duration: 1, y:'-50%'}, "+=1")
    .fromTo(".final .t3", { autoAlpha: 0, duration: 1}, { autoAlpha: 1, duration: 1, y: '-50%'}, "+=1")
    .fromTo(".final .t4", { autoAlpha: 0, duration: 1}, { autoAlpha: 1, duration: 1, y: '-50%'}, "+=1")
    .fromTo(".final .t5", { autoAlpha: 0, duration: 1}, { autoAlpha: 1, duration: 1, y: '-50%', scale : 10}, "+=1")
    // .fromTo(".final .circle", {autoAlpha: 0, duration: 1},{autoAlpha: 1, duration: 5, scale : 10 , background: '#fff'}, "+=1")
    .fromTo(".final .backSky", { autoAlpha: 0, duration: 1 , y: 50}, { autoAlpha: 1, duration: 1, y:0}, "+=1")

  ScrollTrigger.create({
    animation: final,
    trigger: ".final",
    start: "top top",
    end: "+=7000",
    scrub: true,
    pin: true,
    anticipatePin: 1,
    // markers: true,
  });

});
// intro_scrollTrigger [e]

// star script [s]
const sky = document.querySelector(".sky");
const sky2 = document.querySelector(".sky2");

const makeStars = () => {
  const maxSize = Math.max(window.innerWidth, window.innerHeight);
  const getRandomX = () => Math.random() * maxSize;
  const getRandomY = () => Math.random() * maxSize;
  const randomRadius = () => Math.random() * 0.6 + 0.5;
  const _size = Math.floor(maxSize / 2);
  const htmlDummy = new Array(_size)
    .fill()
    .map((_, i) => {
      return `<circle class='star'
            cx=${getRandomX()}
            cy=${getRandomY()}
            r=${randomRadius()}
            className="star" />`;
    })
    .join("");

  sky.innerHTML = htmlDummy;
  sky2.innerHTML = htmlDummy;
};
// star script [e]

// fade effect [s]
// function introFade() {
//   $(".backSky").fadeIn(1000);
//   setTimeout(titFade, 1000);
// }

// function titFade() {
//   $(".backSky > .tit-box").fadeIn(1500).delay(2000);
//   $(".backSky > .tit-box").fadeOut(1000);
//   setTimeout(txtFade, 4500);
// }

// function txtFade() {
//   $(".backSky > .auto-box").fadeIn(1000);
//   setTimeout(mainMove, 3000);
// }

// function mainMove() {
  // git 전용
  // location.href ="../PYS_Portfolio/html/main.html";
  // local 전용
  // location.href ="/html/main.html" ;
// }
// fade effect [e]

window.onresize = () => {
  makeStars();
};
window.onload = () => {
  makeStars();
};
