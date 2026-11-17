import styles from './Button.module.css'

export default function Button({
  variant = 'primary',
  type = 'button',
  className = '',
  children,
  ...props
}) {
  const classes = `${styles.button} ${styles[variant]} ${className}`.trim()

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}
