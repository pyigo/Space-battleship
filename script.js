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

//   creating alienship array to contain all 6 ships  
let alienships = [];

//generte random numbers for each property hull,firepower, accuracy 
let hull = getRndInteger(3, 6);
let firepower = getRndInteger(2, 4);
let accuracy = getRndInteger(0.6, 0.8);

//create alienship1 
let alienshipOne = new Ship(hull, firepower, accuracy);

//push created ship to aarray
alienships.push(alienshipOne);

// create var alienship2
// generate a new value for each property
hull = getRndInteger(3, 6);
firepower = getRndInteger(2, 4);
accuracy = getRndInteger(0.6, 0.8);
let alienshipTwo = new Ship(hull, firepower, accuracy);

// now push alienship2 in array
alienships.push(alienshipTwo);


// do same for each alienship ennemy
// generate new value for each property
// then push each new ship inside array

hull = getRndInteger(3, 6);
firepower = getRndInteger(2, 4);
accuracy = getRndInteger(0.6, 0.8);
let alienshipThree = new Ship(hull, firepower, accuracy);

alienships.push(alienshipThree);


hull = getRndInteger(3, 6);
firepower = getRndInteger(2, 4);
accuracy = getRndInteger(0.6, 0.8);
let alienshipFour = new Ship(hull, firepower, accuracy);

alienships.push(alienshipFour);

hull = getRndInteger(3, 6);
firepower = getRndInteger(2, 4);
accuracy = getRndInteger(0.6, 0.8);
let alienshipFive = new Ship(hull, firepower, accuracy);

alienships.push(alienshipFive);

hull = getRndInteger(3, 6);
firepower = getRndInteger(2, 4);
accuracy = getRndInteger(0.6, 0.8);
let alienshipSix = new Ship(hull, firepower, accuracy);

alienships.push(alienshipSix);

// let's create a function that create and return a alienship




