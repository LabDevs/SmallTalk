import React, { useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import UserContext from '../contexts/UserContext'

const UpdateEvent = (props) => {
  //eventId should be passed down to this component from the dashboard, because that component is
  //getting all event info based on user, and each event should have an id attached to it.
  const { userId } = useContext(UserContext)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [redirect, setRedirect] = useState(false)
  const eventInfo = {
    title: title.toString(),
    description: description.toString(),
    eventId: props.eventId,
    userId: userId
  }

  const addEvent = (e) => {
    e.preventDefault()
    fetch('/update', {
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
              Update Event!
        </Button>
          </Form>
        )}
    </div>
  )
}

export default UpdateEvent