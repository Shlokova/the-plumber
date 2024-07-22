import { MenuScene } from './../scenes/menu/menu.scene';
import { GameScene } from './../scenes/game/game.scene';

import { Container } from 'brandi';
import { DI_TOKENS } from './tokens';
import { ResizerService } from '../services/resizer.service';
import { SceneManager } from '../managers/scene.manager';
import { RootContainerService } from '../services/root-container.services';
import { App } from '../app';
import { DI_TOKENS_BOOT_SCENE } from '../scenes/boot/di/tokens';
import { createDiModuleBootScene } from '../scenes/boot/di/container';
import { DI_TOKENS_START_SCENE } from '../scenes/start/di/tokens';
import { createDiModulStartScene } from '../scenes/start/di/container';
import { DI_TOKENS_GAME_SCENE } from '../scenes/game/di/tokens';
import { createDiModuleGameScene } from '../scenes/game/di/container';
import { DI_TOKENS_FINISH_SCENE } from '../scenes/finish/di/tokens';
import { createDiModuleFinishScene } from '../scenes/finish/di/container';
import { DI_TOKENS_MENU_SCENE } from '../scenes/menu/di/tokens';
import { createDiModulMenuScene } from '../scenes/menu/di/container';
import { GameManager } from '../managers/game.manager';
import { ButtonEntity } from '../entities/button.entity';
import { BackgroundEntity } from '../entities/background.entity';

export const container = new Container();

export function createRootDiContainer({ $root }: { $root: HTMLElement }): Container {
  const c = new Container();

  c.bind(DI_TOKENS.$root).toConstant($root);
  c.bind(DI_TOKENS.app).toInstance(App).inSingletonScope();

  c.bind(DI_TOKENS.sceneManager).toInstance(SceneManager).inSingletonScope();
  c.bind(DI_TOKENS.gameManager).toInstance(GameManager).inSingletonScope();

  c.bind(DI_TOKENS.rootContainerService).toInstance(RootContainerService).inSingletonScope();
  c.bind(DI_TOKENS.resizerService).toInstance(ResizerService).inSingletonScope();

  c.bind(DI_TOKENS.buttonFactory).toFactory(ButtonEntity, (instance, params) =>
    instance.__init(params),
  );
  c.bind(DI_TOKENS.backgroundFactory).toFactory(BackgroundEntity, (instance, params) =>
    instance.__init(params),
  );

  c.use(DI_TOKENS_BOOT_SCENE.bootSceneFactory).from(createDiModuleBootScene());
  c.use(DI_TOKENS_START_SCENE.startSceneFactory).from(createDiModulStartScene());
  c.use(DI_TOKENS_MENU_SCENE.menuSceneFactory).from(createDiModulMenuScene());
  c.use(DI_TOKENS_GAME_SCENE.gameSceneFactory).from(createDiModuleGameScene());
  c.use(DI_TOKENS_FINISH_SCENE.finishSceneFactory).from(createDiModuleFinishScene());

  return c;
}
