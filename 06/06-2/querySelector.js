const frame = document.querySelector("#wrap .box1");
console.log(frame);

const items = document.querySelectorAll("#wrap article");

for (let item of items) {
	console.log(item);
}

for (let i = 0; i < items.length; i++) {
	console.log(items[i]);
}
