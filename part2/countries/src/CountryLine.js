import { useState } from "react"

import CountryCard from "./CountryCard";

const CountryLine = ({country}) => {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <div>
      <span>{country.name.common}</span>
      <button onClick={() => (setShowInfo(!showInfo))}>{showInfo ? 'hide' : 'show'}</button>
      {showInfo && <CountryCard country={country} />}
  </div>
  )
}

export default CountryLine