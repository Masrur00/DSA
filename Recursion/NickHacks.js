// Tom and Nick are good friends.Once Tom asked Nick exactly N rupees, but Nick has only 1 rupee in his bank account.

function nick_Hack(n,hacks){
   if(n === hacks)
    return true;
   
   if(n < hacks) 
     return false;
    
   if(nick_Hack(n,hacks*10))
    return true;

   if(nick_Hack(n,hacks*20))
    return true;

   return false;

}

let ans =(nick_Hack(400,1)) ? "Yes" : "No";
console.log(ans);