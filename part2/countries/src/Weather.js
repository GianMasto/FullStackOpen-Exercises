import { useEffect, useState } from "react"
import axios from "axios"

const Weather = ({lat, lng, city}) => {

  const [weather, setWeather] = useState({})

  useEffect(() => {
    const fetchWeather = async () => {
      const {data} = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`)
      setWeather(data)
    }

    fetchWeather()
      .catch(console.error)
  }, [lat, lng])

  return (
    <div>
      <h3>Temperature in {city}</h3>
      {weather.current_weather
        ? <p>{weather.current_weather.temperature}&deg;C</p>
        : <p>Loading weather...</p>
      }
  </div>
  )
}

export default Weather