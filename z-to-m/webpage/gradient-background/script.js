var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');

/* console.log(css);
console.log(color1);
console.log(color2); */

/* color1.addEventListener('input', function(){
    console.log(color1.value); // for testing purposes
    changeColor(color1.value);
});

color2.addEventListener('input', function(){
    console.log(color2.value); // for testing purposes
    changeColor(color2.value);
}); */

/* 
thought this was working, but now seems not working

function changeColor() {
    body.style.background = 
        'linear-gradient(to right, ' 
        + color1.value 
        + ', ' 
        + color2.value 
        +')';
}

color1.addEventListener('input', changeColor());

color2.addEventListener('input', changeColor()); */

css.innerHTML = (color1.value + ' ' + color2.value); // so this works, but there is a more interesting way of doing this
// css.textContent = body.style.background + ';';

function changeColor() {
    body.style.background = 
        'linear-gradient(to right, ' 
        + color1.value 
        + ', ' 
        + color2.value 
        +')';
        
        // css.innerHTML = (color1.value + ' ' + color2.value); // so this works, but there is a more interesting way of doing this
        css.textContent = body.style.background + ';';

}

color1.addEventListener('input', changeColor); // I was calling the function() - the first pass through basically broke it

color2.addEventListener('input', changeColor); // we want it to be called every time (based on input) so we removed the () from the end of the function

