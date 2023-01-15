import {IBoardsDto} from "../models/i-boards.dto";
import SquaresList from "./squares-list";
import X from '../assets/images/X.png';
import O from '../assets/images/O.png';


class CreateGameBoard {
    private readonly boards: IBoardsDto[];

    constructor() {
        this.boards = new SquaresList().boards;
    }

    init() {
        Object.keys(this.boards).forEach((item, index) => {
            const squareNode = document.createElement('div');
            squareNode.className = 'game-square';
            squareNode.id = `square-${index}`
            squareNode.dataset.col = index.toString();
            squareNode.innerHTML = `
                    <span class="empty-square"></span>
                    <span class="shape-square shape-square-X">
                        <img src=${X} alt="X">
                    </span>
                    <span class="shape-square shape-square-O">
                        <img src=${O} alt="O">
                    </span>
            `
            document.getElementById('game-board').appendChild(squareNode)
        })

    }
}

export default CreateGameBoard;