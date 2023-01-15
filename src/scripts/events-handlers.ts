import Core from './core';
import SquaresList from "./squares-list";
//core and boardsList class
const boardsList = new SquaresList();
const core = new Core(boardsList);

export const clickHandler = (event: Event) => {
    if (core.userTurn) {
        core.userTurn = false;
        const colNumber = Number((event.currentTarget as any).dataset.col);
        const el = document.getElementById(`square-${colNumber}`);
        el.classList.add('rotate-left');
        boardsList.setBoards('X', colNumber);
        core.botTurn()
    }
}