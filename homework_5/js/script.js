// Task1.Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:
// 1 2 3 4 5 6 7 8 9 ... 49 50
// от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла.
let button_one = document.querySelector("#b-1");
let answer_one = document.querySelector("#out-1");
let coutn_one = "";
let coutn_fiveteen = 50;
button_one.onclick = t1;
function t1() {
  for (let i = 0; i <= coutn_fiveteen; i++) {
    coutn_one += i + " ";
  }
  answer_one.innerHTML += coutn_one;
}

// Task2.Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:
// 2 4 6 ... 122
// от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла.
let button_two = document.querySelector("#b-2");
let answer_two = document.querySelector("#out-2");
let coutn_two = "";
let coutn_AHundredAndTwentyTwo = 122;
button_two.onclick = t2;
function t2() {
  for (let i = 0; i <= coutn_AHundredAndTwentyTwo; i = i + 2) {
    coutn_two += i + " ";
  }
  answer_two.innerHTML += coutn_two;
}

// Task3.Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида:
// 25 24 23 22 . . 7
// от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла.
let button_three = document.querySelector("#b-3");
let answer_three = document.querySelector("#out-3");
let coutn_three = "";
let coutn_twentyFive = 25;
button_three.onclick = t3;
function t3() {
  for (let i = coutn_twentyFive; i >= 0; i--) {
    coutn_three += i + " ";
  }
  answer_three.innerHTML += coutn_three;
}

// Task4.Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида:
// 77_74_71_68_65_62_ ... _38_35_
// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла.
let button_four = document.querySelector("#b-4");
let answer_four = document.querySelector("#out-4");
let coutn_four = "";
let coutn_seventySeven = 77;
button_four.onclick = t4;
function t4() {
  for (let i = coutn_seventySeven; i >= 0; i = i - 3) {
    coutn_four += i + "_";
    if (i == 35) break;
  }
  answer_four.innerHTML += coutn_four;
}

// Task5.Кнопка b-5 запускает функцию t5. Функция должна выводить в out-5 строку вида:
// 1_*2_**3_*4_** ... 17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла.
let button_five = document.querySelector("#b-5");
let answer_five = document.querySelector("#out-5");
let coutn_five = "";
let coutn_sevenTeen = 17;
button_five.onclick = t5;
function t5() {
  for (let i = 1; i <= coutn_sevenTeen; i++) {
    if (i === 18) {
      break;
    } else if (i % 2 === 0) {
      coutn_five += i + "_**";
    } else {
      coutn_five += i + "_*";
    }
  }
  answer_five.innerHTML += coutn_five;
}

// Task6.Кнопка b-6 запускает функцию t6. Функция должна выводить в out-6 строку вида:
// ******
// ******
// ******
// Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов и символ переноса строки br. Количество строк (итераций, повторений) цикла вводит пользователь в i-6.
let button_six = document.querySelector("#b-6");
let answer_six = document.querySelector("#out-6");
let input_six = document.querySelector("#i-6");
let count_six = "";
let star = "*";
button_six.onclick = t6;
function t6() {
  let num = +input_six.value;
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      count_six += star;
    }
    count_six += "<br>";
  }
  answer_six.innerHTML = count_six;
}

// Task7.Есть input i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт). По нажатию кнопки b-7 должна запускаться функция f7, которая выводит в out-7 числа от введенного пользователем до нуля включительно. Разделитель пробел. Если пользователь ввел 4 и нажал кнопку, мы получим:
// 4 3 2 1 0
// Задача решается с помощью цикла.
let input_seven = document.querySelector("#i-7");
let answer_seven = document.querySelector("#out-7");
let button_seven = (document.querySelector("#b-7").onclick = () => {
  let count = "";
  let num = input_seven.value;
  for (let i = num; i >= 0; i--) {
    count += i + " ";
    // console.log(count);
  }
  answer_seven.innerHTML += count;
});

// Task8.Есть input i-81 и i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт). Считаем, что второе число всегда больше первого. По нажатию кнопки b-8 должна запускаться функция f8, которая выводит в out-8 числа от первого введенного до второго включительно, с шагом 1. Разделитель пробел. Если пользователь ввел 4 и 8 и нажал кнопку, мы получим:
// 4 5 6 7 8
// Задача решается с помощью цикла.
let input_eightOne = document.querySelector("#i-81");
let input_eightTwo = document.querySelector("#i-82");
let answer_eight = document.querySelector("#out-8");
let button_eight = (document.querySelector("#b-8").onclick = f8);

