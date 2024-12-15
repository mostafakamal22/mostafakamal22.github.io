// 1- Write a program that allow to user enter number then print it

// var userInput = window.prompt("Please, Enter a number");

// var num = parseFloat(userInput);

// if (!isNaN(userInput)) {
//   window.alert(num);
// } else {
//   window.alert("Only accepts numbers");
// }

// 2- Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no

// var userInput = window.prompt("Please, Enter a number");
// var num = parseFloat(userInput);

// if (!isNaN(num)) {
//   if (num % 3 === 0 && num % 4 === 0) {
//     window.alert("Yes");
//   } else {
//     window.alert("NO");
//   }
// } else {
//   window.alert("Only accepts numbers");
// }

// 3- Write a program that allows the user to insert 2 integers then print the max

// var userFirstInput = window.prompt("Please, Enter the first number");
// var userSecondInput = window.prompt("Please, Enter the second number");

// var num1 = parseInt(userFirstInput);
// var num2 = parseInt(userSecondInput);

// if (!isNaN(num1) && !isNaN(num2)) {
//   if (num1 > num2) {
//     window.alert(`${num1} is max`);
//   } else if (num2 > num1) {
//     window.alert(`${num2} is max`);
//   } else {
//     // both are equel
//     window.alert("Equal Numbers");
//   }
// } else {
//   window.alert("Only accepts numbers");
// }

// 4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.

// var userInput = window.prompt("Please, Enter a number");

// var num = parseInt(userInput);

// if (!isNaN(num)) {
//   if (num > 0) {
//     window.alert(`${num} is a Positive Number`);
//   } else if (num < 0) {
//     window.alert(`${num} is a Negative Number`);
//   } else {
//     window.alert(
//       "Zero is neither positive nor negative; it is a neutral number."
//     );
//   }
// } else {
//   window.alert("Only accepts numbers");
// }

// 5- Write a program that take 3 integers from user then print the max element and the min element.

// var userFirstInput = window.prompt("Please, Enter the first number");
// var userSecondInput = window.prompt("Please, Enter the second number");
// var userThirdInput = window.prompt("Please, Enter the third number");

// var num1 = parseInt(userFirstInput);
// var num2 = parseInt(userSecondInput);
// var num3 = parseInt(userThirdInput);

// if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
//   // num1 > num2 , num3
//   if (num1 > num2 && num1 > num3) {
//     window.alert(`${num1} is max`);
//     if (num2 <= num3) {
//       window.alert(`${num2} is min`);
//     } else {
//       window.alert(`${num3} is min`);
//     }
//   }

//   // num2 > num1 , num3
//   else if (num2 > num1 && num2 > num3) {
//     window.alert(`${num2} is max`);
//     if (num1 <= num3) {
//       window.alert(`${num1} is min`);
//     } else {
//       window.alert(`${num3} is min`);
//     }
//   }

//   // num3 > num1 , num2
//   else if (num3 > num2 && num3 > num1) {
//     window.alert(`${num3} is max`);
//     if (num1 <= num2) {
//       window.alert(`${num1} is min`);
//     } else {
//       window.alert(`${num2} is min`);
//     }
//   }

//   // num1 = num2 > num3
//   else if (num1 === num2 && num1 > num3) {
//     window.alert(`${num1} is max`);
//     window.alert(`${num3} is min`);
//   }

//   // num1 = num3 > num2
//   else if (num1 === num3 && num1 > num2) {
//     window.alert(`${num1} is max`);
//     window.alert(`${num2} is min`);
//   }

//   // num2 = num3 > num1
//   else if (num2 === num3 && num3 > num1) {
//     window.alert(`${num3} is max`);
//     window.alert(`${num1} is min`);
//   }

//   // num1 = num2 = num3
//   else {
//     window.alert("all numbers are equal");
//   }
// } else {
//   window.alert("Only accepts numbers");
// }

// 6- Write a program that allows the user to insert integer number then check If a number is oven or odd

// var userInput = window.prompt("Please, Enter an integer", "0");

// var num = parseInt(userInput);

// if (!isNaN(num)) {
//   if (num % 2 === 0) {
//     window.alert(`${num} is a Even Number`);
//   } else {
//     window.alert(`${num} is a Odd Number`);
//   }
// } else {
//   window.alert("Only accepts numbers");
// }

// 8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u)

