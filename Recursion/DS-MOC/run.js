// let a = [1, 2, 3];
// let n = a.length;
// let r = 0,s=0;
// for (let i = 0; i<n; i++){
//     console.log(a[i]);
//     r = r * 10  + a[i]
// }
// r = r + 1;
// for (let i = n - 1; i >= 0; i--) {
//     let rem = r % 10;
//     a[i] = rem;
//     r = (r-rem) / 10;
// }
// console.log(a);
// -------------------------------------
// let str = "cbacdcbc";
// let alpha = "abcdefghijklmnopqrstuvwxyz";
// let obj = {};

// for (let i = 0; i < alpha.length; i++){
//     obj[alpha[i]] = (obj[alpha[i]] | 0);
// }
// for (let i = 0; i < str.length; i++){
//     obj[str[i]] = (obj[str[i]] + 1);
// }
// console.log(obj);
// for (let i in obj) {
//     if(obj[i] >= 1)
//      console.log(i);
// }
// --------------------------------------------
let n = 8;
// console.log(Math.ceil(3 / 2));
n = (n % 2 === 0 ? n : n + 1);
let count = 0;
while (n !== 1) {
    n = Math.ceil(n / 2);
    count++;
}
console.log(count);