import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, useLocation } from 'react-router-dom'
import SearchBar from '.'

function UrlAtual() {
  const { pathname, search } = useLocation()
  return <p data-testid="url">{pathname + search}</p>
}

function renderizar() {
  render(
    <MemoryRouter>
      <SearchBar />
      <UrlAtual />
    </MemoryRouter>,
  )
  return screen.getByRole('textbox', { name: 'Pesquisar produto' })
}

test('Enter leva para /products com o filtro', async () => {
  const campo = renderizar()
  await userEvent.type(campo, 'microondas{Enter}')
  expect(screen.getByTestId('url')).toHaveTextContent(
    '/products?filter=microondas',
  )
})

test('clicar na lupa também busca, e o espaço vira %20', async () => {
  const campo = renderizar()
  await userEvent.type(campo, 'tenis de corrida')
  await userEvent.click(screen.getByRole('button', { name: 'Buscar' }))
  expect(screen.getByTestId('url')).toHaveTextContent(
    '/products?filter=tenis%20de%20corrida',
  )
})

test('busca vazia leva para /products sem filtro', async () => {
  renderizar()
  await userEvent.click(screen.getByRole('button', { name: 'Buscar' }))
  expect(screen.getByTestId('url')).toHaveTextContent(/^\/products$/)
})
