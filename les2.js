//Урок 2. Цикл событий. События в Node.js
//1. Решите задачу по выводу данных в консоль.

/*console.log('Record 1');

setTimeout(() => {

  console.log('Record 2');

  Promise.resolve().then(() => {

    setTimeout(() => {
    
        сonsole.log('Record 3');
    
        Promise.resolve().then(() => {
       console.log('Record 4');
      });       
    });
  });       

});

console.log('Record 5');

Promise.resolve().then(() => Promise.resolve().then(() => console.log('Record 6')));

//1 5 2 6 3 4*/


//Напишите программу, которая будет принимать на вход несколько аргументов: дату и время в формате «час-день-месяц-год». 
//Задача программы — создавать для каждого аргумента таймер с обратным отсчётом: посекундный вывод в терминал состояния таймеров (сколько осталось). 
//По истечении какого-либо таймера, вместо сообщения о том, сколько осталось, требуется показать сообщение о завершении его работы. 
//Важно, чтобы работа программы основывалась на событиях.

let nowD = new Date();
console.log(nowD);

let ts = Date.now();

let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();


console.log(year + "-" + month + "-" + date);