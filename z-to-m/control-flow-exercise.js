//#1 change this function into a ternary and assign it to variable called experiencePoints
/* function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
} */

function experiencePoints(points) {
    var experiencePoints;
    switch (points) {
        case 10:
            experiencePoints = 'you have 10 points';
            break;
        default:
            experiencePoints = 'only 1 point';
    }
}

//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");  // undefined (BREAK in wrong place)

//#3 return value when moveCommand("back");     // you arrived home

//#4 return value when moveCommand("right");    // you found a river

//#5 return value when moveCommand("left");     // undefined (BREAK in wrong place)

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!