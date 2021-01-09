const baseURL = 'http://localhost:5000/api/countries/'


export const getCountries = () => {
  return fetch(baseURL)
    .then(res => res.json())
}

