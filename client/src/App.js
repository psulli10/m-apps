import './App.css';
import { useState, useEffect } from 'react';
import { getCountries } from './services/CountriesService';
 
function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    console.log('use effect on render...')
    getCountries().then(countries => setCountries(countries))
  }, [])

  return (
    <>
    <h1>M-Apps - getting ready to fetch</h1>
    </>
  );
}

export default App;
