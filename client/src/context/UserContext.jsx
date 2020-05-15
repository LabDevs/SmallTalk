import React, { createContext } from 'react';

const UserContext = createContext({})

const UserContextProvider = ({children}) =>{
  const userInfo = {
    username,
    userId
  }
  
  return (
    <UserContext.Provider userInfo={userInfo}>
      { children }
    </UserContext.Provider>
    )
}

export default UserContext