class Block {
    constructor(y, x, type) {
        this.x = x;
        this.y = y;
        this.type = type;
    }

    init(){
        let pos = "case-" + this.y + "-" + this.x;
        let caseInit = document.getElementById(pos);
        let divBlock = document.createElement('div');
        divBlock.classList.add(this.type);
        divBlock.classList.add("block");
        caseInit.appendChild(divBlock);
    }
}