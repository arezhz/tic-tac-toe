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
            } else if (boardsLength === 3 &&
                ((boards[0].status === 'X' && boards[8].status === 'X') ||
                    (boards[2].status === 'X' && boards[6].status === 'X'))
            ) {
                let isNull = false;
                do {
                    const rndNumber = Math.floor(Math.random() * 8);
                    if (boards[rndNumber].status === null) {
                        isNull = true;
                        this.changeDocument(rndNumber);
                    }
                } while (!isNull)
            } else {
                debugger
                let checkCross = true;
                for (let i = 0; i < boards.length; i++) {
                    if (boards[i].status === null) {
                        const result = this.core(i, 'O');
                        if (result) {
                            this.changeDocument(i);
                            checkCross = false;
                            break;
                        }
                    }
                }
                if (checkCross) {
                    for (let i = 0; i < boards.length; i++) {
                        if (boards[i].status === null) {
                            const result = this.core(i, 'X');
                            if (result) {
                                this.changeDocument(i);
                                checkCross = false;
                                break;
                            }
                        }
                    }
                }
            }
        }, 1000)
    }

    changeDocument(index: number) {
        document.getElementById(`square-${index}`).classList.add('rotate-right');
        this.gameBoard.setBoards('O', index);
        this.userTurn = true;
    }

    core(index: number, player: 'X' | 'O') {
        const boards = this.gameBoard.boards;
        if (boards[0].status === player) {
            const winList = [
                [1, 2],
                [3, 6],
                [4, 8],
            ]
            const result = winList.find(f => f.includes(index));
            return this.checkEqually(winList, result, player);

        } else if (boards[4].status === player) {
            const winList = [
                [0, 8],
                [1, 7],
                [2, 6],
                [3, 5],
            ]
            const result = winList.find(f => f.includes(index));
            return this.checkEqually(winList, result, player);

        } else if (boards[8].status === player) {
            const winList = [
                [5, 2],
                [6, 7],
            ]
            const result = winList.find(f => f.includes(index));
            return this.checkEqually(winList, result, player);
        }
        return false;
    }

    checkEqually(winList: number[][], items: number[], player: 'X' | 'O') {
        if (items) {
            if (this.gameBoard.boards[items[0]].status === player ||
                this.gameBoard.boards[items[1]].status === player
               ) {
                return true
            } else if( this.gameBoard.boards[items[0]].status === this.gameBoard.boards[items[1]].status) {
                return true
            }
        }
        return false
    }
}

export default Core;