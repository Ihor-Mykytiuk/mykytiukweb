// 1.1
const task1_1 = document.getElementById("task1-1__submit");
function reverseNums(nums) {
    const arr = nums.split(" ");
    const reversedNums = arr.reverse();
    return reversedNums.join(" ");
  }
if (task1_1) {
  task1_1.onclick = function () {
   const nums = document.getElementById("task1-1__input").value;
    document.getElementById("task1-1__result").textContent =
      reverseNums(nums);
  };
}
// 1.2
const task1_2 = document.getElementById("task1-2__submit");
function no_zeros(arr) {
  return arr.replace(/0/g, "");
}
if (task1_2) {
  task1_2.onclick = function () {
    const nums = document.getElementById("task1-2__input").value;
    document.getElementById("task1-2__result").textContent = no_zeros(nums);
  };
}
// 1.3
const task1_3 = document.getElementById("task1-3__submit");
function reverser(string) {
  let arr = string.split("");
  arr = arr.reverse();
  string = arr.join("");
  return string;
}
if (task1_3) {
  task1_3.onclick = function () {
    const string = document.getElementById("task1-3__input").value;
    document.getElementById("task1-3__result").textContent =
      reverser(string);
  };
}
// 1.4
const task1_4 = document.getElementById("task1-4__submit");  
function replace(string = "Я не люблю морозиво") {
  let arr = string.split(" ");
  let temp = arr[1];
  arr[1] = arr[2];
  arr[2] = temp;
  string = arr.join(",");
  return string;
}
if (task1_4) {
  task1_4.onclick = function () {
    document.getElementById("task1-4__result").textContent = replace();
  };
}
// 2.1
const task2_1 = document.getElementById("task2-1__submit");
function stringsLength(string1, string2) {
  if (string1.length > string2.length) {
    return 1;
  } else if (string1.length < string2.length) {
    return -1;
  } else {
    return 0;
  }
}
if (task2_1) {
  task2_1.onclick = function () {
    let string1 = document.getElementById("task2-1__input1").value;
    let string2 = document.getElementById("task2-1__input2").value;
    document.getElementById("task2-1__result").textContent = stringsLength(
      string1,
      string2
    );
    сonsole.log(stringsLength(string1, string2));
  };
}
// 2.2
const task2_2 = document.getElementById("task2-2__submit");
function charsString(string, char) {
  let regex = new RegExp(char, "g");
  let matchAll = string.matchAll(regex);
  matchAll = Array.from(matchAll);
  let indexes = matchAll.map((match) => match.index);
  return [indexes, matchAll.length];
}
if (task2_2) {
  task2_2.onclick = function () {
    let string = document.getElementById("task2-2__input").value;
    let char = document.getElementById("task2-2__char").value;
    let result = charsString(string, char);
    document.getElementById("task2-2__result1").textContent = result[0];
    document.getElementById("task2-2__result2").textContent = result[1];
  };
}
// 2.3
const task2_3 = document.getElementById("task2-3__submit");
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
if (task2_3) {
  task2_3.onclick = function () {
    let string = document.getElementById("task2-3__input").value;
    document.getElementById("task2-3__result").textContent =
      capitalize(string);
  };
}
// 2.4
const task2_4 = document.getElementById("task2-4__submit");
function vowelLetters(string) {
  let regex = /[aeiouy]/g;
  let match = string.match(regex);
  return match.length;
}
if (task2_4) {
  task2_4.onclick = function () {
    let string = document.getElementById("task2-4__input").value;
    document.getElementById("task2-4__result").textContent =
      vowelLetters(string);
  };
}
// 2.5
const task2_5 = document.getElementById("task2-5__submit");
function spamCheck(string) {
  let regex = /(100% безкоштовно|збільшення продажів|тільки сьогодні|не видаляйте)/i;
  return regex.test(string);
}
if (task2_5) {
  task2_5.onclick = function () {
    let string = document.getElementById("task2-5__input").value;
    document.getElementById("task2-5__result").textContent =
      spamCheck(string);
  };
}
// 2.6
const task2_6 = document.getElementById("task2-6__submit");
function truncate(string, len) {
  if (string.length > len) {
    return string.slice(0, len - 3) + "...";
  } else {
    return string;
  }
}
if (task2_6) {
  task2_6.onclick = function () {
    let string = document.getElementById("task2-6__input").value;
    let len = document.getElementById("task2-6__len").value;
    document.getElementById("task2-6__result").textContent = truncate(
      string,
      len
    );
  };
}
// 3.1
const task3_1 = document.getElementById("task3-1__submit");
function toCamelCase(variable) {
  let regex = /_[a-z]/g;
  let match = variable.match(regex);
  for (let i = 0; i < match.length; i++) {
    variable = variable.replace(
      match[i],
      match[i].charAt(1).toUpperCase()
    );
  }
    return variable;
}
if (task3_1) {
  task3_1.onclick = function () {
    let variable = document.getElementById("task3-1__input").value;
    document.getElementById("task3-1__result").innerHTML =
      toCamelCase(variable);
  };
}
// 3.2
const task3_2 = document.getElementById("task3-2__submit");
function toSnakeCase(variable) {
  let regex = /[A-Z]/g;
  let match = variable.match(regex);
  for (let i = 0; i < match.length; i++) {
    variable = variable.replace(match[i], "_" + match[i].toLowerCase());
  }
  return variable;
}
if (task3_2) {
  task3_2.onclick = function () {
    let variable = document.getElementById("task3-2__input").value;
    document.getElementById("task3-2__result").innerHTML =
      toSnakeCase(variable);
  };
}
// 3.3
const task3_3 = document.getElementById("task3-3__submit");
function changeDataFormat(text) {
  let regex = /(\d{4})\/(\d{2})\/(\d{2})/g;
  let match = text.match(regex);
  for (let i = 0; i < match.length; i++) {
    let date = match[i].split("/");
    date = date.reverse();
    date = date.join("/");
    text = text.replace(match[i], date);
  }
  return text;
}
if (task3_3) {
  task3_3.onclick = function () {
    let text = document.getElementById("task3-3__input").value;
    document.getElementById("task3-3__result").innerHTML =
      changeDataFormat(text);
  };
}