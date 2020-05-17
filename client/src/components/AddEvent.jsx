import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

const AddEvent = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [categoryData, setCategoryData] = useState(null)
  const [categoryId, setCategoryId] = useState(null)
  const [redirect, setRedirect] = useState(false)
  const eventInfo = {
    title: title,
    description: description,
    categoryId: categoryId
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

  useEffect(() => {
    async function getCategories() {
      const response = await fetch('/api/categories')
      const data = await response.json()
      setCategoryData(data)
    }

    getCategories()
  }, [])

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
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Category</Form.Label>
              <Form.Control onChange={(e) => setCategoryId(e.target.value)} as="select">
                {categoryData && categoryData.forEach(category =>(
                  <option value={category.category_id}>{category.name}</option>
                ))}
              </Form.Control>
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
