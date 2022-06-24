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

    isTraversable(x, y) {
        let exist = document.getElementById('case-' + y + '-' + x);
        if(exist === null){
            return false;
        }
        let innerBlock = document.querySelector('#case-' + y + '-' + x + ' .block');
        return innerBlock === null;
    }

    isMovable(x, y, direction){
        let innerBlock = document.querySelector('#case-' + y + '-' + x + ' .block');
        let nextX = x;
        let nextY = y;
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
        //TODO

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