class Personnage {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        let caseInit = document.getElementById('case-' + this.y + "-" + this.x)
        let divPerso = document.createElement('div');
        divPerso.setAttribute('id', 'perso');
        console.log(divPerso);
        console.log(caseInit);
        caseInit.appendChild(divPerso);
    }

    move(direction) {
        let validMove = true;
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
        if(map.isMovable(newX, newY, direction)){
            Block.get(newX, newY).move(direction);
        }
        if(map.isTraversable(newX, newY)){
            this.x = newX;
            this.y = newY;
            this.updatePersoPosition();
        } else {
            console.log("Erreur déplacement");
        }
    }

    updatePersoPosition(){
        let casePerso = document.getElementById('perso');
        let caseTarget = document.getElementById('case-' + this.y + "-" + this.x);
        casePerso.remove();
        caseTarget.appendChild(casePerso);
    }
}