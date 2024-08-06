import React from 'react';
import { render } from '@testing-library/react';
import { RobotPlayground } from 'src/components/robot-playground/RobotPlayground';
import { Direction } from 'src/types/types';

const CELL_ROBOT_CLASS = 'cell__robot';
const CELL_ROBOT_SELECTOR = `.${CELL_ROBOT_CLASS}`;
const ROW_CLASS = 'row';
const CELL_CLASS = 'cell';
const INITIAL_COORDINATE_X = 0;
const INITIAL_COORDINATE_Y = 0;

describe('RobotPlayground Component', () => {
  test('renders a 5x5 grid', () => {
    const { container } = render(
      <RobotPlayground
        coordinateX={INITIAL_COORDINATE_X}
        coordinateY={INITIAL_COORDINATE_Y}
        direction={Direction.NORTH}
      />
    );

    const rows = container.getElementsByClassName(ROW_CLASS);
    expect(rows.length).toBe(5);

    for (let row of rows) {
      const cells = row.getElementsByClassName(CELL_CLASS);
      expect(cells.length).toBe(5);
    }
  });

  test('renders robot at the correct position', () => {
    const coordinateX = 2;
    const coordinateY = 3;

    const { container } = render(
      <RobotPlayground
        coordinateX={coordinateX}
        coordinateY={coordinateY}
        direction={Direction.NORTH}
      />
    );

    const robotCell = container.querySelector(CELL_ROBOT_SELECTOR);
    expect(robotCell).toBeInTheDocument();

    const rows = container.getElementsByClassName(ROW_CLASS);
    const robotRow = rows[coordinateY];
    const robotCells = robotRow.getElementsByClassName(CELL_CLASS);
    const expectedRobotCell = robotCells[coordinateX];
    expect(expectedRobotCell).toHaveClass(CELL_ROBOT_CLASS);
  });

  test('does not render robot in incorrect positions', () => {
    const coordinateX = 2;
    const coordinateY = 3;
    const { container } = render(
      <RobotPlayground
        coordinateX={coordinateX}
        coordinateY={coordinateY}
        direction={Direction.NORTH}
      />
    );
    const rows = container.getElementsByClassName(ROW_CLASS);
    for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
      const cells = rows[rowIndex].getElementsByClassName(CELL_CLASS);
      for (let colIndex = 0; colIndex < cells.length; colIndex++) {
        if (rowIndex !== coordinateY || colIndex !== coordinateX) {
          expect(cells[colIndex]).not.toHaveClass(CELL_ROBOT_CLASS);
        }
      }
    }
  });
});
