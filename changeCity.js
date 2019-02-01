var nameInput = document.getElementById('name');
console.log(nameInput);
document.querySelector('form.pure-form').addEventListener('submit', function (e) {
  console.log(nameInput.value);
  if (nameInput.value == ""){
    nameInput.value = "Denver, CO"
  }
  url = "https://dry-hollows-79406.herokuapp.com/api/v1/forecast?location=" + nameInput.value
  console.log(url);
  $.get(url, function(data, status){
    localStorage.setItem("storedForecast", JSON.stringify(data.data));
    forecast = JSON.parse(localStorage.getItem("storedForecast"));
    console.log(data);
  });
  //prevent the normal submission of the form
  e.preventDefault();

});
