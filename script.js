function fetchData(){
  fetch('https://dry-hollows-79406.herokuapp.com/api/v1/forecast')
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => console.error(error))
}
