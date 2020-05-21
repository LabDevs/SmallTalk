import React from 'react'
import { Form } from 'react-bootstrap'
import { FormField, TextInput, Button, Anchor } from 'grommet'

const Login = () => {
  return (
    <div>
      <Form action='/api/register' method='post'>
        <FormField label='Username'>
          <TextInput
            type='text'
            placeholder='Enter a username!'
            name='username'
          />
        </FormField>

        <FormField label='Email'>
          <TextInput type='email' placeholder='Enter an email!' name='email' />
        </FormField>

        <FormField label='Password'>
          <TextInput
            type='password'
            placeholder='Enter a password!'
            name='password'
          />
        </FormField>

        <Button primary type='submit' label='Submit' />
      </Form>

      <Anchor href='/login'>Have an account?</Anchor>
    </div>
  )
}

export default Login
