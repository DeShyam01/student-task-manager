import React from 'react'
import '../styles/components/Searchbar.css'
import searchicon from '../assets/search-icon.webp'

const Searchbar = () => {
  return (
    <div className='searchbar'>
      <input className='input' type="text" placeholder="Search tasks..." />
      <img src={searchicon} alt="search-icon" className='search-icon' />
    </div>
  )
}

export default Searchbar
