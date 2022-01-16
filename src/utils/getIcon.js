export function getIconName(code) {
  switch (code) {
    case "01d":
      return "sun"
    case "01n":
      return "moon"
    case "02d":
    case "02n":
    case "03d": 
    case "03n":
    case "04d": 
    case "04n":
      return "cloud"
    case "09d":
    case "09n":
    case "10d":
    case "10n":
      return "cloud-rain"
    case "11d":
    case "11n":
      return "cloud-lightning"
    case "13d":
    case "13n":
      return "cloud-snow"
    case "50d":
    case "50n":
      return "align-center"
    default :
      return "sun"
  }
}

