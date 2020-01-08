var isPalindrome = function(s) {
    s = s.toUpperCase()
    var filterS = s.replace(/[^0-9a-zA-Z]/ig,"");
    reversedS = filterS.split('').reverse().join('')
    return reversedS === filterS
};