import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ProductOptions from '.'

test('type text mostra o texto de cada opção', () => {
  render(<ProductOptions options={['39', '40', '41']} />)
  expect(screen.getAllByRole('button')).toHaveLength(3)
  expect(screen.getByRole('button', { name: '40' })).toBeInTheDocument()
})

test('type color usa a opção como cor de fundo', () => {
  render(<ProductOptions options={['#000']} shape="circle" type="color" />)
  expect(screen.getByRole('button', { name: '#000' })).toHaveStyle({
    backgroundColor: '#000',
  })
})

test('clicar numa opção marca só ela', async () => {
  render(<ProductOptions options={['39', '40']} />)
  const primeira = screen.getByRole('button', { name: '39' })
  const segunda = screen.getByRole('button', { name: '40' })
  await userEvent.click(primeira)
  await userEvent.click(segunda)
  expect(primeira).toHaveAttribute('aria-pressed', 'false')
  expect(segunda).toHaveAttribute('aria-pressed', 'true')
})
