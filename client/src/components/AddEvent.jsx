import React, { useState, useEffect } from 'react'
import { Form, Modal } from 'react-bootstrap'
import { Button } from 'grommet'

const AddEvent = props => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [categoryData, setCategoryData] = useState(null)
  const [categoryId, setCategoryId] = useState(1)
  const [date, setDate] = useState(null)
  const eventInfo = {
    title: title,
    description: description,
    categoryId: categoryId,
    date: date
  }

  const addEvent = e => {
    e.preventDefault()
    fetch('/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(eventInfo)
    })
      .then(() => window.location.reload())
      .catch(err => console.log(err))
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

    getCategories()
  }, [])

  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>Add Event</Modal.Header>
        <Modal.Body>
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
              <Form.Control
                onChange={e => setDescription(e.target.value)}
                as='textarea'
                rows='3'
                placeholder='Give a short description of your event!'
              />
            </Form.Group>

            <Form.Group controlId='categoryOptions'>
              <Form.Label>Category</Form.Label>
              <Form.Control
                onChange={e => setCategoryId(e.target.value)}
                as='select'
              >
                {categoryData &&
                  categoryData.map((category, i) => {
                    if (i === 0) {
                      return (
                        <option
                          key={category.id}
                          value={category.id}
                          selected='selected'
                        >
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
              />
            </Form.Group>

            <Button
              onClick={addEvent}
              size='small'
              primary
              responsive='true'
              type='submit'
              label='Add Event'
            />
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default AddEvent
