import { useState } from 'react';
import { VIEWS } from './config/views';
import Header from './shared/components/Header/Header';
import Footer from './shared/components/Footer/Footer';
import { HomePage } from './features/home';

function App() {
  const [currentView, setCurrentView] = useState(VIEWS.HOME);

  return (
    <>
      <Header currentView={currentView} onNavigate={setCurrentView} />
      <main>
        {currentView === VIEWS.HOME && (
          <HomePage onViewProducts={() => setCurrentView(VIEWS.CATALOG)} />
        )}
        {currentView !== VIEWS.HOME && <p>Vista actual: {currentView}</p>}
      </main>
      <Footer />
    </>
  );
}

export default App;