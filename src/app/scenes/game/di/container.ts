import { DependencyModule } from 'brandi';
import { DI_TOKENS_GAME_SCENE } from './tokens';
import { GameScene } from '../game.scene';
import { SceneEntity } from '../entities/scene.entity';
import { FieldEntity } from '../entities/field.entity';
import { PipeEntity } from '../entities/pipe.entity';
import { ConnectionService } from '../services/connections.service';
import { PipeService } from '../services/pipes.service';
import { TimerEntity } from '../entities/timer.entity';
import { LevelNumberEntity } from '../entities/level-number.entity';
import { WaterfallEntity } from '../entities/waterfall.entity';

export function createDiModuleGameScene(): DependencyModule {
  const dm = new DependencyModule();
  dm.bind(DI_TOKENS_GAME_SCENE.gameSceneFactory).toFactory(GameScene);

  dm.bind(DI_TOKENS_GAME_SCENE.sceneFactory).toFactory(SceneEntity, (instance, params) =>
    instance.__init(params),
  );
  dm.bind(DI_TOKENS_GAME_SCENE.fieldFactory).toFactory(FieldEntity, (instance, params) =>
    instance.__init(params),
  );
  dm.bind(DI_TOKENS_GAME_SCENE.pipeFactory).toFactory(PipeEntity, (instance, params) =>
    instance.__init(params),
  );
  dm.bind(DI_TOKENS_GAME_SCENE.timerEntity).toInstance(TimerEntity).inTransientScope();
  dm.bind(DI_TOKENS_GAME_SCENE.levelNumberFactory).toInstance(LevelNumberEntity).inTransientScope();

  dm.bind(DI_TOKENS_GAME_SCENE.connectionService).toInstance(ConnectionService).inTransientScope();
  dm.bind(DI_TOKENS_GAME_SCENE.fillPipeService).toInstance(PipeService).inTransientScope();
  dm.bind(DI_TOKENS_GAME_SCENE.waterfallFactory).toFactory(WaterfallEntity);

  return dm;
}
