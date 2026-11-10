import ButtonLink from '../../components/common/ButtonLink.jsx';

function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-page scroll-mt-8 px-4 pt-24">
      <div
        className="flex flex-col items-start justify-between gap-6 rounded-[22px] border border-black/5 bg-gradient-to-br from-brand/10 to-sky-300/10 p-6 shadow-card sm:p-8 lg:flex-row lg:items-center"
        data-reveal
      >
        <div>
          <span className="mb-4 inline-block text-xs font-extrabold uppercase tracking-[0.15em] text-brand">
            Contact With Me
          </span>
          <h2 className="max-w-[700px] text-[clamp(1.8rem,3vw,2.8rem)] font-extrabold leading-tight tracking-[-0.06em]">
            Whether you have a question, collaboration idea, or just want to connect —
            feel free to reach out.
          </h2>
        </div>
        <ButtonLink className="shrink-0" href="mailto:hello@sheraznadeem.com">
          Get in Touch
        </ButtonLink>
      </div>
    </section>
  );
}

export default ContactSection;
