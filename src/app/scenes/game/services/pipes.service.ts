import { injected } from 'brandi';
import { ConnectionService } from './connections.service';
import { DI_TOKENS_GAME_SCENE } from '../di/tokens';
import { PipeEntity } from '../entities/pipe.entity';
import { PipeType } from '../../../../configs/pipes.config';
import { Direction } from '../../../../types';

export class PipeService {
  constructor(private readonly connectionService: ConnectionService) {}

  public fillPipes(field: PipeEntity[][]): void {
    this.clearPipes(field);

    const rowsCount = field.length;
    const colsCount = field[0].length;
    const visited = new Set<string>();
    const startPipes = this.findStartPipes(field);

    const dfs = (row: number, col: number, connection: Direction, delay: number): void => {
      if (row < 0 || col < 0 || row >= rowsCount || col >= colsCount) return;
      const key = `${row},${col}`;
      if (visited.has(key)) return;
      visited.add(key);

      const pipe = field[row][col];
      const newDelay = pipe.fill(connection, delay);

      if (
        pipe.connections.has(Direction.Top) &&
        row > 0 &&
        this.connectionService.isConnected(pipe, field[row - 1][col], Direction.Top)
      ) {
        dfs(row - 1, col, Direction.Top, newDelay);
      }
      if (
        pipe.connections.has(Direction.Bottom) &&
        row < rowsCount - 1 &&
        this.connectionService.isConnected(pipe, field[row + 1][col], Direction.Bottom)
      ) {
        dfs(row + 1, col, Direction.Bottom, newDelay);
      }
      if (
        pipe.connections.has(Direction.Left) &&
        col > 0 &&
        this.connectionService.isConnected(pipe, field[row][col - 1], Direction.Left)
      ) {
        dfs(row, col - 1, Direction.Left, newDelay);
      }
      if (
        pipe.connections.has(Direction.Right) &&
        col < colsCount - 1 &&
        this.connectionService.isConnected(pipe, field[row][col + 1], Direction.Right)
      ) {
        dfs(row, col + 1, Direction.Right, newDelay);
      }
    };

    startPipes.forEach(
      ({ fieldPosition }) => void dfs(fieldPosition.col, fieldPosition.row, Direction.Top, 0),
    );
  }

  public checkPipesAreFull(field: PipeEntity[][]): boolean {
    return field.reduce((res, cur) => res && !cur.filter((el) => !el.filled).length, true);
  }

  private findStartPipes(field: PipeEntity[][]): PipeEntity[] {
    return field.flatMap((row) => row.filter((el) => el.type === PipeType.Start));
  }

  private clearPipes(grid: PipeEntity[][]): void {
    grid.forEach((rows) => rows.forEach((pipe) => pipe.clear()));
  }
}

injected(PipeService, DI_TOKENS_GAME_SCENE.connectionService);
