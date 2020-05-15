import React, { useState } from 'react'
import CategoriesContext from './CategoriesContext'

const CategoriesContextProvider = ({ children }) => {
  const [categoryEvents, setCategoryEvents] = useState([])

  const value = {
    categoryEvents,
    setCategoryEvents
  }

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}

export default CategoriesContextProvider
