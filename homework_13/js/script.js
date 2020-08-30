//Task1. При нажатии b-1 выполняете функцию f1. Функция должна вывести в out-1 значение сохраненное под ключем two из массива a1. Возвратите это значение.
let a1 = {
  one: 15,
  two: 16,
  five: 20,
};
let buttonOne = (document.querySelector(".b-1").onclick = f1);
let answerOne = document.querySelector(".out-1");

function f1() {
  answerOne.innerHTML = a1.two;
}

//Task2. При нажатии b-2 выполняете функцию f2. Функция должна вывести в out-2 значение hi из массива a2. Возвратите это значение.
let a2 = {
  one: "hello",
  two: "mahai",
  five: "hi",
};
let buttonTwo = (document.querySelector(".b-2").onclick = f2);
let answerTwo = document.querySelector(".out-2");

function f2() {
  answerTwo.innerHTML = a2.five;
}

//Task3. При нажатии b-3 выполняете функцию f3. Функция должна вывести в out-3 значение hi из массива a3. Возвратите это значение. Вывод - через пробел.
let a3 = {
  one: "hello",
  two: "mahai",
  five: "hi",
};
let buttonThree = (document.querySelector(".b-3").onclick = f3);
let answerThree = document.querySelector(".out-3");

function f3() {
  answerThree.innerHTML = a3.five;
}

//Task4. Давайте напишем функцию f4, которая будет выводить массив a4 в out-4 при нажатии кнопки b-4. Формат вывода - ключ пробел значение перенос строки +'' <br>'. Функция должна возвращать строку в указанном формате вывода.Обратите внимание на пробел перед br!!!!!!!!
let a4 = {
  one: "hello",
  two: "mahai",
  five: "hi",
};
let buttonFour = (document.querySelector(".b-4").onclick = f4);
let answerFour = document.querySelector(".out-4");

function f4() {
  let out = "";
  for (let key in a4) {
    out += a4[key] + "<br>";
  }
  answerFour.innerHTML = out;
}

//Task5. Функция f4 жестко привязана к массиву a4. Это не удобно. Давайте напишем функцию f5, которая принимает массив как параметр и выводит его в формате указанном в функции в указанный блок (как второй параметр).
let buttonFive = (document.querySelector(".b-5").onclick = f5);
let answerFive = document.querySelector(".out-5");

function f5(arr, answer) {
  let out = "";
  for (let key in arr) {
    out += key + ": " + arr[key] + " ";
  }
  answer.innerHTML = out;
}

f5(a4, answerFive);

//Task6. Добавьте input .i-61 и i-62. При нажатии b-6 выполняете функцию f6. Функция должна получать из i-61 ключ, а из i-62 значение и добавлять его в массив a6. После этого, с помощью функции f5 выводите массив a6 в out-6.
let a6 = {};
let buttonSix = (document.querySelector(".b-6").onclick = f6);
let answerSix = document.querySelector(".out-6");
let inputSixOne = document.querySelector(".i-61");
let inputSixTwo = document.querySelector(".i-62");

function f6() {
  let a = inputSixOne.value;
  let b = inputSixTwo.value;
  a6[a] = b;
  console.log(a6);
  f5(a6, answerSix);
}

//Task7. Добавьте input .i-7. При нажатии b-7 выполняете функцию f7. Функция должна получать из i-7 ключ. Если такой ключ есть в a7 то выводить 1 в out-7, если нет - 0.
let a7 = {
  one: "hello",
  two: "mahai",
  five: "hi",
};
let buttonSeven = (document.querySelector(".b-7").onclick = f7);
let answerSeven = document.querySelector(".out-7");
let inputSeven = document.querySelector(".i-7");

function f7() {
  let a = inputSeven.value;
  let answer = "0";
  for (let key in a7) {
    if (a7[key] == a) {
      // console.log(a7[key]);
      answer = "1";
    }
  }
  answerSeven.innerHTML = answer;
}

//Task8. Добавьте input .i-8. При нажатии b-8 выполняете функцию f8. Функция должна выводить значение в out-8, если ключ введенный в i-8 есть в массиве, если нет - 0.
let a8 = {
  one: "hello",
  two: "mahai",
  five: "hi",
};
let buttonEight = (document.querySelector(".b-8").onclick = f8);
let answerEight = document.querySelector(".out-8");
let inputEight = document.querySelector(".i-8");

function f8() {
  let a = inputEight.value;
  let answer = "0";
  for (let key in a8) {
    // console.log(key);
    if (key == a) {
      answer = "1";
    }
  }
  answerEight.innerHTML = answer;
}

//Task9. Добавьте input .i-9. При нажатии b-9 выполняете функцию f9. Функция должна вывести в out-9 все ключи массива a9, которые содержат значение, равное значению в input.i-9. Вывод через пробел. Если значений - нет то выводить пустую строку.
let a9 = {
  one: "hello",
  two: "mahai",
  five: "hi",
};
let buttonNine = (document.querySelector(".b-9").onclick = f9);
let answerNine = document.querySelector(".out-9");
let inputNine = document.querySelector(".i-9");

