function renderMain(){
  var data = JSON.parse(localStorage.getItem("storedForecast"));
  console.log(data);
  var temp = data.temperature;
  var forecast = data.daily_forecasts[0].icon;
  var high = data.high;
  var low = data.low;
  var container = $( "#left-main" );
  container.append(
    `<p class="summary secondary"> ${forecast} </p>
    <h2>
      ${weatherIcon(forecast)}&nbsp
      ${Math.round(temp)}&deg
    </h2>
    <p class="high secondary">
      High: ${Math.round(high)}
    </p>
    <p class="high secondary">
      Low:  ${Math.round(low)}
    </p>`
  );

  // container.append(
  //   "<h1>" +
  //   weatherIcon(forecast) + " " +
  //   Math.round(temp) + "&deg" +
  //   "</h1>"
  // );
  //
  // if (temp < 32) {
  //   container.css({
  //     "color": "rgb(0, 0, 200)",
  //   });
  // } else {
  //   container.css({
  //     "color": "rgb(0, 0, 0)",
  //   });
  // }
}
renderMain();
