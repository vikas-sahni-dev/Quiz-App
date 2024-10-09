const questions = [
  {
    questionNumber: 1,
    question: "What will the following code output? 'console.log(3 == '3');'",
    options: ["true", "false", "TypeError", "undefined"],
    answer: "true",
    difficulty: "medium",
  },
  {
    questionNumber: 2,
    question: "What will the following code output? 'console.log(2 + 2);'",
    options: ["4", "22", "undefined", "NaN"],
    answer: "4",
    difficulty: "easy",
  },

  {
    questionNumber: 3,
    question:
      "What will the following code output?\n\nlet a = [1, 2, 3];\nlet b = a;\nb.push(4);\nconsole.log(a);",
    options: ["[1, 2, 3, 4]", "[1, 2, 3]", "[4]", "TypeError"],
    answer: "[1, 2, 3, 4]",
    difficulty: "medium",
  },
  {
    questionNumber: 4,
    question:
      "What will the following code output?\n\nfunction test() {\n  var a = 1;\n  let b = 2;\n  if (true) {\n    var a = 3;\n    let b = 4;\n  }\n  console.log(a);\n  console.log(b);\n}\ntest();",
    options: ["3, 2", "3, 4", "1, 4", "3, undefined"],
    answer: "3, 2",
    difficulty: "hard",
  },
  {
    questionNumber: 5,
    question:
      "What will the following code output?\n\nlet x = 10;\nlet y = 20;\nconsole.log(`${x} + ${y} = ${x + y}`);",
    options: ["10 + 20 = 30", "'10 + 20 = 30'", "undefined", "SyntaxError"],
    answer: "10 + 20 = 30",
    difficulty: "hard",
  },
  {
    questionNumber: 6,
    question:
      "What will the following code output?\n\nfunction outer() {\n  var a = 1;\n  return function inner() {\n    console.log(a);\n  }\n}\nvar closure = outer();\nclosure();",
    options: ["1", "undefined", "null", "ReferenceError"],
    answer: "1",
    difficulty: "hard",
  },
  {
    questionNumber: 7,
    question:
      "What will the following code output?\n\nlet arr = [1, 2, 3];\nlet newArr = arr.map(num => num * 2);\nconsole.log(newArr);\nconsole.log(arr);",
    options: [
      "[2, 4, 6], [1, 2, 3]",
      "[1, 2, 3], [2, 4, 6]",
      "[2, 4, 6], [2, 4, 6]",
      "[undefined, undefined, undefined], [1, 2, 3]",
    ],
    answer: "[2, 4, 6], [1, 2, 3]",
    difficulty: "hard",
  },
  {
    questionNumber: 8,
    question:
      "What will the following code output?\n\nconsole.log(0.1 + 0.2 === 0.3);\nconsole.log(0.1 + 0.2);",
    options: [
      "false, 0.3",
      "true, 0.3",
      "false, 0.30000000000000004",
      "true, 0.30000000000000004",
    ],
    answer: "false, 0.30000000000000004",
    difficulty: "hard",
  },
  {
    questionNumber: 9,
    question:
      "What will the following code output?\n\nfor (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 100);\n}",
    options: ["0, 1, 2", "3, 3, 3", "undefined", "SyntaxError"],
    answer: "3, 3, 3",
    difficulty: "hard",
  },
  {
    questionNumber: 10,
    question: "What will the following code output?\n\nconsole.log([1] + 1);",
    options: ["11", "2", "[1]1", "undefined"],
    answer: "11",
    difficulty: "hard",
  },
  {
    questionNumber: 11,
    question: "What will the following code output?\n\nconsole.log(1 < 2 < 3);",
    options: ["true", "false", "undefined", "TypeError"],
    answer: "true",
    difficulty: "hard",
  },
  {
    questionNumber: 12,
    question:
      "What will the following code output?\n\nconsole.log(0.1 + 0.2 === 0.3);",
    options: ["true", "false", "NaN", "TypeError"],
    answer: "false",
    difficulty: "hard",
  },
  {
    questionNumber: 13,
    question: "What will the following code output?\n\nconsole.log([] + []);",
    options: ["'' (empty string)", "[]", "undefined", "null"],
    answer: "'' (empty string)",
    difficulty: "hard",
  },
  {
    questionNumber: 14,
    question:
      "What will the following code output?\n\nconsole.log(typeof NaN);",
    options: ["'number'", "'undefined'", "'NaN'", "'object'"],
    answer: "'number'",
    difficulty: "hard",
  },
  {
    questionNumber: 15,
    question:
      "Which operator is used to assign a value to a variable in JavaScript?",
    options: ["=", "==", "===", "<-"],
    answer: "=",
    difficulty: "easy",
  },
  {
    questionNumber: 16,
    question: "What is the correct syntax to create a function in JavaScript?",
    options: [
      "function myFunction() {}",
      "function = myFunction() {}",
      "myFunction function() {}",
      "def myFunction() {}",
    ],
    answer: "function myFunction() {}",
    difficulty: "easy",
  },
  {
    questionNumber: 17,
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "int", "const", "declare"],
    answer: "var",
    difficulty: "easy",
  },
  {
    questionNumber: 18,
    question: "Which of the following is a primitive data type in JavaScript?",
    options: ["String", "Object", "Array", "Map"],
    answer: "String",
    difficulty: "easy",
  },
  {
    questionNumber: 19,
    question: "What will be the result of 'typeof []' in JavaScript?",
    options: ["array", "object", "undefined", "null"],
    answer: "object",
    difficulty: "medium",
  },
  {
    questionNumber: 20,
    question: "What does 'use strict' do in JavaScript?",
    options: [
      "Enforces stricter parsing and error handling in JavaScript code",
      "Prevents the use of global variables",
      "Allows the use of reserved keywords as variable names",
      "None of the above",
    ],
    answer: "Enforces stricter parsing and error handling in JavaScript code",
    difficulty: "medium",
  },
  {
    questionNumber: 21,
    question: "What is the purpose of the 'reduce()' function in JavaScript?",
    options: [
      "It reduces the size of an array",
      "It applies a function against an accumulator and each value to reduce it to a single value",
      "It filters array elements",
      "It concatenates arrays",
    ],
    answer:
      "It applies a function against an accumulator and each value to reduce it to a single value",
    difficulty: "medium",
  },
  {
    questionNumber: 22,
    question: "What is a closure in JavaScript?",
    options: [
      "A function bundled with its lexical environment",
      "A method used to close variables from the global scope",
      "A function executed immediately after declaration",
      "None of the above",
    ],
    answer: "A function bundled with its lexical environment",
    difficulty: "medium",
  },
  {
    questionNumber: 23,
    question: "Which of the following is true about 'const' in JavaScript?",
    options: [
      "Variables declared with 'const' cannot be reassigned",
      "Variables declared with 'const' can be reassigned",
      "'const' variables can be declared without initialization",
      "None of the above",
    ],
    answer: "Variables declared with 'const' cannot be reassigned",
    difficulty: "medium",
  },
  {
    questionNumber: 24,
    question: "What will be the result of 'null == undefined' in JavaScript?",
    options: ["true", "false", "TypeError", "NaN"],
    answer: "true",
    difficulty: "medium",
  },
  {
    questionNumber: 25,
    question:
      "Which of the following correctly describes 'promises' in JavaScript?",
    options: [
      "They allow asynchronous functions to return a value in the future",
      "They are used for handling synchronous functions",
      "They prevent errors in asynchronous code",
      "None of the above",
    ],
    answer: "They allow asynchronous functions to return a value in the future",
    difficulty: "medium",
  },
];

