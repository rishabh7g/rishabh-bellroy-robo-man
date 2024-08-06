import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { RobotSimulator } from 'src/components/robot-simiulator/RobotSimulator';
import { Direction } from 'src/types/types';

const CURRENT_DIRECTION_TEXT = /Current direction/i;
const MOVE_FORWARED_BUTTON_LABEL = /Move Forward/i;
const TURN_LEFT_BUTTON_LABEL = /Turn Left/i;
const TURN_RIGHT_BUTTON_LABEL = /Turn Right/i;

describe('RobotSimulator', () => {
  test('renders initial state correctly', () => {
    render(<RobotSimulator />);

    expect(screen.getByText(CURRENT_DIRECTION_TEXT)).toHaveTextContent(
      Direction.NORTH
    );
    expect(screen.getByText(MOVE_FORWARED_BUTTON_LABEL)).toBeInTheDocument();
    expect(screen.getByText(TURN_LEFT_BUTTON_LABEL)).toBeInTheDocument();
    expect(screen.getByText(TURN_RIGHT_BUTTON_LABEL)).toBeInTheDocument();
  });

  test('moves forward correctly', () => {
    render(<RobotSimulator />);

    const moveForwardButton = screen.getByText(MOVE_FORWARED_BUTTON_LABEL);
    fireEvent.click(moveForwardButton);
    expect(screen.getByText(CURRENT_DIRECTION_TEXT)).toHaveTextContent(
      Direction.NORTH
    );
  });

  test('rotates left correctly', () => {
    render(<RobotSimulator />);

    const turnLeftButton = screen.getByText(TURN_LEFT_BUTTON_LABEL);
    fireEvent.click(turnLeftButton);
    expect(screen.getByText(CURRENT_DIRECTION_TEXT)).toHaveTextContent(
      Direction.EAST
    );
  });

  test('rotates right correctly', () => {
    render(<RobotSimulator />);

    const turnRightButton = screen.getByText(TURN_RIGHT_BUTTON_LABEL);
    fireEvent.click(turnRightButton);
    expect(screen.getByText(CURRENT_DIRECTION_TEXT)).toHaveTextContent(
      Direction.WEST
    );
  });

  test('moves forward and rotates correctly', () => {
    render(<RobotSimulator />);

    const moveForwardButton = screen.getByText(MOVE_FORWARED_BUTTON_LABEL);
    const turnRightButton = screen.getByText(TURN_RIGHT_BUTTON_LABEL);

    fireEvent.click(moveForwardButton);
    fireEvent.click(turnRightButton);
    fireEvent.click(moveForwardButton);
    expect(screen.getByText(CURRENT_DIRECTION_TEXT)).toHaveTextContent(
      Direction.WEST
    );
  });
});
