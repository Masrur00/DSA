let arr = [29,34,21,12,4,22,199,290];
Slection_sort(arr,8);
console.log(arr);

function Slection_sort(arr,n){
    for(let i = 0 ; i < n ; i++){
        pos = i;
        for(j = i+1 ; j < n ; j ++){
           if(arr[pos] > arr[j]){
               pos = j;
           }
        }
        [arr[pos],arr[i]] = [arr[i],arr[pos]];
    }
}

