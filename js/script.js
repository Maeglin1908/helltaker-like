// let blocks = [];
<<<<<<< HEAD
let dimension = 15;
let personnage; // = new Personnage();
let map = new Map(1);
=======
let dimension = 19;
let map = new Map(dimension);
>>>>>>> d66e8a4805dbb1cf435afd72ddee73102c0c10e8
map.create();
map.populateBackground();

// DONT ADD CODE AFTER THIS BLOCK
// UNLESS ITS OTHERS EVENT LISTENERS

let handleKeyupEvent = window.addEventListener("keyup", event => {
    personnage.move(event.key);
    map.isWin();
});