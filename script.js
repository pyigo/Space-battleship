//batleship class creation
class Ship {
    constructor(hull, firepower, accuracy) {
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy
    }
}
// creating uSS HelloWorld battleship
let ussHelloWorld = new Ship(20, 5, 0.7);

// Copied form https://www.w3schools.com/js/js_random.asp
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//   creating alienship 
let alienships = [];
let hull = getRndInteger(3, 6);
let firepower = getRndInteger(2, 4);
let accuracy = getRndInteger(0.6, 0.8);
let alienshipOne = new Ship();



