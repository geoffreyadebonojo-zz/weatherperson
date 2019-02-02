var data  = JSON.parse(localStorage.getItem("storedForecast"));

// var start = new Date().getHours();
var avg = 0;
for (var i= 0; i<23; i++){
  avg += data.hourly_forecasts[i].temp;
}
console.log(avg/8 * 10);

var forecasts = []
for (var i= 0; i<24; i++){
  var hours = new Date(data.hourly_forecasts[i].id*1000).getHours();
  if (hours == 0){
    hours = "12 AM";
  } else if (hours < 13){
    hours = hours + " AM";
  } else {
    hours = (hours - 12) + " PM";
  }

  forecast = data.hourly_forecasts[i+1].temp;
  var box = $("#hourly");
  var adjuster = 2;

  box.append(`
    <div
    class="hourly"
    style="background:rgb(${ Math.round(forecast)*3 - 50}, ${ Math.round(forecast)*3 - 50}, ${ Math.round(forecast)*20 - 100});">
      <p>${hours}</p>
      <p style="position: relative; bottom: ${Math.round(forecast)*adjuster - (avg/23 * adjuster) - 50}%;"">${Math.round(forecast)}&deg</p>
    </div>
  `);
}