function f8() {
  let count = "";
  let one = input_eightOne.value;
  let two = input_eightTwo.value;
  for (let i = one; i <= two; i++) {
    count += i + " ";
  }
  answer_eight.innerHTML = count;
}

// Task9.Есть input i-91 и i-92 куда пользователь может ввести числа. По нажатию кнопки b-9 должна запускаться функция f9, которая выводит в out-9 числа от меньшего введенного до большего включительно, с шагом 1. Разделитель пробел. Если пользователь ввел 4 и 8 и нажал кнопку, мы получим:
// 4 5 6 7 8
// если ввел 8 и 6, то получим
// 6 7 8
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку, а потом запускаем цикл.
let input_nineOne = document.querySelector("#i-91");
let input_nineTwo = document.querySelector("#i-92");
let answer_nine = document.querySelector("#out-9");
let button_nine = (document.querySelector("#b-9").onclick = f9);

function f9() {
  let count = "";
  let one = input_nineOne.value;
  let two = input_nineTwo.value;
  for (let i = one; i <= two; i++) {
    count += i + " ";
  }
  answer_nine.innerHTML = count;
}

// Task10.Кнопка b-10 запускает функцию t10. Функция должна выводить в out-10 четные годы от 1950 до 2000 включительно. Разделитель - пробел. Задача решается через цикл, а четность - через шаг (равный 2).
let answer_ten = document.querySelector("#out-10");
let button_ten = (document.querySelector("#b-10").onclick = f10);

function f10() {
  let count = "";
  let start = 1950;
  let finish = 2000;
  for (let i = start; i <= finish; i = i + 2) {
    count += i + " ";
  }
  answer_ten.innerHTML = count;
}

// Task11.Кнопка b-11 запускает функцию t11. Функция должна: получить все div.div-11 перебрать их с помощью цикла. Обращение к div выглядит так elem[i] вывести в out-11 содержимое каждого блока. Разделитель - пробел. В результате должно получиться так:
// one 3 4 two
let divAll = document.querySelectorAll("div");
let answer_eleven = document.querySelector("#out-11");
let button_eleven = (document.querySelector("#b-11").onclick = f11);

function f11() {
  let count = "";
  //   console.log(divAll);
  for (let i = 0; i <= divAll.length - 1; i++) {
    count += divAll[i].id + " ";
  }
  answer_eleven.innerHTML = count;
}

// Task12.Кнопка b-12 запускает функцию t12. Функция должна: получить все div.div-12 перебрать их с помощью цикла. Обращение к div выглядит так elem[i] применить к каждому elem[i].style.background = ‘orange’.
let divSt = document.querySelectorAll("div");
let button_twelve = (document.querySelector("#b-12").onclick = f12);

function f12() {
  for (let i = 0; i <= divSt.length - 1; i++) {
    divSt[i].style.backgroundColor = `orange`;
  }
}

// Task13.Кнопка b-13 запускает функцию t13. Функция должна: получить все input.i-13 перебрать их с помощью цикла. Обращение к элементу выглядит так elem[i] применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3...
let input_thirTeenAll = document.querySelectorAll("#i-13");
let button_thirTeen = (document.querySelector("#b-13").onclick = f13);

function f13() {
  let elem = "";
  for (let i = 0; i <= input_thirTeenAll.length - 1; i++) {
    elem += " " + input_thirTeenAll[i].value;
    console.log(elem);
  }
}

// Task14.Кнопка b-14 запускает функцию t14 Функция должна: получить все input.i-14 перебрать их с помощью цикла. Обращение к элементу выглядит так elem[i] вывести в out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.
let input_fourTeenAll = document.querySelectorAll("#i-14");
let answer_fourTeen = document.querySelector("#out-14");
let button_fourTeen = (document.querySelector("#b-14").onclick = f14);

function f14() {
  let elem = "";
  for (let i = 0; i <= input_fourTeenAll.length - 1; i++) {
    if (input_fourTeenAll[i].checked) {
      elem += " " + input_fourTeenAll[i].value;
      console.log(elem);
      answer_fourTeen.innerHTML = elem;
    }
  }
}

// Task15.Кнопка b-15 запускает функцию t15 Функция должна выводить следующую последовательность в out-15:
// 10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10
// Для вывода использовать цикл.
let answer_fiveTeen = document.querySelector("#out-15");
let button_fiveTeen = (document.querySelector("#b-15").onclick = f15);

function f15() {
  let count = "";
  for (let i = 10; i >= 5; i--) {
    count += i + " ";
  }
  for (let j = 5; j <= 10; j++) {
    count += j + " ";
  }
  answer_fiveTeen.innerHTML += count;
}
