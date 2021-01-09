
const CountrySelect = ( {countries, selectCountryById} ) => {


  const displayCountries = countries.map((country) => {
    return <option value={country._id} key={country._id}>{country.name}</option>
  })

  const handleChange = (event) => {
    const countryId = event.target.value;
    console.log(countryId)
    selectCountryById(countryId)
  }

  return(
    <>
    <h3>I am a select component</h3>
    <select onChange={handleChange} defaultValue="">
    <option hidden>Choose a Country</option>
      {displayCountries}  
    </select>
    
    </>
  )

}

export default CountrySelect;