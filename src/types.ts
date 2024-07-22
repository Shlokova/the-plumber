import { PIPE_VARIANT, PipeType } from './configs/pipes.config';
import { PIPE_IMAGE_TOKENS, START_PIPE_POSITION } from './constants';

export enum Direction {
  Top = 'top',
  Left = 'left',
  Bottom = 'bottom',
  Right = 'right',
}

export type LevelParams = {
  field: FieldParams;
  timeLimit: number;
};

export type FieldParams = PipeParams[][];

export type PipeParams = {
  pipe: PipeVariantParams;
  startPipePosition: START_PIPE_POSITION;
};

export type PipeVariantType = Record<PIPE_VARIANT, PipeVariantParams>;
export type PipeVariantParams =
  | {
      emptyImg: PIPE_IMAGE_TOKENS;
      fillImg: PIPE_IMAGE_TOKENS;
      connections: Direction[];
      type: PipeType;
    }
  | {
      type: PipeType.Empty;
      emptyImg: '';
      fillImg: '';
      connections: [];
    };

export type Size = { width: number; height: number };
export type Position = { x: number; y: number };
