//task1. Создайте set s1. Добавьте в него три элемента 'h', 'b', 'o', 'h'. Добавление делайте через add. Выведите в консоль.
let s1 = new Set();
s1.add("h");
s1.add("b");
s1.add("o");
s1.add("h");
console.log(s1);

//task2. При нажатии b-2 выполняете функцию f2. Функция должна вывести добавить в набор s2 элементы вводимые пользователем в i-2. Функция должна возвращать s2.
let buttonTwo = document.querySelector(".b-2");
let inputTwo = document.querySelector(".i-2");
buttonTwo.addEventListener("click", f2);
let s2 = new Set();

function f2() {
  let a = inputTwo.value;
  console.log(a);
  s2.add(a);
  console.log(s2);
  for (let item of s2) {
    console.log(item);
  }
}

//task3. При нажатии b-3 выполняете функцию f3. Функция должна удалить из набора s3, строку введенную пользователем в i-3. Функция должна возвращать s3.
let buttonThree = (document.querySelector(".b-3").onclick = f3);
let inputThree = document.querySelector(".i-3");
let s3 = new Set();
s3.add("hi");
s3.add("hello");
s3.add("world");
s3.add("my");
console.log(s3);

function f3() {
  let a = inputThree.value;
  let answer = "";
  for (let item of s3) {
    if (item === a) {
      answer += item;
      s3.delete(item);
      console.log(s3);
    }
  }
  return answer;
}

//task4. При нажатии b-4 выполняете функцию f4. Функция должна проверить наличие в наборе s4 строки введенной пользователем в i-4. Если строка есть - то вывести в out-4 true. Если нет - false.
let buttonFour = (document.querySelector(".b-4").onclick = f4);
let answerFour = document.querySelector(".out-4");
let inputFour = document.querySelector(".i-4");
let s4 = new Set();
s4.add("hi");
s4.add("hello");
s4.add("world");
s4.add("my");
// console.log(s4);

function f4() {
  let a = inputFour.value;
  let answer = false;
  for (let item of s4) {
    if (item === a) {
      answer = s4.has(item);
      console.log(s4);
    }
  }
  answerFour.innerHTML = answer;
}

//task5. При нажатии b-5 выполняете функцию f5. Функция должна вывести в out-5 длину набора s5.
let buttonFive = (document.querySelector(".b-5").onclick = f5);
let answerFive = document.querySelector(".out-5");
let s5 = new Set();
s5.add("hi");
s5.add("hello");
s5.add("world");
s5.add("my");
s5.add("mahai");
// console.log(s5);

function f5() {
  answerFive.innerHTML = "size " + s5.size;
}

//task6. При нажатии b-6 выполняете функцию f6. Функция должна вывести в out-6 число уникальных элементов в массиве a6. Решение должно использовать set.
let buttonSix = (document.querySelector(".b-6").onclick = f6);
let answerSix = document.querySelector(".out-6");
let s6 = new Set();
s6.add("hi");
s6.add("hi");
s6.add("hi");
s6.add("hi");
s6.add("hi");
s6.add("hello");
s6.add("world");
s6.add("my");
s6.add("mahai");
// console.log(s5);

function f6() {
  let answer = "";
  for (let item of s6) {
    if (item == item) {
      answer += item + " ";
    }
  }
  answerSix.innerHTML = answer;
}

//task7. Добавьте input .i-7. При нажатии b-7 выполняете функцию f7. Функция должна получать из i-7 значение пароля и проверять, чтобы пользователь в строке пароля использовал не повторяющиеся символы. Если символы уникальны, а длина пароля больше ( строго) 6 то выводите в out-7 число 1. Если есть повторяющиеся символы, или длина меньше или равна 6 - то выводите 0. Для проверки уникальности символов используйте Set.
let buttonSeven = (document.querySelector(".b-7").onclick = f7);
let answerSeven = document.querySelector(".out-7");
let inputSeven = document.querySelector(".i-7");
let s7 = new Set();

