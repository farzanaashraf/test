function isPrime(inputNumber){

    if (inputNumber < 2){
        return false;
    }
    for (let i = 2; i < inputNumber; i++){
        if(inputNumber % i === 0){
            return false;
        }
        
    }
    return true;
}


function readFirstElement(inputArray) {
    const firstEl = inputArray[0];

    console.log("First element of the array is ", firstEl);

    const ip = isPrime(firstEl);

    if(ip) {
        console.log(firstEl + " is prime");
    } else {
        console.log(firstEl + "is not prime");
    }

}

const arr = [11, 56, 59, 25, 35];
readFirstElement(arr);



