import { PipeParams, Size } from './../../../../types';
import { injected } from 'brandi';
import { Container, Graphics, Sprite, Assets, Texture } from 'pixi.js';
import { ConnectionService } from '../services/connections.service';
import { DI_TOKENS_GAME_SCENE } from '../di/tokens';
import { PipeType } from '../../../../configs/pipes.config';
import { WaterfallEntity } from './waterfall.entity';
import { Tween } from 'tweedle.js';
import { Direction } from '../../../../types';
import { START_PIPE_POSITION, WATER_ANIMATION_DURACTION } from '../../../../constants';

export type PipeEntityParams = PipeParams & {
  row: number;
  col: number;
  size: Size;
};

export class PipeEntity {
  public readonly container!: Container;
  public readonly type!: PipeType;
  public readonly fieldPosition!: { row: number; col: number };
  public connections!: Set<Direction>;
  public filled: boolean = false;
  public beforeIsFilled: boolean = false;

  private readonly size!: Size;
  private readonly image!: Sprite;
  private readonly imagesSrc!: { empty: string; fill: string };
  private waterfall: WaterfallEntity | null = null;
  private a: Tween<Graphics> | null = null;

  constructor(
    private readonly connectionService: ConnectionService,
    private readonly createWaterfall: () => WaterfallEntity,
  ) {}

  public __init(params: PipeEntityParams): void {
    //@ts-ignore
    this.type = params.pipe.type;
    this.filled = params.pipe.type === PipeType.Start || params.pipe.type === PipeType.Empty;
    //@ts-ignore
    this.size = params.size;

    this.connections = new Set(params.pipe.connections);
    //@ts-ignore
    this.fieldPosition = {
      row: params.row,
      col: params.col,
    };
    //@ts-ignore
    this.imagesSrc = {
      empty: params.pipe.emptyImg,
      fill: params.pipe.fillImg,
    };
    //@ts-ignore
    this.container = this.createContainer();
    //@ts-ignore
    this.image = this.createImage();

    this.rotateToStart(params.startPipePosition);
    this.container.addChild(this.image);
  }

  public bindAction(onClick: () => void): void {
    if (this.type === PipeType.Start || this.type === PipeType.Empty) return;

    this.container.cursor = 'pointer';

    this.container.on('pointertap', () => {
      this.rotate();
      onClick();
    });
  }

  public fill(connection: Direction, delay: number): number {
    this.filled = true;

    if (this.type === PipeType.Start || this.type === PipeType.Empty) return delay;

    const dl = this.animatePipe(connection, delay);

    if (this.type === PipeType.End) {
      this.animateEndPipe(dl);
    }

    return dl;
  }

  public clear(): void {
    if (this.type === PipeType.Empty) return;

    this.waterfall?.destroy();
    this.a?.stop();
    this.beforeIsFilled = this.filled;
    this.filled = false;
    this.image.texture = Assets.get(this.imagesSrc.empty);
  }

  public destroy(): void {
    this.waterfall?.destroy();
    this.a?.stop();
    this.container.destroy();
  }

  private rotateToStart(startPosition: START_PIPE_POSITION): void {
    for (let i = 0; i < startPosition; i++) {
      this.rotate();
    }
  }

  private animateEndPipe(delay: number): void {
    if (this.beforeIsFilled) return;

    setTimeout(() => {
      this.waterfall = this.createWaterfall();
      this.waterfall.setPosition({
        x: this.size.width / 2 - 0.1 * this.size.width,
        y: this.size.height / 2 - 0.2 * this.size.height,
      });
      this.container.addChildAt(this.waterfall.container, 0);
      setTimeout(() => {
        this.waterfall?.destroy();
      }, 1000);
    }, delay);
  }

  private animatePipe(connection: Direction, delay: number): number {
    if (this.beforeIsFilled) {
      this.image.texture = Assets.get(this.imagesSrc.fill);
      return delay;
    }

    connection = this.connectionService.getRotatedByAngleConnection(
      connection,
      this.container.angle,
    );

    const sprite = this.createImage();
    sprite.texture = Assets.get(this.imagesSrc.fill);
    const position = {
      [Direction.Right]: {
        x0: -this.size.width / 2,
        y0: this.size.height / 6,
        angle: 270,
        x1: -this.size.width / 2,
        y1: this.size.height / 2,
      },
      [Direction.Left]: {
        x0: this.size.width / 2,
        y0: -this.size.height / 6,
        angle: 90,
        x1: this.size.width / 2,
        y1: -this.size.height / 2,
      },
      [Direction.Top]: {
        x0: this.size.width / 6,
        y0: this.size.height / 2,
        angle: 180,
        x1: this.size.width / 2,
        y1: this.size.height / 2,
      },
      [Direction.Bottom]: {
        x0: -this.size.width / 6,
        y0: -this.size.height / 2,
        angle: 0,
        x1: -this.size.width / 2,
        y1: -this.size.height / 2,
      },
    };
    const mask = new Graphics()
      .beginFill(0x000000)
      .drawRect(0, 0, this.size.width / 3, 1)
      .endFill();

    mask.angle = position[connection].angle;
    sprite.mask = mask;

    this.a = new Tween(mask)
      .from({
        width: this.size.width / 3,
        height: 0,
        x: position[connection].x0,
        y: position[connection].y0,
      })
      .to(
        {
          width: this.size.width / 3,
          height: this.size.height,
          x: position[connection].x0,
          y: position[connection].y0,
        },
        WATER_ANIMATION_DURACTION / 2,
      )
      .delay(delay)
      .onStop(() => {
        mask.destroy();
        sprite.destroy();
      })
      .onComplete(() => {
        this.a = new Tween(mask)
          .from({
            width: this.size.width / 3,
            height: this.size.height,
            x: position[connection].x0,
            y: position[connection].y0,
          })
          .to(
            {
              width: this.size.width,
              height: this.size.height,
              x: position[connection].x1,
              y: position[connection].y1,
            },
            WATER_ANIMATION_DURACTION / 2,
          )
          .start()
          .onStop(() => {
            mask.destroy();
            sprite.destroy();
          })
          .onComplete(() => {
            this.image.texture = Assets.get(this.imagesSrc.fill);
            mask.destroy();
            sprite.destroy();
          });
      })
      .start();

    this.container.addChild(sprite, mask);

    return delay + WATER_ANIMATION_DURACTION;
  }

  private rotate(): void {
    this.container.rotation = (this.container.rotation + Math.PI / 2) % (2 * Math.PI);
    this.connections = this.connectionService.getRotatedConnections(this.connections);
  }

  private createContainer(): Container {
    const container = new Container();

    container.x = this.fieldPosition.row * this.size.width + this.size.width / 2;
    container.y = this.fieldPosition.col * this.size.height + this.size.height / 2;

    container.eventMode = 'static';

    return container;
  }

  private createImage(): Sprite {
    const image = this.imagesSrc.empty ? Assets.get(this.imagesSrc.empty) : Texture.EMPTY;

    const sprite = new Sprite(image);

    sprite.anchor.set(0.5);
    sprite.width = this.size.width;
    sprite.height = this.size.height;

    return sprite;
  }
}

injected(PipeEntity, DI_TOKENS_GAME_SCENE.connectionService, DI_TOKENS_GAME_SCENE.waterfallFactory);
