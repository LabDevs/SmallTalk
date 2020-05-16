import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

const AddEvent = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [redirect, setRedirect] = useState(false)
  const eventInfo = {
    title: title.toString(),
    description: description.toString()
  }

  const addEvent = (e) => {
    e.preventDefault()
    fetch('/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(eventInfo)
    })
      .then(() => setRedirect(true))
      .catch((err) => console.log(err))
  }

  return (
    <div>
      {redirect ? (
        <Redirect to='/dash' />
      ) : (
          <Form>
            <Form.Group controlId='titleForm'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                onChange={e => setTitle(e.target.value)}
                type='text'
                placeholder='What is your event about?'
              />
            </Form.Group>

            <Form.Group controlId='descriptionForm'>
              <Form.Label>Description</Form.Label>
              <Form.Control onChange={e => setDescription(e.target.value)} as="textarea" rows="3" placeholder='Give a short description of your event!' />
            </Form.Group>
            <Button
              onClick={addEvent}
              variant='primary'
              type='submit'
            >
              Add Event!
        </Button>
          </Form>
        )}
    </div>
  )
}

export default AddEvent