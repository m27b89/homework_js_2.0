//Task1. Создайте массив ar1 содержащий строки, числа, булевы значения. Выведите его в .out-1. Вывод - по нажатию кнопки b-1;
let outOne = document.querySelector(".out-1");
let ar1 = [1, 2, 3, false, true, "Hi"];
let buttonOne = (document.querySelector(".b-1").onclick = function () {
  outOne.innerHTML = ar1;
});

//Task2. Создайте массив ar2 содержащий строки, числа, булевы значения. Выведите его в div.out-2. Используйте шаблон вывода из кода в JS. Вывод - по нажатию кнопки b-2.
let outTwo = document.querySelector(".out-2");
let ar2 = [1, 2, 3, false, true, "Hello"];
let buttonTwo = (document.querySelector(".b-2").onclick = function () {
  outTwo.innerHTML = ar2;
});

//Task3. Создайте массив ar3, заполните его любыми значениями. Выведите длину массива.
let outThree = document.querySelector(".out-3");
let ar3 = [1, 2, 3, false, true, "Hi", 4, 66, 24, "world"];
let buttonThree = (document.querySelector(".b-3").onclick = function () {
  outThree.innerHTML = ar3.length;
});

//Task4. Создайте массив ar4. Выведите нулевой, третий, восьмой элемент массива в out-4 через пробел.
let outFour = document.querySelector(".out-4");
let ar4 = [1, 2, 3, false, true, "Hi", 5, 34, 3433, 22];
let buttonFour = (document.querySelector(".b-4").onclick = function () {
  outFour.innerHTML = ar4[0] + " " + ar4[3] + " " + ar4[8];
});

//Task5. Создайте массив ar5 длина которого больше 5. Выведите сумму нулевого, второго и третьего элементов массива (нуль, второй - и третий это индексы 0, 2, 3).
let outFive = document.querySelector(".out-5");
let ar5 = [5, 3, 1, 55, 7, 23, 2, 4, 4];
let buttonFive = (document.querySelector(".b-5").onclick = function () {
  outFive.innerHTML = ar5[0] + ar5[2] + ar5[3];
});

//Task6. Создайте массив ar6, который содержит ваше имя, знак зодиака, день рождения и месяц рождения. Выведите массив на страницу в div-6. Разделитель - пробел.
let outSix = document.querySelector(".out-6");
let ar6 = ["Ivanion", "Deva", 01, 09];
let buttonSix = (document.querySelector(".b-6").onclick = function () {
  outSix.innerHTML = ar6;
});

//Task7. Добавьте в массив ar7 значения 'vietnam' с индексом 7 , 'turkey' с индексом 6, 'italy' с индексом 5. Добавление элементов сделайте в f7. Выведите массив на страницу в .out-7. Разделитель - пробел. Обращаю ваше внимание! Это программирование. Поэтому - никаких больших букв и тому подобного!!!!
ar7 = ["china", "india", "brazil", "japan", "egypt"];
let outSeven = document.querySelector(".out-7");
let buttonSeven = (document.querySelector(".b-7").onclick = function () {
  ar7[7] = "vietnam";
  ar7[6] = "italy";
  let out = "";
  for (let i = 0; i < ar7.length; i++) {
    out += ar7[i] + " ";
  }
  outSeven.innerHTML = out;
});

//Task8. Добавьте в массив ar8 третий (индекс 3) элемент равный 3.14, 4 (индекс 4) элемент равный 17, 6 элемент (индекс 6) равный 5. Выведите массив в .out-8. Разделитель - дефис. В .out-8-1 выведите длину массива ar8.
let outEight = document.querySelector(".out-8");
let ar8 = [5, 3, 1, 55, 7, 23, 2, 4, 4];
let buttonEight = (document.querySelector(".b-8").onclick = function () {
  let out8 = "";
  ar8[3] = 3.14;
  ar8[4] = 17;
  ar8[6] = 5;
  for (let i = 0; i < ar8.length; i++) {
    out8 += ar8[i] + " - ";
  }
  outEight.innerHTML = out8;
});

//Task9. Выведите последний элемент массива ar9. Вывод последнего элемента - реализуйте по индексу. Чтобы рассчитать индекс последнего элемента - используйте на длину массива.
ar9 = [100, 200, 300, 400, 700, 121];
let outNine = document.querySelector(".out-9");
let buttonNine = (document.querySelector(".b-9").onclick = function () {
  outNine.innerHTML = ar9[ar9.length - 1];
});

//Task10. Выведите сумму первого (индекс 1) и последнего массива ar10 в блок out-10. Индекс последнего элемента массива не указывайте напрямую, а вычисляйте через длину массива.
ar10 = [100, 200, 300, 400, 700, 121];
let outTen = document.querySelector(".out-10");
let buttonTen = (document.querySelector(".b-10").onclick = function () {
  outTen.innerHTML = `${ar10[0]} + ${ar10[ar10.length - 1]} = ${
    ar10[0] + ar10[ar10.length - 1]
  }`;
});

