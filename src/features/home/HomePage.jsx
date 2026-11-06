import './HomePage.css';

function HomePage({ onViewProducts }) {
  return (
    <section className="home">
      <h1 className="home__title">Bienvenido a PawStore</h1>
      <p>Somos una tienda dedicada a ofrecer productos de calidad para tus mascotas.</p>
      <p>Explora nuestro catálogo para encontrar camas, juguetes, accesorios y más.</p>
      <button type="button" className="home__button" onClick={onViewProducts}>
        Ver productos
      </button>
      <p className="home__note">
        Esta es la página principal de la aplicación. Más adelante aquí se podrán mostrar productos destacados.
      </p>
    </section>
  );
}

export default HomePage;