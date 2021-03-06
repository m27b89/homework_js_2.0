//task_1 Дан массив a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11] - с помощью map переберите массив и создайте новый массив a1_res куда добавьте элементы данного массива умноженные на 2. Действия должны запускаться при вызове функции t1.
let a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];

let arr1 = a1.map((item) => item * 2);
console.log(arr1);

//task_2 Дан массив a2= [2,3,4,5,10,11,12] - с помощью map переберите массив и создайте новый массив a2_res куда добавьте элементы данного массива возведенные во вторую степень. Действия должны запускаться при вызове функции t2.
// Действия должны запускаться при вызове функции t2.
let a2 = [2, 3, 4, 5, 10, 11, 12];
let a2_res = [];

function t2() {
  let arr2 = a2.map((item) => {
    a2_res.push(item ** 2);
  });
  return a2_res;
}

console.log(t2());

//task_3 Дан массив a3 = [4,"3",6,7,"12",34,"56",78,90,11] - с помощью map переберите массив и создайте новый массив a3_res куда добавьте все элементы приведенные к числу. Действия должны запускаться при вызове функции t3.
let a3 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];
let a3_res = [];

let arr3 = a3.filter((item) => {
  if (typeof item === "number") {
    a3_res.push(item);
  }
  return a3_res;
});

console.log(a3_res);

//task_4 Следующая задача проще будет решаться через метод forEach, который мы изучим во второй части урока! Сейчас мы делаем костыль, для отработки навыков работы с map. Дан массив a4 = [4,"3",6,7,"12",34,"56",78,90,11] - с помощью map переберите массив и создайте новый массив a4_res куда добавьте только числа из массива a4. Действия должны запускаться при вызове функции t4. Действия должны запускаться при вызове функции t4.
let a4 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];
let a4_res = [];

function t4() {
  let arr4 = a4.map((item) => {
    if (typeof item === "number") {
      a4_res.push(item);
    }
  });
  return a4_res;
}

console.log(t4());

//task_5 Дан массив b1 = [3, 14, 15, 92]. C помощью filter переберите массив и создайте новый b1_res, который содержит только четные числа из b1. Действия должны запускаться при вызове функции t5.
let b1 = [3, 14, 15, 92];
let b1_res = [];

function t5() {
  let b2 = b1.filter((item) => {
    if (item % 2 === 0) {
      b1_res.push(item);
    }
  });
  return b1_res;
}

console.log(t5());

//task_6 Дан массив b6 = [3, 14, 15, 92, "6", "5", "hello", 32]. C помощью filter переберите массив b6 и создайте новый b6_res, который содержит только числа из b6. Действия должны запускаться при вызове функции t6.
let b6 = [3, 14, 15, 92, "6", "5", "hello", 32];
let b6_res = [];

function t6() {
  let arr6 = b6.filter((item) => {
    if (typeof item === "number") {
      b6_res.push(item);
    }
  });
  return b6_res;
}

console.log(t6());

//task_7 Дан массив b7 = ["php-7", "html", "css", 92, "6", "5", "hello", 32]. C помощью filter переберите массив b7 и создайте новый b7_res, который содержит только строки из b7, длина которых больше 3. Действия должны запускаться при вызове функции t7.
let b7 = ["php-7", "html", "css", 92, "6", "5", "hello", 32];
let b7_res = [];

function t7() {
  let arr7 = b7.filter((item) => {
    if (item.length > 3) {
      b7_res.push(item);
    }
  });
  return b7_res;
}

console.log(t7());

//task_8 Дан массив b8 = [3, 14, 15, 92, "6", "5", "hello", 32]. С помощью filter, переберите массив b8 и создайте новый массив b8_res, который содержит индексы четных элементов. Действия должны запускаться при вызове функции t8
let b8 = [3, 14, 15, 92, "6", "5", "hello", 32];
let b8_res = [];

function t8() {
  let arr8 = b8.filter((item, index) => {
    if (index % 2 === 0) {
      b8_res.push(index);
    }
  });
  return b8_res;
}

console.log(t8());

//task_9 Дан массив b9 = [3, "hello", 4, "world", 5, "hi"]. С помощью filter, переберите массив b5 и создайте новый массив b9_num и b9_string, которые содержат первый - числа из b9, второй - строки. Задачу решить одним filter. Действия должны запускаться при вызове функции t9.
let b9 = [3, "hello", 4, "world", 5, "hi"];
let b9_num = [];
let b9_string = [];

function t9() {
  let arr9 = b9.filter((item) => {
    if (typeof item === "number") {
      b9_num.push(item);
    } else {
      b9_string.push(item);
    }
  });
  return b9_string;
  return b9_num;
}

console.log(t9());

//task_10 Дан массив b10 = [ [1,2,3], [3,4,6], [4,5,7], [8,9,3]]. С помощью filter переберите массив и создайте новый b10_res, в который входят вложенные массивы содержащие цифру 3. Действия должны запускаться при вызове функции t10.
let b10 = [
  [1, 2, 3],
  [3, 4, 6],
  [4, 5, 7],
  [8, 9, 3],
];
let b10_res = [];

function t10() {
  let arr10 = b10.filter((item) => {
    item.filter((element) => {
      if (element === 3) {
        b10_res.push(element);
      }
    });
  });
  return b10_res;
}

console.log(t10());
console.log(b10_res);
