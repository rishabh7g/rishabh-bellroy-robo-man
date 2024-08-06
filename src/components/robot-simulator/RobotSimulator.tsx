import { useState } from 'react';
import {
   DIRECTIONS,
   LEFT_ROTATION,
   RIGHT_ROTATION,
} from 'src/constants/direction.constant';
import { Direction, Position } from 'src/types';
import './RobotSimulator.css';

const initialPosition: Position = {
  coordinateX: 0,
  coordinateY: 0,
  direction: Direction.NORTH,
};

export const RobotSimulator = () => {
  const [position, setPosition] = useState<Position>(initialPosition);

  const moveForward = () => {
    setPosition((previousPosition) => {
      const previousDirection = previousPosition.direction;
      const previousCoordinateX = previousPosition.coordinateX;
      const previousCoordinateY = previousPosition.coordinateY;

      switch (previousDirection) {
        case Direction.NORTH:
          return previousCoordinateY < 4
            ? {
                ...previousPosition,
                coordinateY: previousPosition.coordinateY + 1,
              }
            : previousPosition;
        case Direction.SOUTH:
          return previousCoordinateY > 0
            ? {
                ...previousPosition,
                coordinateY: previousPosition.coordinateY - 1,
              }
            : previousPosition;
        case Direction.EAST:
          return previousCoordinateX < 4
            ? {
                ...previousPosition,
                coordinateX: previousPosition.coordinateX + 1,
              }
            : previousPosition;
        case Direction.WEST:
          return previousCoordinateX > 0
            ? {
                ...previousPosition,
                coordinateX: previousPosition.coordinateX - 1,
              }
            : previousPosition;
        default:
          return previousPosition;
      }
    });
  };

  const rotateLeft = () => {
    setPosition((previousPosition) => ({
      ...previousPosition,
      direction:
        DIRECTIONS[
          (DIRECTIONS.indexOf(previousPosition.direction) + LEFT_ROTATION) %
            DIRECTIONS.length
        ],
    }));
  };

  const rotateRight = () => {
    setPosition((previousPosition) => ({
      ...previousPosition,
      direction:
        DIRECTIONS[
          (DIRECTIONS.indexOf(previousPosition.direction) + RIGHT_ROTATION) %
            DIRECTIONS.length
        ],
    }));
  };

  return (
    <div className='App'>
      <h1>Robot Simulator</h1>
      <p>Current Direction {position.direction}</p>
      <div className='grid'>
        {[...Array(5)].map((_, rowIndex) => (
          <div key={rowIndex} className='row'>
            {[...Array(5)].map((_, colIndex) => (
              <div
                key={colIndex}
                className={`cell ${
                  position.coordinateX === colIndex &&
                  position.coordinateY === rowIndex
                    ? 'robot'
                    : ''
                }`}
              ></div>
            ))}
          </div>
        ))}
      </div>
      <div className='controls'>
        <button onClick={moveForward}>Move Forward</button>
        <button onClick={rotateLeft}>Rotate Left</button>
        <button onClick={rotateRight}>Rotate Right</button>
      </div>
    </div>
  );
};
