import { injected } from 'brandi';
import { Container } from 'pixi.js';
import { DI_TOKENS } from '../../../di/tokens';
import { RootContainerService } from '../../../services/root-container.services';
import { BackgroundEntity, BackgroundParams } from '../../../entities/background.entity';
import { DI_TOKENS_MENU_SCENE } from '../di/tokens';
import { LevelSelectorPanelEntity, LevelSelectorPanelParams } from './level-selector-panel.entity';
import { BACKGROUND_IMAGE_TOKENS, LEVEL_SELECTOR_PANEL_MARGIN } from '../../../../constants';

export type SceneEntityParams = {
  levelsCount: number;
  openLevelsNumbers: number[];
  onLevelClick: (levelNumber: number) => void;
};

export class SceneEntity {
  public readonly container: Container;
  private readonly background!: BackgroundEntity;
  private readonly levelSelectorPanel!: LevelSelectorPanelEntity;

  constructor(
    private readonly rootContainerService: RootContainerService,
    private readonly createBackground: (params: BackgroundParams) => BackgroundEntity,
    private readonly createLevelSelectorPanel: (
      params: LevelSelectorPanelParams,
    ) => LevelSelectorPanelEntity,
  ) {
    this.container = this.createContainer();
  }

  public __init(params: SceneEntityParams): void {
    //@ts-ignore
    this.background = this.createBackground({
      image: BACKGROUND_IMAGE_TOKENS.MenuBackground,
    });
    //@ts-ignore
    this.levelSelectorPanel = this.createLevelSelectorPanel({
      levelsCount: params.levelsCount,
      openLevelsNumbers: params.openLevelsNumbers,
      onLevelClick: params.onLevelClick,
    });

    this.container.addChild(this.background.container, this.levelSelectorPanel.container);

    this.onResize();
    this.rootContainerService.onResize(this.onResize);
  }

  public destroy(): void {
    this.background.destroy();
    this.levelSelectorPanel.destroy();
    this.container.destroy();
    this.rootContainerService.removeOnResize(this.onResize);
  }

  private readonly onResize = (): void => {
    const { width, height } = this.rootContainerService.getGameSize();
    const { width: safeAreaWidth, height: safeAreaHeight } =
      this.rootContainerService.getGameSafeAreaSize();

    this.levelSelectorPanel.setSize({
      width: safeAreaWidth - LEVEL_SELECTOR_PANEL_MARGIN * 2,
      height: safeAreaHeight - LEVEL_SELECTOR_PANEL_MARGIN * 2,
    });

    this.levelSelectorPanel.setPosition({
      x: width / 2,
      y: height / 2,
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
  DI_TOKENS_MENU_SCENE.levelSelectorPanelFactory,
);
