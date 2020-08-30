//Task1. Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:
// 1 2 3 4 5 6 7 8 9 ... 49 50
// от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла while.
let answer_one = document.querySelector("#out-1");
let button_one = (document.querySelector("#b-1").onclick = () => {
  let i = 0;
  let count = "";
  while (i < 50) {
    count += i + " ";
    i++;
  }
  answer_one.textContent = "task1." + count;
});

//Task2. Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:
// 2 4 6 ... 122
// от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла while.
let answer_two = document.querySelector("#out-2");
let button_two = (document.querySelector("#b-2").onclick = () => {
  let i = 0;
  let count = "";
  while (i < 122) {
    i = i + 2;
    count += i + " ";
  }
  answer_two.textContent = "task2." + count;
});

//Task3.Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида:
// 25 24 23 22 . . 7
// от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла while.
let answer_three = document.querySelector("#out-3");
let button_three = (document.querySelector("#b-3").onclick = () => {
  let i = 0;
  let count = "";
  while (i < 22) {
    i = i + 7;
    count += i + " ";
  }
  answer_three.textContent = "task3." + count;
});

//Task4. Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида:
// 77_74_71_68_65_62_ ... _38_35_
// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла while.
let answer_four = document.querySelector("#out-4");
let button_four = (document.querySelector("#b-4").onclick = () => {
  let i = 77;
  let count = "";
  while (i > 0) {
    if (i === 32) {
      break;
    } else {
      count += i + "_";
    }
    i = i - 3;
  }
  answer_four.textContent = "task4." + count;
});

//Task5. Кнопка b-5 запускает функцию t5. Функция должна выводить в out-5 строку вида:
// 1_*2_**3_*4_** ... 17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла while.
let answer_five = document.querySelector("#out-5");
let button_five = (document.querySelector("#b-5").onclick = () => {
  let i = 0;
  let count = "";
  while (i < 18) {
    if (i % 2 === 0) {
      count += i + "_**";
    } else {
      count += i + "_*";
    }
    i++;
  }
  answer_five.textContent = "task5." + count;
});

//Task6. Кнопка b-6 запускает функцию t6. Функция должна выводить в out-6 строку вида:
// ******
// ******
// ******
// Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов и символ переноса строки br. Количество строк (итераций, повторений) цикла while вводит пользователь в i-6.
let answer_six = document.querySelector("#out-6");
let button_six = (document.querySelector("#b-6").onclick = () => {
  let i = 0;
  let count = "";
  while (i < 3) {
    let j = 0;
    while (j < 6) {
      j++;
      count += "*";
    }
    count += "<br>";
    i++;
  }
  answer_six.innerHTML = "task6.<br><br>" + count;
});

//Task7. Есть input i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт). По нажатию кнопки b-7 должна запускаться функция f7, которая выводит в out-7 числа от введенного пользователем до нуля включительно. Разделитель пробел. Если пользователь ввел 4 и нажал кнопку, мы получим:
// 4 3 2 1 0
// Задача решается с помощью цикла while.
let answer_seven = document.querySelector("#out-7");
let input_seven = document.querySelector("#i-7");
let button_seven = (document.querySelector("#b-7").onclick = f7);

function f7() {
  let num = input_seven.value;
  console.log(num);
  let i = num;
  let count = "";
  while (i > 0) {
    count += i + " ";
    i--;
  }
  answer_seven.textContent = "task7. " + count;
}

//Task8. Есть input i-81 и i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт). Считаем, что второе число всегда больше первого. По нажатию кнопки b-8 должна запускаться функция f8, которая выводит в out-8 числа от первого введенного до второго включительно, с шагом 1. Разделитель пробел. Если пользователь ввел 4 и 8 и нажал кнопку, мы получим:
// 4 5 6 7 8
// Задача решается с помощью цикла while.
let answer_eight = document.querySelector("#out-8");
let input_eightOne = document.querySelector("#i-81");
let input_eightTwo = document.querySelector("#i-82");
let button_eight = (document.querySelector("#b-8").onclick = f8);

function f8() {
  let one = +input_eightOne.value;
  let two = +input_eightTwo.value;
  console.log(one);
  console.log(two);
  let i = one;
  let count = "";
  if (one === 0 || two === 0) {
    count = "0";
  } else {
    while (i < two) {
      count += i + " ";
      i++;
    }
  }
  answer_eight.textContent = "task8. " + count;
}

//Task9. Есть input i-91 и i-92 куда пользователь может ввести числа. По нажатию кнопки b-9 должна запускаться функция f9, которая выводит в out-9 числа от меньшего введенного до большего включительно, с шагом 1. Разделитель пробел. Если пользователь ввел 4 и 8 и нажал кнопку, мы получим:
// 4 5 6 7 8
// если ввел 8 и 6, то получим
// 6 7 8
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку, а потом запускаем цикл while.
let answer_nine = document.querySelector("#out-9");
let input_nineOne = document.querySelector("#i-91");
let input_nineTwo = document.querySelector("#i-92");
let button_nine = (document.querySelector("#b-9").onclick = f9);

