//Task1. Есть массив d1, кнопка b-1, input i-1. Напишите функцию f1, которая при нажатии читает i-1 и добавляем его в массив. После чего выводит массив в .out-1. Поскольку мы будем выводить массив d1 неоднократно, то давайте вывод массива сделаем отдельной функцией, showArr - она подготовлена. Изучите ее - это хороший способ оптимизировать код.
d1 = [33, "best", 66, "best"];
let inputOne = document.querySelector(".i-1");
let buttonOne = (document.querySelector(".b-1").onclick = f1);
let answerOne = document.querySelector(".out-1");

function f1() {
  let val = inputOne.value;
  d1.push(val);
  showArr(answerOne, d1);
}

function showArr(answer, arr) {
  answer.innerHTML = arr;
}

//Task2. Напишите функцию f2, которая применяет метод pop к массиву d1, а затем выводит его (showArr) в .out-2
let buttonTwo = (document.querySelector(".b-2").onclick = f2);
let answerTwo = document.querySelector(".out-2");

function f2() {
  arr = d1.pop();
  showArr(answerTwo, d1);
}

//Task3. Напишите функцию f3, которая применяет метод shift к массиву d1, а затем выводит его (showArr) в .out-3
let buttonThree = (document.querySelector(".b-3").onclick = f3);
let answerThree = document.querySelector(".out-3");

function f3() {
  arr = d1.shift();
  showArr(answerThree, d1);
}

//Task4. Напишите функцию f4, которая применяет метод push к массиву d1, данные для массива берите из i-4, а затем выводит его (showArr) в .out-4
let inputFour = document.querySelector(".i-4");
let buttonFour = (document.querySelector(".b-4").onclick = f4);
let answerFour = document.querySelector(".out-4");

function f4() {
  let val = inputFour.value;
  d1.push(val);
  showArr(answerFour, d1);
}

//Task5. Напишите функцию f5, которая применяет метод unshift к массиву d1, данные для массива берите из i-5, а затем выводит его (showArr) в .out-5
let inputFive = document.querySelector(".i-5");
let buttonFive = (document.querySelector(".b-5").onclick = f5);
let answerFive = document.querySelector(".out-5");

function f5() {
  let val = inputFive.value;
  d1.unshift(val);
  showArr(answerFive, d1);
}

//Task6. Напишите функцию f6, которая эмулирует работу метода push применительно к массиву d6. Т.е. добавляет значение из i-6 как последний элемент в массив d6. Эмуляция, значит, что мы получим результат аналогичный методу push без применения его. Эмуляция заключается в присвоение значения как последнего элемента массива. Как вычислить индекс последнего элемента используя длину массива - вы знаете из предыдущего урока. Повторный запуск функции должен также приводить к добавлению элемента.
d6 = ["test", 5, 12];
let inputSix = document.querySelector(".i-6");
let buttonSix = (document.querySelector(".b-6").onclick = f6);
let answerSix = document.querySelector(".out-6");

function f6() {
  let val = inputSix.value;
  d6[d1.length + 1] = val;
  showArr(answerSix, d6);
}

//Task7. Напишите функцию f7, которая эмулирует метод pop, т.е. удаляет последний элемент массива d7. Эмулировать - получать результат аналогичный pop, но без применения pop. Функция может быть вызвана много раз, при этом каждый раз должен удаляться последний элемент d7.
d7 = ["china", "india", "brazil", "japan", "egypt"];
let buttonSeven = (document.querySelector(".b-7").onclick = f7);
let answerSeven = document.querySelector(".out-7");

function f7() {
  d7[d7.length - 1] = d7[d7.length];
  showArr(answerSeven, d7);
}

//Task8. Напишите функцию f8, которая эмулирует работу метода unShift - добавляем значение из i-8 в начало массива d8.
d8 = [2, "4", 12, 67, "hello"];
let inputEight = document.querySelector(".i-8");
let buttonEight = (document.querySelector(".b-8").onclick = f8);
let answerEight = document.querySelector(".out-8");

function f8() {
  let val = inputEight.value;
  let arr = [];
  let coutn = "";
  arr[0] = val;
  console.log(arr);
  for (let i = 0; i < d8.length; i++) {
    arr.push(d8[i]);
  }
  //   console.log(arr);
  showArr(answerEight, arr);
}

//Task9. Напишите функцию f8, которая эмулирует работу метода shift - на примере массива d9.
d9 = [100, 200, 300, 400, 700, 121];
let buttonNine = (document.querySelector(".b-9").onclick = f9);
let answerNine = document.querySelector(".out-9");

function f9() {
  showArr(answerNine, d9.splice(1));
}

//Task10. Напишите функцию f10, которая применяет к массиву d10 метод reverse и выводит полученный массив в out-10
d10 = [3, 14, 15, 92, 6];
let buttonTen = (document.querySelector(".b-10").onclick = f10);
let answerTen = document.querySelector(".out-10");

function f10() {
  showArr(answerTen, d10.reverse());
}

//Task11. Напишите функцию, которая получает число из input i-11, переводит в число, и с помощью метода indexOf проверяет наличие в массиве d11. Функция выводит в out-11 -1 если такого числа нет в массиве, либо его индекс в массиве.
d11 = [2, 3, 4, 5, 6, 7];
let buttonEleven = (document.querySelector(".b-11").onclick = f11);
let inputEleven = document.querySelector(".i-11");
let answerEleven = document.querySelector(".out-11");

function f11() {
  let val = +inputEleven.value;
  showArr(answerEleven, d11.indexOf(val));
}

