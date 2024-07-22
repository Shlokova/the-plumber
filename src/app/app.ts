import { Group } from 'tweedle.js';
import { injected } from 'brandi';
import { DI_TOKENS } from './di/tokens';
import { RootContainerService } from './services/root-container.services';
import { SceneManager, SceneName } from './managers/scene.manager';

export class App {
  constructor(
    private readonly rootContainerService: RootContainerService,
    private readonly sceneManager: SceneManager,
  ) {}

  public async start(): Promise<void> {
    this.rootContainerService.init();
    await this.sceneManager.startScene(SceneName.BootScene);
    this.rootContainerService.app.ticker.add(() => {
      Group.shared.update(this.rootContainerService.app.ticker.deltaMS);
    });
  }
}

injected(App, DI_TOKENS.rootContainerService, DI_TOKENS.sceneManager);
