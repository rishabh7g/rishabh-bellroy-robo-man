import React from 'react';
import LogoUrl from 'src/assets/logo.png';
import ArrowUrl from 'src/assets/moving-arrow.png';
import { useDirection } from 'src/components/robot/hooks/use-direction';
import 'src/components/robot/Robot.css';
import { Direction } from 'src/types/types';

interface RobotProps {
  direction: Direction;
  className?: string;
}

export const Robot = ({ direction, className }: RobotProps) => {
  const { animationClass, currentClass } = useDirection(direction);
  const rotationClass = `robot__arrow ${currentClass} ${animationClass}`.trim();

  return (
    <div className={`robot ${className}`}>
      <img src={LogoUrl} alt='logo' className='robot__logo' />
      <img src={ArrowUrl} alt='arrow' className={rotationClass} />
    </div>
  );
};
