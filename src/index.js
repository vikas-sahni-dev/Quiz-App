const allQuestions = [
  {
    questionNumber: 1,
    question:
      "Which of the following is a correct way to declare a variable in JavaScript?",
    options: [
      "var myVariable",
      "variable myVariable",
      "myVariable := 1",
      "None of the above",
    ],
    answer: "var myVariable",
    difficulty: "easy",
    topic: "JavaScript",
  },
  {
    questionNumber: 2,
    question: "What is the output of 1 + '1' in JavaScript?",
    options: ["11", "2", "undefined", "NaN"],
    answer: "11",
    difficulty: "easy",
    topic: "JavaScript",
  },
  {
    questionNumber: 3,
    question: "What does the 'typeof' operator do?",
    options: [
      "Returns the data type of a variable",
      "Converts a variable to a string",
      "Checks if a variable is defined",
      "None of the above",
    ],
    answer: "Returns the data type of a variable",
    difficulty: "easy",
    topic: "JavaScript",
  },
  {
    questionNumber: 4,
    question: "How do you create a function in JavaScript?",
    options: [
      "function myFunction() {}",
      "create myFunction() {}",
      "myFunction() = function {}",
      "None of the above",
    ],
    answer: "function myFunction() {}",
    difficulty: "easy",
    topic: "JavaScript",
  },
  {
    questionNumber: 5,
    question: "Which keyword is used to define a constant in JavaScript?",
    options: ["let", "const", "var", "constant"],
    answer: "const",
    difficulty: "easy",
    topic: "JavaScript",
  },
  {
    questionNumber: 6,
    question: "What is the output of console.log(0 == '0');?",
    options: ["true", "false", "undefined", "NaN"],
    answer: "true",
    difficulty: "easy",
    topic: "JavaScript",
  },
  {
    questionNumber: 7,
    question: "Which of the following is a valid array declaration?",
    options: [
      "let arr = [];",
      "let arr = {};",
      "let arr = ()",
      "None of the above",
    ],
    answer: "let arr = [];",
    difficulty: "easy",
    topic: "JavaScript",
  },
  {
    questionNumber: 8,
    question: "What does JSON stand for?",
    options: [
      "JavaScript Object Notation",
      "Java Source Open Notation",
      "JavaScript Online Notation",
      "None of the above",
    ],
    answer: "JavaScript Object Notation",
    difficulty: "easy",
    topic: "JavaScript",
  },
  {
    questionNumber: 9,
    question: "What is the correct way to add a comment in JavaScript?",
    options: [
      "// This is a comment",
      "<!-- This is a comment -->",
      "# This is a comment",
      "/* This is a comment */",
    ],
    answer: "// This is a comment",
    difficulty: "easy",
    topic: "JavaScript",
  },
  {
    questionNumber: 10,
    question: "Which of the following is not a JavaScript data type?",
    options: ["String", "Boolean", "Number", "Character"],
    answer: "Character",
    difficulty: "easy",
    topic: "JavaScript",
  },
  {
    questionNumber: 11,
    question: "What is the purpose of the 'return' statement in a function?",
    options: [
      "To exit the function",
      "To return a value from the function",
      "Both A and B",
      "None of the above",
    ],
    answer: "Both A and B",
    difficulty: "easy",
    topic: "JavaScript",
  },
  {
    questionNumber: 12,
    question: "Which operator is used to compare values in JavaScript?",
    options: ["==", "===", "!=", "All of the above"],
    answer: "All of the above",
    difficulty: "easy",
    topic: "JavaScript",
  },
  {
    questionNumber: 13,
    question: "How do you define an array in JavaScript?",
    options: [
      "var arr = [];",
      "var arr = ()",
      "var arr = {}",
      "None of the above",
    ],
    answer: "var arr = [];",
    difficulty: "easy",
    topic: "JavaScript",
  },
  {
    questionNumber: 14,
    question: "What will be the output of console.log(2 + '2');?",
    options: ["22", "4", "undefined", "NaN"],
    answer: "22",
    difficulty: "easy",
    topic: "JavaScript",
  },
  {
    questionNumber: 15,
    question: "What does 'null' mean in JavaScript?",
    options: [
      "No value or object",
      "Undefined value",
      "Both A and B",
      "None of the above",
    ],
    answer: "No value or object",
    difficulty: "easy",
    topic: "JavaScript",
  },
  {
    questionNumber: 16,
    question:
      "Which method is used to access an HTML element by its ID in JavaScript?",
    options: [
      "getElementById()",
      "querySelector()",
      "getElementsByClassName()",
      "None of the above",
    ],
    answer: "getElementById()",
    difficulty: "easy",
    topic: "JavaScript",
  },
  {
    questionNumber: 17,
    question: "Which of the following will create a new object?",
    options: [
      "let obj = new Object();",
      "let obj = {};",
      "Both A and B",
      "None of the above",
    ],
    answer: "Both A and B",
    difficulty: "easy",
    topic: "JavaScript",
  },
  {
    questionNumber: 18,
    question: "What is the correct way to create an object in JavaScript?",
    options: [
      "let obj = new Object();",
      "let obj = {};",
      "let obj = Object.create();",
      "All of the above",
    ],
    answer: "All of the above",
    difficulty: "easy",
    topic: "JavaScript",
  },
  {
    questionNumber: 19,
    question: "What does the Array.push() method do?",
    options: [
      "Adds one or more elements to the end of an array",
      "Removes the last element from an array",
      "Returns the length of the array",
      "None of the above",
    ],
    answer: "Adds one or more elements to the end of an array",
    difficulty: "easy",
    topic: "JavaScript",
  },
  {
    questionNumber: 20,
    question: "How do you round a number to the nearest integer in JavaScript?",
    options: [
      "Math.round()",
      "Math.ceil()",
      "Math.floor()",
      "None of the above",
    ],
    answer: "Math.round()",
    difficulty: "easy",
    topic: "JavaScript",
  },
  {
    questionNumber: 21,
    question: "Which method is used to convert a string to a number?",
    options: ["parseInt()", "Number()", "parseFloat()", "All of the above"],
    answer: "All of the above",
    difficulty: "easy",
    topic: "JavaScript",
  },
  {
    questionNumber: 22,
    question:
      "What will be the output of the following code?\nconsole.log('Hello' + 5);",
    options: ["Hello5", "5Hello", "Hello 5", "TypeError"],
    answer: "Hello5",
    difficulty: "easy",
    topic: "JavaScript",
  },
  {
    questionNumber: 23,
    question: "What is the result of '5' - 2?",
    options: ["3", "undefined", "NaN", "'5-2'"],
    answer: "3",
    difficulty: "easy",
    topic: "JavaScript",
  },
  {
    questionNumber: 24,
    question: "Which of the following is a falsy value in JavaScript?",
    options: ["0", "NaN", "null", "All of the above"],
    answer: "All of the above",
    difficulty: "easy",
    topic: "JavaScript",
  },
  {
    questionNumber: 25,
    question: "How do you declare a variable that is block scoped?",
    options: ["var", "let", "const", "All of the above"],
    answer: "let",
    difficulty: "easy",
    topic: "JavaScript",
  },
  {
    questionNumber: 26,
    question: "What does the 'this' keyword refer to in JavaScript?",
    options: [
      "The global object",
      "The function itself",
      "The calling object",
      "None of the above",
    ],
    answer: "The calling object",
    difficulty: "medium",
    topic: "JavaScript",
  },
  {
    questionNumber: 27,
    question: "Which function is used to convert an object to a JSON string?",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.object()",
      "None of the above",
    ],
    answer: "JSON.stringify()",
    difficulty: "medium",
    topic: "JavaScript",
  },
  {
    questionNumber: 28,
    question: "What will be the output of console.log([] + '');?",
    options: ["''", "undefined", "NaN", "0"],
    answer: "''",
    difficulty: "medium",
    topic: "JavaScript",
  },
  {
    questionNumber: 29,
    question: "What does the Array.length property represent?",
    options: [
      "The number of elements in an array",
      "The last index of an array",
      "The first element of an array",
      "None of the above",
    ],
    answer: "The number of elements in an array",
    difficulty: "medium",
    topic: "JavaScript",
  },
  {
    questionNumber: 30,
    question:
      "Which method can be used to remove the last element from an array?",
    options: ["pop()", "shift()", "slice()", "None of the above"],
    answer: "pop()",
    difficulty: "medium",
    topic: "JavaScript",
  },
  {
    questionNumber: 31,
    question: "How do you prevent a default action in an event handler?",
    options: [
      "event.preventDefault()",
      "event.stopPropagation()",
      "return false",
      "None of the above",
    ],
    answer: "event.preventDefault()",
    difficulty: "medium",
    topic: "JavaScript",
  },
  {
    questionNumber: 32,
    question: "Which of the following is a method of the String object?",
    options: ["slice()", "split()", "toLowerCase()", "All of the above"],
    answer: "All of the above",
    difficulty: "medium",
    topic: "JavaScript",
  },
  {
    questionNumber: 33,
    question: "What is the use of the 'setTimeout' function?",
    options: [
      "To delay the execution of a function",
      "To execute a function repeatedly",
      "To create a new thread",
      "None of the above",
    ],
    answer: "To delay the execution of a function",
    difficulty: "medium",
    topic: "JavaScript",
  },
  {
    questionNumber: 34,
    question: "What does '=== 'do in JavaScript?",
    options: [
      "Compares values and types",
      "Only compares values",
      "Checks if two variables are the same",
      "None of the above",
    ],
    answer: "Compares values and types",
    difficulty: "medium",
    topic: "JavaScript",
  },
  {
    questionNumber: 35,
    question: "Which of the following is used to handle errors in JavaScript?",
    options: ["try...catch", "if...else", "switch", "None of the above"],
    answer: "try...catch",
    difficulty: "medium",
    topic: "JavaScript",
  },
  {
    questionNumber: 36,
    question: "What is the purpose of the 'eval' function?",
    options: [
      "To execute a string of JavaScript code",
      "To evaluate mathematical expressions",
      "To parse JSON",
      "None of the above",
    ],
    answer: "To execute a string of JavaScript code",
    difficulty: "medium",
    topic: "JavaScript",
  },
  {
    questionNumber: 37,
    question: "Which operator is used to assign a value to a variable?",
    options: ["=", "==", "===", "All of the above"],
    answer: "=",
    difficulty: "medium",
    topic: "JavaScript",
  },
  {
    questionNumber: 38,
    question: "What does the 'slice' method do?",
    options: [
      "Extracts a section of a string and returns it as a new string",
      "Removes the first element of an array",
      "Adds elements to an array",
      "None of the above",
    ],
    answer: "Extracts a section of a string and returns it as a new string",
    difficulty: "medium",
    topic: "JavaScript",
  },
  {
    questionNumber: 39,
    question: "Which of the following is true about JavaScript?",
    options: [
      "JavaScript is a compiled language.",
      "JavaScript can manipulate the DOM.",
      "JavaScript is not case sensitive.",
      "All of the above",
    ],
    answer: "JavaScript can manipulate the DOM.",
    difficulty: "medium",
    topic: "JavaScript",
  },
  {
    questionNumber: 40,
    question:
      "Which method is used to remove an element from a specific index in an array?",
    options: ["splice()", "slice()", "pop()", "None of the above"],
    answer: "splice()",
    difficulty: "medium",
    topic: "JavaScript",
  },

  {
    questionNumber: 41,
    question:
      "What is the output of the following code?\n\nconsole.log(1 + '2' - 1);",
    options: ["1", "2", "undefined", "NaN"],
    answer: "2",
    difficulty: "medium",
    topic: "JavaScript",
  },
  {
    questionNumber: 42,
    question:
      "Which of the following functions can be used to find the length of a string?",
    options: [
      "string.length()",
      "string.length",
      "length(string)",
      "None of the above",
    ],
    answer: "string.length",
    difficulty: "medium",
    topic: "JavaScript",
  },
  {
    questionNumber: 43,
    question: "What does the 'map()' method do in JavaScript?",
    options: [
      "Creates a new array with the results of calling a provided function on every element in the calling array",
      "Returns the first element that passes a test",
      "Filters out elements from an array",
      "None of the above",
    ],
    answer:
      "Creates a new array with the results of calling a provided function on every element in the calling array",
    difficulty: "medium",
    topic: "JavaScript",
  },
  {
    questionNumber: 44,
    question:
      "Which of the following is used to declare a block-scoped variable?",
    options: ["var", "let", "const", "All of the above"],
    answer: "let",
    difficulty: "medium",
    topic: "JavaScript",
  },
  {
    questionNumber: 45,
    question:
      "What is the output of the following code?\n\nconsole.log([] + []);",
    options: ["''", "undefined", "0", "null"],
    answer: "''",
    difficulty: "medium",
    topic: "JavaScript",
  },
  {
    questionNumber: 46,
    question:
      "What will the following code output? 'let a = {name: 'Alice'}; let b = a; b.name = 'Bob'; console.log(a.name);'",
    options: ["Alice", "Bob", "undefined", "TypeError"],
    answer: "Bob",
    difficulty: "medium",
    topic: "JavaScript",
  },
  {
    questionNumber: 47,
    question:
      "What will the following code output? 'const arr = [1, 2, 3]; arr.push(4); console.log(arr);'",
    options: ["[1, 2, 3]", "[1, 2, 3, 4]", "TypeError", "undefined"],
    answer: "[1, 2, 3, 4]",
    difficulty: "medium",
    topic: "JavaScript",
  },
  {
    questionNumber: 48,
    question: "What is the output of 'console.log(typeof null);'",
    options: ["'object'", "'null'", "'undefined'", "'number'"],
    answer: "'object'",
    difficulty: "medium",
    topic: "JavaScript",
  },
  {
    questionNumber: 49,
    question:
      "Which method is used to convert a JSON string into a JavaScript object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "eval()",
      "Object.fromEntries()",
    ],
    answer: "JSON.parse()",
    difficulty: "medium",
    topic: "JavaScript",
  },
  {
    questionNumber: 50,
    question:
      "What will the following code output? 'console.log([1, 2, 3].reduce((acc, curr) => acc + curr, 0));'",
    options: ["6", "undefined", "NaN", "TypeError"],
    answer: "6",
    difficulty: "medium",
    topic: "JavaScript",
  },
  {
    questionNumber: 51,
    question:
      "What is the output of the following code?\n\nconsole.log(typeof []);",
    options: ["'array'", "'object'", "'undefined'", "'string'"],
    answer: "'object'",
    difficulty: "hard",
    topic: "JavaScript",
  },
  {
    questionNumber: 52,
    question:
      "Which method is used to combine two or more arrays in JavaScript?",
    options: ["concat()", "join()", "push()", "merge()"],
    answer: "concat()",
    difficulty: "hard",
    topic: "JavaScript",
  },
  {
    questionNumber: 53,
    question: "What will the following code output?\n\nconsole.log(2 == '2');",
    options: ["true", "false", "undefined", "TypeError"],
    answer: "true",
    difficulty: "hard",
    topic: "JavaScript",
  },
  {
    questionNumber: 54,
    question: "How do you create a JavaScript date object?",
    options: ["new Date()", "Date()", "new DateObject()", "None of the above"],
    answer: "new Date()",
    difficulty: "hard",
    topic: "JavaScript",
  },
  {
    questionNumber: 55,
    question:
      "Which method can be used to convert a JSON string into a JavaScript object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.toObject()",
      "None of the above",
    ],
    answer: "JSON.parse()",
    difficulty: "hard",
    topic: "JavaScript",
  },
  {
    questionNumber: 56,
    question:
      "What will be the output of the following code?\n\nconsole.log(1 + '1' == 2);",
    options: ["true", "false", "undefined", "TypeError"],
    answer: "false",
    difficulty: "hard",
    topic: "JavaScript",
  },
  {
    questionNumber: 57,
    question: "What is a closure in JavaScript?",
    options: [
      "A function that retains access to its lexical scope even when the function is executed outside that scope",
      "A method to hide variables",
      "A way to create private variables",
      "None of the above",
    ],
    answer:
      "A function that retains access to its lexical scope even when the function is executed outside that scope",
    difficulty: "hard",
    topic: "JavaScript",
  },
  {
    questionNumber: 58,
    question: "Which of the following statements is true about 'let'?",
    options: [
      "'let' variables can be redeclared",
      "'let' variables are function-scoped",
      "'let' variables are hoisted but not initialized",
      "None of the above",
    ],
    answer: "'let' variables are hoisted but not initialized",
    difficulty: "hard",
    topic: "JavaScript",
  },
  {
    questionNumber: 59,
    question: "What is the purpose of the 'bind()' method in JavaScript?",
    options: [
      "To bind a function to a specific context",
      "To create a new function with a bound this value",
      "Both A and B",
      "None of the above",
    ],
    answer: "Both A and B",
    difficulty: "hard",
    topic: "JavaScript",
  },
  {
    questionNumber: 60,
    question:
      "What will the following code output?\n\nconsole.log(typeof null);",
    options: ["'object'", "'null'", "'undefined'", "'NaN'"],
    answer: "'object'",
    difficulty: "hard",
    topic: "JavaScript",
  },
  {
    questionNumber: 61,
    question: "What is the result of the following expression: Boolean(null)?",
    options: ["true", "false", "undefined", "TypeError"],
    answer: "false",
    difficulty: "hard",
    topic: "JavaScript",
  },
  {
    questionNumber: 62,
    question:
      "Which of the following methods can be used to remove duplicates from an array?",
    options: ["filter()", "reduce()", "Set", "All of the above"],
    answer: "All of the above",
    difficulty: "hard",
    topic: "JavaScript",
  },
  {
    questionNumber: 63,
    question:
      "What is the output of the following code?\n\nconsole.log(1 == '1' && 1 === '1');",
    options: ["true", "false", "undefined", "TypeError"],
    answer: "false",
    difficulty: "hard",
    topic: "JavaScript",
  },
  {
    questionNumber: 64,
    question: "Which statement is true about the 'for...of' loop?",
    options: [
      "It iterates over the indices of an array",
      "It can be used with strings",
      "It cannot be used with objects",
      "None of the above",
    ],
    answer: "It can be used with strings",
    difficulty: "hard",
    topic: "JavaScript",
  },
  {
    questionNumber: 65,
    question:
      "Which of the following is a way to create an object in JavaScript?",
    options: [
      "Using object literal syntax",
      "Using the 'new Object()' syntax",
      "Using Object.create()",
      "All of the above",
    ],
    answer: "All of the above",
    difficulty: "hard",
    topic: "JavaScript",
  },
  {
    questionNumber: 66,
    question: "What is the result of 'undefined == null'?",
    options: ["true", "false", "TypeError", "undefined"],
    answer: "true",
    difficulty: "hard",
    topic: "JavaScript",
  },

  {
    questionNumber: 67,
    question:
      "What is the output of the following code?\n\nconsole.log([1,2] == [1,2]);",
    options: ["true", "false", "undefined", "TypeError"],
    answer: "false",
    difficulty: "hard",
    topic: "JavaScript",
  },
  {
    questionNumber: 68,
    question: "Which method is used to loop over an array in JavaScript?",
    options: ["forEach()", "map()", "filter()", "All of the above"],
    answer: "All of the above",
    difficulty: "hard",
    topic: "JavaScript",
  },
  {
    questionNumber: 69,
    question: "What does the 'reduce()' method do in JavaScript?",
    options: [
      "Executes a reducer function on each element of the array, resulting in a single output value",
      "Creates a new array with all elements that pass the test implemented by the provided function",
      "Returns the first element that passes a test",
      "None of the above",
    ],
    answer:
      "Executes a reducer function on each element of the array, resulting in a single output value",
    difficulty: "hard",
    topic: "JavaScript",
  },
  {
    questionNumber: 70,
    question:
      "What will the following code output?\n\nconsole.log([1, 2, 3].map(x => x * 2));",
    options: ["[2, 4, 6]", "[1, 2, 3]", "[1, 2, 3, 2]", "undefined"],
    answer: "[2, 4, 6]",
    difficulty: "hard",
    topic: "JavaScript",
  },
  {
    questionNumber: 71,
    question:
      "What will the following code output?\n\nconsole.log('a' + + 'b');",
    options: ["'ab'", "'NaN'", "'aNaN'", "'undefined'"],
    answer: "'aNaN'",
    difficulty: "hard",
    topic: "JavaScript",
  },
  {
    questionNumber: 72,
    question:
      "What is the output of the following code?\n\nconsole.log(typeof (1 + '1'));",
    options: ["'string'", "'number'", "'undefined'", "'NaN'"],
    answer: "'string'",
    difficulty: "hard",
    topic: "JavaScript",
  },
  {
    questionNumber: 73,
    question:
      "What is the output of the following code?\n\nconsole.log((() => 42)() === 42);",
    options: ["true", "false", "undefined", "TypeError"],
    answer: "true",
    difficulty: "hard",
    topic: "JavaScript",
  },
  {
    questionNumber: 74,
    question:
      "Which of the following is an example of a higher-order function?",
    options: ["map()", "filter()", "reduce()", "All of the above"],
    answer: "All of the above",
    difficulty: "hard",
    topic: "JavaScript",
  },
  {
    questionNumber: 75,
    question:
      "What will the following code output?\n\nconsole.log((function(){}() === undefined);",
    options: ["true", "false", "undefined", "TypeError"],
    answer: "true",
    difficulty: "hard",
    topic: "JavaScript",
  },

  {
    questionNumber: 1,
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Creative Style System",
      "Colorful Style Sheets",
      "Computer Style Sheets",
    ],
    answer: "Cascading Style Sheets",
    difficulty: "easy",
    topic: "CSS",
  },
  {
    questionNumber: 2,
    question: "Which property is used to change the background color?",
    options: ["bgcolor", "color", "background-color", "background"],
    answer: "background-color",
    difficulty: "easy",
    topic: "CSS",
  },
  {
    questionNumber: 3,
    question: "How do you add a comment in CSS?",
    options: [
      "// This is a comment",
      "<!-- This is a comment -->",
      "/* This is a comment */",
      "# This is a comment",
    ],
    answer: "/* This is a comment */",
    difficulty: "easy",
    topic: "CSS",
  },
  {
    questionNumber: 4,
    question: "Which CSS property controls the text size?",
    options: ["font-size", "text-size", "font-style", "text-style"],
    answer: "font-size",
    difficulty: "easy",
    topic: "CSS",
  },
  {
    questionNumber: 5,
    question: "What is the correct CSS syntax to change the font name?",
    options: [
      "font-family: Arial;",
      "font: Arial;",
      "font-name: Arial;",
      "text-font: Arial;",
    ],
    answer: "font-family: Arial;",
    difficulty: "easy",
    topic: "CSS",
  },
  {
    questionNumber: 6,
    question: "Which property is used to change the text color?",
    options: ["color", "text-color", "font-color", "background-color"],
    answer: "color",
    difficulty: "easy",
    topic: "CSS",
  },
  {
    questionNumber: 7,
    question: "What is the default value of the position property?",
    options: ["relative", "absolute", "static", "fixed"],
    answer: "static",
    difficulty: "easy",
    topic: "CSS",
  },
  {
    questionNumber: 8,
    question: "How do you select an element with id 'demo'?",
    options: ["#demo", ".demo", "demo", "id:demo"],
    answer: "#demo",
    difficulty: "easy",
    topic: "CSS",
  },
  {
    questionNumber: 9,
    question: "How do you select elements with class 'demo'?",
    options: ["#demo", ".demo", "demo", "class:demo"],
    answer: ".demo",
    difficulty: "easy",
    topic: "CSS",
  },
  {
    questionNumber: 10,
    question: "Which CSS property is used to add space between the elements?",
    options: ["padding", "margin", "spacing", "border"],
    answer: "margin",
    difficulty: "easy",
    topic: "CSS",
  },
  {
    questionNumber: 11,
    question: "What does the 'float' property do?",
    options: [
      "Positions an element to the left or right",
      "Moves an element up or down",
      "Changes the opacity of an element",
      "None of the above",
    ],
    answer: "Positions an element to the left or right",
    difficulty: "easy",
    topic: "CSS",
  },
  {
    questionNumber: 12,
    question: "Which property is used to change the font of an element?",
    options: ["font-weight", "font-family", "text-style", "text-font"],
    answer: "font-family",
    difficulty: "easy",
    topic: "CSS",
  },
  {
    questionNumber: 13,
    question: "How do you make a list that lists its items with squares?",
    options: [
      "list-type: square;",
      "list-style-type: square;",
      "list-style: square;",
      "type: square;",
    ],
    answer: "list-style-type: square;",
    difficulty: "easy",
    topic: "CSS",
  },
  {
    questionNumber: 14,
    question: "How do you create a flex container?",
    options: [
      "display: flex;",
      "flex: container;",
      "display: box;",
      "flex: display;",
    ],
    answer: "display: flex;",
    difficulty: "easy",
    topic: "CSS",
  },
  {
    questionNumber: 15,
    question: "Which property is used to change the height of an element?",
    options: ["height", "width", "size", "length"],
    answer: "height",
    difficulty: "easy",
    topic: "CSS",
  },
  {
    questionNumber: 16,
    question: "What is the purpose of the z-index property?",
    options: [
      "To control the vertical stacking order of overlapping elements",
      "To define the width of an element",
      "To set the visibility of an element",
      "None of the above",
    ],
    answer: "To control the vertical stacking order of overlapping elements",
    difficulty: "easy",
    topic: "CSS",
  },
  {
    questionNumber: 17,
    question: "Which property controls the layout of a grid?",
    options: ["grid-layout", "grid-template", "grid-area", "grid"],
    answer: "grid",
    difficulty: "easy",
    topic: "CSS",
  },
  {
    questionNumber: 18,
    question:
      "What is the CSS syntax to apply a style to an element with a specific class?",
    options: [
      ".classname { property: value; }",
      "#classname { property: value; }",
      "classname { property: value; }",
      "classname: { property: value; }",
    ],
    answer: ".classname { property: value; }",
    difficulty: "easy",
    topic: "CSS",
  },
  {
    questionNumber: 19,
    question: "How do you center a block element horizontally?",
    options: [
      "margin: auto;",
      "text-align: center;",
      "padding: center;",
      "display: center;",
    ],
    answer: "margin: auto;",
    difficulty: "easy",
    topic: "CSS",
  },
  {
    questionNumber: 20,
    question: "Which of the following is a valid CSS unit for font size?",
    options: ["px", "pt", "em", "All of the above"],
    answer: "All of the above",
    difficulty: "easy",
    topic: "CSS",
  },
  {
    questionNumber: 21,
    question: "What is the purpose of the display property?",
    options: [
      "To control the layout of an element",
      "To change the visibility of an element",
      "To add animations to an element",
      "None of the above",
    ],
    answer: "To control the layout of an element",
    difficulty: "easy",
    topic: "CSS",
  },
  {
    questionNumber: 22,
    question:
      "Which property is used to set the spacing between the lines of text?",
    options: ["line-height", "text-spacing", "letter-spacing", "font-spacing"],
    answer: "line-height",
    difficulty: "easy",
    topic: "CSS",
  },
  {
    questionNumber: 23,
    question: "What is the correct way to link an external CSS file?",
    options: [
      "<link rel='stylesheet' href='style.css'>",
      "<css href='style.css'>",
      "<link href='style.css' rel='stylesheet'>",
      "Both A and C",
    ],
    answer: "Both A and C",
    difficulty: "easy",
    topic: "CSS",
  },
  {
    questionNumber: 24,
    question: "What is the 'hover' pseudo-class used for?",
    options: [
      "To apply styles when the user hovers over an element",
      "To style active elements",
      "To style visited links",
      "None of the above",
    ],
    answer: "To apply styles when the user hovers over an element",
    difficulty: "easy",
    topic: "CSS",
  },
  {
    questionNumber: 25,
    question: "What does the 'opacity' property do?",
    options: [
      "Sets the transparency level of an element",
      "Sets the display type of an element",
      "Sets the visibility of an element",
      "None of the above",
    ],
    answer: "Sets the transparency level of an element",
    difficulty: "easy",
    topic: "CSS",
  },
  {
    questionNumber: 26,
    question: "Which property is used to control the size of the font?",
    options: ["font-size", "font-style", "text-size", "font-weight"],
    answer: "font-size",
    difficulty: "medium",
    topic: "CSS",
  },
  {
    questionNumber: 27,
    question: "How can you make a list that is numbered?",
    options: [
      "list-style-type: square;",
      "list-style-type: decimal;",
      "list-style: decimal;",
      "list-type: decimal;",
    ],
    answer: "list-style-type: decimal;",
    difficulty: "medium",
    topic: "CSS",
  },
  {
    questionNumber: 28,
    question: "Which CSS property is used for text alignment?",
    options: ["text-align", "align", "text-position", "text-justify"],
    answer: "text-align",
    difficulty: "medium",
    topic: "CSS",
  },
  {
    questionNumber: 29,
    question: "What does the 'flex-direction' property do?",
    options: [
      "Defines the direction flex items are placed in the flex container",
      "Defines the order of the flex items",
      "Defines how the space is distributed",
      "None of the above",
    ],
    answer: "Defines the direction flex items are placed in the flex container",
    difficulty: "medium",
    topic: "CSS",
  },
  {
    questionNumber: 30,
    question: "Which of the following is not a valid CSS unit?",
    options: ["px", "em", "cm", "qm"],
    answer: "qm",
    difficulty: "medium",
    topic: "CSS",
  },
  {
    questionNumber: 31,
    question: "What does the 'visibility' property do?",
    options: [
      "Specifies whether an element is visible or hidden",
      "Controls the layout of an element",
      "Controls the transparency of an element",
      "None of the above",
    ],
    answer: "Specifies whether an element is visible or hidden",
    difficulty: "medium",
    topic: "CSS",
  },
  {
    questionNumber: 32,
    question: "What is the purpose of the 'transition' property?",
    options: [
      "To create animations when property changes occur",
      "To change the position of elements",
      "To set the size of elements",
      "None of the above",
    ],
    answer: "To create animations when property changes occur",
    difficulty: "medium",
    topic: "CSS",
  },
  {
    questionNumber: 33,
    question:
      "Which property is used to create a space between the border and the content?",
    options: ["margin", "padding", "border-spacing", "space"],
    answer: "padding",
    difficulty: "medium",
    topic: "CSS",
  },
  {
    questionNumber: 34,
    question: "What is the purpose of the 'box-shadow' property?",
    options: [
      "To add shadow effects around an element's frame",
      "To change the background color of an element",
      "To set the border of an element",
      "None of the above",
    ],
    answer: "To add shadow effects around an element's frame",
    difficulty: "medium",
    topic: "CSS",
  },
  {
    questionNumber: 35,
    question: "What does the 'align-items' property do in a flex container?",
    options: [
      "Aligns flex items along the cross axis",
      "Aligns flex items along the main axis",
      "Sets the size of flex items",
      "None of the above",
    ],
    answer: "Aligns flex items along the cross axis",
    difficulty: "medium",
    topic: "CSS",
  },
  {
    questionNumber: 36,
    question: "What is the effect of 'display: none;'?",
    options: [
      "The element will not be displayed",
      "The element will still take up space",
      "The element will be visible but not clickable",
      "None of the above",
    ],
    answer: "The element will not be displayed",
    difficulty: "medium",
    topic: "CSS",
  },
  {
    questionNumber: 37,
    question: "What is the purpose of the 'calc()' function in CSS?",
    options: [
      "To perform calculations to determine CSS property values",
      "To animate elements",
      "To change the layout of elements",
      "None of the above",
    ],
    answer: "To perform calculations to determine CSS property values",
    difficulty: "medium",
    topic: "CSS",
  },
  {
    questionNumber: 38,
    question:
      "Which of the following values is valid for the 'position' property?",
    options: ["static", "relative", "absolute", "All of the above"],
    answer: "All of the above",
    difficulty: "medium",
    topic: "CSS",
  },
  {
    questionNumber: 39,
    question: "What is the purpose of the 'grid-template-columns' property?",
    options: [
      "Defines the number and size of columns in a grid layout",
      "Defines the number of rows in a grid layout",
      "Defines the layout of items in a flex container",
      "None of the above",
    ],
    answer: "Defines the number and size of columns in a grid layout",
    difficulty: "medium",
    topic: "CSS",
  },
  {
    questionNumber: 40,
    question: "How can you hide an element without using display: none?",
    options: [
      "opacity: 0;",
      "visibility: hidden;",
      "position: absolute;",
      "Both A and B",
    ],
    answer: "Both A and B",
    difficulty: "medium",
    topic: "CSS",
  },
  {
    questionNumber: 41,
    question:
      "Which property is used to control the space between characters in text?",
    options: ["letter-spacing", "word-spacing", "text-spacing", "line-height"],
    answer: "letter-spacing",
    difficulty: "medium",
    topic: "CSS",
  },
  {
    questionNumber: 42,
    question: "What does the 'grid-template-areas' property do?",
    options: [
      "Defines named grid areas",
      "Sets the size of grid items",
      "Aligns items in the grid",
      "None of the above",
    ],
    answer: "Defines named grid areas",
    difficulty: "medium",
    topic: "CSS",
  },
  {
    questionNumber: 43,
    question: "What is the effect of 'overflow: hidden;'?",
    options: [
      "Hides the overflow content",
      "Shows scrollbars",
      "Allows overflow content to be visible",
      "None of the above",
    ],
    answer: "Hides the overflow content",
    difficulty: "medium",
    topic: "CSS",
  },
  {
    questionNumber: 44,
    question: "What does the 'border-radius' property do?",
    options: [
      "Rounds the corners of an element's border",
      "Sets the width of an element's border",
      "Sets the spacing of the border",
      "None of the above",
    ],
    answer: "Rounds the corners of an element's border",
    difficulty: "medium",
    topic: "CSS",
  },
  {
    questionNumber: 45,
    question: "Which property is used to set the opacity of an element?",
    options: ["opacity", "visibility", "display", "filter"],
    answer: "opacity",
    difficulty: "medium",
    topic: "CSS",
  },

  {
    questionNumber: 46,
    question:
      "In a flexbox layout, which property is used to align items along the main axis?",
    options: ["flex-direction", "align-items", "justify-content", "flex-wrap"],
    answer: "justify-content",
    difficulty: "medium",
    topic: "CSS",
  },
  {
    questionNumber: 47,
    question:
      "Which pseudo-class is used to style an element when the mouse hovers over it?",
    options: [":active", ":focus", ":hover", ":visited"],
    answer: ":hover",
    difficulty: "medium",
    topic: "CSS",
  },
  {
    questionNumber: 48,
    question: "In CSS Grid, what does the property 'grid-template-areas' do?",
    options: [
      "Defines the layout of the grid",
      "Sets the size of the grid items",
      "Specifies the gaps between rows and columns",
      "Adjusts the alignment of the grid",
    ],
    answer: "Defines the layout of the grid",
    difficulty: "medium",
    topic: "CSS",
  },
  {
    questionNumber: 49,
    question:
      "Which CSS feature allows you to create reusable styles without duplicating code?",
    options: ["Media Queries", "Variables", "Animations", "Selectors"],
    answer: "Variables",
    difficulty: "medium",
    topic: "CSS",
  },
  {
    questionNumber: 50,
    question:
      "How can you apply styles only when a screen width is less than 600 pixels?",
    options: [
      "@media (max-width: 600px)",
      "@media (min-width: 600px)",
      "@responsive (max-width: 600px)",
      "@screen (max-width: 600px)",
    ],
    answer: "@media (max-width: 600px)",
    difficulty: "medium",
    topic: "CSS",
  },
  {
    questionNumber: 51,
    question: "What is the purpose of the '@media' rule in CSS?",
    options: [
      "To apply styles based on media queries",
      "To define CSS variables",
      "To create animations",
      "None of the above",
    ],
    answer: "To apply styles based on media queries",
    difficulty: "hard",
    topic: "CSS",
  },
  {
    questionNumber: 52,
    question: "What does the 'flex-grow' property do?",
    options: [
      "Defines the ability of a flex item to grow",
      "Defines the ability of a flex item to shrink",
      "Sets the order of flex items",
      "None of the above",
    ],
    answer: "Defines the ability of a flex item to grow",
    difficulty: "hard",
    topic: "CSS",
  },
  {
    questionNumber: 53,
    question: "What does the 'object-fit' property do?",
    options: [
      "Defines how an element, such as an <img>, should be resized to fit its container",
      "Sets the position of an object in the container",
      "Defines the opacity of an element",
      "None of the above",
    ],
    answer:
      "Defines how an element, such as an <img>, should be resized to fit its container",
    difficulty: "hard",
    topic: "CSS",
  },
  {
    questionNumber: 54,
    question: "What is the 'transition-delay' property used for?",
    options: [
      "Sets the duration of the delay before a transition starts",
      "Defines the time it takes for a transition to complete",
      "Sets the timing function for the transition",
      "None of the above",
    ],
    answer: "Sets the duration of the delay before a transition starts",
    difficulty: "hard",
    topic: "CSS",
  },
  {
    questionNumber: 55,
    question: "What is the CSS Grid property 'grid-auto-flow' used for?",
    options: [
      "Controls how auto-placed items are inserted into the grid",
      "Defines the size of grid items",
      "Aligns items in the grid",
      "None of the above",
    ],
    answer: "Controls how auto-placed items are inserted into the grid",
    difficulty: "hard",
    topic: "CSS",
  },
  {
    questionNumber: 56,
    question: "What does the 'will-change' property do?",
    options: [
      "Hints the browser about which properties will change",
      "Sets the visibility of an element",
      "Defines how an element should be rendered",
      "None of the above",
    ],
    answer: "Hints the browser about which properties will change",
    difficulty: "hard",
    topic: "CSS",
  },
  {
    questionNumber: 57,
    question: "What does the 'backface-visibility' property control?",
    options: [
      "Whether the back face of an element is visible when turned",
      "The opacity of an element",
      "The visibility of a child element",
      "None of the above",
    ],
    answer: "Whether the back face of an element is visible when turned",
    difficulty: "hard",
    topic: "CSS",
  },
  {
    questionNumber: 58,
    question: "What does the 'filter' property do in CSS?",
    options: [
      "Applies graphical effects like blur or color shift to an element",
      "Changes the opacity of an element",
      "Sets the visibility of an element",
      "None of the above",
    ],
    answer: "Applies graphical effects like blur or color shift to an element",
    difficulty: "hard",
    topic: "CSS",
  },
  {
    questionNumber: 59,
    question: "What is the purpose of the 'grid-template-rows' property?",
    options: [
      "Defines the number and size of rows in a grid layout",
      "Sets the number of columns in a grid layout",
      "Aligns items in the grid",
      "None of the above",
    ],
    answer: "Defines the number and size of rows in a grid layout",
    difficulty: "hard",
    topic: "CSS",
  },
  {
    questionNumber: 60,
    question: "How do you use CSS variables?",
    options: [
      "--variable-name: value;",
      "$variable-name: value;",
      "@variable-name: value;",
      "var(variable-name): value;",
    ],
    answer: "--variable-name: value;",
    difficulty: "hard",
    topic: "CSS",
  },
  {
    questionNumber: 61,
    question: "What does the 'column-count' property do?",
    options: [
      "Specifies the number of columns an element should be divided into",
      "Sets the number of rows in a grid layout",
      "Defines the width of columns",
      "None of the above",
    ],
    answer: "Specifies the number of columns an element should be divided into",
    difficulty: "hard",
    topic: "CSS",
  },
  {
    questionNumber: 62,
    question: "What does the 'resize' property do?",
    options: [
      "Defines if and how an element can be resized by the user",
      "Sets the size of an element",
      "Controls the overflow of an element",
      "None of the above",
    ],
    answer: "Defines if and how an element can be resized by the user",
    difficulty: "hard",
    topic: "CSS",
  },
  {
    questionNumber: 63,
    question: "What does the 'shape-outside' property do?",
    options: [
      "Defines a shape that floats an element around",
      "Sets the visibility of an element",
      "Aligns items in a container",
      "None of the above",
    ],
    answer: "Defines a shape that floats an element around",
    difficulty: "hard",
    topic: "CSS",
  },
  {
    questionNumber: 64,
    question: "What is the purpose of the 'clamp()' function in CSS?",
    options: [
      "Sets a value within a specific range",
      "Defines the size of an element",
      "Changes the opacity of an element",
      "None of the above",
    ],
    answer: "Sets a value within a specific range",
    difficulty: "hard",
    topic: "CSS",
  },
  {
    questionNumber: 65,
    question: "What does the 'overflow-x' property control?",
    options: [
      "Controls the overflow of content horizontally",
      "Controls the overflow of content vertically",
      "Sets the visibility of an element",
      "None of the above",
    ],
    answer: "Controls the overflow of content horizontally",
    difficulty: "hard",
    topic: "CSS",
  },
  {
    questionNumber: 66,
    question: "What does the 'animation-fill-mode' property do?",
    options: [
      "Defines how styles are applied before and after the animation",
      "Controls the speed of the animation",
      "Defines the duration of the animation",
      "None of the above",
    ],
    answer: "Defines how styles are applied before and after the animation",
    difficulty: "hard",
    topic: "CSS",
  },
  {
    questionNumber: 67,
    question: "What does the 'pointer-events' property do?",
    options: [
      "Specifies whether an element can be the target of pointer events",
      "Sets the visibility of an element",
      "Defines the opacity of an element",
      "None of the above",
    ],
    answer: "Specifies whether an element can be the target of pointer events",
    difficulty: "hard",
    topic: "CSS",
  },
  {
    questionNumber: 68,
    question:
      "What does the 'justify-content' property do in a flex container?",
    options: [
      "Aligns flex items along the main axis",
      "Aligns flex items along the cross axis",
      "Sets the order of flex items",
      "None of the above",
    ],
    answer: "Aligns flex items along the main axis",
    difficulty: "hard",
    topic: "CSS",
  },
  {
    questionNumber: 69,
    question: "What is the 'aspect-ratio' property used for?",
    options: [
      "Defines the ratio between the width and height of an element",
      "Sets the visibility of an element",
      "Defines the size of an element",
      "None of the above",
    ],
    answer: "Defines the ratio between the width and height of an element",
    difficulty: "hard",
    topic: "CSS",
  },
  {
    questionNumber: 70,
    question: "What does the 'contain' property do?",
    options: [
      "Defines what aspects of an element should be contained",
      "Controls the overflow of an element",
      "Sets the size of an element",
      "None of the above",
    ],
    answer: "Defines what aspects of an element should be contained",
    difficulty: "hard",
    topic: "CSS",
  },
  {
    questionNumber: 71,
    question: "What does the 'filter: blur(5px);' do?",
    options: [
      "Applies a blur effect to an element",
      "Changes the opacity of an element",
      "Sets the visibility of an element",
      "None of the above",
    ],
    answer: "Applies a blur effect to an element",
    difficulty: "hard",
    topic: "CSS",
  },
  {
    questionNumber: 72,
    question: "What does the 'content' property do in CSS?",
    options: [
      "Inserts generated content before or after an element",
      "Changes the opacity of an element",
      "Sets the size of an element",
      "None of the above",
    ],
    answer: "Inserts generated content before or after an element",
    difficulty: "hard",
    topic: "CSS",
  },
  {
    questionNumber: 73,
    question: "What does the 'writing-mode' property do?",
    options: [
      "Specifies the direction in which text is laid out",
      "Controls the overflow of an element",
      "Sets the visibility of an element",
      "None of the above",
    ],
    answer: "Specifies the direction in which text is laid out",
    difficulty: "hard",
    topic: "CSS",
  },
  {
    questionNumber: 74,
    question: "What is the purpose of the 'grid-gap' property?",
    options: [
      "Sets the size of the gap between rows and columns in a grid layout",
      "Defines the size of grid items",
      "Aligns items in the grid",
      "None of the above",
    ],
    answer:
      "Sets the size of the gap between rows and columns in a grid layout",
    difficulty: "hard",
    topic: "CSS",
  },
  {
    questionNumber: 75,
    question: "What does the 'break-inside' property do?",
    options: [
      "Controls how a box should break inside a multi-column layout",
      "Defines the visibility of an element",
      "Sets the size of an element",
      "None of the above",
    ],
    answer: "Controls how a box should break inside a multi-column layout",
    difficulty: "hard",
    topic: "CSS",
  },
  {
    questionNumber: 1,
    question: "What does HTML stand for?",
    options: [
      "Hypertext Markup Language",
      "Hightext Machine Language",
      "Hyperlink and Text Markup Language",
      "None of the above",
    ],
    answer: "Hypertext Markup Language",
    difficulty: "easy",
    topic: "HTML",
  },
  {
    questionNumber: 2,
    question: "Which tag is used to create a hyperlink in HTML?",
    options: ["<a>", "<link>", "<hyperlink>", "<href>"],
    answer: "<a>",
    difficulty: "easy",
    topic: "HTML",
  },
  {
    questionNumber: 3,
    question: "What is the correct HTML element for inserting a line break?",
    options: ["<break>", "<br>", "<lb>", "<line>"],
    answer: "<br>",
    difficulty: "easy",
    topic: "HTML",
  },
  {
    questionNumber: 4,
    question: "Which HTML element is used to define a list item?",
    options: ["<item>", "<li>", "<listitem>", "<ul>"],
    answer: "<li>",
    difficulty: "easy",
    topic: "HTML",
  },
  {
    questionNumber: 5,
    question: "What does the <title> tag do?",
    options: [
      "Defines the title of the document",
      "Creates a header",
      "Defines a link",
      "None of the above",
    ],
    answer: "Defines the title of the document",
    difficulty: "easy",
    topic: "HTML",
  },
  {
    questionNumber: 6,
    question: "Which of the following is the correct way to comment in HTML?",
    options: [
      "// This is a comment",
      "<!-- This is a comment -->",
      "/* This is a comment */",
      "' This is a comment",
    ],
    answer: "<!-- This is a comment -->",
    difficulty: "easy",
    topic: "HTML",
  },
  {
    questionNumber: 7,
    question: "What is the purpose of the <head> tag in HTML?",
    options: [
      "To contain meta-information about the document",
      "To define the body of the document",
      "To create a footer",
      "To add styles",
    ],
    answer: "To contain meta-information about the document",
    difficulty: "easy",
    topic: "HTML",
  },
  {
    questionNumber: 8,
    question: "Which HTML element is used to define an image?",
    options: ["<img>", "<image>", "<picture>", "<src>"],
    answer: "<img>",
    difficulty: "easy",
    topic: "HTML",
  },
  {
    questionNumber: 9,
    question:
      "What attribute is used to specify the URL of an image in the <img> tag?",
    options: ["url", "src", "href", "link"],
    answer: "src",
    difficulty: "easy",
    topic: "HTML",
  },
  {
    questionNumber: 10,
    question: "Which tag is used for the largest heading in HTML?",
    options: ["<h1>", "<h6>", "<heading>", "<h0>"],
    answer: "<h1>",
    difficulty: "easy",
    topic: "HTML",
  },
  {
    questionNumber: 11,
    question: "What is the default value of the <ol> tag?",
    options: ["1", "a", "i", "None of the above"],
    answer: "1",
    difficulty: "easy",
    topic: "HTML",
  },
  {
    questionNumber: 12,
    question: "Which tag is used to define a footer for a document or section?",
    options: ["<footer>", "<bottom>", "<section-footer>", "<end>"],
    answer: "<footer>",
    difficulty: "easy",
    topic: "HTML",
  },
  {
    questionNumber: 13,
    question: "Which tag is used to define a clickable button?",
    options: ["<button>", "<click>", "<btn>", "<input type='button'>"],
    answer: "<button>",
    difficulty: "easy",
    topic: "HTML",
  },
  {
    questionNumber: 14,
    question: "What is the purpose of the <form> tag in HTML?",
    options: [
      "To create a form for user input",
      "To define a table",
      "To add styles",
      "To create links",
    ],
    answer: "To create a form for user input",
    difficulty: "easy",
    topic: "HTML",
  },
  {
    questionNumber: 15,
    question: "What does the <input type='text'> element do?",
    options: [
      "Creates a single-line text input field",
      "Defines a button",
      "Creates a checkbox",
      "Defines a password field",
    ],
    answer: "Creates a single-line text input field",
    difficulty: "easy",
    topic: "HTML",
  },
  {
    questionNumber: 16,
    question: "What is the purpose of the <style> tag?",
    options: [
      "To define CSS styles for the document",
      "To create JavaScript functions",
      "To define a link",
      "To create a script",
    ],
    answer: "To define CSS styles for the document",
    difficulty: "easy",
    topic: "HTML",
  },
  {
    questionNumber: 17,
    question: "How do you create a checkbox in HTML?",
    options: [
      "<input type='checkbox'>",
      "<checkbox>",
      "<input type='check'>",
      "<check>",
    ],
    answer: "<input type='checkbox'>",
    difficulty: "easy",
    topic: "HTML",
  },
  {
    questionNumber: 18,
    question: "Which HTML tag is used to create an unordered list?",
    options: ["<ul>", "<ol>", "<list>", "<li>"],
    answer: "<ul>",
    difficulty: "easy",
    topic: "HTML",
  },
  {
    questionNumber: 19,
    question: "What does the <blockquote> tag do?",
    options: [
      "Defines a section that is quoted from another source",
      "Creates a link",
      "Defines a footer",
      "Creates a script",
    ],
    answer: "Defines a section that is quoted from another source",
    difficulty: "easy",
    topic: "HTML",
  },
  {
    questionNumber: 20,
    question: "How do you create a text input field in HTML?",
    options: [
      "<input type='text'>",
      "<textfield>",
      "<input field='text'>",
      "<textinput>",
    ],
    answer: "<input type='text'>",
    difficulty: "easy",
    topic: "HTML",
  },
  {
    questionNumber: 21,
    question: "What is the use of the <meta> tag?",
    options: [
      "To define metadata about the HTML document",
      "To create links",
      "To define styles",
      "To create a script",
    ],
    answer: "To define metadata about the HTML document",
    difficulty: "easy",
    topic: "HTML",
  },
  {
    questionNumber: 22,
    question: "Which tag is used to display a horizontal line in HTML?",
    options: ["<hr>", "<line>", "<horizontal>", "<rule>"],
    answer: "<hr>",
    difficulty: "easy",
    topic: "HTML",
  },
  {
    questionNumber: 23,
    question: "Which attribute is used to specify an image's alternative text?",
    options: ["title", "alt", "src", "href"],
    answer: "alt",
    difficulty: "easy",
    topic: "HTML",
  },
  {
    questionNumber: 24,
    question: "What is the function of the <abbr> tag?",
    options: [
      "Defines an abbreviation",
      "Creates a link",
      "Defines a button",
      "None of the above",
    ],
    answer: "Defines an abbreviation",
    difficulty: "easy",
    topic: "HTML",
  },
  {
    questionNumber: 25,
    question: "How do you create a drop-down list in HTML?",
    options: ["<select>", "<dropdown>", "<list>", "<input type='dropdown'>"],
    answer: "<select>",
    difficulty: "easy",
    topic: "HTML",
  },
  {
    questionNumber: 26,
    question: "What is the difference between <div> and <span>?",
    options: [
      "div is a block element; span is an inline element",
      "span is a block element; div is an inline element",
      "Both are the same",
      "None of the above",
    ],
    answer: "div is a block element; span is an inline element",
    difficulty: "medium",
    topic: "HTML",
  },
  {
    questionNumber: 27,
    question: "Which HTML element is used to specify a section in a document?",
    options: ["<section>", "<div>", "<span>", "<group>"],
    answer: "<section>",
    difficulty: "medium",
    topic: "HTML",
  },
  {
    questionNumber: 28,
    question: "What is the purpose of the <canvas> element?",
    options: [
      "To draw graphics via scripting (usually JavaScript)",
      "To create images",
      "To define a table",
      "To create a list",
    ],
    answer: "To draw graphics via scripting (usually JavaScript)",
    difficulty: "medium",
    topic: "HTML",
  },
  {
    questionNumber: 29,
    question: "Which element is used to define a navigation bar?",
    options: ["<nav>", "<menu>", "<navigation>", "<header>"],
    answer: "<nav>",
    difficulty: "medium",
    topic: "HTML",
  },
  {
    questionNumber: 30,
    question: "What is the use of the <iframe> element?",
    options: [
      "To embed another document within the current HTML document",
      "To create a link",
      "To define an image",
      "To create a script",
    ],
    answer: "To embed another document within the current HTML document",
    difficulty: "medium",
    topic: "HTML",
  },
  {
    questionNumber: 31,
    question: "What does the <abbr> tag represent?",
    options: ["An abbreviation", "A section", "A comment", "None of the above"],
    answer: "An abbreviation",
    difficulty: "medium",
    topic: "HTML",
  },
  {
    questionNumber: 32,
    question:
      "Which element is used for defining the main content of the document?",
    options: ["<main>", "<content>", "<body>", "<section>"],
    answer: "<main>",
    difficulty: "medium",
    topic: "HTML",
  },
  {
    questionNumber: 33,
    question: "What does the <meta charset='UTF-8'> tag do?",
    options: [
      "Defines the character encoding for the HTML document",
      "Creates a link",
      "Defines a title",
      "None of the above",
    ],
    answer: "Defines the character encoding for the HTML document",
    difficulty: "medium",
    topic: "HTML",
  },
  {
    questionNumber: 34,
    question: "Which tag is used to define an embedded object?",
    options: ["<object>", "<embed>", "<iframe>", "<video>"],
    answer: "<object>",
    difficulty: "medium",
    topic: "HTML",
  },
  {
    questionNumber: 35,
    question: "What is the purpose of the <address> tag?",
    options: [
      "To define contact information",
      "To create a header",
      "To define an image",
      "To create a link",
    ],
    answer: "To define contact information",
    difficulty: "medium",
    topic: "HTML",
  },
  {
    questionNumber: 36,
    question: "Which attribute is used to specify the destination of a link?",
    options: ["href", "src", "link", "target"],
    answer: "href",
    difficulty: "medium",
    topic: "HTML",
  },
  {
    questionNumber: 37,
    question: "What does the <fieldset> tag do?",
    options: [
      "Groups related elements in a form",
      "Defines a section",
      "Creates a list",
      "None of the above",
    ],
    answer: "Groups related elements in a form",
    difficulty: "medium",
    topic: "HTML",
  },
  {
    questionNumber: 38,
    question: "Which HTML tag is used to create a dropdown menu?",
    options: ["<select>", "<option>", "<menu>", "<list>"],
    answer: "<select>",
    difficulty: "medium",
    topic: "HTML",
  },
  {
    questionNumber: 39,
    question: "What is the purpose of the <label> tag?",
    options: [
      "Associates text with a form element",
      "Defines a section",
      "Creates a comment",
      "None of the above",
    ],
    answer: "Associates text with a form element",
    difficulty: "medium",
    topic: "HTML",
  },
  {
    questionNumber: 40,
    question:
      "Which element is used to specify a section of a document that can be hidden?",
    options: ["<details>", "<summary>", "<dialog>", "<hidden>"],
    answer: "<details>",
    difficulty: "medium",
    topic: "HTML",
  },
  {
    questionNumber: 41,
    question: "What does the <summary> tag do?",
    options: [
      "Defines a summary for a details element",
      "Creates a summary of a document",
      "Defines a title",
      "None of the above",
    ],
    answer: "Defines a summary for a details element",
    difficulty: "medium",
    topic: "HTML",
  },
  {
    questionNumber: 42,
    question: "Which tag is used to create a definition list?",
    options: ["<dl>", "<list>", "<definition>", "<ol>"],
    answer: "<dl>",
    difficulty: "medium",
    topic: "HTML",
  },
  {
    questionNumber: 43,
    question: "What does the <progress> tag represent?",
    options: [
      "The progress of a task",
      "Defines a percentage",
      "Creates a loading bar",
      "None of the above",
    ],
    answer: "The progress of a task",
    difficulty: "medium",
    topic: "HTML",
  },
  {
    questionNumber: 44,
    question: "What does the <dialog> tag define?",
    options: [
      "A dialog box or interactive component",
      "Creates a section",
      "Defines a link",
      "None of the above",
    ],
    answer: "A dialog box or interactive component",
    difficulty: "medium",
    topic: "HTML",
  },
  {
    questionNumber: 45,
    question: "What is the purpose of the <mark> tag?",
    options: [
      "Highlights text",
      "Defines a link",
      "Creates a section",
      "None of the above",
    ],
    answer: "Highlights text",
    difficulty: "medium",
    topic: "HTML",
  },
  {
    questionNumber: 46,
    question: "Which tag is used to create a sidebar?",
    options: ["<aside>", "<sidebar>", "<section>", "<div>"],
    answer: "<aside>",
    difficulty: "medium",
    topic: "HTML",
  },
  {
    questionNumber: 47,
    question: "What does the <cite> tag represent?",
    options: [
      "A reference to a creative work",
      "Defines a title",
      "Creates a link",
      "None of the above",
    ],
    answer: "A reference to a creative work",
    difficulty: "medium",
    topic: "HTML",
  },
  {
    questionNumber: 48,
    question: "What is the purpose of the <time> tag?",
    options: [
      "Represents a specific time or date",
      "Defines a section",
      "Creates a link",
      "None of the above",
    ],
    answer: "Represents a specific time or date",
    difficulty: "medium",
    topic: "HTML",
  },
  {
    questionNumber: 49,
    question: "Which tag is used to define a navigation menu?",
    options: ["<nav>", "<menu>", "<ul>", "<list>"],
    answer: "<nav>",
    difficulty: "medium",
    topic: "HTML",
  },
  {
    questionNumber: 50,
    question: "What does the <kbd> tag represent?",
    options: [
      "User input",
      "Defines a keyboard shortcut",
      "Creates a link",
      "None of the above",
    ],
    answer: "User input",
    difficulty: "medium",
    topic: "HTML",
  },
  {
    questionNumber: 51,
    question: "What is the purpose of the <meta name='viewport'> tag?",
    options: [
      "To control layout on mobile browsers",
      "Defines metadata",
      "To create a responsive design",
      "All of the above",
    ],
    answer: "All of the above",
    difficulty: "hard",
    topic: "HTML",
  },
  {
    questionNumber: 52,
    question: "How can you embed a video in HTML?",
    options: [
      "<video src='...'>",
      "<embed video='...'>",
      "<iframe src='...'>",
      "<media src='...'>",
    ],
    answer: "<video src='...'>",
    difficulty: "hard",
    topic: "HTML",
  },
  {
    questionNumber: 53,
    question: "What does the <source> element do?",
    options: [
      "Specifies multiple media resources for <audio> and <video>",
      "Creates a link",
      "Defines a title",
      "None of the above",
    ],
    answer: "Specifies multiple media resources for <audio> and <video>",
    difficulty: "hard",
    topic: "HTML",
  },
  {
    questionNumber: 54,
    question: "Which HTML element is used to define a template?",
    options: ["<template>", "<define>", "<layout>", "<form>"],
    answer: "<template>",
    difficulty: "hard",
    topic: "HTML",
  },
  {
    questionNumber: 55,
    question: "What does the <picture> element do?",
    options: [
      "Defines a container for multiple <source> elements",
      "Creates a link",
      "Defines an image",
      "None of the above",
    ],
    answer: "Defines a container for multiple <source> elements",
    difficulty: "hard",
    topic: "HTML",
  },
  {
    questionNumber: 56,
    question: "What is the function of the <noscript> tag?",
    options: [
      "Defines an alternate content for users that do not support scripts",
      "Creates a link",
      "Defines a title",
      "None of the above",
    ],
    answer:
      "Defines an alternate content for users that do not support scripts",
    difficulty: "hard",
    topic: "HTML",
  },
  {
    questionNumber: 57,
    question: "What does the <bdi> tag do?",
    options: [
      "Isolates a part of text that might be formatted in a different direction",
      "Creates a link",
      "Defines a section",
      "None of the above",
    ],
    answer:
      "Isolates a part of text that might be formatted in a different direction",
    difficulty: "hard",
    topic: "HTML",
  },
  {
    questionNumber: 58,
    question: "How can you include external CSS files in an HTML document?",
    options: [
      "<link rel='stylesheet' href='...'>",
      "<css href='...'>",
      "<style src='...'>",
      "<style href='...'>",
    ],
    answer: "<link rel='stylesheet' href='...'>",
    difficulty: "hard",
    topic: "HTML",
  },
  {
    questionNumber: 59,
    question: "What does the <slot> element do?",
    options: [
      "Defines a placeholder in a web component",
      "Creates a link",
      "Defines a section",
      "None of the above",
    ],
    answer: "Defines a placeholder in a web component",
    difficulty: "hard",
    topic: "HTML",
  },
  {
    questionNumber: 60,
    question: "What is the purpose of the <datalist> tag?",
    options: [
      "Specifies a list of predefined options for input controls",
      "Creates a link",
      "Defines a title",
      "None of the above",
    ],
    answer: "Specifies a list of predefined options for input controls",
    difficulty: "hard",
    topic: "HTML",
  },
  {
    questionNumber: 61,
    question: "Which tag is used to define a keygen element?",
    options: ["<keygen>", "<generate>", "<key>", "<create>"],
    answer: "<keygen>",
    difficulty: "hard",
    topic: "HTML",
  },
  {
    questionNumber: 62,
    question: "What is the purpose of the <meter> tag?",
    options: [
      "Represents a scalar measurement within a known range",
      "Creates a link",
      "Defines a title",
      "None of the above",
    ],
    answer: "Represents a scalar measurement within a known range",
    difficulty: "hard",
    topic: "HTML",
  },
  {
    questionNumber: 63,
    question: "What is the <ruby> element used for?",
    options: [
      "To represent a ruby annotation",
      "Creates a link",
      "Defines a section",
      "None of the above",
    ],
    answer: "To represent a ruby annotation",
    difficulty: "hard",
    topic: "HTML",
  },
  {
    questionNumber: 64,
    question: "What does the <wbr> tag do?",
    options: [
      "Suggests an optional line break",
      "Creates a link",
      "Defines a section",
      "None of the above",
    ],
    answer: "Suggests an optional line break",
    difficulty: "hard",
    topic: "HTML",
  },
  {
    questionNumber: 65,
    question: "Which element is used to create a drop-down menu in a form?",
    options: ["<select>", "<menu>", "<option>", "<list>"],
    answer: "<select>",
    difficulty: "hard",
    topic: "HTML",
  },
  {
    questionNumber: 66,
    question: "What does the <var> tag represent?",
    options: [
      "A variable in a mathematical expression",
      "Defines a title",
      "Creates a link",
      "None of the above",
    ],
    answer: "A variable in a mathematical expression",
    difficulty: "hard",
    topic: "HTML",
  },
  {
    questionNumber: 67,
    question: "How do you create a definition term in HTML?",
    options: ["<dt>", "<definition>", "<term>", "<def>"],
    answer: "<dt>",
    difficulty: "hard",
    topic: "HTML",
  },
  {
    questionNumber: 68,
    question: "What does the <aside> tag represent?",
    options: [
      "Content related to the main content but separate",
      "Creates a link",
      "Defines a title",
      "None of the above",
    ],
    answer: "Content related to the main content but separate",
    difficulty: "hard",
    topic: "HTML",
  },
  {
    questionNumber: 69,
    question: "What is the purpose of the <template> element?",
    options: [
      "To hold client-side content that is not rendered",
      "Creates a link",
      "Defines a title",
      "None of the above",
    ],
    answer: "To hold client-side content that is not rendered",
    difficulty: "hard",
    topic: "HTML",
  },
  {
    questionNumber: 70,
    question: "Which element defines a clickable label for an <input> element?",
    options: ["<label>", "<input>", "<button>", "<field>"],
    answer: "<label>",
    difficulty: "hard",
    topic: "HTML",
  },
  {
    questionNumber: 71,
    question: "What does the <b> tag do?",
    options: [
      "Makes text bold without semantic importance",
      "Defines a link",
      "Creates a comment",
      "None of the above",
    ],
    answer: "Makes text bold without semantic importance",
    difficulty: "hard",
    topic: "HTML",
  },
  {
    questionNumber: 72,
    question: "What is the purpose of the <strong> tag?",
    options: [
      "Indicates strong importance",
      "Creates a link",
      "Defines a title",
      "None of the above",
    ],
    answer: "Indicates strong importance",
    difficulty: "hard",
    topic: "HTML",
  },
  {
    questionNumber: 73,
    question: "What is the <figcaption> element used for?",
    options: [
      "To provide a caption for a <figure>",
      "Defines a title",
      "Creates a link",
      "None of the above",
    ],
    answer: "To provide a caption for a <figure>",
    difficulty: "hard",
    topic: "HTML",
  },
  {
    questionNumber: 74,
    question: "What is the purpose of the <address> tag?",
    options: [
      "Defines contact information for the author",
      "Creates a link",
      "Defines a title",
      "None of the above",
    ],
    answer: "Defines contact information for the author",
    difficulty: "hard",
    topic: "HTML",
  },
  {
    questionNumber: 75,
    question: "What does the <main> tag represent?",
    options: [
      "The main content of the document",
      "Creates a link",
      "Defines a title",
      "None of the above",
    ],
    answer: "The main content of the document",
    difficulty: "hard",
    topic: "HTML",
  },
];

