import { render, screen } from '@testing-library/react'
import BuyBox from '.'

function renderizar(props) {
  render(
    <BuyBox
      name="Tênis Nike Revolution 6"
      reference="REF:38416711"
      stars={4.7}
      rating={90}
      price={219}
      description="Descrição"
      {...props}
    >
      <p>Opções do produto</p>
    </BuyBox>,
  )
}

test('mostra nome, referência, avaliações, filhos e o botão de compra', () => {
  renderizar()
  expect(
    screen.getByRole('heading', { name: 'Tênis Nike Revolution 6' }),
  ).toBeInTheDocument()
  expect(screen.getByText('REF:38416711')).toBeInTheDocument()
  expect(screen.getByText('(90 avaliações)')).toBeInTheDocument()
  expect(screen.getByText('Opções do produto')).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Comprar' })).toBeInTheDocument()
})

test('sem desconto, mostra só o preço', () => {
  renderizar()
  expect(screen.getByText('R$ 219,00')).toBeInTheDocument()
  expect(screen.queryByRole('deletion')).not.toBeInTheDocument()
})

test('com desconto, o preço original fica riscado', () => {
  renderizar({ priceDiscount: 199 })
  expect(screen.getByText('R$ 199,00')).toBeInTheDocument()
  expect(screen.getByRole('deletion')).toHaveTextContent('R$ 219,00')
})