//Task12. Напишите функцию f12, которая эмулирует работу метода indexOf - ищет введенное число в массиве d12 (перебором). Если числа нет - выводит -1, если есть - его позицию в массиве.
d12 = [6, 62, 60, 70, 1, 5];
let buttonTwelve = (document.querySelector(".b-12").onclick = f12);
let inputTwelve = document.querySelector(".i-12");
let answerTwelve = document.querySelector(".out-12");

function f12() {
  let val = +inputTwelve.value;
  let num = "";
  for (let i = 0; i < d12.length; i++) {
    if (d12[i] === val) {
      console.log((num = d12[i]));
      break;
    } else {
      console.log((num = "-1"));
    }
  }
  showArr(answerTwelve, num);
}

//Task13. Напишите функцию f13, которая эмулирует работу метода reverse. Т.е. создает новый массив на основе d13 с обратным порядком элементов и выводит в out-13.
d13 = [6, 0, 22, 1, 4, 76];
let buttonThirteen = (document.querySelector(".b-13").onclick = f13);
let answerThirteen = document.querySelector(".out-13");

function f13() {
  let num = [];
  for (let i = d13.length - 1; i > -1; i--) {
    num.push(d13[i]);
    console.log(num);
  }
  showArr(answerThirteen, num);
}

//Task14. Напишите функцию, которая получает i-14, переводит в число, а потом заполняет массив d14 так, что количество элементов равно введенному числу, и каждый элемент равен 1. Т.е. пользователь ввел 5, массив будет [1,1,1,1,1]. Выведите массив в out-14.
d14 = [];
let buttonFourteen = (document.querySelector(".b-14").onclick = f14);
let inputFourteen = document.querySelector(".i-14");
let answerFourteen = document.querySelector(".out-14");

function f14() {
  let a = +inputFourteen.value;
  console.log(a);
  // let num = [];
  for (let i = 0; i < a; i++) {
    d14.push(1);
  }
  showArr(answerFourteen, d14);
}

//Task15. Напишите функцию f15, которая вначале проверяет, есть ли элемент из i-15 в массиве d15 (переводим в число), а потом - если нет - добавляет его в массив.
d15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
let buttonFiveteen = (document.querySelector(".b-15").onclick = f15);
let inputFiveteen = document.querySelector(".i-15");
let answerFiveteen = document.querySelector(".out-15");
let arr = [];
let number = [];

function f15() {
  let num = inputFiveteen.value;
  // console.log(num);
  for (let i = 0; i < d15.length; i++) {
    // console.log(d15[i]);
    if (!d15[i] == num) {
      console.log("no");
    } else {
      number.push(num);
      break;
    }
  }
  console.log(number);
  // console.log(num);
}

//Task16. Даны два массива d161 и d162 - используя метод concat - добавьте в массив d16 результат применения concat между массивом d161 и d162.
let d16 = [];
let d161 = [5, 6, 7, 8, 9];
let d162 = [23, 24, 56, 87];
let buttonSixteen = (document.querySelector(".b-16").onclick = f16);
let answerSixteen = document.querySelector(".out-16");

function f16() {
  d16 = d161.concat(d162);
  showArr(answerSixteen, d16);
}

//Task17. Напишите функцию f17, которая эмулирует работу метода concat. Функция должна объедиять массивы d171 и d172 и записывать результат в d17. Для эмуляции используйт цикл.
d17 = [];
d171 = ["a", "b", "c", "d"];
d172 = [1, 2, 3, 4, 5];
let buttonSeventeen = (document.querySelector(".b-17").onclick = f17);
let answerSeventeen = document.querySelector(".out-17");

function f17() {
  for (let i = 0; i < d171.length; i++) {
    d17.push(d171[i]);
  }
  for (let j = 0; j < d172.length; j++) {
    d17.push(d172[j]);
  }
  console.log(d17);
  showArr(answerSeventeen, d17);
}

//Task18. Напишите функцию f18, которая получает значение из i-18 и проверяет есть ли такое значение в массиве d18 c использованием метода includes. Результат применения метода - выводится в .out-18.
d18 = ["b", "c", "45", "e", "z", "y"];
let buttonEighteen = (document.querySelector(".b-18").onclick = f18);
let answerEighteen = document.querySelector(".out-18");
let inputEighteen = document.querySelector(".i-18");

function f18() {
  let num = inputEighteen.value;
  let res = "";
  for (let i = 0; i < d18.length; i++) {
    res = d18[i].includes(num);
  }
  showArr(answerEighteen, res);
}

//Task19. Напишите фукнцию f19, которая выводит самую длинную строку maxString из массива d19 в out-19.
let d19 = [
  "Your",
  "payment",
  "method",
  "will",
  "automatically",
  "be",
  "charged",
  "in",
  "advance",
  "every",
];
let buttonNineteen = (document.querySelector(".b-19").onclick = f19);
let answerNineteen = document.querySelector(".out-19");

function f19() {
  let arr = d19[0];
  for (let i = 0; i < d19.length; i++) {
    if (d19[i].length > arr.length) {
      console.log("yes");
      console.log((arr = d19[i]));
    } else {
      console.log("no");
    }
  }
  showArr(answerNineteen, arr);
}

//Task20. Напишите функцию f20, которая применяет к массиву d20 метод join с параметрами и соединяет элементы массива в одну строку. Результат выводит в .out-20. В качестве разделителя укажите два апострофа без пробела.
d20 = [4, 5, 6, 7, 8, 9, 10];
let buttonTwenty = (document.querySelector(".b-20").onclick = f20);
let answerTwenty = document.querySelector(".out-20");

function f20() {
  showArr(answerTwenty, d20.join(" - - "));
}
