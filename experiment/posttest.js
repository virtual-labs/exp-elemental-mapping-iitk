/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "1. The average composition obtained from X-ray energy dispersive spectroscopy _______ differentiate between a composite and a solid-solution.",  ///// Write the question inside double quotes
      answers: {
        a: "can",                  ///// Write the option 1 inside double quotes
        b: "can not",                  ///// Write the option 2 inside double quotes
              },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

    {
      question: "2. What is Z-correction in Energy dispersive spectroscopy? ",  ///// Write the question inside double quotes
      answers: {
        a: "Atomic number ",                  ///// Write the option 1 inside double quotes
        b: "Absorption  ",                  ///// Write the option 2 inside double quotes
        c: "Fluorescence",                  ///// Write the option 2 inside double quotes
        d: "Zeta-potential",                  ///// Write the option 2 inside double quotes

      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    	
    {
      question: "3.	What is A-correction in Energy dispersive spectroscopy?",  ///// Write the question inside double quotes
      answers: {
        a: "Atomic number",                  ///// Write the option 1 inside double quotes
        b: "Adsorption",                  ///// Write the option 2 inside double quotes
        c: "Absorption",                  ///// Write the option 2 inside double quotes
        d: "Fluorescence",                  ///// Write the option 2 inside double quotes

              },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },  									                  ///// this line

{
      question: "4. What is F-correction in Energy dispersive spectroscopy? ",  ///// Write the question inside double quotes
      answers: {
        a: "Atomic number ",                  ///// Write the option 1 inside double quotes
        b: "Absorption  ",                  ///// Write the option 2 inside double quotes
        c: "Force",                  ///// Write the option 2 inside double quotes
        d: "Fluorescence",                  ///// Write the option 2 inside double quotes

      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },
    {
      question: "5. The following image is taken using which mode of X-ray energy dispersive spectroscopy?<br><img src='images/fig9.PNG'> ",  ///// Write the question inside double quotes
      answers: {
        a: "Spot/Area Analysis  ",                  ///// Write the option 1 inside double quotes
        b: "Line Scan   ",                  ///// Write the option 2 inside double quotes
        c: "Elemental Mapping ",                  ///// Write the option 2 inside double quotes
    
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },
    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////