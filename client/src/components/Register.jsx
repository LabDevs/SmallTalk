import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

const Register = () => {
  return (
    <div>
      <Form action='/api/register' method='post'>
        <Form.Group controlId='usernameForm'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter a unique username!'
            name='username'
          />
          <Form.Text className='text-muted'>
                You will remain anonymous while using our app :)
          </Form.Text>
        </Form.Group>

        <Form.Group controlId='passwordForm'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter a password!'
            name='password'
          />
        </Form.Group>
        <Button
          variant='primary'
          type='submit'
        >
              Submit
        </Button>
      </Form>
    </div>
  )
}

export default Register
