// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */
let blockOne = (document.querySelector(".div-1").onclick = t1);
let answerOne = document.querySelector(".out-1");

function t1(e) {
  let a = e.path[0].innerHTML;
  //   console.log(e.path[0].innerHTML);
  answerOne.innerHTML = a;
}

// ваше событие здесь!!!

// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */
let blockTwo = (document.querySelector(".div-2").onclick = t2);
let answerTwo = document.querySelector(".out-2");

function t2(e) {
  //   console.log(e.altKey);
  answerTwo.innerHTML = e.altKey;
}

// ваше событие здесь!!!

// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. */
let blockThree = (document.querySelector(".div-3").onclick = t3);
let answerThree = document.querySelector(".out-3");

let w3 = 75;

function t3() {
  this.style.width = w3 + "px";
  w3 = w3 + 5;
  answerThree.innerHTML = w3;
}

// ваше событие здесь!!!

// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-4. */
let blockFour = (document.querySelector(".div-4").ondblclick = t4);
let answerFour = document.querySelector(".out-4");

function t4(e) {
  let a = e.path[0].innerHTML;
  //   console.log(e.path[0].innerHTML);
  answerFour.innerHTML = a;
}

// ваше событие здесь!!!

// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */
let blockFive = (document.querySelector(".div-5").ondblclick = t5);
let answerFive = document.querySelector(".out-5");

function t5() {
  this.classList.toggle("active");
}

// ваше событие здесь!!!

// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. Скрытие и показ делайте через добавление - удаление класса .hide */
let blockSix = (document.querySelector(".div-6").ondblclick = t6);

function t6() {
  document.querySelector(".ul-6").classList.toggle("hide");
}

// ваше событие здесь!!!

// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */
let blockSeven = (document.querySelector(".div-7").oncontextmenu = t7);
let answerSeven = document.querySelector(".out-7");

function t7() {
  this.classList.toggle("active");
  return false;
}

// ваше событие здесь!!!

// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */
let blockEight = (document.querySelector(".ch-8").onchange = t8);

function t8() {
  let d = document.body;
  if (this.checked) {
    console.log(true);
    d.oncontextmenu = () => {
      return false;
    };
  } else {
    console.log(false);
    d.oncontextmenu = () => {
      return true;
    };
  }
}

// ваше событие здесь!!!

// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */
let blockNine = (document.querySelector(".div-9").oncontextmenu = t9);

function t9() {
  let img = document.querySelectorAll("img")[0];
  img.setAttribute("src", "img/2.png");
  // console.log(img);
  return false;
}

// ваше событие здесь!!!

// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */
let blockTen = (document.querySelector(".div-10").onmousemove = t10);

function t10() {
  let img = document.querySelectorAll("img")[1];
  img.setAttribute("src", "img/2.png");
}

// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */
let blockEleven = (document.querySelector(".div-11").onmouseenter = t11);

function t11() {
  let img = document.querySelectorAll("img")[2];
  img.setAttribute("src", "img/2.png");
}
blockEleven = document.querySelector(".div-11").onmouseleave = t121;

function t121() {
  let img = document.querySelectorAll("img")[2];
  img.setAttribute("src", "img/1.png");
}

// ваше событие здесь!!!

// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */

document.querySelector(".div-12").onmousedown = (e) => {
  e.target.classList.add("active");
  console.log(e.target);
};

// ваше событие здесь!!!

// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */

document.querySelector(".div-13").onmousedown = (e) => {
  e.target.classList.add("active");
};

document.querySelector(".div-13").onmouseup = (e) => {
  e.target.classList.remove("active");
};

// ваше событие здесь!!!

// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, при клике добавляем блоку div-14 класс active. */
// document.querySelector("t-14").onclick = t14;
document.querySelector(".b-14").onclick = () => {
  document.querySelector(".div-14").onclick = t14;
};

function t14() {
  document.querySelector(".div-14").classList.add("active");
}

// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */
document.querySelector(".div-15").onmousemove = t15;
let t = 1;

function t15() {
  t++;
  document.querySelector(".div-15").innerHTML = t;
}
// ваше событие здесь!!!

// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */
document.querySelector(".div-16").onmousemove = t16;
let countSix = 75;

function t16() {
  countSix++;
  document.querySelector(".div-16").style.width = countSix + "px";
}

// ваше событие здесь!!!

// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */
document.querySelector(".b-17_on").onclick = t17On;
document.querySelector(".b-17_off").onclick = t17Off;

function t17On() {
  document.querySelector(".div-16").onmousemove = t16;
}
function t17Off() {
  document.querySelector(".div-16").onmousemove = false;
}
// ваше событие здесь!!!
// ваше событие здесь!!!

// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */
document.querySelector(".div-18").onmouseenter = t18;

function t18(e) {
  console.log(e.target.offsetHeight);
  console.log(e.target.offsetWidth);
  console.log(e);
}
// ваше событие здесь!!!

// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */
document.querySelector(".div-19").onmouseout = t19;

function t19() {
  console.log(this.getAttribute("class"));
}
// ваше событие здесь!!!

// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */
document.querySelector("progress").onmousemove = t20;
let coutnTwenty = 10;

function t20() {
  coutnTwenty++;
  document.querySelector("progress").value = coutnTwenty;
  if (document.querySelector("progress").value === 100) {
    document.querySelector("#value").innerHTML = 100;
  } else {
    document.querySelector("#value").innerHTML = coutnTwenty;
  }
}
// ваше событие здесь!!!
