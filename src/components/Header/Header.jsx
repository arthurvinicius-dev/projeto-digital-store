import { Link } from 'react-router-dom'
import Logo from '../Logo'
import NavBar from '../NavBar'
import SearchBar from '../SearchBar'
import miniCart from '../../assets/mini-cart.svg'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.top}`}>
        <Link to="/">
          <Logo />
        </Link>
        <SearchBar className={styles.search} />
        <Link to="/cadastro" className={styles.signup}>
          Cadastre-se
        </Link>
        <Link to="/login" className={styles.login}>
          Entrar
        </Link>
        <img
          src={miniCart}
          alt="Carrinho de compras"
          width={20}
          height={21}
          className={styles.cart}
        />
      </div>
      <div className="container">
        <NavBar />
      </div>
    </header>
  )
}
