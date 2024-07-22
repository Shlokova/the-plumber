import { injected } from 'brandi';
import { Assets, Container, Sprite, Text } from 'pixi.js';
import { DI_TOKENS } from '../../../di/tokens';
import { RootContainerService } from 'src/app/services/root-container.services';
import { GameManager } from 'src/app/managers/game.manager';
import {
  GAME_UI_MARGIN,
  GAME_UI_TEXT_STYLE,
  LEVEL_NUMBER_SIZE,
  UI_IMAGE_TOKENS,
} from '../../../../constants';

export class LevelNumberEntity {
  public readonly container: Container;
  private readonly text!: Text;
  private readonly background!: Sprite;

  constructor(
    private readonly rootContainerService: RootContainerService,
    private readonly gameManager: GameManager,
  ) {
    this.container = this.createContainer();
    this.background = this.createBackground();
    this.text = this.createText(this.gameManager.curentLevel);

    this.container.addChild(this.background, this.text);

    this.onResize();

    this.rootContainerService.onResize(this.onResize);
  }

  public destroy(): void {
    this.container.destroy();
    this.rootContainerService.removeOnResize(this.onResize);
  }

  private readonly onResize = (): void => {
    this.updatePosition();
  };

  private updatePosition(): void {
    const { x, y } = this.rootContainerService.getGameSafeAreaPosition();

    this.container.x = x + GAME_UI_MARGIN;
    this.container.y = y + GAME_UI_MARGIN;
  }

  private createContainer(): Container {
    const container = new Container();

    return container;
  }

  private createText(levelNumber: number): Text {
    const text = new Text(`${levelNumber}`, GAME_UI_TEXT_STYLE);
    text.anchor.set(0.5, 0.3);
    text.x = LEVEL_NUMBER_SIZE.width / 2;
    text.y = LEVEL_NUMBER_SIZE.height / 2;

    return text;
  }

  private createBackground(): Sprite {
    const background = new Sprite(Assets.get(UI_IMAGE_TOKENS.LevelNumberBackground));

    background.width = LEVEL_NUMBER_SIZE.width;
    background.height = LEVEL_NUMBER_SIZE.height;

    this.container.addChild(background);

    return background;
  }
}

injected(LevelNumberEntity, DI_TOKENS.rootContainerService, DI_TOKENS.gameManager);
