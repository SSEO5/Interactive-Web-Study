const list = document.querySelector(".list");
const items = list.children;

console.log(items);
console.log(items[0]);
console.log(items[1]);
console.log(items[2]);
console.log(items[3]);

const item2 = document.querySelector(".item2");
console.log(item2.parentElement);

// const li = document.querySelector("li");
// console.log(li.closest("main"));

const item3 = document.querySelector(".item3");
console.log(item3.previousElementSibling);
console.log(item3.nextElementSibling);
