import BuyBox from '../../components/BuyBox'
import Gallery from '../../components/Gallery'
import ProductOptions from '../../components/ProductOptions'
import { productImages } from '../../data/productImages'

export default function ProductViewPage() {
  return (
    <div className="container">
      <h1>Produto</h1>
      <Gallery
        images={productImages}
        width="700"
        height="570"
        radius="4px"
        showThumbs
      />
      <BuyBox
        name="Tênis Nike Revolution 6 Next Nature Masculino"
        reference="Casual | Nike | REF:38416711"
        stars={4.7}
        rating={90}
        price={219}
        priceDiscount={199}
        description="Tênis leve e confortável, feito com materiais reciclados."
      >
        <ProductOptions
          options={['39', '40', '41', '42', '43']}
          radius="4px"
          shape="square"
          type="text"
        />
        <ProductOptions
          options={['#6FEEFF', '#FF6969', '#5E5E5E', '#6D70B7']}
          shape="circle"
          type="color"
        />
      </BuyBox>
    </div>
  )
}
