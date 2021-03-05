export const timeFormat = (time) => {

  let hours = time.substr(11, 2) * 1
  let minutes = time.substr(14, 2) * 1
  

  if (hours === 12  && minutes === 0) {
    return "12:00PM"
  } else if (hours === 0 && minutes === 0) {
    return "12:00AM"
  } else if (hours === 0 && minutes !== 0  && minutes >=10) {
    return `12:${minutes}AM`
  } else if (hours === 0 && minutes !== 0 && minutes < 10) {
    return `12:0${minutes}AM`
  } else if (hours < 12 && minutes < 10) {
    return `${hours}:0${minutes}AM`
  }
  else if (hours === 12 && minutes !== 0 && minutes >= 10) {
    return `${hours}:${minutes}PM`
  } else if (hours === 12 && minutes !== 0 && minutes < 10) {
    return `12:0${minutes}PM`
  }else if (hours > 12 && minutes >= 10) {
    let pmHours = hours - 12
    return `${pmHours}:${minutes}PM`
  } else if (hours > 12 && minutes < 10) {
    let pmHours = hours - 12
    return `${pmHours}:0${minutes}PM`
  }else {
    return (`${hours}:${minutes}AM`)
  }
}


