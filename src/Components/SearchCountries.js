import React, { useState } from 'react'
import CountryCard from './CountryCard'
import axios from 'axios';

const SearchCountries = () => {

  // States - inpute query, countries
  const [query, setQuery] = useState('')
  const [countries, setCountries] = useState([])

    const searchCountries = async (e) => {
      e.preventDefault();
      
      // API URL
      const url = `https://restcountries.eu/rest/v2/all`;
    
      try{
        const { data } = await axios.get(url)

        setCountries(data)

        console.log(`this is countries ${countries} and data ${data}`)
      }catch(err){
        console.log(`this is error ${err}`)
      }
    }

  return (
    <>
      <form className="form" onSubmit={searchCountries}>
        <label className="label" htmlFor="query">Country Name</label>
        <input
          // className="form-control"
          type="text"
          name="query"
          placeholder="Search for a country..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">Search</button>
      </form>
      {/* <div>
        { countries.map( country => (
          <CountryCard country={country} />
        ))}
      </div> */}
      <div>
        { countries.map( country => (
          <CountryCard country={country} key={country.id}/>
        ))}
      </div>
    </>
  )
}

export default SearchCountries
