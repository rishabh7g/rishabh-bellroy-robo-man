import { RobotPlayground as RobotPlaygroundUI } from 'src/components/robot-playground/RobotPlayground';
import { Direction } from 'src/types/types';

export default {
  title: 'UI/RobotPlayground',
  component: RobotPlaygroundUI,
  tags: ['autodocs'],
};

export const Robot_Playground = {
  args: {
    coordinateX: 0,
    coordinateY: 0,
    direction: Direction.NORTH,
  },
};
