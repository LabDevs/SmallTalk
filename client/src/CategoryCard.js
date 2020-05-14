import React from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'

const CategoryCard = () => {
  return (
    <div>
      <CardGroup className='top-card-row'>
      </CardGroup>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src='https://via.placeholder.com/100' />
        <Card.Body>
          <Card.Title>
            Beauty
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <Button variant='info'>
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CategoryCard
