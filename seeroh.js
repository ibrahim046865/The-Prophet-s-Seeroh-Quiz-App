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


const questions = [
  {
    question: "أَيْنَ وُلِدَ النَّبِيُّ ﷺ؟",
    choices: ["الْمَدِينَةُ", "مَكَّةُ", "الطَّائِفُ", "الْيَمَنُ"],
    answer: "مَكَّةُ"
  },
  {
    question: "فِي أَيِّ عَامٍ وُلِدَ النَّبِيُّ ﷺ؟",
    choices: ["عَامُ الْفِيلِ", "عَامُ الْهِجْرَةِ", "عَامُ بَدْرٍ", "عَامُ الْفَتْحِ"],
    answer: "عَامُ الْفِيلِ"
  },
  {
    question: "مَنْ هِيَ أُمُّ النَّبِيِّ ﷺ؟",
    choices: ["خَدِيجَةُ بِنْتُ خُوَيْلِدٍ", "آمِنَةُ بِنْتُ وَهْبٍ", "فَاطِمَةُ بِنْتُ أَسَدٍ", "حَلِيمَةُ السَّعْدِيَّةُ"],
    answer: "آمِنَةُ بِنْتُ وَهْبٍ"
  },
  {
    question: "مَنْ هُوَ وَالِدُ النَّبِيِّ ﷺ؟",
    choices: ["أَبُو طَالِبٍ", "عَبْدُ الْمُطَّلِبِ", "عَبْدُ اللَّهِ بْنُ عَبْدِ الْمُطَّلِبِ", "الْعَبَّاسُ"],
    answer: "عَبْدُ اللَّهِ بْنُ عَبْدِ الْمُطَّلِبِ"
  },
  {
    question: "مَنْ الَّتِي أَرْضَعَتِ النَّبِيَّ ﷺ؟",
    choices: ["صَفِيَّةُ", "حَلِيمَةُ السَّعْدِيَّةُ", "خَدِيجَةُ", "عَائِشَةُ"],
    answer: "حَلِيمَةُ السَّعْدِيَّةُ"
  },
  {
    question: "كَمْ كَانَ عُمْرُ النَّبِيِّ ﷺ عِنْدَ نُزُولِ الْوَحْيِ؟",
    choices: ["30 سَنَةً", "35 سَنَةً", "40 سَنَةً", "45 سَنَةً"],
    answer: "40 سَنَةً"
  },
  {
    question: "أَيْنَ نَزَلَ الْوَحْيُ لِأَوَّلِ مَرَّةٍ؟",
    choices: ["غَارُ حِرَاءٍ", "غَارُ ثَوْرٍ", "الْمَسْجِدُ الْحَرَامُ", "جَبَلُ أُحُدٍ"],
    answer: "غَارُ حِرَاءٍ"
  },
  {
    question: "مَنْ هُوَ أَوَّلُ مَنْ آمَنَ مِنَ الرِّجَالِ؟",
    choices: ["أَبُو بَكْرٍ الصِّدِّيقُ", "عُمَرُ بْنُ الْخَطَّابِ", "عَلِيُّ بْنُ أَبِي طَالِبٍ", "عُثْمَانُ بْنُ عَفَّانَ"],
    answer: "أَبُو بَكْرٍ الصِّدِّيقُ"
  },
  {
    question: "مَنْ هِيَ أَوَّلُ مَنْ آمَنَتْ بِالنَّبِيِّ ﷺ؟",
    choices: ["عَائِشَةُ", "فَاطِمَةُ", "خَدِيجَةُ بِنْتُ خُوَيْلِدٍ", "أَسْمَاءُ بِنْتُ أَبِي بَكْرٍ"],
    answer: "خَدِيجَةُ بِنْتُ خُوَيْلِدٍ"
  },
  {
    question: "كَمِ اسْتَمَرَّتِ الدَّعْوَةُ السِّرِّيَّةُ؟",
    choices: ["سَنَةٌ", "3 سَنَوَاتٍ", "5 سَنَوَاتٍ", "10 سَنَوَاتٍ"],
    answer: "3 سَنَوَاتٍ"
  },
  {
    question: "إِلَى أَيْنَ هَاجَرَ النَّبِيُّ ﷺ؟",
    choices: ["الطَّائِفُ", "الْيَمَنُ", "الْمَدِينَةُ", "الشَّامُ"],
    answer: "الْمَدِينَةُ"
  },
  {
    question: "مَنْ كَانَ رَفِيقَ النَّبِيِّ ﷺ فِي الْهِجْرَةِ؟",
    choices: ["عُمَرُ بْنُ الْخَطَّابِ", "أَبُو بَكْرٍ الصِّدِّيقُ", "عَلِيُّ بْنُ أَبِي طَالِبٍ", "عُثْمَانُ"],
    answer: "أَبُو بَكْرٍ الصِّدِّيقُ"
  },
  {
    question: "مَا اسْمُ الْغَارِ الَّذِي اخْتَبَأَ فِيهِ النَّبِيُّ ﷺ أَثْنَاءَ الْهِجْرَةِ؟",
    choices: ["حِرَاءٌ", "ثَوْرٌ", "أُحُدٌ", "نُورٌ"],
    answer: "ثَوْرٌ"
  },
  {
    question: "مَا أَوَّلُ مَسْجِدٍ بُنِيَ فِي الْإِسْلَامِ؟",
    choices: ["الْمَسْجِدُ الْحَرَامُ", "مَسْجِدُ قُبَاءٍ", "الْمَسْجِدُ الْأَقْصَى", "مَسْجِدُ أُحُدٍ"],
    answer: "مَسْجِدُ قُبَاءٍ"
  },
  {
    question: "مَا اسْمُ نَاقَةِ النَّبِيِّ ﷺ فِي الْهِجْرَةِ؟",
    choices: ["الْقَصْوَاءُ", "الْبَرْقَاءُ", "الْحَمْرَاءُ", "الْيَمَامَةُ"],
    answer: "الْقَصْوَاءُ"
  },
  {
    question: "كَمْ عَدَدُ غَزَوَاتِ النَّبِيِّ ﷺ تَقْرِيبًا؟",
    choices: ["10", "27", "50", "100"],
    answer: "27"
  },
  {
    question: "فِي أَيِّ غَزْوَةٍ حَدَثَتْ أَوَّلُ مُوَاجَهَةٍ كُبْرَى مَعَ قُرَيْشٍ؟",
    choices: ["أُحُدٌ", "الْخَنْدَقُ", "بَدْرٌ", "حُنَيْنٌ"],
    answer: "بَدْرٌ"
  },
  {
    question: "مَنْ هُوَ عَمُّ النَّبِيِّ ﷺ الَّذِي اسْتُشْهِدَ فِي أُحُدٍ؟",
    choices: ["أَبُو لَهَبٍ", "الْعَبَّاسُ", "حَمْزَةُ بْنُ عَبْدِ الْمُطَّلِبِ", "أَبُو طَالِبٍ"],
    answer: "حَمْزَةُ بْنُ عَبْدِ الْمُطَّلِبِ"
  },
  {
    question: "مَنْ هُوَ الصَّحَابِيُّ الَّذِي نَامَ فِي فِرَاشِ النَّبِيِّ ﷺ لَيْلَةَ الْهِجْرَةِ؟",
    choices: ["أَبُو بَكْرٍ", "عَلِيُّ بْنُ أَبِي طَالِبٍ", "عُمَرُ", "بِلَالٌ"],
    answer: "عَلِيُّ بْنُ أَبِي طَالِبٍ"
  },
  {
    question: "مَا اسْمُ الصُّلْحِ الَّذِي عُقِدَ بَيْنَ الْمُسْلِمِينَ وَقُرَيْشٍ؟",
    choices: ["صُلْحُ بَدْرٍ", "صُلْحُ الْحُدَيْبِيَةِ", "صُلْحُ الطَّائِفِ", "صُلْحُ مَكَّةَ"],
    answer: "صُلْحُ الْحُدَيْبِيَةِ"
  },
  {
    question: "مَتَى تَمَّ فَتْحُ مَكَّةَ؟",
    choices: ["السَّنَةُ 2 هـ", "السَّنَةُ 5 هـ", "السَّنَةُ 8 هـ", "السَّنَةُ 10 هـ"],
    answer: "السَّنَةُ 8 هـ"
  },
  {
    question: "كَمْ كَانَ عُمْرُ النَّبِيِّ ﷺ عِنْدَ وَفَاتِهِ؟",
    choices: ["60 سَنَةً", "61 سَنَةً", "63 سَنَةً", "65 سَنَةً"],
    answer: "63 سَنَةً"
  },
  {
    question: "أَيْنَ تُوُفِّيَ النَّبِيُّ ﷺ؟",
    choices: ["مَكَّةُ", "الْمَدِينَةُ", "الطَّائِفُ", "بَدْرٌ"],
    answer: "الْمَدِينَةُ"
  },
  {
    question: "مَنْ آخِرُ زَوْجَاتِ النَّبِيِّ ﷺ؟",
    choices: ["خَدِيجَةُ", "عَائِشَةُ", "صَفِيَّةُ", "مَيْمُونَةُ"],
    answer: "مَيْمُونَةُ"
  },
  {
    question: "مَنْ هُوَ مُؤَذِّنُ النَّبِيِّ ﷺ؟",
    choices: ["عَلِيٌّ", "بِلَالُ بْنُ رَبَاحٍ", "أَبُو بَكْرٍ", "عَمَّارٌ"],
    answer: "بِلَالُ بْنُ رَبَاحٍ"
  },
  {
    question: "كَمِ اسْتَمَرَّتِ الدَّعْوَةُ فِي مَكَّةَ قَبْلَ الْهِجْرَةِ؟",
    choices: ["10 سَنَوَاتٍ", "13 سَنَةً", "15 سَنَةً", "20 سَنَةً"],
    answer: "13 سَنَةً"
  },
  {
    question: "مَا اسْمُ عَامِ الْحُزْنِ؟",
    choices: ["عَامُ وَفَاةِ أَبِي طَالِبٍ وَخَدِيجَةَ", "عَامُ بَدْرٍ", "عَامُ الْفَتْحِ", "عَامُ الْهِجْرَةِ"],
    answer: "عَامُ وَفَاةِ أَبِي طَالِبٍ وَخَدِيجَةَ"
  },
  {
    question: "مَنْ الَّذِي حَاوَلَ قَتْلَ النَّبِيِّ ﷺ لَيْلَةَ الْهِجْرَةِ؟",
    choices: ["الْيَهُودُ", "قُرَيْشٌ", "الرُّومُ", "الْمُنَافِقُونَ"],
    answer: "قُرَيْشٌ"
  },
  {
    question: "مَنْ هُوَ آخِرُ الْخُلَفَاءِ الرَّاشِدِينَ وَفَاةً؟",
    choices: ["أَبُو بَكْرٍ", "عُمَرُ", "عُثْمَانُ", "عَلِيٌّ"],
    answer: "عَلِيٌّ"
  },
  {
    question: "مَا اسْمُ الْخُطْبَةِ الَّتِي أَلْقَاهَا النَّبِيُّ ﷺ فِي حَجَّةِ الْوَدَاعِ؟",
    choices: ["خُطْبَةُ الْفَتْحِ", "خُطْبَةُ النَّصْرِ", "خُطْبَةُ الْوَدَاعِ", "خُطْبَةُ بَدْرٍ"],
    answer: "خُطْبَةُ الْوَدَاعِ"
  }
];

