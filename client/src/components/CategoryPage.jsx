import React, { useEffect, useState } from 'react'
import { CardGroup } from 'react-bootstrap'
import CategoriesContext from '../contexts/CategoriesContext'
import CategoryEvent from './CategoryEvent'
import { useParams } from 'react-router-dom'

const CategoryPage = () => {
  const { categoryId } = useParams()
  const [categoryEvents, setCategoryEvents] = useState(null)

  // This function will take in a categoryId, which will be provided by the Categories/Topics component as
  // a prop since that component will be making a fetch request to get all categories, which includes the id.
  useEffect(() => {
    async function getEventsByCategory () {
      const response = await fetch(`/api/categories/${categoryId}`)
      const json = await response.json()
      setCategoryEvents(json)
      console.log(categoryEvents)
    }
    getEventsByCategory()
  }, [])

  return (
    <CardGroup className='cards'>
      {categoryEvents &&
        categoryEvents.map(event => <CategoryEvent event={event} />)}
    </CardGroup>
  )
}

export default CategoryPage
