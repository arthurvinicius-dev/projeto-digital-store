import { Link } from 'react-router-dom'
import styles from './Information.module.css'

export default function Information({ title, informations }) {
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        {informations.map((information) => (
          <li key={information.text}>
            <Link to={information.link} className={styles.link}>
              {information.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