const quizStartSection = document.querySelector("#quiz-start-section");
const quizStartNowButton = document.querySelector("#quiz-start-now-button");
const quizSettingSection = document.querySelector("#quiz-setting-section");
const letsStartBtnOfquizSettingSection = document.querySelector(
  "#quiz-setting-section button"
);
const main = document.querySelector("main");
const quizSection = document.querySelector("#quiz-section");
const volumeOnIcon = document.querySelector("#volume-on-icon");
const volumeOffIcon = document.querySelector("#volume-off-icon");
let questionNumberElement = document.querySelector(
  "#question-number-container>span"
);
const questionElement = document.querySelector("#question-container>p");
let questionTimerElement = document.querySelector("#question-container>div");
const optionsContainer = document.querySelector("#options-container");
const optionsElement = document.querySelectorAll("#options-container>div");
const nextQuestionButton = document.querySelector("#next-question-button");
const showResultButton = document.querySelector("#show-result-button");
const resultSection = document.querySelector("#result-section");
const bgAudioElement = new Audio("./sounds/bg-sound.mp3");
const body = document.querySelector("body");

// bgAudioElement.play()

//flag varaibles
const questions = [];
let correctQuestionCount = 0;
let wrongQuestionCount = 0;
let questionNumber = 0;
let intervalId = "";
let isQuestionAttempted = false; //should i give it false or ""
let answer = "";
let isVolume=true;

