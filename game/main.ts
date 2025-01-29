// main.ts
// Example of pulling Phaser 3 (v3.60.0 or whichever version you prefer) from a CDN
import { AUTO, Scene, Game, Types } from 'phaser';

class MyScene extends Scene {
  constructor() {
    super({ key: 'MyScene' });
  }

  preload() {
    // Load assets if needed, e.g.:
    // this.load.image('logo', 'path_to_logo.png');
  }

  create() {
    this.add.text(100, 100, 'Hello Phaser + Deno!', {
      font: '24px Arial',
      color: '#ffffff',
    });
  }
}

const config: Types.Core.GameConfig = {
  type: AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#000000',
  scene: [MyScene],
};

new Game(config);
