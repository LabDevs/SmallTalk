import React, { useState, useEffect, useContext } from 'react'
import { CardGroup } from 'react-bootstrap'
import CategoryCard from '../components/CategoryCard'

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

  const colorsByHex = ['#C2FFD9', '#51E5FF', '#FDC5F5', '#FFA69E', '#F2F230']

  return (
    <div className='categories'>
      <CardGroup>
        {categories &&
          categories.map((category, i) => (
            <CategoryCard
              color={colorsByHex[i]}
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
