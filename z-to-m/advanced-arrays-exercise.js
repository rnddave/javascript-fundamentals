// Complete the below questions using this array:

const array = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  
  ];
  
  //Create an array using forEach that has all the usernames with a "!" to each of the usernames
  
/*   const usernamesArr = array.forEach((elem) => {
    const x = usernamesArr.prop1;
    console.log(x);
    //usernamesArr.push(elem.username);
  }); */

  // // // // // - COULDN'T FIGURE IT OUT SO LOOKED AT SOLUTION :-( \\ \\ \\ \\ \\

  let newArray2 = []
  array.forEach(user => {
      let { username } = user; // this is essentially the main bit I couldn't figure out!!! FUCKER!
      usernameBang = username + "!";
      newArray2.push(usernameBang);
  })
  console.log(newArray2);
  

  //Create an array using map that has all the usernames with a "? to each of the usernames
  
let newArray3 = [];

const mapArr = array.map(user => {
    let { username } = user; 
    usernameQ = username + "?";
    newArray3.push(usernameQ);
});

console.log(newArray3);

  //Filter the array to only include users who are on team: red
  
/* 
let newArray4 = [];

const filterArr = array.filter((user, team) => {
    let { username } = user; 
    let { team } = team;
    userOnRed = if (team === 'red'), username ;
    newArray4.push(useronRed);
});

console.log(newArray4); 
*/

const filterArray = array.filter(user => {
	return user.team === "red";
}); // got this from solution - not sure why I'm not getting these advanced array concepts


  
  //Find out the total score of all users using reduce

// let reducedArr = [];
const reducedArr = array.reduce((accum, elem) => {
    return accum + elem.score
}, 0);
console.log(reducedArr);

  
  // (1), what is the value of i?
  // (2), Make this map function pure:
  const arrayNum = [1, 2, 4, 5, 8, 9];
  const newArray = arrayNum.map((num, i) => {
      console.log(num, i);
      alert(num);
      return num * 2;
  })
  
  //BONUS: create a new list with all user information, but add "!" to the end of each items they own.