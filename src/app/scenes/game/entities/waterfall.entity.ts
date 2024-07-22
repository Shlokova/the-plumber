import { Emitter, EmitterConfigV3 } from '@pixi/particle-emitter';
import { injected } from 'brandi';
import { Container, Texture } from 'pixi.js';

export class WaterfallEntity {
  public readonly container: Container;
  private readonly emitter: Emitter;
  private readonly emittersConfig: EmitterConfigV3;

  constructor() {
    this.container = new Container();
    this.emittersConfig = this.createConfig();

    this.emitter = new Emitter(this.container, this.emittersConfig);
    this.emitter.autoUpdate = true;
    this.emitter.emit = true;
  }

  public destroy(): void {
    this.container.destroy();
  }

  public setPosition(position: { x: number; y: number }): void {
    this.container.position.x = position.x;
    this.container.position.y = position.y;
  }

  private createConfig(): EmitterConfigV3 {
    return {
      lifetime: {
        min: 0.1,
        max: 0.3,
      },
      frequency: 0.0001,
      emitterLifetime: 0,
      maxParticles: 3000,
      addAtBack: false,
      pos: {
        x: 0,
        y: 0,
      },
      behaviors: [
        {
          type: 'alphaStatic',
          config: {
            alpha: 0.75,
          },
        },
        {
          type: 'moveSpeedStatic',
          config: {
            min: 100,
            max: 120,
          },
        },
        {
          type: 'scaleStatic',
          config: {
            min: 0.48,
            max: 0.48,
          },
        },
        {
          type: 'color',
          config: {
            color: {
              list: [
                {
                  value: '375e66',
                  time: 0,
                },
                {
                  value: '689a9e',
                  time: 0.3,
                },
                {
                  value: '7ba6aa',
                  time: 0.6,
                },
                {
                  value: 'ffffff',
                  time: 1,
                },
              ],
              isStepped: false,
            },
          },
        },
        {
          type: 'rotation',
          config: {
            accel: 0,
            minSpeed: 0,
            maxSpeed: 0,
            minStart: 98,
            maxStart: 82,
          },
        },
        {
          type: 'textureRandom',
          config: {
            textures: [Texture.WHITE],
          },
        },
        {
          type: 'spawnShape',
          config: {
            type: 'torus',
            data: {
              x: 0,
              y: 0,
              radius: 2,
              innerRadius: 2,
              affectRotation: false,
            },
          },
        },
      ],
    };
  }
}

injected(WaterfallEntity);
