import React, { useState, useEffect, useContext } from 'react'
import { CardGroup } from 'react-bootstrap'
import CategoriesContext from '../contexts/CategoriesContext'
import CategoryCard from '../components/CategoryCard'
import CategoryEvent from '../components/CategoryEvent'
const CategoryList = () => {
  const [categories, setCategories] = useState(null)

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch(`/api/categories`)
      const data = await response.json()
      setCategories(data)
      console.log(data)
    }
    getCategories()
  }, [])

  return (
    <div className='categories'>
      <CardGroup>
        {categories &&
          categories.map(category => (
            <CategoryCard
              key={category.id}
              category={category}
              id={category.id}
            />
          ))}
      </CardGroup>
    </div>
  )
}

export default CategoryList
