//This is a script used to show a phrase's details on the website.
//example: region, popularity

var wordName = "Backstube"
var region = "Southern Germany"
var popularity = 8;
var complexity = 2;
var engTranslation = "Bakery"

var introduction = "This webpage will be a template for the future pages that will host phrase or slang definitions and information."

//math will be a personalized complexity. input your skill and it will spit out how complex it will be for you.

var title = document.querySelector('.title');
title.textContent = 'Slang definition';
//this is the title that you see in the tab

var introClass = document.getElementsByClassName('intro');
introClass[0].innerHTML = introduction;

var slang = document.getElementById('slang');
slang.innerHTML = wordName;

var p = document.getElementsByTagName("p");
p[1].innerHTML += engTranslation;
p[2].innerHTML += region;
p[3].innerHTML += popularity;
p[4].innerHTML += complexity;



//here is the function that evaluates personal difficulty
function evaluateDifficulty() {
    var languageSkill = document.querySelector('#languageSkill').value;
    
    languageSkill = Number(languageSkill);

    if (languageSkill >= 1 && languageSkill <= 10) {
        var personalDifficulty = complexity / languageSkill;
        var difficulty;

        //if your skill is twice the complexity value, then its really easy.
        //if it is equal, it would be easyish
        //less than, moderate to difficult
        if (personalDifficulty <= 0.5) {
            difficulty = 'Very Easy';
        } else if (personalDifficulty <= 1) {
            difficulty = 'Easy';
        } else if (personalDifficulty <= 2) {
            difficulty = 'Moderate';
        } else {
            difficulty = 'Difficult';
        }

        document.querySelector('#result').textContent = "Learning this slang would be: " + difficulty;
    } 
}