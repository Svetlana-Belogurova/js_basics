function isPrime(number) {
    if (number < 2) {
        return false;
    }

    var x = 2;

    while(x < number) {
        if (number % x == 0) {
            return false;
        }

        x++;
    }

    return true;
}

function printNumbers(limit) {
    var counter = 0;

    var result = "Prime numbers:";
    while(counter <= limit) {
        if (isPrime(counter)) {
            result += " " + counter;
        }

        counter++;
    } 
    
    alert(result);
}

printNumbers(100);


