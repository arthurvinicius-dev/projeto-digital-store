import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from '.'

test('mostra o texto e é do tipo "button" por padrão', () => {
  render(<Button>Entrar</Button>)
  const botao = screen.getByRole('button', { name: 'Entrar' })
  expect(botao).toHaveAttribute('type', 'button')
})

test('chama o onClick quando clicado', async () => {
  const aoClicar = vi.fn()
  render(<Button onClick={aoClicar}>Comprar</Button>)
  await userEvent.click(screen.getByRole('button', { name: 'Comprar' }))
  expect(aoClicar).toHaveBeenCalledTimes(1)
})

test('desabilitado não chama o onClick', async () => {
  const aoClicar = vi.fn()
  render(
    <Button disabled onClick={aoClicar}>
      Comprar
    </Button>,
  )
  const botao = screen.getByRole('button', { name: 'Comprar' })
  expect(botao).toBeDisabled()
  await userEvent.click(botao)
  expect(aoClicar).not.toHaveBeenCalled()
})
