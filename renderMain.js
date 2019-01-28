function renderMain(){
  var data     = JSON.parse(localStorage.getItem("storedForecast"));
  var temp     = data.temperature;
  var forecast = data.daily_forecasts[0].icon;
  var summary  = data.summary;
  var high     = data.high;
  var low      = data.low;

  var leftMain = $( "#left-main" );
  leftMain.append(`
    <p class="summary"> ${weatherIcon(forecast)}&nbsp ${summary} </p>
    <h1 class="temp-display">
      ${Math.round(temp)}&deg
    </h1>
    <p class="high secondary">
      High: ${Math.round(high)}
    </p>
    <p class="low secondary">
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

  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var m = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var months = m[date.getMonth()];
  var day = date.getDate();

  console.log(hours, minutes, months, day);
  var rightMain = $("#right-main");
  rightMain.append(`
    <h3>
      ${city}, ${state}
    </h3>
    <h5>
      United States
    </h5>
    <p class="secondary">
      ${hours}:${minutes}, ${months}/${day}
    </p>
  `);

center = {x: 95, y: 60};
size = {outer: 60, inner: 50};

var c = document.getElementById("temp-gauge");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(center.x, center.y);
ctx.arc(center.x, center.y, size.outer, 0, (2 * Math.PI)*(temp/360 * 3.6));
ctx.fillStyle = "rgb(0,0,255)";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(center.x, center.y, size.inner, 0, 2 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();

}
renderMain();
