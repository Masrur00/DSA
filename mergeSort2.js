let arr = [9,3,51,17,38,87];
sort(arr,0,5);
console.log(arr);

function sort(arr,low,high){
    if(low >= high)
     return;
    let mid = (low+high)>>1; 
    sort(arr,low,mid);
    sort(arr,mid+1,high);
    merge(arr,low,high,mid);
}

function merge(arr,low,high,mid){
    let larr = arr.slice(low,mid+1);
    let rarr = arr.slice(mid+1,high+1);
    let i = 0;
    let j = 0;
    let k = low;

    while(i < larr.length && j < rarr.length){
        if(larr[i] <= rarr[j])
          arr[k++] = larr[i++];

        else 
        arr[k++] = rarr[j++];   
         
    }

    while(i < larr.length)
    arr[k++] = larr[i++];
    while(j < rarr.length)
    arr[k++] = rarr[j++];

}