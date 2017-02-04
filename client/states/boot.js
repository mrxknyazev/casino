import Phaser from 'phaser';

export default class extends Phaser.State {
    preload() {
        // TODO avoid using Webfonts from Google CDN
        window.WebFontConfig = {
            active: () => {},
            google: {
                families: ['Bahiana']
            }
        };

        this.load.image('background', 'assets/casino_green.jpg');
        this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    }

    create() {
        this.state.start('Loading');
    }
}
