for(let i = 0; i <= 15; i++){
   // console.log(i);
    if( i % 2 == 0){
        console.log(`${i} is even`)
    }
    else{
        console.log(`${i} is odd`);
    }
    
}
let arr = [2,5,9,7,4];
let sum = 0;
for(let i = 0; i < arr.length ; i++) {
    sum += arr[i];
} 
console.log(sum);