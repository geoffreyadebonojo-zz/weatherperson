function getWeather(){
  //if (localStorage.getItem("storedForecast") == null)
  fetch('https://dry-hollows-79406.herokuapp.com/api/v1/forecast')
  .then(response => response.json())
  .then(data => {
    localStorage.setItem("storedForecast", JSON.stringify(data.data));
    forecast = JSON.parse(localStorage.getItem("storedForecast"));
    console.log("fetched from api");
    console.log(forecast);
    renderForecastData();
  })
  .catch(error => console.error(error))
}

sessionsUrl = "https://dry-hollows-79406.herokuapp.com/api/v1/sessions"
sessionsData = {
  email: "example@gmail.com",
  password: "123"
}

function apiKey(){
  $.post(
    sessionsUrl,
    sessionsData,
    function(data, status){
    localStorage.setItem("api_key", data.data.key)
  })
}

favoritesUrl = "https://dry-hollows-79406.herokuapp.com/api/v1/favorites"
favoritesData = {
  api_key: localStorage.getItem("api_key")
}

function getFavorites(){
  $.get(favoritesUrl, favoritesData, function(data, status){
    console.log(data);
  })
}

console.log($("#add-field").value);




function weatherIcon(forecast){
  switch(forecast) {
  case "snow":
    return '<i class="far fa-snowflake"></i>';
  case "clear-day":
    return '<i class="fas fa-sun"></i>';
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

function renderTemp(){
  var data = JSON.parse(localStorage.getItem("storedForecast"));
  var temp = data.temperature;
  var forecast = data.daily_forecasts[0].icon;
  $( ".temp-container" ).append(
    "<h1>" +
    weatherIcon(forecast) + " " +
    Math.round(temp) + "&deg" +
    "</h1>"
  );

  if (temp < 32) {
    $( ".temp-container" ).css({
      "color": "rgb(0, 0, 200)",
      "position": "relative",
      "left": "100px"
    });
  } else {
    $( ".temp-container" ).css({
      "color": "rgb(0, 0, 0)",
      "position": "relative",
      "left": "100px"
    });
  }
}

renderTemp();

var nameInput = document.getElementById('name');

document.querySelector('form.pure-form').addEventListener('submit', function (e) {
  console.log(nameInput.value);
  addFavoritesUrl = "https://dry-hollows-79406.herokuapp.com/api/v1/favorites"
  addFavoritesData = {
    api_key: localStorage.getItem("api_key"),
    location: nameInput.value
  }

  $.post(addFavoritesUrl, addFavoritesData, function(data, status){
      console.log(data);
  });
  
  //prevent the normal submission of the form
  e.preventDefault();

});
