import Gallery from '../../components/Gallery'
import { productImages } from '../../data/productImages'

export default function ProductViewPage() {
  return (
    <>
      <h1>Produto</h1>
      <Gallery
        images={productImages}
        width="700"
        height="570"
        radius="4px"
        showThumbs
      />
    </>
  )
}
