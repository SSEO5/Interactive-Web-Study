const link = document.querySelector("a");
const link_href = link.getAttribute("href");
console.log(link_href);

const new_href = "https://www.nate.com";
link.setAttribute("href", new_href);
