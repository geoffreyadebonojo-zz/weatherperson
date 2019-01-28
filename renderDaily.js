var boxes = $(".daily")
var data  = JSON.parse(localStorage.getItem("storedForecast"));

for (var i= 0; i<boxes.length; i++){
  var high = data.daily_forecasts[i].high;
  var low = data.daily_forecasts[i].low;
  var icon = data.daily_forecasts[i].icon;
  var date = new Date(data.daily_forecasts[i].id*1000).toDateString();
  var precip = data.daily_forecasts[i].precipitation;
  //TODO Refactor into jQuery

  var d = new Date();
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var dayOfWeek = days[d.getDay() + i];


  boxes[i].innerHTML += "<p>&nbsp&nbsp&nbsp" + dayOfWeek + "</p>";
  boxes[i].innerHTML += "<p>" + weatherIcon(icon) + "</p>";
  boxes[i].innerHTML += "<p>Precipitation: " + Math.round(precip*100) + "%</p>";
  boxes[i].innerHTML += "<p>High: " + Math.round(high) + "&deg</p>";
  boxes[i].innerHTML += "<p>Low: " + Math.round(low) + "&deg</p>";
}
console.log(`${boxes.length} hourly forecasts displayed`);
