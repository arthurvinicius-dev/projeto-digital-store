import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Input from '.'

test('a label dá nome ao campo', () => {
  render(<Input label="Login *" placeholder="Insira seu login ou email" />)
  const campo = screen.getByRole('textbox', { name: 'Login *' })
  expect(campo).toHaveAttribute('placeholder', 'Insira seu login ou email')
})

test('sem label, o aria-label dá nome ao campo e dá para digitar', async () => {
  render(<Input aria-label="Pesquisar produto" />)
  const campo = screen.getByRole('textbox', { name: 'Pesquisar produto' })
  await userEvent.type(campo, 'tênis')
  expect(campo).toHaveValue('tênis')
})

test('repassa o type para o input', () => {
  render(<Input label="Senha *" type="password" />)
  expect(screen.getByLabelText('Senha *')).toHaveAttribute('type', 'password')
})
