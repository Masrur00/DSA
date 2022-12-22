// console.log("My name is Khan.")

let ans = tileOfTogetherness(45069,89672);

console.log(ans);


function tileOfTogetherness(m,n){
    max = Math.max(m,n);  //89672
    min = Math.min(m,n);  //45069 
    
    let arr = [];
    
        while(true){ 
            
            if (max < min) // if the smaller value becomes greater than the larger value
                return -1;
             
         
            
            if (arr.includes(min)) return min; 
            // if (arr.includes(max)) return max;
            arr.push(max);
            // arr.push(min);
            //The sum function returns the sum of the values 
            min = min + sum(min);
            max = max + sum(max);
        }
    }

    function sum(n){
        let sum = 0;
        
        while(n > 0){
           sum = sum + (n % 10);     
           n = (n - (n % 10))/10;
        }
        
        return sum;
    }