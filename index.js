const fistNum = process.argv[2];
const secNum = process.argv[3];
const colors = require('colors');
const simpleNum = [];

if (isNaN(fistNum) || isNaN(secNum)){
  console.log(colors.green("Нужно ввести два числа"));
  return
};

nextNum:
for (let i = fistNum; i <= secNum; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextNum; 
  }
  
  simpleNum.push(i);
} ;

if (simpleNum.length == 0){
  console.log(colors.red("Тут нет простых чисел"));
};


console.log(simpleNum);



   


