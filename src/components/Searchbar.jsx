import React from 'react'
import '../styles/components/Searchbar.css'

const Searchbar = () => {
  return (
    <div className='searchbar'>
      <input className='input' type="text" placeholder="Search tasks..." />
    </div>
  )
}

export default Searchbar
