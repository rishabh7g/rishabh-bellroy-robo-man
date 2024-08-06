import { fn } from '@storybook/test';
import { RobotControls as RobotControlsUI } from 'src/components/robot-controls/RobotControls';

export default {
  title: 'UI/RobotControls',
  component: RobotControlsUI,
  tags: ['autodocs'],
  args: { moveForward: fn(), turnLeft: fn(), turnRight: fn() },
};

export const Robot_Controls = {};
