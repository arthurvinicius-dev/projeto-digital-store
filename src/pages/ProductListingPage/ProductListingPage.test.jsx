import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ProductListingPage from '.'

test('mostra a ordenação, os filtros e o total de produtos', () => {
  render(
    <MemoryRouter>
      <ProductListingPage />
    </MemoryRouter>,
  )
  expect(
    screen.getByRole('combobox', { name: 'Ordenar por' }),
  ).toBeInTheDocument()
  expect(screen.getAllByRole('group')).toHaveLength(4)
  expect(
    screen.getByRole('heading', { name: '8 produtos' }),
  ).toBeInTheDocument()
})
