// https://academy.zerotomastery.io/courses/697434/lectures/24955213

// child scope always has access to parent scope

const parentFunc = () => {
    const greet = 'I\'m a parent';
    const childFunc = () => {
        alert(greet);
    }
    return childFunc;
}

const newParent = parentFunc();

newParent();

// this calls parentFunc() which instantiates a greet constant and then calls childFunc() which 'ALERT' the greet constant.


// closure

// function ran, will never run again, but will remember there are references to those variables. The child Scope always has access to parent scope


//children alway have access to parent scope, 
// parents do NOT always have access to their child scope

// -0-0-0-0-