function f9() {
  let a = inputNine.value;
  let answer = "";
  let keys = "";
  for (let key in a9) {
    keys += a9[key] + " ";
    if (a9[key] === a) {
      answer += keys;
    }
  }
  answerNine.innerHTML = answer;
}

//Task10. Давайте напишем полезную функцию f10, которая проверяет есть ли значение в ассоциативном массиве. Фукнция должна возвращать true если есть, и false если нет. Массив и значение передавать функции в качестве параметров.
let a10 = { one: "one" };
let buttonTen = (document.querySelector(".b-10").onclick = f10);
let answerTen = document.querySelector(".out-10");

function f10(arr, answer) {
  let res = false;
  for (let key in arr) {
    if (arr[key] !== null) {
      res = true;
    }
  }
  answer.innerHTML = res;
}

//Task11. При нажатии b-11 выполняете функцию f11. Функция должна получить ключ из i-11 и удалить запись из массива a11 с таким ключем. После этого вывести массив в out-11. Для вывода используйте функцию f5.
let a11 = {
  one: "hello",
  two: "mahai",
  five: "hi",
};
let buttonEleven = (document.querySelector(".b-11").onclick = f11);
let answerEleven = document.querySelector(".out-11");
let inputEleven = document.querySelector(".i-11");

function f11() {
  let a = inputEleven.value;
  for (let key in a11) {
    if (key === a) {
      delete a11[key];
    }
  }
  f5(a11, answerEleven);
}

//Task12. При нажатии b-12 выполняете функцию f12. Функция должна получить значение из i-12 и удалить запись из массива a12 с таким значением. После этого вывести массив в out-12. Для вывода используйте функцию f5.
let a12 = {
  one: "hello",
  two: "mahai",
  five: "hi",
};
let buttonTwelve = (document.querySelector(".b-12").onclick = f12);
let answerTwelve = document.querySelector(".out-12");
let inputTwelve = document.querySelector(".i-12");

function f12() {
  let a = inputTwelve.value;
  for (let key in a12) {
    if (a12[key] === a) {
      delete a12[key];
    }
  }
  f5(a12, answerTwelve);
}

//Task13. При нажатии b-13 выполняете функцию f13. Функция должна в out-13 выводить сумму значений массива a13 (только числа).
let a13 = {
  one: "hello",
  two: "mahai",
  five: "hi",
  n: 1,
  k: 5,
};
let buttonThirteen = (document.querySelector(".b-13").onclick = f13);
let answerThirteen = document.querySelector(".out-13");

function f13() {
  let sum = 0;
  for (let key in a13) {
    if (typeof a13[key] === "number") {
      // console.log(a13[key]);
      sum += a13[key];
    }
  }
  answerThirteen.innerHTML = sum;
}

//Task14. При нажатии b-14 выполняете функцию f14. Функция должна в out-14 выводить нулевые (по индексу) элементы вложенных массивов в a14. Вывод через пробел.
let a14 = {
  one: [1, 2, 3],
  two: [4, 5, 6],
  five: [7, 8, 9],
};
let buttonFourteen = (document.querySelector(".b-14").onclick = f14);
let answerFourteen = document.querySelector(".out-14");

function f14() {
  let res = "";
  for (let key in a14) {
    res += a14[key][0] + " ";
  }
  answerFourteen.innerHTML = res;
}

//Task15. При нажатии b-15 выполняете функцию f15. Функция должна в out-15 выводить элементы вложенных массивов в a15. Вывод через пробел.
let a15 = {
  one: [1, 2, 3],
  two: [4, 5, 6],
  five: [7, 8, 9],
};
let buttonFiveteen = (document.querySelector(".b-15").onclick = f15);
let answerFiveteen = document.querySelector(".out-15");

function f15() {
  let res = "";
  for (let key in a14) {
    res += a14[key] + "<br>";
  }
  answerFiveteen.innerHTML = res;
}

//Task16. При нажатии b-16 выполняете функцию f16. Функция должна в out-16 выводить элементы name вложенных массивов в a16. Вывод через пробел.
let a16 = {
  one: { name: "Ivan", age: 30 },
  two: { name: "Galina", age: 31 },
  five: { name: "Irina", age: 28 },
};
let buttonSixteen = (document.querySelector(".b-16").onclick = f16);
let answerSixteen = document.querySelector(".out-16");

function f16() {
  let res = "";
  for (let key in a16) {
    res += a16[key].name + " ";
  }
  answerSixteen.innerHTML = res;
}

//Task17. При нажатии b-17 выполняете функцию f17. Функция должна в out-17 выводить элементы name вложенных массивов в a17 для который age > 30. Вывод через пробел.
let a17 = {
  one: { name: "Ivan", age: 30 },
  two: { name: "Galina", age: 31 },
  five: { name: "Irina", age: 28 },
};
let buttonSeventeen = (document.querySelector(".b-17").onclick = f17);
let answerSeventeen = document.querySelector(".out-17");

