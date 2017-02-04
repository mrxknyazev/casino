import Phaser from 'phaser';
import { resolution } from '../config';

export default class extends Phaser.State {
    create() {
        const { width, height } = resolution;
        const background = this.add.sprite(0, 0, 'background');

        background.scale.setTo(
            width / background.width,
            height / background.height
        );

        this.renderHeading(100, 50, 'Balance');
        this.renderHeading(100, 250, 'Select symbol');
        this.renderHeading(100, 450, 'Select bet');

        this.balance = 1000;
        // TODO find a way to use text style defaults
        this.balanceLabel = this.add.text(
            100, 115, this.balance, {
                font: 'Bahiana', fontSize: 45, fill: '#ffff00'
            }
        );

        this.symbols = ['J', 'Q', 'K', 'T'];
        for (let i = 0; i !== this.symbols.length; ++i) {
            this.add.text(
                100 + i * 50, 315, this.symbols[i], {
                    font: 'Bahiana', fontSize: 75, fill: '#ffff00'
                }
            );
        }
    }

    update() {
        this.balanceLabel.setText(this.balance);
    }

    renderHeading(x, y, text) {
        this.add.text(
            x,
            y,
            text, {
                font: 'Bahiana',
                fontSize: 60,
                fill: '#ff0000',
                stroke: '#ffff000',
                strokeThickness: 2
            }
        );
    }
}
