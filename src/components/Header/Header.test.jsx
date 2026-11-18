import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Header from '.'

test('tem logo, busca, Cadastre-se, Entrar, carrinho e navegação', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  )

  expect(screen.getByRole('link', { name: 'Digital Store' })).toHaveAttribute(
    'href',
    '/',
  )
  expect(screen.getByRole('search')).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'Cadastre-se' })).toHaveAttribute(
    'href',
    '/cadastro',
  )
  expect(screen.getByRole('link', { name: 'Entrar' })).toHaveAttribute(
    'href',
    '/login',
  )
  expect(
    screen.getByRole('img', { name: 'Carrinho de compras' }),
  ).toBeInTheDocument()
  expect(
    screen.getByRole('navigation', { name: 'Principal' }),
  ).toBeInTheDocument()
})
