import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="container">
      <h1>Página não encontrada</h1>
      <Link to="/">Voltar para a Home</Link>
    </div>
  )
}
