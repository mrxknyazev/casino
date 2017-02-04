import Phaser from 'phaser';
import { resolution } from '../config';

export default class extends Phaser.State {
    preload() {
        this.load.image('sky', 'assets/sky.jpg');
    }

    render() {
        const { width, height } = resolution;
        const background = this.add.sprite(0, 0, 'sky');

        background.scale.setTo(
            width / background.width,
            height / background.height
        );
    }
}
