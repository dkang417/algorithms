// write a function called samefreq.given 2 positive integers
// find out if the 2 numbers have the same frequency of digits

// sample:
// samefreq(182, 281)  true
// samefreq(34, 14) false
// samefreq(4567, 7654) true 

function sameFrequency(num1, num2){
    // good luck. Add any arguments you deem necessary.
  
    // first convert numbers toString()
    // check if both strings have the same length. if not return false 
    // create 2 empty objects for each string 
    // loop through 1 string and add to empty object.
    // loop through 2nd string and add to empty object 2.
    // loop through any object using for in loop for(let key in object1)
        // if object[key] !== object2[key] return false
    // return true

    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length) return false;
    
    let countNum1 = {};
    let countNum2 = {};
    
    for(let i = 0; i < strNum1.length; i++){
      countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }
    
    for(let j = 0; j < strNum1.length; j++){
      countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }
    
    for(let key in countNum1){
      if(countNum1[key] !== countNum2[key]) return false;
    }
   
    return true;
  }

