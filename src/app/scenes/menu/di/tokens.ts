import { Factory, token } from 'brandi';
import { MenuScene } from '../menu.scene';
import { SceneEntity, SceneEntityParams } from '../entities/scene.entity';
import {
  LevelSelectorPanelEntity,
  LevelSelectorPanelParams,
} from '../entities/level-selector-panel.entity';
import { LevelSelectorEntity, LevelSelectorParams } from '../entities/level-selector.entity';

export const DI_TOKENS_MENU_SCENE = {
  menuSceneFactory: token<Factory<MenuScene>>('Factory<MenuScene>'),

  sceneFactory: token<Factory<SceneEntity, [params: SceneEntityParams]>>('Factory<SceneEntity>'),
  levelSelectorPanelFactory: token<
    Factory<LevelSelectorPanelEntity, [params: LevelSelectorPanelParams]>
  >('Factory<LevelSelectorPanelEntity>'),
  levelSelectorFactory: token<Factory<LevelSelectorEntity, [params: LevelSelectorParams]>>(
    'Factory<LevelSelectorEntity>',
  ),
};
