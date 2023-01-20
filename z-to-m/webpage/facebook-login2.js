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

var userNamePrompt = prompt('what is your username?');
var passwordPrompt = prompt('what is the password?');

function signIn(username, password) {

    // I will try a FOR loop 
    // below code did not work, I receive a 'password does not match for each entry in database

    for(var u=0; u < userList.length; u++) {
        console.log(userList[u].username);

        if (username === userList[u].username && password === userList[u].password) { 
            console.log('does it do the U/P check');
            alert('welcome back ' + userList[u].username);
            console.log(username[u]);
            console.log(newsFeed);                                  
                                                                    
        } else {
            alert('username or password is incorrect!');
        }
    }

    
}

signIn(userNamePrompt, passwordPrompt);






/* 
in out first attempt we only had one user, it was unrealistic, so we're going to add more users now

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


function signIn(username, password) {

    if (username === database[0].username && password === database[0].password) { // telling the function to look at database element 0 seemed to have fixed this
        alert('welcome back ' + database[0].username);
        console.log(newsFeed);                                  // added the news feed items to console
                                                                // this was ejected to console as an object of 2 elements
    } else {
        alert('username or password is incorrect!');
    }
} */

// above is working for me