//Task11. Напишите функцию, которая меняет местами второй (индекс 2) и четвертый (индекс 4) элемент массива ar11 и выводит его в out-11. Разделитель - пробел.
ar11 = [2, 3, 4, 5, 6, 7];
let outElevn = document.querySelector(".out-11");
let buttonElevn = (document.querySelector(".b-11").onclick = function () {
  let arr = ar11[2];
  ar11[2] = ar11[4];
  ar11[4] = arr;
  outElevn.innerHTML = ar11;
});

//Task12. Напишите функцию f12, которая меняет местами нулевой и последний элемент массива ar12 и выводит его в out-12. Разделитель - пробел. Последний элемент вычислять через длину массива.
ar12 = ["test", "west", "list", "class", "best"];
let outTwelve = document.querySelector(".out-12");
let buttonTwelve = (document.querySelector(".b-12").onclick = function () {
  let arr = ar12[0];
  ar12[0] = ar12[ar12.length - 1];
  ar12[ar12.length - 1] = arr;
  outTwelve.innerHTML = ar12;
});

//Task13. Выведите массив ar13 в out-13 в формате индекс пробел значение пробел.
ar13 = ["test", "west", "list", "class", "best"];
let outThirteen = document.querySelector(".out-13");
let buttonThirteen = (document.querySelector(".b-13").onclick = function () {
  let out = "";
  for (let i = 0; i < ar13.length; i++) {
    out += i + " " + ar13[i] + " ";
  }
  outThirteen.innerHTML = out;
});

//Task14. Используя цикл выведите на страницу массив ar14 в обратном порядке. Разделитель - пробел.
ar14 = [1, 2, 3, "hello", 66];
let outFourteen = document.querySelector(".out-14");
let buttonFourteen = (document.querySelector(".b-14").onclick = function () {
  let out = "";
  for (let i = ar14.length - 1; i > -1; i--) {
    out += ar14[i] + " ";
  }
  outFourteen.innerHTML = out;
});

//Task15. Используя цикл выведите на страницу элементы массива ar15, которые больше нуля. Разделитель - пробел.
ar15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
let outFiveteen = document.querySelector(".out-15");
let buttonFiveteen = (document.querySelector(".b-15").onclick = function () {
  let out = "";
  for (let i = 0; i < ar15.length; i++) {
    if (ar15[i] > 0) {
      out += ar15[i] + " ";
    }
  }
  outFiveteen.innerHTML = out;
});

//Task16. Выполните перебор массива arr16. Четные элементы добавьте в массив ar16_even, нечетные в ar16_odd. Добавление в массив - по индексу, а не +=!!!!!. Протестируйте задачу на повторный запуск! Выведите ar16_odd в div.out-16-odd, а ar16_even в div.out-16-even. Разделитель - пробел.
ar16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
ar16_odd = [];
ar16_even = [];
let outSixteen = document.querySelector(".out-16");
let buttonSixteen = (document.querySelector(".b-16").onclick = function () {
  for (let i = ar16.length - 1; i > -1; i--) {
    if (ar16[i] % 2 === 0) {
      ar16_odd[i] = ar16[i];
    } else {
      ar16_even[i] = ar16[i];
    }
  }
  outSixteen.innerHTML = `even: ${ar16_even} add: ${ar16_odd}`;
});

//Task17. Используя цикл выведите в .out-17 количество элементов ar17, значение которых больше 3. Для расчета используйте цикл и переменную счетчик.
ar17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
let outSeventeen = document.querySelector(".out-17");
let buttonSeventeen = (document.querySelector(".b-17").onclick = function () {
  let count = 0;
  for (let i = 0; i < ar17.length; i++) {
    if (ar17[i] > 3) {
      count += ar17[i];
    }
  }
  outSeventeen.innerHTML = count;
});

//Task18. Используя цикл выведите в .out-18 максимальный элемент массива ar18.
ar18 = [15, 24, 13, 78, 21, 4, 45, 67];
let outEighteen = document.querySelector(".out-18");
let buttonEighteen = (document.querySelector(".b-18").onclick = function () {
  let count = ar18[0];
  for (let i = 0; i < ar18.length; i++) {
    if (ar18[i] > count) {
      count = ar18[i];
    }
  }
  outEighteen.innerHTML = count;
});

//Task19. Выведите в .out-19 индекс минимального элемента в массиве ar19
ar19 = [15, 424, 313, 78, 241, 4, 45, 67];
let outNineteen = document.querySelector(".out-19");
let buttonNineteen = (document.querySelector(".b-19").onclick = function () {
  let count = ar19[0];
  for (let i = 0; i < ar19.length; i++) {
    if (ar19[i] < count) {
      count = ar19[i];
    }
  }
  outNineteen.innerHTML = count;
});

//Task20. Выведите в .out-20 сумму элементов в массиве ar20.
ar20 = [4, 5, 6, 7, 8, 9, 10];
let outTwenty = document.querySelector(".out-20");
let buttontwenty = (document.querySelector(".b-20").onclick = function () {
  let count = 0;
  for (let i = 0; i < ar20.length; i++) {
    count += ar20[i];
  }
  outTwenty.innerHTML = count;
});
