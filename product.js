var N=3;
var M=3;
var arr = [
    [1 ,2 ,3],
    [4, 5, 6],
    [7, 8, 9]
];

for(var i=0;i<M;i++){
    s=1;
    for(var j=0;j<N;j++){
        if(arr[j][i]%2==0){
            s=s*arr[j][i];
        }
    }console.log(s);
}