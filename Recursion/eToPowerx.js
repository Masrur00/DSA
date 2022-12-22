//  e^x = 1 + x + 1/2!*x*x +  1/3!*x*x*x ...
function eToPower(x,n){
    if( n === 0 )
      return 1;

    return 1*Math.pow(x,n)/fact(n)  + eToPower(x,n-1);
}

function fact(n){
    if(n === 1)
     return 1;
    
     return n * fact(n-1);
}


let ans = eToPower(4,2);
console.log(ans.toFixed(4));