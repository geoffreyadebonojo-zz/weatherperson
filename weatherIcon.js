function weatherIcon(forecast){
  switch(forecast) {
  case "snow":
    return '<i class="far fa-snowflake"></i>';
  case "clear-day":
    return '<i class="fas fa-sun"></i>';
  case "clear-night":
    return '<i class="fas fa-moon"></i>';
  case "partly-cloudy-day":
    return '<i class="fas fa-cloud-sun"></i>';
  case "partly-cloudy-night":
    return '<i class="fas fa-cloud-moon"></i>';
  case "cloudy":
    return '<i class="fas fa-cloud"></i>';
  default:
  }
}
