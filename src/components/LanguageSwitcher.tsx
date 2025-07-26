import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = () => {
    const nextLanguage = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(nextLanguage);
  };

  return (
    <div className='flex items-center gap-2'>
      <button
        onClick={handleLanguageChange}
        className='relative cursor-pointer inline-flex h-6 w-16 items-center rounded-full bg-gray-700 p-1'
      >
        <div className='absolute inset-0 flex items-center justify-between px-2 text-xs font-medium text-white'>
          <span className='z-0'>{i18n.language === 'en' ? 'RU' : ' '}</span>
          <span className='z-0'>{i18n.language === 'en' ? ' ' : 'EN'}</span>
        </div>
        <div
          className='relative inline-flex h-4 w-4 transform rounded-full bg-white transition-transform focus:outline-none ring-2 ring-[#3B1935] ring-offset-2'
          style={{
            transform:
              i18n.language === 'en' ? 'translateX(40px)' : 'translateX(0px)',
          }}
        />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
