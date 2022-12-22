var str="01010010110001";
var bag;
var max = 0;
var N = str.length;
for(var k=0;k<N;k++){
    for(var i=k;i<N;i++){
        var bag ="";
        for(var j=k;j<=i;j++){
            bag = bag + str[j];
        }
        
        for(var j=0;j<bag.length;j++){ //110
            if(Number(bag[j])!==1){
                break;                
            }
        }
        if(bag.length===j&&max<bag.length){
            max = bag.length;      
        }
       
    }
}
console.log(max);

