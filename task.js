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

