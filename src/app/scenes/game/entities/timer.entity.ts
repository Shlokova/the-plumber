import { injected } from 'brandi';
import { Assets, Container, Sprite, Text } from 'pixi.js';
import { RootContainerService } from '../../../services/root-container.services';
import { DI_TOKENS } from '../../../../app/di/tokens';
import {
  GAME_UI_MARGIN,
  GAME_UI_TEXT_STYLE,
  TIMER_SIZE,
  TIMER_SPACE_BETWEEN_NUMERS,
  UI_IMAGE_TOKENS,
} from '../../../../constants';

export class TimerEntity {
  public readonly container: Container;
  private readonly time: Text;
  private timer = 0;
  private isTimerRunning = false;
  private onComplete: (() => void) | null = null;

  constructor(private readonly rootContainerService: RootContainerService) {
    this.container = this.createContainer();
    this.createBackground();
    this.time = this.createTime();

    this.onResize();

    this.rootContainerService.onResize(this.onResize);
  }

  public startTimer({ time, onComplete }: { onComplete: () => void; time: number }): void {
    if (this.isTimerRunning) return;

    this.timer = time;
    this.onComplete = onComplete;
    this.isTimerRunning = true;
    this.container.visible = true;
    this.rootContainerService.app.ticker.add(this.updateTimer);
  }

  public stop(): void {
    this.rootContainerService.app.ticker.remove(this.updateTimer);
    this.timer = 0;
    this.isTimerRunning = false;
    this.onComplete && this.onComplete();
    this.container.destroy();
    this.rootContainerService.removeOnResize(this.onResize);
  }

  private updateTimer = (delta: number): void => {
    this.timer -= delta / 60;

    if (this.timer <= 0) {
      this.stop();
    }

    this.updateTime(this.timer);
  };

  private updateTime(time: number) {
    let minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, '0');
    let seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, '0');

    this.time.text = `${minutes}${TIMER_SPACE_BETWEEN_NUMERS}${seconds}`;
  }

  private readonly onResize = (): void => {
    this.setPosition();
  };

  private setPosition(): void {
    const { width } = this.rootContainerService.getGameSafeAreaSize();
    const { x, y } = this.rootContainerService.getGameSafeAreaPosition();

    this.container.x = x + width - TIMER_SIZE.width - GAME_UI_MARGIN;
    this.container.y = y + GAME_UI_MARGIN;
  }

  private createTime(): Text {
    const text = new Text(`00${TIMER_SPACE_BETWEEN_NUMERS}${this.timer}`, GAME_UI_TEXT_STYLE);

    text.anchor.set(0.08, 0);
    text.x = TIMER_SIZE.width / 2 - text.width / 2;
    text.y = TIMER_SIZE.height / 2 - text.height / 2;

    this.container.addChild(text);

    return text;
  }

  private createBackground(): Sprite {
    const background = new Sprite(Assets.get(UI_IMAGE_TOKENS.TimerBackground));

    background.width = TIMER_SIZE.width;
    background.height = TIMER_SIZE.height;

    this.container.addChild(background);

    return background;
  }

  private createContainer(): Container {
    const container = new Container();

    return container;
  }
}

injected(TimerEntity, DI_TOKENS.rootContainerService);
