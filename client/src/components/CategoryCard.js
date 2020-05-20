import React, { useState, useEffect, useContext } from 'react'
import { Card, Button } from 'react-bootstrap'
import CategoriesEventList from '../components/CategoriesEventList'
import CategoriesContext from '../contexts/CategoriesContext'

const CategoryCard = (props) => {
  const { categoryEvents, setCategoryEvents } = useContext(CategoriesContext)
  let {name, category_id} = props.category
  let {clickHandler} = props

  useEffect(() => {
    const viewEvents = async (category_id) => {
      const res = await fetch(`/events/${category_id}`)
      const events = await res.json()
      setCategoryEvents(events)
      console.log(events)
    }
    viewEvents()
  }, [])
  
  return (
    <div>
      <Card style={{ width: '18rem' }} >
        <Card.Img variant='top' src='https://via.placeholder.com/100' />
        <Card.Body>
          <Card.Title>
            {name}
          </Card.Title>
          <Button variant='info' onClick={() => props.clickHandler(category_id)}>
            Event
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CategoryCard
