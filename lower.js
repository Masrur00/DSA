lower="abcdefghijklmnopqrstuvwxyz";
upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
str="A";
for(var j=0;j<str.length;j++)
{

for(var i=0;i<26;i++){
    if(str[j]==upper[i]){
        str[j]=lower[i];
        break;
    }
}
}
console.log(str);