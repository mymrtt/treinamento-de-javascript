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

let index = 0;
let score = 0;

function render () {
  const form = document.createElement('form');
  const textQuestion = document.createElement('h2');
  const perguntaTxt = document.createTextNode(quiz[index].question);
  textQuestion.appendChild(perguntaTxt);

  form.appendChild(textQuestion)

  quiz[index].answers.map(answer => {
    const inputAnswer = document.createElement('input');
    inputAnswer.setAttribute('type', 'radio');
    inputAnswer.setAttribute('name', quiz[index].question);
    inputAnswer.setAttribute('value', answer);

    const label = document.createElement('label');

    const labelTxt = document.createTextNode(answer);
    label.appendChild(labelTxt)

    form.appendChild(inputAnswer)
    form.appendChild(label)
  })

  const submitBtn = document.createElement('button');
  submitBtn.innerHTML = 'submit'
  
  form.appendChild(submitBtn);

  form.addEventListener('submit', e => {
    e.preventDefault();

    let answersValue = form.elements[quiz[index].question].value;
  
    if (answersValue == quiz[index].correctAnswer) {
      score = score + 1;
    }

    document.body.innerHTML = '';

    if (index === quiz.length - 1) {
      document.body.innerHTML = 'your score is: ' + score;
    }

    else {
      index = index + 1
      render();
    }
  });

  document.body.appendChild(form);
}

window.onload = render();