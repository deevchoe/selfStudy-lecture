// 5가지 요소 순회 및 탐색 메소드
// 1. forEach
// 배열의 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메소드
let arr1 = [1, 2, 3];
arr1.forEach(function (item, idx, arr) {
  console.log(idx, item * 2);
});
// 콜백함수를 넣어주면됨.
// 그러면 forEach 메소드가 배열의 요소들을 마치 반복문처럼 순회하면서 매 반복마다 콜백함수를 호출하고 매개변수로 현재 요소의 값과 현재 반복 카운트와 전체 배열의 값을 전달해준다.
// 그렇기 때문에 콜백 함수는 배열의 갯수만큼 호출이 될 것이고 그러면 총 3회 호출이 되겠지. 매번 호출 될 때마다 매개변수로는 첫번째 호출될때는 item의 1, idx에는 반복 카운트니까 0, arr에는 똑같은게 계속 들어올 것.   2, 1, 똑같은 값    3, 2, 똑같은 값

// forEach 메소드를 이용해서 arr의 모든 값에 곱하기 2를 해서 배열에 넣어보도록 하자~
let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

console.log(doubledArr); // 2, 4, 6

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 그런 메소드
let arr2 = [1, 2, 3];
let isIncludes = arr2.includes(3); // 이 배열에 3이라는 값이 있나~
console.log(isIncludes); // true.    없다면 false를 반환

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메소드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2); // 2라는 값이 어디있는지를 찾아서 그 요소의 "인덱스"를 반환하게 된다.
console.log(index); // 1

// 배열에 찾으려는 값이 여러 개 존재한다면 indexOf는 배열의 맨 앞에부터 탐색을 시작하기 때문에 가장 첫번째로 찾아낸 2 요소를 반환하게 된다.
arr3 = [2, 2, 2];
index = arr3.indexOf(2);
console.log(index); // 결과 값 0 출력.

// 존재하지 않는 값의 인덱스를 찾아달라고 하면 존재하지 않는다는 의미로 -1을 반환하게 된다.
index = arr3.indexOf(20);
console.log(index); // -1

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런 특정 요소의 인덱스(위치)를 반환하는 메소드
let arr4 = [1, 2, 3];
// const findedIndex = arr4.findIndex((item) => {
//   // 배열의 요소를 item이라는 매개변수로 받아서 조건문으로 item의 값이 2와 같을 때 return true;
//   // arr4 배열의 요소들을 순회하면서 가장 처음으로 조건문을 만족시키는 요소의 위치를 찾아서 그 인덱스를 반환해준다.
//   if (item === 2) return true;
// }); // 콜백함수를 만족하는 요소를 배열에서 찾아서 그 인덱스를 반환해주게 된다. 콜백함수를 만족한다는게 무슨 의미냐면 콜백함수가 참을 반환한다는 얘기이다.
// console.log(findedIndex); // 1

// const findedIndex = arr4.findIndex((item) => {
//   if (item % 2 !== 0) return true;
// });
// console.log(findedIndex); // 0
// findIndex를 이용하면 콜백함수를 통해서 특정 조건을 만족하는 그런 요소의 위치를 배열에서 찾아내는 게 가능한데 참고로 화살표 함수를 간결하게 바꾸는 것도 가능하다.
// const findedIndex = arr4.findIndex((item) => item % 2 !== 0);
// console.log(findedIndex);   // 0

const findedIndex = arr4.findIndex((item) => item === 999);
console.log(findedIndex); // -1

// findIndex가 존재하는 이유는
// indexOf라는 메소드는 배열에 원시타입의 값이 들어있을 때가 아니라 객체 타입의 값들이 저장된 배열에서는 정확한 요소의 위치를 찾아낼 수 없기 때문!
let objectArr = [{ name: "익명명" }, { name: "홍길동" }];
console.log(objectArr.indexOf({ name: "익명명" })); // -1이 출력된다. 못찾아! 왜냐면 indexOf는 기본적으로 얕은 비교로 동작하기 때문!!
// 얕은 비교가 뭐야 === 동등 비교 연산자를 비교한다는 것. 그런데 이런 객체 값들은 참조값을 기준으로 비교가 되기 때문에 프로퍼티를 기준으로는 비교가 이루어지지 않는다. 그렇기 때문에 이러한 indexOf로는 배열에서 특정 객체 값이 존재하는지는 찾아낼 수 없다.
// 그렇기 때문에 이럴 때 바로 findIndex를 이용해야 하는 것.
console.log(objectArr.findIndex((item) => item.name === "익명명")); // 0   위치 찾아냈지롱

// indexOf라는 메소드는 특정 값을 배열에서 찾을 때 무조건 얕은 비교로만 진행하기 때문에 이러한 객체값은 찾지 못하는 반면
// findIndex는 콜백함수를 이용해서 우리가 직접 특정 프로퍼티의 값을 기준으로 비교시킬 수가 있기 때문에 이렇게 복잡한 객체 값도 조건식만 잘 만들어주면 쉽게 찾아낼 수 있다는 장점이 있다.

// 단순한 원시타입의 값을 찾을 때는 indexOf를 쓰면 되고
// 복잡한 객체 타입의 값을 찾을 때는 findIndex를 쓰면 좋다~

// 5. find
// findIndex 메소드와 굉장히 유사.
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr5 = [{ name: "익명명" }, { name: "홍길동" }];

const finded = arr5.find((item) => item.name === "익명명"); // arr5 배열에서 이 조건을 만족하는 요소를 찾아서 인덱스를 반환하는게 아니라 그 요소 자체를 반환
console.log(finded); // 익명명
