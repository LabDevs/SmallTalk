import React from 'react'
import { Card, Button } from 'react-bootstrap'

const CategoryCard = ({id, name}) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src='https://via.placeholder.com/100' />
        <Card.Body>
          <Card.Title>
            {name}
          </Card.Title>
          <Button variant='info'>
            Event
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CategoryCard
