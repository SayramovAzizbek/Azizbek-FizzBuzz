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
    dividedFizzBuzz();
  } else if (fizzBuzzInputValue % 3 == 0) {
    dividedBuzz();
  } else if (fizzBuzzInputValue % 5 == 0) {
    divideFizz();
  } else {
    fizzbuzzText.textContent = `${fizzBuzzInputValue} number is not divisible by 3 or 5`;
  }

  /**
   * Calls when user enters numbers divided to 3 and 5
   */
  function dividedFizzBuzz() {
    fizzbuzzText.textContent = `FizBuzz`;
    fizzBuzzSumArr.push(fizzBuzzInputValue);
    fizzBuzzResultText.textContent = fizzBuzzSumArr;
    fizzBuzzResultNumValue++;
    fizzBuzzResultNum.textContent = fizzBuzzResultNumValue;
  }

  /**
   * Calls when user enters numbers divided to 3
   */
  function dividedBuzz() {
    fizzbuzzText.textContent = `Buzz`;
    buzzSumArr.push(fizzBuzzInputValue);
    buzzResultText.textContent = buzzSumArr;
    buzzResultNumValue++;
    buzzResultNum.textContent = buzzResultNumValue;
  }

  /**
   * Calls when user enters numbers divided to 5
   */
  function divideFizz() {
    fizzbuzzText.textContent = `Fizz`;
    fizzSumArr.push(fizzBuzzInputValue);
    fizzResultText.textContent = fizzSumArr;
    fizzResultNumValue++;
    fizzResultNum.textContent = fizzResultNumValue;
  }

  fizzBuzzInput.value = "";
});
