import { START_PIPE_POSITION } from '../constants';
import { PIPE_VARIANT, PIPE_VARIANTS } from './pipes.config';

export const LEVELS = [
  {
    timeLimit: 120,
    field: [
      [
        { pipe: PIPE_VARIANTS[PIPE_VARIANT.EmptyPipe], startPipePosition: START_PIPE_POSITION.Top },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.EmptyPipe],
          startPipePosition: START_PIPE_POSITION.Right,
        },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.StartPipe],
          startPipePosition: START_PIPE_POSITION.Right,
        },
        { pipe: PIPE_VARIANTS[PIPE_VARIANT.EmptyPipe], startPipePosition: START_PIPE_POSITION.Top },
      ],
      [
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.CornerPipe],
          startPipePosition: START_PIPE_POSITION.Right,
        },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.CornerPipe],
          startPipePosition: START_PIPE_POSITION.Left,
        },
        { pipe: PIPE_VARIANTS[PIPE_VARIANT.EndPipe], startPipePosition: START_PIPE_POSITION.Left },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.EndPipe],
          startPipePosition: START_PIPE_POSITION.Bottom,
        },
      ],
      [
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.CornerPipe],
          startPipePosition: START_PIPE_POSITION.Right,
        },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.StraightPipe],
          startPipePosition: START_PIPE_POSITION.Top,
        },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.TriplePipe],
          startPipePosition: START_PIPE_POSITION.Bottom,
        },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.CornerPipe],
          startPipePosition: START_PIPE_POSITION.Top,
        },
      ],
    ],
  },
  {
    timeLimit: 120,
    field: [
      [
        { pipe: PIPE_VARIANTS[PIPE_VARIANT.EmptyPipe], startPipePosition: START_PIPE_POSITION.Top },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.EmptyPipe],
          startPipePosition: START_PIPE_POSITION.Right,
        },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.StartPipe],
          startPipePosition: START_PIPE_POSITION.Right,
        },
        { pipe: PIPE_VARIANTS[PIPE_VARIANT.EmptyPipe], startPipePosition: START_PIPE_POSITION.Top },
      ],
      [
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.EndPipe],
          startPipePosition: START_PIPE_POSITION.Right,
        },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.CornerPipe],
          startPipePosition: START_PIPE_POSITION.Left,
        },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.TriplePipe],
          startPipePosition: START_PIPE_POSITION.Left,
        },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.EndPipe],
          startPipePosition: START_PIPE_POSITION.Bottom,
        },
      ],
      [
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.TriplePipe],
          startPipePosition: START_PIPE_POSITION.Right,
        },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.TriplePipe],
          startPipePosition: START_PIPE_POSITION.Top,
        },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.CornerPipe],
          startPipePosition: START_PIPE_POSITION.Bottom,
        },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.TriplePipe],
          startPipePosition: START_PIPE_POSITION.Top,
        },
      ],
      [
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.StraightPipe],
          startPipePosition: START_PIPE_POSITION.Right,
        },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.StraightPipe],
          startPipePosition: START_PIPE_POSITION.Top,
        },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.EndPipe],
          startPipePosition: START_PIPE_POSITION.Bottom,
        },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.TriplePipe],
          startPipePosition: START_PIPE_POSITION.Top,
        },
      ],
      [
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.EndPipe],
          startPipePosition: START_PIPE_POSITION.Right,
        },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.EndPipe],
          startPipePosition: START_PIPE_POSITION.Top,
        },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.EndPipe],
          startPipePosition: START_PIPE_POSITION.Bottom,
        },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.CornerPipe],
          startPipePosition: START_PIPE_POSITION.Top,
        },
      ],
    ],
  },
  {
    timeLimit: 120,
    field: [
      [
        { pipe: PIPE_VARIANTS[PIPE_VARIANT.EmptyPipe], startPipePosition: START_PIPE_POSITION.Top },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.EmptyPipe],
          startPipePosition: START_PIPE_POSITION.Right,
        },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.StartPipe],
          startPipePosition: START_PIPE_POSITION.Right,
        },
        { pipe: PIPE_VARIANTS[PIPE_VARIANT.EmptyPipe], startPipePosition: START_PIPE_POSITION.Top },
      ],
      [
        { pipe: PIPE_VARIANTS[PIPE_VARIANT.EndPipe], startPipePosition: START_PIPE_POSITION.Right },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.StraightPipe],
          startPipePosition: START_PIPE_POSITION.Left,
        },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.QuarterPipe],
          startPipePosition: START_PIPE_POSITION.Left,
        },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.EndPipe],
          startPipePosition: START_PIPE_POSITION.Bottom,
        },
      ],
      [
        { pipe: PIPE_VARIANTS[PIPE_VARIANT.EndPipe], startPipePosition: START_PIPE_POSITION.Right },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.TriplePipe],
          startPipePosition: START_PIPE_POSITION.Top,
        },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.TriplePipe],
          startPipePosition: START_PIPE_POSITION.Bottom,
        },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.CornerPipe],
          startPipePosition: START_PIPE_POSITION.Top,
        },
      ],
      [
        { pipe: PIPE_VARIANTS[PIPE_VARIANT.EndPipe], startPipePosition: START_PIPE_POSITION.Right },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.TriplePipe],
          startPipePosition: START_PIPE_POSITION.Top,
        },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.EndPipe],
          startPipePosition: START_PIPE_POSITION.Bottom,
        },
        { pipe: PIPE_VARIANTS[PIPE_VARIANT.EndPipe], startPipePosition: START_PIPE_POSITION.Top },
      ],
    ],
  },
  {
    timeLimit: 120,
    field: [
      [
        { pipe: PIPE_VARIANTS[PIPE_VARIANT.EmptyPipe], startPipePosition: START_PIPE_POSITION.Top },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.EmptyPipe],
          startPipePosition: START_PIPE_POSITION.Right,
        },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.StartPipe],
          startPipePosition: START_PIPE_POSITION.Right,
        },
        { pipe: PIPE_VARIANTS[PIPE_VARIANT.EmptyPipe], startPipePosition: START_PIPE_POSITION.Top },
      ],
      [
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.CornerPipe],
          startPipePosition: START_PIPE_POSITION.Right,
        },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.TriplePipe],
          startPipePosition: START_PIPE_POSITION.Left,
        },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.TriplePipe],
          startPipePosition: START_PIPE_POSITION.Left,
        },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.CornerPipe],
          startPipePosition: START_PIPE_POSITION.Bottom,
        },
      ],
      [
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.CornerPipe],
          startPipePosition: START_PIPE_POSITION.Right,
        },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.QuarterPipe],
          startPipePosition: START_PIPE_POSITION.Top,
        },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.EndPipe],
          startPipePosition: START_PIPE_POSITION.Bottom,
        },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.StraightPipe],
          startPipePosition: START_PIPE_POSITION.Top,
        },
      ],
      [
        { pipe: PIPE_VARIANTS[PIPE_VARIANT.EndPipe], startPipePosition: START_PIPE_POSITION.Right },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.CornerPipe],
          startPipePosition: START_PIPE_POSITION.Top,
        },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.EndPipe],
          startPipePosition: START_PIPE_POSITION.Bottom,
        },
        { pipe: PIPE_VARIANTS[PIPE_VARIANT.EndPipe], startPipePosition: START_PIPE_POSITION.Top },
      ],
    ],
  },
  {
    timeLimit: 120,
    field: [
      [
        { pipe: PIPE_VARIANTS[PIPE_VARIANT.EmptyPipe], startPipePosition: START_PIPE_POSITION.Top },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.EmptyPipe],
          startPipePosition: START_PIPE_POSITION.Right,
        },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.StartPipe],
          startPipePosition: START_PIPE_POSITION.Right,
        },
        { pipe: PIPE_VARIANTS[PIPE_VARIANT.EmptyPipe], startPipePosition: START_PIPE_POSITION.Top },
      ],
      [
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.CornerPipe],
          startPipePosition: START_PIPE_POSITION.Right,
        },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.StraightPipe],
          startPipePosition: START_PIPE_POSITION.Left,
        },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.QuarterPipe],
          startPipePosition: START_PIPE_POSITION.Left,
        },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.EndPipe],
          startPipePosition: START_PIPE_POSITION.Bottom,
        },
      ],
      [
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.StraightPipe],
          startPipePosition: START_PIPE_POSITION.Right,
        },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.EndPipe],
          startPipePosition: START_PIPE_POSITION.Top,
        },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.QuarterPipe],
          startPipePosition: START_PIPE_POSITION.Bottom,
        },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.CornerPipe],
          startPipePosition: START_PIPE_POSITION.Top,
        },
      ],
      [
        { pipe: PIPE_VARIANTS[PIPE_VARIANT.EndPipe], startPipePosition: START_PIPE_POSITION.Right },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.EndPipe],
          startPipePosition: START_PIPE_POSITION.Top,
        },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.TriplePipe],
          startPipePosition: START_PIPE_POSITION.Bottom,
        },
        { pipe: PIPE_VARIANTS[PIPE_VARIANT.EndPipe], startPipePosition: START_PIPE_POSITION.Top },
      ],
      [
        { pipe: PIPE_VARIANTS[PIPE_VARIANT.EndPipe], startPipePosition: START_PIPE_POSITION.Right },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.StraightPipe],
          startPipePosition: START_PIPE_POSITION.Top,
        },
        {
          pipe: PIPE_VARIANTS[PIPE_VARIANT.TriplePipe],
          startPipePosition: START_PIPE_POSITION.Bottom,
        },
        { pipe: PIPE_VARIANTS[PIPE_VARIANT.EndPipe], startPipePosition: START_PIPE_POSITION.Top },
      ],
    ],
  },
];
