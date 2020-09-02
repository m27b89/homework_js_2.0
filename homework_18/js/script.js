//task1. Дан массив a1 = [4,5,6,7,12,34,56,78,90,11] - с помощью forEach переберите массив и создайте новый массив a1_res куда добавьте элементы данного массива умноженные на 2. Действия должны запускаться при вызове функции t1.
let a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];
let a1_res = [];

a1.forEach((elem) => {
  a1_res.push(elem);
});
console.log(a1_res);

//task2. Дан массив a1 = [2,3,4,5,10,11,12] - с помощью forEach переберите массив и создайте новый массив a2_res куда добавьте элементы данного массива деленные на 2. Действия должны запускаться при вызове функции t2.
let a2 = [2, 3, 4, 5, 10, 11, 12];
let a2_res = [];

function t2() {
  a2.forEach((elem) => {
    a2_res.push(elem * 2);
  });
  return a2_res;
}

console.log(t2());

//task3. Дан массив a3 = [2, "hello", 3, "hi", 4, "Mazai"] - с помощью forEach переберите массив и создайте новый массив a3_res куда добавьте элементы данного массива являющиеся числом. Запускаться решение должно при вызове функции t3.
let a3 = [2, "hello", 3, "hi", 4, "Mazai"];
let a3_res = [];

function t3() {
  a3.forEach((elem) => {
    if (typeof elem === "number") {
      a3_res.push(elem);
    }
  });
  return a3_res;
}

console.log(t3());

//task4. На странице созданы 3 span.task-4 c атрибутом data. С помощью forEach переберите их и добавьте атрибуты в массив a4_res Запускаться решение должно при вызове функции t4.
let elements = document.querySelectorAll(".task-4");
let a4_res = [];

function t4() {
  elements.forEach((elem) => {
    a4_res.push(elem.attributes.data.value);
  });
  return a4_res;
}

console.log(t4());

//task5. На странице созданы 3 p.task-5 c атрибутом data. С помощью forEach переберите их и добавьте событие клик. Напишите функцию t5, которая будет запускаться при клике и добавлять атрибут data элемента, по которому кликнули в массив a5_res.
let elementsFive = document.querySelectorAll(".task-5");
let a5_res = [];

elementsFive.forEach((elem) => {
  elem.onclick = t5;
});

function t5() {
  a5_res.push(this.attributes.data.value);
  return console.log(a5_res);
}

//task6. Дана строка str6="helloworld" - преобразуйте ее в массив и присвойте a6_res. Выведите на страницу. Запускаться решение должно при вызове функции t6.
let str6 = "helloworld";
let a6_res = [];

function t6() {
  a6_res.push(str6.split(""));
  console.log(a6_res);
  let answerSix = document.createElement("p");
  let out = "";
  for (let key in a6_res) {
    out += a6_res[key];
    answerSix.innerHTML = out;
    document.body.appendChild(answerSix);
  }
}

t6(str6);

//task7. Дана строка str7="hello world hi mazai" - преобразуйте ее в массив и разбейте по словам. Причем слова не должны содержать пробелов и присвойте a6_res. выведите на страницу. Запускаться решение должно при вызове функции t7.
let str7 = "hello world hi mazai";
let a7_res = [];

function t7() {
  str7.split("").forEach((word) => {
    // console.log(word);
    if (word !== " ") {
      // console.log(word);
      a7_res.push(word);
    }
  });
  let answerSeven = document.createElement("p");
  answerSeven.innerHTML += a7_res;
  return document.body.appendChild(answerSeven);
}

t7();

//task8. Дан массив a8 = [1,2,66,77,15] - преобразуйте ее в строку. Разделитель - дефис. Результат присвойте a8_res. Запускаться решение должно при вызове функции t8.
let a8 = [1, 2, 66, 77, 15];
let a8_res = [];

function t8() {
  a8.forEach((num) => {
    a8_res.push(num);
  });
  let answerEight = document.createElement("p");
  answerEight.innerHTML = a8_res.join("-");
  document.body.appendChild(answerEight);
}

t8();

//task9. Дан массив a9 = [[hi, mahai], [test, best]] - преобразуйте его в строку. Разделитель - дефис. Результат присвойте a9_res. Запускаться решение должно при вызове функции t9. Допускается лишний дефис в конце строки!!!
let a9 = [
  ["hi", "mahai"],
  ["test", "best"],
];
let a9_res = [];

function t9() {
  a9.forEach((elem) => {
    elem.forEach((el) => {
      a9_res.push(el);
    });
  });
  let answerNine = document.createElement("p");
  answerNine.innerHTML = a9_res.join("-");
  document.body.appendChild(answerNine);
}

t9();

//task10. Дан массив a10 = {name: ivan, age: 15, sex: 1, id: 45} - преобразуйте его в GET строку (GET параметры). Найдите описание что такое GET строка самостоятельно. Разделитель - амперсанд. Результат присвойте a10_res. Запускаться решение должно при вызове функции t10. Допускается лишний амперсанд в конце строки!!!
let a10 = { name: "ivan", age: 15, sex: 1, id: 45 };
let a10_res = "";

function t10() {
  for (let key in a10) {
    // console.log(a10[key]);
    a10_res += `${key}=${a10[key]}&`;
    console.log(a10_res);
  }
}

t10();
