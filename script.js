// Quiz questions based on provided Humanities and Arts content
const questions = [
    {
        question: 'What is the meaning of the Latin word "humanus"?',
        answers: [
            { text: 'Human, cultured, and refined', correct: true },
            { text: 'To join or put together', correct: false },
            { text: 'Study of beauty', correct: false },
            { text: 'A skilled craft worker', correct: false }
        ]
    },
    {
        question: 'What is the Aryan root "ar" associated with?',
        answers: [
            { text: 'To join or put together', correct: true },
            { text: 'Human, cultured, and refined', correct: false },
            { text: 'Study of nature', correct: false },
            { text: 'A body of written work', correct: false }
        ]
    },
    {
        question: 'Which of the following is a function of art?',
        answers: [
            { text: 'Express freely oneself', correct: true },
            { text: 'To join or put together', correct: false },
            { text: 'Study of existence', correct: false },
            { text: 'A skilled craft worker', correct: false }
        ]
    },
    {
        question: 'What is functional art?',
        answers: [
            { text: 'Art that benefits man’s existence or makes life better', correct: true },
            { text: 'Art that serves no utilitarian purpose', correct: false },
            { text: 'Study of beauty', correct: false },
            { text: 'A body of written work', correct: false }
        ]
    },
    {
        question: 'Who said "Art is imitation of FORMS"?',
        answers: [
            { text: 'Plato', correct: true },
            { text: 'Aristotle', correct: false },
            { text: 'Immanuel Kant', correct: false },
            { text: 'Marcel Duchamp', correct: false }
        ]
    },
    {
        question: 'What is the main interest of Immanuel Kant regarding art?',
        answers: [
            { text: 'Beauty as a matter of taste', correct: true },
            { text: 'Art as imitation of forms', correct: false },
            { text: 'Order, symmetry, and definiteness', correct: false },
            { text: 'Mechanical energy of modern life', correct: false }
        ]
    },
    {
        question: 'What is the difference between an artist and an artisan?',
        answers: [
            { text: 'Artist creates art, artisan makes things by hand', correct: true },
            { text: 'Both are entertainers', correct: false },
            { text: 'Both are musicians', correct: false },
            { text: 'Both are philosophers', correct: false }
        ]
    },
    {
        question: 'Which art form is considered the most functional?',
        answers: [
            { text: 'Architecture', correct: true },
            { text: 'Painting', correct: false },
            { text: 'Dance', correct: false },
            { text: 'Music', correct: false }
        ]
    },
    {
        question: 'What is representational art?',
        answers: [
            { text: 'Art clearly identifiable as something that exists in life', correct: true },
            { text: 'Art that does not rely on representation', correct: false },
            { text: 'Art that is highly subjective', correct: false },
            { text: 'Art that is functional', correct: false }
        ]
    },
    {
        question: 'What is naturalism in art?',
        answers: [
            { text: 'Depiction of realistic objects in natural setting', correct: true },
            { text: 'Alteration of the original shape', correct: false },
            { text: 'Use of visible sign of an idea', correct: false },
            { text: 'Emphasized strong, vibrant color', correct: false }
        ]
    },
    {
        question: 'What is non-functional art?',
        answers: [
            { text: 'Art that serves no utilitarian purpose', correct: true },
            { text: 'Art that benefits man’s existence', correct: false },
            { text: 'Art that is applied', correct: false },
            { text: 'Art that is musical', correct: false }
        ]
    },
    {
        question: 'What is the study of general and fundamental questions about existence, knowledge, values, reason, mind, and language?',
        answers: [
            { text: 'Philosophy', correct: true },
            { text: 'Art', correct: false },
            { text: 'Architecture', correct: false },
            { text: 'Dance', correct: false }
        ]
    },
    {
        question: 'Which philosopher said "Poetry is more philosophical than philosophy"?',
        answers: [
            { text: 'Aristotle', correct: true },
            { text: 'Plato', correct: false },
            { text: 'Immanuel Kant', correct: false },
            { text: 'Marcel Duchamp', correct: false }
        ]
    },
    {
        question: 'Which art form uses hard or plastic materials to create three-dimensional objects?',
        answers: [
            { text: 'Sculpture', correct: true },
            { text: 'Painting', correct: false },
            { text: 'Dance', correct: false },
            { text: 'Music', correct: false }
        ]
    },
    {
        question: 'What is the medium of music?',
        answers: [
            { text: 'Sound', correct: true },
            { text: 'Movement', correct: false },
            { text: 'Pigments', correct: false },
            { text: 'Words', correct: false }
        ]
    },
    {
        question: 'What is literature?',
        answers: [
            { text: 'Any body or collection of written work', correct: true },
            { text: 'A form of visual art', correct: false },
            { text: 'A type of dance', correct: false },
            { text: 'A musical composition', correct: false }
        ]
    },
    {
        question: 'What is abstraction in art?',
        answers: [
            { text: 'Alteration of the original shape of something', correct: true },
            { text: 'Depiction of realistic objects', correct: false },
            { text: 'Use of visible sign of an idea', correct: false },
            { text: 'Emphasized strong, vibrant color', correct: false }
        ]
    },
    {
        question: 'Which art movement emphasized strong, vibrant color and bold brushstrokes?',
        answers: [
            { text: 'Fauvism', correct: true },
            { text: 'Cubism', correct: false },
            { text: 'Dadaism', correct: false },
            { text: 'Surrealism', correct: false }
        ]
    },
    {
        question: 'What is the aim of Dadaism?',
        answers: [
            { text: 'To shock and provoke its viewers', correct: true },
            { text: 'To imitate nature', correct: false },
            { text: 'To emphasize beauty', correct: false },
            { text: 'To create functional objects', correct: false }
        ]
    },
    {
        question: 'Which art movement wants to capture the mechanical energy of modern life?',
        answers: [
            { text: 'Futurism', correct: true },
            { text: 'Cubism', correct: false },
            { text: 'Expressionism', correct: false },
            { text: 'Symbolism', correct: false }
        ]
    },
    {
        question: 'What is surrealism influenced by?',
        answers: [
            { text: 'Freudian psychology and the subconscious', correct: true },
            { text: 'Mechanical energy', correct: false },
            { text: 'Order and symmetry', correct: false },
            { text: 'Utility and function', correct: false }
        ]
    },
    {
        question: 'What does expressionism feature?',
        answers: [
            { text: 'Pathos, morbidity, chaos, or defeat', correct: true },
            { text: 'Order and symmetry', correct: false },
            { text: 'Mechanical energy', correct: false },
            { text: 'Utility and function', correct: false }
        ]
    },
    {
        question: 'What is the Latin word for art that means everything artificially made or composed by man?',
        answers: [
            { text: 'Sars or artis', correct: true },
            { text: 'Humanus', correct: false },
            { text: 'Ar', correct: false },
            { text: 'Cubism', correct: false }
        ]
    },
    {
        question: 'Which art form reflects how we present ourselves across the Earth’s landscapes and is the most functional?',
        answers: [
            { text: 'Architecture', correct: true },
            { text: 'Sculpture', correct: false },
            { text: 'Painting', correct: false },
            { text: 'Dance', correct: false }
        ]
    },
    {
        question: 'Who created the Heydar Aliyev Center in Baku, Azerbaijan?',
        answers: [
            { text: 'Zaha Hadid', correct: true },
            { text: 'Antoni Gaudi', correct: false },
            { text: 'Michelangelo', correct: false },
            { text: 'Paul Landowski', correct: false }
        ]
    },
    {
        question: 'Which painting was created by Leonardo da Vinci?',
        answers: [
            { text: 'Mona Lisa', correct: true },
            { text: 'The Scream', correct: false },
            { text: 'Spoliarium', correct: false },
            { text: 'Planting Rice', correct: false }
        ]
    },
    {
        question: 'What is the main characteristic of non-representational art?',
        answers: [
            { text: 'Compositions do not rely on representation', correct: true },
            { text: 'Clearly identifiable as something that exists in life', correct: false },
            { text: 'Depiction of realistic objects', correct: false },
            { text: 'Functional objects', correct: false }
        ]
    },
    {
        question: 'Which is NOT a source of subject in art?',
        answers: [
            { text: 'Mathematics', correct: true },
            { text: 'Nature', correct: false },
            { text: 'History', correct: false },
            { text: 'Religion', correct: false }
        ]
    },
    {
        question: 'What is cubism in art?',
        answers: [
            { text: 'Presentation of abstract figures using geometric shapes', correct: true },
            { text: 'Depiction of realistic objects', correct: false },
            { text: 'Emphasized strong, vibrant color', correct: false },
            { text: 'Mechanical energy of modern life', correct: false }
        ]
    },
    {
        question: 'What is symbolism in art?',
        answers: [
            { text: 'Use of visible sign of an idea to convey a message', correct: true },
            { text: 'Depiction of realistic objects', correct: false },
            { text: 'Alteration of the original shape', correct: false },
            { text: 'Mechanical energy of modern life', correct: false }
        ]
    },
    {
        question: 'Which art form is a collaborative form of performing art that uses live performers?',
        answers: [
            { text: 'Theater', correct: true },
            { text: 'Dance', correct: false },
            { text: 'Music', correct: false },
            { text: 'Painting', correct: false }
        ]
    },
    {
        question: 'What is realism in art?',
        answers: [
            { text: 'Attempt to represent subject matter truthfully, without artificiality', correct: true },
            { text: 'Depiction of realistic objects in natural setting', correct: false },
            { text: 'Alteration of the original shape', correct: false },
            { text: 'Use of visible sign of an idea', correct: false }
        ]
    },
    {
        question: 'What are academic disciplines that study aspects of human society and culture called?',
        answers: [
            { text: 'Humanities', correct: true },
            { text: 'Arts', correct: false },
            { text: 'Philosophy', correct: false },
            { text: 'Architecture', correct: false }
        ]
    },
    {
        question: 'What is the main purpose of functional art?',
        answers: [
            { text: 'To benefit man’s existence or improve life', correct: true },
            { text: 'To serve no utilitarian purpose', correct: false },
            { text: 'To imitate nature', correct: false },
            { text: 'To shock and provoke viewers', correct: false }
        ]
    },
    {
        question: 'Which of the following is an example of applied art?',
        answers: [
            { text: 'Shelves, tables, chairs', correct: true },
            { text: 'Paintings', correct: false },
            { text: 'Sculptures', correct: false },
            { text: 'Dance', correct: false }
        ]
    },
    {
        question: 'What is the main focus of philosophy of art?',
        answers: [
            { text: 'Study of nature of art including interpretation, representation, expression, and form', correct: true },
            { text: 'Study of pigments', correct: false },
            { text: 'Study of mechanical energy', correct: false },
            { text: 'Study of written works', correct: false }
        ]
    },
    {
        question: 'What is the main characteristic of distortion in art?',
        answers: [
            { text: 'Presenting the subject where the artist moves away from reality', correct: true },
            { text: 'Lengthening the subject', correct: false },
            { text: 'Cutting or mutilating the subject', correct: false },
            { text: 'Using geometric shapes', correct: false }
        ]
    },
    {
        question: 'What is elongation in art?',
        answers: [
            { text: 'When the art subject is lengthened, protracted, or extended', correct: true },
            { text: 'Presenting the subject away from reality', correct: false },
            { text: 'Cutting or mutilating the subject', correct: false },
            { text: 'Using visible signs of an idea', correct: false }
        ]
    },
    {
        question: 'What is mangling in art?',
        answers: [
            { text: 'Showing the subject as cut, lacerated, mutilated, or hacked with repeated blows', correct: true },
            { text: 'Lengthening the subject', correct: false },
            { text: 'Using geometric shapes', correct: false },
            { text: 'Emphasizing strong, vibrant color', correct: false }
        ]
    },
    {
        question: 'What is the meaning of "Dada" in Dadaism?',
        answers: [
            { text: 'Hobby horse', correct: true },
            { text: 'Mechanical energy', correct: false },
            { text: 'Order and symmetry', correct: false },
            { text: 'Written work', correct: false }
        ]
    },
    {
        question: 'Which art form is described as movement of the body in a rhythmic way usually to music?',
        answers: [
            { text: 'Dance', correct: true },
            { text: 'Music', correct: false },
            { text: 'Painting', correct: false },
            { text: 'Sculpture', correct: false }
        ]
    },
    {
        question: 'Which is a source of subject in art?',
        answers: [
            { text: 'Mythology', correct: true },
            { text: 'Mathematics', correct: false },
            { text: 'Physics', correct: false },
            { text: 'Chemistry', correct: false }
        ]
	},
	{
        image: "1520.png",
        question: 'What subject does this image best represent?',
        answers: [
            { text: 'Religion', correct: true },
            { text: 'Nature', correct: false },
            { text: 'Legend', correct: false },
            { text: 'History', correct: false }
        ]
    },
    {
        image: "1868.png",
        question: 'What subject does this image best represent?',
        answers: [
            { text: 'Nature', correct: true },
            { text: 'People', correct: false },
            { text: 'Legend', correct: false },
            { text: 'Religion', correct: false }
        ]
    },
    {
        image: "1885.png",
        question: 'What subject does this image best represent?',
        answers: [
            { text: 'Legend', correct: true },
            { text: 'History', correct: false },
            { text: 'Nature', correct: false },
            { text: 'People', correct: false }
        ]
    },
    {
        image: "1955.png",
        question: 'What subject does this image best represent?',
        answers: [
            { text: 'History', correct: true },
            { text: 'Legend', correct: false },
            { text: 'Religion', correct: false },
            { text: 'Nature', correct: false }
        ]
    },
    {
        image: "2016.png",
        question: 'What subject does this image best represent?',
        answers: [
            { text: 'People', correct: true },
            { text: 'Nature', correct: false },
            { text: 'History', correct: false },
            { text: 'Religion', correct: false }
        ]
    },
    {
        image: "abstraction.png",
        question: 'Which art style is best represented by this image?',
        answers: [
            { text: 'Abstraction', correct: true },
            { text: 'Cubism', correct: false },
            { text: 'Fauvism', correct: false },
            { text: 'Symbolism', correct: false }
        ]
    },
    {
        image: "cubism.png",
        question: 'Which art style is best represented by this image?',
        answers: [
            { text: 'Cubism', correct: true },
            { text: 'Dadaism', correct: false },
            { text: 'Futurism', correct: false },
            { text: 'Mangling', correct: false }
        ]
    },
    {
        image: "dadaism.png",
        question: 'Which art style is best represented by this image?',
        answers: [
            { text: 'Dadaism', correct: true },
            { text: 'Elongation', correct: false },
            { text: 'Fauvism', correct: false },
            { text: 'Symbolism', correct: false }
        ]
    },
    {
        image: "elongation.png",
        question: 'Which art style is best represented by this image?',
        answers: [
            { text: 'Elongation', correct: true },
            { text: 'Abstraction', correct: false },
            { text: 'Cubism', correct: false },
            { text: 'Futurism', correct: false }
        ]
    },
    {
        image: "fauvism.png",
        question: 'Which art style is best represented by this image?',
        answers: [
            { text: 'Fauvism', correct: true },
            { text: 'Dadaism', correct: false },
            { text: 'Symbolism', correct: false },
            { text: 'Mangling', correct: false }
        ]
    },
    {
        image: "futurism.png",
        question: 'Which art style is best represented by this image?',
        answers: [
            { text: 'Futurism', correct: true },
            { text: 'Cubism', correct: false },
            { text: 'Abstraction', correct: false },
            { text: 'Elongation', correct: false }
        ]
    },
    {
        image: "mangling.png",
        question: 'Which art style is best represented by this image?',
        answers: [
            { text: 'Mangling', correct: true },
            { text: 'Fauvism', correct: false },
            { text: 'Dadaism', correct: false },
            { text: 'Symbolism', correct: false }
        ]
    },
    {
        image: "symbolism.png",
        question: 'Which art style is best represented by this image?',
        answers: [
            { text: 'Symbolism', correct: true },
            { text: 'Futurism', correct: false },
            { text: 'Cubism', correct: false },
            { text: 'Abstraction', correct: false }
        ]
    },
    {
        image: "realism.png",
        question: 'Which art style is best represented by this image?',
        answers: [
            { text: 'Realism', correct: true },
            { text: 'Abstraction', correct: false },
            { text: 'Dadaism', correct: false },
            { text: 'Symbolism', correct: false }
        ]
    },
    {
        image: "naturalism.png",
        question: 'Which art style is best represented by this image?',
        answers: [
            { text: 'Naturalism', correct: true },
            { text: 'Impressionism', correct: false },
            { text: 'Mangling', correct: false },
            { text: 'Fauvism', correct: false }
        ]
    }
];

