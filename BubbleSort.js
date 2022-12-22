let arr = [29,34,21,12,4,22,199,290];
bubble_sort(arr,8);
console.log(arr);

function bubble_sort(arr,n){
    let count;
    for(let i = 0 ; i < n ; i++){
        count = 0;
        for(j = 0 ; j < n-1-i ; j ++){
           if(arr[j] > arr[j+1]){
            [arr[j+1],arr[j]] = [arr[j],arr[j+1]];
            count++;
           }
        }
        if(count === 0)
        return;        
    }
}