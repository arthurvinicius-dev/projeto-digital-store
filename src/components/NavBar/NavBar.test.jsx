import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import NavBar from '.'

function renderizarEm(rota) {
  render(
    <MemoryRouter initialEntries={[rota]}>
      <NavBar />
    </MemoryRouter>,
  )
}

test('mostra os 4 links na ordem do layout', () => {
  renderizarEm('/')
  const textos = screen.getAllByRole('link').map((link) => link.textContent)
  expect(textos).toEqual(['Home', 'Produtos', 'Categorias', 'Meus Pedidos'])
})

test.each([
  ['/', 'Home'],
  ['/products', 'Produtos'],
  ['/products?filter=tenis', 'Produtos'],
])('em %s, só o link "%s" fica ativo', (rota, ativo) => {
  renderizarEm(rota)
  expect(screen.getByRole('link', { current: 'page' })).toHaveTextContent(ativo)
})
