// Task 2
function getSeason(month) {
    if (typeof month === 'string') {
        month = month.toLowerCase();
        switch (month) {
            case 'january':
            case 'february':
            case 'december':
                return 'winter';
            case 'march':
            case 'april':
            case 'may':
                return 'spring';
            case 'june':
            case 'july':
            case 'august':
                return 'summer';
            case 'september':
            case 'october':
            case 'november':
                return 'autumn';
            default:
                return 'Invalid month';
        }
    } else if (typeof month === 'number' && month >= 1 && month <= 12) {
        switch (month) {
            case 1:
            case 2:
            case 12:
                return 'winter';
            case 3:
            case 4:
            case 5:
                return 'spring';
            case 6:
            case 7:
            case 8:
                return 'summer';
            case 9:
            case 10:
            case 11:
                return 'autumn';
            default:
                return 'Invalid month';
        }
    } else {
        return 'Invalid month format';
    }
}

// Task 3
function splitArray(array) {
    const positive = [];
    const negative = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            positive.push(array[i]);
        } else {
            negative.push(array[i]);
        }
    }
    return { positive, negative };
}


const month = 'July'; 
console.log(`The month ${month} belongs to the season: ${getSeason(month)}`);

const array = [3, -5, 2, -8, 10, -4, 7];
const { positive, negative } = splitArray(array);
console.log('Positive elements of the array:', positive);
console.log('Negative elements of the array:', negative);
