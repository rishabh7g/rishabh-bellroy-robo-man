export interface Position {
  coordinateX: number;
  coordinateY: number;
  direction: Direction;
}

export enum Direction {
  NORTH = 'NORTH',
  EAST = 'EAST',
  SOUTH = 'SOUTH',
  WEST = 'WEST',
}
