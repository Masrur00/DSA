let arr = [29,34,21,12,4,22,199,290];
quicksort(arr,0,7);
console.log(arr);
function quicksort(arr,low,high){
     if(low >= high)
      return;

    let index = partition(arr,low,high);
    quicksort(arr,low,index-1);
    quicksort(arr,index+1,high);
}

function partition(arr,low,high){
    let i = low;
    let j = high;
    let pivot = arr[low];

    while(i < j){
        while(arr[i] <= pivot) i++;
        while(arr[j] > pivot) j--;
        
        if(i < j)
          swap(arr,i,j);
    }
    swap(arr,low,j);
    return j;
}

function swap(arr,i,j){
  [ arr[j],arr[i], ]  = [ arr[i],arr[j], ];
}