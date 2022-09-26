let fizzBuzzForm = document.querySelector(".fizzbuzz-form");
let fizzBuzzInput = document.querySelector(".fizzbuzz-input");
let fizzbuzzText = document.querySelector(".fizzbuzz-res-text");

let fizzResultText = document.querySelector(".fizz-result-text");
let buzzResultText = document.querySelector(".buzz-result-text");
let fizzBuzzResultText = document.querySelector(".fizbuzz-result-text");

let fizzResultNum = document.querySelector(".fizz-result-num");
let buzzResultNum = document.querySelector(".buzz-result-num");
let fizzBuzzResultNum = document.querySelector(".fizzbuzz-result-num");

let fizzResultNumValue = 0;
let buzzResultNumValue = 0;
let fizzBuzzResultNumValue = 0;

let fizzSumArr = [];
let buzzSumArr = [];
let fizzBuzzSumArr = [];

fizzBuzzForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let fizzBuzzInputValue = Number(fizzBuzzInput.value.trim());
  if (fizzBuzzInputValue === 0 || isNaN(fizzBuzzInputValue)) {
    fizzbuzzText.textContent = `Please enter number`;
  } else if (fizzBuzzInputValue % 3 == 0 && fizzBuzzInputValue % 5 == 0) {
    fizzbuzzText.textContent = `FizBuzz`;
    fizzBuzzSumArr.push(fizzBuzzInputValue);
    fizzBuzzResultText.textContent = fizzBuzzSumArr;
    fizzBuzzResultNumValue++;
    fizzBuzzResultNum.textContent = fizzBuzzResultNumValue;
  } else if (fizzBuzzInputValue % 3 == 0) {
    fizzbuzzText.textContent = `Buzz`;
    buzzSumArr.push(fizzBuzzInputValue);
    buzzResultText.textContent = buzzSumArr;
    buzzResultNumValue++;
    buzzResultNum.textContent = buzzResultNumValue;
  } else if (fizzBuzzInputValue % 5 == 0) {
    fizzbuzzText.textContent = `Fizz`;
    fizzSumArr.push(fizzBuzzInputValue);
    fizzResultText.textContent = fizzSumArr;
    fizzResultNumValue++;
    fizzResultNum.textContent = fizzResultNumValue;
  } else {
    fizzbuzzText.textContent = `${fizzBuzzInputValue} raqami 3 ga ham 5 ga ham bo'linmaydi`;
  }
});
