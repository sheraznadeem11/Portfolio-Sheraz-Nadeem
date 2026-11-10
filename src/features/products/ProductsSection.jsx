import SectionHeading from '../../components/common/SectionHeading.jsx';
import { products } from '../../data/portfolio.js';

function ProductCard({ title, description, theme }) {
  return (
    <article
      className="portfolio-card overflow-hidden rounded-[22px] border border-black/5 bg-white/80 shadow-card"
      data-reveal
    >
      <div className={`h-[185px] bg-gradient-to-br ${theme}`} aria-hidden="true" />
      <div className="p-5">
        <h3 className="mb-2 text-xl font-bold tracking-tight">{title}</h3>
        <p className="text-muted">{description}</p>
      </div>
    </article>
  );
}

function ProductsSection() {
  return (
    <section id="products" className="mx-auto max-w-page scroll-mt-8 px-4 pt-24">
      <SectionHeading eyebrow="Ventures & Products">
        AI Products Built for Real Business Impact
      </SectionHeading>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </div>
    </section>
  );
}

export default ProductsSection;
