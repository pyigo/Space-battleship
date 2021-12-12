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

// let's create a function that create and return a alienship
function createAlienship() {
    //generte random numbers for each property hull,firepower, accuracy 
    let hull = getRndInteger(3, 6);
    let firepower = getRndInteger(2, 4);
    let accuracy = getRndInteger(0.6, 0.8);

    //create alienship1 
    let alienship = new Ship(hull, firepower, accuracy);

    return alienship;
}

//   creating alienship array to contain all 6 ships  
let alienships = [];

// calling FUNCTION createAlienship() for every new ship
let alienshipOne = createAlienship();
alienships.push(alienshipOne);

let alienshipTwo = createAlienship();
alienships.push(alienshipTwo);

let alienshipThree = createAlienship();
alienships.push(alienshipThree);

let alienshipFour = createAlienship();
alienships.push(alienshipFour);

let alienshipFive = createAlienship();
alienships.push(alienshipFive);

let alienshipSix = createAlienship();
alienships.push(alienshipSix);







