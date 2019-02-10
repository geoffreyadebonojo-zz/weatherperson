var nameInput = document.getElementById('city-name');
document.querySelector('form.pure-form').addEventListener('submit', function (e) {

  if (nameInput.value == ""){
    nameInput.value = "Denver, CO"
  }
  url = "https://dry-hollows-79406.herokuapp.com/api/v1/forecast?location=" + nameInput.value
  $.get(url, function(data, status){
    localStorage.setItem("storedForecast", JSON.stringify(data.data));
    forecast = JSON.parse(localStorage.getItem("storedForecast"));
    renderMain();
    renderDetails();
    renderHourly();
    renderDaily();

  });
  // prevent the normal submission of the form
  e.preventDefault();

});
