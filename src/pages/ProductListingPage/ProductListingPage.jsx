import FilterGroup from '../../components/FilterGroup'
import { filters } from '../../data/filters'

export default function ProductListingPage() {
  return (
    <div className="container">
      <h1>Produtos</h1>
      {filters.map((filter) => (
        <FilterGroup key={filter.title} {...filter} />
      ))}
    </div>
  )
}
