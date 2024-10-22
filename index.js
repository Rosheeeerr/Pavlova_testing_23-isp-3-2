function checkFirstLetters(word1, word2) {
    const firstLetter1 = word1.charAt(0).toLowerCase();
    const firstLetter2 = word2.charAt(0).toLowerCase();
    return firstLetter1 === firstLetter2;
}
module.exports = checkFirstLetters;