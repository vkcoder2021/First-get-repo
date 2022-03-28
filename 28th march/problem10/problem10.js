let number3= prompt('enter number').split(' ').map((el)=>+el);
//console.log(number3);
for (let i=1;i<number3.length;i++){
    if((number3[i]%10)!=(number3[i-1]%10)){
        console.log("false");
    }
}
alert ("check console for output");
console.log("true");