import React from 'react'
import { render, screen } from '@testing-library/react'
import Register from '../components/Register'

describe('render Login Component', () => {
  test('expect Username to be in a label ', () => {
    render(<Register />)
    const el = screen.getByText('Username')
    expect(el).toHaveTextContent('Username')
  })
  test('expect Password to be in a label', () => {
    render(<Register />)
    const el = screen.getByText('Password')
    expect(el).toHaveTextContent('Password')
  })
  
  test('expect friendly text to be on the page', () => {
    render(<Register />)
    const el = screen.getByText('You will remain anonymous while using our app :)')
    expect(el).toHaveTextContent('You will remain anonymous while using our app :)')
  })
})
