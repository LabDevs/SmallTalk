import React, { useState, useEffect } from 'react'
import { Form, Modal } from 'react-bootstrap'
import { Button } from 'grommet'

const UpdateEvent = props => {
  const [event, setEvent] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [categoryData, setCategoryData] = useState(null)
  const [categoryId, setCategoryId] = useState(null)
  const stringDate = event.date
    ? event.date.slice(0, event.date.length - 1)
    : Date.now()
  const [date, setDate] = useState(stringDate)

  const updateEvent = e => {
    e.preventDefault()

    const eventInfo = {
      title: title,
      description: description,
      categoryId: categoryId,
      date: date,
      eventId: props.eventId
    }

    console.log(eventInfo)
    fetch('/update', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(eventInfo)
    })
      .then(() => window.location.reload())
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    async function getCategories () {
      try {
        const response = await fetch('/api/categories')
        const data = await response.json()
        setCategoryData(data)
      } catch (err) {
        console.log(err)
      }
    }

    async function getEventById () {
      try {
        const response = await fetch(`/api/event/${props.eventId}`)
        const data = await response.json()
        setEvent(data)
        setTitle(data.title)
        setDescription(data.description)
        setDate(data.date)
        setCategoryId(data.category_id)
      } catch (err) {
        console.log(err)
      }
    }

    getCategories()
    getEventById()
  }, [])

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
                value={title}
              />
            </Form.Group>

            <Form.Group controlId='descriptionForm'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                onChange={e => setDescription(e.target.value)}
                as='textarea'
                rows='3'
                placeholder='Give a description of your SmallTalk!'
                value={description}
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
                      return (
                        <option selected key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      )
                    }
                    return (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    )
                  })}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId='dateForm'>
              <Form.Label>Date</Form.Label>
              <Form.Control
                onChange={e => setDate(e.target.value)}
                type='datetime-local'
                rows='3'
                defaultValue={stringDate ? stringDate : null}
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