const correctSound = new Audio('sounds/sahih.mp3');
const wrongSound = new Audio('sounds/qata.mp3');

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function toArabicNumbers(num) {
  return num.toString().replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);
}

function showQuiz() {
  welcomeMsg.classList.add('hide');
  questBox.classList.remove('hide');
  currentDiv.classList.remove('hide');
  startButton.classList.add('hide');
  scoreDisplay.textContent = `${toArabicNumbers(0)} / ${toArabicNumbers(questions.length)}`;
  questionNumberDisplay.textContent = 
`${toArabicNumbers(currentIndex + 1)} من ${toArabicNumbers(questions.length)}`;

};

let currentIndex = 0;
let totalScore = 0;

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
        scoreDisplay.textContent = `${toArabicNumbers(totalScore)} / ${toArabicNumbers(questions.length)}`;
      }
      else if (button.value !== questions[currentIndex].answer) {
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
    nextButton.textContent = "عرض النتيجة";
  } else {
    nextButton.textContent = "السؤال التالي";
  }
    })
  });
};

function getResult() {
  currentIndex++;
  if (currentIndex < questions.length) {
    questionNumberDisplay.textContent = `${toArabicNumbers(currentIndex + 1)} من ${toArabicNumbers(questions.length)}`;
    getQuestions();
  }
  else if (currentIndex === questions.length) {
    quizHeader.innerHTML = "انتهى الاختبار!";
    questBox.classList.add('hide');
    nextButton.classList.remove('hide');
    scoreContainer.classList.remove('hide');
    congMsg.classList.remove('hide');
    controlButtons.classList.remove('hide');
    nextButton.classList.add('hide');
    currentDiv.classList.add('hide');

    let percent = Math.floor((totalScore / questions.length) * 100);
    score.textContent = `${toArabicNumbers(totalScore)} / ${toArabicNumbers(questions.length)} \u00A0\u00A0صحيح`;
    percentage.textContent = `${toArabicNumbers(percent)}٪ درجة`;

    // Show/hide English link based on score
    var englishLink = document.getElementById('to-english-link');
    if (percent < 40) {
      englishLink.classList.remove('hide');
    } else {
      englishLink.classList.add('hide');
    }

    if (percent >= 80) {
      congMsg.innerHTML = "<span style='color: var(--biology-green);'>مبروك!</span> &#127881 أنت عبقري!";
    } else if (percent >= 60) {
      congMsg.innerHTML = "<span style='color: var(--biology-green);'>جيد!</span> &#128293 تقوم بعمل جيد!";
    } else {
      congMsg.innerHTML = "واصل التدريب! ستتحسن مع الوقت!&#128170;";
    }
  }
};

function reset() {
  currentIndex = 0;
  totalScore = 0;
  scoreDisplay.textContent = `${toArabicNumbers(0)} / ${toArabicNumbers(questions.length)}`;
  questionNumberDisplay.textContent = `${toArabicNumbers(1)} of ${toArabicNumbers(questions.length)}`;
  scoreContainer.classList.add('hide');
  congMsg.classList.add('hide');
  controlButtons.classList.add('hide');
  quizHeader.innerHTML = 'اختبار السيرة النبوية ﷺ';
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


