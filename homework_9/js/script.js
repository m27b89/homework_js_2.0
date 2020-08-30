//Task1. Добавьте кнопку .b-1, которая запускает функцию f1. Функция присваивает блоку .out-1 ширину 200px, высоту 40px.
const button_one = (document.querySelector(".b-1").onclick = f1);
const answer_one = document.querySelector(".out-1");

function f1() {
  answer_one.style = `width: 200px; height: 40px; border: 1px solid black;`;
}

//Task2. По нажатию кнопки b-2 запускайте функцию f2, которая присваивает блоку out-2 класс .bg-2.
const button_two = (document.querySelector(".b-2").onclick = f2);
const answer_two = document.querySelector(".out-2");

function f2() {
  answer_two.style = `width: 200px; height: 40px; border: 1px solid black;`;
  answer_two.classList.add("bg-2");
}

//Task3. По нажатию кнопки b-3 запускайте функцию f3, которая удаляет у блока out-3 класс .bg-3
const button_three = (document.querySelector(".b-3").onclick = f3);
const answer_three = document.querySelector(".out-3");

function f3() {
  answer_three.style = `width: 200px; height: 40px; border: 1px solid black;`;
  answer_three.classList.add("bg-3");
}

//Task4. По нажатию кнопки b-4 запускайте функцию f4, которая делает toggle класса bg-4 для блока out-4.
const button_four = (document.querySelector(".b-4").onclick = f4);
const answer_four = document.querySelector(".out-4");

function f4() {
  answer_four.style = `width: 200px; height: 40px; border: 1px solid black;`;
  answer_four.classList.toggle("bg-4");
}

//Task5. По нажатию b-5 запускайте функцию f5, которая проверяет наличие класса bg-4 у блока out-4 (да, именно bg-4 у out-4 ). Результат - true или false, выводите в out-5.
const button_five = (document.querySelector(".b-5").onclick = f5);
const answer_five = document.querySelector(".out-5");

function f5() {
  let answer = answer_four.getAttribute("class");
  let result = "";
  //   console.log(answer);
  if (answer === "out-4 bg-4") {
    result = true;
  } else {
    result = false;
  }
  answer_five.innerHTML = result;
}

//Task6. По нажатию b-6 запускайте функцию f6, которая выводит в out-6 количество параграфов с классом p-6.
const paragraph = document.querySelectorAll(".p-6");
const button_six = (document.querySelector(".b-6").onclick = f6);
const answer_six = document.querySelector(".out-6");

function f6() {
  let answer = "";
  for (let i = 0; i < paragraph.length; i++) {
    answer += paragraph[i].getAttribute("class") + " ";
  }
  answer_six.innerHTML = answer;
}

//Task7. По нажатию кнопки b-7 запускайте функцию f7, которая присваивает блокам out-7 класс .bg-7. Обратите внимание, что данных блоков больше одного, следовательно нужен цикл.
const button_seven = (document.querySelector(".b-7").onclick = f7);
const answer_seven = document.querySelectorAll(".out-7");

function f7() {
  for (let i = 0; i < answer_seven.length; i++) {
    answer_seven[i].classList.add("bg-7");
  }
}

//Task8. По нажатию кнопки b-8 запускайте функцию f8, которая делает toggle блокам out-8 класс .bg-8. Обратите внимание, что данных блоков больше одного, следовательно нужен цикл.
const button_eight = (document.querySelector(".b-8").onclick = f8);
const answer_eight = document.querySelectorAll(".out-8");

function f8() {
  for (let i = 0; i < answer_eight.length; i++) {
    answer_eight[i].classList.toggle("bg-8");
  }
}

//Task9. Усложним предыдущие задачи. С помощью цикла повесьте на блоки out-9 событие клик. По клику должна выполняться функция f9. Функция, должна добавлять класс bg-9 тому out-9 на котором кликнули.
const button_nine = (document.querySelector(".b-9").onclick = f9);
const answer_nine = document.querySelectorAll(".out-9");

function f9() {
  for (let i = 0; i < answer_nine.length; i++) {
    answer_nine[i].onclick = function () {
      this.classList.add("bg-9");
      //   console.log(this.innerHTML);
    };
  }
}

//Task10. Усложним предыдущие задачи. С помощью цикла повесьте на блоки out-10 событие клик. По клику должна выполняться функция f10. Функция, должна делать toggle класса bg-10 тому out-10 на котором кликнули.
const button_ten = (document.querySelector(".b-10").onclick = f10);
const answer_ten = document.querySelectorAll(".out-10");

function f10() {
  for (let i = 0; i < answer_ten.length; i++) {
    answer_ten[i].onclick = function () {
      this.classList.toggle("bg-10");
      //   console.log(this.innerHTML);
    };
  }
}

