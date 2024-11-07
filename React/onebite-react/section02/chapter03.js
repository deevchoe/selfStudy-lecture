// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

// let [one, two, three] = arr;
// console.log(one, two, three);   // 1 2 3

// let [one, two] = arr;
// console.log(one, two); // 1 2

// let [one, two, three, four] = arr;
// console.log(one, two, three, four);     // 1 2 3 undefined

let [one, two, three, four = 4] = arr;
console.log(one, two, three, four); // 1 2 3 4

// 2. 객체의 구조 분해 할당
let person = {
  name: "익명명",
  age: 26,
  hobby: "코딩",
};

// let name = person.name;
// let age = person.age;
// let hobby = person.hobby;

// let { name, age, hobby } = person;
// console.log(name, age, hobby);
// let { name, age, hobby, extra } = person;
// console.log(name, age, hobby, extra);   // 익명명 26 코딩 undefined
// let { name, age, hobby, extra = "hello" } = person;
// console.log(name, age, hobby, extra); // 익명명 26 코딩 hello
let { name, age: myAge, hobby, extra = "hello" } = person; // 변수명 변경 가능
console.log(name, myAge, hobby, extra); // 익명명 26 코딩 hello

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법

const func = (person) => {
  console.log(person.name);
};

const func2 = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person);
func2(person);