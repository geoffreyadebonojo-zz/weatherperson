function weatherIcon(forecast){
  switch(forecast) {
    //find a better icon for fog and overcast
  case "fog":
    return '<i class="fas fa-fog"></i>';
  case "overcast":
    return '<i class="fa fa-cloud" aria-hidden="true"></i>'
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
  case "rain":
    return '<i class="fa fa-tint"></i>';
  default:
  }
}
