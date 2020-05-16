import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'


const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)
  const userInfo = {
    username: username.toString(),
    password: password.toString()
  }

  const registerUser = (e) => {
    e.preventDefault()
    console.log(JSON.stringify(userInfo))
    fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userInfo)
    })
      .then(() => setRedirect(true))
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      {redirect ? (
        <Redirect to='/dash' />
      ) : (
          < Form >
            <Form.Group controlId='usernameForm'>
              <Form.Label>Username</Form.Label>
              <Form.Control
                onChange={e => setUsername(e.target.value)}
                type='text'
                placeholder='Enter a unique username!'
              />
              <Form.Text className='text-muted'>
                You will remain anonymous while using our app :)
        </Form.Text>
            </Form.Group>

            <Form.Group controlId='passwordForm'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={e => setPassword(e.target.value)}
                type='password'
                placeholder='Enter a password!'
              />
            </Form.Group>
            <Button
              onClick={registerUser}
              variant='primary'
              type='submit'
            >
              Submit
      </Button>
          </Form>
        )
      }
    </div>
  )
}

export default Register
