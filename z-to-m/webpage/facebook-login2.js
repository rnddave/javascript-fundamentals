// we now have a database continaing a small number of user/password combinations

var userList = [
    {
        username: 'David',
        password: 'SuperSecret'
    },
    {
        username: 'Xiao',
        password: 'SuperSecret'
    },
    {
        username: 'Colin',
        password: 'SuperSecret'
    },
    {
        username: 'Nolan',
        password: 'SuperSecret'
    }
];

// newsfeed for when a user successfully logs in

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

// user prompts for input

var userNamePrompt = prompt('what is your username?');
var passwordPrompt = prompt('what is the password?');

// function for checking if the user is a vlaid user from our user database

function validUserCheck(username, password) {
    for(var u=0; u < userList.length; u++) {
        console.log(userList[u].username);  
        if (username === userList[u].username && password === userList[u].password) { 
            console.log(userList[u].username + ' matched');
            return true;
        }
    }
    return false;
}

// function for calling the validity checker and then presenting the newsfeed if successful or alerting that U/P is incorrect if required

function signIn(username, password) {

    if (validUserCheck(username, password)) {
        alert('welcome back ' + username);  
        console.log(newsFeed);    
    } else {
        alert('Incorrect Username or Passwrd');
    }
} 

// call the signIn function (which in turn calls the validity cher function) 

signIn(userNamePrompt, passwordPrompt);

