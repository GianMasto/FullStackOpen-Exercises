import { useEffect, useState } from "react";
import axios from "axios";

import CountryList from "./CountryList";

function App() {

  const [allCountries, setAllCountries] = useState([])
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchCountries = async () => {
      const {data} = await axios.get(`https://restcountries.com/v3.1/all`)
      setAllCountries(data)
    }

    fetchCountries()
      .catch(console.error)
  }, [])

  useEffect(() => {
    if (search.trim() === '') return
    setCountries(allCountries.filter(country => country.name.common.toLowerCase().includes(search)))
  }, [search, allCountries])

  if (allCountries.length <= 0){
    return <p>Loading...</p>
  }
  
  return (
    <>
      <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search country" autoFocus autoComplete="off" />
      {countries.length > 10 
        ? <p>Too many matches, be more precise</p> 
        : <CountryList countries={countries} />
      }
    </>
  );
}

export default App;
