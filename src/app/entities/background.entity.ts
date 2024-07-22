import { injected } from 'brandi';
import { Assets, Container, Sprite } from 'pixi.js';
import { DI_TOKENS } from '../di/tokens';
import { RootContainerService } from '../services/root-container.services';
import { BACKGROUND_PIXEL_RATIO } from '../../constants';

export type BackgroundParams = {
  image: string;
};

export class BackgroundEntity {
  public readonly container: Container;
  private readonly image!: Sprite;

  constructor(private readonly rootContainerService: RootContainerService) {
    this.container = this.createContainer();
  }

  public __init(params: BackgroundParams): void {
    //@ts-ignore
    this.image = this.createBackgroundImage(params.image);

    this.container.addChild(this.image);

    this.onResize();
    this.rootContainerService.onResize(this.onResize);
  }

  public destroy(): void {
    this.container.destroy();
    this.rootContainerService.removeOnResize(this.onResize);
  }

  private readonly onResize = (): void => {
    this.resizeBackground();
  };

  private createContainer(): Container {
    const container = new Container();

    return container;
  }

  private resizeBackground(): void {
    const { height, width } = this.rootContainerService.getGameSize();

    this.image.height = height;
    this.image.width = BACKGROUND_PIXEL_RATIO * height;

    this.image.x = width / 2;
    this.image.y = height / 2;
  }

  private createBackgroundImage(image: string): Sprite {
    const sprite = new Sprite(Assets.get(image));

    sprite.anchor.set(0.5);

    return sprite;
  }
}

injected(BackgroundEntity, DI_TOKENS.rootContainerService);
