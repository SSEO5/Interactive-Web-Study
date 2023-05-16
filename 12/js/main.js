const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const deg = 45; // 각각의 article 요소가 회전할 각도
const len = lists.length - 1;
const audio = frame.querySelectorAll("audio");
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");

let i = 0;
let num = 0;
let active = 0; // 활성화된 article의 index

function activation(index, lists) {
	for (let el of lists) {
		el.classList.remove("on");
	}
	lists[index].classList.add("on");
}

// article 내부
for (let el of lists) {
	let pic = el.querySelector(".pic");

	//각 article 요소를 45도씩 회전하고 아래로 배치
	el.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
	pic.style.backgroundImage = `url(img/member${i + 1}.jpg)`; //배경 이미지 추가
	i++;

	let play = el.querySelector(".play");
	let pause = el.querySelector(".pause");
	let load = el.querySelector(".load");

	// play 버튼 클릭 시,
	play.addEventListener("click", (e) => {
		let isActive = e.currentTarget
			.closest("article")
			.classList.contains("on");
		if (isActive) {
			// play 버튼부터 .pic 요소까지 탐색한 뒤 클래스 on 추가하여 활성화, 이미지 회전
			e.currentTarget
				.closest("article")
				.querySelector(".pic")
				.classList.add("on");
			// play 버튼부터 audio 요소까지 탐색한 뒤 음악 재생
			e.currentTarget.closest("article").querySelector("audio").play();
		}
	});

	// pause 버튼 클릭 시
	pause.addEventListener("click", (e) => {
		let isActive = e.currentTarget
			.closest("article")
			.classList.contains("on");
		if (isActive) {
			e.currentTarget
				.closest("article")
				.querySelector(".pic")
				.classList.remove("on");
			e.currentTarget.closest("article").querySelector("audio").pause();
		}
	});

	// load 버튼 클릭 시
	load.addEventListener("click", (e) => {
		let isActive = e.currentTarget
			.closest("article")
			.classList.contains("on");
		if (isActive) {
			e.currentTarget
				.closest("article")
				.querySelector(".pic")
				.classList.add("on");
			e.currentTarget.closest("article").querySelector("audio").load();
			e.currentTarget.closest("article").querySelector("audio").play();
		}
	});
}

// 모든 오디오 요소를 반복하면서 정지시키고 .pic 요소의 모션을 중지해서 초기화하는 함수
function initMusic() {
	for (let el of audio) {
		el.pause();
		el.load();
		el.closest("article").querySelector(".pic").classList.remove("on");
	}
}

// prev 버튼 클릭 시
prev.addEventListener("click", () => {
	initMusic();
	num++;
	frame.style.transform = `rotate(${deg * num}deg)`; // frame 회전
	active == 0 ? (active = len) : active--;
	activation(active, lists);
});

// next 버튼 클릭시
next.addEventListener("click", () => {
	initMusic();
	num--;
	frame.style.transform = `rotate(${deg * num}deg)`; // frame 회전
	active == len ? (active = 0) : active++;
	activation(active, lists);
});
