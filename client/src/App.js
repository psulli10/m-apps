import './App.css';
import { useState, useEffect } from 'react';
import { getCountries } from './services/CountriesService';
import CountrySelect from './components/CountrySelect';
import QuizContainer from './containers/QuizContainer';
import DifficultySelect from './components/DifficultySelect';
 
function App() {

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});
  const [difficulty, setDifficulty] = useState("");

  useEffect(() => {
    console.log('use effect on render...')
    getCountries().then(countries => setCountries(countries))
  }, [])

  const setSelectedCountryById = (countryId) => {
    const getSelectedCountryById = countries.find(country => country._id === countryId)
    setSelectedCountry(getSelectedCountryById)
  }

  const setSelectedDifficulty = (difficulty) => {
    setDifficulty(difficulty)
  }

  return (
    <>
    <h1>M-Apps - getting ready to fetch</h1>
    <CountrySelect countries={countries} selectCountryById={setSelectedCountryById} />
    <DifficultySelect selectDifficulty = {setSelectedDifficulty}/>
    <QuizContainer selectedCountry={selectedCountry} selectedDifficulty={difficulty}/>
    </>
  );
}

export default App;
