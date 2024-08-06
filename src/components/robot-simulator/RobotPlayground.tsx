import './RobotPlayground.css';

interface RobotSimulatorProps {
  coordinateX: number;
  coordinateY: number;
}

export const RobotPlayground = ({
  coordinateX,
  coordinateY,
}: RobotSimulatorProps) => {
  return (
    <div className='grid'>
      {[...Array(5)].map((_, rowIndex) => (
        <div key={rowIndex} className='row'>
          {[...Array(5)].map((_, colIndex) => (
            <div
              key={colIndex}
              className={`cell ${
                coordinateX === colIndex && coordinateY === rowIndex
                  ? 'robot'
                  : ''
              }`}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};
