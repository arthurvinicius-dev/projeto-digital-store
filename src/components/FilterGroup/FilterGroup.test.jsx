import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FilterGroup from '.'

const options = [
  { text: 'Options 1', value: 'opt1' },
  { text: 'Options 2' },
  { text: 'Options 3', value: 'opt3' },
]

test('mostra o título e um checkbox para cada opção', () => {
  render(<FilterGroup title="Marca" options={options} />)
  expect(screen.getByRole('group', { name: 'Marca' })).toBeInTheDocument()
  expect(screen.getAllByRole('checkbox')).toHaveLength(3)
})

test('usa o value quando existe e o text quando não existe', () => {
  render(<FilterGroup title="Marca" options={options} />)
  expect(screen.getByRole('checkbox', { name: 'Options 1' })).toHaveAttribute(
    'value',
    'opt1',
  )
  expect(screen.getByRole('checkbox', { name: 'Options 2' })).toHaveAttribute(
    'value',
    'Options 2',
  )
})

test('com inputType radio, só uma opção fica marcada', async () => {
  render(<FilterGroup title="Estado" inputType="radio" options={options} />)
  const primeira = screen.getByRole('radio', { name: 'Options 1' })
  const segunda = screen.getByRole('radio', { name: 'Options 2' })
  await userEvent.click(primeira)
  await userEvent.click(segunda)
  expect(primeira).not.toBeChecked()
  expect(segunda).toBeChecked()
})
