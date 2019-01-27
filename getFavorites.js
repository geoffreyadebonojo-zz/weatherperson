favoritesUrl = "https://dry-hollows-79406.herokuapp.com/api/v1/favorites"
favoritesData = {
  api_key: localStorage.getItem("api_key")
}

function getFavorites(){
  $.get(
    favoritesUrl,
    favoritesData,
    function(data, status){
      localStorage.setItem("favorites", JSON.stringify(data.data));
    }
  )
}
