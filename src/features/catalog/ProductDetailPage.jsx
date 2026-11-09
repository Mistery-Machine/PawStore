import formatPrice from '../../utils/formatPrice';
import './ProductDetailPage.css';

function ProductDetailPage({ product, onBack }) {
  return (
    <section className="detail">
      <img
        className="detail__image"
        src={product.imagen}
        alt={product.nombre}
      />
      <h1 className="detail__name">{product.nombre}</h1>
      <p className="detail__price">{formatPrice(product.precio)}</p>
      <p className="detail__category">{product.categoria}</p>
      <p className="detail__description">{product.descripcion}</p>
      <p className="detail__note">
        Más adelante aquí se podrá agregar este producto al carrito y completar
        la compra.
      </p>
      <button type="button" className="detail__button" onClick={onBack}>
        Volver al catálogo
      </button>
    </section>
  );
}

export default ProductDetailPage;