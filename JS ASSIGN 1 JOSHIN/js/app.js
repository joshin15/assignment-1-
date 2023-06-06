// Variables
var synth = window.speechSynthesis;
var textToSpeak = '';
var speakButton = document.querySelector('#speakButton');
var subjectButton = document.querySelector('#subjectButton');
var verbButton = document.querySelector('#verbButton');
var adjectiveButton = document.querySelector('#adjectiveButton');
var objectButton = document.querySelector('#objectButton');
var placeButton = document.querySelector('#placeButton');
var storyText = document.querySelector('#storyText');

// Arrays for random word generation
var subjects = ['The cat', 'The dog', 'The bird', 'The rabbit', 'The turtle'];
var verbs = ['ate', 'ran', 'flew', 'hopped', 'swam'];
var adjectives = ['beautiful', 'funny', 'smart', 'brave', 'happy'];
var objects = ['the ball', 'the toy', 'the bone', 'the stick', 'the feather'];
var places = ['in the park', 'at home', 'in the forest', 'by the river', 'on the mountain'];

// Functions
function getRandomWord(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function speakNow(string) {
  var utterThis = new SpeechSynthesisUtterance(string);
  synth.speak(utterThis);
}

// Event Listeners
subjectButton.addEventListener('click', function() {
  var subject = getRandomWord(subjects);
  textToSpeak += subject + ' ';
  storyText.textContent += subject + ' ';
});

verbButton.addEventListener('click', function() {
  var verb = getRandomWord(verbs);
  textToSpeak += verb + ' ';
  storyText.textContent += verb + ' ';
});

adjectiveButton.addEventListener('click', function() {
  var adjective = getRandomWord(adjectives);
  textToSpeak += adjective + ' ';
  storyText.textContent += adjective + ' ';
});

objectButton.addEventListener('click', function() {
  var object = getRandomWord(objects);
  textToSpeak += object + ' ';
  storyText.textContent += object + ' ';
});

placeButton.addEventListener('click', function() {
  var place = getRandomWord(places);
  textToSpeak += place + ' ';
  storyText.textContent += place + ' ';
});

speakButton.addEventListener('click', function() {
  speakNow(textToSpeak);
});

