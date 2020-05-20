import React, { useEffect, useContext } from 'react'
import { CardGroup } from 'react-bootstrap'
import CategoriesContext from '../contexts/CategoriesContext'
import CategoryCard from '../components/CategoryCard'

const CategoryList = () => {
  const { categories, setCategories, categoryId, setCategoryId, clicked, setClicked } = useContext(CategoriesContext)

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch(`/api/categories`)
      const data = await response.json()
      setCategories(data)
      console.log(data)
    }
    getCategories()
  }, [])

  useEffect(() => {
    const getCategoryId = async () => {
      const response = await fetch(`/api/categories`)
      const json = await response.json()
      const id = json.map((category) => category.category_id)
      setCategoryId(id)
    }
    getCategoryId()
  }, [])

  const clickHandler = (id) => {
    console.log(`this button has been clicked ${id}`)
    if (clicked === false) setClicked(true)
  }

  return (
    <div className='categories'>
      <CardGroup>
        {categories && categories.map((category) => (
          < CategoryCard
            key={category.category_id}
            category={category}
            clickHandler={clickHandler}
          />
         ))}
      </CardGroup>
    </div>
  )
}

export default CategoryList
