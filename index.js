const minnum = 1;
const maxnum = 100;

let answer = Math.floor(Math.random() * (maxnum - minnum + 1)) + minnum;

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Guess a number between ${minnum} - ${maxnum}`);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert("Please enter a valid number");
  } else if (guess < minnum || guess > maxnum) {
    window.alert("Please enter a valid number");
  } else {
    attempts++;
    if (guess < answer) {
      window.alert("Too low try again");
    } else if (guess > answer) {
      window.alert("Too high try again");
    } else {
      window.alert(
        `Correct! The answer was ${answer}. It took you ${attempts} attempts`
      );
      running = false;
    }
  }
}
