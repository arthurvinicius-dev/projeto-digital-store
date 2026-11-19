import { useState } from 'react'
import styles from './ProductOptions.module.css'

export default function ProductOptions({
  options,
  radius,
  shape = 'square',
  type = 'text',
  className = '',
}) {
  const [selected, setSelected] = useState(null)

  return (
    <div className={`${styles.options} ${className}`.trim()}>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className={`${styles.option} ${styles[shape]}`}
          style={{
            borderRadius: shape === 'square' ? radius : undefined,
            backgroundColor: type === 'color' ? option : undefined,
          }}
          aria-label={type === 'color' ? option : undefined}
          aria-pressed={option === selected}
          onClick={() => setSelected(option)}
        >
          {type === 'text' && option}
        </button>
      ))}
    </div>
  )
}
