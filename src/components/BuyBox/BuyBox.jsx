import starIcon from '../../assets/star-icon.svg'
import { formatPrice } from '../../utils/formatPrice'
import Button from '../Button'
import styles from './BuyBox.module.css'

export default function BuyBox({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  className = '',
  children,
}) {
  return (
    <div className={`${styles.buyBox} ${className}`.trim()}>
      <div>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.reference}>{reference}</p>
      </div>

      <div className={styles.review}>
        <span className={styles.stars}>
          {stars}
          <img src={starIcon} alt="" width={12} height={12} />
        </span>
        <span className={styles.rating}>({rating} avaliações)</span>
      </div>

      <p className={styles.prices}>
        <span className={styles.price}>
          {formatPrice(priceDiscount ?? price)}
        </span>
        {priceDiscount && (
          <del className={styles.oldPrice}>{formatPrice(price)}</del>
        )}
      </p>

      <div>
        <h2 className={styles.subtitle}>Descrição do produto</h2>
        <p className={styles.description}>{description}</p>
      </div>

      {children}

      <Button variant="shop" className={styles.buy}>
        Comprar
      </Button>
    </div>
  )
}
