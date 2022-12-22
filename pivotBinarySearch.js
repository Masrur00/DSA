let arr = [100,1,2,3,4,5,6,7,8,9];

console.log(search(arr , 0 , 9));

function search(arr , low , high){

   if(low === high)
     return low;
   
   if((high === low+1) && arr[low]  >= arr[high] )
     return low;

   if((high === low+1) && arr[low]  < arr[high] )
     return high;

   let mid  = low + ((high - low)>>1);  

   if(arr[mid] > arr[mid+1] && arr[mid] > arr[mid  - 1])
      return search(arr, low , mid - 1);

   else
      return search(arr, mid + 1 , high);   
}