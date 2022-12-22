
let knight = (arr,x,y,n) => {
    if(x<0 || y<0 || x>9 || y>9)
     return;

    if(n === 0) {
        arr[x][y] = 1;
        return;
    }

    knight(arr,x+2,y+1,n-1);
    knight(arr,x+2,y-1,n-1);

    knight(arr,x-2,y+1,n-1);
    knight(arr,x-2,y-1,n-1);

    knight(arr,x+1,y+2,n-1);
    knight(arr,x-1,y+2,n-1);

    knight(arr,x+1,y-2,n-1);
    knight(arr,x-1,y-2,n-1);   

}

let follow = () =>{
    let arr = [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
    ]
    knight(arr,2,2,1);

    let count = 0;
    for(let i=0; i<10; i++){
        for(let j=0; j<10; j++){
            if(arr[i][j] === 1)
             count++;
        }
    }

    console.log(count);
    
}

follow();