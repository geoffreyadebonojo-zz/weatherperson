var data  = JSON.parse(localStorage.getItem("storedForecast"));

var start = new Date().getHours();
console.log(start);
var forecasts = []
for (var i= 0; i<8; i++){
  var hours = new Date(data.hourly_forecasts[i+1].id*1000).getHours();
  if (hours == 0){
    hours = "12 AM";
  } else if (hours < 13){
    hours = hours + " AM";
  } else {
    hours = (hours - 12) + " PM";
  }

  forecast = data.hourly_forecasts[i+1].temp;
  var box = $("#hourly");

  box.append(`
    <div
    class="hourly"
    style="background:rgb(${32 - Math.round(forecast)*3}, 50, ${Math.round(forecast) * 5});">
      <p>${hours}</p>
      <p style="position: relative; bottom: ${Math.round(forecast)/2 - 40};"">${Math.round(forecast)}&deg</p>
    </div>
  `);
}
console.log(`8 hourly forecasts displayed`);
