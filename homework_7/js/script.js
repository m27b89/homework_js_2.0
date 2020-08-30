//Task1. Напишите функцию t1, которая при нажатии кнопки выводит в out-1 переменную a1.
let a1 = 8;
let anser_one = document.querySelector("#out-1");
let button_one = document.querySelector("#b-1");
button_one.onclick = t1;
function t1() {
  anser_one.innerHTML += a1;
}

//Task2.И зменим задачу 1. Сейчас она только выводит переменную в заранее заданный блок. Давайте сделаем так, чтобы функция, была более гибкой. Пусть теперь функция t2 возвращает переменную a2. Поскольку функция возвращает переменную, то имя функции со скобками (вызов функции) можно встраивать в выражения. Обратите внимание, как изменился вызов функции.
let a2 = 8;
function t2() {
  return a2;
}
document.querySelector(".b-2").onclick = function () {
  document.querySelector(".out-2").textContent = t2();
};

//Task3. Наша предыдущая функция, сильно все еще зависима от внешних переменных. Давайте сделаем ее более универсальной. Пусть функция t3 принимает 2 параметра и выводит их произведение. Допишите код функции так, чтобы она возвращала произведение двух чисел, переданных ей в качестве параметра a, b. Протестируем функцию на двух примерах, с помощью кнопок b3-1 и b3-2.
function t3(a, b) {
  return a + b;
}
document.querySelector(".b-3-1").onclick = function () {
  document.querySelector(".out-3-1").textContent = t3(3, 4);
};
document.querySelector(".b-3-2").onclick = function () {
  document.querySelector(".out-3-2").textContent = t3(5, 6);
};

//Task4. Напишите функцию t4 которая принимает ваш год рождения и вычисляет ваш возраст.
let button_four = (document.querySelector("#b-4").onclick = t4);
let answer_four = document.querySelector("#out-4");
function t4(age) {
  age = prompt("Write your age");
  let d = new Date();
  let answer = d.getUTCFullYear() - age;
  return (answer_four.textContent = answer);
}

//Task5. Напишите функцию t5, которая принимает ваше имя в качестве параметра и возвращает строку Hello name, где name - принятое в качестве параметра имя.
let button_five = (document.querySelector("#b-5").onclick = getName);
let answer_five = document.querySelector("#out-5");
function getName(name) {
  name = prompt("Write your name");
  return (answer_four.textContent = `Hello ${name}`);
}

//Task6. Напишите функцию t6, которая принимает 2 числа и возвращает случайное целое число от первого до второго принятого параметра.
let button_six = (document.querySelector("#b-6").onclick = t6);
let answer_six = document.querySelector("#out-6");
function t6() {
  numOne = prompt("Write your num one");
  numTwo = prompt("Write your num two");
  let nums = numTwo - numOne;
  console.log(nums);
  let answer = Math.floor(Math.random() * nums);
  console.log(answer);
  return (answer_six.textContent = answer);
}

//Task7. Напишите функцию t7, которая возвращает случайный цвет в формате rgb(x,y,z) (строка). Где x,y,z - случайные числа в диапазоне [0, 255].
let button_seven = (document.querySelector("#b-7").onclick = t7);
let answer_seven = document.querySelector("#out-7");
function t7() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let answer = (answer_seven.style.backgroundColor = `#${r}${g}${b}`);
  return (answer_seven.textContent = answer);
}

//Task8. Напишите функцию t8, которая принимает строку в качестве параметра и возвращает результат с очищенными пробелами в начале и вконце строки. Т.е. принимает _hello_ (где знак _ символизирует пробел), а возвращает hello. Для удаления пробелов - используйте trim.
let button_eight = (document.querySelector("#b-8").onclick = t8);
let answer_eight = document.querySelector("#out-8");
let input_eight = document.querySelector("#text-8");
function t8() {
  let str = input_eight.value;
  //   console.log(a);
  return t88(str);
}
function t88(text) {
  return (answer_eight.textContent = text.trim());
}

//Task9. Напишите функцию t9, которая принимает число и возвращает true, если число четное, и false если не четное.
let button_nine = (document.querySelector("#b-9").onclick = t9);
let answer_nine = document.querySelector("#out-9");
function t9() {
  let num = prompt("Write number");
  if (num % 2 === 0) {
    return (answer_nine.textContent = true);
  }
  return (answer_nine.textContent = false);
}

//Task10. Создайте функцию t10, которая принимает 2 числа и возвращает большее из них. В случае равенства - любое из чисел.
let button_ten = (document.querySelector("#b-10").onclick = t10);
let answer_ten = document.querySelector("#out-10");
function t10() {
  let numOne = prompt("Write number one");
  let numTwo = prompt("Write number two");
  if (numOne > numTwo) {
    return (answer_ten.textContent = numOne);
  } else if (numOne < numTwo) {
    return (answer_ten.textContent = numTwo);
  } else if (numOne === numTwo) {
    return (answer_ten.textContent = numOne || numTwo);
  }
}
