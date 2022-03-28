let string1="hikasv";
let temp='';
let n1 =string1.length;
if (n1===1)
{
    console.log(string1);
}
if (n1>1){
    temp=string1[n1-1];
    temp =temp+string1.substring(1,n1-1);
    temp=temp+string1[0];
    console.log(temp);
}