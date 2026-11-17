import Logo from './components/Logo'

export default function App() {
  return (
    <main className="container">
      <h1>Digital Store</h1>
      <Logo />
      <div style={{ background: 'var(--dark-gray)', padding: 16 }}>
        <Logo variant="light" />
      </div>
    </main>
  )
}
