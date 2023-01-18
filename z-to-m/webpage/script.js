var age = prompt("What is your age?");

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
    
}