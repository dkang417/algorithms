function factorial(num) {
    let total = 1;
    for (let i = num; i > 1; i--){
        total *= i
    }
    return total;
}

factorial(3) // 6   
factorial(4) // 24

// recursive solution 
function factorial(num) {
    if (num === 1) return 1; 
    return num * factorial(num - 1);
}



// helper method recursion 
function outer(input) {
    var outerScopedVariable = []
    function helper(helperInput) {
        // modify the outerscoped variable
        helper(helperInput--)
    }
    helper(input)
    return outerScopedVariable;
}

// collect odd values in array
function collectOddvalues(arr) {
    let result = [];

    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }
        // just looking at the first num in array
        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }
        //shrinks the array by slicing first number in array
        helper(helperInput.slice(1))
    }
    helper(arr)
    return result;
}
collectOddvalues([1,2,3,4,5,6,7,8])


// pure recursion
function collectOddvalues(arr) {
    let newArr = [];
    if (arr.length === 0) {
        return newArr;
    }
    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }
    newArr = newArr.concat(collectOddvalues(arr.slice(1)));
    return newArr;
}
collectOddvalues([1, 2, 3, 4, 5]) // [1,3,5]
