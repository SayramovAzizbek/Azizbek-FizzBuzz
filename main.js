let fizForm = document.querySelector(".fiz-form");
let fizInput = document.querySelector(".fiz-input");
let fizBtn = document.querySelector(".fiz-btn");
let fizText = document.querySelector(".fiz-res-text");

let fizResultText = document.querySelector(".fizz-result-text");
let buzzResultText = document.querySelector(".buzz-result-text");
let fizBuzzResultText = document.querySelector(".fizbuzz-result-text");

let fizzResultNum = document.querySelector(".fizz-result-num");
let buzzResultNum = document.querySelector(".buzz-result-num");
let fizzBuzzResultNum = document.querySelector(".fizzbuzz-result-num");

let fizzResultNumValue = 0;
let buzzResultNumValue = 0;
let fizzBuzzResultNumValue = 0;

let fizzSumArr = [];
let buzzSumArr = [];
let fizzBuzzSumArr = [];

fizForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let fizInputValue = Number(fizInput.value.trim());
  if (fizInputValue === 0 || isNaN(fizInputValue)) {
    fizText.textContent = `Please enter number`;
  } else if (fizInputValue % 3 == 0 && fizInputValue % 5 == 0) {
    fizText.textContent = `FizBuzz`;
    fizzBuzzSumArr.push(fizInputValue);
    fizBuzzResultText.textContent = fizzBuzzSumArr;
    fizzBuzzResultNumValue++;
    fizzBuzzResultNum.textContent = fizzBuzzResultNumValue;
  } else if (fizInputValue % 3 == 0) {
    fizText.textContent = `Buzz`;
    buzzSumArr.push(fizInputValue);
    buzzResultText.textContent = buzzSumArr;
    buzzResultNumValue++;
    buzzResultNum.textContent = buzzResultNumValue;
  } else if (fizInputValue % 5 == 0) {
    fizText.textContent = `Fizz`;
    fizzSumArr.push(fizInputValue);
    fizResultText.textContent = fizzSumArr;
    fizzResultNumValue++;
    fizzResultNum.textContent = fizzResultNumValue;
  } else {
    fizText.textContent = `${fizInputValue} raqami 3 ga ham 5 ga ham bo'linmaydi`;
  }
});
