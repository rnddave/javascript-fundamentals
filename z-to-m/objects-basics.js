// seems to be like a dictionary or set or so in python? 

var userDetails = {
    name: 'David',
    age: 43,
    hobby: 'camping',
    isMarried: true,
    canSay: function() {
        console.log('random stuff');
    }
};

userDetails.canSay();

userDetails.favouriteCountry = 'China'; // add things to the object

userDetails.favouriteCountry = ['china', 'france']; // change things in the object