// --- Combined Quiz: Text and Image Questions ---

const combinedQuestions = [
    // Text-based questions
    ...questions,
    // Image-based questions
    {
        image: "abstraction.png",
        question: 'Which art style is best represented by this image?',
        answers: [
            { text: 'Abstraction', correct: true },
            { text: 'Cubism', correct: false },
            { text: 'Fauvism', correct: false },
            { text: 'Symbolism', correct: false }
        ]
    },
    {
        image: "cubism.png",
        question: 'Which art style is best represented by this image?',
        answers: [
            { text: 'Cubism', correct: true },
            { text: 'Dadaism', correct: false },
            { text: 'Futurism', correct: false },
            { text: 'Mangling', correct: false }
        ]
    },
    {
        image: "dadaism.png",
        question: 'Which art style is best represented by this image?',
        answers: [
            { text: 'Dadaism', correct: true },
            { text: 'Elongation', correct: false },
            { text: 'Fauvism', correct: false },
            { text: 'Symbolism', correct: false }
        ]
    },
    {
        image: "elongation.png",
        question: 'Which art style is best represented by this image?',
        answers: [
            { text: 'Elongation', correct: true },
            { text: 'Abstraction', correct: false },
            { text: 'Cubism', correct: false },
            { text: 'Futurism', correct: false }
        ]
    },
    {
        image: "fauvism.png",
        question: 'Which art style is best represented by this image?',
        answers: [
            { text: 'Fauvism', correct: true },
            { text: 'Dadaism', correct: false },
            { text: 'Symbolism', correct: false },
            { text: 'Mangling', correct: false }
        ]
    },
    {
        image: "futurism.png",
        question: 'Which art style is best represented by this image?',
        answers: [
            { text: 'Futurism', correct: true },
            { text: 'Cubism', correct: false },
            { text: 'Abstraction', correct: false },
            { text: 'Elongation', correct: false }
        ]
    },
    {
        image: "mangling.png",
        question: 'Which art style is best represented by this image?',
        answers: [
            { text: 'Mangling', correct: true },
            { text: 'Fauvism', correct: false },
            { text: 'Dadaism', correct: false },
            { text: 'Symbolism', correct: false }
        ]
    },
    {
        image: "symbolism.png",
        question: 'Which art style is best represented by this image?',
        answers: [
            { text: 'Symbolism', correct: true },
            { text: 'Futurism', correct: false },
            { text: 'Cubism', correct: false },
            { text: 'Abstraction', correct: false }
        ]
    },
    {
        image: "realism1.png",
        question: 'Which art style is best represented by this image?',
        answers: [
            { text: 'Realism', correct: true },
            { text: 'Impressionism', correct: false },
            { text: 'Fauvism', correct: false },
            { text: 'Cubism', correct: false }
        ]
    },
    {
        image: "realism2.png",
        question: 'Which art style is best represented by this image?',
        answers: [
            { text: 'Realism', correct: true },
            { text: 'Abstraction', correct: false },
            { text: 'Dadaism', correct: false },
            { text: 'Symbolism', correct: false }
        ]
    },
    {
        image: "naturalism1.png",
        question: 'Which art style is best represented by this image?',
        answers: [
            { text: 'Naturalism', correct: true },
            { text: 'Realism', correct: false },
            { text: 'Cubism', correct: false },
            { text: 'Futurism', correct: false }
        ]
    },
    {
        image: "naturalism2.png",
        question: 'Which art style is best represented by this image?',
        answers: [
            { text: 'Naturalism', correct: true },
            { text: 'Impressionism', correct: false },
            { text: 'Mangling', correct: false },
            { text: 'Fauvism', correct: false }
        ]
    }
];

