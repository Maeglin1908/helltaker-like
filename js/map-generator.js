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
            let [, y, x] = e.id.split("-");
            let grassMin = Math.floor(this.width / 3);
            let grassMax = grassMin * 2;
            if(x!=0&&y==0&&x!=this.width-1){
                backgroundGen = "wallUp";
                e.classList.add("block");
            }else if(y==this.height-1&&x!=0&&x!=this.width-1){
                e.classList.add("block");
                backgroundGen = "wallDown";
            }else if(x==0 && y!=0 && y != this.height-1){
                e.classList.add("block");
                backgroundGen = "wallLeft";
            }else if(x==this.width-1 && y!=0&&y!=this.height-1){
                e.classList.add("block");
                backgroundGen = "wallRight";
                e.classList.add("reverse-270");         
            }else if(x==0 && y==0){
                backgroundGen = "cornerUL";
                e.classList.add("block");
            }else if(x==this.width-1 && y==0){
                backgroundGen = "cornerUR";
                e.classList.add("block");
            }else if(x==0 && y==this.height-1){
                backgroundGen = "cornerDL";
                e.classList.add("block");
            }else if(x==this.width-1 && y==this.height-1){
                backgroundGen = "cornerDR";
                e.classList.add("block");
            }else if (grassMin <= x && x < grassMax) {
                backgroundGen = "pt-" + Math.floor(Math.random() * 7);
            } else {
                backgroundGen = "gr-" + Math.floor(Math.random() * 7);
            }
            e.classList.add(backgroundGen);
        })
    }

}