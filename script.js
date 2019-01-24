function getWeather(){


  //if (localStorage.getItem("storedForecast") == null)
  fetch('https://dry-hollows-79406.herokuapp.com/api/v1/forecast')
  .then(response => response.json())
  .then(data => {
    localStorage.setItem("storedForecast", JSON.stringify(data.data));
    forecast = JSON.parse(localStorage.getItem("storedForecast"));
    console.log("fetched from api");
    console.log(forecast);
  })
  .catch(error => console.error(error))
  //else {
  //  forecast = JSON.parse(localStorage.getItem("storedForecast"));
  //  console.log("loaded from memory")
  //  console.log(forecast);
  //}
}
forecast = JSON.parse(localStorage.getItem("storedForecast"));
console.log("from memory");
console.log(forecast.id);
console.log(forecast);

function weatherIcon(forecast){
  switch(forecast) {
  case "clear-day":
    return '<i class=\"fas fa-sun\" style=\"font-size:32px\"></i>';
  case "clear-night":
    return '<i class="fas fa-moon"></i>';
  case "partly-cloudy-day":
    return '<i class="fas fa-cloud-sun"></i>';
  case "partly-cloudy-night":
    return '<i class="fas fa-cloud-moon"></i>';
  case "cloudy":
    return '<i class="fas fa-cloud"></i>';
  default:
  }
}

$(document).ready( function(){
  var favorites = document.getElementById('favorites');
  favorites.innerHTML = "";
  for (var i = 0; i < 10; i++){
    favorites.innerHTML += '<div class="box favorite"> Favorited #' + i + '</div>';
  }

  // document.getElementById('icon').innerHTML = '<img class="gif-icon" src="' + forecast.daily_forecasts[0].gif + '"></img>';
  document.getElementById('icon').innerHTML = weatherIcon(forecast.daily_forecasts[0].icon);
  document.getElementById('conditions').innerHTML = forecast.summary;
  document.getElementById('temp').innerHTML = Math.round(forecast.temperature) + "&deg";

  sunrise =  new Date(forecast.daily_forecasts[0].sunrise).toLocaleTimeString();
  console.log(forecast.id);
  document.getElementById('sunrise').innerHTML += sunrise;

  sunset =  new Date(forecast.daily_forecasts[0].sunset).toLocaleTimeString();
  document.getElementById('sunset').innerHTML += sunset;

  document.getElementById('precip').innerHTML += forecast.daily_forecasts[0].precipitation*100 + "%";
  document.getElementById('feeling').innerHTML += forecast.feels_like;

  // document.getElementById('next-hour').innerHTML += forecast.hourly_forecast[0];

  for (var i=0; i < 49; i++){
    document.getElementById('forecasts').innerHTML +=  weatherIcon(forecast.hourly_forecasts[i].icon)  + "     " + Math.round(forecast.hourly_forecasts[i].temp) + "<br>";
  }
});
