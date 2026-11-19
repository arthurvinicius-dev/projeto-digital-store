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
