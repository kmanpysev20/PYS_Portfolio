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
function introFade() {
    $('.backSky').fadeIn(1000);
    setTimeout(titFade, 1000);
}

function titFade() {
  $(".backSky > .tit-box").fadeIn(1500).delay(2000);
  $(".backSky > .tit-box").fadeOut(1000);
  setTimeout(txtFade, 4500);
}

function txtFade() {
  $(".backSky > .auto-box").fadeIn(1000);
  setTimeout(mainMove, 3000);
}

function mainMove() {
    // git 전용
    location.href ="../PYS_Portfolio/html/main.html";
    // local 전용
    // location.href ="/html/main.html" ;
}
// fade effect [e]

window.onresize = () => {
  makeStars();
};
window.onload = () => {
  makeStars();
  introFade();
};

