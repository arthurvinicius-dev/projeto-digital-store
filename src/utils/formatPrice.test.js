import { formatPrice } from './formatPrice'

test.each([
  [200, 'R$\u00a0200,00'],
  [149.9, 'R$\u00a0149,90'],
  [1234.5, 'R$\u00a01.234,50'],
])('formatPrice(%s) devolve %j', (valor, esperado) => {
  expect(formatPrice(valor)).toBe(esperado)
})
