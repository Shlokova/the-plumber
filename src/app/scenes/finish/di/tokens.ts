import { Factory, token } from 'brandi';
import { FinishScene } from '../finish.scene';
import { TitleEntity } from '../entities/title.entity';
import { SceneEntity, SceneEntityParams } from '../entities/scene.entity';

export const DI_TOKENS_FINISH_SCENE = {
  finishSceneFactory: token<Factory<FinishScene>>('Factory<FinishScene>'),

  sceneFactory: token<Factory<SceneEntity, [params: SceneEntityParams]>>('Factory<SceneEntity>'),
  titleFactory: token<Factory<TitleEntity>>('Factory<TitleEntity>'),
};
