import { AssetsManifest } from 'pixi.js';
import {
  BACKGROUND_IMAGE,
  BACKGROUND_IMAGE_TOKENS,
  PIPE_IMAGE,
  PIPE_IMAGE_TOKENS,
  UI_IMAGE,
  UI_IMAGE_TOKENS,
} from '../constants';

export const manifest: AssetsManifest = {
  bundles: [
    {
      name: 'pipes',
      assets: [
        {
          alias: PIPE_IMAGE_TOKENS.CornerPipeImgEmpty,
          src: PIPE_IMAGE[PIPE_IMAGE_TOKENS.CornerPipeImgEmpty],
        },
        {
          alias: PIPE_IMAGE_TOKENS.CornerPipeImgFill,
          src: PIPE_IMAGE[PIPE_IMAGE_TOKENS.CornerPipeImgFill],
        },
        {
          alias: PIPE_IMAGE_TOKENS.EndPipeImgEmpty,
          src: PIPE_IMAGE[PIPE_IMAGE_TOKENS.EndPipeImgEmpty],
        },
        {
          alias: PIPE_IMAGE_TOKENS.EndPipeImgFill,
          src: PIPE_IMAGE[PIPE_IMAGE_TOKENS.EndPipeImgFill],
        },
        {
          alias: PIPE_IMAGE_TOKENS.QuarterPipeImgEmpty,
          src: PIPE_IMAGE[PIPE_IMAGE_TOKENS.QuarterPipeImgEmpty],
        },
        {
          alias: PIPE_IMAGE_TOKENS.QuarterPipeImgFill,
          src: PIPE_IMAGE[PIPE_IMAGE_TOKENS.QuarterPipeImgFill],
        },
        {
          alias: PIPE_IMAGE_TOKENS.StartPipeImgFill,
          src: PIPE_IMAGE[PIPE_IMAGE_TOKENS.StartPipeImgFill],
        },
        {
          alias: PIPE_IMAGE_TOKENS.StraightPipeImgEmpty,
          src: PIPE_IMAGE[PIPE_IMAGE_TOKENS.StraightPipeImgEmpty],
        },
        {
          alias: PIPE_IMAGE_TOKENS.StraightPipeImgFill,
          src: PIPE_IMAGE[PIPE_IMAGE_TOKENS.StraightPipeImgFill],
        },
        {
          alias: PIPE_IMAGE_TOKENS.TriplePipeImgEmpty,
          src: PIPE_IMAGE[PIPE_IMAGE_TOKENS.TriplePipeImgEmpty],
        },
        {
          alias: PIPE_IMAGE_TOKENS.TriplePipeImgFill,
          src: PIPE_IMAGE[PIPE_IMAGE_TOKENS.TriplePipeImgFill],
        },
      ],
    },
    {
      name: 'backgrounds',
      assets: [
        {
          alias: BACKGROUND_IMAGE_TOKENS.FieldBackground,
          src: BACKGROUND_IMAGE[BACKGROUND_IMAGE_TOKENS.FieldBackground],
        },
        {
          alias: BACKGROUND_IMAGE_TOKENS.FinalBackground,
          src: BACKGROUND_IMAGE[BACKGROUND_IMAGE_TOKENS.FinalBackground],
        },
        {
          alias: BACKGROUND_IMAGE_TOKENS.FinalPanelBackground,
          src: BACKGROUND_IMAGE[BACKGROUND_IMAGE_TOKENS.FinalPanelBackground],
        },
        {
          alias: BACKGROUND_IMAGE_TOKENS.LevelBackground,
          src: BACKGROUND_IMAGE[BACKGROUND_IMAGE_TOKENS.LevelBackground],
        },
        {
          alias: BACKGROUND_IMAGE_TOKENS.MenuBackground,
          src: BACKGROUND_IMAGE[BACKGROUND_IMAGE_TOKENS.MenuBackground],
        },
        {
          alias: BACKGROUND_IMAGE_TOKENS.MenuPanelBackground,
          src: BACKGROUND_IMAGE[BACKGROUND_IMAGE_TOKENS.MenuPanelBackground],
        },
        {
          alias: BACKGROUND_IMAGE_TOKENS.StartBackground,
          src: BACKGROUND_IMAGE[BACKGROUND_IMAGE_TOKENS.StartBackground],
        },
      ],
    },
    {
      name: 'ui',
      assets: [
        {
          alias: UI_IMAGE_TOKENS.LevelNumberBackground,
          src: UI_IMAGE[UI_IMAGE_TOKENS.LevelNumberBackground],
        },
        {
          alias: UI_IMAGE_TOKENS.Logo,
          src: UI_IMAGE[UI_IMAGE_TOKENS.Logo],
        },
        {
          alias: UI_IMAGE_TOKENS.LoseTitle,
          src: UI_IMAGE[UI_IMAGE_TOKENS.LoseTitle],
        },
        {
          alias: UI_IMAGE_TOKENS.MenuButton,
          src: UI_IMAGE[UI_IMAGE_TOKENS.MenuButton],
        },
        {
          alias: UI_IMAGE_TOKENS.MenuLevelBackgroundClosed,
          src: UI_IMAGE[UI_IMAGE_TOKENS.MenuLevelBackgroundClosed],
        },
        {
          alias: UI_IMAGE_TOKENS.MenuLevelBackgroundOpen,
          src: UI_IMAGE[UI_IMAGE_TOKENS.MenuLevelBackgroundOpen],
        },
        {
          alias: UI_IMAGE_TOKENS.NextButton,
          src: UI_IMAGE[UI_IMAGE_TOKENS.NextButton],
        },
        {
          alias: UI_IMAGE_TOKENS.RestartButton,
          src: UI_IMAGE[UI_IMAGE_TOKENS.RestartButton],
        },
        {
          alias: UI_IMAGE_TOKENS.StartButton,
          src: UI_IMAGE[UI_IMAGE_TOKENS.StartButton],
        },
        {
          alias: UI_IMAGE_TOKENS.TimerBackground,
          src: UI_IMAGE[UI_IMAGE_TOKENS.TimerBackground],
        },
        {
          alias: UI_IMAGE_TOKENS.WinTitle,
          src: UI_IMAGE[UI_IMAGE_TOKENS.WinTitle],
        },
      ],
    },
  ],
};
