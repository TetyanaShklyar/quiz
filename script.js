document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault()
  document.querySelector('.login-container').classList.add('hidden')
  document.getElementById('quizContainer').classList.remove('hidden')
})

const questions = [
  {
    question: 'Що таке HTML?',
    options: [
      'Мова програмування',
      'Мова розмітки',
      'Графічний редактор',
      'Операційна система',
    ],
    answer: 1,
  },
  {
    question:
      'Який тег використовується для створення заголовку першого рівня в HTML?',
    options: ['<head1>', '<heading>', '<h1>', '<title>'],
    answer: 2,
  },
  {
    question: 'Що таке CSS?',
    options: [
      'Каскадні таблиці стилів',
      'Мова програмування',
      'База даних',
      'Операційна система',
    ],
    answer: 0,
  },
  {
    question: 'Який атрибут HTML використовується для додавання посилань?',
    options: ['link', 'src', 'href', 'url'],
    answer: 2,
  },
  {
    question: 'Який тег використовується для створення списку з маркерами?',
    options: ['<ul>', '<li>', '<ol>', '<list>'],
    answer: 0,
  },
  {
    question: 'Що означає тег <br> в HTML?',
    options: [
      'Перехід на нову сторінку',
      'Жирний текст',
      'Перенос на новий рядок',
      'Горизонтальна лінія',
    ],
    answer: 2,
  },
  {
    question: 'Який атрибут використовується для зміни кольору тексту в CSS?',
    options: ['font-color', 'text-color', 'color', 'background-color'],
    answer: 2,
  },
  {
    question: 'Який тег використовується для вставки зображення в HTML?',
    options: ['<img>', '<image>', '<pic>', '<src>'],
    answer: 0,
  },
  {
    question: 'Який символ використовується для коментування в HTML?',
    options: ['//', '<!-- -->', '/**/', '#'],
    answer: 1,
  },
  {
    question: 'Як задати розмір шрифту в CSS?',
    options: ['font-size', 'size', 'font-style', 'text-size'],
    answer: 0,
  },
  {
    question: 'Який тег створює новий абзац у HTML?',
    options: ['<div>', '<p>', '<a>', '<span>'],
    answer: 1,
  },
  {
    question: 'Що означає властивість margin у CSS?',
    options: [
      'Внутрішній відступ елементу',
      'Відстань між елементами',
      'Ширина межі',
      'Висота елемента',
    ],
    answer: 1,
  },
  {
    question: 'Як зробити текст жирним у HTML?',
    options: ['<b>', '<strong>', '<bold>', 'Обидва варіанти: <b> і <strong>'],
    answer: 3,
  },
  {
    question: 'Який атрибут HTML використовується для введення даних у формі?',
    options: ['<input>', '<form>', '<field>', '<button>'],
    answer: 0,
  },
  {
    question: 'Яка властивість CSS використовується для зміни фону сторінки?',
    options: [
      'background-image',
      'background-color',
      'color',
      'background-style',
    ],
    answer: 1,
  },
  {
    question: 'Що таке padding в CSS?',
    options: [
      'Внутрішній відступ всередині елементу',
      'Відступ між елементами',
      'Ширина межі',
      'Колір фону',
    ],
    answer: 0,
  },
  {
    question: 'Яка властивість CSS змінює вирівнювання тексту?',
    options: ['text-align', 'align', 'text-decoration', 'font-align'],
    answer: 0,
  },
  {
    question: 'Що робить тег <a> в HTML?',
    options: [
      'Вставляє зображення',
      'Створює посилання',
      'Додає відео',
      'Створює абзац',
    ],
    answer: 1,
  },
  {
    question:
      'Яка властивість CSS використовується для створення тіні у тексту?',
    options: ['text-shadow', 'box-shadow', 'font-shadow', 'shadow'],
    answer: 0,
  },
  {
    question: 'Що означає властивість border в CSS?',
    options: [
      'Зміна кольору фону',
      'Встановлення розміру шрифту',
      'Додавання рамки навколо елементу',
      'Встановлення відступів',
    ],
    answer: 2,
  },
  {
    question: 'Як вказати зображення як фон у CSS?',
    options: [
      'background-img',
      'background-color',
      'background-image',
      'img-background',
    ],
    answer: 2,
  },
  {
    question:
      'Який тег HTML використовується для відображення відео на сторінці?',
    options: ['<video>', '<media>', '<movie>', '<embed>'],
    answer: 0,
  },
  {
    question: 'Що робить властивість display: none в CSS?',
    options: [
      'Приховує елемент зі сторінки',
      'Змінює колір елементу',
      'Видаляє елемент зі сторінки',
      'Зміщує елемент на новий рядок',
    ],
    answer: 0,
  },
  {
    question: 'Як задати круглу рамку для елемента у CSS?',
    options: [
      'border: 50px',
      'border-radius: 50%',
      'border-style: round',
      'circle-border: true',
    ],
    answer: 1,
  },
  {
    question: 'Що робить тег <table> в HTML?',
    options: [
      'Створює список',
      'Створює форму',
      'Створює таблицю',
      'Створює заголовок',
    ],
    answer: 2,
  },
  {
    question: 'Як задати колір для елемента у CSS?',
    options: ['color', 'text-color', 'font-color', 'bg-color'],
    answer: 0,
  },
  {
    question: 'Як у CSS змінити стиль тексту на курсив?',
    options: [
      'font-style: italic',
      'text-transform: italic',
      'font-italic: true',
      'text-style: italic',
    ],
    answer: 0,
  },
  {
    question: 'Який тег використовується для створення кнопки в HTML?',
    options: ['<button>', '<input>', '<form>', '<btn>'],
    answer: 0,
  },
  {
    question:
      'Яка властивість CSS використовується для зміни розміру елементів?',
    options: ['height', 'size', 'dimensions', 'transform'],
    answer: 0,
  },
  {
    question: 'Що робить атрибут alt у тегі <img>?',
    options: [
      'Задає альтернативний текст для зображення',
      'Задає розмір зображення',
      'Додає рамку до зображення',
      'Змінює формат зображення',
    ],
    answer: 0,
  },
]

