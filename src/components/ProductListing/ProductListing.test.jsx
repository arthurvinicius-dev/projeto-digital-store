import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ProductListing from '.'

const products = [
  { id: 1, name: 'Tênis A', image: '/a.jpeg', price: 200, priceDiscount: 100 },
  { id: 2, name: 'Tênis B', image: '/b.jpeg', price: 50 },
]

function renderizar() {
  render(
    <MemoryRouter>
      <ProductListing products={products} />
    </MemoryRouter>,
  )
}

test('mostra um card para cada produto do array', () => {
  renderizar()
  expect(screen.getAllByRole('listitem')).toHaveLength(2)
})

test('cada card recebe os dados do seu produto', () => {
  renderizar()
  const card = screen.getByRole('link', { name: /Tênis B/ })
  expect(card).toHaveAttribute('href', '/product/2')
  expect(card).toHaveTextContent('R$ 50,00')
})
