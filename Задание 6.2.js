const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', "don't", 'know', 'that', 'we', 'know', 'that', 'they', 'know'];

const uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);

console.log(uniqueArr); 
