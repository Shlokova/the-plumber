import { injected } from 'brandi';
import { Assets, Container, Sprite } from 'pixi.js';
import { DI_TOKENS } from '../../../di/tokens';
import { GameManager, GameStatus } from '../../../../app/managers/game.manager';
import { FINAL_TITLE_SIZE, UI_IMAGE_TOKENS } from '../../../../constants';

export class TitleEntity {
  public readonly container: Container;
  private text: Sprite;

  constructor(private readonly gameManager: GameManager) {
    this.container = this.createContainer();
    this.text = this.createTitle(this.gameManager.gameStatus);

    this.container.addChild(this.text);
  }

  public setPosition(position: { x: number; y: number }): void {
    this.container.x = position.x;
    this.container.y = position.y;
  }

  public destroy(): void {
    this.container.destroy();
  }

  private createContainer(): Container {
    const container = new Container();

    return container;
  }

  private createTitle(status: GameStatus): Sprite {
    const sprite =
      status === GameStatus.Win
        ? new Sprite(Assets.get(UI_IMAGE_TOKENS.WinTitle))
        : new Sprite(Assets.get(UI_IMAGE_TOKENS.LoseTitle));

    sprite.width = FINAL_TITLE_SIZE.width;
    sprite.height = FINAL_TITLE_SIZE.height;
    sprite.anchor.set(0.5);
    return sprite;
  }
}

injected(TitleEntity, DI_TOKENS.gameManager);
