// let blocks = [];
let dimension = 15;
let map = new Map(dimension);
map.create();
let personnage = new Personnage();
map.populateBackground();
let wall = new Block(10, 4, "wall");
let ladder = new Block(0, 9, "ladder");
let box = new Block(5, 5, "box");
// blocks.push(wall);
// blocks.push(ladder);
// blocks.push(box);
// DONT ADD CODE AFTER THIS BLOCK
// UNLESS ITS OTHERS EVENT LISTENERS

let handleKeyupEvent = window.addEventListener("keyup", event => {
    personnage.move(event.key);
    map.isWin();
});