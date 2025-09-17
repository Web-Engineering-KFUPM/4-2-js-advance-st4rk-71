/* 
=================================================================
LAB TITLE: Advance JavaScript
INSTRUCTIONS:
• Each task is written as a TODO.
• Read the TODO description.
• Use the Console (F12 → Console) to view outputs.
=================================================================
*/

//You can uncomment the console.log code to check if your js file is connected with html file or not.
console.log("%cJS Lab Connected — Start completing the TODOs for Advance JavaScript!", "font-weight:bold; font-size:14px");

// ==========================
// TODO-1: OBJECT with GETTERS & SETTERS
// ==========================
/*
Task:
1) Create an object representing a Student with at least: firstName, lastName, and gpa.
2) Add a getter fullName that returns "firstName lastName".
3) Add a setter updateGpa(newGpa) or use a set accessor for gpa that validates 0.0–4.0.
4) Create an instance/object and output its attributes using the getter(s).
*/
const person={
   first:"Rayan",
   last:"Fisal",
   _gpa:3.5,
   
   get fullName()
   {
      return this.first+" "+this.last;

   },
   get gpa()
   {
      return this._gpa;
   },
   set updateGpa(newGpa)
   {
      if(newGpa=>0&&newGpa<=4){
      this._gpa=newGpa;}
      else {
    console.log("Invalid GPA, must be between 0.0 and 4.0");

   }

}}

   console.log(person.fullName);
   console.log(person._gpa);
   person.gpa=3.9;
   console.log(person.gpa);
   person.log=5;
   console.log(person.gpa);



// ====================================
// TODO-2: OBJECT AS MAP + for...in LOOP
// ====================================
/*
Task:
1) Make an object used as a "map" (key → value), e.g., course codes → titles.
2) Iterate over it with for...in and display each key and value.
*/
const courseTitles = { A101: "Intro", A201: "Data Structures" };

for (const key in courseTitles)
{
  console.log(key,": ",courseTitles(key));
}


// =========================================
// TODO-3: STRING OBJECT — charAt() & length
// =========================================
/*
Task:
1) Create a String object or plain string.
2) Use .charAt(index) and .length to output characters and size.
*/
const str="Hello";
console.log(str.charAt(1));
console.log(str.length);

// ===================================
// TODO-4: DATE — day, month, and year
// ===================================
/*
Task:
1) Create a Date for the current moment (new Date()).
2) Find and display the current day of month, month (0–11), and year.
//    (Hint: getDate(), getMonth(), getFullYear() )
*/

const date=new Date();

console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getFullYear());

// ============================================================
// TODO-5: ARRAY + SPREAD — find MIN and MAX from 10 numbers
// ============================================================
/*
Task:
1) Declare an array with 10 numbers (any values).
2) Use spread syntax with Math.min(...) and Math.max(...) to find extremes.
3) Display both values.
*/
const nums=[10,20,30,40,50,60,70,70,90,100];
const main=Math.min(...nums);
const max=Math.max(...nums);

console.log(min);
console.log(max);

// ===================================================================
// TODO-6: EXCEPTIONS — try/catch/finally with EMPTY ARRAY edge case
// ===================================================================
/*
Task:
1) Write a function that expects a non-empty array and returns the maximum element of the array.
2) Intentionally pass an empty array to trigger an error.
3) Handle the error using try { ... } catch (e) { ... } finally { ... } and log messages
   in each block so you can see the flow of control.
*/
function maxElementInArr(arr)
{
     if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Array must be non-empty.");
  }
  return Math.max(...arr);
  
}
try {
  const x = maxElementInArr([]);   
  console.log("Max element:", x);
} catch (e) {
  console.log("error message:", e.message);
} finally {
  console.log("Finally block is executed.");
}
// ===================================================================================
// TODO-7: REGEX + forEach — find words containing 'ab' and log matches from the list
// ===================================================================================
/*
Task:
Given: const words = ["ban", "babble", "make", "flab"];
1) Create a RegExp that detects the substring "ab" anywhere in a word.
2) Loop with .forEach() and use pattern.test(word) to check matches.
3) For matches, log "<word> matches!".
4) Display the words that matches the pattern.
*/
const words = ["ban", "babble", "make", "flab"];
const re = /ab/;   

words.forEach(w => {
  if (re.test(w)) {
    console.log(`${w} matches!`);
  }
});


// End of Advance JavaScript Lab — good luck!
