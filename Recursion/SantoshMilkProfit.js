
let milkMan = (n) =>{
   if( n === 0)
    return 1;

   if(n < 0) 
     return 0;

   return milkMan(n-4)   + milkMan(n-8);
}


let ans = milkMan(80);
console.log(ans);