//toggle js
const toggleSwitch = document.getElementById("toggleSwitch");
const statusText = document.getElementById("status");

toggleSwitch.addEventListener("change", function () {
  if (toggleSwitch.checked) {
    statusText.textContent = "BackGround music is ON";
    bgAudioElement.play();
  } else {
    statusText.textContent = "BackGround music is OFF";
    bgAudioElement.pause();
  }
});

const createQuestionArray = (topic, totalQuestion, level) => {
  for (const question of allQuestions) {
    if (
      question.topic === topic &&
      question.difficulty === level &&
      questions.length < totalQuestion
    ) {
      questions.push(question);
      if (questions.length === totalQuestion) {
        setQuestion(questions[questionNumber]);
        return;
      }
    }
  }
};

const questionTimer = (
  questionStartTime,
  intervalId,
  totalTimeForAQuestion
) => {
  const currentTime = new Date().getTime();
  // console.log("currenttime",currentTime);

  const fiftyPercentOfTotalTimeForAQuestion =totalTimeForAQuestion/2
  const fifteenPercentOfTotalTimeForAQuestion =
    (15 / 100) * totalTimeForAQuestion;
  let time = parseInt((currentTime - questionStartTime) / 1000);
  // console.log(time);

  if (
    time >= fiftyPercentOfTotalTimeForAQuestion &&
    time < totalTimeForAQuestion - fifteenPercentOfTotalTimeForAQuestion
  ) {
    main.id = "yellow-state";
  } else if (
    time >=
    totalTimeForAQuestion - fifteenPercentOfTotalTimeForAQuestion
  ) {
    main.id = "red-state";
  }
  
 const questionTimerCountdown=(totalTimeForAQuestion-time).toString().length ===1? `0${totalTimeForAQuestion-time}`: `${totalTimeForAQuestion-time}`
  questionTimerElement.innerText = `00:${questionTimerCountdown}`;
  if (time === totalTimeForAQuestion) {
    if (questionNumber === questions.length - 1) {
      showResultButton.classList.add("show");
      nextQuestionButton.remove()
      //  showResultButton.click()
    }
    clearInterval(intervalId);
  
  }
};
const optionCorrectState = (option) => {
  isQuestionAttempted = true;
  clearInterval(intervalId);
  option.classList.add("green-border");
  option.innerHTML += `<img src="./images/correct.svg" alt="">`;
  optionsContainer.classList.add("unclickable");
};
const setQuestion = ({ question, options, answer: ans, difficulty }) => {
   main.classList.remove("hidden");

  const questionStartTime = new Date().getTime();
  let timeForQuestion;
  if (difficulty === "easy") {
    timeForQuestion = 30;
  } else if (difficulty === "medium") {
    timeForQuestion = 40;
  } else {
    timeForQuestion = 50;
  }
  console.log("timeForQuestiont", timeForQuestion);
  isQuestionAttempted = false; //l.l. 
  answer = ans;
  console.log("questionStartTime", questionStartTime);
  intervalId = setInterval(() => {
    questionTimer(questionStartTime, intervalId, timeForQuestion);
  }, 50);
  console.log("intervalId", intervalId);
  questionNumberElement.textContent = `${questionNumber + 1}/${
    questions.length
  }`; //
  questionElement.innerText = question;
  optionsElement.forEach((optionElement, index) => {
    console.log(optionElement);
    
    optionElement.innerText = options[index];
  });
};

