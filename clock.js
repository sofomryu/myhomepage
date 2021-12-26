const div=document.querySelector("#clock");

function clock() {
const date = new Date();
const d=date.getDate();
const h=String(date.getHours()).padStart(2,"0");
const m=String(date.getMinutes()).padStart(2,"0");
const s=String(date.getSeconds()).padStart(2,"0");
const time = `${h}:${m}:${s}`;
div.innerHTML = time;
}
clock();
setInterval(clock,1000);
