// so initially we're creating a simple database (with a single user) 

var database = [
    {
        username: 'David',
        password: 'SuperSecret'
    }
];

// a newsfeed for once the user successfully logs in 

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

// function for challenging user for login details

function signIn(username, password) {

    if (username === database[0].username && password === database[0].password) { // telling the function to look at database element 0 seemed to have fixed this
        alert('welcome back ' + database[0].username);
        console.log(newsFeed);                                  // added the news feed items to console
                                                                // this was ejected to console as an object of 2 elements
    } else {
        alert('username or password is incorrect!');
    }
}

// prompts for getting the users input 

var userNamePrompt = prompt('what is your username? ');
var passwordPrompt = prompt('what is the password?');

// calling the signIn function 

signIn(userNamePrompt, passwordPrompt);




