const input = require('readline-sync'); // Corrected variable name

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName //
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


// TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride","true","40","Trajectory","3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Enter your name: "); // Corrected assignment to global variable
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for(let i = 0; i < questions.length; i++){ 
    candidateAnswers[i] = input.question(`${i + 1}) ${questions[i]} `); // Use the correct variable
  }
}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
  console.log("\nFeedback:");
  console.log(`Candidate Name: ${candidateName}`)
  let correctCount = 0;

  for(let i = 0; i < questions.length; i++){
    console.log(`${i + 1}) ${questions[i]}`);
    console.log(`Your answer: ${candidateAnswers[i]}`);
    console.log(`Correct answer: ${correctAnswers[i]}`);

    // Debug output for comparison
    console.log(`Comparing: '${candidateAnswers[i].trim().toLowerCase()}' with '${correctAnswers[i].trim().toLowerCase()}'`);

    if (candidateAnswers[i].trim().toLowerCase() === correctAnswers[i].trim().toLowerCase()){
      console.log("That's Correct!");
      correctCount++;
    } else {
      console.log("Oops that's not right!");
    }
    console.log(); // Blank line for readability
  }

  let grade = correctCount / questions.length * 100;
  console.log(`>>>Your final grade is: ${grade}%.<<< `);
  console.log(`You answered ${correctCount} out of ${questions.length} questions correctly.`);

  if (grade >= 80) {
    console.log(">>>Status: PASSED <<<");
  } else {
    console.log(">>>Status: FAILED <<<");
  }
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log("Thank you for your input " + candidateName);
  askQuestion();
  gradeQuiz(candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};