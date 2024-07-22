import { DependencyModule } from 'brandi';
import { DI_TOKENS_START_SCENE as DI_TOKENS_START_SCENE } from './tokens';
import { StartScene } from '../start.scene';
import { SceneEntity } from '../entities/scene.entity';
import { LogoEntity } from '../entities/title.entity';

export function createDiModulStartScene(): DependencyModule {
  const dm = new DependencyModule();
  dm.bind(DI_TOKENS_START_SCENE.startSceneFactory).toFactory(StartScene);

  dm.bind(DI_TOKENS_START_SCENE.sceneFactory).toFactory(SceneEntity, (instance, params) =>
    instance.__init(params),
  );
  dm.bind(DI_TOKENS_START_SCENE.logoEntity).toInstance(LogoEntity).inTransientScope();

  return dm;
}
