// Task 1 ============================================
/* 
 <p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два запроса объедините с помощью promiseAll. Результат выведите в out-1 результат. Запускаться функция
    должна по нажатию b-1.</p>
*/

let keyItgidInfo = "5ADcB96BA48d3f80";
let link = "http://getpost.itgid.info/index2.php";

function fetchRequestGet(action, name, num1, num2, year, m, d, y) {
  let prom = new Promise((resolve, reject) => {
    fetch(
      `${link}?auth=${keyItgidInfo}&action=${action}&name=${name}&num1=${num1}&num2=${num2}&year=${year}&m=${m}&d=${d}&y=${y}`
    ).then((response) => resolve(response.text()));
  });
  return prom;
}

document.querySelector(".b-1").onclick = t1;

function t1() {
  let one = fetchRequestGet(1);
  let two = fetchRequestGet(2, "Ivanio");
  let three = Promise.all([one, two]).then((response) => {
    document.querySelector(".out-1").innerHTML = response;
  });
}

// ваше событие здесь!!!

// Task 2 ============================================
/* 
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.</p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. </p> */

document.querySelector(".b-2").onclick = t2;

function t2() {
  let one = fetchRequestGet(3, null, 1, 2);
  let two = fetchRequestGet(4, null, 100, 1000);
  let three = Promise.all([one, two]).then((response) => {
    console.log(response);
    document.querySelector(".out-2").innerHTML = response;
  });
}

// ваше событие здесь!!!

// Task 3 ============================================
/*  
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два
запроса объедините с помощью promiseAll.
Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. </p>*/

document.querySelector(".b-3").onclick = t3;

function t3() {
  let one = fetchRequestGet(5);
  let two = fetchRequestGet(6, null, 5, 55);
  let three = Promise.all([one, two]).then(
    (response) => (document.querySelector(".out-3").innerHTML = response)
  );
}

// ваше событие здесь!!!

// Task 4 ============================================
/*  
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все
сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Выведите в out-4 результат. Запускаться функция должна по нажатию b-4.</p>

*/

document.querySelector(".b-4").onclick = t4;

function t4() {
  let one = fetchRequestGet(7);
  let two = fetchRequestGet(8, null, null, null, 1989);
  let three = Promise.all([one, two]).then(
    (response) => (document.querySelector(".out-4").innerHTML = response)
  );
}

// ваше событие здесь!!!

// Task 5 ============================================
/*  
 <p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1.</p>
<p>Отправьте
POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два
запроса объедините с помощью promiseAll. Результат выведите в out-5 результат. Запускаться функция
должна по нажатию b-5.</p>
*/

function fetchRequestPost(action, name, num1, num2, year, y, d, m) {
  let prom = new Promise((resolve, reject) => {
    fetch(link, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `auth=${keyItgidInfo}&action=${action}&name=${name}&num1=${num1}&num2=${num2}&year=${year}&y=${y}&d=${d}&m=${m}`,
    }).then((response) => resolve(response.text()));
  });
  return prom;
}

document.querySelector(".b-5").onclick = t5;

function t5() {
  let one = fetchRequestPost(1);
  let two = fetchRequestPost(2, "Ivan");
  let three = Promise.all([one, two]).then(
    (response) => (document.querySelector(".out-5").innerHTML = response)
  );
}

// ваше событие здесь!!!

// Task 6 ============================================
/* 
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3.
    Добавьте
    параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. </p>
<p>Отправьте POST
    запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
    Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
    заданном
    диапазоне.</p>
<p> Два запроса объедините с помощью promiseAll.
    Выведите в
    out-6 результат. Запускаться функция должна по нажатию b-6. </p>
*/

document.querySelector(".b-6").onclick = t6;

function t6() {
  let one = fetchRequestPost(3, null, 3, 3);
  let two = fetchRequestPost(4, null, 4, 40);
  let three = Promise.all([one, two]).then(
    (response) => (document.querySelector(".out-6").innerHTML = response)
  );
}

// ваше событие здесь!!!

// Task 7 ============================================
/*  
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. </p>

*/

document.querySelector(".b-7").onclick = t7;

function t7() {
  let one = fetchRequestPost(5);
  let two = fetchRequestPost(6, null, 6, 22);
  let three = Promise.all([one, two]).then(
    (response) => (document.querySelector(".out-7").innerHTML = response)
  );
}

// ваше событие здесь!!!

// Task 8 ============================================
/* 
<p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth
(ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Два запроса объедините с помощью promiseAll. Выведите в out-8 результат. Запускаться функция должна по
нажатию b-8.</p>
*/

document.querySelector(".b-8").onclick = t8;

function t8() {
  let one = fetchRequestPost(7);
  let two = fetchRequestPost(8, null, null, null, 1989);
  let three = Promise.all([one, two]).then(
    (response) => (document.querySelector(".out-8").innerHTML = response)
  );
}

// ваше событие здесь!!!
