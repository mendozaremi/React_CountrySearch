import React from 'react'

export default function CountryCard({country}) {
  return (
      <div className="card">
            <img className="card--image"
                  src={`https://restcountries.eu/data/${country.alpha3Code}.svg`}
                  alt={country.name + 'flag'}
                  />
                  <div clasName="card--content">
                    <h3 className="card--title">{country.name}</h3>
                  </div>
          </div>
  )
}