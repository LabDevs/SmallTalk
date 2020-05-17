import React from 'react'
import { render, screen } from '@testing-library/react'
import Login from '../components/Login'

describe('render Login Component', () => {
  test('expect Username to be in a label ', () => {
    render(<Login />)
    const el = screen.getByText('Username')
    expect(el).toHaveTextContent('Username')
  })
  test('expect Password to be in a label', () => {
    render(<Login />)
    const el = screen.getByText('Password')
    expect(el).toHaveTextContent('Password')
  })
})
