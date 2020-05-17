import React, { useState, useContext } from 'react'
import { Form, Button, Modal } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import UserContext from '../contexts/UserContext'

const UpdateEvent = (props) => {
  // eventId should be passed down to this component from the dashboard, because that component is
  // getting all event info based on user, and each event should have an id attached to it.
  const { userId } = useContext(UserContext)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const eventInfo = {
    title: title.toString(),
    description: description.toString(),
    eventId: props.eventId,
    userId: userId
  }
  console.log(props.location)
  console.log(props)

  const updateEvent = (e) => {
    e.preventDefault()
    fetch('/update', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(eventInfo)
    })
      .then(() => {
        setTitle(title)
        setDescription(description)
      })
      .then(() => window.location.reload())
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>Update Your Event</Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId='titleForm'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                defaultValue={title}
                onChange={e => setTitle(e.target.value)}
                type='text'
                placeholder='What is your event about?'
              />
            </Form.Group>

            <Form.Group controlId='descriptionForm'>
              <Form.Label>Description</Form.Label>
              <Form.Control defaultValue={description}
                onChange={e => setDescription(e.target.value)}
                as='textarea' rows='3'
                placeholder='Give a short description of your event!' />
            </Form.Group>

            <Button
              onClick={updateEvent}
              variant='primary'
              type='submit'
            >
              Update Event!
              </Button>
          </Form>
        </Modal.Body>
      </Modal>
        )}
    </div>
  )
}

export default UpdateEvent
