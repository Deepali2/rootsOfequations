//javascript code using hashtable to find all positive solutions to the equation a + b = c + d where a, b, c, d are less than a given number n. 
//Only the non trivial solutions will be printed
// 1 + 2 = 1 + 2 is a trivial solution and so are combinations in which the same digits are simply arranged differently.

const sumequals = (n) => {
  //initialize hashtable object and results array
  let hashtable = {};
  let results = [];
  //iterate for the value of c 
  for (let c = 1; c <= n; c++){
    //iterate for the value of d starting from c value to avoid repetitions: (1, 2) is the same as (2, 1)
    for (let d = c; d <= n; d++) {
        //the key of the hashtable will be the sum of c and d
        let key = c + d;
        //fill in the hashtable        
        if (hashtable.hasOwnProperty(key)) {
            hashtable[key].push([c, d]);
        } else {
            hashtable[key] = [[c, d]];
        }
    }
  }
  //iterate over the hashtable and push solution arrays into the results array. 
  for (let key in hashtable) {
      if (hashtable[key].length > 1) {
          for (let i = 0; i < hashtable[key].length - 1; i++) {
              for (let j = i + 1; j < hashtable[key].length; j++) {
                  results.push(hashtable[key][i].concat(hashtable[key][j]));
              }
          }
      }
  }

  return results;

}

console.log(sumequals(6));
