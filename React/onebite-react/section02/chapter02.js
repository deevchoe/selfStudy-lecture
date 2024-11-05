function returnFalse() {
  console.log("False 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

// 단락평가 작동 : 첫번째 피연산자의 값 만으로도 연산의 결과를 확정할 수 있다면 두번째 피연산자에는 접근조차 하지 않는다.
console.log(returnFalse() && returnTrue());

// 단락평가 작동 X : 첫번째 피연산자의 값만으로는 && 연산의 결과가 확정이 나지 않기 때문에 두번째 피연산자도 호출
console.log(returnTrue() && returnFalse());

// 단락평가 작동
console.log(returnTrue() || returnFalse());
