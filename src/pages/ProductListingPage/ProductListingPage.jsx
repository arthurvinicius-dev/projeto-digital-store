import FilterGroup from '../../components/FilterGroup'
import ProductListing from '../../components/ProductListing'
import Section from '../../components/Section'
import { filters } from '../../data/filters'
import { products } from '../../data/products'
import styles from './ProductListingPage.module.css'

export default function ProductListingPage() {
  return (
    <div className={`container ${styles.page}`}>
      <h1 className="visually-hidden">Produtos</h1>

      <aside className={styles.sidebar}>
        <label className={styles.sort}>
          Ordenar por
          <select className={styles.select}>
            <option value="menor-preco">Menor preço</option>
            <option value="maior-preco">Maior preço</option>
          </select>
        </label>

        <div className={styles.filters}>
          <p className={styles.filtersTitle}>Filtrar por</p>
          <hr className={styles.divider} />
          {filters.map((filter) => (
            <FilterGroup key={filter.title} {...filter} />
          ))}
        </div>
      </aside>

      <Section title={`${products.length} produtos`}>
        <ProductListing products={products} />
      </Section>
    </div>
  )
}
