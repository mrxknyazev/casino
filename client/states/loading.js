import Phaser from 'phaser';

export default class extends Phaser.State {
    preload() {
        this.add.text(
            100,
            200,
            'Loading...', {
                font: 'Bahiana',
                fontSize: 180,
                fill: '#ff0000',
                stroke: '#ffff000',
                strokeThickness: 4
            }
        );
    }

    create() {
        this.state.start('Casino');
    }
}
