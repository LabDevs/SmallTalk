import React from 'react'
import { Card, Button } from 'react-bootstrap'

const DashBoardEvent = (props) => {
  return (
    <Card id={props.event.id} className='text-center'>
      <Card.Body>
        <Card.Title>{props.event.title}</Card.Title>
        <Card.Text>
          {props.event.description}
        </Card.Text>
        <Button onClick={}></Button>
        <Button onClick={}></Button>
      </Card.Body>
    </Card>
  )
}

export default DashBoardEvent
