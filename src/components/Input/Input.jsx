import styles from './Input.module.css'

export default function Input({ label, className = '', ...props }) {
  return (
    <label className={`${styles.field} ${className}`.trim()}>
      {label && <span className={styles.label}>{label}</span>}
      <input className={styles.input} {...props} />
    </label>
  )
}
