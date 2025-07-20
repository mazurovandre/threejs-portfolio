import { OrbitingCircles } from './OrbitingCircles';
import { IconProps } from '../types';

export function Frameworks() {
  const skills = [
    'auth0',
    'blazor',
    'cplusplus',
    'csharp',
    'css3',
    'dotnet',
    'dotnetcore',
    'git',
    'html5',
    'javascript',
    'microsoft',
    'react',
    'sqlite',
    'tailwindcss',
    'vitejs',
    'wordpress',
  ];
  return (
    <div className='relative flex h-[15rem] w-full flex-col items-center justify-center'>
      <OrbitingCircles className='' iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles
        className=''
        iconSize={25}
        radius={100}
        reverse
        speed={2}
      >
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
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
