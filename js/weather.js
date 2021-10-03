const API_KEY = "29246455f718fea4573a9ad490e33ec9"


function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

  fetch(url).then(response => response.json()).then(data => {
    const $weather = document.querySelector("#weather span:first-child");
    const $city = document.querySelector("#weather span:last-child");
    $weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    $city.innerText = data.name;
  })
}

function onGeoError() {
  alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// 브라우저에서 위치좌표를 줌