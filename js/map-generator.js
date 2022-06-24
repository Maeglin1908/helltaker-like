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
        if (exist === null) {
            return false;
        }
        for (let e of Array.from(exist.children)) {
            if (Array.from(e.classList).indexOf('ladder') != -1) {
                return true;
            }
        };
        let innerBlock = document.querySelector('#case-' + y + '-' + x + ' .block');
        return innerBlock === null;
    }

    isMovable(x, y, direction) {
        let box = document.querySelector('#case-' + y + '-' + x + ' .box');
        if (box === null) {
            return false;
        }
        let newX = x;
        let newY = y;
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
        //TODO
        let asideTileExist = document.querySelector('#case-' + newY + '-' + newX);
        if (asideTileExist === null) {
            return false;
        }
        let asideTile = document.querySelector('#case-' + newY + '-' + newX + ' .block');
        if (asideTile === null) {
            return true;
        }
        return false;
    }

    populateBackground() {
        let backgroundGen = 0;
        Array.from(document.getElementsByTagName("td")).forEach((e) => {
            let [, y, x] = e.id.split("-");
            let grassMin = Math.floor((this.width) / 3);
            let grassMax = Math.floor(grassMin*2);
            if(x!=0&&y==0&&x!=this.width-1){
                backgroundGen = "wallUp";
                let divWall = document.createElement('div');
                divWall.classList.add("block");
                divWall.classList.add("wallUp");
                e.appendChild(divWall);
            }else if(y==this.height-1&&x!=0&&x!=this.width-1){
                let divWall = document.createElement('div');
                divWall.classList.add("block");
                divWall.classList.add("wallDown");
                e.appendChild(divWall);
                backgroundGen = "wallDown";
            }else if(x==0 && y!=0 && y != this.height-1){
                let divWall = document.createElement('div');
                divWall.classList.add("block");
                divWall.classList.add("wallLeft");
                e.appendChild(divWall);
                backgroundGen = "wallLeft";
            }else if(x==this.width-1 && y!=0&&y!=this.height-1){
                let divWall = document.createElement('div');
                divWall.classList.add("block");
                divWall.classList.add("wallRight");
                e.appendChild(divWall);
                backgroundGen = "wallRight";         
            }else if(x==0 && y==0){
                backgroundGen = "cornerUL";
                let divCorner = document.createElement('div');
                divCorner.classList.add("block");
                divCorner.classList.add("cornerUL");
                e.appendChild(divCorner);
            }else if(x==this.width-1 && y==0){
                backgroundGen = "cornerUR";
                let divCorner = document.createElement('div');
                divCorner.classList.add("block");
                divCorner.classList.add("cornerUR");
                e.appendChild(divCorner);
            }else if(x==0 && y==this.height-1){
                backgroundGen = "cornerDL";
                let divCorner = document.createElement('div');
                divCorner.classList.add("block");
                divCorner.classList.add("cornerDL");
                e.appendChild(divCorner);
            }else if(x==this.width-1 && y==this.height-1){
                backgroundGen = "cornerDR";
                let divCorner = document.createElement('div');
                divCorner.classList.add("block");
                divCorner.classList.add("cornerDR");
                e.appendChild(divCorner);
            }else if (grassMin <= x && x < grassMax) {
                backgroundGen = "pt-" + Math.floor(Math.random() * 7);
            } else {
                backgroundGen = "gr-" + Math.floor(Math.random() * 7);
            }
            e.classList.add(backgroundGen);
        })
    }

    isWin() {
        let isWin = document.querySelector('.ladder+#perso');
        if (isWin !== null) {
            let winDiv = document.createElement('div');
            winDiv.setAttribute('id', 'win');
            winDiv.innerHTML = "YOU WIN";

            document.querySelector('#map tbody').appendChild(winDiv);
            window.removeEventListener("keyup", handleKeyupEvent);
        }
    }

}