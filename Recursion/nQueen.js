// function runProgram(input) {
	let n  = 4// +input;
	let arr = [];
	for(let i = 0 ; i<n ; i++){
	    arr[i] = [];
	    for(let j = 0; j<n; j++){
	        arr[i][j] = 0;
	    }
	}
	let count = 0;
	nQueen(arr,n,0);
	console.log(arr);
//  }

function nQueen(arr,n,row){
    if(n === row){
        return;
    }
    
    for(let col = 0 ; col < n ; col++){
         if(isSafe(arr,row,col)){
              arr[row][col] = 1;   
            
          if(nQueen(arr,n,row+1))
              return true;
          
              arr[row][col] = 0;
        }
    }
    return false;
}


function isSafe(arr,row,col){
    let i,j;
    
    i = row-1 ;
    for(j = col+1 ; j < arr.length && i >= 0 ; i--,j++){
        if(arr[i][j] !== 0) 
          return false;
    }
    
    // vertical check
    
    for(i = 0 ; i < row ; i++){
        if(arr[i][col]!==0) 
          return false;
    }
    
    // left Diagonal check
    
    i = row - 1 ;
    for(j = col-1 ; j >= 0 ; i--,j--){
        if(arr[i][j] !== 0) 
          return false;
    }
    
    // right Diagonal check
    
    
    return true;

}