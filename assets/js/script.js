var mainSection = document.querySelector(".primary-content-container");
var welcome = document.querySelector("#welcome");
var startBttn = document.querySelector("#start-bttn");
var containerPrimary = document.createElement("div");
var quizQuestionHead = document.createElement("h3");
var quizQuestionList = document.createElement("ul");
var quizQuestionListItemA = document.createElement("li");
var quizQuestionListItemABttn = document.createElement("button");
var quizQuestionListItemB = document.createElement("li");
var quizQuestionListItemBBttn = document.createElement("button");
var quizQuestionListItemC = document.createElement("li");
var quizQuestionListItemCBttn = document.createElement("button");
var quizQuestionListItemD = document.createElement("li");
var quizQuestionListItemDBttn = document.createElement("button");
var questionEvalContainer = document.createElement("div");
var questionEval = document.createElement("h2");

containerPrimary.setAttribute("class", "container-primary");
questionEvalContainer.setAttribute("class", "question-eval-container");
questionEval.setAttribute("class", "question-eval");

var timerCount = 75




startBttn.addEventListener("click", function() {
    welcome.style.display = "none";
    quizQuestionConstructor();
})

/*
function randQuestion() {
    var randQuizQuestionMemory = []
    for (var i = 0; i < quizDefinitions.length; i++) {
        var randQuizQuestion = quizDefinitions[Math.floor(Math.random() * quizDefinitions.length)];
    for (var i = 0; i < randQuizQuestionMemory.length; i++) {
        if (i = randQuizQuestionMemory[i] )
    }
        randQuizQuestionMemory.push(randQuizQuestion)
        
} */

function quizQuestionConstructor() {
    var quizDefinitions = [
        {
            quizQuestion:  "Which of the following is not a county in North Carolina?",
            qA: "Clay County",
            qB: "Cleveland County",
            qC: "Ashe County",
            qD: "Greenville County",
            answer:  "Greenville County"
        },
        {
            quizQuestion:  "In 2019 North Carolina ranked number one in the United States for the production of which crop:",
            qA: "A.  strawberries",
            qB: "B.  peanuts",
            qC: "C.  tobacco",
            qD: "D.  sweet potatoes",
            answer:  "C.  tobacco"
        },
        {
            quizQuestion: "Which of the following famous jazz musicians was not born in North Carolina?",
            qA: "A.  John Coltrane",
            qB: "B.  Nina Simone",
            qC: "C.  Dizzy Gillespie",
            qD: "D.  Thelonious Monk",
            answer: "C.  Dizzy Gillespie"
        }
    ];
    console.log(`TEST | quizDefinitions:  ${quizDefinitions}`)
    console.log(`TEST | quizDefinitions length:  ${quizDefinitions.length}`)
    console.dir(quizDefinitions[0])
    console.dir(quizDefinitions[1])
    console.log(`TEST | TYPE OF quizDefinitions:  ${typeof(quizDefinitions)}`)

    for (var i = 0; i < quizDefinitions.length; i++) {
        mainSection.appendChild(containerPrimary);
        containerPrimary.appendChild(quizQuestionHead);
        containerPrimary.appendChild(quizQuestionListItemA)
        quizQuestionListItemA.appendChild(quizQuestionListItemABttn);
        containerPrimary.appendChild(quizQuestionListItemB);
        quizQuestionListItemB.appendChild(quizQuestionListItemBBttn);
        containerPrimary.appendChild(quizQuestionListItemC);
        quizQuestionListItemC.appendChild(quizQuestionListItemCBttn);
        containerPrimary.appendChild(quizQuestionListItemD);
        quizQuestionListItemD.appendChild(quizQuestionListItemDBttn);        

        quizQuestionHead.textContent = quizDefinitions[i]["quizQuestion"];
        quizQuestionListItemABttn.textContent = quizDefinitions[i]["qA"];
        quizQuestionListItemBBttn.textContent = quizDefinitions[i]["qB"];
        quizQuestionListItemCBttn.textContent = quizDefinitions[i]["qC"];
        quizQuestionListItemDBttn.textContent = quizDefinitions[i]["qD"];

        quizQuestionListItemABttn.addEventListener("click", function() {
            console.log(`TEST | Button A has been clicked`)
            if (quizQuestionListItemABttn === quizDefinitions[i]["answer"]) {
                containerPrimary.appendChild(questionEvalContainer);
                questionEvalContainer.appendChild(questionEval);
                questionEval.textContent = "CORRECT";
                return;
            };
        quizQuestionListItemBBttn.addEventListener("click", function() {
            console.log(`TEST | Button B has been clicked`)
            if (quizQuestionListItemBBttn === quizDefinitions[i]["answer"]) {
                containerPrimary.appendChild(questionEvalContainer);
                questionEvalContainer.appendChild(questionEval);
                questionEval.textContent = "CORRECT";
                return;
            }
        });
    });
}};