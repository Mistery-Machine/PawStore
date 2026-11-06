import { VIEWS } from '../../../config/views';
import './Header.css';

const NAV_ITEMS = [
  { label: 'Inicio', view: VIEWS.HOME, activeViews: [VIEWS.HOME] },
  {
    label: 'Productos',
    view: VIEWS.CATALOG,
    activeViews: [VIEWS.CATALOG, VIEWS.PRODUCT_DETAIL],
  },
  { label: 'Contacto', view: VIEWS.CONTACT, activeViews: [VIEWS.CONTACT] },
];

function Header({ currentView, onNavigate }) {
  return (
    <header className="header">
      <span className="header__brand">PawStore</span>
      <nav className="header__nav">
        {NAV_ITEMS.map((item) => {
          const isActive = item.activeViews.includes(currentView);

          return (
            <button
              key={item.label}
              type="button"
              className={
                isActive ? 'header__link header__link--active' : 'header__link'
              }
              aria-current={isActive ? 'page' : undefined}
              onClick={() => onNavigate(item.view)}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    </header>
  );
}

export default Header;