sessionsUrl = "https://dry-hollows-79406.herokuapp.com/api/v1/sessions"
sessionsData = {
  email: "example@gmail.com",
  password: "123"
}
function apiKey(){
  $.post(
    sessionsUrl,
    sessionsData,
    function(data, status){
      localStorage.setItem("api_key", data.data.key)
  })
  console.log("refreshing key");
}