//Task11. Добавьте кнопку .b-11, которая запускает функцию f11. Функция создает через createElement div c текстом 25 и добавляет его через append в out-11.
const button_elevn = (document.querySelector(".b-11").onclick = f11);
const answer_elevn = document.querySelector(".out-11");

function f11() {
  let div = document.createElement("div");
  div.innerHTML = "25";
  answer_elevn.appendChild(div);
}

//Task12. Добавьте кнопку .b-12, которая запускает функцию f12. Функция создает через createElement div c текстом 12 и добавляет ему класс bg-12. Созданный div добавляется в out-12.
const button_twelve = (document.querySelector(".b-12").onclick = f12);
const answer_twelve = document.querySelector(".out-12");

function f12() {
  let div = document.createElement("div");
  div.innerHTML = "12";
  div.classList.add("bg-12");
  answer_twelve.appendChild(div);
}

//Task13. Добавьте кнопку .b-13, которая запускает функцию f13. Функция создает через createElement div c текстом pushMe и добавляет ему класс bg-13. Также, созданному div добавляется событие onclick, по которому выполняется функция f13_1. Созданный div добавляется в out-13.
const button_thirteen = (document.querySelector(".b-13").onclick = f13);
const answer_thirteen = document.querySelector(".out-13");

function f13() {
  let div = document.createElement("div");
  div.innerHTML = "pushMe";
  div.classList.add("bg-13");
  div.onclick = f13_1;
  answer_thirteen.appendChild(div);
}

function f13_1() {
  console.log("create div");
}

//Task14. Добавьте кнопку .b-14, которая запускает функцию f14. Функция создает через createElement div c текстом 14 и добавляет ему класс bg-14. Созданный div добавляется в out-14 с помощью prepend.
const button_fourteen = (document.querySelector(".b-14").onclick = f14);
const answer_fourteen = document.querySelector(".out-14");

function f14() {
  let div = document.createElement("div");
  div.innerHTML = "14";
  div.classList.add("bg-14");
  answer_fourteen.prepend(div);
}

//Task15. Добавьте кнопку .b-15, которая запускает функцию f15. Функция создает через createElement div c текстом 15 и добавляет ему класс bg-15. Созданный div добавляется в out-15 с помощью before.
const button_fiveteen = (document.querySelector(".b-15").onclick = f15);
const answer_fiveteen = document.querySelector(".out-15");

function f15() {
  let div = document.createElement("div");
  div.innerHTML = "15";
  div.classList.add("bg-15");
  answer_fiveteen.before(div);
}

//Task16. Добавьте кнопку .b-16, которая запускает функцию f16. Функция создает через createElement div c текстом 16 и добавляет ему класс bg-16. Созданный div добавляется в out-16 с помощью after.
const button_sixteen = (document.querySelector(".b-16").onclick = f16);
const answer_sixteen = document.querySelector(".out-16");

function f16() {
  let div = document.createElement("div");
  div.innerHTML = "16";
  div.classList.add("bg-16");
  answer_sixteen.after(div);
}

//Task17. Добавьте кнопку .b-17, которая запускает функцию f17. Функция создает через createElement div c текстом 17 и добавляет ему класс bg-17. Созданный div заменяет out-17 с помощью replaceWith.
const button_seventeen = (document.querySelector(".b-17").onclick = f17);
const answer_seventeen = document.querySelector(".out-17");

function f17() {
  let div = document.createElement("div");
  div.innerHTML = "17";
  div.classList.add("bg-17");
  answer_seventeen.replaceWith(div);
}

//Task18. Добавьте кнопку .b-18, которая запускает функцию f18. Функция с помощью getAttribute получает data-b атрибут с параграф p-18 и выводит в out-18.
const button_eighteen = (document.querySelector(".b-18").onclick = f18);
const answer_eighteen = document.querySelector(".out-18");

function f18() {
  let answer = answer_eighteen.getAttribute("data-b");
  answer_eighteen.innerHTML = answer;
}

//Task19. Добавьте кнопку .b-19, которая запускает функцию f19. Функция с помощью getAttribute получает data-b атрибут с параграфов p-19 и выводит в out-19 через пробел. Обратите внимание, что элементов p-19 больше одного.
const button_nineteen = (document.querySelector(".b-19").onclick = f19);
const answer_nineteen = document.querySelector(".out-19");
const paragraph_nineteen = document.querySelectorAll(".p-19");

function f19() {
  let count = "";
  for (let i = 0; i < paragraph_nineteen.length; i++) {
    count += paragraph_nineteen[i].getAttribute("data-b");
    console.log(count);
  }
  answer_nineteen.innerHTML = count;
}

//Task20. Добавьте кнопку .b-20, которая запускает функцию f20. Функция с помощью setAttribute присваивает атрибут title="go" в div.out-20.
const button_twenty = (document.querySelector(".b-20").onclick = f20);
const answer_twenty = document.querySelector(".out-20");

function f20() {
  answer_twenty.setAttribute("title", "go");
}
