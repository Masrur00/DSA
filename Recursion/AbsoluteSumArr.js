function abs_sum(arr,n){
   if(n === 0)
    return 0;

   return Math.abs( arr[n]-arr[n-1] ) + abs_sum(arr,n-1);
}

let arr = [2,5,3,6,1];

let ans = abs_sum(arr,4);
console.log(ans);