const toggleSwitch = document.getElementById('toggleSwitch');
const statusText = document.getElementById('status');

toggleSwitch.addEventListener('change', function() {
    if (toggleSwitch.checked) {
        statusText.textContent = 'BackGround music is ON';
        bgAudioElement.play()

    } else {
        statusText.textContent = 'BackGround music is OFF';
        bgAudioElement.pause()
    }
});



//selecting HTML elements
const quizStartNowButton=document.querySelector("#quiz-start-now-button")
let questionNumberElement = document.querySelector(
  "#question-number-container>span"
);
const questionElement = document.querySelector("#question-container>p");
let questionTimerElement = document.querySelector("#question-container>div");
const optionsContainer = document.querySelector("#options-container");
const optionsElement = document.querySelectorAll("#options-container>div");
const nextQuestionButton = document.querySelector("#next-question-button");
const showResultButton = document.querySelector("#show-result-button");
const quizSection=document.querySelector("#quiz-section")
const resultSection=document.querySelector("#result-section")
const volumeOnIcon=document.querySelector("#volume-on-icon")
const volumeOffIcon=document.querySelector("#volume-off-icon")
const bgAudioElement=new Audio('./sounds/bg-sound.mp3');
const body = document.querySelector("body");

bgAudioElement.play()

//flag varaibles
let correctQuestionCount = 0;
let wrongQuestionCount = 0;
let questionNumber = 0;
let intervalId = "";
let isQuestionAttempted = false; //should i give it false or ""
let answer = "";

// const questionTimer = (
//   questionStartTime,
//   intervalId,
//   totalTimeForAQuestion
// ) => {
//   const currentTime = new Date().getTime();
//   // console.log("currenttime",currentTime);

