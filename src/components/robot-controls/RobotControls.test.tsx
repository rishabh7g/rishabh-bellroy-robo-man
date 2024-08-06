import { fireEvent, render, screen } from '@testing-library/react';
import { RobotControls } from 'src/components/robot-controls/RobotControls';

describe('RobotControls Component', () => {
  test('renders all buttons', () => {
    render(
      <RobotControls
        moveForward={() => {}}
        turnLeft={() => {}}
        turnRight={() => {}}
      />
    );

    // Check if all buttons are rendered
    expect(screen.getByText(/Move Forward/i)).toBeInTheDocument();
    expect(screen.getByText(/Turn Left/i)).toBeInTheDocument();
    expect(screen.getByText(/Turn Right/i)).toBeInTheDocument();
  });

  test('calls moveForward when Move Forward button is clicked', () => {
    const moveForwardMock = jest.fn();
    render(
      <RobotControls
        moveForward={moveForwardMock}
        turnLeft={() => {}}
        turnRight={() => {}}
      />
    );

    fireEvent.click(screen.getByText(/Move Forward/i));
    expect(moveForwardMock).toHaveBeenCalledTimes(1);
  });

  test('calls turnLeft when Turn Left button is clicked', () => {
    const turnLeftMock = jest.fn();
    render(
      <RobotControls
        moveForward={() => {}}
        turnLeft={turnLeftMock}
        turnRight={() => {}}
      />
    );

    fireEvent.click(screen.getByText(/Turn Left/i));
    expect(turnLeftMock).toHaveBeenCalledTimes(1);
  });

  test('calls turnRight when Turn Right button is clicked', () => {
    const turnRightMock = jest.fn();
    render(
      <RobotControls
        moveForward={() => {}}
        turnLeft={() => {}}
        turnRight={turnRightMock}
      />
    );

    fireEvent.click(screen.getByText(/Turn Right/i));
    expect(turnRightMock).toHaveBeenCalledTimes(1);
  });
});
