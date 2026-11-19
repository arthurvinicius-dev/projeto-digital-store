import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

test.each([
  ['/', 'Home'],
  ['/products', 'Produtos'],
  ['/produtos', 'Produtos'],
  ['/product/1', 'Jordan 1 - Masculino'],
  ['/product/999', 'Produto não encontrado'],
  ['/rota-que-nao-existe', 'Página não encontrada'],
])('a rota %s mostra a página "%s"', (rota, titulo) => {
  render(
    <MemoryRouter initialEntries={[rota]}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: titulo })).toBeInTheDocument()
})
