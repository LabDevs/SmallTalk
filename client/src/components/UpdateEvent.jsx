import React, { useState, useEffect } from 'react'
import { Form, Modal } from 'react-bootstrap'
import { Button } from 'grommet'

const UpdateEvent = props => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [categoryData, setCategoryData] = useState(null)
  const [categoryId, setCategoryId] = useState(null)
  const [date, setDate] = useState(null)
  const [event, setEvent] = useState('')

  const eventInfo = {
    title: title,
    description: description,
    categoryId: categoryId,
    date: date,
    eventId: props.eventId
  }

  const updateEvent = e => {
    e.preventDefault()
    fetch('/update', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(eventInfo)
    })
      .then(() => window.location.reload())
      .catch(err => console.log(err))
  }

  useEffect(() => {
    async function getCategories() {
      try {
        const response = await fetch('/api/categories')
        const data = await response.json()
        setCategoryData(data)
      } catch (err) {
        console.log(err)
      }
    }

    async function getEventById() {
      try {
        const response = await fetch(`/api/event/${props.eventId}`)
        const data = await response.json()
        setEvent(data)
      } catch (err) {
        console.log(err)
      }
    }

    getCategories()
    getEventById()
  }, [])

  const stringDate = event.date
    ? event.date.slice(0, event.date.length - 1)
    : ''

  console.log(event)

  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>Update SmallTalk</Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId='titleForm'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                onChange={e => setTitle(e.target.value)}
                type='text'
                placeholder='What is your SmallTalk about?'
                value={event.title}
              />
            </Form.Group>

            <Form.Group controlId='descriptionForm'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                onChange={e => setDescription(e.target.value)}
                as='textarea'
                rows='3'
                placeholder='Give a short description of your SmallTalk!'
                value={event.description}
              />
            </Form.Group>

            <Form.Group controlId='categoryOptions'>
              <Form.Label>Category</Form.Label>
              <Form.Control
                onChange={e => setCategoryId(e.target.value)}
                as='select'
              >
                {categoryData &&
                  categoryData.map(category => {
                    if (event.category_id === category.id) {
                      return (<option selected key={category.id} value={category.id}>
                        {category.name}
                      </option>)
                    }
                    return (<option key={category.id} value={category.id}>
                      {category.name}
                    </option>)
                  })}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId='dateForm'>
              <Form.Label>Date</Form.Label>
              <Form.Control
                onChange={e => setDate(e.target.value)}
                type='datetime-local'
                rows='3'
                value={stringDate ? stringDate : null}
              />
            </Form.Group>

            <Button
              onClick={updateEvent}
              size='small'
              primary
              responsive='true'
              type='submit'
              label='Update SmallTalk'
              color='#6AB8E0'
            />
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default UpdateEvent
