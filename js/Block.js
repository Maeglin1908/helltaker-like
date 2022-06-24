class Block {
    static blocks = [];

    constructor(y, x, type) {
        this.x = x;
        this.y = y;
        this.type = type;
        let pos = "case-" + this.y + "-" + this.x;
        let caseInit = document.getElementById(pos);
        let divBlock = document.createElement('div');
        divBlock.classList.add(this.type);
        divBlock.classList.add("block");
        caseInit.appendChild(divBlock);
        Block.blocks.push(this);
    }

    static get(x, y) {
        let rightBlock = null;
        for (let b of Block.blocks) {
            if (b.x == x && b.y == y) {
                return b;
            }
        }
        return null;
    }

    move(direction) {
        let newX = this.x;
        let newY = this.y;
        switch (direction) {
            case "ArrowUp":
            case "z":
                newY--;
                break;
            case "ArrowDown":
            case "s":
                newY++;
                break;
            case "ArrowLeft":
            case "q":
                newX--;
                break;
            case "ArrowRight":
            case "d":
                newX++;
                break;
            default:
                break;
        }
        if (map.isTraversable(newX, newY)) {
            this.updateBlockPosition(this.x, this.y, newX, newY);
            this.x = newX;
            this.y = newY;
        } else {
            console.log("Erreur déplacement");
        }
    }

    updateBlockPosition(oldX, oldY, newX, newY) {
        let caseBlock = document.querySelector('#case-' + oldY + '-' + oldX + ' .block');
        let caseTarget = document.getElementById('case-' + newY + "-" + newX);
        caseBlock.remove();
        caseTarget.appendChild(caseBlock);
    }
}