var a;
var b;
var text;
var result;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

a = getRandomIntInclusive (-15, 15);
b = getRandomIntInclusive (-15, 15);

if (a>=0 && b>=0){
    text = "a и b положительные, выводим их разность";
    result=a-b;
} else if(a<0 && b<0){
    text = "а и b отрицательные, выводим их произведение";
    result=a*b;
}else {
    text = "а и b разных знаков, выводим их сумму";
    result=a+b;
}
alert(text + "\na = " + a + "\nb = " + b + "\nРезультат: " + result);


