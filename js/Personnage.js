class Personnage {
    constructor(map) {
        this.map = map;
        this.x = Math.floor(dimension / 2);
        this.y = dimension - 1;
        let caseInit = document.getElementById('case-' + this.y + "-" + this.x)
        let divPerso = document.createElement('div');
        divPerso.setAttribute('id', 'perso');
        caseInit.appendChild(divPerso);
    }

    move(direction) {
        let validMove = true;
        let newX = this.x;
        let newY = this.y;
        switch (direction) {
            case "ArrowUp":
                    newY--;
                break;
            case "ArrowDown":
                    newY++;
                break;
            case "ArrowLeft":
                    newX--;
                break;
            case "ArrowRight":
                    newX++;
                break;
            default:
                break;
        }
        if(this.map.isTraversable(newX, newY)){
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