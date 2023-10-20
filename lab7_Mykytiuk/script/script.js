// 1.1
function reverseNums(nums) {
    const arr = nums.split(/\d/g);
    const reversedNums = arr.reverse();
    return reversedNums.join(/\d/g);
}
// 1.2
function no_zeros(arr) {
    arr.replace(/0/g, '');
    return arr;
}
// 1.3
function reverser(string) {

}
// 1.4
function replace(string="Я не люблю морозиво") {    
    let arr = string.split(' ');
    let temp = arr[1];
    arr[1] = arr[2];
    arr[2] = temp;
    string = arr.join(',');
    return string;
}
alert(replace());

// 2.1 
function stringsLength(string1, string2) {
    if (string1.length > string2.length) {
        return 1;
    } else if (string1.length < string2.length) {
        return -1;
    } else {
        return 0;
    }
}
// 2.2
function charsString(string, char) {
    let regex = new RegExp(char, 'g');
    let matchAll = string.matchAll(regex);
    matchAll = Array.from(matchAll);
    let indexes = matchAll.map(match => match.index);
    return [indexes, matchAll.length];
}
// 2.3 
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
// 2.4
function vowelLetters(string) {
    let regex = /[aeiouy]/g;
    let match = string.match(regex);
    return match.length;
}
// 2.5
function spamCheck(string) {
    let regex = /(100% безкоштовно|збільшення продажів|тільки сьогодні|не видаляйте)/i;
    return regex.test(string);
}
// 2.6
function truncate(string, len) {
    if (string.length > len) {
        return string.slice(0, len - 3) + '...';
    } else {
        return string;
    }
}
// 3.1
function toCamelCase(variable) {
    let regex = /[_][a-z]/g;
    let match = variable.match(regex);
    for (let i = 0; i < match.length; i++) {
        variable = variable.replace(match[i], match[i].charAt(1).toUpperCase());
    }
    return variable;
}
// 3.2
function toSnakeCase(variable) {
    let regex = /[A-Z]/g;
    let match = variable.match(regex);
    for (let i = 0; i < match.length; i++) {
        variable = variable.replace(match[i], '_' + match[i].toLowerCase());
    }
    return variable;
}
// 3.3
function changeDataFormat(text) {
    let regex = /(\d{4})\/(\d{2})\/(\d{2})/g;
    let match = text.match(regex);
    for (let i = 0; i < match.length; i++) {
        let date = match[i].split('/');
        date = date.reverse();
        date = date.join('/');
        text = text.replace(match[i], date);
    }
    return text;
}