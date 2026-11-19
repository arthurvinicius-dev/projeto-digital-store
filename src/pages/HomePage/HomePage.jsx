import Gallery from '../../components/Gallery'
import ProductListing from '../../components/ProductListing'
import Section from '../../components/Section'
import { homeSlides } from '../../data/homeSlides'
import { products } from '../../data/products'
import styles from './HomePage.module.css'

export default function HomePage() {
  return (
    <>
      <h1 className="visually-hidden">Home</h1>
      <Gallery
        images={homeSlides}
        width="1440"
        height="681"
        className={styles.gallery}
      />
      <div className={`container ${styles.content}`}>
        <Section title="Coleções em destaque" titleAlign="center">
          <p>Seção com o título centralizado.</p>
        </Section>
        <Section
          title="Produtos em alta"
          link={{ text: 'Ver todos', href: '/products' }}
        >
          <ProductListing products={products.slice(0, 8)} />
        </Section>
      </div>
    </>
  )
}
