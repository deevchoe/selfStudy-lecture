// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // 0n : 아주아주 큰 숫자를 저장하는 값

if (!f1) {
  // 조건식은 falsy한 값에 !를 만났기 때문에 참이 됨
  console.log("falsy");
}

// 2. Truthy 한 값
// -> 7가지 Falsy 한 값들 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t5) {
  console.log("Truthy");
}

// 3. 활용 사례
// function printName(person) {
//   // person이라는 매개변수로 객체 값을 받는다.
//   if (person === undefined || person === null) {
//     console.log("person의 값이 없음");
//     return;
//   }
//   console.log(person.name);
// }
function printName(person) {
  if (!person) {
    // null이나 undefined일때 거짓으로 평가하기 때문에 not 연산자와 함께 쓰면 true가 되면서 내부의 코드를 실행하고 함수를 종료한다.
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

let person; // undefined
printName(person);
