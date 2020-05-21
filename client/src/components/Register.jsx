import React from 'react'
import { Form } from 'react-bootstrap'
import { FormField, TextInput, Button, Anchor } from 'grommet'

const Login = () => {
  return (
    <div className='loginForm'>
      <h1>Register</h1>

      <Form action='/api/login' method='post'>
        <FormField className='loginField' label='Username'>
          <TextInput
            type='text'
            placeholder='Enter your username!'
            name='username'
          />
        </FormField>

        <FormField className='loginField' label='Email'>
          <TextInput
            type='email'
            placeholder='Enter your email!'
            name='email'
          />
        </FormField>

        <FormField className='loginField' label='Password'>
          <TextInput
            type='password'
            placeholder='Enter your password!'
            name='password'
          />
        </FormField>

        <Button
          margin={{ left: 'large', bottom: 'medium', top: 'small' }}
          primary
          type='submit'
          label='Submit'
        />
      </Form>

      <Anchor href='/login'>Already have an account?</Anchor>
    </div>
  )
}

export default Login
