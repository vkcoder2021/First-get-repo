let number =[15,21,23,24,28];
for (let i=0;i<5;i++){
    if((number[i]%3)==0){
        console.log( number[i] ,"is multiple of 3");
    }
    else{
        console.log(number[i],"not a multiple of 3 check for 7");
    }
    if ((number[i]%7)==0){
        console.log(number[i],"is multiple of 7");
    }
    else{
        console.log(number[i],"not a multiple of 3 and 7");
    }
}