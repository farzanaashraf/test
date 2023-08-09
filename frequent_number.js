/*

[1, 2, 3, 4, 5]
[1, 1, 2, 2, 2, 3, 4, 5, 1, 4, 1]
[1, 1, 2, 2, 2, 3, 4, 5, 1, 4, 1, 2 , 2]
[1, 2, 3, 3]


Assume first item in the array as the most frequent number
Find frequency of the first number and store the frequency and the original number in a variable
For the next iterarion onwards:
    check if the frequency is greater than mostFrequentNumber
    if true
        update mostFrequent number and frequency count
    else 
        continue

Once both loops are finished
check if frequency is 1
    if true
        numbers are not repeated
    else
        print the freuency and the number;


*/
const arr = [1, 2, 3, 4, 5];
var mostFrequentNumber;
var frequencyCount;

for (let i = 0; i< arr.length ; i++) {
    var count = 0;
    for (let j = 0; j< arr.length; j++) {
        if (arr[i]== arr[j]) {
            count++;
        }
    }
    //console.log(arr[i] + " is repeated " + count + " times");
    if (i == 0) {
        frequencyCount= count;
        mostFrequentNumber = arr[0];
    } else if (count > frequencyCount) {
        frequencyCount = count;
        mostFrequentNumber= arr[i];
    }


}
if (count == 1) {
    console.log("No frequent numbers!");
} else {
    console.log(`Most frequesnt number is ${mostFrequentNumber}, repeated ${frequencyCount} times`);
}