// then print vowel otherwise print consonant
// var userInput = window.prompt("Please, Enter a character");

// if (isNaN(userInput) && userInput.length === 1) {
//   // Check for special characters inputs
//   if (userInput.toLowerCase() === userInput.toUpperCase()) {
//     window.alert("Only accept alphabet input - special characters not allowed");
//   } else if (
//     userInput === "a" ||
//     userInput === "A" ||
//     userInput === "e" ||
//     userInput === "E" ||
//     userInput === "i" ||
//     userInput === "I" ||
//     userInput === "o" ||
//     userInput === "O" ||
//     userInput === "u" ||
//     userInput === "U"
//   ) {
//     window.alert(`${userInput} is a Vowel`);
//   } else {
//     window.alert(`${userInput} is a Consonant`);
//   }
// } else if (userInput.length > 1) {
//   window.alert("Only accept one character input");
// } else {
//   window.alert("Only accept alphabet input - numbers not allowed");
// }

// 9- Write a program that allows user to insert integer then print all numbers between 1 to that’s number

// var userInput = window.prompt("Please, Enter an integer", "1");

// var num = parseInt(userInput);

// if (!isNaN(num)) {
//   if (num === 1 || num === 2 || num === 0) {
//     window.alert(`there are no integers between 1 and ${num}`);
//   }
//   // Positive Number
//   else if (num > 1) {
//     var result = "1";
//     var count = 1;
//     while (count < num) {
//       result += `, ${count + 1}`;
//       count++;
//     }

//     window.alert(result);
//   }
//   // Negative Numbers
//   else {
//     var result = "1";
//     var count = 1;
//     while (count > num) {
//       result += `, ${count - 1}`;
//       count--;
//     }

//     window.alert(result);
//   }
// } else {
//   window.alert("Only accepts numbers");
// }

// 10- Write a program that allows user to insert integer then print a multiplication table up to 12.

// var userInput = window.prompt("Please, Enter an integer", "1");

// var num = parseInt(userInput);

// if (!isNaN(num)) {
//   var result = "";
//   var count = 1;
//   while (count <= 12) {
//     result += ` ${count * num}`;
//     count++;
//   }

//   window.alert(result);
// } else {
//   window.alert("Only accepts numbers");
// }

// 11- Write a program that allows to user to insert number then print all even numbers
// between 1 to this number

// var userInput = window.prompt("Please, Enter a number", "1");

// var num = parseInt(userInput);

// if (!isNaN(num) && (num > 2 || num < 0)) {
//   //Positive Numbers
//   if (num > 2) {
//     var result = "";
//     var count = 1;
//     while (count < num) {
//       if (count % 2 === 0) {
//         result += ` ${count}`;
//       }
//       count++;
//     }

//     window.alert(result);
//   }
//   //Negative Numbers
//   else {
//     var result = "";
//     var count = 1;
//     while (count > num) {
//       if (count % 2 === 0) {
//         result += ` ${count}`;
//       }
//       count--;
//     }

//     window.alert(result);
//   }
// } else if (num <= 2) {
//   window.alert(`there are no even numbers between 1 and ${num}`);
// } else {
//   window.alert("Only accepts numbers");
// }

// 12- Write a program that take two integers then print the power

// var userFirstInput = window.prompt("Please, Enter the first integer", "1");
// var userSecondInput = window.prompt("Please, Enter the second integer", "1");

// var num1 = parseInt(userFirstInput);
// var num2 = parseInt(userSecondInput);

// if (!isNaN(num1) && !isNaN(num2) && num2 >= 0) {
//   var result = 1;

//   while (num2 > 0) {
//     result *= num1;

//     num2--;
//   }

//   window.alert(result);
// } else if (num2 < 0) {
//   window.alert("Negative power not allowed");
// } else {
//   window.alert("Only accepts numbers");
// }

// 12- Write a program to enter marks of five subjects and calculate total, average and percentage.

// var userFirstInput = window.prompt("Please, Enter the first mark", "1");
// var userSecondInput = window.prompt("Please, Enter the second mark", "1");
// var userThirdInput = window.prompt("Please, Enter the third mark", "1");
// var userFourthInput = window.prompt("Please, Enter the fourth mark", "1");
// var userFifthInput = window.prompt("Please, Enter the fifth mark", "1");

