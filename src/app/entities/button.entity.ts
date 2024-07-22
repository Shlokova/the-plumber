import { injected } from 'brandi';
import { Container, Sprite } from 'pixi.js';

export type ButtonEntityParams = {
  onClick: () => void;
  image: string;
  size: {
    width: number;
    height: number;
  };
};

export class ButtonEntity {
  public readonly container: Container;
  private readonly background!: Sprite;

  constructor() {
    this.container = this.createContainer();
  }

  public __init(params: ButtonEntityParams): void {
    //@ts-ignore
    this.background = this.createBackground(params.image, params.size);

    this.container.addChild(this.background);

    this.bindButtonAction(params.onClick);
  }

  public setPosition(position: { x: number; y: number }): void {
    this.container.x = position.x;
    this.container.y = position.y;
  }

  public destroy(): void {
    this.container.destroy();
  }

  private bindButtonAction(onClick: () => void): void {
    this.container.eventMode = 'static';
    this.container.cursor = 'pointer';

    this.container
      .on('pointertap', onClick)
      .on('pointerover', () => {
        this.background.tint = '0xb1b1b1';
      })
      .on('pointerout', () => {
        this.background.tint = '0xFFFFFF';
      })
      .on('pointerdown', () => {
        this.container.scale.x /= 1.1;
        this.container.scale.y /= 1.1;
      })
      .on('pointerup', () => {
        this.container.scale.x *= 1.1;
        this.container.scale.y *= 1.1;
      })
      .on('pointerupoutside', () => {
        this.container.scale.x *= 1.1;
        this.container.scale.y *= 1.1;
      });
  }

  private createContainer(): Container {
    const container = new Container();

    return container;
  }

  private createBackground(
    image: string,
    size: {
      width: number;
      height: number;
    },
  ): Sprite {
    const sprite = Sprite.from(image);

    sprite.anchor.set(0.5);
    sprite.width = size.width;
    sprite.height = size.height;

    return sprite;
  }
}

injected(ButtonEntity);
