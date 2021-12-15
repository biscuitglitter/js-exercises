const palindromes = function (str) {
    const string = str.toLowerCase()
    const nopunctuation = string.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "");
    const splitword = nopunctuation.split("")
    const reversedword = splitword.reverse()
    const makeword = reversedword.join("")
    return makeword == nopunctuation
       ;
}
palindromes('racecar')
palindromes('racecar!')
palindromes('Racecar!')
palindromes('A car, a man, a maraca.')
palindromes('Animal loots foliated detail of stool lamina.')
palindromes('ZZZZ car, a man, a maraca.')
// Do not edit below this line
module.exports = palindromes;

