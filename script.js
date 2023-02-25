// pythagorean
const a = 5;
const b = 12;
const c = pythagorean(a, b);

function pythagorean(a, b) {
  const c = Math.sqrt(a*a + b*b);
  return c;
}
console.log(c);

// integer and demical part of number
const userNumber = prompt("Enter a number:");
const number = parseFloat(userNumber); 
if (isNaN(number)) {
  console.log("Wrong number");
} else {
  const integerPart = Math.floor(number);
  const decimalPart = (number - integerPart).toFixed(2);

alert(`Integer: ${integerPart}`);
alert(`Decimal: ${decimalPart}`);
}

// Write a password generator with length n
function generatePassword(n) {
  const regex =
    /[\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/0-9\:\;\<\=\>\?\@\[A-Z\]\^_\`\[a-z\]]/g;
  let password = "";
  for (let i = 0; i < n; i++) {
    password += String.fromCharCode(
      Math.floor(Math.random() * (126 - 33 + 1)) + 33
    ).match(regex);
  }
  return password;
}
console.log(generatePassword(8));

// calculate percentage with n numbers after dot
function calculate(firstNum, secondNum, precision) {
  let calc = (secondNum * 100) / firstNum;
  const percentage =
    Math.round(calc * Math.pow(10, precision)) / Math.pow(10, precision);
  return percentage;
}
console.log(calculate(200, 0.14, 1));
console.log(calculate(200, 50, 0));

// Check if prime
function isPrime(n) {
  if (n < 2 || !Number.isInteger(n)) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
console.log(isPrime(4));
console.log(isPrime(5));
