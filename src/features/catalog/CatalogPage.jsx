import ProductCard from './components/ProductCard';
import './CatalogPage.css';

function CatalogPage({ products, onViewDetails }) {
  return (
    <section className="catalog">
      <h1 className="catalog__title">Catálogo de productos</h1>
      {products.length === 0 ? (
        <p className="catalog__empty">
          No hay productos disponibles por el momento.
        </p>
      ) : (
        <div className="catalog__grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default CatalogPage;