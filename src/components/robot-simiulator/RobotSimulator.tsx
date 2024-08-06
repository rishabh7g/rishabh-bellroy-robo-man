import { RobotControls } from 'src/components/robot-controls/RobotControls';
import { RobotPlayground } from 'src/components/robot-playground/RobotPlayground';
import { useRobotSimulatorManagement } from 'src/components/robot-simiulator/RobotSimulator.management';
import './RobotSimulator.css';

export const RobotSimulator = () => {
  const { position, moveForward, rotateLeft, rotateRight } =
    useRobotSimulatorManagement();

  return (
    <div className='simulator'>
      <RobotControls
        moveForward={moveForward}
        turnLeft={rotateLeft}
        turnRight={rotateRight}
      />
      <RobotPlayground
        coordinateX={position.coordinateX}
        coordinateY={position.coordinateY}
        direction={position.direction}
      />
      <p className='simulator__text'>Current direction: {position.direction}</p>
    </div>
  );
};
