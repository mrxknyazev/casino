import 'normalize.css';
import Game from './game';

if (module.hot) {
    module.hot.accept('./game', () => {
        new Game();
    });
}
