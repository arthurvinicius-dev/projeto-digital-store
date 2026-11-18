import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../Input'
import searchIcon from '../../assets/search.svg'
import styles from './SearchBar.module.css'

export default function SearchBar({ className = '' }) {
  const [termo, setTermo] = useState('')
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    const busca = termo.trim()
    navigate(
      busca ? `/products?filter=${encodeURIComponent(busca)}` : '/products',
    )
  }

  return (
    <form
      role="search"
      className={`${styles.search} ${className}`.trim()}
      onSubmit={handleSubmit}
    >
      <Input
        aria-label="Pesquisar produto"
        placeholder="Pesquisar produto..."
        value={termo}
        onChange={(event) => setTermo(event.target.value)}
      />
      <button type="submit" className={styles.button} aria-label="Buscar">
        <img src={searchIcon} alt="" width={24} height={24} />
      </button>
    </form>
  )
}
