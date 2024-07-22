import { Factory, token } from 'brandi';
import { GameScene } from '../game.scene';
import { SceneEntity, SceneEntityParams } from '../entities/scene.entity';
import { FieldEntity, FieldEntityParams } from '../entities/field.entity';
import { PipeEntity, PipeEntityParams } from '../entities/pipe.entity';
import { ConnectionService } from '../services/connections.service';
import { PipeService } from '../services/pipes.service';
import { TimerEntity } from '../entities/timer.entity';
import { LevelNumberEntity } from '../entities/level-number.entity';
import { WaterfallEntity } from '../entities/waterfall.entity';

export const DI_TOKENS_GAME_SCENE = {
  gameSceneFactory: token<Factory<GameScene>>('Factory<GameScene>'),

  sceneFactory: token<Factory<SceneEntity, [params: SceneEntityParams]>>('Factory<SceneEntity>'),
  fieldFactory: token<Factory<FieldEntity, [params: FieldEntityParams]>>('Factory<FieldEntity>'),
  pipeFactory: token<Factory<PipeEntity, [params: PipeEntityParams]>>('Factory<PipeEntity>'),
  timerEntity: token<TimerEntity>('TimerEntity'),
  levelNumberFactory: token<LevelNumberEntity>('LevelNumberEntity'),
  connectionService: token<ConnectionService>('ConnectionService'),
  fillPipeService: token<PipeService>('FillPipeService'),
  waterfallFactory: token<Factory<WaterfallEntity>>('Factory<WaterfallEntity>'),
};
