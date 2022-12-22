let length_str = (str,i=0) => {
    if(str[i] === undefined)
     return i;

    return length_str(str,i+1) ;
}

let ans = length_str('masai');
console.log(ans);