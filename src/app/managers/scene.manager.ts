import { Factory, injected } from 'brandi';
import { BootScene } from '../scenes/boot/boot.scene';
import { DI_TOKENS_BOOT_SCENE } from '../scenes/boot/di/tokens';
import { GameScene } from '../scenes/game/game.scene';
import { StartScene } from '../scenes/start/start.scene';
import { FinishScene } from '../scenes/finish/finish.scene';
import { DI_TOKENS_GAME_SCENE } from '../scenes/game/di/tokens';
import { DI_TOKENS_START_SCENE } from '../scenes/start/di/tokens';
import { DI_TOKENS_FINISH_SCENE } from '../scenes/finish/di/tokens';
import { MenuScene } from '../scenes/menu/menu.scene';
import { DI_TOKENS_MENU_SCENE } from '../scenes/menu/di/tokens';

type Scene = BootScene | GameScene | StartScene | FinishScene | MenuScene;
export enum SceneName {
  BootScene = 'BootScene',
  GameScene = 'GameScene',
  MenuScene = 'MenuScene',
  StartScene = 'StartScene',
  FinishScene = 'FinishScene',
}

export class SceneManager {
  private activeScene: Scene | null = null;

  constructor(
    private readonly createBootScene: Factory<BootScene>,
    private readonly createGameScene: Factory<GameScene>,
    private readonly createMenuScene: Factory<MenuScene>,
    private readonly createStartScene: Factory<StartScene>,
    private readonly createFinishScene: Factory<FinishScene>,
  ) {}

  public async startScene(sceneName: SceneName): Promise<void> {
    this.destroyActiveScene();

    this.activeScene = this.createScene(sceneName);
    await this.activeScene.start();
  }

  private createScene(sceneName: SceneName): Scene {
    switch (sceneName) {
      case SceneName.BootScene:
        return this.createBootScene();
      case SceneName.StartScene:
        return this.createStartScene();
      case SceneName.MenuScene:
        return this.createMenuScene();
      case SceneName.GameScene:
        return this.createGameScene();
      case SceneName.FinishScene:
        return this.createFinishScene();
      default:
        throw new Error(`Scene=${sceneName} not created`);
    }
  }

  private destroyActiveScene(): void {
    if (this.activeScene) {
      this.activeScene.destroy();
      this.activeScene = null;
    }
  }
}

injected(
  SceneManager,
  DI_TOKENS_BOOT_SCENE.bootSceneFactory,
  DI_TOKENS_GAME_SCENE.gameSceneFactory,
  DI_TOKENS_MENU_SCENE.menuSceneFactory,
  DI_TOKENS_START_SCENE.startSceneFactory,
  DI_TOKENS_FINISH_SCENE.finishSceneFactory,
);
