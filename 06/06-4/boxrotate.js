const btnLeft = document.querySelector(".btnLeft");
const btnRight = document.querySelector(".btnRight");
const box = document.querySelector("#box");
const deg = 45;
let num = 0;

btnLeft.addEventListener("click", (e) => {
	e.preventDefault();
	num--;
	box.style.transform = `rotate(${num * deg}deg)`;
});

btnRight.addEventListener("click", (e) => {
	e.preventDefault();
	num++;
	box.style.transform = `rotate(${num * deg}deg)`;
});
