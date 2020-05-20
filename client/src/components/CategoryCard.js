import React, { useState, useEffect, useContext } from 'react'
import { Card, Button } from 'react-bootstrap'
import CategoriesEventList from './CategoryPage'
import CategoriesContext from '../contexts/CategoriesContext'
import { Link } from 'react-router-dom'

const CategoryCard = props => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src='https://via.placeholder.com/100' />
        <Card.Body>
          <Card.Title>{props.category.name}</Card.Title>
          <Link to={`/categories/${props.category.id}`}>
            <Button variant='info'>See Events</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CategoryCard
