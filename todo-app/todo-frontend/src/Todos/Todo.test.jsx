import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Todo from './Todo'

test('renders text', () => {
  render(<Todo todo={{ text: 'this is a test todo', done: false }} />)
  expect(screen.getByText('this is a test todo')).toBeDefined()
})