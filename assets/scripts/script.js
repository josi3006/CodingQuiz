// Variables needed to run things

// var aBtn = document.getElementById("#buttonA")
var bBtn = document.getElementById('#buttonB')
var cBtn = document.getElementById('#buttonC')
var dBtn = document.getElementById('#buttonD')

// document.querySelector("#buttonA")

// Array of Questions and Answers

var qaArray = [
        {
          question: 'Which of the following HTML tags does not need a closing tag?',
          answers: {
            a: '<body>',
            b: '<img>',
            c: '<HTML>',
            d: '<span>'
          },
          correctAnswer: 'b'
        },

        {
          question: 'What method can we call to set an object in local storage?',
          answers: {
                  a: 'setAttribute',
                  b: 'pseudocode',
                  c: 'JSON',
                  d: 'console.log'
          },
          correctAnswer: 'c'
        },


        {
          question: 'What does the ".push" method do?',
          answers: {
                  a: 'sets a string into local storage',
                  b: 'concatenates two values',
                  c: 'sends form data to the server',
                  d: 'appends an item to the end of an array'
          },
          correctAnswer: 'd'
        },


        {
          question: 'Given this array: [A, B, C, D], which letter occupies Index position 2?',
          answers: {
                  a: 'A',
                  b: 'B',
                  c: 'C',
                  d: 'D'
          },
          correctAnswer: 'c'
        },
          

        {
          question: 'What is the order of the three parts of a For Loop?',
          answers: {
                  a: 'condition, iteration, declaration',
                  b: 'declaration, condition, iteration',
                  c: 'condition, iteration, declaration',
                  d: 'none of the above'
          },
          correctAnswer: 'b'
        },


        {
          question: 'What type(s) of data can be stored in local storage?',
          answers: {
                  a: 'string',
                  b: 'number',
                  c: 'boolean',
                  d: 'All of the above'
          },
          correctAnswer: 'a'
        },


        {
          question: 'When declaring variables, what data types must appear in quotes?',
          answers: {
                a: 'string',
                b: 'number',
                c: 'boolean',
                d: 'All of the above'
          },
        correctAnswer: 'a'
        },


        {
          question: 'What is a function?',
          answers: {
                a: 'A variable that is assigned by the user',
                b: 'A piece of code that accomplishes a task',
                c: 'The code that allows a browser to render HTML',
                d: 'A method included in the browser'
          },
          correctAnswer: 'b'
        },


        {
          question: 'Where can Javascript appear in your files?',
          answers: {
                a: 'In the <head> of the HTML page',
                b: 'In the <body> of the HTML page',
                c: 'In its own file',
                d: 'All of the above'
          },
          correctAnswer: 'd'
        },


        {
          question: 'BONUS: What is Soylent Green?',
          answers: {
                  a: 'Chemical X', 
                  b: 'Soybeans and Lentils', 
                  c: 'MidiChlorians', 
                  d: 'People!'

          },
          correctAnswer: 'd'
        }
]


// Functions that make it work


// This function renders the questions and answers

function chkr() {

        for (var i = 0; i < qaArray.length; i++)

        alert(qaArray[i].question),
        document.getElementById('#buttonA').setAttribute('value', qaArray[i].answers.a)
      
}

chkr()