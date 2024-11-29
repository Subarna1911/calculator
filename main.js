let isResultDisplayed = false;

function appendToDisplay(value) {
    const display = document.getElementById('display');

  
    if (isResultDisplayed) {
        if (!isNaN(value)) {
            display.value = ''; 
        }
        isResultDisplayed = false;
    }

 
    display.value += value;
}

function deleteLastCharacter() {
    const display = document.getElementById('display');
   
    display.value = display.value.slice(0, -1);

 
    if (display.value === '') {
        isResultDisplayed = false;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
    isResultDisplayed = false; 
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
        isResultDisplayed = true; 
    } catch (error) {
        display.value = 'Error';
        isResultDisplayed = true; 
    }
}
