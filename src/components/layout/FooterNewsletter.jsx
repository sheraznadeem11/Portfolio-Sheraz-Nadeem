import { useState } from 'react';

function FooterNewsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent('Newsletter subscription request');
    const body = encodeURIComponent(`Please add this email to the newsletter: ${email}`);
    window.location.href = `mailto:hello@sheraznadeem.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="footer-newsletter" aria-labelledby="newsletter-title">
      <a className="footer-brand" href="#top" aria-label="Sheraz Nadeem home">
        <span className="footer-brand-mark">S.</span>
        <span className="footer-brand-name">Sheraz Nadeem</span>
      </a>
      <div className="footer-newsletter-copy">
        <h2 id="newsletter-title">Stay Updated</h2>
        <p>Get the latest insights and updates in tech.</p>
      </div>
      <form className="footer-newsletter-form" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="newsletter-email">Email address</label>
        <div className="footer-email-field">
          <input
            id="newsletter-email"
            name="email"
            type="email"
            placeholder="Email Address"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            aria-describedby="newsletter-help"
          />
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3.75 5.75h16.5v12.5H3.75z" />
            <path d="m4.5 7 7.5 5.75L19.5 7" />
          </svg>
        </div>
        <button className="footer-subscribe-button" type="submit">Subscribe</button>
        <span id="newsletter-help" className="sr-only">
          Opens your email app so you can send a subscription request.
        </span>
      </form>
    </section>
  );
}

export default FooterNewsletter;
