import { RobotSimulator } from 'src/components/robot-simiulator/RobotSimulator';
import 'src/App.css';

export const App = () => {
  return (
    <div className='app'>
      <h1 className='app__heading'>Bell RoyBot Simulator</h1>
      <RobotSimulator />
    </div>
  );
};
