class Map {
    constructor(dimension) {
        this.dimension = dimension;
        this.width = dimension;
        this.height = dimension;
        this.personnage;
    }

    create() {
        let tbody = document.getElementsByTagName('tbody')[0];
        Array.from(tbody.children).forEach((e) => e.remove());

        for (let i = 0; i < this.dimension; i++) {
            let tr = document.createElement('tr');
            for (let j = 0; j < this.dimension; j++){
                let td = document.createElement('td');
                td.setAttribute('id', i+'-'+j)
                tr.appendChild(td);
            }            
            tbody.appendChild(tr);
        }
    }

    initPersonnage(){
        let perso = new Personnage("Pipou", Math.floor(dimension / 2), dimension - 1, this);
        let caseInit = document.getElementById(perso.y + "-" + perso.x)
        console.log(caseInit);
        let divPerso = document.createElement('div');
        divPerso.setAttribute('id', 'perso');
        caseInit.appendChild(divPerso);
        this.personnage = perso;
        return perso;
    }

    initEventListeners(){
        window.addEventListener("keyup", event => {
            this.personnage.move(event.key);
        });
           
    }
    
    

}