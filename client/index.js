import 'normalize.css';
import Game from './game';

if (module.hot) {
    module.hot.accept('./game', () => {
        window.game.destroy();
        window.game = new Game();
    });
}
