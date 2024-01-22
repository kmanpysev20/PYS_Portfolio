
let vh = window.innerHeight * 0.01
document.documentElement.style.setProperty('--vh', `${vh}px`)

function scrollTop () {
  let body = document.querySelector('body');
  let topBtn = document.createElement("span");
  topBtn.className = "topbtn";
  topBtn.addEventListener("click", function(){
    window.scrollTo(0, 0);
  })
  body.appendChild(topBtn);
}

scrollTop();

function reveal() {
	let reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el) => {
    el.classList.add("loading");
  });

	for (var i = 0; i < reveals.length; i++) {
		let windowHeight = window.innerHeight;
		let elementTop = reveals[i].getBoundingClientRect().top;
		let elementVisible = 50;

		if (elementTop <= windowHeight - elementVisible) {
			reveals[i].classList.add("loaded");
		} else {
			reveals[i].classList.remove("loaded");
		}
	}
}

window.addEventListener('scroll', function () {
	reveal();
});
