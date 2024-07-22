import { GameManager } from './../../../managers/game.manager';
import { injected } from 'brandi';
import { Assets, Container, Sprite } from 'pixi.js';
import { LevelSelectorEntity, LevelSelectorParams } from './level-selector.entity';
import { DI_TOKENS_MENU_SCENE } from '../di/tokens';
import { RootContainerService } from 'src/app/services/root-container.services';
import { DI_TOKENS } from '../../../../app/di/tokens';
import {
  BACKGROUND_IMAGE_TOKENS,
  LEVEL_SELECTOR_PANEL_GRID,
  LEVEL_SELECTOR_PANEL_PADDING,
} from '../../../../constants';

export type LevelSelectorPanelParams = {
  levelsCount: number;
  openLevelsNumbers: number[];
  onLevelClick: (levelNumber: number) => void;
};

export class LevelSelectorPanelEntity {
  public readonly container: Container;
  private readonly background!: Sprite;
  private readonly levelSelectors: LevelSelectorEntity[] = [];

  constructor(
    private readonly rootContainerService: RootContainerService,
    private readonly createLevelSelector: (params: LevelSelectorParams) => LevelSelectorEntity,
  ) {
    this.container = this.createContainer();
    this.background = this.createBackground();

    this.container.addChild(this.background);
  }

  public __init(params: LevelSelectorPanelParams): void {
    this.levelSelectors.push(
      ...new Array(params.levelsCount).fill('_').map((_, i) => {
        const container = this.createLevelSelector({
          levelNumber: i + 1,
          isOpen: params.openLevelsNumbers.includes(i + 1),
          onClick: () => params.onLevelClick(i + 1),
        });

        this.container.addChild(container.container);

        return container;
      }),
    );
  }

  public setPosition(position: { x: number; y: number }): void {
    this.container.x = position.x - this.container.width / 2;
    this.container.y = position.y - this.container.height / 2;
  }

  public setSize(size: { width: number; height: number }): void {
    this.setSizeBackground(size);
    this.setSizeLevelSelectors(size);
  }

  private setSizeBackground(size: { width: number; height: number }): void {
    const { width, height } = size;

    if (width > height) {
      this.background.rotation = 0;
      this.background.width = width;
      this.background.height = height;
    } else {
      this.background.rotation = Math.PI / 2;
      this.background.height = width;
      this.background.width = height;
    }

    this.background.x = width / 2;
    this.background.y = height / 2;
  }

  private setSizeLevelSelectors(size: { width: number; height: number }): void {
    const { width, height } = size;

    this.levelSelectors.forEach((container, i) => {
      const {
        grid: { col, row },
        padding: { x, y },
      } = this.rootContainerService.getResizeOptions({
        portrat: { grid: LEVEL_SELECTOR_PANEL_GRID, padding: LEVEL_SELECTOR_PANEL_PADDING },
        album: {
          grid: {
            col: LEVEL_SELECTOR_PANEL_GRID.row,
            row: LEVEL_SELECTOR_PANEL_GRID.col,
          },
          padding: {
            x: LEVEL_SELECTOR_PANEL_PADDING.y,
            y: LEVEL_SELECTOR_PANEL_PADDING.x,
          },
        },
      });

      container.setPosition({
        x: x + width / col + ((i % (col - 2)) * width) / col,
        y: y + height / row + (Math.floor(i / (col - 2)) * height) / row,
      });
    });
  }

  public destroy(): void {
    this.container.destroy();
  }

  private createContainer(): Container {
    const container = new Container();

    return container;
  }

  private createBackground(): Sprite {
    const background = new Sprite(Assets.get(BACKGROUND_IMAGE_TOKENS.MenuPanelBackground));

    background.anchor.set(0.5);

    return background;
  }
}

injected(
  LevelSelectorPanelEntity,
  DI_TOKENS.rootContainerService,
  DI_TOKENS_MENU_SCENE.levelSelectorFactory,
);
