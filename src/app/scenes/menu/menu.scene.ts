import { GameManager } from '../../managers/game.manager';
import { DI_TOKENS } from '../../di/tokens';
import { injected } from 'brandi';
import { SceneEntity, SceneEntityParams } from './entities/scene.entity';
import { RootContainerService } from 'src/app/services/root-container.services';
import { DI_TOKENS_MENU_SCENE } from './di/tokens';

export class MenuScene {
  private readonly scene: SceneEntity;
  constructor(
    private readonly rootContainerService: RootContainerService,
    private readonly gameManager: GameManager,
    private readonly createScene: (params: SceneEntityParams) => SceneEntity,
  ) {
    this.scene = this.createScene({
      levelsCount: this.gameManager.LEVEL_COUNT,
      openLevelsNumbers: this.gameManager.openLevelsNumbers,
      onLevelClick: (levelNumber: number) => this.gameManager.startGame(levelNumber),
    });

    this.rootContainerService.addChild(this.scene.container);
  }

  public async start(): Promise<void> {}

  public destroy(): void {
    this.scene.destroy();
  }
}

injected(
  MenuScene,
  DI_TOKENS.rootContainerService,
  DI_TOKENS.gameManager,
  DI_TOKENS_MENU_SCENE.sceneFactory,
);
