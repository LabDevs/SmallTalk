import React, { useState, useEffect, useContext } from 'react'
import { CardGroup } from 'react-bootstrap'
import CategoryCard from '../components/CategoryCard'
import { Gamepad, Group, Spa, Bike, Cafeteria } from 'grommet-icons'

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

  const icons = [
    <Group size='large' />,
    <Gamepad size='large' />,
    <Spa size='large' />,
    <Bike size='large' />,
    <Cafeteria size='large' />
  ]

  return (
    <div className='categories'>
      <CardGroup>
        {categories &&
          categories.map((category, i) => (
            <CategoryCard
              icon={icons[i]}
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
