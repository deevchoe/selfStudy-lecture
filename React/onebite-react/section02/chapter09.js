// 5가지 배열 변형 메소드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
let arr1 = [
  { name: "홍길동", hobby: "코딩" },
  { name: "고길동", hobby: "코딩" },
  { name: "신길동", hobby: "짬뽕" },
];

// const codingPeople = arr1.filter((item) => {
//   if (item.hobby === "코딩") return true;
// }); // filter 메소드는 find나 findIndex 메소드처럼 콜백함수를 이용해서 배열의 모든 요소들을 순회하면서 조건에 만족하는 값들만 새로운 배열로 반환해주는 역할을 한다.

// 함축 버전
const codingPeople = arr1.filter((item) => item.hobby === "코딩");
console.log(codingPeople);
// filter 메소드는 참고로 우리가 웹서비스를 개발할 때 특정 조건에 의해서 검색 시키는 기능이나 카테고리별 필터 같은 기능을 만드는 데 거의 필수적으로 사용.

// 2. map
// 프론트엔드 분야에서 뗄레애 뗄 수 없을 정도로 자주 활용되는 메소드이다.
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환해주는 역할을 하는 함수이다.
let arr2 = [1, 2, 3];
// 매개변수로 현재 요소, 반복카운트, 원본배열을 받는다. 참고로 이렇게 매개변수를 전달받는건 filter도 똑같다.
const mapResult = arr2.map((item, idx, arr) => {
  console.log(idx, item);
  return item * 2; // map 메소드가 콜백함수가 반환한 값들을 다 모아서 새로운 배열로 반환 시켜준다.
});

console.log(mapResult); // 2, 4, 6

let names = arr1.map((item) => item.name); // arr1이라는 배열을 순회하면서 각각 item의 name 프로퍼티의 값들만 모아서 새로운 배열로 map 메소드가 반환을 시켜주게 된다.
console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메소드
let arr3 = ["b", "a", "c"];
arr3.sort();
console.log(arr3); // a b c
// 숫자값으로 이루어진 배열일 땐 sort 메소드가 정상적으로 동작하지 않는다.
// 숫자의 대소기준으로 정렬하고 싶다면 sort 메소드를 호출하면서 비교 기준을 설정하는 콜백함수도 함께 넘겨야 한다.
// 콜백함수에는 두개의 배열 요소를 a와 b로 받아서 두개의 배열 요소를 비교할 때 뭐가 더 크고 뭐가 더 작은 값이라고 판단할건지 이 함수안에 다 설정해줘야 한다.
arr3 = [10, 3, 5];
arr3.sort((a, b) => {
  if (a > b) {
    // b가 a 앞에 와라~
    return 1; // 양수를 반환
  } else if (a < b) {
    // b가 a보다 크다면 그때는 a가 b의 앞에 와라~
    return -1; // 음수를 반환
  } else {
    // 둘이 같은 값이면 0을 반환해서 두 값의 자리를 바꾸지 마라~
    return 0;
  }
});
console.log(arr3); // 3, 5, 10     배열이 오름차순으로 정렬 된걸 볼 수 있다.

// 내림차순 정렬
arr3.sort((a, b) => {
  if (a > b) {
    // a가 b 앞에 와라~
    return -1; // 양수를 반환
  } else if (a < b) {
    // b가 a 앞에 와라
    return 1; // 음수를 반환
  } else {
    // 둘이 같은 값이면 0을 반환해서 두 값의 자리를 바꾸지 마라~
    return 0;
  }
});
console.log(arr3); // 10, 5, 3

// 4. toSorted
// sort와 동일하게 배열을 사전순으로 정렬하지만 원본 배열을 정렬하는 것이 아닌 정렬된 배열을 새롭게 반환하는 그런 함수이다.
// 정렬된 새로운 배열을 반환하는 메소드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(arr5); // c, a, b
console.log(sorted); // a, b, c

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메소드
let arr6 = ["hi", "im", "choe"];
const joined = arr6.join();
console.log(joined); // hi, im, choe
// 구분자를 바꾸고 싶다면 join("-") 이렇게 hi-im-choe
