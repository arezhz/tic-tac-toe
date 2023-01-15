import CreateGameBoard from './create-game-board';

class Core {

    botTurn() {
        const gameBoard = new CreateGameBoard();
        const boards = gameBoard.boards;
    }
}

export default Core;