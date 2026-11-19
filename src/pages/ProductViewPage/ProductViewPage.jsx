import { Link, useParams } from 'react-router-dom'
import BuyBox from '../../components/BuyBox'
import Gallery from '../../components/Gallery'
import ProductListing from '../../components/ProductListing'
import ProductOptions from '../../components/ProductOptions'
import Section from '../../components/Section'
import { productDetails } from '../../data/productDetails'
import { productImages } from '../../data/productImages'
import { products } from '../../data/products'
import styles from './ProductViewPage.module.css'

export default function ProductViewPage() {
  const { id } = useParams()
  const product = products.find((item) => item.id === Number(id))

  if (!product) {
    return (
      <div className={`container ${styles.page}`}>
        <h1>Produto não encontrado</h1>
        <Link to="/products">Ver todos os produtos</Link>
      </div>
    )
  }

  const recommended = products.filter((item) => item.id !== product.id)

  return (
    <div key={product.id} className={`container ${styles.page}`}>
      <div className={styles.product}>
        <Gallery
          images={productImages}
          width="700"
          height="570"
          radius="4px"
          showThumbs
        />
        <BuyBox
          name={product.name}
          reference={`${product.category} | REF:${product.id}`}
          stars={productDetails.stars}
          rating={productDetails.rating}
          price={product.price}
          priceDiscount={product.priceDiscount}
          description={productDetails.description}
        >
          <div>
            <p className={styles.optionTitle}>Tamanho</p>
            <ProductOptions
              options={productDetails.sizes}
              radius="4px"
              shape="square"
              type="text"
            />
          </div>
          <div>
            <p className={styles.optionTitle}>Cor</p>
            <ProductOptions
              options={productDetails.colors}
              shape="circle"
              type="color"
            />
          </div>
        </BuyBox>
      </div>

      <Section
        title="Produtos recomendados"
        link={{ text: 'Ver todos', href: '/products' }}
      >
        <ProductListing products={recommended.slice(0, 4)} />
      </Section>
    </div>
  )
}
