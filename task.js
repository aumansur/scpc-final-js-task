// task 1 
const reverseString = inputString => {
  let reversedString = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString.charAt(i);
  }
  return reversedString;
}

const userInput = "hello world";
console.log(reverseString(userInput)); 

// task 2

const sumPositiveNumbers = (inputArray) => {
  let sum = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] > 0) {
      sum += inputArray[i];
    }
  }
  return sum;
};

const input2 = [2, -5, 10, -3, 20];
console.log(sumPositiveNumbers(input2));

// task 3

const findMostFrequentElement = (inputArray) => {
  let frequencyCounter = {};

  for (let i = 0; i < inputArray.length; i++) {
    const currentElement = inputArray[i];
    frequencyCounter[currentElement] =
      (frequencyCounter[currentElement] || 0) + 1;
  }

  let mostFrequentElement;
  let maxFrequency = 0;

  for (const element in frequencyCounter) {
    if (frequencyCounter[element] > maxFrequency) {
      maxFrequency = frequencyCounter[element];
      mostFrequentElement = element;
    }
  }

  return parseInt(mostFrequentElement);
};
const exampleInput = [3, 5, 2, 5, 3, 3, 1, 4, 5];
console.log(findMostFrequentElement(exampleInput)); // Output: 3

// task 5
const findTwoNumbers = (arr, target) => {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (leftPointer < rightPointer) {
    const currentSum = arr[leftPointer] + arr[rightPointer];

    if (currentSum === target) {
      return [leftPointer, rightPointer];
    } else if (currentSum < target) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }

  return [];
};

const inputArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
const output = findTwoNumbers(inputArray, targetValue);
console.log(output);

// task 5
function calculate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Error: Cannot divide by zero";
      }
      return num1 / num2;
    default:
      return "Error: Invalid operator";
  }
}

// Test the calculator function
console.log(calculate(5, "+", 3)); // Output: 8
console.log(calculate(10, "-", 4)); // Output: 6
console.log(calculate(3, "*", 6)); // Output: 18
console.log(calculate(12, "/", 3)); // Output: 4
console.log(calculate(10, "/", 0)); // Output: "Error: Cannot divide by zero"
console.log(calculate(5, "%", 2)); // Output: "Error: Invalid operator"

//task 6

const generateRandomPassword = (length) => {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";

  const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  return password;
};

// Example usage: Generate a random password of length 12
const passwordLength = 12;
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);


// task 7 
const  romanToInt =roman=> {
  const romanNumerals = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let result = 0;

  for (let i = 0; i < roman.length; i++) {
    const currentNumeral = romanNumerals[roman[i]];
    const nextNumeral = romanNumerals[roman[i + 1]];

    if (nextNumeral && currentNumeral < nextNumeral) {
      result -= currentNumeral;
    } else {
      result += currentNumeral;
    }
  }

  return result;
}


console.log(romanToInt('III')); // Output: 3
console.log(romanToInt('IV')); // Output: 4
console.log(romanToInt('IX')); // Output: 9


