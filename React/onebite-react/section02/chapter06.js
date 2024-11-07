// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1 배열 인덱스
// -> 반복문과 배열의 인덱스를 이용해서 배열을 순회
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

// 1.2 for of 반복문 : 배열에서만 쓸 수 있음
// -> 오직 배열을 순회하기 위해서 존재하는 특수한 반복문이다.
// 인덱스를 저장하지 않고 배열 안에 있는 값들을 순서대로 순회만 함
for (let item of arr) {
  // of 뒤에 있는 arr 배열의 값을 하나씩 순서대로 꺼내서 변수 item에다가 저장함
  console.log(item);
}

// 2. 객체 순회
let person = {
  name: "익명명",
  age: 26,
  hobby: "코딩",
};

// 2.1 Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
console.log(keys);
for (let i = 0; i < keys.length; i++) {
  console.log(keys[i]);
}

for (let key of keys) {
  const value = person[key];
  console.log(key, value);
}

// 2.2 Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
console.log(values);

for (let value of values) {
  console.log(value);
}

// 2.3 for in : 객체에만 쓸 수 있음
for (let key in person) {
  const value = person[key];
  console.log(key, value);
}
