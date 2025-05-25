// Challenge 1 on sum of positives

function sumOfPositives(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      sum += numbers[i];
    }
  }
  console.log(`The sum of positive numbers in [${numbers}] is ${sum}`);
}

sumOfPositives([1, -3, 5, -2, 9, -8]);

// Challenge 2 on finding the maximum value

function findMax(numbers) {
  let maximum = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maximum) {
      maximum = numbers[i];
    }
  }
  console.log(`The maximum value in [${numbers}] is ${maximum}`);
}

findMax([3, 7, 2, 9, 5]);

// Challenge 3 in fndin the election winner

function findWinner(candidates) {
  let winner = candidates[0];
  for (let i = 1; i < candidates.length; i++) {
    if (candidates[i].votes > winner.votes) {
      winner = candidates[i];
    }
  }
  console.log(`The winner is ${winner.name} with ${winner.votes} votes`);
}

let candidates = [
  { name: "Alice", votes: 50 },
  { name: "Bob", votes: 75 },
  { name: "Charlie", votes: 65 }
];
findWinner(candidates);

// Challenge 4 in fonding the Longest word

function findLongestWord(words) {
  let longestWord = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  console.log(`The longest word in [${words}] is "${longestWord}"`);
}

findLongestWord(["apple", "banana", "pear", "grapefruit"]);

// Challenge 5 on finding the count properties

function countProperties(obj) {
  let count = 0;
  for (let key in obj) {
    count++;
  }
  console.log(`The object has ${count} properties`);
}

countProperties({ name: "Alice", age: 25, city: "Paris" });

// Challenge 6 on filter by length

function filterByLength(strings, minLength) {
  let filteredArray = [];
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length >= minLength) {
      filteredArray.push(strings[i]);
    }
  }
  console.log(`Words with length >= ${minLength} from [${strings}] are: [${filteredArray}]`);
}

filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5);

// Challenge 7 on finding the sum of even numbers

function sumEvenNumbers(numbers) {
  let sum = 0;
  let evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sum += numbers[i];
      evenNumbers.push(numbers[i]);
    }
  }
  console.log(`The sum of even numbers [${evenNumbers}] from [${numbers}] is ${sum}`);
}

sumEvenNumbers([1, 2, 3, 4, 5, 6]);

// Challenge 8 on finding the difference between sum of even and odd numbers
function differenceEvenOdd(numbers) {
  let evenSum = 0;
  let oddSum = 0;
  let evenNumbers = [];
  let oddNumbers = [];
  
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenSum += numbers[i];
      evenNumbers.push(numbers[i]);
    } else {
      oddSum += numbers[i];
      oddNumbers.push(numbers[i]);
    }
  }
  
  let difference = evenSum - oddSum;
  console.log(`Even numbers [${evenNumbers}] sum: ${evenSum}, Odd numbers [${oddNumbers}] sum: ${oddSum}, Difference: ${difference}`);
}

differenceEvenOdd([1, 2, 3, 4, 5, 6]);

// Challenge 9  on count truthy


function countTruthy(obj) {
  let count = 0;
  let truthyValues = [];
  
  for (let key in obj) {
    if (obj[key]) {
      count++;
      truthyValues.push(`${key}: ${obj[key]}`);
    }
  }
  
  console.log(`The object has ${count} truthy values: [${truthyValues}]`);
}

countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null });

// Challenge 10 on finding the average of numbers
function average(numbers) {
  if (numbers.length === 0) {
    console.log(`The average of an empty array is 0`);
  } else {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    let avg = sum / numbers.length;
    console.log(`The average of [${numbers}] is ${avg}`);
  }
}

average([2, 4, 6, 8]);
average([]);

// Challenge 11 on  linear search


function linearSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      console.log(`Value ${value} found at index ${i} in [${array}]`);
      return;
    }
  }
  console.log(`Value ${value} not found in [${array}], returning -1`);
}

linearSearch([5, 3, 7, 1, 4], 7);
linearSearch([5, 3, 7, 1, 4], 10);

// Challenge 12 in reverse linear search

function reverseLinearSearch(array, value) {
  let lastIndex = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      lastIndex = i;
    }
  }
  
  if (lastIndex !== -1) {
    console.log(`Last occurrence of ${value} in [${array}] is at index ${lastIndex}`);
  } else {
    console.log(`Value ${value} not found in [${array}], returning -1`);
  }
}

reverseLinearSearch([5, 3, 7, 1, 4, 7], 7);
reverseLinearSearch([5, 3, 7, 1, 4], 10);

// Challenge 13 on finding linear search of all indices
function linearSearchAll(array, value) {
  let indices = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      indices.push(i);
    }
  }
  console.log(`All indices of ${value} in [${array}] are: [${indices}]`);
}

linearSearchAll([5, 3, 7, 1, 4, 7], 7);
linearSearchAll([5, 3, 7, 1, 4], 10);

// Challenge 14 on  on finding count occurrences
function countOccurrences(strings) {
  let counts = {};
  
  for (let i = 0; i < strings.length; i++) {
    let word = strings[i];
    if (counts[word]) {
      counts[word]++;
    } else {
      counts[word] = 1;
    }
  }
  
  console.log(`Occurrences in [${strings}]:`, counts);
}

countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"]);

// Challenge 15 on remove duplicates


function removeDuplicates(array) {
  let uniqueArray = [];
  
  for (let i = 0; i < array.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < uniqueArray.length; j++) {
      if (array[i] === uniqueArray[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      uniqueArray.push(array[i]);
    }
  }
  
  console.log(`Original array: [${array}], After removing duplicates: [${uniqueArray}]`);
}

removeDuplicates([1, 2, 3, 2, 4, 1, 5]);

// Challenge 16 on  on finding tje Most frequent index


function mostFrequent(array) {
  let counts = {};
  let maxCount = 0;
  let mostFrequentValue;
  
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (counts[item]) {
      counts[item]++;
    } else {
      counts[item] = 1;
    }
    
    if (counts[item] > maxCount) {
      maxCount = counts[item];
      mostFrequentValue = item;
    }
  }
  
  console.log(`Most frequent value in [${array}] is "${mostFrequentValue}" appearing ${maxCount} times`);
}

mostFrequent([1, 2, 2, 3, 3, 3, 4]);
mostFrequent(["apple", "banana", "apple", "orange", "banana", "apple"]);