// function returnFalse() {
//   console.log("False 함수");
//   return false;
// }

// function returnTrue() {
//   console.log("True 함수");
//   return true;
// }

// // 단락평가 작동 : 첫번째 피연산자의 값 만으로도 연산의 결과를 확정할 수 있다면 두번째 피연산자에는 접근조차 하지 않는다.
// console.log(returnFalse() && returnTrue());

// // 단락평가 작동 X : 첫번째 피연산자의 값만으로는 && 연산의 결과가 확정이 나지 않기 때문에 두번째 피연산자도 호출
// console.log(returnTrue() && returnFalse());

// // 단락평가 작동
// console.log(returnTrue() || returnFalse());

// function returnFalse() {
//   console.log("False 함수");
//   return undefined;
// }

// function returnTrue() {
//   console.log("True 함수");
//   return 10;
// }
// console.log(returnTrue() || returnFalse()); // Truethy한 값 자체인 10이 출력 됨
// // Truethy하거나 Falsy한 값이 사용 된 경우에는 연산의 결과가 truthy하거나 falsy한 그 값 자체가 되어버린다.

// console.log(returnFalse() && returnTrue());// 이 경우에는 두번째 피연산자 접근 안함 첫번째 연산자가 False니까~~ // 출력결과 : False 함수 undefined

// 단락 평가 활용 사례
function printName(person) {
  // if (!person) {
  //   console.log("person에 값이 없음");
  //   return;
  // }
  // console.log(person && person.name); // person 매개변수의 값이 현재 undefined라면 falsy한 값이기 때문에 단락 평가에 의해서 두번째 피연산자인 person.name에는 접근하지 않고 falsy한 값인 undefined 값을 그대로 호출.

  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}
printName(); // person의 값이 없음
printName({ name: "익명명" });

// Truthy || Truthy 의 경우에는 왼쪽 값 출력
// Truthy && Truthy의 경우에는 오른쪽 값 출력
