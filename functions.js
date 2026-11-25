function multiply(a , b , c){
return a * b * c
}
let product = multiply(3,4,8)
console.log(product)

const convertToSeconds= function(minutes){
return minutes * 60;
}

function fahrenheitToCelsius(fahrenheit){
return (fahrenheit - 32)* 5/9
}

function reversestring(text){
  return text.split("").reverse().join("")
}

function countvowel(text) {
  let count = 0;
  for(let letter of text.toLowerCase())
    if("aeiou".includes(letter)) {
      count++;
      return count;
    }
}

function isPrime(number) {
  if (number <= 1 ) {
    return false;
  }

  for(let i = 2; i < number; i++){
    if(number % i === 0){
      return false;
    }
  }
  return true;
}
console.log(isPrime(7))
console.log(isPrime(9))
console.log(isPrime(21))
console.log(isPrime(5))