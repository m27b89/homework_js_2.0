//Task1. При нажатии b-1 выполняете функцию f1. Функция должна вывести в out-1 значение 55 из массива a1. Возвратите это значение.
a1 = [55, 23, 1, 53];
let buttonOne = (document.querySelector(".b-1").onclick = f1);
let answerOne = document.querySelector(".out-1");

function f1() {
  let count = "";
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] == 55) {
      count = a1[i];
    }
  }
  answerOne.innerHTML = count;
}

//Task2. При нажатии b-2 выполняете функцию f2. Функция должна вывести в out-2 значение hi из массива a2. Возвратите это значение.
a2 = [55, 23, "hi", 1, 53];
let buttonTwo = (document.querySelector(".b-2").onclick = f2);
let answerTwo = document.querySelector(".out-2");

function f2() {
  let count = "";
  for (let i = 0; i < a2.length; i++) {
    if (a2[i] == "hi") {
      count = a2[i];
    }
  }
  answerTwo.innerHTML = count;
}

//Task3. При нажатии b-3 выполняете функцию f3. Функция должна вывести в out-3 значение my из массива a3. Возвратите это значение.
a3 = ["my", 55, 23, 1, 53];
let buttonThree = (document.querySelector(".b-3").onclick = f3);
let answerThree = document.querySelector(".out-3");

function f3() {
  let count = "";
  for (let i = 0; i < a3.length; i++) {
    if (a3[i] == "my") {
      count = a3[i];
    }
  }
  answerThree.innerHTML = count;
}

//Task4. При нажатии b-4 выполняете функцию f4. Функция должна вывести в out-4 значение go из массива a4. Возвратите это значение.
a4 = [
  [2, 1, 3],
  [2, 3, 4],
  ["go", "hi"],
];
let buttonFour = (document.querySelector(".b-4").onclick = f4);
let answerFour = document.querySelector(".out-4");

function f4() {
  let count = a4[2][0];
  return count;
}

console.log(f4());
//Task5. При нажатии b-5 выполняете функцию f5. Функция должна вывести в out-5 четные значения из массива a5. Для перебора используем цикл.
a5 = [
  [2, 1, 3],
  [2, 3, 4],
  ["go", "hi"],
];
let buttonFive = (document.querySelector(".b-5").onclick = f5);
let answerFive = document.querySelector(".out-5");

function f5() {
  let count = "";
  for (let i = 0; i < a5.length; i++) {
    // console.log(a5[i]);
    for (let t = 0; t < a5[i].length; t++) {
      //   console.log(a5[i][t]);
      if (a5[i][t] % 2 == 0) {
        count += a5[i][t] + " ";
        console.log(count);
      }
    }
  }
  answerFive.innerHTML = count;
}

//Task6.При нажатии b-6 выполняете функцию f6. Функция должна вывести в out-6 нечетные значения из массива a6. Для перебора используем цикл. Делаем по образу предыдущей задачи.
let a6 = [
  [2, 1, 3],
  [2, 3, 4],
  ["go", "hi"],
];

let buttonSix = (document.querySelector(".b-6").onclick = f6);
let answerSix = document.querySelector(".out-6");

function f6() {
  let count = "";
  for (let i = 0; i < a6.length; i++) {
    // console.log(a5[i]);
    for (let t = 0; t < a6[i].length; t++) {
      //   console.log(a5[i][t]);
      if (a6[i][t] % 2) {
        count += a6[i][t] + " ";
        console.log(count);
      }
    }
  }
  answerSix.innerHTML = count;
}

//Task7. При нажатии b-7 выполняете функцию f7. Функция должна вывести в out-7 четные значения из массива a7. Как видите, вложенные массивы имеют разную длину, значит, предыдущий вариант уже не работает. Используем цикл. Вывод - через пробел.
let a7 = [
  [2, 1, 3, 5, 3, 3, 7, 5, 6, 7, 8],
  [2, 3, 4, 4, 32, 6, 8, 2],
  ["go", "hi", 45],
];
let buttonSeven = (document.querySelector(".b-7").onclick = f7);
let answerSeven = document.querySelector(".out-7");

function f7() {
  let count = "";
  for (let i = 0; i < a7.length; i++) {
    // console.log(a5[i]);
    for (let t = 0; t < a7[i].length; t++) {
      //   console.log(a5[i][t]);
      if (a7[i][t] % 2 == 0) {
        count += a7[i][t] + " ";
        // console.log(count);
      }
    }
  }
  answerSeven.innerHTML = count;
}

//Task8. При нажатии b-8 выполняете функцию f8. Функция должна вывести в out-8 нечетные значения из массива a8. Как видите, вложенные массивы имеют разную длину, значит, предыдущий вариант уже не работает. Используем цикл. Вывод - через пробел.
let a8 = [
  [2, 1, 3, 5, 3, 3, 7, 5, 6, 7, 8],
  [2, 3, 4, 4, 32, 6, 8, 2],
  ["go", "hi", 45],
];

let buttonEight = (document.querySelector(".b-8").onclick = f8);
let answerEight = document.querySelector(".out-8");

function f8() {
  let count = "";
  for (let i = 0; i < a8.length; i++) {
    // console.log(a5[i]);
    for (let t = 0; t < a8[i].length; t++) {
      //   console.log(a5[i][t]);
      if (a8[i][t] % 2) {
        count += a8[i][t] + " ";
        // console.log(count);
      }
    }
  }
  answerEight.innerHTML = count;
}

//Task9. При нажатии b-9 выполняете функцию f9. Функция должна вывести в out-9 значения из массива a9, которые больше нуля. Используем цикл. Вывод - через пробел.
let a9 = [
  [2, 1, 3, 5, 3, 3, 7, 5, 6, -5, 7, 8],
  [2, 3, 4, 4, 32, 6, 8, 2, -5],
  ["go", "hi", 45],
];

