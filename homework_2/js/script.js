//task_1. Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.
let a = 7;
let b = 9;
console.log("task_1 " + a * b);

//task_2. Создайте две переменные c = 7 и d = 9. Выведите на страницу результат деления c на d.
let c = 7;
let d = 9;
let answer_one = (document.querySelector(".answer-one").innerHTML = c / d);

//task_3. Создайте две переменные e = 3 и f = 5. Выведите на страницу результат сложения e + f.
let e = 3;
let f = 5;
let answer_two = (document.querySelector(".answer-two").innerHTML = e + f);

//task_4. Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу результат сложения e1 + f1. Объясните разницу.
let e1 = "3";
let f1 = 5;
let answer_three = (document.querySelector(".answer-three").innerHTML =
  e1 + f1);

//task_5. Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу результат деления e2 на f2.
let e2 = 3;
let f2 = 0;
let answer_four = (document.querySelector(".answer-four").innerHTML = e2 + f2);

//task_6. Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу результат сложения двух переменных.
let e3 = 3;
let f3 = "Hello";
let answer_five = (document.querySelector(".answer-five").innerHTML = e3 + f3);

//task_7. Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу результат умножения двух переменных.
let e4 = 3;
let f4 = "Hello";
let answer_six = (document.querySelector(".answer-six").innerHTML = e4 * f4);

//task_8. Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.
let input_one = document.querySelector("#input_one");
let button_one = document.querySelector("#button_one");

button_one.onclick = () => {
  console.log("task_8 " + input_one.value);
};

//task_9. Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу, что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.
let input_two = document.querySelector("#input_two");
let button_two = document.querySelector("#button_two");
let p_two = document.querySelector("#p_two");

button_two.onclick = () => {
  p_two.innerHTML = input_two.value;
};

//task_10. Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10.
let input_three = document.querySelector("#input_three");
let button_three = document.querySelector("#button_three");
let p_three = document.querySelector("#p_three");

button_three.onclick = () => {
  let num = +input_three.value;
  p_three.innerHTML = num * 10;
};

//task_11. Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь и к нему добавленное число 10.
let input_four = document.querySelector("#input_four");
let button_four = document.querySelector("#button_four");
let p_four = document.querySelector("#p_four");

button_four.onclick = () => {
  let num = +input_four.value;
  p_four.innerHTML = num + 10;
};

//task_12. Создайте два input и кнопку. В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки выполняется функция, которая выводит в консоль строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия.
let input_firstName = document.querySelector("#first-name");
let input_lastName = document.querySelector("#last-name");
let button_name = document.querySelector("#btn_name");
input_firstName.style = `display: block; margin: 10px auto;`;
input_lastName.style = `display: block; margin: 10px auto;`;

button_name.onclick = () => {
  let firstName = input_firstName.value;
  let lastName = input_lastName.value;

  console.log("task_12: hello " + firstName + " " + lastName);
};

//task_13. Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу.
let num_one = document.querySelector("#num-one");
let num_two = document.querySelector("#num-two");
let btn_plus = document.querySelector("#btn_plus");
let p_nums = document.querySelector("#p_nums");
num_one.style = `display: block; margin: 10px auto;`;
num_two.style = `display: block; margin: 10px auto;`;

btn_plus.onclick = () => {
  let one = +num_one.value;
  let two = +num_two.value;

  p_nums.innerHTML = one * two;
};

//task_14. Создайте input и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.
let input_five = (document.querySelector("#five").value = "Hello");
console.log("task_14 " + input_five);

//task_15. Создайте input и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции.
let y = (document.querySelector("#fifteen").style.border = "2px solid red");

//task_16. Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел.
let num_three = document.querySelector("#num-three");
let num_four = document.querySelector("#num-four");
let btn_plus_nums = document.querySelector("#btn_plus_nums");
let answer_sixteen = document.querySelector("#answer_sixteen");
num_three.style = `display: block; margin: 10px auto;`;
num_four.style = `display: block; margin: 10px auto;`;

btn_plus_nums.onclick = () => {
  let three = +num_three.value;
  let four = +num_four.value;
  answer_sixteen.innerHTML = three + four;
};

//task_17. Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.
let input_seventeen = document.querySelector("#seventeen");
let btn_seventeen = document.querySelector("#btn-seventeen");

btn_seventeen.onclick = () => {
  let t = input_seventeen.value;
  t = parseInt(t);
  console.log(t);
};

//task_18. Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.
let input_eighteen = document.querySelector("#eighteen");
let btn_eighteen = document.querySelector("#btn-eighteen");

btn_eighteen.onclick = () => {
  let t = input_eighteen.value;
  t = parseFloat(t);
  console.log(t);
};

//task_19. Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел. Мы это делали! Зачем? Затем, что нужно понимать как влияет перевод в число с помощью + и parseInt на отрицательные числа!!!
let input_ninteen = document.querySelector("#nineteen");
let input_ninteenOne = document.querySelector("#nineteen-one");
let btn_ninteen = document.querySelector("#btn-nineteen");
let answer_ninteen = document.querySelector("#answer_nineteen");

btn_ninteen.onclick = () => {
  let t = +input_ninteen.value;
  let t1 = +input_ninteenOne.value;
  answer_ninteen.innerHTML = t + t1;
  //   console.log(t + t1);
};

//task_20.Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' куда поставьте соответствующие данные из input-ов.
let userFirstName = document.querySelector("#user-first_name");
let userLastName = document.querySelector("#user-last_name");
let userAge = document.querySelector("#user-age");
let userProfession = document.querySelector("#user-proffesion");
let btnUser = document.querySelector("#btn-info");
let answer_user = document.querySelector("#answer_user");
userFirstName.style = `display: block; margin: 10px auto;`;
userLastName.style = `display: block; margin: 10px auto;`;
userAge.style = `display: block; margin: 10px auto;`;
userProfession.style = `display: block; margin: 10px auto;`;

btnUser.onclick = () => {
  let firstName = userFirstName.value;
  let lastName = userLastName.value;
  let age = userAge.value;
  let profession = userProfession.value;

  answer_user.innerHTML = `Уважаемый ${firstName} ${lastName} ваш возраст ${age} лет/года, по професси вы ${profession}`;
};
