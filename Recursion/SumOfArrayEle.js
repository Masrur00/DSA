
let arr_sum = (arr,n) =>{
   if(n === 0)
    return arr[0];

   return arr[n] + arr_sum(arr,n-1) ; 
}

let ans = arr_sum([1,2,3,4,5],4);
console.log(ans);