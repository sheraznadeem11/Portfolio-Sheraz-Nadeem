import { navigation } from '../../data/portfolio.js';

function Navigation() {
  return (
    <nav
      className="site-nav flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-sm text-muted xl:absolute xl:left-1/2 xl:-translate-x-1/2 xl:flex-nowrap"
      aria-label="Main navigation"
    >
      {navigation.map(([label, href]) => (
        <a
          className="rounded-full border border-transparent px-3 py-2 font-medium transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-brand/20 hover:bg-white hover:text-brand hover:shadow-card active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2"
          href={href}
          key={href}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}

export default Navigation;
