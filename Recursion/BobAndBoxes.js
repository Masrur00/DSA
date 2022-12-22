
function bob(n){
   if(n === 0)
    return 1;

   if(n < 0) 
    return 0;

   return bob(n-1)  + bob(n-3) + bob(n-5);
}

let ans = bob(7);
console.log(ans);