optionsElement.forEach((optionElement) => {
  optionElement.addEventListener("click", () => {
    if (optionElement.innerText === answer) {
      optionCorrectState(optionElement);
      ++correctQuestionCount;
if(isVolume){
  const sound = new Audio("./sounds/correct-bell.wav");
  console.log(sound);
  sound.play();
}
    } else {
      ++wrongQuestionCount;
    if(isVolume){
      const sound = new Audio("./sounds/question-wrong-sound.mp3");
      console.log(sound);
      sound.play();
    }
      optionElement.classList.add("red-border");
      optionElement.innerHTML += `<div><span>You&nbsp;Chose</span> <img src="./images/wrong.svg" alt=""></div>`;
      for (const optionElement of optionsElement) {
        if (optionElement.innerText === answer) {
          optionCorrectState(optionElement);
          return;
        }
      }
    }
  });
});

quizStartNowButton.addEventListener("click", () => {
  quizStartSection.classList.add("hidden");
  quizSettingSection.classList.remove("hidden");
});

letsStartBtnOfquizSettingSection.addEventListener("click", () => {
  const topic = document.querySelector("#topic").value;
  const numberOfQuestion = document.querySelector("#question").value;
  const difficultyLevel = document.querySelector("#level").value;

  createQuestionArray(topic, +numberOfQuestion, difficultyLevel);
  quizSettingSection.classList.add("hidden");
});

