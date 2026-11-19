import ProductCard from '../ProductCard'
import styles from './ProductListing.module.css'

export default function ProductListing({ products }) {
  return (
    <ul className={styles.list}>
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard {...product} />
        </li>
      ))}
    </ul>
  )
}
