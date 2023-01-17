import Core from './core';
import SquaresList from "./squares-list";
//core and boardsList class
const boardsList = new SquaresList();
const core = new Core(boardsList);

export const clickHandler = (event: Event) => {
    if (core.userTurn && !core.gameOver) {
        const colNumber = Number((event.currentTarget as any).dataset.col);
        if (boardsList.boards[colNumber].status === null) {
            core.userTurn = false;
            const el = document.getElementById(`square-${colNumber}`);
            el.classList.add('rotate-left');
            boardsList.setBoards('X', colNumber);
            core.winCheckHandler()
            if (!core.gameOver && !core.userTurn && core.gameResult === null) {
                core.botTurn()
            }
        }
    }
}

export const resetHandler = (event: Event) => {
    core.resetHandler();
}