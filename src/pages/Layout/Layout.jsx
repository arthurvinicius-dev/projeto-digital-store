import SearchBar from '../../components/SearchBar'

export default function Layout({ children }) {
  return (
    <>
      <div className="container">
        <SearchBar />
      </div>
      <main className="container">{children}</main>
    </>
  )
}
