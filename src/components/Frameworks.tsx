import { OrbitingCircles } from './OrbitingCircles';
import { IconProps } from '../types';

const SKILL_SET = [
  'antdesign',
  'css3',
  'git',
  'github',
  'html5',
  'javascript',
  'jest',
  'nodejs',
  'npm',
  'react',
  'redux',
  'tailwindcss',
  'threejs',
  'typescript',
  'vitejs',
  'vuejs',
  'webpack',
  'mui',
  'nest',
  'nextjs',
];

const renderSkills = () => {
  const shuffleArray = () => {
    const shuffled = [...SKILL_SET];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  return shuffleArray().map((skill, index) => (
    <Icon key={index} src={`assets/logos/${skill}.svg`} />
  ));
};

export function Frameworks() {
  return (
    <div className='relative flex h-[15rem] w-full flex-col items-center justify-center'>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {renderSkills()}
      </OrbitingCircles>
      <OrbitingCircles iconSize={40}>{renderSkills()}</OrbitingCircles>
      <OrbitingCircles iconSize={50} radius={240} reverse speed={4}>
        {renderSkills()}
      </OrbitingCircles>
      <OrbitingCircles
        className='hidden md:block'
        iconSize={70}
        radius={320}
        speed={10}
      >
        {renderSkills()}
      </OrbitingCircles>
    </div>
  );
}

const Icon: React.FC<IconProps> = ({ src }) => (
  <img
    src={src}
    className='duration-200 rounded-sm hover:scale-110'
    alt='skill icon'
  />
);
