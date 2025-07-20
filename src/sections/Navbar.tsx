import { useState } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';

function Navigation() {
  const { t } = useTranslation();

  return (
    <ul className='nav-ul'>
      <li className='nav-li'>
        <a className='nav-link' href='#home'>
          {t('nav.home')}
        </a>
      </li>
      <li className='nav-li'>
        <a className='nav-link' href='#about'>
          {t('nav.about')}
        </a>
      </li>
      <li className='nav-li'>
        <a className='nav-link' href='#work'>
          {t('nav.projects')}
        </a>
      </li>
      <li className='nav-li'>
        <a className='nav-link' href='#contact'>
          {t('nav.contact')}
        </a>
      </li>
    </ul>
  );
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40'>
      <div className='mx-auto c-space max-w-7xl'>
        <div className='flex items-center justify-between py-2 sm:py-0'>
          <a
            href='/'
            className='text-xl font-bold transition-colors text-neutral-400 hover:text-white'
          >
            Ali
          </a>
          <div className='flex items-center gap-4'>
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden'
            >
              <img
                src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'}
                className='w-6 h-6'
                alt='toggle'
              />
            </button>
          </div>
          <nav className='hidden sm:flex'>
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className='block overflow-hidden text-center sm:hidden'
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: '100vh' }}
          transition={{ duration: 1 }}
        >
          <nav className='pb-5'>
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
