// Sum Zero
function addToZero (arr) {
    let zeroCheck = false
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++) {
            if (i !== j){
                if (arr[i] + arr[j] === 0){
                    let zeroCheck = true
                }
            }
        }
    }
} 
// Runtime = O(n^2)

// Unique Characters
function hasUniqueChars (str) {
    const uniqChars = {}
    let strArr = str.split('')
    for (let i = 0; i < strArr.length; i++){
        if(uniqChars[strArr[i]]){
            strArr.splice(i, 1)
            i--;
        }
        uniqChars[strArr[i]] = true
    }
    if (strArr.length === str.length){
        return true}
    else {return false}
}
// Runtime = O(n)

// Pangram Sentence
function isPangram (str) {
    const uniqChars = {}
    let strArr = str.toLowerCase().replaceAll(/[^\p{L}\s]/gu,"").replace(/\s+/g, '').split('')
    for (let i = 0; i < strArr.length; i++){
        if(uniqChars[strArr[i]]){
            strArr.splice(i,1)
            i--;
        }
        uniqChars[strArr[i]] = true
    }
    if (strArr.length == 26){
        return true}
    else {return false}
}
// Runtime = O(n)

// Longest Word
function findLongestWord (arr) {
    let arrSort = arr.sort(function(a,b){
       return b.length - a.length;
    })
    return arr[0].length
}
// Runtime = O(n log n) - I had to look this up because I had no idea.
