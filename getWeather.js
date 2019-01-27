function getWeather(){
  //if (localStorage.getItem("storedForecast") == null)
  fetch('https://dry-hollows-79406.herokuapp.com/api/v1/forecast')
  .then(response => response.json())
  .then(data => {
    localStorage.setItem("storedForecast", JSON.stringify(data.data));
    forecast = JSON.parse(localStorage.getItem("storedForecast"));
    console.log(data);
  })
  .catch(error => console.error(error))
}
