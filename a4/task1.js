var number = {
    userNumber: prompt('Введите число от 0 до 999'),
    units: 0,
    tens: 0,
    hundreds: 0,
    };
    if (number.userNumber <= 9){
        number.units = number.userNumber;
    } else if (number.userNumber <= 999){
        number.units = Math.floor(number.userNumber % 10);
        number.tens = Math.floor(number.userNumber / 10 % 10);
        number.hundreds = Math.floor(number.userNumber / 100 % 10);
    } else {
        number.userNumber = 0;
        console.log('Вы ввели число за диапазоном 0 - 999');
    }
    console.log(number);


