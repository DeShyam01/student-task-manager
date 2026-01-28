import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import '../styles/components/Aside.css'
import alltasksicon from '../assets/all-tasks.webp'
import todayicon from '../assets/today.webp'
import upcomingicon from '../assets/upcoming-task.webp'
import overdueicon from '../assets/overdue-task.webp'
import completedicon from '../assets/completed-task.webp'
import pendingicon from '../assets/pending-task.webp'
import dashboardicon from '../assets/dashboard.webp'

const Aside = () => {
  return (
    <div className='aside'>
      <Logo />
      <ul>
        <li><Link to="/dashboard"><img src={dashboardicon} alt="" />Dashboard</Link></li>
        <li><Link to="/tasks"><img src={alltasksicon} alt="" />All Tasks</Link></li>
        <li><Link><img src={todayicon} alt="" />Today</Link></li>
        <li><Link><img src={upcomingicon} alt="" />Upcoming</Link></li>
        <li><Link><img src={overdueicon} alt="" />Overdue</Link></li>
        <li><Link><img src={completedicon} alt="" />Completed</Link></li>
        <li><Link><img src={pendingicon} alt="" />Pending</Link></li>
      </ul>
    </div>
  )
}

export default Aside
