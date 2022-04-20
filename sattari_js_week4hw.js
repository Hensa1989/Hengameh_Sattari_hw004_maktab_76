//first question
// Write a JavaScript program to compute the exponent of a number PS:use Recursion.

// var expo = function (a, n) {
//   if (n == 0) {
//     return 1;
//   } else {
//     return a * expo(a, n - 1);
//   }
// };
// console.log(expo(5, 2));

// second question
// Write a JavaScript program to compute the sum of an array of integers. Go to the editor
// Example : var array = [1, 2, 3, 4, 5, 6]
// Expected Output : 21

// var array = [1, 2, 3, 4, 5 ,6];
// var SumOfArr = array.reduce(function(total, num){   //a:total b:current val
//     return total + num;
// }, 0);  //0 is my inintial val.

// console.log(SumOfArr);

// Third question
// Write a JavaScript function that accepts a string as aparameter and converts the first letter of each word of the
// string in upper case.
// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox '

// function ToUPCase(str) {
//   var Arr = str.split(" ");
//   var Arr2 = [];

//   for (var i = 0; i < Arr.length; i++) {
//     Arr2.push(Arr[i].charAt(0).toUpperCase() + Arr[i].slice(1));
//   }
//   return Arr2.join(" ");
// }
// console.log(ToUPCase("the quick brown fox"));

// forth question
// Write a Js function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.

// arr = [NaN, 0, 12, false, -87, "", undefined, 65, null];

// function FilterARR(arr) {
//   return arr.filter(Boolean);
// }

// console.log(FilterARR([NaN, 0, 12, false, -87, "", undefined, 65, null]));

// fifth question
// Write a JavaScript function to merge two arrays and remove all duplicate elements.
// Test data:
// var array1 = [1, 2, 3];
// var array2 = [2, 30, 1];
// console.log(merge_array(array1, array2));
// [3, 2, 30, 1]

// function MergeArr(ar1, ar2){

//     // merge 2 arraye ba rest
//     let arr = [...ar1, ...ar2];

//     // hazfe duplicate ha ba new set
//     let uniqueArr = [...new Set(arr)];

//     console.log(uniqueArr);
// }

// const array1 = [1, 2, 3];
// const array2 = [2, 30, 1];
// MergeArr(array1, array2);

//sixth question
// Create a function Compute the sum of the rounded numbers in an
// array. use reduce
// Test data:
// const numbers = [15.5, 2.3, 1.1, 4.7];
// output=24

// const numbers = [15.5, 2.3, 1.1, 4.7];
// var SumOfArr = numbers.reduce(function(total, num){   //a:total b:current val
//     return total + Math.round(num);
// }, 0);
// console.log(SumOfArr)

//seventh question
// Write a Js function to get the current date. Go to the editor Pass a separator as an argument.
// Test Data :
// console.log(curday('/'));
// console.log(curday('-'));
// Output :
// "11/13/2014"
// "11-13-2014"

// var myDate = function (sprt) {
//   today = new Date();
//   var dd = today.getDate();    //joda joda minevisam k betunam rosh amaliat anjam bedam
//   var mm = today.getMonth();
//   var yyyy = today.getFullYear();

//   if (dd < 10) dd = "0" + dd;
//   if (mm < 10) mm = "0" + mm;
//   return mm + sprt + dd + sprt + yyyy;  //enja jodash mikonam
// };
// console.log(myDate("/"));
// console.log(myDate("-"));

//eighth question
// Write a JavaScript function to get the month name from a particular date.
// Test Data :
// console.log(month_name(new Date("10/11/2009")));
// console.log(month_name(new Date("11/13/2014")));
// Output :
// "October"
// "November"

// let getmonthname = function(mm){
// 	mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
// 	  return mlist[mm.getMonth()];
// 	};
// 	console.log(getmonthname(new Date("10/11/2009")));
// 	console.log(getmonthname(new Date("11/13/2014")));

//ninth question
//Write a JavaScript function to hide email addresses to protect from unauthorized users.
// Test Data:
// console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"

// protect_email = function (user_email) {
//   var avg, splitted, part1, part2;
//   splitted = user_email.split("@");
//   part1 = splitted[0];
//   avg = part1.length / 2;
//   part1 = part1.substring(0, part1.length - avg);
//   part2 = splitted[1];
//   return part1 + "...@" + part2;
// };

// console.log(protect_email("robin_singh@example.com"));


//tenth question
// Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.
// Test Data:
// console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
// Output: "The quick brown fox jumps over lazy dog"

// function firstoocur(str, removestr)       { 
// 	var index = str.indexOf(removestr); //31
// 	if (index === -1) {
// 		return str;
// 	}
// 	return str.slice(0, index) + str.slice(index + removestr.length); // از ابتدا تا ایندکس دوم د برو ولی خود د رو برندار بعد از ایندکس د به بعد تا اخر رو بردار
// }

// console.log(firstoocur("The quick brown fox jumps over the lazy dog", 'the'));
