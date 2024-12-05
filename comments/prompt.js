//start prompt
//  let num = prompt("enter the number");
//  if (num % 5 === 0){
//      console.log(num, "is multiple of 5");
//  }else{
//     console.log(num,"is not multiple of 5");
// }
//end prompt 
//start loop & strings
//for loops
// for(let i=1; i<=5;i++){
//     console.log(i);
// }
// for(let i=1; i<=5;i++){
//     console.log(i);
// }
// let sum = 0;
// for(let i = 1; i<=8; i++){
//     sum = sum+i;
// }
//console.log(i);
// console.log(sum );

//end loop & strings

////game for find the proper number

//for-of loop
// let str ="soumitra";
// let ii=0;
// for(let i of str){
//     console.log ("i=",i);
//     ii++;
// }
// console.log(ii);
//for-in loop
// let student ={
//     name : "soumitra haldar",
//     age:20,
//     cgpa:7.5,
//     inpass: true,
// };

// for(let key in student){
//     console.log ("key=",key,"value=",student[key]);
   
// }
/* PRINT ALL EVENT NUMBER FROM 0 TO 100*/
// for(let num=0;num<=100;num++){
//     if(num%2===0 ){
//     console.log("num=",num);
//     }
// }

/* create a game where you start with any random game number .
ask the user to keep guessing the game number until the user snters correct value.*/

let gamenum = 25;
let usernum =prompt("guess the game number:");
while(usernum != gamenum ){
    let usernum =prompt("you entered wrong number.guess again:");
}
console.log("congratulation,you enter the right number");