import { quizData } from "./data.js";
let count = 0;
let score = 0;

const questionEl = document.querySelector(".question");
const options = document.querySelector(".options");
const submitBtn = document.getElementById("submit-btn");

function loadNewQuestion() {
  if (count < quizData.length) {
    questionEl.innerHTML = `Question # ${count + 1}: ${
      quizData[count].question
    }`;
    options.innerHTML = `
          <ul>
            <li><input type="radio" id="a" name="answer" value="a">
              <label for="a">${quizData[count].a}</label>
            </li>
            <li><input type="radio" id="b" name="answer" value="b">
              <label for="b">${quizData[count].b}</label>
            </li>
            <li><input type="radio" id="c" name="answer" value="c">
              <label for="c">${quizData[count].c}</label>
            </li>
            <li><input type="radio" id="d" name="answer" value="d">
              <label for="d">${quizData[count].d}</label>
            </li>
          </ul>`;
  } else {
    questionEl.innerHTML = `Quiz finished! Your score is ${score} / ${quizData.length}`;
    options.innerHTML = "";
    submitBtn.style.display = "none";
  }
}

function getSelectedAnswer() {
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (selectedOption) {
    return selectedOption.value;
  } else {
    return null;
  }
}

function submitAnswer() {
  const selectedAnswer = getSelectedAnswer();
  if (selectedAnswer) {
    console.log(`Selected Answer: ${selectedAnswer}`);
    if (selectedAnswer === quizData[count].correct) {
      score++;
    }
    count++;
    loadNewQuestion();
  } else {
    console.log("No option selected.");
    alert("Please select an option!");
  }
}

submitBtn.addEventListener("click", submitAnswer);
loadNewQuestion();