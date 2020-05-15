import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Event = () => {
  return (
    <Card className='text-center'>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant='primary'>RSVP</Button>
      </Card.Body>
    </Card>
  )
}

export default Event
