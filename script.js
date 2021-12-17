//batleship class creatio
const playerStats = document.querySelector('#playerStats');

const nameBox = document.querySelector('#nameBox');
const enemyStats = document.querySelector('#enemyStats');

class Ship {
    constructor(hull, firepower, accuracy) {
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy
    }

    // creating display method to display details of class Ship
    Display() {
        console.log(`hull:${this.hull}, firepower:${this.firepower}, accuracy:${this.accuracy} \n`)
    }
}
// creating uSS HelloWorld battleship
let ussHelloWorld = new Ship(20, 5, 0.7);

// Copied form https://www.w3schools.com/js/js_random.asp
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//https://stackoverflow.com/questions/17726753/get-a-random-number-between-0-0200-and-0-120-float-numbers
function getRndFloating(min, max) {
    return (Math.random() * (max - min) + min).toFixed(1);
}

// let's create a function that create and return a alienship
function createAlienship() {
    //generte random numbers for each property hull,firepower, accuracy 
    let hull = getRndInteger(3, 6);
    let firepower = getRndInteger(2, 4);
    let accuracy = getRndFloating(0.6, 0.8);

    //create alienship
    let alienship = new Ship(hull, firepower, accuracy);

    return alienship;
}
//   creating alienship array to contain all 6 ships  
let alienships = [];

// create for loop to populate array alienships
for (let i = 0; i < 6; i++) {
    let alienship = createAlienship();
    alienships.push(alienship);
}
/*
    Game: 
    make ussHelloWolrd attack each alien from 0 to alienShip.length
*/
let i = 0;

let choice = "";
do {
    // get current alienship 
    let alienship = alienships[i];

    nameBox.innerHTML = (`Enemy #${i + 1}`)
    enemyStats.innerHTML = `Hull: ${alienship.hull} </br>
                            Firepower: ${alienship.firepower} </br>
                            Accuracy: ${alienship.accuracy} </br>`

    choice = prompt("Retreat/Attack");
    console.log('choice ' + choice);

    /*
 round: a round is a battle until usshelloworld or the alienship runs out of life
 */
    if (choice === 'Attack' || choice === 'attack') {
        while (ussHelloWorld.hull > 0 && alienship.hull > 0) {
            if (ussHelloWorld.accuracy < alienship.accuracy) {
                ussHelloWorld.hull = ussHelloWorld.hull - alienship.firepower;
            }
            else {
                alienship.hull = alienship.hull - ussHelloWorld.firepower;
            }
        }
    } else {
        break
    }


    playerStats.innerHTML = `Hull: ${ussHelloWorld.hull} </br>
                            Firepower: ${ussHelloWorld.firepower} </br>
                            Accuracy: ${ussHelloWorld.accuracy} </br>`

    // after a round, find out who is alive 
    // if (ussHelloWorld.hull > 0) {
    //     alert('You win this battle \n');
    // }
    // else {
    //     alert('You lost');
    //     console.log('Earth lost');
    //     break;
    // }
    // move to next alienship
    i++;

} while (choice !== "Retreat");

// if (ussHelloWorld.hull > 0) {
//     console.log('congratulation you saved the Earth')
// }else{

// }





