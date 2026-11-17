import Button from './components/Button'
import Logo from './components/Logo'

export default function App() {
  return (
    <main className="container">
      <h1>Digital Store</h1>
      <Logo />
      <div style={{ background: 'var(--dark-gray)', padding: 16 }}>
        <Logo variant="light" />
      </div>

      <div style={{ display: 'flex', gap: 16, marginTop: 24 }}>
        <Button>Primary</Button>
        <Button variant="secondary">
          Secondary
        </Button>
        <Button variant="shop">
          Comprar
        </Button>
      </div>
      <div style={{ display: 'flex', gap: 16, marginTop: 16}}>
        <Button>Primary</Button>
        <Button variant="secondary" disabled>
          Secondary
        </Button>
        <Button variant="shop" disabled>
          Comprar
        </Button>
      </div>
    </main>
  )
}
