
const isPalindrome = (word) => {
    return word === word.split('').reverse().join('');
  };
  
  const word = prompt("Введите слово:");
  
  if (isPalindrome(word)) {
    console.log(`Слово ${word} является палиндромом`);
  } else {
    console.log(`Слово ${word} не является палиндромом`);
  }