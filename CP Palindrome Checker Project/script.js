document.getElementById('check-btn').addEventListener('click', function() {
    var input = document.getElementById('text-input').value.toLowerCase();
    var resultElement = document.getElementById('result');
    
    if (input === '') {
      alert('Please input a value');
    } else if (isPalindrome(input)) {
      resultElement.innerText = input + ' is a palindrome';
    } else {
      resultElement.innerText = input + ' is not a palindrome';
    }
});

function isPalindrome(str) {
    var sanitizedStr = str.replace(/[^a-zA-Z0-9]/g, '');
    var reversedStr = sanitizedStr.split('').reverse().join('');
    return sanitizedStr === reversedStr;
}