import { PipeService } from '../services/pipes.service';
import { injected } from 'brandi';
import { Assets, Container, Sprite } from 'pixi.js';
import { PipeEntity, PipeEntityParams } from './pipe.entity';
import { DI_TOKENS_GAME_SCENE } from '../di/tokens';
import { FieldParams, Size } from '../../../../types';
import { BACKGROUND_IMAGE_TOKENS, GAME_FIELD_PADDING } from '../../../../constants';
import { PipeType } from 'src/configs/pipes.config';

export type FieldEntityParams = {
  field: FieldParams;
  size: Size;
  onWin: () => void;
};

export class FieldEntity {
  public readonly container: Container;
  private readonly field!: PipeEntity[][];
  private readonly pipes: Container;
  private readonly background!: Sprite;

  constructor(
    private readonly pipeService: PipeService,
    private readonly createPipe: (params: PipeEntityParams) => PipeEntity,
  ) {
    this.container = this.createContainer();
    this.pipes = new Container();

    this.container.addChild(this.pipes);
  }

  public __init(params: FieldEntityParams): void {
    //@ts-ignore
    this.background = this.createBackground();
    this.container.addChildAt(this.background, 0);
    //@ts-ignore
    this.field = this.createField(params.field, params.size);

    this.pipeService.fillPipes(this.field);
    this.bindFieldAction(params.onWin);
  }

  public destroy(): void {
    this.container.destroy();
  }

  public setPosition(position: { x: number; y: number }): void {
    this.container.position.x = position.x - this.container.width / 2;
    this.container.position.y = position.y - this.container.height / 2;
  }

  public setSize(size: { width: number; height: number }): void {
    this.setSizeBackground(size);
    this.setPipesPosition({
      x: (size.width - GAME_FIELD_PADDING * 2) / 2,
      y: (size.height - GAME_FIELD_PADDING * 2) / 2,
    });
  }

  private setSizeBackground(size: { width: number; height: number }): void {
    const { width, height } = size;

    if (width > height) {
      this.background.rotation = 0;
      this.background.width = width;
      this.background.height = height;
    } else {
      this.background.rotation = Math.PI / 2;
      this.background.height = width;
      this.background.width = height;
    }

    this.background.x = width / 2;
    this.background.y = height / 2;
  }

  private setPipesPosition(position: { x: number; y: number }): void {
    const { x, y } = position;

    this.pipes.x = GAME_FIELD_PADDING + x - this.pipes.width / 2;
    this.pipes.y = GAME_FIELD_PADDING + y - this.pipes.height / 2;
  }

  private bindFieldAction(onWin: () => void) {
    this.field.forEach((rows) =>
      rows.forEach((el) =>
        el.bindAction(() => {
          this.pipeService.fillPipes(this.field);
          if (this.pipeService.checkPipesAreFull(this.field)) {
            onWin();
          }
        }),
      ),
    );
  }

  private createField(fieldParams: FieldParams, size: Size): PipeEntity[][] {
    const { width, height } = size;

    return fieldParams.map((row, i) =>
      row.map((params, j) => {
        const pipe = this.createPipe({
          ...params,
          col: i,
          row: j,
          size: {
            width: Math.min(
              (width - GAME_FIELD_PADDING * 2) / fieldParams.length,
              (height - GAME_FIELD_PADDING * 2) / row.length,
            ),
            height: Math.min(
              (width - GAME_FIELD_PADDING * 2) / fieldParams.length,
              (height - GAME_FIELD_PADDING * 2) / row.length,
            ),
          },
        });

        this.pipes.addChild(pipe.container);

        return pipe;
      }),
    );
  }

  private createBackground(): Sprite {
    const background = new Sprite(Assets.get(BACKGROUND_IMAGE_TOKENS.FieldBackground));

    background.anchor.set(0.5);

    return background;
  }

  private createContainer(): Container {
    const container = new Container();

    return container;
  }
}

injected(FieldEntity, DI_TOKENS_GAME_SCENE.fillPipeService, DI_TOKENS_GAME_SCENE.pipeFactory);
