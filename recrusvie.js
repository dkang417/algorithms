function sumRange(num) {
    // our base case 
    if (num === 1) return 1;
    // our recursive call 
    return num + sumRange(num - 1);
}
sumRange(3)
// return 3 + sumRange(2)
            // return 2 + sumRange(1)
                         // return 1    no more recursive call
// returns 6 


sumRange(4)
// return 4 + sumrange(3)
            // return 3 + sumrange(2)
                    //return 2 + sumrange(1)
                        //return 1
// returns 10 

