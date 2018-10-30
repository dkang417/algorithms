
// freq counter . checks weather there are any duplicats among the aguments passed in
// sample 
// areThereDuplicats(1,2,3)  false 
// areThereDuplicates(1,2,1) true 

function areThereDuplicates() {
    let collection = {}
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
      if(collection[key] > 1) return true
    }
    return false;
}
  

