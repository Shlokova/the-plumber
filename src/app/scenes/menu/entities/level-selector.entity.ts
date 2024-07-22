import { injected } from 'brandi';
import { Assets, Container, Sprite, Text } from 'pixi.js';
import {
  LEVEL_SELECTOR_SIZE,
  LEVEL_SELECTOR_TEXT_STYLE,
  UI_IMAGE_TOKENS,
} from '../../../../constants';

export type LevelSelectorParams = {
  levelNumber: number;
  isOpen: boolean;
  onClick: () => void;
};

export class LevelSelectorEntity {
  public readonly container: Container;
  private readonly background!: Sprite;
  private readonly text!: Text;

  constructor() {
    this.container = this.createContainer();
  }

  __init(params: LevelSelectorParams): void {
    // @ts-ignore
    this.background = this.createBackground(params.isOpen);
    // @ts-ignore
    this.text = this.createText(params.levelNumber, params.isOpen, params.size);
    this.container.addChild(this.background, this.text);
    params.isOpen && this.bindButtonAction(params.onClick);
  }

  public destroy(): void {
    this.container.destroy();
  }

  public setPosition(position: { x: number; y: number }): void {
    this.container.x = position.x + LEVEL_SELECTOR_SIZE.width / 2;
    this.container.y = position.y + LEVEL_SELECTOR_SIZE.height / 2;
  }

  private createContainer(): Container {
    const container = new Container();

    return container;
  }

  private bindButtonAction(onClick: () => void): void {
    this.background.eventMode = 'static';
    this.background.cursor = 'pointer';
    this.background
      .on('pointertap', onClick)
      .on('pointerover', () => {
        this.background.tint = '0xb1b1b1';
      })
      .on('pointerout', () => {
        this.background.tint = '0xFFFFFF';
      })
      .on('pointerdown', () => {
        this.container.scale.x /= 1.05;
        this.container.scale.y /= 1.05;
      })
      .on('pointerup', () => {
        this.container.scale.x *= 1.05;
        this.container.scale.y *= 1.05;
      })
      .on('pointerupoutside', () => {
        this.container.scale.x *= 1.05;
        this.container.scale.y *= 1.05;
      });
  }

  private createText(levelNumber: number, isOpen: boolean): Sprite {
    const text = new Text(`${isOpen ? levelNumber : '?'}`, LEVEL_SELECTOR_TEXT_STYLE);
    text.anchor.set(0.5);

    return text;
  }

  private createBackground(isOpen: boolean): Sprite {
    const background = isOpen
      ? new Sprite(Assets.get(UI_IMAGE_TOKENS.MenuLevelBackgroundOpen))
      : new Sprite(Assets.get(UI_IMAGE_TOKENS.MenuLevelBackgroundClosed));
    background.width = LEVEL_SELECTOR_SIZE.width;
    background.height = LEVEL_SELECTOR_SIZE.height;
    background.anchor.set(0.5);

    return background;
  }
}

injected(LevelSelectorEntity);
