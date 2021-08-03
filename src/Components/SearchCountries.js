import React from 'react'

const SearchCountries = () => {

  const [query, setQuery] = useState('')
  const [countries, setCountries] = useState([])

    const searchCountries = async (e) => {
      e.preventDefault();

      const url = ``;

      try{

      }catch(err){

      }
    }

  return (
    <div>
      <form className="form" onChange={searchCountries}>
        <label className="label" htmlFor="query"></label>
        <input
          type="text"
          name="query"
          placeholder="Search for a country..."
          value={query} onChange={(e) => setQuery(e.target.value)}
        >
        </input>
      </form>
      <div className="card-list">
        {/* { countries.filter} */}
      </div>
    </div>
  )
}

export default SearchCountries
