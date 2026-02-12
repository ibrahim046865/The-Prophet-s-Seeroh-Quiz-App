const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const welcomeMsg = document.getElementById('welcome-message');
const questBox = document.getElementById('question-container');
const currentDiv = document.getElementById('current');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const scoreContainer = document.getElementById('score-container');
const scoreDisplay = document.getElementById('score-display');
const questionNumberDisplay = document.getElementById('question-number');
const quizHeader = document.getElementsByTagName('h1')[0];
const congMsg = document.getElementById('congMsg');
const controlButtons = document.getElementById('restart-control');
const score = document.getElementById('score');
const percentage = document.getElementById('percentage');
const restartBtn = document.getElementById('restart-btn');
nextButton.disabled = true;

// English Seerah Questions Example
const questions = [
  {
    question: "Where was the Prophet ﷺ born?",
    choices: ["Medina", "Mecca", "Taif", "Yemen"],
    answer: "Mecca"
  },
  {
    question: "In which year was the Prophet ﷺ born?",
    choices: ["Year of the Elephant", "Year of Hijrah", "Year of Badr", "Year of the Conquest"],
    answer: "Year of the Elephant"
  },
  {
    question: "Who was the mother of the Prophet ﷺ?",
    choices: ["Khadijah bint Khuwaylid", "Aminah bint Wahb", "Fatimah bint Asad", "Halima al-Sa'diyah"],
    answer: "Aminah bint Wahb"
  },
  {
    question: "Who was the father of the Prophet ﷺ?",
    choices: ["Abu Talib", "Abdul Muttalib", "Abdullah ibn Abdul Muttalib", "Al-Abbas"],
    answer: "Abdullah ibn Abdul Muttalib"
  },
  {
    question: "Who nursed the Prophet ﷺ as a baby?",
    choices: ["Safiyyah", "Halima al-Sa'diyah", "Khadijah", "Aisha"],
    answer: "Halima al-Sa'diyah"
  },
  {
    question: "What is the name of the first mosque built in Islam?",
    choices: ["Masjid al-Haram", "Masjid Quba", "Masjid al-Nabawi", "Masjid al-Aqsa"],
    answer: "Masjid Quba"
  },
  {
    question: "In which year did the Prophet ﷺ migrate to Medina?",
    choices: ["1st Hijrah", "2nd Hijrah", "3rd Hijrah", "4th Hijrah"],
    answer: "1st Hijrah"
  },
  {
    question: "What is the name of the first revelation received by the Prophet ﷺ?",
    choices: ["Surah Al-Baqarah", "Surah Al-Alaq", "Surah Al-Fatiha", "Surah Al-Ikhlas"],
    answer: "Surah Al-Alaq"
  },
 {
    question: "Who was the first person to accept Islam?",
    choices: ["Abu Bakr", "Ali ibn Abi Talib", "Khadijah bint Khuwaylid", "Zayd ibn Harithah"], 
    answer: "Abu Bakr"
  },
  {
    question: "What is the name of the first wife of the Prophet ﷺ?",
    choices: ["Khadijah bint Khuwaylid", "Aisha bint Abu Bakr", "Fatimah bint Muhammad", "Zaynab bint Khuzaymah"],
    answer: "Khadijah bint Khuwaylid"
  },
  {
    question: "Who was the first martyr in Islam?",
    choices: ["Hamzah ibn Abdul Muttalib", "Umar ibn Al-Khattab", "Ali ibn Abi Talib", "Zayd ibn Harithah"],
    answer: "Hamzah ibn Abdul Muttalib"
  },
  {
    question: "What is the name of the first mosque built in Islam?",
    choices: ["Masjid al-Haram", "Masjid Quba", "Masjid al-Nabawi", "Masjid al-Aqsa"],
    answer: "Masjid Quba"
  },
  {
    question: "In which year did the Prophet ﷺ migrate to Medina?",
    choices: ["1st Hijrah", "2nd Hijrah", "3rd Hijrah", "4th Hijrah"],
    answer: "1st Hijrah"
  },
  {
    question: "What is the name of the first revelation received by the Prophet ﷺ?",
    choices: ["Surah Al-Baqarah", "Surah Al-Alaq", "Surah Al-Fatiha", "Surah Al-Ikhlas"],
    answer: "Surah Al-Alaq"
  },
  {
    question: "Who was the first person to accept Islam?",
    choices: ["Abu Bakr", "Ali ibn Abi Talib", "Khadijah bint Khuwaylid", "Zayd ibn Harithah"], 
    answer: "Abu Bakr"
  }
];

