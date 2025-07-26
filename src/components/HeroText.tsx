import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import TypewriterText from './TypewriterText';

const ANIMATION_DELAY = 1000;

const HeroText = () => {
  const { t, i18n } = useTranslation();
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFirstLoad(false);
    }, ANIMATION_DELAY);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isFirstLoad) {
      setIsFirstLoad(false);
    }
  }, [i18n.language, isFirstLoad]);

  return (
    <div className='z-10 mt-20 text-center md:mt-40 md:text-left bg-clip-text w-1/2'>
      <div className='flex-col flex space-y-4 md:space-y-4'>
        <TypewriterText
          key={`greeting-${i18n.language}`}
          className='text-4xl font-medium md:text-7xl'
          text={t('hero.greeting')}
          speed={20}
          delay={isFirstLoad ? ANIMATION_DELAY : 0}
        />
        <TypewriterText
          key={`description-${i18n.language}`}
          className='text-2xl font-medium text-neutral-300'
          text={t('hero.description')}
          speed={30}
          delay={isFirstLoad ? ANIMATION_DELAY : 0}
        />
      </div>
    </div>
  );
};

export default HeroText;
