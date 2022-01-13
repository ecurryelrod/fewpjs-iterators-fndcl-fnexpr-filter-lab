// Code your solution here
function findMatching(array, string) {
    return array.filter(possibleMatch => possibleMatch.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(array, letters) {
    return array.filter(word => word.toLowerCase().indexOf(letters.toLowerCase()) === 0)
}

function matchName(array, string) {
    return array.filter(record => record.name === string)
}