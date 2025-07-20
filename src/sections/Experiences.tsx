import { Timeline } from '../components/Timeline';
import { experiences } from '../constants';

const Experiences: React.FC = () => {
  return (
    <section className='c-space section-spacing' id='work'>
      <Timeline data={experiences} />
    </section>
  );
};

export default Experiences;
