import { PipeVariantType } from './../types';
import { PIPE_IMAGE_TOKENS } from './../constants';

enum Direction {
  Top = 'top',
  Left = 'left',
  Bottom = 'bottom',
  Right = 'right',
}

export enum PipeType {
  Empty = 'empty',
  Start = 'start',
  Regular = 'regular',
  End = 'end',
}

export enum PIPE_VARIANT {
  EmptyPipe = 'empty_pipe',
  StartPipe = 'start_pipe',
  CornerPipe = 'corner_pipe',
  StraightPipe = 'straight_pipe',
  TriplePipe = 'triple_pipe',
  QuarterPipe = 'quarter_pipe',
  EndPipe = 'end_pipe',
}

export const PIPE_VARIANTS: PipeVariantType = {
  [PIPE_VARIANT.EmptyPipe]: {
    emptyImg: '',
    fillImg: '',
    connections: [],
    type: PipeType.Empty,
  },
  [PIPE_VARIANT.StartPipe]: {
    emptyImg: PIPE_IMAGE_TOKENS.StartPipeImgFill,
    fillImg: PIPE_IMAGE_TOKENS.StartPipeImgFill,
    connections: [Direction.Right],
    type: PipeType.Start,
  },
  [PIPE_VARIANT.CornerPipe]: {
    emptyImg: PIPE_IMAGE_TOKENS.CornerPipeImgEmpty,
    fillImg: PIPE_IMAGE_TOKENS.CornerPipeImgFill,
    connections: [Direction.Left, Direction.Top],
    type: PipeType.Regular,
  },
  [PIPE_VARIANT.StraightPipe]: {
    emptyImg: PIPE_IMAGE_TOKENS.StraightPipeImgEmpty,
    fillImg: PIPE_IMAGE_TOKENS.StraightPipeImgFill,
    connections: [Direction.Left, Direction.Right],
    type: PipeType.Regular,
  },
  [PIPE_VARIANT.TriplePipe]: {
    emptyImg: PIPE_IMAGE_TOKENS.TriplePipeImgEmpty,
    fillImg: PIPE_IMAGE_TOKENS.TriplePipeImgFill,
    connections: [Direction.Left, Direction.Top, Direction.Bottom],
    type: PipeType.Regular,
  },
  [PIPE_VARIANT.QuarterPipe]: {
    emptyImg: PIPE_IMAGE_TOKENS.QuarterPipeImgEmpty,
    fillImg: PIPE_IMAGE_TOKENS.QuarterPipeImgFill,
    connections: [Direction.Left, Direction.Right, Direction.Bottom, Direction.Top],
    type: PipeType.Regular,
  },
  [PIPE_VARIANT.EndPipe]: {
    emptyImg: PIPE_IMAGE_TOKENS.EndPipeImgEmpty,
    fillImg: PIPE_IMAGE_TOKENS.EndPipeImgFill,
    connections: [Direction.Left],
    type: PipeType.End,
  },
};
