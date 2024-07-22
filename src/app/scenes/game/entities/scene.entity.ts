import { injected } from 'brandi';
import { Container } from 'pixi.js';
import { DI_TOKENS } from '../../../di/tokens';
import { RootContainerService } from '../../../services/root-container.services';
import { DI_TOKENS_GAME_SCENE } from '../di/tokens';
import { FieldEntity, FieldEntityParams } from './field.entity';
import { BACKGROUND_IMAGE_TOKENS, GAME_UI_HEIGHT } from '../../../../constants';
import { BackgroundEntity, BackgroundParams } from '../../../entities/background.entity';

export type SceneEntityParams = {
  level: any;
  onWin: () => void;
};

export class SceneEntity {
  public readonly container: Container;
  private readonly background: BackgroundEntity;
  private readonly field!: FieldEntity;

  constructor(
    private readonly rootContainerService: RootContainerService,
    private readonly createBackground: (params: BackgroundParams) => BackgroundEntity,
    private readonly createField: (params: FieldEntityParams) => FieldEntity,
  ) {
    this.container = this.createContainer();

    this.background = this.createBackground({
      image: BACKGROUND_IMAGE_TOKENS.LevelBackground,
    });

    this.container.addChild(this.background.container);
  }

  public __init(params: SceneEntityParams) {
    //@ts-ignore
    this.field = this.createField({
      ...params.level,
      onWin: params.onWin,
      size: {
        width: this.rootContainerService.getGameSafeAreaSize().width,
        height: this.rootContainerService.getGameSafeAreaSize().height - GAME_UI_HEIGHT,
      },
    });

    this.container.addChild(this.field.container);

    this.onResize();
    this.rootContainerService.onResize(this.onResize);
  }

  public destroy(): void {
    this.field.destroy();
    this.container.destroy();
    this.rootContainerService.removeOnResize(this.onResize);
  }

  private readonly onResize = (): void => {
    const { width, height } = this.rootContainerService.getGameSize();
    const { width: safeAreaWidth, height: safeAreaHeight } =
      this.rootContainerService.getGameSafeAreaSize();

    this.field.setSize({
      width: safeAreaWidth,
      height: safeAreaHeight - GAME_UI_HEIGHT,
    });

    this.field.setPosition({
      x: width / 2,
      y: (height + GAME_UI_HEIGHT) / 2,
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
  DI_TOKENS_GAME_SCENE.fieldFactory,
);
