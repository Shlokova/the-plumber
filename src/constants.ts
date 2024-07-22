import cornerPipeImgEmpty from '../src/assets/pipes/empty/pipe_empty_01.png';
import cornerPipeImgFill from '../src/assets/pipes/fill/pipe_fill_01.png';
import straightPipeImgEmpty from '../src/assets/pipes/empty/pipe_empty_02.png';
import straightPipeImgFill from './assets/pipes/fill/pipe_fill_02.png';
import triplePipeImgEmpty from '../src/assets/pipes/empty/pipe_empty_03.png';
import triplePipeImgFill from '../src/assets/pipes/fill/pipe_fill_03.png';
import quarterPipeImgEmpty from '../src/assets/pipes/empty/pipe_empty_04.png';
import quarterPipeImgFill from '../src/assets/pipes/fill/pipe_fill_04.png';
import startPipeImgFill from '../src/assets/pipes/fill/pipe_fill_start.png';
import endPipeImgFill from '../src/assets/pipes/fill/pipe_fill_end.png';
import endPipeImgEmpty from '../src/assets/pipes/empty/pipe_empty_end.png';
import fieldBackground from '../src/assets/backgrounds/field_background.png';
import finalBackground from '../src/assets/backgrounds/final_background.png';
import finalPanelBackground from '../src/assets/backgrounds/final_panel_background.png';
import levelBackground from '../src/assets/backgrounds/level_background.png';
import menuBackground from '../src/assets/backgrounds/menu_background.png';
import menuPanelBackground from '../src/assets/backgrounds/menu_panel_background.png';
import startBackground from '../src/assets/backgrounds/start_background.png';
import levelNumberBackground from '../src/assets/ui/level_number_background.png';
import logo from '../src/assets/ui/logo.png';
import loseTitle from '../src/assets/ui/lose_title.png';
import menuButton from '../src/assets/ui/menu_button.png';
import menuLevelBackgroundClosed from '../src/assets/ui/menu_level_background_close.png';
import menuLevelBackgroundOpen from '../src/assets/ui/menu_level_background_open.png';
import nextButton from '../src/assets/ui/next_button.png';
import restartButton from '../src/assets/ui/restart_button.png';
import startButton from '../src/assets/ui/start_button.png';
import timerBackground from '../src/assets/ui/timer_background.png';
import winTitle from '../src/assets/ui/win_title.png';
import { TextStyle } from 'pixi.js';
import font from '../src/assets/font/Impact.ttf';

export enum PIPE_IMAGE_TOKENS {
  CornerPipeImgEmpty = 'cornerPipeImgEmpty',
  CornerPipeImgFill = 'cornerPipeImgFill',
  StraightPipeImgEmpty = 'straightPipeImgEmpty',
  StraightPipeImgFill = 'straightPipeImgFill',
  TriplePipeImgEmpty = 'triplePipeImgEmpty',
  TriplePipeImgFill = 'triplePipeImgFill',
  QuarterPipeImgEmpty = 'quarterPipeImgEmptys',
  QuarterPipeImgFill = 'quarterPipeImgFill',
  StartPipeImgFill = 'startPipeImgFill',
  EndPipeImgFill = 'endPipeImgFill',
  EndPipeImgEmpty = 'endPipeImgEmpty',
}

export enum BACKGROUND_IMAGE_TOKENS {
  FieldBackground = 'fieldBackground',
  FinalBackground = 'finalBackground',
  FinalPanelBackground = 'finalPanelBackground',
  LevelBackground = 'levelBackground',
  MenuBackground = 'menuBackground',
  MenuPanelBackground = 'menuPanelBackground',
  StartBackground = 'startBackground',
}

export enum FONTS_TOKEN {
  Impact = 'Impact',
}

export enum UI_IMAGE_TOKENS {
  LevelNumberBackground = 'levelNumberBackground',
  Logo = 'logo',
  LoseTitle = 'loseTitle',
  MenuButton = 'menuButton',
  MenuLevelBackgroundClosed = 'menuLevelBackgroundClosed',
  MenuLevelBackgroundOpen = 'menuLevelBackgroundOpen',
  NextButton = 'nextButton',
  RestartButton = 'restartButton',
  StartButton = 'startButton',
  TimerBackground = 'timerBackground',
  WinTitle = 'winTitle',
}

export const FONTS = {
  [FONTS_TOKEN.Impact]: font,
};

