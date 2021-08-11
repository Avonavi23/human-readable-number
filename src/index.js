const numberTranslateMap = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
}
    
const decimalNumberTranslateMap = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
}
    
const numberOfNumbersTranslateMap = {
    1: 'hundred',
}
    
module.exports = function toReadable (num) {
    const numStr = String(num);

    if (num === 0) {
        return numberTranslateMap[0];
    }
    
    if (num < 20) {
        return numberTranslateMap[num];
    }
    
    if (num < 100) {
        const decimalPlace = numStr[0];
        const onesDigit = numStr[1];
        return `${decimalNumberTranslateMap[decimalPlace]}${onesDigit === '0' ? '' : ` ${numberTranslateMap[onesDigit]}`}`;
    }
    
    let result = '';
    result = `${numberTranslateMap[numStr[0]]} ${numberOfNumbersTranslateMap[1]}`;
    
    if (numStr[1] === '0' && numStr[2] === '0') {
        return result;
    }
    
    if (numStr[1] < 2) {
        if (numStr[1] === '0') {
            return result = `${result} ${numberTranslateMap[numStr[2]]}`
        }
    
        const separateStr = numStr.slice(1);
        return result = `${result} ${numberTranslateMap[separateStr]}`
    } else {
        if (numStr[2] === '0') {
        return result = `${result} ${decimalNumberTranslateMap[numStr[1]]}`
    }
        return result = `${result} ${decimalNumberTranslateMap[numStr[1]]} ${numberTranslateMap[numStr[2]]}`
    }
};

