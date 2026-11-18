import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ProductCard from '.'

function renderizar(props) {
  render(
    <MemoryRouter>
      <ProductCard
        id={1}
        image="/product-thumb-1.jpeg"
        name="K-Swiss V8 - Masculino"
        price={200}
        {...props}
      />
    </MemoryRouter>,
  )
}

test('o card inteiro leva para a página do produto', () => {
  renderizar()
  expect(screen.getByRole('link')).toHaveAttribute('href', '/product/1')
})

test('sem desconto, mostra só o preço, sem nada riscado', () => {
  renderizar()
  expect(screen.getByText('R$ 200,00')).toBeInTheDocument()
  expect(screen.queryByRole('deletion')).not.toBeInTheDocument()
})

test('com desconto, o preço original fica riscado', () => {
  renderizar({ priceDiscount: 100 })
  expect(screen.getByRole('deletion')).toHaveTextContent('R$ 200,00')
  expect(screen.getByText('R$ 100,00')).toBeInTheDocument()
})
