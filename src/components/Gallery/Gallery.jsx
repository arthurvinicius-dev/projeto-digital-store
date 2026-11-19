import { useState } from 'react'
import arrowLeft from '../../assets/arrow-left.svg'
import arrowRight from '../../assets/arrow-right.svg'
import styles from './Gallery.module.css'

export default function Gallery({
  images,
  width,
  height,
  radius,
  showThumbs = false,
  className = '',
}) {
  const [current, setCurrent] = useState(0)
  const isFirst = current === 0
  const isLast = current === images.length - 1

  const sizes = {
    '--width': `${width}px`,
    '--ratio': `${width} / ${height}`,
    '--gallery-radius': radius,
  }

  return (
    <div className={`${styles.gallery} ${className}`.trim()} style={sizes}>
      <div className={styles.slide}>
        <div
          className={styles.track}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={image.src}
              src={image.src}
              alt={`Imagem ${index + 1} de ${images.length}`}
              aria-hidden={index !== current}
              className={styles.image}
            />
          ))}
        </div>

        <button
          type="button"
          className={`${styles.arrow} ${styles.prev}`}
          aria-label="Imagem anterior"
          disabled={isFirst}
          onClick={() => setCurrent(current - 1)}
        >
          <img src={arrowLeft} alt="" width={14} height={24} />
        </button>
        <button
          type="button"
          className={`${styles.arrow} ${styles.next}`}
          aria-label="Próxima imagem"
          disabled={isLast}
          onClick={() => setCurrent(current + 1)}
        >
          <img src={arrowRight} alt="" width={14} height={24} />
        </button>
      </div>

      {showThumbs && (
        <div className={styles.thumbs}>
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              className={styles.thumb}
              aria-label={`Mostrar imagem ${index + 1}`}
              aria-current={index === current}
              onClick={() => setCurrent(index)}
            >
              <img src={image.src} alt="" className={styles.image} />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
