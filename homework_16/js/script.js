//task.1 При нажатии .b-1 выполняете функцию f1. Функция перебирает массив a1 c помощью цикла for. Выведите на страницу в .out-1 формате значение+пробел.
let a1 = [1, 23, 4, 56];
let buttonOne = (document.querySelector(".b-1").onclick = f1);
let answerOne = document.querySelector(".out-1");

function f1() {
  let out = "";
  for (let i = 0; i < a1.length; i++) {
    out += a1[i] + " ";
  }
  answerOne.innerHTML = out;
}

//task.2 При нажатии .b-2 выполняете функцию f2. Функция перебирает массив a2 c помощью цикла for. Выведите на страницу в .out-2 формате индекс+пробел+значение+пробел.
let a2 = [1, 23, 4, 56];
let buttonTwo = (document.querySelector(".b-2").onclick = f2);
let answerTwo = document.querySelector(".out-2");

function f2() {
  let out = "";
  for (let i = 0; i < a2.length; i++) {
    out += `index: ${i} value: ${a2[i]} `;
  }
  answerTwo.innerHTML = out;
}

//task.3 При нажатии .b-3 выполняете функцию f3. Функция получает div.out-3 со страницы с помощью getElementsByClassName и в каждый записывает число 3, перезаписывая содержимое div.
let buttonThree = (document.querySelector(".b-3").onclick = f3);
let answerThree = document.getElementsByClassName("out-3");

function f3() {
  console.log(answerThree);
  for (let i = 0; i < answerThree.length; i++) {
    answerThree[i].innerHTML = 3;
  }
}

//task.4 При нажатии .b-4 выполняете функцию f4. Функция получает div.out-4 со страницы с помощью querySelectorAll и в каждый дописывает число 4.
let buttonFour = (document.querySelector(".b-4").onclick = f4);
let answerFour = document.querySelectorAll(".out-4");

function f4() {
  for (let i = 0; i < answerFour.length; i++) {
    answerFour[i].innerHTML = 4;
  }
}

//task.5 При нажатии .b-5 выполняете функцию f5. Функция должна:
// 1. Получить все div.out-5 со страницы в массив a5.
// 2. Cоздать новые div.out-5 через createElement. Добавить с помощью push созданный div в массив a5.
// Поскольку для коллекций push запрещен - то данная операция должна вызывать ошибку. Убедитесь в этом. Чтобы экранировать ошибку и не дать ей влиять на работу документа в целом, применим try, catch.
let buttonFive = (document.querySelector(".b-5").onclick = f5);
let answerFive = document.querySelectorAll(".out-5");

function f5() {
  let divElemFive = "";
  let a5 = [];
  for (let i = 0; i < answerFive.length; i++) {
    try {
      a5.push(answerFive[i]);
    } finally {
      console.log("error");
    }
    divElemFive = document.createElement("div");
    divElemFive.className = "new out-5";
    console.log(divElemFive);
  }
}

//task.6 При нажатии .b-6 выполняете функцию f6. Функция должна превратить массив a6 в одномерный. Результат вывести в out-6 через пробел.
let a6 = [
  [1, 2, 3, 4],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, 6, 7],
];
let buttonSix = (document.querySelector(".b-6").onclick = f6);
let answerSix = document.querySelector(".out-6");

function f6() {
  let out = "";
  for (let i = 0; i < a6.length; i++) {
    // console.log("i: " + i);
    for (let j = 0; j < a6[i].length; j++) {
      out += a6[i][j] + " ";
      //   console.log("j:" + j);
    }
  }
  answerSix.innerHTML = out;
}

//task.7 При нажатии .b-7 выполняете функцию f7. Функция должна переиндексировать массив a7. Что имеется ввиду. Сейчас у нас обычный массив, который содержит вложенные объекты. Вам необходимо сделать из a7 объект, где ключи - значения id из вложенных массивов, а значения - имя (т.е { 23 : Ivan, 45 : Petr}
let a7 = ["Irina", "Darina", "Katy", "Ivanio", "Nady"];

let buttonSeven = (document.querySelector(".b-7").onclick = f7);
let answerSeven = document.querySelector(".out-7");

function f7() {
  let out = {};
  let ans = "";
  for (let key in a7) {
    out.key = `${a7[key]}`;
    for (let item in out) {
      ans += `${item}: ${out[item]}, `;
    }
  }

  return (answerSeven.innerHTML = ans);
}

