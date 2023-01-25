
// variables for the data collection

/* var button = document.getElementById('addItemToList');
var userInput = document.getElementById('userInputBox');
var ul = document.getElementById('shoppingList'); */

// what do we want the button to do

/* 
THIS IS KIND OF WORKING, BUT WILL ADD NEW LIST ITEMS EVEN FOR AN EMPTY USER INPUT, SO LETS FIX THAT


button.addEventListener('click', function() {
    console.log(userInput.value); // just for testing purposes

    var li = document.createElement('li');
    li.appendChild(document.createTextNode(userInput.value));
    ul.appendChild(li);

})
 */

/* 
THIS NEXT CODE EXAMPLE WORKS FOR STOPPING EMPTY LI's BUT DOESN"T PREVENT DUPLICATE ENTIRES 

button.addEventListener('click', function() {
    
    if (userInput.value.length > 0) {
        var li = document.createElement('li');

        li.appendChild(document.createTextNode(userInput.value));
        ul.appendChild(li);

        console.log(userInput.value); // testing
    } 
}) 

SO LETS FIX THAT 
*/

/* button.addEventListener('click', function() {
    
    if (userInput.value.length > 0) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(userInput.value));
        ul.appendChild(li);
        userInput.value = ''; // this clears the input box after input
    } 
})

// now we'll add a listener for the enter key (so don't need mouse clicks)

userInput.addEventListener('keypress', function(event) {
    
    if (userInput.value.length > 0 && event.keyCode === 13) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(userInput.value));
        ul.appendChild(li);
        userInput.value = ''; // this clears the input box after input
    } 
})

// THIS ALL WORKS (above) BUT there is a lotof DUPLICATION */


/* these are really useful: 

createElement
createTextNode
appendChild

PRACTICE // PRACTICE // PRACTICE */

// lets refactor the code: 

// FIRST we can see both code blocks are doing a input length check, so lets simplify that
/* function inputLengthCheck() {
    return userInput.value.length;
} */

// SECOND we can see a lot of duplicated code around creating the LI updates

/* function createListElement() {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(userInput.value));
    ul.appendChild(li);
    userInput.value = ''; // this clears the input box after input
} */

// THIRD we can have a function for adding LI
/* function addListItemsAfterClick() {
    if (inputLengthCheck() > 0) {
        createListElement();
    } 
}

function addListItemsAfterEnter(event) {
    if (inputLengthCheck() > 0 && event.keyCode === 13) {
        createListElement();
    }
}


// button click listener
button.addEventListener('click', addListItemsAfterClick);

// listener for the enter key (so don't need mouse clicks)
userInput.addEventListener('keypress', addListItemsAfterEnter);
 */
/* 
// button click listener
button.addEventListener('click', function() {
    
    if (inputLengthCheck() > 0) {
        createListElement();
    } 
})

// listener for the enter key (so don't need mouse clicks)
userInput.addEventListener('keypress', function(event) {
    
    if (inputLengthCheck() > 0 && event.keyCode === 13) {
        createListElement();
    } 
}) 
*/

///////// ------------------ /////////

// now to strike things from the list 

/* $(document).ready(function() {
    $('ul > li').click(function() {

        $(this).children('ul').classList.add('done');
    });
}); */

/* ul.addEventListener('click', function () {
    alert('this UL item was clicked');
    ul.classList.add('done');
    
}); */

/* function markDone() {

    // need to detect a mouse click on an item and then strike it off

    ul.addEventListener('click', function () {
        alert('this UL item was clicked');
    });
}
 */


var button = document.getElementById('addItemToList');
var userInput = document.getElementById('userInputBox');
var ul = document.getElementById('shoppingList');
//var idNo = 0; // I was trying to add a unique ID number for each new LI item so that I could later target them

function inputLengthCheck() {
    return userInput.value.length;
}

function createListElement() {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(userInput.value));
    ul.appendChild(li);
    //li.id.add('${idNo}');
    userInput.value = ''; // this clears the input box after input
    //idNo++;
}

function addListItemsAfterClick() {
    if (inputLengthCheck() > 0) {
        createListElement();
    } 
}

function addListItemsAfterEnter(event) {
    if (inputLengthCheck() > 0 && event.keyCode === 13) {
        createListElement();
    }
}


// button click listener
button.addEventListener('click', addListItemsAfterClick);

// listener for the enter key (so don't need mouse clicks)
userInput.addEventListener('keypress', addListItemsAfterEnter);

// strikethru on completed items
/* ul.addEventListener('click', function () {
    alert('this UL item was clicked');
    ul.classList.add('done'); // unfortunately this marks all the UL items as done! 
}); */ // I realise this is probablyh because I am performing against the UL not the individual LI item...

li.addEventListener('click', function () {
    alert('this UL item was clicked');
    li.classList.add('done'); // unfortunately this marks all the UL items as done! 
});



