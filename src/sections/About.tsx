import { useTranslation } from 'react-i18next';
import { Globe } from '../components/globe';
import { Frameworks } from '../components/Frameworks';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className='c-space section-spacing pt-20' id='about'>
      <h2 className='text-heading'>{t('about.title')}</h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:auto-rows-[18rem] mt-12'>
        <div className='flex items-end grid-default-color relative overflow-hidden'>
          <img
            src='assets/coding-pov.png'
            className='absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]'
            alt='coding pov'
          />
          <div className='z-10'>
            <p className='headtext'>{t('hero.greeting')}</p>
            <p className='subtext'>{t('hero.description')}</p>
          </div>
          <div className='absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo' />
        </div>
        <div className='grid-black-color relative overflow-hidden'>
          <div className='z-10 w-[50%]'>
            <p className='headtext'>{t('about.timeZone.title')}</p>
            <p className='subtext'>{t('about.timeZone.description')}</p>
          </div>
          <figure className='absolute left-[30%] top-[10%]'>
            <Globe className='' />
          </figure>
        </div>
        <div className='grid-default-color grid-2 relative overflow-hidden'>
          <div className='z-100 w-full md:w-[40%] relative'>
            <p className='headText'>{t('about.techStack.title')}</p>
            <p className='subtext'>{t('about.techStack.description')}</p>
          </div>
          <div className='absolute inset-y-0 md:inset-y-9 w-full h-full start-[0%] md:scale-125 md:start-1/2 top-full md:top-0'>
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
