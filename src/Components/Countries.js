import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

// URL API
const url = 'https://restcountries.eu/rest/v2/all'

const Countries = () => {

  // States countries
  const [countries, setCountries] = useState([])

  // Fetch Data Async Await Function
  const fetchCountryData = async () => {
    const response = await fetch(url)
    const countries = await response.json()
    setCountries(countries)
  }

  // UseEffect call Fetch Datat Function
  useEffect(() => {
    fetchCountryData()
  }, [])

  // Remove Country onclick
  const removeCountry = (numericCode) => {
     const newcountry = countries.filter((country) => country.numericCode !== numericCode)
     setCountries(newcountry)
  }

  return (
    <>
       <section className='countries'>
       { countries.map((country) => {
          const { 
             numericCode,
             name, 
             population, 
             capital, 
             region, 
             flag
            } = country
          
          return (
          <article key={numericCode}>
            <div className="flag">
              <img src={flag} alt={name} />
            </div>
              <div className="details">
                <h4 className="country-name">Name: {name}</h4>
                <h4>Population: <span>{population}</span></h4>
                <h4>Region: <span>{region}</span></h4>
                <h4>Capital: <span>{capital}</span></h4>
                <div className="buttons">
                <Link to={`/countries/${name}`} className="btn">Learn more</Link>
                <button className="btn" onClick={() => removeCountry(numericCode)}>Remove Country</button>
                </div>
              </div>
          </article>
          )
        })}
       </section>
    </>
  )
}

export default Countries
