import React, { useState } from 'react'
import CategoriesContext from './CategoriesContext'

const CategoriesContextProvider = ({ children }) => {
  const [categoryDescriptions, setCategoryDescriptions] = useState([
    "This is for those who feel they don't need conversation starters and want to talk about anything and everything!",
    'If gaming is your kind of conversation starter, these SmallTalks might be a good fit!',
    "What's new in the beauty realm? You can start with tried and trues as well as any other trends here!",
    "What's more entertaining than watching a game? Talking about it with others, of course! You can start with all things sports here!",
    "What's not to talk about when it comes to food? Talk about your favorite spots or dishes you can't wait to try!",
    "Whether you're into physical books or ebooks, carryout conversations based around your favorite reads!"
  ])

  const value = {
    categoryDescriptions
  }

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}

export default CategoriesContextProvider
