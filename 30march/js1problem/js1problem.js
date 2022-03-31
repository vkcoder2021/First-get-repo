let numbers =prompt('enter numbers').split(' ').map((el)=>+el);
let n1 = numbers.length;
let max =10;
let count =0;
for (let i=0;i<n1-1;i++){
    for(let j=i+1;j<n1;j++){
        if((numbers[i]+numbers[j])==max){
            console.log( numbers[i],numbers[j]);
            count++;
        }
    }
}
if (count==0){
    console.log("not found");
}


