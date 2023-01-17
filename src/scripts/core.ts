import {IBoardsDto} from "../models/i-boards.dto";
import {IGameResultType} from "../models/i-game-result.type";
import {IGameResultHistoryDto} from "../models/i-game-result-history.dto";

class Core {
    gameBoard: any;
    userTurn = true;
    userStart = true;
    gameResult: IGameResultType = null;
    gameOver = false;
    winList = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 4, 6],
        [3, 4, 5],
        [2, 5, 8],
        [6, 7, 8],
    ];
    gameResultHistory: IGameResultHistoryDto = {
        O: 0,
        X: 0
    }

    constructor(boardList: any) {
        this.gameBoard = boardList;
    }

    botTurn() {
        const boards = this.gameBoard.boards;
        const boardsLength = boards.filter((f: IBoardsDto) => f.status !== null).length;

        setTimeout(() => {
            if (boardsLength <= 1) {
                if (boards[4].status === null) {
                    this.changeDocument(4);
                } else {
                    this.changeDocument(2);
                }
            } else {
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
                this.winCheckHandler();
                console.log(this.gameOver);
                console.log(this.gameResult);
                if (checkCross && this.gameResult === null) {
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

    winCheckHandler() {
        this.winList.forEach(f => {
            if (this.gameBoard.boards[f[0]].status !== null &&
                this.gameBoard.boards[f[0]].status === this.gameBoard.boards[f[1]].status &&
                this.gameBoard.boards[f[0]].status === this.gameBoard.boards[f[2]].status) {
                this.gameResult = this.gameBoard.boards[f[0]].status === 'X' ? 'XWin' : 'OWin';
                if (this.gameBoard.boards[f[0]].status === 'X') {
                    this.gameResultHistory['X'] += 1;
                } else {
                    this.gameResultHistory['O'] += 1;
                }
                this.gameOver = true;
            }
        })

        const gameOver = this.gameBoard.boards.every((e: IBoardsDto) => e.status !== null);
        if (gameOver && this.gameResult === null) {
            this.gameResult = 'Draw';
            this.gameOver = true;
        }

    }

    core(index: number, player: 'X' | 'O') {
        const boards = JSON.parse(JSON.stringify(this.gameBoard.boards));
        boards[index].status = player;
        const result = this.winList.filter(f => f.includes(index));
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