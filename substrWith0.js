//console.log("Ok I am available.");
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
        if(max<bag.length && Number(bag)===0){
            max = bag.length;            
        }
    }
}
console.log(max);
