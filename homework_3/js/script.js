//task1. При нажатии кнопки b-1 срабатывает функция f1. Функция должна прочитать содержимое i-1 и сравнить его с числом 4 (сравнение ==). Результат сравнения - true или false выведите в out-1.
let btnOne = document.querySelector("#b-1");
let inputOne = document.querySelector("#i-1");
let answerOne = document.querySelector("#out-1");
btnOne.onclick = f1;
function f1() {
  let b = inputOne.value;
  console.log(b);
  if (b == 4) {
    console.log(true);
    answerOne.innerHTML = true;
  } else {
    console.log(false);
    answerOne.innerHTML = false;
  }
}

//task2. Даны две переменные a21 и a22. При нажатии кнопки b-2, запускается функция f2. Функция должна сравнить переменные с помощью if else и вывести в out-2 число, которое больше. Вариант равенства переменных не рассматриваем.
let btnTwo = document.querySelector("#b-2");
let inputTwo_one = document.querySelector("#i-2_one");
let inputTwo_two = document.querySelector("#i-2_two");
let answerTwo = document.querySelector("#out-2");
btnTwo.onclick = f2;

function f2() {
  let a21 = +inputTwo_one.value;
  let a22 = +inputTwo_two.value;
  if (a21 > a22) {
    console.log(a21);
    answerTwo.innerHTML = a21;
  } else {
    console.log(a22);
    answerTwo.innerHTML = a22;
  }
}

//task3. Даны 2 input - i-31 и i-32, оба - input[type=number]. При нажатии кнопки b-3 срабатывает функция f3. Функция должна прочитать содержимое i-31 и i-32 в переменные и сравнить их, вывести в out-3 большее число. Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111.
let btnThree = document.querySelector("#b-3");
let inputThree_one = document.querySelector("#i-31");
let inputThree_two = document.querySelector("#i-32");
let answerThree = document.querySelector("#out-3");
btnThree.onclick = f3;

function f3() {
  let b1 = +inputThree_one.value;
  let b2 = +inputThree_two.value;
  if (b1 > b2) {
    console.log(b1);
    answerThree.innerHTML = b1;
  } else {
    console.log(b2);
    answerThree.innerHTML = b2;
  }
}

//task4. Создайте на странице input[type=number] с классом i-4, куда пользователь может ввести год своего рождения. Есть кнопка b-4 которая запускает функцию f4. Функция должна вывести в .out-4 число 1 если пользователю больше или равно 18 лет, и 0 если меньше.
let btnFour = document.querySelector("#b-4");
let inputFour = document.querySelector("#i-4");
let answerFour = document.querySelector("#out-4");
btnFour.onclick = f4;

function f4() {
  let d = parseInt(new Date().getFullYear());
  let b1 = inputFour.value;
  if (d - b1 > 18) {
    console.log(b1);
    answerFour.innerHTML = 1;
  } else {
    console.log(0);
    answerFour.innerHTML = 0;
  }
}

//task5. Создайте на странице input[type=number] с классом i-5, куда пользователь может ввести число. Есть кнопка b-5 которая запускает функцию f5. Функция должна вывести в .out-5 символ m если число меньше нуля, 0 если число равно нулю и 1 если больше.
let btnFive = document.querySelector("#b-5");
let inputFive = document.querySelector("#i-5");
let answerFive = document.querySelector("#out-5");
btnFive.onclick = f5;

function f5() {
  let b1 = inputFive.value;
  if (b1 < 0) {
    console.log(b1);
    answerFive.innerHTML = "m";
  } else {
    console.log(0);
    answerFive.innerHTML = 0;
  }
}

//task6. Создайте на странице input[type=number] с классом i-6, куда пользователь может ввести число. Есть кнопка b-6 которая запускает функцию f6. Функция должна вывести в .out-6 слово even если число четное и odd если нечетное. Для проверки четности используется целочисленный остаток от деления на 2 (оператор %). Если остаток равен нулю - четное, нет - нечетное.
let btnSix = document.querySelector("#b-6");
let inputSix = document.querySelector("#i-6");
let answerSix = document.querySelector("#out-6");
btnSix.onclick = f6;

function f6() {
  let b1 = inputSix.value;
  if (b1 % 2 == 0) {
    answerSix.innerHTML = "even";
  } else {
    answerSix.innerHTML = "odd";
  }
}

//task7. Даны 2 input - i-71 и i-72, оба - input[type=number]. При нажатии кнопки b-7 срабатывает функция f7. Функция должна число из i-71 возвести в степень i-72, вывести результат в out-7. Для возведения в степень можно использовать **, или Math.pow.
let btnSeven = document.querySelector("#b-7");
let inputSeven_one = document.querySelector("#i-71");
let inputSeven_two = document.querySelector("#i-72");
let answerSeven = document.querySelector("#out-7");
btnSeven.onclick = f7;

function f7() {
  let b1 = inputSeven_one.value;
  let b2 = inputSeven_two.value;
  answerSeven.innerHTML = b1 ** b2;
}

//task8. Дан select s-8, который содержит 3 значения: 1, 2, 3. Дана кнопка b-8. При ее нажатии срабатывает функция f8. Функция должна получить выбранное в select число, потом с помощью switch case сравнить его поочередно с ‘1’, ‘2’, ‘3’. И если число выбрано - 1, то вывести в out-8 строку one, если 2 - two, если 3 - three.
let btnEight = document.querySelector("#b-8");
let selectEight = document.querySelector("#s-8");
let answerEight = document.querySelector("#out-8");
btnEight.onclick = f8;

function f8() {
  let b1 = +selectEight.value;
  switch (b1) {
    case 1:
      answerEight.innerHTML = "one";
      break;
    case 2:
      answerEight.innerHTML = "two";
      break;
    case 3:
      answerEight.innerHTML = "three";
      break;
    default:
      answerEight.innerHTML = "write number for 1 to 3";
  }
}

