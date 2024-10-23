var zSign = "Aries";
var bMonth = "April";
var bDay = 19;
var lNumber = 12.0;
var horoDesc = "Aries usually takes the leading role";
var believe = false;

var mRatingAries = 7;
var mRatingSagi = 8;
var mRatingLibra = 5;






var sign = document.getElementById('sign');
sign.innerHTML = zSign;

var birthday = document.getElementsByClassName('birthday');
birthday[0].innerHTML+=bMonth;

var luckyNum = document.getElementsByClassName('luckyNum');
luckyNum[0].innerHTML+=lNumber;

var paragraph = document.getElementsByTagName("p");
paragraph[0].innerHTML=horoDesc;
paragraph[1].innerHTML+=believe;

var mAvg = (mRatingAries + mRatingLibra + mRatingSagi)/3;
paragraph[2].innerHTML="The average of all our moods is: "+mAvg;

var signs = ["Aries", "Libra", "Sagittarius"];
var sAvery = signs[0];
var sRosalinda = signs[1];
var sHarry = signs[2];

paragraph[3].innerHTML="Avery's sign is: "+sAvery;
paragraph[4].innerHTML="Rosalinda's sign is: "+sRosalinda;
paragraph[5].innerHTML="Harry's sign is: "+sHarry;

var hDesc = ["Today is a day for new beginnings. Embrace change and seize opportunities.", "Your determination will lead to success today. Stay focused on your goals.", "Communication is key today. Express yourself clearly and listen to others.", "Trust your intuition. It will guide you in making the right decisions.", "Your creativity shines today. Use it to inspire and lead others.", "Pay attention to the details. Your meticulous work will pay off.", "Balance is essential. Find harmony in all aspects of your life.", "Embrace transformation. Let go of what no longer serves you.","Embrace transformation. Let go of what no longer serves you.", "Hard work leads to success. Keep pushing toward your goals.", "Your unique perspective is an asset. Share your ideas with others.", "Trust your emotions. They will guide you in making the right choices."];
var dAries = hDesc[3];
var dLibra = hDesc[6];
var dSagi = hDesc[9];
hDesc[2]="I have changed this element";

paragraph[3].innerHTML+=". "+dAries;
paragraph[4].innerHTML+=". "+dLibra;
paragraph[5].innerHTML+=". "+dSagi;