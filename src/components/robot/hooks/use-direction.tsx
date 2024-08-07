import { useEffect, useState, useMemo } from 'react';
import { Direction } from 'src/types/types';

export const useDirection = (initialDirection: Direction) => {
  const [currentDirection, setCurrentDirection] =
    useState<Direction>(initialDirection);
  const [previousDirection, setPreviousDirection] =
    useState<Direction>(initialDirection);

  useEffect(() => {
    if (initialDirection !== currentDirection) {
      setPreviousDirection(currentDirection);
      setCurrentDirection(initialDirection);
    }
  }, [initialDirection, currentDirection]);

  const directionClasses = useMemo(() => {
    const currentClass = `robot__arrow--${currentDirection.toLowerCase()}`;
    const animationClass =
      previousDirection === currentDirection
        ? ''
        : `robot__arrow--animate-${previousDirection.toLowerCase()}-to-${currentDirection.toLowerCase()}`;
    return {
      currentClass,
      animationClass,
    };
  }, [currentDirection, previousDirection]);

  return directionClasses;
};
