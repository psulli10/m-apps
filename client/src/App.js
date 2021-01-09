import './App.css';
import { useState, useEffect } from 'react';
import { getCountries } from './services/CountriesService';
import CountrySelect from './components/CountrySelect';
 
function App() {

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({})

  useEffect(() => {
    console.log('use effect on render...')
    getCountries().then(countries => setCountries(countries))
  }, [])

  const setSelectedCountryById = (countryId) => {
    const getSelectedCountryById = countries.find(country => country.id = countryId)
    setSelectedCountry(getSelectedCountryById)
  }

  return (
    <>
    <h1>M-Apps - getting ready to fetch</h1>
    <CountrySelect countries={countries} selectCountryById={setSelectedCountryById} />
    </>
  );
}

export default App;
