// function quicksort(arr,low,high){
//     if(low >= high)
//       return;

//     index = partition(arr,low,high);
//     quicksort(arr,low,index-1);
//     quicksort(arr,index+1,high);      
// }

// function partition(arr,low,high){
//     let i = low;
//     let j = high;
//     let pivot = arr[low];
//     while(i < j){
//        while(arr[i] <= pivot && i < high)
//         i++;
//        while(arr[j] > pivot && j > low)
//         j--;
//        if(i < j) 
//         swap(arr,i,j);
//     }
//     swap(arr,low,j)
//      return j;
// }

let arr = [19,5,3,28,55,89];
quicksort(arr,0,5);
console.log(arr);
function partition(arr,low,high){
    let i=low;
    let j=high;
    let pivot = arr[low];
    while(i < j){
        while(arr[i]  >= pivot) i++;
        while(arr[j] < pivot) j--;
        if(i < j)
        swap(arr,i,j);
    }
    swap(arr,low,j);
    return j;  
}
function quicksort(arr,low,high){
    if(low >= high)
      return;
    let index = partition(arr,low,high);
    quicksort(arr,low,index-1);
    quicksort(arr,index+1,high);
}

function swap(arr,l,j){
    [ arr[j],arr[l] ] =  [ arr[l],arr[j] ];
}
// arr = [12,32,14,5,6,9];
// quicksort(arr,0,5);

// console.log(arr);
// function swap(arr,l,j){
//     [arr[j],arr[l]] = [arr[l],arr[j]];
// }


