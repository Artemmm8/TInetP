const NUMBER_OR_DOT_REGEXP = /[0-9]|\./gi;

function setup() {
    const [result] = document.getElementsByClassName('input_txt');
    const [dataToCalculateInput] = document.getElementsByClassName('input_txt');
    const [calculateButton] = document.getElementsByClassName('equal');

    function showAnError() {
        result.value = 'Введены неверные данные';
    }

    calculateButton.onclick = () => {
        const inputValue = dataToCalculateInput.value;
        // to disable code executing in eval() except calculations
        const safeDataToCalculate = inputValue.replace(/[^-()\d/*+%. ]/g, '');

        if (inputValue.length != safeDataToCalculate.length) {
            showAnError();
            return;
        }

        const dataWithReplacedPrefixAndPostifixOperatorsArray = [];
        let postfixExpression = '';

        for (let i = 0; i < safeDataToCalculate.length; i++) {
            if (safeDataToCalculate[i] === '+' || safeDataToCalculate[i] === '-') {
                const operator = safeDataToCalculate[i] === '+' ? '+' : '-';

                if (safeDataToCalculate[i + 1] === operator) {
                    if (safeDataToCalculate[i - 1]?.search(NUMBER_OR_DOT_REGEXP) > -1) {
                        // postfix operator

                        let j = i - 1; // last digit pos
                        let number = '';

                        while (safeDataToCalculate[j]?.search(NUMBER_OR_DOT_REGEXP) > -1) {
                            number = dataWithReplacedPrefixAndPostifixOperatorsArray.pop() + number;
                            j--;
                        }

                        dataWithReplacedPrefixAndPostifixOperatorsArray.push(`(${number})`);
                        postfixExpression += `${operator}1`;
                        i += 1;
                    } else {
                        // prefix operator

                        let j = i + 2; // first digit pos
                        let number = '';

                        while (safeDataToCalculate[j]?.search(NUMBER_OR_DOT_REGEXP) > -1) {
                            number += safeDataToCalculate[j];
                            j++;
                        }

                        dataWithReplacedPrefixAndPostifixOperatorsArray.push(`(${number}${operator}1)`);

                        i += (number.length + 1);
                    }
                } else {
                    dataWithReplacedPrefixAndPostifixOperatorsArray.push(safeDataToCalculate[i]);
                }
            } else {
                dataWithReplacedPrefixAndPostifixOperatorsArray.push(safeDataToCalculate[i]);
            }
        }

        dataWithReplacedPrefixAndPostifixOperatorsArray.push(postfixExpression);
        const dataToCalculate = dataWithReplacedPrefixAndPostifixOperatorsArray.join('');

        try {
            const calculationResult = eval(dataToCalculate);

            if (typeof calculationResult !== undefined
                && calculationResult !== null
                && !isNaN(parseInt(calculationResult))) {
                result.value = calculationResult;
                if (calculationResult == safeDataToCalculate) {
                    document.getElementById("last_value").innerHTML = calculationResult
                }
                else
                    {document.getElementById("last_value").innerHTML = safeDataToCalculate + "=" + calculationResult;}
            } else {
                showAnError();
            }
        } catch (err) {
            console.error(err);
            showAnError();
        }
    };
}

setup();