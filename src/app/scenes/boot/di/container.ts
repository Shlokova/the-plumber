import { DependencyModule } from 'brandi';
import { DI_TOKENS_BOOT_SCENE } from './tokens';
import { BootScene } from '../boot.scene';

export function createDiModuleBootScene(): DependencyModule {
  const dm = new DependencyModule();
  dm.bind(DI_TOKENS_BOOT_SCENE.bootSceneFactory).toFactory(BootScene);

  return dm;
}