function f17() {
  let res = "";
  for (let key in a17) {
    if (a17[key].age > 30) {
      res += a16[key].name + " ";
    }
  }
  answerSeventeen.innerHTML = res;
}

//Task18. При нажатии b-18 выполняете функцию f18. Функция должна в out-18 вывести станции метро из массива a18 той ветки, которую пользователь ввел в i-18. Вывод станций - через пробел. Если ветка не найдена выводите пустую строку.
let a18 = {
  red: [
    "Академгородок",
    "Житомирская",
    "Святоши",
    "Нивки",
    "Бретская",
    "Шулявская",
  ],
  blue: [
    "Героев днепра",
    "Минская",
    "Оболонь",
    "Петровка",
    "Тараса Шевченко",
    "Контрольная площадь",
  ],
  green: [
    "Сырец",
    "Дорогожичи",
    "Лукьяновская",
    "Золотые ворота",
    "Дворец спорта",
    "Кловская",
    "Печерская",
  ],
};
let buttonEighteen = (document.querySelector(".b-18").onclick = f18);
let answerEighteen = document.querySelector(".out-18");
let inputEighteen = document.querySelector(".i-18");

// console.log(a18.red[0]);

function f18() {
  let a = inputEighteen.value;
  let res = "";
  for (let i = 0; i < a18.red.length; i++) {
    if (a18.red[i] == a) {
      for (let key in a18.red) {
        res += a18.red[key] + " ";
      }
    }
  }
  for (let i = 0; i < a18.blue.length; i++) {
    if (a18.blue[i] == a) {
      for (let key in a18.blue) {
        res += a18.blue[key] + " ";
      }
    }
  }
  for (let i = 0; i < a18.green.length; i++) {
    if (a18.green[i] == a) {
      for (let key in a18.green) {
        res += a18.green[key] + " ";
      }
    }
  }
  answerEighteen.innerHTML += res;
}

//Task19. При нажатии b-19 выполняете функцию f19. Функция должна в out-19 вывести цвет ветки станции которую пользователь ввел в i-19. Пользователь может вводить текст как с большой, так и с маленькой буквы. Если ветка не найдена - выводите пустую строку.
let a19 = {
  red: [
    "Академгородок",
    "Житомирская",
    "Святоши",
    "Нивки",
    "Бретская",
    "Шулявская",
  ],
  blue: [
    "Героев днепра",
    "Минская",
    "Оболонь",
    "Петровка",
    "Тараса Шевченко",
    "Контрольная площадь",
  ],
  green: [
    "Сырец",
    "Дорогожичи",
    "Лукьяновская",
    "Золотые ворота",
    "Дворец спорта",
    "Кловская",
    "Печерская",
  ],
};
let buttonNineteen = (document.querySelector(".b-19").onclick = f19);
let answerNineteen = document.querySelector(".out-19");
let inputNineteen = document.querySelector(".i-19");

function f19() {
  let a = inputNineteen.value;
  let res = "";
  for (let i = 0; i < a19.red.length; i++) {
    if (a19.red[i] == a) {
      // console.log("red");
      res = "red";
    }
  }
  for (let i = 0; i < a19.blue.length; i++) {
    if (a19.blue[i] == a) {
      // console.log("blue");
      res = "blue";
    }
  }
  for (let i = 0; i < a19.green.length; i++) {
    if (a19.green[i] == a) {
      // console.log("green");
      res = "green";
    }
  }
  answerNineteen.innerHTML += res;
}

//Task20. При нажатии b-20 выполняете функцию f20. Функция должна в out-20 вывести название станции которые содержат переход на другую ветку. Такие станции маркируются 2. Вывод через пробел.
let a20 = {
  red: [
    "Академгородок",
    "Житомирская",
    "Святоши",
    "Нивки",
    "Бретская",
    "Шулявская",
    "2. Театральная",
    "2. Хрещатик",
  ],
  blue: [
    "Героев днепра",
    "Минская",
    "Оболонь",
    "Петровка",
    "Тараса Шевченко",
    "Контрольная площадь",
    "2. Майдан Незалежности",
    "2. Площадь Льва Толстого",
  ],
  green: [
    "Сырец",
    "Дорогожичи",
    "Лукьяновская",
    "2. Золотые ворота",
    "Дворец спорта",
    "Кловская",
    "Печерская",
    "2. Палац спорту",
  ],
};
let buttonTwenty = (document.querySelector(".b-20").onclick = f20);
let answerTwenty = document.querySelector(".out-20");

function f20() {
  let res = "";
  for (let key in a20) {
    for (let i = 0; i < a20[key].length; i++) {
      if (a20[key][i].includes("2. ")) {
        res += a20[key][i] + " ";
      }
    }
  }
  answerTwenty.innerHTML += res;
}
