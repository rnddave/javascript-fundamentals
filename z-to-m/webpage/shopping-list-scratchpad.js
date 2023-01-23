
// variables for the data collection

var button = document.getElementById('addItemToList');
var userInput = document.getElementById('userInputBox');
var ul = document.getElementById('shoppingList');

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

button.addEventListener('click', function() {
    
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

// THIS ALL WORKS (above) BUT there is a lotof DUPLICATION


/* these are really useful: 

createElement
createTextNode
appendChild

PRACTICE // PRACTICE // PRACTICE */

