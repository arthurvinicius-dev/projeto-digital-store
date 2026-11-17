import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Choice from '.'

test('é um checkbox por padrão, com a label e o value', () => {
  render(<Choice label="Adidas" value="adidas" />)
  const checkbox = screen.getByRole('checkbox', { name: 'Adidas' })
  expect(checkbox).toHaveAttribute('value', 'adidas')
})

test('clicar no texto marca e desmarca o checkbox', async () => {
  render(<Choice label="Adidas" />)
  const checkbox = screen.getByRole('checkbox', { name: 'Adidas' })
  await userEvent.click(screen.getByText('Adidas'))
  expect(checkbox).toBeChecked()
  await userEvent.click(screen.getByText('Adidas'))
  expect(checkbox).not.toBeChecked()
})

test('radios com o mesmo name: só um fica marcado', async () => {
  render(
    <>
      <Choice type="radio" name="estado" label="Novo" />
      <Choice type="radio" name="estado" label="Usado" />
    </>,
  )
  const novo = screen.getByRole('radio', { name: 'Novo' })
  const usado = screen.getByRole('radio', { name: 'Usado' })
  await userEvent.click(novo)
  await userEvent.click(usado)
  expect(usado).toBeChecked()
  expect(novo).not.toBeChecked()
})
