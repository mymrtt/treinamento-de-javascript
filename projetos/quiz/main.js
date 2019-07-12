const quiz = [
  {
    question: '1) O que é preciso fazer para evitar um foco de mosquito?',
    answers: [
      'Não deixe água parada', 
      'Deixar que o Sol seque a água', 
      'Todas as Alternativas'
    ],
    correctAnswer: 'Não deixe água parada'
  },
  {
    question: '2) Qual é o mosquito que transmite a Dengue, Chikungunya, Zica e Febre Amarela?',
    answers: [
      'Aedes Aegypti', 
      'Aedes Albopictus', 
      'Muriçoca'
    ],
    correctAnswer: 'Aedes Aegypti'
  },
  {
    question: "3) Qual é a doença transmitida pelo rato?",
    answers: [
      'Leptospirose', 
      'Teníase', 
      'Febre amarela'
    ],
    correctAnswer: 'Leptospirose'
  },
]

let atualQuestion = 0;
let score = 0;

function renderQuiz(){

  const quizQuestions = quiz[atualQuestion];

  const form = document.createElement('form');

  const textQuestion = document.createElement('h2');

  let perguntaTxt = document.createTextNode(quiz[atualQuestion].question);
  textQuestion.appendChild(perguntaTxt);
  
  form.appendChild(textQuestion);

  let quizAnswers = quiz[atualQuestion].answers.map(answer =>{

    const label = document.createElement('label');

    const inputAnswer = document.createElement('input');
    inputAnswer.setAttribute('type', 'radio');
    inputAnswer.setAttribute('name', quiz[atualQuestion].question);
    inputAnswer.setAttribute('value', answer);
    inputAnswer.setAttribute('required', 'true')
    
    const labelTxt = document.createTextNode(answer);

    form.appendChild(inputAnswer);    
    label.appendChild(labelTxt);
    form.appendChild(label);
  })

  const submitBtn = document.createElement('button');
  submitBtn.innerHTML = 'submit'
  
  form.appendChild(submitBtn);

  form.addEventListener('submit', e => {
    e.preventDefault();

    let answersValue = form.elements[quizQuestions.question].value;
    console.log(form.elements[quizQuestions.question]);
  
    if (answersValue == quizQuestions.answers) {
      score = score + 1;
    }

    document.body.innerHTML = '';

    if(atualQuestion !== quiz.length -1){
      atualQuestion = atualQuestion + 1;
      renderQuiz();
    }
  });


  document.body.appendChild(form);
}

window.onload = renderQuiz();