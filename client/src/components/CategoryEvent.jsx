import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'

const CategoryEvent = (props) => {
  const [variant, setVariant] = useState('primary')
  const rsvpInfo = {
    userId: props.event.userId.toString(),
    eventId: props.event.eventId.toString()
  }

  //eventId and userId will be provided by the CategoriesEventList component, since it's making a fetch
  //request to the server to get events by category, and will be passed down to this component
  const addRSVP = () => {
    fetch('/rsvp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(rsvpInfo)
    })
      .catch((err) => {
        console.log(err)
      })

    setVariant('secondary')
  }

  return (
    <Card id={props.event.id} className='text-center'>
      <Card.Body>
        <Card.Title>{props.event.title}</Card.Title>
        <Card.Text>
          {props.event.description}
        </Card.Text>
        <Button onClick={addRSVP} variant={variant}>RSVP</Button>
      </Card.Body>
    </Card>
  )
}

export default CategoryEvent
