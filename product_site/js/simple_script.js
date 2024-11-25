//This is a script used to show a phrase's details on the website.
function word(name, translation, language, region, difficulty) {
    this.name = name;
    this.translation = translation;
    this.language = language;
    this.region = region;
    this.difficulty = difficulty;

    this.changeRegion = function(newRegion){
        this.region = newRegion;
    };

    this.evaluateDifficulty = function(languageSkill){
        
        languageSkill = Number(languageSkill);
    
        if (languageSkill >= 1 && languageSkill <= 10) {
            var personalDifficulty = this.difficulty / languageSkill;
            var difficultyString;
    
            //if your skill is twice the difficulty value, then its really easy.
            //if it is equal, it would be easyish
            //less than, moderate to difficult
            if (personalDifficulty <= 0.5) {
                difficultyString = 'Very Easy';
            } else if (personalDifficulty <= 1) {
                difficultyString = 'Easy';
            } else if (personalDifficulty <= 2) {
                difficultyString = 'Moderate';
            } else {
                difficultyString = 'Difficult';
            }
    
            document.querySelector('#result').textContent = "Learning this slang would be: " + difficultyString;
        } else {
            document.querySelector('#result').textContent = "Please enter a valid skill level (1-10).";
            return "Invalid skill level.";  // This will inform the caller of an invalid input.
        }
    }
    
    
}
function wordInfo(name, translation, language, region, difficulty) {
    console.log("Name: " + name);
    console.log("Translation: " + translation);
    console.log("Language: " + language);
    console.log("Region: " + region);
    console.log("Difficulty: " + difficulty);
}
var backstube = new word("Backstube", "Bakery", "German", "Southern Germany", 2);

wordInfo(
    backstube.name,
    backstube.translation,
    backstube.language,
    backstube.region,
    backstube.difficulty,
)

var krass = new word("Krass", "Awesome", "German", "Germany", 4);

wordInfo(
    krass.name,
    krass.translation,
    krass.language,
    krass.region,
    krass.difficulty,
)


//set initial word
var currWord = backstube;

//function to change the current word
function swapWord(){
    if(currWord == krass){
        currWord = backstube;
    } else {
        currWord = krass;
    }
    updateUI();
}




var introduction = "This webpage will be a template for the future pages that will host phrase or slang definitions and information."

//math will be a personalized complexity. input your skill and it will spit out how complex it will be for you.

var title = document.querySelector('.title');
title.textContent = 'Slang definition';
//this is the title that you see in the tab

var introClass = document.getElementsByClassName('intro');
introClass[0].innerHTML = introduction;


function updateUI(){
    var slang = document.getElementById('slang');
    slang.innerHTML = currWord.name;

    var p = document.getElementsByTagName("p");
    p[1].innerHTML = "Translation: " + currWord.translation;
    p[2].innerHTML = "Region: " + currWord.region;
    p[3].innerHTML = "Difficulty: " + currWord.difficulty;
}


//function to be used when button is clicked
function checkDifficulty() {
    var languageSkill = document.getElementById('languageSkill').value;
    currWord.evaluateDifficulty(languageSkill);
}

updateUI()

