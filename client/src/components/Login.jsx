import React from 'react'
import { Form } from 'react-bootstrap'
import { FormField, TextInput, Button, Anchor, Heading } from 'grommet'

const Login = () => {
  return (
    <div className='loginForm'>
      <Heading color='#304258'>Login</Heading>

      <Form action='/api/login' method='post'>
        <FormField required className='loginField' label='Username'>
          <TextInput
            type='text'
            placeholder='Enter your username!'
            name='username'
          />
        </FormField>

        <FormField required className='loginField' label='Password'>
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
          color='#6AB8E0'
        />
      </Form>

      <Anchor color='#6AB8E0' href='/register'>
        Haven't made an account yet?
      </Anchor>
    </div>
  )
}

export default Login
