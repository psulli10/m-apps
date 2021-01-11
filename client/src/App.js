import './App.css';

import { useState, useEffect } from 'react';
import { getCountries } from './services/CountriesService';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CountrySelect from './components/CountrySelect';
import QuizContainer from './containers/QuizContainer';
import DifficultySelect from './components/DifficultySelect';
import ErrorPage from './components/ErrorPage';
import NavBar from './components/NavBar';
import Home from './components/Home';
import MapComponent from './components/MapComponent';

 
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

    <Router>
      <>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/country-select"
          render={() => <CountrySelect countries={countries} selectCountryById={setSelectedCountryById} />}
        />
        <Route path="/difficulty-select"
          render={() => <DifficultySelect selectDifficulty = {setSelectedDifficulty}/>}
        />
        <Route path="/quiz"
          render={() => <QuizContainer selectedQuestions={selectedCountry[difficulty]} selectedCountry={selectedCountry}/>}
        />
        {/* <Route path="/map" component={MapComponent}/> */}
        <Route component={ErrorPage}/>
        {/* <Route component={ErrorPage}/> */}
      </Switch>
      </>
    </Router>
    // <>
    // <h1>M-Apps - getting ready to fetch</h1>
    // <CountrySelect countries={countries} selectCountryById={setSelectedCountryById} />
    // <DifficultySelect selectDifficulty = {setSelectedDifficulty}/>
    // <QuizContainer selectedQuestions={selectedCountry[difficulty]}/>
    // </>
  );
}

export default App;
