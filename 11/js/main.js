const items = document.querySelectorAll("article");
const aside = document.querySelector("aside");
const close = aside.querySelector("span");

for (let el of items) {
	el.addEventListener("mouseenter", (e) => {
		e.currentTarget.querySelector("video").play();
	});

	el.addEventListener("mouseleave", (e) => {
		e.currentTarget.querySelector("video").pause();
	});

	el.addEventListener("click", (e) => {
		let tit = e.currentTarget.querySelector("h2").innerText;
		let txt = e.currentTarget.querySelector("p").innerText;
		let vidSrc = e.currentTarget.querySelector("video").getAttribute("src");

		//aside 요소 안쪽의 콘텐츠에 위의 변수 내용을 적용
		aside.querySelector("h1").innerText = tit;
		aside.querySelector("p").innerText = txt;
		aside.querySelector("video").setAttribute("src", vidSrc);

		//aside 요소 안쪽의 동영상을 재생하고 aside요소에 on을 붙여 패널 활성화
		aside.querySelector("video").play();
		aside.classList.add("on");
	});

	//close 클릭 시
	close.addEventListener("click", () => {
		//aside 요소에 클래스 on을 제거해 비활성화하고 안쪽의 영상을 정지
		aside.classList.remove("on");
		aside.querySelector("video").pause();
	});
}
