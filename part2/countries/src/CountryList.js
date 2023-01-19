import CountryCard from "./CountryCard";
import CountryLine from "./CountryLine";

const CountryList = ({countries}) => {


  if (countries.length === 1) {
    return <CountryCard country={countries[0]} />
  }
  return (
    <div>
      {countries.map(country => (
        <CountryLine key={country.name.common} country={country} />
      ))}
    </div>
  )
}

export default CountryList