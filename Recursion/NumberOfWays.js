let steps = (n) =>{
    if(n === 0)
     return 1;

    if(n < 0) 
     return 0;

    return steps(n-1)  + steps(n-2)  + steps(n-3);
}

let ans = steps(4);
console.log(ans);