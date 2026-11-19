import { Link } from 'react-router-dom'
import { formatPrice } from '../../utils/formatPrice'
import styles from './ProductCard.module.css'

export default function ProductCard({
  id,
  image,
  category,
  name,
  price,
  priceDiscount,
}) {
  return (
    <Link to={`/product/${id}`} className={styles.card}>
      <img
        src={image}
        alt=""
        width={292}
        height={321}
        className={styles.image}
      />
      {category && <p className={styles.category}>{category}</p>}
      <p className={styles.name}>{name}</p>
      <p className={styles.prices}>
        {priceDiscount && (
          <del className={styles.oldPrice}>{formatPrice(price)}</del>
        )}
        <span className={styles.price}>
          {formatPrice(priceDiscount ?? price)}
        </span>
      </p>
    </Link>
  )
}
