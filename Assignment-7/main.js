function startQuiz() {
    const nameInput = document.getElementById("name").value;
    const navName = document.getElementById("navName");
    if (!nameInput) {
        alert("Please enter your name!");
        return;
    }
    navName.style.color = "green";
    navName.style.fontSize = "20px";
    navName.style.fontWeight = "bold";

    const questions = [
        {
            question: "1. What is the purpose of the <head> tag in HTML?",
            options: [
                "To define the main content of the page",
                "To include metadata and links to external resources",
                "To display the title of the page",
                "To create a header section"
            ],
            answer: "To include metadata and links to external resources"
        },
        {
            question: "2. Which CSS property is used to make text bold?",
            options: [
                "font-style",
                "font-weight",
                "text-decoration",
                "text-transform"
            ],
            answer: "font-weight"
        },
        {
            question: "3. Which JavaScript method is used to select an element by its ID?",
            options: [
                "getElementById()",
                "querySelector()",
                "getElementsByClassName()",
                "getElementByTagName()"
            ],
            answer: "getElementById()"
        },
        {
            question: "4. Which HTML attribute is used to define inline styles?",
            options: [
                "class",
                "id",
                "style",
                "inline"
            ],
            answer: "style"
        },
        {
            question: "5. Which JavaScript keyword is used to declare a variable?",
            options: [
                "var",
                "let",
                "const",
                "All of the above"
            ],
            answer: "All of the above"
        }
    ];

    let currentQuestionIndex = 0;
    let correctAnswers = 0;
    let wrongAnswers = 0;

    function displayQuestion() {
        if (currentQuestionIndex >= questions.length) {
            displayResult();
            return;
        }

        const question = questions[currentQuestionIndex];
        const mainContent = document.querySelector("main");
        mainContent.innerHTML = `
        <img src="/Assignment-7/bg.png" alt="Quiz Icon" class="object-cover absolute top-0 vh-100 w-full z-3">
        <div class=" max-w-md flex flex-col gap-2  top-[20%] absolute z-50">
        <h2 class="text-center text-2xl font-semibold text-black">Question ${currentQuestionIndex + 1}/5</h2>
            <div class="bg-white shadow-lg rounded-xl p-8 w-full max-w-md flex flex-col gap-6">
                
                <p class="text-start text-lg font-bold">${question.question}</p>
                <form id="quizForm" class="flex flex-col gap-4">
                    ${question.options.map((option, index) => `
                        <label class="flex items-center gap-2 hover:bg-green-100 p-2 rounded-lg text-lg">
                            <input type="radio" name="answer" value="${option}" class="form-radio " />
                            ${option}
                        </label>
                    `).join('')}
                    
                </form>
            </div>
            <div class="text-right">
            <button type="button" class="bg-green-500 text-white py-2 rounded-lg w-25 hover:bg-green-600" onclick="submitAnswer()">Next</button>
            </div>
            
        </div>
                <div class="text-center font-bold absolute top-[120px] right-[60px]" id="timer">Time Left: 10s</div>

        `;

        startTimer();
    }

    function startTimer() {
        let timeLeft = 20;
        const timerElement = document.getElementById("timer");
        const timerInterval = setInterval(() => {
            timeLeft--;
            timerElement.textContent = `Time Left: ${timeLeft}s`;
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                wrongAnswers++;
                currentQuestionIndex++;
                displayQuestion();
            }
        }, 1000);

        // Attach the interval to the mainContent for cleanup
        document.querySelector("main").dataset.timerInterval = timerInterval;
    }

    window.checkAnswer = function (selectedOption) {
        const question = questions[currentQuestionIndex];
        const timerInterval = document.querySelector("main").dataset.timerInterval;
        clearInterval(timerInterval);

        if (selectedOption === question.answer) {
            correctAnswers++;
        } else {
            wrongAnswers++;
        }
    };

    window.submitAnswer = function () {
        const selectedOption = document.querySelector('input[name="answer"]:checked');
        if (!selectedOption) {
            alert("Please select an answer!");
            return;
        }

        const question = questions[currentQuestionIndex];
        const timerInterval = document.querySelector("main").dataset.timerInterval;
        clearInterval(timerInterval);

        if (selectedOption.value === question.answer) {
            correctAnswers++;
        } else {
            wrongAnswers++;
        }

        currentQuestionIndex++;
        displayQuestion();
    };

    window.nextQuestion = function () {
        const timerInterval = document.querySelector("main").dataset.timerInterval;
        clearInterval(timerInterval);
        currentQuestionIndex++;
        displayQuestion();
    };

    function displayResult() {
        const mainContent = document.querySelector("main");
        mainContent.innerHTML = `
            <div class="flex flex-col">
            <div class="bg-[#cbfcce] rounded-3xl p-8 w-full max-w-md flex flex-col gap-6">
                <h2 class="text-center text-2xl font-semibold text-green-700">Quiz Completed</h2>
                <p class="text-center text-lg">Correct Answers: ${correctAnswers}</p>
                <p class="text-center text-lg">Wrong Answers: ${wrongAnswers}</p>
            </div>
            <div class="text-center mt-4">
                <button type="button" class="bg-green-500 text-white py-2 rounded-lg w-25 hover:bg-green-600" onclick="location.reload()">Restart Quiz</button>
            </div>
            </div>
        `;
    }

    displayQuestion();
}

