var head = document.querySelector(".head");
var headNav = document.querySelector("#head-nav");
var highScore = document.querySelector("#highscore")
var timer = document.querySelector("#main-timer");
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
head.appendChild(headNav);
headNav.children[0].appendChild(timer);
timer.textContent = timerCount

/*
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
*/

var quizQuestionNum = 0

startBttn.addEventListener("click", function() {
    welcome.style.display = "none";
    mainTimer();
    quizQuestionConstructor();
    // quizEval(quizQuestionNum);
    // for (var i = 0; i < quizDefinitions.length; i++) {
        // quizEval(quizQuestionNum);
    // }
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

/*
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
*/

function quizQuestionConstructor(event) {
    console.log(`TEST | start of function quizQuestionConstructor`)
    // questionEval.style.display = "none";
    // console.log(`TEST | questionEval.display = 'none' attempt | 1`)
    // event.preventDefault();
    /*
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
    containerPrimary.appendChild(questionEvalContainer);
    questionEvalContainer.appendChild(questionEval);
    */     
    
    /* for (let i = 0; i < quizDefinitions.length; i++) {
        quizQuestionHead.textContent = quizDefinitions[i]["quizQuestion"];
        quizQuestionListItemABttn.textContent = quizDefinitions[i]["qA"];
        quizQuestionListItemBBttn.textContent = quizDefinitions[i]["qB"];
        quizQuestionListItemCBttn.textContent = quizDefinitions[i]["qC"];
        quizQuestionListItemDBttn.textContent = quizDefinitions[i]["qD"];

        quizQuestionListItemABttn.addEventListener("click", function() {
            console.log(`TEST | Button A has been clicked`)
            console.log(`TEST | THE ANSWSER IS:  ${quizDefinitions[i]["answer"]}`)
            if (quizQuestionListItemABttn === quizDefinitions[i]["answer"]) {
                questionEval.textContent = "CORRECT";
            } else {
                questionEval.textContent = "INCORRECT";
            }
        });
        quizQuestionListItemBBttn.addEventListener("click", function() {
            console.log(`TEST | Button B has been clicked`)
            console.log(`TEST | THE ANSWSER IS:  ${quizDefinitions[i]["answer"]}`)
            if (quizQuestionListItemBBttn === quizDefinitions[i]["answer"]) {
                questionEval.textContent = "CORRECT";
            } else {
                questionEval.textContent = "INCORRECT";
            }
        });
        quizQuestionListItemCBttn.addEventListener("click", function() {
            console.log(`TEST | Button C has been clicked`)
            console.log(`TEST | THE ANSWSER IS:  ${quizDefinitions[i]["answer"]}`)
            if (quizQuestionListItemCBttn === quizDefinitions[i]["answer"]) {
                questionEval.textContent = "CORRECT";
            } else {
                questionEval.textContent = "INCORRECT";
            }
        });
        quizQuestionListItemDBttn.addEventListener("click", function() {
            console.log(`TEST | Button D has been clicked`)
            console.log(`TEST | THE ANSWSER IS:  ${quizDefinitions[i]["answer"]}`)
            if (quizQuestionListItemDBttn === quizDefinitions[i]["answer"]) {
                questionEval.textContent = "CORRECT";
            } else {
                questionEval.textContent = "INCORRECT";
            }
        });
/////////////// Q1 ///////////////
    } // this is the closing for the 'for (let i = 0; ...)' loop */

    /*
    quizQuestionHead.textContent = quizDefinitions[0]["quizQuestion"];
    quizQuestionListItemABttn.textContent = quizDefinitions[0]["qA"];
    quizQuestionListItemBBttn.textContent = quizDefinitions[0]["qB"];
    quizQuestionListItemCBttn.textContent = quizDefinitions[0]["qC"];
    quizQuestionListItemDBttn.textContent = quizDefinitions[0]["qD"];
    */
   quizText(quizQuestionNum);

   /*
    quizQuestionListItemABttn.addEventListener("click", function() {
        console.log(`TEST | Button A has been clicked`)
        console.log(`TEST | THE ANSWSER IS:  ${quizDefinitions[0]["answer"]}`)
        if (quizQuestionListItemABttn === quizDefinitions[0]["answer"]) {
            questionEval.textContent = "CORRECT";
        } else {
            questionEval.textContent = "INCORRECT";
        }
    });
    quizQuestionListItemBBttn.addEventListener("click", function() {
        console.log(`TEST | Button B has been clicked`)
        console.log(`TEST | THE ANSWSER IS:  ${quizDefinitions[0]["answer"]}`)
        if (quizQuestionListItemBBttn === quizDefinitions[0]["answer"]) {
            questionEval.textContent = "CORRECT";
        } else {
            questionEval.textContent = "INCORRECT";
        }
    });
    quizQuestionListItemCBttn.addEventListener("click", function() {
        console.log(`TEST | Button C has been clicked`)
        console.log(`TEST | THE ANSWSER IS:  ${quizDefinitions[0]["answer"]}`)
        if (quizQuestionListItemCBttn === quizDefinitions[0]["answer"]) {
            questionEval.textContent = "CORRECT";
        } else {
            questionEval.textContent = "INCORRECT";
        }
    });
    quizQuestionListItemDBttn.addEventListener("click", function() {
        console.log(`TEST | Button D has been clicked`)
        console.log(`TEST | THE ANSWSER IS:  ${quizDefinitions[0]["answer"]}`)
        if (quizQuestionListItemDBttn === quizDefinitions[0]["answer"]) {
            questionEval.textContent = "CORRECT";
        } else {
            questionEval.textContent = "INCORRECT";
            }
    });
    */
   //for (index = 0; index < quizDefinitions.length; index++) {
       //quizText(index);
       //quizEval(index);
   //}
    quizEval(quizQuestionNum);


   // quizText(1);
   // quizEval(1);

} // this is the closing for the quizQuestionConstructor function

function quizText(index) {
    
    quizDefinitions = [
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
    containerPrimary.appendChild(questionEvalContainer);
    questionEvalContainer.appendChild(questionEval);

    quizQuestionHead.textContent = quizDefinitions[index]["quizQuestion"];
    quizQuestionListItemABttn.textContent = quizDefinitions[index]["qA"];
    quizQuestionListItemBBttn.textContent = quizDefinitions[index]["qB"];
    quizQuestionListItemCBttn.textContent = quizDefinitions[index]["qC"];
    quizQuestionListItemDBttn.textContent = quizDefinitions[index]["qD"];
};


function evalDisplayClock() {
    var evalDisplayInterval = setInterval( function() {
        evalDisplayTime--;
        console.log(`TEST | evalDisplayTimer clock is running!`)

        if (evalDisplayTime === 0) {
            clearInterval(evalDisplayInterval);
            questionEval.style.display = "none";
            console.log(`TEST | evalDisplayTimer clock has run out!`)
        }
    }, 1000);
}

function mainTimer() {
    var mainTimerInterval = setInterval( function() {
        if (timerCount > 0) {
            timer.textContent = timerCount;
            timerCount--;
            console.log(`TEST | mainTimer clock is running!`);
        } else if (timerCount <= 0) {
            clearInterval(mainTimerInterval);
            timer.textContent = "0";
            console.log(`TEST | mainTimer clock has run out!`)
        };
    }, 1000);
}

function quizEval(index) {
    // quizText(quizQuestionNum);
    console.log(`TEST | Function quizText has run`);
    // questionEval.display = "none";
    // console.log(`TEST | questionEval.display = 'none' attempt | 2`)
    evalDisplayTime = 2;
    quizQuestionListItemABttn.addEventListener("click", function() {
        console.log(`TEST | Button A has been clicked`)
        console.log(`TEST | THE ANSWSER IS:  ${quizDefinitions[index]["answer"]}`)
        if (quizQuestionListItemABttn === quizDefinitions[index]["answer"]) {
            questionEval.textContent = "CORRECT";
            console.log(`TEST | if portion of if...then statement has been executed`)
            // quizQuestionNum++
        } else {
            questionEval.textContent = "INCORRECT";
            console.log(`TEST | else portion of the if...then statement has been executed`)
            if (timerCount > 0) {
                timerCount -= 10
            } else if (timerCount <= 0) {
                timerCount.textContent = "0"
            };
        };
        evalDisplayClock();
        quizQuestionNum++;
        console.log(`TEST | quizQuestionNum:  ${quizQuestionNum}`);
        quizQuestionConstructor();
    })
};

/*
function quizEval(index) {
    quizText(quizQuestionNum);
    for (var i = 0; i < quizDefinitions.length; i++) {
        quizQuestionListItemABttn.addEventListener("click", function() {
            console.log(`TEST | Button A has been clicked`)
            console.log(`TEST | THE ANSWSER IS:  ${quizDefinitions[index]["answer"]}`)
            if (quizQuestionListItemABttn === quizDefinitions[index]["answer"]) {
                questionEval.textContent = "CORRECT";
                // quizQuestionNum++
            } else {
                questionEval.textContent = "INCORRECT";
                timerCount = timerCount - 10;
                timer.textContent = timerCount;
                // quizQuestionNum++
            }
            quizQuestionNum++
        })
    }
}
*/