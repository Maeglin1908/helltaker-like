class Map {
    constructor(dimension) {
        this.dimension = dimension;
        this.width = dimension;
        this.height = dimension;
        this.personnage;
    }

    create() {
        let terrain = document.getElementById("game");
        let table = document.createElement('table');
        table.setAttribute('id', 'map');

        let tbody = document.createElement('tbody');
        table.appendChild(tbody);
        terrain.appendChild(table);

        for (let i = 0; i < this.dimension; i++) {
            let tr = document.createElement('tr');
            for (let j = 0; j < this.dimension; j++) {
                let td = document.createElement('td');
                td.setAttribute('id', 'case-' + i + '-' + j)
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
    }

    initPersonnage() {
        let perso = new Personnage("Pipou", Math.floor(dimension / 2), dimension - 1, this);
        let caseInit = document.getElementById('case-' + perso.y + "-" + perso.x)
        console.log(caseInit);
        let divPerso = document.createElement('div');
        divPerso.setAttribute('id', 'perso');
        caseInit.appendChild(divPerso);
        this.personnage = perso;
        return perso;
    }

    initEventListeners() {
        window.addEventListener("keyup", event => {
            this.personnage.move(event.key);
        });
    }

    isTraversable(x, y) {
        let innerBlock = document.querySelector('#case-' + y + '-' + x + ' .block');
        // if(innerBlock )

    }

    populateBackground() {
        let backgroundGen = 0;
        Array.from(document.getElementsByTagName("td")).forEach((e) => {
            let [, x, y] = e.id.split("-");
            let grassMin = Math.floor(this.width / 3);
            let grassMax = grassMin * 2;
            if (grassMin <= y && y < grassMax) {
                backgroundGen = "pt-" + Math.floor(Math.random() * 7);
            } else {
                backgroundGen = "gr-" + Math.floor(Math.random() * 7);
            }
            e.classList.add(backgroundGen);
        })
    }

}