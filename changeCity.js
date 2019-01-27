var cityInput = document.getElementById('current-city');

document.querySelector('form.pure-form').addEventListener('submit', function (e) {
  console.log(cityInput.value);

  //prevent the normal submission of the form
  e.preventDefault();

});
