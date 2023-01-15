class Core {
    gameBoard: any;

    constructor(boardList: any) {
        this.gameBoard = boardList;
    }

    botTurn() {
        const boards = this.gameBoard.boards;
        console.log(boards)
    }
}

export default Core;