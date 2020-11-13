const hasDistinctDigits = (number) => {
    if (number.length == 1) {
        return true;
    }
    rest = number.substring(1);

    if (rest.includes(number.substring(0,1))) {
        return false;
    }
    return hasDistinctDigits(rest);
}

const happyYear = (number) => {
    do{
        number++;
        if(hasDistinctDigits(number.toString())) {
            console.log('Happy ' + number);
            break;
        }
    }
    while(true);
}

happyYear(2020); // change year here
