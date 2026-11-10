import FooterSectionTitle from './FooterSectionTitle.jsx';

function FooterLinkColumn({ title, links, labelledBy, className = '' }) {
  return (
    <nav className={`footer-column ${className}`.trim()} aria-labelledby={labelledBy}>
      <FooterSectionTitle>
        <span id={labelledBy}>{title}</span>
      </FooterSectionTitle>
      <ul className="footer-link-list">
        {links.map(({ label, href }) => (
          <li key={label}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default FooterLinkColumn;
