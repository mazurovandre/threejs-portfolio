import { twMerge } from 'tailwind-merge';
import { MarqueeProps } from '../types';

interface ExtendedMarqueeProps extends MarqueeProps {
  reverse?: boolean;
  pauseOnHover?: boolean;
  vertical?: boolean;
  repeat?: number;
}

export default function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: ExtendedMarqueeProps) {
  return (
    <div
      {...props}
      className={twMerge(
        `group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)] ${
          vertical ? 'flex-col' : 'flex-row'
        }`,
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={twMerge(
              'flex shrink-0 justify-around [gap:var(--gap)]',
              vertical
                ? 'animate-marquee-vertical flex-col'
                : 'animate-marquee flex-row',
              pauseOnHover && 'group-hover:[animation-play-state:paused]',
              reverse && '[animation-direction:reverse]'
            )}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
