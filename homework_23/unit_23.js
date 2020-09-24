// Task 1 ============================================
/* Создайте функцию t1 которая записывает  в LS  ключ 5 со значением 11. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-1. */

document.querySelector(".b-1").onclick = t1;

function t1() {
  localStorage.setItem("LS", 5);
}

// ваше событие здесь!!!

// Task 2 ============================================
/* Создайте функцию t2 которая записывает  в LS  массив a2 = [7,6,5]. Ключ a2. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-2. */

let a2 = [7, 6, 5];
document.querySelector(".b-2").onclick = t2;

function t2() {
  localStorage.setItem("LS", a2);
}

// ваше событие здесь!!!

// Task 3 ============================================
/*  При нажатии кнопки t3 выведите из LS сохранненный массив a2. Выведите в out-3 в формате ключ пробел значение перенос строки.  */

document.querySelector(".b-3").onclick = t3;

function t3() {
  let arr;
  localStorage.setItem("LS.str", JSON.stringify(a2));
  let data = localStorage.getItem("LS.str");
  console.log(data);
  let answer = JSON.parse(data);
  return (document.querySelector(".out-3").innerHTML = answer);
}

// ваше событие здесь!!!

// Task 4 ============================================
/*  Создайте функцию t4 которая записывает  в LS  массив a4 = {hello: world, hi:mahai}. Ключ a4. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопке b-4.*/

let a4 = { hello: "world", hi: "mahai" };
document.querySelector(".b-4").onclick = t4;

function t4() {
  localStorage.setItem("LS", JSON.stringify(a4));
}

// ваше событие здесь!!!

// Task 5 ============================================
/*   При нажатии кнопки b-5 выведите из LS сохранненный массив a4. Выведите в out-5 в формате ключ пробел значение перенос строки. */

document.querySelector(".b-5").onclick = t5;

function t5() {
  let data = localStorage.getItem("LS");
  let answer = JSON.parse(data);
  for (let key in answer) {
    document.querySelector(".out-5").innerHTML +=
      "<br>" + key + "<br>" + answer[key] + " ";
  }
}

// ваше событие здесь!!!

// Task 6 ============================================
/*  Создайте функцию t6 которая очищает весь LS. Запуск по кнопке b-6*/

document.querySelector(".b-6").onclick = t6;

function t6() {
  delete localStorage.LS;
}

// ваше событие здесь!!!

// Task 7 ============================================
/*  Создайте input i-7 куда пользователь может вводить числа и строки. Создайте массив a7. Когда пользователь нажимает кнопку b-7 число должно добавляться в массив. Массив должен сохраняться в LS с ключем a7.*/
let a7 = [];
let inputSeven = document.querySelector(".i-7");
document.querySelector(".b-7").onclick = t7;

function t7() {
  let a = inputSeven.value;
  a7.push(a);
  localStorage.setItem("LS", JSON.stringify(a7));
}

// ваше событие здесь!!!

// Task 8 ============================================
/*   Создайте функцию t8 при запуске которой из a7 удаляется последний элемент. После чего массив сохраняется в LS с ключем a7. Использовать массив из предыдущего задания. */
document.querySelector(".b-8").onclick = t8;

function t8() {
  let a = localStorage.getItem("LS");
  let b = JSON.parse(a);
  //   console.log(b);
  b.pop();
  //   console.log(b);
  localStorage.setItem("LS", JSON.stringify(b));
}

// ваше событие здесь!!!
