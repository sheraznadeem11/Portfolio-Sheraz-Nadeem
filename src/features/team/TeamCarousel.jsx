import { useCallback, useEffect, useRef, useState } from 'react';
import IconButton from '../../components/common/IconButton.jsx';
import { team } from '../../data/portfolio.js';
import useReducedMotion from '../../hooks/useReducedMotion.js';
import TeamMemberCard from './TeamMemberCard.jsx';

const AUTOPLAY_DELAY = 4500;

const carouselTeam = [
  ...team.slice(-2),
  ...team,
  ...team.slice(0, 2),
];

function TeamCarousel() {
  const reducedMotion = useReducedMotion();
  const stageRef = useRef(null);
  const [trackStart, setTrackStart] = useState(1);
  const [slideDistance, setSlideDistance] = useState(0);
  const [hasMeasured, setHasMeasured] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDocumentVisible, setIsDocumentVisible] = useState(true);
  const [isMobileLayout, setIsMobileLayout] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const shouldAutoplay =
    hasMeasured && !reducedMotion && !isHovered && isDocumentVisible && !isAnimating;
  const activeSlideIndex = trackStart + 1;
  const transformIndex = trackStart + (isMobileLayout ? 1 : 0);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return undefined;

    const measureCarousel = () => {
      const slide = stage.querySelector('.team-slide');
      const track = stage.querySelector('.team-carousel-track');
      if (!slide || !track) return;

      const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
      setSlideDistance(slide.getBoundingClientRect().width + gap);
      setIsMobileLayout(window.matchMedia('(max-width: 900px)').matches);
      if (!hasMeasured) {
        setHasMeasured(true);
        window.requestAnimationFrame(() => setTransitionEnabled(true));
      }
    };

    measureCarousel();
    const resizeObserver = new ResizeObserver(measureCarousel);
    resizeObserver.observe(stage);
    window.addEventListener('resize', measureCarousel);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', measureCarousel);
    };
  }, [hasMeasured]);

  useEffect(() => {
    const updateVisibility = () => setIsDocumentVisible(!document.hidden);
    updateVisibility();
    document.addEventListener('visibilitychange', updateVisibility);
    return () => document.removeEventListener('visibilitychange', updateVisibility);
  }, []);

  const moveSlide = useCallback((direction) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTrackStart((index) => index + direction);
  }, [isAnimating]);

  useEffect(() => {
    if (!shouldAutoplay) return undefined;

    const timer = window.setInterval(() => moveSlide(1), AUTOPLAY_DELAY);
    return () => window.clearInterval(timer);
  }, [moveSlide, shouldAutoplay]);

  const handleTransitionEnd = (event) => {
    if (event.target !== event.currentTarget || event.propertyName !== 'transform') {
      return;
    }

    if (trackStart === 0 || trackStart === team.length + 1) {
      setTransitionEnabled(false);
      setTrackStart(trackStart === 0 ? team.length : 1);
      window.requestAnimationFrame(() => setTransitionEnabled(true));
    }

    setIsAnimating(false);
  };

  const trackOffset = slideDistance * transformIndex;

  return (
    <div
      className="team-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Meet my expert team"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsHovered(false);
      }}
    >
      <div className="team-carousel-stage" ref={stageRef} aria-live={shouldAutoplay ? 'off' : 'polite'}>
        <div
          className={`team-carousel-track ${
            transitionEnabled && hasMeasured ? '' : 'is-instant'
          }`}
          style={{ transform: `translate3d(-${trackOffset}px, 0, 0)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {carouselTeam.map((member, index) => {
            const isClone = index < 2 || index >= team.length + 2;
            const isActive = index === activeSlideIndex;
            const isAccessible = !isClone && (!isMobileLayout || isActive);

            return (
            <TeamMemberCard
              key={`${index}-${member.name}`}
              member={member}
              isActive={isActive}
              isAccessible={isAccessible}
            />
            );
          })}
        </div>
      </div>

      <IconButton
        className="team-carousel-arrow team-carousel-arrow-previous"
        onClick={() => moveSlide(-1)}
        aria-label="Show previous team member"
        disabled={isAnimating}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 12H5m0 0 7 7m-7-7 7-7" />
        </svg>
      </IconButton>
      <IconButton
        className="team-carousel-arrow team-carousel-arrow-next"
        onClick={() => moveSlide(1)}
        aria-label="Show next team member"
        disabled={isAnimating}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 12h14m0 0-7-7m7 7-7 7" />
        </svg>
      </IconButton>
    </div>
  );
}

export default TeamCarousel;
