runProgram("400 2");
function runProgram(input) {
    
    let [X,N]  =  input.split(" ").map(Number) ;
          
    let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    let ans = arr.map((elem) => Math.pow(elem,N) );
    console.log(ans);
    
    PowerSum(ans,X);
 }

 function PowerSum(arr,x){
    let count = 0 ;
    let bag = "";
    let str = "";
    for(let i = 0 ; i < 24 ; i++){          // 0 - 23
            str = "";
        for(let j = i+1 ; j < 25 ; j++){    //  1 - 24
            if(arr[i]+arr[j] === x){
              console.log(`${i+1} ,${j+1}`);
              console.log(arr[i] , arr[j])  ;
              count++;
              break;
            }
            if(arr[i]+arr[j] > x) break;
            str += j+" ";
        } 
        console.log(`i : ${i},  ${str} count: ${count}`);
        
    }
    console.log(bag);
    console.log(str);
    console.log(count);
}