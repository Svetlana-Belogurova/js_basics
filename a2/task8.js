var val;
var pow;
var result;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function power(val, pow) {
    if (pow == 1) {
        return val;
    }

    else {
        return val * power(val, pow-1)
    }
}

val = getRandomInt(0,10);
pow = getRandomInt(1,10);
result = power(val, pow);

alert ("число " + val + " в степени " + pow + " = " + result);
