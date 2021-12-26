const API="98aaad5c184b618adc548e1fafe18c54";
const weatherDiv = document.querySelector("#weather");
function worked(position) {
const lat = position.coords.latitude;
	const long = position.coords.longitude;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API}&units=metric`;
fetch(url).then(response => response.json()).then((data) => {
	const name = data.name;
	const weather = data.weather[0].main;;
weatherDiv.innerHTML = `${name} ${weather}`;})	

}

function failed(){
	console.log("it failed")
}
navigator.geolocation.getCurrentPosition(worked,failed);
