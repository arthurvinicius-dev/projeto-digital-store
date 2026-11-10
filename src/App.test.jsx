import { render, screen } from '@testing-library/react'
import App from './App'

test('mostra o título da loja', () => {
  render(<App />)
  expect(
    screen.getByRole('heading', { name: 'Digital Store' }),
  ).toBeInTheDocument()
})
