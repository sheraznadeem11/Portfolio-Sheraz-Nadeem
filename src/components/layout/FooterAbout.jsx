import FooterSectionTitle from './FooterSectionTitle.jsx';
import { footerAbout, footerSocialLinks } from '../../data/footer.js';

function FooterAbout() {
  return (
    <section className="footer-column" aria-labelledby="footer-about-title">
      <FooterSectionTitle>
        <span id="footer-about-title">About Me</span>
      </FooterSectionTitle>
      <p className="footer-about-copy">{footerAbout}</p>
      <nav className="footer-social-links" aria-label="Social profiles">
        {footerSocialLinks.map(({ label, shortLabel, href }) => (
          <a
            className="footer-social-link"
            href={href}
            key={label}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            {shortLabel}
          </a>
        ))}
      </nav>
    </section>
  );
}

export default FooterAbout;
