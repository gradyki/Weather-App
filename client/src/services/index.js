const key = process.env.REACT_APP_WEATHER_API_KEY

export const currentURL = `http://api.weatherstack.com/current?access_key=${key}&query=`
export const forecastURL = `http://api.weatherstack.com/forecast?access_key=${key}&query=`




