var data = JSON.parse(localStorage.getItem("forecastData")).data;

var temperature = document.getElementById("temperature");
var high = document.getElementById("high");
var low = document.getElementById("low");
var sunrise = document.getElementById("sunrise");
var sunset = document.getElementById("sunset");

temperature.innerHTML = "temp: " + data.temperature;
high.innerHTML = "high: " + data.high;
low.innerHTML = "low: " + data.low;
sunrise.innerHTML = "sunrise: " + data.daily_forecasts[0].sunrise;
sunset.innerHTML = "sunset: " + data.daily_forecasts[0].sunset;
