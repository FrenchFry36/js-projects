const userInput = document.getElementById('user-input');
const result = document.getElementById('results-div');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');

const checkNumber = () => {
    const inputValue = userInput.value;
    
    if (inputValue === '') {
        alert('Please provide a phone number');
        return;
    }
    
    const countryCode = '^(1\\s?)?';
    const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
    const spacesDashes = '[\\s\\-]?';
    const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
    const phoneRegex = new RegExp(
        `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
    );

    if (phoneRegex.test(inputValue)) {
        result.textContent = "Valid US number: " + inputValue;
    } else {
        result.textContent = "Invalid US number: " + inputValue;
    }
}

checkBtn.addEventListener('click', () => {
    checkNumber();
})

userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        checkNumber();
    }
})

clearBtn.addEventListener('click', () => {
    result.innerHTML = '';
})