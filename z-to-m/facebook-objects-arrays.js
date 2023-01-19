// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

// -----------------------------

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

var loginDetails = {
    username: 'david',
    password: 'davidsSecretPassword'
}

// 2. Create an array which contains the object you have made above and name the array "database".

var database = [loginDetails];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

var newsfeed = [
    {
        username: 'david',
        timeline: 'news stuff 1'
    },
    {
        username: 'donald',
        timeline: 'news stuff 2'
    },
    {
        username: 'darren',
        timeline: 'news stuff 3'
    }
    ];