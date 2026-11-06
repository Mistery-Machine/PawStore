import './Footer.css';

const SOCIAL_LINKS = [
  { label: 'Instagram', href: '#' },
  { label: 'Facebook', href: '#' },
];

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copy">© PawStore 2025 — Todos los derechos reservados.</p>
      <ul className="footer__links">
        {SOCIAL_LINKS.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;