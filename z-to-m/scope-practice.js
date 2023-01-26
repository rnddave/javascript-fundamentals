// For all of these, what is the value of a when the function gets called with the alert()
// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);   // GUESS [ 3 ] | ANSWER {  }
}

//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);   // GUESS [ 5 ] | ANSWER {  }
}


//#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);   // GUESS [ undefined ] | ANSWER {  }
}

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);   // GUESS [ 'test' ] | ANSWER {  }
}

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);   // GUESS [ 5 ] | ANSWER {  }
}
alert(a);   // GUESS [ 2 ] | ANSWER {  }