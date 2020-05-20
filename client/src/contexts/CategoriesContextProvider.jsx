import React, { useState } from 'react'
import CategoriesContext from './CategoriesContext'

const CategoriesContextProvider = ({ children }) => {
  const [categoryEvents, setCategoryEvents] = useState([])
  const [categories, setCategories] = useState([])
  const [categoryId, setCategoryId] = useState([])
  const [clicked, setClicked] = useState(false)
  const value = {
    categoryEvents,
    setCategoryEvents,
    categories,
    setCategories,
    categoryId,
    setCategoryId,
    clicked,
    setClicked
}

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}

export default CategoriesContextProvider
