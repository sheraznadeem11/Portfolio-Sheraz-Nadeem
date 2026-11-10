import FooterAbout from './FooterAbout.jsx';
import FooterLinkColumn from './FooterLinkColumn.jsx';
import FooterNewsletter from './FooterNewsletter.jsx';
import FooterRecentPosts from './FooterRecentPosts.jsx';
import { footerQuickLinks, footerServices } from '../../data/footer.js';

function SiteFooter() {
  const quickLinks = footerQuickLinks.map(([label, href]) => ({ label, href }));
  const serviceLinks = footerServices.map((label) => ({ label, href: '#services' }));

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <FooterNewsletter />
        <div className="footer-divider" />
        <div className="footer-content-grid">
          <FooterAbout />
          <FooterLinkColumn
            title="Quick Links"
            labelledBy="footer-quick-links-title"
            links={quickLinks}
          />
          <FooterLinkColumn
            title="Consulting"
            labelledBy="footer-consulting-title"
            links={serviceLinks}
          />
          <FooterRecentPosts />
        </div>
        <div className="footer-copyright">
          © {new Date().getFullYear()} Sheraz Nadeem AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
