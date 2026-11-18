import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Section from '.'

function renderizar(conteudo) {
  render(<MemoryRouter>{conteudo}</MemoryRouter>)
}

test('mostra o título e o conteúdo passado entre as tags', () => {
  renderizar(
    <Section title="Produtos em alta">
      <p>Conteúdo da seção</p>
    </Section>,
  )
  expect(
    screen.getByRole('heading', { name: 'Produtos em alta' }),
  ).toBeInTheDocument()
  expect(screen.getByText('Conteúdo da seção')).toBeInTheDocument()
})

test('sem a prop link, não mostra link', () => {
  renderizar(<Section title="Coleções em destaque" titleAlign="center" />)
  expect(screen.queryByRole('link')).not.toBeInTheDocument()
})

test.each(['/products', 'https://www.digitalcollege.com.br'])(
  'o link aponta para %s',
  (href) => {
    renderizar(<Section title="Produtos" link={{ text: 'Ver todos', href }} />)
    expect(screen.getByRole('link', { name: 'Ver todos' })).toHaveAttribute(
      'href',
      href,
    )
  },
)
