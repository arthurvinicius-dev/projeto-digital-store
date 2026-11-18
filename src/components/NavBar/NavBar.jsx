import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'

const links = [
  { to: '/', text: 'Home' },
  { to: '/products', text: 'Produtos' },
  { to: '/categorias', text: 'Categorias' },
  { to: '/meus-pedidos', text: 'Meus Pedidos' },
]

export default function NavBar() {
  return (
    <nav aria-label="Principal">
      <ul className={styles.list}>
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
