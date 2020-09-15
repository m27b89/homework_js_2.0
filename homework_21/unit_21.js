// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */
document.querySelector(".div-1").addEventListener("touchstart", t1);

function t1() {
  document.querySelector(".out-1").innerHTML += "touch ";
}

// ваше событие здесь!!!

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */
document.querySelector(".div-2").addEventListener("touchstart", t2);
countTwo = 0;

function t2() {
  countTwo++;
  document.querySelector(".out-2").innerHTML = countTwo;
}

// ваше событие здесь!!!

// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */
document.querySelector(".div-3_1").addEventListener("touchstart", t3);
document.querySelector(".div-3_2").addEventListener("touchstart", t3);

function t3() {
  let answer = document.querySelector(".out-3");

  //   console.log(this.getAttribute("class").includes("div-3_1"));

  if (this.getAttribute("class").includes("div-3_1") === true) {
    answer.innerHTML = "1";
  } else if (this.getAttribute("class").includes("div-3_2") === true) {
    answer.innerHTML = "2";
  }
}

// ваше событие здесь!!!

// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */
document.querySelector(".b-4").onclick = () => {
  document.querySelector(".div-4").addEventListener("touchstart", t4);
};

function t4() {
  document.querySelector(".out-4").innerHTML = "touch";
}

// ваше событие здесь!!!

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */
document.querySelector(".b-5").onclick = t5;

function t5() {
  document.querySelector(".out-4").innerHTML = null;
}

// ваше событие здесь!!!

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */
document.querySelector(".div-4").addEventListener("touchend", t6);

function t6() {
  document.querySelector(".out-6").innerHTML = "touchend";
}

// ваше событие здесь!!!

// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */
document.querySelector(".div-7").ontouchstart = t7;

function t7() {
  this.style.backgroundColor = "red";
}

// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */
let a8 = ["red", "green", "blue", "orange", "pink", "yellow"];
document.querySelector(".div-8").ontouchstart = t8;

function t8() {
  for (let i = 0; i < a8.length; i++) {
    document.querySelector(".div-8").style.backgroundColor =
      a8[Math.floor(Math.random() * a8.length)];
  }
}

// ваше событие здесь!!!

// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */
document.querySelector(".div-9").ontouchstart = t9;

function t9(e) {
  console.log(e.touches);
  document.querySelector(".out-9").innerHTML = e.touches.length;
}

// ваше событие здесь!!!

// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */
document.querySelector(".div-10").ontouchmove = t10;
countTen = 75;

function t10() {
  countTen++;
  document.querySelector(".div-10").style.width = countTen + "px";
}

// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */

document.querySelector(".div-11").ontouchstart = t11;

function t11(e) {
  // console.log(e.touches[0]);
  document.querySelector(
    ".out-11"
  ).innerHTML = `X: ${e.touches[0].radiusX} Y: ${e.touches[0].radiusY}`;
}

// ваше событие здесь!!!

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/

const images = document.querySelectorAll(".img-12-min");
let count = 0; // переменная, которая указывает на номер активного изображения в images
// console.log("count " + count);
const next = document.querySelector(".next");
next.onclick = nextFunction;

const prev = document.querySelector(".prev");
prev.onclick = prevFunction;

const imgMax = document.querySelector(".img-12-max");

// console.log(imgMax.setAttribute("src", "img/2.png"));

function nextFunction() {
  count++;
  console.log("count " + count);

  images[count - 1].classList.remove("active-img");
  if (count > images.length - 1) {
    count = 0;
    console.log(count);
    images[0].classList.add("active-img");
  } else {
    images[count].classList.add("active-img");
  }
  imgMax.setAttribute("src", `img/${count + 1}.png`);
}

function prevFunction() {
  count--;
  console.log("count " + count);
  images[count + 1].classList.remove("active-img");
  if (count <= -1) {
    count = images.length - 1;
    images[images.length - 1].classList.add("active-img");
  } else {
    images[count].classList.add("active-img");
  }
  imgMax.setAttribute("src", `img/${count + 1}.png`);
}
// ваше событие здесь!!!
