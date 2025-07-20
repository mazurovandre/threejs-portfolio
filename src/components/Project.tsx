import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectDetails from './ProjectDetails';
import { ProjectProps } from '../types';

const Project: React.FC<ProjectProps> = ({
  id,
  title,
  description,
  subDescription,
  href,
  logo,
  image,
  tags,
  setPreview,
}) => {
  const { t } = useTranslation();
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <div
        className='flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0'
        onMouseEnter={() =>
          setPreview({
            id,
            title,
            description,
            subDescription,
            href,
            logo,
            image,
            tags,
          })
        }
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <p className='text-2xl'>{title}</p>
          <div className='flex gap-5 mt-2 text-sand'>
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className='flex items-center gap-1 cursor-pointer hover-animation'
        >
          {t('projects.readMore')}
          <img src='assets/arrow-right.svg' className='w-5' alt='arrow right' />
        </button>
      </div>
      <div className='bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full' />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
