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
  leftDetails.html(`
    <!--h1 class="centered" id="details-icon">&nbsp&nbsp${weatherIcon(forecast)}</h1-->
    <!--p class="secondary centered" id="details-summary">${summary}</p-->
    <br>
  `);

  var bottomDetails = $("#bottom-details");
  bottomDetails.html(`
    <p class="primary">Today:&nbsp&nbsp&nbsp ${today}</p>
    <p class="primary">Tonight: ${tonight}</p>
  `);

  var rightDetails = $("#right-details");
  rightDetails.html(`
    <p class="secondary">feels like: ${feelsLike}&deg</p>
    <p class="secondary">humidity: ${humidity}</p>
    <p class="secondary">visibility: ${visibility}</p>
    <p class="secondary">UV Index: ${uvIndex}</p>
  `);

}
renderDetails();
