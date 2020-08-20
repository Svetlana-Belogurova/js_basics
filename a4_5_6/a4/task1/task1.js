function convertToObject(input) {
    var number = {
        единицы: 0,
        десятки: 0,
        сотни: 0,
    };

    if (input > 999 || input < 0) {
        console.log('Вы ввели число за диапазоном 0 - 999');

        return number;
    }
    
    number.единицы = input % 10;
    number.десятки = Math.floor(input / 10) % 10;
    number.сотни = Math.floor(input / 100) % 10;

    return number;
}


console.log(convertToObject(prompt('Введите число от 0 до 999')));


