import './../styles.scss';
import createGameBoard from './scripts/create-game-board';
import {clickHandler} from "./scripts/events-handlers";

const create = new createGameBoard();
create.init();

const elements = document.querySelectorAll('.game-square');

elements.forEach(e => {
    e.addEventListener('click', (e) => clickHandler(e))
})

