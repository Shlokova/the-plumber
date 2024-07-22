import { injected } from 'brandi';
import { PipeEntity } from '../entities/pipe.entity';
import { Direction } from '../../../../types';

enum Angles {
  Top = 0,
  Left = 90,
  Bottom = 180,
  Right = 270,
}

export const OPPOSITE_DIRACTION = (dir: Direction): Direction => {
  switch (dir) {
    case Direction.Top:
      return Direction.Bottom;
    case Direction.Right:
      return Direction.Left;
    case Direction.Bottom:
      return Direction.Top;
    case Direction.Left:
      return Direction.Right;
  }
};

export class ConnectionService {
  public isConnected(pipe1: PipeEntity, pipe2: PipeEntity, direction: Direction): boolean {
    return pipe1.connections.has(direction) && pipe2.connections.has(OPPOSITE_DIRACTION(direction));
  }

  public getRotatedConnections(connections: Set<Direction>): Set<Direction> {
    const rotatedConnections = new Set<Direction>();

    connections.forEach((connection) => {
      rotatedConnections.add(this.getRotatedConnection(connection));
    });

    return rotatedConnections;
  }

  public getRotatedConnection(connection: Direction): Direction {
    switch (connection) {
      case Direction.Top:
        return Direction.Right;
      case Direction.Right:
        return Direction.Bottom;
      case Direction.Bottom:
        return Direction.Left;
        break;
      case Direction.Left:
        return Direction.Top;
    }
  }

  public getRotatedByAngleConnection(connection: Direction, angle: number): Direction {
    const angles = {
      [Angles.Top]: Direction.Top,
      [Angles.Right]: Direction.Right,
      [Angles.Bottom]: Direction.Bottom,
      [Angles.Left]: Direction.Left,
    };

    const directions = {
      [Direction.Top]: Angles.Top,
      [Direction.Right]: Angles.Right,
      [Direction.Bottom]: Angles.Bottom,
      [Direction.Left]: Angles.Left,
    };

    const newAngle = ((directions[connection] + angle) % 360) as Angles;
    return angles[newAngle];
  }
}

injected(ConnectionService);
