let array1= prompt('enter first array').split(' ').map((el)=>+el);
let array2= prompt('enter second array').split(' ').map((el)=>+el);
let n1=array1.length;
let n2 =array2.length;
let count =0;
if (n1<=n2){
    for(let i=0;i<n1;i++){
        for(let j=0;j<n2;j++){
            if (array1[i]==array2[j]){
                
                count ++;
            }
        }
    }
    


}
// if (n1<n2){
//     for(let i=0;i<n1;i++){
//         for(let j=0;j<n2;j++){
//             if (array1[i]==array2[j]){
//                 console.log(true);
//                 break;
//             }
//         }
//     }
//     console.log(false);


// }
if (n1>n2){
    for(let i=0;i<n2;i++){
        for(let j=0;j<n1;j++){
            if (array2[i]==array1[j]){
              count++;
            }
        }
    }


}
if (count>0){
    console.log (true);
}
else{
    console.log(false);
}