//task.8 При нажатии .b-8 выполняете функцию f8. Функция должна переиндексировать массив a8. Что имеется ввиду. Сейчас у нас обычный массив, который содержит вложенные объекты. Вам необходимо сделать из a8 массив, который будет содержать только числовые id. Т.е. [ 23, 45].
let a8 = ["Irina", "Darina", "Katy", "Ivanio", "Nady"];

let buttonEight = (document.querySelector(".b-8").onclick = f8);
let answerEight = document.querySelector(".out-8");

function f8() {
  let out = "";
  for (let i = 0; i < a8.length; i++) {
    out += i + " ";
  }

  return (answerEight.innerHTML = out);
}

//task.9 При нажатии .b-9 выполняете функцию f9. Функция должна выводить в out-9 самый большой индекс вложенных массивов в массив a9. В данном случае это 4.
let a9 = [4, 6, 55, 7, 9, 2, 5];

let buttonNine = (document.querySelector(".b-9").onclick = f9);
let answerNine = document.querySelector(".out-9");

function f9() {
  let max = a9[0];
  let out = "";
  for (let i = 0; i < a9.length; i++) {
    if (a9[i] > max) {
      max = a9[i];
      console.log(max);
      out = max;
    }
  }

  return (answerNine.innerHTML = out);
}

//task.10 При нажатии .b-10 выполняете функцию f10. Функция должна преобразовывать массив a10 в ассоциативный массив вида {4: 4, 6: 6, 9: 9, hello : "hello"} и возвращать полученный массив.
let a10 = [4, 6, 55, 7, 9, 2, 5, "hi"];

let buttonTen = (document.querySelector(".b-10").onclick = f10);
let answerTen = document.querySelector(".out-10");

function f10() {
  let out = {};
  for (let i = 0; i < a10.length; i++) {
    out[a10[i]] = a10[i];
  }

  console.log(out);
  return out;
}

//task.11 При нажатии .b-11 выполняете функцию f11. Функция должна c помощью for in перебрать объект a11 и вывести в out-11 только те значения, которые больше 10. Вывод - через пробел.
let a11 = f10();

let buttonEleven = (document.querySelector(".b-11").onclick = f11);
let answerEleven = document.querySelector(".out-11");

function f11() {
  let out = "";
  console.log(a11);
  for (let key in a11) {
    out += a11[key] + " ";
    console.log(out);
  }
  return (answerEleven.innerHTML = out);
}

//task.12 При нажатии .b-12 выполняете функцию f12. Функция должна c помощью for of перебрать a12 и вывести в out-12 через пробел.
let a12 = [...a10];

let buttonTwelve = (document.querySelector(".b-12").onclick = f12);
let answerTwelve = document.querySelector(".out-12");

function f12() {
  let out = "";
  // console.log(a12);
  for (let item of a12) {
    out += item + " ";
    console.log(out);
  }
  return (answerTwelve.innerHTML = out);
}

//task.13 При нажатии .b-13 выполняете функцию f13. Функция должна c помощью for of перебрать a13 и вывести по символам в out-13 через пробел.
let a13 = [...a10];

let buttonThirteen = (document.querySelector(".b-13").onclick = f13);
let answerThirteen = document.querySelector(".out-13");

function f13() {
  let out = "";
  console.log(a13);
  for (let item of a13) {
    out += item + " ";
    console.log(out);
  }
  return (answerThirteen.innerHTML = out);
}

//task.14 При нажатии .b-14 выполняете функцию f14. Функция должна c помощью for of перебрать a14 и вывести по элементам в out-14 через пробел.
let a14 = [...a10];

let buttonFourteen = (document.querySelector(".b-14").onclick = f14);
let answerFourteen = document.querySelector(".out-14");

function f14() {
  let out = "";
  console.log(a14);
  for (let item in a14) {
    out += item + " ";
    console.log(out);
  }
  return (answerFourteen.innerHTML = out);
}

//task.15 При нажатии .b-15 выполняете функцию f15. Функция должна получить NodeList элементов .out-15 c помощью document.querySelectorAll, затем c помощью for of перебрать полученную коллекцию элементов .out-15 записать внутрь них число 15 ( затерев содержимое).

let buttonFifeteen = (document.querySelector(".b-15").onclick = f15);
let answerFifeteen = document.querySelectorAll(".out-15");

function f15() {
  let out = "";
  for (let item of answerFifeteen) {
    item.innerHTML = 15;
    // console.log(out);
  }
  // return (answerFifeteen.innerHTML = out);
}
