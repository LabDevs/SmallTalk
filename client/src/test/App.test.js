import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('render App Component', () => {
  test('expect Dash to be on the page', () => {
    render(<App />)
    const el = screen.getByText('Dash')
    expect(el).toHaveTextContent('Dash')
  })
  test('expect Categories to be on the page', () => {
    render(<App />)
    const el = screen.getByText('Categories')
    expect(el).toHaveTextContent('Categories')
  })
})
