// first check if the length of strings are not equal and return false
// next create an empty object
// loop through one string and create an object
// next loop through second string and compare each character to created object 
// if there is no value return false  
// else subtract from value (checks the proper amount of letters)
// return true  if all passes 

// 'anagram', 'nagaram'   should return true 
function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }
    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        // lookup[first[i]] ? lookup[first[i]] += 1 : lookup[first[i]] = 1;
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
        
    }

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // cant find letter or letter is zero then its not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}


// first check if both strings have the same length if not return false
// create an empty object
// loop through first string and add to the object 
// loop through 2nd string and compare it to the created object 
// if the value doesnt exist return false
// else subtract one from the value 
// if all passes return true 

// //'anagram', 'nagaram'

// function anagram(first, second) {
    
//     if (first.length !== second.length) {
//         return false;
//     }
//     const check = {};
//     for (let i = 0; i < first.length; i++) {
//         check[first[i]] ? check[first[i]] += 1 : check[first[i]] = 1;
//     }

//     for (let i = 0; i < second.length; i++) {
//         if (!check[second[i]]) {
//             return false;
//         } else {
//             check[second[i]] -= 1;
//         }
//     }
//     return true;

// }