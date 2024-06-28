const myArray = [20,10,30,50,90,80,70];
let maximum = 0;
let minimum = 10;
for (let i = 0; i < myArray.length; i++) {
    

    if (myArray[i] > maximum) {
        maximum = myArray[i];
    }
    if (myArray[i] < minimum) {
        minimum = myArray[i];
    }

    
}
console.log(maximum); 
console.log(minimum);
