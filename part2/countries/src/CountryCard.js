import Weather from "./Weather"

const CountryCard = ({country}) => {

  const [lat, lng] = country.capitalInfo.latlng

  return (
    <div style={{padding: '30px', border: '1px solid black', marginBottom: '20px' }}>
      <h2>{country.name.common}</h2>
      <p><strong>Capital:</strong> {country.capital}</p>
      <p><strong>Area:</strong> {country.area} km&#178;</p>
      <p><strong>Languages:</strong></p>
      <ul>
        {Object.values(country.languages).map(lang => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      <img src={country.flags.png} style={{width: '200px', height: 'auto'}} alt="" />
      <Weather lat={lat} lng={lng} city={country.capital} />
    </div>
  )
}

export default CountryCard