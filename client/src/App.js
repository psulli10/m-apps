import './App.css';
import {useState, useEffect} from 'react';

function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    console.log('use effect on render...')
  }, [])

  return (
    <>
    <h1>M-Apps - getting ready to fetch</h1>
    </>
  );
}

export default App;
