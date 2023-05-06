// 버튼을 클릭하면 텍스트 버튼과 동일한 순서의 박스가 y축으로 회전하면서 활성화됨

const btns = document.querySelectorAll(".btns li");
const boxs = document.querySelectorAll("section article");

for (let i = 0; btns.length; i++) {
	btns[i].addEventListener("click", (e) => {
		activation(i, btns);
		activation(i, boxs);
	});
}

function activation(index, list) {
	for (let el of list) {
		el.classList.remove("on");
	}
	list[index].classList.add("on");
}
