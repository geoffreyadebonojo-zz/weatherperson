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
