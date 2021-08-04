import React, { useState } from 'react'
import CountryCard from './CountryCard'

const SearchCountries = () => {

  // States - inpute query, countries
  const [query, setQuery] = useState('')
  const [countries, setCountries] = useState([])

    const searchCountries = async (e) => {
      e.preventDefault();

      const url = `https://restcountries.eu/rest/v2/name/${query}`;

      try{
        const results = await fetch(url);
        const data = await results.json();
        console.log(data.results);
        
        setCountries(data.results)
      }catch(err){
        console.log(err)
      }
    }

  return (
    <>
      <form className="form" onSubmit={searchCountries}>
        <label className="label" htmlFor="query">Country Name</label>
        <input
          className="form-control"
          type="text"
          name="query"
          placeholder="Search for a country..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">Search</button>
      </form>
      <div className="country-list">
        { countries.filter(country => country.alpha3Code).map( country => (
          <CountryCard country={country} key={country.id}/>
        ))}
      </div>
    </>
  )
}

export default SearchCountries
