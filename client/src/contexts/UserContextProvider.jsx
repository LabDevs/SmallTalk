import React, { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({ children }) => {
  const [username, setUsername] = useState('')
  const [userId, setUserId] = useState(null)
  const value {
    username,
    setUsername,
    userId,
    setUserId
  }
  return (
    <UserContext.Provider vaule={value}>
      {children}
    </UserContext.Provider>
    )
}

export default UserContextProvider