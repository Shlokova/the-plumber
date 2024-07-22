import { GameManager } from 'src/app/managers/game.manager';
import { injected } from 'brandi';
import { Assets } from 'pixi.js';
import { DI_TOKENS } from '../../di/tokens';
import { manifest } from '../../../configs/manifest';

export class BootScene {
  constructor(private readonly gameManager: GameManager) {}

  public async start(): Promise<void> {
    await this.preload();
    this.gameManager.winGame();
  }

  public destroy(): void {}

  private async preload(): Promise<void> {
    await Assets.init({ manifest });
    await Assets.loadBundle(['font', 'pipes', 'backgrounds', 'ui']);
  }
}

injected(BootScene, DI_TOKENS.gameManager);
