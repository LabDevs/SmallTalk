import React, { useState } from 'react'
import CategoriesContext from './CategoryContext'

const CategoriesContextProvider = ({ children }) => {
  const [categoryEvents, setCategoryEvents] = useState([])
  const [categories, setCategories] = useState(null)

  const value = {
    categoryEvents,
    setCategoryEvents,
    categories,
  setCategories}

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}
export default CategoriesContextProvider
