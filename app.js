'use strict';

//  ask user their name
function userName(){
  var userName = prompt('Hi! What\'s your name?');
  if (userName) {
    alert('Excellent meeting you, ' + userName + '. Let\'s play a game about ME!');
    console.log('When asked their name, the user responded with ' + userName);
  } else {
    alert('Howdy, stranger! Let\'s play a game about ME!');
    console.log('When asked their name, the user did not enter anything into the prompt');
  }
}
userName();

var score = 0;

//  ask user five yes or no questions about me
//  Question 1
function hometown(){
  var hometown = prompt('YES or NO: Did I grow up in Chicago?');
  if (hometown.toUpperCase() === 'YES' || hometown.toUpperCase() === 'Y') {
    alert ('Sorry, incorrect! While I lived in Chicago for 5 years, I grew up in Puyallup!');
    console.log('When asked if I grew up in Chicago, the user answered incorrectly "YES"');
  } else if (hometown.toUpperCase() === 'NO' || hometown.toUpperCase() === 'N'){
    alert('Correct! While I lived in Chicago for 5 years, I grew up in Puyallup!');
    console.log('When asked if I grew up in Chicago, the user answered correctly "NO"');
    score++;
  } else {
    alert ('I don\'t know what you mean, but - while I lived in Chicago for 5 years - I grew up in Puyallup!');
    console.log('When asked if I grew up in Chicago, the user entered unrecognized input.');
  }
}
hometown();

//  Question 2
function favAnimal() {
  var favAnimal = prompt('YES or NO: Is my favorite animal a wombat?');
  if (favAnimal.toUpperCase() === 'YES' || favAnimal.toUpperCase() === 'Y') {
    alert ('Correct! It is very hard to choose as I love all animals, but I find the wombat especially adorable. I was lucky to see several while in Australia!');
    console.log('When asked if my favorite animal is a wombat, the user answered correctly "YES"');
    score++;
  } else if (favAnimal.toUpperCase() === 'NO' || favAnimal.toUpperCase() === 'N') {
    alert ('Sorry, incorrect! It is very hard to choose as I love all animals, but I find the wombat especially adorable. I was lucky to see several while in Australia!');
    console.log('When asked if my favorite animal is a wombat, the user answered incorrectly "NO"');
  } else {
    alert('I don\'t know what you mean! It is very hard to choose as I love all animals, but I find the wombat especially adorable. I was lucky to see several while in Australia!');
    console.log('When asked if my favorite animal is a wombat, the user entered unrecognized input.');
  }
}
favAnimal();

//  Question 3
function favFood() {
  var favFood = prompt('YES or NO: Is my favorite food cauliflower?');
  if (favFood.toUpperCase() === 'YES' || favFood.toUpperCase() === 'Y') {
    alert('Correct! I love experimenting with recreating childhood favorite baked goods with vegan ingredients, but I could eat roasted cauliflower every day!');
    console.log('When asked if my favorite food is cauliflower, the user answered correctly "YES"');
    score++;
  } else if (favFood.toUpperCase() === 'NO' || favFood.toUpperCase() === 'N') {
    alert('Sorry, incorrect! I love experimenting with recreating childhood favorite baked goods with vegan ingredients, but I could eat roasted cauliflower every day!');
    console.log('When asked if my favorite food is cauliflower, the user answered incorrectly "NO"');
  } else {
    alert('I don\'t know what you mean! I love experimenting with recreating childhood favorite baked goods with vegan ingredients, but I could eat roasted cauliflower every day!');
    console.log('When asked if my favorite food is cauliflower, the user entered unrecognized input.');
  }
}
favFood();

//  Question 4
function firstJob() {
  var firstJob = prompt('YES or NO: Was my first job at a fast food chain?');
  if (firstJob.toUpperCase() === 'YES' || firstJob.toUpperCase() === 'Y') {
    alert('Sorry, incorrect! My first job as a teenager was working at the local library! I had grown up visiting at least once a week, so getting paid to be surrounded by books felt like a dream!');
    console.log('When asked if my first job was at a fast food chain, the user answered incorrectly "YES"');
  } else if (firstJob.toUpperCase() === 'NO' || firstJob.toUpperCase() === 'N') {
    alert('Correct! My first job as a teenager was working at the local library! I had grown up visiting at least once a week, so getting paid to be surrounded by books felt like a dream!');
    console.log('When asked if my first job was at a fast food chain, the user answered correctly "NO"');
    score++;
  } else {
    alert('I don\'t know what you mean! My first job as a teenager was working at the local library! I had grown up visiting at least once a week, so getting paid to be surrounded by books felt like a dream!');
    console.log('When asked if my first job was at a fast food chain, the user entered unrecognized input.');
  }
}
firstJob();
//  Question 5
function bungalow() {
  var bungalow = prompt('YES or NO: My favorite style of architecture is American Craftsman.');
  if (bungalow.toUpperCase() === 'YES' || bungalow.toUpperCase() === 'Y'){
    alert('Sorry, incorrect! While I am currently in the process of restoring a Craftsman Bungalow and can definitely see its architectural merits, I still prefer midcentury modern!');
  } else if (bungalow.toUpperCase() === 'NO' || bungalow.toUpperCase() === 'N') {
    alert('Correct! While I am currently in the process of restoring a Craftsman Bungalow and can definitely see its architectural merits, I still prefer midcentury modern!');
    score++;
  } else {
    alert('I don\'t know what you mean! While I am currently in the process of restoring a Craftsman Bungalow and can definitely see its architectural merits, I still prefer midcentury modern!');
  }
}
bungalow();

 //Question 6
function secretNumber() {
  var numberGuesses = 4;
  var secretNumber = 5;

  while (numberGuesses > 0) {
    var yourGuess = parseInt(prompt('What\'s my favorite number?'));
    if (yourGuess === secretNumber) {
      alert('Correct! That is my favorite number!');
      numberGuesses = -1;
      score++;
    } else if (yourGuess > secretNumber) {
      numberGuesses--;
      alert('Your number is too high! You have ' + numberGuesses + ' guesses left.');
    } else if (yourGuess < secretNumber) {
      numberGuesses--;
      alert('Too low. You have ' + numberGuesses + ' guesses left.');
    } if (counter === 0) {
      alert('Sorry, you are out of guesses. My favorite number is 5.');
    }
  }
}
secretNumber();

//Question 7

function placesLived() {
  var placesLived = ['PUYALLUP', 'TACOMA', 'CHICAGO', 'PORTLAND', 'BERLIN'];
  var tries = 6;

  while (tries > 0) {
    var yourGuess = prompt('I\'ve lived in five cities - name one!').toUpperCase();
    tries--;
    for (var i = 0; i < placesLived.length; i++) {
      if (placesLived[i] === yourGuess) {
        alert('Correct, I\'ve lived in Puyallup, Tacoma, Chicago, Portland, and Berlin!');
        var tries = -1;
        i = placesLived.length;
        score++;
      }
    }
    if (tries > 0) {
      alert('Wrong! You have ' + tries + ' guesses left!');
    } if (tries === 0){
      alert ('Sorry, you\'re out of guesses! I\'ve lived in Puyallup, Tacoma, Chicago, Portland, and Berlin!');
    }
  }
}
placesLived();

alert('Thanks for playing, ' + userName + '! You got ' + score + ' out of 7 answers correct!');
