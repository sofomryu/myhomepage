const loginForm = document.querySelector("#loginid");

const h1 = document.querySelector("h1");

function react(event) {
	event.preventDefault();
	value=(loginForm.elements[0].value);
	h1.innerText = `Hello! ${value}`;
	loginForm.classList.add("hidden");
	localStorage.setItem("username",value);
}

function background() {
	document.body.background = `bg/${Math.floor(Math.random()*7)}.jpg`;
}
background();
loginForm.addEventListener("submit",react);


const savedusername = localStorage.getItem("username");
if (savedusername ===null) {

	loginForm.addEventListener("submit",react);
} else {
h1.innerText=`Hello! ${savedusername}`;
	loginForm.classList.add("hidden");
}
