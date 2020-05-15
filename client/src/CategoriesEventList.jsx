import React, { useContext, useEffect } from 'react'
import { CardGroup, Card, Button } from 'react-bootstrap'
import CategoriesContext from './contexts/CategoriesContext'
import Event from './Event'

const CategoriesEventList = props => {
  const { categoryEvents, setCategoryEvents } = useContext(CategoriesContext)

  useEffect(() => {
    async function getEventsByCategory () {
      const response = fetch(`/api/categories/${1}`)
      const json = await response.json()
      setCategoryEvents(json)
      console.log(categoryEvents)
    }

    getEventsByCategory()
  }, [categoryEvents])

  return (
    <CardGroup className='cards'>
      {categoryEvents && categoryEvents.map(event => <Event event={event} />)}
    </CardGroup>
  )
}

export default CategoriesEventList
