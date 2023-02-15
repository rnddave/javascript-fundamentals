// new for 2021

// good news - bad news

// bad news - the changes to language = not that many new features (mostly obscure)

// good news - not much new to learn 

// but there is one that's a bit interesting 

const str = 'what is up with the world';    // 'what is up with the world'

str.replaceAll('up', 'down');               // 'what is down with the world'

// can be done on the fly, or make a new variable

const newStr = str.replaceAll('up', 'down');  

// interesting fact relace() already existed in JS but it would only replace the first word

const oneString = 'on day One, I completed One thing, but that was One more than I did on day Zero';

const twoString = oneString.replace('One', 'Two');
// 'on day Two, I completed One thing, but that was One more than I did on day Zero'

const twoAllString = oneString.replaceAll('One', 'Two');
// 'on day Two, I completed Two thing, but that was Two more than I did on day Zero'