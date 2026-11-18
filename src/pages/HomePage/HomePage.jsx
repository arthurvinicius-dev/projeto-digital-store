import Section from '../../components/Section'

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <Section
        title="Produtos em alta"
        link={{ text: 'Ver todos', href: '/products' }}
      >
        <p>Os produtos entram aqui na Tarefa 12.</p>
      </Section>
      <Section title="Coleções em destaque" titleAlign="center">
        <p>Seção com o título centralizado.</p>
      </Section>
    </>
  )
}
