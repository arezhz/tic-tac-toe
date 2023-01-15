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
                } else {
                    this.changeDocument(2);
                }
            } else if(boardsLength === 3 &&
              ((boards[0].status === 'X' && boards[8].status === 'X') ||
                (boards[2].status === 'X' && boards[6].status === 'X'))
            ) {
                let isNull = false;
                do {
                    const rndNumber= Math.floor(Math.random() * 8);
                    if(boards[rndNumber].status === null) {
                        isNull = true;
                        this.changeDocument(rndNumber);
                    }
                } while(!isNull)
            } else {

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