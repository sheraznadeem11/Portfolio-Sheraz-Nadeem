const contactIcons = {
  linkedin: (
    <>
      <path d="M5.2 8.5v10" />
      <path d="M5.2 5.3v.1" />
      <path d="M9.5 18.5v-5.3a3 3 0 0 1 6 0v5.3" />
      <path d="M9.5 12.2v6.3" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M19.2 11.6a7.1 7.1 0 0 1-10.5 6.2L5 19l1.2-3.5a7.1 7.1 0 1 1 13-3.9Z" />
      <path d="M9 9.2c.4 2 1.8 3.4 3.8 4.1" />
      <path d="m9.1 9.1.8-.9m2.8 5.1.9-.8" />
    </>
  ),
  website: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M4.5 12h15" />
      <path d="M12 4c2.1 2.2 3.1 4.9 3.1 8s-1 5.8-3.1 8c-2.1-2.2-3.1-4.9-3.1-8S9.9 6.2 12 4Z" />
    </>
  ),
  facebook: (
    <path d="M14.2 20v-7h2.4l.4-2.8h-2.8V8.4c0-.8.3-1.4 1.4-1.4h1.5V4.5c-.7-.1-1.4-.2-2.2-.2-2.2 0-3.7 1.3-3.7 3.8v2.1H8.8V13h2.4v7" />
  ),
};

function TeamContactLinks({ contacts = [], isAccessible }) {
  if (contacts.length === 0) return null;

  return (
    <nav className="team-contact-links" aria-label="Team member contact links">
      {contacts.map(({ type, href, label, isDemo }) => (
        <a
          className="team-contact-link"
          href={href}
          key={`${type}-${href}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={isDemo ? `${label} (demo link)` : label}
          title={isDemo ? `${label} — demo link; update in portfolio.js` : label}
          tabIndex={isAccessible ? 0 : -1}
          data-demo-link={isDemo || undefined}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            {contactIcons[type]}
          </svg>
        </a>
      ))}
    </nav>
  );
}

export default TeamContactLinks;
