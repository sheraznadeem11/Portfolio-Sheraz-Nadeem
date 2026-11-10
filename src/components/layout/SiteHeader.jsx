import Navigation from './Navigation.jsx';

function SiteHeader() {
  return (
    <header className="site-header container mx-auto flex max-w-page flex-col items-center gap-4 px-4 py-7 xl:flex-row xl:justify-start">
      <a className="text-3xl font-extrabold tracking-[0.08em] text-ink/80" href="#top">
        SHERAZ
      </a>
      <Navigation />
    </header>
  );
}

export default SiteHeader;
