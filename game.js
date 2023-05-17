const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];



let questions = [
  {
    question: "Was ist eine Attrape?",
    choice1: "charakteristische Eigenschaft, Wesensmerkmal",
    choice2: "durch Zerreiben hergestellter Schnupftabak",
    choice3: "ein Gegenstand, der die Eigenschaften des Originallen nachahmt",
    choice4: "früher besonders im Maisanbau häufig eingesetztes Herbizid",
    answer: 3
  },
  {
    question: "Was ist eie Lapalie?",
    choice1: "unbedeutende Sache",
    choice2: "durch Granulieren gewonnene Körner",
    choice3: "Strauch mit sehr früh im Frühjahr erscheinenden großen, weißen Büten",
    choice4: "Baum mit tulpenähnlichen, einzeln stehenden Blüten",
    answer: 1
  },
    {
    question: "Was ist ein Obulus (der Obulus)",
    choice1: "ein geschnittener und bildverzierter Schmuckstein",
    choice2: "oft kunstvoll gearbeitetes offenes Gefäß",
    choice3: "Gott der Künste, der Weissagung, der Verbannten und der Vertriebenen",
    choice4: "kleine Geldspende",
    answer: 4
  },
      {
    question: "Was ist ein Renomee (das Renommee)",
    choice1: "in ganzer Höhe des Bauwerks vorspringender Gebäudeteil",
    choice2: "das Ansehen, Anerkennung, der gute Ruf",
    choice3: "unschöpferische Nachbildung",
    choice4: "auf Anerkennung, Bewunderung beruhende Achtung",
    answer: 2
  },
  {
    question: "Was ist ein Stegreif, im Redewendung: etwas aus dem Stegreif machen? ",
    choice1: "Vorgehensweise, bei der schon ein kleiner Fehler großes Unheil auslösen kann",
    choice2: "anhaltendes Schwanken in verschiedene Richtungen",
    choice3: "etwas ohne Vorbereitung machen, improvisieren",
    choice4: "eine angenehme, behagliche Atmosphäre schaffen",
    answer: 3
  },
        {
    question: "Was ist der Trotz ?",
    choice1: "etwas, was jemanden in seinem Leid, seiner Niedergeschlagenheit aufrichtet",
    choice2: "Zug von gemeinsam sich irgendwohin begebenden Personen",
    choice3: "hartnäckiger [eigensinniger] Widerstand gegen eine Autorität aus dem Gefühl heraus, im Recht zu sein",
    choice4: "ist ein kleinwüchsiges, menschenähnliches Fabelwesen",
    answer: 3
  },
            {
    question: "Was ist der Antrieb?",
    choice1: "das Ansehen, die Anerkennung",
    choice2: "charakteristische Eigenschaft, Wesensmerkmal",
    choice3: "Anreiz, Impuls",
    choice4: "Eine Firma",
    answer: 3
  },
                {
    question: "Was ist der Bruchteil?",
    choice1: "das Beteiligtsein;  Teilnahme",
    choice2: "verhältnismäßig kleiner Teil von etwas",
    choice3: "in ganzer Höhe des Bauwerks vorspringender Gebäudeteil",
    choice4: "Beteiligung am Kapital einer Firma",
    answer: 2
  },
                {
    question: "Was ist das Unterfangen?",
    choice1: "Gebäude für Sträflinge, die verurteilt sind",
    choice2: "Das Erdreich, das durch Ausheben einer Baugrube entsteht",
    choice3: "Wagnis, (kühnes) Unternehmen",
    choice4: "Verhindern des Sichausbreitens von Kritik",
    answer: 3
  },
            {
    question: "Was ist die Unmenge?",
    choice1: "übergroße, sehr große Menge",
    choice2: "unwichtige, nebensächliche Sache, Kleinigkeit",
    choice3: "Einkommenshöhe, unterhalb deren keine Sozialversicherungsbeiträge erhoben werden",
    choice4: "das Geringschätzen",
    answer: 1
  },
       
                {
    question: " Was ist das Beet?",
    choice1: "über die ganze Erde verbreitetes, zu den Insekten gehörendes Tier",
    choice2: "einzelnes Laub oder Nadeln, Blüten und Früchte tragendes Teilstück eines Astes an Baum oder Strauch",
    choice3: "kleineres, abgegrenztes, bepflanztes oder zur Bepflanzung vorgesehenes Stück Land in einem Garten",
    choice4: "im Boden befindlicher, oft fein verästelter Teil der Pflanze",
    answer: 3
  },
   {
    question: "Was ist die Urkunde?",
    choice1: "Geografie, besonders als Schulfach",
    choice2: "Schriftstück, durch das etwas beglaubigt oder bestätigt wird; Dokument mit Rechtskraft",
    choice3: "ein besonders in Pflanzen verbreitetes Enzym",
    choice4: "spezialisierte Zellen, von denen sich zwei bei der geschlechtlichen Fortpflanzung zu einer Zygote vereinigen",
    answer: 2
  },
            
                 {
    question: " Was ist die Nachlässigkeit?",
    choice1: "längere Zeit anhaltende Wirkung",
    choice2: "lässige [Lebens]art; lässiges Wesen",
    choice3: "eine Zusammenwirkung zwischen Menschen, die auf gegenseitiger Bereitschaft zu helfen, beruht",
    choice4: "an einem entstandenen Schaden schuldig oder mitschuldig zu sein",
    answer: 3
  },
          {
    question: " Was ist die Wohlfahrt?",
    choice1: "religiös motivierte, asketisch-spirituelle Reise zu heiligen Glaubensstätten",
    choice2: "wird eine Zeit unmittelbar nach der Hochzeit bezeichnet, die das Paar gemeinsam verbringt",
    choice3: "obligatorische Reise der Söhne des europäischen Adels",
    choice4: " ist das Bemühen um die Deckung der Grundbedürfnisse von Menschen und um einen gewissen Lebensstandard",
    answer: 4
  },
  {
    question: " Was ist die Auflage?",
    choice1: "Anzahl der Serie in einem bestimmten Zeitraum",
    choice2: "Nachweis für Ausgaben oder Zahlungen",
    choice3: "etwas, was einer Zeitung oder Zeitschrift beigelegt ist",
    choice4: "Gelegenheit, Geld anzulegen",
    answer: 1
  }
];



//CONSTANTS
const CORRECT_BONUS = 1;
const MAX_QUESTIONS = questions.length;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    //go to the end page
    return window.location.assign("end.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  //Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

startGame();
