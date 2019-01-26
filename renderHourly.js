var boxes = $(".hourly")
var data  = JSON.parse(localStorage.getItem("storedForecast"));

var start = new Date().getHours();
var forecasts = []
for (var i= 0; i<boxes.length; i++){
  forecast =(new Date(data.hourly_forecasts[i + (start-8)].id*1000));
  boxes[i].innerHTML = forecast;
}
console.log(start);
console.log(forecasts);
