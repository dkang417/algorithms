// implement a function which accepts a sorted array 
// and counts the unique values in the array. 

// countUniqueValues([1, 1, 1, 1, 2])   2
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])   7
// countUniqueValues([]) 0

// first create 2 points starting from index of 0 and 1 and move forward
// update first pointer if there are 2 values that do not match 

// [1,1,2,3,3,4,5,6,6,7]

function countUniqueValues(arr){
    // add whatever parameters you deem necessary - good luck!
    // create 1pointer (i) at start and 1 pointer at arr[1] called j. we need to loop through entire array if the numbers are not equal change // value of first pointer to equal 2nd pointer and i++
    if(arr.length === 0) {
        return 0;
    }
    var i = 0;
    for (var j = 1; j < arr.length; j++ ) {
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i+1; 
  }
    