import { useState } from 'react';
import { VIEWS } from './config/views';
import products from './data/products.json';
import Header from './shared/components/Header/Header';
import Footer from './shared/components/Footer/Footer';
import { HomePage } from './features/home';
import { CatalogPage, ProductDetailPage } from './features/catalog';

function App() {
  const [currentView, setCurrentView] = useState(VIEWS.HOME);
  const [selectedProduct, setSelectedProduct] = useState(null);

  function handleViewDetails(product) {
    setSelectedProduct(product);
    setCurrentView(VIEWS.PRODUCT_DETAIL);
  }

  return (
    <>
      <Header currentView={currentView} onNavigate={setCurrentView} />
      <main>
        {currentView === VIEWS.HOME && (
          <HomePage onViewProducts={() => setCurrentView(VIEWS.CATALOG)} />
        )}
        {currentView === VIEWS.CATALOG && (
          <CatalogPage products={products} onViewDetails={handleViewDetails} />
        )}
        {currentView === VIEWS.PRODUCT_DETAIL && (
          <ProductDetailPage
            product={selectedProduct}
            onBack={() => setCurrentView(VIEWS.CATALOG)}
          />
        )}
        {currentView === VIEWS.CONTACT && (
          <p className="contact__placeholder">Página de contacto próximamente.</p>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;