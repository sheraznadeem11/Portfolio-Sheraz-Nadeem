import { statistics } from '../../data/portfolio.js';

function StatisticsSection() {
  return (
    <section className="mx-auto max-w-page px-4" aria-label="Portfolio statistics">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {statistics.map(([number, label]) => (
          <div
            className="stat-card rounded-[22px] border border-black/5 bg-white/70 px-5 py-7 text-center shadow-sm"
            data-reveal
            key={label}
          >
            <strong className="block text-4xl font-extrabold tracking-[-0.06em] text-brand-dark">
              {number}
            </strong>
            <span className="font-semibold text-muted">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatisticsSection;
