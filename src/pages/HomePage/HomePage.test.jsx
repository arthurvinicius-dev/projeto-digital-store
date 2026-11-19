import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import HomePage from '.'

test('mostra as 3 coleções em destaque', () => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>,
  )
  const colecoes = ['Novo drop Supreme', 'Coleção Adidas', 'Novo Beats Bass']
  for (const colecao of colecoes) {
    expect(screen.getByRole('img', { name: colecao })).toBeInTheDocument()
  }
})
