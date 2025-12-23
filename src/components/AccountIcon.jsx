import React from 'react'
import userIcon from '../assets/user-icon.webp'
import '../styles/components/AccountIcon.css'

const AccountIcon = () => {
  return (
    <div className='account-icon'>
        <p className="username">john doe</p>
        <img src={userIcon} alt="user-icon" />
    </div>
  )
}

export default AccountIcon
