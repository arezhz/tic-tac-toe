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
            core.botTurn()
        }
    }
}

export const resetHandler = (event: Event) => {
    if (core.gameOver) {
        resetEvent();
        core.gameOver = false;
    } else {
        core.gameResultHistory['O'] += 1;
        resetEvent();
    }
    if (core.userStart) {
        core.userTurn = false;
        core.botTurn()
    } else {
        core.userTurn = true;
    }
    core.userStart = !core.userStart;
}

const resetEvent = () => {
    const elements = document.querySelectorAll('.game-square');
    boardsList.boards.map((m, i) => {
        m.status = null;
        elements[i].classList.remove('rotate-left')
        elements[i].classList.remove('rotate-right')
    })
}