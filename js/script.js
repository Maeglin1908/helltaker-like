let dimension = 15;
let map = new Map(dimension);
map.create();
let personnage = new Personnage(map);
map.populateBackground();
let wall = new Block(10, 4, "wall");
let ladder = new Block(0, 9, "ladder");
let box = new Block(5, 5, "box");

// DONT ADD CODE AFTER THIS BLOCK
// UNLESS ITS OTHERS EVENT LISTENERS

window.addEventListener("keyup", event => {
    personnage.move(event.key);
});