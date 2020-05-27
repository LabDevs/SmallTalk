import React from 'react'
import { Form } from 'react-bootstrap'
import { FormField, TextInput, Button, Anchor, Heading } from 'grommet'
const Register = () => {
  return (
    <div className='loginForm'>
      <Heading color='#304258'>Register</Heading>

      <Form action='/api/register' method='post'>
        <FormField required className='loginField' label='Username'>
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

      <Anchor href='/login' color='#6ab8e0'>
        Already have an account?
      </Anchor>
    </div>
  )
}

export default Register
