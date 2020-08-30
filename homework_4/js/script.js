//============================Task1=============================
//Создайте button.b-1 - при нажатии на него выводите alert с номером задачи.
let button_one = (document.querySelector("#b-1").onclick = () =>
  alert("Task1"));

//============================Task2=============================
//Создайте input.b-2 type=button - при нажатии на него выводите alert с номером задачи. Номер задачи просто пропишите вручную.
let button_two = (document.querySelector("#b-2").onclick = () =>
  alert("Task2"));

//============================Task3=============================
//Создайте p.p-3 - при нажатии на него выводите alert с номером задачи.
let paragraph_three = (document.querySelector("#p-3").onclick = () =>
  alert("Task3"));

//============================Task4=============================
//Создайте input(checkbox).i-4 и button.b-4 - при нажатии на кнопку выводите true если checkbox выбран и false если не выбран. Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер задачи. В данном случае div.out-4
let checkbox_four = document.querySelector("#c-4");
let paragraph_four = document.querySelector("#out-4");
let button_four = (document.querySelector("#b-4").onclick = () => {
  if (checkbox_four.checked) {
    paragraph_four.innerHTML = checkbox_four.value;
  } else {
    paragraph_four.innerHTML = "not";
  }
});

//============================Task5=============================
//Создайте input(checkbox).i-5 и button.b-5. Для checkbox добавьте value="task-5" - при нажатии на кнопку b-5 выводите value checkbox если checkbox выбран и false если не выбран. Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер задачи. В данном случае div.out-5.
let input_five = document.querySelector("#i-5");
let paragraph_five = document.querySelector("#out-5");
let button_five = (document.querySelector("#b-5").onclick = () => {
  if (input_five.checked) {
    paragraph_five.innerHTML = input_five.value;
  } else {
    paragraph_five.innerHTML = false;
  }
});

//============================Task6=============================
//Создайте input(hidden).i-6 и button.b-6 - при нажатии на кнопку выводите value из input в div.out-6.
let input_six = document.querySelector("#i-6");
let paragraph_six = document.querySelector("#out-6");
let button_six = (document.querySelector("#b-6").onclick = () => {
  paragraph_six.innerHTML = input_six.value;
});

//============================Task7=============================
//Создайте input(password).i-7 и button.b-7 - при нажатии на кнопку выводите в div.out-71 value прописанное в input. В .out-72 выводите 1 если длина пароля больше или равна 6 или 0 если меньше. Для подсчета количества символов в строке используйте length.
let input_seven = document.querySelector("#i-7");
let paragraph_sevenOne = document.querySelector("#out-71");
let paragraph_sevenTwo = document.querySelector("#out-72");
let button_seven = (document.querySelector("#b-7").onclick = () => {
  paragraph_sevenOne.innerHTML = input_seven.value;
  if (input_seven.value.length > 6) {
    paragraph_sevenTwo.innerHTML = 1;
  } else {
    paragraph_sevenTwo.innerHTML = 0;
  }
});

//============================Task8=============================
//Создайте div.out-8 и кнопку .b-8. При нажатии кнопки создавайте внутри div.out-8 элемент input.i-81 и кнопку .b-81 (innerHTML). Добавьте на созданную кнопку событие клик и запуск функции f81. Функция должна в .out-81 выводить value созданного input.i-81.
let input_eight = document.querySelector("#i-8");
let paragraph_eight = document.querySelector("#out-8");
let button_eight = (document.querySelector("#b-8").onclick = () => {
  paragraph_eight.innerHTML = `
    <input type="password" name="" id="i-81"/>
    <button id="b-81">click</button>
    <p id="out-81"></p>
    `;
  let input = document.querySelector("#i-81");
  let paragraph = document.querySelector("#out-81");
  let button = (document.querySelector("#b-81").onclick = () =>
    (paragraph.innerHTML = input.value));
});

//============================Task9=============================
//Создайте один input(radio).r-9 и button.b-9 - при нажатии на button если radio.r-9 выбран (активен, checked) выводите в .out-9 - value прописанное в r-9, либо 0 если не активен.
let input_nine = document.querySelector("#r-9");
let paragraph_nine = document.querySelector("#out-9");
let button_nine = (document.querySelector("#b-9").onclick = () => {
  if (input_nine.checked) {
    paragraph_nine.innerHTML = input_nine.value;
  } else {
    paragraph_nine.innerHTML = 0;
  }
});

//============================Task10=============================
//>Создайте input(color).i-10 и button.b-10 - при нажатии на кнопку окрашивайте div.out-10 выбранным цветом (имеется ввиду .style.background = ).
let input_ten = document.querySelector("#i-10");
let paragraph_ten = document.querySelector("#out-10");
let button_ten = (document.querySelector("#b-10").onclick = () => {
  paragraph_ten.style.background = input_ten.value;
});

