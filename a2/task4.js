var a;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

a = getRandomIntInclusive(0, 15)
while (a <= 15) {
    switch (a) {
        case a:
            alert ("a = " + a);
            break;
        default: 
            alert("Нет данных")
    }
    a++;
}


