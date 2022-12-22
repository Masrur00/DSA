
function packers(arr,n,k){ // arr = 1,2,3
   if(k === 0)
     return 1;
   if(k < 0)  
     return 0;
   let sum = 0 ;
   for(let i=0; i<n; i++)     
    sum += packers(arr,n,k-arr[i]);

   return sum;
}

let ans = packers([1,2,3],3,3);
console.log(ans);