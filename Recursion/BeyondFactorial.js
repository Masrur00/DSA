// We have to find log(n!)  or log of factorial n.
// log(n!)  =  log(n * n-1 * n-2 * ....1)

function naturalLog(n){
    if(n === 1)
      return Math.log(1);
     
    return Math.log(n) + naturalLog(n-1);
}

let ans = naturalLog(3);
console.log(ans.toFixed(4));
