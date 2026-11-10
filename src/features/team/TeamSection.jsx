import SectionHeading from '../../components/common/SectionHeading.jsx';
import TeamCarousel from './TeamCarousel.jsx';

function TeamSection() {
  return (
    <section id="team" className="team-section mx-auto max-w-page scroll-mt-8 px-4 pt-24">
      <SectionHeading eyebrow="Great Team" centered>
        Meet My Expert Team
      </SectionHeading>
      <TeamCarousel />
    </section>
  );
}

export default TeamSection;
