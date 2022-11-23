import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const {query, handleSearch} = useGlobalContext()

  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h4>search hacker news</h4>
      <input 
        type="text" 
        className="form-input" 
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchForm
