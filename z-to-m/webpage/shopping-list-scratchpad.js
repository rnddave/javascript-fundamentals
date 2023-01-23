
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

        console.log(userInput.value); // testing
    } 
})


/* these are really useful: 

createElement
createTextNode
appendChild

PRACTICE // PRACTICE // PRACTICE */

