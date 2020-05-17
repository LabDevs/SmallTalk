import React from 'react'
import { Card, Button } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import UpdateEvent from './UpdateEvent'

const DashBoardEvent = (props) => {
  const removeEvent = () => {
    fetch('/remove', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ eventId: props.event.event_id })
    })
      .then(() => {
        window.location.reload()
      })

      .catch((err) => {
        console.log(err)
      })
  }

  // const update = () => {
  //   fetch('/update', {
  //     method:'PUT',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ eventId: props.event.event_id})
  //   })
  //     .then(() => {
  //
  //     })
  // }

  return (
    <Card key={props.event.event_id} className='text-center'>
      <Card.Body>
        <Card.Title>{props.event.title}</Card.Title>
        <Card.Text>
          {props.event.description}
        </Card.Text>
        <Link to={{
          path: '/updateEvent',
          state: {
            eventId: props.event.event_id
          }
        }}
        >
          <Button>Update Event</Button>
        </Link>
        <Button onClick={removeEvent}>Delete Event</Button>
      </Card.Body>
    </Card>
  )
}

export default DashBoardEvent
