
const inputValue = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

convertBtn.addEventListener('click', () => {
    userInput();
});

const userInput = () => {
    const numberValue = parseInt(inputValue.value);

    if (inputValue.value.length === 0) {
        output.textContent = 'Please enter a valid number';
        output.classList.add('is-error');
    } else if (numberValue <= 0) {
        output.textContent = 'Please enter a number greater than or equal to 1';
        output.classList.add('is-error');
    } else if (numberValue >= 4000) {
        output.textContent = 'Please enter a number less than or equal to 3999';
        output.classList.add('is-error');
    } else {
        output.textContent = convertToRoman(numberValue);
        output.classList.add('is-correct');
    }
    return;
};
function convertToRoman(num) {
    // Create A Roman Numeral to Number Lookup table
    const lookupTable = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };
    // Create an accumulator that stores the string values/roman characters
    let accumulator = '';

    // Loop through the lookup table
    for (const key in lookupTable) {
        const value = lookupTable[key];
        // While the number is greater than the value in the lookup table
        while (num >= value) {
            // Subtract the value from num
            num -= value;
            // Add the key to the accumulator
            accumulator += key;
        }
    }
    return accumulator;
}
