function findUniqueElements(arr1, arr2) {
    let uniqueArray = [];
    // Function to check if element is unique in the array
    function isUnique(element, index, array) {
        return array.indexOf(element) === index;
    }
    // Add unique elements from arr1 to uniqueArray
    uniqueArray.push(...arr1.filter(isUnique));
    // Add unique elements from arr2 to uniqueArray
    arr2.forEach(element => {
        if (uniqueArray.indexOf(element) === -1) {
            uniqueArray.push(element);
        }
    });
    return uniqueArray;
}

function displayUniqueElements() {
    let input1 = document.getElementById('value1').value;
    let input2 = document.getElementById('value2').value;

    // Split the user input by commas and convert to arrays
    let array1 = input1.split(',').map(value => parseInt(value.trim()));
    let array2 = input2.split(',').map(value => parseInt(value.trim()));

    let uniqueElements = findUniqueElements(array1, array2);

    let result = document.getElementById('result');
    result.textContent = `The unique elements are: ${uniqueElements}`;
}

let selectBtn = document.getElementById('selectBtn');
selectBtn.addEventListener('click', displayUniqueElements);

let clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click', () => {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
    document.getElementById('result').textContent = '';
});
