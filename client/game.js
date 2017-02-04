import 'phaser/build/custom/pixi';
import 'phaser/build/custom/p2';
import Phaser from 'phaser';

import { resolution } from './config';
import Boot from './states/boot';

class Game extends Phaser.Game {
    constructor() {
        const { width, height } = resolution;
        super(width, height, Phaser.AUTO, 'content', null);

        this.state.add('Boot', Boot, false);
        this.state.start('Boot');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Game();
});

export default Game;
