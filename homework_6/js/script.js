//Task_1. С помощью вложенных циклов, нарисуйте строку:
// ***_***_***_
// где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.
let answerOne = document.querySelector(".out-1");
let countOne = "";
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    countOne += "* ";
  }
  countOne += "_";
}

answerOne.innerHTML += countOne;

//Task_2. С помощью вложенных циклов, нарисуйте строку:
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифры и перенос строки br, , второй звездочки, знак подчеркивания и знак переноса.
let answerTwo = document.querySelector(".out-2");
let countTwo = "";
for (let i = 0; i < 3; i++) {
  countTwo += i + 1 + "<br>";
  for (let j = 0; j < 3; j++) {
    countTwo += "*_";
  }
  countTwo += "<br>";
}

answerTwo.innerHTML += countTwo;

//Task_3. С помощью вложенных циклов, нарисуйте строку:
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// Решить задачу с помощью вложенных циклов. Внешний цикл выводит перенос строки br, внутренний - звездочки, знак подчеркивания.
let answerThree = document.querySelector(".out-3");
let countThree = "";
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    countThree += "*_";
  }
  countThree += "<br>";
}

answerThree.innerHTML += countThree;

//Task_4. С помощью вложенных циклов, нарисуйте строку:
// 1_1 2 3 4 5 2_1 2 3 4 5 3_1 2 3 4 5
let answerFour = document.querySelector(".out-4");
let countFour = "";
for (let i = 0; i < 3; i++) {
  countFour += i + 1 + "_";
  for (let j = 0; j < 5; j++) {
    countFour += j + 1 + "&nbsp;";
  }
}

answerFour.innerHTML += countFour;

//Task_5. С помощью вложенных циклов, нарисуйте строку:
// 101010
// 101010
// 101010
// Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1.
let answerFive = document.querySelector(".out-5");
let countFive = "";
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    countFive += `10`;
  }
  countFive += `<br>`;
}

answerFive.innerHTML += countFive;

//Task_6. С помощью вложенных циклов, нарисуйте строку:
//  10x01x
//  10x01x
//  10x01x
// Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1 либо х.
let answerSix = document.querySelector(".out-6");
let countSix = "";
for (let i = 0; i < 3; i++) {
  countSix += `10x`;
  for (let j = 0; j < 1; j++) {
    countSix += `01x`;
  }
  countSix += `<br>`;
}

answerSix.innerHTML += countSix;

//Task_7. *
// **
// ***
// ****
// Внешний цикл выводит перенос строки br. Вложенный цикл запускается от нуля до i и рисует звездочку.
let answerSeven = document.querySelector(".out-7");
let countSeven = "";
for (let i = 2; i < 5; i++) {
  for (let j = 0; j < i; j++) {
    countSeven += `*`;
  }
  countSeven += `<br>`;
}

answerSeven.innerHTML += countSeven;

//Task_8. С помощью вложенных циклов, нарисуйте строку:
// *****
// ****
// ***
// **
// *
// Внешний цикл выводит перенос строки br. Вложенный цикл рисует звездочки.
let answerEight = document.querySelector(".out-8");
let countEight = "";
for (let i = 0; i < 6; i++) {
  for (let j = i; j > 0; j--) {
    countEight += `*`;
  }
  countEight += `<br>`;
}

answerEight.innerHTML += countEight;

//Task_9. С помощью вложенных циклов, нарисуйте строку:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// Внешний цикл выводит перенос строки br. Вложенный цикл рисует цифры
let answerNine = document.querySelector(".out-9");
let countNine = "";
for (let i = 0; i < 6; i++) {
  for (let j = 0; j < i; j++) {
    countNine += `${j + 1}&#10;`;
  }
  countNine += `<br>`;
}

answerNine.innerHTML += countNine;

//Task_10. С помощью вложенных циклов, нарисуйте строку:
// 01 02 03 04 05 06 07 08 09 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// Внешний цикл выводит перенос строки br и запускается от 0 до 6.
// Вложенный цикл рисует цифры от 0 до 9. Обратите внимание, что первый ряд - есть ведущий нуль. Здесь все просто - проверили, если число меньше 10 - то конкатенируем нуль
let answerTen = document.querySelector(".out-10");
let countTen = "";
for (let i = 0; i < 1; i++) {
  for (let j = 1; j <= 50; j++) {
    if (j <= 9) {
      countTen += `0${j}&#10;`;
    } else {
      countTen += `${j}&#10;`;
    }
    if (j === 10) {
      countTen += `<br>`;
    }
    if (j === 20) {
      countTen += `<br>`;
    }
    if (j === 30) {
      countTen += `<br>`;
    }
    if (j === 40) {
      countTen += `<br>`;
    }
  }
}

answerTen.innerHTML += countTen;

//Task_11. Используя вложенные циклы создайте таблицу умножения от 1 до 10. Т.е. вначале столбец 1x1, 1x2...1x9 потом 2x1, 2x2 ... 2x9 и так далее. Оформить в виде столбцов где выводятся множители и результат.
// let answerEleven = document.querySelector(".out-11");
// let countEleven = "";
// for (let i = 1; i < 10; i++) {
//   for (let j = 1; j < 10; j++) {
//     countEleven += `${i} * ${j} = ${i * j}&#10;<br>`;
//   }
//   countEleven += `<br>`;
// }

// answerEleven.innerHTML += countEleven;

//Task_12. С помощью вложенных циклов и символа * нарисуйте:
//    *****
//    *****
//    *****
// let answeTwelve = document.querySelector(".out-12");
// let counTwelve = "";
// for (let i = 0; i < 3; i++) {
//   for (let j = 1; j < 6; j++) {
//     counTwelve += "* ";
//   }
//   counTwelve += `<br>`;
// }

