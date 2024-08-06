import { Direction } from 'src/types/types';
import { Robot as RobotUI } from './Robot';

export default {
  title: 'UI/Robot',
  component: RobotUI,
  tags: ['autodocs'],
};

export const Robot = {
  args: {
    direction: Direction.NORTH,
  },
};

export const RobotWithDirectionWest = {
  args: {
    direction: Direction.WEST,
  },
};

export const RobotWithDirectionSouth = {
  args: {
    direction: Direction.SOUTH,
  },
};

export const RobotWithDirectionEast = {
  args: {
    direction: Direction.EAST,
  },
};
