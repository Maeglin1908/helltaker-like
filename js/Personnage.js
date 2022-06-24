class Personnage {
    constructor(name, x, y, map) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.map = map;
    }

    move(direction) {
        let validMove = true;
        switch (direction) {
            case "ArrowUp":
                if (this.y > 0) {
                    this.y--;
                } else {
                    validMove = false;
                }
                break;
            case "ArrowDown":
                if (this.y < this.map.height - 1) {
                    this.y++;
                } else {
                    validMove = false;
                }
                break;
            case "ArrowLeft":
                if (this.x > 0) {
                    this.x--;
                } else {
                    validMove = false;
                }
                break;
            case "ArrowRight":
                if (this.x < this.map.width - 1) {
                    this.x++;
                } else {
                    validMove = false;
                }
                break;
            default:
                    validMove = false;
                break;
        }
        if(validMove){
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