function f7() {
  let a = inputSeven.value;
  console.log(a);
  s7.add(a);
  console.log(s7);
  let answer = 0;
  for (let item of s7) {
    if (item !== a && s7.size >= 6) {
      answer = 1;
      console.log(s7.size);
    }
  }
  a = inputSeven.value = "";
  answerSeven.innerHTML = answer;
}

//task8. При нажатии b-8 выполняете функцию f8. Функция должна создать массив res8 на основе набора, но добавить из s8 только те значения, которые больше 5. Функция должна возвратить res8.
let buttonEight = (document.querySelector(".b-8").onclick = f8);
let answerEight = document.querySelector(".out-8");
let s8 = new Set();
s8.add(5);
s8.add(6);
s8.add(7);
s8.add(1);
s8.add(9);

function f8() {
  let res8 = [];
  for (let item of s8) {
    if (item > 5) {
      res8.push(item);
      console.log(res8);
    }
  }
  return res8;
}

//task9. При нажатии b-9 выполняете функцию f9. Функция должна принимать набор set в качестве параметра, преобразовывать его в массив и возвращать в виде строки. При преобразовании массива в строку между элементами должен быть пробел.
let s9 = new Set();
s9.add(5);
s9.add(6);
s9.add(7);
s9.add(1);
s9.add(9);
let buttonNine = (document.querySelector(".b-9").onclick = () => f9(s9));
let answerNine = document.querySelector(".out-9");

function f9(arr) {
  let str = "";
  let set = Array.from(arr);
  for (let i = 0; i < set.length; i++) {
    str += set[i];
  }
  console.log(str);
  return str;
}

//task10. При нажатии b-10 выполняете функцию f10. Функция должна принимать набор set в качестве параметра и выводить его в указанный элемент. Элемент указывается как второй параметр функции f10. Вывод значений - через пробел.
let s10 = new Set();
s10.add(5);
s10.add(6);
s10.add(7);
s10.add(1);
s10.add(9);
let buttonTen = (document.querySelector(".b-10").onclick = () =>
  f10(null, s10));
let answerTen = document.querySelector(".out-10");

function f10(val, arr) {
  let str = "";
  let set = Array.from(arr);
  for (let i = 0; i < set.length; i++) {
    str += set[i];
  }
  console.log(str);
  return str;
}

//task11. При нажатии b-11 выполняете функцию f11. Функция должна преобразовать массив a11 в набор. И выводить в консоль. Изучите вывод получившегося набора. Разберитесь почему так происходит.
let buttonEleven = (document.querySelector(".b-11").onclick = () => f11(a11));
let answerEleven = document.querySelector(".out-11");
let a11 = [2, 1, 4, 5, 6, 3, 7];

function f11(arr) {
  let s = new Set();
  s.add(a11);
  console.log(s);
  return s;
}

//task12. При нажатии b-12 выполняете функцию f12. Функция должна преобразовать строку str12 в массив, причем каждая буква - отдельный элемент массива. Потом создать набор на основе массива и возвратить его.
let buttonTwelve = (document.querySelector(".b-12").onclick = () => f12(str12));
let answerTwelve = document.querySelector(".out-12");
let str12 = "stringhh";

function f12(arr) {
  let str = arr.split("");
  let s = new Set();
  for (let i = 0; i < str.length; i++) {
    s.add(str[i]);
  }
  console.log(s);
  return s;
}

//task13. При нажатии b-13 выполняете функцию f13. Функция должна преобразовать строку str13 в массив, причем каждая буква - отдельный элемент массива. Потом создать набор на основе массива. Затем, перебирая набор поэлементам, найти сколько раз каждый символ встречается в исходном массиве. Результат - в виде массива типа { символ : количество, символ : количество } вернуть в функции.
let buttonThirteen = (document.querySelector(".b-13").onclick = () =>
  f13(str13));
let answerThirteen = document.querySelector(".out-13");
let str13 = "stringgest";

function f13() {
  let str = str13.split("");
  let arr = [];
  let arr1 = [];
  for (let key of str) {
    if (!arr.includes(key)) {
      arr.push(key);
    } else {
      arr1.push(key);
    }
  }
  console.log(arr1);
  return console.log(arr);
}
