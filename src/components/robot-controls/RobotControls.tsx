import './RobotControls.css';

interface RobotControlsProps {
  moveForward: () => void;
  turnLeft: () => void;
  turnRight: () => void;
}

export const RobotControls = ({
  moveForward,
  turnLeft,
  turnRight,
}: RobotControlsProps) => {
  return (
    <div className='controls'>
      <button onClick={moveForward}>Move Forward</button>
      <button onClick={turnLeft}>Turn Left</button>
      <button onClick={turnRight}>Turn Right</button>
    </div>
  );
};
