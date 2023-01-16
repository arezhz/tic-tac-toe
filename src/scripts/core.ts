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
                if (checkCross) {
                    let isNull = false;
                    do {
                        const rndNumber = Math.floor(Math.random() * 8);
                        if (boards[rndNumber].status === null) {
                            isNull = true;
                            this.changeDocument(rndNumber);
                        }
                    } while (!isNull)
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
        const boards = JSON.parse(JSON.stringify(this.gameBoard.boards));
        const winList = [
            [0, 1, 2],
            [0, 3, 6],
            [0, 4, 8],
            [1, 4, 7],
            [2, 4, 6],
            [3, 4, 5],
            [2, 5, 8],
            [6, 7, 8],
        ];
        boards[index].status = player;
        const result = winList.filter(f => f.includes(index));
        for (let i = 0; i < result.length; i++) {
            if (boards[result[i][0]].status === player &&
                boards[result[i][1]].status === player &&
                boards[result[i][2]].status === player) {
                return true;
            }
        }
        return false;
    }
}

export default Core;