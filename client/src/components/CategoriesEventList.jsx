import React, { useContext, useEffect } from 'react'
import { CardGroup } from 'react-bootstrap'
import CategoriesContext from '../contexts/CategoriesContext'
import Event from './Event'

const CategoriesEventList = (props) => {
  const { categoryEvents, setCategoryEvents } = useContext(CategoriesContext)

  //This function will take in a categoryId, which will be provided by the Categories/Topics component as
  //a prop since that component will be making a fetch request to get all categories, which includes the id.
  useEffect(() => {
    async function getEventsByCategory() {
      const response = fetch(`/api/categories/${props.id}`)
      const json = await response.json()
      setCategoryEvents(json)
      console.log(categoryEvents)
    }

    getEventsByCategory()
  }, [categoryEvents])

  return (
    <CardGroup className='cards'>
      {categoryEvents && categoryEvents.forEach(event => <Event event={event} />)}
    </CardGroup>
  )
}

export default CategoriesEventList
