import React, { useState } from 'react'
import CategoriesContext from './CategoriesContext'

const CategoriesContextProvider = ({ children }) => {
  const [categoryEvents, setCategoryEvents] = useState(null)
  const [categories, setCategories] = useState([null])
  const [categoryId, setCategoryId] = useState(null)
  const [clicked, setClicked] = useState(false)
  const value = {
    categoryEvents,
    setCategoryEvents,
    categories,
    setCategories,
    categoryId,
    setCategoryId
  }

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}

export default CategoriesContextProvider
