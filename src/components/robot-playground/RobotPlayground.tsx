import React from 'react';
import { Robot } from 'src/components/robot/Robot';
import { TOTAL_GRID_SIZE } from 'src/constants/direction.constant';
import { Direction } from 'src/types/types';
import './RobotPlayground.css';

interface RobotSimulatorProps {
  coordinateX: number;
  coordinateY: number;
  direction: Direction;
}

export const RobotPlayground = ({
  coordinateX,
  coordinateY,
  direction,
}: RobotSimulatorProps) => {
  const isCellHaveRobot = (x: number, y: number) => {
    return coordinateX === x && coordinateY === y;
  };
  return (
    <div className='grid'>
      {[...Array(TOTAL_GRID_SIZE)].map((_, rowIndex) => (
        <div key={rowIndex} className='row'>
          {[...Array(TOTAL_GRID_SIZE)].map((_, colIndex) => (
            <div
              key={colIndex}
              className={`cell ${isCellHaveRobot(colIndex, rowIndex) ? 'cell__robot' : ''}`}
            >
              <Robot
                direction={direction}
                className={
                  isCellHaveRobot(colIndex, rowIndex)
                    ? 'cell__robot--visible'
                    : 'cell__robot--invisible'
                }
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