// letsStartBtnOfquizSettingSection.click()

nextQuestionButton.addEventListener("click", () => {
  console.log(questionNumber);

  ++questionNumber;
  console.log(questionNumber);

  if (questionNumber === questions.length - 1) {
    nextQuestionButton.classList.add("cursor-not-allowed");
  } else if (questionNumber > questions.length - 1) {
    return;
  }

  main.setAttribute("id", "");
  optionsContainer.classList.remove("unclickable");
  optionsElement.forEach((optionElement) => {
    optionElement.classList.remove("red-border");
    optionElement.classList.remove("green-border");
  });
  clearInterval(intervalId);
  setQuestion(questions[questionNumber]);
  console.log(questionNumber);
});

const toggleVolume = () => {
  volumeOnIcon.classList.toggle("hidden");
  volumeOffIcon.classList.toggle("hidden");
};
volumeOnIcon.addEventListener("click", ()=>{
  isVolume=false
  toggleVolume()
});
volumeOffIcon.addEventListener("click",  ()=>{
  isVolume=true;
  toggleVolume()
}
)
showResultButton.addEventListener("click", () => {
  quizSection.classList.add("hide");
  resultSection.classList.add("show");
  body.id = "show-result-section";
  showResult();
});

//result section javascript
const showResult = () => {
  const skippedQuestion = 25 - correctQuestionCount - wrongQuestionCount;
  console.log(skippedQuestion);
};

// let i=0;
// setInterval(()=>{
// setQuestion(questions[++i])
// },1000)
