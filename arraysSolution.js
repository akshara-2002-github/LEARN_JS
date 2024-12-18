//EXCERSISE 1:MODIFY LOOP BEHAVIOR

// Implement using a traditional for loop
function skipDivisibleByFourWithForLoop(numbers) {
    const result = [];
    for (i = 0; i < numbers.length - 1; i++) {
      if (numbers[i] % 4 !== 0) {
        result.push(numbers[i]);
      }
    }
    console.log(result);
  }
  // Implement using a for...of loop
  
  function skipDivisibleByFourWithForOfLoop(numbers) {
    const result = [];
    for (const num of numbers) {
      if (num % 4 !== 0) {
        result.push(num);
      }
    }
    console.log(result);
  }
  // Implement using a for...in loop
  function skipDivisibleByFourWithForInLoop(numbers) {
    const result = [];
    for (const i in numbers) {
      if (numbers[i] % 4 !== 0) {
        result.push(numbers[i]);
      }
    }
    console.log(result);
  }
  // Implement using a map statement
  function upperCaseAllWords(words) {
    const result = words.map((i) => i.toUpperCase());
    console.log(result);
  }
  
  // Function calls
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  skipDivisibleByFourWithForLoop(numbers);
  skipDivisibleByFourWithForOfLoop(numbers);
  skipDivisibleByFourWithForInLoop(numbers);
  upperCaseAllWords(["hello", "world", "from", "akshara"]);
  
  //EXERSICE 2 :modify array methods
  
  // Use map to prepend "Yummy"
  function prependYummyToFruits(fruits) {
    const result = fruits.map((i) => "Yummy" + " " + i);
    console.log(result);
  }
  // Use filter to include fruits with names shorter than 6 characters
  function filterShortFruits(fruits) {
    const result = fruits.filter((i) => i.length <= 6);
    console.log(result);
  }
  
  function alternateUpperCase(sentence) {
    const words = sentence.split(" ");
  
    for (idx = 0; idx < words.length; idx++) {
      let word = words[idx].split("");
      for (i = 0; i < word.length; i++) {
        if (i % 2 == 0) {
          word[i] = word[i].toUpperCase();
        } else {
          word[i] = word[i].toLowerCase();
        }
      }
      words[idx] = word.join("");
    }
  
    // Expected Output:
    // ["AkShArA", "LoVeS", "ScOoBy"]
  }
  
  // Function calls
  const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
  console.log(prependYummyToFruits(fruits));
  console.log(filterShortFruits(fruits));
  console.log(alternateUpperCase("Akshara Loves Scooby"));
  
  //EXCERISIE - 3:UNDERSTANDING ARRAY METHODS
  function joinColors(colors) {
    return colors.join(", ");
    // Use join to create a comma-separated string
    // Expected Output:
    // "red, blue, green"
  }
  
  function reverseNumbers(numbersArray) {
    return numbersArray.reverse();
  
    // Use reverse to reverse the array
    // Expected Output:
    // [5, 4, 3, 2, 1]
  }
  
  function sliceMiddleThree(numbersArray) {
    return numbersArray.slice(1, 4);
    // Use slice to extract the middle three numbers
    // Expected Output:
    // [2, 3, 4]
  }
  
  function replaceSecondNumber(numbersToSplice) {
    numbersToSplice.splice(1, 1, "ILU");
    return numbersToSplice;
    // Use splice to replace the second number
    // Expected Output:
    // [10, "ILU", 30]
  }
  
  // Function calls
  const colors = ["red", "blue", "green"];
  const numbersArray = [1, 2, 3, 4, 5];
  const numbersToSplice = [10, 20, 30];
  
  console.log(joinColors(colors));
  console.log(reverseNumbers(numbersArray));
  console.log(sliceMiddleThree(numbersArray));
  console.log(replaceSecondNumber(numbersToSplice, "ILU"));
  