// answeTwelve.innerHTML += counTwelve;

//Task_13. С помощью вложенных циклов и символа * нарисуйте:
//    *****
//    ****
//    ***
//    **
//    *
let answeThirTeen = document.querySelector(".out-13");
let counThirTeen = "";
let coutnForThirTeen = 6;
for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    if (coutnForThirTeen > j) {
      counThirTeen += "* ";
    }
  }
  coutnForThirTeen--;
  counThirTeen += `<br>`;
}

answeThirTeen.innerHTML += counThirTeen;

//Task_14. С помощью вложенных циклов и символа * нарисуйте:
//   *****
//  *****
// *****
let answeFourTeen = document.querySelector(".out-14");
let countFourTeen = "";
let countForFourTeen = 2;
let countForFourTeenOne = 4;
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 7; j++) {
    if (j < countForFourTeen || j > countForFourTeenOne) {
      countFourTeen += "&nbsp;";
    } else {
      countFourTeen += "* ";
    }
  }
  countForFourTeenOne--;
  countForFourTeen--;

  countFourTeen += `<br>`;
}

answeFourTeen.innerHTML += countFourTeen;

//Task_15. С помощью вложенных циклов и символа * нарисуйте:
//    *
//    **
//    ***
//    **
//    *
let answeFiveTeen = document.querySelector(".out-15");
let countFiveTeen = "";
let countForFiveTeen = 2;
let countForFiveTeenOne = 4;
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 3; j++) {
    if (j < countForFiveTeen || j > countForFiveTeenOne) {
      countFiveTeen += "&#10;";
    } else {
      countFiveTeen += "* ";
    }
  }
  countForFiveTeenOne--;
  countForFiveTeen--;

  countFiveTeen += `<br>`;
}

answeFiveTeen.innerHTML += countFiveTeen;

//Task_16. С помощью вложенных циклов и символа * нарисуйте:
// ******
// *    *
// *    *
// *    *
// ******
// let answeSixTeen = document.querySelector(".out-16");
// let countSixTeen = "";
// let countForSixTeen = 1;
// let countForSixTeenOne = 4;
// for (let i = 0; i < 5; i++) {
//   countSixTeen += "% ";
//   for (let j = 0; j < 11; j++) {
//     countSixTeen += "# ";
//     for (let k = 0; k > 6; k++) {
//       countSixTeen += "$ ";
//     }
//   }
//   countSixTeen += `<br>`;
// }

// answeSixTeen.innerHTML += countSixTeen;

//Task_17. С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1
let answeSevenTeen = document.querySelector(".out-17");
let countSevenTeen = "";
for (let i = 5; i > 0; i--) {
  for (let j = i; j > 0; j--) {
    countSevenTeen += j;
  }
  countSevenTeen += `<br>`;
}

answeSevenTeen.innerHTML += countSevenTeen;

//Task_18. С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
//           1
//         2 1
//       3 2 1
//     4 3 2 1
//   5 4 3 2 1
let answeEighTeen = document.querySelector(".out-18");
let countEighTeen = "";
let countEighTeenOne = 2;
for (let i = 5; i > 0; i--) {
  for (let j = 5; j > 0; j--) {
    if (countEighTeenOne > j) {
      countEighTeen += j + " ";
    } else {
      countEighTeen += "&nbsp;&nbsp;&nbsp;";
    }
  }
  countEighTeenOne++;
  countEighTeen += `<br>`;
}

answeEighTeen.innerHTML += countEighTeen;

//Task_19. С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
// X X X X 1
// X X X 2 1
// X X 3 2 1
// X 4 3 2 1
// 5 4 3 2 1
let answNineTeen = document.querySelector(".out-19");
let counNineTeen = "";
let counNineTeenOne = 2;
for (let i = 5; i > 0; i--) {
  for (let j = 5; j > 0; j--) {
    if (counNineTeenOne > j) {
      counNineTeen += j + " ";
    } else {
      counNineTeen += "X";
    }
  }
  counNineTeenOne++;
  counNineTeen += `<br>`;
}

answNineTeen.innerHTML += counNineTeen;

//Task_20. С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
//   1
//   2  2
//   3  3  3
//   4  4  4  4
//   5  5  5  5  5
let answTwenTy = document.querySelector(".out-20");
let counTwenTy = "";
let counTwenTyOne = 4;
for (let i = 1; i < 6; i++) {
  for (let j = 5; j > 0; j--) {
    if (counTwenTyOne < j) {
      counTwenTy += i + " ";
    } else {
      counTwenTy += " ";
    }
  }
  counTwenTyOne--;
  counTwenTy += `<br>`;
}

answTwenTy.innerHTML += counTwenTy;

//Task_21. С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла (четные заменены на X):
//   5
//   X  X
//   3  3  3
//   X  X  X  X
//   1  1  1  1  1
let answTwenTyTwo = document.querySelector(".out-21");
let counTwenTyTwo = "";
let counTwenTyTwoOne = 5;
for (let i = 5; i > 0; i--) {
  for (let j = 1; j < 6; j++) {
    if (counTwenTyTwoOne > j) {
      counTwenTyTwo += " ";
    } else {
      if (i % 2 == 0) {
        counTwenTyTwo += "X ";
      } else {
        counTwenTyTwo += i + " ";
      }
    }
  }
  counTwenTyTwoOne--;
  counTwenTyTwo += `<br>`;
}

answTwenTyTwo.innerHTML += counTwenTyTwo;

//Task_22. С помощью вложенных циклов и символа * нарисуйте:
//   *****
//  *******
// *********

//Task_23. С помощью вложенных циклов и символа * нарисуйте:
//   **
//  ****
// ******
//  ****
//   **
