const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

function appendQuestion(question) {
    let qContainer = document.querySelector(".question-container")
    qContainer.innerHTML = question.questionText
}

function askQuestionThen(time) {
  question = questions[0];

  return new Promise(function(resolve, reject) {
  setTimeout(removeQuestion, time);
});
}

function removeQuestion() {
  let qContainer = document.querySelector(".question-container")
  qContainer.innerHTML = ""
}

function askQuestionThenRemoveQuestion(time) {
  appendQuestion(question)

  return new Promise(function(resolve, reject) {
  setTimeout(removeQuestion, time);
});
}

function trueAndFalseButtons() {
  let trueFalse = document.querySelectorAll(".true-false-list .btn");
  return trueFalse
}

function toggleTrueAndFalseButtons() {
  let trueFalse = document.querySelectorAll(".true-false-list .btn");

  for (const element of trueFalse) {

    if (element.classList.contains("hide")) {
        element.classList.remove("hide");
    } else {
        element.classList.add("hide")
      }
    }
  }

  function displayQuestionOnClick() {
  //   return new Promise(function(resolve, reject) {
  //   setTimeout(askQuestionThenRemoveQuestion, 5000);
  // }).then(function(result))

  }
