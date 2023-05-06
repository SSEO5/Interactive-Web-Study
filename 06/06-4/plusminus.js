const btnPlus = document.querySelector(".btnPlus");
const btnMinus = document.querySelector(".btnMinus");
let num = 0;

btnPlus.addEventListener("click", (e) => {
	e.preventDefault();
	num++;
	console.log(num);
});

btnMinus.addEventListener("click", (e) => {
	e.preventDefault();
	num--;
	console.log(num);
});
