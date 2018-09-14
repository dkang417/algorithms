
//     in a sorted array write a function
//     that finds the first pair where the sum is 0
//     return an array that includes both values 
//     or return undefined if a pair doesnt Exist  
// sumZero([-3, -2, 1, 0, 1, 2, 3]) returns[-3, 3]
// sumZero (-2, 0 , 1, 3)  returns undefined 

// steps 
// first you need to have a pointer start at the begining(left) and one at the end (right) 
// while left < right 
// let sum = arr[left] + arr[right]    
// if sum equals 0  then return [arr[i], arr[j]]
// else if  sum > 0   then right-- 
// else left++

// sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10])
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}



