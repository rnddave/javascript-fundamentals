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

/* ul.addEventListener('click', function () {
    alert('this UL item was clicked');
    ul.classList.add('done'); // unfortunately this marks all the UL items as done! 
}); // I realise this is probably because I am performing against the UL not the individual LI item...
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
    var idNo = ul.children.length + 1;
    var delBtn = document.createElement('button');

    li.appendChild(document.createTextNode(userInput.value));
    delBtn.innerHTML = 'Delete this item';
    delBtn.classList.add('deleteMe');
    ul.appendChild(li);
    li.setAttribute("id", +idNo);
    li.appendChild(delBtn); // this adds the buttom, toggle still works, but no space between button and list item
    //li.id.add('${idNo}');
    userInput.value = ''; // this clears the input box after input
    //idNo++; // originally trying to count on each click, but not longer need to do this as the children.length catches this
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

function strikeThru(e) {
    var whatID = e.target.id;
    if (whatID > 0) {
        //whatID.classList.toggle('done'); // doesn't work
        //whatID.target.classList.toggle('class="done"'); // doesn't work
        document.getElementById(whatID).classList.toggle('done'); // from Stack Overflow - so damn simple :-/
    }
}

function removeItemsAfterClick(e) {
    var whatID = e.target.id;
    if (whatID > 0 && whatID.classList === 'deleteMe') {
        document.getElementById(whatID).classList.toggle('delete'); 
          if (classList === 'delete') {
            document.write.appendChild('');
        }
    }
    
    /* if (e.target.classList === 'deleteMe') {
        e.target.parentElement.remove();
    } */
    
    //var whatID = e.target.id;
    /* if (whatID > 0) {
        document.getElementById(whatID).classList.toggle('delete'); 
          if (classList === 'delete') {
            document.write.appendChild('');
        }
    } */

    /* deleteButton.addEventListener("click", function() {
        item.remove()
     }) */

    /* if (whatID > 0) {
        ul.removeChild(whatID.target.parentElement);
    } */
}

function doneOrDelete(e) {
    strikeThru(e);
    removeItemsAfterClick(e);
}

// button (add things) click listener
button.addEventListener('click', addListItemsAfterClick);

// listener for the enter key (so don't need mouse clicks)
userInput.addEventListener('keypress', addListItemsAfterEnter);

// strike off a completed item
ul.addEventListener('click', doneOrDelete); 

// button (remove things) click listener
//removeItems.addEventListener('click', removeItemsAfterClick);

// identify which item was clicked

/* li.addEventListener('click', strikeThru);
function whatWasClicked() {   
    ul.addEventListener('click', function(e) {
        var whatID = e.target.id;
        //console.log('you clicked LI element with the ID Number: ' + whatID );
        return whatID;    
    }, false);
}
function strikeThru() {
    whatWasClicked();
    console.log(whatWasClicked());
    
} */

/* ul.addEventListener('click', function(e) { // this was taken from StackOverflow answer
    console.log('you clicked LI element with the ID Number: ' + e.target.id );  // after MANY attempts, this at least detects and displays the ID No. of the LI item clicked
    e.target.id.classList.add('done');
}, false); */


// OKay I think the problem is that I need an expression to detect the ID and then an expression to apply the change. probably a for loop




/* ul.addEventListener('click', function () {
    alert('this UL item was clicked ' + idNo);
    ul.classList.add('done'); // unfortunately this marks all the UL items as done! 
}); */

/* ul.addEventListener('click', function(){
    console.log(this.li);
}) */



/* li.addEventListener('click', function() {
    console.log(li.value);
}) */