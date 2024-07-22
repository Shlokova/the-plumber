import { GameManager } from './../../managers/game.manager';
import { DI_TOKENS } from './../../di/tokens';
import { injected } from 'brandi';
import { SceneEntity, SceneEntityParams } from './entities/scene.entity';
import { DI_TOKENS_START_SCENE } from './di/tokens';
import { RootContainerService } from 'src/app/services/root-container.services';

export class StartScene {
  private readonly scene: SceneEntity;
  constructor(
    private readonly rootContainerService: RootContainerService,
    private readonly gameManager: GameManager,
    private readonly createScene: (params: SceneEntityParams) => SceneEntity,
  ) {
    this.scene = this.createScene({
      title: 'Pipes',
      startButton: {
        text: 'Play',
        onClick: () => {
          this.gameManager.openMenu();
        },
      },
      backgroundName: 'background',
    });

    this.rootContainerService.addChild(this.scene.container);
  }

  public async start(): Promise<void> {}

  public destroy(): void {
    this.scene.destroy();
  }
}

injected(
  StartScene,
  DI_TOKENS.rootContainerService,
  DI_TOKENS.gameManager,
  DI_TOKENS_START_SCENE.sceneFactory,
);
