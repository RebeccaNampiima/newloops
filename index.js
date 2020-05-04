/*You have this array:
[5, 12, 97, 2, 123, 43, 73, 973, 26, 78]
For each of these, write one for loop and one while loop:

a. Write a loop that gives you the smallest number in a new array.*/

let numbers = [5, 12, 97, 2, 123, 43, 73, 973, 26, 78];
let smallestNbr = numbers[0];
for(i=0;i<numbers.length; i++){
    if (numbers[i]<smallestNbr){
        smallestNbr = numbers[i];
        console.log(smallestNbr);
    }
}

// the while loop
let numbers1 = [5, 12, 97, 2, 123, 43, 73, 973, 26, 78]
let smallestNumber = numbers1[0]
let b = 0;
while(b<=numbers1.length){
    if (numbers1[b]<smallestNumber){
        smallestNumber = numbers1[b];
        console.log(smallestNumber);
        
    }
    b++
}
//b. Write a loop that gives you a reversed list of numbers in a new array.

let list = [5, 12, 97, 2, 123, 43, 73, 973, 26, 78];
let newArray= [];
for (let c=list.length-1; c>=0; c--){
    console.log(list[c]);
    newArray.push(list[c]);

} 

//the while loop

let list1 = [5, 12, 97, 2, 123, 43, 73, 973, 26, 78];
let newArray1 = [];
let d = list1.length-1
while(d >= 0){
    newArray1.push(list1[d]);
    console.log(list1[d]);
    d--

}
  

  

//c. Write a loop that gives you only the even numbers in a new array.

 let allNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
 let evenNumbers = [];
 for (let e = 0; e<=allNumbers.length; e++){
     if (allNumbers[e]%2 === 0){
        evenNumbers.push(allNumbers[e]);
        console.log(allNumbers[e]);
     }
    }
    
 //the while loop

 let allNumbers2 = [1, 2, 3, 4, 5, 6, 7, 8];
 let evenNumbers2 = [];
 let f = 0;
 while (f<allNumbers2.length){
     if(allNumbers2[f]%2 === 0){
         evenNumbers2.push(allNumbers2[f]);
         console.log(allNumbers2[f]);

     }
     f++
 }
