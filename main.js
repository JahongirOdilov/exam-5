// DOM VARIABLES
const columnElms = document.querySelectorAll(".columns");
const todoElms = document.querySelectorAll(".todo");
const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const text1 = document.querySelector(".text-1");
const text2 = document.querySelector(".text-2");
const text3 = document.querySelector(".text-3");
const box1 = document.getElementById("box-1");
const box2 = document.getElementById("box-2");
const box3 = document.getElementById("box-3");
const column1 = document.querySelector(".column1");
const column2 = document.querySelector(".column2");
const column3 = document.querySelector(".column3");

// LOGICAL VARIABLES

//HANDLE FUNCTION

todoElms.forEach((item) => {
	item.addEventListener("dragstart", () => {
		item.classList.add("is-dragging");
	});
	item.addEventListener("dragend", () => {
		item.classList.remove("is-dragging");
	});
});
columnElms.forEach((draggedElm) => {
	draggedElm.addEventListener("dragover", (e) => {
		e.preventDefault();
		const curTask = document.querySelector(".is-dragging");
		draggedElm.appendChild(curTask);
	});
});

//UI FUNCTION
let count = 4;
btn1.addEventListener("click", (e) => {
	let create = document.createElement("div");
	create.className = "todo";
	create.draggable = true;
	create.innerText = `Todo #${count++}`;
	column1.appendChild(create);
	console.log(create);
	create.addEventListener("dragstart", () => {
		create.classList.add("is-dragging");
	});
	create.addEventListener("dragend", () => {
		create.classList.remove("is-dragging");
	});
});
let count2 = 4;
btn2.addEventListener("click", (e) => {
	let create = document.createElement("div");
	create.className = "todo";
	create.draggable = true;
	create.innerText = `IP #${count2++}`;
	column2.appendChild(create);
	console.log(create);
	create.addEventListener("dragstart", () => {
		create.classList.add("is-dragging");
	});
	create.addEventListener("dragend", () => {
		create.classList.remove("is-dragging");
	});
});
let count3 = 4;
btn3.addEventListener("click", (e) => {
	let create = document.createElement("div");
	create.className = "todo";
	create.draggable = true;
	create.innerText = `Done #${count3++}`;
	column3.appendChild(create);
	console.log(create);
	create.addEventListener("dragstart", () => {
		create.classList.add("is-dragging");
	});
	create.addEventListener("dragend", () => {
		create.classList.remove("is-dragging");
	});
});
