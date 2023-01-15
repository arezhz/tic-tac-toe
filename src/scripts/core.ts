import {IBoardsDto} from "../models/i-boards.dto";

class Core {
    gameBoard: any;
    userTurn = true;

    constructor(boardList: any) {
        this.gameBoard = boardList;
    }

    botTurn() {
        const boards = this.gameBoard.boards;
        const boardsLength = boards.filter((f: IBoardsDto) => f.status !== null).length;

        setTimeout(() => {
            if (boardsLength === 1) {
                if (boards[4].status === null) {
                    this.changeDocument(4);
                } else if (boards[2].status === null) {
                    this.changeDocument(2);
                } else {
                    this.changeDocument(8);
                }
            } else if(boardsLength === 3) {

            }
        }, 1000)
    }

    changeDocument(index: number) {
        document.getElementById(`square-${index}`).classList.add('rotate-right');
        this.gameBoard.setBoards('O', index);
        this.userTurn = true;
    }
}

export default Core;