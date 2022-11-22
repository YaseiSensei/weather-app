import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'
import { useCity } from './CityContext'

const WeatherContext = createContext();
export const WeatherProvider = ({ children }) => {
  const { currentCity } = useCity()
  const [weather, setWeather] = useState({})
  const [loding, setLoding] = useState(false);
  const apiKey = "&key=b354651f753e416890d72e5500926a35"
  useEffect(() => {
    getWeather(currentCity, apiKey, setWeather)
  }, [currentCity])


  const values = {
    weather, setWeather, loding, setLoding

  }
  return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}

export const useWeather = () => useContext(WeatherContext)
async function getWeather(currentCity, apiKey, setWeather) {
  await axios(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${currentCity.lat}&lon=${currentCity.lon}&lang=en&days=7${apiKey}`)
    .then(x => setWeather(x.data))
    .catch(e => console.log(e))
    .finally();

}









