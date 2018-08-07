//print all positive integer solutions to the equation a^3 + b^3 = c^3 + d^3 where a, b, c, d are less than 1000. Only print the non-trivial solution

//helper function to check if a number is an integer
var isInteger = (number) => {
 return Math.round(number) === number;
}

//main function
var cubeRoot = (n) => {
    let solArr = [];
    for (let a = 1 ; a <= n; a++){
        for (let b = 1 ; b <= n; b++) {
            for (let c = 1 ; c <= n; c++) {
               let d = Math.cbrt(a**3 + b**3 - c**3)
                  if (isInteger(d)) {
                    solArr.push([a, b, c, d]);
                  }
                       
                    
                   
                
            }
        }
    }
    return solArr;
}


console.log(cubeRoot(100));