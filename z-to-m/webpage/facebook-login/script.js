/* var age = prompt("What is your age?");

console.log(age)

if (Number(age) < 18) {
	console.log('too young to drive');
    alert("Sorry, you are too yound to drive this car. Powering off");
    
} else if (Number(age) > 18) {
	console.log('old enough to drive');
    alert("Powering On. Enjoy the ride!");
    
} else if (Number(age) === 18) {
	console.log('just about old enough');
    alert("Congratulations on your first year of driving. Enjoy the ride!");
    
} */

// moving on to the facebook idea

var database = [
    {
        username: 'David',
        password: 'SuperSecret'
    }
];

var newsFeed = [
    {
        username: 'Bobby',
        timeline: 'my real name is not Bobby'
    },
    {
        username: 'Caroline',
        timeline: 'Bobby just told me that he is not really called Bobby - mind-blown!'
    }
]; 

var userNamePrompt = prompt('what is your username? ');
var passwordPrompt = prompt('what is the password?');

signIn(userNamePrompt, passwordPrompt);

/* 

MY FIRST ATTEMPT - just goes to password incorrect

function signIn(username, password) {

    if (username === database.username && password === database.password) {
        alert('welcome back ' + database.username);
    } else {
        alert('username or password is incorrect!');
    }
} 
*/

function signIn(username, password) {

    if (username === database[0].username && password === database[0].password) { // telling the function to look at database element 0 seemed to have fixed this
        alert('welcome back ' + database[0].username);
        console.log(newsFeed);                                  // added the news feed items to console
                                                                // this was ejected to console as an object of 2 elements
    } else {
        alert('username or password is incorrect!');
    }
}

// above is working for me