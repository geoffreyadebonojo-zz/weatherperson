var boxes = $(".hourly")
var data  = JSON.parse(localStorage.getItem("storedForecast"));

var start = new Date().getHours();
var forecasts = []
for (var i= 0; i<boxes.length; i++){
  var hours = new Date(data.hourly_forecasts[i + (12)].id*1000).getHours();
  console.log(hours < 12);
  if (start < 12){
    hours = hours + " AM";
  } else {
    hours = hours + " PM";
  }

  //TODO Refactor into jQuery

  forecast = data.hourly_forecasts[i + (start-8)].temp;
  boxes[i].innerHTML += "<p>" + hours + "</p>";
  boxes[i].innerHTML += "<p>" + Math.round(forecast) + "&deg</p>";
}
