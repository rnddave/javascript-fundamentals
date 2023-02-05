// the tax example 

let salary = 0;
let takeHome = 0;


const taxFree = 12570;

const taxBandLower = 50271;
const taxBandUpper = 150001;



function getSalaryInput () {
    salary = prompt('what is your salary? ');
    console.log(salary);
    checkTaxBand(salary);
}

function checkTaxBand(salary) {
    //console.log('did I get the salary? ' + salary)
    let taxband = '';
    if (salary < taxFree ) {
        taxband = 'Low';
    } else if (salary > taxFree && salary < taxBandLower) {
        taxband = 'Mid';
    } else {
        taxband = 'High';
    }
    //console.log(salary, taxband);
    taxOwedFunc(taxband);
}

function taxOwedFunc (taxband) {
    //console.log('did I get the taxband ' + taxband);
    let taxOwed = 0;
    let beforeTax = 0;
    /* const taxBasic = beforeTax*0.2;
    const taxHigher = beforeTax*0.4; */

    //console.log(taxband);

    if (taxband === 'Low') {
        taxOwed = 0;
        console.log(`you owe £${taxOwed}`);
    } else if (taxband === 'Mid') {
        beforeTax = salary-taxFree;
        console.log(`how much will you pay tax on ${beforeTax}`);

        taxOwed = beforeTax*0.2;
        console.log('you will owe £' + taxOwed);

        takeHome = salary - taxOwed;
        alert('your takehome pay = £' + takeHome);
        console.log('your takehome pay = £' + takeHome);
    } else if (taxband === 'High') {
        let twoTaxBands = 0;
        let upperTax = 0;
        let lowerTax = 0;
        beforeTax = salary - taxFree;

        twoTaxBands = salary - taxBandLower; 

        lowerTax = beforeTax*0.2;
        console.log('lower tax = ' + lowerTax);

        upperTax = twoTaxBands*0.4;
        console.log('upper tax = ' + upperTax);

        taxOwed = lowerTax + upperTax;
        console.log('you will owe £' + taxOwed);

        takeHome = salary - taxOwed;
        alert('your takehome pay = £' + takeHome);
        console.log('your takehome pay = £' + takeHome);
    }
}


/* salary = prompt('what is your salary? ');
console.log(salary);

if (salary < 12571) {
    alert('you have no tax to pay this year');
} else if (salary > taxFree) {
    const taxableSalary = salary-taxFree;
    console.log(taxableSalary);
}
else if (taxableSalary < taxBandLower) {
    taxOwed = ((taxableSalary)*taxBasic);
    console.log(taxOwed);
    takeHome = ((taxableSalary-taxOwed)+taxFree);
    console.log(`your tax due is £${taxOwed} and your take home pay is £${takeHome}`)
} else if (salary > taxBandLower && salary < taxBandUpper) {
    taxOwed = ((salary-taxFree)*taxBasic);
    console.log(taxOwed);
    takeHome = (salary-taxOwed);
} */