
var word = ['watermelon', 'mango', 'melon', 'plum', 'grape', 'lemon', 'lime', 'jackfruit'];
var randNum = Math.floor(Math.random() * word.length);
var choosenWord = word[randNum];
var underScore = [];
var rightWord=  [];
var wrongWord = [];
var lives = [];


var showLives = document.getElementById("myLives");

var docUnderScore = document.getElementsByClassName('underscore');
var docRightGuess = document.getElementsByClassName('rightGuess');
var docWrongGuess = document.getElementsByClassName('wrongGuess');


var generateUnderscore = () => {
    for (var i=0; i < choosenWord.length; i++){
        underScore.push('_');
        
    }
    return underScore;    
}



document.addEventListener("keypress", (event) => {
   
    var keyword = String.fromCharCode(event.keyCode);
    
    if(choosenWord.indexOf(keyword) > -1) {
    
        rightWord.push(keyword);

        underScore[choosenWord.indexOf(keyword)] = keyword;
        docUnderScore[0].innerHTML = underScore.join('');
        docRightGuess[0].innerHTML = rightWord;
        if(underScore.join('') == choosenWord){
            alert('you win');
    }
    }else{
        wrongWord.push(keyword);
        docWrongGuess[0].innerHTML = wrongWord;
    }
    
});

comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < choosenWord.length; i++) {
      if (counter + space === rightWord.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }

