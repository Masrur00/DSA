// S = 1 + (1/r) + (1/r^2) + (1/r^3) +... (1/r^n)

function gp(r,n){
    if(n === 0)
     return 1;
    
    return  1/Math.pow(r,n) + gp(r,n-1);
}

let ans = gp(1,1);
console.log(ans.toFixed(4));