// var mark1 = +userFirstInput;
// var mark2 = +userSecondInput;
// var mark3 = +userThirdInput;
// var mark4 = +userFourthInput;
// var mark5 = +userFifthInput;

// if (
//   mark1 >= 0 &&
//   mark2 >= 0 &&
//   mark3 >= 0 &&
//   mark4 >= 0 &&
//   mark5 >= 0 &&
//   mark1 <= 100 &&
//   mark2 <= 100 &&
//   mark3 <= 100 &&
//   mark4 <= 100 &&
//   mark5 <= 100
// ) {
//   var totalMarks = mark1 + mark2 + mark3 + mark4 + mark5;
//   var averageMarks = totalMarks / 5;
//   var percentage = (totalMarks / 500) * 100;

//   window.alert(`
//     Total Marks = ${totalMarks}
//     Average Marks = ${averageMarks}
//     Percentage = ${percentage}%
//   `);
// } else {
//   window.alert("Only accept Marks between 0 and 100");
// }

// 13-Write a program to input month number and print number of days in that month.

// var userInput = window.prompt("Please, Enter month number", "1");

// var month = parseInt(userInput);

// if (month >= 1 && month <= 12) {
//   if (month === 2) {
//     window.alert(
//       "This month has 28 days in a common year and 29 days in leap years"
//     );
//   } else if (month <= 7 && month % 2 === 0) {
//     window.alert(`This month has 30 days`);
//   } else if (month <= 7 && month % 2 !== 0) {
//     window.alert(`This month has 31 days`);
//   } else if (month > 7 && month % 2 === 0) {
//     window.alert(`This month has 31 days`);
//   } else if (month > 7 && month % 2 !== 0) {
//     window.alert(`This month has 30 days`);
//   }
// } else if (month > 12) {
//   window.alert("a year has only 12 months");
// } else {
//   window.alert("Only accepts positive and above zero numbers");
// }

// 14- Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade

// var userPhysicsInput = window.prompt("Please, Enter the physics mark", "1");
// var userChemistryInput = window.prompt("Please, Enter the chemistry mark", "1");
// var userBiologyInput = window.prompt("Please, Enter the biology mark", "1");
// var userMethematicsInput = window.prompt(
//   "Please, Enter the methematics mark",
//   "1"
// );
// var userComputerInput = window.prompt("Please, Enter the computer mark", "1");

// var mark1 = +userPhysicsInput;
// var mark2 = +userChemistryInput;
// var mark3 = +userBiologyInput;
// var mark4 = +userMethematicsInput;
// var mark5 = +userComputerInput;

// if (
//   mark1 >= 0 &&
//   mark2 >= 0 &&
//   mark3 >= 0 &&
//   mark4 >= 0 &&
//   mark5 >= 0 &&
//   mark1 <= 100 &&
//   mark2 <= 100 &&
//   mark3 <= 100 &&
//   mark4 <= 100 &&
//   mark5 <= 100
// ) {
//   var totalMarks = mark1 + mark2 + mark3 + mark4 + mark5;
//   var percentage = (totalMarks / 500) * 100;

//   if (percentage >= 90) {
//     window.alert("Grad A");
//   } else if (percentage >= 80) {
//     window.alert("Grad B");
//   } else if (percentage >= 70) {
//     window.alert("Grad C");
//   } else if (percentage >= 60) {
//     window.alert("Grad D");
//   } else if (percentage >= 40) {
//     window.alert("Grad E");
//   } else {
//     window.alert("Grad F");
//   }
// } else {
//   window.alert("Only accept Marks between 0 and 100");
// }

// ******************************** Using switch case*******************************
// 15- Write a program to print total number of days in month

// var userInput = window.prompt("Please, Enter month number", "1");

// var month = parseInt(userInput);

// switch (true) {
//   case month === 2:
//     window.alert(
//       "This month has 28 days in a common year and 29 days in leap years"
//     );
//     break;

//   case month >= 1 && month <= 7 && month % 2 === 0:
//     window.alert(`This month has 30 days`);
//     break;

//   case month >= 1 && month <= 7 && month % 2 !== 0:
//     window.alert(`This month has 31 days`);
//     break;

//   case month > 7 && month <= 12 && month % 2 === 0:
//     window.alert(`This month has 31 days`);
//     break;

//   case month > 7 && month <= 12 && month % 2 !== 0:
//     window.alert(`This month has 30 days`);
//     break;

