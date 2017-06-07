//User Name
var userName = prompt('Hi! What\'s your name?');
  if (userName) {alert('Excellent meeting you, ' + userName + '. Let\'s play a game about ME!');
  console.log('When asked their name, the user responded with ' + userName);
} else {
  alert('Howdy, stranger! Let\'s play a game about ME!');
  console.log('When asked their name, the user did not enter anything into the prompt');
}

var score = 0;

//Question 1
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

//Question 2
var favAnimal = prompt('YES or NO: Is my favorite animal a wombat?');
  if (favAnimal.toUpperCase() === 'YES' || favAnimal.toUpperCase() === 'Y') {
    alert ('Correct! It is very hard to choose as I love all animals, but I find the wombat especially adorable. I was lucky to see several while in Australia!');
    score++;
  } else if (favAnimal.toUpperCase() === 'NO' || favAnimal.toUpperCase() === 'N') {
    alert ('Sorry, incorrect! It is very hard to choose as I love all animals, I find the wombat especially adorable. I was lucky to see several while in Australia!');
  } else {
    alert('I don\'t know what you mean! It is very hard to choose as I love all animals, but I find the wombat especially adorable. I was lucky to see several while in Australia!');
  }

//Question 3
  var favFood = prompt('YES or NO: Is my favorite food cauliflower?');
    if (favFood.toUpperCase() === 'YES' || favFood.toUpperCase() === 'Y') {
      alert('Correct! I love experimenting with recreating childhood favorite baked goods with vegan ingredients, but I could eat roasted cauliflower every day!');
      score++;
    } else if (favFood.toUpperCase() === 'NO' || favFood.toUpperCase() === 'N') {
      alert('Sorry, incorrect! I love experimenting with recreating childhood favorite baked goods with vegan ingredients, but I could eat roasted cauliflower every day!');
    } else {
      alert('I don\'t know what you mean! I love experimenting with recreating childhood favorite baked goods with vegan ingredients, but I could eat roasted cauliflower every day!');
    }

//Question 4
var firstJob = prompt('YES or NO: Was my first job working at a fast food chain?');
  if (firstJob.toUpperCase() === 'YES' || firstJob.toUpperCase() === 'Y') {
    alert('Sorry, incorrect! My first job as a teenager was working at the local library! I had grown up visiting at least once a week, so getting paid to be surrounded by books felt like a dream!');
  } else if (firstJob.toUpperCase() === 'NO' || firstJob.toUpperCase() === 'N') {
    alert('Correct! My first job as a teenager was working at the local library! I had grown up visiting at least once a week, so getting paid to be surrounded by books felt like a dream!');
    score++;
  } else {
    alert('I don\'t know what you mean! My first job as a teenager was working at the local library! I had grown up visiting at least once a week, so getting paid to be surrounded by books felt like a dream!');
  }

//Question 5

var whatever = prompt('YES or NO: ....');
  if (whatever.toUpperCase() === 'YES' || whatever.toUpperCase() === 'Y'){
    alert('');
  } else if (whatever.toUpperCase() === 'NO' || whatever.toUpperCase() === 'N') {
    alert('');
    score++;
  } else {
    alert('I don\'t know waht you mean!');
  }

  alert('You answered ' + score + '/5 questions correctly!');
