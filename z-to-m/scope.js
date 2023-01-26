// scope

// root scope

var fun = 5; 

function funFunction() {
    //child scope
    var fun = 'HELLOOOO';
    console.log(2, fun);
}

function funerFunction() {
    //child scope
    var fun = 'Byeeeee';
    console.log(4, fun);
}

function funestFunction() {
    //child scope
    fun = 'What?';  // lloks like this updated the global variable
    console.log(6, fun);
}

console.log(1, fun);
funFunction();
console.log(3, fun);
funerFunction();
console.log(5, fun);
funestFunction();
console.log(7, fun);