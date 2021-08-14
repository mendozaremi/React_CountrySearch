import React from 'react'

export default function CountryCard({country}) {
  return (
      <div className="card">
                  <div className="card--content">
                    <img className="card--image"
                       src={country.flag}
                       alt={country.name + 'flag'}
                       />
                    <h3 className="card--title">{country.name}</h3>
                    <h3 className="card--population">{country.population}</h3>
                  </div>
          </div>
  )
}