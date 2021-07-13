const quiz [
  {
    question: "Which Horcrux was the first one to be destroyed?",
    answers: [
      "The Ring",
      "The Cup",
      "The Book",
      "The Diary"
    ],
    correct: "The Ring"
  },{
    question: "Who accompanied Hermione to the Slug Club Christmas party?",
    answers: [
      "Dean Thomas",
      "Viktor Krum",
      "Cormac McLaggen",
      "Eldred Worple"
    ],
    correct: "Cormac McLaggen"
  },{
    question: "When is Harry's birthday?",
    answers: [
      "August 1st, 1980",
      "July 31st, 1980",
      "July 1st, 1980",
      "August 31st, 1980"
    ],
    correct: "July 31st, 1980"
  }

];
const quizLength = quiz.length;
let quizIndex = 0;
let scores = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].questionIndex = 0;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = () => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert("正解！");
    score++;
  }else{
    window.alert("不正解！");
  }
  quizIndex++;
  if(quizIndex < quizLength){
    setupQuiz();
  }else{
    window.alert("終了！あなたの正解数は" + score + "/" + quitLength + "です！");
  }
}

let handlerIndex = 0;
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener("click",(e)=>{
    clickHandler(e);
  })
  handlerIndex++;
}
