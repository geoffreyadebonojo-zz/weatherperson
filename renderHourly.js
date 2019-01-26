var boxes = $(".hourly")
var data  = JSON.parse(localStorage.getItem("storedForecast"));

var start = new Date().getHours();
var forecasts = []
for (var i= 0; i<boxes.length; i++){
  var hours = new Date(data.hourly_forecasts[i + (start-8)].id*1000).getHours();
  console.log(hours);
  if (hours > 12){
    var hours = hours - 12 + " PM"
  } else {
    var hours = hours + "AM"
  }

  //TODO Refactor into jQuery

  forecast = data.hourly_forecasts[i + (start-8)].temp;
  boxes[i].innerHTML += "<p>" + hours + "</p>";
  boxes[i].innerHTML += "<p>" + Math.round(forecast) + "&deg</p>";
}
