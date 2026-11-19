import Section from '../../components/Section'
import ProductCard from '../../components/ProductCard'

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <Section
        title="Produtos em alta"
        link={{ text: 'Ver todos', href: '/products' }}
      >
        <div style={{ display: 'flex', gap: 24 }}>
          <ProductCard
            id={1}
            image="/product-thumb-1.jpeg"
            category="Tênis"
            name="K-Swiss V8 - Masculino"
            price={200}
            priceDiscount={100}
          />
          <ProductCard
            id={2}
            image="/product-thumb-2.jpeg"
            category="Tênis"
            name="K-Swiss V8 - Masculino"
            price={200}
          />
        </div>
      </Section>
      <Section title="Coleções em destaque" titleAlign="center">
        <p>Seção com o título centralizado.</p>
      </Section>
    </>
  )
}
