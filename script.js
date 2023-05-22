const quizDB =[
  {
    question:"how are you?",
    a:"ok",
    b:"fit",
    c:"Fine",
    d:"good",
    ans:"ans2"

  },
  {
    question:"how are you?",
    a:"ok2",
    b:"fit",
    c:"Fine",
    d:"good",
    ans:"ans3"

  },
  {
    question:"how are you?",
    a:"ok3",
    b:"fit",
    c:"Fine",
    d:"good",
    ans:"ans1"

  },
  {
    question:"how are you?",
    a:"ok4",
    b:"fit",
    c:"Fine",
    d:"good",
    ans:"ans4"

  },

];


const question= document.querySelector('.question');
const option1= document.querySelector('#option1');
const option2= document.querySelector('#option2');
const option3= document.querySelector('#option3');
const option4= document.querySelector('#option4');
const submit= document.querySelector('.submit');
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score =0;
const loadQuestion =()=>{
    const questionList = quizDB[questionCount];
    question.innerHTML=questionList.question;

    option1.innerHTML= questionList.a;
    option2.innerHTML= questionList.b;
    option3.innerHTML= questionList.c;
    option4.innerHTML= questionList.d;

}

loadQuestion();

const getCheckAnswer=()=>{
    let answer;

    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
           answer =curAnsElem.id;
        }
       
    });
    return answer;

}

submit.addEventListener('click',()=>{
  const checkedAnswer = getCheckAnswer();

  if(checkedAnswer==quizDB[questionCount].ans){
    score++;
  };
  questionCount++;
  if(questionCount<quizDB.length){
    loadQuestion();
  }
  else{
     showScore.innerHTML=`
       <h3>You scored ${score}/${quizDB.length}</h3>
       <button class="btn" onClick="location.reload()">Play Again</button>
     `;
  }
});




