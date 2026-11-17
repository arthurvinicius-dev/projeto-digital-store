import { render, screen } from '@testing-library/react'
import Logo from '.'
import { expect } from 'vitest'

test('Logo dark 253x44', () => {
  render(<Logo />)
  const logo = screen.getByRole('img', { name: 'Digital Store' })
  expect(logo.getAttribute('src')).toContain('logo-header')
  expect(logo).toHaveAttribute('width', '253')
  expect(logo).toHaveAttribute('height', '44')
})

test('variant="light" logo light', () => {
  render(<Logo variant="light" />)
  const logo = screen.getByRole('img', { name: 'Digital Store' })
  expect(logo.getAttribute('src')).toContain('logo-footer')
})
