
const API_KEY = '0648eafdb8b8d58881cc1d0aa104c990';


const onGeoOk = (position) => {
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

  fetch(url)
  .then((response) => response.json())
  .then((data => {
    const $city = document.querySelector('#city');
    const city = data.name;
    $city.innerHTML = city;

    const $weather = document.querySelector('#weather');
    const weather = data.weather[0].main;
    $weather.innerHTML = weather;

    const $temp = document.querySelector('#temp');
    const temp = data.main.temp;
    $temp.innerHTML = `${temp}ºC`;
  
    const icon = data.weather[0].icon;
    const $icon = document.querySelector('#icon');
    $icon.src = `http://openweathermap.org/img/w/${icon}.png`;
    $icon.alt = weather;
  }))
  .catch((error) => {
    document.querySelector('#city').classList.add('hidden');
    document.querySelector('#weather').classList.add('hidden');
    document.querySelector('#temp').classList.add('hidden');
    document.querySelector('#icon').classList.add('hidden');

    const $error = document.querySelector('#error');
    $error.innerHTML = error;
  });

}

const onGeoError = () => {
  $text.innerHTML = 'error!';
}

console.log(navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError));