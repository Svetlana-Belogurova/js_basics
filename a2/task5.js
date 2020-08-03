var a;
var b;
var resultAddition;
var resultSubtractoin;
var resultMultiplication;
var resultDivision;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function addition (a,b){
    return (a + b);
}

function substraction (a,b){
    return (a - b);
}

function multiplication (a,b){
    return (a * b);
}

function division (a,b){
    return (a / b);
}




a = getRandomInt(-1000,1000);
b = getRandomInt(-1000,1000);

resultAddition = addition(a,b);
resultSubtractoin = substraction (a,b);
resultMultiplication = multiplication (a,b);
resultDivision = division (a,b);

if (b < 0) {
    alert (a +" +" + "("+ b +")" + " = " + resultAddition);
    alert (a +" -" + "("+ b +")" + " = " + resultSubtractoin);
    alert (a +" *" + "("+ b +")"  + " = " + resultMultiplication);
    alert (a +" / " + "("+ b +")"  + " = " + resultDivision);
}

else {
alert (a +" +" + b + " = " + resultAddition);
alert (a +" -" + b + " = " + resultSubtractoin);
alert (a +" *" + b + " = " + resultMultiplication);
alert (a +" / " + b + " = " + resultDivision);
}

