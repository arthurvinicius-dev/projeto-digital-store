import { Link } from 'react-router-dom'
import arrowIcon from '../../assets/arrow-link.svg'
import styles from './Section.module.css'

export default function Section({
  title,
  titleAlign = 'left',
  link,
  className = '',
  children,
}) {
  return (
    <section className={`${styles.section} ${className}`.trim()}>
      <div className={`${styles.header} ${styles[titleAlign]}`}>
        <h2 className={styles.title}>{title}</h2>
        {link && (
          <Link to={link.href} className={styles.link}>
            {link.text}
            <img src={arrowIcon} alt="" width={24} height={24} />
          </Link>
        )}
      </div>
      {children}
    </section>
  )
}
