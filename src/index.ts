import './../styles.scss';
import createGameBoard from './scripts/create-game-board';
import {clickHandler, resetHandler} from "./scripts/events-handlers";

const create = new createGameBoard();
create.init();

const elements = document.querySelectorAll('.game-square');

elements.forEach(e => {
    e.addEventListener('click', (e) => clickHandler(e))
})

document.getElementById('reset').addEventListener('click', (e)=> resetHandler(e))

