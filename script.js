console.log("script.js loaded");
function fetchData(){
  fetch('https://dry-hollows-79406.herokuapp.com/api/v1/forecast')
    .then(response => response.json())
    .then(data => {
      localStorage.setItem("forecastData", JSON.stringify(data));
    })
    .catch(error => console.error(error))
}
var loadButton = document.getElementById("load-button");
loadButton.addEventListener("click", fetchData());
