// LETS DO SOME CONDITIONAL STATEMENTS

function goToOffice (weather) {
    if (weather === 'raining') {
        console.log('don\'t forget the umbrella');
    } else if (weather === 'snow') {
        console.log('work from home');
    } else {
        console.log('enjoy the walk');
    }
}

goToOffice('raining');

// the temperature example 


function checkTemp () {
    let currentTemp = prompt('what is the temp?');
    if (currentTemp < 22 ) {
        alert('it\'s a bit cold for me');
    } else if (currentTemp > 26 ) {
        alert('getting a bit too warm for me');
    } else {
        alert('perfect temp range for me');
    }
}

checkTemp();