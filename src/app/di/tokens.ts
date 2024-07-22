import { Factory, token } from 'brandi';
import { App } from '../app';
import { SceneManager } from '../managers/scene.manager';
import { RootContainerService } from '../services/root-container.services';
import { ResizerService } from '../services/resizer.service';
import { GameManager } from '../managers/game.manager';
import { ButtonEntity, ButtonEntityParams } from '../entities/button.entity';
import { BackgroundEntity, BackgroundParams } from '../entities/background.entity';
export const DI_TOKENS = {
  $root: token<HTMLElement>('$root'),
  app: token<App>('App'),

  sceneManager: token<SceneManager>('SceneManager'),
  gameManager: token<GameManager>('GameManager'),

  rootContainerService: token<RootContainerService>('rootContainerService'),
  resizerService: token<ResizerService>('resizerService'),

  buttonFactory:
    token<Factory<ButtonEntity, [params: ButtonEntityParams]>>('Factory<ButtonEntity>'),
  backgroundFactory: token<Factory<BackgroundEntity, [params: BackgroundParams]>>(
    'Factory<BackgroundEntity>',
  ),
};
