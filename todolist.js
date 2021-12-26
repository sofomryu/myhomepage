const todoDiv = document.querySelector("#todo");
const todoForm = document.querySelector("#todoform");
const todoInput = todoForm.querySelector("input");
const ul= document.querySelector("#ul");

let todos =[];
function savetodos() {
	localStorage.setItem("todos", JSON.stringify(todos));
}
function deletetodo() {
	const parent = event.target.parentElement;
	
	parent.remove();
	todos = todos.filter((item) => item.id !== parseInt(parent.id));
	savetodos()
}
function paint(todovalueobj) {
	const li = document.createElement("li");
	const span = document.createElement("span");
	const btn=document.createElement("button");
	li.id = todovalueobj.id;
	btn.innerText = "x";
	btn.addEventListener("click",deletetodo);
	li.appendChild(span);
	li.appendChild(btn);
	span.innerText = todovalueobj.text;
	ul.appendChild(li);
}
function write(event) {
	event.preventDefault();
	const todovalue=todoInput.value;
	todoInput.value = "";
	const todovalueobj ={
		text:todovalue,
	id: Date.now()};
	todos.push(todovalueobj);
	paint(todovalueobj);
	savetodos();
	
}
todoForm.addEventListener("submit",write);
const savedtodos = localStorage.getItem("todos");
if (savedtodos) {
	const parsedtodos = JSON.parse(savedtodos);
	todos = parsedtodos;
	parsedtodos.forEach(paint);
}
function arrayfilter(item) {
return item}
