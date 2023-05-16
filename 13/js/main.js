const frame = "section";
const box = "article";
const speed = "0.5s";

const activeClass = "on";
const btn = document.querySelectorAll("main ul li");

let grid;

// 페이지 로드 이벤트
window.addEventListener("load", () => {
	init();
	filter(btn);
});

// 화면 초기화 함수
function init() {
	// isotope 플러그인 사용
	grid = new Isotope(frame, {
		// 배치할 요소를 감싸고 있는 부모 요소명
		itemSelector: box, // 배치할 요소명
		cloumnWidth: box, // 너비값을 구할 요소명
		transitionDuration: speed, // 화면 재배치 시 요소가 움직이는 속도
	});
}

// 필터 함수
function filter(arr) {
	for (let el of arr) {
		// 각 버튼에 클릭 이벤트 연결
		el.addEventListener("click", (e) => {
			e.preventDefault();

			// 변수 sort에 클릭한 대상의 자식인 a 요소의  href 속성값을 저장
			const sort = e.currentTarget
				.querySelector("a")
				.getAttribute("href");

			grid.arrange({
				filter: sort, // 옵션값으로 sort 변수값 지정
			});

			// 각 버튼의 클래스명 "on"을 제거해 비활성화
			for (let el of arr) {
				el.classList.remove(activeClass);
			}

			// 클릭한 대상만 선택해서 클래스명 "on"을 추가해 활성화
			e.currentTarget.classList.add(activeClass);
		});
	}
}
