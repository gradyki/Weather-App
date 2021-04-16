export const dateFormat = (date) => {

  let converted = null
  let year = date.substr(0, 4) *1
  let month = date.substr(5, 2) *1
  let day = date.substr(8, 2) *1

  

  if (day ===1 && month === 1) {
    year -= 1
    month = 12
    day = 31
  } else if (
    day === 1 && month === 5 || month === 7 || month === 10 || month === 12
  ) {
    day = 30
    month -= 1
  } else if (day === 1) {
    day = 31
    month -=1
  } else if (day >1){
    day -= 1
  }

  if (day < 10) {
    day = `0${day}`
  
  }

  if (month < 10) {
    month =`0${month}`
  }

  converted = `${year}-${month}-${day}`
  return converted

}


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


