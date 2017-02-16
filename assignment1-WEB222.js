/*********************************************************************************
* WEB222 – Assignment 01
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
* assignment has been copied manually or electronically from any other source (including web sites) or
* distributed to other students.
*
* Name: _____ZIXIAN OU________ Student ID: _125421164___ Date: ___2017-01-27___
*
********************************************************************************/ 

// Function 1 (grader)  
var grader = function(mark){
  var pergrade;
  // switch 
  switch(true){
      case  (80<=mark):
         pergrade = 'A';
         break;
      case (70<=mark && mark<=79):
         pergrade = 'B';
         break;
      case (60<=mark && mark<=69):
         pergrade = 'C';
         break;
      case (50<=mark && mark<=59):
         pergrade = 'D';
         break;
      default:
         pergrade = 'F';
         break;
     
        
  }
  //if else
//   if(80<=mark){
//      pergrade = 'A';
//   }
//    else if(70<=mark && mark<=79){
//        pergrade = 'B';
//   }
//    else if(60<=mark && mark<=69){
//        pergrade = 'C';
//    }
//    else if(50<=mark && mark<=59){
//        pergrade = 'D';
//    }
//     else{
//        pergrade = 'F';
//    }

  return pergrade;
}

console.log('grader(53) returns: ' + grader(53));
console.log('grader(72) returns: ' + grader(72));
console.log('grader(91) returns: ' + grader(91));

console.log("\n");

//Function 2 (showMultiples)

function showMultiples(num,numMultiples){
   var multiString = "\n";
   
   for(var i=0; i<numMultiples; i++){
      singleString = num + "x" +(i+1) + "=" + (num*(i+1))+"\n";
      multiString = multiString.concat(singleString);
    
   }
   
   return multiString;
}
console.log('showMultiples(2,8) returns: ' + showMultiples(2,8));
console.log('showMultiples(3,2) returns: ' + showMultiples(3,2));
console.log('showMultiples(5,4) returns: ' + showMultiples(5,4));

console.log("\n");

// Function 3 (largerNum)
var largerNum = (num1,num2)=>{
   var large;
   if(isNaN(num1) == true ||isNaN(num2) == true){
      large = "NaN";
   }
   if(num1 > num2){
      large = num1;
   }else if(num1 < num2){
      large = num2;
   }else if(num1 == num2){
      large = "Same";
   }
   return large;
}
console.log('largerNum(2095,106) returns: ' + largerNum(2095,106));
console.log('largerNum("23",14) returns: ' + largerNum("23",14));
console.log('largerNum(108,"a") returns: ' + largerNum(108,"a"));

console.log("\n");

//Function 4 (tempConvert)
var tempConvert=(temp,conv)=>{
  if(conv == "CF"|| "FC"){
    if(conv == "CF"){
      temp = temp*9/5+32;
    }else{
      temp = (temp-32)*5/9;
    }
  }
  return temp;
}
console.log('tempConvert(22,"CF") returns: ' + tempConvert(22,"CF"));
console.log('tempConvert(76,"FC") returns: ' + tempConvert(76,"FC"));
console.log('tempConvert(16,"CF") returns: ' + tempConvert(16,"CF"));

console.log("\n");

// Function 5 (evenNumbers)
function evenNumbers(min,max){
  var even ="";
  for(var i = min ; i<= max;i++){
    if(i%2==0){
      even += i;
      if(i != (max-1)&& i != max)
        even += ", ";
    }
  }
  return even;
}
console.log('evenNumbers(4,13) returns: ' + evenNumbers(4,13));
console.log('evenNumbers(3,10) returns: ' + evenNumbers(3,10));
console.log('evenNumbers(8,21) returns: ' + evenNumbers(8,21));

console.log("\n");

// Function 6 (passingAverage)
function passingAverage() {
	var result = 0;
 	for (var i = 0; i < arguments.length; i++) {
   		result += arguments[i];
   
 	 }
  	return result;
   
}
console.log('passingAverage(75,42,98) returns: ' + passingAverage(75,42,98));
console.log('passingAverage(34,93,77,89,49) returns: ' + passingAverage(34,93,77,89,49));
console.log('passingAverage(33,61) returns: ' + passingAverage(33,61));

console.log("\n");

// Functinon 7 (counter)

var counter = function(){
  var num = 0;
  function inner(){
    num += 1;
    return num;
  }
  return inner;
}
var count = counter();

console.log('counter() returns: ' + count);
console.log('invoking the function returns: ' + count());
console.log('invoking the function returns: ' + count());
console.log('invoking the function returns: ' + count());
