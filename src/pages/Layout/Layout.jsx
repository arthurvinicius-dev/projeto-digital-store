import Footer from '../../components/Footer'
import Header from '../../components/Header'
import styles from './Layout.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={`container ${styles.main}`}>{children}</main>
      <Footer />
    </div>
  )
}
