// let blocks = [];
let personnage; // = new Personnage();
let map = new Map(1);
map.create();
map.populateBackground();

// DONT ADD CODE AFTER THIS BLOCK
// UNLESS ITS OTHERS EVENT LISTENERS

let handleKeyupEvent = window.addEventListener("keyup", event => {
    personnage.move(event.key);
    map.isWin();
});