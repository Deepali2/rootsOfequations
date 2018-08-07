//print all positive integer solutions to the equation a^3 + b^3 = c^3 + d^3 where a, b, c, d are less than 1000. Only print the non-trivial solution

const cubeRoots = (n) => {
    //initialize hashtable object and results array
    let hashtable = {};
    let results = [];
    //iterate for the value of c 
    for (let c = 1; c <= n; c++){
      //iterate for the value of d starting from c value to avoid repetitions: (1, 2) is the same as (2, 1)
      for (let d = c; d <= n; d++) {
          //the key of the hashtable will be the sum of c^3 and d^3
          let key = c**3 + d**3;
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
  
  console.log(cubeRoots(100));