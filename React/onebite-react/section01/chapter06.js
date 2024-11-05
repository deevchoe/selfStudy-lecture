// 1. 묵시적형변환
// -> 자바스크립트 엔진이 알아서 형변환 하는 것

let num = 10;
let str = "20";

const result = num + str; // 숫자 + 문자
console.log(result); // 1020

// 2. 명시적형변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형변환을 명시    내장함수 : 자바스크립트가 기본적으로 제공하는 함수들을 말함
// -> 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1); // 내장함수 Number 사용
console.log(10 + strToNum1); // strToNum1의 값이 내장함수를 통해 숫자값으로 형변환 되었기 때문에 20이라는 결과가 나옴

let str2 = "10개10개";
let strToNum2 = parseInt(str2);
// parseInt : 숫자값이 아닌 값을 포함하고 있는 문자열도 숫자값으로 변환시켜줌
// 문자열에서 숫자 부분만 읽고, 숫자가 아닌 문자가 나오면 그 뒤는 무시
console.log(strToNum2); // 10

// -> 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);

console.log(numToStr1 + " 입니다.");
