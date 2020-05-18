import React, { useEffect, useContext } from 'react'
import { CardGroup } from 'react-bootstrap'
import CategoriesContext from '../contexts/CategoriesContext'
import CategoryCard from '../components/CategoryCard'

const CategoryList = () => {
  const { categories, setCategories } = useContext(CategoriesContext)

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
        {categories && categories.map((category) => (
          < CategoryCard
          key={category.category_id}
          id={category.category_id}
          name={category.name}
          />
         ))}
      </CardGroup>
    </div>
  )
}

export default CategoryList
