import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import '../styles/components/Aside.css'

const Aside = () => {
  return (
    <div className='aside'>
      <Logo />
      <ul>
        <li><Link>All Tasks</Link></li>
        <li><Link>Today</Link></li>
        <li><Link>Upcoming</Link></li>
        <li><Link>Overdue</Link></li>
        <li><Link>Completed</Link></li>
        <li><Link>Pending</Link></li>
      </ul>
    </div>
  )
}

export default Aside
