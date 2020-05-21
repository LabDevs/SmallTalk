import React from 'react'
import { Form } from 'react-bootstrap'
import { FormField, TextInput, Button, Anchor } from 'grommet'

const Login = () => {
  return (
    <div>
      <Form action='/api/login' method='post'>
        <FormField label='Username'>
          <TextInput
            type='text'
            placeholder='Enter your username!'
            name='username'
          />
        </FormField>

        <FormField label='Password'>
          <TextInput
            type='password'
            placeholder='Enter your password!'
            name='password'
          />
        </FormField>

        <Button primary type='submit' label='Submit' />
      </Form>

      <Anchor href='/register'>Haven't made an account yet?</Anchor>
    </div>
  )
}

export default Login