let currentQuestionIndex = 0
let correctAnswers = 0 // Лічильник правильних відповідей
let incorrectAnswers = [] // Масив для збереження неправильних відповідей

// Функція для завантаження питання
function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex]
  document.getElementById('questionText').textContent = currentQuestion.question
  const options = document.querySelectorAll('.option')
  options.forEach((option, index) => {
    option.textContent = currentQuestion.options[index]
    option.onclick = () => checkAnswer(index)
  })
}

// Функція для перевірки відповіді

// Функція для перевірки відповіді
function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex]
  const options = document.querySelectorAll('.option')

  // Якщо відповідь правильна
  if (selectedOption === currentQuestion.answer) {
    correctAnswers++ // Збільшуємо лічильник правильних відповідей
    options[selectedOption].classList.add('correct-answer') // Додаємо анімацію для правильної відповіді
    setTimeout(() => {
      options[selectedOption].classList.remove('correct-answer') // Видаляємо анімацію
      nextQuestion()
    }, 1000)
  } else {
    // Якщо відповідь неправильна, додаємо питання в масив неправильних відповідей
    incorrectAnswers.push({
      question: currentQuestion.question,
      selectedOption: currentQuestion.options[selectedOption],
      correctOption: currentQuestion.options[currentQuestion.answer],
    })

    options[selectedOption].classList.add('wrong-answer') // Додаємо анімацію для неправильної відповіді
    setTimeout(() => {
      options[selectedOption].classList.remove('wrong-answer') // Видаляємо анімацію
      options[currentQuestion.answer].classList.add('correct-answer') // Підсвічуємо правильну відповідь
      setTimeout(() => {
        options[currentQuestion.answer].classList.remove('correct-answer')
        nextQuestion()
      }, 1000)
    }, 1000)
  }
}

function nextQuestion() {
  currentQuestionIndex++
  if (currentQuestionIndex < questions.length) {
    loadQuestion()
  } else {
    showResults() // Показуємо результати після завершення тесту
  }
}

// Функція для показу результатів
function showResults() {
  document.getElementById('quizContainer').classList.add('hidden') // Ховаємо контейнер з питаннями
  const resultsContainer = document.createElement('div')
  resultsContainer.classList.add('results-container')
  resultsContainer.innerHTML = `
        <h2>Ваш результат:</h2>
        <p>Ви відповіли правильно на ${correctAnswers} з ${questions.length} питань.</p>
    `

  if (incorrectAnswers.length > 0) {
    resultsContainer.innerHTML +=
      '<h3>Питання, на які ви відповіли неправильно:</h3>'
    incorrectAnswers.forEach((item) => {
      resultsContainer.innerHTML += `
                <div class="incorrect-question">
                    <p><strong>Питання:</strong> ${item.question}</p>
                    <p><strong>Ваша відповідь:</strong> ${item.selectedOption}</p>
                    <p><strong>Правильна відповідь:</strong> ${item.correctOption}</p>
                </div>
            `
    })
  }

  document.body.appendChild(resultsContainer) // Додаємо блок результатів до сторінки
}

document.getElementById('nextButton').addEventListener('click', loadQuestion)

// Завантаження першого питання
loadQuestion()
