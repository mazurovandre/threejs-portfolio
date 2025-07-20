import { useState, ChangeEvent, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import Alert from '../components/Alert';
import { Particles } from '../components/Particles';
import { FormData } from '../types';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState<'success' | 'error'>('success');
  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type: 'success' | 'error', message: string) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log('From submitted:', formData);
      await emailjs.send(
        'service_79b0nyj',
        'template_17us8im',
        {
          from_name: formData.name,
          to_name: 'Ali',
          from_email: formData.email,
          to_email: 'AliSanatiDev@gmail.com',
          message: formData.message,
        },
        'pn-Bw_mS1_QQdofuV'
      );
      setIsLoading(false);
      setFormData({ name: '', email: '', message: '' });
      showAlertMessage('success', t('contact.alerts.success'));
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage('error', t('contact.alerts.error'));
    }
  };

  return (
    <section className='relative flex items-center c-space section-spacing'>
      <Particles
        className='absolute inset-0 -z-50'
        quantity={100}
        ease={80}
        color={'#ffffff'}
        refresh
      />
      {showAlert && <Alert type={alertType} message={alertMessage} />}
      <div className='flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary'>
        <div className='flex flex-col items-start w-full gap-5 mb-10'>
          <h2 className='text-heading'>{t('contact.title')}</h2>
          <p className='font-normal text-neutral-400'>
            {t('contact.description')}
          </p>
        </div>
        <form className='w-full' onSubmit={handleSubmit}>
          <div className='mb-5'>
            <label htmlFor='name' className='feild-label'>
              {t('contact.form.fullName')}
            </label>
            <input
              id='name'
              name='name'
              type='text'
              className='field-input field-input-focus'
              placeholder={t('contact.form.placeholders.name')}
              autoComplete='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-5'>
            <label htmlFor='email' className='feild-label'>
              {t('contact.form.email')}
            </label>
            <input
              id='email'
              name='email'
              type='email'
              className='field-input field-input-focus'
              placeholder={t('contact.form.placeholders.email')}
              autoComplete='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-5'>
            <label htmlFor='message' className='feild-label'>
              {t('contact.form.message')}
            </label>
            <textarea
              id='message'
              name='message'
              rows={4}
              className='field-input field-input-focus'
              placeholder={t('contact.form.placeholders.message')}
              autoComplete='message'
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type='submit'
            className='w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation'
          >
            {!isLoading ? t('contact.form.send') : t('contact.form.sending')}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
