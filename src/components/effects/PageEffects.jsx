import BackgroundClickEffect from './BackgroundClickEffect.jsx';
import Preloader from './Preloader.jsx';
import ScrollToTopButton from './ScrollToTopButton.jsx';

function PageEffects({ loading, onLoadingFinished, reducedMotion }) {
  return (
    <>
      {loading && <Preloader onFinished={onLoadingFinished} />}
      <BackgroundClickEffect />
      <ScrollToTopButton reducedMotion={reducedMotion} />
    </>
  );
}

export default PageEffects;
