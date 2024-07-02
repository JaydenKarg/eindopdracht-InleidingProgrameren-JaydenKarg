console.log("Scramble Game");

const wordText = document.querySelector(".word");
const hintText = document.querySelector(".hint span");
const inputField = document.querySelector("input");
const buttonElN = document.querySelector(".nieuw-woord");
const controlBt = document.querySelector(".controleer-woord");

const words = [
    "APPEL", 
    "BOEKEN", 
    "TAFEL", 
    "PEN", 
    "HOND", 
    "KOFFIE", 
    "ZON", 
    "MUZIEK", 
    "FIETS", 
    "REGEN"
];

const hints = [
    "Een fruitsoort dat vaak rood of groen is.",
    "Dingen die je leest.",
    "Een meubelstuk om dingen op te leggen.",
    "Gebruikt om te schrijven.",
    "Een huisdier dat vaak kwispelt met zijn staart.",
    "Een warme drank gemaakt van bonen.",
    "Een grote ster in ons zonnestelsel.",
    "Geluid dat je hoort.",
    "Een voertuig met twee wielen.",
    "Water dat uit de lucht valt."
];

let currentWord = "";

const Game = () => {
    let randomIndex = Math.floor(Math.random() * words.length); // willekeurige index voor woorden en hints
    currentWord = words[randomIndex]; // selecteert een random woord
    let wordArray = currentWord.split(""); // split het woord in letters
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        // shuffle en switcht wordArray letters random
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join(""); // het gecodeerde woord weergeven
    hintText.innerText = hints[randomIndex]; // de bijbehorende hint weergeven
    inputField.value = ''; // maak het inputfield leeg
    console.log(wordArray);
    console.log(currentWord);
};
//bovenste code is van: www.chatgpt.nl 
const checkIfCorrect = () => {
    if (inputField.value.toUpperCase() === currentWord) { //bronvermelding: geholpen door een mede student
        alert("Gefeliciteerd! Je hebt het woord goed geraden!");
    } else {
        alert("Helaas, probeer het nog eens.");
    }
};

buttonElN.addEventListener("click", Game);
controlBt.addEventListener("click", checkIfCorrect);

Game(); // Voeg het spel toe als de pagina wordt geladen



