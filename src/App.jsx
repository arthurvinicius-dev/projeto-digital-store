import Input from './components/Input'
import Choice from './components/Choice'
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
        <Button variant="secondary">Secondary</Button>
        <Button variant="shop">Comprar</Button>
      </div>
      <div style={{ display: 'flex', gap: 16, marginTop: 16 }}>
        <Button disabled>Primary</Button>
        <Button variant="secondary" disabled>
          Secondary
        </Button>
        <Button variant="shop" disabled>
          Comprar
        </Button>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 10,
          marginTop: 24,
        }}
      >
        <Choice label="Adidas" value="adidas" />
        <Choice label="Nike" defaultChecked />
        <Choice type="radio" name="estado" label="Novo" defaultChecked />
        <Choice type="radio" name="estado" label="Usado" />
      </div>
      <div style={{ display: 'grid', gap: 20, maxWidth: 523, marginTop: 24 }}>
        <Input label="Login *" placeholder="Insira seu login ou email" />
        <Input label="Senha *" type="password" placeholder="Insira sua senha" />
        <Input
          aria-label="Pesquisar produto"
          placeholder="Pesquisar produto..."
        />
      </div>
    </main>
  )
}
