import { useState } from 'react';
import { RobotControls } from 'src/components/robot-controls/RobotControls';
import { RobotPlayground } from 'src/components/robot-simulator/RobotPlayground';
import {
  DIRECTIONS,
  LEFT_ROTATION,
  RIGHT_ROTATION,
} from 'src/constants/direction.constant';
import { Direction, Position, TurnDirection } from 'src/types/types';
import './App.css';

const initialPosition: Position = {
  coordinateX: 0,
  coordinateY: 0,
  direction: Direction.NORTH,
};

export const App = () => {
  const [position, setPosition] = useState<Position>(initialPosition);

  const moveForward = () => {
    setPosition((previousPosition) => {
      const updatedPosition =
        _getUpdatedPositionAfterMoveForward(previousPosition);
      return updatedPosition;
    });
  };

  const rotateLeft = () => {
    const newDirection = _changeDirection(
      position.direction,
      TurnDirection.LEFT
    );
    setPosition((previousPosition) => ({
      ...previousPosition,
      direction: newDirection,
    }));
  };

  const rotateRight = () => {
    const newDirection = _changeDirection(
      position.direction,
      TurnDirection.RIGHT
    );
    setPosition((previousPosition) => ({
      ...previousPosition,
      direction: newDirection,
    }));
  };

  return (
    <div className='App'>
      <RobotPlayground
        coordinateX={position.coordinateX}
        coordinateY={position.coordinateY}
      />
      <RobotControls
        moveForward={moveForward}
        turnLeft={rotateLeft}
        turnRight={rotateRight}
      />
    </div>
  );
};

const _changeDirection = (
  oldDirection: Direction,
  turnDirection: TurnDirection
) => {
  const directionIndex = DIRECTIONS.indexOf(oldDirection);
  const newDirectionIndex =
    turnDirection === TurnDirection.LEFT
      ? (directionIndex + LEFT_ROTATION) % DIRECTIONS.length
      : (directionIndex + RIGHT_ROTATION) % DIRECTIONS.length;
  return DIRECTIONS[newDirectionIndex];
};

const _getUpdatedPositionAfterMoveForward = (oldPosition: Position) => {
  const oldDirection = oldPosition.direction;
  const oldCoordinateX = oldPosition.coordinateX;
  const oldCoordinateY = oldPosition.coordinateY;

  switch (oldDirection) {
    case Direction.NORTH:
      return oldCoordinateY < 4
        ? {
            ...oldPosition,
            coordinateY: oldCoordinateY + 1,
          }
        : oldPosition;
    case Direction.SOUTH:
      return oldCoordinateY > 0
        ? {
            ...oldPosition,
            coordinateY: oldCoordinateY - 1,
          }
        : oldPosition;
    case Direction.EAST:
      return oldCoordinateX < 4
        ? {
            ...oldPosition,
            coordinateX: oldCoordinateX + 1,
          }
        : oldPosition;
    case Direction.WEST:
      return oldCoordinateX > 0
        ? {
            ...oldPosition,
            coordinateX: oldCoordinateX - 1,
          }
        : oldPosition;
    default:
      return oldPosition;
  }
};