let buttonNine = (document.querySelector(".b-9").onclick = f9);
let answerNine = document.querySelector(".out-9");

function f9() {
  let count = "";
  for (let i = 0; i < a9.length; i++) {
    for (let t = 0; t < a9[i].length; t++) {
      if (a9[i][t] > 0) {
        count += a9[i][t] + " ";
      }
    }
  }
  answerNine.innerHTML = count;
}

//Task10. При нажатии b-10 выполняете функцию f10. Функция должна вывести в out-10 значения из массива a10, которые являются строкой. Используем цикл. Вывод - через пробел.
let a10 = [
  [2, 1, 3, 5, 3, 3, 7, 5, 6, 7, 8],
  [2, 3, 4, 4, 32, 6, 8, 2],
  ["go", "hi", 45],
];

let buttonTen = (document.querySelector(".b-10").onclick = f10);
let answerTen = document.querySelector(".out-10");

function f10() {
  let count = "";
  for (let i = 0; i < a10.length; i++) {
    // console.log(a5[i]);
    for (let t = 0; t < a10[i].length; t++) {
      //   console.log(a5[i][t]);
      if (typeof a10[i][t] === "string") {
        count += a10[i][t] + " ";
        // console.log(count);
      }
    }
  }
  answerTen.innerHTML = count;
}

//Task11. При нажатии b-11 выполняете функцию f11. Функция должна вывести в out-11 значения из массива a11, причем каждый вложенный массив должен идти в обратном порядке. Вывод через пробел. Т.е. вы должны получить в out-10 строку вида 6 5 4 8 7 13 12 11 10 9. Решаем задачу двумя циклами, без reverse.
let a11 = [
  [2, 1, 3, 5, 3, 3, 7, 5, 6, 7, 8],
  [2, 3, 4, 4, 32, 6, 8, 2],
  ["go", "hi", 45],
];

let buttonEleven = (document.querySelector(".b-11").onclick = f11);
let answerEleven = document.querySelector(".out-11");

function f11() {
  let count = "";
  for (let i = 0; i < a11.length; i++) {
    for (let t = a11[i].length - 1; t > -1; t--) {
      count += a11[i][t] + " ";
    }
    count += "<br>";
  }
  answerEleven.innerHTML = count;
}

//Task12. Дан массив a12 который моделирует шахматную доску. Используя цикл выведите в out-12 единицы из этого массива. Все действия в функции f12. Функция запускается при нажатии на b12. Вывод через пробел.
let a12 = [
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1],
];

let buttonTwelve = (document.querySelector(".b-12").onclick = f12);
let answerTwelve = document.querySelector(".out-12");

function f12() {
  let count = "";
  for (let i = 0; i < a12.length; i++) {
    for (let t = 0; t < a12[i].length; t++) {
      if (a12[i][t] === 1) {
        count += a12[i][t] + " ";
      }
    }
    count += "<br>";
  }
  answerTwelve.innerHTML = count;
}

//Task13. При нажатии b-13 выполняете функцию f13. Функция должна присвоить переменной a13 массив эмулирующий шахматную доску. Причем массив должен создаваться с помощью циклов. Для проверки - выведите массив в консоль.
let a13 = [];

let buttonThritee = (document.querySelector(".b-13").onclick = f13);
let answerThirtee = document.querySelector(".out-13");

function f13() {
  let count = "";
  for (let i = 0; i < 6; i++) {
    for (let t = 0; t < 6; t++) {
      if (t % 2 == 0) {
        count += "1";
      } else {
        count += "0";
      }
    }
    count += "<br>";
  }
  answerThirtee.innerHTML = count;
}

//Task14. При нажатии b-14 выполняете функцию f14. Функция должна вывести в out-14 длины вложенных в a14 массивов. Через пробел.
let a14 = [
  [2, 1, 3],
  [2, 3, 4, 4],
  ["go", "hi", 45],
];

let buttonFourteen = (document.querySelector(".b-14").onclick = f14);
let answerFourteen = document.querySelector(".out-14");

function f14() {
  let count = "";
  for (let i = 0; i < a14.length; i++) {
    count += a14[i].length + " ";
  }
  answerFourteen.innerHTML = count;
}

//Task15. При нажатии b-15 выполняете функцию f15. Функция должна вывести в out-15 длину самого большого вложенного массива в a15.
let a15 = [
  [2, 1, 3],
  [2, 3, 4, 4],
  ["go", "hi", 45],
];

let buttonFiveteen = (document.querySelector(".b-15").onclick = f15);
let answerFiveteen = document.querySelector(".out-15");
let arrFiveteen = [];

function f15() {
  let max;
  for (let i = 0; i < a15.length - 1; i++) {
    console.log(a15[i].length);
    arrFiveteen.push(a15[i].length);
    max = arrFiveteen[0];
    console.log(arrFiveteen);
    if (a15[i].length > max) {
      max = a15[i].length;
    }
  }
  answerFiveteen.innerHTML = max;
}

//Task16. Впишите в переменную a16 массив, который соответствует всем условиям приведенным ниже ( все console.log должны дать true;

//Task17. Впишите в переменную a17 массив, который соответствует всем условиям приведенным ниже ( все console.log должны дать true;

//Task18. Впишите в переменную a18 массив, который соответствует всем условиям приведенным ниже ( все console.log должны дать true;

//Task19. Впишите в переменную a19 массив, который соответствует всем условиям приведенным ниже ( все console.log должны дать true;

//Task20. Впишите в переменную a20 массив, который соответствует всем условиям приведенным ниже ( все console.log должны дать true;
