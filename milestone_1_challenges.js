// challenge 1 returning the sum of two numbers

function addition(num1, num2) {
  let result = num1 + num2;
  console.log(`The sum of ${num1} and ${num2} is ${result}`);
}

addition(3, 5);
addition(-6, 9);

// challenge 2 on convert minutes into seconds

function convert(minutes) {
  let seconds = minutes * 60;
  console.log(`${minutes} minutes equals ${seconds} seconds`);
}

convert(5);
convert(2);

// challenge 3 of calculating the perimeter of a rectangle

function findPerimeter(length, width) {
  let perimeter = 2 * (length + width);
  console.log(
    `The perimeter of a rectangle with length ${length} and width ${width} is ${perimeter}`
  );
}

findPerimeter(6, 7);
findPerimeter(20, 10);

// Challenge 4 of checking a negative in a number and returning either false or truew

function checkNegative(num) {
  let isNegative = num < 0;
  console.log(`Is ${num} a negative number? ${isNegative}`);
}

checkNegative(-23);
checkNegative(55);

// trying first

// function tryDrive()
// let age;
//age=22;

// Challenge 5 for the  Can I Drive loop

function canDrive(name, age) {
  if (age >= 18) {
    return `${name} is old enough to drive`;
  } else {
    return `${name} is not old enough to drive yet`;
  }
}
console.log(canDrive("Jane", 22));
console.log(canDrive("June", 12));

// Challenge 6nfor checking the largest number

function findLargest(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}
console.log(findLargest(5, 9, 3));
console.log(findLargest(10, 10, 10));
console.log(findLargest(-1, -5, -3));

// Challenge 7 for the BMI weight height Calculator

function calculateBMI(weight, height) {
  
  let bmi = weight / (height * height);
  

  let category;
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 25) {
    category = "Normal weight";
  } else if (bmi < 30) {
    category = "Overweight";
  } else {
    category = "Obese";
  }
  

  console.log("Your BMI is " + bmi + " - " + category);
}


calculateBMI(68, 1.75);
calculateBMI(85, 1.8);

// Challenge 8 for reimbursing greeting based On Time

function greetUser(name, hour) {
  let greeting;
  if (hour >= 5 && hour <= 11) {
    greeting = `Good morning, ${name}!`;
  } else if (hour >= 12 && hour <= 17) {
    greeting = `Good afternoon, ${name}!`;
  } else if (hour >= 18 && hour <= 21) {
    greeting = `Good evening, ${name}!`;
  } else {
    greeting = `Good night, ${name}!`;
  }
  console.log(greeting);
}

greetUser("Alice", 9);
greetUser("Bob", 14);
greetUser("Charlie", 20);
greetUser("David", 23);

// Challenge 9 on FizzBuzz that takes a number and returns the specific name depending on modulus number

function fizzBuzzCheck(number) {
  let result;
  3;
  if (number % 3 === 0 && number % 5 === 0) {
    result = "FizzBuzz";
  } else if (number % 3 === 0) {
    result = "Fizz";
  } else if (number % 5 === 0) {
    result = "Buzz";
  } else {
    result = number.toString();
  }
  console.log(`For ${number}, the result is: ${result}`);
}

fizzBuzzCheck(3);
fizzBuzzCheck(10);
fizzBuzzCheck(15);
fizzBuzzCheck(7);

// Challenge 10 on perimeter and square

function perimeter(leter, num) {
  if (leter === "s") {
    let squarePerimeter = 4 * num;
    console.log(`Perimeter of a square of side ${num} is ${squarePerimeter}`);
  } else if (leter === "c") {
    let circlePerimeter = 6.28 * num;
    console.log(`Perimeter of a circle of side ${num} is ${circlePerimeter}`);
  }
}

perimeter("s", 7);
perimeter("c", 4);

//Challenge 11 Sum of even numbers

function sumEvenNumbers(n) {
  let sumEven = 0;

  for (let i = 2; i <= n; i++) {
    if (i % 2 == 0) {
      sumEven = sumEven + i;
    }
  }

  console.log(`Sum of even numbers from 0 to ${n} is ${sumEven}`);
}

sumEvenNumbers(6);
sumEvenNumbers(10);
sumEvenNumbers(5);

//Challenge 12 multiply a number by Itself
function powerUp(num, times) {
  let numberPower = 1;
  for (i >= 0; (i = times); i++) {
    numberPower = num ** i;
    break;
  }
  console.log(numberPower);
}

powerUp(2, 3);
powerUp(5, 0);
powerUp(3, 4);
powerUp(0);

//Challenge 13 Factorial calculator
function factorial(n) {
  let factorialNumber = 1;
  for (i = 1; i <= n; i++) {
    factorialNumber *= i;
  }
  console.log(factorialNumber);
}

factorial(4);
factorial(1);
factorial(6);

//Challenge 14 Multiple Sum
function sumMultiples(n, divisor) {
  let SumEvenNumber = 0;
  for (i = 1; i <= n; i++) {
    if (i % divisor == 0) {
      SumEvenNumber = SumEvenNumber + i;
    } else {
      continue;
    }
  }
  console.log(
    `Sum of numbers divisible by ${divisor} from 0 to ${n} is ${SumEvenNumber}`
  );
}

sumMultiples(10, 2);

//Challenge 15 Sum of Digits
