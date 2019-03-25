document.getElementById("page").style.display = "none";
document.getElementById("reveal").style.display = "none";
var hide = document.getElementById("category");
hide.style.display = "none";

function hint() {
document.getElementById("hint_1").innerHTML = "<strong>Hint:</strong> Female. Half human.";
}

function play() {
document.body.style.backgroundColor = "#F79D84"
document.getElementById("wheel").style.display = "none";
document.getElementById("logo").style.display = "none";
document.getElementById("btnplay").style.display = "none";
document.getElementById("rules").style.display = "none";
document.getElementById("cat").style.display = "none";
document.getElementById("page").style.display = "block";

start();
}

function start() {
var name = "ursula";
var blankWord = []; //empty array

var letter;
var prize = 0;
var deduct;
var attempts = 6;

for (var i = 0; i < name.length; i++) {
  blankWord[i] = "_";

  while (attempts > 0) {

letter = prompt("Enter a letter: ");

for (var i = 0; i < name.length; i++) {
	if (letter == name[i])
    {
	blankWord[i] = name[i];
    document.getElementById("letter_"+ i).innerHTML = blankWord[i];

    prize += (Math.floor((Math.random() * 100) + 1)) * 10;
    alert("Yay! You have now earned a total of $" + prize); //if there are reoccuring letters in word, alert will show up as many times as there are those letters
    document.getElementById("prizemoney").innerHTML = "Prize Money: $"+prize;
    }
}

attempts--;

}



blankWord = blankWord.join('');
//document.write(blankWord);
if (blankWord == name) {
//alert("YOU WON!");
document.getElementById("prizemoney").innerHTML = "CONGRATS! YOU WIN $"+ prize + "!";
    }
else
document.getElementById("prizemoney").innerHTML = "YOU DID NOT WIN! :(";

hide.style.display = "block";
}

}
