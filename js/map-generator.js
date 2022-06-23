class Map {
    constructor(dimension) {
        this.dimension = dimension;
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
        let perso = new Personnage("Pipou", Math.floor(dimension / 2), dimension - 1);
        let caseInit = document.getElementById(perso.y + "-" + perso.x)
        console.log(caseInit);
        let divPerso = document.createElement('div');
        divPerso.setAttribute('id', 'perso');
        caseInit.appendChild(divPerso);
        return perso;
    }
    
    populateBackground(){
        let backgroundGen = 0;
        console.log(document.getElementsByTagName("td"));
        Array.from(document.getElementsByTagName("td")).forEach((e) => {
            backgroundGen = "bg-" + Math.floor(Math.random() * 9);
            e.classList.add(backgroundGen);
        })
    }

}