import { GameManager } from './../../managers/game.manager';
import { injected } from 'brandi';
import { SceneEntity, SceneEntityParams } from './entities/scene.entity';
import { RootContainerService } from '../../../app/services/root-container.services';
import { DI_TOKENS_FINISH_SCENE } from './di/tokens';
import { DI_TOKENS } from '../../../app/di/tokens';

export class FinishScene {
  private readonly scene: SceneEntity;
  constructor(
    private readonly rootContainerService: RootContainerService,
    private readonly gameManager: GameManager,
    private readonly createScene: (params: SceneEntityParams) => SceneEntity,
  ) {
    this.scene = this.createScene({
      isNextLevelExists: this.gameManager.isNextLevelExists(),
      onMenuClick: () => this.gameManager.openMenu(),
      onNextButtonClick: () => this.gameManager.startNextGame(),
      onRestartButtonClick: () => this.gameManager.restartGame(),
    });

    this.rootContainerService.addChild(this.scene.container);
  }

  public async start(): Promise<void> {}

  public destroy(): void {
    this.scene.destroy();
  }
}

injected(
  FinishScene,
  DI_TOKENS.rootContainerService,
  DI_TOKENS.gameManager,
  DI_TOKENS_FINISH_SCENE.sceneFactory,
);
