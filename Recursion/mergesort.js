let arr = [92, 35, 2, 67 , 7, 23, 34];


console.log(arr.join(" "));
// mergesort(arr,0,6);
console.log((0+1)>>1);

function mergesort(arr,low,high){
    if(low >= high)
     return;
    
     let mid = (low+high)>>1;
     mergesort(arr,low,mid); 
     mergesort(arr,mid+1,high); 

     merge(arr,low,high,mid);
}


function merge(arr,low,high,mid){
    let left = arr.slice(low,mid+1);
    let right = arr.slice(mid+1,high+1);
    let i = 0;
    let j = 0;
    let k = low;
    
    while(i < left.length && j < right.length){
        if(left[i] <= right[j])
            arr[k++] = left[i++];
        else   
            arr[k++] = right[j++];
    }

    while(i < left.length)
        arr[k++] = left[i++];

    while(j < right.length)
        arr[k++] = right[i++];

        

}