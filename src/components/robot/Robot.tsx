import React from 'react';
import ArrowUrl from 'src/assets/arrow.png';
import LogoUrl from 'src/assets/logo.png';
import 'src/components/robot/Robot.css';
import { Direction } from 'src/types/types';

interface RobotProps {
  direction: Direction;
  className?: string;
}

export const Robot = ({ direction, className }: RobotProps) => {
  const robotDirectionClass = `robot__arrow robot__arrow--${direction.toLowerCase()}`;
  return (
    <div className={`robot ${className}`}>
      <img src={LogoUrl} alt='logo' className='robot__logo' />
      <img src={ArrowUrl} alt='arrow' className={robotDirectionClass} />
    </div>
  );
};