//   case month > 12:
//     window.alert("a year has only 12 months");
//     break;

//   default:
//     window.alert("Only accepts positive and above zero numbers");
//     break;
// }

// 16- Write a program to check whether an alphabet is vowel or consonant

// var userInput = window.prompt("Please, Enter a character");

// switch (true) {
//   case !isNaN(userInput):
//     window.alert("Only accepts alphabet input - numbers not allowed");
//     break;

//   case userInput.length > 1:
//     window.alert("Only accept one character input");
//     break;

//   // check if input in not an english alphabet
//   // 1-using lowercase and uppercase conversion
//   case userInput.toLowerCase() === userInput.toUpperCase():
//     // 2- Or using Reg Expression
//     // case !/^[a-zA-Z]$/.test(userInput):
//     window.alert(
//       "Only accepts alphabet input - special characters not allowed"
//     );
//     break;

//   case userInput === "a" || userInput === "A":
//   case userInput === "e" || userInput === "E":
//   case userInput === "i" || userInput === "I":
//   case userInput === "o" || userInput === "O":
//   case userInput === "u" || userInput === "U":
//     window.alert(`${userInput} is a Vowel`);
//     break;

//   default:
//     window.alert(`${userInput} is a Consonant`);
//     break;
// }

// 17- Write a program to find maximum between two numbers

// var userFirstInput = window.prompt("Please, Enter the first number", "1");
// var userSecondInput = window.prompt("Please, Enter the second number", "1");

// var num1 = parseFloat(userFirstInput);
// var num2 = parseFloat(userSecondInput);

// switch (true) {
//   case isNaN(num1) || isNaN(num2):
//     window.alert("only accepts numbers");
//     break;
//   case num1 === num2:
//     window.alert("both numbers equal");
//     break;
//   case num1 > num2:
//     window.alert(`${num1} is Max`);
//     break;

//   default:
//     window.alert(`${num2} is Max`);
//     break;
// }

// 18- Write a program to check whether a number is even or odd

// var userInput = window.prompt("Please, Enter a number", "1");

// var num = parseFloat(userInput);

// switch (true) {
//   case isNaN(num):
//     window.alert("only accepts numbers");
//     break;

//   case num % 2 === 0:
//     window.alert(`${num} is a Even Number`);
//     break;

//   default:
//     window.alert(`${num} is a Odd Number`);
//     break;
// }

// 19- Write a program to check whether a number is positive or negative or zero

// var userInput = window.prompt("Please, Enter a number", "1");

// var num = parseFloat(userInput);

// switch (true) {
//   case isNaN(num):
//     window.alert("only accepts numbers");
//     break;

//   case num === 0:
//     window.alert(
//       "Zero is neither positive nor negative; it is a neutral number."
//     );
//     break;

//   case num > 0:
//     window.alert(`${num} is a Positive Number`);
//     break;

//   case num < 0:
//     window.alert(`${num} is a Negative Number`);
//     break;

//   default:
//     window.alert(`${num} is a Odd Number`);
//     break;
// }

// 20- Write a program to create Simple Calculator

// var userFirstInput = window.prompt("Please, Enter the first number", "1");
// var userSecondInput = window.prompt("Please, Enter the second number", "1");
// var processType = window.prompt(`
//   Please, Provide process type.
//   allowed process:- sum, sub, divide and multiply
//   `);

// var num1 = parseFloat(userFirstInput);
// var num2 = parseFloat(userSecondInput);

// var result;

// switch (true) {
//   case isNaN(num1) || isNaN(num2):
//     window.alert("only accepts numbers");
//     break;

//   case processType.toLowerCase() !== "sum" &&
//     processType.toLowerCase() !== "sub" &&
//     processType.toLowerCase() !== "divide" &&
//     processType.toLowerCase() !== "multiply":
//     window.alert("not allowed process");
//     break;

//   case processType.toLowerCase() === "sum":
//     result = num1 + num2;
//     window.alert(result);
//     break;

//   case processType.toLowerCase() === "sub":
//     result = num1 - num2;
//     window.alert(result);
//     break;

//   case processType.toLowerCase() === "divide":
//     result = num1 / num2;
//     window.alert(result);
//     break;

//   default:
//     result = num1 * num2;
//     window.alert(result);
//     break;
// }
