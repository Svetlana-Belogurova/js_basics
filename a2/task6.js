var a;
var b;
var operation;
var operations = ["addition","substraction", "multiplication", "division"];
var final;


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomOperation(operations) {
    return operations[Math.floor(Math.random() * Math.floor(operations.length))];
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

function mathOperation (a, b, operation) {
    var result;
    switch (operation){
        case 'addition':
        result = addition (a,b);
        break;
     case 'substraction':
        result = substraction (a,b);
        break;
     case 'multiplication':
        result = multiplication (a,b);
        break;
    case 'division':
        result = division (a,b);
        break;
     default:
        alert("Нет данных");
        break;
     }

     return result;
} 

a = getRandomInt(-1000,1000);
b = getRandomInt(-1000,1000);
operation = getRandomOperation(operations);
final = mathOperation (a, b, operation);

alert (operation + ":" + a + " & " + b + " = "+ final);