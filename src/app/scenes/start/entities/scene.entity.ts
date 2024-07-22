import { injected } from 'brandi';
import { Container } from 'pixi.js';
import { DI_TOKENS } from '../../../di/tokens';
import { RootContainerService } from '../../../services/root-container.services';
import { LogoEntity } from './title.entity';
import { DI_TOKENS_START_SCENE } from '../di/tokens';
import { BACKGROUND_IMAGE_TOKENS, START_BUTTON_SIZE, UI_IMAGE_TOKENS } from '../../../../constants';
import { ButtonEntity, ButtonEntityParams } from '../../../../app/entities/button.entity';
import { BackgroundEntity, BackgroundParams } from '../../../entities/background.entity';

export type SceneEntityParams = {
  title: string;
  backgroundName: string;
  startButton: {
    text: string;
    onClick: () => void;
  };
};

export class SceneEntity {
  public readonly container: Container;
  private readonly background: BackgroundEntity;
  private readonly startButton!: ButtonEntity;

  constructor(
    private readonly rootContainerService: RootContainerService,
    private readonly createBackground: (params: BackgroundParams) => BackgroundEntity,
    private readonly createButton: (params: ButtonEntityParams) => ButtonEntity,
    private readonly logo: LogoEntity,
  ) {
    this.container = this.createContainer();
    this.background = this.createBackground({
      image: BACKGROUND_IMAGE_TOKENS.StartBackground,
    });
    this.container.addChild(this.background.container);
  }

  public __init(params: SceneEntityParams): void {
    //@ts-ignore
    this.startButton = this.createButton({
      image: UI_IMAGE_TOKENS.StartButton,
      size: START_BUTTON_SIZE,
      onClick: params.startButton.onClick,
    });

    this.container.addChild(this.logo.container, this.startButton.container);

    this.onResize();
    this.rootContainerService.onResize(this.onResize);
  }

  public destroy(): void {
    this.background.destroy();
    this.logo.destroy();
    this.startButton.destroy();
    this.container.destroy();
    this.rootContainerService.removeOnResize(this.onResize);
  }

  private readonly onResize = (): void => {
    this.startButton.setPosition({
      x: this.rootContainerService.getGameSize().width / 2,
      y:
        this.rootContainerService.getGameSafeAreaPosition().y +
        this.rootContainerService.getGameSafeAreaSize().height -
        40,
    });
  };

  private createContainer(): Container {
    const container = new Container();

    return container;
  }
}

injected(
  SceneEntity,
  DI_TOKENS.rootContainerService,
  DI_TOKENS.backgroundFactory,
  DI_TOKENS.buttonFactory,
  DI_TOKENS_START_SCENE.logoEntity,
);
