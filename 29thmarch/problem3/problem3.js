let numbers =prompt('enter numbers').split(' ').map((el)=>+el);
let n1 = numbers.length;
for (let i=0;i<n1;i++){
    if(numbers[i]>=25 && numbers[i]<=300){
        console.log (numbers[i],"is in the range of 25 and 300");
    }
    else{
        console.log(numbers[i],"is not in the range of 25 and 300");
    }
}
