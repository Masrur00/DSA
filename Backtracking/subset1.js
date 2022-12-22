const array = [1,2,3];

const powerSet = (array) => {
    const result = [ [] ];
    for(let val of array){
        const length = result.length;
        for(let i=0; i < length ; i++){
            let temp = result[i].slice(0);
            temp.push(val);
            result.push(temp);
        }
        console.log(result,length,val);
    }
}

powerSet(array);