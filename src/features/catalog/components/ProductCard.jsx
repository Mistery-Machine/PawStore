import formatPrice from '../../../utils/formatPrice';
import './ProductCard.css';

function ProductCard({ product, onViewDetails }) {
  return (
    <article className="product-card">
      <img
        className="product-card__image"
        src={product.imagen}
        alt={product.nombre}
      />
      <div className="product-card__body">
        <h3 className="product-card__name">{product.nombre}</h3>
        <p className="product-card__price">{formatPrice(product.precio)}</p>
        <p className="product-card__category">{product.categoria}</p>
        <button
          type="button"
          className="product-card__button"
          onClick={() => onViewDetails(product)}
        >
          Ver detalles
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
