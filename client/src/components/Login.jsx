import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'


const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)
  const userInfo = {
    username: username,
    password: password
  }

  const loginUser = (e) => {
    e.preventDefault()
    console.log(JSON.stringify(userInfo))
    fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userInfo)
    })
      .then((res) => {
        if(res.status === 200){
          setRedirect(true)
        }
        if(res.status === 404){
          console.log('No User')
          return <p>No user found with this username</p>
        }
        
        if (res.status === 403){
          console.log('Wrong Password')
          return <p>Wrong Password </p>
        }
      })
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
                placeholder='Enter your unique username!'
              />
            </Form.Group>

            <Form.Group controlId='passwordForm'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={e => setPassword(e.target.value)}
                type='password'
                placeholder='Enter your password!'
              />
            </Form.Group>
            <Button
              onClick={loginUser}
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

export default Login;