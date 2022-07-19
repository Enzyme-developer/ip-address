import React from 'react'
import './search.css'

const Search = () => {
  return (
    <div className='banner'>
        <input type='text' value={'jnjxj'} placeholder='search location' />
        <button type='button' ><svg xmlns="http://www.w3.org/2000/svg" width="11" height="11"><path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6"/></svg></button>
    </div>
  )
}

export default Search