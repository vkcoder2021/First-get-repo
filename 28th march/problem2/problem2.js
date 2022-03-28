let array1 =[1,0,2,3,4];
let array2 =[3,5,6,7,8,13];
let result=[];
let n1 =array1.length;
let n2 =array2.length;
if (n1==n2){
    for (let i=0;i<n1;i++){
        result[i]=array1[i]+array2[i];
    }
}
if (n1<n2){
    for(let i=0;i<n1;i++)
    {
        result[i]=array1[i]+array2[i];
    }
    for(let i=n1;i<n2;i++){
        result[i]=array2[i];
    }
}
console.log(result);
