import { DependencyModule } from 'brandi';
import { DI_TOKENS_MENU_SCENE as DI_TOKENS_MENU_SCENE } from './tokens';
import { MenuScene } from '../menu.scene';
import { SceneEntity } from '../entities/scene.entity';
import { LevelSelectorPanelEntity } from '../entities/level-selector-panel.entity';
import { LevelSelectorEntity } from '../entities/level-selector.entity';

export function createDiModulMenuScene(): DependencyModule {
  const dm = new DependencyModule();
  dm.bind(DI_TOKENS_MENU_SCENE.menuSceneFactory).toFactory(MenuScene);

  dm.bind(DI_TOKENS_MENU_SCENE.sceneFactory).toFactory(SceneEntity, (instance, params) =>
    instance.__init(params),
  );
  dm.bind(DI_TOKENS_MENU_SCENE.levelSelectorPanelFactory).toFactory(
    LevelSelectorPanelEntity,
    (instance, params) => instance.__init(params),
  );
  dm.bind(DI_TOKENS_MENU_SCENE.levelSelectorFactory).toFactory(
    LevelSelectorEntity,
    (instance, params) => instance.__init(params),
  );

  return dm;
}
