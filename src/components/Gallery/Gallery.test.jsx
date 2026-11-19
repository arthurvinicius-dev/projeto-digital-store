import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Gallery from '.'

const images = [{ src: '/1.jpeg' }, { src: '/2.jpeg' }, { src: '/3.jpeg' }]

function setas() {
  return {
    anterior: screen.getByRole('button', { name: 'Imagem anterior' }),
    proxima: screen.getByRole('button', { name: 'Próxima imagem' }),
  }
}

test('começa na primeira imagem, com a seta da esquerda desabilitada', () => {
  render(<Gallery images={images} />)
  expect(screen.getByRole('img', { name: 'Imagem 1 de 3' })).toBeInTheDocument()
  expect(setas().anterior).toBeDisabled()
  expect(setas().proxima).toBeEnabled()
})

test('a seta da direita avança até a última imagem e então desabilita', async () => {
  render(<Gallery images={images} />)
  await userEvent.click(setas().proxima)
  expect(screen.getByRole('img', { name: 'Imagem 2 de 3' })).toBeInTheDocument()
  expect(
    screen.queryByRole('img', { name: 'Imagem 1 de 3' }),
  ).not.toBeInTheDocument()

  await userEvent.click(setas().proxima)
  expect(screen.getByRole('img', { name: 'Imagem 3 de 3' })).toBeInTheDocument()
  expect(setas().proxima).toBeDisabled()
})

test('a seta da esquerda volta para a imagem anterior', async () => {
  render(<Gallery images={images} />)
  await userEvent.click(setas().proxima)
  await userEvent.click(setas().anterior)
  expect(screen.getByRole('img', { name: 'Imagem 1 de 3' })).toBeInTheDocument()
  expect(setas().anterior).toBeDisabled()
})

test('sem showThumbs, não mostra miniaturas', () => {
  render(<Gallery images={images} />)
  expect(
    screen.queryByRole('button', { name: 'Mostrar imagem 1' }),
  ).not.toBeInTheDocument()
})

test('com showThumbs, mostra uma miniatura por imagem, a primeira marcada', () => {
  render(<Gallery images={images} showThumbs />)
  const miniaturas = screen.getAllByRole('button', { name: /Mostrar imagem/ })
  expect(miniaturas).toHaveLength(3)
  expect(miniaturas[0]).toHaveAttribute('aria-current', 'true')
  expect(miniaturas[1]).toHaveAttribute('aria-current', 'false')
})

test('clicar numa miniatura troca a imagem e a miniatura marcada', async () => {
  render(<Gallery images={images} showThumbs />)
  const terceira = screen.getByRole('button', { name: 'Mostrar imagem 3' })
  await userEvent.click(terceira)
  expect(screen.getByRole('img', { name: 'Imagem 3 de 3' })).toBeInTheDocument()
  expect(terceira).toHaveAttribute('aria-current', 'true')
  expect(setas().proxima).toBeDisabled()
})
