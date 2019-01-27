var boxes = $(".hourly")
var data  = JSON.parse(localStorage.getItem("storedForecast"));

var start = new Date().getHours();
console.log(start);
var forecasts = []
for (var i= 0; i<boxes.length; i++){
  var hours = new Date(data.hourly_forecasts[i].id*1000).getHours();
  console.log(hours);
  if (hours < 13){
    hours = hours + " AM";
  } else {
    hours = (hours - 12) + " PM";
  }

  //TODO Refactor into jQuery

  forecast = data.hourly_forecasts[i].temp;
  boxes[i].innerHTML += "<p>" + hours + "</p>";
  boxes[i].innerHTML += "<p>" + Math.round(forecast) + "&deg</p>";
}