function f9() {
  let one = +input_nineOne.value;
  let two = +input_nineTwo.value;
  console.log(one);
  console.log(two);
  let i = one;
  let count = "";
  if (one === 0 || two === 0) {
    count = "0";
  } else {
    while (i < two) {
      count += i + " ";
      i++;
    }
  }
  answer_nine.textContent = "task9. " + count;
}

//Task10. Кнопка b-10 запускает функцию t10. Функция должна выводить в out-10 четные годы от 1950 до 2000 включительно. Разделитель - пробел. Задача решается через цикл while, а четность - через шаг (равный 2).
let answer_ten = document.querySelector("#out-10");
let button_ten = (document.querySelector("#b-10").onclick = t10);

function t10() {
  let i = 1950;
  let count = "";
  while (i < 2000) {
    if (i % 2 === 0) {
      count += i + " ";
    }
    i++;
  }
  answer_ten.textContent = "task10. " + count;
}

//Task11. Кнопка b-11 запускает функцию t11. Функция должна: получить все div.div-11 перебрать их с помощью цикла while. Обращение к div выглядит так elem[i] вывести в out-11 содержимое каждого блока. Разделитель - пробел. В результате должно получиться так:
// one 3 4 two
let answer_elevn = document.querySelector("#out-11");
let divs = document.querySelectorAll(".item-11");
let button_elevn = (document.querySelector("#b-11").onclick = t11);

function t11() {
  let i = 0;
  let count = "";
  while (i < divs.length) {
    count += divs[i].outerHTML + " ";
    console.log(count);
    i++;
  }
  answer_elevn.textContent = "task11. " + count;
}

//Task12. Кнопка b-12 запускает функцию t12. Функция должна: получить все div.div-12 перебрать их с помощью цикла while. Обращение к div выглядит так elem[i] применить к каждому elem[i].style.background = ‘orange’
let answer_twelve = document.querySelector("#out-12");
let divs_twelve = document.querySelectorAll(".item-12");
let button_twelve = (document.querySelector("#b-12").onclick = t12);

function t12() {
  let i = 0;
  while (i < divs_twelve.length) {
    divs_twelve[i].style.backgroundColor = "orange";
    divs_twelve[i].style.margin = "5px 0";
    divs_twelve[i].style.padding = "5px 5px";
    i++;
  }
}

//Task13.Кнопка b-13 запускает функцию t13. Функция должна: получить все input.i-13 перебрать их с помощью цикла while. Обращение к элементу выглядит так elem[i] применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3...
let answer_thirteen = document.querySelector("#out-13");
let input_thirteen = document.querySelectorAll("#i-13");
let button_thirteen = (document.querySelector("#b-13").onclick = t13);

function t13() {
  let i = 0;
  let count = "";
  while (i < input_thirteen.length) {
    count += input_thirteen[i].value + " ";
    console.log(count);
    i++;
  }
  answer_thirteen.textContent = "task13. " + count;
}

//Task14. Кнопка b-14 запускает функцию t14 Функция должна: получить все input.i-14 перебрать их с помощью цикла while. Обращение к элементу выглядит так elem[i] вывести в out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.
let answer_fourteen = document.querySelector("#out-14");
let input_fourteen = document.querySelectorAll("#i-14");
let button_fourteen = (document.querySelector("#b-14").onclick = t14);

function t14() {
  let i = 0;
  let count = "";
  while (i < input_fourteen.length) {
    // count = input_fourteen[i];
    // console.dir(count);
    if (input_fourteen[i].checked) {
      count = input_fourteen[i].value + " ";
      console.log(count);
    }
    i++;
  }
  answer_fourteen.textContent = "task14. " + count;
}

//Task15. Кнопка b-15 запускает функцию t15 Функция должна выводить следующую последовательность в out-15:
// 10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10
// Для вывода использовать цикл while.
let answer_fiveteen = document.querySelector("#out-15");
let button_fiveteen = (document.querySelector("#b-15").onclick = t15);

function t15() {
  let i = 10;
  let count = "";
  let z = 0;
  let x = 0;
  let a = 4;
  let b = 4;
  while (i >= 5) {
    count += i + " ";
    i--;
    let j = 0;
    while (j < 5) {
      if (j <= z && j >= x) {
        count += j + " ";
      } else {
        count += " ";
      }
      j++;
    }
    z++;
    x++;
  }
  let f = 5;
  while (f <= 10) {
    count += f + " ";
    f++;
    let q = 5;
    while (q >= 0) {
      if (q <= a && q >= b) {
        count += q + " ";
      }
      q--;
    }
    a--;
    b--;
  }

  answer_fiveteen.textContent = "task15. " + count;
}
