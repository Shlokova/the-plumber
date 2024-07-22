import { Factory, token } from 'brandi';
import { BootScene } from '../boot.scene';

export const DI_TOKENS_BOOT_SCENE = {
  bootSceneFactory: token<Factory<BootScene>>('Factory<BootScene>'),
};
