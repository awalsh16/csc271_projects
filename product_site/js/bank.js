//make a script that follows a decision tree
//What is your language proficiency
//1 or higher
//if 1 to 3, 'backstube'
//if higher, 4 to 7 or higher
//if 4 to 6, 'krass' or higher
//if higher, 7 to 8 or higher
//if 7 to 8, 'doch'
//if higher, 'halt'


function determineSlang(proficiency) {
    if (proficiency >= 1) {
        if (proficiency >= 1 && proficiency < 4) {
            return 'backstube';
        } else if (proficiency >= 4) {
            if (proficiency >= 4  && proficiency < 7) {
                return 'krass';
            } else if (proficiency >= 7) {
                if (proficiency >= 7  && proficiency < 9) {
                    return 'doch';
                } else if (proficiency > 8 && proficiency < 11) {
                    return 'halt';
                }
            }
        }
    }
    //if the number is less than 1 or higher than 10, then error
    return "Please enter a proficiency level between 1 to 10";
}

function showSlang() {
    var proficiency = parseInt(document.getElementById('proficiencyInput').value);
    var slang = determineSlang(proficiency);
    document.getElementById('result').textContent = slang;
}

function displaySlangs() {
    const slangs = ['backstube', 'krass', 'doch', 'halt'];
    let content = "<ul>";
    
    //using a for loop to show the words from the slang array
    for (let i = 0; i < slangs.length; i++) {
        content += `<li>${slangs[i]}</li>`;
    }
    content += "</ul>";

    document.getElementById('slangList').innerHTML = content;
}



//event handler
document.addEventListener('DOMContentLoaded', function() {
    link = document.querySelectorAll('.wiggle-link');

    link.forEach(function(link) {
        //the mouseover and mouseout are the element nodes that the program is responding to
        //and the function is made right there
        link.addEventListener('mouseover', function() {this.classList.add('wiggling');});
        link.addEventListener('mouseout', function() {this.classList.remove('wiggling');});
    });
});



document.addEventListener('DOMContentLoaded', function() {

    displaySlangs();
    inputField = document.getElementById('proficiencyInput');
    form = document.getElementById('proficiencyForm');
  
    // focus
    inputField.addEventListener('focus', function() {
      document.getElementById('result').textContent = "Input must be a number between 1 and 10.";
    });
  
    // blur
    inputField.addEventListener('blur', function() {
      value = parseInt(inputField.value);

      if (isNaN(value) || value < 1 || value > 10) {
        document.getElementById('result').textContent = "Please enter a valid number between 1 and 10.";
      } else {
        document.getElementById('result').textContent = "";  //if the input is valid, clear the field
      }
    });
  
    // submission
    form.addEventListener('submit', function(event) {
      event.preventDefault();  //stop the form from submitting normally
      value = parseInt(inputField.value);

      if (!isNaN(value) && value >= 1 && value <= 10) {
        document.getElementById('result').textContent = "Response succesfully recorded.";
      } else {
        document.getElementById('result').textContent = "Please enter a valid number between 1 and 10 before submitting.";
      }
    });
  });
  