// All possible categories to use as decoys
const categories = ["Religion", "Nature", "Legend", "History", "People"];

let shuffledQuestions, currentQuestionIndex;

const questionElement = document.getElementById('question-text');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const scoreText = document.getElementById('score-text');
const quizContent = document.getElementById('question-header');
const totalQuestionsElement = document.getElementById('total-questions');
const currentQuestionElement = document.getElementById('current-question');
const totalQuestionElement = document.getElementById('total-question');

// Start Quiz
function startQuiz() {
    // Shuffles the questions array
    shuffledQuestions = combinedQuestions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    if (totalQuestionsElement) totalQuestionsElement.textContent = combinedQuestions.length;
    if (totalQuestionElement) totalQuestionElement.textContent = combinedQuestions.length;
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    // Remove previous image if any
    const prevImg = document.getElementById('question-image');
    if (prevImg) prevImg.remove();
    // Show image if available
    if (question.image) {
        const img = document.createElement('img');
        img.src = question.image;
        img.alt = 'Question related image';
        img.id = 'question-image';
        img.style.display = 'block';
        img.style.maxWidth = '220px';
        img.style.maxHeight = '160px';
        img.style.margin = '0.5rem auto 1rem auto';
        img.style.borderRadius = '12px';
        img.style.boxShadow = '0 4px 16px rgba(80,120,200,0.13)';
        img.style.objectFit = 'cover';
        img.style.background = '#fff';
        questionElement.parentNode.insertBefore(img, questionElement);
    }
    questionElement.textContent = question.question;
    answerButtonsElement.innerHTML = '';
    // Shuffle choices for each question
    const shuffledAnswers = question.answers.slice().sort(() => Math.random() - 0.5);
    shuffledAnswers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
    if (currentQuestionElement) currentQuestionElement.textContent = currentQuestionIndex + 1;
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
        score++;
        selectedButton.classList.add('correct');
    } else {
        selectedButton.classList.add('wrong');
    }
    // Disable all buttons after choice
    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
        if(button.dataset.correct === "true") button.classList.add('correct');
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    nextButton.classList.add('hide');
    showQuestion(shuffledQuestions[currentQuestionIndex]);
});

function showScore() {
    quizContent.classList.add('hide');
    nextButton.classList.add('hide');
    resultContainer.classList.remove('hide');
    scoreText.innerText = `You scored ${score} out of ${combinedQuestions.length}!`;
}

startQuiz();
