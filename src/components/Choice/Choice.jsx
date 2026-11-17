import styles from './Choice.module.css'

export default function Choice({
  type = 'checkbox',
  label,
  className = '',
  ...props
}) {
  return (
    <label className={`${styles.choice} ${className}`.trim()}>
      <input
        type={type}
        className={`${styles.input} ${styles[type]}`}
        {...props}
      />
      <span className={styles.checkmark} />
      {label}
    </label>
  )
}
