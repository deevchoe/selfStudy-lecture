// 1. 함수 표현식

// 함수 선언문을 이용해 함수 생성
function funcA() {
  console.log("funcA");
}

let varA = funcA;
console.log(varA); // function 자체가 불려짐
varA(); // 이렇게 호출도 가능

// 값으로서 함수 생성
let varB = function funcB() {
  console.log("funcB");
}; // 함수를 만들자마자 변수에 담아버리는 것도 가능
console.log(varB); // function 자체가 불려짐
varB();
//funcB(); // 에러남. 왜? 선언식이 아니야. 선언식이라는 건 funcA처럼 변수의 값으로서 담기지 않은 상태로 유지가 되어야 하는데 funcB는 그냥 값으로써 함수가 생성된거기 때문에 함수의 이름으로는 호출 불가.
// 그래서 아래처럼 이름을 생략해도 전혀 문제가 되지 않는다.
// let varB = function () {
//     console.log("funcB");
//   };
// 이렇게 이름이 없는 함수를 익명 함수라 한다.

// 2. 화살표 함수 : 함수를 이전보다 더 빠르고 간결하게 생성해줄 수 있도록 도와주는 자바스크립트 문법
// let varC = () => {
//   return 1;
// };

// 위처럼 값을 반환하기만 한다면
// let varC = () => 1;    이렇게 써도 된다.     매개변수 아무것도 받지 않고 그냥 1이라는 값을 반환하는 함수가 됨

// 매개변수가 필요하다면?
// let varC = (value) => value + 1;    // 소괄호 안에 매개변수 선언해주고 반환값은 value + 1 이라고 해주고
// console.log(varC(10));// 함수를 호출할 때 인수에다가 10 이라고 전달 해주면 됨~

// 추가적인 작업이 필요하다면 중괄호안에다가~ 수행하고 마지막에 return문을 추가해서 반환해주면 됨
let varC = (value) => {
  console.log(value);
  return value + 1;
};
console.log(varC(10));
