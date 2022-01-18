const fistNum = process.argv[2];
const secNum = process.argv[3];
const colors = require('colors');
const simpleArr = [];
let flag = "red";

if (isNaN(fistNum) || isNaN(secNum)){
  console.log(colors.green("Нужно ввести два числа"));
  return
};

if (fistNum < 2 || secNum < 2){
  console.log(colors.red("Числа не могут быть равны нулю или единице и не могут быть отрицательными"));
  return
};

nextNum:
for (let i = fistNum; i <= secNum; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextNum; 
  }
  simpleArr.push(i);
};


if(simpleArr.length == 0){
    console.log(colors.red("Простых чисел тут нет"))
}
else {
    simpleArr.map(function(item){
    
        switch (flag){
        case "red":
            console.log(colors.red(item));
            flag = "yellow"; 
            break; 
        case "yellow":
            console.log(colors.yellow(item));
            flag = "green";  
            break; 
        case "green":
            console.log(colors.green(item));
            flag = "red";  
            break; 
    }

})};




   


