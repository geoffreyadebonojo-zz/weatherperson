function renderDaily() {
  var boxes = $(".daily")
  console.log(boxes);
  var data  = JSON.parse(localStorage.getItem("storedForecast"));

  for (var i= 0; i<boxes.length; i++){
    var high = data.daily_forecasts[i].high;
    var low = data.daily_forecasts[i].low;
    var icon = data.daily_forecasts[i].icon;
    console.log(icon);
    var date = new Date(data.daily_forecasts[i].id*1000).toDateString();
    var precip = data.daily_forecasts[i].precipitation;
    var summary = data.summary
    //TODO Refactor into jQuery

    var d = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dayOfWeek = days[(d.getDay() + i) % 7 ];

    boxes[i].innerHTML = " ";
    boxes[i].innerHTML += `
    <div style="text-indent: 1em;">${dayOfWeek} </div>
    <div>${weatherIcon(icon)} ${summary}</div>
    <div><i class="fa fa-tint"></i> ${Math.round(precip*100)}%</div>
    <div class="temp-range"
         style="display:
         flex; position:relative;
         left:${low * 8};
         width:${(high - low) * 8};
         background: rgb(${ Math.round( (high+low)/2 )*3 - 50}, ${ Math.round( (high+low)/2 )*3 -40}, 255);">
      <p style="position: relative; right: 10px;">${Math.round(low)}</p>
      <p style="position: relative; left: ${(high - low) * 6}px;">${Math.round(high)}</p>
    </div>
    `
  }
}
renderDaily();