export const PIPE_IMAGE = {
  [PIPE_IMAGE_TOKENS.CornerPipeImgEmpty]: cornerPipeImgEmpty,
  [PIPE_IMAGE_TOKENS.CornerPipeImgFill]: cornerPipeImgFill,
  [PIPE_IMAGE_TOKENS.StraightPipeImgEmpty]: straightPipeImgEmpty,
  [PIPE_IMAGE_TOKENS.StraightPipeImgFill]: straightPipeImgFill,
  [PIPE_IMAGE_TOKENS.TriplePipeImgEmpty]: triplePipeImgEmpty,
  [PIPE_IMAGE_TOKENS.TriplePipeImgFill]: triplePipeImgFill,
  [PIPE_IMAGE_TOKENS.QuarterPipeImgEmpty]: quarterPipeImgEmpty,
  [PIPE_IMAGE_TOKENS.QuarterPipeImgFill]: quarterPipeImgFill,
  [PIPE_IMAGE_TOKENS.StartPipeImgFill]: startPipeImgFill,
  [PIPE_IMAGE_TOKENS.EndPipeImgEmpty]: endPipeImgEmpty,
  [PIPE_IMAGE_TOKENS.EndPipeImgFill]: endPipeImgFill,
};

export const BACKGROUND_IMAGE = {
  [BACKGROUND_IMAGE_TOKENS.FieldBackground]: fieldBackground,
  [BACKGROUND_IMAGE_TOKENS.FinalBackground]: finalBackground,
  [BACKGROUND_IMAGE_TOKENS.FinalPanelBackground]: finalPanelBackground,
  [BACKGROUND_IMAGE_TOKENS.LevelBackground]: levelBackground,
  [BACKGROUND_IMAGE_TOKENS.MenuBackground]: menuBackground,
  [BACKGROUND_IMAGE_TOKENS.MenuPanelBackground]: menuPanelBackground,
  [BACKGROUND_IMAGE_TOKENS.StartBackground]: startBackground,
};

export const UI_IMAGE = {
  [UI_IMAGE_TOKENS.LevelNumberBackground]: levelNumberBackground,
  [UI_IMAGE_TOKENS.Logo]: logo,
  [UI_IMAGE_TOKENS.LoseTitle]: loseTitle,
  [UI_IMAGE_TOKENS.MenuButton]: menuButton,
  [UI_IMAGE_TOKENS.MenuLevelBackgroundClosed]: menuLevelBackgroundClosed,
  [UI_IMAGE_TOKENS.MenuLevelBackgroundOpen]: menuLevelBackgroundOpen,
  [UI_IMAGE_TOKENS.NextButton]: nextButton,
  [UI_IMAGE_TOKENS.RestartButton]: restartButton,
  [UI_IMAGE_TOKENS.StartButton]: startButton,
  [UI_IMAGE_TOKENS.TimerBackground]: timerBackground,
  [UI_IMAGE_TOKENS.WinTitle]: winTitle,
};

export const BACKGROUND_PIXEL_RATIO = 694 / 360;

export const MENU_BUTTON_SIZE = {
  width: 140,
  height: 55,
};

export const NEXT_BUTTON_SIZE = {
  width: 67,
  height: 60,
};

export const RESTART_BUTTON_SIZE = {
  width: 67,
  height: 60,
};

export const START_BUTTON_SIZE = {
  width: 160,
  height: 60,
};

export const FINAL_PANEL_GAP = 15;
export const FINAL_PANEL_SIZE = {
  width: 200,
  height: 270,
};

export const FINAL_TITLE_SIZE = {
  width: 140,
  height: 62,
};

export const LEVEL_NUMBER_SIZE = {
  width: 50,
  height: 40,
};

export const TIMER_SIZE = {
  width: 90,
  height: 40,
};
export const TIMER_SPACE_BETWEEN_NUMERS = '           ';

export const GAME_UI_TEXT_STYLE = new TextStyle({
  fontSize: 16,
  strokeThickness: 1,
  fontFamily: FONTS_TOKEN.Impact,
  fontWeight: 'bold',
  align: 'justify',
  fill: 0x1b1517,
  stroke: 0x785444,
});

export const GAME_UI_MARGIN = 5;
export const GAME_FIELD_PADDING = 35;
export const GAME_UI_HEIGHT =
  Math.max(LEVEL_NUMBER_SIZE.height, TIMER_SIZE.height) + GAME_UI_MARGIN * 2;

export const LEVEL_SELECTOR_PANEL_GRID = {
  col: 5,
  row: 9,
};
export const LEVEL_SELECTOR_PANEL_PADDING = {
  x: 4,
  y: 3,
};
export const LEVEL_SELECTOR_PANEL_MARGIN = 20;

export const LEVEL_SELECTOR_SIZE = {
  width: 38,
  height: 38,
};
export const LEVEL_SELECTOR_TEXT_STYLE = new TextStyle({
  fontSize: 16,
  strokeThickness: 1,
  fontFamily: FONTS_TOKEN.Impact,
  fontWeight: 'bold',
  align: 'justify',
  fill: 0x1b1517,
  stroke: 0x785444,
});

export const LOGO_SIZE = {
  width: 250,
  height: 100,
};
export const LOGO_MARGIN_TOP = 100;

export enum START_PIPE_POSITION {
  Top = 0,
  Right = 1,
  Bottom = 2,
  Left = 3,
}

export const WATER_ANIMATION_DURACTION = 200;