//============================Task11=============================
//Создайте input(color).i-111 и input(color).i-112- два элемента и button.b-11 - при нажатии на кнопку присвойте цвет из первого input в value второго.
let input_elevenOne = document.querySelector("#i-111");
let input_elevenTwo = document.querySelector("#i-112");
let button_eleven = (document.querySelector("#b-11").onclick = () => {
  input_elevenOne.value = input_elevenTwo.value;
  console.log(input_elevenOne.value);
});

//============================Task12=============================
//Создайте input(date).i-12 и button.b-12 - при нажатии на кнопку выводите на в out-12 выбранную в input дату.
let input_twelve = document.querySelector("#i-12");
let paragraph_twelve = document.querySelector("#out-12");
let button_twelve = (document.querySelector("#b-12").onclick = () => {
  paragraph_twelve.innerHTML = input_twelve.value;
});

//============================Task13=============================
//Создайте input(range).i-13. При изменении положения ползунка i-13 выводите значение в out-13. Для события используйте oninput.
let input_thirteen = document.querySelector("#i-13");
let paragraph_thirteen = document.querySelector("#out-13");
input_thirteen.oninput = () => {
  paragraph_thirteen.innerHTML = input_thirteen.value;
};

//============================Task14=============================
//Создайте text-area.t-14 и button.b-14 - при нажатии на кнопку выводите на в out-14 текст введенный в t-14.
let text_fourteen = document.querySelector("#text-14");
let paragraph_fourteen = document.querySelector("#out-14");
let button_fourteen = (document.querySelector("#b-14").onclick = () => {
  paragraph_fourteen.innerHTML = text_fourteen.value;
});

//============================Task15=============================
//Создайте text-area.t-15, input.i-15 и button.b-15 - при нажатии на кнопку выводите текст из input.i-15 в textarea.t-15 и на страницу в out-15.
let text_fiveteen = document.querySelector("#text-15");
let input_fiveteen = document.querySelector("#i-15");
let paragraph_fiveteen = document.querySelector("#out-15");
let button_fiveteen = (document.querySelector("#b-15").onclick = () => {
  paragraph_fiveteen.innerHTML =
    text_fiveteen.value + " " + input_fiveteen.value;
});

//============================Task16=============================
//Создайте select.s-16 и button.b-16 - при нажатии на кнопку выводите в out-16 value выбранного option из s-16.
let select_sixteen = document.querySelector("#s-16");
let paragraph_sixteen = document.querySelector("#out-16");
let button_sixteen = (document.querySelector("#b-16").onclick = () => {
  paragraph_sixteen.innerHTML = select_sixteen.value;
});
//============================Task17=============================
//Создайте select.s-17. Добавьте ему событие onchange, при наступлении которого запускается функция f17. Функция должна выводить в out-17 value выбранного в select option.
let select_seventeen = document.querySelector("#s-17");
let paragraph_seventeen = document.querySelector("#out-17");

select_seventeen.onchange = () => {
  paragraph_seventeen.innerHTML = select_seventeen.value;
};

//============================Task18=============================
//Создайте select.s-18 и input.i-18. Добавьте на select событие onchange, при наступлении которого запускается функция f18. Функция должна выводить в input i-18 value выбранного в select option.
let select_eighteen = document.querySelector("#s-18");
let paragraph_eighteen = document.querySelector("#out-18");

select_eighteen.onchange = f18;

function f18() {
  paragraph_eighteen.innerHTML = select_eighteen.value;
}

//============================Task19=============================
//Создайте форму. В ней input(text).i-191 и input(password).i-192 - и кнопку button.b-19. По нажатию кнопки выводите значение text и password в out-19 через пробел. Обратите внимание на хитрость. Мы, кнопку сейчас повесили за пределами формы. Чуть позже мы рассмотрим почему это делали.
// let form_nineTeen = document.querySelector("form");
let paragraph_nineTeen = document.querySelector("#out-19");
let input_nineTeenText = document.querySelector("#i-191");
let input_nineTeenPassword = document.querySelector("#i-192");
let button_nineteen = (document.querySelector("#b-19").onclick = () => {
  paragraph_nineTeen.innerHTML =
    input_nineTeenText.value + " " + input_nineTeenPassword.value;
});

//============================Task20=============================
//Создайте форму .f-20. В ней input(text) и input(password) - и кнопку button.b-20. По нажатию кнопки выводите значение из input text и password в out-20 через пробел. Используйте form.elements (https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements)
let form_twonTeen = document.querySelector("#form-20");
let paragraph_twonTeen = document.querySelector("#out-20");
let button_twonTeen = (document.querySelector("#b-20").onclick = (e) => {
  e.preventDefault();
  paragraph_twonTeen.innerHTML =
    form_twonTeen.elements.text.value +
    " " +
    form_twonTeen.elements.password.value;
});
