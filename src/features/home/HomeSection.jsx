import ButtonLink from '../../components/common/ButtonLink.jsx';

function HeroCopy() {
  return (
    <div className="hero-content pt-2 lg:pt-7">
      <h1 className="m-0 text-[clamp(3.2rem,8vw,8rem)] font-extrabold leading-[0.9] tracking-[-0.09em] text-ink/15">
        SHERAZ NADEEM
      </h1>
      <p className="mt-7 max-w-[660px] text-lg text-muted">
        AI expert, entrepreneur, and changemaker empowering businesses through
        innovation, leadership, education, and technology-driven growth for the next
        generation of impact-makers.
      </p>
      <div className="mt-7 flex flex-wrap gap-4">
        <ButtonLink href="#about">Watch My Story</ButtonLink>
        <ButtonLink href="#contact" variant="secondary">Subscribe Now</ButtonLink>
      </div>
    </div>
  );
}

function ProfileImage() {
  return (
    <div className="grid min-h-[360px] place-items-center lg:min-h-[430px]" aria-label="Profile image">
      <div className="profile-wrap relative aspect-[1/1.18] w-full max-w-[370px] overflow-hidden rounded-[28px] border border-black/5 bg-gradient-to-br from-white/90 to-indigo-50/90 p-[18px] shadow-float">
        <img
          className="relative z-[1] h-full w-full rounded-[22px] object-cover"
          src="/assets/sheraz-nadeem.png"
          alt="Sheraz Nadeem, portfolio owner"
        />
      </div>
    </div>
  );
}

function HomeSection() {
  return (
    <section className="mx-auto grid max-w-page items-center gap-12 px-4 pb-12 pt-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14 lg:py-12">
      <HeroCopy />
      <ProfileImage />
    </section>
  );
}

export default HomeSection;
