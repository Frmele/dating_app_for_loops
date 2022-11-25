'use strict';

//////////////////////////////////////////////////////////////////
// Creating the questions array

// Option 1
// This way of creating the array is the easiest.
const questions = [
  "What is your first name?",
  "What is your last name?",
  "What is your age?",
  "Where do you live?",
  "What is your gender? (female, male, other)",
  "Which genders are you interested in dating?",
  "What is your main hobby?",
  "What is your favourite movie?"
];


// for loops replacement

const answers = [];
for (const question of questions) {
  const answer = prompt(question);
  answers.push(answer);
}
console.table(answers);
