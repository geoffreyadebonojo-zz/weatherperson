var nameInput = document.getElementById('name');
document.querySelector('form.pure-form').addEventListener('submit', function (e) {
  console.log(nameInput.value);
  addFavoritesUrl = "https://dry-hollows-79406.herokuapp.com/api/v1/favorites"
  addFavoritesData = {
    api_key: localStorage.getItem("api_key"),
    location: nameInput.value
  }

  $.post(addFavoritesUrl, addFavoritesData, function(data, status){
      console.log(data);
  });

  //prevent the normal submission of the form
  e.preventDefault();

});