const correctSound = new Audio('sounds/sahih.mp3');
const wrongSound = new Audio('sounds/qata.mp3');

function showQuiz() {
  welcomeMsg.classList.add('hide');
  questBox.classList.remove('hide');
  currentDiv.classList.remove('hide');
  startButton.classList.add('hide');
  scoreDisplay.textContent = `0 / ${questions.length}`;
  questionNumberDisplay.textContent = `1 of ${questions.length}`;
};

let currentIndex = 0;
let totalScore = 0;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function getQuestions() {
  nextButton.disabled = true;
  answerButtonsElement.innerHTML = "";
  questionElement.innerHTML = questions[currentIndex].question;
  shuffleArray(questions[currentIndex].choices);
  questions[currentIndex].choices.forEach(choice => {
    const button = document.createElement('button');
    button.innerHTML = choice;
    button.value = choice;
    button.classList.add('btn');
    answerButtonsElement.appendChild(button);
    button.addEventListener("click", () => {
      Array.from(answerButtonsElement.children).forEach(btn => btn.disabled = true);
      nextButton.disabled = false;
      Array.from(answerButtonsElement.children).forEach(btn => {
        btn.classList.add("disabled");
      });
      if (button.value === questions[currentIndex].answer) {
        button.classList.add('green');
        button.innerHTML = `${button.value} <span>&#10004;</span> `;
        correctSound.play();
        totalScore++;
        scoreDisplay.textContent = `${totalScore} / ${questions.length}`;
      } else {
        button.classList.add('red');
        button.innerHTML = `${button.value} <span>&#10008;</span> `;
        wrongSound.play();
        Array.from(answerButtonsElement.children).forEach(btn => {
          if (btn.value === questions[currentIndex].answer) {
            btn.classList.add('green');
            btn.innerHTML = `${btn.value} <span>&#10004;</span> `;
          }
        });
      }
      nextButton.classList.remove('hide');
      if (currentIndex === questions.length - 1) {
        nextButton.textContent = "Show Result";
      } else {
        nextButton.textContent = "Next Question";
      }
    });
  });
};

function getResult() {
  currentIndex++;
  if (currentIndex < questions.length) {
    questionNumberDisplay.textContent = `${currentIndex + 1} of ${questions.length}`;
    getQuestions();
  } else if (currentIndex === questions.length) {
    quizHeader.innerHTML = "Quiz Finished!";
    questBox.classList.add('hide');
    nextButton.classList.remove('hide');
    scoreContainer.classList.remove('hide');
    congMsg.classList.remove('hide');
    controlButtons.classList.remove('hide');
    nextButton.classList.add('hide');
    currentDiv.classList.add('hide');

    let percent = Math.floor((totalScore / questions.length) * 100);
    score.textContent = `${totalScore} / ${questions.length} Correct`;
    percentage.textContent = `${percent}% Score`;

    if (percent >= 80) {
      congMsg.innerHTML = "<span style='color: var(--biology-green);'>Congratulations!</span> &#127881 You are a genius!";
    } else if (percent >= 60) {
      congMsg.innerHTML = "<span style='color: var(--biology-green);'>Good!</span> &#128293 You're doing well!";
    } else {
      congMsg.innerHTML = "Keep practicing! You'll get better!&#128170;";
    }
  }
};

function reset() {
  currentIndex = 0;
  totalScore = 0;
  scoreDisplay.textContent = `0 / ${questions.length}`;
  questionNumberDisplay.textContent = `1 of ${questions.length}`;
  scoreContainer.classList.add('hide');
  congMsg.classList.add('hide');
  controlButtons.classList.add('hide');
  quizHeader.innerHTML = 'Seerah Quiz ﷺ';
  shuffleArray(questions);
  showQuiz();
  getQuestions();
};

startButton.addEventListener('click', () => {
  shuffleArray(questions);
  showQuiz();
  getQuestions();
});
nextButton.addEventListener('click', getResult);
restartBtn.addEventListener('click', reset);
