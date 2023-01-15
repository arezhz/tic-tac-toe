import {IBoardsDto} from "../models/i-boards.dto";

class SquaresList {
    private readonly _boards: IBoardsDto[];

    get boards(): IBoardsDto[] {
        return this._boards
    }

    constructor() {
        debugger
        this._boards = [
            {status: null},
            {status: null},
            {status: null},
            {status: null},
            {status: null},
            {status: null},
            {status: null},
            {status: null},
            {status: null}
        ]
    }

    setBoards(value: 'X' | 'O', index: number) {
        debugger
        this._boards[index].status = value;
    }

}

export default SquaresList;