//   const fiftyPercentOfTotalTimeForAQuestion =
//     (50 / 100) * totalTimeForAQuestion;
//   const fifteenPercentOfTotalTimeForAQuestion =
//     (15 / 100) * totalTimeForAQuestion;
//   let time = parseInt((currentTime - questionStartTime) / 1000);
//   // console.log(time);

//   if (
//     time >= fiftyPercentOfTotalTimeForAQuestion &&
//     time < totalTimeForAQuestion - fifteenPercentOfTotalTimeForAQuestion
//   ) {
//     body.id = "yellow-state";
//   } else if (
//     time >=
//     totalTimeForAQuestion - fifteenPercentOfTotalTimeForAQuestion
//   ) {
//     body.id = "red-state";
//   }
//   //   console.log(currentTime - questionStartTime);
//   questionTimerElement.innerText = `00:${totalTimeForAQuestion - time}`;
//   if (time === totalTimeForAQuestion) {
//     if (questionNumber === 24) {
//       showResultButton.classList.add("show");
//       //  showResultButton.click()
//     }
//     clearInterval(intervalId);
//     console.log("mai nahi raha");
//   }
// };
// const optionCorrectState = (option) => {
//   isQuestionAttempted = true;
//   clearInterval(intervalId);
//   option.classList.add("green-border");
//   option.innerHTML += `<img src="./images/correct.svg" alt="">`;
//   optionsContainer.classList.add("unclickable");
// };
// const setQuestion = ({
//   questionNumber,
//   question,
//   options,
//   answer: ans,
//   difficulty,
// }) => {
//   const questionStartTime = new Date().getTime();
//   let timeForQuestion;
//   if (difficulty === "easy") {
//     timeForQuestion = 30;
//   } else if (difficulty === "medium") {
//     timeForQuestion = 40;
//   } else {
//     timeForQuestion = 50;
//   }
//   console.log("timeForQuestiont", timeForQuestion);
//   isQuestionAttempted = false; //l.l.
//   answer = ans;
//   console.log("questionStartTime", questionStartTime);
//   intervalId = setInterval(() => {
//     questionTimer(questionStartTime, intervalId, timeForQuestion=15);
//   }, 50);
//   console.log("intervalId", intervalId);
//   questionNumberElement.textContent = questionNumber;
//   questionElement.innerText = question;
//   optionsElement.forEach((optionElement, index) => {
//     optionElement.innerText = options[index];
//   });
// };

// optionsElement.forEach((optionElement) => {
//   optionElement.addEventListener("click", () => {
//     if (optionElement.innerText === answer) {
//       optionCorrectState(optionElement);
//       ++correctQuestionCount;
//       const sound = new Audio('./sounds/correct-bell.wav');
//       console.log(sound);
//       sound.play()
      
//     } else {
//       ++wrongQuestionCount
//       const sound = new Audio('./sounds/question-wrong-sound.mp3');
//       console.log(sound);
//       sound.play()
//       optionElement.classList.add("red-border");
//       optionElement.innerHTML += `<div><span>You&nbsp;Chose</span> <img src="./images/wrong.svg" alt=""></div>`;
//       for (const optionElement of optionsElement) {
//         if (optionElement.innerText === answer) {
//           optionCorrectState(optionElement);
//           return;
//         }
//       }
//     }
//   });
// });

// setQuestion(questions[questionNumber]); //





// quizStartNowButton.addEventListener("click",()=>{
  
// })

// nextQuestionButton.addEventListener("click", () => {
//   console.log(questionNumber);

//   ++questionNumber;
//   console.log(questionNumber);

//   if (questionNumber === 24) {
//     nextQuestionButton.classList.add("hide");

//   } else if (questionNumber > 24) {
//     return;
//   }

//   body.setAttribute("id", "");
//   optionsContainer.classList.remove("unclickable");
//   optionsElement.forEach((optionElement) => {
//     optionElement.classList.remove("red-border");
//     optionElement.classList.remove("green-border");
//   });
//   clearInterval(intervalId);
//   setQuestion(questions[questionNumber]);
//   console.log(questionNumber);
// });


// volumeOnIcon.addEventListener("click",()=>{
//   volumeOnIcon.classList.add("hide")
//   volumeOffIcon.classList.add("show")
// })
// volumeOffIcon.addEventListener("click",()=>{
//   volumeOffIcon.classList.remove("show")
//   volumeOnIcon.classList.remove("hide")
// })
// showResultButton.addEventListener("click",()=>{
// quizSection.classList.add("hide")
// resultSection.classList.add("show")
// body.id="show-result-section"
// showResult()  
// })




// //result section javascript
// const showResult= () => {
//   const skippedQuestion=(25-correctQuestionCount-wrongQuestionCount)
// console.log(skippedQuestion);


}

// let i=0;
// setInterval(()=>{
// setQuestion(questions[++i])
// },1000)
