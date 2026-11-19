import ProductListing from '../../components/ProductListing'
import Section from '../../components/Section'
import { products } from '../../data/products'

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <Section
        title="Produtos em alta"
        link={{ text: 'Ver todos', href: '/products' }}
      >
        <ProductListing products={products.slice(0, 8)} />
      </Section>
      <Section title="Coleções em destaque" titleAlign="center">
        <p>Seção com o título centralizado.</p>
      </Section>
    </>
  )
}
