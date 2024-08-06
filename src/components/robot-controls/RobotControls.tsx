import DirectionsRunOutlinedIcon from '@mui/icons-material/DirectionsRunOutlined';
import TurnSlightLeftOutlinedIcon from '@mui/icons-material/TurnSlightLeftOutlined';
import TurnSlightRightOutlinedIcon from '@mui/icons-material/TurnSlightRightOutlined';
import { Button } from 'src/components/button/Button';
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
      <h2 className='controls__heading'>Control the robot</h2>
      <div className='controls__move'>
        <Button
          onClick={moveForward}
          Icon={<DirectionsRunOutlinedIcon />}
          label='Move Forward'
        />
      </div>
      <div className='controls__turn'>
        <Button
          onClick={turnLeft}
          Icon={<TurnSlightLeftOutlinedIcon />}
          label='Turn Left'
        />
        <Button
          onClick={turnRight}
          Icon={<TurnSlightRightOutlinedIcon />}
          label='Turn Right'
        />
      </div>
    </div>
  );
};
