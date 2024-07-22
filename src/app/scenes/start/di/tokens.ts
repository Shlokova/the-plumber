import { Factory, token } from 'brandi';
import { StartScene } from '../start.scene';
import { SceneEntity, SceneEntityParams } from '../entities/scene.entity';
import { LogoEntity } from '../entities/title.entity';

export const DI_TOKENS_START_SCENE = {
  startSceneFactory: token<Factory<StartScene>>('Factory<StartScene>'),

  sceneFactory: token<Factory<SceneEntity, [params: SceneEntityParams]>>('Factory<SceneEntity>'),
  logoEntity: token<LogoEntity>('LogoEntity'),
};
