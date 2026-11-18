import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Information from '.'

test('mostra o título e um link para cada item do array', () => {
  const informations = [
    { text: 'Sobre Drip Store', link: '/about' },
    { text: 'Blog', link: '/blog' },
  ]

  render(
    <MemoryRouter>
      <Information title="Informação" informations={informations} />
    </MemoryRouter>,
  )

  expect(
    screen.getByRole('heading', { name: 'Informação' }),
  ).toBeInTheDocument()
  expect(screen.getAllByRole('link')).toHaveLength(2)
  expect(screen.getByRole('link', { name: 'Blog' })).toHaveAttribute(
    'href',
    '/blog',
  )
})
