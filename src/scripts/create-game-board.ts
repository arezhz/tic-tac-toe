import {IBoardsDto} from  './../models/i-boards.dto'

class CreateGameBoard {

    boards:IBoardsDto[];

    constructor() {
        this.boards = [
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

    init() {
        
    }
}

export default CreateGameBoard;