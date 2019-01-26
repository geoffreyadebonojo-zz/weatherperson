var boxes = $(".daily")
var data  = JSON.parse(localStorage.getItem("storedForecast"));

console.log(boxes);
console.log(data.daily_forecasts);


for (var i= 0; i<boxes.length; i++){
  var high = data.daily_forecasts[i].high;
  var low = data.daily_forecasts[i].low;
  var icon = data.daily_forecasts[i].icon;
  var date = new Date(data.daily_forecasts[i].id*1000).toDateString();
  console.log(date);
  var precip = data.daily_forecasts[i].precipitation;
  //TODO Refactor into jQuery

  forecast = data.hourly_forecasts[i + (start-8)].temp;
  boxes[i].innerHTML += "<p>" + date + "</p>";
  boxes[i].innerHTML += "<p>" + weatherIcon(icon) + icon + "</p>";
  boxes[i].innerHTML += "<p>Precipitation: " + precip*100 + "%</p>";
  boxes[i].innerHTML += "<p>High: " + Math.round(high) + "&deg</p>";
  boxes[i].innerHTML += "<p>Low: " + Math.round(low) + "&deg</p>";
}
