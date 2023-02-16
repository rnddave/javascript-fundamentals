// this is just my own interest, beyond scope of the course for now

// I want to see how far I can take inheritence
/* 
class Plant {
    constructor(alive, animal) {
        this.plant = alive;
        this.plant = animal;
    }                                   // initially I was getting errors around my if statements
    if (alive == true && animal ===false) {     // stackoverflow answer to similar question suggest if statement to be inside constructor
        return console.log('this must be a plant');
    }
}

class Tree extends Plant {
    constructor(alive, animal, wood) {
        super(alive, animal);
        this.tree = wood;
    }
    if (alive == true && animal == false && wood == true) {
        return console.log('this must be a tree');
    }
}

class Conifer extends Tree {
    constructor(alive, animal, wood, evergreen) {
        super( alive, animal, wood);
        this.conifer = evergreen;
    }
    if (alive == true && animal == false && wood == true && evergreen == true) {
        return console.log('this must be an evergreen tree');
    }
}

class NorwegianSpruce extends Conifer {
    constructor(alive, animal, wood, evergreen, xmasTree) {
        super(alive, animal, wood, evergreen);
        this.xmasTree = xmasTree;
    }
    if (alive == true && animal == false && wood == true && evergreen == true && xmasTree == true) {
        return console.log('this could be your xmas tree');
    }
}

let myXmasTreeHunt = new NorwegianSpruce(true, false, true, true, true); */

class Plant {
    constructor(alive, animal) {
        this.plant = alive;
        this.plant = animal;
        if (alive == true && animal == false) {     
            return console.log('this must be a plant');
        }
    }                                   
}

class Tree extends Plant {
    constructor(alive, animal, wood) {
        super(alive, animal);
        this.tree = wood;
        if (alive == true && animal == false && wood == true) {
            return console.log('this must be a tree');
        }
    }
}

class Conifer extends Tree {
    constructor(alive, animal, wood, evergreen) {
        super( alive, animal, wood);
        this.conifer = evergreen;
        if (alive == true && animal == false && wood == true && evergreen == true) {
            return console.log('this must be an evergreen tree');
        }
    }
}

class NorwegianSpruce extends Conifer {
    constructor(alive, animal, wood, evergreen, xmasTree) {
        super(alive, animal, wood, evergreen);
        this.xmasTree = xmasTree;
        if (alive == true && animal == false && wood == true && evergreen == true && xmasTree == true) {
            return console.log('this could be your xmas tree');
        }
    }
    
}

let myXmasTreeHunt = new NorwegianSpruce(true, false, true, true, true);



