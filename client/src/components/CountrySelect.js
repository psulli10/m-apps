import { Link } from 'react-router-dom';

const CountrySelect = ({ countries, selectCountryById }) => {


  const displayCountries = countries.map((country) => {
    return <option value={country._id} key={country._id}>{country.name}</option>
  })

  const handleChange = (event) => {
    const countryId = event.target.value;
    selectCountryById(countryId)
  }

  return (
    <>
      <h3>I am a country select component</h3>
      <select onChange={handleChange} defaultValue="" required>
        <option disabled value="">Choose a Country</option>
        {displayCountries}
      </select>
      <br></br>
        <Link to="/difficulty-select">Next</Link>
    </>
  )

}

export default CountrySelect;