import { DependencyModule } from 'brandi';
import { DI_TOKENS_FINISH_SCENE } from './tokens';
import { FinishScene } from '../finish.scene';
import { SceneEntity } from '../entities/scene.entity';
import { TitleEntity } from '../entities/title.entity';

export function createDiModuleFinishScene(): DependencyModule {
  const dm = new DependencyModule();
  dm.bind(DI_TOKENS_FINISH_SCENE.finishSceneFactory).toFactory(FinishScene);

  dm.bind(DI_TOKENS_FINISH_SCENE.sceneFactory).toFactory(SceneEntity, (instance, params) =>
    instance.__init(params),
  );
  dm.bind(DI_TOKENS_FINISH_SCENE.titleFactory).toFactory(TitleEntity);

  return dm;
}
