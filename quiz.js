// An array for the Questions and answers.
const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false},
      { text: "Blue whale", correct: true},
      { text: "Elephant", correct: false},
      { text: "Giraffe", correct: false}
     ]
  },
  {
    question: "Which is the smallest country in the world?",
    answers: [
      { text: "Vatican City", correct: true},
      { text: "Bhutan", correct: false},
      { text: "Nepal", correct: false},
      { text: "Shri Lanka", correct: false}
     ]
  },
  {
    question: "Which is the largest desert in the world?",
    answers: [
      { text: "Kalahari", correct: false},
      { text: "Gobi", correct: false},
      { text: "Sahara", correct: false},
      { text: "Antarctica", correct: true}
     ]
  },
  {
    question: "Which is the smallest continent in the world?",
    answers: [
      { text: "Asia", correct: false},
      { text: "Austarlia", correct: true},
      { text: "Arctic", correct: false},
      { text: "Africa", correct: false}
     ]
  },
  {
    question: "What is my name?",
    answers: [
      { text: "Yinka", correct: false},
      { text: "Romade", correct: false},
      { text: "Victoria", correct: true},
      { text: "Ayanfe", correct: false}
     ]
  },
  {
    question: "Do you love me?",
    answers: [
      { text: "Who you be?😒", correct: false},
      { text: "Yes baby😍", correct: true},
      { text: "Abeg Getat😡", correct: false},
      { text: "Hehehehe!😈", correct: false}
     ]
  }
  
];

// Adding variables
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");

// Create variables to store index and score, the question also changes
let currentQuestionIndex = 0;
let score = 0;

// Function to start quiz
function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

// Function to display Questions
function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  // Display answer from the current question set
  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    if(answer.correct){
        button.dataset.correct = answer.correct;
    }

    // Add click function
    button.addEventListener("click", selectAnswer);
  });
}

// removes the previous answers in index.html
function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
  }
}

// Function for selecting answers
function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    // Update score
    score++;
  } else{
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

// function to showScore();
function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = `Play Again`;
  nextButton.style.display = "block";

}

function handleNextButton(){
  currentQuestionIndex++; //increases the question
  if(currentQuestionIndex < questions.length){ 
    showQuestion();
  } else{
    showScore();
  }
}

// Function for the next button
nextButton.addEventListener("click", function(){
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  } else{
    startQuiz();
  }
});

// call startQuiz(); to display output
startQuiz();
