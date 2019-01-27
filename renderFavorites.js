function renderFavorites(){
  var favorites = JSON.parse(localStorage.getItem("favorites"));
  console.log(favorites);
  var rightDetails = $("right-details");
  rightDetails.html("");
  var bottomDetails = $("bottom-details");
  bottomDetails.html("");
  var leftDetails = $("#left-details");
  leftDetails.html("");
  for (var i = 0; i<favorites.length; i++){
    leftDetails.append(`
      <p class="centered">${favorites[i].location}</p>
      <p>Temperature: ${Math.round(favorites[i].forecast.temperature)}&deg</p>
      <p>Humidity: ${Math.round(favorites[i].forecast.humidity * 100)}%</p>
    `);
  }

  leftDetails.css({
    "display": "grid",
    "grid-template-columns": "500px 100px 100px",
    "width": "100%"
  });

}
