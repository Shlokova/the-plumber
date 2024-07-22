import { injected } from 'brandi';
import { Container, Sprite, Assets } from 'pixi.js';
import { DI_TOKENS } from '../../../di/tokens';
import { RootContainerService } from '../../../services/root-container.services';
import { LOGO_MARGIN_TOP, LOGO_SIZE, UI_IMAGE_TOKENS } from '../../../../constants';

export class LogoEntity {
  public readonly container: Container;
  private readonly image: Sprite;

  constructor(private readonly rootContainerService: RootContainerService) {
    this.container = this.createContainer();
    this.image = this.createLogo();

    this.container.addChild(this.image);

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

  private createContainer(): Container {
    const container = new Container();

    return container;
  }

  private updatePosition(): void {
    this.container.x = this.rootContainerService.getGameSize().width / 2;
    this.container.y = this.rootContainerService.getGameSize().height / 2 - LOGO_MARGIN_TOP;
  }

  private createLogo(): Sprite {
    const sprite = new Sprite(Assets.get(UI_IMAGE_TOKENS.Logo));

    sprite.width = LOGO_SIZE.width;
    sprite.height = LOGO_SIZE.height;
    sprite.anchor.set(0.5);
    return sprite;
  }
}

injected(LogoEntity, DI_TOKENS.rootContainerService);
