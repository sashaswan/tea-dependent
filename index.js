// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
  }
  
  // Function to check if a number is odd
  function isOdd(num) {
    return num % 2 !== 0;
  }
  
  // Function to convert Fahrenheit to Celsius
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  
  // Function to find the minimum of two numbers
  function min(a, b) {
    return a < b ? a : b;
  }
  
  // Function to calculate the Fibonacci sequence up to n terms
  function fibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  }
  
  // Function to convert a string to uppercase
  function toUpperCase(str) {
    return str.toUpperCase();
  }
  
  // Function to check if a string contains a substring
  function containsSubstring(str, substring) {
    return str.includes(substring);
  }
  
  // Example usage:
  console.log(subtract(10, 5)); // Output: 5
  console.log(isOdd(3)); // Output: true
  console.log(fahrenheitToCelsius(32)); // Output: 0
  console.log(min(10, 20)); // Output: 10
  console.log(fibonacci(5)); // Output: [0, 1, 1, 2, 3]
  console.log(toUpperCase("hello")); // Output: "HELLO"
  console.log(containsSubstring("hello world", "world")); // Output: true
  