import React from 'react'
import '../styles/components/Statbar.css'

const Statbar = () => {
  return (
    <div className='statbar'>
      <p>Completed:</p>
      <div className="progress-bar">
        <div className="progress"></div>
      </div>
    </div>
  )
}

export default Statbar
