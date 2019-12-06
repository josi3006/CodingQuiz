

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
          correctAnswer: 'bButton'
        },

        {
          question: 'What method can we call to set an object in local storage?',
          answers: {
                  a: 'setAttribute',
                  b: 'pseudocode',
                  c: 'JSON',
                  d: 'console.log'
          },
          correctAnswer: 'cButton'
        },


        {
          question: 'What does the ".push" method do?',
          answers: {
                  a: 'sets a string into local storage',
                  b: 'concatenates two values',
                  c: 'sends form data to the server',
                  d: 'appends an item to the end of an array'
          },
          correctAnswer: 'dButton'
        },


        {
          question: 'Given this array: [A, B, C, D], which letter occupies Index position 2?',
          answers: {
                  a: 'A',
                  b: 'B',
                  c: 'C',
                  d: 'D'
          },
          correctAnswer: 'cButton'
        },
          

        {
          question: 'What is the order of the three parts of a For Loop?',
          answers: {
                  a: 'condition, iteration, declaration',
                  b: 'declaration, condition, iteration',
                  c: 'condition, iteration, declaration',
                  d: 'none of the above'
          },
          correctAnswer: 'bButton'
        },


        {
          question: 'What type(s) of data can be stored in local storage?',
          answers: {
                  a: 'string',
                  b: 'number',
                  c: 'boolean',
                  d: 'All of the above'
          },
          correctAnswer: 'aButton'
        },


        {
          question: 'When declaring variables, what data types must appear in quotes?',
          answers: {
                a: 'string',
                b: 'number',
                c: 'boolean',
                d: 'All of the above'
          },
        correctAnswer: 'aButton'
        },


        {
          question: 'What is a function?',
          answers: {
                a: 'A variable that is assigned by the user',
                b: 'A piece of code that accomplishes a task',
                c: 'The code that allows a browser to render HTML',
                d: 'A method included in the browser'
          },
          correctAnswer: 'bButton'
        },


        {
          question: 'Where can Javascript appear in your files?',
          answers: {
                a: 'In the <head> of the HTML page',
                b: 'In the <body> of the HTML page',
                c: 'In its own file',
                d: 'All of the above'
          },
          correctAnswer: 'dButton'
        },


        {
          question: 'BONUS: What is Soylent Green?',
          answers: {
                  a: 'Chemical X', 
                  b: 'Soybeans and Lentils', 
                  c: 'MidiChlorians', 
                  d: 'People!'

          },
          correctAnswer: 'dButton'
        }
]



// This ensures the page loads before executing any functionality

$(document).ready(function() {



// This declares iteration number for looping through the questions
  var i = 0


// This declares the time penalty for incorrect answers

  var penalty = 0

  var timeleft = 150;




// This triggers the countdown when the Go Button is clicked

$('#goButton').on('click', function() {

var downloadTimer = setInterval(function(){
  $("#time").text('You have ' + timeleft + " seconds remaining");
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    $("#time").text("Finished")
  }
}, 1000)

});


// This renders the questions and answer buttons

$('#goButton').on('click', function chkr()  {


  var questionText = $('<h3>')

      questionText.text(qaArray[i].question)
      $('#questionDiv').html(questionText)

  var aButton = $('<input>')

      aButton.attr('type', 'button')
      aButton.attr('value', qaArray[i].answers.a)
      aButton.attr('id', 'aButton')
      aButton.attr('class', 'btn btn-outline-primary btn-block')
      $('#buttonDiva').html(aButton)

  var bButton = $('<input>')

      bButton.attr('type', 'button')
      bButton.attr('value', qaArray[i].answers.b)
      bButton.attr('id', 'bButton')
      bButton.attr('class', 'btn btn-outline-primary btn-block')

      $('#buttonDivb').html(bButton)

  var cButton = $('<input>')

      cButton.attr('type', 'button')
      cButton.attr('value', qaArray[i].answers.c)
      cButton.attr('id', 'cButton')
      cButton.attr('class', 'btn btn-outline-primary btn-block')

      $('#buttonDivc').html(cButton)

  var dButton = $('<input>')

      dButton.attr('type', 'button')
      dButton.attr('value', qaArray[i].answers.d)
      dButton.attr('id', 'dButton')
      dButton.attr('class', 'btn btn-outline-primary btn-block')

      $('#buttonDivd').html(dButton)



       
        
        $(':input').click(function() {
          var chosen1 = $(this).attr('id');
          var right1 = (qaArray[i].correctAnswer)
      

          if (chosen1 === right1) {penalty = penalty + 0}
          else {penalty = penalty + 20};
        
          console.log(penalty)          

          i++

          if (i >= 10) {results()}
            

          else {     
  

chkr()}

function results() {
    console.log('Subtract' + penalty + 'seconds');
   

    var score = (timeleft - penalty)



    $('#infoDiv').append('Your time score: ' + timeleft + '<br>')
    $('#infoDiv').append('Minus time penalty: ' + penalty + '<br>')
    $('#infoDiv').append('<h3>' + 'Your total score: ' + score)

var initials = prompt('Please enter your initials: ')

function next() {
    window.location = ('scorePage.html')}



localStorage.setItem('initials', initials);
localStorage.setItem('score', score)



next();

return;

}     
  
});

});

});




