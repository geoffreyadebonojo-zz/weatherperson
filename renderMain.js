function renderMain(){
  var data = JSON.parse(localStorage.getItem("storedForecast"));
  console.log(data);
  var temp = data.temperature;
  var forecast = data.daily_forecasts[0].icon;
  var high = data.high;
  var low = data.low;

  var leftMain = $( "#left-main" );
  leftMain.append(`
    <p class="summary secondary"> ${weatherIcon(forecast)}&nbsp ${forecast} </p>
    <h1 class="temp-display">

      ${Math.round(temp)}&deg
    </h1>
    <p class="high secondary">
      High: ${Math.round(high)}
    </p>
    <p class="high secondary">
      Low:  ${Math.round(low)}
    </p>
  `);
  if (temp < 32) {
    $(".temp-display").css({
      "color": "rgb(0, 0, 200)",
    });
  } else {
    $(".temp-display").css({
      "color": "rgb(0, 0, 0)",
    });
  }

  var city = data.city;
  var state = data.state;

  var rightMain = $("#right-main");
  rightMain.append(`
    <h3>
      ${city}, ${state}
    </h3>
    <h5>
      United States
    </h5>
    <p class="secondary">
      Time, Date
    </p>
  `);

}
renderMain();
