favoritesUrl = "https://dry-hollows-79406.herokuapp.com/api/v1/favorites"
favoritesData = {
  api_key: localStorage.getItem("api_key")
}

function getFavorites(){
  $.get(
    "https://dry-hollows-79406.herokuapp.com/api/v1/favorites",
    {
      api_key: localStorage.getItem("api_key")
    },
    function(data, status){
      console.log(data);
    }
  )
}
