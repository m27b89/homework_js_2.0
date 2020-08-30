let cityName = document.querySelector(".answer-name");
let cityTemp = document.querySelector(".answer-temp");
let cityPressure = document.querySelector(".answer-pressure");
let cityHumidity = document.querySelector(".answer-humidity");
let cityFeelsLike = document.querySelector(".answer-feels_like");
let cityCountry = document.querySelector(".answer-country");
let cityIcon = document.querySelector(".weather-icon");

fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=Kineshma&appid=772480148fe7119aec8d5abdff8999b4"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    cityName.textContent = data.name;
    cityTemp.innerHTML = Math.floor(data.main.temp) - 273 + "&deg;";
    cityPressure.textContent = data.main.pressure;
    cityHumidity.textContent = data.main.humidity;
    cityFeelsLike.innerHTML = Math.floor(data.main.feels_like) - 270 + "&deg;";
    cityCountry.textContent = data.sys.country;
    cityIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="icon">`;
    console.log(data);
  });

let infoOs = `   <h3>Browser CodeName: ${navigator.appCodeName} </h3>
  <h3>Browser Name: ${navigator.appName} </h3>
  <h3>Browser Version: ${navigator.appVersion} </h3>
  <h3>Platform: ${navigator.platform} </h3>
  <p>User-agent header: ${navigator.userAgent} </p>`;
let systsms = (document.querySelector(".systems").innerHTML = infoOs);
