const words = [
    "Hello",
    "echo",
    "Abi",
    "sibling",
    "laughter",
    "defination",
    "magic",
    "crazy",
    "vawulence",
    "sapa",
    "Agbagdo",
    "twitter",
    "savage",
    "Wetin",
    "Crash ",
    "pidgin",
    "Coror",
    "Corofo",
    "Awoof",
    "Pem",
    "Shele",
    "KporKpor",
    "Denge",
    "Chickito",
    "Awa",
    "Walensh",
    "Soja",
    "Dundi",
    "Dishi",
    "Dros",
    "Dudu",
    "Chassis",
    "Yarnsh",
    "Bakassi",
    "Lashing",
    "Baff",
    "Bale ",
    "Belle",
    "Cabash",
    "Atachee",
    "Aproko",
    "Waka",
    "Yanga",
    "Tuama",
    "Manya",
    "Shenkiz",
    "Demor",
    "Gbege",
    "gbamsolutely",
    "Fabu",
    "Kolo",
    "Yan",
    "crash",
    "skeroo",
    "Nawa",
    "Vamoose",
    "Oya",
    "Abegi",
    "Honorificabilitudinitatibus",
    "Dichlorodifluoromethane",
    "Incomprehensibilities",
    "Onomatopoeia",
    "Sesquipedalian",
    "Anachronistic",
    "Ascetic",
    "Abnegation",
    "Archetypal",
    "Circumlocution",
    "Cognizant",
    "Demagogue",
    "Denigrate",
    "Egregious",
    "Embezzlement",
    "Ephemeral",
    "Equanimity",
    "Licentious",
    "Libertarian",
    "Sanctimonious",
    "Vicissitude",
    "Vociferous",
    "Recalcitrant",
    "Promulgate",
    "Quotidian",
    "Solipsism",
    "pragmatic",
    "sensible",
    "manner",
    "approch",
    "Voila",
    "traversty",
    "Ostracism",
    "Pejorative",
    "Pertinacious",
    "Multifarious",
    "interruptions",
    "Iconoclast",
    "Inveterate",
    "Fatuous ",
    "Equanimity",
    "Ephemeral",
    "Umbrella",
    "Academy",
    "eclectic"
];


const currentWord = document.querySelector("#curr-word");
const timeCount = document.querySelector("#time");
const errorMessage = document.querySelector("#error-message");
const wordInput = document.querySelector("#word-input");
const timeLeft = document.querySelector("#time-left");
const finalScore = document.querySelector("#score");
let restartGame = document.querySelector("#restart");

const level ={
    easy: 10,
    medium: 5,
    hard: 2,
}
let currrentLevel = level.easy
let time = currrentLevel;
score = 0;
let playing;


function getRandomWords() {
    let rand = Math.floor(words.length * Math.random());
    currentWord.innerText = `${words[rand]}`;

}
function timing() {
    if( time > 0) {
        time--;
    }
    else if (time === 0) {
        playing = false
    }
    timeLeft.innerText = `${time}`;
}




function matchInput() {
    if (wordInput.value === currentWord.innerText) {
        errorMessage.innerText = `Correct`;
        errorMessage.classList.remove("incorrect");
        setTimeout(() => {
            errorMessage.innerText = "";
        }, 1000);
        playing = true;
        time = currrentLevel + 1;
        getRandomWords();
        wordInput.value = ``;
        score++;
        finalScore.innerText = `${score}`;
    }
    else {
        errorMessage.innerText = `incorrect`;
        errorMessage.classList.add("incorrect");
        setTimeout(() => {
            errorMessage.innerText = "";
        }, 1000);
        //playing = false;
    }
}
function checkgameStatus() {
    if (!playing && time === 0) {
        errorMessage.innerText = "game over";
        errorMessage.classList.add("gameover");
        wordInput.value = ``;
        restartGame.style.display = "block";
        restartGame.addEventListener("click", () => { 
            time = currrentLevel + 1;
            getRandomWords();
            wordInput.value = ``;
            score++;
            finalScore.innerText = `${score}`;
            errorMessage.innerText = ``;
            errorMessage.classList.remove("gameover");
            restartGame.style.display ="none"
        })

    }
    // else {
    //     console.log(wordInput.value);
    // }
}


const debounce = (fn, delay = 1000) => {
    let timeoutId;
    return (...args) => {
        //cancel old timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        //setup new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    }

}
function initialize() {
    timeCount.innerText = `${time}` 
    getRandomWords();
    wordInput.addEventListener("input", debounce(matchInput));
    setInterval(timing, 1000);
    setInterval(checkgameStatus, 50);
}
 
let start = document.querySelector("#start-game");
let game = document.querySelector(".game");
let instructions = document.querySelector(".instruction");

start.addEventListener("click", () => {
    game.style.display = "block";
    instructions.style.display = "none";
    initialize();
});



