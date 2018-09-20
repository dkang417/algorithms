// sliding window o(n)
//maxSubarraySum([2,6,9,2],2)
function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
  
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        if (tempSum > maxSum) {
            maxSum = tempSum;
        }
    }
    return maxSum;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)

// first we need two variables tempsum and maxSum
// next check if arr.length greater than num if its less return null 
// loop through the array and have maxsum equal to the sum of every number
// tempsum is equal to maxsum 
// loop through array but start at i = num i < arr.length i++
// tempsum is equal to tempsum minus  number before window   plus number after window 
// if tempsum is greater than maxsum than maxsum is tempsum
// finally return maxsum 