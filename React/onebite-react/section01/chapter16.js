// 1. 상수 객체 : 상수에 저장해놓은 객체
const animal = {
  type: "고양이",
  name: "간지",
  color: "black",
};

//animal = {a: 1};    // animal에 또 다른 객체를 생성해서 할당하는 건 오류남.

// 이건 가능
animal.age = 2; // 새로운 프로퍼티 추가
animal.name = "까망이"; // 프로퍼티 수정
delete animal.color; // 프로퍼티 삭제

console.log(animal);

// 2. 메서드
// -> 값이 함수인 프로퍼티를말함

const person = {
  name: "익명명",
  // 메서드 선언
  sayHi() {
    console.log("안녕!");
  },
};

person.sayHi(); // 안녕!
person["sayHi"](); // 안녕!
