import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Footer from '.'

function renderizar() {
  render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>,
  )
}

afterEach(() => {
  vi.useRealTimers()
})

test('o ano do copyright vem da data atual', () => {
  vi.useFakeTimers({ toFake: ['Date'] })
  vi.setSystemTime(new Date('2030-06-15'))
  renderizar()
  expect(screen.getByText('© 2030 Digital Store')).toBeInTheDocument()
})

test('as redes sociais abrem em outra aba', () => {
  renderizar()
  const facebook = screen.getByRole('link', { name: 'Facebook' })
  expect(facebook).toHaveAttribute('target', '_blank')
  expect(facebook).toHaveAttribute('rel', 'noopener noreferrer')
})

test('tem as colunas Informação, Categorias e Contato', () => {
  renderizar()
  const titulos = screen.getAllByRole('heading').map((h) => h.textContent)
  expect(titulos).toEqual(['Informação', 'Categorias', 'Contato'])
})
