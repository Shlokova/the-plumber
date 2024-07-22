import { GameManager } from './../../managers/game.manager';
import { TimerEntity } from './entities/timer.entity';
import { injected } from 'brandi';
import { RootContainerService } from '../../services/root-container.services';
import { SceneEntity, SceneEntityParams } from './entities/scene.entity';
import { DI_TOKENS } from '../../di/tokens';
import { DI_TOKENS_GAME_SCENE } from './di/tokens';
import { LevelNumberEntity } from './entities/level-number.entity';

export class GameScene {
  private readonly scene!: SceneEntity;
  constructor(
    private readonly rootContainerService: RootContainerService,
    private readonly gameManager: GameManager,
    private readonly createScene: (params: SceneEntityParams) => SceneEntity,
    private readonly timer: TimerEntity,
    private readonly levelNumber: LevelNumberEntity,
  ) {}

  public async start(): Promise<void> {
    //@ts-ignore
    this.scene = this.createScene({
      level: this.gameManager.getCurrentLevel(),
      onWin: () => {
        this.timer.stop();
        this.gameManager.winGame();
      },
    });
    this.timer.startTimer({
      time: this.gameManager.getCurrentLevel().timeLimit,
      onComplete: () => this.gameManager.loseGame(),
    });

    this.rootContainerService.addChild(
      this.scene.container,
      this.timer.container,
      this.levelNumber.container,
    );
  }

  public destroy(): void {
    this.scene.destroy();
    this.levelNumber.destroy();
  }
}

injected(
  GameScene,
  DI_TOKENS.rootContainerService,
  DI_TOKENS.gameManager,
  DI_TOKENS_GAME_SCENE.sceneFactory,
  DI_TOKENS_GAME_SCENE.timerEntity,
  DI_TOKENS_GAME_SCENE.levelNumberFactory,
);