//task9. Создайте на странице input[type=number] с классом i-9, куда пользователь может ввести номер квартиры. Есть кнопка b-9 которая запускает функцию f9. Функция должна вывести в .out-9 номер подъезда, в котором находится квартира.
// если от 1 до 32 - то вывести цифру 1
// если от 33 до 43 - то вывести 2
// если от 44 до 64 - то 3.
// В противном случае, вывести 0.
let btnNine = document.querySelector("#b-9");
let inputNine = document.querySelector("#i-9");
let answerNine = document.querySelector("#out-9");
btnNine.onclick = f9;

function f9() {
  let b1 = inputNine.value;
  if (b1 >= 1 && b1 <= 32) {
    answerNine.innerHTML = 1;
  } else if (b1 >= 33 && b1 <= 43) {
    answerNine.innerHTML = 2;
  } else if (b1 >= 44 && b1 <= 64) {
    answerNine.innerHTML = 3;
  } else {
    answerNine.innerHTML = 0;
  }
}

//task10. Дан select s-100. По нажатию кнопки, выведите value выбранного option в out-10.
let btnTen = document.querySelector("#b-10");
let selectTen = document.querySelector("#s-100");
let answerTen = document.querySelector("#out-10");
btnTen.onclick = f10;

function f10() {
  let b1 = +selectTen.value;
  switch (b1) {
    case 1:
      answerTen.innerHTML = b1;
      break;
    case 2:
      answerTen.innerHTML = b1;
      break;
    case 3:
      answerTen.innerHTML = b1;
      break;
  }
}

//task11. Дан select s-110. По изменению состояния select (событие onchange) выведите value выбранного option в out-11.
let selectEleven = document.querySelector("#s-110");
let answerEleven = document.querySelector("#out-11");
selectEleven.onchange = f11;

function f11() {
  let b1 = +selectEleven.value;
  switch (b1) {
    case 1:
      answerEleven.innerHTML = b1;
      break;
    case 2:
      answerEleven.innerHTML = b1;
      break;
    case 3:
      answerEleven.innerHTML = b1;
      break;
  }
}

//task12. Дан input i-120. По нажатию кнопки получите значение из input в переменную, а затем выведите в out-12 typeof полученной переменной. Typeof позволяет определить тип данных. Обратите внимание, данная задача уже решена, нужно убрать комментарии и изучить работу.
let btnTwelve = document.querySelector("#b-12");
let inputTwelve = document.querySelector("#i-120");
let answerTwelve = document.querySelector("#out-12");
btnTwelve.onclick = f12;

function f12() {
  let b1 = inputTwelve.value;
  answerTwelve.innerHTML = typeof b1;
}

//task13. Дан input i-130. В отличие от предыдущего задания - input type number. По нажатию кнопки получите значение из input в переменную, а затем выведите в out-13 typeof полученной переменной. Typeof позволяет определить тип данных. Если вы правильно все сделали - то удивительно, но тип данных будет string! Подумайте почему так?
let btnThirteen = document.querySelector("#b-13");
let inputThirteen = document.querySelector("#i-130");
let answerThirteen = document.querySelector("#out-13");
btnThirteen.onclick = f13;

function f13() {
  let b1 = inputThirteen.value;
  answerThirteen.innerHTML = typeof b1;
}

//task14. Дан input i-141 и input-142, type=number. Дан select s-143, который содержит две операции - +, -, *, / . Дана кнопка b-14, при нажатии на которую срабатывает функция f14. Функция выводит в out-14 результат операций выбранной в 3-м select к числам введенным в первом и втором input. Например выбрано 1 13 +, нужно вывести результат операции 1+13 т.е. 14.
let btnFourteen = document.querySelector("#b-14");
let inputFourteen_one = document.querySelector("#i-141");
let inputFourteen_two = document.querySelector("#i-142");
let selectFourteen = document.querySelector("#s-143");
let answerFourteen = document.querySelector("#out-14");
btnFourteen.onclick = f14;

function f14() {
  let n1 = +inputFourteen_one.value;
  let n2 = +inputFourteen_two.value;
  let s = selectFourteen.value;
  switch (s) {
    case "*":
      answerFourteen.innerHTML = n1 * n2;
      break;
    case "/":
      answerFourteen.innerHTML = n1 / n2;
      break;
    case "+":
      answerFourteen.innerHTML = n1 + n2;
      break;
    case "-":
      answerFourteen.innerHTML = n1 - n2;
      break;
    default:
      answerFourteen.innerHTML = "not";
  }
}

//task15. Дан select s-151 и s-152, каждый из которых содержит 1 и 0. Дан select s-153, который содержит две операции - && и || . Дана кнопка b-15, при нажатии на которую срабатывает функция f15. Функция выводит в out-15 результат логических операций выбранных в 3 select к числам выбранным в первом и втором select. Например выбрано 1 1 &&, нужно вывести результат операции 1&&1 т.е. 1 или 0.
let selectFiveteen_one = document.querySelector("#s-151");
let selectFiveteen_two = document.querySelector("#s-152");
let selectFiveteen_three = document.querySelector("#s-153");
let answerFiveteen = document.querySelector("#out-15");
let buttonFiveteen = document.querySelector("#b-15");
buttonFiveteen.onclick = f15;

function f15() {
  let s1 = selectFiveteen_one.value;
  let s2 = selectFiveteen_two.value;
  let s3 = selectFiveteen_three.value;
  //   console.log(s1);
  //   console.log(s2);
  //   console.log(s3);
  answerFiveteen.innerHTML = `${s1} ${s3} ${s2} `;
}
