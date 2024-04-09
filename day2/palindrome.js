function isPalindrome(str) {
    const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return formattedStr === formattedStr.split('').reverse().join('');
}

console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello")); 