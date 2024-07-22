import { injected } from 'brandi';
import { Assets, Container, Sprite } from 'pixi.js';
import { DI_TOKENS } from '../../../di/tokens';
import { RootContainerService } from '../../../services/root-container.services';
import { TitleEntity } from './title.entity';
import { ButtonEntity, ButtonEntityParams } from '../../../entities/button.entity';
import { DI_TOKENS_FINISH_SCENE } from '../di/tokens';
import {
  BACKGROUND_IMAGE_TOKENS,
  FINAL_PANEL_GAP,
  FINAL_PANEL_SIZE,
  MENU_BUTTON_SIZE,
  NEXT_BUTTON_SIZE,
  RESTART_BUTTON_SIZE,
  UI_IMAGE_TOKENS,
} from '../../../../constants';
import { BackgroundEntity, BackgroundParams } from '../../../entities/background.entity';

export type SceneEntityParams = {
  isNextLevelExists: boolean;
  onMenuClick: () => void;
  onNextButtonClick: () => void;
  onRestartButtonClick: () => void;
};

export class SceneEntity {
  public readonly container: Container;
  private readonly title!: TitleEntity;
  private readonly panel: Sprite;
  private readonly background!: BackgroundEntity;
  private readonly menuButton!: ButtonEntity;
  private nextButton: ButtonEntity | null = null;
  private readonly restartButton!: ButtonEntity;

  constructor(
    private readonly rootContainerService: RootContainerService,
    private readonly createButton: (params: ButtonEntityParams) => ButtonEntity,
    private readonly createBackground: (params: BackgroundParams) => BackgroundEntity,
    private readonly createTitle: () => TitleEntity,
  ) {
    this.container = this.createContainer();

    this.title = this.createTitle();
    this.background = this.createBackground({
      image: BACKGROUND_IMAGE_TOKENS.FinalBackground,
    });
    this.panel = this.createPanel();

    this.container.addChild(this.background.container, this.panel, this.title.container);
  }

  public __init(params: SceneEntityParams): void {
    //@ts-ignore
    this.menuButton = this.createButton({
      image: Assets.get(UI_IMAGE_TOKENS.MenuButton),
      size: MENU_BUTTON_SIZE,
      onClick: params.onMenuClick,
    });

    //@ts-ignore
    this.restartButton = this.createButton({
      image: Assets.get(UI_IMAGE_TOKENS.RestartButton),
      size: RESTART_BUTTON_SIZE,
      onClick: params.onRestartButtonClick,
    });

    if (params.isNextLevelExists) {
      this.nextButton = this.createButton({
        image: Assets.get(UI_IMAGE_TOKENS.NextButton),
        size: NEXT_BUTTON_SIZE,
        onClick: params.onNextButtonClick,
      });

      this.container.addChild(this.nextButton.container);
    }

    this.container.addChild(this.menuButton.container, this.restartButton.container);

    this.onResize();
    this.rootContainerService.onResize(this.onResize);
  }

  public destroy(): void {
    this.background.destroy();
    this.panel.destroy();
    this.title.destroy();
    this.menuButton.destroy();
    this.container.destroy();
    this.rootContainerService.removeOnResize(this.onResize);
  }

  private readonly onResize = (): void => {
    this.title.setPosition({
      x: this.rootContainerService.getGameSize().width / 2,
      y:
        this.rootContainerService.getGameSize().height / 2 -
        +FINAL_PANEL_SIZE.height / 2 +
        this.title.container.height / 2 +
        FINAL_PANEL_GAP,
    });
    this.panel.position.set(
      this.rootContainerService.getGameSize().width / 2,
      this.rootContainerService.getGameSize().height / 2,
    );
    this.menuButton.setPosition({
      x: this.rootContainerService.getGameSize().width / 2,
      y:
        this.rootContainerService.getGameSize().height / 2 +
        FINAL_PANEL_SIZE.height / 2 -
        this.menuButton.container.height / 2 -
        FINAL_PANEL_GAP,
    });
    if (this.nextButton) {
      this.restartButton.setPosition({
        x:
          this.rootContainerService.getGameSize().width / 2 -
          this.restartButton.container.width / 2 -
          FINAL_PANEL_GAP / 2,
        y: this.rootContainerService.getGameSize().height / 2,
      });

      this.nextButton.setPosition({
        x:
          this.rootContainerService.getGameSize().width / 2 +
          this.nextButton.container.width / 2 +
          FINAL_PANEL_GAP / 2,
        y: this.rootContainerService.getGameSize().height / 2,
      });
    } else {
      this.restartButton.setPosition({
        x: this.rootContainerService.getGameSize().width / 2,
        y: this.rootContainerService.getGameSize().height / 2,
      });
    }
  };

  private createPanel(): Sprite {
    const background = new Sprite(Assets.get(BACKGROUND_IMAGE_TOKENS.FinalPanelBackground));

    background.anchor.set(0.5);
    background.width = FINAL_PANEL_SIZE.width;
    background.height = FINAL_PANEL_SIZE.height;

    return background;
  }

  private createContainer(): Container {
    const container = new Container();

    return container;
  }
}

injected(
  SceneEntity,
  DI_TOKENS.rootContainerService,
  DI_TOKENS.buttonFactory,
  DI_TOKENS.backgroundFactory,
  DI_TOKENS_FINISH_SCENE.titleFactory,
);
