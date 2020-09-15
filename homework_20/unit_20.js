// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

let inputOne = (document.querySelector(".i-1").onchange = t1);

function t1() {
  let a = document.querySelector(".i-1").value;
  document.querySelector(".out-1").innerHTML = a;
}

// ваше событие здесь!!!

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */
let inputTwo = (document.querySelector(".i-2").onkeypress = t2);

function t2(e) {
  document.querySelector(".out-2").innerHTML = e.keyCode;
}

// ваше событие здесь!!!

// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

let w3 = 75;
let inputThree = (document.querySelector(".i-3").onkeypress = t3);

function t3(e) {
  let answer = "";
  if (e.key === " ") {
    answer = false;
  } else {
    answer = true;
  }
  document.querySelector(".out-3").innerHTML = answer;
}

// ваше событие здесь!!!

// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

let inputFour = (document.querySelector(".i-4").onkeypress = t4);
let uperCase = [
  113,
  119,
  101,
  114,
  116,
  121,
  117,
  105,
  111,
  112,
  97,
  115,
  100,
  102,
  103,
  104,
  106,
  107,
  108,
  122,
  120,
  99,
  118,
  98,
  110,
  109,
];
let downCase = [
  81,
  87,
  69,
  82,
  84,
  89,
  85,
  73,
  79,
  80,
  65,
  83,
  68,
  70,
  71,
  72,
  74,
  75,
  76,
  90,
  88,
  67,
  86,
  66,
  78,
  77,
];

function t4(e) {
  document.querySelector(".out-4").innerHTML += e.key.toLowerCase();
}

// ваше событие здесь!!!

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

let inputFive = (document.querySelector(".i-5").onkeypress = t5);

function t5(e) {
  document.querySelector(".out-5").innerHTML += e.key.toUpperCase();
}

// ваше событие здесь!!!

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */

let inlputSix = (document.querySelector(".i-6").onkeypress = t6);

function t6(e) {
  document.querySelector(".out-6").innerHTML += e.key.toLowerCase();
}

// ваше событие здесь!!!

// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */
// let a7 = [...uperCase, ...downCase];
let a7 = ["#", "@", ")"];
let inputSeven = (document.querySelector(".i-7").onkeypress = t7);

function t7(e) {
  console.log(e);
  let random = a7[Math.floor(Math.random() * a7.length)];
  console.log(random);
  document.querySelector(".out-7").innerHTML += random;
}

// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */
let inputEight = (document.querySelector(".i-8").onkeypress = t8);

function t8(e) {
  let s = "";
  if (e.key === "i") {
    s = 1;
  } else if (e.key === "o") {
    s = 0;
  } else if (e.key === "l") {
    s = 7;
  }
  document.querySelector(".out-8").innerHTML = s;
}

// ваше событие здесь!!!

// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */

let inputNine = (document.querySelector(".i-9").onkeydown = t9);
let count = 0;

function t9(e) {
  if (e.code === "ArrowDown") {
    count++;
  }
  document.querySelector(".out-9").innerHTML = count;
}

// ваше событие здесь!!!

// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */
let inputTen = (document.querySelector(".i-10").onkeydown = t10);

let LR = 75;
let UD = 75;

function t10(e) {
  let img = document.querySelector(".div-10");
  if (e.code === "ArrowDown") {
    UD++;
    img.style.height = UD + "px";
  } else if (e.code === "ArrowLeft") {
    LR++;
    img.style.width = LR + "px";
  } else if (e.code === "ArrowRight") {
    LR++;
    img.style.width = LR + "px";
  } else if (e.code === "ArrowUp") {
    UD++;
    img.style.height = UD + "px";
  }
  //   console.log(e);
}

// ваше событие здесь!!!

// Task 11 ============================================
/*  Проект. Дан input .i-11. Используя знания html и css нарисуйте клавиатуру (можно схематически). Изображение должно содержать числа, символьные клавиши, пробел, enter, caps lock, shift, tab, alt. При вводе текста в input в момент нажатия клавиши - затемняйте ее, в момент отпускания - возвращайте к первоначальному состоянию. Аналогично при нажатии enter, space, alt, shift, ctrl. Затемнение реализуйте через добавление класса CSS. Для удобства рекомендую каждой клавише добавить атрибут data с символом. Если нажата клавиша caps lock - то присвоить ей затемнение, которое работает до последующего отжатия клавиши. */

let buttonsEleven = document.querySelectorAll(".key_click"),
  buttonTab = document.querySelector("#tab"),
  buttonAlt = document.querySelector("#alt"),
  buttonCtrl = document.querySelector("#ctrl"),
  buttonShift = document.querySelector("#shift"),
  buttonCapsLock = document.querySelector("#caps-lock");

for (let i = 0; i < buttonsEleven.length; i++) {
  buttonsEleven[i].onmousedown = t11;
  buttonsEleven[i].onmouseup = function () {
    this.classList.remove("button_click");
  };
}

buttonCapsLock.onclick = function () {
  buttonCapsLock.classList.toggle("button_click");
  // if (buttonCapsLock.classList === "button_clikc") {
  //   buttonCapsLock.classList.remove("button_click");
  // } else {
  //   buttonCapsLock.classList.add("button_click");
  // }
};

function t11() {
  let word = this.getAttribute("data");
  let answer = document.querySelector(".i-11");
  answer.value += word;
  this.classList.add("button_click");
  // console.log(this);
}

// ваше событие здесь!!!
