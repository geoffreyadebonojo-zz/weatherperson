function renderDetails(){
  var data        = JSON.parse(localStorage.getItem("storedForecast"));
  var today       = data.today_summary;
  var tonight     = data.tonight_summary;
  var forecast    = data.daily_forecasts[0].icon;
  var summary     = data.summary;
  var feelsLike   = Math.round(data.feels_like);
  var humidity    = data.humidity;
  var visibility  = data.visibility;
  var uvIndex     = data.uv_index

  var leftDetails = $("#left-details");
  leftDetails.html("");
  leftDetails.append(`
    <h1 class="centered">&nbsp&nbsp${weatherIcon(forecast)}</h1>
    <p class="secondary centered">${summary}</p>
    <br>
  `);

  var bottomDetails = $("#bottom-details");
  bottomDetails.html("");
  bottomDetails.append(`
    <p class="primary">${today}</p>
    <p class="primary">${tonight}</p>
  `);

  var rightDetails = $("#right-details");
  rightDetails.html("");
  rightDetails.append(`
    <p class="secondary">feels like: ${feelsLike}&deg</p>
    <p class="secondary">humidity: ${humidity}</p>
    <p class="secondary">visibility: ${visibility}</p>
    <p class="secondary">UV Index: ${uvIndex}</p>
  `);

}
renderDetails();
