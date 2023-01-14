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
        Object.keys(this.boards).forEach((item,index)=> {
            const squareNode= document.createElement('div');
            squareNode.className = 'game-square';
            squareNode.id = `square-${index + 1}`
            squareNode.innerHTML = `
                    <span class="empty-square"></span>
                    <span class="shape-square">
                        <img src="../assets/images/X.png" alt="X">
                        <img src="../assets/images/O.png" alt="O">
                    </span>
            `
            document.getElementById('game-board').appendChild(squareNode)
        })
        
    }
}

export default CreateGameBoard;