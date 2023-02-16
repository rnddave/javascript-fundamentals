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


// someone on DISCORD proposed this, which I like: 

/*

class Plant {
    constructor(alive, animal) {
        this.alive = alive;
        this.animal = animal;
    }
    
    checkPlant() {
        if (this.alive && !this.animal) {
            console.log('this must be a plant');
            return true;
        }
    }
}

class Tree extends Plant {
    constructor(alive, animal, wood) {
        super(alive, animal);
        this.wood = wood;
    }

    checkWood() {
        if (this.checkPlant() && this.wood) {     
            console.log('this must be a tree');
            return true;
        }
    }
}

class Conifer extends Tree {
    constructor(alive, animal, wood, evergreen) {
        super( alive, animal, wood);
        this.conifer = evergreen;
    }

    checkEvergreen() {
        if (this.checkWood() && this.conifer) {
            console.log('this must be an evergreen tree');
            return true;
        }
    }
}

class NorwegianSpruce extends Conifer {
    constructor(alive, animal, wood, evergreen, xmasTree) {
        super(alive, animal, wood, evergreen);
        this.xmasTree = xmasTree;
    }
    
    checkXmasTree() {
        if (this.checkEvergreen() && this.xmasTree) {
            console.log('this could be your xmas tree');
            return true;
        }
    }
}

let myXmasTreeHunt = new NorwegianSpruce(true, false, true, true, true);
myXmasTreeHunt.checkXmasTree();

*/
