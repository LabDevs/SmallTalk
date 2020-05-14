import React from 'react'
import { CardGroup, Card, Button } from 'react-bootstrap'

const CategoriesEventList = () => {
  return (
    <CardGroup className='cards'>
      <Card className='text-center'>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant='primary'>RSVP</Button>
        </Card.Body>
      </Card>
      <Card className='text-center'>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant='primary'>RSVP</Button>
        </Card.Body>
      </Card>
      <Card className='text-center'>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant='primary'>RSVP</Button>
        </Card.Body>
      </Card>
    </CardGroup>
  )
}

export default CategoriesEventList
