import './App.css';
import { useState, useEffect } from 'react';
import { getCountries } from './services/CountriesService';
import CountrySelect from './components/CountrySelect';
import QuizContainer from './containers/QuizContainer';
 
function App() {

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({})

  useEffect(() => {
    console.log('use effect on render...')
    getCountries().then(countries => setCountries(countries))
  }, [])

  const setSelectedCountryById = (countryId) => {
    console.log("app country id", countryId)
    const getSelectedCountryById = countries.find(country => country._id === countryId)
    setSelectedCountry(getSelectedCountryById)
  }

  return (
    <>
    <h1>M-Apps - getting ready to fetch</h1>
    <CountrySelect countries={countries} selectCountryById={setSelectedCountryById} />
    <QuizContainer selectedCountry={selectedCountry}/>
    </>
  );
}

export default App;
