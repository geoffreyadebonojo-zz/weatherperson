var data  = JSON.parse(localStorage.getItem("storedForecast"));

var start = new Date().getHours();
var forecasts = []
for (var i= 0; i<8; i++){
  var hours = new Date(data.hourly_forecasts[i].id*1000).getHours();
  if (hours < 13){
    hours = hours + " AM";
  } else {
    hours = (hours - 12) + " PM";
  }

  //TODO Refactor into jQuery

  forecast = data.hourly_forecasts[i].temp;
  var box = $("#hourly");

  box.append('<div class="hourly">' +
  "<p>" + hours + "</p>" +
  "<p>" + Math.round(forecast) + "&deg</p>" +
  "</div>");
}
console.log(`${boxes.length} hourly forecasts displayed`);
