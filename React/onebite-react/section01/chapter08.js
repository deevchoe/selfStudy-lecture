// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null이나 undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // 양 쪽의 값들 중에 null이나 undefined가 아닌 값을 찾아냄
console.log(var4); // 10

let var5 = var1 ?? var3;
console.log(var5); // 20

let var6 = var2 ?? var3; // 둘 다 null이나 undefined가 아니면 맨 처음에 적힌 var2의 값이 반환됨
console.log(var6); // 10

let userName = null;
let userNickName = "none";

let displayName = userName ?? userNickName; // userName이 없다면 "none"이 저장될 것이고 userName이 있다면 "익명"이 저장될 것이다~
console.log(displayName); // userName이 null 이기 때문에 닉네임이 none 출력

// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자

// 자바스크립트는 변수를 선언하면서 숫자값으로 변수를 초기화했다하더라도
let var7 = 1;
// 해당 변수에 다른 타입의 값을 저장하는게 가능하다.
var7 = "hello";
// 그래서 변수의 타입이 고정되어 있지 않다!

let t1 = typeof var7;
console.log(t1); // string

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환
let var8 = 10;

// 요구사항 : 변수 res에 var8의 값이 짝수면 "짝", 홀수면 "홀"을...
let res = var8 % 2 == 0 ? "짝수" : "홀수";
console.log(res);
