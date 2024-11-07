// 1. Spread 연산
// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
// let arr2 = [4, arr1[0], arr1[1], arr1[2], 5, 6];
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2);

// 객체에서도 쓸 수 있다~
let obj1 = {
  a: 1,
  b: 2,
};
let obj2 = {
  // a:obj1.a,
  // b:obj1.b,
  ...obj1,
  c: 3,
  d: 4,
};

console.log(obj2);

// 함수를 호출할때도 활용할 수 있다~
function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}
funcA(...arr1);

// 정리
// ...배열이름, ...객체이름
// 이런식으로 활용해서 객체나 배열의 값을 매우 간편하고 쉽게 흩뿌려놓을 수가 있기 때문에 이런 부분에서 상당히 용이하다~

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 배개변수
// funcA 함수처럼 여러개의 매개변수를 받아야할ㄸ때 배열 형태로 한방에 여러개의 매개변수를 받아올 수 있도록 하는 문법
// function funcB(one, two, ...rest, four) { // rest 매개 변수 뒤에는 추가적으로 매개변수를 더 선언할수 없다~~ 뒤에 모든 인수들을 다 배열에 저장하는 기능을 하기 때문에 rest 매개변수가 마지막에 오도록 설정하자~~
// function funcB(one, two, ...args) { //앞에 ...만 붙이면 어떤 이름을 쓰든 상관없다.
function funcB(one, two, ...rest) {
  // 매개변수를 저장하는 공간인 소괄호 안에 사용이 되었기 때문에 스프레드 연산자가 아니라 rest 매개변수라는 점을 주의해 줘야 한다. 둘은 엄연히 다른 거니까!
  console.log(one, two);
  console.log(rest); // 배열형태로 모든 매개변수들이 저장되어있는 걸 볼 수 있다.
}
funcB(...arr1);
