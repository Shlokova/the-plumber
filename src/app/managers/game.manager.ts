import { injected } from 'brandi';
import { SceneManager, SceneName } from './scene.manager';
import { DI_TOKENS } from '../di/tokens';
import { LEVELS } from '../../configs/levels.config';
import { LevelParams } from '../../types';

export enum GameStatus {
  Playing = 'playing',
  Win = 'win',
  Lose = 'lose',
  Pause = 'pause',
}

export class GameManager {
  public gameStatus: GameStatus = GameStatus.Pause;
  public curentLevel: number = 1;
  public openLevelsNumbers: number[];
  public LEVEL_COUNT = LEVELS.length;

  constructor(private readonly sceneManager: SceneManager) {
    const staradeOpenLevelsNumbers = window.localStorage.getItem('openLevels');
    if (staradeOpenLevelsNumbers) this.openLevelsNumbers = JSON.parse(staradeOpenLevelsNumbers);
    else this.openLevelsNumbers = [1];
  }

  public startGame(levelNumber: number): void {
    this.gameStatus = GameStatus.Playing;
    this.curentLevel = levelNumber;
    this.sceneManager.startScene(SceneName.GameScene);
  }

  public startNextGame(): void {
    if (!this.isNextLevelExists()) return;

    this.startGame(this.curentLevel + 1);
  }

  public restartGame(): void {
    this.startGame(this.curentLevel);
  }

  public winGame(): void {
    this.gameStatus = GameStatus.Win;
    this.sceneManager.startScene(SceneName.FinishScene);
    if (this.isNextLevelExists()) {
      this.openLevelsNumbers.push(this.curentLevel + 1);
      window.localStorage.setItem('openLevels', JSON.stringify(this.openLevelsNumbers));
    }
  }

  public loseGame(): void {
    this.gameStatus = GameStatus.Lose;
    this.sceneManager.startScene(SceneName.FinishScene);
  }

  public openMenu(): void {
    this.gameStatus = GameStatus.Pause;
    this.sceneManager.startScene(SceneName.MenuScene);
  }

  public openStartPage(): void {
    this.gameStatus = GameStatus.Pause;
    this.sceneManager.startScene(SceneName.StartScene);
  }

  public isNextLevelExists(): boolean {
    return this.curentLevel + 1 <= this.LEVEL_COUNT;
  }

  public getCurrentLevel(): LevelParams {
    return LEVELS[this.curentLevel - 1];
  }
}

injected(GameManager, DI_TOKENS.sceneManager);
