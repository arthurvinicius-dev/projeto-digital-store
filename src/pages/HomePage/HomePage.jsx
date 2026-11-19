import Gallery from '../../components/Gallery'
import ProductListing from '../../components/ProductListing'
import Section from '../../components/Section'
import { collections } from '../../data/collections'
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
          <div className={styles.collections}>
            {collections.map((collection) => (
              <img
                key={collection.src}
                src={collection.src}
                alt={collection.alt}
                width={405}
                height={251}
                className={styles.collection}
              />
            ))}
          </div>
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
