
const ingredientItems = document.querySelectorAll('#recipe-ingredients li');
const instructionItems = document.querySelectorAll('#recipe-instructions li');
const highlightIngredientsButton = document.getElementById('highlight-ingredients');
const checkInstructionsButton = document.getElementById('check-instructions');
const resetInstructionsButton = document.getElementById('reset-instructions');


highlightIngredientsButton.addEventListener('click', () => {
  ingredientItems.forEach((item, index) => {
    if (index % 2 === 0) {
      item.classList.toggle('highlight');
    }
  });
});

checkInstructionsButton.addEventListener('click', () => {
  let delay = 0;
  instructionItems.forEach((item) => {
    setTimeout(() => {
      item.classList.add('is-done');
    }, delay);
    delay += 3000; 
  });
});


resetInstructionsButton.addEventListener('click', () => {
  instructionItems.forEach((item) => {
    item.classList.remove('is-done');
  });
});


document.querySelector("h2.headers:nth-of-type(1)").addEventListener("click", function () {
    this.classList.add("animate__animated", "animate__bounce");
    this.addEventListener("animationend", () => {
      this.classList.remove("animate__animated", "animate__bounce");
    }, { once: true }); 
  });
  
  
  document.querySelector("h2.headers:nth-of-type(2)").addEventListener("click", function () {
    this.classList.add("animate__animated", "animate__shakeX");
    this.addEventListener("animationend", () => {
      this.classList.remove("animate__animated", "animate__shakeX");
    }, { once: true });
  });
  
 
  document.getElementById("cake").addEventListener("click", function () {
    this.classList.add("animate__animated", "animate__bounce");
    this.addEventListener("animationend", () => {
      this.classList.remove("animate__animated", "animate__bounce");
    }, { once: true });
  });
  
